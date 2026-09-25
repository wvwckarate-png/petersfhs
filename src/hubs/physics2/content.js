const STUDY_CONTENT = {
  "9": "<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Physics 2</div>\n  <h1>Thermodynamics</h1>\n  <p class=\"sub\">How heat, temperature, and energy move through matter — starting from what individual particles are actually doing, and building up to everything you'll need for the exam.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 15–18%</span>\n    <span class=\"pill\">6 topics</span>\n    <span class=\"pill\">13 practice problems</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s91\">9.1 Kinetic Theory</a></li>\n    <li><a href=\"#s92\">9.2 Ideal Gas Law</a></li>\n    <li><a href=\"#s93\">9.3 Thermal Energy Transfer</a></li>\n    <li><a href=\"#s94\">9.4 First Law</a></li>\n    <li><a href=\"#s95\">9.5 Experimental Design: Specific Heat &amp; Conductivity</a></li>\n    <li><a href=\"#s96\">9.6 Entropy</a></li>\n    <li><a href=\"#practice\">Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <p class=\"quote\">\"Work each section in order — each one builds on the last.\" — Unit 9</p>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Master This First — The Four-Process Table</span>\n    <p><em>(This is a preview — ΔU, Q, W, and the first law ΔU=Q+W are fully explained with derivations in Section 9.4. Bookmark this box and return to it after finishing that section.)</em></p>\n    <p>Nearly every FRQ and a large share of the multiple choice in this unit comes down to correctly identifying WHICH of the four classic processes you're looking at, then applying its shortcut:</p>\n    <ul style=\"margin:10px 0 0;\">\n      <li><strong>Isochoric</strong> (constant V) → W=0, so ΔU=Q directly.</li>\n      <li><strong>Isothermal</strong> (constant T) → ΔU=0, so W=−Q directly.</li>\n      <li><strong>Isobaric</strong> (constant P) → W=−PΔV, the only case needing an actual multiplication.</li>\n      <li><strong>Adiabatic</strong> (Q=0) → ΔU=W directly.</li>\n    </ul>\n    <p style=\"margin-top:10px;\">Spend three extra seconds naming the process before touching any equation — it tells you which term in ΔU=Q+W is about to disappear.</p>\n  </div>\n\n  <h2 id=\"s91\"><span class=\"num\">9.1</span>Kinetic Theory of Temperature and Pressure</h2>\n  <p>Let's start with the single idea this entire unit is built on, because if you actually get this one, half the unit stops feeling like memorization and starts feeling like common sense: a gas is just an enormous number of particles, flying around in random directions, constantly slamming into each other and into the walls of whatever container they're in. That's it. That's the whole picture. Temperature and pressure aren't two separate mysterious properties you need to keep track of — they're both just different ways of describing that same particle chaos.</p>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>This is the idea that unlocks the whole unit</div>\n    <p>Temperature <strong>IS</strong> average kinetic energy. Not \"related to it.\" Not \"caused by it.\" It literally <strong>is</strong> it. So every time a problem changes the temperature, your first instinct should be to picture the particles physically speeding up or slowing down — not to reach for a formula. Get that reflex built in now, and an enormous number of questions in this unit basically answer themselves.</p>\n  </div>\n\n  <h3>Temperature is average kinetic energy</h3>\n  <p>When you say a gas is \"hot,\" what you actually mean — whether you realize it or not — is that its particles are moving fast, on average. That's what temperature measures.</p>\n  <div class=\"eq\">\n    <div class=\"main\">K<sub>avg</sub> = (3/2) k<sub>B</sub> T</div>\n    <div class=\"sub\">k<sub>B</sub> = 1.38 × 10⁻²³ J/K &nbsp;·&nbsp; T MUST be in kelvin</div>\n  </div>\n  <p>Recall from mechanics that an individual particle's kinetic energy is K = ½mv² — this is the relationship that connects \"K ∝ T\" to \"v ∝ √T\" throughout this unit.</p>\n  <p>You need this one cold: <strong>T here has to be in kelvin, no exceptions.</strong> Not Celsius, not Fahrenheit — kelvin, every single time you touch this formula or anything derived from it. Here's why that's not just an arbitrary rule someone made up: kelvin is the one temperature scale that actually starts at zero particle motion. At 0 K, particles (in the idealized classical sense) stop moving entirely. Celsius' zero point, on the other hand, is just \"where water happens to freeze\" — a completely arbitrary reference that has nothing to do with what the particles are actually doing. Plug Celsius into an equation built around kinetic energy, and you're measuring particle motion using a ruler that doesn't start at zero motion. The math falls apart.</p>\n\n  <h3>Pressure is collisions — nothing more mystical than that</h3>\n  <p>Here's a question worth sitting with for a second: what IS pressure, physically? Not the formula — the actual phenomenon. It's the cumulative force of an absurd number of tiny particle collisions against a surface, spread out over that surface's area. More collisions per second, or harder collisions, means more pressure. Full stop. Once you internalize that, you can reason through pressure changes without memorizing anything:</p>\n  <ul>\n    <li>Squeeze the gas into a smaller volume (same number of particles, same speed) → particles hit the walls more often → <strong>pressure goes up</strong>.</li>\n    <li>Heat the gas (same volume, same number of particles) → particles move faster and hit both harder and more often → <strong>pressure goes up</strong>.</li>\n    <li>Add more particles (same volume, same temperature) → more collisions happening at any given moment → <strong>pressure goes up</strong>.</li>\n  </ul>\n  <p>You're going to see plenty of questions that ask you to reason through a pressure change qualitatively — no numbers, no equation, just \"does it go up or down.\" Every single time, translate the question back into \"what are the particles physically doing right now\" before you try to answer. It's genuinely the fastest, most reliable way to get these right, faster than trying to remember a rule.</p>\n\n  <h3>The Maxwell-Boltzmann distribution</h3>\n  <p>Here's something worth knowing that trips a lot of students up: not every particle in a gas is moving at the same speed. There's a whole spread of speeds, described by a bell-shaped-ish curve called the Maxwell-Boltzmann distribution — number of particles per unit speed, plotted against speed. When you heat a gas, three things happen to that curve, and you should be able to sketch all three without hesitating:</p>\n  <ul>\n    <li>The peak of the curve shifts to the right — a higher average speed.</li>\n    <li>The curve flattens out and spreads wider — a bigger range of speeds is now represented.</li>\n    <li>The area under the curve stays exactly the same, because you haven't added or removed any particles.</li>\n  </ul>\n<div class=\"diagram\">\n<svg width=\"480\" height=\"320\" viewBox=\"0 0 480 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"50\" y1=\"270\" x2=\"450\" y2=\"270\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"50\" y1=\"270\" x2=\"50\" y2=\"30\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"440\" y=\"292\" font-size=\"13\" fill=\"#333\">speed</text>\n  <text x=\"15\" y=\"35\" font-size=\"13\" fill=\"#333\"># particles</text>\n  <path d=\"M 60 268 Q 130 60 200 268\" fill=\"none\" stroke=\"#3f6ae0\" stroke-width=\"2.5\"/>\n  <text x=\"90\" y=\"90\" font-size=\"12\" fill=\"#3f6ae0\">before heating</text>\n  <path d=\"M 60 268 Q 220 150 380 268\" fill=\"none\" stroke=\"#e0473f\" stroke-width=\"2.5\"/>\n  <text x=\"290\" y=\"175\" font-size=\"12\" fill=\"#e0473f\">after heating</text>\n  <line x1=\"130\" y1=\"270\" x2=\"130\" y2=\"60\" stroke=\"#3f6ae0\" stroke-width=\"1\" stroke-dasharray=\"3,3\" opacity=\"0.5\"/>\n  <line x1=\"220\" y1=\"270\" x2=\"220\" y2=\"150\" stroke=\"#e0473f\" stroke-width=\"1\" stroke-dasharray=\"3,3\" opacity=\"0.5\"/>\n  <text x=\"105\" y=\"285\" font-size=\"10\" fill=\"#555\">peak₁</text>\n  <text x=\"200\" y=\"285\" font-size=\"10\" fill=\"#555\">peak₂</text>\n</svg>\n<p class=\"diagram-caption\">Maxwell-Boltzmann speed distribution before and after heating: the peak shifts to a higher speed, the curve grows shorter and wider, and the total area under each curve stays the same (same number of particles).</p>\n</div>\n\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Students sometimes sketch a taller, narrower peak when a gas heats up, thinking \"more energy means more concentrated.\" It's the opposite — heating <em>spreads</em> the distribution out, since a wider range of speeds becomes energetically accessible. A taller, narrower peak actually describes <em>cooling</em>, not heating.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Reading a Maxwell-Boltzmann Sketch.</strong> A monatomic ideal gas in a sealed, rigid container is heated so its pressure triples (P → 3P) at constant volume. Sketch how the speed distribution changes.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">Here's how I'd think through this one out loud. Constant volume and a fixed particle count mean the only thing actually changing is temperature. Because pressure comes from collision frequency and force per collision, and both particle count and volume are fixed here, the tripled pressure can only be explained by the particles hitting the walls harder and more often — which, as you'll see formalized as PV = NkT in Section 9.2, means temperature has also tripled. Because K<sub>avg</sub> ∝ T, tripling the temperature triples the average kinetic energy — which means average speed goes up too, though <strong>not</strong> by a factor of 3, since K depends on v² rather than v directly. So the new curve peaks at a higher speed, and it's shorter and wider than the original, with the same total area underneath. That last part — same area — is easy to forget under time pressure, but it's just conservation of particle count, and graders do look for it.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s92\"><span class=\"num\">9.2</span>The Ideal Gas Law</h2>\n  <p>The ideal gas law is the workhorse of this entire unit — it ties pressure, volume, temperature, and particle count together into one equation, and you'll reach for it constantly.</p>\n  <div class=\"eq\">\n    <div class=\"main\">PV = nRT = Nk<sub>B</sub> T</div>\n    <div class=\"sub\">R = 8.31 J/(mol·K) &nbsp;·&nbsp; N = n·N₀ &nbsp;·&nbsp; N₀ = 6.02 × 10²³ /mol</div>\n  </div>\n  <p>Two versions of the exact same law — use n (moles) paired with R, or N (individual particles) paired with k<sub>B</sub>. They're connected by N = n·N₀. Whichever version matches the data you're actually given, use that one. Don't overthink which \"flavor\" to use.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Here's something that'll save you a lot of grief: the AP exam almost never asks you to just plug numbers into PV = nRT and solve for a single unknown. It's <strong>almost always</strong> comparing two states of the same gas. So instead of solving from scratch every time, write the law at both states and divide them — whatever's held constant just cancels out.</p>\n  </div>\n\n  <div class=\"eq\">\n    <div class=\"main\">P₁V₁ / T₁ = P₂V₂ / T₂</div>\n    <div class=\"sub\">(when n is constant — cross out anything else that's fixed)</div>\n  </div>\n\n  <p>Constant volume → P and T move together, proportionally. Constant pressure → V and T move together. Constant temperature → P and V are inversely proportional (that's Boyle's Law, if you want the name). <span class=\"highlight\">Correctly identifying what's held fixed is genuinely 80% of solving these problems</span> — the algebra afterward is almost always the easy part.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p><strong>Comparing States.</strong> A monatomic ideal gas in a sealed, rigid, thermally conducting container is heated from State X (pressure P, volume V) to State Y (pressure 3P). Derive an expression for ΔT.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">Notice first that the container is rigid — that's your cue that volume is fixed, so P/T has to be constant: P/T<sub>X</sub> = 3P/T<sub>Y</sub>. From the initial state, T<sub>X</sub> = PV/(nR). Since pressure triples at that same fixed volume, T<sub>Y</sub> works out to 3T<sub>X</sub>. So ΔT = T<sub>Y</sub> − T<sub>X</sub> = 2T<sub>X</sub> = <strong>2PV/(nR)</strong>. The one move that unlocks the whole problem is recognizing that tripling pressure at constant volume triples temperature — everything else is just bookkeeping after that.</div>\n    </details>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Where PV = nRT Actually Comes From</span>\n    <p>It's worth seeing, at least once, that the ideal gas law isn't three separate rules bolted together — Boyle's Law (P₁V₁ = P₂V₂ at constant T), Charles's Law (V₁/T₁ = V₂/T₂ at constant P), and Gay-Lussac's Law (P₁/T₁ = P₂/T₂ at constant V) are all just PV = nRT with one variable frozen. Hold T constant and PV = nRT collapses to Boyle's Law. Hold P constant and it collapses to Charles's Law. Hold V constant and it collapses to Gay-Lussac's Law. You never need to memorize three separate laws — you need one law and the discipline to cross out whatever's held fixed.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2b</span>\n    <p><strong>A Three-Variable Change.</strong> A gas sample starts at 2.0 atm, 4.0 L, and 300 K. It ends at 6.0 L and 450 K. Find the final pressure.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">Nothing is held fixed here — all three variables (P, V, T) are changing at once, so use the full combined gas law rather than one of the three special-case shortcuts: P₁V₁/T₁ = P₂V₂/T₂. Plugging in: (2.0)(4.0)/300 = P₂(6.0)/450. Left side: 8.0/300 ≈ 0.0267. So P₂ = (0.0267)(450)/6.0 ≈ <strong>2.0 atm</strong>. Notice the pressure ended up unchanged — volume increased by a factor of 1.5 (4.0 → 6.0 L) and temperature also increased by a factor of 1.5 (300 → 450 K), and since those two effects on pressure exactly cancel (V increasing tends to lower P, T increasing tends to raise P, by the same ratio here), pressure comes back to where it started. This is a good problem for building the habit of setting up the combined law first and letting the algebra tell you what happens, rather than trying to guess the answer from the individual ratios.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s93\"><span class=\"num\">9.3</span>Thermal Energy Transfer and Equilibrium</h2>\n  <p>Put two objects at different temperatures in contact with each other, and here's what always happens: they exchange energy until they land on the same temperature — that end state is called thermal equilibrium. Energy transferred purely because of a temperature difference has a name, too: heat, symbol Q.</p>\n\n  <h3>Conduction: the rate of heat transfer</h3>\n  <div class=\"eq\"><div class=\"main\">Q/Δt = kAΔT / L</div><div class=\"sub\">k = thermal conductivity · A = area · L = thickness</div></div>\n  <p>Notice this is a <strong>rate</strong> equation — it tells you energy per second, not total energy transferred. A thicker material, or a less conductive one, moves heat more slowly. Makes intuitive sense: more material for the heat to fight through means it gets through more slowly.</p>\n\n  <h3>Calorimetry and specific heat</h3>\n  <p>Specific heat capacity, c, tells you how much energy it takes to raise a given mass of some substance by one degree. It's a property of the material itself. Water, notably, has a really high specific heat — which is exactly why it resists changing temperature and gets used constantly as a coolant or a temperature-moderating liquid in real experiments (e.g., car radiators, thermal mass in climate systems). Note this is a different property from thermal conductivity: water is actually a relatively good conductor of heat compared to true insulating materials like foam or still air.</p>\n  <div class=\"eq\"><div class=\"main\">Q = mcΔT</div></div>\n  <p>When you combine two objects at different starting temperatures inside an insulated system, energy lost by the hotter one has to equal energy gained by the colder one — that's just conservation of energy, nothing sneaky about it:</p>\n  <div class=\"eq\"><div class=\"main\">m<sub>hot</sub>·c<sub>hot</sub>·|ΔT<sub>hot</sub>| = m<sub>cold</sub>·c<sub>cold</sub>·|ΔT<sub>cold</sub>|</div></div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Here's a mistake I see constantly: assuming the two objects end up experiencing the SAME temperature change. They don't — unless mc happens to be equal for both, which is rare. What's actually equal is the energy Q, not the temperature change. If one object has a smaller mc than the other, it's going to swing through a bigger |ΔT| to make up the difference. Keep that distinction sharp: <strong>same energy exchanged, different temperature swings.</strong></p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p><strong>Thermal Conductivity from Data.</strong> A liquid-filled container wrapped in a known-thickness, known-area material sits inside a heated gas chamber. Given a table of gas temp, liquid temp, and Q/Δt, find the wrap's thermal conductivity k graphically.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">The move here is recognizing that Q/Δt = kAΔT/L is secretly a straight-line equation if you plot the right two things. Rearrange it: plot Q/Δt (vertical) against ΔT = T<sub>gas</sub> − T<sub>liquid</sub> (horizontal). It's linear, passes right through the origin, and its slope equals kA/L. Read the slope off your best-fit line, then solve k = slope × L/A. This \"which variables make a straight line\" instinct shows up constantly across nearly every unit's experimental-design FRQs — worth internalizing here, since you'll lean on it again and again.</div>\n    </details>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p><strong>Mixed Calorimetry.</strong> A 200 g block of aluminum (c = 0.90 J/(g·°C)) at 90°C drops into 150 g of water (c = 4.18 J/(g·°C)) at 20°C, insulated. Find the equilibrium temperature.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">200(0.90)(90 − T<sub>f</sub>) = 150(4.18)(T<sub>f</sub> − 20) → 180(90 − T<sub>f</sub>) = 627(T<sub>f</sub> − 20) → 16200 − 180T<sub>f</sub> = 627T<sub>f</sub> − 12540 → 28740 = 807T<sub>f</sub> → <strong>T<sub>f</sub> ≈ 35.6°C</strong>. Take a second to notice WHERE that final temperature landed — much closer to water's starting point than aluminum's. That's not a coincidence. Water's huge mc value means it barely budges compared to aluminum, which happily swings through a big temperature change for the same amount of energy. This is exactly the \"same energy, different swings\" idea from the trap box above, showing up in real numbers.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s94\"><span class=\"num\">9.4</span>The First Law of Thermodynamics</h2>\n  <p>Here's the thing about the first law that a lot of students miss: it's not really a \"thermodynamics formula\" you need to memorize as its own separate fact. It's just conservation of energy, applied to a gas. That's genuinely the whole idea.</p>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>Don't skim past this one</div>\n    <p>ΔU = Q + W is not a formula to memorize — it's \"energy in equals energy out,\" with careful bookkeeping about which direction each term flows. If a gas's internal energy changes, it can ONLY be because heat moved in or out, or work was done on or by the gas. There is no third option, no hidden term, nothing else it could be. Once that clicks, every sign-convention headache in this section gets a lot less scary.</p>\n  </div>\n\n  <div class=\"eq\"><div class=\"main\">ΔU = Q + W</div></div>\n  <p>Sign conventions matter enormously here, and the AP reference sheet is explicit about its convention: W is defined as work done <strong>ON</strong> the system. So:</p>\n  <ul>\n    <li>Q is positive when heat flows INTO the gas; negative when heat flows out.</li>\n    <li>W is positive when work is done ON the gas (something compresses it); negative when the gas does work on its surroundings (it expands).</li>\n    <li>For a gas expanding at constant pressure, W = −PΔV — notice the negative sign. That's consistent with expansion meaning the gas is doing work on the outside world, which reads as negative work done ON the gas.</li>\n  </ul>\n<div class=\"diagram\">\n<svg width=\"480\" height=\"360\" viewBox=\"0 0 480 360\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"60\" y1=\"300\" x2=\"440\" y2=\"300\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"60\" y1=\"300\" x2=\"60\" y2=\"30\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"450\" y=\"305\" font-size=\"14\" fill=\"#333\">V</text>\n  <text x=\"35\" y=\"30\" font-size=\"14\" fill=\"#333\">P</text>\n  <circle cx=\"180\" cy=\"180\" r=\"5\" fill=\"#222\"/>\n  <text x=\"188\" y=\"175\" font-size=\"13\" fill=\"#222\">A (P₀, V₀)</text>\n  <line x1=\"180\" y1=\"180\" x2=\"320\" y2=\"180\" stroke=\"#e07a3f\" stroke-width=\"3\"/>\n  <text x=\"330\" y=\"184\" font-size=\"12\" fill=\"#e07a3f\">isobaric (const P)</text>\n  <line x1=\"180\" y1=\"180\" x2=\"180\" y2=\"70\" stroke=\"#3f7ae0\" stroke-width=\"3\"/>\n  <text x=\"186\" y=\"65\" font-size=\"12\" fill=\"#3f7ae0\">isochoric (const V)</text>\n  <path d=\"M 180 180 Q 250 130 340 95\" fill=\"none\" stroke=\"#3fae5a\" stroke-width=\"3\"/>\n  <text x=\"345\" y=\"98\" font-size=\"12\" fill=\"#3fae5a\">isothermal (PV=const)</text>\n  <path d=\"M 180 180 Q 220 110 270 60\" fill=\"none\" stroke=\"#9a3fae\" stroke-width=\"3\"/>\n  <text x=\"275\" y=\"60\" font-size=\"12\" fill=\"#9a3fae\">adiabatic (steeper)</text>\n  <circle cx=\"180\" cy=\"180\" r=\"4\" fill=\"#222\"/>\n</svg>\n<p class=\"diagram-caption\">P-V diagram showing all four classic processes starting from a common state A: isobaric (horizontal), isochoric (vertical), isothermal (hyperbola-shaped curve), and adiabatic (a similar but steeper curve).</p>\n</div>\n\n\n  <h3>Internal energy depends only on temperature (for an ideal gas)</h3>\n  <p>This is a genuinely powerful shortcut, and it's worth memorizing on its own: for an ideal gas, internal energy U depends <em>only</em> on temperature — not pressure, not volume, individually. For a monatomic ideal gas specifically:</p>\n  <div class=\"eq\"><div class=\"main\">U = (3/2) n R T = (3/2) N k<sub>B</sub> T</div></div>\n  <p>Here's why that matters so much in practice: if you know a gas went through a process where temperature didn't change (isothermal), you already know ΔU = 0 — no calculation required, no matter how complicated the rest of the process looks. This shortcut shows up constantly in FRQs asking you to compare or rank ΔU across different processes, and it'll save you real time if you have it ready to go.</p>\n\n  <h3>The four classic processes</h3>\n  <table class=\"formula-table\">\n    <tr><th>Process</th><th>What's held constant</th><th>Key relationship</th><th>Work (W on gas)</th></tr>\n    <tr><td>Isobaric</td><td>Pressure</td><td>V/T constant ratio</td><td>W = −PΔV (nonzero)</td></tr>\n    <tr><td>Isochoric</td><td>Volume</td><td>P/T constant ratio</td><td>W = 0</td></tr>\n    <tr><td>Isothermal</td><td>Temperature</td><td>PV constant</td><td>ΔU = 0, so W = −Q</td></tr>\n    <tr><td>Adiabatic</td><td>Heat transfer (Q = 0)</td><td>No exchange with surroundings</td><td>ΔU = W</td></tr>\n  </table>\n  <p>You'll be asked to sketch these on a P-V diagram often enough that it's worth having the shapes memorized cold: isobaric is a horizontal line, isochoric is a vertical line, isothermal is a curve (hyperbola-shaped, following PV = constant), and adiabatic is a similar-looking curve but noticeably steeper at any given point.</p>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>If you've used a chemistry textbook or a different physics course, you may have seen the first law written as ΔU = Q − W instead of ΔU = Q + W. Both are correct physics — they're just using opposite sign conventions for W. The AP Physics 2 exam <strong>always</strong> uses W = work done ON the gas, matching ΔU = Q + W, and that's the only version you should use on this exam. If a formula ever looks like it's giving you the opposite sign from what you expect, check whether you've accidentally mixed in the \"work done BY the gas\" convention from somewhere else — don't let two internally-consistent but opposite conventions bleed into the same calculation.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4b</span>\n    <p><strong>A Full Cycle on a P-V Diagram.</strong> A gas undergoes the cycle A → B → C → A: from A (2.0 atm, 3.0 L) it expands at constant pressure to B (2.0 atm, 6.0 L); then from B it cools at constant volume to C (1.0 atm, 6.0 L); then from C it compresses back to A along a straight diagonal line on the P-V diagram. Find the work done ON the gas for each leg, and the net work done ON the gas over the full cycle.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">Take the legs one at a time, converting atm·L to joules at the end (1 atm·L ≈ 101.3 J).<br><br>\n      <strong>A → B (isobaric, expanding):</strong> W = −PΔV = −(2.0 atm)(6.0 − 3.0 L) = −6.0 atm·L ≈ −608 J. Negative, as expected — the gas is expanding, so it's doing positive work on its surroundings.<br><br>\n      <strong>B → C (isochoric):</strong> ΔV = 0, so W = 0 J exactly. No calculation needed beyond recognizing the process type.<br><br>\n      <strong>C → A (a straight diagonal line, not one of the four named processes):</strong> Work still equals the area under the P-V path for that leg, found geometrically. This leg runs from (6.0 L, 1.0 atm) to (3.0 L, 2.0 atm) — a straight line, so the \"area under the curve\" is a trapezoid: average pressure × ΔV = [(1.0+2.0)/2](3.0 − 6.0) = (1.5)(−3.0) = −4.5 atm·L done <em>by</em> the gas along this segment... but here it's a compression (volume decreasing), so work done ON the gas is positive: W = +4.5 atm·L ≈ +456 J.<br><br>\n      <strong>Net work done ON the gas over the full cycle:</strong> −608 + 0 + 456 = <strong>−152 J</strong> (net negative — the gas did more work on its surroundings during the A→B expansion than was done on it during the C→A compression). This illustrates a useful general shortcut worth remembering going forward: tracing A→B→C→A moves clockwise around the loop on a P-V diagram, and a clockwise loop always means positive net work done <em>by</em> the gas — equivalently, negative net work done <em>on</em> it, exactly what was found here.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s95\"><span class=\"num\">9.5</span>Experimental Design: Specific Heat &amp; Conductivity</h2>\n  <p>This section builds directly on 9.3, but it's worth its own space because \"design an experiment\" questions have a very specific, learnable shape on this exam — once you've internalized the pattern, this becomes some of the easiest FRQ credit available.</p>\n\n  <h3>Designing a specific heat experiment</h3>\n  <p>You'll see some version of this constantly: \"design an experiment to determine the specific heat of an unknown material.\" Here's the reliable structure that works basically every time:</p>\n  <ul>\n    <li>Measure the mass of the unknown sample on a scale.</li>\n    <li>Heat it to a known starting temperature (a boiling water bath is the classic move) and record that temperature.</li>\n    <li>Transfer it quickly into a known mass of water at a known, lower starting temperature, inside an insulated calorimeter.</li>\n    <li>Measure the equilibrium temperature the water and sample settle to.</li>\n    <li>Apply conservation of energy — heat lost by the sample equals heat gained by the water — and solve for c<sub>sample</sub>.</li>\n  </ul>\n  <p>Here's what I'd want you to really absorb: every single experimental-design FRQ in this course rewards the exact same instinct. Name the actual equipment you'd use. Describe specifically what you measure and exactly when. Explain how you'd cut down on uncertainty — multiple trials, a thermometer with fine graduations, minimizing transfer time to reduce heat loss to the air, good insulation. Graders are looking for that level of concrete specificity, not vague gestures at \"doing the experiment carefully.\"</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4c</span>\n    <p><strong>Reading Real Experimental Data.</strong> A student runs the thermal-conductivity experiment from Worked Example 3, varying ΔT and measuring Q/Δt each time, for a wrap with area 0.40 m² and thickness 0.0050 m:</p>\n    <table class=\"formula-table\">\n      <tr><th>ΔT (°C)</th><th>Q/Δt (W)</th></tr>\n      <tr><td>10</td><td>4.1</td></tr>\n      <tr><td>20</td><td>8.0</td></tr>\n      <tr><td>30</td><td>12.2</td></tr>\n      <tr><td>40</td><td>15.9</td></tr>\n    </table>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">First confirm the setup: Q/Δt = kAΔT/L predicts a straight line through the origin if you plot Q/Δt against ΔT, with slope = kA/L. Checking the ratios: 4.1/10 = 0.41, 8.0/20 = 0.40, 12.2/30 ≈ 0.41, 15.9/40 ≈ 0.40 — consistently close to 0.40, confirming the linear relationship holds and giving a best-fit slope of about 0.40 W/°C. Then solve for k: slope = kA/L, so k = slope × L/A = (0.40)(0.0050)/(0.40) = <strong>0.0050 W/(m·K)</strong>. Two things worth noticing: first, real data never falls in an exactly straight line, so \"does the pattern look linear\" is a judgment call, not something with one right answer — the small variation here (0.40 to 0.41) is normal measurement scatter, not a sign the model is wrong. Second, this exact \"collect several (x, y) pairs, confirm linearity, extract the unknown from the slope\" pipeline reappears constantly across AP Physics 2 experimental-design questions — internalizing it here pays off well beyond this one problem.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s96\"><span class=\"num\">9.6</span>Entropy and the Second Law of Thermodynamics</h2>\n  <p>The Second Law of Thermodynamics says the total entropy of an isolated system never decreases over time — left alone, things drift toward disorder, never away from it. Entropy, informally, measures the number of ways a system's particles could be arranged while still looking the same from the outside. More possible arrangements means more entropy.</p>\n\n  <h3>What increases entropy</h3>\n  <ul>\n    <li>Heat flowing from something hot to something cold (and never spontaneously the other way — you've never seen a cold drink spontaneously get colder while warming the room around it, and there's a real physical reason for that).</li>\n    <li>A gas expanding into a larger volume (more possible positions for the particles to occupy).</li>\n    <li>Mixing of substances that used to be kept separate.</li>\n  </ul>\n  <p>On the exam, entropy questions in Physics 2 are almost always conceptual rather than numerical. You'll be asked to explain, in words, why a process is or isn't consistent with the second law, or to compare entropy changes between two scenarios qualitatively. The reasoning almost always comes back to some version of the same idea: heat moving from hot to cold increases entropy; the reverse would need external energy input and simply doesn't happen on its own.</p>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>The second law says the entropy of an <strong>isolated system</strong> never decreases — it does NOT say entropy can never decrease anywhere, for any object, ever. A specific object or subsystem can absolutely lose entropy (water freezing into highly-ordered ice, for instance), as long as it's exchanging energy with its surroundings and the surroundings gain at least as much entropy as the subsystem lost. Whenever you're asked to judge whether a process is consistent with the second law, make sure you're checking the entropy of the whole isolated system — not just the one piece that happens to be getting more ordered.</p>\n  </div>\n\n  <div class=\"formula-summary\">\n    <span class=\"tag-label recap\">Unit 9 Formula Summary</span>\n    <table class=\"formula-table\">\n      <tr><th>Concept</th><th>Formula</th></tr>\n      <tr><td>Average kinetic energy</td><td>K<sub>avg</sub> = (3/2) k<sub>B</sub> T &nbsp;(T in kelvin)</td></tr>\n      <tr><td>Ideal gas law</td><td>PV = nRT = Nk<sub>B</sub>T</td></tr>\n      <tr><td>Comparing two gas states</td><td>P₁V₁/T₁ = P₂V₂/T₂</td></tr>\n      <tr><td>Heat conduction rate</td><td>Q/Δt = kAΔT/L</td></tr>\n      <tr><td>Specific heat</td><td>Q = mcΔT</td></tr>\n      <tr><td>Calorimetry (insulated system)</td><td>m<sub>hot</sub>c<sub>hot</sub>|ΔT<sub>hot</sub>| = m<sub>cold</sub>c<sub>cold</sub>|ΔT<sub>cold</sub>|</td></tr>\n      <tr><td>First law of thermodynamics</td><td>ΔU = Q + W &nbsp;(W = work done ON the gas)</td></tr>\n      <tr><td>Internal energy (monatomic ideal gas)</td><td>U = (3/2)nRT = (3/2)Nk<sub>B</sub>T</td></tr>\n      <tr><td>Isobaric work</td><td>W = −PΔV</td></tr>\n      <tr><td>Isochoric</td><td>W = 0, so ΔU = Q</td></tr>\n      <tr><td>Isothermal</td><td>ΔU = 0, so W = −Q</td></tr>\n      <tr><td>Adiabatic</td><td>Q = 0, so ΔU = W</td></tr>\n    </table>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Explain what temperature and pressure actually mean at the particle level — not just the formulas, the physical picture.</li>\n      <li>Use PV = nRT to compare two states of a gas, correctly identifying what's held constant every time.</li>\n      <li>Set up a calorimetry problem (heat lost = heat gained) and solve for an unknown mass, specific heat, or temperature.</li>\n      <li>Apply ΔU = Q + W with correct sign conventions, and know the W = 0 and ΔU = 0 shortcuts without having to derive them each time.</li>\n      <li>Sketch and interpret P-V diagrams for all four classic processes.</li>\n      <li>Explain a change in entropy conceptually, without needing a calculation.</li>\n    </ul>\n  </div>\n\n  <h2 id=\"practice\"><span class=\"num\">📘</span>Unit 9 Practice Set</h2>\n  <p>Work through every problem before you check the answer key — for the FRQ-style ones especially, write out the physical principle you're starting from before you touch any numbers, exactly like the real exam expects.</p>\n\n  <h3>Conceptual</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>A sealed, rigid container of ideal gas is cooled. Sketch how its Maxwell-Boltzmann speed distribution changes, and explain your reasoning in one sentence.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>Gas A and Gas B are at the same temperature. Gas A's molecules have twice the mass of Gas B's molecules. Compare the average kinetic energies and average speeds of the two gases.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>A gas expands isothermally, absorbing heat Q from its surroundings. State whether ΔU, Q, and W (on the gas) are each positive, negative, or zero.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>Explain, using the second law of thermodynamics, why a spilled cup of hot coffee never spontaneously re-collects the heat it lost to the room and returns to its original temperature.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">5</span><span>Two blocks of the same material but different mass are heated with the same quantity of energy Q. Which block experiences the larger temperature change, and why?</span></div>\n\n  <h3>Numerical</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">6</span><span>A sample of gas occupies 2.0 L at a pressure of 1.5 atm and temperature of 300 K. It is compressed at constant temperature to 0.50 L. Find the new pressure.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">7</span><span>A monatomic ideal gas sample contains 2.5 mol at 400 K. Find its internal energy.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">8</span><span>A gas is held at constant volume while 500 J of heat is added to it. Find ΔU and the work done on the gas.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">9</span><span>A gas expands at a constant pressure of 2.0 × 10⁵ Pa, and its volume increases from 0.010 m³ to 0.025 m³. Find the work done ON the gas.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">10</span><span>A slab of insulation 0.02 m thick and 1.2 m² in area has a thermal conductivity of 0.040 W/(m·K). If one side is at 22°C and the other at 5°C, find the rate of heat conduction through the slab.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">11</span><span>A 0.30 kg block of copper (c = 0.385 J/(g·°C) — convert units carefully) at 95°C is placed in 0.50 kg of water at 15°C in an insulated container. Find the equilibrium temperature.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">12</span><span>A rigid container holds gas at pressure P and temperature T. The gas is heated at constant volume until its pressure is 2.5P. Find the new temperature in terms of T.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">13</span><span>3.0 mol of a monatomic ideal gas undergoes an isobaric process, absorbing 6000 J of heat while its temperature rises by 160 K. Find the work done on the gas during this process. (Hint: find ΔU first using the temperature change, then use the first law to isolate W.)</span></div>\n\n  <h3 style=\"margin-top:30px;\">Answer Key</h3>\n  <div class=\"answer-key\">\n    <details><summary>Question 1</summary><div class=\"a-content\">The distribution shifts left (toward lower speeds) and grows taller/narrower, since cooling lowers average kinetic energy while the total particle count (area under curve) stays fixed.</div></details>\n    <details><summary>Question 2</summary><div class=\"a-content\">Average kinetic energy is the same for both gases, since K<sub>avg</sub> depends only on temperature (K<sub>avg</sub> = (3/2)k<sub>B</sub>T), not on particle mass. Average speed is different: since K = ½mv², the lighter gas (B) must have a higher average speed to have the same kinetic energy as the heavier gas (A).</div></details>\n    <details><summary>Question 3</summary><div class=\"a-content\">ΔU = 0 (isothermal means no temperature change, and internal energy of an ideal gas depends only on temperature). Q is positive (heat absorbed). Since ΔU = Q + W, and ΔU = 0, W (on the gas) = −Q, which is negative — the gas does positive work on its surroundings as it expands.</div></details>\n    <details><summary>Question 4</summary><div class=\"a-content\">Heat flowing spontaneously from hot to cold increases the total entropy of the coffee-plus-room system. The reverse process (heat spontaneously flowing from the now-cooler room back into the coffee) would decrease total entropy, which the second law forbids for an isolated system — so it doesn't happen without external work being done (like a refrigerator).</div></details>\n    <details><summary>Question 5</summary><div class=\"a-content\">From ΔT = Q/(mc), the block with the smaller mass has a smaller denominator (for the same c), so it experiences a larger temperature change for the same energy input.</div></details>\n    <details><summary>Question 6</summary><div class=\"a-content\">Using P₁V₁ = P₂V₂ (Boyle's Law, constant T): (1.5 atm)(2.0 L) = P₂(0.50 L), so P₂ = 6.0 atm.</div></details>\n    <details><summary>Question 7</summary><div class=\"a-content\">U = (3/2)nRT = (3/2)(2.5 mol)(8.31 J/(mol·K))(400 K) ≈ 12,500 J.</div></details>\n    <details><summary>Question 8</summary><div class=\"a-content\">Constant volume means W = 0. From the first law, ΔU = Q + W = 500 J + 0 = 500 J.</div></details>\n    <details><summary>Question 9</summary><div class=\"a-content\">W (on the gas) = −PΔV = −(2.0 × 10⁵ Pa)(0.025 − 0.010 m³) = −(2.0 × 10⁵)(0.015) = −3000 J. The negative sign indicates the gas does 3000 J of work on its surroundings as it expands.</div></details>\n    <details><summary>Question 10</summary><div class=\"a-content\">Q/Δt = kAΔT/L = (0.040)(1.2)(22 − 5) / 0.020 = (0.040)(1.2)(17)/0.020 ≈ 40.8 W.</div></details>\n    <details><summary>Question 11</summary><div class=\"a-content\">Convert copper's specific heat to J/(kg·°C): 0.385 J/(g·°C) = 385 J/(kg·°C). Set heat lost equal to heat gained: (0.30)(385)(95 − T<sub>f</sub>) = (0.50)(4180)(T<sub>f</sub> − 15). This gives 115.5(95 − T<sub>f</sub>) = 2090(T<sub>f</sub> − 15). Expanding: 10972.5 − 115.5T<sub>f</sub> = 2090T<sub>f</sub> − 31350, so 42322.5 = 2205.5T<sub>f</sub>, giving T<sub>f</sub> ≈ 19.2°C.</div></details>\n    <details><summary>Question 12</summary><div class=\"a-content\">At constant volume, P/T is constant, so P/T = 2.5P/T<sub>new</sub>, giving T<sub>new</sub> = 2.5T.</div></details>\n    <details><summary>Question 13</summary><div class=\"a-content\">First find ΔU using the temperature change: ΔU = (3/2)nRΔT = (3/2)(3.0)(8.31)(160) ≈ 5983 J. From the first law, ΔU = Q + W, so W = ΔU − Q = 5983 − 6000 ≈ −17 J. The work on the gas is very slightly negative (the gas does a small amount of positive work on its surroundings), consistent with an isobaric expansion — almost all of the added heat went into raising internal energy, with only a small amount going to expansion work.</div></details>\n  </div>\n\n  <div class=\"footer-nav\">\n    Next up: head to the <strong>Unit 9 QBank</strong> to drill these concepts with practice questions, then move on to <strong>Unit 10 — Electric Force, Field, and Potential</strong>.\n  </div>\n\n</div>\n",
  "10": "<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Physics 2</div>\n  <h1>Electric Force, Field &amp; Potential</h1>\n  <p class=\"sub\">Electric force, field, and potential — the biggest conceptual shift from Physics 1, since charge comes in two signs and changes almost every intuition you built for gravity.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 15–18%</span>\n    <span class=\"pill\">7 topics</span>\n    <span class=\"pill\">14 practice problems</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s101\">10.1 Coulomb's Law</a></li>\n    <li><a href=\"#s102\">10.2 Charging</a></li>\n    <li><a href=\"#s103\">10.3 Electric Fields</a></li>\n    <li><a href=\"#s104\">10.4 Potential Energy</a></li>\n    <li><a href=\"#s105\">10.5 Electric Potential</a></li>\n    <li><a href=\"#s106\">10.6 Capacitors</a></li>\n    <li><a href=\"#s107\">10.7 Conservation</a></li>\n    <li><a href=\"#practice\">Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <p class=\"quote\">\"Force, field, and potential — vector, vector, scalar. Keep them straight and this whole unit clicks.\" — Unit 10</p>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Master This First — Vector, Vector, Scalar</span>\n    <p>Every mistake in this unit traces back to blurring these three together:</p>\n    <ul style=\"margin:10px 0 0;\">\n      <li><strong>Force</strong> (F) — a vector. Depends on the charge actually feeling it.</li>\n      <li><strong>Field</strong> (E) — a vector. A property of space, independent of any test charge. Add multiple sources as VECTORS.</li>\n      <li><strong>Potential</strong> (V) — a scalar. No direction at all. Add multiple sources by simple algebraic addition, sign included — never components, never cancellation by geometry.</li>\n    </ul>\n    <p style=\"margin-top:10px;\">Before adding anything from multiple charges, ask yourself which of these three you're actually computing — the answer changes whether you need angles at all.</p>\n  </div>\n\n  <h2 id=\"s101\"><span class=\"num\">10.1</span>Coulomb's Law</h2>\n  <p>Here's a genuinely useful way to think about this whole unit before we even start: everything you're about to learn is essentially \"gravity, but with a twist.\" You already know the shape of this from Physics 1 — an inverse-square force between two things at a distance. The twist is that charge, unlike mass, comes in two flavors. That single fact — the existence of both positive and negative charge — is what makes this unit feel harder than gravitation, even though the math looks almost identical.</p>\n  <div class=\"eq\">\n    <div class=\"main\">|F<sub>E</sub>| = (1/4πε₀) · |q₁q₂| / r²</div>\n    <div class=\"sub\">k = 1/(4πε₀) = 9.0 × 10⁹ N·m²/C² &nbsp;·&nbsp; ε₀ = 8.85 × 10⁻¹² C²/(N·m²)</div>\n  </div>\n  <p>Like charges repel, opposite charges attract — you know this already, probably from static shocks and balloons stuck to walls. The equation itself only spits out a magnitude, though. Direction always has to come from your own reasoning about the signs, then drawing the force vector along the line connecting the two charges.</p>\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Here's one that catches people constantly: a bigger charge does NOT feel a bigger force from a smaller charge sitting next to it. This one trips people up because it feels wrong at first — surely the \"stronger\" charge exerts more force? But Newton's third law doesn't care about charge magnitude. The force each charge exerts on the other is always exactly equal and opposite, whether you're comparing a −10 μC charge to a −20 μC charge or a −10 μC charge to a −10,000 μC charge. Don't confuse \"produces a stronger field around itself\" with \"feels a stronger force\" — those are two completely different questions.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Combined Scaling.</strong> Two charges +Q each feel a force F at separation r. Each charge is doubled to +2Q and the separation is also doubled to 2r. Find the new force in terms of F.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">Let's walk through this carefully, because it's a great example of a problem designed to punish anyone who only tracks one variable at a time. New force = k(2Q)(2Q)/(2r)² = k(4Q²)/(4r²) = kQ²/r² = <strong>F</strong>, unchanged. Here's what's actually going on: the charge product quadruples (2×2), but r² also quadruples (2² in the denominator) — those two 4s cancel each other out exactly. The lesson to take away isn't really about this specific problem; it's the habit of tracking EVERY variable that's changing simultaneously, not just the one that catches your eye first.</div>\n    </details>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1b</span>\n    <p><strong>Three Charges in a Line.</strong> A charge +Q is fixed at x = 0 and a charge +4Q is fixed at x = 3.0 m. Where on the x-axis (between the two charges) could a third charge be placed so that it feels zero net force?</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">Since both fixed charges are positive, the third charge (whatever its own sign) feels a push from each — for those two pushes to cancel, the equilibrium point has to sit closer to the WEAKER charge (+Q), since a smaller charge only \"wins\" at short range. Let the equilibrium point be a distance d from the +Q charge, so it's (3.0 − d) from the +4Q charge. Setting the force magnitudes equal: kQq/d² = k(4Q)q/(3.0−d)². The k, q, and Q all cancel: 1/d² = 4/(3.0−d)². Cross-multiplying: (3.0−d)² = 4d². Taking the square root of both sides: 3.0 − d = 2d (taking the positive root, since d must be between 0 and 3.0). Solving: 3.0 = 3d, so d = <strong>1.0 m</strong> from the +Q charge (2.0 m from the +4Q charge). Notice this matches the intuition: the equilibrium point sits closer to the smaller charge, at exactly the ratio set by the square roots of the charge magnitudes (√1 : √4 = 1 : 2).</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s102\"><span class=\"num\">10.2</span>The Process of Charging</h2>\n  <p>Objects become charged three distinct ways, and here's the thing — the AP exam expects you to tell these apart with real precision, not just a fuzzy sense of \"something to do with electrons moving around.\"</p>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>Memorize this contrast, not each rule separately</div>\n    <p>Conduction (touching) always leaves the SAME sign as the charging object. Induction (never touching) always leaves the OPPOSITE sign. If you remember just that one contrast — touch equals same, no-touch equals opposite — you can rebuild every specific rule about charging from scratch, even under exam pressure when your memory of the details gets shaky.</p>\n  </div>\n\n  <h3>Friction</h3>\n  <p>Rubbing two different materials transfers electrons from one to the other. One object ends up with a surplus of electrons (negative), the other with a deficit (positive). Total charge is conserved across the whole system — nothing is created or destroyed, just moved.</p>\n  <h3>Conduction (contact)</h3>\n  <p>Touch a charged object to a neutral conductor, and charge flows between them until both reach the same potential. Both end up charged with the <strong>same sign</strong> as the original. If the two conductors are identical in size and shape, reaching the same potential means they also end up with equal charge — so touching two identical conductors together (whether one starts neutral or both start already charged) always splits their <em>total</em> combined charge evenly between them.</p>\n  <h3>Induction</h3>\n  <p>This one takes a bit more visualizing. A charged rod is brought near — never touching — a neutral conductor. The rod's field pushes the conductor's free charges around inside it (this is called polarization) without ever transferring any charge directly. Now, while the rod is still nearby, ground the conductor: charge of the same sign as the rod escapes through that ground wire, repelled away by the rod. Disconnect the ground first, THEN remove the rod, and the conductor is left with a charge <strong>opposite</strong> to the rod.</p>\n<div class=\"diagram\">\n<svg width=\"600\" height=\"220\" viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"30\" y=\"20\" font-size=\"12\" fill=\"#333\" font-weight=\"bold\">1. Rod approaches</text>\n  <circle cx=\"80\" cy=\"90\" r=\"30\" fill=\"#f2f2f2\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text x=\"65\" y=\"130\" font-size=\"10\" fill=\"#333\">neutral</text>\n  <rect x=\"10\" y=\"55\" width=\"14\" height=\"60\" fill=\"#e0473f\"/>\n  <text x=\"2\" y=\"50\" font-size=\"10\" fill=\"#e0473f\">− rod</text>\n\n  <text x=\"180\" y=\"20\" font-size=\"12\" fill=\"#333\" font-weight=\"bold\">2. Polarizes</text>\n  <circle cx=\"230\" cy=\"90\" r=\"30\" fill=\"#f2f2f2\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text x=\"240\" y=\"94\" font-size=\"14\" fill=\"#3f6ae0\">+++</text>\n  <text x=\"205\" y=\"94\" font-size=\"14\" fill=\"#e0473f\">−−−</text>\n  <rect x=\"160\" y=\"55\" width=\"14\" height=\"60\" fill=\"#e0473f\"/>\n\n  <text x=\"330\" y=\"20\" font-size=\"12\" fill=\"#333\" font-weight=\"bold\">3. Grounded</text>\n  <circle cx=\"380\" cy=\"90\" r=\"30\" fill=\"#f2f2f2\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text x=\"390\" y=\"94\" font-size=\"14\" fill=\"#3f6ae0\">+++</text>\n  <line x1=\"410\" y1=\"90\" x2=\"440\" y2=\"90\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line x1=\"440\" y1=\"80\" x2=\"440\" y2=\"100\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"405\" y=\"130\" font-size=\"9\" fill=\"#333\">e⁻ escape</text>\n  <rect x=\"310\" y=\"55\" width=\"14\" height=\"60\" fill=\"#e0473f\"/>\n\n  <text x=\"480\" y=\"20\" font-size=\"12\" fill=\"#333\" font-weight=\"bold\">4. Rod removed</text>\n  <circle cx=\"530\" cy=\"90\" r=\"30\" fill=\"#dbe6ff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text x=\"516\" y=\"94\" font-size=\"14\" fill=\"#3f6ae0\">+ + +</text>\n  <text x=\"495\" y=\"150\" font-size=\"10\" fill=\"#3f6ae0\">final: positive</text>\n</svg>\n<p class=\"diagram-caption\">Charging by induction, step by step: the approaching rod polarizes the conductor, grounding lets like-signed charge escape, and removing the ground (then the rod) leaves the conductor charged opposite to the rod.</p>\n</div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>The ORDER of the last two steps matters completely. You must disconnect the ground <strong>before</strong> removing the rod. If you remove the rod first while the conductor is still grounded, the conductor's excess charge simply flows back out through the ground wire the instant the rod's influence is gone, and the conductor ends up neutral again — the whole procedure \"undoes itself.\" The charge only gets trapped on the conductor if the ground connection is broken first, while the rod is still nearby holding the charge distribution in place.</p>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s103\"><span class=\"num\">10.3</span>Electric Fields</h2>\n  <p>The electric field at a point is defined as the force per unit charge that a small positive \"test charge\" would feel if you placed it there. Here's the subtle but important part: fields exist whether or not a charge actually happens to be present to feel them. The field is a property of the space itself, set up by whatever charges are already there — you're just checking what force a hypothetical test charge would experience.</p>\n  <div class=\"eq\">\n    <div class=\"main\">E = F<sub>E</sub> / q &nbsp;·&nbsp; |E| = (1/4πε₀) · |q| / r²</div>\n  </div>\n  <p>Field vectors point away from positive charges and toward negative charges — literally the direction a positive test charge would get pushed if you dropped it there. When you're dealing with multiple charges, you add the individual field <strong>vectors</strong> together (this is called superposition) — never the forces directly, and never treat this like a scalar sum.</p>\n\n  <h3>Field lines: learning to read the picture</h3>\n  <ul>\n    <li>Lines point in the direction of E at every single point along them.</li>\n    <li>Denser lines mean a stronger field — but keep in mind the falloff is inverse-square, not a simple linear taper.</li>\n    <li>Lines never cross each other. Ever. If a sketch shows crossing lines, something's wrong with it.</li>\n    <li>Lines start on positive charges and end on negative charges.</li>\n  </ul>\n\n  <p>Quick preview before the diagram below, since it uses a term we haven't formally covered yet: <strong>electric potential</strong> (V) is a scalar quantity built from these same charges, and an <strong>equipotential</strong> line is simply a curve where V has the same value everywhere along it. You'll get the full treatment in Section 10.5 — for now, just know that equipotential lines always run perpendicular to field lines, which is why the dashed line below sits exactly where it does.</p>\n<div class=\"diagram\">\n<svg width=\"480\" height=\"320\" viewBox=\"0 0 480 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <circle cx=\"150\" cy=\"160\" r=\"14\" fill=\"#e0473f\"/>\n  <text x=\"145\" y=\"165\" font-size=\"14\" fill=\"#fff\" font-weight=\"bold\">+</text>\n  <circle cx=\"330\" cy=\"160\" r=\"14\" fill=\"#3f6ae0\"/>\n  <text x=\"325\" y=\"165\" font-size=\"14\" fill=\"#fff\" font-weight=\"bold\">−</text>\n  <path d=\"M 164 160 Q 240 90 316 160\" fill=\"none\" stroke=\"#555\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/>\n  <path d=\"M 164 150 Q 240 60 316 150\" fill=\"none\" stroke=\"#555\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/>\n  <path d=\"M 164 170 Q 240 120 316 170\" fill=\"none\" stroke=\"#555\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/>\n  <path d=\"M 164 190 Q 240 250 316 190\" fill=\"none\" stroke=\"#555\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/>\n  <line x1=\"240\" y1=\"60\" x2=\"240\" y2=\"260\" stroke=\"#3fae5a\" stroke-width=\"2\" stroke-dasharray=\"6,4\"/>\n  <text x=\"248\" y=\"275\" font-size=\"12\" fill=\"#3fae5a\">V = 0 equipotential</text>\n  <defs>\n    <marker id=\"arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\">\n      <path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#555\"/>\n    </marker>\n  </defs>\n</svg>\n<p class=\"diagram-caption\">Field lines for a dipole (+Q and −Q), running from the positive to the negative charge. The dashed line is a preview of an idea from Section 10.5: it's a curve of constant electric potential (an \"equipotential\"), and it always runs perpendicular to the field lines.</p>\n</div>\n\n\n  <h3>Special case worth knowing cold: the parallel plate capacitor</h3>\n  <p>Between two oppositely charged parallel plates, ignoring edge effects (per the AP reference sheet's own assumption), the field is uniform everywhere between the plates — same magnitude, same direction, no matter where you are between them.</p>\n  <div class=\"eq\"><div class=\"main\">E = Q / (ε₀A)</div></div>\n<div class=\"diagram\">\n<svg width=\"420\" height=\"260\" viewBox=\"0 0 420 260\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"90\" y=\"40\" width=\"16\" height=\"180\" fill=\"#e0473f\"/>\n  <text x=\"70\" y=\"35\" font-size=\"13\" fill=\"#e0473f\">+ + + + +</text>\n  <rect x=\"310\" y=\"40\" width=\"16\" height=\"180\" fill=\"#3f6ae0\"/>\n  <text x=\"295\" y=\"35\" font-size=\"13\" fill=\"#3f6ae0\">− − − − −</text>\n  <line x1=\"106\" y1=\"70\" x2=\"310\" y2=\"70\" stroke=\"#333\" stroke-width=\"2\" marker-end=\"url(#arrow2)\"/>\n  <line x1=\"106\" y1=\"110\" x2=\"310\" y2=\"110\" stroke=\"#333\" stroke-width=\"2\" marker-end=\"url(#arrow2)\"/>\n  <line x1=\"106\" y1=\"150\" x2=\"310\" y2=\"150\" stroke=\"#333\" stroke-width=\"2\" marker-end=\"url(#arrow2)\"/>\n  <line x1=\"106\" y1=\"190\" x2=\"310\" y2=\"190\" stroke=\"#333\" stroke-width=\"2\" marker-end=\"url(#arrow2)\"/>\n  <text x=\"180\" y=\"240\" font-size=\"13\" fill=\"#333\">E = Q / (ε₀A), uniform between plates</text>\n  <defs>\n    <marker id=\"arrow2\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\">\n      <path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#333\"/>\n    </marker>\n  </defs>\n</svg>\n<p class=\"diagram-caption\">Between two oppositely charged parallel plates, the electric field is uniform in both magnitude and direction, ignoring edge effects.</p>\n</div>\n\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p><strong>Opposite Charges at a Midpoint.</strong> Charges +Q and −Q sit at opposite ends of a rod of length L. Find the field at the midpoint, in terms of k, Q, L.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">Each charge sits L/2 from the midpoint, contributing k·Q/(L/2)² = 4kQ/L² individually. Here's the part that catches people off guard: unlike two LIKE charges (whose fields can partially cancel between them), opposite charges' fields point the <strong>same direction</strong> at the midpoint — straight from + toward −. So instead of subtracting, you add them: total = 2 × 4kQ/L² = <strong>8kQ/L²</strong>. If you're used to thinking \"fields between two charges cancel,\" pause and ask yourself: same sign, or opposite? The answer completely flips your approach.</div>\n    </details>\n  </div>\n\n  <h3>Conductors in electrostatic equilibrium</h3>\n  <p>Once a conductor's charges have finished redistributing and nothing is moving anymore (electrostatic equilibrium), three facts always hold, and they show up constantly in FRQs about charged spheres, shells, and cavities:</p>\n  <ul style=\"margin:10px 0 0;\">\n    <li><strong>E = 0 everywhere inside the conducting material itself.</strong> If there were a field inside, the free charges would keep moving in response to it — equilibrium means they've already rearranged themselves to cancel any internal field.</li>\n    <li><strong>Any excess (net) charge on a conductor sits entirely on its outer surface.</strong> Like charges repel and push each other as far apart as possible, which means as far from each other — and from the interior — as the conductor's shape allows.</li>\n    <li><strong>The entire conductor, including its surface and any hollow interior cavity, is at a single uniform potential.</strong> Since E = 0 inside, moving a test charge anywhere within the conductor (or through empty space inside a cavity it fully encloses) takes zero work, so V can't change from point to point in there.</li>\n  </ul>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Symmetry Shortcut: Equal Charges on a Regular Shape</span>\n    <p>When several equal charges sit at the vertices of a symmetric shape — three equal charges on an equilateral triangle, four equal charges on a square — the net electric field at the exact center is always zero by symmetry. Each charge's field contribution at the center points away from that charge's own vertex, and for equally-spaced equal charges, those contributions are equal in magnitude and arranged symmetrically all the way around, so they cancel completely as vectors. (Their potentials do NOT cancel this way, though — potential is a scalar, so equal same-sign charges at the center always add to a nonzero total, even while their fields cancel.)</p>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s104\"><span class=\"num\">10.4</span>Electric Potential Energy</h2>\n  <p>Electric potential energy U is the energy stored in a system based on how its charges are arranged relative to each other — the direct electric analog of gravitational PE, and honestly, the intuition carries over almost perfectly. Moving a positive charge closer to another positive charge increases U, because you're working against repulsion the whole way, just like lifting a mass against gravity. Moving it closer to a negative charge decreases U, the same way a mass falling toward Earth loses gravitational PE.</p>\n  <div class=\"eq\">\n    <div class=\"main\">ΔU<sub>E</sub> = qΔV &nbsp;·&nbsp; U = (1/4πε₀) · (q₁q₂/r)</div>\n  </div>\n  <p>Here's a shortcut worth internalizing: a charge released from rest always moves in whichever direction decreases the system's PE — exactly like a ball rolling downhill. That lets you answer a lot of \"which way does it move\" questions instantly, without grinding through a force calculation.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Potential Energy Is a Property of the Pair, Not Either Charge Alone</span>\n    <p>It's easy to slip into thinking of potential energy as something one charge \"has,\" the way an object has gravitational PE due to its height. But electric PE genuinely belongs to the pair (or full system) of charges together — a lone charge sitting by itself in empty space has no electric potential energy at all, since U = kq₁q₂/r requires a second charge to even be defined. This matters when a problem asks you to find \"the potential energy of the system\": you're summing over every distinct PAIR of charges, not assigning some individual PE value to each one separately.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2b</span>\n    <p><strong>Assembling a Three-Charge System.</strong> Three charges, each +3.0 μC, are brought from very far apart to the corners of an equilateral triangle with side length 0.50 m. Find the total work required to assemble this configuration.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">The work required to assemble a system of charges from infinite separation equals the total electric potential energy of the final configuration (since PE was zero when they were infinitely far apart, and energy conservation means whatever work went in is now stored as PE). With three charges, there are three distinct pairs, and by symmetry each pair is separated by the same distance (0.50 m, the triangle's side length). Each pair contributes U = kq²/r = (9.0×10⁹)(3.0×10⁻⁶)²/0.50 = (9.0×10⁹)(9.0×10⁻¹²)/0.50 ≈ 0.162 J. Three identical pairs: total work = 3 × 0.162 ≈ <strong>0.486 J</strong>. This is positive, as it should be — assembling three like charges closer together against their mutual repulsion always takes positive work put in from outside, exactly matching the like-charges rule from earlier in this section.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s105\"><span class=\"num\">10.5</span>Electric Potential</h2>\n  <p>Electric potential V is potential energy per unit charge — a <strong>scalar</strong>, with no direction whatsoever. It has the same relationship to field that PE-per-charge has to force.</p>\n  <div class=\"eq\"><div class=\"main\">V = (1/4πε₀) · q/r &nbsp;·&nbsp; |E| = |ΔV/Δr|</div></div>\n  <p>Because V is a scalar, potentials from multiple charges just add algebraically — signs included, no vector components required anywhere. This is genuinely one of the most useful facts in the whole unit, because it makes multi-charge potential problems dramatically simpler than the equivalent field problems. It's also a favorite thing for the AP exam to specifically test, precisely because it's so easy to forget under pressure.</p>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>A really common wrong-answer pattern: treating multiple potentials as if they need vector addition, or somehow thinking two negative potentials \"multiply\" into a positive result. Neither is true. A −10 μC and −20 μC charge at equal distances from a point don't cancel, and they definitely don't multiply — they add as negative numbers, giving an even more negative total. Potential is just arithmetic with signs, nothing fancier.</p>\n  </div>\n\n  <p>One more picture worth locking in: equipotential lines are always <strong>perpendicular</strong> to field lines, at every single point where they cross. This shows up constantly in sketching questions, so it's worth having as an instant, automatic fact rather than something you re-derive each time. Moving along an equipotential line takes zero work, since ΔV = 0 along it by definition.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p><strong>Potential from Three Charges.</strong> Charges of +4.0 μC, −2.0 μC, and +1.0 μC sit at distances of 0.20 m, 0.40 m, and 0.10 m respectively from point P. Find the total electric potential at P.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">Since potential is a scalar, just add each contribution algebraically — no angles, no components, no vector work at all. V₁ = kq₁/r₁ = (9.0×10⁹)(4.0×10⁻⁶)/0.20 = 1.8×10⁵ V. V₂ = kq₂/r₂ = (9.0×10⁹)(−2.0×10⁻⁶)/0.40 = −4.5×10⁴ V. V₃ = kq₃/r₃ = (9.0×10⁹)(1.0×10⁻⁶)/0.10 = 9.0×10⁴ V. Total: V = 1.8×10⁵ + (−4.5×10⁴) + 9.0×10⁴ = <strong>2.25 × 10⁵ V</strong>. Compare how much simpler this was than a three-charge field problem would have been — no need to know the directions from each charge to point P, or how the three charges are arranged relative to each other in space at all, since only the straight-line distance to each charge matters for potential. That's the entire appeal of working with potential instead of field whenever a problem allows it.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s106\"><span class=\"num\">10.6</span>Capacitors</h2>\n  <p>A capacitor stores charge — and therefore energy — by separating positive and negative charge onto two conductive surfaces. Capacitance C measures how much charge gets stored per volt applied. It's worth noting this is a property of the capacitor's own geometry, not of how much charge happens to be sitting on it at any given moment — a capacitor has the same C whether it's fully charged, half charged, or empty.</p>\n  <div class=\"eq\"><div class=\"main\">C = Q/ΔV &nbsp;·&nbsp; C = κε₀A/d &nbsp;·&nbsp; U<sub>C</sub> = ½QΔV = ½C(ΔV)²</div></div>\n  <p>Larger plate area or smaller separation both increase capacitance — more room to store charge, or less distance for the field to have to fight across. Inserting a dielectric (a material with κ > 1) increases capacitance further, because the dielectric partially cancels the field between the plates, which lets more charge pile up for the same voltage.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Whether charge or voltage ends up being what changes always comes down to one question: is the battery still connected? Battery connected → voltage is forced to stay fixed, so charge is what has to respond to whatever else changes. Battery disconnected → charge is physically trapped with nowhere to go, so voltage is what responds instead. Check this first, every single time, before you reason about anything else in a capacitor problem — it determines which variable you're even allowed to treat as constant.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p><strong>Capacitor With and Without a Dielectric.</strong> A parallel plate capacitor with plate area 0.020 m² and separation 0.0010 m is connected to a 12 V battery. (a) Find the capacitance and stored charge with vacuum between the plates. (b) A dielectric with κ = 3.0 is now inserted, still connected to the battery. Find the new stored energy.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\"><strong>(a)</strong> C₀ = ε₀A/d = (8.85×10⁻¹²)(0.020)/(0.0010) ≈ 1.77×10⁻¹⁰ F. Charge: Q₀ = C₀ΔV = (1.77×10⁻¹⁰)(12) ≈ 2.12×10⁻⁹ C.<br><br>\n      <strong>(b)</strong> With the dielectric inserted (battery still connected, so ΔV stays fixed at 12 V): C = κC₀ = (3.0)(1.77×10⁻¹⁰) ≈ 5.31×10⁻¹⁰ F. Stored energy: U = ½CΔV² = 0.5(5.31×10⁻¹⁰)(12)² ≈ <strong>3.82×10⁻⁸ J</strong>. For comparison, the original energy (part a) was U₀ = ½C₀ΔV² = 0.5(1.77×10⁻¹⁰)(144) ≈ 1.27×10⁻⁸ J — the dielectric roughly tripled the stored energy, exactly matching the factor of κ = 3.0 increase in capacitance, since voltage was held fixed by the battery throughout.</div>\n    </details>\n  </div>\n\n  <h3>Capacitors in series and parallel</h3>\n  <p>Wiring multiple capacitors together follows the <strong>opposite</strong> pattern from resistors — worth memorizing as a contrast if you've already seen resistor networks, since it's a classic mix-up.</p>\n  <div class=\"eq\">\n    <div class=\"main\">C<sub>parallel</sub> = C₁ + C₂ + C₃ + ... &nbsp;&nbsp;·&nbsp;&nbsp; 1/C<sub>series</sub> = 1/C₁ + 1/C₂ + 1/C₃ + ...</div>\n  </div>\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>This is the INVERSE of the resistor rule: resistors ADD directly in series and combine by reciprocals in parallel, while capacitors ADD directly in <strong>parallel</strong> and combine by reciprocals in <strong>series</strong>. Two ways to keep it straight: (1) parallel capacitor plates effectively increase the total plate area, and capacitance grows with area, so parallel capacitance should be bigger than any individual one — only a direct sum does that. (2) Series capacitors all carry the <strong>same charge</strong> Q (charge has nowhere else to go along a single series path), while capacitors in parallel all share the <strong>same voltage</strong> ΔV (they're connected across the same two points) — the mirror image of how series resistors share current and parallel resistors share voltage.</p>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s107\"><span class=\"num\">10.7</span>Conservation of Electric Energy</h2>\n  <p>This section is where everything you've learned so far gets tied together with plain old energy conservation. A charged particle moving through a region with only electric forces acting on it obeys the work-energy theorem directly, expressed in terms of potential difference.</p>\n  <div class=\"eq\"><div class=\"main\">W<sub>electric</sub> = −ΔU<sub>E</sub> = −qΔV = ΔK</div></div>\n  <p>This is your go-to equation for anything that looks like a particle accelerator problem — a charged particle starts at rest (or with some given speed) and moves through a known potential difference. You can find its final kinetic energy or speed directly from qΔV, without ever needing to compute the field or force explicitly along the way. It's a genuine shortcut, and a very testable one.</p>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>A quick preview: battery \"emf\"</div>\n    <p>You'll cover this in full in Unit 11 (Electric Circuits), but one piece shows up early: a battery is rated by its <strong>emf</strong>, written <strong>𝓔</strong> (a script E — deliberately NOT the same symbol as ε₀, permittivity of free space, which is a completely different quantity you've been using all unit). For now, just know that emf behaves like a fixed potential difference the battery maintains across itself, so charging a capacitor to charge Q through a battery of emf 𝓔 takes battery work W = Q𝓔 — twice the ½Q𝓔 that actually ends up stored in the capacitor, with the rest lost as heat.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 5</span>\n    <p><strong>Accelerating a Proton.</strong> A proton (mass 1.67 × 10⁻²⁷ kg) starts at rest and accelerates through a potential difference of 1000 V. Find its final speed.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">K = qΔV = (1.6×10⁻¹⁹)(1000) = 1.6×10⁻¹⁶ J. Then v = √(2K/m) = √[(2)(1.6×10⁻¹⁶)/(1.67×10⁻²⁷)] ≈ <strong>4.4 × 10⁵ m/s</strong>. Here's what I want you to notice: the field's exact shape, and the specific path the proton took, never entered the calculation at all — only the potential difference between the start and end points mattered. That's the whole point of working in terms of potential instead of force: it collapses a potentially messy path into one clean number.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Keep force, field, and potential straight — vector, vector, scalar.</li>\n      <li>Correctly distinguish friction, conduction, and induction, including predicting induction's final sign.</li>\n      <li>Add potentials algebraically (scalar) vs. adding fields as vectors — know which applies when.</li>\n      <li>Sketch field lines and equipotentials together, remembering they're always perpendicular.</li>\n      <li>Use W = −qΔV = ΔK to solve particle-through-a-potential-difference problems.</li>\n      <li>Compute capacitance, charge, and stored energy — and know whether the battery stays connected.</li>\n    </ul>\n  </div>\n\n  <div class=\"formula-summary\">\n    <span class=\"tag-label recap\">Unit 10 Formula Summary</span>\n    <table class=\"formula-table\">\n      <tr><th>Concept</th><th>Formula</th></tr>\n      <tr><td>Coulomb's Law</td><td>|F| = kq₁q₂/r² &nbsp;(k = 9.0×10⁹ N·m²/C²)</td></tr>\n      <tr><td>Electric field (point charge)</td><td>E = kq/r²</td></tr>\n      <tr><td>Field between parallel plates</td><td>E = Q/(ε₀A)</td></tr>\n      <tr><td>Electric potential energy</td><td>U = kq₁q₂/r</td></tr>\n      <tr><td>Electric potential (point charge)</td><td>V = kq/r</td></tr>\n      <tr><td>Field vs. potential</td><td>|E| = |ΔV/Δr|</td></tr>\n      <tr><td>Work-energy for a moving charge</td><td>W = −qΔV = ΔK</td></tr>\n      <tr><td>Capacitance</td><td>C = Q/ΔV = κε₀A/d</td></tr>\n      <tr><td>Energy stored in a capacitor</td><td>U = ½QΔV = ½C(ΔV)²</td></tr>\n      <tr><td>Capacitors in parallel</td><td>C<sub>parallel</sub> = C₁ + C₂ + ...</td></tr>\n      <tr><td>Capacitors in series</td><td>1/C<sub>series</sub> = 1/C₁ + 1/C₂ + ...</td></tr>\n    </table>\n  </div>\n\n  <h2 id=\"practice\"><span class=\"num\">📘</span>Unit 10 Practice Set</h2>\n  <p>Work every problem before checking the answer — write out the physical principle you're starting from, exactly as the real AP exam requires.</p>\n\n  <h3>Conceptual</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>A negatively charged rod is brought near (never touching) a neutral conducting sphere, the sphere is briefly grounded while the rod stays in place, then the ground is removed, then the rod is removed. What is the sphere's final charge?</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>At a certain point, the electric field due to a system of charges is exactly zero. Must the electric potential also be zero there? Explain.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>Two charges of −6 μC each sit at equal distances from Point P, on opposite sides. Find the electric potential at P.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>A parallel plate capacitor stays connected to a battery holding voltage constant. A dielectric is inserted. Does the stored charge increase, decrease, or stay the same? Why?</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">5</span><span>A positive charge is released from rest near a fixed positive charge. Describe how its kinetic energy and the system's potential energy change as it moves away.</span></div>\n\n  <h3>Numerical</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">6</span><span>Find the force between a +4.0 μC charge and a +6.0 μC charge separated by 0.50 m.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">7</span><span>Find the electric field 0.40 m from a point charge of +5.0 μC.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">8</span><span>Find the electric potential 0.30 m from a point charge of −8.0 μC.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">9</span><span>A 3.0 μF capacitor is charged to 15 V. Find the charge stored and the energy stored.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">10</span><span>Parallel plates 0.010 m apart have a potential difference of 200 V. Find the field between them.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">11</span><span>An electron accelerates from rest through a potential difference of 800 V. Find its final kinetic energy.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">12</span><span>Two point charges, +2.0 μC and −3.0 μC, are separated by 0.25 m. Find their electric potential energy.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">13</span><span>A capacitor with vacuum between its plates has capacitance 1.5 μF. A dielectric with κ = 4.0 is inserted, filling the gap. Find the new capacitance.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">14</span><span>Find the speed of an electron (mass 9.11×10⁻³¹ kg) after being accelerated from rest through 400 V.</span></div>\n\n  <h3 style=\"margin-top:30px;\">Answer Key</h3>\n  <div class=\"answer-key\">\n    <details><summary>Question 1</summary><div class=\"a-content\">Positive — opposite in sign to the rod. This is the defining feature of induction: never touching, and always leaving the opposite sign.</div></details>\n    <details><summary>Question 2</summary><div class=\"a-content\">No. Field and potential are independent conditions — field is the rate of change of potential, not potential itself. A flat \"plateau\" in potential gives zero field but a nonzero potential value.</div></details>\n    <details><summary>Question 3</summary><div class=\"a-content\">Negative — potential adds as a scalar, so two equal negative contributions simply add together (they don't cancel, since both are the same sign).</div></details>\n    <details><summary>Question 4</summary><div class=\"a-content\">Increases. Capacitance rises (C = κε₀A/d, κ > 1), and since Q = CΔV with ΔV held fixed by the battery, Q must rise to match.</div></details>\n    <details><summary>Question 5</summary><div class=\"a-content\">Kinetic energy increases; potential energy decreases by the same amount — the repulsive force converts stored PE into motion, conserving total mechanical energy.</div></details>\n    <details><summary>Question 6</summary><div class=\"a-content\">F = k|q₁q₂|/r² = (9.0×10⁹)(4.0×10⁻⁶)(6.0×10⁻⁶)/(0.50)² ≈ <strong>0.86 N</strong>.</div></details>\n    <details><summary>Question 7</summary><div class=\"a-content\">E = kq/r² = (9.0×10⁹)(5.0×10⁻⁶)/(0.40)² ≈ <strong>2.8 × 10⁵ N/C</strong>.</div></details>\n    <details><summary>Question 8</summary><div class=\"a-content\">V = kq/r = (9.0×10⁹)(−8.0×10⁻⁶)/0.30 ≈ <strong>−2.4 × 10⁵ V</strong>.</div></details>\n    <details><summary>Question 9</summary><div class=\"a-content\">Q = CΔV = (3.0×10⁻⁶)(15) = <strong>45 μC</strong>. U = ½CΔV² = 0.5(3.0×10⁻⁶)(225) ≈ <strong>3.4 × 10⁻⁴ J</strong>.</div></details>\n    <details><summary>Question 10</summary><div class=\"a-content\">E = ΔV/d = 200/0.010 = <strong>2.0 × 10⁴ V/m</strong>.</div></details>\n    <details><summary>Question 11</summary><div class=\"a-content\">K = |q|ΔV = (1.6×10⁻¹⁹)(800) = <strong>1.28 × 10⁻¹⁶ J</strong>.</div></details>\n    <details><summary>Question 12</summary><div class=\"a-content\">U = kq₁q₂/r = (9.0×10⁹)(2.0×10⁻⁶)(−3.0×10⁻⁶)/0.25 ≈ <strong>−0.216 J</strong>.</div></details>\n    <details><summary>Question 13</summary><div class=\"a-content\">C<sub>new</sub> = κC₀ = (4.0)(1.5 μF) = <strong>6.0 μF</strong>.</div></details>\n    <details><summary>Question 14</summary><div class=\"a-content\">K = qΔV = (1.6×10⁻¹⁹)(400) = 6.4×10⁻¹⁷ J. v = √(2K/m) = √[(2)(6.4×10⁻¹⁷)/(9.11×10⁻³¹)] ≈ <strong>1.2 × 10⁷ m/s</strong>.</div></details>\n  </div>\n\n  <div class=\"footer-nav\">\n    Next up: head to the <strong>Unit 10 QBank</strong> to drill these ideas, then continue to <strong>Unit 11 — Electric Circuits</strong>.\n  </div>\n\n</div>\n",
  "11": "<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Physics 2</div>\n  <h1>Electric Circuits</h1>\n  <p class=\"sub\">Electric circuits — how charge, resistance, and energy interact in real, connected systems. This unit builds directly on the potential and capacitor ideas from Unit 10.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 15–18%</span>\n    <span class=\"pill\">8 topics</span>\n    <span class=\"pill\">15 practice problems</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s111\">11.1 Electric Current</a></li>\n    <li><a href=\"#s112\">11.2 Simple Circuits</a></li>\n    <li><a href=\"#s113\">11.3 Resistance & Ohm's Law</a></li>\n    <li><a href=\"#s114\">11.4 Electric Power</a></li>\n    <li><a href=\"#s115\">11.5 Compound DC Circuits</a></li>\n    <li><a href=\"#s116\">11.6 Kirchhoff's Loop Rule</a></li>\n    <li><a href=\"#s116b\">11.6b Non-Ideal Batteries</a></li>\n    <li><a href=\"#s117\">11.7 Kirchhoff's Junction Rule</a></li>\n    <li><a href=\"#s118\">11.8 RC Circuits</a></li>\n    <li><a href=\"#practice\">Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <p class=\"quote\">\"Current is what flows, resistance is what fights it, voltage is what pushes it — get those three roles straight and every circuit becomes readable.\" — Unit 11</p>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Master This First — Series vs. Parallel, On Sight</span>\n    <p>Before writing a single equation, train your eye to instantly classify every resistor in a diagram:</p>\n    <ul style=\"margin:10px 0 0;\">\n      <li><strong>Series</strong> — one single path, no branching. Current is IDENTICAL through every element; voltage SPLITS.</li>\n      <li><strong>Parallel</strong> — multiple paths reconnecting at both ends. Voltage is IDENTICAL across every branch; current SPLITS.</li>\n    </ul>\n    <p style=\"margin-top:10px;\">In a mixed network, resolve the innermost series or parallel group first, replace it with its equivalent resistance, and repeat outward — never try to combine a whole tangled network in one step.</p>\n  </div>\n\n  <h2 id=\"s111\"><span class=\"num\">11.1</span>Electric Current</h2>\n  <p>Electric current is just the rate at which charge flows past a point — literally charge per second, nothing more exotic than that. It behaves as a scalar with a defined direction convention, not as a true vector in the strict physics sense of the word.</p>\n  <div class=\"eq\"><div class=\"main\">I = ΔQ / Δt</div><div class=\"sub\">Unit: ampere (A) = coulomb/second</div></div>\n  <p>Zooming in further, current is really carriers (electrons in a wire) drifting slowly along, described microscopically as I = nqvA (carrier density × charge per carrier × drift velocity × cross-sectional area). You won't need to apply this equation directly on most AP2 questions, but it's a useful mental model: for a fixed current, a wider wire (bigger A) means each carrier only has to drift more slowly (smaller v) to move the same amount of charge per second.</p>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>A weird fact worth knowing</div>\n    <p>By convention, current flows in the direction positive charge WOULD move — even though in an actual metal wire, it's negatively charged electrons doing the moving, drifting the opposite way. This isn't a mistake baked into physics; it's a historical convention (dating back to Benjamin Franklin) that's baked into literally every circuit diagram you'll ever see. So reason in terms of conventional current, always — not electron flow — and you'll match every textbook and every exam answer key.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Current from Charge Flow.</strong> A wire carries 3.2×10²⁰ electrons past a point in 4.0 seconds. Find the current, and state its direction relative to the electron flow.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">First find the total charge that passed, using the magnitude of one electron's charge: Q = Ne = (3.2×10²⁰)(1.6×10⁻¹⁹ C) ≈ 51.2 C. Then I = Q/Δt = 51.2/4.0 ≈ <strong>12.8 A</strong>. Direction: conventional current always points opposite to the actual direction electrons are drifting, since current is defined as the direction positive charge would move. So if these electrons are drifting, say, to the left through the wire, the conventional current is directed to the right.</div>\n    </details>\n  </div>\n\n  <h2 id=\"s112\"><span class=\"num\">11.2</span>Simple Circuits</h2>\n  <p>A circuit needs a complete, unbroken conducting path for current to flow at all — some kind of source (usually a battery), connecting wires, and typically a resistive element like a bulb or resistor. Break the loop anywhere, and current stops everywhere in that loop, not just downstream of wherever you broke it.</p>\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Students sometimes picture current \"running out\" as it passes through a bulb, kind of like water being used up along the way. It doesn't work that way. The same current flows into and out of every single-path component, no exceptions. What actually changes as current passes through a resistor is energy — converted to heat or light — not the amount of charge flowing. Charge in equals charge out, always, for any single unbranched path.</p>\n  </div>\n  <p>A capacitor in a simple DC circuit blocks steady-state current once it's fully charged — no charge can cross the physical gap between its plates. So any part of a circuit that can ONLY be reached through a fully-charged capacitor carries zero current once the system settles down, even though current did flow briefly while the capacitor was still charging up.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Identifying Dead Branches.</strong> A circuit has a battery, a resistor R₁ in the main loop, and a second branch — a resistor R₂ in series with a capacitor — connected in parallel with R₁. A long time after the switch closes, find the current through R₂.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">Once a capacitor is fully charged, it blocks any further steady-state current through its own branch — the entire branch carrying R₂ and the capacitor in series ends up with zero current, no matter what R₂'s resistance actually is. So the current through R₂ is simply <strong>0 A</strong> once the system settles down. All the current in this circuit ends up flowing only through R₁, since that's the only complete conducting path left once the capacitor branch effectively \"opens.\" This is a favorite AP setup precisely because it tests whether you recognize that a fully-charged capacitor kills current in its whole branch, not just at the capacitor itself.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s113\"><span class=\"num\">11.3</span>Resistance, Resistivity, and Ohm's Law</h2>\n  <p>Resistance describes how strongly a material fights back against current flow. Ohm's Law ties voltage, current, and resistance together for a resistor.</p>\n  <div class=\"eq\"><div class=\"main\">V = IR</div></div>\n  <p>Resistance itself depends on the material and the wire's actual geometry:</p>\n  <div class=\"eq\"><div class=\"main\">R = ρℓ / A</div><div class=\"sub\">ρ = resistivity (a material property) · ℓ = length · A = cross-sectional area</div></div>\n  <p>Longer wires resist more — charge has farther to fight through. Thicker wires resist less — more room to flow through, exactly like a wider pipe carrying water more easily. Here's something worth pausing on: this equation is structurally identical to the thermal conduction equation from Unit 9, just with length in the numerator this time instead of the denominator, since here you're describing resistance itself, not a rate.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Wire Geometry and Resistance.</strong> Wire B has twice the length and half the cross-sectional area of Wire A, made from the same material. Find R<sub>B</sub> in terms of R<sub>A</sub>.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">R = ρℓ/A. Doubling length doubles R on its own. Separately, halving area ALSO doubles R, since A sits in the denominator. Here's the part that trips people up: these two effects don't cancel or average out — they multiply together. Combined: R<sub>B</sub> = <strong>4 × R<sub>A</sub></strong>. Two independent geometric changes, each individually doubling the resistance, stack multiplicatively rather than just adding.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s114\"><span class=\"num\">11.4</span>Electric Power</h2>\n  <p>Power is the rate at which electrical energy converts into some other form — heat in a resistor, light in a bulb, whatever the component is designed to do.</p>\n  <div class=\"eq\"><div class=\"main\">P = IΔV &nbsp;·&nbsp; P = I²R &nbsp;·&nbsp; P = (ΔV)²/R</div></div>\n  <p>All three of these are the exact same physics, just algebraically rearranged using Ohm's law. Pick whichever form matches the variables you're actually handed in a given problem — don't waste time solving for a missing variable first if you don't have to.</p>\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>A bulb rated \"100 W\" only actually dissipates 100 W at its RATED voltage. Connect it to a different voltage, and its power draw changes along with it. Power isn't some fixed, permanent property of a bulb sitting on a shelf — it depends on the actual voltage and current the bulb is experiencing right now, in this specific circuit.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Choosing the Right Power Equation.</strong> A 25 Ω resistor carries 0.80 A. Find the power it dissipates, and separately find the voltage across it.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">You're given resistance and current, so reach for the power form built from exactly those two: P = I²R = (0.80)²(25) = (0.64)(25) = <strong>16 W</strong>. For the voltage, Ohm's Law directly: V = IR = (0.80)(25) = <strong>20 V</strong>. As a check, P = IV = (0.80)(20) = 16 W — same answer either way, confirming the numbers are self-consistent. The real skill here isn't the arithmetic, it's recognizing which of the three power forms (P=IV, P=I²R, P=V²/R) avoids an unnecessary extra step given what you're actually handed — here, I and R were given directly, so P=I²R gets you there in one line without first having to solve for V.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s115\"><span class=\"num\">11.5</span>Compound DC Circuits</h2>\n  <p>Real circuits combine resistors in series and in parallel, often both at once. Each arrangement has a completely different personality, and mixing the two up is, without question, the single most common circuits mistake on this exam.</p>\n  <table class=\"formula-table\">\n    <tr><th>Arrangement</th><th>Current</th><th>Voltage</th><th>Equivalent Resistance</th></tr>\n    <tr><td>Series</td><td>Same through each</td><td>Splits across each</td><td>R<sub>s</sub> = ΣR<sub>i</sub> (adds directly)</td></tr>\n    <tr><td>Parallel</td><td>Splits across each</td><td>Same across each</td><td>1/R<sub>p</sub> = Σ(1/R<sub>i</sub>)</td></tr>\n  </table>\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Adding a resistor in SERIES always increases total resistance — you've added another obstacle to the only path available. Adding a resistor in PARALLEL always decreases total resistance — you've opened up an additional path, and even a high-resistance extra path makes it a little easier overall for charge to get through. These two facts pull in genuinely opposite directions, which is exactly why it's worth having them memorized as a contrasting pair rather than two separate rules.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Series-Parallel Combination.</strong> A 6 Ω resistor is in series with a parallel combination of two 12 Ω resistors. Find the total equivalent resistance.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">Start with the innermost group — the parallel pair: 1/R<sub>p</sub> = 1/12 + 1/12 = 2/12, so R<sub>p</sub> = 6 Ω. Then add the series resistor on top of that: R<sub>total</sub> = 6 + 6 = <strong>12 Ω</strong>. The habit to build here is always resolving the innermost parallel or series group first, then working outward one step at a time — trying to combine everything in one single step is exactly where errors sneak in.</div>\n    </details>\n  </div>\n<div class=\"diagram\">\n<svg width=\"440\" height=\"240\" viewBox=\"0 0 440 240\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"40\" y1=\"130\" x2=\"90\" y2=\"130\" stroke=\"#333\" stroke-width=\"2\"/>\n  <rect x=\"90\" y=\"115\" width=\"60\" height=\"30\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"103\" y=\"110\" font-size=\"13\" fill=\"#333\">6 Ω</text>\n  <line x1=\"150\" y1=\"130\" x2=\"190\" y2=\"130\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"190\" y1=\"130\" x2=\"190\" y2=\"80\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"190\" y1=\"130\" x2=\"190\" y2=\"180\" stroke=\"#333\" stroke-width=\"2\"/>\n  <rect x=\"190\" y=\"65\" width=\"80\" height=\"30\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"205\" y=\"60\" font-size=\"13\" fill=\"#333\">12 Ω</text>\n  <rect x=\"190\" y=\"165\" width=\"80\" height=\"30\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"205\" y=\"220\" font-size=\"13\" fill=\"#333\">12 Ω</text>\n  <line x1=\"270\" y1=\"80\" x2=\"330\" y2=\"80\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"270\" y1=\"180\" x2=\"330\" y2=\"180\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"330\" y1=\"80\" x2=\"330\" y2=\"130\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"330\" y1=\"180\" x2=\"330\" y2=\"130\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"330\" y1=\"130\" x2=\"400\" y2=\"130\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"40\" y1=\"130\" x2=\"40\" y2=\"30\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"400\" y1=\"130\" x2=\"400\" y2=\"30\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"40\" y1=\"30\" x2=\"180\" y2=\"30\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"260\" y1=\"30\" x2=\"400\" y2=\"30\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"180\" y1=\"20\" x2=\"180\" y2=\"40\" stroke=\"#333\" stroke-width=\"3\"/>\n  <line x1=\"260\" y1=\"15\" x2=\"260\" y2=\"45\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text x=\"188\" y=\"12\" font-size=\"13\" fill=\"#333\" text-anchor=\"middle\">battery</text>\n</svg>\n<p class=\"diagram-caption\">A 6 Ω resistor in series with a parallel combination of two 12 Ω resistors — matching Worked Example 1. The parallel pair reduces to 6 Ω, giving a total of 12 Ω.</p>\n</div>\n\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s116\"><span class=\"num\">11.6</span>Kirchhoff's Loop Rule</h2>\n  <p>The loop rule is really just energy conservation, dressed up for circuits: the sum of voltage changes around any complete closed loop equals zero. Go all the way around a loop and back to where you started, and you have to return to the same potential you left — there's no other option.</p>\n  <div class=\"eq\"><div class=\"main\">ΣΔV = 0 (around any closed loop)</div></div>\n  <p>Practically, this means adding up voltage RISES (crossing a battery from − to +) and voltage DROPS (crossing a resistor in the direction current flows, or crossing a battery from + to −), and setting the total to zero. This is how you solve for unknown currents or voltages in circuits with multiple loops and multiple batteries — genuinely one of the most powerful tools in this whole unit.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Two Batteries in One Loop.</strong> A single loop contains a 15 V battery, a 5.0 V battery oriented so it opposes the first, and a 4.0 Ω resistor, all in series. Find the current, and state which battery is being charged (having current forced backward through it).</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">Walk the loop in one consistent direction and add up voltage rises and drops as you go. Going around: +15 V (rise, crossing the strong battery − to +), then −5.0 V (a drop, since this battery is oriented so you cross it + to − going the same way around), then −I(4.0) (a drop across the resistor, in the direction current flows). Setting the total to zero: 15 − 5.0 − 4.0I = 0, so 4.0I = 10, giving I = <strong>2.5 A</strong>. Since the current came out positive, it really does flow in the direction assumed — driven by the stronger (15 V) battery. That means the weaker (5.0 V) battery has current pushed backward through it against its own preferred direction, so it's the one being charged, exactly like a smaller battery placed in a circuit with a larger one.</div>\n    </details>\n  </div>\n\n  <h2 id=\"s116b\"><span class=\"num\">11.6b</span>Non-Ideal Batteries and Internal Resistance</h2>\n  <p>Every real battery has some internal resistance, usually written r, from the chemistry and materials inside it. So far this unit has treated batteries as ideal — a fixed voltage source with r = 0 — but real batteries lose a little voltage to their own internal resistance as current flows. The battery's labeled voltage is really its <strong>EMF</strong> (electromotive force), given the symbol ε (epsilon) — the maximum voltage the battery could supply if it had no internal resistance at all.</p>\n  <div class=\"eq\"><div class=\"main\">ε = I(r + R<sub>external</sub>) &nbsp;·&nbsp; V<sub>terminal</sub> = ε − Ir</div><div class=\"sub\">ε = EMF · r = internal resistance · V<sub>terminal</sub> = actual voltage delivered to the rest of the circuit</div></div>\n  <p>Apply the loop rule exactly as before, just treating the internal resistance r as one more resistor in series inside the battery itself: going around the loop, ε is a rise, and both Ir (internal) and IR<sub>external</sub> are drops. The terminal voltage — what the rest of the circuit actually \"sees\" — is always a little less than the full EMF whenever current is flowing, because some voltage is used up pushing current through the battery's own internal resistance.</p>\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>Don't mix up ε and ε₀</div>\n    <p>The symbol ε (EMF) here is unrelated to ε₀, the permittivity of free space from Unit 10's Coulomb's law and capacitor formulas. They look almost identical but mean completely different things — one is a voltage, the other is a physical constant with its own units (C²/N·m²). If you're reviewing Units 10 and 11 together, keep the subscript in mind: bare ε means EMF, ε₀ (with the zero) means permittivity.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Finding EMF and Internal Resistance.</strong> A battery with internal resistance r is connected to a 10 Ω external resistor, and the current is measured to be 1.2 A. When the external resistor is swapped for a 20 Ω resistor, the current drops to 0.70 A. Find ε and r.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">Apply ε = I(r + R<sub>external</sub>) to both trials: ε = 1.2(r + 10) and ε = 0.70(r + 20). Setting them equal: 1.2r + 12 = 0.70r + 14, so 0.50r = 2, giving r = <strong>4.0 Ω</strong>. Substituting back: ε = 1.2(4.0 + 10) = 1.2(14) = <strong>16.8 V</strong>. Check with the second trial: ε = 0.70(4.0 + 20) = 0.70(24) = 16.8 V ✓ — same answer either way, confirming the numbers are self-consistent.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s117\"><span class=\"num\">11.7</span>Kirchhoff's Junction Rule</h2>\n  <p>The junction rule is conservation of charge, applied at a single point: wherever wires meet, the total current flowing in has to equal the total current flowing out. Charge can't pile up anywhere, and it can't vanish either.</p>\n  <div class=\"eq\"><div class=\"main\">ΣI<sub>in</sub> = ΣI<sub>out</sub> (at any junction)</div></div>\n  <p>This is exactly why current splits across parallel branches in the first place, and why those branch currents have to add back up to the main current once the branches recombine — the junction rule is really the formal justification underneath the \"current splits in parallel\" behavior you saw back in 11.5.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Combining the Loop and Junction Rules.</strong> A circuit has a 12 V battery in series with a 2.0 Ω resistor, which then splits into two parallel branches: a 6.0 Ω resistor and a 3.0 Ω resistor. Use the loop and junction rules together to find the current through the 3.0 Ω resistor.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">Call the current through the 2.0 Ω resistor I (this is also the total current from the battery, since it's the only path before the split), the current through the 6.0 Ω branch I₆, and the current through the 3.0 Ω branch I₃. <strong>Junction rule</strong> at the split: I = I₆ + I₃. <strong>Loop rule</strong> around the loop containing the 2.0 Ω and 6.0 Ω resistors: 12 − I(2.0) − I₆(6.0) = 0. <strong>Loop rule</strong> around the loop containing the 6.0 Ω and 3.0 Ω resistors (both branches share the same voltage, since they're in parallel): I₆(6.0) = I₃(3.0), so I₆ = 0.5 I₃. Substituting into the junction equation: I = 0.5I₃ + I₃ = 1.5I₃. Substituting both into the first loop equation: 12 − (1.5I₃)(2.0) − (0.5I₃)(6.0) = 0 → 12 − 3.0I₃ − 3.0I₃ = 0 → 12 = 6.0I₃ → I₃ = <strong>2.0 A</strong>. This three-equation, three-unknown structure — one junction equation plus one loop equation per independent loop — is the general template for any circuit too tangled for simple series/parallel reduction alone.</div>\n    </details>\n  </div>\n<div class=\"diagram\">\n<svg width=\"440\" height=\"240\" viewBox=\"0 0 440 240\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"40\" y1=\"120\" x2=\"90\" y2=\"120\" stroke=\"#333\" stroke-width=\"2\"/>\n  <rect x=\"90\" y=\"105\" width=\"60\" height=\"30\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"100\" y=\"100\" font-size=\"12\" fill=\"#333\">2.0 Ω</text>\n  <line x1=\"150\" y1=\"120\" x2=\"190\" y2=\"120\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"190\" y1=\"120\" x2=\"190\" y2=\"70\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"190\" y1=\"120\" x2=\"190\" y2=\"170\" stroke=\"#333\" stroke-width=\"2\"/>\n  <rect x=\"190\" y=\"55\" width=\"80\" height=\"30\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"205\" y=\"50\" font-size=\"12\" fill=\"#333\">6.0 Ω</text>\n  <rect x=\"190\" y=\"155\" width=\"80\" height=\"30\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"205\" y=\"210\" font-size=\"12\" fill=\"#333\">3.0 Ω</text>\n  <line x1=\"270\" y1=\"70\" x2=\"330\" y2=\"70\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"270\" y1=\"170\" x2=\"330\" y2=\"170\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"330\" y1=\"70\" x2=\"330\" y2=\"120\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"330\" y1=\"170\" x2=\"330\" y2=\"120\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"330\" y1=\"120\" x2=\"400\" y2=\"120\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"40\" y1=\"120\" x2=\"40\" y2=\"30\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"400\" y1=\"120\" x2=\"400\" y2=\"30\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"40\" y1=\"30\" x2=\"180\" y2=\"30\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"260\" y1=\"30\" x2=\"400\" y2=\"30\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"180\" y1=\"20\" x2=\"180\" y2=\"40\" stroke=\"#333\" stroke-width=\"3\"/>\n  <line x1=\"260\" y1=\"15\" x2=\"260\" y2=\"45\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text x=\"188\" y=\"12\" font-size=\"13\" fill=\"#333\" text-anchor=\"middle\">12 V</text>\n  <text x=\"150\" y=\"145\" font-size=\"11\" fill=\"#3f6ae0\">I</text>\n  <text x=\"255\" y=\"60\" font-size=\"11\" fill=\"#e0473f\">I₆</text>\n  <text x=\"255\" y=\"205\" font-size=\"11\" fill=\"#3fae5a\">I₃</text>\n</svg>\n<p class=\"diagram-caption\">The circuit from the combined loop-and-junction worked example: a 12 V battery drives current I through a 2.0 Ω resistor, which then splits at the junction into I₆ (through the 6.0 Ω branch) and I₃ (through the 3.0 Ω branch).</p>\n</div>\n\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s118\"><span class=\"num\">11.8</span>Resistor-Capacitor (RC) Circuits</h2>\n  <p>Add a capacitor to a circuit with a resistor, and current stops behaving like the simple, constant-current DC circuits you've dealt with so far — it changes over time as the capacitor charges or discharges.</p>\n  <ul>\n    <li><strong>Charging:</strong> current starts high (an uncharged capacitor briefly acts like a plain wire) and decays toward zero as the capacitor approaches full charge and starts acting more and more like an open switch.</li>\n    <li><strong>Discharging:</strong> current starts high and decays toward zero as the capacitor's stored charge runs out.</li>\n  </ul>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>This one trick handles almost every RC question</div>\n    <p>Two moments are always safe to reason about without any calculus at all: the instant right after the switch closes, and a long time later. Right after closing, an uncharged capacitor behaves like a plain wire — zero resistance. A long time later, a fully-charged capacitor behaves like a completely broken wire — no current flows through that branch at all. Nearly every AP RC question can be cracked open just by figuring out which of these two limits actually applies to what's being asked.</p>\n  </div>\n  <p>One extra rule of thumb worth having, for questions that ask about an in-between moment rather than only the two limits above: the quantity τ = RC is called the circuit's <strong>time constant</strong>, and at t = τ (one time constant after the switch closes) the capacitor has charged to roughly 63% of its final voltage — not the halfway point, just a standard reference moment. You don't need the full exponential equation to use this; it's simply a fact worth memorizing alongside the two safe limits: a bigger τ = RC means a slower-charging circuit, since more resistance or more capacitance both stretch out how long charging takes.</p>\n<div class=\"diagram\">\n<svg width=\"480\" height=\"220\" viewBox=\"0 0 480 220\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"60\" y=\"25\" font-size=\"14\" fill=\"#333\" font-weight=\"bold\">t = 0 (just closed)</text>\n  <line x1=\"40\" y1=\"60\" x2=\"180\" y2=\"60\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"40\" y1=\"60\" x2=\"40\" y2=\"150\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"40\" y1=\"150\" x2=\"180\" y2=\"150\" stroke=\"#333\" stroke-width=\"2\"/>\n  <rect x=\"80\" y=\"45\" width=\"50\" height=\"30\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"85\" y=\"40\" font-size=\"12\" fill=\"#333\">R</text>\n  <line x1=\"180\" y1=\"60\" x2=\"180\" y2=\"90\" stroke=\"#e0473f\" stroke-width=\"3\"/>\n  <line x1=\"170\" y1=\"90\" x2=\"190\" y2=\"90\" stroke=\"#e0473f\" stroke-width=\"3\"/>\n  <text x=\"150\" y=\"105\" font-size=\"11\" fill=\"#e0473f\">acts like a wire (0 Ω)</text>\n  <line x1=\"180\" y1=\"120\" x2=\"180\" y2=\"150\" stroke=\"#333\" stroke-width=\"2\"/>\n\n  <text x=\"300\" y=\"25\" font-size=\"14\" fill=\"#333\" font-weight=\"bold\">t → ∞ (long after)</text>\n  <line x1=\"280\" y1=\"60\" x2=\"420\" y2=\"60\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"280\" y1=\"60\" x2=\"280\" y2=\"150\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"280\" y1=\"150\" x2=\"420\" y2=\"150\" stroke=\"#333\" stroke-width=\"2\"/>\n  <rect x=\"320\" y=\"45\" width=\"50\" height=\"30\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"325\" y=\"40\" font-size=\"12\" fill=\"#333\">R</text>\n  <line x1=\"410\" y1=\"80\" x2=\"410\" y2=\"100\" stroke=\"#3f6ae0\" stroke-width=\"4\"/>\n  <line x1=\"425\" y1=\"80\" x2=\"425\" y2=\"100\" stroke=\"#3f6ae0\" stroke-width=\"4\"/>\n  <text x=\"380\" y=\"115\" font-size=\"11\" fill=\"#3f6ae0\">acts like open switch</text>\n  <line x1=\"410\" y1=\"60\" x2=\"410\" y2=\"80\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"425\" y1=\"100\" x2=\"425\" y2=\"150\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"410\" y1=\"60\" x2=\"420\" y2=\"60\" stroke=\"#333\" stroke-width=\"2\"/>\n</svg>\n<p class=\"diagram-caption\">Two safe RC limits: right after closing, an uncharged capacitor behaves like a plain wire; a long time later, the fully-charged capacitor behaves like a broken wire (open switch).</p>\n</div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Current and Charge at the Two Limits.</strong> A 9.0 V battery, a 3.0 Ω resistor, and an initially-uncharged 2.0 μF capacitor are connected in series with a switch. Find the current immediately after the switch closes, and the final charge on the capacitor a long time later.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\"><strong>At t = 0:</strong> the uncharged capacitor acts like a plain wire, so the circuit behaves as if it's just the battery and resistor: I = ε/R = 9.0/3.0 = <strong>3.0 A</strong>.<br><br>\n      <strong>At t → ∞:</strong> the fully-charged capacitor acts like an open switch, so current in the loop drops to zero, and the capacitor ends up with the full battery voltage across it (since there's no voltage drop left over the resistor once I = 0): Q<sub>final</sub> = CΔV = (2.0×10⁻⁶)(9.0) = <strong>1.8×10⁻⁵ C</strong>.<br><br>\n      Notice neither calculation needed the resistor value for the final charge, and neither needed the capacitance for the initial current — each limit isolates exactly the piece of information that matters at that instant, which is the whole point of reasoning through the two safe limits instead of trying to track the full time-dependence.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Don't mix the two limits together. A common mistake is using the fully-charged capacitor's charge (which depends on C and ε, not R) to try to find the initial current (which depends on ε and R, not C), or vice versa. Each limit has its own self-contained set of \"what matters right now\" — keep them separate rather than pulling numbers across from the wrong moment in time.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Use I = ΔQ/Δt and know conventional current direction.</li>\n      <li>Apply V = IR and R = ρℓ/A confidently, including how geometry changes affect resistance.</li>\n      <li>Pick the right power equation for the variables you're given.</li>\n      <li>Correctly identify series vs. parallel and compute equivalent resistance for combinations.</li>\n      <li>Apply Kirchhoff's loop and junction rules to solve multi-loop circuits.</li>\n      <li>Reason through RC circuits at t = 0 and t → ∞ without needing calculus.</li>\n    </ul>\n  </div>\n\n  <div class=\"formula-summary\">\n    <span class=\"tag-label recap\">Unit 11 Formula Summary</span>\n    <table class=\"formula-table\">\n      <tr><th>Concept</th><th>Formula</th></tr>\n      <tr><td>Current</td><td>I = ΔQ/Δt</td></tr>\n      <tr><td>Ohm's Law</td><td>V = IR</td></tr>\n      <tr><td>Resistance from geometry</td><td>R = ρℓ/A</td></tr>\n      <tr><td>Power (three equivalent forms)</td><td>P = IΔV = I²R = (ΔV)²/R</td></tr>\n      <tr><td>Series resistors</td><td>R<sub>s</sub> = ΣR<sub>i</sub></td></tr>\n      <tr><td>Parallel resistors</td><td>1/R<sub>p</sub> = Σ(1/R<sub>i</sub>)</td></tr>\n      <tr><td>Kirchhoff's Loop Rule</td><td>ΣΔV = 0 around any closed loop</td></tr>\n      <tr><td>Kirchhoff's Junction Rule</td><td>ΣI<sub>in</sub> = ΣI<sub>out</sub> at any junction</td></tr>\n      <tr><td>Non-ideal battery</td><td>ε = I(r + R<sub>external</sub>); V<sub>terminal</sub> = ε − Ir</td></tr>\n      <tr><td>RC circuit, t = 0</td><td>capacitor acts like a wire (0 Ω)</td></tr>\n      <tr><td>RC circuit, t → ∞</td><td>capacitor acts like an open switch; Q<sub>final</sub> = C·ΔV<sub>C</sub> (ΔV<sub>C</sub> = ε only in a simple single-loop RC circuit — in a compound circuit, ΔV<sub>C</sub> is whatever voltage appears across the capacitor's branch at steady state)</td></tr>\n      <tr><td>RC time constant</td><td>τ = RC; capacitor is ~63% charged at t = τ</td></tr>\n    </table>\n  </div>\n\n  <h2 id=\"practice\"><span class=\"num\">📘</span>Unit 11 Practice Set</h2>\n  <p>Work every problem before checking the answer — write out the physical principle you're starting from, exactly as the real AP exam requires.</p>\n\n  <h3>Conceptual</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>Explain why current is the same everywhere along a single loop with no branches, even before and after a resistor.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>A resistor is added in parallel to an existing resistor. Does the total resistance of the circuit increase or decrease? Explain using the junction rule.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>Immediately after a switch is closed in an RC circuit with an initially uncharged capacitor, how does the capacitor behave? How does it behave after a very long time?</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>A light bulb rated for 60 W at 120 V is connected instead to a 60 V source. Is its power output more, less, or equal to 60 W? Explain.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">5</span><span>Two identical resistors are connected first in series, then in parallel, to the same battery. In which configuration does the battery supply more total current? Explain.</span></div>\n\n  <h3>Numerical</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">6</span><span>A wire carries a current of 2.5 A for 30 seconds. Find the total charge that passes through it.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">7</span><span>A 12 V battery is connected to a 4.0 Ω resistor. Find the current.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">8</span><span>Find the resistance of a wire 2.0 m long, cross-sectional area 1.0×10⁻⁶ m², made of a material with resistivity 1.7×10⁻⁸ Ω·m.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">9</span><span>Find the power dissipated by a 6.0 Ω resistor carrying 3.0 A.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">10</span><span>Three resistors, 2.0 Ω, 3.0 Ω, and 5.0 Ω, are connected in series. Find the equivalent resistance.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">11</span><span>Two resistors, 4.0 Ω and 12 Ω, are connected in parallel. Find the equivalent resistance.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">12</span><span>A 9.0 V battery drives current through a single 3.0 Ω resistor in series with two 6.0 Ω resistors in parallel with each other. Find the total current from the battery.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">13</span><span>A circuit has an ideal 10 V battery and two resistors in series: 2.0 Ω and 8.0 Ω. Find the voltage drop across the 8.0 Ω resistor.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">14</span><span>At a circuit junction, 3.0 A flows in from one wire and 1.5 A flows in from a second wire. If only one wire leaves the junction, find the current in that wire.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">15</span><span>A 100 W bulb and a 60 W bulb are each rated for 120 V. Which has the higher resistance, and why?</span></div>\n\n  <h3 style=\"margin-top:30px;\">Answer Key</h3>\n  <div class=\"answer-key\">\n    <details><summary>Question 1</summary><div class=\"a-content\">Charge can't accumulate or disappear anywhere along a single unbranched path (conservation of charge / the junction rule applied to a trivial case) — whatever current enters a resistor must also exit it, even though energy is lost as heat along the way.</div></details>\n    <details><summary>Question 2</summary><div class=\"a-content\">Total resistance decreases. Adding a parallel path gives current an additional route, and by the junction rule, current splits across both paths — making it easier overall for charge to get through, which is exactly what lower resistance means.</div></details>\n    <details><summary>Question 3</summary><div class=\"a-content\">Immediately after closing: an uncharged capacitor acts like a plain wire (zero resistance), so current flows as if the capacitor weren't there. After a long time: the fully-charged capacitor acts like a broken wire (open switch), blocking any further current through that branch.</div></details>\n    <details><summary>Question 4</summary><div class=\"a-content\">Less than 60 W. Using P = (ΔV)²/R with R fixed (a property of the bulb's filament), halving the voltage to 60 V cuts power to (60/120)² = 1/4 of the rated value, or 15 W.</div></details>\n    <details><summary>Question 5</summary><div class=\"a-content\">Parallel draws more total current. Parallel resistors always produce a LOWER equivalent resistance than either resistor alone, and lower resistance at the same voltage means higher total current (I = V/R).</div></details>\n    <details><summary>Question 6</summary><div class=\"a-content\">Q = IΔt = (2.5)(30) = <strong>75 C</strong>.</div></details>\n    <details><summary>Question 7</summary><div class=\"a-content\">I = V/R = 12/4.0 = <strong>3.0 A</strong>.</div></details>\n    <details><summary>Question 8</summary><div class=\"a-content\">R = ρℓ/A = (1.7×10⁻⁸)(2.0)/(1.0×10⁻⁶) = <strong>0.034 Ω</strong>.</div></details>\n    <details><summary>Question 9</summary><div class=\"a-content\">P = I²R = (3.0)²(6.0) = <strong>54 W</strong>.</div></details>\n    <details><summary>Question 10</summary><div class=\"a-content\">R<sub>s</sub> = 2.0 + 3.0 + 5.0 = <strong>10 Ω</strong>.</div></details>\n    <details><summary>Question 11</summary><div class=\"a-content\">1/R<sub>p</sub> = 1/4.0 + 1/12 = 3/12 + 1/12 = 4/12, so R<sub>p</sub> = <strong>3.0 Ω</strong>.</div></details>\n    <details><summary>Question 12</summary><div class=\"a-content\">Parallel pair: 1/R<sub>p</sub> = 1/6 + 1/6 = 2/6, R<sub>p</sub> = 3.0 Ω. Total: R = 3.0 + 3.0 = 6.0 Ω. Current: I = V/R = 9.0/6.0 = <strong>1.5 A</strong>.</div></details>\n    <details><summary>Question 13</summary><div class=\"a-content\">Total R = 2.0 + 8.0 = 10 Ω. Current: I = 10/10 = 1.0 A. Voltage across 8.0 Ω: V = IR = (1.0)(8.0) = <strong>8.0 V</strong>.</div></details>\n    <details><summary>Question 14</summary><div class=\"a-content\">By the junction rule, current in must equal current out: 3.0 + 1.5 = <strong>4.5 A</strong>.</div></details>\n    <details><summary>Question 15</summary><div class=\"a-content\">The 60 W bulb has the higher resistance. From P = V²/R, R = V²/P — at the same voltage, the smaller power (60 W) corresponds to the larger resistance, since P and R are inversely related when voltage is fixed.</div></details>\n  </div>\n\n  <div class=\"footer-nav\">\n    Next up: head to the <strong>Unit 11 QBank</strong> to drill these ideas, then continue to <strong>Unit 12 — Magnetism and Electromagnetism</strong>.\n  </div>\n\n</div>\n",
  "12": "<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Physics 2</div>\n  <h1>Magnetism &amp; Electromagnetism</h1>\n  <p class=\"sub\">Magnetism — the unit where direction-finding becomes the real skill. Every equation here is simple; the right-hand rule is what actually separates a 5 from a 3.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 12–15%</span>\n    <span class=\"pill\">4 topics</span>\n    <span class=\"pill\">15 practice problems</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s121\">12.1 Magnetic Fields</a></li>\n    <li><a href=\"#s122\">12.2 Magnetism and Moving Charges</a></li>\n    <li><a href=\"#s123\">12.3 Magnetism and Current-Carrying Wires</a></li>\n    <li><a href=\"#s124\">12.4 Electromagnetic Induction</a></li>\n    <li><a href=\"#practice\">Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <p class=\"quote\">\"In this unit, knowing the formula is the easy 50%. Getting the direction right is the other 50% — and it's the half that actually separates scores.\" — Unit 12</p>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Master This First — The Right-Hand Rule, Done Correctly</span>\n    <p>This single procedure, done carefully every time, handles nearly every direction-finding question in this unit:</p>\n    <ol class=\"steps\">\n      <li>Point your <strong>fingers</strong> in the direction of velocity v (for a moving charge) or current I (for a wire).</li>\n      <li><strong>Curl</strong> your fingers toward the direction of the magnetic field B.</li>\n      <li>Your <strong>thumb</strong> now points in the direction of the force F — but only if the charge is <strong>positive</strong>.</li>\n      <li>If the charge is <strong>negative</strong>, do the whole procedure, then flip your answer 180°.</li>\n    </ol>\n    <p style=\"margin-top:10px;\">The #1 way students lose points here isn't forgetting the rule — it's rushing it, or forgetting the negative-charge flip. Do it slowly, physically, with your actual hand, every single time.</p>\n  </div>\n<div class=\"diagram\">\n<svg width=\"480\" height=\"240\" viewBox=\"0 0 480 240\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"60\" y=\"25\" font-size=\"14\" fill=\"#333\" font-weight=\"bold\">Positive charge, B into page</text>\n  <rect x=\"30\" y=\"45\" width=\"180\" height=\"140\" fill=\"#f2f2f2\" stroke=\"#ccc\"/>\n  <g>\n    <text x=\"40\" y=\"60\" font-size=\"10\" fill=\"#888\">× × × × ×</text>\n    <text x=\"40\" y=\"90\" font-size=\"10\" fill=\"#888\">× × × × ×</text>\n    <text x=\"40\" y=\"120\" font-size=\"10\" fill=\"#888\">× × × × ×</text>\n    <text x=\"40\" y=\"150\" font-size=\"10\" fill=\"#888\">× × × × ×</text>\n    <text x=\"40\" y=\"180\" font-size=\"10\" fill=\"#888\">× × × × ×</text>\n  </g>\n  <line x1=\"60\" y1=\"150\" x2=\"160\" y2=\"150\" stroke=\"#333\" stroke-width=\"2\" marker-end=\"url(#a3)\"/>\n  <text x=\"100\" y=\"168\" font-size=\"11\" fill=\"#333\">v (+q)</text>\n  <line x1=\"120\" y1=\"150\" x2=\"120\" y2=\"90\" stroke=\"#e0473f\" stroke-width=\"3\" marker-end=\"url(#a3r)\"/>\n  <text x=\"126\" y=\"95\" font-size=\"11\" fill=\"#e0473f\">F (up)</text>\n\n  <text x=\"300\" y=\"25\" font-size=\"14\" fill=\"#333\" font-weight=\"bold\">Negative charge, B into page</text>\n  <rect x=\"270\" y=\"45\" width=\"180\" height=\"140\" fill=\"#f2f2f2\" stroke=\"#ccc\"/>\n  <g>\n    <text x=\"280\" y=\"60\" font-size=\"10\" fill=\"#888\">× × × × ×</text>\n    <text x=\"280\" y=\"90\" font-size=\"10\" fill=\"#888\">× × × × ×</text>\n    <text x=\"280\" y=\"120\" font-size=\"10\" fill=\"#888\">× × × × ×</text>\n    <text x=\"280\" y=\"150\" font-size=\"10\" fill=\"#888\">× × × × ×</text>\n    <text x=\"280\" y=\"180\" font-size=\"10\" fill=\"#888\">× × × × ×</text>\n  </g>\n  <line x1=\"300\" y1=\"150\" x2=\"400\" y2=\"150\" stroke=\"#333\" stroke-width=\"2\" marker-end=\"url(#a3)\"/>\n  <text x=\"340\" y=\"168\" font-size=\"11\" fill=\"#333\">v (−q)</text>\n  <line x1=\"360\" y1=\"150\" x2=\"360\" y2=\"185\" stroke=\"#3f6ae0\" stroke-width=\"3\" marker-end=\"url(#a3b)\"/>\n  <text x=\"330\" y=\"200\" font-size=\"11\" fill=\"#3f6ae0\">F (down — flipped)</text>\n  <defs>\n    <marker id=\"a3\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#333\"/></marker>\n    <marker id=\"a3r\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#e0473f\"/></marker>\n    <marker id=\"a3b\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#3f6ae0\"/></marker>\n  </defs>\n</svg>\n<p class=\"diagram-caption\">Right-hand rule for a positive charge moving right through a field into the page (force is up); for a negative charge in the same setup, the force flips to point down.</p>\n</div>\n\n\n  <h2 id=\"s121\"><span class=\"num\">12.1</span>Magnetic Fields</h2>\n  <p>Magnetic fields are produced by moving charge — current flowing in a wire, or the intrinsic \"spin\" of electrons that makes permanent magnets work in the first place. Field lines run from a magnet's north pole to its south pole outside the magnet, and always form complete closed loops (they never just stop somewhere in space).</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — This Comes Up Constantly</span>\n    <p>Unlike electric charges, magnetic poles always come in N-S pairs. There's no such thing as an isolated magnetic \"monopole,\" and no one has ever found one. Cut a bar magnet in half, expecting to isolate a pure N piece and a pure S piece, and here's what actually happens: you just get two smaller magnets, each with its own complete N and S pole. It's genuinely counterintuitive the first time you hear it.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Field Lines and Poles.</strong> A bar magnet's field lines are sketched. At a point just outside the magnet, the field lines are dense and point toward the magnet. Which pole is closest to that point?</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">Field lines run from a magnet's north pole to its south pole outside the magnet — always in that direction, no exceptions. If the lines near this point are pointing <em>toward</em> the magnet, that means they're on their way to terminate there, which only happens at a <strong>south pole</strong>. Density being high just confirms the point is close to the magnet itself (density falls off with distance, same idea as electric field lines), but it's the direction of the lines — toward vs. away — that actually identifies which pole is nearby.</div>\n    </details>\n  </div>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>The single most important fact in this whole unit</div>\n    <p>The magnetic force on a moving charge is <strong>always perpendicular</strong> to its velocity. Here's why that matters so much: a force perpendicular to motion can never do work (remember W = Fd cosθ — with θ = 90°, that's automatically zero). So magnetic forces <strong>never change a charge's speed or kinetic energy</strong>, only its direction. This one fact is the backbone underneath nearly every circular-motion-in-a-magnetic-field question you'll ever see on this exam.</p>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s122\"><span class=\"num\">12.2</span>Magnetism and Moving Charges</h2>\n  <div class=\"eq\">\n    <div class=\"main\">F = qv × B &nbsp;·&nbsp; |F| = |q||v||B|sinθ</div>\n    <div class=\"sub\">θ = angle between v and B</div>\n  </div>\n  <p>The SI unit of magnetic field strength B is the <strong>tesla (T)</strong>. You can read its definition straight off this equation: solving F = qvB for B gives units of N/(C·m/s), which simplifies to N/(A·s·m/s) = N/(A·m) — so 1 T = 1 N/(A·m), equivalently 1 kg/(A·s²). Keep this in your back pocket for any question that asks you to work out or verify the tesla's unit combination.</p>\n  <p>Notice that sinθ tucked into the equation — it matters more than it looks like it does. A charge moving parallel (or antiparallel) to the field feels <strong>zero</strong> magnetic force, since sin(0°) = 0. Maximum force happens when velocity is exactly perpendicular to the field. Worth checking this angle before you assume there's any force at all.</p>\n\n  <h3>Circular motion in a magnetic field</h3>\n  <p>Since the magnetic force is always perpendicular to velocity, it behaves exactly like a centripetal force — constantly redirecting the charge without ever speeding it up or slowing it down. Left alone in a uniform field, this produces perfect uniform circular motion.</p>\n  <div class=\"eq\"><div class=\"main\">qvB = mv²/r &nbsp;⟹&nbsp; r = mv / (qB)</div></div>\n  <p>A bigger radius means either a faster-moving or more massive particle (harder to turn onto a tight circle), or a weaker field / smaller charge (less turning force available to bend the path).</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Direction and Radius.</strong> A proton moves to the right (+x) with speed v into a uniform magnetic field pointing into the page (−z). Find the direction of the magnetic force, and describe the resulting path.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">Point your fingers along +x (velocity), curl them into the page (−z, the field direction) — your thumb ends up pointing <strong>+y (upward)</strong>. Since the proton is positive, that's the force direction directly, no flip needed. But here's the twist: since the force always stays perpendicular to velocity, as the proton curves upward, the force direction rotates right along with it, always staying perpendicular — and that's exactly what produces a full <strong>circular path</strong>, curving upward while still moving to the right, then curving back to the left once it passes the top of the arc, eventually tracing a complete (counterclockwise) circle. If this were an electron instead (negative charge), the initial force would be downward instead — a full 180° flip, purely because of the sign.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>The single most common right-hand-rule error isn't forgetting the rule — it's mixing up which hand-part does which job. Fingers point along <strong>velocity</strong> (or current, for a wire). You <strong>curl</strong> those fingers toward the field. The <strong>thumb</strong> gives the force, for a positive charge. Students under time pressure often swap the roles — pointing fingers along the field instead of velocity, or reading the force off the fingers instead of the thumb. Slow down and do the physical motion with your actual hand rather than trying to visualize it purely in your head; it's faster in the long run than re-deriving a wrong answer.</p>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Velocity Selectors</span>\n    <p>When a charge moves through a region with BOTH an electric field E and a magnetic field B, arranged so the two forces point in opposite directions, there's exactly one speed at which they cancel and the charge travels in a straight line: qE = qvB, so v = E/B. Notice the charge q cancels out completely — this speed depends only on the field strengths, not on the particle's charge or mass. This is called a <strong>velocity selector</strong>, and it's a very common AP setup for isolating particles of one specific speed.</p>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s123\"><span class=\"num\">12.3</span>Magnetism and Current-Carrying Wires</h2>\n  <p>A current-carrying wire is really just a huge organized collection of moving charges, so it makes sense that wires feel forces in magnetic fields too — and that wires themselves generate magnetic fields, since current literally is moving charge.</p>\n  <h3>Force on a wire in an external field</h3>\n  <div class=\"eq\"><div class=\"main\">|F| = |I||ℓ||B|sinθ</div><div class=\"sub\">Same right-hand rule, fingers along current direction I instead of v</div></div>\n  <h3>Field created by a long, straight current-carrying wire</h3>\n  <div class=\"eq\"><div class=\"main\">B = μ₀I / (2πr)</div><div class=\"sub\">Direction: grab the wire with your right thumb pointing along I — your curled fingers show B's direction, circling the wire</div></div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Field at the Center of a Current Loop</span>\n    <p>A current loop uses a DIFFERENT application of the same right hand: curl your fingers around the loop in the direction the current flows; your thumb points in the direction of the magnetic field at the loop's center. A current loop's field looks like a bar magnet's — one face acts like a north pole (where field lines emerge, in the direction your thumb points), the other like a south pole. This is the rule you'll need in reverse for Lenz's Law problems later on: given the field direction you need, curl your fingers around the loop to find which way the current must flow.</p>\n  </div>\n\n  <p>Notice this field weakens with distance as 1/r, not 1/r² like the point-charge fields you got used to in Unit 10. That's a genuinely different falloff rate, worth explicitly remembering, since it's easy to default to the inverse-square pattern out of habit.</p>\n<div class=\"diagram\">\n<svg width=\"360\" height=\"280\" viewBox=\"0 0 360 280\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"180\" y1=\"260\" x2=\"180\" y2=\"20\" stroke=\"#333\" stroke-width=\"4\" marker-end=\"url(#a4)\"/>\n  <text x=\"188\" y=\"30\" font-size=\"12\" fill=\"#333\">I</text>\n  <circle cx=\"90\" cy=\"140\" r=\"20\" fill=\"none\" stroke=\"#555\" stroke-width=\"1.5\"/>\n  <text x=\"80\" y=\"145\" font-size=\"16\" fill=\"#555\">•</text>\n  <text x=\"60\" y=\"175\" font-size=\"11\" fill=\"#555\">B out of page</text>\n  <circle cx=\"270\" cy=\"140\" r=\"20\" fill=\"none\" stroke=\"#555\" stroke-width=\"1.5\"/>\n  <text x=\"262\" y=\"146\" font-size=\"14\" fill=\"#555\">×</text>\n  <text x=\"245\" y=\"175\" font-size=\"11\" fill=\"#555\">B into page</text>\n  <defs>\n    <marker id=\"a4\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#333\"/></marker>\n  </defs>\n</svg>\n<p class=\"diagram-caption\">Field from a long straight wire carrying current I (upward): using the grip rule, the field points out of the page on the left side and into the page on the right side.</p>\n</div>\n\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p><strong>Force Between Two Parallel Wires.</strong> Two long, straight wires run parallel to each other, both carrying current in the SAME direction. Do they attract or repel?</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">They <strong>attract</strong>. Wire 1's field circles around it; at Wire 2's location, that field points in a specific direction (found via the grab-the-wire rule). Apply the force rule to Wire 2 sitting in that field, and you find the force pulls Wire 2 toward Wire 1. Here's a genuinely memorable contrast to keep in your back pocket: <strong>parallel currents (same direction) attract, antiparallel currents (opposite directions) repel</strong> — the exact reverse of \"likes repel\" for electric charge. This flip-of-intuition is a favorite thing for the AP exam to test, specifically because it's counterintuitive if you're on autopilot.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>It's easy to default to an inverse-square falloff out of habit, since that's what governed every field in Unit 10's electric-field material. A long straight wire's magnetic field falls off as 1/r — a gentler, direct inverse relationship, not 1/r². Doubling your distance from a wire only cuts the field in half, not to one-fourth. Keep the two falloff rates filed separately: point charges and Coulomb's Law get 1/r², long straight wires get 1/r.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p><strong>Comparing Field at Two Distances.</strong> A long straight wire carries current I. Point A is 0.10 m from the wire; Point B is 0.40 m from the wire. Find the ratio of the field at A to the field at B.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">Since B = μ₀I/(2πr) ∝ 1/r, the ratio of fields is just the inverse ratio of distances: B<sub>A</sub>/B<sub>B</sub> = r<sub>B</sub>/r<sub>A</sub> = 0.40/0.10 = <strong>4</strong>. Point A's field is 4 times stronger than Point B's — notice this is a direct ratio, not squared. If this were an electric field from a point charge instead, quadrupling the distance would cut the field to 1/16, not 1/4 — a good gut-check for whether you've defaulted to the wrong falloff rate.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s124\"><span class=\"num\">12.4</span>Electromagnetic Induction and Faraday's Law</h2>\n  <p>This section is where magnetism loops back and connects to circuits — a changing magnetic environment can actually create a current, with no battery required anywhere in the picture.</p>\n  <h3>Magnetic flux</h3>\n  <div class=\"eq\"><div class=\"main\">Φ_B = B·A·cosθ</div><div class=\"sub\">θ = angle between B and the area's normal (perpendicular) direction</div></div>\n  <p>Flux measures how much field \"passes through\" a given area — maximum when the field is perpendicular to the surface (θ = 0°), zero when the field runs parallel to the surface (θ = 90°, grazing along it without actually crossing through).</p>\n\n  <h3>Faraday's Law</h3>\n  <div class=\"eq\"><div class=\"main\">ε = −N (ΔΦ_B / Δt)</div><div class=\"sub\">N = number of loops</div></div>\n  <p>An EMF — and therefore a current, if the circuit happens to be closed — is induced whenever magnetic flux through a loop CHANGES. Not when flux is simply present, specifically when it's changing. A steady, unchanging flux induces absolutely nothing, no matter how strong that field happens to be. This trips people up constantly, so let it sink in: strong and constant is not the same as changing.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Three Ways to Change Flux</span>\n    <p>Since Φ = BAcosθ, flux changes if ANY of the three factors change: the field strength B changes, the loop's area A changes (a loop being stretched or shrunk), or the angle θ between the field and the loop changes (a loop being rotated). Figuring out which of these three is actually varying in a given problem is usually the whole battle — once you spot it, the rest tends to follow.</p>\n  </div>\n\n  <h3>Lenz's Law: the direction of the induced current</h3>\n  <p>Lenz's Law says the induced current flows in whatever direction creates a magnetic field that <strong>opposes the CHANGE</strong> in flux — not the flux itself, specifically the change happening to it.</p>\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>This is genuinely the most commonly misunderstood idea in the whole unit. Students often assume Lenz's Law means the induced current always opposes the existing field — it doesn't. It opposes whatever is currently HAPPENING to the flux, which is a different thing entirely. If flux is increasing, the induced current fights to keep it from increasing further, creating an opposing field. If flux is decreasing, the induced current fights to prop it back up, creating a field in the SAME direction as the original, to resist that decrease. Nature resists change, in whichever direction that change happens to be occurring — never assume the answer is automatically \"opposite\" without checking whether flux is going up or down first.</p>\n  </div>\n\n  <h3>Motional EMF</h3>\n  <p>Here's a special case that's very testable: a conducting rod of length L moves with speed v through a uniform field B, perpendicular to both its own length and its velocity.</p>\n  <div class=\"eq\"><div class=\"main\">ε = BLv</div></div>\n  <p>This is really just Faraday's Law wearing a disguise — the rod sweeps out area over time, changing the flux through whatever circuit it's part of, and this equation is the shortcut that skips straight to the resulting EMF without making you derive it from scratch each time.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p><strong>Lenz's Law in Action.</strong> A circular loop sits flat on a table, with a bar magnet's north pole approaching from directly above, moving downward toward the loop. Find the direction of the induced current in the loop, as viewed from above.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">As the north pole approaches, the downward-pointing flux through the loop is <strong>increasing</strong>. By Lenz's Law, the induced current has to create its own field that OPPOSES this increase — meaning the induced field inside the loop needs to point upward, fighting against the growing downward flux. Using the right-hand rule for a loop (curl your fingers in the current's direction, thumb gives the field direction inside the loop), an upward-pointing field inside the loop requires the current to flow <strong>counterclockwise</strong>, viewed from above. Now here's the useful part: if the magnet were instead moving AWAY from the loop, the flux would be decreasing rather than increasing, and the induced current would need to reinforce it instead — flowing clockwise, the exact opposite answer from the same physical setup, purely because the magnet's motion reversed.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Execute the right-hand rule correctly and consistently, including the negative-charge flip.</li>\n      <li>Explain why magnetic force does no work, and use that fact to reason about circular motion.</li>\n      <li>Find the field from a long straight wire, including its 1/r falloff and its circular direction.</li>\n      <li>Predict whether parallel wires attract or repel based on current direction.</li>\n      <li>Identify all three ways magnetic flux can change (B, A, or θ).</li>\n      <li>Apply Lenz's Law correctly — opposing the CHANGE, not the field itself.</li>\n      <li>Use motional EMF (ε = BLv) for a rod sweeping through a field.</li>\n    </ul>\n  </div>\n\n  <div class=\"formula-summary\">\n    <span class=\"tag-label recap\">Unit 12 Formula Summary</span>\n    <table class=\"formula-table\">\n      <tr><th>Concept</th><th>Formula</th></tr>\n      <tr><td>Force on a moving charge</td><td>|F| = |q||v||B|sinθ</td></tr>\n      <tr><td>Radius of circular motion</td><td>r = mv/(qB)</td></tr>\n      <tr><td>Force on a current-carrying wire</td><td>|F| = |I||ℓ||B|sinθ</td></tr>\n      <tr><td>Field from a long straight wire</td><td>B = μ₀I/(2πr) &nbsp;(falls off as 1/r)</td></tr>\n      <tr><td>Magnetic flux</td><td>Φ_B = BAcosθ</td></tr>\n      <tr><td>Faraday's Law</td><td>ε = −N(ΔΦ_B/Δt)</td></tr>\n      <tr><td>Motional EMF</td><td>ε = BLv</td></tr>\n    </table>\n  </div>\n\n  <h2 id=\"practice\"><span class=\"num\">📘</span>Unit 12 Practice Set</h2>\n  <p>Work every problem before checking the answer. For direction questions, physically use your right hand — don't try to do it in your head.</p>\n\n  <h3>Conceptual</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>Explain why a magnetic field can never change a charged particle's speed, only its direction.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>A loop of wire sits in a magnetic field with the field strength increasing at a constant rate. Is a current induced? Explain, referencing Faraday's Law.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>Two parallel wires carry current in opposite directions. Do they attract or repel?</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>A charge moves parallel to a magnetic field line. Find the magnitude of the magnetic force on it.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">5</span><span>A bar magnet's south pole moves away from a loop of wire. Using Lenz's Law, will the induced current oppose or reinforce the existing flux through the loop as the magnet leaves?</span></div>\n\n  <h3>Numerical</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">6</span><span>An electron moves at 3.0×10⁶ m/s perpendicular to a 0.50 T field. Find the magnitude of the magnetic force on it. (q = 1.6×10⁻¹⁹ C)</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">7</span><span>A proton moves in a circular path of radius 0.20 m in a 0.80 T field. Find its speed. (m = 1.67×10⁻²⁷ kg)</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">8</span><span>A straight wire carries 4.0 A and is 0.30 m long, oriented perpendicular to a 0.60 T field. Find the force on the wire.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">9</span><span>Find the magnetic field strength 0.050 m from a long straight wire carrying 10 A. (μ₀ = 4π×10⁻⁷ T·m/A)</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">10</span><span>A 0.40 m rod moves at 5.0 m/s perpendicular to a 0.25 T field. Find the motional EMF induced.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">11</span><span>A circular loop of area 0.020 m² sits with its plane perpendicular to a 0.60 T field. Find the magnetic flux through the loop.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">12</span><span>The flux through a single loop changes from 0.030 Wb to 0.010 Wb in 0.50 s. Find the magnitude of the induced EMF.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">13</span><span>A 10-turn coil experiences a flux change of 0.0040 Wb per loop over 0.20 s. Find the induced EMF.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">14</span><span>An electron travels at 2.0×10⁵ m/s in a circle of radius 0.010 m in a magnetic field. Find the field strength. (m = 9.11×10⁻³¹ kg, q = 1.6×10⁻¹⁹ C)</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">15</span><span>A square loop of side 0.10 m rotates so the angle between its normal and a 0.40 T field changes from 0° to 90°. Find the flux at each angle.</span></div>\n\n  <h3 style=\"margin-top:30px;\">Answer Key</h3>\n  <div class=\"answer-key\">\n    <details><summary>Question 1</summary><div class=\"a-content\">Magnetic force is always perpendicular to velocity, and work requires a force component along the direction of motion (W = Fd cosθ). A perpendicular force does zero work, so kinetic energy — and therefore speed — never changes, even as direction does.</div></details>\n    <details><summary>Question 2</summary><div class=\"a-content\">Yes, a current is induced. Faraday's Law states EMF is induced whenever flux changes — since B is increasing (with A and θ presumably fixed), Φ = BAcosθ is changing, which induces an EMF and, in a closed loop, a current.</div></details>\n    <details><summary>Question 3</summary><div class=\"a-content\">They repel. Parallel currents (same direction) attract; antiparallel currents (opposite directions) repel — the reverse of the \"likes repel\" rule for electric charges.</div></details>\n    <details><summary>Question 4</summary><div class=\"a-content\">Zero. F = qvBsinθ, and for motion parallel to the field, θ = 0°, so sinθ = 0 and the force is zero regardless of speed or field strength.</div></details>\n    <details><summary>Question 5</summary><div class=\"a-content\">The induced current will reinforce the existing flux, trying to prevent it from decreasing as the magnet leaves. Lenz's Law opposes the CHANGE (a decrease, here), not the flux itself — so the induced current creates a field in the same direction as the original to fight against that decrease.</div></details>\n    <details><summary>Question 6</summary><div class=\"a-content\">F = qvB = (1.6×10⁻¹⁹)(3.0×10⁶)(0.50) = <strong>2.4 × 10⁻¹³ N</strong>.</div></details>\n    <details><summary>Question 7</summary><div class=\"a-content\">From r = mv/(qB), solve for v: v = rqB/m = (0.20)(1.6×10⁻¹⁹)(0.80)/(1.67×10⁻²⁷) ≈ <strong>1.5 × 10⁷ m/s</strong>.</div></details>\n    <details><summary>Question 8</summary><div class=\"a-content\">F = BILsinθ = (0.60)(4.0)(0.30)(sin 90°) = <strong>0.72 N</strong>.</div></details>\n    <details><summary>Question 9</summary><div class=\"a-content\">B = μ₀I/(2πr) = (4π×10⁻⁷)(10)/(2π×0.050) = (2×10⁻⁷)(10)/0.050 = <strong>4.0 × 10⁻⁵ T</strong>.</div></details>\n    <details><summary>Question 10</summary><div class=\"a-content\">ε = BLv = (0.25)(0.40)(5.0) = <strong>0.50 V</strong>.</div></details>\n    <details><summary>Question 11</summary><div class=\"a-content\">Φ = BAcosθ = (0.60)(0.020)(cos 0°) = <strong>0.012 Wb</strong>.</div></details>\n    <details><summary>Question 12</summary><div class=\"a-content\">ε = ΔΦ/Δt = (0.030 − 0.010)/0.50 = 0.020/0.50 = <strong>0.040 V</strong>.</div></details>\n    <details><summary>Question 13</summary><div class=\"a-content\">ε = N(ΔΦ/Δt) = (10)(0.0040/0.20) = (10)(0.020) = <strong>0.20 V</strong>.</div></details>\n    <details><summary>Question 14</summary><div class=\"a-content\">From r = mv/(qB), solve for B: B = mv/(rq) = (9.11×10⁻³¹)(2.0×10⁵)/[(0.010)(1.6×10⁻¹⁹)] ≈ <strong>1.1 × 10⁻⁴ T</strong>.</div></details>\n    <details><summary>Question 15</summary><div class=\"a-content\">At θ = 0°: Φ = BAcos(0°) = (0.40)(0.010)(1) = <strong>4.0 × 10⁻³ Wb</strong> (maximum, field perpendicular to loop). At θ = 90°: Φ = BAcos(90°) = <strong>0 Wb</strong> (field runs parallel to the loop's surface, none of it \"passes through\").</div></details>\n  </div>\n\n  <div class=\"footer-nav\">\n    Next up: head to the <strong>Unit 12 QBank</strong> to drill these ideas — especially the right-hand rule and Lenz's Law — then continue to <strong>Unit 13 — Geometric Optics</strong>.\n  </div>\n\n</div>\n",
  "13": "<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Physics 2</div>\n  <h1>Geometric Optics</h1>\n  <p class=\"sub\">Geometric optics — mirrors, lenses, and refraction. The physics is simple; the sign conventions are where every point actually gets lost or won.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 12–15%</span>\n    <span class=\"pill\">4 topics</span>\n    <span class=\"pill\">15 practice problems</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s131\">13.1 Reflection</a></li>\n    <li><a href=\"#s132\">13.2 Mirror Images</a></li>\n    <li><a href=\"#s133\">13.3 Refraction</a></li>\n    <li><a href=\"#s134\">13.4 Lens Images</a></li>\n    <li><a href=\"#practice\">Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <p class=\"quote\">\"Mirrors and lenses use the exact same equation. Everything hard about this unit is just sign conventions and ray-tracing discipline.\" — Unit 13</p>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Master This First — The Sign Convention Table</span>\n    <p>Every mirror and lens problem uses the same two equations:</p>\n    <div class=\"eq\" style=\"margin:10px 0;\"><div class=\"main\">1/s<sub>o</sub> + 1/s<sub>i</sub> = 1/f &nbsp;·&nbsp; M = h<sub>i</sub>/h<sub>o</sub> = −s<sub>i</sub>/s<sub>o</sub></div></div>\n    <p>What changes between mirrors and lenses is only the SIGN CONVENTION for f, s<sub>i</sub>, and the resulting image type. Memorize this table cold — it resolves nearly every \"is the image real or virtual, upright or inverted\" question instantly:</p>\n    <table class=\"formula-table\" style=\"margin:10px 0 0;\">\n      <tr><th>Quantity</th><th>Positive means</th><th>Negative means</th></tr>\n      <tr><td>f (mirror)</td><td>Concave (converging)</td><td>Convex (diverging)</td></tr>\n      <tr><td>f (lens)</td><td>Converging lens</td><td>Diverging lens</td></tr>\n      <tr><td>s<sub>i</sub></td><td>Real image (mirror: same side as object; lens: opposite side)</td><td>Virtual image</td></tr>\n      <tr><td>M</td><td>Upright image</td><td>Inverted image</td></tr>\n    </table>\n  </div>\n\n  <h2 id=\"s131\"><span class=\"num\">13.1</span>Reflection</h2>\n  <p>Light reflecting off a surface obeys one deceptively simple rule, and honestly, everything about mirrors in this unit just builds on it.</p>\n  <div class=\"eq\"><div class=\"main\">θ_incidence = θ_reflection</div><div class=\"sub\">both angles measured from the NORMAL — the line perpendicular to the surface, not the surface itself</div></div>\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Specular vs. Diffuse Reflection</span>\n    <p>The law of reflection is always true ray-by-ray, but what it looks like depends on the surface. A smooth surface (like a mirror or still water) reflects a bundle of parallel incoming rays as still-parallel outgoing rays — this is <strong>specular reflection</strong>, and it's what lets you see a sharp image. A rough surface (like paper or a wall) reflects each ray at the correct angle relative to ITS own tiny patch of surface, but since those patches point in all different directions, the rays scatter every which way — this is <strong>diffuse reflection</strong>, and it's why you can see a rough surface from any angle but it never forms an image.</p>\n  </div>\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Angles in optics are always measured from the normal — the perpendicular to the surface — never from the surface itself. Here's where this bites people: a ray hitting a mirror \"at a steep angle\" relative to the surface might actually have a SMALL angle of incidence, since it's nearly perpendicular to that surface. Get in the habit of physically drawing the normal line first, every single time, before you try to measure any angle at all.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Rotating a Mirror.</strong> A ray strikes a flat mirror at a 25° angle of incidence. The mirror is then rotated by 10° about an axis lying in its own surface, in the direction that increases the angle of incidence, with the incoming ray unchanged. Find the new angle between the incident and reflected rays.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">Originally, the angle between the incident and reflected rays is twice the angle of incidence (since incidence = reflection, both measured from the normal): 2(25°) = 50°. Rotating the mirror by 10° rotates its normal by that same 10°, which shifts the reflected ray by <strong>twice</strong> the mirror's rotation — a general rule worth having ready: rotate the mirror by θ, and the reflected ray deflects by 2θ, for a fixed incoming ray. So the reflected ray shifts by 20°, and the new angle between incident and reflected rays is 50° + 20° = <strong>70°</strong>. This \"double the mirror's rotation\" rule shows up in optical instruments (like galvanometer mirrors) and is a favorite twist on an otherwise simple reflection question.</div>\n    </details>\n  </div>\n  <p>A flat (plane) mirror always produces a <strong>virtual, upright, same-size</strong> image, located as far behind the mirror as the object sits in front of it. This is the one case in the whole unit where you don't need the mirror equation at all — it's just true by simple geometry, every single time, no calculation required.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Why You Only Need a Half-Height Mirror</span>\n    <p>A common surprise: to see your entire reflection in a flat mirror, the mirror only needs to be HALF your height, no matter how far back you stand. Here's why: light from the top of your head reflects off the mirror at the exact midpoint between your eyes' height and the top of your head (since angle of incidence = angle of reflection), and light from your feet reflects off the midpoint between your eyes' height and your feet. Those two reflection points are always exactly half your height apart, regardless of your distance from the mirror — so a mirror spanning just that gap shows your full reflection.</p>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s132\"><span class=\"num\">13.2</span>Images Formed by Mirrors</h2>\n  <p>Curved mirrors come in two flavors: <strong>concave</strong> (curves inward, like the inside of a spoon — converges light, positive f) and <strong>convex</strong> (curves outward, like the back of a spoon — diverges light, negative f). Because f is always negative for a convex mirror, 1/s<sub>i</sub> = 1/f − 1/s<sub>o</sub> is always negative for any positive object distance — so a convex mirror always produces a virtual image (the reflected rays diverge and never actually meet behind the mirror; they only appear to), and that image is always upright and reduced, regardless of how far away the object is.</p>\n\n  <h3>Ray tracing: the three principal rays</h3>\n  <p>For a concave mirror, three specific rays are genuinely easy to trace by hand, and wherever any two of them cross tells you exactly where the image forms:</p>\n  <ol class=\"steps\">\n    <li>A ray parallel to the axis reflects THROUGH the focal point.</li>\n    <li>A ray through the focal point reflects back PARALLEL to the axis.</li>\n    <li>A ray through the center of curvature reflects straight back on itself.</li>\n  </ol>\n  <p>For a convex mirror, the same rules apply in spirit, but the rays diverge AWAY from a virtual focal point sitting behind the mirror, rather than converging in front of it.</p>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>This one idea explains almost every mirror image question</div>\n    <p>For a concave mirror, where the object sits relative to the focal point completely determines the image type. Object beyond the center of curvature (2f) gives a smaller, inverted, real image. Object between f and 2f gives a larger, inverted, real image. Object exactly at 2f gives a real, inverted image that is the SAME SIZE as the object (M = −1) — the boundary case between the reduced and magnified real-image zones. Object exactly at f gives no image at all (the rays emerge parallel, never converging anywhere). Object inside f, closer than the focal point, gives a magnified, upright, VIRTUAL image — this is exactly how a magnifying mirror works, and it's worth picturing a physical dentist's mirror the next time you see this scenario.</p>\n  </div>\n<div class=\"diagram\">\n<svg width=\"480\" height=\"300\" viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"20\" y1=\"230\" x2=\"460\" y2=\"230\" stroke=\"#999\" stroke-width=\"1\" stroke-dasharray=\"4,4\"/>\n  <path d=\"M 400 100 Q 380 230 400 360\" fill=\"none\" stroke=\"#333\" stroke-width=\"3\"/>\n  <circle cx=\"240\" cy=\"230\" r=\"3\" fill=\"#333\"/>\n  <text x=\"236\" y=\"248\" font-size=\"11\" fill=\"#333\">C (2f)</text>\n  <circle cx=\"320\" cy=\"230\" r=\"3\" fill=\"#333\"/>\n  <text x=\"316\" y=\"248\" font-size=\"11\" fill=\"#333\">f</text>\n  <line x1=\"80\" y1=\"230\" x2=\"80\" y2=\"130\" stroke=\"#e0473f\" stroke-width=\"3\"/>\n  <text x=\"60\" y=\"125\" font-size=\"11\" fill=\"#e0473f\">Object</text>\n  <line x1=\"80\" y1=\"130\" x2=\"400\" y2=\"130\" stroke=\"#3f6ae0\" stroke-width=\"1.5\"/>\n  <line x1=\"400\" y1=\"130\" x2=\"314.55\" y2=\"227.27\" stroke=\"#3f6ae0\" stroke-width=\"1.5\"/>\n  <line x1=\"80\" y1=\"130\" x2=\"240\" y2=\"230\" stroke=\"#3fae5a\" stroke-width=\"1.5\"/>\n  <line x1=\"240\" y1=\"230\" x2=\"314.55\" y2=\"227.27\" stroke=\"#3fae5a\" stroke-width=\"1.5\"/>\n  <line x1=\"80\" y1=\"130\" x2=\"320\" y2=\"230\" stroke=\"#9a3fae\" stroke-width=\"1.5\"/>\n  <line x1=\"320\" y1=\"230\" x2=\"80\" y2=\"230\" stroke=\"#9a3fae\" stroke-width=\"1.5\"/>\n  <line x1=\"80\" y1=\"230\" x2=\"314.55\" y2=\"227.27\" stroke=\"#9a3fae\" stroke-width=\"1.5\"/>\n  <circle cx=\"314.55\" cy=\"227.27\" r=\"4\" fill=\"#222\"/>\n  <line x1=\"314.55\" y1=\"227.27\" x2=\"314.55\" y2=\"215\" stroke=\"#e0473f\" stroke-width=\"3\"/>\n  <line x1=\"314.55\" y1=\"215\" x2=\"270\" y2=\"150\" stroke=\"#e0473f\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n  <text x=\"150\" y=\"145\" font-size=\"11\" fill=\"#e0473f\">Image (real, inverted)</text>\n</svg>\n<p class=\"diagram-caption\">Concave mirror ray diagram for an object beyond the center of curvature (2f). All three principal rays converge at the same point, forming a real, inverted, reduced image between f and 2f.</p>\n</div>\n\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Concave Mirror Image.</strong> An object sits 30 cm from a concave mirror with focal length 10 cm. Find the image distance and describe the image.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">1/s<sub>o</sub> + 1/s<sub>i</sub> = 1/f → 1/30 + 1/s<sub>i</sub> = 1/10 → 1/s<sub>i</sub> = 1/10 − 1/30 = 3/30 − 1/30 = 2/30 → s<sub>i</sub> = 15 cm. Positive s<sub>i</sub> means a <strong>real image</strong>, sitting 15 cm in front of the mirror. Magnification: M = −s<sub>i</sub>/s<sub>o</sub> = −15/30 = −0.5 — negative means <strong>inverted</strong>, and a magnitude less than 1 means <strong>reduced</strong> (smaller than the object). Notice this matches the \"beyond 2f\" prediction from the key idea above (the object at 30 cm sits beyond 2f = 20 cm) — a good habit is checking your algebra against that qualitative prediction before you commit to an answer.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Students often blur together the four object-distance zones (inside f, at f, between f and 2f, beyond 2f) into a vague sense of \"closer means bigger image.\" Get the boundaries exact: beyond 2f gives a REDUCED real image; between f and 2f gives a MAGNIFIED real image; exactly at f gives NO image; inside f gives a MAGNIFIED VIRTUAL image. Notice the image only flips from real to virtual when the object crosses inside f — not at the 2f boundary, which only affects whether the real image is magnified or reduced. Mixing up which boundary controls which property is one of the most common point-losers in this section.</p>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s133\"><span class=\"num\">13.3</span>Refraction</h2>\n  <p>Light bends when it crosses between materials with different optical densities — described by the index of refraction n, and governed by Snell's Law.</p>\n  <div class=\"eq\"><div class=\"main\">n = c/v &nbsp;·&nbsp; n₁sinθ₁ = n₂sinθ₂</div><div class=\"sub\">n is always ≥ 1; higher n means light travels slower in that material</div></div>\n  <p>Frequency never changes as light crosses a boundary — only speed does — so wavelength must change too: <strong>λ<sub>medium</sub> = λ<sub>vacuum</sub>/n</strong>. Light of a given color has a shorter wavelength inside a denser material (higher n), even though its frequency (and color) stays the same.</p>\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Which Way Does It Bend?</span>\n    <p>Going into a MORE optically dense material (higher n) bends the ray TOWARD the normal. Going into a LESS dense material (lower n) bends the ray AWAY from the normal. Here's a way to make this stick: light \"slows down and steps closer to attention\" entering a denser medium, and \"speeds up and relaxes away\" leaving one. Silly as that mnemonic sounds, it genuinely works under exam pressure.</p>\n  </div>\n\n  <h3>Total internal reflection</h3>\n  <p>When light travels from a denser to a less-dense medium at a steep enough angle, it can't refract out at all — instead, every bit of it reflects back into the denser medium. This happens at angles beyond the <strong>critical angle</strong>:</p>\n  <div class=\"eq\"><div class=\"main\">sinθ_c = n₂/n₁</div><div class=\"sub\">only defined when n₁ > n₂ — going from denser to less dense</div></div>\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Total internal reflection can ONLY happen when light tries to exit INTO a less optically dense material (n₁ > n₂). Light traveling from a less dense into a MORE dense material can never totally internally reflect, no matter the angle — there's no critical angle to even calculate in that direction. If you find yourself computing a critical angle \"backwards,\" stop and recheck which medium is actually denser.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p><strong>Critical Angle.</strong> Light inside glass (n = 1.5) strikes the glass-air boundary (n<sub>air</sub> = 1.0). Find the critical angle.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">sinθ_c = n₂/n₁ = 1.0/1.5 = 0.667. θ_c = sin⁻¹(0.667) ≈ <strong>41.8°</strong>. Any light hitting this boundary from inside the glass at an angle GREATER than 41.8° totally internally reflects — none of it escapes into the air. This is exactly the principle behind fiber optic cables, which rely entirely on total internal reflection to keep light trapped inside as it travels enormous distances with barely any loss.</div>\n    </details>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Lateral Shift Through a Parallel-Faced Block</span>\n    <p>When light enters a slab with parallel front and back faces (a rectangular block of glass, a windowpane), it refracts once entering and once exiting. Because the two faces are parallel, the angle it bends TOWARD the normal going in is undone exactly by the angle it bends AWAY from the normal coming out — so the ray exits parallel to its original direction, just shifted sideways (a <strong>lateral shift</strong>) rather than bent. The thicker the slab or the larger the incidence angle, the bigger that sideways shift.</p>\n    <p>This same parallel-interface idea extends to any stack of parallel-faced layers (e.g. layered fluids or coated glass): for light crossing straight through N parallel boundaries, n₁sinθ₁ = n₂sinθ₂ = n₃sinθ₃ = … stays true at every interface, which means n₁sinθ₁ equals the sine term in the LAST layer directly — you can skip solving for every intermediate angle.</p>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Apparent Depth</span>\n    <p>A pool or fish tank always looks shallower than it really is. Light from the bottom refracts (bends away from the normal) as it exits the water into air, but your eye doesn't know that — it just traces the rays it receives backward in a straight line, which puts the apparent source closer to the surface than the real bottom. This is a direct, everyday consequence of refraction at the water-air interface.</p>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s134\"><span class=\"num\">13.4</span>Images Formed by Lenses</h2>\n  <p>Lenses use the exact same equation as mirrors — 1/s<sub>o</sub> + 1/s<sub>i</sub> = 1/f — but the sign convention flips in one crucial way: for a lens, a <strong>real image forms on the OPPOSITE side</strong> of the lens from the object, since light actually passes through the lens. For a mirror, a real image forms on the SAME side, since light reflects back the way it came.</p>\n\n  <h3>Ray tracing for a converging (convex) lens</h3>\n  <ol class=\"steps\">\n    <li>A ray parallel to the axis refracts THROUGH the far focal point.</li>\n    <li>A ray through the near focal point refracts to travel PARALLEL to the axis after the lens.</li>\n    <li>A ray through the exact center of the lens passes straight through, undeviated — because right at the lens's center the front and back surfaces are effectively parallel (like a thin, flat slab), so the entry and exit refractions cancel out, unlike the mirror's \"through the center of curvature\" rule, which works by hitting the surface dead-on instead.</li>\n  </ol>\n  <p>A diverging (concave) lens always produces a virtual, upright, reduced image, regardless of the object's distance — the one lens case, like the plane mirror, where you can predict the image type on sight, with no calculation required at all.</p>\n<div class=\"diagram\">\n<svg width=\"480\" height=\"300\" viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"20\" y1=\"230\" x2=\"460\" y2=\"230\" stroke=\"#999\" stroke-width=\"1\" stroke-dasharray=\"4,4\"/>\n  <path d=\"M 240 100 Q 265 230 240 360\" fill=\"none\" stroke=\"#333\" stroke-width=\"0\"/>\n  <path d=\"M 240 130 Q 260 230 240 330 Q 220 230 240 130 Z\" fill=\"#dbe9ff\" stroke=\"#333\" stroke-width=\"2\" opacity=\"0.6\" transform=\"translate(0,-100)\"/>\n  <path d=\"M 240 30 Q 262 130 240 230 Q 218 130 240 30 Z\" fill=\"#dbe9ff\" stroke=\"#333\" stroke-width=\"2\"/>\n  <circle cx=\"160\" cy=\"230\" r=\"3\" fill=\"#333\"/>\n  <text x=\"150\" y=\"248\" font-size=\"11\" fill=\"#333\">f</text>\n  <circle cx=\"320\" cy=\"230\" r=\"3\" fill=\"#333\"/>\n  <text x=\"312\" y=\"248\" font-size=\"11\" fill=\"#333\">f</text>\n  <line x1=\"100\" y1=\"230\" x2=\"100\" y2=\"150\" stroke=\"#e0473f\" stroke-width=\"3\"/>\n  <text x=\"80\" y=\"145\" font-size=\"11\" fill=\"#e0473f\">Object</text>\n  <line x1=\"100\" y1=\"150\" x2=\"240\" y2=\"150\" stroke=\"#3f6ae0\" stroke-width=\"1.5\"/>\n  <line x1=\"240\" y1=\"150\" x2=\"380\" y2=\"270\" stroke=\"#3f6ae0\" stroke-width=\"1.5\"/>\n  <line x1=\"100\" y1=\"150\" x2=\"240\" y2=\"230\" stroke=\"#3fae5a\" stroke-width=\"1.5\"/>\n  <line x1=\"240\" y1=\"230\" x2=\"380\" y2=\"270\" stroke=\"#3fae5a\" stroke-width=\"1.5\"/>\n  <line x1=\"100\" y1=\"150\" x2=\"380\" y2=\"270\" stroke=\"#9a3fae\" stroke-width=\"1.5\" stroke-dasharray=\"0\"/>\n  <circle cx=\"380\" cy=\"270\" r=\"4\" fill=\"#222\"/>\n  <line x1=\"380\" y1=\"230\" x2=\"380\" y2=\"270\" stroke=\"#e0473f\" stroke-width=\"3\"/>\n  <text x=\"360\" y=\"290\" font-size=\"11\" fill=\"#e0473f\">Image (real, inverted)</text>\n</svg>\n<p class=\"diagram-caption\">Converging (biconvex) lens ray diagram: a ray parallel to the axis refracts through the far focal point; a ray through the near focal point emerges parallel; a ray through the lens center passes straight through — all three meet at the real, inverted image.</p>\n</div>\n\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p><strong>Converging Lens Image.</strong> An object sits 15 cm from a converging lens with focal length 10 cm. Find the image distance and describe the image.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">1/s<sub>o</sub> + 1/s<sub>i</sub> = 1/f → 1/15 + 1/s<sub>i</sub> = 1/10 → 1/s<sub>i</sub> = 1/10 − 1/15 = 3/30 − 2/30 = 1/30 → s<sub>i</sub> = 30 cm. Positive s<sub>i</sub> means a <strong>real image</strong>, 30 cm on the FAR side of the lens — opposite the object, exactly the lens sign convention discussed above. Magnification: M = −s<sub>i</sub>/s<sub>o</sub> = −30/15 = −2 — negative means <strong>inverted</strong>, magnitude greater than 1 means <strong>magnified</strong>. This is essentially how a basic projector or camera lens setup works: object just outside the focal point produces a large, inverted, real image on the far side.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Mirrors and lenses share the exact same equation, but a real image forms on OPPOSITE sides relative to the object: for a mirror, a real image forms on the SAME side as the object (light bounces back); for a lens, a real image forms on the OPPOSITE side (light passes through). If you carry a mirror-based intuition into a lens problem (or vice versa) about which side of the diagram the real image should land on, you'll misread an otherwise-correct calculation. Always re-confirm which type of instrument you're working with before interpreting a positive s<sub>i</sub>.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p><strong>A Diverging Lens.</strong> An object is placed 40 cm from a diverging lens with focal length 25 cm. Find the image distance and describe the image.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">1/s<sub>o</sub> + 1/s<sub>i</sub> = 1/f → 1/40 + 1/s<sub>i</sub> = 1/(−25) → 1/s<sub>i</sub> = −1/25 − 1/40 = −8/200 − 5/200 = −13/200 → s<sub>i</sub> ≈ <strong>−15.4 cm</strong>. Negative confirms virtual, as expected — this didn't even need to be calculated to know the sign, since a diverging lens always produces a virtual image regardless of object distance. Magnification: M = −s<sub>i</sub>/s<sub>o</sub> = −(−15.4)/40 ≈ 0.38 — positive (upright), and less than 1 in magnitude (reduced). This matches the general diverging-lens rule exactly: virtual, upright, reduced, for any object distance you're handed.</div>\n    </details>\n  </div>\n<div class=\"diagram\">\n<svg width=\"480\" height=\"300\" viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"20\" y1=\"180\" x2=\"460\" y2=\"180\" stroke=\"#999\" stroke-width=\"1\" stroke-dasharray=\"4,4\"/>\n  <path d=\"M 240 100 Q 220 180 240 260 Q 260 180 240 100 Z\" fill=\"#dbe9ff\" opacity=\"0.6\" stroke=\"#333\" stroke-width=\"2\"/>\n  <circle cx=\"160\" cy=\"180\" r=\"3\" fill=\"#333\"/>\n  <text x=\"152\" y=\"198\" font-size=\"11\" fill=\"#333\">f</text>\n  <circle cx=\"320\" cy=\"180\" r=\"3\" fill=\"#333\"/>\n  <text x=\"312\" y=\"198\" font-size=\"11\" fill=\"#333\">f</text>\n\n  <line x1=\"140\" y1=\"180\" x2=\"140\" y2=\"155\" stroke=\"#e0473f\" stroke-width=\"3\"/>\n  <text x=\"105\" y=\"150\" font-size=\"11\" fill=\"#e0473f\">Object</text>\n\n  <line x1=\"140\" y1=\"155\" x2=\"240\" y2=\"155\" stroke=\"#3f6ae0\" stroke-width=\"1.5\"/>\n  <line x1=\"240\" y1=\"155\" x2=\"440\" y2=\"92.5\" stroke=\"#3f6ae0\" stroke-width=\"1.5\"/>\n  <line x1=\"240\" y1=\"155\" x2=\"195.6\" y2=\"168.9\" stroke=\"#3f6ae0\" stroke-width=\"1\" stroke-dasharray=\"3,3\" opacity=\"0.7\"/>\n\n  <line x1=\"140\" y1=\"155\" x2=\"240\" y2=\"180\" stroke=\"#3fae5a\" stroke-width=\"1.5\"/>\n  <line x1=\"240\" y1=\"180\" x2=\"440\" y2=\"230\" stroke=\"#3fae5a\" stroke-width=\"1.5\"/>\n  <line x1=\"240\" y1=\"180\" x2=\"195.6\" y2=\"168.9\" stroke=\"#3fae5a\" stroke-width=\"1\" stroke-dasharray=\"3,3\" opacity=\"0.7\"/>\n\n  <circle cx=\"195.6\" cy=\"168.9\" r=\"4\" fill=\"#222\"/>\n  <line x1=\"195.6\" y1=\"180\" x2=\"195.6\" y2=\"168.9\" stroke=\"#e0473f\" stroke-width=\"3\"/>\n  <text x=\"130\" y=\"215\" font-size=\"11\" fill=\"#e0473f\">Image (virtual, upright, reduced)</text>\n</svg>\n<p class=\"diagram-caption\">Diverging lens ray diagram: a ray parallel to the axis refracts as if it came from the near focal point; a ray through the lens center passes straight through. Both rays diverge after the lens (solid), but tracing them backward (dashed) shows they appear to come from a single point on the object's side — the virtual, upright, reduced image.</p>\n</div>\n\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Measure every angle from the normal, not the surface.</li>\n      <li>Trace the three principal rays confidently for both mirrors and converging lenses.</li>\n      <li>Use the sign convention table to determine real/virtual and upright/inverted without second-guessing.</li>\n      <li>Apply Snell's Law and know which way light bends entering a denser vs. less-dense material.</li>\n      <li>Find the critical angle and know total internal reflection only occurs going into a LESS dense medium.</li>\n      <li>Remember the one sign-convention difference between mirrors and lenses: which side a real image forms on.</li>\n    </ul>\n  </div>\n\n  <div class=\"formula-summary\">\n    <span class=\"tag-label recap\">Unit 13 Formula Summary</span>\n    <table class=\"formula-table\">\n      <tr><th>Concept</th><th>Formula</th></tr>\n      <tr><td>Law of reflection</td><td>θ<sub>incidence</sub> = θ<sub>reflection</sub></td></tr>\n      <tr><td>Mirror/lens equation</td><td>1/s<sub>o</sub> + 1/s<sub>i</sub> = 1/f</td></tr>\n      <tr><td>Magnification</td><td>M = h<sub>i</sub>/h<sub>o</sub> = −s<sub>i</sub>/s<sub>o</sub></td></tr>\n      <tr><td>Snell's Law</td><td>n = c/v &nbsp;·&nbsp; n₁sinθ₁ = n₂sinθ₂</td></tr>\n      <tr><td>Wavelength in a medium</td><td>λ = λ<sub>vacuum</sub>/n</td></tr>\n      <tr><td>Critical angle</td><td>sinθ<sub>c</sub> = n₂/n₁ &nbsp;(only when n₁ &gt; n₂)</td></tr>\n      <tr><td>Real image, mirror</td><td>forms on the SAME side as the object</td></tr>\n      <tr><td>Real image, lens</td><td>forms on the OPPOSITE side from the object</td></tr>\n    </table>\n  </div>\n\n  <h2 id=\"practice\"><span class=\"num\">📘</span>Unit 13 Practice Set</h2>\n  <p>Work every problem before checking the answer. For ray-tracing questions, actually sketch them — this is a genuinely hands-on skill.</p>\n\n  <h3>Conceptual</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>Explain why total internal reflection can only occur when light travels from a denser into a less-dense medium.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>An object is placed exactly at the focal point of a concave mirror. Describe what happens to the reflected rays.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>Compare the image formed by a diverging (concave) lens for an object very close to the lens versus very far away.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>Light travels from air into water. Does it bend toward or away from the normal? Explain.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">5</span><span>Explain, using the sign convention table, what it means physically when a calculated image distance comes out negative.</span></div>\n\n  <h3>Numerical</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">6</span><span>An object sits 20 cm from a concave mirror with focal length 8.0 cm. Find the image distance.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">7</span><span>Find the magnification for the mirror in Question 6, and describe the image (upright/inverted, magnified/reduced).</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">8</span><span>Light travels from air (n = 1.00) into glass (n = 1.50) at an incidence angle of 40°. Find the refraction angle.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">9</span><span>Find the critical angle for light traveling from water (n = 1.33) into air (n = 1.00).</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">10</span><span>An object sits 25 cm from a converging lens with focal length 15 cm. Find the image distance.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">11</span><span>Find the magnification for the lens in Question 10.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">12</span><span>A convex mirror has focal length −12 cm (negative, per convention). An object sits 18 cm away. Find the image distance.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">13</span><span>Find the speed of light in a medium with index of refraction 1.6. (c = 3.0×10⁸ m/s)</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">14</span><span>An object 4.0 cm tall is placed in front of a lens, forming an image with magnification −0.50. Find the image height.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">15</span><span>A diverging lens has focal length −20 cm. An object sits 30 cm away. Find the image distance.</span></div>\n\n  <h3 style=\"margin-top:30px;\">Answer Key</h3>\n  <div class=\"answer-key\">\n    <details><summary>Question 1</summary><div class=\"a-content\">Snell's Law requires n₁sinθ₁ = n₂sinθ₂. Going from denser (n₁) to less dense (n₂), sinθ₂ = (n₁/n₂)sinθ₁ requires multiplying by a factor greater than 1 — at large enough θ₁, this would require sinθ₂ > 1, which is impossible, so no refracted ray can exist and all the light reflects instead. Going the other direction (less dense to denser), that multiplying factor is always less than 1, so a valid refraction angle always exists.</div></details>\n    <details><summary>Question 2</summary><div class=\"a-content\">The reflected rays emerge parallel to each other — no image forms at all (or, described differently, the image forms at infinity). This is exactly why f is a special, unique location: it's the one object distance with no proper image location.</div></details>\n    <details><summary>Question 3</summary><div class=\"a-content\">Both cases produce a virtual, upright, reduced image — a diverging lens ALWAYS does, regardless of object distance. The image just sits closer to the lens (and appears larger/less reduced, closer to the object's true size) for a closer object, and farther from the lens (appearing smaller/more strongly reduced) for a more distant object, but the type of image never changes.</div></details>\n    <details><summary>Question 4</summary><div class=\"a-content\">Toward the normal. Water is more optically dense than air (n<sub>water</sub> > n<sub>air</sub>), and light bends toward the normal when entering a denser medium.</div></details>\n    <details><summary>Question 5</summary><div class=\"a-content\">A negative image distance means a virtual image — for a mirror, that's an image behind the mirror; for a lens, that's an image on the same side as the object. Either way, a virtual image can't be projected onto a screen; it only exists in the sense that rays appear to diverge from that location.</div></details>\n    <details><summary>Question 6</summary><div class=\"a-content\">1/20 + 1/s<sub>i</sub> = 1/8.0 → 1/s<sub>i</sub> = 1/8.0 − 1/20 = 5/40 − 2/40 = 3/40 → s<sub>i</sub> ≈ <strong>13.3 cm</strong> (real image, in front of the mirror).</div></details>\n    <details><summary>Question 7</summary><div class=\"a-content\">M = −s<sub>i</sub>/s<sub>o</sub> = −13.3/20 ≈ <strong>−0.67</strong> — negative means inverted; magnitude less than 1 means reduced.</div></details>\n    <details><summary>Question 8</summary><div class=\"a-content\">n₁sinθ₁ = n₂sinθ₂ → (1.00)(sin 40°) = (1.50)(sinθ₂) → sinθ₂ = 0.643/1.50 ≈ 0.429 → θ₂ ≈ <strong>25.4°</strong>. The ray bends toward the normal entering the denser glass, exactly as expected.</div></details>\n    <details><summary>Question 9</summary><div class=\"a-content\">sinθ_c = n₂/n₁ = 1.00/1.33 ≈ 0.752 → θ_c ≈ <strong>48.8°</strong>.</div></details>\n    <details><summary>Question 10</summary><div class=\"a-content\">1/25 + 1/s<sub>i</sub> = 1/15 → 1/s<sub>i</sub> = 1/15 − 1/25 = 5/75 − 3/75 = 2/75 → s<sub>i</sub> ≈ <strong>37.5 cm</strong> (real image, opposite side of the lens from the object).</div></details>\n    <details><summary>Question 11</summary><div class=\"a-content\">M = −s<sub>i</sub>/s<sub>o</sub> = −37.5/25 = <strong>−1.5</strong> — inverted, magnified.</div></details>\n    <details><summary>Question 12</summary><div class=\"a-content\">1/18 + 1/s<sub>i</sub> = 1/(−12) → 1/s<sub>i</sub> = −1/12 − 1/18 = −3/36 − 2/36 = −5/36 → s<sub>i</sub> ≈ <strong>−7.2 cm</strong>. Negative means a virtual image, behind the convex mirror — consistent with the fact that convex mirrors always produce virtual, upright, reduced images no matter the object distance.</div></details>\n    <details><summary>Question 13</summary><div class=\"a-content\">v = c/n = (3.0×10⁸)/1.6 ≈ <strong>1.9 × 10⁸ m/s</strong>.</div></details>\n    <details><summary>Question 14</summary><div class=\"a-content\">M = h<sub>i</sub>/h<sub>o</sub> → h<sub>i</sub> = M × h<sub>o</sub> = (−0.50)(4.0) = <strong>−2.0 cm</strong>. The negative sign indicates the image is inverted relative to the object.</div></details>\n    <details><summary>Question 15</summary><div class=\"a-content\">1/30 + 1/s<sub>i</sub> = 1/(−20) → 1/s<sub>i</sub> = −1/20 − 1/30 = −3/60 − 2/60 = −5/60 → s<sub>i</sub> = <strong>−12 cm</strong>. Negative confirms a virtual image, as expected for any diverging lens regardless of object distance.</div></details>\n  </div>\n\n  <div class=\"footer-nav\">\n    Next up: head to the <strong>Unit 13 QBank</strong> to drill ray tracing and sign conventions, then continue to <strong>Unit 14 — Waves, Sound, and Physical Optics</strong>.\n  </div>\n\n</div>\n",
  "14": "<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Physics 2</div>\n  <h1>Waves, Sound &amp; Physical Optics</h1>\n  <p class=\"sub\">Waves — the unit that ties sound, light, and water ripples together under one shared mathematical language.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 12–15%</span>\n    <span class=\"pill\">9 topics</span>\n    <span class=\"pill\">16 practice problems</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s141\">14.1 Wave Basics</a></li>\n    <li><a href=\"#s142\">14.2 Periodic Waves</a></li>\n    <li><a href=\"#s143\">14.3 Boundaries & Polarization</a></li>\n    <li><a href=\"#s144\">14.4 EM Waves</a></li>\n    <li><a href=\"#s145\">14.5 Doppler Effect</a></li>\n    <li><a href=\"#s146\">14.6 Interference & Standing Waves</a></li>\n    <li><a href=\"#s147\">14.7 Diffraction</a></li>\n    <li><a href=\"#s148\">14.8 Double-Slit & Gratings</a></li>\n    <li><a href=\"#s149\">14.9 Thin Film Interference</a></li>\n    <li><a href=\"#practice\">Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <p class=\"quote\">\"Every wave — sound, light, water — obeys the same handful of rules. Learn them once here, and you've learned them for the whole unit.\" — Unit 14</p>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Master This First — Path Difference Decides Everything</span>\n    <p>Whether it's a double slit, a thin film, or two speakers, the same single question determines constructive vs. destructive interference:</p>\n    <ul style=\"margin:10px 0 0;\">\n      <li><strong>Whole number of wavelengths</strong> (mλ) → constructive — the waves arrive in step.</li>\n      <li><strong>Half-integer number of wavelengths</strong> ((m+½)λ) → destructive — the waves arrive exactly out of step.</li>\n    </ul>\n    <p style=\"margin-top:10px;\">The only extra wrinkle is thin films, where a reflection off a higher-index boundary silently adds an extra half-wavelength shift — check for that BEFORE applying the rule above, or the constructive/destructive answer will come out backwards.</p>\n  </div>\n\n  <h2 id=\"s141\"><span class=\"num\">14.1</span>Properties of Waves</h2>\n  <p>A wave carries energy through a medium (or, for light, through empty space) without permanently transporting matter along with it — the medium itself just oscillates in place as the wave passes through it.</p>\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Transverse vs. Longitudinal</span>\n    <p>In a <strong>transverse</strong> wave (light, waves on a string), the medium oscillates PERPENDICULAR to the direction the wave travels. In a <strong>longitudinal</strong> wave (sound), the medium oscillates PARALLEL to the direction of travel — compressing and expanding along the same line the wave moves. Hang onto this distinction, because it matters enormously later on: only transverse waves can be polarized, full stop.</p>\n  </div>\n  <div class=\"eq\"><div class=\"main\">v = fλ</div><div class=\"sub\">wave speed = frequency × wavelength — the single most-used equation in this unit</div></div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Basic Wave Speed.</strong> A sound wave has frequency 440 Hz (concert pitch A) and travels through air at 343 m/s. Find its wavelength. If the same note were played underwater, where sound travels at 1480 m/s, find the new wavelength.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">In air: λ = v/f = 343/440 ≈ 0.78 m. Underwater: λ = v/f = 1480/440 ≈ <strong>3.36 m</strong>. Notice the frequency doesn't change at all between the two cases — 440 Hz is a property of the SOURCE (however fast the source is actually vibrating), not of the medium. What changes is speed, which is set by the medium, and wavelength adjusts to keep v = fλ balanced. This is a genuinely common setup: \"same source, different medium, find how the wavelength changes\" — frequency is always the one quantity you can carry over unchanged.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s142\"><span class=\"num\">14.2</span>Periodic Waves</h2>\n  <p>A periodic wave repeats itself at regular intervals in both time and space — nothing more mysterious than that.</p>\n  <div class=\"eq\"><div class=\"main\">T = 1/f</div><div class=\"sub\">Period and frequency are reciprocals — always</div></div>\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Wave SPEED depends on the medium — how fast sound moves through air vs. water, how fast light moves through glass vs. vacuum. It does NOT depend on frequency or wavelength individually. If frequency changes while the wave stays in the same medium, wavelength has to change to compensate, keeping v = fλ constant. Don't treat v, f, and λ as three independent knobs you can turn freely — only two of them are ever truly independent at once, and the medium locks in the third.</p>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s143\"><span class=\"num\">14.3</span>Boundary Behavior and Polarization</h2>\n  <p>What happens when a wave hits the end of its medium depends entirely on whether that end is fixed or free.</p>\n  <table class=\"formula-table\">\n    <tr><th>Boundary type</th><th>Reflected pulse</th></tr>\n    <tr><td>Fixed end (can't move)</td><td>Inverted (flipped upside down, 180° phase shift)</td></tr>\n    <tr><td>Free end (can move freely)</td><td>Upright (same orientation, no phase shift)</td></tr>\n  </table>\n  <p>This fixed-end phase flip is the exact same physical idea that reappears later in thin-film interference — worth connecting the two now rather than treating them as two unrelated facts to memorize separately.</p>\n  <h3>Polarization</h3>\n  <p>Only transverse waves can be polarized — meaning you can restrict their oscillation to a single plane. A polarizing filter blocks all oscillation except along one specific direction; passing unpolarized light through it cuts intensity roughly in half. Passing already-polarized light through a SECOND filter oriented perpendicular to the first blocks it almost completely — you may have seen this yourself with two pairs of polarized sunglasses.</p>\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Sound waves CANNOT be polarized — they're longitudinal, oscillating along the direction of travel rather than perpendicular to it, so there's no \"plane of oscillation\" to restrict in the first place. If a question asks about polarizing sound, the honest answer is that it's simply not possible, and that's worth stating directly rather than trying to force an answer.</p>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s144\"><span class=\"num\">14.4</span>Electromagnetic Waves</h2>\n  <p>Light is an electromagnetic wave — an oscillating electric field and an oscillating magnetic field, perpendicular to each other AND perpendicular to the direction of travel, propagating through space (even a total vacuum) at speed c.</p>\n  <div class=\"eq\"><div class=\"main\">c = fλ</div><div class=\"sub\">c = 3.00 × 10⁸ m/s, the same wave equation, specific to light</div></div>\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — The EM Spectrum Is One Family</span>\n    <p>Radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays are all fundamentally the SAME kind of wave — electromagnetic — differing only in frequency and, correspondingly, wavelength. Higher frequency means higher photon energy (E = hf, which you'll see again in Unit 15), and that's exactly why X-rays and gamma rays are dangerous while radio waves aren't, despite both technically being \"light\" in the broadest sense.</p>\n  </div>\n<div class=\"diagram\">\n<svg width=\"640\" height=\"200\" viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"specGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#c0392b\"/>\n      <stop offset=\"16%\" stop-color=\"#e07a3f\"/>\n      <stop offset=\"32%\" stop-color=\"#e0c73f\"/>\n      <stop offset=\"48%\" stop-color=\"#3fae5a\"/>\n      <stop offset=\"64%\" stop-color=\"#3f9ae0\"/>\n      <stop offset=\"80%\" stop-color=\"#6a3fe0\"/>\n      <stop offset=\"100%\" stop-color=\"#9a3fae\"/>\n    </linearGradient>\n    <marker id=\"specArrow\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L8,3 L0,6 Z\" fill=\"#333\"/></marker>\n  </defs>\n  <rect x=\"30\" y=\"60\" width=\"560\" height=\"30\" fill=\"url(#specGrad)\" opacity=\"0.85\"/>\n  <line x1=\"30\" y1=\"60\" x2=\"30\" y2=\"90\" stroke=\"#333\" stroke-width=\"1\"/>\n  <line x1=\"130\" y1=\"60\" x2=\"130\" y2=\"90\" stroke=\"#333\" stroke-width=\"1\"/>\n  <line x1=\"230\" y1=\"60\" x2=\"230\" y2=\"90\" stroke=\"#333\" stroke-width=\"1\"/>\n  <line x1=\"330\" y1=\"60\" x2=\"330\" y2=\"90\" stroke=\"#333\" stroke-width=\"1\"/>\n  <line x1=\"390\" y1=\"60\" x2=\"390\" y2=\"90\" stroke=\"#333\" stroke-width=\"1\"/>\n  <line x1=\"470\" y1=\"60\" x2=\"470\" y2=\"90\" stroke=\"#333\" stroke-width=\"1\"/>\n  <line x1=\"590\" y1=\"60\" x2=\"590\" y2=\"90\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text x=\"55\" y=\"50\" font-size=\"11\" fill=\"#333\">Radio</text>\n  <text x=\"150\" y=\"50\" font-size=\"11\" fill=\"#333\">Microwave</text>\n  <text x=\"255\" y=\"50\" font-size=\"11\" fill=\"#333\">Infrared</text>\n  <text x=\"340\" y=\"115\" font-size=\"11\" fill=\"#333\" font-weight=\"bold\">Visible</text>\n  <text x=\"400\" y=\"50\" font-size=\"11\" fill=\"#333\">Ultraviolet</text>\n  <text x=\"490\" y=\"50\" font-size=\"11\" fill=\"#333\">X-ray</text>\n  <text x=\"565\" y=\"50\" font-size=\"11\" fill=\"#333\">Gamma</text>\n  <line x1=\"30\" y1=\"130\" x2=\"590\" y2=\"130\" stroke=\"#333\" stroke-width=\"1.5\" marker-end=\"url(#specArrow)\"/>\n  <text x=\"30\" y=\"150\" font-size=\"11\" fill=\"#333\">longer λ, lower f, lower photon energy</text>\n  <text x=\"380\" y=\"150\" font-size=\"11\" fill=\"#333\">shorter λ, higher f, higher energy</text>\n</svg>\n<p class=\"diagram-caption\">The electromagnetic spectrum: all of these are the same kind of wave, differing only in frequency and wavelength. Visible light — the narrow band your eye detects — sits in the middle, with lower-energy radio/microwave/infrared on one side and higher-energy UV/X-ray/gamma on the other.</p>\n</div>\n\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Identifying a Region of the Spectrum.</strong> An electromagnetic wave has frequency 3.0×10¹⁸ Hz. Find its wavelength, and identify which region of the EM spectrum it falls in.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">λ = c/f = (3.0×10⁸)/(3.0×10¹⁸) = 1.0×10⁻¹⁰ m = 0.1 nm. A wavelength this short — well below the visible range (roughly 400–700 nm) and even below typical ultraviolet — places this wave in the <strong>X-ray</strong> region of the spectrum. Getting comfortable converting quickly between frequency and wavelength, then placing the result on the spectrum from memory (radio → microwave → infrared → visible → ultraviolet → X-ray → gamma, in order of increasing frequency), is worth practicing until it's automatic.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s145\"><span class=\"num\">14.5</span>The Doppler Effect</h2>\n  <p>The Doppler effect is the shift in observed frequency caused by relative motion between a wave source and an observer — you've heard this yourself every time a siren changes pitch as it passes you.</p>\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Direction First, Numbers Second</span>\n    <p>Source and observer moving TOWARD each other → observed frequency INCREASES (pitch sounds higher, wavelengths compress). Moving AWAY from each other → observed frequency DECREASES (pitch sounds lower, wavelengths stretch). Get this directional intuition locked in before you ever touch a formula — on the real exam, a conceptual Doppler question is far more likely to show up than a plug-and-chug numeric one.</p>\n  </div>\n<div class=\"diagram\">\n<svg width=\"560\" height=\"260\" viewBox=\"0 0 560 260\" xmlns=\"http://www.w3.org/2000/svg\">\n  <circle cx=\"150\" cy=\"130\" r=\"95\" fill=\"none\" stroke=\"#3f6ae0\" stroke-width=\"1.5\"/>\n  <circle cx=\"195\" cy=\"130\" r=\"65\" fill=\"none\" stroke=\"#666\" stroke-width=\"1.2\"/>\n  <circle cx=\"240\" cy=\"130\" r=\"35\" fill=\"none\" stroke=\"#666\" stroke-width=\"1.2\"/>\n  <circle cx=\"280\" cy=\"130\" r=\"8\" fill=\"none\" stroke=\"#e0473f\" stroke-width=\"1.5\"/>\n\n  <circle cx=\"280\" cy=\"130\" r=\"5\" fill=\"#333\"/>\n  <text x=\"255\" y=\"115\" font-size=\"10\" fill=\"#333\">source (moving right)</text>\n  <line x1=\"150\" y1=\"200\" x2=\"280\" y2=\"200\" stroke=\"#666\" stroke-width=\"1\" marker-end=\"url(#dopArrow)\"/>\n  <text x=\"185\" y=\"215\" font-size=\"10\" fill=\"#666\">motion</text>\n\n  <text x=\"300\" y=\"60\" font-size=\"11\" fill=\"#e0473f\" font-weight=\"bold\">compressed ahead</text>\n  <text x=\"300\" y=\"78\" font-size=\"10\" fill=\"#e0473f\">→ shorter λ, higher observed f</text>\n\n  <text x=\"10\" y=\"30\" font-size=\"11\" fill=\"#3f6ae0\" font-weight=\"bold\">spread out behind</text>\n  <text x=\"10\" y=\"48\" font-size=\"10\" fill=\"#3f6ae0\">→ longer λ, lower observed f</text>\n\n  <defs>\n    <marker id=\"dopArrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#666\"/></marker>\n  </defs>\n</svg>\n<p class=\"diagram-caption\">A moving source emits successive wavefronts — each one is centered where the source was at the moment it was emitted, and has had a different amount of time to expand. Ahead of the source (right), the wavefronts bunch together (compressed, higher observed frequency); behind it (left), they spread apart (stretched, lower observed frequency).</p>\n</div>\n\n  <div class=\"eq\"><div class=\"main\">f' = f × (v ± v<sub>observer</sub>)/(v ∓ v<sub>source</sub>)</div><div class=\"sub\">v = speed of the wave in the medium; for each of numerator/denominator, toward pairs with the sign shown on that side of the ± / ∓ symbol (so \"both toward\" means numerator + and denominator −, at the same time)</div></div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>An Approaching Ambulance.</strong> An ambulance siren emits sound at 700 Hz. The ambulance moves toward a stationary observer at 30 m/s, through air where sound travels at 343 m/s. Find the frequency the observer hears.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">The observer is stationary, so v<sub>observer</sub> = 0. The source is moving TOWARD the observer, which means the source term in the denominator should make the whole fraction bigger (raising the observed frequency) — so use the minus sign in the denominator: f' = f × v/(v − v<sub>source</sub>) = 700 × 343/(343 − 30) = 700 × 343/313 ≈ <strong>767 Hz</strong>. Before trusting the arithmetic, sanity-check the direction: the source is approaching, so the observed frequency should come out HIGHER than 700 Hz — and 767 Hz does. If you'd gotten a number below 700 Hz here, that would be a signal you picked the wrong sign in the denominator, worth catching before moving on.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s146\"><span class=\"num\">14.6</span>Wave Interference and Standing Waves</h2>\n  <p>When two waves overlap, their displacements simply add together at every single point — this is called superposition, and it's really the whole idea behind interference.</p>\n  <table class=\"formula-table\">\n    <tr><th>Interference type</th><th>Condition</th><th>Result</th></tr>\n    <tr><td>Constructive</td><td>Path difference = mλ (whole number of wavelengths)</td><td>Waves reinforce — bigger amplitude</td></tr>\n    <tr><td>Destructive</td><td>Path difference = (m + ½)λ</td><td>Waves cancel — smaller (or zero) amplitude</td></tr>\n  </table>\n  <h3>Standing waves</h3>\n  <p>A standing wave forms when two identical waves travel in opposite directions along the same medium — like a wave reflecting back on itself along a string. Certain points, called <strong>nodes</strong>, never move at all. Others, called <strong>antinodes</strong>, oscillate with maximum amplitude.</p>\n  <div class=\"eq\"><div class=\"main\">λ_n = 2L/n &nbsp;·&nbsp; f<sub>n</sub> = nv/(2L)</div><div class=\"sub\">string fixed at both ends; n = 1, 2, 3... (harmonic number)</div></div>\n<div class=\"diagram\">\n<svg width=\"480\" height=\"360\" viewBox=\"0 0 480 360\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"20\" y=\"20\" font-size=\"13\" fill=\"#333\" font-weight=\"bold\">n = 1 (fundamental) — 2 nodes</text>\n  <line x1=\"20\" y1=\"60\" x2=\"220\" y2=\"60\" stroke=\"#ccc\" stroke-width=\"1\"/>\n  <path d=\"M 20 60 Q 120 20 220 60\" fill=\"none\" stroke=\"#3f6ae0\" stroke-width=\"2\"/>\n  <circle cx=\"20\" cy=\"60\" r=\"3\" fill=\"#333\"/><circle cx=\"220\" cy=\"60\" r=\"3\" fill=\"#333\"/>\n\n  <text x=\"260\" y=\"20\" font-size=\"13\" fill=\"#333\" font-weight=\"bold\">n = 2 — 3 nodes</text>\n  <line x1=\"260\" y1=\"60\" x2=\"460\" y2=\"60\" stroke=\"#ccc\" stroke-width=\"1\"/>\n  <path d=\"M 260 60 Q 310 20 360 60 Q 410 100 460 60\" fill=\"none\" stroke=\"#3fae5a\" stroke-width=\"2\"/>\n  <circle cx=\"260\" cy=\"60\" r=\"3\" fill=\"#333\"/><circle cx=\"360\" cy=\"60\" r=\"3\" fill=\"#333\"/><circle cx=\"460\" cy=\"60\" r=\"3\" fill=\"#333\"/>\n\n  <text x=\"20\" y=\"200\" font-size=\"13\" fill=\"#333\" font-weight=\"bold\">n = 3 — 4 nodes</text>\n  <line x1=\"20\" y1=\"240\" x2=\"220\" y2=\"240\" stroke=\"#ccc\" stroke-width=\"1\"/>\n  <path d=\"M 20 240 Q 53 200 87 240 Q 120 280 153 240 Q 187 200 220 240\" fill=\"none\" stroke=\"#e0473f\" stroke-width=\"2\"/>\n  <circle cx=\"20\" cy=\"240\" r=\"3\" fill=\"#333\"/><circle cx=\"87\" cy=\"240\" r=\"3\" fill=\"#333\"/><circle cx=\"153\" cy=\"240\" r=\"3\" fill=\"#333\"/><circle cx=\"220\" cy=\"240\" r=\"3\" fill=\"#333\"/>\n\n  <text x=\"260\" y=\"200\" font-size=\"13\" fill=\"#333\" font-weight=\"bold\">n = 4 — 5 nodes</text>\n  <line x1=\"260\" y1=\"240\" x2=\"460\" y2=\"240\" stroke=\"#ccc\" stroke-width=\"1\"/>\n  <path d=\"M 260 240 Q 285 200 310 240 Q 335 280 360 240 Q 385 200 410 240 Q 435 280 460 240\" fill=\"none\" stroke=\"#9a3fae\" stroke-width=\"2\"/>\n  <circle cx=\"260\" cy=\"240\" r=\"3\" fill=\"#333\"/><circle cx=\"310\" cy=\"240\" r=\"3\" fill=\"#333\"/><circle cx=\"360\" cy=\"240\" r=\"3\" fill=\"#333\"/><circle cx=\"410\" cy=\"240\" r=\"3\" fill=\"#333\"/><circle cx=\"460\" cy=\"240\" r=\"3\" fill=\"#333\"/>\n</svg>\n<p class=\"diagram-caption\">Standing wave harmonics on a string fixed at both ends, n = 1 through n = 4. Each harmonic n has n antinodes and n+1 nodes (including the two fixed ends).</p>\n</div>\n\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Standing Wave on a String.</strong> A string of length 1.2 m, fixed at both ends, vibrates in its third harmonic (n = 3). If the wave speed on the string is 40 m/s, find the frequency.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">f<sub>n</sub> = nv/(2L) = (3)(40)/(2 × 1.2) = 120/2.4 = <strong>50 Hz</strong>. Here's a subtlety worth catching: the third harmonic doesn't mean \"three times the length\" — it means three antinodes fit along the string, with the wavelength shortened to fit (λ₃ = 2L/3 = 0.8 m here), which is exactly why frequency scales up with n even though the string's physical length never actually changes.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Node and antinode counts are easy to get off by one. For a string fixed at both ends, the harmonic number n always equals the number of ANTINODES, while the number of NODES (including both fixed ends) is always n + 1. It's tempting to assume nodes and antinodes come in equal counts, but they never do for this boundary condition — there's always exactly one more node than antinode. Recount directly from a sketch rather than trying to recall the rule from memory under pressure.</p>\n  </div>\n\n  <h3>Standing Waves in Air Columns</h3>\n  <p>Sound resonating inside a pipe forms a standing wave in exactly the same spirit as a string fixed at both ends — but the boundary conditions are different, because a pipe's ends aren't \"fixed\" or \"free\" the way a string's are. Instead, a <strong>closed end</strong> (blocked, air can't move) forces a <strong>node</strong> there, while an <strong>open end</strong> (air free to move) forces an <strong>antinode</strong> there. Which combination of ends a pipe has completely changes which harmonics are allowed.</p>\n  <div class=\"eq\"><div class=\"main\">λ_n = 2L/n &nbsp;·&nbsp; f<sub>n</sub> = nv/(2L)</div><div class=\"sub\">open pipe (both ends open, both antinodes); n = 1, 2, 3... — every harmonic allowed, same math as the string case</div></div>\n  <div class=\"eq\"><div class=\"main\">λ_n = 4L/n &nbsp;·&nbsp; f<sub>n</sub> = nv/(4L)</div><div class=\"sub\">closed pipe (one end closed = node, one end open = antinode); n = 1, 3, 5... ONLY — odd harmonics only</div></div>\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Open vs. Closed Pipes</span>\n    <p>An <strong>open pipe</strong> (open at both ends) has an antinode at each end, behaves mathematically just like the fixed-both-ends string, and supports every harmonic: n = 1, 2, 3, 4... A <strong>closed pipe</strong> (closed at one end, open at the other) has a node at the closed end and an antinode at the open end. Because a node and an antinode can only line up a quarter-wavelength apart (not a half-wavelength apart, as node-to-node or antinode-to-antinode requires), the fundamental for a closed pipe is λ₁ = 4L rather than 2L, and — critically — only ODD harmonics (n = 1, 3, 5, 7...) are physically possible. There is no such thing as a closed pipe's \"second harmonic\": the next one up from the fundamental is n = 3, not n = 2.</p>\n  </div>\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>The classic closed-pipe error is treating it like an open pipe or a string: using λ = 2L/n, or including even values of n. Before computing anything, ask which case you're in. Open pipe (or string fixed both ends) → all harmonics, λ_n = 2L/n. Closed pipe → odd harmonics ONLY, λ_n = 4L/n, and the harmonic number itself must be odd (n = 1, 3, 5...) — plugging in n = 2 for a closed pipe describes a standing wave pattern that simply cannot exist there.</p>\n  </div>\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p><strong>Open vs. Closed Pipe, Same Length.</strong> A pipe is 0.85 m long, and the speed of sound in the air inside it is 340 m/s. Find the fundamental frequency (a) if the pipe is open at both ends, and (b) if the pipe is closed at one end.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">(a) Open pipe: f₁ = v/(2L) = 340/(2×0.85) = 340/1.7 = <strong>200 Hz</strong>. (b) Closed pipe: f₁ = v/(4L) = 340/(4×0.85) = 340/3.4 = <strong>100 Hz</strong> — exactly half the open pipe's fundamental, for the identical physical length, purely because the closed end forces a node where the open pipe has an antinode, doubling the effective wavelength needed to fit the fundamental pattern. Note also that the closed pipe's next allowed harmonic isn't 200 Hz (that would be n = 2, which doesn't exist for a closed pipe) — it's the third harmonic, f₃ = 3×100 = 300 Hz.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s147\"><span class=\"num\">14.7</span>Diffraction</h2>\n  <p>Diffraction is the bending of waves around obstacles or through openings. It becomes significant — noticeably bending the wave — when the wavelength is comparable to (or larger than) the size of the obstacle or opening. Passing a wave through even a single narrow opening produces its own bright/dark fringe pattern (single-slit diffraction) — governed by interference between many secondary wavelets originating across that one opening (Huygens' principle) — which is a physically different mechanism from the two-source interference of a double slit, even though both are wave-superposition effects.</p>\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>A LARGER wavelength relative to the opening produces MORE diffraction. This is exactly why sound (long wavelength) diffracts noticeably around a doorway, letting you hear someone in the next room even without a direct line of sight, while visible light (much shorter wavelength) diffracts far less through that same doorway and casts a comparatively sharp shadow. Same physics, wildly different wavelength scale, completely different everyday experience.</p>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s148\"><span class=\"num\">14.8</span>Double-Slit Interference and Diffraction Gratings</h2>\n  <p>When light passes through two closely-spaced slits, it produces a pattern of alternating bright and dark bands on a screen — direct, visible evidence that light behaves as a wave.</p>\n  <div class=\"eq\"><div class=\"main\">d sinθ = mλ</div><div class=\"sub\">d = slit separation; m = 0, ±1, ±2... gives bright fringes (constructive)</div></div>\n  <div class=\"eq\"><div class=\"main\">ΔL = mλ</div><div class=\"sub\">ΔL = path length difference between the two slits to a given point</div></div>\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>The central bright fringe (m = 0) sits exactly opposite the midpoint between the two slits — this is where the path difference is exactly zero, NOT where either individual slit lines up with the screen. Some students expect the brightest spot to align directly with one of the slits; it doesn't, and that mistake is worth deliberately unlearning now.</p>\n  </div>\n<div class=\"diagram\">\n<svg width=\"560\" height=\"300\" viewBox=\"0 0 560 300\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"40\" y1=\"10\" x2=\"40\" y2=\"290\" stroke=\"#333\" stroke-width=\"4\"/>\n  <rect x=\"34\" y=\"130\" width=\"12\" height=\"14\" fill=\"#fff\"/>\n  <rect x=\"34\" y=\"156\" width=\"12\" height=\"14\" fill=\"#fff\"/>\n  <text x=\"5\" y=\"128\" font-size=\"10\" fill=\"#333\">slit 1</text>\n  <text x=\"5\" y=\"182\" font-size=\"10\" fill=\"#333\">slit 2</text>\n  <line x1=\"420\" y1=\"10\" x2=\"420\" y2=\"290\" stroke=\"#333\" stroke-width=\"3\"/>\n  <text x=\"395\" y=\"8\" font-size=\"11\" fill=\"#333\">screen</text>\n  <line x1=\"40\" y1=\"137\" x2=\"420\" y2=\"150\" stroke=\"#999\" stroke-width=\"0.75\"/>\n  <line x1=\"40\" y1=\"163\" x2=\"420\" y2=\"150\" stroke=\"#999\" stroke-width=\"0.75\"/>\n  <line x1=\"40\" y1=\"137\" x2=\"420\" y2=\"30\" stroke=\"#999\" stroke-width=\"0.75\"/>\n  <line x1=\"40\" y1=\"163\" x2=\"420\" y2=\"30\" stroke=\"#999\" stroke-width=\"0.75\"/>\n  <line x1=\"40\" y1=\"137\" x2=\"420\" y2=\"270\" stroke=\"#999\" stroke-width=\"0.75\"/>\n  <line x1=\"40\" y1=\"163\" x2=\"420\" y2=\"270\" stroke=\"#999\" stroke-width=\"0.75\"/>\n  <rect x=\"415\" y=\"144\" width=\"10\" height=\"12\" fill=\"#3fae5a\"/>\n  <text x=\"432\" y=\"153\" font-size=\"11\" fill=\"#3fae5a\">m=0 (central, bright)</text>\n  <rect x=\"415\" y=\"24\" width=\"10\" height=\"12\" fill=\"#3fae5a\"/>\n  <text x=\"432\" y=\"33\" font-size=\"11\" fill=\"#3fae5a\">m=1 (bright)</text>\n  <rect x=\"415\" y=\"264\" width=\"10\" height=\"12\" fill=\"#3fae5a\"/>\n  <text x=\"432\" y=\"273\" font-size=\"11\" fill=\"#3fae5a\">m=1 (bright)</text>\n  <line x1=\"40\" y1=\"150\" x2=\"420\" y2=\"150\" stroke=\"#9a3fae\" stroke-width=\"1\" stroke-dasharray=\"4,3\"/>\n  <text x=\"150\" y=\"145\" font-size=\"10\" fill=\"#9a3fae\">midpoint line (zero path difference)</text>\n</svg>\n<p class=\"diagram-caption\">Double-slit geometry: the central bright fringe (m=0) sits directly opposite the midpoint between the two slits — not behind either individual slit — with alternating bright fringes spreading symmetrically above and below.</p>\n</div>\n\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p><strong>Double-Slit Bright Fringe.</strong> Light of wavelength 600 nm passes through two slits separated by 0.20 mm. Find the angle to the second bright fringe (m = 2).</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">d sinθ = mλ → sinθ = mλ/d = (2)(600×10⁻⁹)/(0.20×10⁻³) = (1200×10⁻⁹)/(2.0×10⁻⁴) = 6.0×10⁻³. θ = sin⁻¹(6.0×10⁻³) ≈ <strong>0.34°</strong>. Notice how tiny this angle is — that's exactly why double-slit fringes require a screen placed far from the slits to be spread out enough to actually see distinct bands with your eyes.</div>\n    </details>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Diffraction Gratings</span>\n    <p>A diffraction grating is just a double slit generalized to hundreds or thousands of evenly-spaced slits. The bright-fringe condition d sinθ = mλ is unchanged, but with N slits instead of two, the maxima become far sharper, narrower, and brighter than a double slit's. Gratings are usually specified by line density (lines per cm or mm) rather than by d directly — convert with d = 1/(lines per unit length). For example, 5000 lines/cm gives d = 1/5000 cm = 2.0×10⁻⁴ cm = 2.0×10⁻⁶ m, and that d then plugs directly into d sinθ = mλ exactly as it would for a double slit.</p>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s149\"><span class=\"num\">14.9</span>Thin Film Interference</h2>\n  <p>Light reflecting off the top and bottom surfaces of a thin film — a soap bubble, an oil slick — can interfere constructively or destructively, producing exactly the colorful swirling patterns you've probably noticed in both.</p>\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>The one rule that makes thin films actually make sense</div>\n    <p>Reflection off a boundary into a HIGHER-index medium causes a 180° phase shift — think of it like a fixed end. Reflection off a boundary into a LOWER-index medium causes NO phase shift — think of it like a free end. You have to check this separately for BOTH the top surface and the bottom surface of the film. If the two reflections have a MISMATCHED number of phase shifts (one shifted, one not), the usual constructive/destructive conditions flip relative to what a simple path-difference calculation alone would tell you. This is the step almost everyone forgets, and it's the difference between a right and wrong answer on nearly every thin-film problem.</p>\n  </div>\n<div class=\"diagram\">\n<svg width=\"480\" height=\"300\" viewBox=\"0 0 480 300\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"60\" y=\"25\" font-size=\"12\" fill=\"#333\">air (n = 1.0)</text>\n  <line x1=\"60\" y1=\"70\" x2=\"420\" y2=\"70\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect x=\"60\" y=\"70\" width=\"360\" height=\"90\" fill=\"#dbe9ff\" opacity=\"0.6\"/>\n  <text x=\"60\" y=\"120\" font-size=\"12\" fill=\"#333\">film (n = 1.4)</text>\n  <line x1=\"60\" y1=\"160\" x2=\"420\" y2=\"160\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text x=\"60\" y=\"195\" font-size=\"12\" fill=\"#333\">glass (n = 1.5)</text>\n\n  <line x1=\"170\" y1=\"20\" x2=\"200\" y2=\"70\" stroke=\"#666\" stroke-width=\"1.5\"/>\n  <line x1=\"200\" y1=\"70\" x2=\"170\" y2=\"20\" stroke=\"#e0473f\" stroke-width=\"2\" marker-end=\"url(#a6r)\"/>\n  <text x=\"130\" y=\"15\" font-size=\"10\" fill=\"#e0473f\">Ray 1: 180° shift</text>\n\n  <line x1=\"200\" y1=\"70\" x2=\"230\" y2=\"160\" stroke=\"#666\" stroke-width=\"1.5\"/>\n  <line x1=\"230\" y1=\"160\" x2=\"260\" y2=\"70\" stroke=\"#3fae5a\" stroke-width=\"2\"/>\n  <line x1=\"260\" y1=\"70\" x2=\"290\" y2=\"20\" stroke=\"#3fae5a\" stroke-width=\"2\" marker-end=\"url(#a6g)\"/>\n  <text x=\"245\" y=\"15\" font-size=\"10\" fill=\"#3fae5a\">Ray 2: 180° shift</text>\n\n  <line x1=\"345\" y1=\"70\" x2=\"345\" y2=\"160\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text x=\"352\" y=\"118\" font-size=\"11\" fill=\"#333\">t</text>\n\n  <text x=\"60\" y=\"230\" font-size=\"11\" fill=\"#333\">Both reflections go from lower n into higher n → both shift 180°.</text>\n  <text x=\"60\" y=\"250\" font-size=\"11\" fill=\"#333\">Shifts match, so they cancel: the ordinary path-difference rule applies directly.</text>\n  <defs>\n    <marker id=\"a6r\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#e0473f\"/></marker>\n    <marker id=\"a6g\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#3fae5a\"/></marker>\n  </defs>\n</svg>\n<p class=\"diagram-caption\">Thin-film reflections: Ray 1 reflects off the top surface (air into film, low into high n — 180° shift). Ray 2 transmits through the film and reflects off the bottom surface (film into glass, also low into high n — another 180° shift). Since both shifts match, they cancel relative to each other, and the ordinary path-difference rule (2t = mλ for constructive) applies without an extra flip.</p>\n</div>\n\n  <div class=\"eq\"><div class=\"main\">Path difference = 2t</div><div class=\"sub\">t = film thickness; light crosses the film twice (down and back up)</div></div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Minimum Soap Film Thickness.</strong> A soap film (n = 1.33) in air is illuminated with 600 nm light. Find the minimum nonzero thickness for constructive interference (a bright reflection).</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">First check the phase shifts. Top surface: air (n=1.0) into film (n=1.33) — low into high, so a 180° shift. Bottom surface: film (n=1.33) into air (n=1.0) — high into low, so NO shift. The two reflections are MISMATCHED (one shifted, one not), which flips the usual rule: for mismatched shifts, constructive interference actually happens at path differences of (m + ½)λ instead of mλ. So: 2t = (m + ½)λ<sub>film</sub>, where λ<sub>film</sub> = λ<sub>air</sub>/n = 600/1.33 ≈ 451 nm. For the minimum nonzero thickness, use m = 0: 2t = ½(451), so t = 451/4 ≈ <strong>113 nm</strong>. This is exactly the scenario the phase-shift trap earlier in this section warns about — a student who forgot to check the mismatched shifts and used the \"normal\" mλ rule instead would have computed t = λ<sub>film</sub>/2 ≈ 225 nm, a genuinely different (and wrong) answer, purely from missing that one step.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Distinguish transverse from longitudinal waves, and know only transverse waves polarize.</li>\n      <li>Apply v = fλ fluently, remembering wave speed is set by the medium.</li>\n      <li>Know fixed-end vs. free-end reflection behavior.</li>\n      <li>Reason through Doppler shifts directionally before calculating.</li>\n      <li>Find standing wave frequencies and wavelengths for a string fixed at both ends.</li>\n      <li>Apply d sinθ = mλ for double-slit bright fringes.</li>\n      <li>Track phase shifts carefully on both surfaces in thin-film problems.</li>\n    </ul>\n  </div>\n\n  <div class=\"formula-summary\">\n    <span class=\"tag-label recap\">Unit 14 Formula Summary</span>\n    <table class=\"formula-table\">\n      <tr><th>Concept</th><th>Formula</th></tr>\n      <tr><td>Wave speed</td><td>v = fλ &nbsp;(c = fλ for EM waves)</td></tr>\n      <tr><td>Period-frequency relationship</td><td>T = 1/f</td></tr>\n      <tr><td>Doppler effect</td><td>f' = f × (v ± v<sub>observer</sub>)/(v ∓ v<sub>source</sub>)</td></tr>\n      <tr><td>Standing wave wavelength (string, both ends fixed)</td><td>λ<sub>n</sub> = 2L/n</td></tr>\n      <tr><td>Standing wave frequency</td><td>f<sub>n</sub> = nv/(2L)</td></tr>\n      <tr><td>Constructive interference</td><td>path difference = mλ</td></tr>\n      <tr><td>Destructive interference</td><td>path difference = (m + ½)λ</td></tr>\n      <tr><td>Double-slit bright fringes</td><td>d sinθ = mλ</td></tr>\n      <tr><td>Thin film path difference</td><td>2t &nbsp;(check phase shifts before applying mλ / (m+½)λ)</td></tr>\n    </table>\n  </div>\n\n  <h2 id=\"practice\"><span class=\"num\">📘</span>Unit 14 Practice Set</h2>\n  <p>Work every problem before checking the answer.</p>\n\n  <h3>Conceptual</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>Explain why sound waves cannot be polarized, but light waves can.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>A wave pulse on a string reflects off a fixed end. Describe how the reflected pulse compares to the original.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>An ambulance siren sounds higher-pitched as it approaches you and lower-pitched as it moves away. Explain why, using the Doppler effect.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>Explain why low-pitched sounds diffract more noticeably around corners than high-pitched sounds.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">5</span><span>A soap film appears colorful under white light. Explain, in general terms, why this happens.</span></div>\n\n  <h3>Numerical</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">6</span><span>A wave has frequency 250 Hz and wavelength 1.4 m. Find its speed.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">7</span><span>Find the period of a wave with frequency 40 Hz.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">8</span><span>A radio wave has frequency 100 MHz. Find its wavelength. (c = 3.0×10⁸ m/s)</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">9</span><span>A string 2.0 m long, fixed at both ends, vibrates in its second harmonic (n = 2) with wave speed 30 m/s. Find the frequency.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">10</span><span>Find the fundamental (first harmonic) frequency for the same string in Question 9.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">11</span><span>Light of wavelength 500 nm passes through two slits separated by 0.15 mm. Find the angle to the first bright fringe (m = 1).</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">12</span><span>Two waves arrive at a point with a path difference of 2.5 wavelengths. Is the interference constructive or destructive at that point?</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">13</span><span>A source emits sound at 500 Hz. If the observed frequency is 550 Hz, is the source moving toward or away from the observer?</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">14</span><span>Find the wavelength of visible light with frequency 5.0×10¹⁴ Hz.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">15</span><span>A thin film has thickness 200 nm. Find the path difference light travels crossing the film and reflecting back.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">16</span><span>Find the wavelength of a standing wave's fourth harmonic (n = 4) on a 1.6 m string fixed at both ends.</span></div>\n\n  <h3 style=\"margin-top:30px;\">Answer Key</h3>\n  <div class=\"answer-key\">\n    <details><summary>Question 1</summary><div class=\"a-content\">Sound is longitudinal — its oscillation is along the direction of travel, with no perpendicular \"plane\" to restrict. Light is transverse — its electric and magnetic fields oscillate perpendicular to the direction of travel, giving a genuine plane of oscillation that a polarizing filter can selectively restrict.</div></details>\n    <details><summary>Question 2</summary><div class=\"a-content\">The reflected pulse is inverted (flipped upside down, a 180° phase shift) compared to the original — the defining behavior of reflection off a fixed end, since the end cannot move and must push back with an opposite displacement.</div></details>\n    <details><summary>Question 3</summary><div class=\"a-content\">As the ambulance approaches, sound waves are compressed in front of it (shorter wavelength, higher observed frequency, higher pitch). As it moves away, sound waves stretch out behind it (longer wavelength, lower observed frequency, lower pitch) — motion toward the observer always raises pitch, motion away always lowers it.</div></details>\n    <details><summary>Question 4</summary><div class=\"a-content\">Low-pitched sounds have longer wavelengths, and diffraction is more pronounced when wavelength is comparable to (or larger than) the size of the opening or obstacle — a longer wavelength diffracts more noticeably around a typical doorway or corner than a higher-pitched, shorter-wavelength sound does.</div></details>\n    <details><summary>Question 5</summary><div class=\"a-content\">Light reflects off both the top and bottom surfaces of the thin soap film, and these two reflected waves interfere. Since the film's thickness varies slightly across its surface, different wavelengths (colors) of white light interfere constructively at different thicknesses — different colors appear brightest at different points on the film, producing the swirling colorful pattern.</div></details>\n    <details><summary>Question 6</summary><div class=\"a-content\">v = fλ = (250)(1.4) = <strong>350 m/s</strong>.</div></details>\n    <details><summary>Question 7</summary><div class=\"a-content\">T = 1/f = 1/40 = <strong>0.025 s</strong>.</div></details>\n    <details><summary>Question 8</summary><div class=\"a-content\">λ = c/f = (3.0×10⁸)/(1.0×10⁸) = <strong>3.0 m</strong>. (100 MHz = 1.0×10⁸ Hz.)</div></details>\n    <details><summary>Question 9</summary><div class=\"a-content\">f<sub>n</sub> = nv/(2L) = (2)(30)/(2×2.0) = 60/4.0 = <strong>15 Hz</strong>.</div></details>\n    <details><summary>Question 10</summary><div class=\"a-content\">f₁ = v/(2L) = 30/4.0 = <strong>7.5 Hz</strong> — exactly half of the second harmonic's frequency found above, since harmonic frequencies are always whole-number multiples of the fundamental.</div></details>\n    <details><summary>Question 11</summary><div class=\"a-content\">sinθ = mλ/d = (1)(500×10⁻⁹)/(0.15×10⁻³) ≈ 3.33×10⁻³ → θ ≈ <strong>0.19°</strong>.</div></details>\n    <details><summary>Question 12</summary><div class=\"a-content\">Destructive. A path difference of 2.5λ matches the destructive condition, (m + ½)λ, with m = 2 — a half-integer number of wavelengths means the two waves arrive exactly out of step with each other. Only a WHOLE number of wavelengths (1λ, 2λ, 3λ...) gives constructive interference; half-integer multiples always give destructive.</div></details>\n    <details><summary>Question 13</summary><div class=\"a-content\">Toward. The observed frequency (550 Hz) is higher than the emitted frequency (500 Hz), and motion toward an observer always raises the observed frequency.</div></details>\n    <details><summary>Question 14</summary><div class=\"a-content\">λ = c/f = (3.0×10⁸)/(5.0×10¹⁴) = <strong>6.0 × 10⁻⁷ m</strong> (600 nm, in the visible orange-red range).</div></details>\n    <details><summary>Question 15</summary><div class=\"a-content\">Path difference = 2t = 2(200 nm) = <strong>400 nm</strong> — light travels down through the film and back up, crossing the thickness twice.</div></details>\n    <details><summary>Question 16</summary><div class=\"a-content\">λ_n = 2L/n = 2(1.6)/4 = 3.2/4 = <strong>0.8 m</strong>.</div></details>\n  </div>\n\n  <div class=\"footer-nav\">\n    Next up: head to the <strong>Unit 14 QBank</strong>, then finish strong with <strong>Unit 15 — Modern Physics</strong>.\n  </div>\n\n</div>\n",
  "15": "<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Physics 2</div>\n  <h1>Modern Physics</h1>\n  <p class=\"sub\">Modern physics — the last unit, and the strangest. Energy comes in chunks, light behaves like particles, matter behaves like waves, and the nucleus has its own set of rules entirely.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 10–12%</span>\n    <span class=\"pill\">8 topics</span>\n    <span class=\"pill\">16 practice problems</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s151\">15.1 Quantum Theory</a></li>\n    <li><a href=\"#s152\">15.2 The Bohr Model</a></li>\n    <li><a href=\"#s153\">15.3 Spectra</a></li>\n    <li><a href=\"#s154\">15.4 Blackbody Radiation</a></li>\n    <li><a href=\"#s155\">15.5 Photoelectric Effect</a></li>\n    <li><a href=\"#s156\">15.6 Compton Scattering</a></li>\n    <li><a href=\"#s157\">15.7 Fission, Fusion & Decay</a></li>\n    <li><a href=\"#s158\">15.8 Types of Radioactive Decay</a></li>\n    <li><a href=\"#s159\">15.9 Radioactive Half-Life</a></li>\n    <li><a href=\"#practice\">Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <p class=\"quote\">\"Every classical intuition you've built over 14 units gets a little bit broken here — on purpose. That's the whole point of this unit.\" — Unit 15</p>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Master This First — Moving Fluently Between E, f, λ, and eV</span>\n    <p>More points get lost to unit mix-ups in this unit than to genuine conceptual errors. Keep these forms within reach:</p>\n    <ul style=\"margin:10px 0 0;\">\n      <li><strong>E = hf</strong> and <strong>E = hc/λ</strong> — the same equation, two forms; pick whichever variable you're actually given.</li>\n      <li><strong>hc = 1240 eV·nm</strong> — this version of the constant lets you skip joule/meter conversions entirely when working in nanometers and electron-volts, which is most of the time in this unit.</li>\n      <li><strong>1 eV = 1.6×10⁻¹⁹ J</strong> — only convert to joules when a formula specifically demands SI units (like p=mv or F=ma); otherwise, stay in eV.</li>\n    </ul>\n    <p style=\"margin-top:10px;\">Before calculating anything, decide which unit system the rest of the problem lives in, and commit to it — switching mid-calculation is where most arithmetic errors happen here.</p>\n  </div>\n\n  <h2 id=\"s151\"><span class=\"num\">15.1</span>Quantum Theory and Wave-Particle Duality</h2>\n  <p>Here's the central, unifying idea running through this entire unit, and it's worth sitting with: light and matter both display BOTH wave-like and particle-like behavior, depending on how you look at them. Not \"sometimes one, sometimes the other, and physicists haven't figured out which\" — genuinely both, simultaneously, with which behavior shows up depending on the experiment you run.</p>\n  <div class=\"eq\"><div class=\"main\">E = hf</div><div class=\"sub\">h = 6.63×10⁻³⁴ J·s = 4.14×10⁻¹⁵ eV·s — Planck's constant</div></div>\n  <div class=\"eq\"><div class=\"main\">λ = h/p</div><div class=\"sub\">de Broglie wavelength — even matter has an associated wavelength</div></div>\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Wave-Particle Duality Is Universal</span>\n    <p>Light, normally described as a wave back in Unit 14, also behaves as discrete packets of energy called <strong>photons</strong>. Electrons and other matter, normally described as particles, also have a wavelength associated with their motion. Neither picture — pure wave, pure particle — is complete on its own; which behavior you actually observe often depends entirely on what experiment you happen to be running.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p><strong>Photon Energy and Electron Wavelength, Side by Side.</strong> (a) Find the energy of a photon with wavelength 500 nm. (b) Find the de Broglie wavelength of an electron (mass 9.11×10⁻³¹ kg) moving at 1.0×10⁶ m/s. Compare the two results.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\"><strong>(a)</strong> E = hc/λ = 1240/500 = 2.48 eV — a visible-light photon, right in the range your eye can detect.<br><br>\n      <strong>(b)</strong> First find momentum: p = mv = (9.11×10⁻³¹)(1.0×10⁶) = 9.11×10⁻²⁵ kg·m/s. Then λ = h/p = (6.63×10⁻³⁴)/(9.11×10⁻²⁵) ≈ <strong>7.3×10⁻¹⁰ m</strong> (0.73 nm).<br><br>\n      Notice what this comparison actually shows: the photon's wavelength (500 nm) and the electron's wavelength (0.73 nm) are both perfectly well-defined numbers, computed from completely different starting equations — E = hc/λ for the photon (built from its wave nature) and λ = h/p for the electron (built from its particle nature, its momentum). That's wave-particle duality in numbers rather than words: the \"particle\" (electron) has a wavelength, and the \"wave\" (photon) has a particle-like energy, both describable with the tools from the opposite picture.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Wave-particle duality does NOT mean a photon or electron is \"sometimes a wave and sometimes a particle\" as if it randomly switches identity. It means every quantum object has both wave-like and particle-like properties AT ALL TIMES — which behavior shows up in a given measurement depends on what you're measuring, not on the object changing what it fundamentally is. Avoid language like \"the electron turns into a wave\" on an FRQ; describe it instead as exhibiting wave-like behavior in that particular experiment.</p>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Recall From Earlier Units</span>\n    <p>A few formulas from earlier mechanics and circuits units show up again in this unit's problems without being re-derived here — keep them within reach: <strong>K = p²/2m</strong> and <strong>p = √(2mK)</strong> (kinetic energy and momentum, from Unit 1) let you move between a particle's momentum and its kinetic energy; <strong>qΔV = K</strong> (from the electric potential unit) gives the kinetic energy gained by a charge q accelerated through a potential difference ΔV. None of these are new physics — they're just carryover tools this unit's photoelectric and de Broglie problems lean on.</p>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s152\"><span class=\"num\">15.2</span>The Bohr Model of Atomic Structure</h2>\n  <p>Electrons in an atom can only occupy specific, discrete energy levels — not any energy value in between, ever. This quantization is the entire reason atomic spectra look like sharp, distinct lines instead of a smooth continuous rainbow.</p>\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Reading an Energy Level Diagram</span>\n    <p>AP Physics 2 usually GIVES you the specific energy levels for a problem, as a diagram — something like −5E₀, −3E₀, −2E₀ for n = 1, 2, 3 — rather than expecting you to derive them from scratch. Your job is to correctly find the ENERGY DIFFERENCE between two levels an electron jumps between. That difference is precisely the energy of the photon absorbed or emitted, nothing more complicated than that.</p>\n  </div>\n<div class=\"diagram\">\n<svg width=\"420\" height=\"320\" viewBox=\"0 0 420 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"60\" y1=\"40\" x2=\"360\" y2=\"40\" stroke=\"#999\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n  <text x=\"365\" y=\"44\" font-size=\"12\" fill=\"#999\">0 (ionization)</text>\n  <line x1=\"60\" y1=\"120\" x2=\"360\" y2=\"120\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"365\" y=\"124\" font-size=\"12\" fill=\"#333\">−2E₀ (n=3)</text>\n  <line x1=\"60\" y1=\"190\" x2=\"360\" y2=\"190\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"365\" y=\"194\" font-size=\"12\" fill=\"#333\">−3E₀ (n=2)</text>\n  <line x1=\"60\" y1=\"280\" x2=\"360\" y2=\"280\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"365\" y=\"284\" font-size=\"12\" fill=\"#333\">−5E₀ (n=1)</text>\n  <line x1=\"120\" y1=\"120\" x2=\"120\" y2=\"280\" stroke=\"#e0473f\" stroke-width=\"2\" marker-end=\"url(#a5)\"/>\n  <text x=\"126\" y=\"200\" font-size=\"11\" fill=\"#e0473f\">3→1</text>\n  <line x1=\"180\" y1=\"190\" x2=\"180\" y2=\"280\" stroke=\"#3f6ae0\" stroke-width=\"2\" marker-end=\"url(#a5)\"/>\n  <text x=\"186\" y=\"240\" font-size=\"11\" fill=\"#3f6ae0\">2→1</text>\n  <line x1=\"240\" y1=\"120\" x2=\"240\" y2=\"190\" stroke=\"#3fae5a\" stroke-width=\"2\" marker-end=\"url(#a5)\"/>\n  <text x=\"246\" y=\"160\" font-size=\"11\" fill=\"#3fae5a\">3→2</text>\n  <defs>\n    <marker id=\"a5\" markerWidth=\"8\" markerHeight=\"8\" refX=\"8\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 Z\" fill=\"#333\"/></marker>\n  </defs>\n</svg>\n<p class=\"diagram-caption\">Energy level diagram with three bound levels (−5E₀, −3E₀, −2E₀ for n = 1, 2, 3) and the ionization threshold at 0. Arrows show the three possible emission transitions and their energy gaps.</p>\n</div>\n\n  <div class=\"eq\"><div class=\"main\">E<sub>photon</sub> = |E<sub>final</sub> − E<sub>initial</sub>| = hf</div></div>\n  <p>An electron dropping to a LOWER energy level <strong>emits</strong> a photon, releasing energy as it goes. An electron jumping to a HIGHER energy level must <strong>absorb</strong> a photon of exactly the right energy — no more, no less, ever.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p><strong>Photon Energy from a Transition.</strong> An electron drops from an energy level at −2.0 eV to a level at −5.0 eV. Find the energy and wavelength of the emitted photon.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">E<sub>photon</sub> = |(−5.0) − (−2.0)| = 3.0 eV. Using E = hc/λ (rearranged from E=hf and c=fλ), and hc = 1240 eV·nm — a genuinely convenient version of this constant, given directly on the AP reference sheet: λ = hc/E = 1240/3.0 ≈ <strong>413 nm</strong>, falling in the visible violet range. Working in eV and the eV·nm form of hc together, instead of switching over to joules and meters, saves you a lot of unit-conversion hassle on problems shaped exactly like this one.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s153\"><span class=\"num\">15.3</span>Emission and Absorption Spectra</h2>\n  <p>Because atomic energy levels are quantized into fixed, discrete values, atoms only emit or absorb photons at very specific wavelengths — producing a unique \"fingerprint\" pattern of sharp spectral lines for each individual element.</p>\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Emission vs. Absorption</span>\n    <p>An <strong>emission spectrum</strong> — bright lines on a dark background — shows the specific wavelengths a hot, glowing gas emits as electrons fall to lower energy levels. An <strong>absorption spectrum</strong> — dark lines on a bright continuous background — shows the specific wavelengths a cooler gas absorbs from light passing through it, as electrons jump to higher levels instead. Here's the elegant part: for the SAME element, these two spectra show lines at the exact same wavelengths, just inverted, bright versus dark — because they're both governed by the identical set of energy level gaps underneath.</p>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s154\"><span class=\"num\">15.4</span>Blackbody Radiation</h2>\n  <p>Any object with a temperature above absolute zero radiates electromagnetic energy across a whole range of wavelengths — the specific pattern of which wavelengths dominate depends on the object's temperature.</p>\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Hotter objects radiate more total energy AND shift their peak emission toward SHORTER wavelengths — higher frequency, higher energy. This is exactly why a metal rod glows dull red when moderately hot, but shifts toward white-hot as its temperature climbs further — the peak of its emission is physically shifting toward shorter, higher-energy wavelengths as it heats up.</p>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Don't confuse \"hotter objects radiate more total energy\" with \"hotter objects radiate ONLY shorter wavelengths.\" A hot object still radiates across the entire spectrum — it's the PEAK that shifts shorter, not the whole curve narrowing down to just one color. A white-hot object is emitting plenty of red and infrared too; it's just that the blue/violet end has caught up and the overall balance has shifted, which combined with more total emission is what your eye reads as \"white\" rather than \"red.\"</p>\n  </div>\n<div class=\"diagram\">\n<svg width=\"500\" height=\"320\" viewBox=\"0 0 500 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"50\" y1=\"270\" x2=\"470\" y2=\"270\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"50\" y1=\"270\" x2=\"50\" y2=\"30\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"395\" y=\"292\" font-size=\"13\" fill=\"#333\">wavelength</text>\n  <text x=\"10\" y=\"35\" font-size=\"13\" fill=\"#333\">intensity</text>\n\n  <path d=\"M 70 268 Q 130 260 160 230 Q 200 150 260 268\" fill=\"none\" stroke=\"#3f6ae0\" stroke-width=\"2.5\"/>\n  <text x=\"70\" y=\"245\" font-size=\"11\" fill=\"#3f6ae0\">cooler (T₁)</text>\n\n  <path d=\"M 70 268 Q 110 240 140 150 Q 170 60 260 268\" fill=\"none\" stroke=\"#9a3fae\" stroke-width=\"2.5\"/>\n  <text x=\"90\" y=\"80\" font-size=\"11\" fill=\"#9a3fae\">hotter (T₂ &gt; T₁)</text>\n\n  <line x1=\"160\" y1=\"270\" x2=\"160\" y2=\"230\" stroke=\"#3f6ae0\" stroke-width=\"1\" stroke-dasharray=\"3,3\"/>\n  <line x1=\"140\" y1=\"270\" x2=\"140\" y2=\"150\" stroke=\"#9a3fae\" stroke-width=\"1\" stroke-dasharray=\"3,3\"/>\n  <text x=\"105\" y=\"290\" font-size=\"10\" fill=\"#555\">peak₂</text>\n  <text x=\"145\" y=\"290\" font-size=\"10\" fill=\"#555\">peak₁</text>\n</svg>\n<p class=\"diagram-caption\">Blackbody radiation curves at two temperatures: the hotter object (T₂) radiates more total energy (larger area under its curve) AND its peak shifts to a shorter wavelength — it does not simply scale up the same curve, and it never stops emitting at longer wavelengths either.</p>\n</div>\n\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s155\"><span class=\"num\">15.5</span>The Photoelectric Effect</h2>\n  <p>Shining light on certain metals can eject electrons from the metal's surface — but only if the light's frequency clears a minimum threshold. This single experimental fact was the historical evidence that light must behave as discrete photons, not just a smooth continuous wave, and it's genuinely one of the most important experiments in the whole history of physics.</p>\n  <div class=\"eq\"><div class=\"main\">K<sub>max</sub> = hf − φ</div><div class=\"sub\">φ = work function (minimum energy needed to eject an electron, specific to each metal)</div></div>\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Below the threshold frequency — where hf = φ exactly — NO electrons are ejected at all, no matter how bright the light is. Increasing intensity below threshold just means more photons hitting the metal, but each individual photon still doesn't carry enough energy on its own to eject an electron. Above threshold, increasing intensity increases the NUMBER of electrons ejected per second, but does NOT increase each electron's maximum kinetic energy — that's set entirely by frequency, via K<sub>max</sub> = hf − φ, and intensity has no say in it whatsoever.</p>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Measuring K<sub>max</sub> With Stopping Voltage</span>\n    <p>You can't watch K<sub>max</sub> directly, so the classic experimental setup measures it indirectly: put an opposing (retarding) voltage across the circuit so it pushes ejected electrons back toward the metal, and slowly increase that voltage until the photocurrent just reaches zero — no electrons make it across anymore. That value is the <strong>stopping voltage</strong>, V<sub>stop</sub>, and at exactly that point the electric potential energy gained by the electron equals its maximum kinetic energy.</p>\n  </div>\n  <div class=\"eq\"><div class=\"main\">qV<sub>stop</sub> = K<sub>max</sub></div><div class=\"sub\">q = elementary charge of the electron — the stopping voltage (in volts) numerically equals K<sub>max</sub> (in eV)</div></div>\n  <p>Combine this with K<sub>max</sub> = hf − φ and you get V<sub>stop</sub> = (h/e)f − φ/e — a straight line if you plot V<sub>stop</sub> against frequency f. That graph is genuinely useful: its <strong>slope equals h/e</strong>, and its <strong>x-intercept is the threshold frequency</strong> (where V<sub>stop</sub> = 0, i.e., K<sub>max</sub> = 0). This is exactly the kind of graphical analysis an experimental-design FRQ will ask you to walk through.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p><strong>Photoelectric Effect Calculation.</strong> A metal has work function 2.3 eV. Light of wavelength 400 nm strikes it. Find the maximum kinetic energy of ejected electrons.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">First find photon energy: E = hc/λ = 1240/400 = 3.1 eV. Then K<sub>max</sub> = hf − φ = E<sub>photon</sub> − φ = 3.1 − 2.3 = <strong>0.8 eV</strong>. Here's a habit worth building: if the photon energy had come out LESS than 2.3 eV, the correct answer would simply be \"no electrons are ejected at all\" — always check for that possibility before you report a negative kinetic energy, which is physically meaningless and should be a red flag that something's off.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s156\"><span class=\"num\">15.6</span>Compton Scattering</h2>\n  <p>When a high-energy photon collides with an electron, it scatters off at a new angle carrying LESS energy — and correspondingly, a longer wavelength — than it had before. The electron absorbs the difference as kinetic energy.</p>\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Compton scattering provides direct evidence that photons carry real momentum, not just energy. Treating the photon-electron interaction exactly like a genuine two-particle collision — complete with conservation of both momentum and energy — is what makes the wavelength shift come out correctly. This is further, independent confirmation of light's particle-like behavior, building directly on the photoelectric effect's evidence from a completely different angle.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p><strong>Photon Momentum.</strong> Find the momentum of a photon with wavelength 400 nm, and compare it to the momentum of an electron moving at 1000 m/s.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">Rearranging the de Broglie relation (which applies to photons too, not just matter): p = h/λ = (6.63×10⁻³⁴)/(400×10⁻⁹) ≈ 1.66×10⁻²⁷ kg·m/s. For the electron: p = mv = (9.11×10⁻³¹)(1000) ≈ 9.11×10⁻²⁸ kg·m/s. The photon's momentum is roughly 1.8 times larger, despite the photon having zero rest mass — a good reminder that p = h/λ works for any quantum object with a wavelength, photon or matter, without ever needing to plug in a mass for the photon term.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s157\"><span class=\"num\">15.7</span>Fission, Fusion, and Nuclear Decay</h2>\n  <p>The nucleus itself can transform — splitting apart in fission, combining together in fusion, or spontaneously emitting particles in radioactive decay — releasing enormous amounts of energy compared to ordinary chemical reactions, all governed by Einstein's mass-energy relationship.</p>\n  <div class=\"eq\"><div class=\"main\">E = mc²</div><div class=\"sub\">c² = (3.00×10⁸)² ≈ 9.0×10¹⁶ m²/s² — a huge number, which is why tiny mass changes release huge energy</div></div>\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>Mass defect — the idea that ties fission AND fusion together</div>\n    <p>The total mass of a nucleus's separate parts — protons and neutrons individually — is always slightly MORE than the mass of the assembled nucleus itself. That missing mass, called the mass defect, was converted into the binding energy that holds the nucleus together, via E = mc². Here's the part that surprises people: fission (splitting heavy nuclei) and fusion (combining light nuclei) BOTH release energy, for the exact same underlying reason — in each case, the resulting nuclei end up more tightly bound, with lower total mass, than the starting materials. The \"lost\" mass becomes released energy either way, whether you're splitting apart or combining.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 5</span>\n    <p><strong>Energy from a Mass Defect.</strong> In a nuclear reaction, the total mass of the products is 0.00186 kg less than the total mass of the reactants. Find the energy released.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">The missing mass converts directly to energy via E = mc²: E = (0.00186)(3.0×10⁸)² = (0.00186)(9.0×10¹⁶) ≈ <strong>1.67×10¹⁴ J</strong>. To put that in perspective, this comes from less than 2 grams of \"missing\" mass — comparable to burning many thousands of tons of coal, from mass that simply isn't there anymore in the products. This is the whole reason nuclear reactions release such disproportionately large amounts of energy compared to chemical reactions: chemical reactions rearrange electron bonds without any measurable mass changing into energy, while nuclear reactions convert a small but very real sliver of actual mass directly into energy through c², an enormous conversion factor.</div>\n    </details>\n  </div>\n\n  <p>Because nuclear masses are so tiny in kilograms, they're usually given in <strong>atomic mass units (u)</strong> instead, where 1 u is defined as 1/12 the mass of a carbon-12 atom. Converting a mass defect in u straight to energy in MeV is common enough on binding-energy problems that it's worth having as its own conversion factor:</p>\n  <div class=\"eq\"><div class=\"main\">1 u = 931 MeV/c²</div><div class=\"sub\">lets you go from a mass defect in atomic mass units directly to binding energy in MeV, without ever converting to kilograms</div></div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s158\"><span class=\"num\">15.8</span>Types of Radioactive Decay</h2>\n  <table class=\"formula-table\">\n    <tr><th>Decay type</th><th>Emitted particle</th><th>Effect on nucleus</th></tr>\n    <tr><td>Alpha (α)</td><td>Helium nucleus (2p + 2n)</td><td>Mass number −4, atomic number −2</td></tr>\n    <tr><td>Beta-minus (β⁻)</td><td>Electron</td><td>Mass number unchanged, atomic number +1 (neutron → proton)</td></tr>\n    <tr><td>Beta-plus (β⁺)</td><td>Positron</td><td>Mass number unchanged, atomic number −1 (proton → neutron)</td></tr>\n    <tr><td>Gamma (γ)</td><td>High-energy photon</td><td>No change to mass or atomic number — just energy release</td></tr>\n  </table>\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>In every nuclear reaction, BOTH the total mass number (top number, protons + neutrons) AND the total atomic number (bottom number, protons/charge) must balance on both sides of the equation. This is really the nuclear equivalent of balancing a chemical equation, and honestly, it's the fastest way to check your own work or figure out an unknown decay product when you're stuck.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 6</span>\n    <p><strong>Identifying a Decay Product.</strong> Uranium-238 (atomic number 92) undergoes alpha decay. Identify the resulting daughter nucleus.</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">Alpha decay removes 4 from the mass number and 2 from the atomic number: mass number 238 − 4 = 234; atomic number 92 − 2 = 90. Atomic number 90 corresponds to Thorium. The daughter nucleus is <strong>Thorium-234</strong>. Quick check before you move on: mass numbers balance (238 = 234 + 4) and atomic numbers balance (92 = 90 + 2) — confirming the answer is self-consistent, which is a habit worth keeping on every decay problem.</div>\n    </details>\n  </div>\n\n  <div class=\"divider\">· · ·</div>\n\n  <h2 id=\"s159\"><span class=\"num\">15.9</span>Radioactive Half-Life</h2>\n  <p>Radioactive decay is random for any single nucleus, but for a large sample it follows a very predictable pattern: every sample of a given radioactive isotope takes the same amount of time — its <strong>half-life</strong>, T<sub>1/2</sub> — for half of the remaining nuclei to decay. This holds no matter how much of the sample you started with, and no matter how much time has already passed.</p>\n  <div class=\"eq\"><div class=\"main\">N = N₀(1/2)<sup>n</sup></div><div class=\"sub\">N₀ = initial amount, N = amount remaining, n = number of half-lives elapsed = t/T<sub>1/2</sub></div></div>\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea — Counting Half-Lives</span>\n    <p>The fastest way through a half-life problem is almost never to plug straight into an exponential — it's to figure out how many whole half-lives, n, have elapsed (n = t/T<sub>1/2</sub>), and then just cut the starting amount in half that many times. After 1 half-life, 1/2 remains; after 2, 1/4 remains; after 3, 1/8 remains — and so on. N = N₀(1/2)ⁿ is exactly that halving process written as one formula.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 7</span>\n    <p><strong>Half-Life Calculation.</strong> A sample starts with N₀ = 4.0×10¹⁰ nuclei of an isotope with an 8.0-day half-life. How many nuclei remain after 24 days?</p>\n    <details class=\"solution\"><summary></summary>\n      <div class=\"sol-content\">First find the number of half-lives elapsed: n = t/T<sub>1/2</sub> = 24/8.0 = 3 half-lives. Then N = N₀(1/2)ⁿ = (4.0×10¹⁰)(1/2)³ = (4.0×10¹⁰)(1/8) = <strong>5.0×10⁹ nuclei</strong> remaining. Notice this also means 3.5×10¹⁰ nuclei (7/8 of the original sample) have decayed — always double-check whether a question is asking for what remains or what has decayed away, since it's easy to answer the wrong one.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Explain wave-particle duality for both light and matter.</li>\n      <li>Find photon energy from an energy-level transition, using given energy diagrams.</li>\n      <li>Distinguish emission and absorption spectra for the same element.</li>\n      <li>Apply K<sub>max</sub> = hf − φ, including recognizing when no electrons are ejected at all.</li>\n      <li>Explain Compton scattering as evidence for photon momentum.</li>\n      <li>Use E = mc² and the concept of mass defect for fission/fusion energy release.</li>\n      <li>Balance mass number and atomic number across all four types of radioactive decay.</li>\n      <li>Convert a mass defect in atomic mass units to binding energy in MeV using 1 u = 931 MeV/c².</li>\n      <li>Find the remaining amount of a radioactive sample after a given number of half-lives, using N = N₀(1/2)ⁿ.</li>\n    </ul>\n  </div>\n\n  <div class=\"formula-summary\">\n    <span class=\"tag-label recap\">Unit 15 Formula Summary</span>\n    <table class=\"formula-table\">\n      <tr><th>Concept</th><th>Formula</th></tr>\n      <tr><td>Photon energy</td><td>E = hf = hc/λ &nbsp;(hc = 1240 eV·nm)</td></tr>\n      <tr><td>de Broglie wavelength</td><td>λ = h/p &nbsp;(applies to matter and photons)</td></tr>\n      <tr><td>Photon energy from a transition</td><td>E<sub>photon</sub> = |E<sub>final</sub> − E<sub>initial</sub>|</td></tr>\n      <tr><td>Photoelectric effect</td><td>K<sub>max</sub> = hf − φ</td></tr>\n      <tr><td>Mass-energy equivalence</td><td>E = mc²</td></tr>\n      <tr><td>Atomic mass unit conversion</td><td>1 u = 931 MeV/c²</td></tr>\n      <tr><td>Radioactive half-life</td><td>N = N₀(1/2)<sup>t/T<sub>1/2</sub></sup></td></tr>\n      <tr><td>Alpha decay</td><td>mass number −4, atomic number −2</td></tr>\n      <tr><td>Beta-minus decay</td><td>mass number unchanged, atomic number +1</td></tr>\n      <tr><td>Beta-plus decay</td><td>mass number unchanged, atomic number −1</td></tr>\n      <tr><td>Gamma decay</td><td>mass number and atomic number both unchanged</td></tr>\n    </table>\n  </div>\n\n  <h2 id=\"practice\"><span class=\"num\">📘</span>Unit 15 Practice Set</h2>\n  <p>Work every problem before checking the answer.</p>\n\n  <h3>Conceptual</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>Explain why increasing the intensity of light below the threshold frequency still ejects zero electrons in the photoelectric effect.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>Explain why an element's emission and absorption spectra show lines at the same wavelengths.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>Explain the concept of mass defect and how it relates to nuclear binding energy.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>A metal bar is heated from dull red to white-hot. Describe how its blackbody radiation spectrum changes.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">5</span><span>Explain what \"wave-particle duality\" means, using both light and matter as examples.</span></div>\n\n  <h3>Numerical</h3>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">6</span><span>Find the energy of a photon with frequency 6.0×10¹⁴ Hz. (h = 6.63×10⁻³⁴ J·s)</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">7</span><span>Find the energy in eV of a photon with wavelength 300 nm. (hc = 1240 eV·nm)</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">8</span><span>An electron drops from an energy level at −1.5 eV to −4.5 eV. Find the wavelength of the emitted photon.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">9</span><span>A metal has work function 4.0 eV. Light of energy 3.0 eV strikes it. How many electrons are ejected?</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">10</span><span>A metal has work function 2.0 eV. Light of wavelength 400 nm strikes it. Find the maximum kinetic energy of ejected electrons.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">11</span><span>Find the de Broglie wavelength of an electron (mass 9.11×10⁻³¹ kg) moving at 2.0×10⁶ m/s. (h = 6.63×10⁻³⁴ J·s)</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">12</span><span>Find the energy released when 0.0020 kg of mass is converted entirely into energy. (c = 3.0×10⁸ m/s)</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">13</span><span>Radon-222 (atomic number 86) undergoes alpha decay. Identify the resulting daughter nucleus (mass number and atomic number).</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">14</span><span>Carbon-14 (atomic number 6) undergoes beta-minus decay. Identify the resulting daughter nucleus.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">15</span><span>A nucleus undergoes gamma decay. How do its mass number and atomic number change?</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">16</span><span>Find the stopping voltage needed to stop electrons with maximum kinetic energy 1.8 eV in a photoelectric experiment.</span></div>\n\n  <h3 style=\"margin-top:30px;\">Answer Key</h3>\n  <div class=\"answer-key\">\n    <details><summary>Question 1</summary><div class=\"a-content\">Below threshold frequency, each individual photon carries less energy than the work function φ — no single photon has enough energy to eject an electron, no matter how many photons (higher intensity) arrive per second. Electron ejection depends on a single photon's energy exceeding φ, not on the total energy delivered over time.</div></details>\n    <details><summary>Question 2</summary><div class=\"a-content\">Both spectra are governed by the exact same set of quantized energy level gaps within that element's atoms — emission shows the wavelengths released as electrons fall to lower levels, absorption shows the wavelengths absorbed as electrons jump to higher levels, and since it's the same set of energy gaps either way, the wavelengths match exactly, just displayed as bright lines (emission) versus dark lines (absorption).</div></details>\n    <details><summary>Question 3</summary><div class=\"a-content\">A nucleus's mass is always slightly less than the sum of its individual protons and neutrons' masses when separate. This \"missing\" mass (the mass defect) was converted into binding energy via E = mc² when the nucleus formed — that binding energy is what holds the nucleus together against the mutual repulsion of its protons.</div></details>\n    <details><summary>Question 4</summary><div class=\"a-content\">As the bar heats up, its blackbody spectrum shifts toward shorter wavelengths (higher frequencies) — the peak emission moves from the red end of the visible spectrum toward the blue/white end, and total radiated energy increases substantially.</div></details>\n    <details><summary>Question 5</summary><div class=\"a-content\">Wave-particle duality means both light and matter exhibit properties of BOTH waves and particles. Light (usually described as a wave) also behaves as discrete photons (the photoelectric effect). Matter (usually described as particles) also has an associated wavelength (de Broglie wavelength, λ = h/p) governing its wave-like behavior. Neither the pure-wave nor pure-particle picture is complete alone.</div></details>\n    <details><summary>Question 6</summary><div class=\"a-content\">E = hf = (6.63×10⁻³⁴)(6.0×10¹⁴) ≈ <strong>4.0 × 10⁻¹⁹ J</strong>.</div></details>\n    <details><summary>Question 7</summary><div class=\"a-content\">E = hc/λ = 1240/300 ≈ <strong>4.1 eV</strong>.</div></details>\n    <details><summary>Question 8</summary><div class=\"a-content\">E<sub>photon</sub> = |(−4.5) − (−1.5)| = 3.0 eV. λ = hc/E = 1240/3.0 ≈ <strong>413 nm</strong>.</div></details>\n    <details><summary>Question 9</summary><div class=\"a-content\"><strong>Zero electrons ejected.</strong> The photon energy (3.0 eV) is less than the work function (4.0 eV), so no single photon carries enough energy to eject an electron, regardless of how many photons arrive.</div></details>\n    <details><summary>Question 10</summary><div class=\"a-content\">Photon energy: E = hc/λ = 1240/400 = 3.1 eV. K<sub>max</sub> = E − φ = 3.1 − 2.0 = <strong>1.1 eV</strong>.</div></details>\n    <details><summary>Question 11</summary><div class=\"a-content\">First find momentum: p = mv = (9.11×10⁻³¹)(2.0×10⁶) ≈ 1.82×10⁻²⁴ kg·m/s. Then λ = h/p = (6.63×10⁻³⁴)/(1.82×10⁻²⁴) ≈ <strong>3.6 × 10⁻¹⁰ m</strong>.</div></details>\n    <details><summary>Question 12</summary><div class=\"a-content\">E = mc² = (0.0020)(3.0×10⁸)² = (0.0020)(9.0×10¹⁶) = <strong>1.8 × 10¹⁴ J</strong> — an enormous amount of energy from a tiny amount of mass.</div></details>\n    <details><summary>Question 13</summary><div class=\"a-content\">Mass number 222 − 4 = 218; atomic number 86 − 2 = 84 (Polonium). Daughter nucleus: <strong>Polonium-218</strong>.</div></details>\n    <details><summary>Question 14</summary><div class=\"a-content\">Beta-minus decay: mass number unchanged (14); atomic number 6 + 1 = 7 (Nitrogen). Daughter nucleus: <strong>Nitrogen-14</strong>.</div></details>\n    <details><summary>Question 15</summary><div class=\"a-content\">Neither changes. Gamma decay releases a high-energy photon without altering the nucleus's composition — mass number and atomic number both stay <strong>exactly the same</strong>.</div></details>\n    <details><summary>Question 16</summary><div class=\"a-content\">Since qV<sub>stop</sub> = K<sub>max</sub>, and using elementary charge for the ejected electron, the stopping voltage in volts numerically equals the kinetic energy in eV: V<sub>stop</sub> = <strong>1.8 V</strong>.</div></details>\n  </div>\n\n  <div class=\"footer-nav\">\n    <strong>That's all fifteen units.</strong> Head to the Unit 15 QBank to finish drilling, then start rotating back through earlier units to keep everything sharp before exam day.\n  </div>\n\n</div>\n\n"
};

const UNITS = [
  {
    "id": 9,
    "name": "Thermodynamics",
    "weight": "15–18%",
    "ready": true
  },
  {
    "id": 10,
    "name": "Electric Force, Field & Potential",
    "weight": "15–18%",
    "ready": true
  },
  {
    "id": 11,
    "name": "Electric Circuits",
    "weight": "15–18%",
    "ready": true
  },
  {
    "id": 12,
    "name": "Magnetism & Electromagnetism",
    "weight": "12–15%",
    "ready": true
  },
  {
    "id": 13,
    "name": "Geometric Optics",
    "weight": "12–15%",
    "ready": true
  },
  {
    "id": 14,
    "name": "Waves, Sound & Physical Optics",
    "weight": "12–15%",
    "ready": true
  },
  {
    "id": 15,
    "name": "Modern Physics",
    "weight": "10–12%",
    "ready": true
  }
];

const QUESTIONS = {
  "9": [
    {
      "id": "9-1",
      "topic": "9.1 Kinetic Theory",
      "stem": "A sealed, rigid container holds a sample of monatomic ideal gas. The gas is heated until its absolute temperature doubles. Which statement correctly describes the change in average particle speed?",
      "choices": [
        "The average speed stays the same, since volume is constant.",
        "The average speed increases by a factor of √2.",
        "The average speed quadruples, since kinetic energy depends on the square of speed.",
        "The average speed doubles, since speed is proportional to temperature."
      ],
      "correct": 1,
      "explanation": "Average kinetic energy is proportional to temperature: K<sub>avg</sub> = (3/2)k<sub>B</sub>T. Since K ∝ v², speed scales as v ∝ √T, so speed increases by a factor of √2 when T doubles — not by a factor of 2. Choice A assumes speed itself is directly proportional to temperature, skipping the square-root step. Choice C confuses the constant-volume condition (which fixes the container, not the particles) with speed being unaffected by heating — heating always raises average speed regardless of volume. Choice D inverts the operation: instead of taking the square root of the temperature factor, it squares it, turning 2 into 4 rather than √2."
    },
    {
      "id": "9-2",
      "topic": "9.1 Kinetic Theory",
      "stem": "A gas sample is cooled at constant volume. Which change to its Maxwell-Boltzmann speed distribution correctly describes what happens?",
      "choices": [
        "The curve shifts left and becomes shorter and wider.",
        "The curve does not change shape, only its horizontal position.",
        "The curve shifts right (higher peak speed) and becomes shorter and wider.",
        "The curve shifts left (lower peak speed) and becomes taller and narrower."
      ],
      "correct": 3,
      "explanation": "Cooling reduces average kinetic energy, so the distribution's peak moves toward lower speeds, and total particle number (area under the curve) can't change. Choice B has the direction backwards — it describes what happens on heating, not cooling. Choice C gets the direction right but the shape wrong: it treats cooling like a redistribution that spreads particles out, when in fact fewer particles occupying a narrower range of low speeds means the curve must grow taller and narrower, not shorter and wider. Choice D ignores that the shape must change at all to conserve the area under the curve as the peak moves."
    },
    {
      "id": "9-3",
      "topic": "9.2 Ideal Gas Law",
      "stem": "A fixed amount of ideal gas is compressed to half its original volume while its temperature is held constant. What happens to its pressure?",
      "choices": [
        "It doubles.",
        "It quadruples.",
        "It is cut in half.",
        "It stays the same, since temperature is constant."
      ],
      "correct": 0,
      "explanation": "At constant temperature and constant n, PV = nRT means PV is constant (Boyle's Law): halving V must double P to keep the product fixed. Choice A inverts this, treating a volume decrease as if it should also decrease pressure. Choice C correctly notes T is constant but wrongly assumes that also freezes P — it's PV, not P alone, that stays fixed. Choice D applies a squared relationship (as if P ∝ 1/V²) to what is actually a simple inverse proportionality."
    },
    {
      "id": "9-4",
      "topic": "9.2 Ideal Gas Law",
      "stem": "A gas sample is held at constant pressure while its absolute temperature is tripled. What happens to its volume?",
      "choices": [
        "It is cut to one third.",
        "It stays the same.",
        "It increases by a factor of 9.",
        "It triples."
      ],
      "correct": 3,
      "explanation": "At constant pressure, V/T is constant (Charles's Law), a direct consequence of PV = nRT. Tripling T triples V to keep the ratio fixed. Choice B ignores this proportionality entirely, treating volume as independent of temperature at fixed pressure. Choice C inverts the relationship, applying the kind of inverse scaling that belongs to Boyle's Law (constant T) rather than the direct scaling that governs this constant-P scenario. Choice D squares the given factor (3²=9) instead of applying it directly — volume and temperature scale one-to-one here, not quadratically."
    },
    {
      "id": "9-5",
      "topic": "9.3 Thermal Energy Transfer",
      "stem": "Two blocks, A and B, made of different materials but with equal mass, are heated by the same amount of energy Q. Block A has a higher specific heat than Block B. Which block undergoes the larger temperature change?",
      "choices": [
        "Both undergo the same ΔT, since they received the same energy.",
        "It cannot be determined without knowing the initial temperatures.",
        "Block A, because higher specific heat means more temperature change per unit of energy.",
        "Block B, because it has a lower specific heat, so the same energy produces a larger ΔT."
      ],
      "correct": 3,
      "explanation": "From Q = mcΔT, ΔT = Q/(mc): a larger specific heat c gives a smaller ΔT for the same Q and m. Choice A states the exact opposite relationship, treating a higher c as amplifying rather than damping the temperature change. Choice C assumes equal energy input guarantees equal ΔT, overlooking that c differs between the blocks. Choice D overlooks that Q, m, and c are already enough to solve for ΔT directly — initial temperatures aren't needed to compare the sizes of the changes, only to find the final temperatures themselves."
    },
    {
      "id": "9-6",
      "topic": "9.3 Thermal Energy Transfer",
      "stem": "A metal rod conducts heat between two reservoirs at fixed temperatures. If the rod's length is doubled while its cross-sectional area and the temperature difference stay the same, what happens to the rate of heat transfer?",
      "choices": [
        "It doubles.",
        "It stays the same.",
        "It is cut to one quarter.",
        "It is cut in half."
      ],
      "correct": 3,
      "explanation": "The conduction rate is Q/Δt = kAΔT/L, with length L in the denominator: doubling L halves the rate. Choice A inverts this, treating a longer path as speeding up heat transfer rather than slowing it. Choice C ignores L's presence in the equation altogether, as if conduction rate didn't depend on the distance heat has to travel. Choice D applies a squared relationship (as if rate ∝ 1/L²) to what is actually a simple inverse proportionality with L."
    },
    {
      "id": "9-7",
      "topic": "9.4 First Law of Thermodynamics",
      "stem": "A gas undergoes an isothermal expansion, absorbing heat Q from its surroundings. Which of the following is true?",
      "choices": [
        "ΔU is negative here, since the gas is expanding.",
        "ΔU = Q, and the gas does work equal to Q on itself.",
        "ΔU = 0; work done on the surroundings equals Q.",
        "ΔU = Q, since no work is done in this process."
      ],
      "correct": 2,
      "explanation": "For an ideal gas, internal energy depends only on temperature, and isothermal means T doesn't change, so ΔU = 0 regardless of anything else. From ΔU = Q + W, 0 = Q + W, so work done ON the gas is −Q; since Q is positive (absorbed), the gas does positive work on its surroundings equal in magnitude to Q. Choice B assumes no work occurs, effectively treating this expansion like a constant-volume (isochoric) process. Choice C assumes any expansion must lower internal energy, ignoring that U depends only on T — and T is unchanged here. Choice D gets the direction of the work backwards, describing the gas doing work “on itself” rather than on its surroundings, and misassigns ΔU = Q instead of zero."
    },
    {
      "id": "9-8",
      "topic": "9.4 First Law of Thermodynamics",
      "stem": "A rigid, sealed container of gas is heated by an external heater that adds energy to it; its pressure rises but no piston motion occurs. What can be said about the work done on the gas and its internal energy?",
      "choices": [
        "ΔU = 0, since volume did not change.",
        "W is negative, since the gas is being compressed.",
        "W = 0, and ΔU = Q, so internal energy increases.",
        "W = Q, and ΔU = 0."
      ],
      "correct": 2,
      "explanation": "With volume explicitly constant (isochoric), no P-V work is possible no matter how pressure changes, so W = 0 and all added heat becomes internal energy: ΔU = Q. Choice B swaps which quantity is zero, as if this were an isothermal process instead of a constant-volume one. Choice C assumes rising pressure implies mechanical compression (boundary work), but with volume fixed there's no displacement for the gas to do or receive P-V work through. Choice D conflates “no volume change” with “no internal-energy change” — internal energy tracks temperature, which is clearly rising here since heat is being added."
    },
    {
      "id": "9-9",
      "topic": "9.4 First Law / P-V Diagrams",
      "stem": "On a P-V diagram, which of the four classic processes (isobaric, isochoric, isothermal, adiabatic) is represented by a vertical line segment?",
      "choices": [
        "Isobaric",
        "Adiabatic",
        "Isochoric",
        "Isothermal"
      ],
      "correct": 2,
      "explanation": "A vertical line means volume is fixed while pressure changes — the definition of an isochoric process. Choice A describes the horizontal-line case (isobaric) instead. Choices C and D both describe curved processes (following PV = constant-type relationships) and don't correspond to a straight vertical segment at all."
    },
    {
      "id": "9-10",
      "topic": "9.5 Experimental Design",
      "stem": "A student wants to experimentally determine the specific heat of an unknown metal sample using a calorimeter of known, negligible heat capacity, a known mass of water, and a thermometer. Which piece of data is NOT needed for this experiment?",
      "choices": [
        "The mass of the metal sample.",
        "The atmospheric pressure in the room.",
        "The initial temperature of the water.",
        "The equilibrium temperature reached by the water and metal together."
      ],
      "correct": 1,
      "explanation": "Calorimetry (heat lost by the metal equals heat gained by the water) only needs masses, specific heats, and temperature changes — atmospheric pressure doesn't appear anywhere in Q = mcΔT. Choice A, the water's initial temperature, is required to compute the water's ΔT. Choice B, the metal's mass, is one of the three variables needed for the metal side of the equation. Choice D, the equilibrium temperature, is the endpoint needed to find ΔT for both substances — without it, neither side of the calorimetry equation can be completed."
    },
    {
      "id": "9-11",
      "topic": "9.6 Entropy",
      "stem": "A cup of hot coffee is left on a table and slowly cools to room temperature. Which statement correctly applies the Second Law of Thermodynamics to this process?",
      "choices": [
        "The entropy of the room decreases as it absorbs heat, violating the second law.",
        "The total entropy of the coffee-plus-room system increases, since heat is flowing spontaneously from hot to cold.",
        "The entropy of the coffee decreases as it cools, and this is consistent with the second law because entropy is only ever defined for isolated systems.",
        "Entropy is not applicable to this process since no phase change occurs."
      ],
      "correct": 1,
      "explanation": "Heat flowing spontaneously from the hotter coffee to the colder room is exactly the entropy-increasing direction the second law describes; the coffee's own entropy drop is more than offset by the room's gain. Choice A correctly notes the coffee's entropy decreases but adds a false claim — entropy is a well-defined property for any system, not only isolated ones. Choice C reverses the actual effect: a room absorbing heat from a warmer source gains entropy, it doesn't lose it, so there's no violation to describe. Choice D wrongly restricts entropy changes to phase-change situations; ordinary heat flow changes entropy just as much."
    },
    {
      "id": "9-12",
      "topic": "9.2 Ideal Gas Law",
      "stem": "Two balloons (flexible, able to expand or contract to maintain a fixed internal pressure) hold ideal gas at the same temperature and pressure. Balloon A holds twice as many moles of gas as Balloon B. How do their volumes compare?",
      "choices": [
        "Balloon A has half the volume of Balloon B.",
        "The relationship cannot be determined without knowing the molar mass.",
        "The balloons have the same volume, since they're at the same temperature and pressure.",
        "Balloon A has twice the volume of Balloon B."
      ],
      "correct": 3,
      "explanation": "With P and T fixed, PV = nRT gives V ∝ n: twice the moles fill twice the volume in a flexible balloon. Choice B inverts this proportionality, as if more gas required less space. Choice C ignores that the two balloons hold different amounts of gas (n differs), so equal T and P alone don't force equal V. Choice D imports molar mass, a variable that doesn't appear anywhere in PV = nRT and is irrelevant to this comparison."
    },
    {
      "id": "9-13",
      "topic": "9.1 Kinetic Theory",
      "stem": "A gas sample is heated so its absolute temperature quadruples. By what factor does the average particle speed increase?",
      "choices": [
        "4",
        "8",
        "16",
        "2"
      ],
      "correct": 3,
      "explanation": "Since K<sub>avg</sub> ∝ T and K<sub>avg</sub> ∝ v², speed scales as √T: quadrupling T gives √4 = 2. Choice B applies the temperature factor directly to speed, skipping the square root. Choice C compounds that error with an extra, unexplained multiplication. Choice D squares the temperature factor (4²=16) instead of taking its square root — the exact inverse of the correct operation."
    },
    {
      "id": "9-14",
      "topic": "9.1 Kinetic Theory",
      "stem": "Gas X has molecules with twice the mass of Gas Y's molecules. Both gases are at the same temperature. How do their average kinetic energies and average speeds compare?",
      "choices": [
        "Gas X has twice the average kinetic energy and the same average speed as Gas Y.",
        "Gas X has half the average kinetic energy and a higher average speed than Gas Y.",
        "Equal average kinetic energy, but Gas X has the lower average speed.",
        "Gas X and Gas Y have equal average kinetic energy and equal average speed."
      ],
      "correct": 2,
      "explanation": "Average kinetic energy depends only on temperature (K<sub>avg</sub> = (3/2)k<sub>B</sub>T), never on particle mass, so equal T means equal K<sub>avg</sub> for both gases. But K = ½mv², so for the heavier gas (X) to match Y's kinetic energy, X's particles must move slower on average. Choice A assumes kinetic energy scales with mass directly, contradicting the T-only dependence of K<sub>avg</sub>. Choice C gets K backwards (assuming the heavier gas has less energy) and gets the speed direction backwards too — heavier particles move slower for equal K, not faster. Choice D correctly has equal K but wrongly assumes speed is also unaffected by the mass difference, ignoring K = ½mv²."
    },
    {
      "id": "9-15",
      "topic": "9.2 Ideal Gas Law",
      "stem": "A gas occupies 4.0 L at a pressure of 2.0 atm and temperature 250 K. It is allowed to expand to 8.0 L while its pressure drops to 1.0 atm. What is the new temperature?",
      "choices": [
        "125 K",
        "1000 K",
        "500 K",
        "250 K"
      ],
      "correct": 3,
      "explanation": "Using P₁V₁/T₁ = P₂V₂/T₂: (2.0)(4.0)/250 = (1.0)(8.0)/T₂, giving T₂ = 250 K — the pressure halving and volume doubling exactly cancel. Choice A (125 K) reflects applying only the pressure ratio's halving effect without the offsetting volume doubling. Choice C (500 K) reflects the mirror-image slip: only the volume doubling is applied, ignoring the pressure drop that cancels it. Choice D (1000 K) compounds both factors as if they reinforced each other multiplicatively instead of canceling out."
    },
    {
      "id": "9-16",
      "topic": "9.2 Ideal Gas Law",
      "stem": "A rigid, sealed container of gas is initially at pressure P and temperature T. It is heated until the pressure reads 4P. What is the new temperature, in terms of T?",
      "choices": [
        "2T",
        "16T",
        "4T",
        "T/4"
      ],
      "correct": 2,
      "explanation": "At constant volume, P/T is constant (Gay-Lussac's Law): P/T = 4P/T<sub>new</sub> gives T<sub>new</sub> = 4T, a direct one-to-one scaling. Choice A inverts this relationship, treating a pressure increase as if it should produce a temperature decrease. Choice B applies only half of the actual factor of 4. Choice D squares the given factor (4²=16) instead of applying it directly — pressure and temperature scale linearly together here, not quadratically."
    },
    {
      "id": "9-17",
      "topic": "9.2 Ideal Gas Law",
      "stem": "A balloon contains 0.40 mol of ideal gas at a pressure of 1.0 atm and volume 9.8 L. Approximately what is the temperature of the gas? (R = 0.0821 L·atm/(mol·K))",
      "choices": [
        "150 K",
        "200 K",
        "300 K",
        "400 K"
      ],
      "correct": 2,
      "explanation": "Using PV = nRT: T = PV/(nR) = (1.0)(9.8)/[(0.40)(0.0821)] ≈ 299 K, so about 300 K. Choice A is roughly half this value, consistent with using twice the actual nR product in the denominator. Choice B falls between the true answer and a bookkeeping slip in the intermediate division. Choice D is noticeably above the correct value, consistent with dividing by too small an nR product, such as using n = 0.20 mol instead of the given 0.40 mol."
    },
    {
      "id": "9-18",
      "topic": "9.3 Thermal Transfer",
      "stem": "A 0.50 kg block of iron (c = 450 J/(kg·°C)) is heated with 9000 J of energy from an initial temperature of 20°C. What is its final temperature?",
      "choices": [
        "80°C",
        "50°C",
        "40°C",
        "60°C"
      ],
      "correct": 3,
      "explanation": "Using Q = mcΔT: ΔT = 9000/(0.50 × 450) = 40°C — but that's the CHANGE in temperature, not the final temperature, so the final temperature is 20°C + 40°C = 60°C. Choice A reports the computed ΔT itself, forgetting to add it to the 20°C starting point. Choice B reflects adding only part of that ΔT to the starting temperature. Choice D overshoots, consistent with adding the ΔT twice or miscomputing ΔT as 60°C before adding it to 20°C. Always circle back to what the question actually asked for before selecting an answer."
    },
    {
      "id": "9-19",
      "topic": "9.3 Thermal Transfer",
      "stem": "Two slabs of insulation, made of the same material and having the same area, conduct heat between two fixed-temperature reservoirs. Slab 2 is three times as thick as Slab 1. How does the rate of heat conduction through Slab 2 compare to Slab 1?",
      "choices": [
        "Slab 2 conducts heat nine times as fast as Slab 1.",
        "Slab 2 conducts heat at the same rate as Slab 1.",
        "Slab 2 conducts heat at one-third the rate of Slab 1.",
        "Slab 2 conducts heat three times as fast as Slab 1."
      ],
      "correct": 2,
      "explanation": "Conduction rate is Q/Δt = kAΔT/L, with L (thickness) in the denominator: tripling thickness cuts the rate to one-third. Choice A inverts this, treating a thicker slab as conducting heat faster. Choice C ignores L's role in the equation altogether, as if thickness had no effect on rate. Choice D applies a squared relationship (3²=9) to what is actually a simple inverse proportionality with thickness."
    },
    {
      "id": "9-20",
      "topic": "9.3 Thermal Transfer",
      "stem": "A hot metal block and a cool water bath are placed in an insulated container and reach thermal equilibrium. Which of the following is necessarily true?",
      "choices": [
        "Neither the final temperature nor the heat exchanged need be related between the two objects.",
        "The block and water end up at the same temperature, and each undergoes the same temperature CHANGE (|ΔT|).",
        "The block and water undergo the same temperature change, but do not necessarily end up at the same final temperature.",
        "The block and water end up at the same temperature, but do not necessarily undergo the same temperature change."
      ],
      "correct": 3,
      "explanation": "Thermal equilibrium means, by definition, the block and water end up at the same final temperature; what's conserved is energy (heat lost by the block equals heat gained by the water). But Q = mcΔT for each object, and mass/specific heat generally differ, so matching Q values does NOT mean matching ΔT values. Choice A wrongly assumes equal final temperatures forces equal ΔT, ignoring that ΔT also depends on each object's own initial temperature, mass, and specific heat. Choice C reverses which quantity is guaranteed — final temperature is fixed by equilibrium, not ΔT. Choice D overcorrects: while ΔT isn't guaranteed equal, the final temperature and the heat exchanged ARE both constrained by equilibrium and energy conservation."
    },
    {
      "id": "9-21",
      "topic": "9.4 First Law of Thermodynamics",
      "stem": "A gas is compressed at a constant pressure of 3.0 × 10⁵ Pa, and its volume decreases from 0.040 m³ to 0.025 m³. How much work is done ON the gas?",
      "choices": [
        "+4500 J",
        "−4500 J",
        "0 J",
        "+12000 J"
      ],
      "correct": 0,
      "explanation": "W (on the gas) = −PΔV = −(3.0×10⁵)(0.025 − 0.040) = +4500 J; compression means something outside is pushing in, doing positive work on the gas. Choice A gets the magnitude right but the sign wrong, missing that work done ON the gas during compression is positive. Choice B assumes no P-V work occurs despite an explicit volume change at constant pressure. Choice D reflects a magnitude error, such as using the full initial or final volume rather than the actual ΔV of 0.015 m³."
    },
    {
      "id": "9-22",
      "topic": "9.4 First Law of Thermodynamics",
      "stem": "A gas undergoes an adiabatic compression (Q = 0). What can be said about its internal energy and temperature?",
      "choices": [
        "ΔU cannot be determined without knowing the exact pressure and volume values.",
        "ΔU = 0 and temperature stays constant, since no heat is exchanged.",
        "ΔU is negative and temperature decreases, since the gas is being compressed.",
        "ΔU is positive, and temperature increases."
      ],
      "correct": 3,
      "explanation": "For an adiabatic process, Q = 0, so the first law becomes ΔU = W. Compression means positive work is done ON the gas, so ΔU is positive, and since U depends only on temperature for an ideal gas, temperature must increase. Choice A confuses adiabatic (Q = 0) with isothermal (ΔU = 0) — those are two different conditions, and only the first applies here. Choice C reverses the sign of the work done during compression; compressing a gas does positive work ON it, not negative, so ΔU (and temperature) should rise, not fall. Choice D overlooks that Q = 0 together with the sign of the compression work is already enough to pin down the sign of ΔU, without needing specific P and V values."
    },
    {
      "id": "9-23",
      "topic": "9.4 First Law / P-V Diagrams",
      "stem": "On a P-V diagram, a horizontal line segment represents which of the four classic thermodynamic processes?",
      "choices": [
        "Isothermal",
        "Isochoric",
        "Isobaric",
        "Adiabatic"
      ],
      "correct": 2,
      "explanation": "A horizontal line means pressure stays constant while volume changes — an isobaric process, by definition. Choice B assigns the vertical-line (isochoric) description to this horizontal-line scenario. Choices C and D both describe curved processes and don't match a straight horizontal segment."
    },
    {
      "id": "9-24",
      "topic": "9.6 Entropy",
      "stem": "A gas is allowed to expand freely into a vacuum inside an insulated container (no heat exchange, no work done). What happens to the entropy of the gas?",
      "choices": [
        "It cannot change at all unless the gas's temperature also changes.",
        "It decreases, since the gas is doing work as it expands into the vacuum.",
        "It stays the same overall, since no heat was exchanged with the surroundings.",
        "It increases, since more configurations become available to the gas particles."
      ],
      "correct": 3,
      "explanation": "Free expansion into a vacuum increases the number of possible particle arrangements, which increases entropy — even though no heat was exchanged and no work was done (there's no opposing pressure to push against). Choice A doubly errs: it assumes work is being done during this expansion, when free expansion into a vacuum does zero work by definition. Choice B conflates “no heat exchanged” with “no entropy change” — entropy tracks accessible configurations, not just energy transfer, so it can rise with zero heat flow. Choice D wrongly ties entropy exclusively to temperature change, missing the volume/configuration-based mechanism demonstrated by this exact scenario."
    },
    {
      "id": "9-25",
      "topic": "9.5 Experimental Design",
      "stem": "In a calorimetry experiment to find the specific heat of an unknown metal, which of the following would introduce the LEAST additional experimental uncertainty?",
      "choices": [
        "Using a thermometer with fine temperature graduations and taking multiple trials.",
        "Using a calorimeter cup with significant heat capacity of its own, without accounting for it.",
        "Taking a long time to transfer the heated metal sample into the calorimeter.",
        "Estimating the mass of the metal sample rather than measuring it precisely."
      ],
      "correct": 0,
      "explanation": "A precise thermometer and multiple trials are the standard moves for reducing uncertainty — they don't introduce new error sources, they reduce existing ones. Choice A introduces real error: heat is lost to the surroundings during a slow transfer. Choice B also introduces real error, since some heat goes into warming the unaccounted-for calorimeter cup rather than just the water. Choice D directly corrupts one of the three variables (m) in Q = mcΔT, adding uncertainty rather than removing it."
    },
    {
      "id": "9-26",
      "topic": "9.1 Kinetic Theory",
      "stem": "A rigid, sealed container holds a fixed amount of ideal gas at temperature T. Additional gas of the same type is added while volume and temperature are held fixed. What happens to the Maxwell-Boltzmann speed distribution curve?",
      "choices": [
        "It keeps the same position, but grows shorter and wider.",
        "It shifts left, to lower speeds.",
        "Same shape and position, but grows taller.",
        "It shifts right, to higher speeds."
      ],
      "correct": 2,
      "explanation": "Temperature alone sets the shape and position of the Maxwell-Boltzmann distribution; adding more gas at the same T just scales up the number of particles at every speed, so the curve grows taller while its shape and peak position stay exactly the same. Choice A assumes more particles at the same T means higher speeds, incorrectly linking particle count to the distribution's position. Choice B makes the same type of error in the opposite direction. Choice D correctly keeps the position fixed but gets the height/width change backwards — adding particles at fixed T makes the curve taller, not shorter and wider (that pattern instead describes cooling, which redistributes existing particles rather than adding new ones)."
    },
    {
      "id": "9-27",
      "topic": "9.1 Kinetic Theory",
      "stem": "A sample of helium gas and a sample of argon gas are each at a temperature such that their average kinetic energies per particle are equal. What must be true about their temperatures?",
      "choices": [
        "Helium's temperature must be higher, since it's the lighter gas.",
        "The temperatures cannot be compared without knowing the particle masses.",
        "Argon's temperature must be higher, since it's the heavier gas.",
        "The two temperatures must be equal."
      ],
      "correct": 3,
      "explanation": "Average kinetic energy depends only on temperature (K<sub>avg</sub> = (3/2)k<sub>B</sub>T), not on particle mass or identity at all, so equal K<sub>avg</sub> directly implies equal temperatures. Choice A assumes the lighter gas needs a higher temperature to match kinetic energy, incorrectly linking mass to the K–T relationship. Choice B makes the same kind of error in the opposite direction. Choice D treats particle mass as necessary information, but mass is irrelevant to comparing temperatures once equal average kinetic energies are given — it only matters for converting K into speed, not for the K–T relationship itself."
    },
    {
      "id": "9-28",
      "topic": "9.1 Kinetic Theory",
      "stem": "A gas is compressed isothermally (constant temperature) to half its original volume. How do the average particle speed and the collision frequency with the container walls compare to before compression?",
      "choices": [
        "Both speed and collision frequency stay the same.",
        "Speed increases; collision frequency stays the same.",
        "Speed stays the same; collision frequency increases.",
        "Speed doubles; collision frequency doubles."
      ],
      "correct": 2,
      "explanation": "Isothermal means temperature — and therefore average speed — is unchanged, since speed depends only on temperature. But with half the volume, particles travel shorter distances between wall collisions, so they hit the walls more often. Choice A assumes isothermal compression still changes speed, when temperature (and hence speed) is explicitly held fixed. Choice C makes the same error in reverse, tying speed to the volume change instead of to temperature. Choice D correctly keeps speed fixed but misses that the smaller volume directly increases collision frequency — it fails to separate which property depends on temperature (speed) versus which depends on geometry (frequency)."
    },
    {
      "id": "9-29",
      "topic": "9.1 Kinetic Theory",
      "stem": "Find the average translational kinetic energy of gas particles at a temperature of 227°C.",
      "choices": [
        "4.7 × 10⁻²¹ J",
        "6.9 × 10⁻²¹ J",
        "3.1 × 10⁻²¹ J",
        "1.0 × 10⁻²⁰ J"
      ],
      "correct": 3,
      "explanation": "First convert to kelvin: 227°C + 273 = 500 K. Then K<sub>avg</sub> = (3/2)(1.38×10⁻²³)(500) ≈ 1.0×10⁻²⁰ J. Choice B (4.7×10⁻²¹ J) comes from mistakenly plugging in 227 directly without converting to kelvin. Choice C (3.1×10⁻²¹ J) is close to what results from dropping the 3/2 factor and using k<sub>B</sub>T alone. Choice D (6.9×10⁻²¹ J) reflects a similar dropped- or misapplied-factor slip near the k<sub>B</sub>T magnitude rather than the full (3/2)k<sub>B</sub>T."
    },
    {
      "id": "9-30",
      "topic": "9.1 Kinetic Theory",
      "stem": "A sample of nitrogen gas is heated until its average kinetic energy per particle increases by a factor of 9. By what factor does the average particle speed increase?",
      "choices": [
        "9",
        "81",
        "3",
        "27"
      ],
      "correct": 2,
      "explanation": "Since K<sub>avg</sub> ∝ v², speed scales as the square root of the kinetic energy ratio: √9 = 3. Choice B applies the given factor directly to speed, skipping the square root (treating v as proportional to K rather than √K). Choice C compounds that error with an extra multiplication rather than taking a square root. Choice D squares the given factor (9²=81) instead of taking its square root, the exact inverse of the correct operation."
    },
    {
      "id": "9-31",
      "topic": "9.1 Kinetic Theory",
      "stem": "Which of the following changes to a gas sample, considered independently of the others, would NOT increase its pressure?",
      "choices": [
        "Increasing the temperature at constant volume and particle count.",
        "Decreasing the volume at constant particle count and temperature.",
        "Increasing the number of particles at constant volume and temperature.",
        "Decreasing the number of particles at constant volume and temperature."
      ],
      "correct": 3,
      "explanation": "Removing particles at constant volume and temperature means fewer collisions with the walls per second, which decreases pressure — the one change here that does NOT increase pressure. Choice A does increase pressure: raising temperature at fixed volume and particle count makes collisions more frequent and more forceful. Choice B does increase pressure too: adding particles at fixed volume and temperature increases collision frequency. Choice C also increases pressure: shrinking the volume packs the same particles into less space, so they strike the walls more often."
    },
    {
      "id": "9-32",
      "topic": "9.2 Ideal Gas Law",
      "stem": "A gas sample at 3.0 atm, 6.0 L, and 400 K has both its pressure and volume doubled. Find the new temperature.",
      "choices": [
        "1600 K",
        "800 K",
        "3200 K",
        "400 K"
      ],
      "correct": 0,
      "explanation": "Using P₁V₁/T₁ = P₂V₂/T₂, both P and V doubling means PV increases by a factor of 4 (2×2), so T must also increase by a factor of 4: T₂ = 4 × 400 = 1600 K. Choice A treats the two doublings as if they canceled out, leaving T unchanged. Choice B accounts for only one of the two doubled quantities rather than both contributing multiplicatively. Choice D overcounts the combined effect, applying an extra factor beyond the correct ×4."
    },
    {
      "id": "9-33",
      "topic": "9.2 Ideal Gas Law",
      "stem": "A sample contains 0.20 mol of ideal gas at 350 K in a 3.0 L container. Find the pressure. (R = 0.0821 L·atm/(mol·K))",
      "choices": [
        "0.95 atm",
        "3.8 atm",
        "1.9 atm",
        "5.7 atm"
      ],
      "correct": 2,
      "explanation": "Using PV = nRT: P = nRT/V = (0.20)(0.0821)(350)/3.0 ≈ 1.9 atm. Choice A is roughly half this value, consistent with a factor-of-2 slip such as using double the actual volume. Choice C is roughly double the correct value, the mirror-image slip. Choice D is roughly triple the correct value, consistent with an arithmetic error in combining the n×R×T product."
    },
    {
      "id": "9-34",
      "topic": "9.2 Ideal Gas Law",
      "stem": "A rigid container of gas is cooled at constant volume from 600 K to 300 K. What happens to its pressure?",
      "choices": [
        "It doubles.",
        "It is cut to one quarter.",
        "It is cut in half.",
        "It stays the same."
      ],
      "correct": 2,
      "explanation": "At constant volume, P/T is constant: halving the temperature (600 K → 300 K) halves the pressure. Choice A inverts this relationship, treating cooling as if it should raise pressure. Choice C applies a squared relationship (halving twice) to what is actually a simple linear one. Choice D ignores the P/T relationship at constant volume entirely, as if pressure were independent of temperature."
    },
    {
      "id": "9-35",
      "topic": "9.2 Ideal Gas Law",
      "stretch": true,
      "stem": "Container A (4.0 L) holds gas at 2.0 atm; Container B (2.0 L) holds the same type of gas at 5.0 atm, both at the same temperature. A valve connecting them is opened and the gas mixes at the same temperature. Find the final pressure.",
      "choices": [
        "3.5 atm",
        "7.0 atm",
        "2.3 atm",
        "3.0 atm"
      ],
      "correct": 3,
      "explanation": "Since n ∝ PV at fixed T, the total ‘PV’ before mixing is (2.0)(4.0) + (5.0)(2.0) = 18.0; after mixing, total volume is 6.0 L, so final pressure is 18.0/6.0 = 3.0 atm. Choice A resembles an unweighted average of the two pressures rather than properly combining total PV and dividing by total volume. Choice C reflects a smaller arithmetic slip in totaling the PV products or the combined volume. Choice D simply adds the two given pressures (2.0+5.0=7.0), ignoring that the gas amounts — not just the pressures — need to be weighted properly."
    },
    {
      "id": "9-36",
      "topic": "9.2 Ideal Gas Law",
      "stem": "A weather balloon with volume 2.5 m³ is filled at sea level (1.0 atm, 300 K). It rises to an altitude where pressure is 0.25 atm and temperature is 250 K. Find its new volume.",
      "choices": [
        "5.0 m³",
        "2.1 m³",
        "10 m³",
        "8.3 m³"
      ],
      "correct": 3,
      "explanation": "Using P₁V₁/T₁ = P₂V₂/T₂: V₂ = (1.0)(2.5)(250)/[(300)(0.25)] ≈ 8.3 m³; the large pressure drop dominates over the temperature drop. Choice A has the pressure effect backwards, treating the pressure drop as compressing rather than expanding the gas. Choice B accounts for only the pressure change (factor of 4) without also including the extra effect of the temperature drop. Choice D overshoots, consistent with mishandling the direction of the temperature ratio's (partially offsetting) contribution."
    },
    {
      "id": "9-37",
      "topic": "9.2 Ideal Gas Law",
      "stem": "A sealed syringe's plunger is slowly pulled out at constant temperature, increasing the enclosed gas's volume. What shape does a graph of pressure vs. volume take during this process?",
      "choices": [
        "A straight line with positive slope.",
        "An exponential decay curve shape.",
        "A straight line with negative slope.",
        "A hyperbola-shaped curve, decreasing."
      ],
      "correct": 3,
      "explanation": "At constant temperature, PV = constant (Boyle's Law), so P = constant/V — an inverse relationship, which graphs as a hyperbola, not a straight line. Choice A assumes a linear inverse relationship, conflating “decreasing” with “straight line.” Choice C is wrong in both direction (P decreases as V increases here, not increases) and shape (linear vs. hyperbolic). Choice D picks a curve that's qualitatively decreasing like the true hyperbola but is the wrong functional form — P ∝ 1/V, not P ∝ e<sup>−V</sup>."
    },
    {
      "id": "9-38",
      "topic": "9.2 Ideal Gas Law",
      "stretch": true,
      "stem": "A gas starts at pressure P, volume V, temperature T. First, its volume triples at constant pressure. Then, starting from that new state, its temperature is tripled at constant volume. Find the final pressure in terms of P.",
      "choices": [
        "P",
        "3P",
        "27P",
        "9P"
      ],
      "correct": 1,
      "explanation": "Step 1 (isobaric): tripling V at constant P also triples T (V/T constant), giving an intermediate state of P, 3V, 3T. Step 2 (isochoric): tripling T again to 9T at constant V means pressure also triples (P/T constant): P<sub>final</sub> = 3P. Choice A assumes the two sequential changes cancel out, missing that the isochoric step alone produces a genuine threefold pressure increase. Choice C multiplies the volume factor and temperature factor together as if both drove pressure directly (3×3=9), rather than recognizing that the isobaric step leaves pressure completely unchanged. Choice D compounds that error with an extra factor of 3."
    },
    {
      "id": "9-39",
      "topic": "9.2 Ideal Gas Law",
      "stem": "A scuba tank (12 L) contains gas at 200 atm and 300 K. All the gas is released into the atmosphere, expanding to 1.0 atm and cooling to 250 K. Find the final volume of the released gas.",
      "choices": [
        "2000 L",
        "2400 L",
        "200 L",
        "20,000 L"
      ],
      "correct": 0,
      "explanation": "Using P₁V₁/T₁ = P₂V₂/T₂: V₂ = (200)(12)(250)/[(300)(1.0)] = 2000 L; the huge pressure drop (200 atm to 1 atm) dominates. Choice A is off by roughly a factor of 10, consistent with a decimal-point slip in the pressure ratio. Choice C is close but reflects a smaller intermediate-arithmetic slip, such as using 300 K instead of 250 K for the final temperature. Choice D is off by a factor of 10 in the other direction, another decimal-point error applying the 200:1 pressure ratio."
    },
    {
      "id": "9-40",
      "topic": "9.3 Thermal Transfer",
      "stem": "Two rods of the same material and cross-sectional area conduct heat between the same fixed temperatures. Rod 2 is twice as long as Rod 1. If Rod 1 transfers heat at rate R, find Rod 2's rate in terms of R.",
      "choices": [
        "2R",
        "R",
        "4R",
        "R/2"
      ],
      "correct": 3,
      "explanation": "Conduction rate is Q/Δt = kAΔT/L, with length L in the denominator; doubling the length halves the rate. Choice B ignores L's effect entirely, as if rate were independent of length. Choice C inverts the relationship, treating a longer rod as conducting faster rather than slower. Choice D compounds that inversion with an incorrect squared dependence on length."
    },
    {
      "id": "9-41",
      "topic": "9.3 Thermal Transfer",
      "stem": "A rod conducts heat at rate R between two reservoirs with temperature difference ΔT. If the temperature difference is tripled while the rod's length and area stay the same, find the new rate in terms of R.",
      "choices": [
        "R",
        "3R",
        "R/3",
        "9R"
      ],
      "correct": 1,
      "explanation": "Conduction rate is directly proportional to ΔT: Q/Δt = kAΔT/L. Tripling ΔT triples the rate. Choice A inverts this, treating ΔT as if it belonged in the denominator the way length does. Choice B ignores ΔT's role in the equation altogether, as if rate were independent of the temperature difference. Choice D applies a squared relationship (3²=9) to what is actually a direct, linear proportionality with ΔT."
    },
    {
      "id": "9-42",
      "topic": "9.3 Thermal Transfer",
      "stem": "A material with k = 0.20 W/(m·K), area 0.50 m², and thickness 0.10 m separates two regions with a temperature difference of 15°C. Find the rate of heat conduction.",
      "choices": [
        "150 W",
        "7.5 W",
        "15 W",
        "1.5 W"
      ],
      "correct": 2,
      "explanation": "Q/Δt = kAΔT/L = (0.20)(0.50)(15)/0.10 = 15 W. Choice A is off by a factor of 10, consistent with a decimal-point slip. Choice B is roughly half the correct value, consistent with omitting one of the given factors (such as using half the area). Choice D is off by a factor of 10 in the other direction from choice A."
    },
    {
      "id": "9-43",
      "topic": "9.3 Thermal Transfer",
      "stem": "A 0.40 kg block of lead (c = 130 J/(kg·°C)) at 200°C is dropped into 0.20 kg of water (c = 4180 J/(kg·°C)) at 25°C in an insulated container. Find the equilibrium temperature.",
      "choices": [
        "50°C",
        "28°C",
        "35°C",
        "112°C"
      ],
      "correct": 2,
      "explanation": "Setting heat lost equal to heat gained: (0.40)(130)(200−T<sub>f</sub>) = (0.20)(4180)(T<sub>f</sub>−25), giving T<sub>f</sub> ≈ 35°C — close to the water's starting temperature, since lead's low specific heat means it gives up heat with only a modest temperature change of its own. Choice A undershoots, consistent with over-weighting water's dominance beyond what the actual mc values justify. Choice C overshoots, consistent with treating the two objects' mc values as more comparable than they really are. Choice D suggests the “heat lost” and “heat gained” sides were swapped, or both temperature differences were set up with the same sign instead of opposite signs."
    },
    {
      "id": "9-44",
      "topic": "9.3 Thermal Transfer",
      "stem": "A hot object with a large mc value is placed in contact with a cool object with a small mc value, in an insulated system. Where does the final equilibrium temperature end up?",
      "choices": [
        "Exactly the average of the two initial temperatures.",
        "Closer to the cool object's initial temperature.",
        "Equal to the hot object's initial temperature.",
        "Closer to the hot object's initial temperature."
      ],
      "correct": 3,
      "explanation": "A large mc value means an object strongly resists changing temperature, so the equilibrium temperature is pulled toward whichever object has the larger mc — here, the hot object. Choice B reverses which object dominates the outcome. Choice C only holds when both objects have equal mc, which contradicts the stated large/small mc difference. Choice D overstates the effect — the cool object still absorbs heat and shifts the equilibrium slightly, just less than an equal-mc scenario would."
    },
    {
      "id": "9-45",
      "topic": "9.3 Thermal Transfer",
      "stretch": true,
      "stem": "A wall is built from two layers of different materials, same area, but different thicknesses and conductivities. In steady state, what quantity is the same for both layers?",
      "choices": [
        "The rate of heat flow through each layer.",
        "The thermal conductivity of each layer.",
        "The temperature difference across each layer.",
        "The temperature gradient (ΔT/L) across each layer."
      ],
      "correct": 0,
      "explanation": "In steady state, no heat accumulates anywhere inside the wall, so whatever flows into one layer must flow out into the next — the rate of heat flow (Q/Δt) must match across both layers. Choice B reverses which quantity is guaranteed equal: ΔT across each layer generally differs, since it depends on that layer's own k and L, while it's the flow rate that's forced to match. Choice C treats conductivity as something that should equalize between different materials, but k is a fixed material property, and the problem states the materials differ. Choice D conflates the gradient (ΔT/L) with the flow rate; two layers can share the same flow rate while having different gradients, since flow rate also depends on each layer's own k."
    },
    {
      "id": "9-46",
      "topic": "9.3 Thermal Transfer",
      "stem": "A student adds known amounts of heat Q to a fixed mass m of a substance and measures the resulting temperature change ΔT for each trial. What should be graphed, and how is the specific heat c found from the graph?",
      "choices": [
        "ΔT vs. Q; c = slope × m",
        "Q vs. ΔT; c = slope × m",
        "Q vs. ΔT; c = slope ÷ m",
        "Q vs. ΔT; c = 1 ÷ (slope × m)"
      ],
      "correct": 2,
      "explanation": "From Q = mcΔT, plotting Q (vertical) against ΔT (horizontal) gives a line through the origin with slope = mc; since m is known, c = slope/m. Choice B inverts the needed algebra — slope already equals mc directly, so dividing by m gives c, not its reciprocal. Choice C swaps the axes, which changes what the slope physically represents (it would become 1/(mc) instead of mc), so the same c = slope×m formula no longer applies once axes are flipped. Choice D keeps the correct axes but performs the wrong algebra step, multiplying by m instead of dividing."
    },
    {
      "id": "9-47",
      "topic": "9.3 Thermal Transfer",
      "stem": "Three identical blocks (equal mass and specific heat) at 10°C, 30°C, and 50°C are brought into contact in an insulated system. Find the equilibrium temperature.",
      "choices": [
        "90°C",
        "20°C",
        "40°C",
        "30°C"
      ],
      "correct": 3,
      "explanation": "Because all three blocks share equal mc, the equilibrium temperature is simply the arithmetic mean: (10+30+50)/3 = 30°C. Choice A reflects averaging only two of the three given temperatures. Choice C reflects a mis-averaging that over-weights the higher temperatures. Choice D simply sums the three temperatures (90) without dividing by the number of objects."
    },
    {
      "id": "9-48",
      "topic": "9.3 Thermal Transfer",
      "stem": "Two rods of the same length and material conduct heat between the same reservoirs. Rod 2 has twice the cross-sectional area of Rod 1. How do their conduction rates compare?",
      "choices": [
        "Rod 2 conducts half as fast as Rod 1.",
        "They conduct at the same rate.",
        "Rod 2 conducts twice as fast as Rod 1.",
        "Rod 2 conducts four times as fast as Rod 1."
      ],
      "correct": 2,
      "explanation": "Area A sits in the numerator of Q/Δt = kAΔT/L, so doubling the area doubles the rate. Choice B inverts this, confusing area's numerator role with length's denominator role. Choice C applies a squared relationship (2²=4) to what is actually a direct, linear proportionality with area. Choice D ignores that area appears explicitly in the equation, as if rate were unaffected by cross-sectional area."
    },
    {
      "id": "9-49",
      "topic": "9.3 Thermal Transfer",
      "stem": "A window pane (k = 0.96 W/(m·K)), area 1.5 m², thickness 0.0050 m, separates an indoor temperature of 22°C from an outdoor temperature of −8°C. Find the rate of heat loss through the window.",
      "choices": [
        "8640 W",
        "1440 W",
        "4320 W",
        "288 W"
      ],
      "correct": 0,
      "explanation": "ΔT = 22−(−8) = 30°C, so Q/Δt = kAΔT/L = (0.96)(1.5)(30)/0.0050 = 8640 W. Choice A is off by a factor of roughly 30, consistent with a major unit or decimal-point slip in the thickness term. Choice B is off by a factor of 6, consistent with using too small a ΔT (such as 5°C instead of the full 30°C difference). Choice C is exactly half the correct value, consistent with a factor-of-2 slip such as using half the given area."
    },
    {
      "id": "9-50",
      "topic": "9.4 First Law of Thermodynamics",
      "stem": "A gas undergoes a complete cyclic process, returning to its exact initial state after several steps. What is ΔU for the entire cycle?",
      "choices": [
        "Equal to the net heat absorbed during the cycle.",
        "Zero, always.",
        "Cannot be determined without knowing the specific path.",
        "Equal to the net work done on the gas during the cycle."
      ],
      "correct": 1,
      "explanation": "For an ideal gas, internal energy depends only on temperature, and a complete cycle returns the gas to its exact starting state — including its starting temperature — so ΔU for the full cycle is always exactly zero, regardless of path. Choice B conflates ΔU with Q alone, ignoring that ΔU = Q + W depends on both quantities together. Choice C makes the same kind of error isolating W instead of Q. Choice D overlooks that ΔU is a state function depending only on the endpoints — identical start and end states guarantee ΔU = 0 no matter what path the cycle took."
    },
    {
      "id": "9-51",
      "topic": "9.4 First Law of Thermodynamics",
      "stretch": true,
      "stem": "For the same complete cyclic process (ΔU = 0), what must be true about the net heat Q and net work W (on the gas) over the full cycle?",
      "choices": [
        "Q<sub>net</sub> must equal W<sub>net</sub> (they're equal in magnitude and sign).",
        "Q<sub>net</sub> must equal −W<sub>net</sub> (equal magnitude, opposite sign).",
        "Q<sub>net</sub> and W<sub>net</sub> must both individually equal zero.",
        "No relationship can be determined between them at all."
      ],
      "correct": 1,
      "explanation": "From the first law, ΔU = Q + W. Since ΔU = 0 for a full cycle, Q<sub>net</sub> + W<sub>net</sub> = 0, meaning Q<sub>net</sub> = −W<sub>net</sub>. Choice A overreaches: while their sum is zero, nothing requires each term to individually vanish — many real cycles have nonzero net heat and nonzero net work that cancel each other out. Choice C gets the sign relationship backwards; the correct algebra requires Q<sub>net</sub> and W<sub>net</sub> to be opposite in sign, not equal in sign. Choice D overlooks that ΔU = 0 for any complete cycle directly forces a specific relationship between Q<sub>net</sub> and W<sub>net</sub> via the first law, regardless of the path taken."
    },
    {
      "id": "9-52",
      "topic": "9.4 First Law of Thermodynamics",
      "stem": "A gas absorbs 800 J of heat while doing 300 J of work on its surroundings (expanding). Find ΔU for the gas.",
      "choices": [
        "1100 J",
        "500 J",
        "300 J",
        "800 J"
      ],
      "correct": 1,
      "explanation": "Work done BY the gas on its surroundings means work done ON the gas is negative: W = −300 J, so ΔU = Q + W = 800 + (−300) = 500 J. Choice B forgets to subtract the work entirely, reporting Q alone as if W were zero. Choice C adds the work instead of subtracting it, treating W as positive when it should be negative for work done ON the gas during an expansion. Choice D reports the work value itself rather than combining it with Q via the first law."
    },
    {
      "id": "9-53",
      "topic": "9.4 First Law of Thermodynamics",
      "stem": "A gas releases 400 J of heat to its surroundings while 250 J of work is done ON it (compression). Find ΔU for the gas.",
      "choices": [
        "−150 J",
        "−650 J",
        "150 J",
        "650 J"
      ],
      "correct": 0,
      "explanation": "Heat released means Q = −400 J, and work done ON the gas is positive: W = +250 J, so ΔU = Q + W = −400 + 250 = −150 J. Choice A adds the two magnitudes with matching signs, as if both terms were negative, instead of combining a negative Q with a positive W. Choice C gets the correct magnitude but the wrong sign, from mismanaging which term should be negative. Choice D compounds both the sign error and the addition error from choice A."
    },
    {
      "id": "9-54",
      "topic": "9.4 First Law of Thermodynamics",
      "stem": "A gas is compressed while simultaneously being cooled, so its temperature decreases throughout the process. What must be true about ΔU, Q, and W (on the gas)?",
      "choices": [
        "ΔU cannot be determined without numerical values.",
        "ΔU is negative, Q is negative, W is positive.",
        "ΔU is negative, Q is positive, W is negative.",
        "ΔU is positive, Q is positive, W is negative."
      ],
      "correct": 1,
      "explanation": "Since temperature decreases and internal energy of an ideal gas depends only on temperature, ΔU must be negative — certain without any numbers. Compression means positive work is done ON the gas (W positive); since ΔU = Q+W is negative while W is positive, Q must be negative enough to make the sum negative, consistent with the gas actively losing heat even as it's compressed. Choice B reverses the signs across the board — since temperature explicitly decreases, ΔU cannot be positive. Choice C gets ΔU's sign right but mismanages W's sign; compression should do positive work ON the gas, not negative. Choice D overlooks that the sign of ΔU is already fully determined just from knowing temperature decreases, with no numerical values required."
    },
    {
      "id": "9-55",
      "topic": "9.4 First Law of Thermodynamics",
      "stem": "A gas expands adiabatically (Q = 0). What happens to its temperature?",
      "choices": [
        "It decreases.",
        "It increases.",
        "It cannot be determined without knowing the pressure and volume.",
        "It stays the same."
      ],
      "correct": 0,
      "explanation": "With Q = 0, the first law becomes ΔU = W. Expansion means the gas does positive work on its surroundings, so work done ON the gas is negative, making ΔU negative — and since U depends only on temperature, temperature decreases. Choice A reverses the outcome, missing that work leaving the gas (not entering it) lowers internal energy here. Choice C ignores that with no external heat source, any work done by the gas must come from its own internal energy. Choice D overlooks that Q = 0 combined with the direction of work during an expansion is already sufficient to determine the sign of ΔU without needing specific numbers."
    },
    {
      "id": "9-56",
      "topic": "9.4 First Law / P-V Diagrams",
      "stem": "A process on a P-V diagram is represented by a straight diagonal line (both P and V changing simultaneously) connecting two states. Is this consistent with any of the four classic named processes (isobaric, isochoric, isothermal, adiabatic)?",
      "choices": [
        "Yes — any straight line on a P-V diagram represents one of the four named processes.",
        "Yes — it must be adiabatic, since both variables change.",
        "Yes — it must be isothermal, since both variables change.",
        "No — none of the four classic processes match a straight diagonal line."
      ],
      "correct": 3,
      "explanation": "Isobaric and isochoric processes are straight lines, but only horizontal or vertical, respectively; isothermal and adiabatic processes are both curves (roughly hyperbola-shaped, PV ≈ constant-type relationships), not straight diagonal lines. Choice A incorrectly assumes any process changing both variables must be isothermal — but isothermal processes are curves, not straight lines. Choice B makes the same category error, mistaking “both variables change” for the adiabatic label, which is also a curve. Choice D overgeneralizes from the two real straight-line cases (horizontal = isobaric, vertical = isochoric) to assume ALL straight lines, including diagonal ones, must be named processes — but a diagonal line holds none of P, V, or T constant, so it matches none of the four definitions."
    },
    {
      "id": "9-57",
      "topic": "9.4 First Law of Thermodynamics",
      "stem": "The AP Physics 2 equation sheet defines W as the work done ON a system. Many textbooks instead define work as the work done BY the gas. If a gas expands at constant pressure P from volume V₁ to V₂, what is the work done BY the gas, using the textbook convention?",
      "choices": [
        "W<sub>by</sub> = P(V₂ − V₁)",
        "W<sub>by</sub> = −P(V₂ − V₁)",
        "W<sub>by</sub> = P(V₁ − V₂)",
        "W<sub>by</sub> = 0"
      ],
      "correct": 0,
      "explanation": "The AP convention gives work done ON the gas as W<sub>on</sub> = −PΔV = −P(V₂−V₁); work done BY the gas is the opposite sign: W<sub>by</sub> = P(V₂−V₁), which is positive for this expansion (V₂>V₁), as expected. Choice A is actually the AP-convention work done ON the gas, not the textbook work done BY the gas — picking it mixes up the two conventions the question is asking you to distinguish. Choice C flips the sign by reversing the subtraction order, which would incorrectly give a negative value for an expansion even under the “work done by” convention. Choice D ignores that any volume change at nonzero pressure involves nonzero P-V work; zero work only applies to a strictly isochoric process."
    },
    {
      "id": "9-58",
      "topic": "9.4 First Law of Thermodynamics",
      "stem": "3.0 mol of monatomic ideal gas is heated at constant volume from 280 K to 410 K. Find Q for this process.",
      "choices": [
        "1620 J",
        "9720 J",
        "3240 J",
        "4860 J"
      ],
      "correct": 3,
      "explanation": "At constant volume, W = 0, so Q = ΔU = (3/2)nRΔT = (3/2)(3.0)(8.31)(130) ≈ 4860 J — all the added heat goes directly into internal energy. Choice A is roughly one-third of the correct value, consistent with dropping the 3/2 factor and using nRΔT alone. Choice B is roughly two-thirds of the correct value, consistent with using a factor of 1 instead of 3/2. Choice D is exactly double the correct value, consistent with using a factor of 3 instead of 3/2 in the internal energy equation."
    },
    {
      "id": "9-59",
      "topic": "9.4 First Law of Thermodynamics",
      "stem": "The same volume change ΔV occurs during two separate isobaric processes, one at constant pressure P₁ and the other at a higher constant pressure P₂. Compare the magnitudes of work done in each process.",
      "choices": [
        "The higher-pressure process involves less work.",
        "The higher-pressure process involves more work.",
        "The relationship depends on the direction of the volume change.",
        "Both processes involve the same amount of work, since ΔV is the same."
      ],
      "correct": 1,
      "explanation": "Work magnitude for an isobaric process is |W| = PΔV; for the same ΔV, a higher constant pressure directly produces a larger magnitude of work. Choice B inverts this direct proportionality between pressure and work magnitude. Choice C ignores that pressure also appears in the work equation — equal ΔV alone doesn't make the works equal unless pressure is equal too. Choice D confuses magnitude with sign; the direction of the volume change affects the SIGN of the work, but the question asks about magnitude, which the given pressure comparison is sufficient to answer on its own."
    },
    {
      "id": "9-60",
      "topic": "9.5 Experimental Design",
      "stem": "A student varies the temperature difference ΔT across a sample of known area A and thickness L, measuring the resulting rate of heat transfer Q/Δt for each trial. What should be graphed to determine the material's thermal conductivity k, and how is k found?",
      "choices": [
        "ΔT vs. Q/Δt; k = slope × L/A",
        "Q/Δt vs. ΔT; k = slope × L/A",
        "Q/Δt vs. ΔT; k = slope × A/L",
        "Q/Δt vs. 1/ΔT; k = 1/slope"
      ],
      "correct": 1,
      "explanation": "Rearranging Q/Δt = kAΔT/L, plotting Q/Δt against ΔT gives a line through the origin with slope = kA/L, so k = slope × L/A. Choice B inverts the needed algebra step; since slope = kA/L, isolating k means multiplying by L/A, not A/L. Choice C swaps which variable goes on which axis, which changes what the slope physically represents, so the same k = slope×L/A formula no longer applies directly. Choice D's reciprocal-axis approach doesn't produce a slope that isolates k the way the correct linear relationship does — it overcomplicates a relationship that's already linear in ΔT."
    },
    {
      "id": "9-61",
      "topic": "9.5 Experimental Design",
      "stem": "A student wants to experimentally verify Boyle's Law (pressure vs. volume at constant temperature) using a syringe connected to a pressure sensor. Which procedure best ensures the temperature stays constant throughout the trials?",
      "choices": [
        "Move the plunger quickly to minimize the time available for heat exchange.",
        "Perform the experiment inside a sealed vacuum chamber.",
        "Move the plunger slowly so the gas stays in thermal equilibrium with the room.",
        "Insulate the syringe to prevent any heat exchange with the surroundings."
      ],
      "correct": 2,
      "explanation": "Slow, quasi-static volume changes give the gas time to exchange heat with the room and stay at (approximately) room temperature throughout — genuinely isothermal conditions. Choice A does the opposite, trapping heat inside the gas and pushing the process toward adiabatic behavior instead, the exact failure mode this question is testing for. Choice C actively prevents the heat exchange needed for isothermal conditions, guaranteeing adiabatic-like behavior. Choice D misidentifies what's being controlled — a vacuum chamber affects the outside environment, not whether heat can flow between the gas and a reservoir, and doesn't address the actual variable (rate of volume change) that determines whether the process is quasi-static."
    },
    {
      "id": "9-62",
      "topic": "9.5 Experimental Design",
      "stretch": true,
      "stem": "In a calorimetry experiment (hot sample dropped into water in a calorimeter cup), a student forgets to account for the calorimeter cup's own heat capacity when calculating the sample's specific heat. How does the calculated value of the sample's specific heat compare to its true value?",
      "choices": [
        "The calculated value will be unaffected.",
        "The calculated value will be too high.",
        "It could be too high or too low, depending on the sign of the temperature change.",
        "The calculated value will be too low."
      ],
      "correct": 3,
      "explanation": "Some of the heat the sample released also went into warming the calorimeter cup, not just the water; if the calculation only accounts for heat gained by the water, it underestimates the total heat that left the sample, and since that underestimated heat is what's divided to solve for specific heat, the calculated value comes out too low. Choice A has the bias backwards: underestimating the true heat released pushes the computed c down, not up. Choice C overlooks that the cup genuinely absorbs some of the sample's heat in reality, so omitting it necessarily changes the result rather than leaving it untouched. Choice D is wrong because the direction of the bias isn't tied to the sign of ΔT — ignoring a real heat sink always means underestimating total heat, producing an unambiguous low bias regardless of heating or cooling."
    },
    {
      "id": "9-63",
      "topic": "9.6 Entropy",
      "stem": "Which of the following processes, occurring within an isolated system, is consistent with the Second Law of Thermodynamics?",
      "choices": [
        "Mixed gases do not spontaneously separate back into pure components.",
        "Heat flows spontaneously from a colder object to a hotter one.",
        "A gas spontaneously compresses itself into a smaller region without any external work.",
        "Ice spontaneously forms from liquid water at room temperature."
      ],
      "correct": 0,
      "explanation": "The first three choices all describe spontaneous decreases in entropy, forbidden by the second law for an isolated system, while mixed gases not spontaneously un-mixing is simply the normal, expected (entropy-consistent) behavior. Choice A directly violates the second law: heat only flows hot-to-cold spontaneously; forcing the reverse requires external work, as in a refrigerator. Choice B describes particles spontaneously becoming more confined without any energy input — a spontaneous entropy decrease, which the second law forbids. Choice C describes molecules spontaneously becoming more ordered (lower entropy) at room temperature with no external cooling process, which cannot happen spontaneously."
    },
    {
      "id": "9-64",
      "topic": "9.6 Entropy",
      "stretch": true,
      "stem": "A gas undergoes a reversible isothermal expansion, absorbing heat Q from a thermal reservoir at temperature T while doing work on its surroundings. Compare the entropy change of the gas to the entropy change of the reservoir.",
      "choices": [
        "The gas loses entropy while the reservoir gains even more.",
        "Equal magnitude, opposite sign — a reversible process's signature.",
        "Entropy isn't defined at all for reversible processes.",
        "The gas gains more entropy than the reservoir loses."
      ],
      "correct": 1,
      "explanation": "For an idealized reversible process, the total entropy change of the universe (gas plus reservoir) is exactly zero — the defining feature of reversibility — so whatever entropy the gas gains, the reservoir loses an equal amount. Choice A describes a net entropy increase, which is the hallmark of an IRREVERSIBLE process, not the idealized reversible case described here. Choice B makes the same type of error in the opposite direction, still implying a net entropy increase rather than the exact cancellation reversibility requires. Choice D is incorrect because entropy is defined for essentially any process, reversible or not; what's special about a reversible process is that its total change is exactly zero, not that entropy becomes undefined."
    },
    {
      "id": "9-65",
      "topic": "9.6 Entropy",
      "stem": "Consider three processes in an isolated system: (I) heat flows from a hot object to a cold object, (II) a gas expands freely into a vacuum, (III) two different gases mix together. Which statement is correct?",
      "choices": [
        "Only process III results in an entropy increase.",
        "None of these processes change the total entropy, since energy is conserved in each.",
        "All three processes result in an entropy increase for the isolated system.",
        "Only processes I and II result in an entropy increase."
      ],
      "correct": 2,
      "explanation": "Every one of these is a classic entropy-increasing process: heat flowing hot-to-cold, free expansion into more available space, and mixing of previously separated substances all increase the number of ways the system's particles can be arranged. Choice B wrongly excludes mixing (III); combining two previously separated gases into one mixed state is itself entropy-increasing, by the same “more accessible configurations” logic as free expansion. Choice C wrongly excludes I and II, both standard textbook entropy-increasing processes. Choice D conflates the first law (energy conservation, always true) with the second law (entropy behavior) — energy being conserved says nothing about whether the arrangement of that energy becomes more or less ordered."
    }
  ],
  "10": [
    {
      "id": "10-1",
      "topic": "10.1 Coulomb's Law",
      "stem": "Sphere A carries charge −10 μC and Sphere B carries charge −40 μC. They are held a fixed distance apart. How does the magnitude of the force Sphere A exerts on Sphere B compare to the magnitude of the force Sphere B exerts on Sphere A?",
      "choices": [
        "The force cannot be determined without knowing the distance between the spheres.",
        "Sphere A exerts four times as much force on Sphere B as Sphere B exerts on Sphere A.",
        "Sphere B exerts four times as much force on Sphere A as Sphere A exerts on Sphere B.",
        "The forces are equal in magnitude, by Newton's third law."
      ],
      "correct": 3,
      "explanation": "Newton's third law guarantees these two forces are equal in magnitude and opposite in direction, regardless of how different the charge magnitudes are — confirmed by Coulomb's Law's symmetry in q₁ and q₂. Choice A assumes Sphere B (the larger charge) must exert more force than it receives, and Choice B makes the same charge-ratio error in the other direction; action-reaction pairs are never scaled by charge size. Choice D wrongly treats distance as necessary information — distance affects both forces identically, so it cancels out of any comparison between them."
    },
    {
      "id": "10-2",
      "topic": "10.2 Charging Processes",
      "stem": "A negatively charged rod is brought close to (but never touching) a neutral conducting sphere. While the rod remains in place, the sphere is briefly connected to the ground via a wire, and then the ground wire is disconnected. Finally, the rod is removed. What is the final charge on the sphere?",
      "choices": [
        "Positive, opposite in sign to the rod.",
        "It depends on how long the rod was held near the sphere.",
        "Negative, the same sign as the rod.",
        "Neutral, since the rod never touched the sphere."
      ],
      "correct": 0,
      "explanation": "This is the classic charging-by-induction sequence: the negative rod repels electrons to the far side of the sphere, grounding drains that excess of electrons away, and removing the ground wire traps a deficit — positive charge, opposite the rod. Choice A describes what direct contact (conduction) would produce, not induction at a distance. Choice C wrongly assumes the rod must touch the sphere for anything to happen; the field alone is enough to redistribute charge. Choice D mistakes induction for a duration-dependent process — once the sphere reaches equilibrium (essentially instantly for a conductor), holding the rod there longer changes nothing."
    },
    {
      "id": "10-3",
      "topic": "10.3 Electric Fields",
      "stem": "At a certain point in space, the electric field due to a system of charges is zero. Which of the following must be true at that point?",
      "choices": [
        "A test charge there would feel zero net electric force.",
        "The electric potential at that point must also be zero.",
        "All the charges in the system must be equidistant from that point.",
        "There are no charges anywhere in the system."
      ],
      "correct": 0,
      "explanation": "Field is force per unit charge (E = F/q), so a zero field at a point means any test charge placed there feels zero net force — true by definition. Choice A overreaches: a zero field at one point doesn't mean there are no charges anywhere, only that their effects happen to cancel there. Choice B confuses field with potential — potential is a separate scalar quantity, and nothing requires it to be zero just because the field is; a nonzero-potential, zero-field point is entirely possible (and vice versa). Choice D invents an unnecessary geometric requirement; the charges need not be equidistant, only positioned so their vector contributions cancel."
    },
    {
      "id": "10-4",
      "topic": "10.3 Electric Fields",
      "stem": "Two point charges, +Q and +2Q, are separated by a fixed distance. At which point along the line connecting them (other than at infinity) could the net electric field be zero?",
      "choices": [
        "A point closer to the +2Q charge than to the +Q charge, between the two charges.",
        "The net field cannot be zero anywhere along this line, since both charges are positive.",
        "A point closer to the +Q charge than to the +2Q charge, between the two charges.",
        "The midpoint between the two charges."
      ],
      "correct": 2,
      "explanation": "Between two like charges, the field from each points away from itself, so between the charges the two contributions point toward each other and can cancel. That cancellation point must sit closer to the WEAKER charge (+Q) — Choice B — since being nearer the smaller charge lets its close-range field match the larger charge's field from farther away. Choice A (the midpoint) is wrong because the stronger +2Q charge would dominate there, leaving a nonzero net field toward +Q. Choice C places the point on the wrong side, closer to the stronger charge, which only worsens the imbalance. Choice D is wrong because both charges being positive is exactly what makes cancellation possible between them — the fields oppose because they point in opposite directions along the line, not because of any sign restriction."
    },
    {
      "id": "10-5",
      "topic": "10.5 Electric Potential",
      "stem": "Point charges of −6 μC and −6 μC are placed at equal distances from Point P, on opposite sides. What is the electric potential at Point P due to these two charges?",
      "choices": [
        "Positive, since two negatives multiplied together give a positive result.",
        "Negative — equal to the sum of the two negative potentials.",
        "Zero, since the two negative potentials cancel.",
        "The potential cannot be determined without knowing the exact distances."
      ],
      "correct": 1,
      "explanation": "Electric potential is a scalar, so contributions from multiple charges add algebraically — including their signs — never like vectors and never by multiplication. Choice A wrongly treats potential like a vector quantity that can cancel by symmetry; two negative potentials don't cancel just because the charges are placed symmetrically. Choice B applies a sign rule that belongs to multiplying two numbers, not to adding two potentials from separate sources. Choice D is a distractor — the problem already states the distances are equal, and equal distances plus equal charges is enough to know the total is twice one contribution, even without the exact numerical value."
    },
    {
      "id": "10-6",
      "topic": "10.5 Electric Potential",
      "stem": "Equipotential lines and electric field lines are sketched for a region of space. Which statement correctly describes their relationship?",
      "choices": [
        "They can cross at points where the field is strongest.",
        "They are always parallel to each other at every point.",
        "There is no required geometric relationship between them.",
        "They are always perpendicular at every point."
      ],
      "correct": 3,
      "explanation": "Field lines and equipotential lines are always perpendicular wherever they meet, because moving along an equipotential involves zero work, and the electric force can do zero work on a displacement only if the force is perpendicular to it. Choice A describes the opposite relationship. Choice C is wrong on two counts: the two families of lines never cross at all (each point has one field direction and one potential value), and field strength doesn't create an exception. Choice D denies that any fixed relationship exists, when perpendicularity in fact holds everywhere, without exception."
    },
    {
      "id": "10-7",
      "topic": "10.6 Capacitors",
      "stem": "A parallel plate capacitor is connected to a battery that maintains a constant voltage across it. While still connected, a dielectric material is inserted between the plates, filling the gap completely. What happens to the charge stored on the capacitor?",
      "choices": [
        "The charge decreases, since the dielectric reduces the electric field.",
        "The charge stays the same, since Q = CΔV and neither variable changes.",
        "The charge increases — capacitance rises while voltage stays fixed.",
        "The charge drops to zero, since a dielectric is an insulating material that cannot carry charge."
      ],
      "correct": 2,
      "explanation": "Inserting a dielectric raises capacitance (C = κε₀A/d, κ > 1). With the battery still connected holding ΔV fixed, Q = CΔV means charge must rise to match the larger C — the battery pushes more charge onto the plates. Choice A correctly notes the field inside the dielectric drops, but wrongly extends that to the charge itself; the field weakens because of the dielectric's own polarization, not because charge left the plates. Choice C wrongly assumes both Q and C stay fixed — inserting the dielectric is precisely what changes C, so Q can't stay constant while ΔV is held fixed. Choice D confuses the dielectric's insulating property (it blocks charge from flowing THROUGH it) with an ability to remove charge already sitting on the plates, which it does not do."
    },
    {
      "id": "10-8",
      "topic": "10.7 Conservation of Electric Energy",
      "stem": "A proton is released from rest at a point where the electric potential is +200 V and moves through a region of electric field to a point where the potential is +50 V. What happens to the proton's kinetic energy?",
      "choices": [
        "It stays the same, since only the electric field (not potential) affects kinetic energy.",
        "It decreases, since the proton moved to a region of lower potential.",
        "It increases, since the proton moved to a region of lower potential.",
        "It cannot be determined without knowing the distance traveled."
      ],
      "correct": 2,
      "explanation": "Using W = −qΔV = ΔK: ΔV = 50 − 200 = −150 V, and the proton's charge is positive, so ΔK = −qΔV comes out positive — kinetic energy increases. Choice A gets the sign backwards, treating a move to lower potential as if it costs the proton energy, when for a positive charge it's the opposite (like a ball rolling downhill). Choice C wrongly claims potential has no effect on kinetic energy; potential difference is exactly what determines the energy change here. Choice D is a distractor — the work-energy relationship depends only on the potential difference between the two points, not on the distance traveled."
    },
    {
      "id": "10-9",
      "topic": "10.4 Electric Potential Energy",
      "stem": "A positive charge and a negative charge are held fixed a certain distance apart. If the distance between them is doubled, what happens to the electric potential energy of the system?",
      "choices": [
        "It doubles in magnitude, and becomes positive.",
        "It's cut in half in magnitude, staying negative.",
        "It is cut in half in magnitude, and becomes positive.",
        "It doubles in magnitude, while remaining negative in sign."
      ],
      "correct": 1,
      "explanation": "For a positive-negative pair, U = (1/4πε₀)(q₁q₂/r) is negative, and U depends on 1/r, so doubling r cuts the magnitude of U in half. Choice A gets the r-dependence backwards, treating doubling the distance as if it strengthens the interaction rather than weakens it. Choices C and D both incorrectly flip the sign of U to positive — but the sign of U depends only on the signs of the charges, which haven't changed, so U must stay negative regardless of what happens to the distance."
    },
    {
      "id": "10-10",
      "topic": "10.1–10.3 Mixed",
      "stem": "A small object with mass m and positive charge q hangs in equilibrium from an insulating string inside a region with a uniform horizontal electric field E and vertical gravitational field g. Which of the following must be true about the string's angle from vertical?",
      "choices": [
        "The string makes a nonzero angle from vertical, determined by the ratio qE to mg.",
        "The string hangs exactly vertical, since only gravity acts on the object.",
        "The string makes a 90° angle from vertical, since the electric field is horizontal.",
        "The angle cannot be determined without knowing the object's charge-to-mass ratio numerically."
      ],
      "correct": 0,
      "explanation": "The object has two forces besides tension: gravity (mg, downward) and the electric force (qE, horizontal). For equilibrium, tension must balance both simultaneously, which only happens at a tilt angle satisfying tan(θ) = qE/mg. Choice A ignores the electric force entirely, as if only gravity acts — but the problem specifies a nonzero field and a charged object. Choice C wrongly assumes the string aligns fully with the field direction (90° from vertical), which would require gravity to have no effect at all. Choice D is a distractor — the angle is fully determined by the ratio qE/mg symbolically, without needing specific numerical values."
    },
    {
      "id": "10-11",
      "topic": "10.1 Coulomb's Law",
      "stem": "Two point charges of +2.0 μC and +3.0 μC are separated by 0.30 m. Find the magnitude of the force between them.",
      "choices": [
        "60 N",
        "0.6 N",
        "6 N",
        "0.06 N"
      ],
      "correct": 1,
      "explanation": "F = k|q₁q₂|/r² = (9.0×10⁹)(2.0×10⁻⁶)(3.0×10⁻⁶)/(0.30)² ≈ 0.6 N. Choice A (0.06 N) comes from forgetting to square the 0.30 m in the denominator. Choices C and D (6 N, 60 N) both come from a decimal-place slip in converting μC to C or in the final division, each off by a factor of 10 from the correct value."
    },
    {
      "id": "10-12",
      "topic": "10.1 Coulomb's Law",
      "stem": "If the distance between two point charges is tripled, by what factor does the Coulomb force between them change?",
      "choices": [
        "3",
        "1/9",
        "1/3",
        "9"
      ],
      "correct": 1,
      "explanation": "Coulomb's Law follows an inverse-square relationship: F ∝ 1/r². Tripling the distance divides the force by 3² = 9, giving Choice B. Choice A (1/3) applies the tripling directly to the force as if F ∝ 1/r, forgetting to square it. Choices C and D (3, 9) both apply the scaling in the wrong direction, as if increasing distance increased the force rather than decreasing it."
    },
    {
      "id": "10-13",
      "topic": "10.1 Coulomb's Law",
      "stem": "Two identical charges +Q each experience a mutual force of magnitude F when separated by distance r. If each charge is doubled to +2Q and the distance is also doubled to 2r, find the new force in terms of F.",
      "choices": [
        "F/4",
        "F",
        "F/16",
        "4F"
      ],
      "correct": 1,
      "explanation": "New force = k(2Q)(2Q)/(2r)² = k(4Q²)/(4r²) = kQ²/r² = F — the two factors of 4, from squaring both the doubled charges and the doubled distance, cancel exactly. Choice A (F/4) comes from applying only the distance-doubling effect and ignoring that the charges also doubled. Choice C (4F) comes from applying only the charge-doubling effect and ignoring the distance change. Choice D (F/16) comes from squaring the distance change correctly but mistakenly squaring the charge factor again too, over-applying the inverse-square relationship."
    },
    {
      "id": "10-14",
      "topic": "10.1 Coulomb's Law",
      "stem": "Three point charges lie on a line: +Q at x = 0, +Q at x = d, and +2Q at x = 2d. Find the magnitude of the net force on the charge at x = d, in terms of k, Q, and d.",
      "choices": [
        "3kQ²/d²",
        "0",
        "2kQ²/d²",
        "kQ²/d²"
      ],
      "correct": 3,
      "explanation": "The charge at x = 0 repels the x = d charge in the +x direction with magnitude kQ²/d²; the +2Q charge at x = 2d repels it in the −x direction with magnitude 2kQ²/d². Net force = 2kQ²/d² − kQ²/d² = kQ²/d² (Choice B). Choice A (0) comes from wrongly assuming the two forces are equal and cancel, ignoring that the x = 2d charge is twice as large. Choice C (2kQ²/d²) comes from counting only the force from the +2Q charge and forgetting to subtract the opposing force from the charge at x = 0. Choice D (3kQ²/d²) comes from adding the two force magnitudes instead of correctly subtracting them, since they point in opposite directions."
    },
    {
      "id": "10-15",
      "topic": "10.1 Coulomb's Law",
      "stem": "A charge of +5.0 μC is placed 0.20 m from a charge of −5.0 μC. Find the magnitude of the force between them.",
      "choices": [
        "5.6 N",
        "2.8 N",
        "11 N",
        "0.56 N"
      ],
      "correct": 0,
      "explanation": "F = k|q₁q₂|/r² = (9.0×10⁹)(5.0×10⁻⁶)(5.0×10⁻⁶)/(0.20)² ≈ 5.6 N. Choices A and B (0.56 N, 2.8 N) both come from decimal-place or arithmetic slips in the numerator before dividing by r². Choice D (11 N) comes from forgetting to square the 0.20 m distance, roughly doubling the correct result. The force magnitude depends only on the charge magnitudes and distance — the opposite signs affect direction (attraction) but not size."
    },
    {
      "id": "10-16",
      "topic": "10.1 Coulomb's Law",
      "stem": "Which of the following changes would increase the magnitude of the electric force between two point charges by the largest factor: (A) doubling one charge, (B) doubling both charges, (C) halving the distance, or (D) doubling both charges AND halving the distance simultaneously?",
      "choices": [
        "B",
        "D",
        "C",
        "A"
      ],
      "correct": 1,
      "explanation": "A gives a factor of 2 (one charge doubles). B gives a factor of 4 (both charges in the numerator double: 2×2). C gives a factor of 4 (halving r squares to a factor of 4 via the inverse-square law). D combines both effects multiplicatively: 4 (from doubling both charges) × 4 (from halving the distance) = 16, the largest of the four. Any answer other than D underestimates the effect of combining changes — when multiple variables change together, their factors multiply rather than simply adding."
    },
    {
      "id": "10-17",
      "topic": "10.1 Coulomb's Law",
      "stem": "Two small charged spheres hang from the same point by identical strings, repelling each other into a symmetric V shape with each string at angle θ from vertical. If the mass of each sphere is doubled while the charges and separation stay the same, how does θ change?",
      "choices": [
        "It decreases.",
        "It increases.",
        "It cannot be determined.",
        "It stays the same."
      ],
      "correct": 0,
      "explanation": "The equilibrium angle satisfies tan(θ) = F_electric/(mg). Doubling the mass while keeping charge and separation (and thus F_electric) unchanged cuts the ratio F_electric/(mg) in half, so θ decreases — Choice B. Choice A has the relationship backwards, treating more mass as if it increases the tilt rather than pulling the spheres more toward vertical. Choice C wrongly assumes mass has no effect on the balance, ignoring that θ is set by the ratio of the two forces. Choice D is incorrect because the new angle IS determinable — it just requires comparing the unchanged electric force to the new, larger weight."
    },
    {
      "id": "10-18",
      "topic": "10.2 Charging Processes",
      "stem": "A conducting sphere with net charge +8e touches an identical conducting sphere with net charge −2e. After they're separated, what is the charge on each sphere?",
      "choices": [
        "+3e on each sphere.",
        "+8e and −2e, unchanged.",
        "+4e and +2e.",
        "+6e and 0."
      ],
      "correct": 0,
      "explanation": "When identical conductors touch, total charge redistributes equally between them: total charge = +8e + (−2e) = +6e, split evenly gives +3e on each sphere (Choice A). Choice B assumes no charge transfer occurs at all, ignoring that contact lets charge flow freely between identical conductors. Choice C (+6e and 0) keeps the total charge correct but wrongly dumps it all onto one sphere instead of splitting it evenly. Choice D (+4e and +2e) preserves the correct total but splits it unevenly, as if the spheres retained some memory of their original charges rather than reaching a shared equilibrium."
    },
    {
      "id": "10-19",
      "topic": "10.2 Charging Processes",
      "stem": "Complete the comparison: charging by induction always leaves the object with a final charge _______ in sign compared to the charging rod, while charging by conduction always leaves the object with a final charge _______ in sign.",
      "choices": [
        "the same; the same",
        "opposite; opposite",
        "the same; opposite",
        "opposite; the same"
      ],
      "correct": 3,
      "explanation": "Induction (never touching, then grounding while the rod stays nearby) always leaves the object with a charge opposite the rod's; conduction (direct contact) always leaves the same sign as the charging object — Choice A. Choice B reverses both relationships. Choices C and D each get one blank right and one wrong, mixing the two mechanisms rather than keeping them as exact opposites of each other."
    },
    {
      "id": "10-20",
      "topic": "10.2 Charging Processes",
      "stem": "A negatively charged balloon sticks to a neutral insulating wall. Which phenomenon best explains this attraction?",
      "choices": [
        "Charging by induction, requiring free electrons to flow through the wall.",
        "Charging by conduction between the balloon and the wall.",
        "Polarization of the wall's molecules, with no net charge transfer.",
        "Charging by friction between the balloon and the surrounding air."
      ],
      "correct": 2,
      "explanation": "Insulators have no free electrons to flow, so true induction (Choice B) can't occur — the wall's charges can't migrate through it. Instead, the balloon's nearby charge polarizes each wall molecule slightly, shifting electron clouds toward or away from the balloon and creating attraction with zero net charge transferred — Choice C. Choice A is wrong because conduction requires direct contact and shared charge, which doesn't match a balloon merely sticking to a wall. Choice D is a distractor — friction with air isn't the mechanism holding the balloon to the wall; it's the polarization-induced attraction after the balloon is already charged."
    },
    {
      "id": "10-21",
      "topic": "10.2 Charging Processes",
      "stem": "A neutral conductor is charged by induction using a positively charged rod, ending up negatively charged. If the same experiment is repeated with a negatively charged rod instead, what is the final charge on the conductor?",
      "choices": [
        "Neutral — it returns to its original state.",
        "It depends on the magnitude of the rod's charge.",
        "Positive, the opposite sign to the rod.",
        "Negative, the same sign as the rod."
      ],
      "correct": 2,
      "explanation": "Induction always leaves the object with a charge opposite in sign to the charging rod, so a negative rod leaves the conductor positive (Choice B) — the exact mirror image of the positive-rod case. Choice A assumes the induced charge matches the rod's sign, which describes conduction, not induction. Choice C wrongly assumes the process leaves no lasting change, ignoring that grounding while the rod is present permanently removes or adds electrons. Choice D is a distractor — the sign of the induced charge depends only on the sign of the rod, not on how strongly charged it is."
    },
    {
      "id": "10-22",
      "topic": "10.2 Charging Processes",
      "stem": "Which of the following is the best example of a conductor, in which excess charge placed anywhere on the object quickly spreads across its entire surface?",
      "choices": [
        "A copper sphere",
        "A rubber balloon",
        "A glass rod",
        "A wooden ruler"
      ],
      "correct": 0,
      "explanation": "Metals like copper have abundant free (delocalized) electrons that move throughout the material, letting charge spread rapidly across the whole surface — Choice A. Choices B, C, and D (glass, rubber, wood) are all insulators, whose electrons stay bound to individual atoms and can't flow freely, so charge placed on them stays put near where it was deposited rather than redistributing."
    },
    {
      "id": "10-23",
      "topic": "10.2 Charging Processes",
      "stem": "A student rubs a plastic rod with wool, leaving the rod negatively charged and the wool positively charged. What physical mechanism explains why the two objects end up with opposite charges?",
      "choices": [
        "Excess charge from both objects flows away into the ground during the rubbing process.",
        "The two objects polarize each other without any charge transfer.",
        "Electrons transfer from the wool to the rod, conserving total charge.",
        "Charge flows between the objects until they reach the same electric potential."
      ],
      "correct": 2,
      "explanation": "Charging by friction works by transferring electrons from one material to the other, with the direction set by the two materials' relative tendency to hold electrons; the rod ends up with a surplus (negative) and the wool a matching deficit (positive), conserving total charge across the whole system — Choice A. Choice B wrongly denies any charge transfer, when polarization alone can't leave one object permanently negative and the other permanently positive without contact. Choice C describes what happens when two conductors are connected, not the friction mechanism, which doesn't require or produce equal potentials. Choice D wrongly invokes a ground connection that isn't part of this scenario at all — nothing here is grounded."
    },
    {
      "id": "10-24",
      "topic": "10.3 Electric Fields",
      "stem": "Find the magnitude of the electric field at a point 0.50 m from a point charge of +4.0 μC.",
      "choices": [
        "5.8 × 10⁵ N/C",
        "7.2 × 10⁴ N/C",
        "1.44 × 10⁵ N/C",
        "2.9 × 10⁵ N/C"
      ],
      "correct": 2,
      "explanation": "E = kq/r² = (9.0×10⁹)(4.0×10⁻⁶)/(0.50)² = 1.44×10⁵ N/C. Choice A (7.2×10⁴ N/C) comes from forgetting to square the 0.50 m distance. Choices C and D (2.9×10⁵, 5.8×10⁵ N/C) both come from a factor-of-2-type slip, such as mishandling the squared denominator or a decimal shift, landing roughly double or quadruple the correct value."
    },
    {
      "id": "10-25",
      "topic": "10.3 Electric Fields",
      "stem": "A charge of −3.0 μC experiences a force of 0.060 N when placed in an external electric field. Find the magnitude of the field and its direction relative to the force.",
      "choices": [
        "5.0 × 10⁻⁵ N/C, same direction as the force",
        "5.0 × 10⁻⁵ N/C, opposite direction to the force",
        "2.0 × 10⁴ N/C, opposite direction to the force",
        "2.0 × 10⁴ N/C, same direction as the force"
      ],
      "correct": 2,
      "explanation": "Magnitude: E = F/|q| = 0.060/(3.0×10⁻⁶) = 2.0×10⁴ N/C. Since the charge is negative, the force on it points opposite to the field (E = F/q, dividing by negative q flips direction), so the field points opposite to the given force — Choice B. Choice A gets the correct magnitude but the wrong direction, forgetting that a negative charge reverses the force-field relationship. Choices C and D both compute the magnitude incorrectly, inverting the F/q ratio rather than dividing force by charge correctly."
    },
    {
      "id": "10-26",
      "topic": "10.3 Electric Fields",
      "stem": "Field lines are sketched for a dipole consisting of a +Q charge and a −Q charge. Which statement correctly describes the pattern?",
      "choices": [
        "Lines emanate from −Q and terminate on +Q.",
        "Lines form closed loops in space that never actually touch either charge.",
        "Lines emanate from +Q and curve around to terminate on −Q.",
        "Lines point straight from +Q to −Q only, with no curvature."
      ],
      "correct": 2,
      "explanation": "Field lines always start on positive charges and end on negative charges; for a dipole they emanate from +Q, curve through the surrounding space, and terminate on −Q, with the densest concentration of lines (strongest field) directly between the two charges — Choice B. Choice A reverses the start and end points entirely. Choice C is wrong because dipole field lines always originate and terminate ON the charges — they never form self-contained loops that avoid the charges. Choice D is too restrictive; while the line directly on the axis between the charges is straight, most of the field line pattern curves substantially rather than running in perfectly straight paths."
    },
    {
      "id": "10-27",
      "topic": "10.3 Electric Fields",
      "stem": "A uniform electric field points in the +x direction. A negative charge is released from rest in this field. In which direction does it initially accelerate?",
      "choices": [
        "−x",
        "+x",
        "+y",
        "It does not accelerate."
      ],
      "correct": 0,
      "explanation": "The force on a charge is F = qE, and for a negative charge this force points opposite the field direction. Since the field points in +x, the force — and the initial acceleration — points in −x (Choice B). Choice A wrongly applies the field direction directly to the charge, ignoring the sign flip a negative charge introduces. Choice C invents a direction (+y) with no basis, since the field and force here are purely along the x-axis. Choice D wrongly assumes the charge stays at rest, but a nonzero field on a nonzero charge always produces a nonzero force."
    },
    {
      "id": "10-28",
      "topic": "10.3 Electric Fields",
      "stem": "Points A, B, and C are located at distances r, 2r, and 3r respectively from a single point charge. Rank the electric field magnitude at each point from greatest to least.",
      "choices": [
        "B > A > C",
        "A > B > C",
        "C > B > A",
        "A = B = C"
      ],
      "correct": 1,
      "explanation": "Field magnitude follows E ∝ 1/r², so Point A (closest, at r) has the strongest field, followed by B (at 2r), then C (at 3r, weakest) — Choice A. Choice B reverses the order entirely, as if field grew stronger with distance. Choice C wrongly assumes distance has no effect on field strength. Choice D scrambles the order, placing the middle distance (B) as strongest, which doesn't match the inverse-square falloff from the source charge."
    },
    {
      "id": "10-29",
      "topic": "10.3 Electric Fields",
      "stem": "Point charges +Q and −Q of equal magnitude are placed a distance d apart. At the midpoint between them, how does the field contribution from +Q compare in direction to the field contribution from −Q?",
      "choices": [
        "They point in the same direction and add together.",
        "They point in opposite directions and cancel.",
        "Only the positive charge contributes a field at the midpoint.",
        "They are perpendicular to each other."
      ],
      "correct": 0,
      "explanation": "At the midpoint, the field from +Q points away from +Q (toward −Q), and the field from −Q also points toward −Q — both fields point the same way and add constructively, Choice B. Choice A applies the like-charges cancellation rule to this opposite-charges scenario, where it doesn't hold. Choice C invents a perpendicular relationship that doesn't exist here, since both fields lie along the same line connecting the charges. Choice D wrongly ignores the −Q charge's contribution entirely, when both charges produce a field at every point in space."
    },
    {
      "id": "10-30",
      "topic": "10.3 Electric Fields",
      "stem": "Point charges +Q and −Q are placed at opposite ends of a rod of length L. Find the magnitude of the electric field at the midpoint, in terms of k, Q, and L.",
      "choices": [
        "4kQ/L²",
        "8kQ/L²",
        "kQ/L²",
        "0"
      ],
      "correct": 1,
      "explanation": "Each charge sits a distance L/2 from the midpoint, contributing a field of magnitude kQ/(L/2)² = 4kQ/L². Since opposite charges' fields add at the midpoint (as shown elsewhere in this set), the total is 2 × 4kQ/L² = 8kQ/L² (Choice C). Choice A (kQ/L²) comes from using the full length L instead of the half-distance L/2. Choice B (4kQ/L²) comes from correctly finding one charge's contribution but forgetting to double it for the second charge. Choice D (0) wrongly assumes the two contributions cancel, which would only be true for two LIKE charges at the midpoint, not this +Q/−Q pair."
    },
    {
      "id": "10-31",
      "topic": "10.3 Electric Fields",
      "stem": "A student uses test charges of different magnitudes to map out the electric field around a fixed source charge. If a larger test charge is used, how does the measured field E = F/q compare to using a smaller test charge?",
      "choices": [
        "The measured field cannot be determined without knowing the source charge.",
        "The measured field is larger with the larger test charge.",
        "The measured field is the same either way.",
        "The measured field is smaller with the larger test charge."
      ],
      "correct": 2,
      "explanation": "While the force on a larger test charge is indeed larger, the ratio F/q stays constant, since force scales proportionally with the test charge — Choice C. Choice A assumes the measured field itself grows with a bigger test charge, confusing the raw force with the defined field quantity. Choice B makes the same confusion in the opposite direction. Choice D is a distractor — the source charge's value isn't needed to answer this comparison, since the question only asks how the measurement changes with test charge, and by definition it doesn't."
    },
    {
      "id": "10-32",
      "topic": "10.4 Electric Potential Energy",
      "stem": "Two point charges, +3.0 μC and +5.0 μC, are separated by 0.60 m. Find their electric potential energy.",
      "choices": [
        "1.35 J",
        "2.25 J",
        "0.225 J",
        "0.045 J"
      ],
      "correct": 2,
      "explanation": "U = kq₁q₂/r = (9.0×10⁹)(3.0×10⁻⁶)(5.0×10⁻⁶)/0.60 ≈ 0.225 J (Choice B). Choice A (0.045 J) comes from a factor-of-5 arithmetic slip in the numerator. Choices C and D (1.35 J, 2.25 J) both come from forgetting to divide by r = 0.60 m, or dividing by the wrong power of it."
    },
    {
      "id": "10-33",
      "topic": "10.4 Electric Potential Energy",
      "stem": "A positive charge is released from rest near another fixed positive charge and moves freely away from it. As it moves, how do its kinetic energy and the system's potential energy change?",
      "choices": [
        "KE decreases; PE increases.",
        "KE increases; PE decreases.",
        "Both increase.",
        "Both decrease."
      ],
      "correct": 1,
      "explanation": "The repulsive force accelerates the charge away, converting potential energy into kinetic energy while total mechanical energy is conserved — as PE goes down, KE goes up by the same amount (Choice A). Choice B has both quantities backwards. Choices C and D each assume both energies move in the same direction, which would violate conservation of energy for an isolated system with no external forces doing work."
    },
    {
      "id": "10-34",
      "topic": "10.4 Electric Potential Energy",
      "stem": "Three point charges, each +Q, sit at the corners of an equilateral triangle with side length d. Find the total electric potential energy of the system, in terms of k, Q, and d.",
      "choices": [
        "6kQ²/d",
        "kQ²/d",
        "2kQ²/d",
        "3kQ²/d"
      ],
      "correct": 3,
      "explanation": "A three-charge system has three distinct pairs, and each contributes kQ²/d (since all sides equal d): total = 3 × kQ²/d = 3kQ²/d (Choice C). Choice A (kQ²/d) counts only a single pair and forgets the other two. Choice B (2kQ²/d) counts only two of the three pairs. Choice D (6kQ²/d) double-counts each pair once too many — a common error is tallying each pair twice, once from each charge's perspective, without correcting back down."
    },
    {
      "id": "10-35",
      "topic": "10.4 Electric Potential Energy",
      "stem": "Charges of +4.0 μC and −2.0 μC are separated by 0.40 m. Find their electric potential energy.",
      "choices": [
        "−0.18 J",
        "0.36 J",
        "0.18 J",
        "−0.36 J"
      ],
      "correct": 0,
      "explanation": "U = kq₁q₂/r = (9.0×10⁹)(4.0×10⁻⁶)(−2.0×10⁻⁶)/0.40 ≈ −0.18 J (Choice B). Choice A (−0.36 J) comes from a factor-of-2 slip in the numerator. Choices C and D (0.18 J, 0.36 J) both drop the negative sign, forgetting that a positive-negative charge pair always yields negative potential energy."
    },
    {
      "id": "10-36",
      "topic": "10.4 Electric Potential Energy",
      "stem": "Two like (same-sign) charges are brought together from infinite separation to a finite distance d by an external agent, moving slowly (no change in kinetic energy). Is the work done by the external agent positive or negative?",
      "choices": [
        "Zero",
        "Depends on which charge is moved",
        "Negative",
        "Positive"
      ],
      "correct": 3,
      "explanation": "Like charges repel, so an external agent must push against that repulsion to bring them closer, doing positive work — Choice A. Choice B has the sign backwards, as if bringing repelling charges together required negative work, which would mean the repulsion was somehow helping the process. Choice C wrongly assumes no work is needed at all, ignoring that the charges actively resist being brought closer. Choice D is a distractor — the sign of the work doesn't depend on which specific charge moves, only on whether the pair attracts or repels."
    },
    {
      "id": "10-37",
      "topic": "10.4 Electric Potential Energy",
      "stem": "Two opposite charges are brought together from infinite separation to a finite distance d by an external agent, moving slowly (no change in kinetic energy). Is the work done by the external agent positive or negative?",
      "choices": [
        "Positive",
        "Zero",
        "Depends on which charge is moved",
        "Negative"
      ],
      "correct": 3,
      "explanation": "Opposite charges attract, so left alone they'd accelerate toward each other; to move them together slowly without gaining kinetic energy, the agent must hold them back, doing negative work — Choice B. Choice A has the sign backwards, treating the attraction as if it required extra pushing rather than restraining. Choice C wrongly assumes no work is involved, ignoring that the agent must actively counteract the attractive force to keep the motion slow. Choice D is a distractor, since which charge is moved doesn't change the sign of the work — only whether the pair attracts or repels does."
    },
    {
      "id": "10-38",
      "topic": "10.4 Electric Potential Energy",
      "stem": "A charge +Q is fixed at the origin. A second charge +2Q is moved from 0.80 m away to 0.20 m away (closer). Does the system's potential energy increase or decrease, and what sign of work does an external agent do?",
      "choices": [
        "PE increases; external agent does negative work.",
        "PE increases; external agent does positive work.",
        "PE decreases; external agent does negative work.",
        "PE decreases; external agent does positive work."
      ],
      "correct": 1,
      "explanation": "Bringing two like charges closer together against their mutual repulsion increases potential energy, which requires positive work from the agent doing the moving — Choice A. Choice B gets the PE change backwards, as if moving like charges closer released energy rather than costing energy. Choices C and D both correctly identify that PE increases but wrongly claim the required work is negative, when work and PE change must share the same sign here — the work goes directly into raising the PE."
    },
    {
      "id": "10-39",
      "topic": "10.5 Electric Potential",
      "stem": "Find the electric potential at a point 0.25 m from a point charge of −6.0 μC.",
      "choices": [
        "5.4 × 10⁴ V",
        "2.16 × 10⁵ V",
        "−2.16 × 10⁵ V",
        "−5.4 × 10⁴ V"
      ],
      "correct": 2,
      "explanation": "V = kq/r = (9.0×10⁹)(−6.0×10⁻⁶)/0.25 = −2.16×10⁵ V (Choice A). Choice B (−5.4×10⁴ V) forgets to divide by r after computing the numerator kq. Choices C and D drop the negative sign entirely, forgetting that potential from a negative charge is always negative at any finite distance."
    },
    {
      "id": "10-40",
      "topic": "10.5 Electric Potential",
      "stem": "Point charges +2.0 μC and −2.0 μC are placed at equal distances from Point P, on opposite sides. Find the total electric potential at P.",
      "choices": [
        "Zero",
        "A large negative value",
        "Cannot be determined without knowing the distance",
        "A large positive value"
      ],
      "correct": 0,
      "explanation": "Potential is a scalar and adds algebraically; equal-magnitude opposite-sign charges at equal distances from P contribute equal and opposite potentials, which sum to exactly zero — Choice A. Choices B and C both wrongly assume the potentials add up to a large nonzero value instead of canceling, treating this like the same-sign case elsewhere in this set. Choice D is a distractor — since the charges are stated to be at equal distances, the exact numerical distance isn't needed to know the potentials cancel."
    },
    {
      "id": "10-41",
      "topic": "10.5 Electric Potential",
      "stretch": true,
      "stem": "Is it possible for the electric field at a point to be nonzero while the electric potential at that same point is exactly zero?",
      "choices": [
        "Yes — potential can cancel as scalars while the field vectors still add.",
        "No — if the potential is zero at a point, the field there must be zero too.",
        "No — E and V are always proportional to each other at every point.",
        "Yes, but only if there is just a single point charge in the system."
      ],
      "correct": 0,
      "explanation": "This happens at exactly the dipole midpoint scenario elsewhere in this set: potential from +Q and −Q cancels as opposite-sign scalars, while the field vectors from each actually point the same direction and add — giving nonzero net field with zero potential (Choice B). Choices A and C both wrongly assume E and V must track together; they are related by a derivative, not a direct proportionality, so one can vanish while the other doesn't. Choice D wrongly restricts this to a single point charge, but a single point charge never has V = 0 at any finite distance, so the scenario actually requires at least two charges (as in a dipole) to occur at all."
    },
    {
      "id": "10-42",
      "topic": "10.5 Electric Potential",
      "stem": "Three point charges of +2.0 μC each sit at the corners of an equilateral triangle with side length 0.30 m. The centroid is 0.17 m from each vertex. Find the electric potential at the centroid.",
      "choices": [
        "2.1 × 10⁵ V",
        "9.4 × 10⁵ V",
        "3.1 × 10⁵ V",
        "1.0 × 10⁵ V"
      ],
      "correct": 2,
      "explanation": "Each charge contributes V = kq/r = (9.0×10⁹)(2.0×10⁻⁶)/0.17 ≈ 1.04×10⁵ V, and since potential adds as a scalar, the total is 3 × 1.04×10⁵ ≈ 3.1×10⁵ V (Choice C). Choice A (1.0×10⁵ V) is just the single-charge contribution, forgetting to add the other two. Choice B (2.1×10⁵ V) only accounts for two of the three charges. Choice D (9.4×10⁵ V) comes from a computational slip, such as misplacing a decimal."
    },
    {
      "id": "10-43",
      "topic": "10.5 Electric Potential",
      "stem": "A charge is moved along an equipotential surface. How much work is done by the electric force on the charge?",
      "choices": [
        "A positive amount, proportional to the distance moved.",
        "It depends on the charge's speed.",
        "A negative amount, proportional to the distance moved.",
        "Zero, by definition."
      ],
      "correct": 3,
      "explanation": "An equipotential surface is, by definition, a surface where potential doesn't change; since W = −qΔV, zero potential difference along the path means zero work regardless of distance traveled — Choice A. Choices B and C both wrongly assume moving along the surface still requires work proportional to distance, contradicting the very definition of 'equipotential.' Choice D invents a speed-dependence that doesn't exist — work done by a static electric field depends only on the potential difference between start and end points, never on how fast the charge moves."
    },
    {
      "id": "10-44",
      "topic": "10.5 Electric Potential",
      "stem": "What shape do the equipotential surfaces take for a single isolated point charge +Q?",
      "choices": [
        "Concentric spheres centered on the charge.",
        "Equipotential surfaces don't exist for a single point charge.",
        "Flat planes perpendicular to the charge.",
        "Concentric cylinders around the charge."
      ],
      "correct": 0,
      "explanation": "Since V = kQ/r depends only on distance r from the charge, every point at the same r shares the same potential, and the set of all points equidistant from a single point forms a sphere — Choice B. Choices A (flat planes) and C (cylinders) both describe geometries that don't have this equidistant property with respect to a single point source. Choice D is simply wrong — equipotential surfaces exist for any charge distribution, including a lone point charge; they're just spherical in this particular case."
    },
    {
      "id": "10-45",
      "topic": "10.5 Electric Potential",
      "stem": "Parallel plates with separation d create a uniform field with potential difference ΔV between them. If the separation is doubled while ΔV is held the same (a battery maintains the voltage), find the new field strength in terms of the original field E.",
      "choices": [
        "It doubles.",
        "It quadruples.",
        "It is cut in half.",
        "It stays the same."
      ],
      "correct": 2,
      "explanation": "For a uniform field between parallel plates, E = ΔV/d. Doubling d while holding ΔV constant cuts E in half — Choice C. Choices A and D both assume the field grows when the plates are pulled apart, which is backwards; spreading the same voltage over a larger gap always weakens the field. Choice B wrongly assumes separation has no effect on field strength, ignoring the direct d-dependence in the formula."
    },
    {
      "id": "10-46",
      "topic": "10.5 Electric Potential",
      "stem": "Parallel plates separated by 0.020 m have a potential difference of 300 V between them. Find the magnitude of the uniform electric field between the plates.",
      "choices": [
        "6.0 × 10⁴ V/m",
        "6.0 × 10³ V/m",
        "1.5 × 10⁴ V/m",
        "1.5 × 10⁵ V/m"
      ],
      "correct": 2,
      "explanation": "E = ΔV/d = 300/0.020 = 1.5×10⁴ V/m (Choice B). Choice A (6.0×10³ V/m) comes from a misplaced decimal in the division. Choices C and D (6.0×10⁴, 1.5×10⁵ V/m) both come from mixing up which value goes in the numerator versus denominator, or a decimal-place slip in converting 0.020 m."
    },
    {
      "id": "10-47",
      "topic": "10.6 Capacitors",
      "stem": "A parallel plate capacitor has capacitance 4.0 μF and is charged to 12 V. Find the charge stored.",
      "choices": [
        "0.33 μC",
        "3.0 μC",
        "48 μC",
        "480 μC"
      ],
      "correct": 2,
      "explanation": "Q = CΔV = (4.0×10⁻⁶)(12) = 48 μC (Choice C). Choice A (0.33 μC) comes from dividing ΔV by C instead of multiplying. Choice B (3.0 μC) makes the same inversion error with a different rounding. Choice D (480 μC) comes from a decimal-place slip, off by a factor of 10 from the correct value."
    },
    {
      "id": "10-48",
      "topic": "10.6 Capacitors",
      "stem": "A capacitor stores 2.0 × 10⁻⁴ C of charge when connected to a 50 V source. Find its capacitance.",
      "choices": [
        "25 μF",
        "100 μF",
        "4.0 μF",
        "0.25 μF"
      ],
      "correct": 2,
      "explanation": "C = Q/ΔV = (2.0×10⁻⁴)/50 = 4.0 μF (Choice B). Choice A (0.25 μF) comes from inverting the formula (ΔV/Q instead of Q/ΔV). Choices C and D (25 μF, 100 μF) both come from a decimal-place slip in converting the charge to proper units before dividing."
    },
    {
      "id": "10-49",
      "topic": "10.6 Capacitors",
      "stem": "Find the energy stored in a 6.0 μF capacitor charged to 100 V.",
      "choices": [
        "3.0 × 10⁻⁴ J",
        "6.0 × 10⁻³ J",
        "6.0 × 10⁻¹ J",
        "3.0 × 10⁻² J"
      ],
      "correct": 3,
      "explanation": "U = ½CΔV² = 0.5(6.0×10⁻⁶)(100)² = 0.030 J (Choice C). Choice A (3.0×10⁻⁴ J) comes from forgetting to square the voltage. Choice B (6.0×10⁻³ J) comes from omitting the factor of ½. Choice D (6.0×10⁻¹ J) comes from a decimal-place slip after squaring the voltage."
    },
    {
      "id": "10-50",
      "topic": "10.6 Capacitors",
      "stem": "A parallel plate capacitor's plate area is doubled while the separation and applied voltage stay the same. How does the stored charge change?",
      "choices": [
        "It doubles.",
        "It quadruples.",
        "It is cut in half.",
        "It stays the same."
      ],
      "correct": 0,
      "explanation": "Capacitance C = κε₀A/d is directly proportional to area, so doubling A doubles C; since Q = CΔV and voltage is held constant, doubling C doubles Q as well — Choice A. Choice B wrongly assumes area has no effect on stored charge. Choice C has the relationship completely backwards, as if more plate area stored less charge. Choice D overstates the effect — area and charge are directly (not quadratically) proportional here, so doubling area doubles rather than quadruples the charge."
    },
    {
      "id": "10-51",
      "topic": "10.6 Capacitors",
      "stem": "A parallel plate capacitor is disconnected from its battery after being charged to Q₀. The plate separation is then increased. What happens to the charge, capacitance, and voltage?",
      "choices": [
        "Charge decreases; capacitance decreases; voltage decreases.",
        "Charge increases; capacitance stays constant; voltage increases.",
        "Charge stays constant; capacitance decreases; voltage increases.",
        "Charge stays constant; capacitance increases; voltage decreases."
      ],
      "correct": 2,
      "explanation": "With the battery disconnected, charge has nowhere to go, so Q stays fixed. Increasing separation d decreases capacitance (C = κε₀A/d), and since Q = CΔV with Q constant and C falling, ΔV must rise to compensate — Choice B. Choice A wrongly assumes charge itself decreases, when nothing exists for it to flow into once disconnected. Choice C gets the capacitance direction backwards — increasing plate separation always decreases capacitance, never increases it. Choice D wrongly assumes charge can increase despite there being no battery connected to supply more."
    },
    {
      "id": "10-52",
      "topic": "10.6 Capacitors",
      "stem": "Three capacitors are charged: Capacitor A has capacitance C at voltage ΔV; Capacitor B has capacitance 2C at voltage ΔV; Capacitor C has capacitance C at voltage 2ΔV. Rank their stored energies from greatest to least.",
      "choices": [
        "A > B > C",
        "B > C > A",
        "C > B > A",
        "C > A > B"
      ],
      "correct": 2,
      "explanation": "Using U = ½CΔV²: U_A = ½C(ΔV)², U_B = ½(2C)(ΔV)² = 2U_A, and U_C = ½C(2ΔV)² = 4U_A, so U_C > U_B > U_A — Choice A. Choice B has B and C swapped, underestimating how strongly energy depends on voltage (which is squared) compared to capacitance (which enters linearly). Choice C reverses the entire ranking. Choice D also misorders B, placing it below A despite B's energy being twice A's."
    },
    {
      "id": "10-53",
      "topic": "10.6 Capacitors",
      "stem": "A capacitor with vacuum between its plates has capacitance 2.0 μF. A dielectric with κ = 5.0 is inserted, completely filling the gap. Find the new capacitance.",
      "choices": [
        "50 μF",
        "2.5 μF",
        "10 μF",
        "0.4 μF"
      ],
      "correct": 2,
      "explanation": "C_new = κC₀ = (5.0)(2.0 μF) = 10 μF (Choice C). Choice A (0.4 μF) comes from dividing by κ instead of multiplying. Choice B (2.5 μF) also results from an inverted operation. Choice D (50 μF) comes from a decimal-place slip after correctly multiplying by κ."
    },
    {
      "id": "10-54",
      "topic": "10.6 Capacitors",
      "stem": "Why does inserting a dielectric between capacitor plates increase the capacitance?",
      "choices": [
        "The dielectric polarizes, which lowers the voltage needed for a given charge.",
        "The dielectric adds extra charge directly onto the plates.",
        "The dielectric material increases the effective plate area available for storing charge.",
        "The dielectric decreases the distance between the plates."
      ],
      "correct": 0,
      "explanation": "The dielectric's molecules polarize in the field between the plates, creating an internal field that partially opposes the plates' own field; a weaker net field for the same charge means a lower voltage, and since C = Q/ΔV, a lower ΔV for the same Q means higher capacitance — Choice B. Choice A wrongly assumes the dielectric supplies its own charge, when the plates' charge is unchanged; only the field and voltage between them change. Choice C invents a change to plate area, which the dielectric doesn't affect at all. Choice D invents a change to plate separation, which likewise isn't altered by inserting a dielectric — only the material filling the existing gap changes."
    },
    {
      "id": "10-55",
      "topic": "10.7 Conservation of Electric Energy",
      "stem": "An electron is accelerated from rest through a potential difference of 500 V. Find its final kinetic energy.",
      "choices": [
        "8.0 × 10⁻¹⁴ J",
        "1.6 × 10⁻¹⁶ J",
        "3.2 × 10⁻¹⁷ J",
        "8.0 × 10⁻¹⁷ J"
      ],
      "correct": 3,
      "explanation": "K = |q|ΔV = (1.6×10⁻¹⁹)(500) = 8.0×10⁻¹⁷ J (Choice B). Choice A (3.2×10⁻¹⁷ J) comes from an arithmetic slip in the multiplication. Choice C (1.6×10⁻¹⁶ J) is exactly double the correct value, likely from a stray factor of 2. Choice D (8.0×10⁻¹⁴ J) comes from a decimal-place slip, three orders of magnitude too large."
    },
    {
      "id": "10-56",
      "topic": "10.7 Conservation of Electric Energy",
      "stem": "A proton and an electron are each released from rest in the same uniform external electric field, with no other forces acting. Compare the magnitude of the electric force on each, and compare their resulting accelerations.",
      "choices": [
        "Same force; same acceleration.",
        "Electron feels more force; same acceleration.",
        "Proton feels more force; proton has greater acceleration.",
        "Same force; electron has much greater acceleration."
      ],
      "correct": 3,
      "explanation": "Both particles carry the same magnitude of charge, so F = qE gives the same force magnitude on each — but a = F/m, and the electron's mass is about 1800 times smaller, so for the same force it accelerates dramatically more — Choice B. Choice A wrongly assumes equal force implies equal acceleration, ignoring the vastly different masses. Choice C wrongly claims the electron feels more force, when the force magnitudes are actually equal (only q, not m, sets the force). Choice D gets both parts backwards — the proton feels the same force as the electron, not more, and it's the lighter electron, not the proton, that accelerates more."
    },
    {
      "id": "10-57",
      "topic": "10.7 Conservation of Electric Energy",
      "stem": "A charge of +2.0 μC moves from a point at 150 V to a point at 90 V. Find the work done BY the electric force on the charge.",
      "choices": [
        "−1.2 × 10⁻⁴ J",
        "−3.0 × 10⁻⁴ J",
        "1.2 × 10⁻⁴ J",
        "3.0 × 10⁻⁴ J"
      ],
      "correct": 2,
      "explanation": "Work done by the field is W = −qΔV = −(2.0×10⁻⁶)(90 − 150) = +1.2×10⁻⁴ J (Choice B). Choice A gets the correct magnitude but the wrong sign, missing that a positive charge moving from higher to lower potential is moving 'downhill' — the field does positive, not negative, work on it. Choices C and D both come from a numerical slip (using the wrong potential difference or an extra factor), landing at 3.0×10⁻⁴ J with either sign instead of the correct 1.2×10⁻⁴ J."
    },
    {
      "id": "10-58",
      "topic": "10.7 Conservation of Electric Energy",
      "stem": "A charged particle moves through a region where only the electric force acts on it, and its kinetic energy does not change over the course of the motion. Which of the following must be true?",
      "choices": [
        "It moved along a path of constant electric field magnitude.",
        "The particle carried no net charge.",
        "It started and ended at points of equal electric potential.",
        "It moved perpendicular to the field at every single instant."
      ],
      "correct": 2,
      "explanation": "Since W = −qΔV = ΔK, if ΔK = 0 and q ≠ 0, then ΔV must be 0 — the start and end points must share the same potential, Choice B. Choice A invents a field-magnitude requirement that isn't necessary; the field can vary along the path as long as the net potential change is zero. Choice C over-restricts the motion to being perpendicular to the field at every instant, which would only be one specific way to keep ΔK = 0, not the general requirement. Choice D is simply false — if the particle carried no charge, the electric force couldn't act on it at all, making the premise of the question meaningless."
    },
    {
      "id": "10-59",
      "topic": "10.7 Conservation of Electric Energy",
      "stem": "Find the speed of a proton (mass 1.67 × 10⁻²⁷ kg) after being accelerated from rest through a potential difference of 1000 V.",
      "choices": [
        "4.4 × 10⁷ m/s",
        "1.9 × 10⁶ m/s",
        "4.4 × 10⁵ m/s",
        "4.4 × 10⁴ m/s"
      ],
      "correct": 2,
      "explanation": "First, K = qΔV = (1.6×10⁻¹⁹)(1000) = 1.6×10⁻¹⁶ J; then v = √(2K/m) ≈ 4.4×10⁵ m/s (Choice B). Choice A (4.4×10⁴ m/s) comes from a factor-of-10-type slip in the square root. Choice C (1.9×10⁶ m/s) comes from omitting the factor of 2 inside the square root. Choice D (4.4×10⁷ m/s) comes from a decimal-place slip in computing K before taking the square root."
    },
    {
      "id": "10-60",
      "topic": "10.7 Conservation of Electric Energy",
      "stretch": true,
      "stem": "A charged particle is released from rest in a region with both a uniform electric field and a uniform gravitational field, both pointing straight down. The particle is negatively charged. In which direction does it initially accelerate?",
      "choices": [
        "It remains at rest, since the forces must balance.",
        "Downward, since gravity always dominates.",
        "Upward, since electric forces on a charge are always stronger than the pull of gravity.",
        "It cannot be determined without knowing the relative force magnitudes."
      ],
      "correct": 3,
      "explanation": "Gravity pulls the particle down regardless of charge, but the electric force on a negative charge in a downward field points upward (opposite the field) — so the two forces oppose each other, and without knowing which is larger (qE or mg), the net direction genuinely can't be determined, Choice C. Choice A wrongly assumes gravity always wins, which isn't guaranteed — a strong enough field could dominate instead. Choice B makes the opposite unjustified assumption, that electric forces are always stronger, which also isn't guaranteed for arbitrary field and mass values. Choice D wrongly assumes the two opposing forces must exactly balance, when nothing in the problem states their magnitudes are equal."
    },
    {
      "id": "10-61",
      "topic": "10.7 Conservation of Electric Energy",
      "stretch": true,
      "stem": "A capacitor is charged by a battery of emf 𝓔 (script E — not to be confused with ε₀, permittivity of free space) until it holds charge Q. Compare the total work done by the battery to the energy actually stored in the capacitor.",
      "choices": [
        "W<sub>battery</sub> = ½Q𝓔, exactly equal to the stored energy, with no other losses occurring anywhere.",
        "W<sub>battery</sub> = Q𝓔, and all of it ends up stored in the capacitor.",
        "W<sub>battery</sub> = Q𝓔 — twice the stored energy, with the rest lost as heat.",
        "W<sub>battery</sub> is always zero once the capacitor is fully charged."
      ],
      "correct": 2,
      "explanation": "The battery moves total charge Q through a constant potential difference 𝓔, doing work W = Q𝓔; but the capacitor only stores ½Q𝓔, since its own voltage rises gradually from 0 to 𝓔 as it charges rather than jumping there instantly — the other half is dissipated as heat in the circuit's resistance, Choice B. Choice A correctly identifies the stored energy as ½Q𝓔 but wrongly claims that's also the full battery work, missing the heat loss entirely. Choice C correctly computes the battery's total work as Q𝓔 but wrongly assumes none of it is lost, contradicting the fact that the capacitor only ends up storing half. Choice D misunderstands the question — the battery's work was already done DURING the charging process; asking about it 'once fully charged' doesn't make it retroactively zero."
    },
    {
      "id": "10-62",
      "topic": "10.1–10.5 Mixed",
      "stem": "A positive charge is fixed at the origin. As distance r from the charge increases, how do the electric field magnitude E, electric potential V, and electric potential energy U of a nearby test charge each scale with r?",
      "choices": [
        "E ∝ 1/r²; V ∝ 1/r²; U ∝ 1/r",
        "E ∝ 1/r; V ∝ 1/r²; U ∝ 1/r²",
        "All three scale the same way, as 1/r²",
        "E ∝ 1/r²; V ∝ 1/r; U ∝ 1/r"
      ],
      "correct": 3,
      "explanation": "Field falls off fastest, as 1/r² (inverse-square), while potential falls off more gently, as 1/r; potential energy of a test charge, U = qV, shares potential's 1/r dependence exactly, since q is just a constant multiplier — Choice B. Choice A gets V's and U's dependence backwards, assigning them 1/r² instead of E. Choice C wrongly assigns V a 1/r² dependence, when only E falls off that fast. Choice D wrongly claims all three scale identically, when E is genuinely the odd one out among the three."
    },
    {
      "id": "10-63",
      "topic": "10.1–10.5 Mixed",
      "stretch": true,
      "stem": "A charge +Q is fixed. A second charge +q is brought in from very far away to a distance d from Q. Considering the sign of the external work required, the change in potential energy, and the sign of the electric potential at the final location (with V = 0 at infinity), which statement is correct?",
      "choices": [
        "External work is negative; ΔU is negative; V at the final location is positive.",
        "External work is positive; ΔU is positive; V at the final location is positive.",
        "External work is negative; ΔU is positive; V at the final location is negative.",
        "External work is positive; ΔU is negative; V at the final location is negative."
      ],
      "correct": 1,
      "explanation": "Since both charges are positive, they repel — bringing them together requires positive external work, and the system's potential energy increases, consistent with the earlier like-charges result. Separately, the potential at the final location due to the fixed positive charge Q is positive at any finite distance — all pointing to Choice A. Choice B gets the work sign backwards while inconsistently keeping the potential sign wrong too. Choice C correctly identifies positive work but incorrectly flips both ΔU and V to negative, breaking the connection between doing positive work against repulsion and both PE and V increasing together. Choice D gets every part backwards, treating the interaction as if it were attractive rather than repulsive."
    },
    {
      "id": "10-64",
      "topic": "10.1–10.5 Mixed",
      "stem": "A point charge +Q produces a certain electric potential at a nearby point. If the charge is replaced with +2Q at the same location, how does the potential at that point change?",
      "choices": [
        "It doubles.",
        "It quadruples.",
        "It is cut in half.",
        "It stays the same."
      ],
      "correct": 0,
      "explanation": "Potential from a single point charge is directly proportional to charge: V = kq/r, so doubling the charge simply doubles the potential — Choice A. Choice B wrongly applies an inverse-square-style quadrupling, which belongs to force and field, not to this direct proportionality. Choice C wrongly assumes potential is unaffected by the source charge's value. Choice D has the relationship backwards, as if a larger charge produced a smaller potential."
    },
    {
      "id": "10-65",
      "topic": "10.1–10.5 Mixed",
      "stem": "A positive test charge moves from Point A to Point B in a region of uniform electric field E pointing in the +x direction. Point B is located to the right of Point A, in the +x direction (along the field). Is the potential at B higher or lower than at A, and is the work done by the field on the charge positive or negative?",
      "choices": [
        "V at B is lower; work is negative.",
        "V at B is higher; work is positive.",
        "V at B is lower; work is positive.",
        "V at B is higher; work is negative."
      ],
      "correct": 2,
      "explanation": "Electric field always points from higher potential toward lower potential; moving in the direction the field points (+x, from A to B) means moving toward lower potential, so V at B is lower. A positive charge moving to lower potential is moving 'downhill,' so the field does positive work on it — together giving Choice C. Choices A and B both wrongly claim potential increases in the field's own direction, when field direction is defined as pointing from high to low potential. Choice D gets the potential comparison right but wrongly claims negative work, missing that motion toward lower potential is energetically favorable for a positive charge."
    },
    {
      "id": "10-66",
      "topic": "10.2 Charging Processes",
      "stem": "A conducting sphere carrying a charge of +12 μC is touched to an identical but initially neutral conducting sphere, then separated. What is the final charge on each sphere?",
      "choices": [
        "+6 μC on each sphere.",
        "0 on each sphere, since touching neutralizes both.",
        "+12 μC on each sphere.",
        "+12 μC on the first sphere, 0 on the second."
      ],
      "correct": 0,
      "explanation": "Touching two identical conductors lets charge flow until both reach the same potential, splitting the total charge evenly: (+12 μC + 0)/2 = +6 μC on each — Choice B. Choice A wrongly assumes no charge transfer occurs, ignoring that contact between identical conductors always allows redistribution. Choice C keeps the full +12 μC on one sphere, as if contact had no effect at all. Choice D wrongly assumes contact between a charged and neutral conductor neutralizes both, when in fact the total charge is conserved and merely redistributed, not destroyed."
    }
  ],
  "11": [
    {
      "id": "11-1",
      "topic": "11.1 Electric Current",
      "stem": "A wire carries a current of 4.0 A. Find the charge that passes a point in the wire in 5.0 seconds.",
      "choices": [
        "80 C",
        "5.0 C",
        "0.8 C",
        "20 C"
      ],
      "correct": 3,
      "explanation": "Q = 20 C, from Q = It = (4.0)(5.0). 0.8 C comes from dividing instead of multiplying (I/t = 4.0/5.0). 5.0 C just restates the time value and ignores the current entirely. 80 C comes from multiplying by 20 (mistaking 4.0 × 5.0 as needing an extra factor, e.g. confusing it with I²t or a unit slip)."
    },
    {
      "id": "11-2",
      "topic": "11.1 Electric Current",
      "stem": "In a metal wire carrying conventional current to the right, what is the actual direction of electron motion?",
      "choices": [
        "Electrons don't move; only the field propagates.",
        "Electrons drift to the left, opposite conventional current.",
        "Electrons drift to the right, same direction as conventional current.",
        "Electrons oscillate with no net drift direction."
      ],
      "correct": 1,
      "explanation": "Electrons drift left, opposite the conventional current direction, since conventional current is defined as the direction positive charge would move, while the actual carriers in a metal are negative. Choice A confuses the sign convention and assumes electrons follow conventional current directly. Choice C confuses drift velocity with the near-instantaneous propagation of the electric field/signal through the wire — the field moves fast, but individual electrons still physically drift, just slowly. Choice D wrongly imports the idea of random thermal motion (which electrons do have) while ignoring the small net drift superimposed on top of it that actually constitutes the current."
    },
    {
      "id": "11-3",
      "topic": "11.1 Electric Current",
      "stem": "A charge of 15 C flows through a wire at a constant rate over 3.0 seconds. Find the current.",
      "choices": [
        "12 A",
        "5.0 A",
        "45 A",
        "0.2 A"
      ],
      "correct": 1,
      "explanation": "I = 5.0 A, from I = Q/t = 15/3.0. 0.2 A comes from inverting the ratio (3.0/15). 12 A comes from subtracting instead of dividing (15 − 3.0). 45 A comes from multiplying Q and t together instead of dividing."
    },
    {
      "id": "11-4",
      "topic": "11.1 Electric Current",
      "stem": "A steady current of 0.50 A flows through a resistor for 2.0 minutes. Find the total charge that passes through it.",
      "choices": [
        "1.0 C",
        "30 C",
        "60 C",
        "120 C"
      ],
      "correct": 2,
      "explanation": "Q = 60 C. Convert first: 2.0 min = 120 s, then Q = It = (0.50)(120) = 60 C. 1.0 C comes from forgetting to convert minutes to seconds and using Q = It = (0.50)(2.0) directly. 30 C comes from using 60 s for the conversion but then dividing by 2 somewhere (or treating current as 0.25 A). 120 C comes from converting minutes to seconds correctly but then forgetting to multiply by the 0.50 A current, using only the time in seconds."
    },
    {
      "id": "11-5",
      "topic": "11.1 Electric Current",
      "stretch": true,
      "stem": "A wire carries current I. It is replaced with a wire of the same material and length, but twice the cross-sectional area, and the same current I still flows. How does the average drift velocity of the charge carriers compare to before?",
      "choices": [
        "It is cut in half.",
        "It quadruples.",
        "It doubles.",
        "It stays the same."
      ],
      "correct": 0,
      "explanation": "Drift velocity is cut in half: from I = nqAv_d, with I, n, and q unchanged, v_d ∝ 1/A, so doubling A halves v_d — like the same volume flow rate spreading more slowly through a wider pipe. \"It doubles\" and \"it quadruples\" both mistakenly treat v_d as directly (or even more strongly) proportional to A rather than inversely proportional. \"Stays the same\" wrongly assumes current alone determines drift velocity without accounting for how it's distributed across a larger cross-section."
    },
    {
      "id": "11-6",
      "topic": "11.1 Electric Current",
      "stem": "A device requires a continuous current of 0.25 A to operate. Find how long it takes for 100 C of charge to pass through the device.",
      "choices": [
        "400 s",
        "100 s",
        "25 s",
        "40 s"
      ],
      "correct": 0,
      "explanation": "t = 400 s, from t = Q/I = 100/0.25. 25 s comes from multiplying instead of dividing (100 × 0.25). 40 s comes from inverting the ratio (0.25/100 misapplied, or dividing 10/0.25 with a digit error). 100 s comes from ignoring the 0.25 A current altogether and just restating the charge value."
    },
    {
      "id": "11-7",
      "topic": "11.2 Simple Circuits",
      "stem": "In a simple single-loop circuit, a bulb's filament breaks. What happens to the current everywhere else in that loop?",
      "choices": [
        "Current is unaffected, since the battery maintains the same voltage.",
        "Current continues flowing everywhere except through the broken bulb.",
        "Current doubles in the remaining wire to compensate.",
        "Current stops everywhere in the loop."
      ],
      "correct": 3,
      "explanation": "Current stops everywhere, since a single loop has no alternate path around the break. Choice A wrongly imagines the current can \"skip\" the broken segment, as if there were a parallel route. Choice C imagines the circuit compensating for the break by increasing current elsewhere, which isn't how a broken loop behaves — there's no current anywhere to redistribute. Choice D confuses the battery's voltage (which is still available) with the circuit's ability to actually drive current, which requires a complete path."
    },
    {
      "id": "11-8",
      "topic": "11.2 Simple Circuits",
      "stem": "A single-loop circuit contains a battery, a switch, a bulb, and a capacitor, all in series. After the switch is closed and a long time passes, what current flows through the bulb?",
      "choices": [
        "A current that oscillates indefinitely.",
        "A current equal to the battery voltage divided by the bulb's resistance alone.",
        "The same current as right after the switch closed.",
        "Zero."
      ],
      "correct": 3,
      "explanation": "Zero, since a fully-charged capacitor blocks any further steady-state current in the loop. Choice A confuses the initial transient current (which is indeed high right after closing) with the final steady state, missing that the capacitor's blocking effect grows over time. Choice C incorrectly imports oscillating-circuit behavior (relevant to AC or LC circuits) into a simple DC RC loop, which has no mechanism to oscillate. Choice D ignores the capacitor's presence entirely, as if it were a simple resistor-only loop."
    },
    {
      "id": "11-9",
      "topic": "11.2 Simple Circuits",
      "stem": "A 6.0 V battery is connected directly to a bulb with resistance 3.0 Ω. Find the current through the bulb.",
      "choices": [
        "3.0 A",
        "0.5 A",
        "18 A",
        "2.0 A"
      ],
      "correct": 3,
      "explanation": "I = 2.0 A, from I = V/R = 6.0/3.0. 0.5 A comes from inverting the ratio (3.0/6.0). 3.0 A comes from just restating the resistance value without dividing. 18 A comes from multiplying V and R together instead of dividing."
    },
    {
      "id": "11-10",
      "topic": "11.2 Simple Circuits",
      "stem": "A student wires two bulbs and a battery so that removing either bulb causes the other one to go dark too. Are the bulbs wired in series or parallel?",
      "choices": [
        "Series",
        "Parallel",
        "It depends on the battery's voltage.",
        "Neither — this behavior is impossible."
      ],
      "correct": 0,
      "explanation": "Series: both bulbs share one loop with no alternate path, so removing either breaks current for both. \"Parallel\" describes the opposite behavior — in parallel, each bulb has its own independent branch, so removing one wouldn't affect the other. \"Neither\" wrongly assumes this dependent behavior can't occur, when it's exactly what defines a series connection. \"Depends on voltage\" misidentifies the cause — this outcome is determined by the wiring topology, not by any voltage value."
    },
    {
      "id": "11-11",
      "topic": "11.2 Simple Circuits",
      "stem": "A student wires two bulbs and a battery so that removing one bulb doesn't affect the other bulb's brightness at all. Are they wired in series or parallel?",
      "choices": [
        "Series",
        "Parallel",
        "It depends on the battery's voltage.",
        "Neither — this behavior is impossible."
      ],
      "correct": 1,
      "explanation": "Parallel: each bulb has its own complete branch back to the battery, so removing one leaves the other's voltage and current unchanged. \"Series\" describes the opposite behavior, where removing either bulb breaks the shared loop for both. \"Neither\" wrongly rules out this independent behavior, when it's exactly what parallel wiring produces. \"Depends on voltage\" again misattributes the cause to voltage rather than to the circuit's topology."
    },
    {
      "id": "11-12",
      "topic": "11.2 Simple Circuits",
      "stem": "A single resistor is connected to an ideal battery. A second identical resistor is added in SERIES with the first. Does the current supplied by the battery increase, decrease, or stay the same?",
      "choices": [
        "Increase",
        "Stay the same",
        "Decrease",
        "Cannot be determined"
      ],
      "correct": 2,
      "explanation": "Decrease: adding series resistance raises total R, and at constant V, I = V/R falls. \"Increase\" confuses the series case with what happens when a resistor is instead added in parallel. \"Stay the same\" incorrectly assumes total resistance is unaffected by adding a second resistor. \"Cannot be determined\" overlooks that an ideal battery's fixed voltage, combined with the definite increase in series resistance, is enough information to determine the direction of change."
    },
    {
      "id": "11-13",
      "topic": "11.2 Simple Circuits",
      "stem": "A single resistor is connected to an ideal battery. A second identical resistor is added in PARALLEL with the first (both across the battery). Does the current supplied by the battery increase, decrease, or stay the same?",
      "choices": [
        "Increase",
        "Decrease",
        "Stay the same",
        "Cannot be determined"
      ],
      "correct": 0,
      "explanation": "Increase: a parallel resistor opens an additional current path, lowering total resistance, so at constant V the battery supplies more total current. \"Decrease\" confuses this with the series case, where adding resistance raises total R. \"Stay the same\" wrongly assumes the extra path doesn't change the overall resistance the battery sees. \"Cannot be determined\" again overlooks that constant voltage plus a known decrease in total resistance is sufficient to determine the direction of change."
    },
    {
      "id": "11-14",
      "topic": "11.2 Simple Circuits",
      "stem": "A single bulb is connected to a battery. A second identical bulb is then added in series with the first. Compare each bulb's brightness afterward to its original brightness (before the second bulb was added).",
      "choices": [
        "Each bulb is now dimmer than before.",
        "Each bulb is exactly as bright as before.",
        "One bulb is brighter and the other is dimmer.",
        "Each bulb is now brighter than before."
      ],
      "correct": 0,
      "explanation": "Each bulb is dimmer: the added series resistance raises total R, lowering the shared current and thus each bulb's power. \"Brighter\" describes what would happen if the bulb were instead added in parallel, which increases total current. \"Exactly as bright\" wrongly assumes adding a resistor in series doesn't change the current at all. \"One brighter, one dimmer\" mistakenly imagines the two bulbs behave asymmetrically, when in a single series loop they carry the identical current and therefore dim by the same amount."
    },
    {
      "id": "11-15",
      "topic": "11.3 Resistance & Ohm's Law",
      "stem": "A wire has resistance R. If its length is tripled while its cross-sectional area stays the same, find the new resistance in terms of R.",
      "choices": [
        "R/3",
        "R",
        "3R",
        "9R"
      ],
      "correct": 2,
      "explanation": "3R, since R = ρℓ/A makes resistance directly proportional to length. \"R/3\" inverts the relationship, treating length as if it were in the denominator like area is. \"R\" wrongly assumes resistance is unaffected by a length change. \"9R\" mistakenly squares the tripling factor, as if length appeared as ℓ² rather than ℓ¹ in the formula."
    },
    {
      "id": "11-16",
      "topic": "11.3 Resistance & Ohm's Law",
      "stem": "A wire has resistance R. If its cross-sectional area is quadrupled while its length stays the same, find the new resistance in terms of R.",
      "choices": [
        "2R",
        "R/4",
        "R/2",
        "4R"
      ],
      "correct": 1,
      "explanation": "R/4, since area sits in the denominator of R = ρℓ/A, so quadrupling A cuts resistance to one-fourth. \"R/2\" undershoots by treating the area increase as if it only doubled the resistance's inverse, perhaps confusing area with diameter (which would need to double, not quadruple, to produce that result). \"2R\" and \"4R\" both invert the relationship entirely, treating an area increase as increasing resistance rather than decreasing it."
    },
    {
      "id": "11-17",
      "topic": "11.3 Resistance & Ohm's Law",
      "stem": "Two wires are made of the same material and have the same length, but Wire B has twice the diameter of Wire A. Compare their resistances.",
      "choices": [
        "R<sub>B</sub> = R<sub>A</sub>/4",
        "R<sub>B</sub> = 4R<sub>A</sub>",
        "R<sub>B</sub> = 2R<sub>A</sub>",
        "R<sub>B</sub> = R<sub>A</sub>/2"
      ],
      "correct": 0,
      "explanation": "R<sub>B</sub> = R<sub>A</sub>/4, since A = πd²/4 means doubling diameter quadruples area, and resistance is inversely proportional to area. \"2R<sub>A</sub>\" and \"R<sub>A</sub>/2\" both scale resistance directly with diameter rather than with diameter squared, forgetting that area depends on d². \"4R<sub>A</sub>\" gets the factor of 4 right but inverts the direction, treating a larger cross-section as increasing resistance instead of decreasing it."
    },
    {
      "id": "11-18",
      "topic": "11.3 Resistance & Ohm's Law",
      "stem": "A resistor carries 0.40 A when connected to an 8.0 V source. Find its resistance.",
      "choices": [
        "5.0 Ω",
        "20 Ω",
        "3.2 Ω",
        "32 Ω"
      ],
      "correct": 1,
      "explanation": "R = 20 Ω, from R = V/I = 8.0/0.40. 3.2 Ω comes from multiplying V and I together instead of dividing. 5.0 Ω comes from inverting the ratio (0.40/8.0 misapplied, or computing I/V and mislabeling units). 32 Ω comes from multiplying by 4 somewhere, e.g. treating 0.40 A as 0.25 A's reciprocal incorrectly."
    },
    {
      "id": "11-19",
      "topic": "11.3 Resistance & Ohm's Law",
      "stem": "A 15 Ω resistor is connected to a 45 V source. Find the current through it.",
      "choices": [
        "3.0 A",
        "30 A",
        "675 A",
        "0.33 A"
      ],
      "correct": 0,
      "explanation": "I = 3.0 A, from I = V/R = 45/15. 0.33 A comes from inverting the ratio (15/45). 30 A comes from adding a stray factor of 10, perhaps a decimal-place slip. 675 A comes from multiplying V and R together instead of dividing."
    },
    {
      "id": "11-20",
      "topic": "11.3 Resistance & Ohm's Law",
      "stem": "Two wires of the same length and cross-sectional area are made of different materials. Material A has a higher resistivity than Material B. Which wire has the greater resistance?",
      "choices": [
        "They have equal resistance, since length and area are the same.",
        "The wire made of Material B.",
        "Cannot be determined without knowing the exact resistivity values.",
        "The wire made of Material A."
      ],
      "correct": 3,
      "explanation": "Material A, since resistivity sits directly in the numerator of R = ρℓ/A, and with ℓ and A equal, higher ρ means higher R. \"Material B\" reverses the relationship, treating lower resistivity as producing higher resistance. \"Equal resistance\" wrongly assumes resistivity doesn't matter as long as geometry is the same, ignoring that ρ is itself a factor in the formula. \"Cannot be determined\" overlooks that only the comparison (A higher than B), not the exact values, is needed to answer a comparative question."
    },
    {
      "id": "11-21",
      "topic": "11.3 Resistance & Ohm's Law",
      "stretch": true,
      "stem": "A cylindrical wire is stretched so that its length doubles, while its volume stays constant during the stretching (meaning its cross-sectional area is cut in half). Find the new resistance in terms of the original R.",
      "choices": [
        "R",
        "4R",
        "8R",
        "2R"
      ],
      "correct": 1,
      "explanation": "4R: doubling length doubles R, and independently halving area doubles R again, for a combined factor of 4. \"R\" wrongly assumes the two effects cancel, as if lengthening and thinning had opposite and equal impacts on resistance — they actually reinforce each other since both changes increase R. \"2R\" accounts for only one of the two effects (typically just the length doubling) and misses that the area also shrank. \"8R\" over-applies the combination, e.g. mistakenly cubing a factor instead of multiplying two independent factors of 2."
    },
    {
      "id": "11-22",
      "topic": "11.3 Resistance & Ohm's Law",
      "stem": "A resistor's temperature increases, which increases its resistivity (true for most conductors). If the voltage across the resistor is held constant, what happens to the current through it as it heats up?",
      "choices": [
        "The current stays the same.",
        "The current decreases.",
        "The current becomes zero.",
        "The current increases."
      ],
      "correct": 1,
      "explanation": "The current decreases, since higher resistivity raises R, and at constant V, I = V/R falls as R rises. \"Increases\" reverses the relationship between resistance and current. \"Stays the same\" wrongly assumes current is unaffected by a resistivity change even though voltage is fixed. \"Becomes zero\" overstates the effect — resistivity increasing doesn't cut off the circuit entirely, it just reduces the current by some finite amount."
    },
    {
      "id": "11-23",
      "topic": "11.3 Resistance & Ohm's Law",
      "stem": "Which single change to a wire, by itself, would leave its resistance unchanged?",
      "choices": [
        "Doubling the resistivity only.",
        "Doubling both the length and the cross-sectional area simultaneously.",
        "Halving the cross-sectional area only.",
        "Doubling the length only."
      ],
      "correct": 1,
      "explanation": "Doubling both length and area together, since R = ρ(2ℓ)/(2A) = ρℓ/A = R — the two factors of 2 cancel. \"Doubling the length only\" changes only the numerator, doubling R on its own. \"Doubling the resistivity only\" also changes only the numerator, again doubling R. \"Halving the cross-sectional area only\" changes only the denominator, doubling R as well — each of these single changes, unlike the paired change, leaves nothing to cancel it out."
    },
    {
      "id": "11-24",
      "topic": "11.3 Resistance & Ohm's Law",
      "stem": "A student measures current through a resistor at several different applied voltages and plots V (vertical axis) against I (horizontal axis). What does the slope of the best-fit line represent?",
      "choices": [
        "The resistance R.",
        "The conductance 1/R.",
        "The power P.",
        "The resistivity ρ."
      ],
      "correct": 0,
      "explanation": "The resistance R, since V = IR means slope = ΔV/ΔI = R directly for this axis arrangement. \"Conductance 1/R\" would be the slope if the axes were swapped (I vs. V instead of V vs. I). \"Power P\" confuses slope with the area under an I–V-type curve, or with a different quantity computed from V and I together, not their ratio. \"Resistivity ρ\" confuses a bulk material property (which also depends on the wire's geometry) with the resistance value this particular graph actually reveals."
    },
    {
      "id": "11-25",
      "topic": "11.4 Electric Power",
      "stem": "A resistor dissipates 45 W while carrying 3.0 A. Find its resistance.",
      "choices": [
        "1.7 Ω",
        "5.0 Ω",
        "15 Ω",
        "135 Ω"
      ],
      "correct": 1,
      "explanation": "R = 5.0 Ω, from P = I²R rearranged to R = P/I² = 45/9.0. 1.7 Ω comes from forgetting to square the current, computing 45/(3.0 × something) incorrectly or inverting a step. 15 Ω comes from dividing P by I without squaring (45/3.0). 135 Ω comes from multiplying P by I instead of dividing by I²."
    },
    {
      "id": "11-26",
      "topic": "11.4 Electric Power",
      "stem": "A 12 V battery delivers 0.50 A to a resistor. Find the power dissipated.",
      "choices": [
        "1.5 W",
        "12 W",
        "6.0 W",
        "24 W"
      ],
      "correct": 2,
      "explanation": "P = 6.0 W, from P = IV = (0.50)(12). 1.5 W comes from an extra unintended division, perhaps mistaking 0.50 A for a value that needs to be squared and combined incorrectly. 12 W comes from ignoring the current and restating the voltage. 24 W comes from dividing V by I instead of multiplying (12/0.50)."
    },
    {
      "id": "11-27",
      "topic": "11.4 Electric Power",
      "stem": "Find the power dissipated by a 100 Ω resistor with 20 V across it.",
      "choices": [
        "0.2 W",
        "4.0 W",
        "2.0 W",
        "40 W"
      ],
      "correct": 1,
      "explanation": "P = 4.0 W, from P = V²/R = 400/100. 0.2 W comes from dividing R by V instead of V² by R. 2.0 W comes from forgetting to square the voltage, computing V/R instead (20/100 × 10 misapplied). 40 W comes from treating the formula as P = VR/something or mishandling the exponent, roughly doubling the correct value."
    },
    {
      "id": "11-28",
      "topic": "11.4 Electric Power",
      "stem": "Resistors R₁ = 10 Ω and R₂ = 20 Ω are connected in SERIES to the same battery. Which resistor dissipates more power?",
      "choices": [
        "R₂",
        "They dissipate equal power.",
        "R₁",
        "Cannot be determined without knowing the battery's voltage."
      ],
      "correct": 0,
      "explanation": "R₂: in series both resistors share the same current, so P = I²R makes the larger resistance dissipate more power. \"R₁\" reverses this, perhaps by incorrectly applying the parallel-circuit rule (P = V²/R, smaller R dissipates more) to a series circuit. \"Equal power\" wrongly assumes shared current means shared power, ignoring that R also enters the power formula. \"Cannot be determined\" overlooks that the ratio of powers in series depends only on the resistance ratio, not on the specific voltage."
    },
    {
      "id": "11-29",
      "topic": "11.4 Electric Power",
      "stem": "Resistors R₁ = 10 Ω and R₂ = 20 Ω are connected in PARALLEL to the same battery. Which resistor dissipates more power?",
      "choices": [
        "Cannot be determined without knowing the battery's voltage.",
        "R₂",
        "R₁",
        "They dissipate equal power."
      ],
      "correct": 2,
      "explanation": "R₁: in parallel both resistors share the same voltage, so P = V²/R makes the smaller resistance dissipate more power. \"R₂\" reverses this, applying the series-circuit rule (larger R dissipates more) to a parallel circuit instead. \"Equal power\" wrongly assumes shared voltage means shared power, ignoring that R also enters the formula. \"Cannot be determined\" overlooks that the ratio of powers in parallel depends only on the resistance ratio, not on the specific voltage."
    },
    {
      "id": "11-30",
      "topic": "11.4 Electric Power",
      "stem": "A 40 W bulb and a 60 W bulb are both rated for the same voltage. Which has the greater resistance?",
      "choices": [
        "They have equal resistance.",
        "The 40 W bulb.",
        "Cannot be determined without knowing the voltage.",
        "The 60 W bulb."
      ],
      "correct": 1,
      "explanation": "The 40 W bulb: using R = V²/P with V fixed, resistance is inversely related to rated power, so the lower-power bulb has higher resistance. \"The 60 W bulb\" assumes higher power means higher resistance, backwards from the actual inverse relationship. \"Equal resistance\" wrongly assumes the rated power values don't affect resistance as long as voltage is the same. \"Cannot be determined\" overlooks that R = V²/P only needs the ratio of powers (since voltage is stated to be equal), not its exact value."
    },
    {
      "id": "11-31",
      "topic": "11.4 Electric Power",
      "stem": "Two identical bulbs, each rated 60 W at 120 V, are connected in SERIES to a 120 V source (instead of each being connected individually at its rated voltage). Find the total power dissipated by the pair.",
      "choices": [
        "120 W",
        "30 W",
        "60 W",
        "15 W"
      ],
      "correct": 1,
      "explanation": "30 W: wiring in series doubles total resistance, and with the same 120 V now spread across double the resistance, P = V²/R_total drops to half of one bulb's rated power. \"15 W\" over-applies the reduction, perhaps squaring the halving effect instead of applying it once. \"60 W\" assumes total power stays equal to a single bulb's rated power, ignoring that doubling resistance changes the power at fixed voltage. \"120 W\" is the common error of simply adding the two bulbs' rated powers, which only holds if each bulb individually saw its full 120 V — not true once they share the source in series."
    },
    {
      "id": "11-32",
      "topic": "11.4 Electric Power",
      "stem": "A resistor R connected to an ideal battery of voltage V dissipates power P. A second identical resistor is added in PARALLEL. Find the new total power output in terms of P.",
      "choices": [
        "P/2",
        "4P",
        "2P",
        "P"
      ],
      "correct": 2,
      "explanation": "2P: adding a parallel resistor halves total resistance while V stays fixed, and since P = V²/R, halving R doubles P. \"P/2\" reverses the relationship, treating the added parallel path as reducing rather than increasing total power draw. \"P\" wrongly assumes total power is unaffected by adding a second current path. \"4P\" over-applies the effect, perhaps squaring the halving of resistance instead of using it directly in P = V²/R."
    },
    {
      "id": "11-33",
      "topic": "11.4 Electric Power",
      "stem": "An electric heater is rated to dissipate 1500 W when connected to a 120 V outlet. Find the current it draws and the resistance of its heating element.",
      "choices": [
        "0.08 A and 1500 Ω",
        "12.5 A and 120 Ω",
        "1500 A and 0.08 Ω",
        "12.5 A and 9.6 Ω"
      ],
      "correct": 3,
      "explanation": "12.5 A and 9.6 Ω, from I = P/V = 1500/120 ≈ 12.5 A, then R = V/I = 120/12.5 ≈ 9.6 Ω. \"1500 A and 0.08 Ω\" mistakes the power rating itself for the current, then derives a tiny resistance to compensate. \"0.08 A and 1500 Ω\" inverts the current calculation (V/P instead of P/V), which then propagates into an inflated resistance. \"12.5 A and 120 Ω\" gets the current right but then just restates the given voltage as the resistance instead of computing R = V/I."
    },
    {
      "id": "11-34",
      "topic": "11.5 Compound DC Circuits",
      "stem": "Three resistors, 4.0 Ω, 6.0 Ω, and 10 Ω, are connected in series. Find the equivalent resistance.",
      "choices": [
        "20 Ω",
        "240 Ω",
        "0.05 Ω",
        "6.7 Ω"
      ],
      "correct": 0,
      "explanation": "20 Ω, since series resistances simply add: 4.0 + 6.0 + 10. 0.05 Ω comes from mistakenly applying the parallel reciprocal formula (1/R = 1/4.0 + 1/6.0 + 1/10) to a series circuit. 6.7 Ω comes from a similar parallel-formula mix-up but inverting only partway through. 240 Ω comes from multiplying the three resistances together instead of adding them."
    },
    {
      "id": "11-35",
      "topic": "11.5 Compound DC Circuits",
      "stem": "Two 8.0 Ω resistors are connected in parallel. Find the equivalent resistance.",
      "choices": [
        "16 Ω",
        "4.0 Ω",
        "8.0 Ω",
        "2.0 Ω"
      ],
      "correct": 1,
      "explanation": "4.0 Ω, since two identical resistors R in parallel always give R/2: 1/R_p = 1/8.0 + 1/8.0. \"2.0 Ω\" over-halves, perhaps mistakenly dividing by 4 instead of 2, or confusing this with a three-resistor case. \"8.0 Ω\" wrongly treats the parallel combination as unchanged from a single resistor, forgetting the second branch lowers resistance. \"16 Ω\" mistakenly adds the resistors as if they were in series instead of parallel."
    },
    {
      "id": "11-36",
      "topic": "11.5 Compound DC Circuits",
      "stem": "Three identical resistors, each with resistance R, are connected in parallel. Find the equivalent resistance in terms of R.",
      "choices": [
        "3R",
        "9R",
        "R",
        "R/3"
      ],
      "correct": 3,
      "explanation": "R/3, the general rule that n identical resistors in parallel combine to R/n. \"R\" wrongly assumes adding more parallel branches doesn't lower the equivalent resistance. \"3R\" and \"9R\" both mistakenly apply series-style addition (or a squared version of it) instead of the parallel reciprocal rule."
    },
    {
      "id": "11-37",
      "topic": "11.5 Compound DC Circuits",
      "stem": "A 5.0 Ω resistor is in series with a parallel pair of two 10 Ω resistors. Find the total equivalent resistance.",
      "choices": [
        "7.5 Ω",
        "15 Ω",
        "10 Ω",
        "2.5 Ω"
      ],
      "correct": 2,
      "explanation": "10 Ω: the parallel pair reduces to 10/2 = 5.0 Ω, then adding the series 5.0 Ω gives 5.0 + 5.0 = 10 Ω. \"2.5 Ω\" comes from correctly halving the parallel pair but then also halving the series resistor's contribution instead of adding it. \"7.5 Ω\" comes from skipping the parallel reduction and instead averaging the 10 Ω pair with the 5.0 Ω series resistor. \"15 Ω\" comes from adding all three individual resistances (5.0 + 10 + 10) as if everything were in series, ignoring the parallel pairing."
    },
    {
      "id": "11-38",
      "topic": "11.5 Compound DC Circuits",
      "stem": "A 12 V battery connects to a 4.0 Ω resistor in series with a parallel combination of 6.0 Ω and 3.0 Ω. Find the total current supplied by the battery.",
      "choices": [
        "2.0 A",
        "0.5 A",
        "3.0 A",
        "6.0 A"
      ],
      "correct": 0,
      "explanation": "2.0 A: the parallel pair gives R_p = 2.0 Ω (1/R_p = 1/6.0 + 1/3.0), total resistance is 4.0 + 2.0 = 6.0 Ω, and I = 12/6.0 = 2.0 A. \"0.5 A\" comes from inverting the final step (6.0/12 instead of 12/6.0). \"3.0 A\" comes from skipping the parallel reduction and using only the 4.0 Ω series resistor as total resistance (12/4.0). \"6.0 A\" comes from treating the parallel pair as if it simply added to give a much smaller total resistance, or from a division error in the last step."
    },
    {
      "id": "11-39",
      "topic": "11.5 Compound DC Circuits",
      "stem": "In a series circuit with resistors of different values, which resistor has the largest voltage drop across it?",
      "choices": [
        "All resistors have equal voltage drops in series.",
        "The resistor with the largest resistance.",
        "The resistor with the smallest resistance.",
        "Cannot be determined without knowing the current."
      ],
      "correct": 1,
      "explanation": "The largest resistor: with the same current I through every series resistor, V = IR makes the largest R produce the largest drop. \"Smallest resistance\" reverses this relationship. \"Equal voltage drops\" wrongly imports the parallel-circuit property (equal voltage) into a series circuit, where it's actually current that's shared, not voltage. \"Cannot be determined\" overlooks that the comparison only requires knowing the current is the same for all resistors, not its specific value."
    },
    {
      "id": "11-40",
      "topic": "11.5 Compound DC Circuits",
      "stem": "In a parallel circuit with resistors of different values connected to the same battery, which resistor carries the most current?",
      "choices": [
        "The resistor with the smallest resistance.",
        "The resistor with the largest resistance.",
        "All resistors carry equal current in parallel.",
        "Cannot be determined without knowing the total current."
      ],
      "correct": 0,
      "explanation": "The smallest resistor: with the same voltage V across every parallel branch, I = V/R makes the smallest R carry the most current. \"Largest resistance\" reverses this relationship. \"Equal current\" wrongly imports the series-circuit property (equal current) into a parallel circuit, where it's actually voltage that's shared. \"Cannot be determined\" overlooks that the comparison only requires knowing the voltage is shared, not the specific total current."
    },
    {
      "id": "11-41",
      "topic": "11.5 Compound DC Circuits",
      "stem": "Four identical resistors, each R, are arranged so two are in series with each other, forming a branch, and that branch is in parallel with a second branch of the other two resistors (also in series with each other). Find the total equivalent resistance in terms of R.",
      "choices": [
        "R",
        "2R",
        "R/2",
        "R/4"
      ],
      "correct": 0,
      "explanation": "R: each series branch is 2R, and two identical 2R branches in parallel give (2R)/2 = R. \"R/4\" over-applies the parallel reduction, perhaps treating all four resistors as directly parallel to each other rather than as two series pairs. \"R/2\" applies the correct parallel-halving step to a single R instead of to the 2R branch value. \"2R\" stops after computing the series branch value and forgets to apply the parallel combination of the two branches."
    },
    {
      "id": "11-42",
      "topic": "11.5 Compound DC Circuits",
      "stem": "A resistor is added in series to an existing circuit, changing total resistance from R to R'. The same resistor is instead added in parallel to the original circuit, changing total resistance from R to R''. Compare R' and R''.",
      "choices": [
        "R' = R''",
        "Cannot be determined without specific values",
        "R' < R''",
        "R' > R''"
      ],
      "correct": 3,
      "explanation": "R' > R'': series addition always raises total resistance (R' > R) while parallel addition always lowers it (R'' < R), so the series result must exceed the parallel result regardless of the specific resistance values. \"R' < R''\" reverses which connection increases versus decreases resistance. \"R' = R''\" wrongly assumes the two wiring methods have the same effect on total resistance. \"Cannot be determined\" overlooks that the general direction of each effect (series always up, parallel always down) is enough to settle the comparison without needing exact numbers."
    },
    {
      "id": "11-43",
      "topic": "11.5 Compound DC Circuits",
      "stem": "A 24 V battery connects to two parallel resistors, 8.0 Ω and 24 Ω. Find the current through the 8.0 Ω resistor specifically (not the total current from the battery).",
      "choices": [
        "4.0 A",
        "1.0 A",
        "6.0 A",
        "3.0 A"
      ],
      "correct": 3,
      "explanation": "3.0 A: each parallel branch has the full 24 V across it, so I = V/R = 24/8.0 = 3.0 A directly. \"1.0 A\" comes from mistakenly using the 24 Ω resistor's value in the denominator (24/24) instead of the 8.0 Ω one being asked about. \"4.0 A\" comes from first computing the equivalent resistance and then dividing incorrectly, or applying total current formulas where a single-branch calculation was needed. \"6.0 A\" comes from computing the total current supplied by the battery (using R_p = 6.0 Ω, 24/6.0 = 4.0 A misapplied) rather than the current through just the 8.0 Ω branch."
    },
    {
      "id": "11-44",
      "topic": "11.5 Compound DC Circuits",
      "stem": "A circuit has two batteries and several resistors arranged in a network with multiple independent loops, too complex to reduce with simple series/parallel rules alone. What tools are needed to solve for all the currents?",
      "choices": [
        "The capacitor equations from Unit 10.",
        "Ohm's Law alone, applied repeatedly.",
        "Only the power equations P = IV and P = I²R.",
        "Kirchhoff's Loop rule and junction rule, used together."
      ],
      "correct": 3,
      "explanation": "Kirchhoff's Loop rule and junction rule together, since a genuinely multi-loop, multi-source network can't be reduced branch by branch. \"Ohm's Law alone\" underestimates the problem — Ohm's Law relates V, I, and R for a single element but can't by itself resolve a network with multiple independent loops and sources. \"Only the power equations\" confuses energy-dissipation relationships with the current-solving tools actually needed; power equations don't provide independent equations for the unknown currents. \"Capacitor equations from Unit 10\" misapplies tools for an entirely different circuit element (capacitance) to a resistor network problem."
    },
    {
      "id": "11-45",
      "topic": "11.5 Compound DC Circuits",
      "stretch": true,
      "stem": "Resistors R₁ = 4.0 Ω and R₂ = 12 Ω are combined three different ways: (I) in series, (II) in parallel, (III) R₁ alone with R₂ disconnected. Rank the equivalent resistance of these three configurations from greatest to least.",
      "choices": [
        "I > II > III",
        "I > III > II",
        "III > I > II",
        "II > I > III"
      ],
      "correct": 1,
      "explanation": "Series (16 Ω) > R₁ alone (4.0 Ω) > Parallel (3.0 Ω). \"III > I > II\" mistakenly assumes disconnecting R₂ leaves a higher resistance than adding R₂ in series, when adding any resistor in series can only raise resistance further above R₁ alone. \"I > II > III\" gets the series term right but wrongly assumes the parallel combination (3.0 Ω) is between series and R₁ alone, missing the key fact that a parallel combination is always less than the smallest individual resistor in the group — here dropping below R₁'s own 4.0 Ω. \"II > I > III\" reverses the top two entirely, treating parallel combination as larger than series, which is never true for two positive resistors."
    },
    {
      "id": "11-46",
      "topic": "11.6 Kirchhoff's Loop Rule",
      "stem": "What physical principle underlies Kirchhoff's Loop rule?",
      "choices": [
        "Conservation of charge.",
        "Newton's third law.",
        "Conservation of energy.",
        "Conservation of momentum."
      ],
      "correct": 2,
      "explanation": "Conservation of energy: potential is well-defined at every point, so traveling around a closed loop and returning to the start means the net change in potential is exactly zero. \"Conservation of charge\" is the principle behind the junction rule instead, not the loop rule. \"Conservation of momentum\" and \"Newton's third law\" are mechanics principles with no direct role in why potential returns to its starting value around a closed electrical loop."
    },
    {
      "id": "11-47",
      "topic": "11.6 Kirchhoff's Loop Rule",
      "stem": "A single-loop circuit has a 10 V battery and two resistors in series, 2.0 Ω and 3.0 Ω. Use the loop rule to find the current.",
      "choices": [
        "10 A",
        "2.0 A",
        "5.0 A",
        "0.5 A"
      ],
      "correct": 1,
      "explanation": "2.0 A: the battery's rise must equal the sum of the drops, 10 = I(2.0) + I(3.0) = I(5.0), so I = 10/5.0. \"0.5 A\" comes from inverting the final division (5.0/10). \"5.0 A\" comes from correctly adding the resistors to get 5.0 Ω but then forgetting to divide the voltage by it, instead just restating that sum. \"10 A\" comes from ignoring the resistors entirely and dividing voltage by an assumed resistance of 1 Ω."
    },
    {
      "id": "11-48",
      "topic": "11.6 Kirchhoff's Loop Rule",
      "stem": "A circuit loop has a 20 V battery and three resistors in series carrying a current of 1.0 A: a 4.0 Ω resistor, a 6.0 Ω resistor, and an unknown resistor R. Use the loop rule to find R.",
      "choices": [
        "4.0 Ω",
        "20 Ω",
        "10 Ω",
        "6.0 Ω"
      ],
      "correct": 2,
      "explanation": "10 Ω: 20 = (1.0)(4.0) + (1.0)(6.0) + (1.0)(R), so R = 20 − 10 = 10 Ω. \"4.0 Ω\" and \"6.0 Ω\" both come from mistakenly assuming the unknown resistor equals one of the given resistors rather than solving the loop equation. \"20 Ω\" comes from forgetting to subtract the known resistors' voltage drops and treating the full battery voltage as dropping entirely across R alone."
    },
    {
      "id": "11-49",
      "topic": "11.6 Kirchhoff's Loop Rule",
      "stem": "When applying the loop rule, crossing a battery from its negative terminal to its positive terminal represents a voltage ______, while crossing a resistor in the direction of current flow represents a voltage ______.",
      "choices": [
        "drop; drop",
        "drop; rise",
        "rise; rise",
        "rise; drop"
      ],
      "correct": 3,
      "explanation": "Rise; drop: moving − to + inside a battery gains potential, while moving through a resistor with the current always loses potential. \"Drop; rise\" reverses both conventions. \"Rise; rise\" gets the battery right but wrongly treats a resistor crossing as also gaining potential, ignoring that current only flows from high to low potential through a resistor. \"Drop; drop\" gets the resistor right but wrongly treats the battery's − to + crossing as losing potential instead of gaining it."
    },
    {
      "id": "11-50",
      "topic": "11.6 Kirchhoff's Loop Rule",
      "stem": "A loop contains two batteries oriented so they oppose each other — 12 V and 6.0 V — in series with a 3.0 Ω resistor. Find the current in the loop.",
      "choices": [
        "3.0 A",
        "2.0 A",
        "6.0 A",
        "0.5 A"
      ],
      "correct": 1,
      "explanation": "2.0 A: opposing EMFs subtract, giving a net EMF of 12 − 6.0 = 6.0 V, then I = 6.0/3.0 = 2.0 A. \"0.5 A\" comes from inverting the final division (3.0/6.0). \"3.0 A\" comes from mistakenly adding the two EMFs instead of subtracting them, then dividing by the wrong combination, or from skipping the subtraction and just dividing the larger EMF alone incorrectly. \"6.0 A\" comes from adding the two EMFs (12 + 6.0 misapplied) and treating that combined value as the current-producing net voltage without properly dividing by resistance."
    },
    {
      "id": "11-51",
      "topic": "11.6 Kirchhoff's Loop Rule",
      "stretch": true,
      "stem": "In the same opposing-battery loop (12 V and 6.0 V opposing, 3.0 Ω resistor, current 2.0 A), find the power delivered by the 12 V battery and the power absorbed by the 6.0 V battery.",
      "choices": [
        "18 W delivered; 18 W absorbed.",
        "24 W delivered by the 12 V battery; 12 W absorbed by the 6.0 V battery.",
        "6.0 W delivered; 3.0 W absorbed.",
        "12 W delivered; 24 W absorbed."
      ],
      "correct": 1,
      "explanation": "24 W delivered; 12 W absorbed, from P = IV applied to each battery: (2.0)(12) = 24 W delivered by the stronger battery, and (2.0)(6.0) = 12 W absorbed by the weaker one as it's charged backward. \"12 W delivered; 24 W absorbed\" swaps which battery is which, treating the weaker 6.0 V source as if it were doing the delivering. \"6.0 W delivered; 3.0 W absorbed\" comes from using half the actual current (1.0 A instead of 2.0 A) in the power calculation. \"18 W delivered; 18 W absorbed\" comes from averaging the two batteries' voltages instead of applying P = IV separately to each one."
    },
    {
      "id": "11-52",
      "topic": "11.6 Kirchhoff's Loop Rule",
      "stretch": true,
      "stem": "A two-loop circuit has three unknown branch currents. In general, how many independent equations (combining loop-rule and junction-rule equations) are needed to solve for all three currents?",
      "choices": [
        "2",
        "6",
        "3",
        "1"
      ],
      "correct": 2,
      "explanation": "3: you need as many independent equations as unknowns, so 3 unknown currents require 3 independent equations (typically some mix of loop-rule and junction-rule equations). \"1\" and \"2\" both underestimate how many independent relationships are needed to pin down three separate unknowns, leaving the system underdetermined. \"6\" overestimates, perhaps by double-counting equations (e.g. writing both a loop equation and its algebraic rearrangement as if they were independent) when only 3 truly independent ones exist."
    },
    {
      "id": "11-53",
      "topic": "11.6 Kirchhoff's Loop Rule",
      "stem": "A loop contains a battery and a single resistor. A student mistakenly treats the resistor's voltage drop as a voltage RISE instead when applying the loop rule. What would the resulting (incorrect) equation predict?",
      "choices": [
        "It would still give the correct current, since only magnitude matters.",
        "It would give a current exactly twice the correct value.",
        "It would give a negative value for the current, incorrectly suggesting the wrong direction.",
        "It would produce no solvable equation at all."
      ],
      "correct": 2,
      "explanation": "A negative current: the correct equation ε − IR = 0 gives I = ε/R, but flipping the sign gives ε + IR = 0, solving to I = −ε/R — same magnitude, wrong sign, misread as the wrong direction. \"Still correct\" wrongly assumes sign errors are harmless as long as you take the magnitude at the end, ignoring that the sign is what tells you the current's direction. \"Twice the correct value\" mistakes what a sign flip does to the answer, when it actually preserves magnitude and only flips the sign. \"No solvable equation\" is incorrect — the flipped equation is still perfectly solvable, it just gives a physically misleading (backwards) answer rather than no answer at all."
    },
    {
      "id": "11-54",
      "topic": "11.7 Kirchhoff's Junction Rule",
      "stem": "At a junction, 5.0 A flows in through one wire, and current leaves through two wires — one carrying 2.0 A. Find the current in the other departing wire.",
      "choices": [
        "3.0 A",
        "7.0 A",
        "5.0 A",
        "2.0 A"
      ],
      "correct": 0,
      "explanation": "3.0 A: current in equals current out, 5.0 = 2.0 + I₂, so I₂ = 3.0 A. \"2.0 A\" mistakenly assumes both departing wires must carry equal current. \"5.0 A\" ignores the other departing wire's 2.0 A entirely and just restates the incoming current. \"7.0 A\" comes from adding the two given values (5.0 + 2.0) instead of subtracting."
    },
    {
      "id": "11-55",
      "topic": "11.7 Kirchhoff's Junction Rule",
      "stem": "At a junction, three wires carry current IN: 2.0 A, 3.0 A, and 1.5 A. One wire carries current OUT. Find that current.",
      "choices": [
        "6.5 A",
        "5.0 A",
        "3.5 A",
        "1.5 A"
      ],
      "correct": 0,
      "explanation": "6.5 A: total in equals total out, so 2.0 + 3.0 + 1.5 = 6.5 A. \"1.5 A\" mistakenly restates only the last incoming value instead of summing all three. \"3.5 A\" comes from adding only two of the three incoming currents (2.0 + 1.5) and missing the third. \"5.0 A\" comes from adding only two of the three incoming currents in a different pairing (3.0 + 2.0) and missing the 1.5 A branch."
    },
    {
      "id": "11-56",
      "topic": "11.7 Kirchhoff's Junction Rule",
      "stem": "What physical principle underlies Kirchhoff's Junction rule?",
      "choices": [
        "Conservation of charge.",
        "Ohm's Law.",
        "Conservation of energy.",
        "Conservation of momentum."
      ],
      "correct": 0,
      "explanation": "Conservation of charge: charge can't appear or vanish at a junction, so total charge in must equal total charge out over any interval. \"Conservation of energy\" is instead the principle behind the loop rule, not the junction rule. \"Conservation of momentum\" is a mechanics principle unrelated to how current splits or combines at a junction. \"Ohm's Law\" relates voltage, current, and resistance for a single element — it doesn't explain why currents must balance at a junction at all."
    },
    {
      "id": "11-57",
      "topic": "11.7 Kirchhoff's Junction Rule",
      "stem": "A battery connects to two parallel resistors, 4.0 Ω and 12 Ω, and supplies a total current of 4.0 A. Find the current through the 4.0 Ω resistor.",
      "choices": [
        "12 A",
        "1.0 A",
        "3.0 A",
        "4.0 A"
      ],
      "correct": 2,
      "explanation": "3.0 A: R_p = 3.0 Ω gives V = (4.0)(3.0) = 12 V, and I₄ = V/R = 12/4.0 = 3.0 A. \"1.0 A\" comes from mistakenly using the 12 Ω resistor's value in place of the 4.0 Ω one in the final division. \"4.0 A\" mistakenly assumes the smaller resistor carries the entire total current, ignoring that the 12 Ω branch also carries some current. \"12 A\" comes from restating the shared voltage value instead of dividing it by the resistance to get current."
    },
    {
      "id": "11-58",
      "topic": "11.7 Kirchhoff's Junction Rule",
      "stem": "At a junction, current flows IN through two wires (I₁ and I₂) and OUT through two other wires (I₃ and I₄). Write the junction rule equation relating all four currents.",
      "choices": [
        "I₁ + I₂ = I₃ + I₄",
        "I₁ = I₂ = I₃ = I₄",
        "I₁I₂ = I₃I₄",
        "I₁ − I₂ = I₃ − I₄"
      ],
      "correct": 0,
      "explanation": "I₁ + I₂ = I₃ + I₄: sum of currents in equals sum of currents out. \"I₁ = I₂ = I₃ = I₄\" wrongly assumes all four currents must be individually equal, rather than just their two-sided sums. \"I₁ − I₂ = I₃ − I₄\" incorrectly subtracts currents that are both flowing in the same direction (both in, or both out) as if they opposed each other. \"I₁I₂ = I₃I₄\" mistakenly multiplies currents together instead of summing them, which has no physical basis in charge conservation."
    },
    {
      "id": "11-59",
      "topic": "11.7 Kirchhoff's Junction Rule",
      "stem": "In a parallel circuit, is it possible for the current through one branch to be larger than the total current supplied by the battery?",
      "choices": [
        "Yes, if the branch contains a capacitor.",
        "No — the junction rule guarantees no single branch can exceed the total current.",
        "Yes, if that branch has very low resistance.",
        "It depends on whether the battery is ideal."
      ],
      "correct": 1,
      "explanation": "No: by the junction rule, the sum of all branch currents equals the total current entering the parallel section, so no single branch can exceed that total. \"Yes, if very low resistance\" mistakenly assumes a low-resistance branch could somehow draw more current than what's actually supplied, rather than just a larger share of it. \"Yes, if the branch contains a capacitor\" incorrectly imagines a capacitor could inject extra current into a branch beyond what the junction rule allows. \"Depends on whether the battery is ideal\" misidentifies the source of the constraint — the junction rule (charge conservation) holds regardless of the battery's internal resistance or idealness."
    },
    {
      "id": "11-60",
      "topic": "11.8 RC Circuits",
      "stem": "A capacitor charges through a resistor from an ideal battery. Describe how the current in the circuit changes from the instant the switch closes onward.",
      "choices": [
        "Current starts at zero and increases toward a maximum.",
        "Current starts at a maximum and decreases toward zero.",
        "Current stays constant throughout the charging process.",
        "Current oscillates between zero and a maximum value."
      ],
      "correct": 1,
      "explanation": "Current starts at a maximum and decreases toward zero: an uncharged capacitor initially behaves like a plain wire, but as charge builds up it becomes progressively harder to add more, so current tapers off. \"Starts at zero and increases\" reverses the actual behavior — the capacitor offers the least opposition when uncharged, not the most. \"Stays constant\" wrongly treats the capacitor like a fixed resistor rather than an element whose opposition to charge flow changes as it charges. \"Oscillates\" incorrectly imports AC or LC-circuit behavior into a simple DC RC charging process, which has no mechanism to oscillate."
    },
    {
      "id": "11-61",
      "topic": "11.8 RC Circuits",
      "stem": "Immediately after a switch closes in a series RC circuit (capacitor initially uncharged), what is the voltage across the capacitor, and what is the voltage across the resistor?",
      "choices": [
        "Both are zero at that instant.",
        "Capacitor: zero. Resistor: full battery voltage.",
        "Both share the battery voltage equally.",
        "Capacitor: full battery voltage. Resistor: zero."
      ],
      "correct": 1,
      "explanation": "Capacitor: zero. Resistor: full battery voltage — an uncharged capacitor has no separated charge yet, so by the loop rule all the battery's voltage appears across the resistor. \"Capacitor: full, resistor: zero\" describes the opposite, long-time-later situation instead of the initial instant. \"Both share equally\" wrongly assumes a 50/50 split regardless of the capacitor's actual (zero) charge state at that moment. \"Both zero\" ignores that the loop rule requires the battery's voltage to appear somewhere in the loop — it can't simply vanish."
    },
    {
      "id": "11-62",
      "topic": "11.8 RC Circuits",
      "stem": "A long time after a switch closes in a series RC circuit, what is the voltage across the capacitor, and what is the current in the circuit?",
      "choices": [
        "Capacitor: full battery voltage. Current: zero.",
        "Capacitor: zero. Current: maximum.",
        "Capacitor: full battery voltage. Current: unchanged from its initial value.",
        "Capacitor: half the battery voltage. Current: half its initial value."
      ],
      "correct": 0,
      "explanation": "Capacitor: full battery voltage. Current: zero — once fully charged, no more current flows, so the resistor has zero drop and the entire battery voltage sits across the capacitor. \"Capacitor: zero, current: maximum\" describes the opposite, initial-instant situation instead of the long-time limit. \"Half voltage, half current\" wrongly assumes the charging process settles at some halfway equilibrium rather than approaching full charge and zero current. \"Full voltage, current unchanged\" gets the capacitor voltage right but wrongly assumes current stays at its initial maximum instead of decaying to zero as the capacitor charges."
    },
    {
      "id": "11-63",
      "topic": "11.8 RC Circuits",
      "stem": "A capacitor charges through a resistor from a 12 V battery. A long time after the switch closes, find the final charge on the capacitor if its capacitance is 4.0 μF.",
      "choices": [
        "48 μC",
        "480 μC",
        "33 μC",
        "3.0 μC"
      ],
      "correct": 0,
      "explanation": "48 μC, from Q = CΔV = (4.0×10⁻⁶)(12), using the full battery voltage since the capacitor is fully charged at t → ∞. 3.0 μC comes from inverting the ratio (dividing 12 by 4.0 instead of multiplying). 33 μC comes from a similar inversion with a rounding artifact (roughly 4.0/12 expressed in different units). 480 μC comes from a factor-of-10 slip in the capacitance's decimal exponent (treating 4.0 μF as if it were 40 μF)."
    },
    {
      "id": "11-64",
      "topic": "11.8 RC Circuits",
      "stem": "A fully-charged capacitor discharges through a resistor after the battery is removed and replaced with a plain wire. Compare the direction of current flow during discharge to the direction during the original charging process.",
      "choices": [
        "The direction depends on the specific values of R and C.",
        "Current flows in the opposite direction during discharge compared to charging.",
        "Current flows in the same direction during both charging and discharging.",
        "There is no current during discharge, only during charging."
      ],
      "correct": 1,
      "explanation": "Opposite direction: during charging the battery pushes charge onto the plates one way, but during discharge the capacitor itself drives that stored charge back out through the resistor the way it came, reversing the current's direction. \"Same direction\" wrongly assumes the current direction is fixed by the resistor alone rather than by which element (battery or capacitor) is doing the driving. \"No current during discharge\" ignores that a capacitor discharging through a resistor does drive a real, measurable (decaying) current. \"Depends on R and C\" misattributes the direction to the circuit's time constant, when R and C only affect how fast the discharge happens, not which way the current flows."
    },
    {
      "id": "11-65",
      "topic": "11.8 RC Circuits",
      "stem": "In an RC circuit, the resistance R is increased while capacitance and battery voltage stay the same. How does this affect the INITIAL current at the moment the switch closes, and how does it affect the FINAL charge once the capacitor is fully charged?",
      "choices": [
        "Initial current decreases; final charge decreases.",
        "Initial current decreases; final charge is unchanged.",
        "Initial current increases; final charge is unchanged.",
        "Initial current is unchanged; final charge decreases."
      ],
      "correct": 1,
      "explanation": "Initial current decreases; final charge is unchanged. At t = 0 the capacitor acts like a wire, so I_initial = ε/R falls as R grows, but Q_final = CΔV depends only on C and battery voltage, not on R at all — resistance only changes how fast charging happens, never how much charge results. \"Initial current increases\" reverses the direct effect of R on I = ε/R. \"Final charge decreases\" wrongly assumes resistance affects the ultimate charge stored, when Q_final's formula doesn't include R at all. \"Initial current unchanged\" wrongly assumes the initial instant is somehow independent of R, when R is exactly what sets that first-instant current."
    }
  ],
  "12": [
    {
      "id": "12-1",
      "topic": "12.1 Magnetic Fields",
      "stem": "What is true about magnetic monopoles (an isolated north or south pole, with no opposite pole attached)?",
      "choices": [
        "They exist only at absolute zero temperature.",
        "They have been directly observed in strong enough fields.",
        "Never observed — poles always occur in N-S pairs.",
        "They exist only inside current-carrying wires."
      ],
      "correct": 2,
      "explanation": "Never observed — poles always occur in pairs. Cut a bar magnet in half and you don't get an isolated N piece and S piece; you get two smaller complete magnets, each with its own N and S. Choice A is wrong because no monopole has ever been experimentally confirmed, no matter how strong the field — field strength isn't the limiting factor. Choice C invents a restriction with no basis: wires produce ordinary dipole-like fields, not isolated poles. Choice D is similarly unfounded — pole-pairing is a structural feature of how magnetism arises from moving charge, not a temperature effect."
    },
    {
      "id": "12-2",
      "topic": "12.1 Magnetic Fields",
      "stem": "A charged particle moves through a magnetic field, constantly changing direction but never changing speed. What can be concluded about the work done by the magnetic force on it?",
      "choices": [
        "Negative work, decreasing kinetic energy.",
        "Zero work at every instant.",
        "Positive work, increasing kinetic energy.",
        "Cannot be determined without knowing the field strength."
      ],
      "correct": 1,
      "explanation": "Zero work, always. The magnetic force is perpendicular to velocity at every instant (F = qv × B), and a force perpendicular to motion does zero work (W = Fd cosθ, θ = 90°). Choices A and C both wrongly assume the magnetic force can change speed at all — it can only change direction, never magnitude, so neither a KE increase nor decrease is possible here. Choice D is wrong because field strength is irrelevant to the answer: the perpendicularity of F and v holds regardless of B's magnitude, so the work is zero whether the field is weak or strong."
    },
    {
      "id": "12-3",
      "topic": "12.2 Force on Moving Charges",
      "stem": "A charge of magnitude 2.0×10⁻⁶ C moving at 5.0×10³ m/s perpendicular to a magnetic field experiences a force of 3.0×10⁻⁴ N. Find the field strength.",
      "choices": [
        "3.0 T",
        "0.0030 T",
        "0.30 T",
        "0.030 T"
      ],
      "correct": 3,
      "explanation": "B = 0.030 T. Using F = qvB, solve for B: B = F/(qv) = (3.0×10⁻⁴)/[(2.0×10⁻⁶)(5.0×10³)] = (3.0×10⁻⁴)/(1.0×10⁻²) = 0.030 T. Choice A (0.0030 T) comes from a power-of-ten slip in the denominator, effectively treating qv as 0.10 instead of 1.0×10⁻². Choices C (0.30 T) and D (3.0 T) come from misplacing the decimal the other way, such as computing qv as 1.0×10⁻³ or 1.0×10⁻⁴ instead of 1.0×10⁻²."
    },
    {
      "id": "12-4",
      "topic": "12.2 Force on Moving Charges",
      "stem": "A charged particle moves at constant velocity through a region containing both a uniform electric field and a uniform magnetic field, with the two forces exactly balancing (a velocity selector). If the particle's speed increases while both fields stay the same, what happens to the net force on it?",
      "choices": [
        "Becomes nonzero — magnetic force depends on speed, electric force doesn't.",
        "Stays zero as long as the particle remains inside the field region.",
        "Becomes nonzero — the electric force depends on speed, the magnetic force doesn't.",
        "Stays zero, since both forces scale with the fields equally."
      ],
      "correct": 0,
      "explanation": "The forces stop balancing, and net force becomes nonzero. The electric force (qE) doesn't depend on speed at all, but the magnetic force (qvB) grows directly with speed, so once speed changes the two no longer match. Choice A gets the physics backwards: the fields themselves aren't changing, but the forces don't 'scale equally' with speed — only the magnetic term does. Choice C swaps which force is speed-dependent; it's the magnetic force (qvB), not the electric force (qE), that carries the v. Choice D wrongly assumes staying in the region matters — the imbalance depends only on speed relative to the fields, not on position."
    },
    {
      "id": "12-5",
      "topic": "12.2 Force on Moving Charges",
      "stem": "Find the magnitude of the force on a charge of 4.0×10⁻⁶ C moving at 2.0×10⁴ m/s at a 30° angle to a 0.50 T field.",
      "choices": [
        "2.0 × 10⁻² N",
        "8.0 × 10⁻² N",
        "4.0 × 10⁻² N",
        "1.0 × 10⁻² N"
      ],
      "correct": 0,
      "explanation": "F = 2.0 × 10⁻² N. Using F = qvBsinθ = (4.0×10⁻⁶)(2.0×10⁴)(0.50)(sin 30°) = (0.080)(0.50)(0.50) = 0.020 N. Choice A (1.0×10⁻² N) results from an arithmetic slip that halves the correct product one extra time. Choice C (4.0×10⁻² N) is what you get if you drop the sinθ factor entirely and just compute qvB = (4.0×10⁻⁶)(2.0×10⁴)(0.50) = 0.040 N. Choice D (8.0×10⁻² N) comes from dropping sinθ AND using the full 0.080 = qv term without multiplying by B correctly, or otherwise doubling the qvB result."
    },
    {
      "id": "12-6",
      "topic": "12.2 Force on Moving Charges",
      "stem": "Which combination of units is equivalent to the tesla (the SI unit of magnetic field)?",
      "choices": [
        "A/(N·m)",
        "N·m/A",
        "N·A/m",
        "N/(A·m)"
      ],
      "correct": 3,
      "explanation": "N/(A·m). Starting from F = qvB, solving for B gives units of N/(C·m/s) = N·s/(C·m); since A = C/s, this becomes N/(A·m) — force per unit current per unit length, matching F = BIL directly. Choice B (N·m/A) puts the meter in the numerator instead of the denominator, inverting the length dependence. Choice C (A/(N·m)) inverts the whole expression, putting amperes on top and newtons on bottom. Choice D (N·A/m) mistakenly multiplies by current instead of dividing by it."
    },
    {
      "id": "12-7",
      "topic": "12.2 Force on Moving Charges",
      "stem": "A charged particle moves in a circular path in a uniform magnetic field. If the particle's charge is doubled while its speed, mass, and the field strength stay the same, how does the radius of its path change?",
      "choices": [
        "It stays the same.",
        "It is cut in half.",
        "It doubles.",
        "It quadruples."
      ],
      "correct": 1,
      "explanation": "The radius is cut in half. From r = mv/(qB), charge sits in the denominator — doubling q with everything else fixed halves r, since a more strongly charged particle feels a proportionally stronger force and gets turned into a tighter circle. Choice A (doubles) mistakenly treats q as if it were in the numerator. Choice C (quadruples) applies a squared relationship that doesn't exist here — r depends on q to the first power, not q². Choice D (stays the same) wrongly assumes charge has no effect on radius at all."
    },
    {
      "id": "12-8",
      "topic": "12.2 Force on Moving Charges",
      "stem": "A charged particle moves in a circular path in a uniform magnetic field. If the particle's mass is doubled while charge, speed, and field strength stay the same, how does the radius change?",
      "choices": [
        "It stays the same.",
        "It quadruples.",
        "It is cut in half.",
        "It doubles."
      ],
      "correct": 3,
      "explanation": "The radius doubles. From r = mv/(qB), mass sits in the numerator — a more massive particle resists the turning force more, tracing a larger circle for the same field and speed. Choice B (cut in half) mistakenly treats m as if it were in the denominator, like q is. Choice C (quadruples) applies a squared relationship that doesn't apply to mass in this formula. Choice D (stays the same) wrongly assumes mass has no bearing on the radius."
    },
    {
      "id": "12-9",
      "topic": "12.2 Force on Moving Charges",
      "stem": "A proton moves in the +x direction (to the right) through a field pointing in the +y direction (straight up). Find the direction of the magnetic force on it.",
      "choices": [
        "In the −y direction",
        "Out of the page",
        "In the +x direction",
        "Into the page"
      ],
      "correct": 1,
      "explanation": "Out of the page. Point your fingers along +x (velocity), curl them toward +y (the field) — your thumb ends up pointing out of the page. Since the charge is positive, that's the force direction directly, no flip needed. Choice B (into the page) is the result of using a left hand instead of a right hand, or forgetting the positive charge needs no sign flip. Choices C and D both wrongly place the force along an axis in the v-B plane; the magnetic force is always perpendicular to both v and B, so it can never point along +x or along ±y here."
    },
    {
      "id": "12-10",
      "topic": "12.2 Force on Moving Charges",
      "stem": "An electron moves in the +x direction through a field pointing in the +y direction. Find the direction of the magnetic force on it.",
      "choices": [
        "Out of the page",
        "In the +x direction",
        "In the −y direction",
        "Into the page"
      ],
      "correct": 3,
      "explanation": "Into the page. The right-hand rule gives out-of-the-page for a positive charge in this setup (as in the previous question) — but the electron is negative, so flip the result 180°: into the page. Choice A (out of the page) is what you'd get by applying the right-hand rule correctly but then forgetting to flip for the negative charge. Choices C and D again place the force along the v-B plane, which is impossible since the magnetic force must be perpendicular to both velocity and field regardless of charge sign."
    },
    {
      "id": "12-11",
      "topic": "12.2 Force on Moving Charges",
      "stem": "A proton moves to the right (+x) through a field pointing into the page. Find the direction of the magnetic force on it.",
      "choices": [
        "To the left",
        "Upward",
        "Downward",
        "To the right"
      ],
      "correct": 1,
      "explanation": "Upward. Fingers point right (velocity), curl into the page (field direction) — thumb points up. Positive charge, so no flip needed: the force is straight up. Choice B (downward) results from using a left hand, or from applying the right-hand rule correctly but then flipping unnecessarily for a charge that's actually positive. Choices C and D place the force along the direction of the current itself, which can't be right since the magnetic force is always perpendicular to velocity."
    },
    {
      "id": "12-12",
      "topic": "12.2 Force on Moving Charges",
      "stem": "An electron moves to the right (+x) through a field pointing into the page. Find the direction of the magnetic force on it.",
      "choices": [
        "To the right",
        "To the left",
        "Downward",
        "Upward"
      ],
      "correct": 2,
      "explanation": "Downward. The right-hand rule gives upward for a positive charge in this exact setup (as in the previous question) — flip it for the negative electron: downward. Choice A (upward) is the right-hand-rule result for a positive charge, applied here without the needed flip for the electron's negative sign. Choices C and D again put the force parallel to the velocity, which the perpendicularity of the magnetic force rules out."
    },
    {
      "id": "12-13",
      "topic": "12.2 Force on Moving Charges",
      "stem": "A positive charge moves straight up (+y) through a field pointing out of the page. Find the direction of the magnetic force.",
      "choices": [
        "Upward",
        "To the left",
        "Downward",
        "To the right"
      ],
      "correct": 3,
      "explanation": "To the right. Fingers point up (velocity), curl out of the page (field) — thumb points to the right. Positive charge, direct result, no flip needed. Choice B (to the left) comes from a left-hand application, or from flipping a correct right-hand result for a charge that's actually positive. Choices C and D place the force along the direction of motion itself, which the perpendicularity of F to v rules out."
    },
    {
      "id": "12-14",
      "topic": "12.2 Force on Moving Charges",
      "stem": "A negative charge moves straight up (+y) through a field pointing out of the page. Find the direction of the magnetic force.",
      "choices": [
        "Upward",
        "To the right",
        "Downward",
        "To the left"
      ],
      "correct": 3,
      "explanation": "To the left. Same v and B as the previous question give 'to the right' for a positive charge — flip it for the negative charge: to the left. Choice A (to the right) is the correct right-hand-rule result for a positive charge, applied here without flipping for the negative sign. Choices C and D wrongly place the force along the velocity direction rather than perpendicular to it."
    },
    {
      "id": "12-15",
      "topic": "12.2 Force on Moving Charges",
      "stem": "An electron moves at 4.0×10⁶ m/s in a circular path of radius 0.050 m in a magnetic field. Find the field strength.",
      "choices": [
        "4.6 × 10⁻⁴ T",
        "4.6 × 10⁻⁵ T",
        "4.6 × 10⁻³ T",
        "4.6 × 10⁻² T"
      ],
      "correct": 0,
      "explanation": "B ≈ 4.6 × 10⁻⁴ T. Rearranging r = mv/(qB): B = mv/(rq) = (9.11×10⁻³¹)(4.0×10⁶)/[(0.050)(1.6×10⁻¹⁹)] ≈ 4.6×10⁻⁴ T. Choice A (4.6×10⁻⁵ T) and choices C (4.6×10⁻³ T) and D (4.6×10⁻² T) all come from misplacing a power of ten somewhere in the division — most commonly mishandling the 10⁻³¹ and 10⁻¹⁹ exponents when combining them, which shifts the final exponent by one or two steps in either direction."
    },
    {
      "id": "12-16",
      "topic": "12.2 Force on Moving Charges",
      "stem": "A proton moving at 1.0×10⁵ m/s enters a 0.20 T field perpendicular to its velocity. Find the radius of its circular path.",
      "choices": [
        "5.2 × 10⁻³ m",
        "5.2 × 10⁻² m",
        "5.2 × 10⁻⁴ m",
        "5.2 × 10⁻¹ m"
      ],
      "correct": 0,
      "explanation": "r ≈ 5.2 × 10⁻³ m. Using r = mv/(qB) = (1.67×10⁻²⁷)(1.0×10⁵)/[(1.6×10⁻¹⁹)(0.20)] ≈ 5.2×10⁻³ m. Choices A, C, and D share the same underlying setup but shift the decimal by mishandling the exponents — for instance, mismanaging the 10⁻²⁷ and 10⁻¹⁹ powers, or misplacing the 0.20 in the denominator — landing one or two orders of magnitude away from the correct value in either direction."
    },
    {
      "id": "12-17",
      "topic": "12.2 Force on Moving Charges",
      "stem": "A proton and an alpha particle (charge +2e, mass about 4 times the proton's mass) move at the same speed perpendicular to the same magnetic field. Compare their radii of circular motion.",
      "choices": [
        "r<sub>alpha</sub> = r<sub>proton</sub>/2",
        "r<sub>alpha</sub> = r<sub>proton</sub>",
        "r<sub>alpha</sub> = 2 r<sub>proton</sub>",
        "r<sub>alpha</sub> = 4 r<sub>proton</sub>"
      ],
      "correct": 2,
      "explanation": "r<sub>alpha</sub> = 2 r<sub>proton</sub>. Using r = mv/(qB): the alpha particle's mass is 4× the proton's but its charge is 2×, so its radius is (4/2) = 2× the proton's. Choice A wrongly assumes the mass and charge factors cancel completely. Choice C (r<sub>proton</sub>/2) inverts the ratio, applying the charge effect as if it dominated in the wrong direction. Choice D (4×) applies only the mass factor and forgets that the doubled charge partially offsets it."
    },
    {
      "id": "12-18",
      "topic": "12.2 Force on Moving Charges",
      "stretch": true,
      "stem": "A charged particle moves in a circle of radius r with period T in a magnetic field. If the field strength B is doubled (speed, mass, and charge unchanged), how does the period change?",
      "choices": [
        "It stays the same.",
        "It is cut in half.",
        "It quadruples.",
        "It doubles."
      ],
      "correct": 1,
      "explanation": "The period is cut in half. Combining T = 2πr/v with r = mv/(qB) gives T = 2πm/(qB) — speed cancels entirely, so the period depends only on mass, charge, and field strength. Doubling B directly halves T. Choice A (doubles) treats B as if it were in the numerator of the period formula rather than the denominator. Choice C (quadruples) applies a squared relationship that doesn't exist for B here. Choice D (stays the same) wrongly assumes field strength doesn't affect the period, when in fact T = 2πm/(qB) depends on B directly."
    },
    {
      "id": "12-19",
      "topic": "12.2 Force on Moving Charges",
      "stem": "A charged particle undergoes uniform circular motion in a magnetic field. Which of the following remains constant throughout the motion?",
      "choices": [
        "Velocity",
        "Kinetic energy",
        "Momentum",
        "The direction of the magnetic force"
      ],
      "correct": 1,
      "explanation": "Kinetic energy (and therefore speed) stays constant — the one true scalar invariant here, since the magnetic force never does work. Choice A (velocity) confuses a vector with its magnitude: velocity's direction constantly changes even though its magnitude (speed) doesn't. Choice C is wrong for the same reason — the force's direction rotates continuously to stay perpendicular to velocity, even though its magnitude is fixed. Choice D (momentum) is also a vector whose direction sweeps around the full circle, even though its magnitude (mv) stays constant."
    },
    {
      "id": "12-20",
      "topic": "12.2 Force on Moving Charges",
      "stem": "A beam containing both protons and electrons, all moving at the same velocity, enters a region of uniform magnetic field perpendicular to that velocity. Compare their paths.",
      "choices": [
        "Same direction, but very different radii.",
        "Opposite directions, very different radii.",
        "Same direction, equal radii.",
        "Opposite directions, equal radii."
      ],
      "correct": 1,
      "explanation": "Opposite directions, very different radii. The opposite charge signs (proton positive, electron negative) guarantee opposite curving directions. But the proton is about 1800 times more massive than the electron, and since r = mv/(qB) depends on mass directly, that inertia difference gives the proton a vastly larger radius. Choice A gets the curving direction wrong — opposite charges must curve opposite ways, not the same way — and also wrongly assumes equal radii despite the huge mass difference. Choice B gets the direction right but wrongly assumes equal radii, ignoring the mass term entirely. Choice D gets the radii difference right but the curving direction wrong."
    },
    {
      "id": "12-21",
      "topic": "12.2 Force on Moving Charges",
      "stem": "An alpha particle (charge 3.2×10⁻¹⁹ C, mass 6.64×10⁻²⁷ kg) moves at 5.0×10⁵ m/s perpendicular to a 0.40 T field. Find the radius of its circular path.",
      "choices": [
        "2.6 × 10⁻³ m",
        "2.6 m",
        "2.6 × 10⁻¹ m",
        "2.6 × 10⁻² m"
      ],
      "correct": 3,
      "explanation": "r ≈ 2.6 × 10⁻² m. Using r = mv/(qB) = (6.64×10⁻²⁷)(5.0×10⁵)/[(3.2×10⁻¹⁹)(0.40)] ≈ 2.6×10⁻² m. Choices A, C, and D each come from a power-of-ten slip while combining the 10⁻²⁷ and 10⁻¹⁹ exponents or handling the 0.40 in the denominator, landing one to three orders of magnitude away from the correct value."
    },
    {
      "id": "12-22",
      "topic": "12.2 Force on Moving Charges",
      "stem": "A charged particle moves through a nonzero magnetic field along a perfectly straight path, with no deflection at all. What can be concluded?",
      "choices": [
        "Velocity must be parallel (or antiparallel) to the field.",
        "The field must actually be zero, despite appearances.",
        "The particle's charge must be zero.",
        "This situation is physically impossible for a charged particle."
      ],
      "correct": 0,
      "explanation": "Velocity is parallel (or antiparallel) to the field. Force is F = qvBsinθ, and the only way to get zero force from a genuinely nonzero charge, speed, and field is sinθ = 0, i.e., θ = 0° or 180°. Choice B wrongly assumes a nonzero field can't coexist with zero deflection — it can, at the right angle. Choice C wrongly assumes the charge itself must vanish, when the angle alone fully explains the result. Choice D is wrong because this exact scenario is both possible and common — it's simply motion along the field line."
    },
    {
      "id": "12-23",
      "topic": "12.2 Force on Moving Charges",
      "stem": "Three identical charges move at the same speed through the same magnetic field, but at angles of 30°, 60°, and 90° to the field, respectively. Rank the magnitude of the magnetic force on each from greatest to least.",
      "choices": [
        "90° > 60° > 30°",
        "30° > 60° > 90°",
        "All three experience equal force",
        "60° > 90° > 30°"
      ],
      "correct": 0,
      "explanation": "90° > 60° > 30°. Force depends on sinθ, which increases steadily from 0° to 90° (sin30° = 0.5, sin60° ≈ 0.87, sin90° = 1). Choice B (30° > 60° > 90°) reverses the trend entirely, as if force decreased with angle instead of increasing. Choice C (60° > 90° > 30°) gets the ranking out of order, placing 90° in the middle instead of first. Choice D wrongly ignores the sinθ dependence altogether, treating the angle as irrelevant to force magnitude."
    },
    {
      "id": "12-24",
      "topic": "12.2 Force on Moving Charges",
      "stem": "A charged particle enters a region of uniform magnetic field (fixed in both magnitude and direction), with its velocity perpendicular to the field. Describe the resulting motion.",
      "choices": [
        "The particle comes to rest.",
        "A straight-line path traveled at a continuously increasing speed.",
        "Uniform circular motion, same as the standard case.",
        "A spiral that grows outward over time."
      ],
      "correct": 2,
      "explanation": "Uniform circular motion — exactly the standard result, since a perpendicular velocity is the one condition needed to guarantee it. Choice B is wrong on two counts: a magnetic force never changes speed, and it never produces straight-line motion when perpendicular to velocity. Choice C (an outward spiral) would require the radius to grow over time, but with B fixed in magnitude and speed constant, r = mv/(qB) stays fixed too — no spiral. Choice D is wrong because the magnetic force does zero work, so the particle can never lose speed and come to rest."
    },
    {
      "id": "12-25",
      "topic": "12.2 Force on Moving Charges",
      "stem": "A charged particle undergoes circular motion of radius r₁ in field B₁. The field is then changed to B₂ = 3B₁, with the particle's charge, mass, and speed unchanged. Find the new radius in terms of r₁.",
      "choices": [
        "r₁/3",
        "3r₁",
        "9r₁",
        "r₁/9"
      ],
      "correct": 0,
      "explanation": "r₁/3. Since r = mv/(qB), radius is inversely proportional to field strength — tripling B cuts the radius to one-third. Choice A (r₁/9) mistakenly squares the tripling factor, as if radius depended on 1/B² instead of 1/B. Choices C (3r₁) and D (9r₁) both invert the relationship, treating radius as directly (or directly-squared) proportional to B rather than inversely proportional."
    },
    {
      "id": "12-26",
      "topic": "12.2 Force on Moving Charges",
      "stretch": true,
      "stem": "An electron and a proton move with the SAME kinetic energy (not the same speed) perpendicular to the same magnetic field. Compare their radii of circular motion.",
      "choices": [
        "The proton's radius is much larger, by a factor of √(m<sub>proton</sub>/m<sub>electron</sub>).",
        "Equal radii, since kinetic energy is equal.",
        "The electron's radius is much larger, by a factor of √(m<sub>proton</sub>/m<sub>electron</sub>).",
        "Equal radii, since charge magnitude is equal."
      ],
      "correct": 0,
      "explanation": "The proton's radius is much larger. Rewriting r = mv/(qB) in terms of kinetic energy (v = √(2KE/m)) gives r = √(2mKE)/(qB), so r ∝ √m when KE and q are equal — the far more massive proton ends up with the larger radius, by a factor of √(m<sub>proton</sub>/m<sub>electron</sub>) ≈ 43. Choice A wrongly assumes equal kinetic energy implies equal radius, ignoring that r also depends on mass once v is eliminated in favor of KE. Choice C gets the mass dependence backwards, giving the electron the larger radius when it's actually the less massive particle and should have the smaller one. Choice D focuses on the wrong variable — charge magnitude being equal doesn't make the radii equal, since mass still differs enormously."
    },
    {
      "id": "12-27",
      "topic": "12.3 Current-Carrying Wires",
      "stem": "A wire carries 5.0 A and is 0.40 m long, oriented perpendicular to a 0.30 T field. Find the force on the wire.",
      "choices": [
        "0.60 N",
        "1.5 N",
        "0.15 N",
        "6.0 N"
      ],
      "correct": 0,
      "explanation": "F = 0.60 N. Using F = BIL = (0.30)(5.0)(0.40) = 0.60 N, with sinθ = 1 since the wire is perpendicular to the field. Choice A (0.15 N) results from a division instead of multiplication somewhere in the product, such as computing B/I×L. Choices C (1.5 N) and D (6.0 N) come from decimal-placement slips, such as treating 0.30 as 0.75 or forgetting a decimal point in one of the three factors."
    },
    {
      "id": "12-28",
      "topic": "12.3 Current-Carrying Wires",
      "stem": "A current-carrying wire is oriented parallel to an external magnetic field. Find the force on the wire.",
      "choices": [
        "BIL, its maximum possible value",
        "Zero",
        "Cannot be determined without knowing the current",
        "BIL/2"
      ],
      "correct": 1,
      "explanation": "Zero. Force on a wire is F = BILsinθ, and parallel orientation means θ = 0°, giving sinθ = 0 regardless of how large the current or field is. Choice B has it backwards — BIL (the maximum) actually occurs at the perpendicular orientation (θ = 90°, sinθ = 1), not the parallel one. Choice C (BIL/2) misapplies a factor as if the angle were 30° (sin30° = 0.5) rather than 0°. Choice D wrongly suggests the current's exact value matters here, when in fact sinθ = 0 makes the force zero no matter what the current is."
    },
    {
      "id": "12-29",
      "topic": "12.3 Current-Carrying Wires",
      "stem": "Find the magnetic field 0.10 m from a long, straight wire carrying 8.0 A.",
      "choices": [
        "1.6 × 10⁻⁵ T",
        "1.6 × 10⁻³ T",
        "1.6 × 10⁻⁶ T",
        "1.6 × 10⁻⁴ T"
      ],
      "correct": 0,
      "explanation": "B = 1.6 × 10⁻⁵ T. Using B = μ₀I/(2πr) = (4π×10⁻⁷)(8.0)/(2π×0.10) — the π cancels, leaving (2×10⁻⁷)(8.0)/0.10 = 1.6×10⁻⁵ T. Choice A (1.6×10⁻⁶ T) results from an extra division by 10, such as mishandling the 0.10 in the denominator. Choices C (1.6×10⁻⁴ T) and D (1.6×10⁻³ T) come from forgetting to divide by r correctly or mismanaging the 10⁻⁷ exponent from μ₀, shifting the answer one or two powers of ten too large."
    },
    {
      "id": "12-30",
      "topic": "12.3 Current-Carrying Wires",
      "stem": "If the distance from a long, straight current-carrying wire is doubled, how does the magnetic field strength there change?",
      "choices": [
        "It doubles.",
        "It is cut in half.",
        "It quadruples.",
        "It is cut to one-fourth."
      ],
      "correct": 1,
      "explanation": "It's cut in half. The field from a long straight wire falls off as B ∝ 1/r, a direct inverse relationship, NOT inverse-square like a point charge's electric field. Doubling the distance simply halves the field. Choice A (doubles) inverts the relationship, treating B as increasing with distance instead of decreasing. Choices C (quadruples) and D (cut to one-fourth) both mistakenly import the inverse-square (1/r²) pattern from Coulomb's Law, which doesn't apply to this long-wire geometry."
    },
    {
      "id": "12-31",
      "topic": "12.3 Current-Carrying Wires",
      "stem": "If the current in a long, straight wire is tripled, how does the field at a fixed distance change?",
      "choices": [
        "It is cut to one-third.",
        "It stays the same.",
        "It triples.",
        "It increases ninefold."
      ],
      "correct": 2,
      "explanation": "It triples. B = μ₀I/(2πr) is directly proportional to current, so tripling I triples B — a straightforward linear relationship. Choice B (ninefold) mistakenly squares the tripling factor, as if B depended on I². Choice C (cut to one-third) inverts the relationship, treating B as inversely related to current when it's actually directly proportional. Choice D wrongly assumes current has no effect on the field it creates."
    },
    {
      "id": "12-32",
      "topic": "12.3 Current-Carrying Wires",
      "stem": "A long, straight wire carries current straight upward (+y). Find the direction of the magnetic field at a point located to the right of the wire.",
      "choices": [
        "Out of the page",
        "Upward, parallel to the wire",
        "Into the page",
        "Directly away from the wire"
      ],
      "correct": 2,
      "explanation": "Into the page. Grip the wire with your right thumb pointing up (along the current); your fingers curl around the wire, and at a point to the right of the wire that curl points into the page. Choice B (out of the page) is the field direction on the LEFT side of the wire, not the right — mixing up the two sides of the circular pattern. Choices C and D both wrongly assume the field points along the wire or radially outward from it; the field from a straight wire actually circles around it, tangent to circles centered on the wire, never parallel to the wire or radial."
    },
    {
      "id": "12-33",
      "topic": "12.3 Current-Carrying Wires",
      "stem": "The same wire carries current straight upward. Find the direction of the magnetic field at a point located to the LEFT of the wire.",
      "choices": [
        "Into the page",
        "Downward, parallel to the wire",
        "Directly toward the wire",
        "Out of the page"
      ],
      "correct": 3,
      "explanation": "Out of the page. This is the exact opposite side from the previous question, and the field reverses accordingly — the field circles all the way around the wire, so opposite sides always have opposite directions relative to the page. Choice A (into the page) is the field direction on the RIGHT side of the wire, mixed up with the left side asked about here. Choices C and D again wrongly place the field along the wire or radially toward it, when it actually circles the wire tangentially."
    },
    {
      "id": "12-34",
      "topic": "12.3 Current-Carrying Wires",
      "stem": "Two long, parallel wires carry current in the SAME direction. Explain, from the underlying physics (not just the memorized rule), whether they attract or repel.",
      "choices": [
        "Attract — Wire 1's field pulls Wire 2 toward it.",
        "Neither — parallel wires never exert force on each other.",
        "Repel — like currents behave like like charges and push apart.",
        "It depends on the wires' exact separation distance."
      ],
      "correct": 0,
      "explanation": "Attract. Wire 1 creates a field that circles around it; at Wire 2's location that field has a specific direction (via the grip rule), and applying F = IL × B to Wire 2 sitting in that field shows the force pulls Wire 2 toward Wire 1. Choice B wrongly imports the like-charges-repel intuition from electrostatics, which is exactly backwards for parallel currents — same-direction currents attract, unlike same-sign charges. Choice C is wrong because the wires clearly do interact — each carries current through the other's field, producing a real, nonzero force. Choice D is wrong because separation distance affects only the force's magnitude (through B ∝ 1/r), not whether the wires attract or repel — the direction is fixed by the current orientations alone."
    },
    {
      "id": "12-35",
      "topic": "12.3 Current-Carrying Wires",
      "stem": "Two long parallel wires, each carrying 6.0 A in the same direction, are separated by 0.020 m. Find the field that Wire 1 creates at Wire 2's location.",
      "choices": [
        "6.0 × 10⁻³ T",
        "6.0 × 10⁻⁶ T",
        "6.0 × 10⁻⁴ T",
        "6.0 × 10⁻⁵ T"
      ],
      "correct": 3,
      "explanation": "B = 6.0 × 10⁻⁵ T. Using B = μ₀I/(2πr) = (4π×10⁻⁷)(6.0)/(2π×0.020), the π cancels: (2×10⁻⁷)(6.0)/0.020 = 6.0×10⁻⁵ T. Choice A (6.0×10⁻⁶ T) comes from an extra factor-of-ten error in the 0.020 denominator. Choices C (6.0×10⁻⁴ T) and D (6.0×10⁻³ T) come from mismanaging the 10⁻⁷ exponent from μ₀ or the division by r, landing one or two powers of ten too large."
    },
    {
      "id": "12-36",
      "topic": "12.3 Current-Carrying Wires",
      "stem": "Using the field from the previous question (6.0×10⁻⁵ T) and Wire 2 also carrying 6.0 A, find the magnetic force between the wires over a 1.0 m length.",
      "choices": [
        "3.6 × 10⁻⁵ N",
        "3.6 × 10⁻⁴ N",
        "3.6 × 10⁻³ N",
        "3.6 × 10⁻² N"
      ],
      "correct": 1,
      "explanation": "F = 3.6 × 10⁻⁴ N. Using F = BIL = (6.0×10⁻⁵)(6.0)(1.0) = 3.6×10⁻⁴ N — treating Wire 2 as a current-carrying wire sitting in Wire 1's field, exactly like any other force-on-a-wire problem. Choice A (3.6×10⁻⁵ N) comes from an extra factor-of-ten slip in multiplying the given B by I and L. Choices C (3.6×10⁻³ N) and D (3.6×10⁻² N) come from misplacing the decimal the other way, such as mishandling the 10⁻⁵ from the given field value."
    },
    {
      "id": "12-37",
      "topic": "12.3 Current-Carrying Wires",
      "stem": "Describe the general shape of the magnetic field created by a single current-carrying loop of wire.",
      "choices": [
        "Field lines form concentric circles centered on the loop's edge only.",
        "Resembles a bar magnet's field overall.",
        "The field is zero everywhere except exactly at the wire itself.",
        "Field lines run in straight parallel lines through the loop."
      ],
      "correct": 1,
      "explanation": "Resembles a bar magnet's field. The looped current creates a concentrated, roughly uniform field through the center, with field lines curving back around outside the loop to close — one face of the loop acts like a north pole, the other like a south pole. Choice A wrongly describes the field as straight and parallel, which is only a rough approximation very near the center axis, not the field's actual shape overall. Choice C is wrong because the field extends well beyond the wire itself, both through the loop's interior and in the curving return paths outside it — it's not confined to the wire. Choice D wrongly confines the circular field lines to the loop's edge; the actual field pattern spans the whole region in and around the loop, not just a ring at the boundary."
    },
    {
      "id": "12-38",
      "topic": "12.3 Current-Carrying Wires",
      "stem": "A wire loop lies flat, with current flowing counterclockwise when viewed from above. Find the direction of the magnetic field at the center of the loop.",
      "choices": [
        "Upward, out of the loop",
        "Downward, into the loop",
        "Radially inward toward the center",
        "Radially outward from the center"
      ],
      "correct": 0,
      "explanation": "Upward. Curl your right-hand fingers in the direction of the current (counterclockwise, viewed from above) — your thumb points straight up, out of the loop's plane, giving the field direction at the center. Choice B (downward) is what you'd get from curling your fingers the wrong way, as if the current were clockwise instead of counterclockwise. Choices C and D both wrongly describe the field at the loop's center as radial; the field there actually points straight along the loop's axis (up or down), not outward or inward within the loop's plane."
    },
    {
      "id": "12-39",
      "topic": "12.3 Current-Carrying Wires",
      "stem": "The same loop now carries current clockwise when viewed from above. Find the field direction at the center.",
      "choices": [
        "Radially inward toward the center",
        "Upward, out of the loop",
        "Downward, into the loop",
        "Radially outward from the center"
      ],
      "correct": 2,
      "explanation": "Downward. Reversing the current direction reverses the curl of your fingers, and therefore flips the thumb's direction — the exact opposite of the counterclockwise case. Choice A (upward) is the correct answer for the counterclockwise version of this same loop, applied here without accounting for the reversed (clockwise) current. Choices C and D again wrongly place the field radially in the loop's plane rather than along its axis."
    },
    {
      "id": "12-40",
      "topic": "12.3 Current-Carrying Wires",
      "stem": "Compare how quickly the magnetic field weakens with distance for (a) a single point charge's electric field, versus (b) a long, straight current-carrying wire's magnetic field.",
      "choices": [
        "The point charge's field falls off as 1/r; the wire's field falls off as 1/r².",
        "1/r² for the point charge (inverse-square); the wire's is gentler, at 1/r.",
        "Both fall off as 1/r².",
        "Both fall off as 1/r."
      ],
      "correct": 1,
      "explanation": "Point charge: 1/r² (inverse-square). Wire: 1/r (a gentler falloff). Choice A wrongly applies the electric field's inverse-square pattern to the wire's magnetic field as well, when the wire actually falls off more slowly, as 1/r. Choice B makes the opposite mistake, applying the wire's 1/r pattern to the point charge's field too, when Coulomb's Law genuinely is inverse-square. Choice D swaps the two relationships entirely, assigning 1/r to the point charge and 1/r² to the wire — exactly backwards from the correct pairing."
    },
    {
      "id": "12-41",
      "topic": "12.3 Current-Carrying Wires",
      "stem": "A wire carries current I at a 40° angle to a 0.25 T field, experiencing a force of 0.60 N over a 2.0 m length. Find I.",
      "choices": [
        "0.75 A",
        "4.7 A",
        "3.0 A",
        "1.9 A"
      ],
      "correct": 3,
      "explanation": "I ≈ 1.9 A. Rearranging F = BILsinθ: I = F/(BLsinθ) = 0.60/[(0.25)(2.0)(sin 40°)] ≈ 0.60/0.322 ≈ 1.9 A. Choice A (0.75 A) results from forgetting the sinθ factor and instead dividing by the full BL product times something larger than sin40°, such as treating θ as 90°. Choices C (3.0 A) and D (4.7 A) come from dropping the sinθ factor entirely (giving I = 0.60/0.50 = 1.2, still not matching, so likely combined with another slip) or mishandling the sin40° value in the denominator."
    },
    {
      "id": "12-42",
      "topic": "12.3 Current-Carrying Wires",
      "stem": "A current-carrying wire segment experiences zero net magnetic force despite sitting in a strong external field. What can be concluded?",
      "choices": [
        "The wire must be oriented perpendicular to the field.",
        "This situation is physically impossible.",
        "The current in the wire must be zero.",
        "Oriented parallel (or antiparallel) to the field."
      ],
      "correct": 3,
      "explanation": "Parallel (or antiparallel) to the field. F = BILsinθ = 0 with nonzero B, I, and L requires sinθ = 0, meaning θ = 0° or 180°. Choice B has the geometry backwards — perpendicular orientation (θ = 90°) actually gives the MAXIMUM force, since sin90° = 1, not zero. Choice C wrongly assumes the current itself must vanish, when the angle alone fully accounts for zero force even with substantial current flowing. Choice D is wrong because this is an entirely ordinary, common configuration — a wire running along the field lines — not an impossibility."
    },
    {
      "id": "12-43",
      "topic": "12.3 Current-Carrying Wires",
      "stretch": true,
      "stem": "Compare the magnetic field strength at the center of a current loop to the field at an equivalent distance from a long straight wire carrying the same current.",
      "choices": [
        "The comparison depends entirely on the wire's resistivity.",
        "The loop's center field is stronger, since every wire segment's contribution adds there.",
        "The straight wire's field is always stronger, since it extends infinitely in both directions.",
        "They are always exactly equal for the same current."
      ],
      "correct": 1,
      "explanation": "The loop's center field is stronger. A looped wire concentrates the magnetic contribution from every point along its length toward the same central location, where they add constructively — a straight wire's field at a given point only benefits from the nearby portions of wire, without that same focusing effect. Choice B wrongly assumes an infinite extent automatically makes the field stronger; what matters is how the contributions from different wire segments combine at the point of interest, and the loop's geometry combines them more favorably. Choice C wrongly claims equality with no justification — the two geometries produce genuinely different field strengths. Choice D is wrong because resistivity affects how much current can flow for a given voltage, but for a SPECIFIED current (as given here), the field depends on geometry, not on the wire's resistive properties."
    },
    {
      "id": "12-44",
      "topic": "12.3 Current-Carrying Wires",
      "stretch": true,
      "stem": "A charged particle moves directly toward a long, straight current-carrying wire (radially, in the plane perpendicular to the wire). What is the magnetic force on the particle at that instant?",
      "choices": [
        "Zero, since the particle's velocity points straight at the field's source.",
        "Nonzero, and directed parallel to the wire itself.",
        "The force cannot be determined without knowing the particle's exact starting distance.",
        "Nonzero, directed radially, pushing the particle either toward or away from the wire."
      ],
      "correct": 1,
      "explanation": "Nonzero, directed parallel to the wire. The wire's field circles around it (tangential to circles centered on the wire), while the particle's velocity is radial — radial and tangential directions are always perpendicular, so sinθ = 1 and a genuine force exists, with magnitude qvB; since F must be perpendicular to both v (radial) and B (tangential), the only direction left is along the wire. Choice A wrongly assumes 'pointing at the source' means zero force, but what matters for F = qvBsinθ is the angle between v and B, not between v and the wire's location — and that angle is 90° here. Choice C wrongly directs the force radially, which is actually the direction of v itself, not a direction perpendicular to both v and B as the force must be. Choice D is wrong because the force's direction (along the wire) doesn't depend on the starting distance at all — only its magnitude would, through B's 1/r dependence."
    },
    {
      "id": "12-45",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "Find the magnetic flux through a 0.030 m² loop with a 0.50 T field perpendicular to the loop's plane.",
      "choices": [
        "0.030 Wb",
        "0.060 Wb",
        "0.015 Wb",
        "0.0075 Wb"
      ],
      "correct": 2,
      "explanation": "Φ = 0.015 Wb. Using Φ = BAcosθ with θ = 0° (field perpendicular to the loop means it's parallel to the loop's normal): Φ = (0.50)(0.030)(1) = 0.015 Wb. Choice A (0.0075 Wb) comes from an extra factor of one-half, as if a cosine other than 1 had been applied. Choices C (0.030 Wb) and D (0.060 Wb) come from doubling or otherwise misapplying one of the two given values (B or A) instead of simply multiplying them directly."
    },
    {
      "id": "12-46",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "Find the flux through the same loop (0.030 m², 0.50 T) if the field instead makes a 60° angle with the loop's normal direction.",
      "choices": [
        "0.0075 Wb",
        "0.015 Wb",
        "0.026 Wb",
        "0.013 Wb"
      ],
      "correct": 0,
      "explanation": "Φ = 0.0075 Wb. Using Φ = BAcosθ = (0.50)(0.030)(cos 60°) = (0.015)(0.5) = 0.0075 Wb — half of the maximum flux from the previous question, since cos 60° = 0.5 exactly. Choice B (0.013 Wb) results from using sin60° (≈0.866) in place of cos60° (0.5). Choice C (0.015 Wb) is the maximum flux BA with no angle factor applied at all, as if θ were 0° instead of 60°. Choice D (0.026 Wb) doubles the sin60°-based error, compounding the same trig mix-up."
    },
    {
      "id": "12-47",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "A loop is oriented so the magnetic field runs exactly parallel to the loop's surface (grazing along it, rather than passing through). Find the flux through the loop.",
      "choices": [
        "Cannot be determined without knowing the loop's area.",
        "Zero.",
        "Maximum possible flux, BA.",
        "Half of the maximum flux."
      ],
      "correct": 1,
      "explanation": "Zero. Flux depends on alignment with the loop's NORMAL (perpendicular) direction, not the surface itself. A field running along the surface makes a 90° angle with the normal, and cos 90° = 0. Choice A falls into the trap of assuming 'along the surface' sounds like it should maximize flux, when in fact that orientation minimizes it completely. Choice C (half of maximum) would require cosθ = 0.5, i.e., θ = 60°, not the 90° angle this parallel orientation actually produces. Choice D wrongly suggests area is the missing piece, when the angle alone (θ = 90°) already fixes the flux at zero regardless of area."
    },
    {
      "id": "12-48",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "A loop's flux changes from 0.020 Wb to 0.050 Wb in 0.10 s. Find the magnitude of the induced EMF.",
      "choices": [
        "0.30 V",
        "30 V",
        "0.030 V",
        "3.0 V"
      ],
      "correct": 0,
      "explanation": "ε = 0.30 V. Using ε = ΔΦ/Δt = (0.050 − 0.020)/0.10 = 0.030/0.10 = 0.30 V. Choice A (0.030 V) is the flux CHANGE itself (ΔΦ) reported without dividing by the 0.10 s time interval. Choices C (3.0 V) and D (30 V) come from misplacing the decimal in that division, such as treating Δt as 0.010 s or 0.0010 s instead of 0.10 s."
    },
    {
      "id": "12-49",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "A loop's flux decreases from 0.080 Wb to 0.020 Wb over 0.30 s. Find the magnitude of the induced EMF.",
      "choices": [
        "2.0 V",
        "0.60 V",
        "0.060 V",
        "0.20 V"
      ],
      "correct": 3,
      "explanation": "ε = 0.20 V. Using ε = |ΔΦ|/Δt = |0.020 − 0.080|/0.30 = 0.060/0.30 = 0.20 V. The direction of change doesn't affect this magnitude, only the induced current's direction per Lenz's Law. Choice A (0.060 V) is the flux change (ΔΦ) itself, reported without dividing by the 0.30 s interval. Choices C (0.60 V) and D (2.0 V) come from misplacing the decimal in that division, such as treating Δt as 0.030 s or 0.030 instead of 0.30 s."
    },
    {
      "id": "12-50",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "A 20-turn coil experiences a flux change of 0.0030 Wb per turn over 0.15 s. Find the total induced EMF.",
      "choices": [
        "3.0 V",
        "0.40 V",
        "0.10 V",
        "0.020 V"
      ],
      "correct": 1,
      "explanation": "ε = 0.40 V. Using ε = N(ΔΦ/Δt) = (20)(0.0030/0.15) = (20)(0.020) = 0.40 V — each turn contributes its own EMF, and since they're in series, the total is N times a single loop's contribution. Choice A (0.020 V) is the per-turn EMF (ΔΦ/Δt) without multiplying by the number of turns N = 20. Choice B (0.10 V) comes from multiplying by too small a factor, such as using N/4 or otherwise undercounting the turns. Choice D (3.0 V) overshoots by roughly a factor of about 7–8, consistent with a misplaced decimal in the per-turn flux rate."
    },
    {
      "id": "12-51",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "A loop sits in a constant, unchanging magnetic field. Is any EMF induced?",
      "choices": [
        "Yes, but only if the field exceeds 1 Tesla.",
        "It depends on the loop's resistance.",
        "No, regardless of how strong the field is.",
        "Yes, proportional to the field strength."
      ],
      "correct": 2,
      "explanation": "No, regardless of field strength. Faraday's Law requires a CHANGE in flux to induce an EMF — a constant field through a stationary, fixed loop produces zero flux change, hence zero EMF, no matter how strong that field is. Choice A wrongly assumes a static field itself (rather than a changing one) can drive an EMF, confusing field strength with the rate of flux change. Choice C invents an arbitrary field-strength threshold (1 T) that plays no role in Faraday's Law at all. Choice D is wrong because resistance affects the induced CURRENT (I = ε/R) once an EMF exists, but has no bearing on whether an EMF is induced in the first place — that's determined purely by flux change."
    },
    {
      "id": "12-52",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "A loop's area is steadily shrinking while it sits in a constant magnetic field perpendicular to its plane. Is an EMF induced?",
      "choices": [
        "No, since flux only depends on field strength, not area.",
        "Yes, but only during the instant the area stops changing.",
        "No, since the field itself isn't changing.",
        "Yes, since the changing area changes the flux."
      ],
      "correct": 3,
      "explanation": "Yes. Flux is Φ = BAcosθ, and area A is just as much a part of that product as B is — a shrinking area produces a genuinely changing flux even with B held constant, which is enough to induce an EMF. Choice B wrongly assumes only B's own change matters, ignoring that A appears in the flux formula on completely equal footing. Choice C has the logic backwards — an EMF is induced WHILE the area is actively changing, and would vanish at the instant change stops, not the reverse. Choice D is simply false: flux explicitly depends on area (Φ = BA at θ = 0°), not on field strength alone."
    },
    {
      "id": "12-53",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "A loop rotates at constant angular speed in a uniform magnetic field, continuously changing the angle between its normal and the field. Is an EMF induced, even though B and the loop's area are both constant?",
      "choices": [
        "No, since neither B nor A is changing.",
        "Yes, but only at the instant the loop is exactly perpendicular to the field.",
        "Yes, since the changing angle changes the flux.",
        "No, since angle doesn't appear in the flux equation."
      ],
      "correct": 2,
      "explanation": "Yes. Flux depends on all three factors in Φ = BAcosθ, including the angle θ. A continuously rotating loop has a continuously changing θ, producing continuously changing flux even with B and A fixed — this is literally the operating principle behind AC generators. Choice A wrongly assumes only B and A can drive flux changes, overlooking that θ is an equally valid third variable in the formula. Choice C wrongly restricts induction to a single instant, when in fact EMF is induced continuously throughout the rotation, not just at one orientation. Choice D is simply false — θ appears explicitly in Φ = BAcosθ as the cosine argument."
    },
    {
      "id": "12-54",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "A loop lies flat with a bar magnet's north pole approaching from directly above, so the downward flux through the loop is increasing. Find the direction of the induced current, viewed from above.",
      "choices": [
        "The current alternates direction",
        "No current is induced",
        "Counterclockwise",
        "Clockwise"
      ],
      "correct": 2,
      "explanation": "Counterclockwise. By Lenz's Law, the induced current must oppose the increasing downward flux, generating its own upward field inside the loop; the loop's right-hand rule (upward field ↔ counterclockwise current viewed from above) gives the answer. Choice A (clockwise) is the direction that would REINFORCE the increasing downward flux rather than oppose it, exactly backwards from what Lenz's Law requires. Choice C is wrong because the flux is actively changing here (increasing), which is precisely the condition Faraday's Law says induces an EMF and current. Choice D wrongly suggests alternation, but with the magnet moving steadily in one direction, the induced current direction stays fixed as counterclockwise throughout this approach."
    },
    {
      "id": "12-55",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "The same magnet's north pole now moves AWAY from the loop (retreating upward), so the downward flux is decreasing instead. Find the induced current direction, viewed from above.",
      "choices": [
        "No current is induced",
        "The current alternates direction",
        "Clockwise",
        "Counterclockwise"
      ],
      "correct": 2,
      "explanation": "Clockwise — the exact opposite of the approaching-magnet case. Since flux is now DECREASING, the induced current must reinforce it rather than oppose it, creating a downward field inside the loop to prop up the shrinking flux. Choice B (counterclockwise) is the answer for the approaching-magnet (increasing-flux) case, applied here without accounting for the flux now decreasing instead. Choice C is wrong because the flux is still actively changing (decreasing), which still induces a current, just with a reversed goal — reinforcing rather than opposing. Choice D wrongly suggests alternation during this single, steady retreat, when the direction actually stays fixed as clockwise throughout."
    },
    {
      "id": "12-56",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "A bar magnet's SOUTH pole (instead of north) approaches the same loop from above. Since field lines point INTO a south pole, the upward flux through the loop is increasing as the magnet approaches. Find the induced current direction, viewed from above.",
      "choices": [
        "Counterclockwise",
        "No current is induced",
        "Clockwise",
        "The current alternates direction"
      ],
      "correct": 2,
      "explanation": "Clockwise. The upward flux is increasing, so the induced current must oppose that increase by generating a downward field inside the loop, which by the loop's right-hand rule requires clockwise current viewed from above. Choice B (counterclockwise) would generate an upward field, which reinforces rather than opposes the increasing upward flux — exactly backwards from what Lenz's Law requires, and easy to reach by reusing the north-pole-approaching answer without re-deriving it. Choice C is wrong because the flux is actively increasing here, which is precisely the condition for induction. Choice D wrongly suggests alternation despite the steady, one-directional approach of the magnet."
    },
    {
      "id": "12-57",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "Using energy conservation, explain why the induced current always opposes the CHANGE in flux, rather than reinforcing an increasing flux.",
      "choices": [
        "The direction is actually random and only appears consistent due to measurement limitations.",
        "It's simply an arbitrary convention with no deeper physical justification.",
        "Reinforcing an increasing flux would violate conservation of charge instead.",
        "It would generate unlimited energy from nothing, violating conservation of energy."
      ],
      "correct": 3,
      "explanation": "It would create energy from nothing, which conservation of energy forbids: if the induced current reinforced an increasing flux, that reinforcement would increase the flux further, inducing an even stronger current, in a runaway feedback loop generating limitless energy from nothing. Choice B wrongly dismisses the rule as arbitrary, when it's actually a direct, necessary consequence of energy conservation, not a memorized convention. Choice C names the wrong conservation law — the issue with reinforcement is unbounded energy creation, not any violation of charge conservation, which isn't at stake here at all. Choice D is wrong because the direction is fully determined and reproducible by Lenz's Law every time, not random or an artifact of measurement."
    },
    {
      "id": "12-58",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "A 0.60 m rod moves at 8.0 m/s perpendicular to a 0.40 T field. Find the motional EMF induced.",
      "choices": [
        "4.8 V",
        "1.9 V",
        "19 V",
        "0.48 V"
      ],
      "correct": 1,
      "explanation": "ε ≈ 1.9 V. Using ε = BLv = (0.40)(0.60)(8.0) = 1.92 V. Choice A (0.48 V) comes from dropping a factor of the speed, effectively computing BL alone (0.24) times roughly 2 instead of the full v = 8.0. Choices C (4.8 V) and D (19 V) come from decimal-placement slips in multiplying the three factors, such as treating 0.40 as 1.0 or otherwise shifting a decimal point."
    },
    {
      "id": "12-59",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "A rod moves through a magnetic field, but its velocity is PARALLEL to the field (not perpendicular). Find the motional EMF induced.",
      "choices": [
        "Zero",
        "Cannot be determined without more information",
        "BLv, the full standard value",
        "BLv/2"
      ],
      "correct": 0,
      "explanation": "Zero. Motional EMF assumes velocity is perpendicular to the field. If velocity is parallel to B instead, the force on individual charges within the rod (F = qv × B) is zero, since v and B point the same way — with no force pushing charge toward either end, no EMF builds up. Choice B assumes the standard perpendicular formula applies regardless of orientation, ignoring that BLv is derived specifically for the perpendicular case. Choice C (BLv/2) invents a factor as if the angle were 30° (sin30° = 0.5) rather than the 0° parallel case actually described. Choice D wrongly suggests more information is needed, when the parallel geometry alone is already sufficient to determine the EMF is zero."
    },
    {
      "id": "12-60",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "A rod's speed through a magnetic field doubles, with its length and the field strength unchanged. How does the motional EMF change?",
      "choices": [
        "It is cut in half.",
        "It stays the same.",
        "It doubles.",
        "It quadruples."
      ],
      "correct": 2,
      "explanation": "It doubles. Motional EMF is ε = BLv, directly proportional to speed — a straightforward linear relationship, no squaring involved. Choice B (quadruples) mistakenly applies a squared relationship, as if ε depended on v² rather than v. Choice C (cut in half) inverts the relationship, treating EMF as inversely related to speed rather than directly proportional. Choice D wrongly assumes speed has no effect on the induced EMF."
    },
    {
      "id": "12-61",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "An induced current in a loop of resistance R dissipates power P. If the RATE of flux change is doubled (same resistance), how does the dissipated power change?",
      "choices": [
        "It doubles.",
        "It stays the same.",
        "It quadruples.",
        "It is cut in half."
      ],
      "correct": 2,
      "explanation": "It quadruples. Doubling the rate of flux change doubles the induced EMF (ε = ΔΦ/Δt). Since P = ε²/R, and ε has doubled, P increases by 2² = 4. Choice A (doubles) correctly tracks the EMF's own doubling but stops there, forgetting that power depends on ε SQUARED, not ε directly. Choice C (cut in half) inverts the relationship entirely, treating power as decreasing when the rate of change actually increased. Choice D wrongly assumes power is unaffected by the flux-change rate, when P = ε²/R makes it strongly (quadratically) dependent on ε."
    },
    {
      "id": "12-62",
      "topic": "12.4 Electromagnetic Induction",
      "stretch": true,
      "stem": "A metal ring falls freely through a region where the magnetic field strength varies with height (stronger at the bottom, weaker at the top). As the ring falls through this region, is a current induced, and how might this affect its fall?",
      "choices": [
        "A current is induced; Lenz's Law makes it slow the fall below free-fall.",
        "A current is induced, but it has no mechanical effect on the ring's motion.",
        "A current is induced, and it speeds up the ring's fall compared to free-fall.",
        "No current is induced, since the ring itself isn't a closed circuit with a battery."
      ],
      "correct": 0,
      "explanation": "Yes, current is induced, and it slows the fall — electromagnetic braking. As the ring falls into a region of different field strength, the changing flux induces a current; by Lenz's Law, that current creates a force opposing the change causing it, which manifests as an upward drag slowing the fall. Choice A is wrong because a closed conducting loop doesn't need a battery to carry induced current — a changing flux alone is sufficient to drive current around any closed conducting path, battery or not. Choice C gets the effect backwards: Lenz's Law guarantees the induced effect OPPOSES the motion causing it, so the current can only slow the fall, never speed it up. Choice D wrongly claims no mechanical effect, when the induced current interacting with the field produces a genuine retarding force (F = IL × B) on the ring."
    },
    {
      "id": "12-63",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "Find the flux through a 0.15 m × 0.20 m rectangular loop with a 0.80 T field perpendicular to it.",
      "choices": [
        "0.024 Wb",
        "0.24 Wb",
        "0.048 Wb",
        "0.012 Wb"
      ],
      "correct": 0,
      "explanation": "Φ = 0.024 Wb. First find area: A = (0.15)(0.20) = 0.030 m². Then Φ = BA = (0.80)(0.030) = 0.024 Wb. Choice A (0.012 Wb) comes from an extra factor of one-half somewhere in the area or flux calculation. Choices C (0.048 Wb) and D (0.24 Wb) come from doubling the correct result or misplacing a decimal point when multiplying B by the computed area."
    },
    {
      "id": "12-64",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "A loop's flux is given by Φ(t) = 0.020 + 0.50t (webers, with t in seconds) — increasing at a constant rate. Find the induced EMF.",
      "choices": [
        "0.020 V",
        "0.52 V",
        "Cannot be determined without a specific value of t",
        "0.50 V"
      ],
      "correct": 3,
      "explanation": "ε = 0.50 V. Since flux changes at a constant rate, the induced EMF is simply that rate — the coefficient of t in the equation, 0.50 Wb/s = 0.50 V — independent of t itself. Choice A (0.020 V) mistakes the constant term (0.020 Wb, the flux at t = 0) for the rate of change, when the rate is actually the coefficient multiplying t. Choice C (0.52 V) results from adding the constant term and the rate together (0.020 + 0.50) instead of using the rate alone. Choice D wrongly assumes a specific time is needed, when a CONSTANT rate of change means the EMF is the same at every instant, so no particular t is required."
    },
    {
      "id": "12-65",
      "topic": "12.4 Electromagnetic Induction",
      "stem": "A loop with resistance 5.0 Ω experiences an induced EMF of 2.0 V due to changing flux. Find the induced current in the loop.",
      "choices": [
        "2.5 A",
        "10 A",
        "0.10 A",
        "0.40 A"
      ],
      "correct": 3,
      "explanation": "I = 0.40 A. Using I = ε/R = 2.0/5.0 = 0.40 A — an induced EMF drives current exactly like a battery's EMF, so the Ohm's Law tools from Unit 11 carry over directly. Choice A (0.10 A) results from dividing by a larger resistance than given, such as using 20 Ω instead of 5.0 Ω. Choice C (2.5 A) inverts the ratio, computing R/ε instead of ε/R. Choice D (10 A) comes from multiplying ε and R together instead of dividing."
    },
    {
      "id": "12-66",
      "topic": "12.1 Magnetic Fields",
      "stem": "A bar magnet's field lines are sketched. At a point just outside the magnet, the field lines are sparse and point away from the magnet. Which pole is closest to that point?",
      "choices": [
        "Both poles are equally close",
        "Cannot be determined from field line direction alone",
        "North pole",
        "South pole"
      ],
      "correct": 2,
      "explanation": "North pole. Field lines run from a magnet's north pole to its south pole outside the magnet, so lines pointing AWAY from the magnet at a nearby point are leaving that point on their way outward — meaning they originate at a nearby north pole. Choice B (south pole) reverses the field-line convention: lines point TOWARD a south pole, not away from it, so this would only fit if the lines pointed inward instead. Choice C wrongly claims the poles are indistinguishable here, when the outward direction of the lines specifically identifies the nearer pole as north. Choice D understates what the information gives — while low line density alone (sparseness) wouldn't pin down a pole, the DIRECTION of the lines (away vs. toward) is exactly the cue that does identify it, so the pole can in fact be determined."
    }
  ],
  "13": [
    {
      "id": "13-1",
      "topic": "13.1 Reflection",
      "stem": "A ray of light strikes a flat mirror at an angle of 35° from the normal. Find the angle of reflection.",
      "choices": [
        "55°",
        "17.5°",
        "35°",
        "70°"
      ],
      "correct": 2,
      "explanation": "35°. The law of reflection states θᵢ = θᵣ, both measured from the normal, so the reflection angle simply equals the given 35° — no further calculation needed. 17.5° comes from mistakenly halving the incidence angle; 55° is the complement (90° − 35°), as if the angle had been measured from the mirror surface instead of the normal; 70° doubles the incidence angle, confusing it with the total angular deflection between the incoming and outgoing rays."
    },
    {
      "id": "13-2",
      "topic": "13.1 Reflection",
      "stem": "A ray strikes a mirror making a 20° angle with the mirror SURFACE (not the normal). Find the angle of incidence, measured from the normal.",
      "choices": [
        "20°",
        "90°",
        "45°",
        "70°"
      ],
      "correct": 3,
      "explanation": "70°. Since the mirror surface and its normal are perpendicular, an angle from the surface and the corresponding angle from the normal always sum to 90°: 90° − 20° = 70°. 20° comes from using the surface angle directly as the incidence angle, without converting to the normal reference; 45° assumes the surface and normal angles must split the difference evenly; 90° effectively treats the ray as striking along the normal itself, ignoring the given 20° entirely. Always confirm which reference line an angle is measured from before applying the law of reflection."
    },
    {
      "id": "13-3",
      "topic": "13.1 Reflection",
      "stem": "An object stands 2.0 m in front of a plane mirror. Find the distance between the object and its image.",
      "choices": [
        "8.0 m",
        "4.0 m",
        "1.0 m",
        "2.0 m"
      ],
      "correct": 1,
      "explanation": "4.0 m. A plane mirror's image forms exactly as far behind the mirror as the object is in front (2.0 m behind), so the total object-to-image span is 2.0 + 2.0 = 4.0 m. 1.0 m mistakenly halves the object distance; 2.0 m just repeats the object distance and forgets to add the image's distance behind the mirror; 8.0 m doubles the correct answer, as if the image sat twice as far behind the mirror as the object is in front."
    },
    {
      "id": "13-4",
      "topic": "13.1 Reflection",
      "stem": "Describe the image formed by a plane (flat) mirror, for any object distance.",
      "choices": [
        "Real, upright, reduced",
        "Virtual, inverted, magnified",
        "Virtual, upright, same size",
        "Real, inverted, magnified"
      ],
      "correct": 2,
      "explanation": "Virtual, upright, same size — always, for any object distance, with no calculation needed. 'Real, inverted, magnified' describes a curved (concave) mirror's image for an object between f and 2f, not a flat mirror. 'Real, upright, reduced' is not a combination any mirror can actually produce — real images are always inverted. 'Virtual, inverted, magnified' is likewise physically impossible — virtual images are always upright, never inverted."
    },
    {
      "id": "13-5",
      "topic": "13.1 Reflection",
      "stretch": true,
      "stem": "Two mirrors are placed perpendicular to each other, forming a 90° corner. A ray of light enters and reflects off both mirrors in sequence. Compare the ray's final direction to its original direction.",
      "choices": [
        "It exits perpendicular to its original direction.",
        "It exits parallel to its original direction, but reversed 180° in sense.",
        "It exits along the same exact path it entered.",
        "The final direction depends entirely on the initial angle of incidence."
      ],
      "correct": 1,
      "explanation": "It exits parallel to the original ray, but reversed in sense, regardless of entry angle — the working principle of a corner reflector. Tracing the two sequential 90°-mirror bounces shows the angular effects always cancel to a clean 180° reversal. 'Perpendicular to its original direction' would only happen for a single mirror bounce, not two in sequence. 'Along the same exact path' describes normal (0°) incidence on a single mirror, not this corner geometry. 'Depends entirely on the initial angle' is the tempting assumption for a two-bounce problem, but the whole point of a right-angle corner reflector is that the geometry cancels the angle dependence out."
    },
    {
      "id": "13-6",
      "topic": "13.1 Reflection",
      "stretch": true,
      "stem": "A flat mirror is rotated by 10° about an axis in its own surface. For a fixed incoming ray, how much does the reflected ray's direction change?",
      "choices": [
        "It doesn't change, since the law of reflection is unaffected by mirror orientation.",
        "20°",
        "10°",
        "5°"
      ],
      "correct": 1,
      "explanation": "20° — twice the mirror's rotation, not the same amount. Rotating a mirror by θ shifts its normal by θ, which shifts BOTH the incidence and reflection angles by θ relative to the original setup, doubling the total deflection to 2θ. '10°' assumes the reflected ray shifts by the same angle the mirror rotates, missing that doubling. '5°' halves the rotation instead of doubling it. The claim that the reflected ray 'doesn't change' misapplies the law of reflection — the law itself is unaffected by orientation, but the normal direction it's measured from absolutely does move when the mirror rotates."
    },
    {
      "id": "13-7",
      "topic": "13.1 Reflection",
      "stem": "A ray of light travels exactly along the normal direction (perpendicular) to a flat mirror. Find the angle of incidence, and describe the reflected ray's path.",
      "choices": [
        "0°; the ray reflects straight back along its own path.",
        "90°; the ray reflects along the mirror's surface.",
        "45°; the ray reflects at a right angle to its original path.",
        "0°; the ray passes through the mirror without reflecting."
      ],
      "correct": 0,
      "explanation": "0° angle of incidence; the ray reflects straight back along its own path, since a ray traveling along the normal has no angle relative to that reference line. '90°; reflects along the surface' confuses the normal-referenced angle (0°) with the surface-referenced angle (which would be 90° here) — wrong reference line. '45°; reflects at a right angle' invents an unrelated deflection with no basis in this single-mirror, normal-incidence geometry. '0°; passes through without reflecting' gets the angle right but forgets that a mirror reflects light rather than transmitting it — that behavior belongs to a lens or window, not a mirror."
    },
    {
      "id": "13-8",
      "topic": "13.1 Reflection",
      "stem": "Explain why we see a clear reflection in a smooth mirror but not in a rough, matte wall, even though both surfaces obey the law of reflection.",
      "choices": [
        "The law of reflection only applies to mirrors, not ordinary surfaces.",
        "Rough surfaces reflect light at a different angle than the law of reflection predicts.",
        "The wall absorbs all incoming light instead of reflecting it.",
        "Smooth surfaces cause specular reflection; rough surfaces cause diffuse reflection."
      ],
      "correct": 3,
      "explanation": "Specular vs. diffuse reflection. A smooth mirror reflects parallel incoming rays as parallel outgoing rays (specular reflection), preserving a coherent image. A rough wall obeys the law of reflection at every microscopic point too, but those countless points are tilted every which way, scattering the reflected light in all directions (diffuse reflection) and destroying any organized image — no law of physics is violated. 'The wall absorbs all incoming light' is wrong: matte surfaces still reflect plenty of light, just diffusely rather than specularly (that's how we see them at all). 'The law only applies to mirrors' and 'rough surfaces reflect at a different angle' both incorrectly claim the law of reflection itself fails for non-mirror surfaces — it holds at every point, smooth or rough; only the organization of the reflected rays differs."
    },
    {
      "id": "13-9",
      "topic": "13.1 Reflection",
      "stretch": true,
      "stem": "A person stands in front of a plane mirror and walks toward it at 1.0 m/s. Find the rate at which the gap between the person and their image is closing.",
      "choices": [
        "0.5 m/s",
        "2.0 m/s",
        "4.0 m/s",
        "1.0 m/s"
      ],
      "correct": 1,
      "explanation": "2.0 m/s. The image sits as far behind the mirror as the person is in front, so as the person approaches at 1.0 m/s, their image also approaches the mirror at 1.0 m/s from the far side — the two close the gap between themselves at a combined 2.0 m/s. '1.0 m/s' only counts the person's own motion and forgets the image is approaching too. '0.5 m/s' incorrectly treats the image as stationary and halves the person's speed instead of doubling it. '4.0 m/s' doubles the correct combined rate, as if both the person's and image's speeds needed doubling rather than just summing."
    },
    {
      "id": "13-10",
      "topic": "13.1 Reflection",
      "stem": "A full-length plane mirror lets a person see their entire body, from feet to head. How tall does the mirror need to be, relative to the person's height?",
      "choices": [
        "Exactly the person's full height.",
        "It depends entirely on how far the person stands from the mirror.",
        "Exactly half the person's height, positioned appropriately.",
        "At least twice the person's height."
      ],
      "correct": 2,
      "explanation": "Half the person's height, positioned with its center at the midpoint between the eyes and the floor — and this holds regardless of viewing distance. 'Exactly the person's full height' is the intuitive but incorrect guess; tracing the reflection geometry for rays from the feet and the top of the head shows only half the height is actually needed. 'At least twice the person's height' overcorrects in the opposite direction. 'It depends entirely on distance' seems reasonable since farther objects usually look smaller, but for a plane mirror the required height is a fixed geometric fraction that cancels the viewing distance out entirely."
    },
    {
      "id": "13-11",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "A concave mirror has focal length 15 cm. An object is placed 40 cm away. Find the image distance.",
      "choices": [
        "60 cm",
        "30 cm",
        "12 cm",
        "24 cm"
      ],
      "correct": 3,
      "explanation": "sᵢ = 24 cm. Using 1/sₒ + 1/sᵢ = 1/f: 1/40 + 1/sᵢ = 1/15, so 1/sᵢ = 1/15 − 1/40 = 8/120 − 3/120 = 5/120, giving sᵢ = 24 cm (real image, in front of the mirror). '12 cm' mistakenly reports the focal length itself as the image distance. '30 cm' and '60 cm' both come from mishandling the reciprocal arithmetic — for instance, combining the raw distances (40 and 15) directly instead of properly combining their reciprocals — rather than solving 1/sᵢ correctly."
    },
    {
      "id": "13-12",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "Find the magnification for the mirror setup in the previous question (s<sub>o</sub> = 40 cm, s<sub>i</sub> = 24 cm).",
      "choices": [
        "1.67",
        "−0.6",
        "−1.67",
        "0.6"
      ],
      "correct": 1,
      "explanation": "M = −0.6. Using M = −sᵢ/sₒ = −24/40 = −0.6; the negative sign means inverted, and a magnitude below 1 means reduced. '−1.67' inverts the ratio (sₒ/sᵢ instead of sᵢ/sₒ). '0.6' has the right magnitude but drops the negative sign, missing that this image is inverted. '1.67' combines both errors — the inverted ratio and the missing sign."
    },
    {
      "id": "13-13",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "A concave mirror has focal length 20 cm. An object is placed exactly at 20 cm (at the focal point). Find the image distance.",
      "choices": [
        "20 cm",
        "0 cm",
        "Undefined — no image forms",
        "40 cm"
      ],
      "correct": 2,
      "explanation": "Undefined — no image forms. Plugging in: 1/20 + 1/sᵢ = 1/20 gives 1/sᵢ = 0, so sᵢ is infinite — reflected rays emerge parallel and never converge, which is exactly why the focal point is such a special location. '0 cm' wrongly assumes the image forms right at the mirror's surface. '20 cm' mistakes the image distance for the focal length itself, since the object happens to sit at f. '40 cm' confuses this with the 2f (center-of-curvature) case, doubling the focal length instead of recognizing the equation breaks down here."
    },
    {
      "id": "13-14",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "A concave mirror has focal length 12 cm. An object is placed 8.0 cm away (inside the focal length). Find the image distance.",
      "choices": [
        "−8 cm",
        "8 cm",
        "24 cm",
        "−24 cm"
      ],
      "correct": 3,
      "explanation": "sᵢ = −24 cm. Using 1/8.0 + 1/sᵢ = 1/12: 1/sᵢ = 1/12 − 1/8.0 = 2/24 − 3/24 = −1/24, giving sᵢ = −24 cm — negative, so virtual, behind the mirror. '−8 cm' mistakenly reports the (negated) object distance instead of solving the mirror equation. '24 cm' has the correct magnitude but drops the negative sign, missing that the object sits inside f and must produce a virtual image. '8 cm' repeats the object distance outright, with neither the correct magnitude nor sign."
    },
    {
      "id": "13-15",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "Find the magnification for the mirror in the previous question (s<sub>o</sub> = 8.0 cm, s<sub>i</sub> = −24 cm).",
      "choices": [
        "0.33",
        "−3.0",
        "3.0",
        "−0.33"
      ],
      "correct": 2,
      "explanation": "M = 3.0. Using M = −sᵢ/sₒ = −(−24)/8.0 = 3.0 — positive means upright, magnitude above 1 means magnified. '−3.0' has the right magnitude but the wrong sign, missing that the two negatives (the formula's minus sign and sᵢ's negative value) cancel to give a positive result. '0.33' inverts the ratio (sₒ/sᵢ instead of sᵢ/sₒ). '−0.33' combines both the inverted ratio and the sign error."
    },
    {
      "id": "13-16",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "An object is placed exactly at the center of curvature (2f) of a concave mirror. Describe the resulting image.",
      "choices": [
        "Virtual, upright, magnified",
        "Real, inverted, same size",
        "Real, upright, reduced",
        "No image forms at this distance"
      ],
      "correct": 1,
      "explanation": "Real, inverted, same size (M = −1 exactly) — a special boundary case worth memorizing on its own. At sₒ = 2f, the mirror equation always gives sᵢ = 2f as well, so |M| = sᵢ/sₒ = 1. 'Virtual, upright, magnified' describes the very different object-inside-f case (like a dentist's mirror), not this one. 'Real, upright, reduced' isn't a combination any mirror can produce — real images are always inverted, never upright. 'No image forms at this distance' confuses the center-of-curvature (2f) case with the true no-image special case, which happens only when the object sits exactly at f."
    },
    {
      "id": "13-17",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "A convex mirror has focal length −10 cm. An object is placed 15 cm away. Find the image distance.",
      "choices": [
        "−6.0 cm",
        "−25 cm",
        "6.0 cm",
        "25 cm"
      ],
      "correct": 0,
      "explanation": "sᵢ = −6.0 cm. Using 1/15 + 1/sᵢ = 1/(−10): 1/sᵢ = −1/10 − 1/15 = −3/30 − 2/30 = −5/30, giving sᵢ = −6.0 cm — virtual, as always for a convex mirror. '−25 cm' comes from mishandling the reciprocal combination. '6.0 cm' has the right magnitude but drops the negative sign, forgetting that a convex mirror can never produce a real image. '25 cm' compounds both the magnitude and sign errors."
    },
    {
      "id": "13-18",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "Explain why a convex mirror ALWAYS produces a virtual image, regardless of where the object is placed.",
      "choices": [
        "Because the object distance is always greater than f for a convex mirror.",
        "This is simply a rule to memorize, with no underlying mathematical reason.",
        "Because convex mirrors don't actually reflect light.",
        "Because f is always negative for a convex mirror, so 1/s<sub>i</sub> always comes out negative."
      ],
      "correct": 3,
      "explanation": "It's guaranteed by the mirror equation itself. Since f is always negative for a convex mirror, 1/sᵢ = 1/f − 1/sₒ is negative minus a positive quantity — always negative, for any positive object distance — and a negative sᵢ always means virtual. This matches the physical picture: convex mirrors spread reflected rays apart rather than converging them to a real point. 'Convex mirrors don't actually reflect light' is simply false — they reflect just as much light as any mirror, just divergently. 'The object distance is always greater than f' is beside the point: the virtual-image guarantee holds for every object distance, not because of any particular so-vs-f relationship. 'This is simply a rule to memorize' dismisses a result that actually follows directly and unavoidably from the mirror equation."
    },
    {
      "id": "13-19",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "A concave mirror produces a real image with magnification −2.0 for an object placed 18 cm away. Find the mirror's focal length.",
      "choices": [
        "24 cm",
        "9.0 cm",
        "6.0 cm",
        "12 cm"
      ],
      "correct": 3,
      "explanation": "f = 12 cm. Since M = −sᵢ/sₒ = −2.0, sᵢ = 2.0 × 18 = 36 cm. Then 1/18 + 1/36 = 2/36 + 1/36 = 3/36 = 1/12, giving f = 12 cm. '6.0 cm' halves the correct focal length. '9.0 cm' comes from a slip in combining the reciprocals of 18 and 36. '24 cm' doubles the correct answer, confusing the focal length with another quantity in the problem (24 cm is exactly double f, but that's not what the problem asks for)."
    },
    {
      "id": "13-20",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "For a concave mirror, a ray traveling parallel to the principal axis reflects through which point?",
      "choices": [
        "The center of curvature",
        "The focal point",
        "It doesn't pass through any special point",
        "The vertex of the mirror"
      ],
      "correct": 1,
      "explanation": "The focal point. A parallel ray always reflects through f — the defining property of a focusing mirror, and the first of the three principal rays used for hand-tracing images. 'The center of curvature' swaps this rule with the different ray-through-center-of-curvature rule (which reflects straight back, not through f). 'The vertex of the mirror' names the mirror's own central point, which has no special role in this particular ray rule. 'It doesn't pass through any special point' incorrectly denies the entire basis of ray-tracing for curved mirrors."
    },
    {
      "id": "13-21",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "For a concave mirror, a ray traveling through the center of curvature reflects in which direction?",
      "choices": [
        "Straight back along its own incoming path",
        "Perpendicular to its incoming path",
        "Through the focal point",
        "Parallel to the principal axis"
      ],
      "correct": 0,
      "explanation": "Straight back along its own path. A ray through the center of curvature strikes the mirror's surface exactly perpendicular to that curved surface (0° incidence), so by the law of reflection it retraces its own path exactly. 'Parallel to the principal axis' is the reverse of a DIFFERENT principal ray (the one entering parallel to the axis, which then reflects through f). 'Through the focal point' names the rule for yet another principal ray, not this one. 'Perpendicular to its incoming path' invents a 90° deflection that has no basis in this geometry."
    },
    {
      "id": "13-22",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "As an object moves from very far away, toward 2f, then between f and 2f, then approaching f (from outside), how does the size of its real image change?",
      "choices": [
        "The image grows steadily larger throughout, becoming very large near f.",
        "The image size stays constant regardless of object position.",
        "The image shrinks steadily smaller throughout the whole approach.",
        "The image alternates repeatedly between growing and shrinking as the object moves."
      ],
      "correct": 0,
      "explanation": "The image grows steadily larger throughout, becoming very large as the object nears f. Far away, the image is tiny; at exactly 2f, it matches the object's size; between f and 2f, it's magnified; and right at f, it grows without bound (where no proper image forms at all). 'The image shrinks steadily' has the trend exactly backwards — image size increases, not decreases, as the object approaches f. 'The image size stays constant' ignores the mirror equation's strong dependence on object distance. 'The image alternates between growing and shrinking' invents a back-and-forth pattern that doesn't match the single, steadily increasing trend the equation actually produces."
    },
    {
      "id": "13-23",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "A convex mirror has focal length −25 cm. An object is placed very far away (approaching infinity). Find the image distance.",
      "choices": [
        "25 cm",
        "−25 cm",
        "−12.5 cm",
        "12.5 cm"
      ],
      "correct": 1,
      "explanation": "sᵢ = −25 cm. As sₒ → ∞, 1/sₒ → 0, leaving 1/sᵢ = 1/f directly — the image forms right at the focal point, a limiting case that applies to any mirror or lens. '25 cm' has the right magnitude but drops the negative sign, forgetting a convex mirror's image must be virtual. '−12.5 cm' keeps the correct sign but mistakenly halves the focal length. '12.5 cm' combines both errors — halving the magnitude and dropping the sign."
    },
    {
      "id": "13-24",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "For a concave mirror producing a real image, on which side of the mirror does that image form — the same side as the object, or the opposite side?",
      "choices": [
        "Neither — real images always form exactly at the mirror's surface",
        "It depends on the object's distance from the mirror",
        "The same side as the object",
        "The opposite side from the object"
      ],
      "correct": 2,
      "explanation": "The same side as the object. Light physically reflects back off a mirror and converges in front of it, the same side the object sits on. 'The opposite side' describes lenses instead, where light passes through and a real image forms on the far side — the key sign-convention difference between mirrors and lenses. 'Neither — images form exactly at the surface' is never true; a real image always forms some distance away from the mirror, not right at it. 'It depends on the object's distance' is wrong — the side is fixed for every real-image case with a concave mirror, regardless of how far the object sits."
    },
    {
      "id": "13-25",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "An object is placed 50 cm from a concave mirror, producing a real image at 25 cm. Find the mirror's focal length.",
      "choices": [
        "16.7 cm",
        "37.5 cm",
        "12.5 cm",
        "25 cm"
      ],
      "correct": 0,
      "explanation": "f ≈ 16.7 cm. Using 1/50 + 1/25 = 1/f: 1/50 + 2/50 = 3/50, so f = 50/3 ≈ 16.7 cm. '12.5 cm' comes from a slip in combining the two reciprocals. '25 cm' mistakenly reports the image distance itself as the focal length. '37.5 cm' looks like an averaging-style error rather than a correct reciprocal combination of 50 and 25."
    },
    {
      "id": "13-26",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "A concave mirror forms a real, inverted image exactly the same size as the object. Find the object's distance from the mirror, in terms of f.",
      "choices": [
        "s<sub>o</sub> = 4f",
        "s<sub>o</sub> = 2f",
        "s<sub>o</sub> = f/2",
        "s<sub>o</sub> = f"
      ],
      "correct": 1,
      "explanation": "sₒ = 2f. This is the reverse of the 'object at 2f gives unity magnification' fact — a real, inverted, same-size image only occurs at the mirror's center of curvature. 'f/2' halves the correct distance. 'f' confuses this with the entirely different focal-point case, where no image forms at all rather than a same-size one. '4f' doubles the correct answer, well beyond where the mirror equation actually places this condition."
    },
    {
      "id": "13-27",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "What is the key difference in ray-tracing between a concave and a convex mirror?",
      "choices": [
        "Concave mirrors don't have a focal point at all.",
        "Convex mirrors require four principal rays instead of three.",
        "There is no meaningful difference between the two mirror types.",
        "Concave mirrors converge rays to real points; convex mirrors only diverge them from virtual points."
      ],
      "correct": 3,
      "explanation": "Real vs. virtual reference points. A concave mirror's focal point and center of curvature are real locations in front of the mirror where rays genuinely converge. A convex mirror's equivalent points are virtual, behind the mirror — rays only appear to diverge from them, traced with dashed construction lines since no real light reaches back there. 'Concave mirrors don't have a focal point at all' is simply false — concave mirrors are defined by having a real, converging focal point. 'Convex mirrors require four principal rays' invents an extra ray; both mirror types use the same three principal rays, just with different (real vs. virtual) reference points. 'There is no meaningful difference' ignores exactly the real-vs-virtual distinction this question is testing."
    },
    {
      "id": "13-28",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "An object is placed 45 cm from a concave mirror with focal length 15 cm. Find the image distance and classify the image.",
      "choices": [
        "45 cm; real, inverted, same size",
        "22.5 cm; real, inverted, reduced",
        "22.5 cm; virtual, upright, magnified",
        "11.25 cm; real, upright, reduced"
      ],
      "correct": 1,
      "explanation": "22.5 cm; real, inverted, reduced. Using 1/45 + 1/sᵢ = 1/15: 1/sᵢ = 1/15 − 1/45 = 3/45 − 1/45 = 2/45, giving sᵢ = 22.5 cm (real). M = −22.5/45 = −0.5 (inverted, reduced) — consistent with the object sitting beyond 2f (30 cm). '22.5 cm; virtual, upright, magnified' gets the correct distance but swaps in the image type from the very different object-inside-f case. '45 cm; real, inverted, same size' mistakes the object distance itself for the image distance and wrongly assumes M = −1, which only happens when sₒ = 2f, not 45 cm here. '11.25 cm; real, upright, reduced' halves the correct image distance and, separately, wrongly claims upright — a real image from a concave mirror is always inverted."
    },
    {
      "id": "13-29",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "A dentist's mirror is a small concave mirror used to see a magnified, upright image of a tooth. Based on this application, is the tooth positioned inside or outside the mirror's focal length?",
      "choices": [
        "Outside the focal length but inside 2f",
        "Exactly at 2f, the mirror's center of curvature",
        "Inside the focal length (s<sub>o</sub> < f)",
        "Beyond 2f, far from the mirror"
      ],
      "correct": 2,
      "explanation": "Inside the focal length. This is the one concave-mirror configuration — object closer than the focal point — that produces a magnified, upright, VIRTUAL image, matching how a dentist's or magnifying mirror is actually used. 'Outside the focal length but inside 2f' instead produces a real, magnified, but inverted image — useless for seeing an upright view. 'Exactly at 2f' produces a real, same-size, inverted image, not a magnified upright one. 'Beyond 2f' produces a small, real, inverted image — the opposite of what a dentist's mirror shows."
    },
    {
      "id": "13-30",
      "topic": "13.2 Images Formed by Mirrors",
      "stem": "A concave mirror (f = +20 cm) and a convex mirror (f = −20 cm) each have an object placed 40 cm away. Compare which mirror produces the larger-magnitude image.",
      "choices": [
        "This cannot be determined without more information.",
        "The convex mirror produces the larger image.",
        "The concave mirror produces the larger image.",
        "They produce equal-magnitude images."
      ],
      "correct": 2,
      "explanation": "The concave mirror produces the larger image. For the concave mirror: 1/40 + 1/sᵢ = 1/20 gives sᵢ = 40 cm, so |M| = 40/40 = 1.0. For the convex mirror: 1/40 + 1/sᵢ = 1/(−20) gives sᵢ ≈ −13.3 cm, so |M| ≈ 13.3/40 ≈ 0.33 — roughly three times smaller. 'The convex mirror produces the larger image' has the comparison backwards. 'They produce equal-magnitude images' wrongly assumes that matching |f| values must give matching image sizes. 'This cannot be determined' is wrong — both mirror equations are fully solvable with the given information."
    },
    {
      "id": "13-31",
      "topic": "13.3 Refraction",
      "stem": "Light travels from air (n = 1.00) into a material with n = 1.4 at an incidence angle of 50°. Find the refraction angle.",
      "choices": [
        "71°",
        "33°",
        "50°",
        "22°"
      ],
      "correct": 1,
      "explanation": "θ₂ ≈ 33°. Using Snell's Law: (1.00)(sin 50°) = (1.4)(sinθ₂), so sinθ₂ = 0.766/1.4 ≈ 0.547, giving θ₂ ≈ 33° — bent toward the normal, since the ray enters a denser material. '22°' comes from a slip in the sine arithmetic. '50°' simply repeats the incidence angle, as if no bending occurred at all. '71°' bends the ray the wrong way, away from the normal, as though it were exiting into a less dense medium instead of entering a denser one."
    },
    {
      "id": "13-32",
      "topic": "13.3 Refraction",
      "stem": "Light travels from water (n = 1.33) into air (n = 1.00) at an incidence angle of 25°. Find the refraction angle.",
      "choices": [
        "48°",
        "25°",
        "19°",
        "34°"
      ],
      "correct": 3,
      "explanation": "θ₂ ≈ 34°. Using Snell's Law: (1.33)(sin 25°) = (1.00)(sinθ₂), so sinθ₂ = 1.33(0.4226) ≈ 0.562, giving θ₂ ≈ 34° — bent away from the normal, exiting into less-dense air. '19°' comes from a slip in the sine arithmetic. '25°' just restates the incidence angle, as if no bending occurred. '48°' overshoots the correct refraction angle, bending more than the actual index ratio allows."
    },
    {
      "id": "13-33",
      "topic": "13.3 Refraction",
      "stem": "Light passes from a medium with n = 1.2 into a medium with n = 1.6. Does it bend toward or away from the normal?",
      "choices": [
        "Away from the normal",
        "It doesn't bend at all",
        "Cannot be determined without the incidence angle",
        "Toward the normal"
      ],
      "correct": 3,
      "explanation": "Toward the normal. Going from a less dense medium (n = 1.2) into a more dense one (n = 1.6) always bends light toward the normal, regardless of the specific incidence angle. 'Away from the normal' has the direction exactly backwards for this less-to-more-dense transition. 'It doesn't bend at all' ignores the index mismatch entirely — any change in n causes bending (except at 0° incidence). 'Cannot be determined without the incidence angle' is wrong: the DIRECTION of bending depends only on which way the density is changing, not on the specific angle (though the exact size of the bend does)."
    },
    {
      "id": "13-34",
      "topic": "13.3 Refraction",
      "stem": "Find the speed of light in a material with index of refraction 2.0.",
      "choices": [
        "3.0 × 10⁸ m/s",
        "6.0 × 10⁸ m/s",
        "1.5 × 10⁹ m/s",
        "1.5 × 10⁸ m/s"
      ],
      "correct": 3,
      "explanation": "v = 1.5×10⁸ m/s. Using n = c/v, solve for v = c/n = (3.0×10⁸)/2.0 = 1.5×10⁸ m/s. '3.0×10⁸ m/s' just reports c itself, forgetting to divide by n at all. '6.0×10⁸ m/s' multiplies by n instead of dividing, giving a speed faster than light in vacuum — physically impossible. '1.5×10⁹ m/s' has the right digits but an order-of-magnitude slip in the exponent."
    },
    {
      "id": "13-35",
      "topic": "13.3 Refraction",
      "stem": "Light travels through a material at 2.0×10⁸ m/s. Find the material's index of refraction.",
      "choices": [
        "6.0",
        "1.5",
        "2.0",
        "0.67"
      ],
      "correct": 1,
      "explanation": "n = 1.5. Using n = c/v = (3.0×10⁸)/(2.0×10⁸) = 1.5. '0.67' inverts the ratio (v/c instead of c/v) — that would actually be 1/n, not n itself. '2.0' comes from misreading the given speed as the index, or mixing up which value is c and which is v. '6.0' multiplies the coefficients instead of dividing, treating 3.0×2.0 as the answer."
    },
    {
      "id": "13-36",
      "topic": "13.3 Refraction",
      "stem": "Find the critical angle for light traveling from a medium with n = 1.6 into a medium with n = 1.2.",
      "choices": [
        "48.6°",
        "41.8°",
        "53.1°",
        "36.9°"
      ],
      "correct": 0,
      "explanation": "θ_c ≈ 48.6°. Using sinθ_c = n₂/n₁ = 1.2/1.6 = 0.75, so θ_c = sin⁻¹(0.75) ≈ 48.6°. '36.9°' comes from using the inverse ratio n₁/n₂ instead of n₂/n₁. '41.8°' is the critical angle for a different index ratio entirely (like a glass-air boundary with n = 1.5), mistakenly carried over to this problem's numbers. '53.1°' is the complement of the correct angle (90° − 36.9°), suggesting a mixed-up reference line."
    },
    {
      "id": "13-37",
      "topic": "13.3 Refraction",
      "stem": "Can total internal reflection occur for light traveling from air (n = 1.00) into glass (n = 1.5)?",
      "choices": [
        "Yes, but only for incidence angles less than 45°, per Snell's Law.",
        "It depends on the specific wavelength of light used.",
        "Yes, this can occur at any angle of incidence beyond a specific critical angle for this pair of media.",
        "No — TIR requires going from a denser into a less-dense medium; this is the reverse direction."
      ],
      "correct": 3,
      "explanation": "No, it's impossible in this direction. Total internal reflection requires n₁ > n₂ (going from denser into less dense). Here, air (less dense) enters glass (more dense) — the reverse — so no critical angle even exists, and TIR cannot happen no matter how large the incidence angle is. 'Yes, at any angle beyond a specific critical angle' wrongly assumes a critical angle exists here at all; it only exists going the other way, glass into air. 'Yes, but only for angles less than 45°' invents an unrelated cutoff angle with no basis in this index pair. 'It depends on the specific wavelength' misattributes the requirement — TIR's possibility depends on the direction of the index change, not on wavelength."
    },
    {
      "id": "13-38",
      "topic": "13.3 Refraction",
      "stem": "Light inside glass (n = 1.5, critical angle ≈ 41.8° for a glass-air boundary) strikes that boundary at 45° from inside the glass. Describe what happens.",
      "choices": [
        "The light refracts out into the air as normal, just at a large angle.",
        "Total internal reflection occurs — 100% of the light reflects back into the glass.",
        "The light is completely absorbed at the boundary.",
        "The light splits evenly between refracting out and reflecting back."
      ],
      "correct": 1,
      "explanation": "Total internal reflection. Since 45° exceeds the critical angle of 41.8° for this glass-air boundary, no refracted ray can exist — all the light reflects back into the glass. 'The light refracts out into the air as normal' ignores that the angle has exceeded the critical angle, past which refraction becomes impossible. 'The light splits evenly between refracting and reflecting' describes ordinary partial reflection below the critical angle, not what happens once TIR kicks in. 'The light is completely absorbed' is wrong — TIR means the light is entirely reflected, not absorbed; none of its energy is lost at the boundary."
    },
    {
      "id": "13-39",
      "topic": "13.3 Refraction",
      "stem": "A ray of light enters a rectangular glass block through one face (from air) and exits through the opposite, parallel face (back into air). Compare its final direction to its original direction before entering.",
      "choices": [
        "The exiting ray is perpendicular to the original ray.",
        "The exiting ray continues at the same angle it had inside the glass.",
        "The exiting ray is parallel to the original ray, though laterally shifted.",
        "The exiting ray's direction depends on the glass's thickness."
      ],
      "correct": 2,
      "explanation": "Parallel to the original ray, but laterally displaced. The entry refraction (air to glass) and exit refraction (glass back to air) involve the same pair of media in reverse, so their angular effects exactly cancel — the ray emerges in its original direction, just shifted sideways by an amount depending on the glass's thickness. 'Perpendicular to the original ray' invents a 90° change with no basis in this geometry. 'Continues at the same angle it had inside the glass' confuses the ray's angle while still inside the block with its final direction after exiting — those aren't the same. 'Depends on the glass's thickness' correctly identifies that thickness affects the SIDEWAYS SHIFT, but incorrectly extends that to the ray's final direction, which stays parallel regardless of thickness."
    },
    {
      "id": "13-40",
      "topic": "13.3 Refraction",
      "stem": "Light in medium 1 (n₁ = 1.8) strikes a boundary with medium 2 at exactly the critical angle of 35°. Find n₂.",
      "choices": [
        "1.03",
        "3.14",
        "1.8",
        "0.57"
      ],
      "correct": 0,
      "explanation": "n₂ ≈ 1.03. At the critical angle, sinθ_c = n₂/n₁, so n₂ = n₁sinθ_c = (1.8)(sin 35°) = (1.8)(0.574) ≈ 1.03. '0.57' comes from inverting the relationship (effectively computing n₁/n₂ instead of solving for n₂). '1.8' just restates n₁ directly, forgetting to multiply by sin 35° at all. '3.14' is an unrelated value, suggesting a stray mix-up with π rather than the sine of 35°."
    },
    {
      "id": "13-41",
      "topic": "13.3 Refraction",
      "stem": "Rank the speed of light in air (n = 1.0), water (n = 1.33), and glass (n = 1.5), from fastest to slowest.",
      "choices": [
        "All three are equal, since c is a universal constant",
        "Glass > water > air",
        "Air > water > glass",
        "Water > air > glass"
      ],
      "correct": 2,
      "explanation": "Air > water > glass. Since v = c/n, speed and index of refraction are inversely related — the smallest n (air) gives the fastest light, and the largest n (glass) gives the slowest. 'Glass > water > air' has the entire ranking exactly backwards. 'Water > air > glass' correctly identifies glass as slowest but swaps the relative order of water and air, since air actually has the smaller index and thus the faster speed. 'All three are equal, since c is a universal constant' confuses c (the speed of light in VACUUM specifically) with the speed of light inside a material, which is always slower and different for each medium."
    },
    {
      "id": "13-42",
      "topic": "13.3 Refraction",
      "stem": "A swimming pool appears shallower than it actually is when viewed from above the water's surface. Explain this using refraction.",
      "choices": [
        "Water absorbs some light, making the bottom appear closer.",
        "This is simply an optical illusion, unrelated to any refraction effect.",
        "Light from the pool bottom refracts away from the normal exiting into air, making the bottom look closer than it is.",
        "The pool bottom is actually reflecting a virtual image of itself."
      ],
      "correct": 2,
      "explanation": "Refraction plus our brain's assumption of straight-line light travel. Light from the pool bottom refracts away from the normal as it exits water into air; since our visual system assumes light travels in perfectly straight lines, tracing the refracted ray backward (rather than its actual bent path) places the apparent source closer to the surface than the real bottom. 'Water absorbs some light, making the bottom appear closer' misattributes the effect to absorption, which dims the image but has nothing to do with its apparent depth. 'The pool bottom is reflecting a virtual image of itself' invents an unrelated reflection mechanism instead of refraction. 'This is an optical illusion unrelated to refraction' denies the very refraction effect the question is testing."
    },
    {
      "id": "13-43",
      "topic": "13.3 Refraction",
      "stem": "Find the angle of incidence that produces a 20° refraction angle when light travels from air (n = 1.00) into a medium with n = 1.6.",
      "choices": [
        "33.2°",
        "12.5°",
        "20°",
        "54.6°"
      ],
      "correct": 0,
      "explanation": "θ₁ ≈ 33.2°. Using Snell's Law: (1.00)sinθ₁ = (1.6)(sin 20°) = (1.6)(0.342) ≈ 0.547, giving θ₁ = sin⁻¹(0.547) ≈ 33.2°. '12.5°' comes from a slip in the inverse-sine step. '20°' just reports the given refraction angle back unchanged, as if solving 'backward' weren't necessary. '54.6°' overshoots, suggesting the indices were swapped (n₁ and n₂ reversed) before solving."
    },
    {
      "id": "13-44",
      "topic": "13.3 Refraction",
      "stem": "Light travels fastest in Material A, slower in Material B, and slowest in Material C. Rank their indices of refraction.",
      "choices": [
        "n<sub>A</sub> < n<sub>B</sub> < n<sub>C</sub>",
        "n<sub>A</sub> = n<sub>B</sub> = n<sub>C</sub>",
        "n<sub>A</sub> > n<sub>B</sub> > n<sub>C</sub>",
        "Cannot be determined without exact speed values"
      ],
      "correct": 0,
      "explanation": "n_A < n_B < n_C. Speed and index of refraction are inversely related (n = c/v) — the material where light moves fastest (A) has the smallest n, and the slowest material (C) has the largest n. 'n_A > n_B > n_C' has the entire ranking backwards. 'n_A = n_B = n_C' ignores that different speeds necessarily mean different indices. 'Cannot be determined without exact speed values' is wrong — the inverse relationship between speed and index means the RANKING can be found from the speed ranking alone, without needing exact numbers."
    },
    {
      "id": "13-45",
      "topic": "13.3 Refraction",
      "stem": "Explain why the index of refraction n is always greater than or equal to 1 for any real material.",
      "choices": [
        "Because the human eye simply cannot perceive any n value less than 1.",
        "Because n is defined as always positive by convention, regardless of physics.",
        "Because light always slows down when passing through any boundary.",
        "Because no material lets light travel faster than c, so v ≤ c and n = c/v ≥ 1 always."
      ],
      "correct": 3,
      "explanation": "It follows directly from n = c/v combined with the fact that nothing travels faster than light in vacuum. Since v can never exceed c, the ratio c/v can never fall below 1 — n = 1 only in true vacuum, and n > 1 for every real material. 'Because n is defined as always positive by convention' wrongly treats this as an arbitrary labeling choice rather than a result forced by physics. 'Because light always slows down when passing through any boundary' overstates the reasoning — the real constraint is that v can never exceed c, not simply a general claim about slowing at boundaries. 'Because the human eye cannot perceive n values less than 1' is an irrelevant appeal to perception; n ≥ 1 is a physical fact independent of anyone observing it."
    },
    {
      "id": "13-46",
      "topic": "13.3 Refraction",
      "stretch": true,
      "stem": "Light enters a glass prism (n = 1.5) from air, striking the first face at 30° incidence. It then travels inside the glass and strikes a second face at 50°, attempting to exit back into air. Find the refraction angle at the first face, and determine whether total internal reflection occurs at the second face.",
      "choices": [
        "19.5° at the first face; yes, TIR occurs at the second face (50° exceeds the ≈41.8° critical angle).",
        "19.5° at the first face; no, the light refracts out normally at the second face.",
        "45° at the first face; yes, TIR occurs at the second face.",
        "30° at the first face (no bending); no TIR at the second face."
      ],
      "correct": 0,
      "explanation": "19.5° at the first face; TIR occurs at the second. First: sinθ₂ = (1.00/1.5)(sin 30°) = (0.667)(0.5) ≈ 0.333, giving θ₂ ≈ 19.5°. Second: the critical angle for a glass-to-air boundary with n = 1.5 is sin⁻¹(1.00/1.5) ≈ 41.8°; since the ray strikes this face at 50°, well beyond that critical angle, total internal reflection occurs and none of the light exits. The '19.5°... no TIR' choice gets the first-face refraction right but wrongly concludes no TIR, ignoring that 50° exceeds the 41.8° critical angle. The '45°... yes, TIR' choice gets the correct TIR conclusion but the wrong first-face angle — 45° doesn't come from applying Snell's Law to this geometry at all. 'No bending at the first face' incorrectly assumes light passes straight through without refracting on entering the glass, and, as a consequence, also wrongly denies TIR at the second face."
    },
    {
      "id": "13-47",
      "topic": "13.3 Refraction",
      "stem": "A student claims: 'The index of refraction of a material is exactly equal to the ratio of sin(incidence angle) to sin(refraction angle), when light enters that material from a vacuum.' Evaluate this claim.",
      "choices": [
        "True, but only for incidence angles less than 45°.",
        "False — index of refraction can only be measured using the critical angle.",
        "True — this follows directly from Snell's Law with n₁ = 1 for vacuum.",
        "False — this ratio instead gives the material's density, not its index of refraction."
      ],
      "correct": 2,
      "explanation": "True. Snell's Law with n₁ = 1 (vacuum) gives sinθ₁ = n₂sinθ₂, which rearranges directly to n₂ = sinθ₁/sinθ₂ — this is literally the standard experimental method for measuring index of refraction. 'False — index of refraction can only be measured using the critical angle' wrongly rules out this direct Snell's-Law method, which works perfectly well and doesn't require finding a critical angle at all. 'True, but only for incidence angles less than 45°' invents a restriction Snell's Law doesn't actually impose — the relationship holds at any incidence angle. 'False — this ratio instead gives the material's density' confuses index of refraction with an entirely different physical quantity."
    },
    {
      "id": "13-48",
      "topic": "13.4 Images Formed by Lenses",
      "stem": "A converging lens has focal length 12 cm. An object is placed 30 cm away. Find the image distance.",
      "choices": [
        "20 cm",
        "36 cm",
        "60 cm",
        "7.5 cm"
      ],
      "correct": 0,
      "explanation": "sᵢ = 20 cm. Using 1/30 + 1/sᵢ = 1/12: 1/sᵢ = 1/12 − 1/30 = 5/60 − 2/60 = 3/60 = 1/20, giving sᵢ = 20 cm — a real image, on the opposite side of the lens from the object. '7.5 cm' comes from an inversion-style slip in the reciprocal arithmetic. '36 cm' and '60 cm' each result from mishandling the combination of 1/12 and 1/30 rather than correctly subtracting the reciprocals."
    },
    {
      "id": "13-49",
      "topic": "13.4 Images Formed by Lenses",
      "stem": "Find the magnification for the lens setup in the previous question (s<sub>o</sub> = 30 cm, s<sub>i</sub> = 20 cm).",
      "choices": [
        "−1.5",
        "−0.667",
        "0.667",
        "1.5"
      ],
      "correct": 1,
      "explanation": "M = −0.667. Using M = −sᵢ/sₒ = −20/30 ≈ −0.667 — inverted, reduced. '0.667' has the right magnitude but drops the negative sign, missing that this image is inverted. '−1.5' inverts the ratio (sₒ/sᵢ instead of sᵢ/sₒ) while keeping the correct sign. '1.5' combines both the inverted ratio and the missing sign."
    },
    {
      "id": "13-50",
      "topic": "13.4 Images Formed by Lenses",
      "stem": "A converging lens has focal length 15 cm. An object is placed 10 cm away (inside the focal length). Find the image distance.",
      "choices": [
        "−30 cm",
        "6 cm",
        "30 cm",
        "−6 cm"
      ],
      "correct": 0,
      "explanation": "sᵢ = −30 cm. Using 1/10 + 1/sᵢ = 1/15: 1/sᵢ = 1/15 − 1/10 = 2/30 − 3/30 = −1/30, giving sᵢ = −30 cm — virtual, on the SAME side as the object (exactly how a converging lens works as a magnifying glass). '−6 cm' mistakenly reports the (negated) object distance instead of solving the lens equation. '30 cm' has the right magnitude but drops the negative sign, missing that an object inside f must produce a virtual image. '6 cm' compounds both errors, with neither the correct magnitude nor sign."
    },
    {
      "id": "13-51",
      "topic": "13.4 Images Formed by Lenses",
      "stem": "Find the magnification for the lens in the previous question (s<sub>o</sub> = 10 cm, s<sub>i</sub> = −30 cm).",
      "choices": [
        "3.0",
        "0.33",
        "−0.33",
        "−3.0"
      ],
      "correct": 0,
      "explanation": "M = 3.0. Using M = −sᵢ/sₒ = −(−30)/10 = 3.0 — upright, magnified, the classic magnifying-glass result for an object inside a converging lens's focal length. '−3.0' has the right magnitude but the wrong sign, missing that the formula's minus sign and sᵢ's negative value cancel to give a positive (upright) result. '0.33' inverts the ratio (sₒ/sᵢ instead of sᵢ/sₒ). '−0.33' combines both the inverted ratio and the sign error."
    },
    {
      "id": "13-52",
      "topic": "13.4 Images Formed by Lenses",
      "stem": "For a lens (not a mirror), on which side does a real image form relative to the object?",
      "choices": [
        "The opposite side from the object",
        "Neither — real images always form exactly at the lens",
        "It depends on whether the lens is converging or diverging",
        "The same side as the object"
      ],
      "correct": 0,
      "explanation": "The opposite side. Light physically passes through a lens and converges on the far side from the object — the direct contrast to a mirror, where a real image forms on the SAME side as the object. 'The same side as the object' swaps in the mirror rule instead of the lens rule. 'Neither — real images always form exactly at the lens' is never true; a real image forms some distance from the lens, not right at its surface. 'It depends on whether the lens is converging or diverging' is beside the point — a diverging lens never forms a real image at all, and for a converging lens the far-side rule always holds."
    },
    {
      "id": "13-53",
      "topic": "13.4 Images Formed by Lenses",
      "stem": "A diverging lens has focal length −18 cm. An object is placed 24 cm away. Find the image distance.",
      "choices": [
        "42 cm",
        "−42 cm",
        "10.3 cm",
        "−10.3 cm"
      ],
      "correct": 3,
      "explanation": "sᵢ ≈ −10.3 cm. Using 1/24 + 1/sᵢ = 1/(−18): 1/sᵢ = −1/18 − 1/24 = −4/72 − 3/72 = −7/72, giving sᵢ ≈ −10.3 cm — virtual, as always for a diverging lens. '−42 cm' comes from mishandling the reciprocal combination of 18 and 24. '10.3 cm' has the right magnitude but drops the negative sign, forgetting a diverging lens can never form a real image. '42 cm' compounds both the magnitude and sign errors."
    },
    {
      "id": "13-54",
      "topic": "13.4 Images Formed by Lenses",
      "stem": "Explain why a diverging lens ALWAYS produces a virtual image, regardless of object distance.",
      "choices": [
        "This is an arbitrary rule with no underlying mathematical basis.",
        "Diverging lenses actually don't refract light at all, physically.",
        "Because f is always negative for a diverging lens, so 1/s<sub>i</sub> always comes out negative.",
        "Because the object is always placed beyond 2f for a diverging lens."
      ],
      "correct": 2,
      "explanation": "It's guaranteed by the lens equation itself — the exact parallel to the convex-mirror case. With f always negative, 1/sᵢ = 1/f − 1/sₒ is always negative for any positive object distance, so sᵢ always comes out negative (virtual). This matches the physical picture: a diverging lens spreads parallel rays apart rather than converging them anywhere real. 'Diverging lenses actually don't refract light at all' is simply false — they refract light just as much as any lens, just divergently. 'The object is always placed beyond 2f' is beside the point — the virtual-image guarantee holds for every object distance. 'This is an arbitrary rule with no underlying mathematical basis' dismisses a result that follows directly and unavoidably from the lens equation."
    },
    {
      "id": "13-55",
      "topic": "13.4 Images Formed by Lenses",
      "stem": "A converging lens produces a real image with magnification −3.0 for an object placed 20 cm away. Find the lens's focal length.",
      "choices": [
        "5.0 cm",
        "15 cm",
        "45 cm",
        "10 cm"
      ],
      "correct": 1,
      "explanation": "f = 15 cm. Since |M| = sᵢ/sₒ = 3.0, sᵢ = 3.0 × 20 = 60 cm. Then 1/20 + 1/60 = 3/60 + 1/60 = 4/60 = 1/15, giving f = 15 cm. '5.0 cm' and '10 cm' both come from mishandling the reciprocal combination of 1/20 and 1/60 rather than correctly adding them. '45 cm' looks like a slip that stops partway through the calculation (e.g., 60 − sₒ) rather than completing the reciprocal-sum step."
    },
    {
      "id": "13-56",
      "topic": "13.4 Images Formed by Lenses",
      "stem": "For a converging lens, a ray traveling parallel to the axis refracts through which point after passing through the lens?",
      "choices": [
        "The exact geometric center of the lens itself",
        "The far focal point, on the side opposite the entering ray",
        "The near focal point, same side as the entering ray",
        "It continues parallel forever, never converging"
      ],
      "correct": 1,
      "explanation": "The far focal point, on the side opposite the entering ray. A parallel incoming ray always bends to pass through the focal point on the far side of a converging lens — the direct lens analog of the concave mirror's equivalent rule. 'The near focal point, same side as the entering ray' swaps in the wrong focal point; the parallel-ray rule specifically involves the FAR one. 'The exact geometric center of the lens itself' names the reference point for a different principal ray (the undeviated-through-the-center rule), not this one. 'It continues parallel forever, never converging' contradicts the entire defining behavior of a converging lens, whose whole purpose is to bend parallel rays toward a focus."
    },
    {
      "id": "13-57",
      "topic": "13.4 Images Formed by Lenses",
      "stem": "For a converging lens, what happens to a ray passing through the exact center of the lens?",
      "choices": [
        "It bends sharply toward the near focal point.",
        "It reflects back the way it came.",
        "It splits into two separate rays.",
        "It passes straight through, undeviated."
      ],
      "correct": 3,
      "explanation": "It passes straight through, undeviated. At the lens's exact center, the front and back surfaces are essentially parallel over that tiny region, so the lens behaves locally like a thin flat piece of glass — the entry and exit refractions cancel, leaving the ray's direction unchanged. 'It bends sharply toward the near focal point' describes a different principal ray's behavior, not this one. 'It reflects back the way it came' invents a reflection outcome that belongs to a mirror, not a lens, which transmits rather than reflects light. 'It splits into two separate rays' has no physical basis — a single ray through the center produces a single, undeviated ray on the far side."
    },
    {
      "id": "13-58",
      "topic": "13.4 Images Formed by Lenses",
      "stem": "An object is placed 50 cm from a converging lens with focal length 20 cm. Find the image distance and classify the image.",
      "choices": [
        "50 cm; real, inverted, same size",
        "33.3 cm; real, inverted, reduced",
        "33.3 cm; virtual, upright, magnified",
        "16.7 cm; real, upright, reduced"
      ],
      "correct": 1,
      "explanation": "33.3 cm; real, inverted, reduced. Using 1/50 + 1/sᵢ = 1/20: 1/sᵢ = 1/20 − 1/50 = 5/100 − 2/100 = 3/100, giving sᵢ ≈ 33.3 cm (real). M = −33.3/50 ≈ −0.667 (inverted, reduced) — the object sits beyond 2f (40 cm), consistent with this outcome. '33.3 cm; virtual, upright, magnified' gets the correct distance but swaps in the image type from the very different object-inside-f case. '50 cm; real, inverted, same size' mistakes the object distance itself for the image distance and wrongly assumes M = −1, which only happens at sₒ = 2f, not 50 cm. '16.7 cm; real, upright, reduced' comes from a reciprocal-arithmetic slip and, separately, wrongly claims upright — a real image from a converging lens is always inverted."
    },
    {
      "id": "13-59",
      "topic": "13.4 Images Formed by Lenses",
      "stem": "Compare the image formed by a converging lens to the image formed by a concave mirror, for an object placed beyond 2f in each case.",
      "choices": [
        "The lens produces a virtual image while the mirror produces a real image.",
        "The lens produces an upright image while the mirror produces an inverted image.",
        "There is no meaningful parallel between the two cases.",
        "Both produce a real, inverted, reduced image."
      ],
      "correct": 3,
      "explanation": "Both produce a real, inverted, reduced image. Since mirrors and lenses share the same governing equation, the general trend of image type as a function of object distance (relative to f and 2f) matches between the two, even though the specific side convention for where a real image forms differs. 'The lens produces a virtual image while the mirror produces a real image' invents a reality difference that doesn't exist for an object placed beyond 2f — both produce real images here. 'The lens produces an upright image while the mirror produces an inverted image' invents an orientation difference that also doesn't exist — both are inverted here. 'There is no meaningful parallel' denies the shared-equation relationship this question is specifically testing."
    },
    {
      "id": "13-60",
      "topic": "13.4 Images Formed by Lenses",
      "stem": "A camera lens (converging, f = 50 mm) forms a real image of a very distant object. Where does the image form?",
      "choices": [
        "At twice the focal length (s<sub>i</sub> = 2f)",
        "The image location depends on the object's exact brightness",
        "At the lens itself (s<sub>i</sub> = 0)",
        "Exactly at the focal point (s<sub>i</sub> = f)"
      ],
      "correct": 3,
      "explanation": "At the focal point. As sₒ → ∞, 1/sₒ → 0, leaving 1/sᵢ = 1/f directly, so sᵢ = f exactly — precisely why a camera's image sensor sits at the lens's focal length. 'At twice the focal length' confuses this with the unrelated 2f (unity-magnification) special case. 'At the lens itself' ignores that the image still forms a focal-length's distance away, not right at the lens surface. 'Depends on the object's exact brightness' invents an irrelevant factor — brightness affects image intensity, not its location, which is governed purely by the lens equation."
    },
    {
      "id": "13-61",
      "topic": "13.4 Images Formed by Lenses",
      "stem": "An object is placed exactly at the focal point of a converging lens. Describe the rays after passing through the lens.",
      "choices": [
        "They converge to a point immediately after the lens.",
        "They emerge parallel to each other; no image forms.",
        "They diverge as if from a virtual point behind the lens.",
        "They reverse direction entirely."
      ],
      "correct": 1,
      "explanation": "They emerge parallel; no proper image forms. This is the lens analog of the concave-mirror-at-f case — the one special location where the equation breaks down (1/sᵢ comes out to zero, meaning sᵢ is infinite). 'They converge to a point immediately after the lens' contradicts what the lens equation actually predicts at this exact object distance. 'They diverge as if from a virtual point behind the lens' describes a diverging lens's typical behavior, not a converging lens with the object at its own focal point. 'They reverse direction entirely' invents an outcome with no basis in this refraction geometry."
    },
    {
      "id": "13-62",
      "topic": "13.4 Images Formed by Lenses",
      "stem": "A converging lens (f = +15 cm) and a diverging lens (f = −15 cm) each have an object placed 30 cm away. Compare which produces the larger-magnitude image.",
      "choices": [
        "The converging lens produces the larger image.",
        "They produce equal-magnitude images.",
        "The diverging lens produces the larger image.",
        "This cannot be determined without more information."
      ],
      "correct": 0,
      "explanation": "The converging lens produces the larger image. For the converging lens: 1/30 + 1/sᵢ = 1/15 gives sᵢ = 30 cm, so |M| = 30/30 = 1.0. For the diverging lens: 1/30 + 1/sᵢ = 1/(−15) gives sᵢ = −10 cm, so |M| = 10/30 ≈ 0.33. This mirrors the identical comparison for concave vs. convex mirrors — same governing equation, same directional outcome. 'The diverging lens produces the larger image' has the comparison backwards. 'They produce equal-magnitude images' wrongly assumes matching |f| magnitudes must give matching image sizes. 'This cannot be determined' is wrong — both lens equations are fully solvable with the given information."
    },
    {
      "id": "13-63",
      "topic": "13.4 Images Formed by Lenses",
      "stem": "An object starts very far from a converging lens (beyond 2f) and moves slowly toward the lens, while staying outside f. Describe the general trend in the real image's size and location.",
      "choices": [
        "The image moves closer to the lens and shrinks.",
        "The image alternates between real and virtual as the object approaches.",
        "The image moves farther from the lens and grows larger.",
        "The image stays at a fixed location but changes size."
      ],
      "correct": 2,
      "explanation": "The image moves farther away and grows larger. As the object approaches the lens (from far away toward f, while remaining outside f), the real image on the opposite side moves progressively farther from the lens and increases in size — the identical directional trend concave mirrors follow, since both share the same governing equation. 'The image moves closer to the lens and shrinks' reverses both trends. 'The image stays at a fixed location but changes size' ignores that the equation strongly ties image location to object distance. 'The image alternates between real and virtual' invents a switch that doesn't happen here; as long as the object stays outside f, the image remains real throughout."
    },
    {
      "id": "13-64",
      "topic": "13.4 Images Formed by Lenses",
      "stem": "A converging lens has focal length 25 cm. Find the object distance that produces a real image with the same magnitude as the object (|M| = 1).",
      "choices": [
        "100 cm",
        "12.5 cm",
        "50 cm",
        "25 cm"
      ],
      "correct": 2,
      "explanation": "sₒ = 50 cm = 2f. Just as with a concave mirror, a converging lens produces a real, same-size (|M| = 1) image only when the object sits at exactly twice the focal length. '12.5 cm' halves the focal length instead of doubling it. '25 cm' mistakes the focal length itself for the answer, confusing this with the different focal-point (no-image) special case. '100 cm' quadruples the focal length (4f), overshooting the correct 2f condition."
    },
    {
      "id": "13-65",
      "topic": "13.4 Images Formed by Lenses",
      "stem": "Compare the reasoning behind the 'ray through the center' rule for a mirror (center of curvature) versus a lens (center of the lens itself). Are they the same underlying rule?",
      "choices": [
        "Yes, both rely on the ray reflecting straight back on itself.",
        "Yes, both effects rely on the lens or mirror being infinitely thin in that spot.",
        "No — the mirror relies on perpendicular incidence at the curved surface; the lens relies on acting locally like flat glass.",
        "No — only the mirror has a valid 'through the center' rule; lenses have no equivalent."
      ],
      "correct": 2,
      "explanation": "They're different rules that happen to look similar. For a mirror, a ray through the center of curvature hits the curved surface exactly perpendicular (0° incidence), reflecting straight back. For a lens, a ray through the lens's own center passes through undeviated because the lens behaves like a flat, parallel-faced piece of glass at that exact spot, with entry and exit refractions canceling. Both give an easy straight-through-or-straight-back ray, but for genuinely different physical reasons. 'Yes, both rely on the ray reflecting straight back on itself' is only true for the mirror — the lens ray doesn't reflect at all, it passes straight through. 'Yes, both rely on the lens or mirror being infinitely thin' invents an unrelated 'infinitely thin' requirement; the mirror rule depends on perpendicular incidence at a curved surface, not thinness. 'Only the mirror has a valid rule; lenses have no equivalent' incorrectly denies that lenses have their own distinct (if differently-reasoned) center rule."
    }
  ],
  "14": [
    {
      "id": "14-1",
      "topic": "14.1 Wave Basics",
      "stem": "In a transverse wave, how does the medium's oscillation relate to the wave's direction of travel?",
      "choices": [
        "It depends on the wave's amplitude",
        "Perpendicular to the direction of travel",
        "Parallel to the direction of travel",
        "There is no fixed relationship"
      ],
      "correct": 1,
      "explanation": "Perpendicular — waves on a string and light are classic transverse waves, oscillating at 90° to travel. 'Parallel' describes a longitudinal wave like sound instead. 'No fixed relationship' is wrong because every wave type has a definite, unchanging geometric relationship between oscillation and travel direction. 'Depends on amplitude' confuses amplitude (how far the medium moves) with the fixed direction it moves in, which amplitude never affects."
    },
    {
      "id": "14-2",
      "topic": "14.1 Wave Basics",
      "stem": "In a longitudinal wave, how does the medium's oscillation relate to the wave's direction of travel?",
      "choices": [
        "Parallel to the direction of travel",
        "It depends on the wave's frequency",
        "Perpendicular to the direction of travel",
        "There is no fixed relationship"
      ],
      "correct": 0,
      "explanation": "Parallel — sound is the classic longitudinal wave, with air molecules compressing and expanding along the same line the wave travels. 'Perpendicular' describes a transverse wave instead. 'No fixed relationship' is wrong since the parallel geometry is fixed for any longitudinal wave. 'Depends on frequency' wrongly ties a fixed geometric property to a wave characteristic that has no bearing on it."
    },
    {
      "id": "14-3",
      "topic": "14.1 Wave Basics",
      "stem": "Classify light waves, sound waves, and waves on a taut string as transverse or longitudinal.",
      "choices": [
        "All three are longitudinal.",
        "Light is longitudinal; sound and string waves are transverse.",
        "All three are transverse.",
        "Light and string waves are transverse; sound is longitudinal."
      ],
      "correct": 3,
      "explanation": "Light and waves on a string are transverse (oscillation perpendicular to travel); sound is longitudinal (compression/rarefaction parallel to travel). 'All transverse' wrongly includes sound, which has no perpendicular oscillation. 'All longitudinal' wrongly includes light and string waves, which do not compress and expand. The last option swaps the correct classification, incorrectly making light longitudinal and sound transverse."
    },
    {
      "id": "14-4",
      "topic": "14.1 Wave Basics",
      "stem": "A sound wave has frequency 20 Hz and travels at 340 m/s through air. Find its wavelength.",
      "choices": [
        "0.059 m",
        "6800 m",
        "17 m",
        "320 m"
      ],
      "correct": 2,
      "explanation": "λ = v/f = 340/20 = 17 m. 0.059 m comes from inverting the ratio (f/v instead of v/f). 320 m comes from subtracting instead of dividing (340 − 20). 6800 m comes from multiplying v and f instead of dividing them."
    },
    {
      "id": "14-5",
      "topic": "14.1 Wave Basics",
      "stem": "A wave's frequency doubles while it remains in the same medium (same speed). How does its wavelength change?",
      "choices": [
        "It stays the same.",
        "It doubles.",
        "It is cut in half.",
        "It quadruples."
      ],
      "correct": 2,
      "explanation": "Since v = fλ and speed is fixed by the medium, doubling f requires λ to be cut in half to keep the product constant. 'It doubles' incorrectly assumes f and λ move together, when they're inversely related here. 'Quadruples' compounds that same error. 'Stays the same' wrongly assumes wavelength is independent of frequency at fixed speed, when v = fλ ties them directly together."
    },
    {
      "id": "14-6",
      "topic": "14.1 Wave Basics",
      "stem": "Waves A and B travel through the same medium, with A having twice B's frequency. Compare their speeds.",
      "choices": [
        "B travels twice as fast as A.",
        "Cannot be determined without knowing their wavelengths.",
        "A travels twice as fast as B.",
        "A and B travel at equal speed."
      ],
      "correct": 3,
      "explanation": "Speed is set by the medium's properties, not frequency, so A and B travel equally fast; their wavelengths differ instead to account for the frequency difference. The 'A twice as fast' and 'B twice as fast' options both wrongly assume frequency changes speed. 'Cannot be determined' is wrong because speed here needs no wavelength information at all — it's fixed by the shared medium alone."
    },
    {
      "id": "14-7",
      "topic": "14.2 Periodic Waves",
      "stem": "Find the frequency of a wave with period 0.025 s.",
      "choices": [
        "40 Hz",
        "400 Hz",
        "0.025 Hz",
        "4.0 Hz"
      ],
      "correct": 0,
      "explanation": "f = 1/T = 1/0.025 = 40 Hz. 0.025 Hz mistakes the period itself for the frequency. 4.0 Hz comes from a misplaced decimal (dividing by 0.25 instead of 0.025). 400 Hz comes from another decimal-place slip in the reciprocal."
    },
    {
      "id": "14-8",
      "topic": "14.2 Periodic Waves",
      "stem": "Find the period of a wave with frequency 500 Hz.",
      "choices": [
        "2.0 × 10² s",
        "5.0 × 10² s",
        "5.0 × 10⁻³ s",
        "2.0 × 10⁻³ s"
      ],
      "correct": 3,
      "explanation": "T = 1/f = 1/500 = 2.0×10⁻³ s. 5.0×10⁻³ s swaps the digits from 500 into the answer instead of computing the reciprocal. 2.0×10² s and 5.0×10² s both mistakenly treat T as growing with f (positive exponent) rather than shrinking as its reciprocal."
    },
    {
      "id": "14-9",
      "topic": "14.2 Periodic Waves",
      "stem": "A wave travels at 300 m/s through a medium with frequency 150 Hz. Find its wavelength.",
      "choices": [
        "45,000 m",
        "450 m",
        "2.0 m",
        "0.5 m"
      ],
      "correct": 2,
      "explanation": "λ = v/f = 300/150 = 2.0 m. 0.5 m comes from inverting the ratio (f/v). 450 m comes from adding v and f instead of dividing. 45,000 m comes from multiplying v and f instead of dividing them."
    },
    {
      "id": "14-10",
      "topic": "14.2 Periodic Waves",
      "stem": "What primarily determines a wave's speed through a given medium?",
      "choices": [
        "The wave's period, frequency's reciprocal",
        "The wave's amplitude, its displacement size",
        "Properties of the medium: density, tension, elasticity",
        "The wave's frequency, a source-controlled property"
      ],
      "correct": 2,
      "explanation": "Speed is set by the medium the wave travels through. 'Frequency' and 'period' both wrongly assign speed to a source-controlled property that can change (via λ) while speed itself stays fixed for that medium. 'Amplitude' wrongly assumes a louder or larger-displacement wave moves faster, when amplitude has no effect on wave speed at all."
    },
    {
      "id": "14-11",
      "topic": "14.2 Periodic Waves",
      "stem": "A wave's amplitude is doubled while its frequency and medium stay the same. How does its speed change?",
      "choices": [
        "It quadruples.",
        "It is cut in half.",
        "It stays the same.",
        "It doubles."
      ],
      "correct": 2,
      "explanation": "Wave speed depends on the medium's properties, not amplitude at all — a louder and quieter sound of the same frequency travel through air at identical speed. 'Doubles' and 'quadruples' wrongly assume amplitude drives speed directly (or through some squared relationship, confusing it with intensity). 'Cut in half' makes the same category error in the opposite direction."
    },
    {
      "id": "14-12",
      "topic": "14.2 Periodic Waves",
      "stem": "A wave completes 15 full cycles in 3.0 seconds. Find its frequency and period.",
      "choices": [
        "45 Hz and 0.022 s",
        "5.0 Hz and 0.20 s",
        "15 Hz and 0.067 s",
        "0.20 Hz and 5.0 s"
      ],
      "correct": 1,
      "explanation": "f = cycles/time = 15/3.0 = 5.0 Hz, and T = 1/f = 0.20 s. '0.20 Hz and 5.0 s' swaps frequency and period with each other. '45 Hz and 0.022 s' comes from multiplying cycles by time (15×3.0) instead of dividing. '15 Hz and 0.067 s' mistakes the raw cycle count itself for the frequency, ignoring the 3.0 s time interval entirely."
    },
    {
      "id": "14-13",
      "topic": "14.3 Boundaries & Polarization",
      "stem": "A wave pulse on a string reflects off a FREE end. Describe the reflected pulse compared to the original.",
      "choices": [
        "Inverted, with a 180° phase shift",
        "Upright, same orientation as the original",
        "Completely absorbed, with no reflection occurring",
        "Split into two smaller pulses"
      ],
      "correct": 1,
      "explanation": "A free end can move freely, so it simply follows the incoming pulse's displacement and sends back a matching, non-inverted pulse. 'Inverted' describes the fixed-end case instead, where a reaction force flips the pulse. 'Split into two pulses' and 'completely absorbed' both describe outcomes that don't occur at an idealized free end, which reflects the full pulse rather than dividing or absorbing it."
    },
    {
      "id": "14-14",
      "topic": "14.3 Boundaries & Polarization",
      "stem": "A wave pulse on a string reflects off a FIXED end. Describe the reflected pulse compared to the original.",
      "choices": [
        "Inverted, with a 180° phase shift",
        "Upright, same orientation as the original",
        "Split into two smaller pulses",
        "Completely absorbed, with no reflection occurring"
      ],
      "correct": 0,
      "explanation": "The fixed end cannot move, so by Newton's third law it exerts an equal and opposite reaction force on the string, sending back an inverted pulse. 'Upright, same orientation' describes the free-end case instead. 'Split into two pulses' and 'completely absorbed' both describe outcomes that don't happen at an idealized fixed end, which reflects the entire pulse rather than dividing or absorbing it."
    },
    {
      "id": "14-15",
      "topic": "14.3 Boundaries & Polarization",
      "stem": "Explain, physically, why a fixed end inverts a reflected wave pulse.",
      "choices": [
        "Fixed ends only reflect pulses of a specific wavelength.",
        "Newton's third law: the fixed end pushes back, inverting the pulse.",
        "The fixed end absorbs half the pulse's energy, flipping the remainder.",
        "This is simply an empirical rule with no deeper explanation."
      ],
      "correct": 1,
      "explanation": "When the incoming pulse tries to displace the fixed end, the end can't move, so by Newton's third law it pushes back on the string with an equal and opposite force, launching an inverted reflected pulse. 'Absorbs half the energy' wrongly invokes energy loss rather than a force-based mechanism, and an idealized fixed end reflects all the energy back. 'Only reflects specific wavelengths' is false — a fixed end reflects pulses of any wavelength the same way. 'No deeper explanation' overlooks the clear Newton's-third-law mechanism at work."
    },
    {
      "id": "14-16",
      "topic": "14.3 Boundaries & Polarization",
      "stem": "Unpolarized light passes through a single polarizing filter. Approximately what fraction of the original intensity passes through?",
      "choices": [
        "About 100%",
        "About 50%",
        "About 0%",
        "About 25%"
      ],
      "correct": 1,
      "explanation": "For genuinely unpolarized (randomly oriented) light, on average half of the amplitude components already align with the filter's transmission axis, letting roughly half the intensity through. 'About 100%' wrongly assumes the filter does nothing to unpolarized light. 'About 25%' and 'about 0%' both apply the strong attenuation appropriate to a second, mismatched filter — not the first filter acting on unpolarized light."
    },
    {
      "id": "14-17",
      "topic": "14.3 Boundaries & Polarization",
      "stem": "Polarized light passes through a second polarizing filter oriented exactly perpendicular (90°) to the first filter. Approximately how much light passes through the second filter?",
      "choices": [
        "About 50%, the fraction one filter alone would pass",
        "About 25%, roughly what a partial mismatch would pass",
        "Essentially none, about 0%",
        "About 100%, as if the second filter had no effect"
      ],
      "correct": 2,
      "explanation": "A filter perpendicular to the light's existing polarization direction blocks it almost completely — the effect used when two polarized-sunglasses lenses stacked at 90° go dark. 'About 100%' wrongly assumes perpendicular alignment has no effect. 'About 50%' is the fraction for the FIRST filter acting on unpolarized light, not a second filter at 90° to already-polarized light. 'About 25%' would only apply near a 60° mismatch, not a full 90° one."
    },
    {
      "id": "14-18",
      "topic": "14.3 Boundaries & Polarization",
      "stem": "Which of the following pairs of waves could, in principle, both be polarized?",
      "choices": [
        "Light waves and waves on a string",
        "None of these waves can be polarized",
        "Sound waves and waves on a string",
        "Sound waves and light waves"
      ],
      "correct": 0,
      "explanation": "Light and string waves are both transverse, and polarization only applies to transverse waves, since it restricts the direction of a perpendicular oscillation. The other two pairs both wrongly include sound, which is longitudinal and has no perpendicular oscillation to restrict. 'None can be polarized' is false, since light and string waves both can be."
    },
    {
      "id": "14-19",
      "topic": "14.4 EM Waves",
      "stem": "Which of the following correctly ranks these electromagnetic waves from LOWEST to HIGHEST frequency: visible light, radio waves, X-rays?",
      "choices": [
        "Radio waves < visible light < X-rays",
        "Radio waves < X-rays < visible light",
        "X-rays < visible light < radio waves",
        "Visible light < radio waves < X-rays"
      ],
      "correct": 0,
      "explanation": "The standard EM spectrum ordering by increasing frequency: radio waves (longest wavelength, lowest frequency) < visible light < X-rays (among the shortest wavelengths, highest frequencies). 'X-rays < visible light < radio waves' reverses the entire ordering. The other two options each misplace one wave, swapping radio waves and X-rays' relative positions incorrectly."
    },
    {
      "id": "14-20",
      "topic": "14.4 EM Waves",
      "stem": "Find the wavelength of an electromagnetic wave with frequency 6.0×10¹⁴ Hz.",
      "choices": [
        "5.0 × 10⁻⁷ m",
        "5.0 × 10⁻⁸ m",
        "5.0 × 10⁻⁶ m",
        "5.0 × 10⁻⁵ m"
      ],
      "correct": 0,
      "explanation": "λ = c/f = (3.0×10⁸)/(6.0×10¹⁴) = 5.0×10⁻⁷ m, falling in the visible range (roughly green light at 500 nm). The other three answers are each off by one or two powers of ten from a slipped decimal or exponent in the division, landing outside the visible spectrum."
    },
    {
      "id": "14-21",
      "topic": "14.4 EM Waves",
      "stem": "Compare the speed of a radio wave to the speed of a gamma ray, both traveling through vacuum.",
      "choices": [
        "The gamma ray travels faster.",
        "They travel at exactly the same speed.",
        "This cannot be determined without knowing their exact frequencies.",
        "The radio wave travels faster."
      ],
      "correct": 1,
      "explanation": "All electromagnetic waves travel at precisely c in vacuum, regardless of frequency — only wavelength and frequency differ across the spectrum. 'Gamma ray faster' wrongly assumes higher frequency means higher speed, confusing frequency with speed. 'Radio wave faster' makes the same error in reverse. 'Cannot be determined' wrongly implies speed depends on frequency information that, in vacuum, it never does."
    },
    {
      "id": "14-22",
      "topic": "14.4 EM Waves",
      "stem": "In an electromagnetic wave, how are the electric field, magnetic field, and direction of propagation oriented relative to each other?",
      "choices": [
        "The electric field is perpendicular to travel; the magnetic field is parallel to travel.",
        "All three point in the same direction.",
        "All three are mutually perpendicular to each other.",
        "The electric and magnetic fields are parallel to each other but perpendicular to the direction of travel."
      ],
      "correct": 2,
      "explanation": "The oscillating E field, oscillating B field, and propagation direction are all at right angles to one another. 'All point the same direction' ignores that E and B are themselves transverse, perpendicular oscillations. 'E and B parallel to each other' incorrectly pairs them up, when E and B are perpendicular to each other, not aligned. 'E perpendicular, B parallel to travel' wrongly makes B a longitudinal component when it's transverse just like E."
    },
    {
      "id": "14-23",
      "topic": "14.4 EM Waves",
      "stem": "Compare the photon energy of a gamma ray to that of a radio wave.",
      "choices": [
        "Radio wave photons have much higher energy, since they have longer wavelengths",
        "Gamma ray photons have far higher energy, since E = hf and gamma rays have far higher frequency",
        "Photon energy can't be compared without knowing wave amplitude",
        "They have equal photon energy, since both travel at speed c"
      ],
      "correct": 1,
      "explanation": "Since E = hf, and gamma rays sit at the extreme high-frequency end of the spectrum while radio waves sit at the low-frequency end, gamma ray photons carry vastly more energy — this is why gamma rays damage tissue while radio waves are essentially harmless. 'Radio waves higher energy' backwards-links longer wavelength to higher energy, when longer wavelength means lower frequency and thus lower energy. 'Equal energy' wrongly conflates the shared speed c with photon energy, which depends on frequency, not speed. 'Cannot be compared' is wrong since photon energy depends on frequency, not amplitude."
    },
    {
      "id": "14-24",
      "topic": "14.4 EM Waves",
      "stem": "An electromagnetic wave's frequency increases while it remains in vacuum. How does its wavelength change?",
      "choices": [
        "It stays the same.",
        "It increases.",
        "It decreases.",
        "Cannot be determined without more information."
      ],
      "correct": 2,
      "explanation": "Since c = fλ and c is fixed in vacuum, an increase in f must be matched by a proportional decrease in λ. 'It increases' wrongly assumes f and λ rise together, when they're inversely related. 'Stays the same' wrongly treats λ as independent of f, ignoring that their product must equal the fixed constant c. 'Cannot be determined' overlooks that c = fλ fully determines the relationship with no additional information needed."
    },
    {
      "id": "14-25",
      "topic": "14.5 Doppler Effect",
      "stem": "A car horn sounds as the car drives TOWARD a stationary listener. Compared to the horn's true emitted frequency, does the listener hear a higher or lower frequency?",
      "choices": [
        "Lower",
        "Higher",
        "Exactly the same",
        "Cannot be determined without the car's exact speed"
      ],
      "correct": 1,
      "explanation": "Motion of the source toward the observer compresses the sound waves in front of it, shortening the effective wavelength and raising the observed frequency. 'Lower' describes the receding-source case instead. 'Exactly the same' ignores the Doppler effect altogether. 'Cannot be determined' is wrong because the direction of the shift (higher) is fixed by the direction of motion alone — only the exact amount of the shift needs the speed."
    },
    {
      "id": "14-26",
      "topic": "14.5 Doppler Effect",
      "stem": "The same car horn sounds as the car drives AWAY from the stationary listener. Compared to the horn's true frequency, does the listener hear a higher or lower frequency?",
      "choices": [
        "Cannot be determined without the car's exact speed",
        "Lower",
        "Higher",
        "Exactly the same"
      ],
      "correct": 1,
      "explanation": "Motion of the source away from the observer stretches the sound waves out behind it, lengthening the effective wavelength and lowering the observed frequency. 'Higher' describes the approaching-source case instead. 'Exactly the same' ignores the Doppler effect altogether. 'Cannot be determined' is wrong since the direction of the shift (lower) is set by the direction of motion alone — only the exact amount needs the speed."
    },
    {
      "id": "14-27",
      "topic": "14.5 Doppler Effect",
      "stem": "A stationary source emits sound, and a listener moves TOWARD the source. Does the listener observe a higher or lower frequency than the source's true frequency?",
      "choices": [
        "Cannot be determined without the listener's exact speed",
        "Lower",
        "Higher",
        "Exactly the same, since only source motion causes a Doppler shift"
      ],
      "correct": 2,
      "explanation": "The same directional rule applies regardless of which object moves — motion toward always raises the observed frequency, whether it's the source or, as here, the listener doing the approaching. 'Lower' reverses the correct direction. 'Exactly the same, since only source motion causes a shift' is a common misconception — observer motion causes a Doppler shift too, through the (v + v_observer) term in the numerator. 'Cannot be determined' wrongly implies the direction of the shift (higher) requires speed information, when only its exact size does."
    },
    {
      "id": "14-28",
      "topic": "14.5 Doppler Effect",
      "stretch": true,
      "stem": "Two cars move directly toward each other, one honking its horn continuously. Compare the observed frequency in this case to a scenario where only the honking car moves (listener stationary) at the same total relative closing speed.",
      "choices": [
        "No Doppler shift occurs unless the source alone is moving.",
        "The two-cars-moving scenario produces a LARGER frequency shift than the single-mover scenario at the same relative speed.",
        "The frequency shift is identical in both cases, since only relative speed matters.",
        "The two-cars-moving scenario produces a SMALLER frequency shift than the single-mover scenario."
      ],
      "correct": 3,
      "explanation": "In f' = f(v + v_o)/(v − v_s), source motion enters the denominator (v − v_s) while observer motion enters the numerator (v + v_o); the denominator's effect grows nonlinearly with v_s while the numerator's effect is only linear in v_o. So concentrating the full closing speed into source motion alone produces a larger shift than splitting it between source and observer — e.g., at v = 340 m/s with a 30 m/s total closing speed, all-source gives f' ≈ 1.097f versus a 15/15 split giving f' ≈ 1.092f. 'LARGER' reverses this comparison. 'Identical, since only relative speed matters' is the tempting but incorrect assumption that the Doppler formula is symmetric in source and observer speed — it isn't. 'No shift unless the source alone moves' is simply false, since observer motion alone also produces a shift."
    },
    {
      "id": "14-29",
      "topic": "14.5 Doppler Effect",
      "stem": "A source emits sound at 400 Hz while moving TOWARD a stationary observer at 30 m/s (sound speed 340 m/s). Find the observed frequency.",
      "choices": [
        "367 Hz",
        "400 Hz",
        "439 Hz",
        "483 Hz"
      ],
      "correct": 2,
      "explanation": "f' = f·v/(v − v_source) = 400(340)/(340 − 30) = 400(340)/310 ≈ 439 Hz; approaching uses the minus sign in the denominator, raising the frequency. 367 Hz comes from using the receding-source formula (plus sign) by mistake. 400 Hz ignores the Doppler shift entirely. 483 Hz comes from applying the approaching-observer formula's plus-in-numerator form to the source's speed instead of the correct minus-in-denominator form."
    },
    {
      "id": "14-30",
      "topic": "14.5 Doppler Effect",
      "stem": "The same source (400 Hz) now moves AWAY from the stationary observer at 30 m/s (sound speed 340 m/s). Find the observed frequency.",
      "choices": [
        "439 Hz",
        "400 Hz",
        "368 Hz",
        "483 Hz"
      ],
      "correct": 2,
      "explanation": "f' = f·v/(v + v_source) = 400(340)/(340 + 30) = 400(340)/370 ≈ 368 Hz; receding uses the plus sign in the denominator, lowering the frequency. 400 Hz ignores the Doppler shift entirely. 439 Hz comes from using the approaching-source formula (minus sign) by mistake — the exact mirror-image error. 483 Hz comes from misapplying an observer-motion form of the equation to this source-motion scenario."
    },
    {
      "id": "14-31",
      "topic": "14.5 Doppler Effect",
      "stem": "A stationary source emits sound at 500 Hz. An observer moves TOWARD the source at 20 m/s (sound speed 340 m/s). Find the observed frequency.",
      "choices": [
        "559 Hz",
        "529 Hz",
        "500 Hz",
        "471 Hz"
      ],
      "correct": 1,
      "explanation": "f' = f(v + v_observer)/v = 500(340 + 20)/340 = 500(360)/340 ≈ 529 Hz; observer approaching uses the plus sign in the numerator, raising the frequency. 471 Hz comes from using the minus sign (the receding-observer form) instead. 500 Hz ignores the Doppler shift entirely. 559 Hz comes from misapplying a source-motion denominator form to this observer-motion scenario."
    },
    {
      "id": "14-32",
      "topic": "14.5 Doppler Effect",
      "stem": "A source and an observer move at the same velocity — same speed, same direction, moving together with zero relative motion between them. Is a Doppler shift observed?",
      "choices": [
        "This situation is physically impossible.",
        "No shift, since it depends on relative motion, and there is none here.",
        "Yes, proportional to their shared speed.",
        "Yes, but only if their shared speed exceeds the speed of sound."
      ],
      "correct": 1,
      "explanation": "The Doppler effect fundamentally depends on the RELATIVE velocity between source and observer; moving together with zero relative motion produces no compression or stretching of the waves between them, so no shift occurs. 'Yes, proportional to shared speed' wrongly treats motion relative to the ground (or medium) as what matters, rather than motion relative to each other. 'Yes, but only above the speed of sound' invents a threshold condition that doesn't apply here. 'Physically impossible' is simply false — a source and observer traveling together, like two cars in the same lane at the same speed, is an entirely ordinary situation."
    },
    {
      "id": "14-33",
      "topic": "14.5 Doppler Effect",
      "stem": "A distant galaxy is moving away from Earth. Using the Doppler effect, explain why its light appears 'redshifted' (shifted toward longer wavelengths) to an observer on Earth.",
      "choices": [
        "Red light travels faster than other colors, so it arrives first.",
        "The galaxy's recession stretches the light, like a receding sound source's pitch drop.",
        "The galaxy's light loses energy traveling through empty space, unrelated to its motion.",
        "This effect only applies to sound waves, not light."
      ],
      "correct": 1,
      "explanation": "A source (the galaxy) moving away stretches the effective wavelength observed, and since red sits at the long-wavelength end of the visible spectrum, this lengthening is called a redshift — direct evidence for the expanding universe. 'Loses energy through space, unrelated to motion' invents an unrelated mechanism instead of the actual velocity-based Doppler cause. 'Red light travels faster' is false — all visible light travels at the same speed c in vacuum, regardless of color. 'Only applies to sound' is wrong since the Doppler effect applies to any wave, light included."
    },
    {
      "id": "14-34",
      "topic": "14.6 Interference & Standing Waves",
      "stem": "Two waves arrive at a point with a path difference of exactly 3 wavelengths. Is the interference constructive or destructive?",
      "choices": [
        "Cannot be determined without the wavelength's exact value",
        "Constructive",
        "Destructive",
        "Neither — no interference occurs here"
      ],
      "correct": 1,
      "explanation": "A path difference of a whole number of wavelengths (here, 3λ) means the waves arrive perfectly in phase, reinforcing each other. 'Destructive' would apply to a half-integer path difference instead. 'Neither, no interference occurs' is wrong — any two overlapping waves interfere, and here that interference happens to be fully constructive. 'Cannot be determined' is wrong because it's the path difference measured IN wavelengths (3λ), already given, that decides constructive versus destructive — the actual wavelength value cancels out."
    },
    {
      "id": "14-35",
      "topic": "14.6 Interference & Standing Waves",
      "stem": "Two waves arrive at a point with a path difference of exactly 1.5 wavelengths. Is the interference constructive or destructive?",
      "choices": [
        "Neither — no interference occurs here",
        "Constructive",
        "Destructive",
        "Cannot be determined without the wavelength's exact value"
      ],
      "correct": 2,
      "explanation": "A path difference of a half-integer number of wavelengths (here, 1.5λ) means the waves arrive exactly out of phase, canceling each other. 'Constructive' would apply to a whole-number path difference instead. 'Neither, no interference occurs' is wrong — the waves do interfere, and here it's fully destructive. 'Cannot be determined' is wrong since the path difference measured in wavelengths (1.5λ) already fixes the outcome, with no need for the actual wavelength value."
    },
    {
      "id": "14-36",
      "topic": "14.6 Interference & Standing Waves",
      "stem": "A string 3.0 m long, fixed at both ends, vibrates in its first harmonic (fundamental) with wave speed 60 m/s. Find the frequency.",
      "choices": [
        "5.0 Hz",
        "10 Hz",
        "20 Hz",
        "180 Hz"
      ],
      "correct": 1,
      "explanation": "f₁ = nv/(2L) with n = 1: f₁ = (1)(60)/(2×3.0) = 60/6.0 = 10 Hz. 5.0 Hz comes from using 4L in the denominator instead of 2L (the closed-pipe formula, not the fixed-fixed string formula). 20 Hz comes from forgetting the factor of 2 and using v/L directly. 180 Hz comes from multiplying v by L instead of dividing."
    },
    {
      "id": "14-37",
      "topic": "14.6 Interference & Standing Waves",
      "stem": "Find the frequency of the fourth harmonic for the same string (3.0 m, fixed both ends, wave speed 60 m/s).",
      "choices": [
        "40 Hz",
        "10 Hz",
        "20 Hz",
        "80 Hz"
      ],
      "correct": 0,
      "explanation": "f₄ = nv/(2L) with n = 4: f₄ = (4)(60)/6.0 = 40 Hz, exactly four times the fundamental (10 Hz) found in the prior question, since harmonic frequencies are whole-number multiples of the fundamental. 10 Hz mistakenly reuses the fundamental itself without multiplying by n = 4. 20 Hz applies only n = 2 instead of n = 4. 80 Hz comes from doubling the correct answer, effectively treating this as the eighth harmonic instead of the fourth."
    },
    {
      "id": "14-38",
      "topic": "14.6 Interference & Standing Waves",
      "stem": "What is true about the displacement of a node in a standing wave pattern, at all times?",
      "choices": [
        "Its displacement depends on which harmonic is present.",
        "It is always exactly zero.",
        "It oscillates with half the maximum amplitude.",
        "It oscillates with maximum amplitude."
      ],
      "correct": 1,
      "explanation": "Nodes are, by definition, the points where the standing wave pattern never moves at all, at any instant — the location of perfect destructive interference between the two opposite-traveling component waves. 'Maximum amplitude' describes an antinode instead, the polar opposite of a node. 'Half the maximum amplitude' invents an intermediate value that doesn't apply to a true node. 'Depends on the harmonic' is wrong — a node's displacement is zero regardless of which harmonic number produced the pattern."
    },
    {
      "id": "14-39",
      "topic": "14.6 Interference & Standing Waves",
      "stem": "How many nodes and antinodes does the SECOND harmonic (n = 2) have on a string fixed at both ends?",
      "choices": [
        "2 nodes, 3 antinodes",
        "2 nodes, 2 antinodes",
        "3 nodes, 3 antinodes",
        "3 nodes, 2 antinodes"
      ],
      "correct": 3,
      "explanation": "For a string fixed at both ends, there are always n antinodes and (n+1) nodes, since the two fixed endpoints each count as a node. For n = 2, that's 2 antinodes and 3 nodes. '2 nodes, 2 antinodes' forgets to count both fixed endpoints as nodes. '2 nodes, 3 antinodes' swaps the node and antinode counts. '3 nodes, 3 antinodes' correctly counts the nodes but wrongly adds an extra antinode that this harmonic doesn't have."
    },
    {
      "id": "14-40",
      "topic": "14.6 Interference & Standing Waves",
      "stem": "Find the wavelength of the fundamental (n = 1) standing wave on a 0.90 m string fixed at both ends.",
      "choices": [
        "3.6 m",
        "1.8 m",
        "0.45 m",
        "0.90 m"
      ],
      "correct": 1,
      "explanation": "λ_n = 2L/n with n = 1: λ₁ = 2(0.90)/1 = 1.8 m — the fundamental wavelength is always twice the string's length for a string fixed at both ends. 0.45 m comes from dividing L by 2 instead of multiplying. 0.90 m mistakes the string's length itself for its wavelength. 3.6 m comes from doubling the correct answer, effectively using 4L instead of 2L."
    },
    {
      "id": "14-41",
      "topic": "14.6 Interference & Standing Waves",
      "stem": "A string's tension is increased, increasing the wave speed on the string. If the string's length and the harmonic number stay the same, how does the standing wave's frequency change?",
      "choices": [
        "Cannot be determined without knowing the exact tension.",
        "It stays the same.",
        "It increases.",
        "It decreases."
      ],
      "correct": 2,
      "explanation": "Since f_n = nv/(2L), a higher wave speed v (with n and L fixed) directly raises the frequency — exactly why tightening a guitar string raises its pitch. 'It decreases' has the relationship backwards, treating higher speed as lowering frequency. 'Stays the same' wrongly ignores v's role in the formula altogether. 'Cannot be determined' is wrong because the direction of the change (an increase) follows from v increasing alone — the exact tension value isn't needed to know which way f moves."
    },
    {
      "id": "14-42",
      "topic": "14.6 Interference & Standing Waves",
      "stem": "Two speakers emit sound waves of the same frequency, in phase with each other. At a point exactly equidistant from both speakers, is the interference constructive or destructive?",
      "choices": [
        "Cannot be determined without knowing the wavelength",
        "Constructive",
        "Destructive",
        "Neither — equal distances always produce silence"
      ],
      "correct": 1,
      "explanation": "At a point equidistant from both speakers, the path difference is exactly zero — a whole number of wavelengths (0×λ) — so the in-phase waves arrive perfectly in sync and reinforce each other. 'Destructive' would require a half-integer wavelength path difference, not zero. 'Equal distances always produce silence' has it backwards — equal distance produces the strongest reinforcement, not cancellation. 'Cannot be determined' is wrong since a zero path difference is constructive regardless of the specific wavelength involved."
    },
    {
      "id": "14-43",
      "topic": "14.6 Interference & Standing Waves",
      "stem": "Two identical, in-phase speakers are positioned so a listener is exactly half a wavelength farther from one speaker than the other. Describe what the listener hears at that point.",
      "choices": [
        "Sound at normal volume, unaffected by the second speaker.",
        "Sound significantly louder than from either speaker alone.",
        "Sound much quieter, or even near-silent, due to destructive interference.",
        "A pure tone shifted to a different frequency."
      ],
      "correct": 2,
      "explanation": "A path difference of half a wavelength satisfies the destructive interference condition exactly, so the waves arrive out of phase and largely cancel — the same principle behind active noise-canceling headphones. 'Significantly louder' describes the equidistant, constructive case instead. 'Normal volume, unaffected' wrongly assumes the second speaker has no interference effect at all. 'Shifted to a different frequency' confuses interference (which changes amplitude/loudness) with an effect like the Doppler shift, which changes frequency — path difference does neither to frequency."
    },
    {
      "id": "14-44",
      "topic": "14.7 Diffraction",
      "stem": "A wave passes through an opening much LARGER than its wavelength. Describe the resulting diffraction.",
      "choices": [
        "Minimal spreading; the wave travels mostly straight through.",
        "The wave's frequency changes upon passing through.",
        "Significant — the wave spreads out substantially.",
        "The wave is completely blocked by the opening."
      ],
      "correct": 0,
      "explanation": "When the opening is much larger than the wavelength, the wave passes through with little bending around the edges, producing a comparatively sharp-edged pattern. 'Significant spreading' describes the opposite case, where the opening is comparable to or smaller than the wavelength. 'Completely blocked' is wrong — a large opening lets the wave through freely. 'Frequency changes' is wrong because diffraction bends a wave's path, it doesn't alter its frequency."
    },
    {
      "id": "14-45",
      "topic": "14.7 Diffraction",
      "stem": "A wave passes through an opening comparable in size to (or smaller than) its wavelength. Describe the resulting diffraction.",
      "choices": [
        "Significant — the wave spreads out substantially, bending around the opening's edges.",
        "Minimal — the wave travels mostly straight through with little spreading.",
        "The wave's speed changes upon passing through.",
        "The wave is completely blocked."
      ],
      "correct": 0,
      "explanation": "When the wavelength is comparable to (or larger than) the opening, the wave bends and spreads noticeably, with the opening effectively acting like a new point source. 'Minimal spreading' describes the opposite case of a much-larger opening instead. 'Completely blocked' is wrong — the wave still passes through, just spread widely rather than blocked. 'Speed changes' is wrong since diffraction affects a wave's direction of spread, not its propagation speed through the same medium."
    },
    {
      "id": "14-46",
      "topic": "14.7 Diffraction",
      "stem": "Compare the diffraction of red light versus blue light (red has the longer wavelength) passing through the same narrow slit.",
      "choices": [
        "Neither diffracts noticeably, since both wavelengths are far smaller than any everyday slit.",
        "Red light diffracts more, since it has the longer wavelength.",
        "Blue light diffracts more, since it has the higher frequency.",
        "Both diffract equally, since they're both visible light."
      ],
      "correct": 1,
      "explanation": "Diffraction increases as wavelength becomes more comparable to the size of the opening, so red light's longer wavelength makes it spread out more than blue light through the same slit. 'Blue light diffracts more' wrongly ties diffraction to frequency directly rather than to wavelength being large relative to the opening. 'Both diffract equally' ignores that their differing wavelengths do produce measurably different diffraction. 'Neither diffracts noticeably' wrongly assumes the slit must be everyday-sized — a sufficiently narrow slit makes diffraction significant for both colors."
    },
    {
      "id": "14-47",
      "topic": "14.7 Diffraction",
      "stem": "Explain why you can hear someone talking around a corner with no direct line of sight, but generally cannot see them.",
      "choices": [
        "Light is absorbed by air around corners, while sound is not.",
        "Sound diffracts substantially around corners; light's much smaller wavelength barely bends at all.",
        "Sound travels faster than light, so it arrives from a different path.",
        "This has nothing to do with diffraction — it's purely due to reflection off nearby walls."
      ],
      "correct": 1,
      "explanation": "Sound wavelengths (centimeters to meters) are comparable to everyday openings like doorways and corners, so sound diffracts substantially around them; visible light's ~500 nm wavelength is many orders of magnitude smaller, so it barely bends and casts a sharp shadow instead. 'Sound travels faster than light' is factually backwards — light is vastly faster than sound — and speed isn't what explains the bending anyway. 'Light is absorbed by air around corners' invents an unrelated absorption mechanism rather than the actual diffraction difference. 'Purely due to reflection, nothing to do with diffraction' dismisses diffraction, which is in fact the key mechanism, though reflection can contribute in some real rooms."
    },
    {
      "id": "14-48",
      "topic": "14.7 Diffraction",
      "stem": "If the size of an opening is decreased while the wavelength passing through it stays fixed, how does the amount of diffraction change?",
      "choices": [
        "Cannot be determined without knowing the exact wavelength.",
        "It stays the same.",
        "It increases.",
        "It decreases."
      ],
      "correct": 2,
      "explanation": "A smaller opening relative to a fixed wavelength means the wavelength becomes MORE comparable to (or exceeds) the opening size, which is exactly the condition that produces more diffraction. 'It decreases' has the relationship backwards. 'Stays the same' wrongly ignores that the opening-to-wavelength ratio is what controls diffraction amount. 'Cannot be determined' is wrong because the direction of the change (an increase) follows just from the opening shrinking relative to a fixed wavelength — the exact wavelength value isn't needed."
    },
    {
      "id": "14-49",
      "topic": "14.7 Diffraction",
      "stem": "A radio wave (wavelength ≈ 1 m) and a light wave (wavelength ≈ 500 nm) both encounter an obstacle 10 cm wide. Which diffracts more around this obstacle?",
      "choices": [
        "Both diffract equally, since they're both EM waves",
        "The radio wave, whose wavelength is much larger relative to the obstacle",
        "Neither diffracts, since the obstacle is opaque to both",
        "The light wave, since it has a much higher frequency"
      ],
      "correct": 1,
      "explanation": "The radio wave's 1 m wavelength is comparable to (even larger than) the 10 cm obstacle, causing substantial bending around it, while the light wave's 500 nm wavelength is far smaller, producing a sharp shadow with negligible bending. 'The light wave, due to higher frequency' wrongly ties diffraction to frequency rather than to wavelength relative to obstacle size. 'Both diffract equally, since both are EM waves' ignores that diffraction depends on wavelength-to-obstacle ratio, not on being electromagnetic. 'Neither diffracts, obstacle is opaque to both' misapplies opacity — diffraction is about bending around an obstacle's edges, which doesn't require the obstacle to be transparent."
    },
    {
      "id": "14-50",
      "topic": "14.8 Double-Slit & Diffraction Gratings",
      "stem": "Light of wavelength 450 nm passes through two slits separated by 0.10 mm. Find the angle to the first bright fringe (m = 1).",
      "choices": [
        "0.52°",
        "0.13°",
        "1.0°",
        "0.26°"
      ],
      "correct": 3,
      "explanation": "dsinθ = mλ gives sinθ = (1)(450×10⁻⁹)/(0.10×10⁻³) = 4.5×10⁻³, so θ = sin⁻¹(4.5×10⁻³) ≈ 0.26°. 0.13° comes from a factor-of-2 slip (halving the correct ratio). 0.52° comes from doubling the correct ratio, effectively using m = 2 instead of m = 1. 1.0° is an order-of-magnitude overestimate from a decimal-place error in the ratio."
    },
    {
      "id": "14-51",
      "topic": "14.8 Double-Slit & Diffraction Gratings",
      "stem": "Using the same setup (450 nm, d = 0.10 mm), find the angle to the SECOND bright fringe (m = 2).",
      "choices": [
        "0.78°",
        "1.0°",
        "0.52°",
        "0.26°"
      ],
      "correct": 2,
      "explanation": "sinθ = mλ/d = (2)(450×10⁻⁹)/(0.10×10⁻³) = 9.0×10⁻³, giving θ ≈ 0.52° — almost exactly double the m = 1 angle from the previous question, since sinθ scales directly with m at these small angles. 0.26° mistakenly reuses the m = 1 angle without accounting for m = 2. 0.78° comes from using m = 3 instead of m = 2. 1.0° comes from a decimal-place slip in computing the ratio."
    },
    {
      "id": "14-52",
      "topic": "14.8 Double-Slit & Diffraction Gratings",
      "stem": "If the slit separation d is increased (wavelength unchanged), how does the angle to a given bright fringe (fixed m) change?",
      "choices": [
        "It decreases.",
        "It increases.",
        "Cannot be determined without knowing m.",
        "It stays the same."
      ],
      "correct": 0,
      "explanation": "Since sinθ = mλ/d, increasing d in the denominator decreases sinθ and therefore θ — wider slit spacing compresses the fringe pattern together. 'It increases' has the relationship backwards. 'Stays the same' wrongly ignores d's role in the formula. 'Cannot be determined without knowing m' is wrong because the direction of the change (a decrease) holds for any fixed value of m — only the exact size of the change would depend on which m is chosen, not its direction."
    },
    {
      "id": "14-53",
      "topic": "14.8 Double-Slit & Diffraction Gratings",
      "stem": "If the wavelength of light used is increased (slit separation unchanged), how does the angle to a given bright fringe change?",
      "choices": [
        "It decreases.",
        "It stays the same.",
        "It increases.",
        "Cannot be determined without knowing m."
      ],
      "correct": 2,
      "explanation": "Since sinθ = mλ/d, a longer wavelength directly increases sinθ and therefore θ — the opposite effect from increasing slit separation. 'It decreases' has the relationship backwards. 'Stays the same' wrongly ignores λ's role in the formula. 'Cannot be determined without knowing m' is wrong because the direction of the change (an increase) holds for any fixed m — only the exact size of the shift would depend on which m is chosen."
    },
    {
      "id": "14-54",
      "topic": "14.8 Double-Slit & Diffraction Gratings",
      "stem": "At the exact center of a double-slit interference pattern (m = 0), what is true about the light arriving there from each slit?",
      "choices": [
        "The two waves have traveled paths differing by exactly half a wavelength.",
        "The two waves arrive completely out of phase.",
        "Only light from one of the two slits reaches this point.",
        "The two waves have traveled exactly equal path lengths, arriving perfectly in phase."
      ],
      "correct": 3,
      "explanation": "The central bright fringe sits at the point of zero path difference — equidistant from both slits — which is why it's typically the brightest fringe in the whole pattern. 'Half a wavelength path difference' describes a destructive, dark point instead, not the central maximum. 'Only light from one slit reaches this point' is wrong — light from both slits reaches every point on the screen; it's the phase relationship that differs. 'Completely out of phase' is the opposite of the actual, perfectly-in-phase condition at the center."
    },
    {
      "id": "14-55",
      "topic": "14.8 Double-Slit & Diffraction Gratings",
      "stem": "Light passing through two slits (d = 8.0×10⁻⁶ m) produces a bright fringe at 15° for m = 3. Find the wavelength.",
      "choices": [
        "1400 nm",
        "230 nm",
        "2100 nm",
        "690 nm"
      ],
      "correct": 3,
      "explanation": "λ = dsinθ/m = (8.0×10⁻⁶)(sin 15°)/3 = (8.0×10⁻⁶)(0.259)/3 ≈ 6.9×10⁻⁷ m = 690 nm. 230 nm comes from dividing by m twice (an extra unintended factor of 3). 1400 nm comes from forgetting to divide by m at all. 2100 nm comes from multiplying by m instead of dividing by it."
    },
    {
      "id": "14-56",
      "topic": "14.8 Double-Slit & Diffraction Gratings",
      "stem": "A diffraction grating has many more evenly-spaced slits than a simple double slit. Compared to a double slit, how does a grating's bright fringe pattern differ?",
      "choices": [
        "A grating produces no distinct fringes at all, just uniform brightness.",
        "The bright fringes appear at completely different angles.",
        "A grating only works for a single specific wavelength.",
        "Same angles, but much sharper and narrower, with darker regions between."
      ],
      "correct": 3,
      "explanation": "Fringes still appear at the same angles, still given by dsinθ = mλ, but with many slits requiring precise alignment across all of them, the bright fringes become much sharper and the dark regions between them more distinct. 'Completely different angles' is wrong — the underlying dsinθ = mλ condition is unchanged by adding more slits. 'No distinct fringes, just uniform brightness' is the opposite of reality — more slits sharpen the fringes rather than washing them out. 'Only works for a single wavelength' is false; a grating still diffracts any wavelength according to the same formula, just with sharper results."
    },
    {
      "id": "14-57",
      "topic": "14.8 Double-Slit & Diffraction Gratings",
      "stretch": true,
      "stem": "Does single-slit diffraction also produce a bright/dark fringe pattern, and if so, is the underlying cause the same as double-slit interference?",
      "choices": [
        "Yes, and the cause is identical — light from two physically separate slits interfering.",
        "No, single-slit diffraction produces uniform brightness with no pattern.",
        "Yes, but only for wavelength longer than the slit width.",
        "Yes, but from different parts of the SAME slit interfering, not two separate slits."
      ],
      "correct": 3,
      "explanation": "Single-slit diffraction produces its own bright/dark pattern from many secondary wavelets across the SAME single opening interfering with each other, distinct from double-slit interference between light emerging from two physically separate slits. 'Cause is identical, two separate slits' wrongly imports the double-slit mechanism into a setup that only has one opening. 'Uniform brightness, no fringe pattern' is factually wrong — single-slit diffraction does produce a distinct central maximum with dimmer side fringes. 'Only for wavelength longer than the slit width' invents an unnecessary restriction — single-slit diffraction fringes occur across a range of wavelength-to-width ratios, not only that extreme case. This distinction — 'diffraction pattern' from self-interference within one opening versus 'interference pattern' from two distinct sources — is more nuanced than the core dsinθ = mλ relationship this section usually emphasizes."
    },
    {
      "id": "14-58",
      "topic": "14.9 Thin Film Interference",
      "stem": "A thin film has thickness 150 nm. Find the path difference for light reflecting off the top and bottom surfaces.",
      "choices": [
        "150 nm",
        "75 nm",
        "600 nm",
        "300 nm"
      ],
      "correct": 3,
      "explanation": "Path difference = 2t = 2(150 nm) = 300 nm, since light crosses the film's thickness twice — once down to the bottom surface, once back up. 75 nm comes from halving the thickness instead of doubling it. 150 nm mistakes the film's thickness itself for the round-trip path difference. 600 nm comes from doubling the correct answer, effectively using 4t instead of 2t."
    },
    {
      "id": "14-59",
      "topic": "14.9 Thin Film Interference",
      "stem": "Light reflects off a boundary going from a LOWER-index medium into a HIGHER-index medium. Describe the phase shift that occurs.",
      "choices": [
        "No phase shift, the same behavior as reflection off a free end",
        "The phase shift depends on the exact wavelength",
        "180° phase shift, the same behavior as reflection off a fixed end",
        "90° phase shift"
      ],
      "correct": 2,
      "explanation": "Reflecting into a higher-index (optically denser) medium always introduces a 180° phase flip, just like a wave pulse reflecting off a fixed string end. 'No shift, like a free end' describes the opposite boundary case, going into a lower-index medium instead. '90° phase shift' invents a value that doesn't occur at either type of boundary in this context. 'Depends on the exact wavelength' is wrong — this phase shift is a fixed 180° or 0°, determined by the direction of the index change, not by wavelength."
    },
    {
      "id": "14-60",
      "topic": "14.9 Thin Film Interference",
      "stem": "Light reflects off a boundary going from a HIGHER-index medium into a LOWER-index medium. Describe the phase shift.",
      "choices": [
        "No phase shift, the same behavior as reflection off a free end",
        "90° phase shift",
        "180° phase shift, the same behavior as reflection off a fixed end",
        "The phase shift depends on the exact wavelength"
      ],
      "correct": 0,
      "explanation": "Reflecting into a lower-index (optically less dense) medium never introduces a phase flip, just like a wave pulse reflecting off a free string end. '180° shift, like a fixed end' describes the opposite boundary case, going into a higher-index medium instead. '90° phase shift' invents a value that doesn't occur at either type of boundary here. 'Depends on the exact wavelength' is wrong — the shift is fixed at 0° or 180° by the direction of the index change alone."
    },
    {
      "id": "14-61",
      "topic": "14.9 Thin Film Interference",
      "stem": "A thin oil film (n = 1.4) floats on water (n = 1.33), with air (n = 1.0) above. Determine whether each reflecting surface — the top (air-to-oil) and bottom (oil-to-water) — involves a phase shift.",
      "choices": [
        "Both surfaces shift, since both are reflections.",
        "Only the bottom surface shifts, not the top.",
        "Neither surface shifts, since oil sits between two other media.",
        "Only the top surface shifts (higher index); the bottom does not (lower index)."
      ],
      "correct": 3,
      "explanation": "Air (n = 1.0) to oil (n = 1.4) goes into a HIGHER index — a 180° shift; oil (n = 1.4) to water (n = 1.33) goes into a LOWER index — no shift. 'Both surfaces shift' wrongly ignores that the oil-to-water step decreases the index, so that reflection doesn't shift. 'Neither surface shifts' wrongly ignores that the air-to-oil step increases the index, so that reflection does shift. 'Only the bottom surface shifts' has the two surfaces' behavior exactly backwards — it's the top surface that shifts, not the bottom."
    },
    {
      "id": "14-62",
      "topic": "14.9 Thin Film Interference",
      "stem": "A thin film has MATCHED phase-shift behavior on both surfaces (either both shift, or neither does). What is the condition for constructive interference, in terms of the path difference and the wavelength in the film?",
      "choices": [
        "2t = (m + ½)λ_film",
        "2t = mλ_film",
        "2t = mλ_film/2",
        "t = mλ_film"
      ],
      "correct": 1,
      "explanation": "2t = mλ_film, a whole number of wavelengths — when both surfaces either shift together or don't shift at all, their phase effects either cancel out or don't factor in, leaving the ordinary constructive condition intact. '2t = (m + ½)λ_film' is the condition for the MISMATCHED case instead, where the extra half-wavelength swap applies. '2t = mλ_film/2' introduces an extra, unjustified factor of one-half into the formula. 't = mλ_film' drops the essential factor of 2 that accounts for the round-trip path through the film."
    },
    {
      "id": "14-63",
      "topic": "14.9 Thin Film Interference",
      "stem": "A thin film has MISMATCHED phase-shift behavior (one surface shifts, the other doesn't). What is the condition for constructive interference in this case?",
      "choices": [
        "2t = mλ_film",
        "2t = (m + ½)λ_film",
        "t = (m + ½)λ_film",
        "2t = 2mλ_film"
      ],
      "correct": 1,
      "explanation": "2t = (m + ½)λ_film — the single unmatched 180° shift adds an extra half-wavelength to the bookkeeping, swapping which path differences count as constructive versus destructive compared to the matched case. '2t = mλ_film' is the MATCHED-case condition instead, missing the needed half-wavelength offset. '2t = 2mλ_film' introduces an unjustified extra factor of 2 on m. 't = (m + ½)λ_film' drops the factor of 2 that accounts for the round-trip path through the film."
    },
    {
      "id": "14-64",
      "topic": "14.9 Thin Film Interference",
      "stretch": true,
      "stem": "A soap film (n = 1.33) surrounded by air on both sides has mismatched phase-shift behavior (only the top surface shifts). Find the minimum nonzero thickness for constructive interference of light with vacuum wavelength 500 nm.",
      "choices": [
        "376 nm",
        "188 nm",
        "94 nm",
        "70 nm"
      ],
      "correct": 2,
      "explanation": "First convert to the wavelength inside the film: λ_film = λ_vacuum/n = 500/1.33 ≈ 376 nm. Using the mismatched condition 2t = (m + ½)λ_film with the smallest value m = 0: 2t = (½)(376) = 188, so t ≈ 94 nm. 70 nm comes from skipping the index conversion and using 500 nm directly with an extra arithmetic slip. 188 nm mistakes the value of 2t itself for t, forgetting to divide by 2 at the final step. 376 nm mistakes λ_film itself for the answer, skipping the mismatched-condition calculation entirely."
    },
    {
      "id": "14-65",
      "topic": "14.9 Thin Film Interference",
      "stem": "Explain why a soap bubble shows different colors at different points across its surface, even under uniform white-light illumination.",
      "choices": [
        "This is caused by diffraction, not interference, and has nothing to do with the film's thickness.",
        "Varying film thickness makes each color's constructive condition hit at a different spot.",
        "Different colors of light travel at different speeds inside the soap film.",
        "The soap molecules themselves are colored and simply reflect different colors at random."
      ],
      "correct": 1,
      "explanation": "Since the constructive-interference condition (2t = mλ_film or (m + ½)λ_film, depending on the phase-shift situation) depends directly on thickness t, different wavelengths satisfy it at different thicknesses — so different colors appear brightest at different points on the film's slightly uneven surface, producing the familiar swirling rainbow pattern. 'Different colors travel at different speeds in the film' invents a dispersion-based explanation rather than the actual thickness-dependence mechanism. 'Soap molecules are colored, reflecting at random' incorrectly attributes the effect to pigment rather than interference — soap is colorless. 'Caused by diffraction, not interference, nothing to do with thickness' misidentifies both the mechanism (it is interference) and dismisses thickness, which is precisely the variable driving the color variation."
    },
    {
      "id": "14-66",
      "topic": "14.6 Interference & Standing Waves",
      "stem": "An organ pipe open at both ends has length 1.7 m. If the speed of sound in the pipe is 340 m/s, find the fundamental frequency.",
      "choices": [
        "200 Hz",
        "100 Hz",
        "50 Hz",
        "340 Hz"
      ],
      "correct": 1,
      "explanation": "For a pipe open at both ends, both ends are antinodes and the math matches a string fixed at both ends: f₁ = v/(2L) = 340/(2×1.7) = 340/3.4 = 100 Hz. 50 Hz comes from mistakenly using the closed-pipe formula v/(4L) for this open-open pipe. 200 Hz comes from forgetting the factor of 2 and using v/L directly. 340 Hz mistakes the raw speed of sound itself for the frequency, ignoring the pipe length entirely."
    },
    {
      "id": "14-67",
      "topic": "14.6 Interference & Standing Waves",
      "stem": "A pipe closed at one end and open at the other has the SAME length, 1.7 m, with the same speed of sound, 340 m/s. Find the fundamental frequency.",
      "choices": [
        "25 Hz",
        "100 Hz",
        "200 Hz",
        "50 Hz"
      ],
      "correct": 3,
      "explanation": "A closed pipe has a node at the closed end and an antinode at the open end, giving f₁ = v/(4L) = 340/(4×1.7) = 340/6.8 = 50 Hz — exactly half the open-open pipe's fundamental (100 Hz) for the same length, since the closed end forces a longer effective wavelength (4L instead of 2L). 25 Hz comes from an extra unintended factor of 2 (using 8L instead of 4L). 100 Hz comes from mistakenly using the open-pipe formula v/(2L) for this closed pipe. 200 Hz comes from forgetting the factor of 4 and using v/L directly."
    },
    {
      "id": "14-68",
      "topic": "14.6 Interference & Standing Waves",
      "stem": "A pipe closed at one end has a fundamental frequency of 60 Hz. What is the frequency of its NEXT allowed harmonic above the fundamental?",
      "choices": [
        "180 Hz, the third harmonic (n = 3)",
        "120 Hz, the second harmonic (n = 2)",
        "300 Hz, the fifth harmonic (n = 5)",
        "240 Hz, the fourth harmonic (n = 4)"
      ],
      "correct": 0,
      "explanation": "A closed pipe supports ONLY odd harmonics (n = 1, 3, 5...), so the first allowed harmonic above the fundamental is n = 3: f₃ = 3(60) = 180 Hz. '120 Hz, n = 2' describes a standing-wave pattern that simply cannot exist in a closed pipe, since even harmonics are forbidden there. '240 Hz, n = 4' makes the same even-harmonic error one step further out. '300 Hz, n = 5' correctly stays on an odd harmonic but skips past n = 3, which is the actual next allowed harmonic above the fundamental."
    }
  ],
  "15": [
    {
      "id": "15-1",
      "topic": "15.1 Quantum Theory",
      "stem": "Find the energy of a photon with frequency 5.0×10¹⁴ Hz. (h = 6.63×10⁻³⁴ J·s)",
      "choices": [
        "3.3 × 10⁻¹⁹ J",
        "3.3 × 10⁻¹⁷ J",
        "3.3 × 10⁻¹⁸ J",
        "3.3 × 10⁻²⁰ J"
      ],
      "correct": 0,
      "explanation": "E ≈ 3.3 × 10⁻¹⁹ J. Using E = hf = (6.63×10⁻³⁴)(5.0×10¹⁴) ≈ 3.3×10⁻¹⁹ J. Choice A (3.3×10⁻²⁰ J) is off by a factor of 10 too small, and choices C (3.3×10⁻¹⁸ J) and D (3.3×10⁻¹⁷ J) are off by factors of 10 and 100 too large — all three come from mis-tracking the exponent when multiplying the powers of ten."
    },
    {
      "id": "15-2",
      "topic": "15.1 Quantum Theory",
      "stem": "Find the energy in eV of a photon with wavelength 620 nm. (hc = 1240 eV·nm)",
      "choices": [
        "2.0 eV",
        "8.0 eV",
        "0.5 eV",
        "4.0 eV"
      ],
      "correct": 0,
      "explanation": "E = 2.0 eV. Using E = hc/λ = 1240/620 = 2.0 eV — the convenient eV·nm form of hc avoids converting to joules and meters. Choice A (0.5 eV) comes from inverting the ratio (620/1240 instead of 1240/620). Choices C (4.0 eV) and D (8.0 eV) come from mis-dividing by half or a quarter of 620, doubling or quadrupling the correct result."
    },
    {
      "id": "15-3",
      "topic": "15.1 Quantum Theory",
      "stem": "If a photon's frequency doubles, how does its energy change?",
      "choices": [
        "It quadruples.",
        "It is cut in half.",
        "It stays the same.",
        "It doubles."
      ],
      "correct": 3,
      "explanation": "It doubles. Photon energy is E = hf, a direct proportionality — doubling frequency doubles energy, with no other complications. \"Cut in half\" inverts this direct relationship (that's how energy responds to a doubled *wavelength*, not frequency). \"Quadruples\" wrongly assumes E ∝ f² and squares the factor of two instead of applying it directly. \"Stays the same\" ignores that E = hf depends on frequency at all."
    },
    {
      "id": "15-4",
      "topic": "15.1 Quantum Theory",
      "stem": "If a photon's wavelength doubles, how does its energy change?",
      "choices": [
        "It quadruples.",
        "It stays the same.",
        "It is cut in half.",
        "It doubles."
      ],
      "correct": 2,
      "explanation": "It's cut in half. Photon energy is E = hc/λ, with wavelength in the denominator — doubling wavelength halves energy. \"Doubles\" treats wavelength like frequency, assuming a direct rather than inverse relationship. \"Quadruples\" compounds that same direct-proportion mistake with an extra squaring. \"Stays the same\" ignores that E depends on λ at all."
    },
    {
      "id": "15-5",
      "topic": "15.1 Quantum Theory",
      "stem": "Find the de Broglie wavelength of a proton (mass 1.67×10⁻²⁷ kg) moving at 5.0×10⁵ m/s. (h = 6.63×10⁻³⁴ J·s)",
      "choices": [
        "7.9 × 10⁻¹⁴ m",
        "7.9 × 10⁻¹¹ m",
        "7.9 × 10⁻¹² m",
        "7.9 × 10⁻¹³ m"
      ],
      "correct": 3,
      "explanation": "λ ≈ 7.9 × 10⁻¹³ m. First find momentum: p = mv = (1.67×10⁻²⁷)(5.0×10⁵) ≈ 8.35×10⁻²² kg·m/s. Then λ = h/p = (6.63×10⁻³⁴)/(8.35×10⁻²²) ≈ 7.9×10⁻¹³ m. Choice A (7.9×10⁻¹⁴ m) is off by a factor of 10 too small and choices C (7.9×10⁻¹² m) and D (7.9×10⁻¹¹ m) are off by factors of 10 and 100 too large — all from misplacing the exponent when dividing h by p."
    },
    {
      "id": "15-6",
      "topic": "15.1 Quantum Theory",
      "stem": "A baseball and an electron travel at the same speed. Compare their de Broglie wavelengths.",
      "choices": [
        "The baseball's wavelength is vastly larger than the electron's.",
        "The baseball's wavelength is vastly smaller than the electron's.",
        "They have equal wavelengths, since they travel at the same speed.",
        "The baseball has no de Broglie wavelength at all — matter waves don't apply to it."
      ],
      "correct": 1,
      "explanation": "The baseball's wavelength is vastly, immeasurably smaller. Since λ = h/p = h/(mv), and the baseball's mass dwarfs the electron's by many orders of magnitude, its wavelength becomes utterly negligible — this is exactly why everyday macroscopic objects never display noticeable wave behavior, even though technically every moving object has some de Broglie wavelength. \"Vastly larger\" inverts the mass relationship (mass sits in the denominator of λ = h/mv, so more mass means a *shorter* wavelength). \"Equal wavelengths\" ignores mass entirely and focuses only on the equal speed. \"No de Broglie wavelength at all\" wrongly assumes matter waves only apply to quantum-scale particles."
    },
    {
      "id": "15-7",
      "topic": "15.1 Quantum Theory",
      "stem": "Which experimental phenomenon provides evidence for the WAVE nature of light?",
      "choices": [
        "Blackbody radiation",
        "The photoelectric effect",
        "Compton scattering",
        "Double-slit interference"
      ],
      "correct": 3,
      "explanation": "Double-slit interference. Bright and dark interference fringes are a purely wave-based phenomenon, requiring light to combine via superposition — direct evidence for light's wave behavior. The photoelectric effect and Compton scattering are both classic evidence for light's *particle* nature instead, not its wave nature. Blackbody radiation motivated Planck's quantized-energy proposal, which is again evidence pointing toward particle-like packets, not waves."
    },
    {
      "id": "15-8",
      "topic": "15.1 Quantum Theory",
      "stem": "Which experimental phenomenon provides evidence for the PARTICLE nature of light?",
      "choices": [
        "Double-slit interference",
        "The photoelectric effect",
        "Thin film interference",
        "Diffraction around an obstacle"
      ],
      "correct": 1,
      "explanation": "The photoelectric effect. Electrons are ejected only above a threshold frequency, regardless of light intensity — this behavior only makes sense if light delivers energy in discrete packets (photons), not as a continuous wave. Double-slit interference, thin film interference, and diffraction around an obstacle are all wave phenomena instead — each relies on superposition or bending around edges, behaviors a stream of independent particles wouldn't produce."
    },
    {
      "id": "15-9",
      "topic": "15.2 The Bohr Model",
      "stem": "An atom's electron has possible energy levels at −8.0 eV (n=1), −2.0 eV (n=2), and −1.0 eV (n=3). Find the energy of a photon emitted for the n=3 to n=1 transition.",
      "choices": [
        "1.0 eV",
        "7.0 eV",
        "9.0 eV",
        "6.0 eV"
      ],
      "correct": 1,
      "explanation": "7.0 eV. Photon energy equals the magnitude of the energy difference: |(−1.0) − (−8.0)| = 7.0 eV. Choice A (1.0 eV) is actually the energy of the n=3 to n=2 transition, and choice B (6.0 eV) is the energy of the n=2 to n=1 transition — both real gaps, just for the wrong pair of levels. Choice D (9.0 eV) doesn't correspond to any transition among these three levels at all; it looks like an erroneous sum of two of the smaller gaps."
    },
    {
      "id": "15-10",
      "topic": "15.2 The Bohr Model",
      "stem": "Using the same energy levels (−8.0 eV, −2.0 eV, −1.0 eV for n=1,2,3), find the photon energy for the n=2 to n=1 transition.",
      "choices": [
        "6.0 eV",
        "7.0 eV",
        "9.0 eV",
        "1.0 eV"
      ],
      "correct": 0,
      "explanation": "6.0 eV. |(−2.0) − (−8.0)| = 6.0 eV. Choice A (1.0 eV) is the n=3 to n=2 gap and choice C (7.0 eV) is the n=3 to n=1 gap — both real transitions, just between the wrong pair of levels. Choice D (9.0 eV) matches no actual transition here; it looks like a mistaken addition of two smaller gaps rather than a direct subtraction of the two level energies."
    },
    {
      "id": "15-11",
      "topic": "15.2 The Bohr Model",
      "stem": "Using the same energy levels, find the photon energy for the n=3 to n=2 transition.",
      "choices": [
        "9.0 eV",
        "7.0 eV",
        "1.0 eV",
        "6.0 eV"
      ],
      "correct": 2,
      "explanation": "1.0 eV. |(−1.0) − (−2.0)| = 1.0 eV — notice this is the smallest of the three possible transitions among these levels, since n=2 and n=3 are the closest together in energy. Choice B (6.0 eV) is the n=2 to n=1 gap and choice C (7.0 eV) is the n=3 to n=1 gap — real transitions, but for different level pairs. Choice D (9.0 eV) matches no actual transition; it looks like an incorrect sum rather than the direct difference asked for."
    },
    {
      "id": "15-12",
      "topic": "15.2 The Bohr Model",
      "stem": "An electron absorbs a photon and jumps from a lower energy level to a higher one. Compare the photon's energy to the exact energy difference between the two levels.",
      "choices": [
        "The photon's energy must exactly equal the energy difference.",
        "The photon's energy can be anywhere close to the energy difference.",
        "The photon's energy must exceed the energy difference.",
        "There is no required relationship between them."
      ],
      "correct": 0,
      "explanation": "They must be exactly equal. An atom can only absorb a photon whose energy precisely matches an available energy level gap — a photon with even slightly more or less energy simply passes through without being absorbed at all. \"Must exceed\" confuses this bound-state absorption with the photoelectric effect, where ejecting a *free* electron only requires *at least* the work function. \"Anywhere close\" and \"no required relationship\" both ignore that energy levels are quantized, treating the absorption process as if it were continuous rather than an exact-match requirement."
    },
    {
      "id": "15-13",
      "topic": "15.2 The Bohr Model",
      "stem": "Using the levels from the earlier question (−8.0 eV, −2.0 eV, −1.0 eV), find the wavelength of the photon emitted for the n=3 to n=1 transition (photon energy 7.0 eV). (hc = 1240 eV·nm)",
      "choices": [
        "354 nm",
        "89 nm",
        "177 nm",
        "708 nm"
      ],
      "correct": 2,
      "explanation": "λ ≈ 177 nm. Using λ = hc/E = 1240/7.0 ≈ 177 nm — in the ultraviolet range, just beyond visible light. Choice A (89 nm) is roughly half the correct value, as if dividing by 14 instead of 7. Choice C (354 nm) is roughly double the correct value, and choice D (708 nm) is roughly quadruple — both consistent with using half the actual photon energy (3.5 eV) or a quarter of it (1.75 eV) instead of the given 7.0 eV."
    },
    {
      "id": "15-14",
      "topic": "15.2 The Bohr Model",
      "stem": "An electron in the ground state is illuminated with photons of energy LESS than the energy needed to reach the next level up. Is the photon absorbed?",
      "choices": [
        "Yes, partially — the electron absorbs whatever fraction of that energy it can use.",
        "Yes, and the electron jumps up to the nearest available level regardless.",
        "No — its energy doesn't match any available energy gap, so it passes through unabsorbed.",
        "This depends on the photon's intensity, not just its energy."
      ],
      "correct": 2,
      "explanation": "No, it passes through unabsorbed. Absorption requires an exact match between photon energy and an available energy gap — being close isn't sufficient, no matter how small the mismatch. \"Partial absorption\" incorrectly assumes an electron can absorb only a fraction of a photon's energy; photons are absorbed whole or not at all. \"Jumps to the nearest level anyway\" ignores that quantized levels require an exact energy match, not just proximity. \"Depends on intensity\" confuses intensity (which controls the *rate* of photons arriving) with whether an individual photon's energy matches a gap, which it does not here."
    },
    {
      "id": "15-15",
      "topic": "15.2 The Bohr Model",
      "stem": "If an atom's electron is already in its highest possible bound energy level, can it absorb another photon and remain bound to the atom?",
      "choices": [
        "No further bound-to-bound jump is possible, but a high-enough-energy photon could ionize it entirely.",
        "This depends only on the photon's exact wavelength, never its total energy.",
        "Yes, it can always absorb any incoming photon and remain bound to the atom.",
        "No, the electron can never absorb another photon under any circumstances at all."
      ],
      "correct": 0,
      "explanation": "No further bound transition, but ionization is possible. With no higher bound level available, the electron can't make another bound-to-bound jump — but a sufficiently energetic photon can still be absorbed if it provides enough energy to fully eject the electron from the atom (ionization), a qualitatively different process from a simple level-to-level transition. \"Yes, it can always absorb any photon and stay bound\" ignores that there's no higher bound level left to jump to. \"No, never again under any circumstances\" wrongly rules out ionization entirely. \"Depends only on wavelength, not energy\" is a false distinction, since wavelength and energy describe the same photon property (E = hc/λ) and always move together."
    },
    {
      "id": "15-16",
      "topic": "15.2 The Bohr Model",
      "stem": "A hypothetical atom has an ionization threshold at 0 eV and a ground state at −4.0 eV, with no intermediate levels. Find the minimum photon energy needed to ionize an electron starting in the ground state.",
      "choices": [
        "0 eV",
        "8.0 eV",
        "4.0 eV",
        "Cannot be determined"
      ],
      "correct": 2,
      "explanation": "4.0 eV. The electron needs exactly enough energy to bridge the gap from −4.0 eV up to the 0 eV ionization threshold — any less, and it remains bound; any photon energy at or above 4.0 eV can ionize it (with energy above 4.0 eV giving the freed electron leftover kinetic energy). Choice A (0 eV) mistakes the ionization threshold's own energy value for the energy needed to *reach* it. Choice C (8.0 eV) doubles the actual 4.0 eV gap. Choice D claims it can't be determined, but the gap is directly given by the two stated energy levels."
    },
    {
      "id": "15-17",
      "topic": "15.3 Emission and Absorption Spectra",
      "stem": "Describe the appearance of an emission spectrum.",
      "choices": [
        "Dark lines at specific wavelengths, against an otherwise bright background.",
        "Bright lines at specific wavelengths, against an otherwise dark background.",
        "A smooth, continuous rainbow with no distinct lines.",
        "A single bright line at one specific wavelength only."
      ],
      "correct": 1,
      "explanation": "Bright lines on a dark background. An emission spectrum shows the specific wavelengths released as electrons in a hot, excited gas fall to lower energy levels. Choice B describes an *absorption* spectrum instead (dark lines on bright). Choice C describes a smooth, continuous blackbody-style spectrum with no lines at all, which isn't what a line spectrum looks like. Choice D wrongly limits emission to a single line, when in fact every possible transition produces its own line, typically several at once."
    },
    {
      "id": "15-18",
      "topic": "15.3 Emission and Absorption Spectra",
      "stem": "Describe the appearance of an absorption spectrum.",
      "choices": [
        "A single dark line appearing at one specific wavelength only.",
        "Bright lines at specific wavelengths, against an otherwise dark background.",
        "Dark lines at specific wavelengths, against an otherwise bright background.",
        "A smooth, continuous rainbow with no distinct lines at all."
      ],
      "correct": 2,
      "explanation": "Dark lines on a bright, continuous background. An absorption spectrum shows the specific wavelengths removed from a broad light source as it passes through a cooler gas, with those photons absorbed to excite electrons upward. Choice A describes an *emission* spectrum instead (bright lines on dark). Choice C describes a smooth continuous spectrum with no missing wavelengths at all. Choice D wrongly limits absorption to a single line, when in fact every accessible transition removes its own line, typically several at once."
    },
    {
      "id": "15-19",
      "topic": "15.3 Emission and Absorption Spectra",
      "stem": "A star's light passes through a cloud of cool hydrogen gas before reaching Earth. What would you expect to see at the specific wavelengths hydrogen normally emits?",
      "choices": [
        "A uniform dimming across the entire spectrum, not specific to hydrogen's wavelengths.",
        "Bright lines, brighter than the surrounding continuous spectrum.",
        "Dark absorption lines, at exactly those same wavelengths.",
        "No effect at all — the gas is too cool to interact with the light."
      ],
      "correct": 2,
      "explanation": "Dark absorption lines, at hydrogen's characteristic wavelengths. The cool gas absorbs photons of exactly those energies from the star's continuous spectrum as the light passes through, removing them and leaving dark gaps at precisely hydrogen's known spectral positions. \"Bright lines\" would only occur if the gas were itself emitting toward the observer, not absorbing from a background source. \"No effect at all\" wrongly assumes a cool gas can't absorb light — coolness relative to the star doesn't prevent absorption from a passing continuous spectrum. \"Uniform dimming\" ignores that absorption is wavelength-specific, not a blanket reduction across the whole spectrum."
    },
    {
      "id": "15-20",
      "topic": "15.3 Emission and Absorption Spectra",
      "stem": "Why does each element produce a unique spectral 'fingerprint' of specific wavelengths?",
      "choices": [
        "Different elements absorb different amounts of ambient heat from their surroundings.",
        "Each element simply has a different natural color, unrelated to its atomic structure.",
        "This is purely a labeling convention among scientists, not a real physical distinction.",
        "Each element has a unique set of quantized electron energy levels, giving it distinct photon wavelengths."
      ],
      "correct": 3,
      "explanation": "Unique energy level structures. Since photon wavelengths emitted or absorbed correspond directly to specific energy GAPS between an atom's levels, and no two elements share identical energy level structures, no two elements produce identical spectral line patterns — each is as unique as a fingerprint. \"Different color naturally\" describes an effect rather than the underlying cause, and isn't even generally true (most elements have no single characteristic color to the eye). \"Different amounts of ambient heat absorbed\" has nothing to do with an atom's fixed, intrinsic energy-level structure. \"Purely a labeling convention\" denies that there's any real physical basis for the differences, when in fact quantized energy levels are the physical cause."
    },
    {
      "id": "15-21",
      "topic": "15.3 Emission and Absorption Spectra",
      "stem": "Astronomers determine a distant star's chemical composition by analyzing its spectrum. Explain the basic principle behind this technique.",
      "choices": [
        "They compare the star's spectral line wavelengths to known elemental fingerprints from Earth labs.",
        "They measure the star's temperature and infer composition from a universal formula.",
        "This is done by directly sampling and analyzing material collected from the star itself.",
        "They measure only the star's overall color and total brightness, nothing more specific."
      ],
      "correct": 0,
      "explanation": "Matching spectral fingerprints. By comparing the specific wavelengths present in a star's absorption or emission lines to the catalogued, unique spectral signatures of known elements, astronomers can identify which elements are present — all without ever physically sampling the star itself. \"Color and brightness only\" is far too crude to identify specific elements. \"Temperature and a universal formula\" describes how astronomers infer a star's overall temperature from its blackbody spectral shape, not how they identify which elements are present. \"Direct sampling\" is impossible at interstellar distances — the whole point of spectroscopy is that it works without ever touching the star."
    },
    {
      "id": "15-22",
      "topic": "15.3 Emission and Absorption Spectra",
      "stem": "If an atom had continuously variable (non-quantized) energy levels instead of discrete ones, what would its emission spectrum look like?",
      "choices": [
        "No spectrum at all — such an atom couldn't emit any light whatsoever.",
        "Identical to the actual sharp-line spectrum that real atoms produce.",
        "A continuous spectrum — a smooth rainbow of all wavelengths, not distinct lines.",
        "A spectrum containing only a single, super-intense spectral line."
      ],
      "correct": 2,
      "explanation": "A continuous, smooth spectrum. If energy levels could take any value rather than being restricted to discrete steps, electrons could emit photons of any energy at all, producing a smooth rainbow rather than distinct lines — the sharp-line spectra we actually observe are direct evidence that energy levels really are quantized. \"Identical to the actual sharp-line spectrum\" contradicts the premise, since real atoms DO have discrete levels while this question asks about a hypothetical continuous case. \"No spectrum at all\" is wrong — the atom could still emit light, just at any energy rather than only certain ones. \"A single super-intense line\" misunderstands that a continuous range of possible energies would spread emission across all wavelengths, not concentrate it into one."
    },
    {
      "id": "15-23",
      "topic": "15.3 Emission and Absorption Spectra",
      "stretch": true,
      "stem": "For the same element, emission and absorption spectra show lines at the same wavelengths — but why might their RELATIVE intensities differ, even though the line positions match exactly?",
      "choices": [
        "Different starting populations mean the same transitions occur with different relative frequencies, producing different intensities.",
        "They never actually differ in intensity at all — this premise is simply false.",
        "Absorption spectra are always uniformly dimmer than emission spectra, by some fixed factor.",
        "Intensity differences are purely due to instrument calibration errors, not real physics."
      ],
      "correct": 0,
      "explanation": "Different starting populations across energy levels. Wavelength position is set purely by the energy GAP between levels, which is identical either way — but how BRIGHT each line appears depends on how many atoms are actually undergoing that specific transition, which depends on which levels are populated in the first place (often requiring specific temperature or excitation conditions for emission, versus starting purely from the ground state for absorption). \"They never actually differ\" directly contradicts the premise of the question. \"Uniformly dimmer by a fixed factor\" assumes a simple constant ratio rather than the real, transition-by-transition dependence on level populations. \"Purely instrument calibration error\" wrongly dismisses a genuine physical effect as a measurement artifact. This distinction between line POSITION and line INTENSITY goes beyond the core wavelength-matching fact this section usually emphasizes."
    },
    {
      "id": "15-24",
      "topic": "15.4 Blackbody Radiation",
      "stem": "As an object's temperature increases, how does its peak blackbody emission wavelength change?",
      "choices": [
        "It shifts to longer wavelengths.",
        "It stays at the same wavelength.",
        "It becomes undefined.",
        "It shifts to shorter wavelengths."
      ],
      "correct": 3,
      "explanation": "Shifts to shorter wavelengths (higher frequency, higher energy). This is why a heated metal shifts from dull red, through orange and yellow, toward white as its temperature climbs — the peak of its emission is moving toward shorter wavelengths. \"Shifts to longer wavelengths\" inverts Wien's law, treating hotter as if it meant longer peak wavelength. \"Stays the same\" ignores that the peak wavelength depends on temperature at all. \"Becomes undefined\" is wrong — the blackbody spectrum remains a well-defined curve with a clear peak at every nonzero temperature."
    },
    {
      "id": "15-25",
      "topic": "15.4 Blackbody Radiation",
      "stem": "As an object's temperature increases, how does its total radiated power change?",
      "choices": [
        "It stays the same.",
        "It increases.",
        "It becomes zero.",
        "It decreases."
      ],
      "correct": 1,
      "explanation": "It increases, and quite dramatically — a hotter object radiates significantly more total electromagnetic energy across its whole spectrum than a cooler one. \"Decreases\" inverts the Stefan-Boltzmann relationship, where radiated power actually grows steeply (as T⁴) with temperature. \"Stays the same\" ignores this strong temperature dependence entirely. \"Becomes zero\" is wrong — radiated power never vanishes for any object above absolute zero; it only grows as temperature rises."
    },
    {
      "id": "15-26",
      "topic": "15.4 Blackbody Radiation",
      "stem": "Compare the peak emission wavelength of a very hot blue star to that of a cooler red star.",
      "choices": [
        "The blue star's peak wavelength is longer.",
        "Cannot be determined without knowing the stars' sizes.",
        "The blue star's peak wavelength is shorter.",
        "They have equal peak wavelengths."
      ],
      "correct": 2,
      "explanation": "The blue star's peak wavelength is shorter. Blue light itself has a shorter wavelength than red light, and hotter objects peak at shorter wavelengths — both facts point the same direction, consistently identifying the hotter star as blue and the cooler star as red. \"Blue star's peak wavelength is longer\" inverts both relationships at once. \"Equal peak wavelengths\" ignores that different temperatures necessarily produce different peak wavelengths (Wien's law). \"Cannot be determined without size\" is a distractor — peak wavelength depends only on temperature, not on the star's physical size."
    },
    {
      "id": "15-27",
      "topic": "15.4 Blackbody Radiation",
      "stem": "Why was blackbody radiation historically difficult to explain using classical (non-quantum) physics?",
      "choices": [
        "Classical predictions had radiated intensity increasing without bound at short wavelengths — not what's observed.",
        "Classical physics couldn't account for any temperature dependence in radiation whatsoever.",
        "This was never actually a real problem for classical physics at all.",
        "Classical physics predicted no radiation at all from any object, regardless of temperature."
      ],
      "correct": 0,
      "explanation": "The 'ultraviolet catastrophe.' Classical physics, treating energy as continuously variable, predicted intensity should keep increasing without limit at short wavelengths — a prediction wildly at odds with real measurements. Planck's proposal that energy is emitted and absorbed only in discrete chunks (quanta, hf) resolved this contradiction and matched the observed spectrum, marking the historical birth of quantum theory. \"Predicted no radiation at all\" gets the failure backwards — the actual problem was predicting *too much* radiation at short wavelengths, not none. \"Couldn't account for temperature dependence\" is wrong — classical theory did include temperature; its failure was specifically in the short-wavelength behavior. \"Never actually a problem\" denies the well-documented historical crisis that motivated quantum theory in the first place."
    },
    {
      "id": "15-28",
      "topic": "15.4 Blackbody Radiation",
      "stem": "Does every object with a nonzero temperature emit blackbody radiation, even if it isn't visibly glowing?",
      "choices": [
        "No — only objects hot enough to glow visibly emit any radiation at all.",
        "No — blackbody radiation only applies to stars and other astronomical objects.",
        "Yes, but only metallic objects emit any blackbody radiation at all.",
        "Yes — everyday objects simply peak in the infrared, invisible to human eyes."
      ],
      "correct": 3,
      "explanation": "Yes, universally. Every object above absolute zero radiates across a spectrum of wavelengths — objects at everyday, room-like temperatures simply peak in the infrared range, which human eyes can't detect, so we don't perceive them as 'glowing' even though they are indeed continuously radiating energy. \"Only objects hot enough to glow visibly\" mistakes visibility for the actual criterion, when every object with nonzero temperature radiates regardless of whether we can see it. \"Only metals emit\" wrongly restricts blackbody radiation to one class of material. \"Only stars and astronomical objects\" ignores that blackbody radiation is a universal thermal property, including for everyday objects and even the human body."
    },
    {
      "id": "15-29",
      "topic": "15.4 Blackbody Radiation",
      "stretch": true,
      "stem": "A blackbody's absolute temperature is doubled. How does its peak emission wavelength change?",
      "choices": [
        "It quadruples.",
        "It roughly doubles.",
        "It roughly halves.",
        "It stays the same."
      ],
      "correct": 2,
      "explanation": "It roughly halves. Peak wavelength is inversely proportional to absolute temperature (Wien's Law: λ_peak ∝ 1/T) — doubling temperature roughly halves the peak wavelength, not doubles it. \"Roughly doubles\" inverts this proportionality entirely. \"Stays the same\" ignores that peak wavelength depends on temperature at all. \"Quadruples\" would follow from an inverse-square relationship (1/T²), but Wien's Law is a simple inverse (1/T), not a squared one. This specific inverse proportionality (rather than just the general 'hotter means shorter wavelength' direction) is a more precise, quantitative relationship than what's typically expected on the AP2 exam, which usually stays at the qualitative level."
    },
    {
      "id": "15-30",
      "topic": "15.5 Photoelectric Effect",
      "stem": "A metal has work function 3.0 eV. Light of energy 5.0 eV strikes it. Find the maximum kinetic energy of ejected electrons.",
      "choices": [
        "8.0 eV",
        "2.0 eV",
        "3.0 eV",
        "5.0 eV"
      ],
      "correct": 1,
      "explanation": "K<sub>max</sub> = 2.0 eV. Using K<sub>max</sub> = hf − φ (with photon energy standing in for hf): K<sub>max</sub> = 5.0 − 3.0 = 2.0 eV. Choice B (3.0 eV) reports the work function itself instead of subtracting it. Choice C (5.0 eV) reports the photon energy alone, skipping the subtraction entirely. Choice D (8.0 eV) adds the photon energy and work function together instead of subtracting one from the other."
    },
    {
      "id": "15-31",
      "topic": "15.5 Photoelectric Effect",
      "stem": "The same metal (work function 3.0 eV) is now struck by light of energy 2.0 eV. Describe what happens.",
      "choices": [
        "K<sub>max</sub> = −1.0 eV, per the standard photoelectric equation.",
        "K<sub>max</sub> = 1.0 eV, with fewer electrons ejected than usual.",
        "K<sub>max</sub> = 2.0 eV, exactly equal to the photon energy itself.",
        "No electrons are ejected at all, since photon energy is below the work function."
      ],
      "correct": 3,
      "explanation": "No electrons are ejected. Since the photon energy (2.0 eV) is less than the work function (3.0 eV), no single photon carries enough energy to eject an electron — there's no such thing as a negative kinetic energy, so 'zero ejection' is the only physically sensible outcome here, not a negative K<sub>max</sub>. Choice A applies the K<sub>max</sub> = hf − φ formula mechanically without recognizing that a negative result actually signals no ejection at all. Choice C invents a 'partial ejection with reduced K<sub>max</sub>' outcome that has no basis in the physics — a given electron is either ejected or it isn't. Choice D forgets to subtract the work function, reporting the raw photon energy instead."
    },
    {
      "id": "15-32",
      "topic": "15.5 Photoelectric Effect",
      "stem": "A metal has work function 2.5 eV. Find its threshold frequency. (h = 6.63×10⁻³⁴ J·s, 1 eV = 1.6×10⁻¹⁹ J)",
      "choices": [
        "6.0 × 10¹⁴ Hz",
        "1.5 × 10¹⁴ Hz",
        "1.2 × 10¹⁵ Hz",
        "3.0 × 10¹⁴ Hz"
      ],
      "correct": 0,
      "explanation": "f ≈ 6.0 × 10¹⁴ Hz. First convert φ to joules: (2.5)(1.6×10⁻¹⁹) = 4.0×10⁻¹⁹ J. Then f<sub>threshold</sub> = φ/h = (4.0×10⁻¹⁹)/(6.63×10⁻³⁴) ≈ 6.0×10¹⁴ Hz — the frequency at which hf exactly equals the work function, with K<sub>max</sub> = 0. Choice A (1.5×10¹⁴ Hz) is about a quarter of the correct value. Choice B (3.0×10¹⁴ Hz) is half the correct value, as if the eV-to-joule conversion were applied twice, or h were doubled. Choice D (1.2×10¹⁵ Hz) is double the correct value, the opposite factor-of-2 slip."
    },
    {
      "id": "15-33",
      "topic": "15.5 Photoelectric Effect",
      "stem": "A metal has work function 2.0 eV. Light of wavelength 500 nm strikes it. Find the maximum kinetic energy of ejected electrons. (hc = 1240 eV·nm)",
      "choices": [
        "2.5 eV",
        "2.0 eV",
        "0.5 eV",
        "1.0 eV"
      ],
      "correct": 2,
      "explanation": "K<sub>max</sub> ≈ 0.5 eV. First find photon energy: E = hc/λ = 1240/500 = 2.48 eV. Then K<sub>max</sub> = 2.48 − 2.0 ≈ 0.5 eV. Choice B (1.0 eV) comes from a photon-energy calculation error that effectively doubles the true K<sub>max</sub>. Choice C (2.0 eV) reports the work function itself rather than the subtracted result. Choice D (2.5 eV) reports the photon energy alone, skipping the subtraction of the work function entirely."
    },
    {
      "id": "15-34",
      "topic": "15.5 Photoelectric Effect",
      "stem": "If the intensity of light striking a metal is increased (frequency held fixed, above threshold), how does the maximum kinetic energy of ejected electrons change?",
      "choices": [
        "It decreases.",
        "It increases proportionally with intensity.",
        "It stays unchanged.",
        "It becomes undefined."
      ],
      "correct": 2,
      "explanation": "Unchanged. Maximum kinetic energy depends only on frequency, via K<sub>max</sub> = hf − φ — intensity has no place in that equation at all. Increasing intensity increases the NUMBER of electrons ejected per second (more photons arriving), not the maximum energy each individual electron carries. \"Increases proportionally with intensity\" confuses the electron ejection rate (which does scale with intensity) with K<sub>max</sub> (which doesn't). \"Decreases\" has no basis in the photoelectric equation whatsoever. \"Becomes undefined\" is wrong — K<sub>max</sub> remains perfectly well-defined at any intensity."
    },
    {
      "id": "15-35",
      "topic": "15.5 Photoelectric Effect",
      "stem": "If the frequency of light striking a metal is increased (staying above threshold), how does the maximum kinetic energy of ejected electrons change?",
      "choices": [
        "It stays unchanged.",
        "It becomes undefined.",
        "It increases.",
        "It decreases."
      ],
      "correct": 2,
      "explanation": "It increases, directly and linearly. Since K<sub>max</sub> = hf − φ, a higher frequency directly raises K<sub>max</sub> — this is the one variable that DOES control maximum kinetic energy, in contrast to intensity. \"Stays unchanged\" contradicts the direct dependence of K<sub>max</sub> on frequency. \"Decreases\" inverts that direct relationship. \"Becomes undefined\" is wrong — K<sub>max</sub> remains well-defined at any frequency above threshold."
    },
    {
      "id": "15-36",
      "topic": "15.5 Photoelectric Effect",
      "stem": "Metals A and B are illuminated with the same frequency of light (above both their threshold frequencies). Metal A has a higher work function than Metal B. Compare the maximum kinetic energy of ejected electrons from each.",
      "choices": [
        "Both have equal K<sub>max</sub>, since frequency is the same.",
        "Cannot be determined without knowing the exact frequency.",
        "Metal A's electrons have higher K<sub>max</sub>.",
        "Metal B's electrons have higher K<sub>max</sub>."
      ],
      "correct": 3,
      "explanation": "Metal B's electrons have higher K<sub>max</sub>. Using K<sub>max</sub> = hf − φ with the same hf for both: the metal with the SMALLER work function (Metal B) has less energy 'spent' overcoming the binding, leaving more left over as kinetic energy. \"Metal A's electrons have higher K<sub>max</sub>\" inverts this relationship — a *higher* work function means *more* energy is used freeing the electron, leaving *less* kinetic energy, not more. \"Both equal\" ignores that work function also enters the K<sub>max</sub> equation, not just frequency. \"Cannot be determined without the exact frequency\" is a distractor — frequency is already stated to be equal, so it isn't the missing piece."
    },
    {
      "id": "15-37",
      "topic": "15.5 Photoelectric Effect",
      "stem": "Electrons ejected from a metal have maximum kinetic energy 1.5 eV. Find the stopping voltage needed to halt even the fastest of these electrons.",
      "choices": [
        "1.5 × 10⁻¹⁹ V",
        "1.5 V",
        "3.0 V",
        "0.75 V"
      ],
      "correct": 1,
      "explanation": "V<sub>stop</sub> = 1.5 V. Since qV<sub>stop</sub> = K<sub>max</sub>, and using the elementary charge for a single electron, the stopping voltage in volts numerically equals K<sub>max</sub> in eV directly — a convenient shortcut of working in electron-volts. Choice A (0.75 V) halves the correct value, as if dividing the kinetic energy unnecessarily by two. Choice C (3.0 V) doubles it. Choice D (1.5×10⁻¹⁹ V) mistakenly tacks the numeric value of the elementary charge onto the answer, rather than recognizing that working in eV already makes the extra charge conversion unnecessary."
    },
    {
      "id": "15-38",
      "topic": "15.5 Photoelectric Effect",
      "stem": "A photoelectric experiment measures stopping voltage at several light frequencies, then plots stopping voltage (vertical axis) against frequency (horizontal axis). What does the slope represent, and what does the x-intercept represent?",
      "choices": [
        "Slope has no physical meaning; only the y-intercept matters.",
        "Slope = h/e; x-intercept = threshold frequency.",
        "Slope = e/h; x-intercept = φ.",
        "Slope = φ; x-intercept = h/e."
      ],
      "correct": 1,
      "explanation": "Slope = h/e; x-intercept = threshold frequency. Rearranging qV<sub>stop</sub> = hf − φ into V<sub>stop</sub> = (h/e)f − (φ/e) gives a linear equation, where the slope directly yields Planck's constant divided by elementary charge, and the x-intercept (where V<sub>stop</sub> = 0) is exactly the threshold frequency. Choice B swaps which quantity comes from which feature of the graph, misassigning slope = φ and x-intercept = h/e. Choice C inverts the slope's ratio (e/h instead of h/e) and again misidentifies the x-intercept as φ. Choice D wrongly dismisses the slope, which is actually the most information-rich feature of this classic linear-graph analysis, the same style used throughout this course to extract physical constants from experimental data."
    },
    {
      "id": "15-39",
      "topic": "15.5 Photoelectric Effect",
      "stem": "A photoelectric experiment is repeated with a more intense light source at the same frequency (above threshold). Compare the stopping voltage required in the two trials.",
      "choices": [
        "The stopping voltage required is unchanged.",
        "The more intense trial requires a higher stopping voltage.",
        "No stopping voltage exists once intensity is increased.",
        "The more intense trial requires a lower stopping voltage."
      ],
      "correct": 0,
      "explanation": "Unchanged. Stopping voltage depends only on K<sub>max</sub> (via qV<sub>stop</sub> = K<sub>max</sub>), and K<sub>max</sub> depends only on frequency, not intensity. A more intense light source ejects more electrons per second (more current), but the maximum kinetic energy of even the fastest electron — and thus the voltage needed to stop it — stays exactly the same. Choices A and B both wrongly assume intensity affects K<sub>max</sub> (in opposite directions), when intensity doesn't appear in the K<sub>max</sub> equation at all. Choice D is wrong because electrons are still ejected with unchanged K<sub>max</sub>, so a (still identical) stopping voltage certainly exists."
    },
    {
      "id": "15-40",
      "topic": "15.6 Compton Scattering",
      "stem": "In Compton scattering, a photon collides with an electron and scatters off at an angle. Compare the scattered photon's wavelength to its original wavelength.",
      "choices": [
        "The scattered photon has a longer wavelength (lower energy).",
        "The wavelength change depends only on the electron's initial speed.",
        "The scattered photon has a shorter wavelength (higher energy).",
        "The wavelength is unchanged."
      ],
      "correct": 0,
      "explanation": "Longer wavelength, lower energy. The photon transfers some of its energy and momentum to the electron during the collision, leaving the scattered photon with less energy — and correspondingly, via E = hc/λ, a longer wavelength than it started with. \"Shorter wavelength (higher energy)\" inverts the actual energy transfer — the photon *loses* energy to the electron, which lengthens rather than shortens its wavelength. \"Unchanged\" ignores that any energy is transferred during the collision at all. \"Depends only on the electron's initial speed\" is wrong — the wavelength shift depends on the scattering angle, with the electron typically treated as initially at rest."
    },
    {
      "id": "15-41",
      "topic": "15.6 Compton Scattering",
      "stem": "What does Compton scattering provide direct evidence for?",
      "choices": [
        "That photons carry real, quantifiable momentum, not just energy.",
        "That light cannot interact with individual particles at all.",
        "That electrons have no mass at all, regardless of their motion.",
        "That light travels slower inside matter than in vacuum."
      ],
      "correct": 0,
      "explanation": "Photon momentum. Treating the photon-electron interaction as a genuine two-particle collision — with both momentum AND energy conserved — is exactly what's needed to correctly predict the observed wavelength shift, providing strong evidence that photons carry real momentum, not just energy. \"Light travels slower in matter\" is unrelated — Compton scattering involves free electrons, not propagation through a medium. \"Electrons have no mass\" actually contradicts the collision picture, which requires the electron to have real mass and momentum to exchange. \"Light cannot interact with individual particles\" is directly disproven by the fact that Compton scattering IS such an interaction."
    },
    {
      "id": "15-42",
      "topic": "15.6 Compton Scattering",
      "stem": "In a Compton scattering event, compare the electron's kinetic energy after the collision to before.",
      "choices": [
        "It becomes exactly zero.",
        "It increases.",
        "It stays the same.",
        "It decreases."
      ],
      "correct": 1,
      "explanation": "It increases. The electron gains kinetic energy from the collision, consistent with the photon losing energy (and gaining wavelength) as it transfers some of its energy and momentum to the electron. \"It decreases\" is wrong — the electron starts essentially at rest, so it can only gain energy from the interaction, not lose energy it never had. \"Stays the same\" ignores that energy is transferred from the photon to the electron during the collision. \"Becomes exactly zero\" contradicts the fact that the electron picks up real kinetic energy, not none at all."
    },
    {
      "id": "15-43",
      "topic": "15.6 Compton Scattering",
      "stem": "Which conservation laws are applied together to analyze a Compton scattering collision?",
      "choices": [
        "Conservation of both energy AND momentum, simultaneously.",
        "Conservation of angular momentum only, not linear momentum.",
        "Conservation of charge only, with no momentum considerations.",
        "Conservation of energy only, with momentum ignored entirely."
      ],
      "correct": 0,
      "explanation": "Both energy and momentum together. Compton scattering is analyzed exactly like any two-particle collision from earlier mechanics work, just with a photon as one of the 'particles' — both conservation laws must be satisfied simultaneously to correctly predict the outcome. \"Charge only\" isn't the relevant tool here since neither particle's charge changes in this interaction. \"Energy only\" leaves the problem underdetermined; momentum conservation is also required to pin down the wavelength shift. \"Angular momentum only\" doesn't apply — this is analyzed as a linear collision, not through rotational quantities."
    },
    {
      "id": "15-44",
      "topic": "15.6 Compton Scattering",
      "stem": "Does Compton scattering primarily support the wave model of light, the particle model, or both equally?",
      "choices": [
        "Both models equally, with no distinction.",
        "Primarily the wave model.",
        "Primarily the particle model.",
        "Neither model — Compton scattering is unrelated to light's fundamental nature."
      ],
      "correct": 2,
      "explanation": "Primarily the particle model. Treating the photon as a discrete, particle-like object with definite momentum and energy — engaging in a billiard-ball-style collision with the electron — is what correctly predicts the Compton wavelength shift. A purely wave-based treatment doesn't naturally produce this same result. \"Primarily the wave model\" is backwards — a wave picture alone can't account for a 'collision' with a localized wavelength shift. \"Both models equally\" overstates the wave model's role here; the particle picture is what's essential. \"Unrelated to light's nature\" is wrong — Compton scattering is one of the key historical proofs of light's particle-like behavior."
    },
    {
      "id": "15-45",
      "topic": "15.6 Compton Scattering",
      "stretch": true,
      "stem": "At which scattering angle does a photon transfer the MAXIMUM possible energy to an electron in Compton scattering: 0° (no deflection), 90°, or 180° (directly backward)?",
      "choices": [
        "0°",
        "180°",
        "Energy transfer is the same at every angle",
        "90°"
      ],
      "correct": 1,
      "explanation": "180° — direct backward scattering. This is the most 'head-on' type of collision possible, analogous to how a direct head-on collision in ordinary mechanics transfers more momentum and energy than a glancing one. At 0° there is essentially no deflection and thus minimal momentum/energy transfer to the electron. At 90°, the interaction is more of a glancing hit — some transfer occurs, but less than a full head-on collision. \"Energy transfer is the same at every angle\" contradicts the real angle dependence of the Compton formula, where the wavelength shift (and hence energy transfer) scales with (1 − cos θ), which is maximized exactly at θ = 180°. Extending the collision analogy to reason about how scattering ANGLE affects energy transfer efficiency is a step beyond the core 'photon loses energy, wavelength increases' fact this section typically emphasizes."
    },
    {
      "id": "15-46",
      "topic": "15.7 Fission, Fusion & Decay",
      "stem": "Find the energy released when 0.0010 kg of mass is converted entirely into energy. (c = 3.0×10⁸ m/s)",
      "choices": [
        "2.7 × 10²⁵ J",
        "3.0 × 10⁷ J",
        "9.0 × 10¹³ J",
        "9.0 × 10¹⁶ J"
      ],
      "correct": 2,
      "explanation": "E = 9.0 × 10¹³ J. Using E = mc² = (0.0010)(3.0×10⁸)² = (0.0010)(9.0×10¹⁶) = 9.0×10¹³ J — an enormous amount of energy from a genuinely tiny amount of mass. Choice A (3.0×10⁷ J) comes from using E = mc instead of E = mc², forgetting to square the speed of light. Choice C (9.0×10¹⁶ J) comes from computing c² alone and forgetting to multiply by the mass at all. Choice D (2.7×10²⁵ J) comes from using c³ instead of c², an extra unwanted factor of c."
    },
    {
      "id": "15-47",
      "topic": "15.7 Fission, Fusion & Decay",
      "stem": "Explain the concept of 'mass defect' in a nucleus.",
      "choices": [
        "The nucleus has slightly LESS mass than its separate protons and neutrons combined.",
        "Mass defect only applies to unstable, radioactive nuclei, not stable ones.",
        "Mass defect refers to unavoidable measurement error in determining nuclear mass precisely.",
        "The nucleus has slightly MORE mass than its separate constituent protons and neutrons."
      ],
      "correct": 0,
      "explanation": "The nucleus has less mass than its separated parts. The assembled nucleus's mass is always slightly LESS than the sum of the masses of its individual protons and neutrons when separate — that missing mass was converted into binding energy (via E = mc²) when the nucleus formed, and that binding energy is what holds the nucleus together. Choice A inverts this relationship, claiming the nucleus has *more* mass than its parts. Choice C wrongly dismisses mass defect as measurement error, when it's a real, calculable physical effect. Choice D wrongly restricts mass defect to unstable nuclei, when in fact it exists in every bound nucleus, stable or not, since it's simply the source of the nucleus's binding energy."
    },
    {
      "id": "15-48",
      "topic": "15.7 Fission, Fusion & Decay",
      "stem": "Compare the total mass of a helium-4 nucleus to the sum of the masses of 2 free protons and 2 free neutrons.",
      "choices": [
        "This comparison depends on the nucleus's temperature.",
        "The helium-4 nucleus has less total mass than the separate particles.",
        "The helium-4 nucleus actually has more total mass than the separate particles.",
        "They have exactly equal mass, with no difference whatsoever."
      ],
      "correct": 1,
      "explanation": "The helium-4 nucleus has less mass. The 'missing' mass compared to the separated particles became the binding energy holding the nucleus together — this mass defect is a universal feature of every bound nucleus, not just helium. Choice A inverts the relationship, claiming the bound nucleus has *more* mass than its separated parts. Choice C ignores that binding energy corresponds to a real, measurable mass difference. Choice D wrongly makes mass defect temperature-dependent, when it's actually a fixed property of the bound configuration itself."
    },
    {
      "id": "15-49",
      "topic": "15.7 Fission, Fusion & Decay",
      "stem": "Explain why BOTH nuclear fission (splitting heavy nuclei) and nuclear fusion (combining light nuclei) release energy, despite being essentially opposite processes.",
      "choices": [
        "Both release energy, but for entirely unrelated reasons that simply happen to coincide.",
        "Fission releases energy, but fusion actually requires a large net energy input overall.",
        "Only fission actually releases energy; the premise about fusion releasing energy is incorrect.",
        "Both processes move nuclei toward more tightly bound configurations, releasing the mass difference as energy."
      ],
      "correct": 3,
      "explanation": "Both move toward greater stability. Heavy nuclei become more stable by splitting into medium-sized pieces; light nuclei become more stable by combining into medium-sized nuclei — in both cases, the resulting products are more tightly bound (have less total mass) than the starting materials, and that mass difference converts to released energy via E = mc², regardless of which direction the process runs. Choice A contradicts the premise; fusion of light nuclei (like hydrogen) is exothermic and releases net energy, not requiring net input. Choice C denies the well-established fact that stellar fusion (as in the Sun) releases enormous energy. Choice D wrongly treats the two processes' energy release as coincidental, when they in fact share the same underlying cause: movement toward tighter nuclear binding."
    },
    {
      "id": "15-50",
      "topic": "15.7 Fission, Fusion & Decay",
      "stem": "Find the energy released, in MeV, corresponding to a mass defect of 0.020 u. (1 u = 931 MeV/c²)",
      "choices": [
        "190 MeV",
        "0.019 MeV",
        "1.9 MeV",
        "19 MeV"
      ],
      "correct": 3,
      "explanation": "E ≈ 19 MeV. Using E = (0.020 u)(931 MeV/u) ≈ 18.6 MeV, rounding to about 19 MeV. Choice A (0.019 MeV) is off by a factor of 1000 too small, likely from a unit-conversion slip. Choice B (1.9 MeV) is off by a factor of 10 too small. Choice D (190 MeV) is off by a factor of 10 too large — both come from misplacing a decimal point in the multiplication."
    },
    {
      "id": "15-51",
      "topic": "15.7 Fission, Fusion & Decay",
      "stem": "Which type of nuclear process powers the Sun?",
      "choices": [
        "Beta decay",
        "Fusion",
        "Fission",
        "Gamma decay"
      ],
      "correct": 1,
      "explanation": "Fusion. In the Sun's core, hydrogen nuclei combine (fuse) into helium at extremely high temperatures and pressures, releasing the energy that powers the Sun's light and heat. Fission is the opposite process (splitting heavy nuclei), not what occurs in the Sun's hydrogen-burning core. Gamma decay releases only a photon from an already-excited nucleus, with no ongoing fuel-burning reaction to sustain stellar energy output. Beta decay is a small-scale decay of individual nuclei, not the fuel-combining reaction responsible for the Sun's energy generation."
    },
    {
      "id": "15-52",
      "topic": "15.7 Fission, Fusion & Decay",
      "stem": "Which type of nuclear process is used in conventional nuclear power plants on Earth?",
      "choices": [
        "Fusion",
        "Beta decay",
        "Fission",
        "Gamma decay"
      ],
      "correct": 2,
      "explanation": "Fission. Conventional nuclear reactors split heavy uranium or plutonium nuclei, releasing energy from the mass difference between the original heavy nucleus and the resulting fission fragments. Fusion would require extreme temperature and pressure conditions not achieved in conventional Earth-based reactors. Gamma decay releases only a photon, not the sustained, controllable chain-reaction energy release reactors are built around. Beta decay is a much smaller-scale decay process, not the basis for a power plant's energy output."
    },
    {
      "id": "15-53",
      "topic": "15.7 Fission, Fusion & Decay",
      "stretch": true,
      "stem": "A reactor's fuel undergoes fission, releasing energy. If you account for the released energy as an equivalent mass (via E = mc²), how does the total mass-energy before and after the fission event compare?",
      "choices": [
        "Total mass-energy increases overall, since energy was created from nothing.",
        "Total mass-energy is exactly conserved — the 'lost' mass equals the released energy's equivalent mass.",
        "Total mass-energy decreases overall, since some mass was genuinely destroyed.",
        "Mass and energy must be tracked as two entirely separate conserved quantities, with no relationship between them."
      ],
      "correct": 1,
      "explanation": "Exactly conserved, when mass and energy are treated together. Mass alone appears to decrease during fission, but that 'lost' mass exactly equals (via E = mc²) the energy released — total mass-ENERGY, properly combined into one quantity, is strictly conserved throughout. Choice A tracks mass alone and wrongly concludes something was destroyed, without accounting for the energy that mass became. Choice C wrongly implies energy was created from nothing, when it in fact came from existing mass. Choice D denies mass-energy equivalence, treating mass and energy as two unrelated quantities rather than the single conserved quantity Einstein's relation actually describes. This more sophisticated framing — mass-energy equivalence as a single conserved quantity, rather than 'mass decreases, energy appears' as two separate facts — is a deeper synthesis than the basic mass-defect calculation this section usually tests."
    },
    {
      "id": "15-54",
      "topic": "15.7 Fission, Fusion & Decay",
      "stem": "A fission event releases 200 MeV. Find this energy in joules. (1 eV = 1.6×10⁻¹⁹ J)",
      "choices": [
        "3.2 × 10⁻¹¹ J",
        "3.2 × 10⁻¹⁴ J",
        "3.2 × 10⁻⁵ J",
        "3.2 × 10⁻⁸ J"
      ],
      "correct": 0,
      "explanation": "E = 3.2 × 10⁻¹¹ J. Converting: 200 MeV = 200×10⁶ eV, so E = (200×10⁶)(1.6×10⁻¹⁹) = 3.2×10⁻¹¹ J. Choice A (3.2×10⁻¹⁴ J) is off by a factor of 1000 too small, likely from a MeV-to-eV conversion slip. Choice C (3.2×10⁻⁸ J) is off by a factor of 1000 too large. Choice D (3.2×10⁻⁵ J) is off by a factor of 10⁶ too large, a larger compounded version of the same conversion error."
    },
    {
      "id": "15-55",
      "topic": "15.7 Fission, Fusion & Decay",
      "stem": "Why do fusion reactions require extremely high temperatures, unlike most fission reactions (which can be triggered by a single low-energy neutron)?",
      "choices": [
        "Fusion reactions are actually far easier to trigger than fission, contrary to the premise.",
        "Fusion requires overcoming electric repulsion between two positive nuclei; fission's neutron faces no such barrier.",
        "Fusion only works with radioactive isotopes, which need heat to become unstable first.",
        "High temperature is needed simply to supply the mass that later gets converted to energy."
      ],
      "correct": 1,
      "explanation": "Overcoming Coulomb repulsion. Fusing two nuclei requires bringing two positively charged objects close enough for the short-range strong nuclear force to take over — but their electric repulsion strongly resists this approach. Extremely high temperatures give nuclei enough kinetic energy to overcome that repulsion. Fission, by contrast, is triggered by an electrically neutral neutron, which faces no repulsive barrier and can approach a nucleus freely at any temperature. Choice B contradicts the premise and physical reality — fusion needs extreme conditions precisely because it's hard, not easy, to initiate. Choice C confuses supplying kinetic energy to overcome repulsion with supplying the mass-energy that gets converted; the mass involved in fusion's energy release comes from the nuclei themselves, not from the added heat. Choice D is wrong because fusion fuel (such as ordinary hydrogen) need not be radioactive at all."
    },
    {
      "id": "15-56",
      "topic": "15.8 Types of Radioactive Decay",
      "stem": "Uranium-238 (atomic number 92) undergoes alpha decay. Identify the resulting daughter nucleus.",
      "choices": [
        "Thorium-234",
        "Thorium-242",
        "Protactinium-234",
        "Radium-234"
      ],
      "correct": 0,
      "explanation": "Thorium-234. Alpha decay removes 4 from the mass number (238 − 4 = 234) and 2 from the atomic number (92 − 2 = 90, which is Thorium). Choice B (Protactinium-234) keeps the correct mass number but gets the atomic-number change wrong, effectively increasing rather than decreasing it. Choice C (Thorium-242) gets the atomic number right but keeps the mass number unchanged instead of decreasing it by 4. Choice D (Radium-234) keeps the mass number unchanged and moves the atomic number in the wrong direction."
    },
    {
      "id": "15-57",
      "topic": "15.8 Types of Radioactive Decay",
      "stem": "Carbon-14 (atomic number 6) undergoes beta-minus decay. Identify the resulting daughter nucleus.",
      "choices": [
        "Boron-14",
        "Nitrogen-14",
        "Carbon-13",
        "Nitrogen-13"
      ],
      "correct": 1,
      "explanation": "Nitrogen-14. Beta-minus decay leaves the mass number unchanged (14) while increasing the atomic number by 1 (6 + 1 = 7, which is Nitrogen), since a neutron converts into a proton. Choice B (Boron-14) moves the atomic number the wrong direction, decreasing instead of increasing it. Choice C (Nitrogen-13) correctly identifies the daughter element but incorrectly decreases the mass number, which beta decay does not change. Choice D (Carbon-13) gets both changes wrong: it keeps the parent element (no atomic-number change at all) and decreases the mass number."
    },
    {
      "id": "15-58",
      "topic": "15.8 Types of Radioactive Decay",
      "stem": "Sodium-22 (atomic number 11) undergoes beta-plus decay. Identify the resulting daughter nucleus.",
      "choices": [
        "Magnesium-22",
        "Neon-22",
        "Neon-21",
        "Sodium-21"
      ],
      "correct": 1,
      "explanation": "Neon-22. Beta-plus decay leaves the mass number unchanged (22) while decreasing the atomic number by 1 (11 − 1 = 10, which is Neon), since a proton converts into a neutron. Choice B (Magnesium-22) moves the atomic number the wrong direction, increasing instead of decreasing it. Choice C (Neon-21) correctly identifies the daughter element but wrongly decreases the mass number, which beta-plus decay does not change. Choice D (Sodium-21) gets both changes wrong: it keeps the parent element (no atomic-number change) and wrongly decreases the mass number."
    },
    {
      "id": "15-59",
      "topic": "15.8 Types of Radioactive Decay",
      "stem": "A nucleus undergoes gamma decay. How do its mass number and atomic number change?",
      "choices": [
        "Neither changes at all.",
        "Both increase.",
        "Mass number decreases; atomic number stays the same.",
        "Both decrease."
      ],
      "correct": 0,
      "explanation": "Neither changes. Gamma decay simply releases excess internal energy as a high-energy photon, with no alteration to the nucleus's composition — same number of protons, same number of neutrons, before and after. \"Both decrease\" wrongly assumes gamma decay ejects particles from the nucleus, when it releases only a massless, chargeless photon. \"Mass number decreases, atomic number stays the same\" mistakenly borrows the mass-number-change pattern from alpha decay. \"Both increase\" has no basis — gamma decay emits energy outward; it doesn't add protons or neutrons to the nucleus."
    },
    {
      "id": "15-60",
      "topic": "15.8 Types of Radioactive Decay",
      "stem": "In beta-minus decay, a neutron transforms into a proton, emitting an electron. Using conservation of charge, explain why this transformation is consistent.",
      "choices": [
        "The electron carries no charge, so charge is trivially conserved.",
        "Total charge before (0, neutron) equals total charge after (+1 proton, −1 electron = 0).",
        "The neutron's charge simply disappears during the transformation.",
        "Charge is not actually conserved at all in beta-minus decay."
      ],
      "correct": 1,
      "explanation": "Charge balances exactly. A neutral neutron (charge 0) becomes a proton (charge +1) plus an emitted electron (charge −1); adding the products' charges together, +1 + (−1) = 0, exactly matching the starting charge — conservation of charge holds throughout. Choice A is incorrect — beta-minus decay always obeys charge conservation exactly, as shown above. Choice C is wrong because charge cannot simply vanish; it must be accounted for in the reaction's products. Choice D is wrong because the electron's −1 charge is essential to balancing the equation — treating the electron as chargeless would make the two sides fail to match."
    },
    {
      "id": "15-61",
      "topic": "15.8 Types of Radioactive Decay",
      "stem": "In beta-plus decay, a proton transforms into a neutron, emitting a positron. Using conservation of charge, explain why this is consistent.",
      "choices": [
        "This process actually violates charge conservation, which is why it's rare.",
        "Total charge before (+1, proton) equals total charge after (0 neutron plus +1 positron = +1).",
        "The positron actually carries negative charge, exactly balancing the proton.",
        "Charge is not conserved in this process at all, which is impossible."
      ],
      "correct": 1,
      "explanation": "Charge balances exactly. A proton (charge +1) becomes a neutron (charge 0) plus an emitted positron (charge +1, since a positron is the positively-charged antimatter counterpart of an electron); the products' total charge, 0 + 1 = +1, exactly matches the starting charge. Choice A is incorrect — beta-plus decay also always conserves charge exactly, as shown above. Choice C has the positron's charge backwards; it is positive, not negative. Choice D is wrong because beta-plus decay does NOT violate charge conservation — it occurs precisely because charge balances exactly, not in spite of some violation."
    },
    {
      "id": "15-62",
      "topic": "15.8 Types of Radioactive Decay",
      "stem": "Which type of radioactive decay does NOT change either the mass number or the atomic number of the nucleus?",
      "choices": [
        "Alpha decay",
        "Gamma decay",
        "Beta-plus decay",
        "Beta-minus decay"
      ],
      "correct": 1,
      "explanation": "Gamma decay. It releases only energy (as a photon), with the nucleus's proton and neutron counts left completely unchanged — the only one of the four decay types that leaves both numbers untouched. Alpha decay changes both mass number (−4) and atomic number (−2). Beta-minus decay changes the atomic number (+1), even though the mass number stays the same. Beta-plus decay changes the atomic number (−1), again while the mass number is unchanged — both beta processes still alter one of the two numbers, unlike gamma decay."
    },
    {
      "id": "15-63",
      "topic": "15.8 Types of Radioactive Decay",
      "stem": "A nucleus decays by alpha emission, producing a daughter nucleus with mass number 210 and atomic number 82. Find the original (parent) nucleus's mass number and atomic number.",
      "choices": [
        "206 and 80",
        "214 and 84",
        "206 and 84",
        "214 and 80"
      ],
      "correct": 1,
      "explanation": "214 and 84. Working backward from the daughter: alpha decay REMOVES 4 from mass number and 2 from atomic number, so the parent must have had 4 MORE mass number (210 + 4 = 214) and 2 MORE atomic number (82 + 2 = 84) than the daughter. Choice B (206 and 80) subtracts instead of adds when working backward, moving in the wrong direction for both numbers. Choice C (214 and 80) correctly adds to the mass number but wrongly subtracts (instead of adds) for the atomic number. Choice D (206 and 84) correctly adds to the atomic number but wrongly subtracts (instead of adds) for the mass number."
    },
    {
      "id": "15-64",
      "topic": "15.8 Types of Radioactive Decay",
      "stem": "A parent nucleus (mass number 232, atomic number 90) first emits an alpha particle, and the resulting daughter then emits a beta-minus particle. Find the final mass number and atomic number after both decays.",
      "choices": [
        "228 and 87",
        "232 and 91",
        "224 and 86",
        "228 and 89"
      ],
      "correct": 3,
      "explanation": "228 and 89. Alpha decay first: mass number 232 − 4 = 228; atomic number 90 − 2 = 88. Beta-minus decay next: mass number stays at 228; atomic number 88 + 1 = 89. Working through each step of a decay chain individually, rather than trying to combine them in one move, is the reliable way to avoid errors on multi-step problems like this. Choice B (232 and 91) reflects skipping the alpha decay's mass-number decrease entirely while over-incrementing the atomic number. Choice C (224 and 86) applies an erroneous second alpha-like decrease instead of correctly applying the beta-minus step. Choice D (228 and 87) gets the mass number right but miscounts the atomic-number change from the beta-minus step, decreasing it instead of increasing it."
    },
    {
      "id": "15-65",
      "topic": "15.8 Types of Radioactive Decay",
      "stem": "Which conservation laws must be satisfied in every type of nuclear decay (alpha, beta-minus, beta-plus, and gamma)?",
      "choices": [
        "No conservation laws apply to nuclear decay; it is fundamentally random.",
        "Only conservation of mass number, with nothing else required.",
        "Only conservation of charge, with mass number free to vary.",
        "Conservation of mass number, atomic number (charge), energy, and momentum — all four, universally."
      ],
      "correct": 3,
      "explanation": "All four, in every case. Mass number (total nucleons) and atomic number (total charge) must balance on both sides of every nuclear equation, exactly like balancing a chemical equation — and energy and momentum, the same fundamental conservation laws from mechanics, apply universally to nuclear decay processes as well, governing the kinetic energies and directions of the emitted particles. \"Only mass number\" and \"only charge\" each ignore that the other three quantities must also balance in every decay. \"No conservation laws apply, it is fundamentally random\" confuses randomness in WHEN a given nucleus decays with the conservation laws governing WHAT is produced when it does — those laws are strictly enforced in every single decay event."
    }
  ]
};

const FRQ_CONTENT = {
  "9": [
    {
      "id": "frq-9-1",
      "source": "2024 AP Exam, Free-Response Question 2",
      "title": "Ideal Gas Thermal Experiments",
      "prompt": "Experiment 1: A sample of ideal gas is sealed in an insulated chamber with thin, rigid walls, containing a heater and sensors that measure temperature and pressure. (a) Describe a procedure to determine the number N of gas molecules in the chamber. (b) While the heater is on: (i) sketch the expected P vs. V relationship, with an arrow showing the process direction; (ii) sketch the expected U vs. V relationship, with an arrow; (iii) briefly justify the shape of the U vs. V graph. Experiment 2: A liquid-filled container wrapped in a material (thickness 0.01 m, area 0.06 m² in contact with the gas) sits inside the same chamber. As gas temperature T<sub>G</sub> rises, data for liquid temperature T<sub>L</sub> and rate of energy transfer Q/Δt are collected: (295K,295K,0.0 J/s), (371K,303K,26.3), (425K,308K,43.1), (475K,313K,60.0), (528K,323K,75.0). (c) Determine what to graph to find thermal conductivity k, and (d) calculate k from the best-fit line.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Describe a procedure to determine N, the number of gas molecules.",
          "steps": [
            "Identify the fixed known quantity: since the chamber has rigid, thin walls, volume V is constant throughout — this lets you use PV = NkT with only P and T changing. Measure this fixed volume V directly (e.g., from the chamber's known interior dimensions), since the final calculation will need it.",
            "Describe the procedure: use the heater to set the gas at several different temperatures; at each setting, wait for thermal equilibrium, then record T and P from the built-in sensors.",
            "Describe the graph and how N is extracted: plot P (vertical) vs. T (horizontal); since P = (Nk/V)T, this is a line through the origin with slope Nk/V — multiply the measured slope by the separately-measured V, then divide by k (Boltzmann's constant) to solve for N.",
            "Note the uncertainty-reduction step: taking multiple (T, P) pairs and using a best-fit line instead of one single calculation averages out random measurement error."
          ]
        },
        {
          "label": "(b) i–ii",
          "ask": "Sketch P vs. V and U vs. V while the heater is on.",
          "steps": [
            "Recognize the process type: the rigid, thin-walled chamber means volume cannot change — this is an isochoric (constant-volume) process regardless of how much heat is added.",
            "Sketch logic for P vs. V: with V pinned at a single value and P increasing as the heater warms the gas, the graph is a vertical line segment, arrow pointing upward.",
            "Sketch logic for U vs. V: the same constant-V reasoning applies — U increases as T increases, so this is also a vertical line, arrow pointing upward."
          ]
        },
        {
          "label": "(b) iii",
          "ask": "Justify the shape of the U vs. V graph.",
          "steps": [
            "Recall the first law: ΔU = Q + W.",
            "Since V never changes (rigid container), W = −PΔV = 0 — no expansion work is possible.",
            "Therefore ΔU = Q exactly: every joule of heat added by the heater goes directly into raising internal energy, with none 'spent' on expansion work, which is why U rises while V stays fixed."
          ]
        },
        {
          "label": "(c)–(d)",
          "ask": "Determine k graphically from the Experiment 2 data.",
          "steps": [
            "Rearrange the governing equation into slope-intercept form: Q/Δt = (kA/L)·ΔT, where ΔT = T<sub>G</sub> − T<sub>L</sub> — so plotting Q/Δt (vertical) against ΔT (horizontal) gives a line through the origin with slope = kA/L.",
            "Compute ΔT for every data row (T<sub>G</sub> − T<sub>L</sub>): 0, 68, 117, 162, 205 K, and plot each against its corresponding Q/Δt value.",
            "Draw the best-fit line through the plotted points and read its slope — here it comes out to approximately 0.37 W/K.",
            "Solve for k using the given thickness (0.01 m) and area (0.06 m²): k = slope × L/A = (0.37)(0.01)/(0.06) ≈ 0.062 W/(m·K)."
          ]
        }
      ]
    },
    {
      "id": "frq-9-2",
      "source": "2025 AP Exam, Free-Response Question 2",
      "title": "Gas Cylinder with a Loaded Piston",
      "prompt": "A monatomic ideal gas is sealed by a movable piston (mass M, area A) in a container held in a water bath at constant temperature T0. The piston is free to move with negligible friction. The gas occupies volume V0; the air above the piston has pressure P<sub>atm</sub>. (a) Draw and label the forces on the piston. (b) Derive an expression for the gas's internal energy in terms of M, A, V0, P<sub>atm</sub>. (c) A block of mass M is placed on the piston at t0 and slowly lowered; the piston comes to rest at tf. Sketch the P-V process with a direction arrow. (d) With the block still on the piston, the water bath's temperature is changed to Tnew, and the gas returns to volume V0 at the new equilibrium. Indicate whether Tnew is greater than, less than, or equal to T0, and justify.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Draw and label the forces on the piston.",
          "steps": [
            "Identify all forces acting on the piston: gravity (Mg, downward), the force from atmospheric pressure pushing down from above (P<sub>atm</sub>·A, downward), and the force from the gas pressure pushing up from below (P<sub>gas</sub>·A, upward).",
            "Since the piston is in equilibrium (at rest, free to move but not accelerating), draw these three as balanced arrows starting at the dot representing the piston."
          ]
        },
        {
          "label": "(b)",
          "ask": "Derive the gas's internal energy in terms of M, A, V0, P<sub>atm</sub>.",
          "steps": [
            "Use force balance on the piston to find the gas pressure: since the piston doesn't accelerate, the upward gas force must equal the sum of the downward forces: P<sub>gas</sub>·A = P<sub>atm</sub>·A + Mg, so P<sub>gas</sub> = P<sub>atm</sub> + Mg/A.",
            "Recall internal energy for a monatomic ideal gas: U = (3/2)nRT, and since PV = nRT, this simplifies directly to U = (3/2)PV — no need to separately solve for n or T.",
            "Substitute the pressure found above and the given volume V0: U = (3/2)(P<sub>atm</sub> + Mg/A)(V0)."
          ]
        },
        {
          "label": "(c)",
          "ask": "Sketch the P-V process as the block is slowly lowered.",
          "steps": [
            "Recognize the process type: since the block is lowered slowly and the container stays in the water bath (which holds temperature constant), this is a quasi-static isothermal compression.",
            "Identify start and end points: the process starts at (V0, P<sub>atm</sub>+Mg/A) and ends at a smaller volume with pressure P<sub>atm</sub>+2Mg/A, once the block's full weight has transferred onto the piston.",
            "Sketch the connecting curve: an isothermal process follows PV=constant, a downward-curving hyperbola-shaped path from the starting point to the ending point, arrow pointing toward decreasing V and increasing P."
          ]
        },
        {
          "label": "(d)",
          "ask": "Compare Tnew to T0.",
          "steps": [
            "Write the ideal gas law at both the original state and this new state: P1V0 = nRT0 and P2V0 = nRTnew, where P1 = P<sub>atm</sub>+Mg/A (original) and P2 = P<sub>atm</sub>+2Mg/A (fully loaded with the block).",
            "Since V0 and n are identical in both equations, divide them to eliminate those variables: Tnew/T0 = P2/P1.",
            "Since P2 > P1 (more weight requires higher pressure to support), the ratio must be greater than 1, so Tnew > T0 — the bath must be heated further to re-expand the more heavily loaded piston back to the original volume."
          ]
        }
      ]
    },
    {
      "id": "frq-9-3",
      "source": "2026 AP Exam, Free-Response Question 1",
      "title": "Heating a Gas with an Embedded Sphere",
      "prompt": "A sample of n moles of monatomic ideal gas is in a large, sealed, thermally conducting, fixed-volume container along with a small sphere of mass mS, initially in thermal equilibrium with the gas. The gas starts in State X (pressure P, volume V). It's heated to State Y (pressure 3P), and the sphere returns to equilibrium with the gas. Total energy transferred to the sphere during heating is QS. Part A: (i) Sketch the Maxwell-Boltzmann speed distribution for State Y, given State X's distribution. (ii) Derive ΔT for the gas in terms of n, P, V. (iii) Derive the sphere's specific heat cS in terms of n, mS, P, V, QS. Part B: The same sphere is submerged in a liquid (mass mL, specific heat cL) in an insulated container, with mS<mL and cS<cL. The sphere starts hotter than the liquid; they reach thermal equilibrium. Indicate whether |ΔTS| is greater than, less than, or equal to |ΔTL|, with conceptual justification beyond algebra.",
      "parts": [
        {
          "label": "Part A(i)",
          "ask": "Sketch the Maxwell-Boltzmann distribution for State Y.",
          "steps": [
            "Determine what changed physically: since the container is rigid and sealed (fixed V and n), tripling the pressure means — via PV=NkT — the temperature has also tripled.",
            "Translate that into distribution shape: since average kinetic energy (and therefore average speed) increases with tripled temperature, the curve's peak shifts to a higher speed.",
            "Preserve total particle count: since N hasn't changed, the area under the new curve must equal the original area, so the curve becomes shorter and wider (spread over more speeds) while its peak shifts right."
          ]
        },
        {
          "label": "Part A(ii)",
          "ask": "Derive ΔT for the gas.",
          "steps": [
            "Identify the constant: the container is rigid and sealed, so volume V and particle count n never change — only P and T vary.",
            "Apply the ideal gas law at constant V and n: this means P/T is constant, so P/T<sub>X</sub> = 3P/T<sub>Y</sub>.",
            "Solve for the relationship between the temperatures: T<sub>Y</sub> = 3T<sub>X</sub>.",
            "Express T<sub>X</sub> using the ideal gas law at the initial state: T<sub>X</sub> = PV/(nR).",
            "Combine to find ΔT: ΔT = T<sub>Y</sub> − T<sub>X</sub> = 3T<sub>X</sub> − T<sub>X</sub> = 2T<sub>X</sub> = 2PV/(nR)."
          ]
        },
        {
          "label": "Part A(iii)",
          "ask": "Derive the sphere's specific heat cS.",
          "steps": [
            "Recognize that the sphere's temperature change equals the gas's temperature change, since the sphere stays in thermal equilibrium with the gas at both the start and end states.",
            "Apply the specific heat relationship for the sphere: Q<sub>S</sub> = m<sub>S</sub>·c<sub>S</sub>·ΔT, where Q<sub>S</sub> is given.",
            "Solve algebraically for c<sub>S</sub> using the ΔT found in part (ii): c<sub>S</sub> = Q<sub>S</sub>/(m<sub>S</sub>·ΔT) = Q<sub>S</sub>/[m<sub>S</sub> · 2PV/(nR)] = (Q<sub>S</sub>·nR)/(2m<sub>S</sub>·PV)."
          ]
        },
        {
          "label": "Part B",
          "ask": "Compare |ΔTS| to |ΔTL|.",
          "steps": [
            "Set up the energy conservation statement for the insulated sphere-and-liquid system: heat lost by the (hotter) sphere equals heat gained by the (cooler) liquid, in magnitude: m<sub>S</sub>·c<sub>S</sub>·|ΔT<sub>S</sub>| = m<sub>L</sub>·c<sub>L</sub>·|ΔT<sub>L</sub>|.",
            "Compare the mc products on each side: since m<sub>S</sub><m<sub>L</sub> AND c<sub>S</sub><c<sub>L</sub>, the product m<sub>S</sub>·c<sub>S</sub> is considerably smaller than m<sub>L</sub>·c<sub>L</sub>.",
            "Use that comparison to determine which ΔT must be larger: since the two sides must balance, the sphere's temperature change |ΔT<sub>S</sub>| must be the LARGER of the two to make up the difference — so |ΔT<sub>S</sub>| > |ΔT<sub>L</sub>|.",
            "State the conceptual reason in words: the liquid's greater mass and greater specific heat both mean it resists changing temperature more strongly, so for the same energy exchanged, the liquid barely shifts while the sphere swings much more."
          ]
        }
      ]
    },
    {
      "id": "frq-9-4",
      "source": "Original — Experimental Design",
      "title": "Determining Specific Heat by Calorimetry",
      "prompt": "A student has an unknown metal sample, a calorimeter (negligible heat capacity), water, a thermometer, and a balance. (a) Describe a procedure to determine the metal's specific heat. (b) Describe how the data should be analyzed. (c) In a trial, 150 g of the metal at 95°C is dropped into 200 g of water at 22°C inside the calorimeter; the mixture reaches equilibrium at 27°C. Find the metal's specific heat (c<sub>water</sub> = 4180 J/(kg·°C)).",
      "parts": [
        {
          "label": "(a)",
          "ask": "Describe the experimental procedure.",
          "steps": [
            "Measure the metal sample's mass using the balance, then heat it to a known, elevated starting temperature (e.g., boiling water bath).",
            "Measure a known mass of water at a known, lower starting temperature, and place it in the insulated calorimeter.",
            "Quickly transfer the heated metal into the water, seal the calorimeter, and monitor the thermometer until the system reaches a stable equilibrium temperature."
          ]
        },
        {
          "label": "(b)",
          "ask": "Describe how the data is analyzed.",
          "steps": [
            "Apply conservation of energy for the insulated system: heat lost by the metal equals heat gained by the water, m<sub>metal</sub>·c<sub>metal</sub>·|ΔT<sub>metal</sub>| = m<sub>water</sub>·c<sub>water</sub>·|ΔT<sub>water</sub>|.",
            "Since every quantity except c<sub>metal</sub> is directly measured (masses via balance, temperatures via thermometer), solve algebraically for the one unknown, c<sub>metal</sub>."
          ]
        },
        {
          "label": "(c)",
          "ask": "Calculate the metal's specific heat from the given trial.",
          "steps": [
            "Set up the energy balance: (0.150 kg)(c)(95−27) = (0.200 kg)(4180)(27−22).",
            "Simplify both sides: (0.150)(68)c = (0.200)(4180)(5), giving 10.2c = 4180.",
            "Solve: c = 4180/10.2 ≈ 410 J/(kg·°C)."
          ]
        }
      ]
    },
    {
      "id": "frq-9-5",
      "source": "Original — Mathematical Routines",
      "title": "A Rectangular P-V Cycle",
      "prompt": "A monatomic ideal gas undergoes a cycle: A(P0, V0) → B(3P0, V0) at constant volume; B → C(3P0, 3V0) at constant pressure; C → D(P0, 3V0) at constant volume; D → A(P0, V0) at constant pressure, returning to the start. (a) Find the total work done ON the gas over the complete cycle. (b) Find the net heat transferred to or from the gas over the complete cycle.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the total work done on the gas over the cycle.",
          "steps": [
            "Identify each leg: A→B and C→D are isochoric (constant volume), contributing zero work each, since W=−PΔV requires a volume change.",
            "Compute B→C (isobaric expansion at 3P0, volume V0→3V0): W<sub>on</sub> = −P·ΔV = −(3P0)(2V0) = −6P0V0.",
            "Compute D→A (isobaric compression at P0, volume 3V0→V0): W<sub>on</sub> = −P·ΔV = −(P0)(−2V0) = +2P0V0.",
            "Sum all four legs: W<sub>total</sub>,on = 0 + (−6P0V0) + 0 + (2P0V0) = −4P0V0 — the gas does a net +4P0V0 of work ON its surroundings over the full cycle."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the net heat transferred over the cycle.",
          "steps": [
            "Recall that internal energy is a state function: since the cycle returns the gas to its exact starting state, ΔU<sub>cycle</sub>=0, regardless of the path.",
            "Apply the first law over the full cycle: ΔU=Q+W<sub>on</sub>, so with ΔU=0: Q<sub>net</sub> = −W<sub>on</sub>,total = −(−4P0V0) = +4P0V0.",
            "Interpret: the gas absorbs a net 4P0V0 of heat over the cycle, exactly matching the net work it does on its surroundings — consistent with zero net change in internal energy."
          ]
        }
      ]
    },
    {
      "id": "frq-9-6",
      "source": "Original — Qualitative/Quantitative Translation",
      "title": "Entropy and the Direction of Heat Flow",
      "prompt": "Two identical blocks, one at 80°C and one at 20°C, are placed in thermal contact inside an insulated enclosure. (a) Describe what happens to each block's temperature over time, and justify using entropy reasoning (not just 'heat flows hot to cold'). (b) A proposed device would make heat flow spontaneously from the cooler block to the hotter block, with no external work, making the hot block hotter and the cold block colder over time. Evaluate whether this is possible, explaining in terms of entropy.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Describe and justify the temperature change over time.",
          "steps": [
            "Recall that heat spontaneously flows from higher to lower temperature because this direction increases the total entropy of the two-block system.",
            "Describe the outcome: the 80°C block cools while the 20°C block warms, both approaching a common intermediate equilibrium temperature.",
            "Justify using the guide's own framework: heat leaving the hot block removes a comparatively small number of newly-inaccessible microstates from a system that already has a very 'spread out' high-energy configuration, while the same heat entering the cooler block opens up a much larger relative number of newly-accessible arrangements there — so the disorder gained by the cold block outweighs the disorder lost by the hot block, producing a net entropy increase, consistent with the second law."
          ]
        },
        {
          "label": "(b)",
          "ask": "Evaluate whether the proposed device is possible.",
          "steps": [
            "Recognize what the device requires: heat flowing spontaneously from cold to hot, the opposite of the natural direction, with no external work.",
            "Apply the entropy argument in reverse: moving heat from a cold reservoir to a hot one spontaneously would DECREASE total entropy (removing energy from the low-T block loses more entropy than the high-T block gains).",
            "Conclude the device is IMPOSSIBLE as described: a spontaneous entropy decrease in an isolated system violates the second law — this could only happen with external work input, like a refrigerator, never on its own."
          ]
        }
      ]
    },
    {
      "id": "frq-9-7",
      "source": "Original — Mathematical Routines",
      "title": "Multi-State Gas Process",
      "prompt": "A gas sample starts at State 1 (2.0 atm, 8.0 L, 300 K). It is first compressed at constant temperature to 4.0 L (State 2), then heated at constant volume until the pressure reaches 6.0 atm (State 3). (a) Find the pressure at State 2. (b) Find the temperature at State 3. (c) Find the number of moles of gas present (R=0.0821 L·atm/(mol·K)).",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find P2.",
          "steps": [
            "Identify the process: compression at constant temperature is isothermal, so Boyle's Law applies: P1V1=P2V2.",
            "Solve: (2.0)(8.0)=P2(4.0), giving P2=4.0 atm."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find T3.",
          "steps": [
            "Identify the second process: heating at constant volume is isochoric, so P/T is constant: P2/T2=P3/T3, using T2=T1=300K (isothermal step didn't change T).",
            "Solve: 4.0/300=6.0/T3, giving T3=450K."
          ]
        },
        {
          "label": "(c)",
          "ask": "Find the number of moles.",
          "steps": [
            "Use the ideal gas law at the original state (the only state with all three of P, V, T known): n=P1V1/(RT1).",
            "Substitute: n=(2.0)(8.0)/[(0.0821)(300)]=16.0/24.63≈0.65 mol."
          ]
        }
      ]
    }
  ],
  "10": [
    {
      "id": "frq-10-1",
      "source": "2023 AP Exam, Free-Response Question 4",
      "title": "Three Charges on a Triangle",
      "prompt": "Charges A and B (each +Q) sit at two vertices of an equilateral triangle of side d. Point P is equidistant from all three vertices (the centroid). Two students discuss what happens if a third charge is placed at the empty third vertex. Student Y claims: placing +2Q there makes the net field zero at P. Student Z claims: placing −Q there makes the potential zero at P. (a) Evaluate the accuracy of each claim in a coherent paragraph. (b) Particles A and B are held in place; a third charge is brought from infinity to the empty vertex and held. A bar chart shows the initial potential energy Ui (A-B pair alone). For Scenario 1 (+Q added) and Scenario 2 (−Q added), determine the work W and final potential energy Uf for each scenario.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Evaluate both students' claims.",
          "steps": [
            "Recall the symmetry fact: three EQUAL charges at the vertices of an equilateral triangle produce exactly zero net field at the centroid, since the three contributions are equal in magnitude and point 120° apart, summing to zero.",
            "Apply this to Student Y: since A and B are +Q, only an additional +Q (matching, not doubled) at the third vertex completes the symmetric zero-field configuration — placing +2Q instead breaks that symmetry and leaves a nonzero net field, so Y is INCORRECT.",
            "Evaluate Student Z using potential instead of field: potential is a scalar that adds directly without needing symmetry — the total potential at P is V=k(Q+Q+q<sub>C</sub>)/r, and setting this to zero requires q<sub>C</sub>=−2Q, not −Q, so Z is also INCORRECT (right sign, wrong magnitude)."
          ]
        },
        {
          "label": "(b) Scenario 1 (+Q)",
          "ask": "Find W1 and Uf1.",
          "steps": [
            "Recognize that Ui1 represents only the original A–B pair's potential energy (the third charge is still infinitely far away): Ui1 = kQ²/d.",
            "Find W1 by calculating the work needed to push the incoming +Q charge in against repulsion from BOTH A and B (each at distance d): W1 = kQ²/d + kQ²/d = 2kQ²/d — a positive bar, twice Ui1's height.",
            "Find Uf1 by summing all three pairwise interactions in the final system (A–B, A–C, B–C, each kQ²/d since all sides equal d): Uf1 = 3kQ²/d — check that Ui1+W1=Uf1 as confirmation."
          ]
        },
        {
          "label": "(b) Scenario 2 (−Q)",
          "ask": "Find W2 and Uf2.",
          "steps": [
            "Recognize Ui2 is identical to Ui1 — still just the original A–B pair's energy before the new charge (now −Q) arrives: Ui2=kQ²/d, same height as before.",
            "Find W2: since the incoming charge is now negative, it's ATTRACTED to A and B rather than repelled, so the external agent does NEGATIVE work bringing it in: W2 = −2kQ²/d, a bar below the axis.",
            "Find Uf2 by summing the three pairwise energies (two now attractive, A–C and B–C; one still repulsive, A–B): Uf2 = kQ²/d − kQ²/d − kQ²/d = −kQ²/d — confirm Ui2+W2=Uf2 as a check."
          ]
        }
      ]
    },
    {
      "id": "frq-10-2",
      "source": "2026 AP Exam, Free-Response Question 4",
      "title": "A Sphere Moving Through Equipotential Lines",
      "prompt": "Equipotential lines are shown for a region, with values (left to right) −3V0, −2V0, −V0, 0, V0, 2V0. A small sphere with charge +Q starts at Point S (sitting on the −2V0 line) with speed vS and kinetic energy KS, and moves to Point T (sitting on the +V0 line), with the electric force as the only force acting. Part A: Indicate whether vT is greater than, less than, or equal to vS, with conceptual justification. Part B: Derive KT in terms of V0, Q, KS. Part C: A new sphere of the same mass but charge −Q starts at S with the same speed vS. Compare its final kinetic energy Knew to KT.",
      "parts": [
        {
          "label": "Part A",
          "ask": "Compare vT to vS.",
          "steps": [
            "Recall the connection between field and potential: electric field always points from high potential toward low potential, and a POSITIVE charge naturally accelerates toward LOWER potential — the 'downhill' direction, gaining kinetic energy as it goes.",
            "Read the diagram: moving from S (−2V0) to T (+V0) means moving toward HIGHER potential — the opposite of a positive charge's natural downhill direction.",
            "Conclude: since the sphere moves toward higher potential, the field does negative work on it, so kinetic energy — and therefore speed — decreases: vT < vS."
          ]
        },
        {
          "label": "Part B",
          "ask": "Derive KT in terms of V0, Q, KS.",
          "steps": [
            "Read the potential values directly from the diagram: V<sub>S</sub> = −2V0 and V<sub>T</sub> = +V0, giving ΔV = V<sub>T</sub>−V<sub>S</sub> = V0−(−2V0) = 3V0.",
            "Apply the work-energy theorem in terms of potential difference: W<sub>field</sub> = −qΔV = −Q(3V0) = −3QV0 — this equals ΔK directly, since the electric force is the only force acting.",
            "Solve for the final kinetic energy: K<sub>T</sub> = K<sub>S</sub> + ΔK = K<sub>S</sub> − 3QV0."
          ]
        },
        {
          "label": "Part C",
          "ask": "Compare Knew to KT for the negative sphere.",
          "steps": [
            "Redo the same work-energy calculation with charge −Q instead of +Q, moving through the same ΔV=3V0: W<sub>field</sub> = −qΔV = −(−Q)(3V0) = +3QV0 — positive this time, since a negative charge is pushed TOWARD higher potential rather than resisted.",
            "Find the new kinetic energy: K<sub>new</sub> = K<sub>S</sub> + 3QV0 — an INCREASE, the opposite trend from the positive sphere in Part B.",
            "Compare directly to K<sub>T</sub> (which was K<sub>S</sub> − 3QV0): K<sub>new</sub> is unambiguously greater than K<sub>T</sub>, a full 6QV0 apart, without needing any specific numbers."
          ]
        }
      ]
    },
    {
      "id": "frq-10-3",
      "source": "Original — Mathematical Routines",
      "title": "Finding a Zero-Field Point Beyond Two Charges",
      "prompt": "A charge of +4.0 μC sits at x=0 and a charge of −2.0 μC sits at x=6.0 cm on the x-axis. Find the location (other than infinity) where the net electric field along the x-axis is exactly zero.",
      "parts": [
        {
          "label": "Full Solution",
          "ask": "Find the zero-field point.",
          "steps": [
            "Recognize that since the charges have opposite signs, their fields between them both point in the same direction (from + toward −) and cannot cancel — a zero-field point can only exist OUTSIDE the pair, on the side of the WEAKER charge, since distance falloff lets the weaker charge's closer field match the stronger charge's farther field.",
            "Since |−2μC| < |4μC|, the zero point lies beyond the −2μC charge, farther from the +4μC charge.",
            "Set the field magnitudes equal, letting x be the distance beyond the −2μC charge: k(4)/(6+x)² = k(2)/x², which simplifies to 2x² = (6+x)².",
            "Solve algebraically: taking the positive square root, x√2 = 6+x, so x(√2−1)=6, giving x = 6/(√2−1) = 6(√2+1) ≈ 14.5 cm beyond the −2μC charge (about 20.5 cm from the origin)."
          ]
        }
      ]
    },
    {
      "id": "frq-10-4",
      "source": "Original — Mathematical Routines",
      "title": "Series-Parallel Capacitor Network",
      "prompt": "Three capacitors, C1=2.0 μF, C2=4.0 μF, and C3=6.0 μF, are arranged so C2 and C3 are in parallel with each other, and that combination is in series with C1, all connected to a 12 V battery. (a) Find the equivalent capacitance. (b) Find the total charge stored. (c) Find the voltage across C1.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the equivalent capacitance.",
          "steps": [
            "Combine the parallel pair first: C<sub>parallel</sub>=C2+C3=4.0+6.0=10.0 μF (parallel capacitances add directly).",
            "Combine this with C1 in series: 1/C<sub>eq</sub>=1/2.0+1/10.0=6/10, giving C<sub>eq</sub>=10/6≈1.67 μF."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the total charge.",
          "steps": [
            "Apply Q=C<sub>eq</sub>×V using the equivalent capacitance found above: Q=(10/6 μF)(12V)=20 μC."
          ]
        },
        {
          "label": "(c)",
          "ask": "Find the voltage across C1.",
          "steps": [
            "Recognize that capacitors in series all store the SAME charge — so C1 also holds 20 μC.",
            "Solve for its voltage: V<sub>C1</sub>=Q/C1=20μC/2.0μF=10V."
          ]
        }
      ]
    },
    {
      "id": "frq-10-5",
      "source": "Original — Qualitative/Quantitative Translation",
      "title": "Field and Potential of a Charged Conducting Sphere",
      "prompt": "A hollow charged conducting sphere (net charge +Q) sits in isolation. (a) Describe the electric field inside the conductor's metal material, and explain why, referencing properties of conductors in electrostatic equilibrium. (b) Describe the field just outside the sphere's surface, and compare the far-field behavior of E and V to that of a point charge. (c) Is the potential inside the empty hollow space equal to, or different from, the potential at the sphere's surface? Justify.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Describe and explain the field inside the conducting material.",
          "steps": [
            "Recall the defining property of conductors in electrostatic equilibrium: free charges rearrange until there's no net force on them, requiring the field inside the material to be exactly zero.",
            "Explain why: if a field existed inside the metal, it would keep pushing charges around until they redistributed enough to cancel it — equilibrium requires E=0 throughout the conductor's material."
          ]
        },
        {
          "label": "(b)",
          "ask": "Describe the field just outside and the far-field behavior.",
          "steps": [
            "Describe the field just outside: since all excess charge resides on the outer surface, the field just outside behaves as if all of Q were concentrated at the center, pointing radially outward.",
            "Describe the far-field behavior: far from the sphere, both E (∝1/r²) and V (∝1/r) behave exactly like a point charge Q at the center — the sphere's actual size becomes irrelevant at large distances."
          ]
        },
        {
          "label": "(c)",
          "ask": "Compare the potential inside the hollow space to the surface potential.",
          "steps": [
            "Recall that E=0 throughout the interior hollow space too, since there's no enclosed charge and no field lines can originate in empty space.",
            "Since E=0 throughout that region, potential cannot change anywhere inside it (E is the rate of change of V).",
            "Conclude the potential inside the hollow space EQUALS the potential at the surface — the entire interior sits at one uniform potential, matching the surface value."
          ]
        }
      ]
    },
    {
      "id": "frq-10-6",
      "source": "Original — Mathematical Routines",
      "title": "Potential Energy of a Three-Charge System",
      "prompt": "Three charges are arranged at the corners of a right triangle: +3.0 μC at (0,0), +5.0 μC at (4.0 cm, 0), and −2.0 μC at (0, 3.0 cm) — a 3-4-5 triangle with the hypotenuse being 5.0 cm. Find the total electric potential energy of the system.",
      "parts": [
        {
          "label": "Full Solution",
          "ask": "Find the total potential energy.",
          "steps": [
            "Identify all three pairwise distances from the coordinates: the +3μC/+5μC pair is 4.0cm apart, the +3μC/−2μC pair is 3.0cm apart, and the +5μC/−2μC pair is 5.0cm apart. Convert all distances to meters before substituting into the formula: 4.0 cm → 0.040 m, 3.0 cm → 0.030 m, 5.0 cm → 0.050 m.",
            "Compute each pairwise potential energy using U=kq1q2/r (with r in meters): U(3,5)=+3.375J (both positive, repulsive); U(3,−2)=−1.8J (attractive); U(5,−2)=−1.8J (attractive).",
            "Sum all three pairwise energies for the total: U<sub>total</sub>=3.375−1.8−1.8=−0.225J — the two attractive pairs pull the total negative overall, despite the large positive repulsive term."
          ]
        }
      ]
    },
    {
      "id": "frq-10-7",
      "source": "Original — Experimental Design",
      "title": "Verifying the Parallel-Plate Capacitance Formula",
      "prompt": "A student has two flat metal plates, a ruler, a variable DC power supply, a voltmeter, and a device to measure charge. Design an experiment to verify C=ε0A/d for an air-filled parallel-plate capacitor. (a) Describe the procedure. (b) Describe how to analyze the data graphically to test the relationship.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Describe the procedure.",
          "steps": [
            "Set the plates at a fixed, measured separation d and fixed overlapping area A (both measured with the ruler).",
            "Apply several different known voltages using the power supply, and for each, measure the resulting charge Q on the plates.",
            "Repeat using a different known separation d (holding A fixed) to test the 1/d dependence, varying the geometric factors independently."
          ]
        },
        {
          "label": "(b)",
          "ask": "Describe the graphical analysis.",
          "steps": [
            "For a fixed geometry, plot Q (vertical) against V (horizontal) for the voltage trials — since Q=CV, this should be a line through the origin with slope equal to C.",
            "Repeat this slope-finding process at several different values of d, then plot the resulting C values (vertical) against 1/d (horizontal) — this should also be linear through the origin, with slope=ε0A.",
            "Confirm the relationship by checking that this second slope, divided by the known area A, gives a value close to the accepted constant ε0."
          ]
        }
      ]
    }
  ],
  "11": [
    {
      "id": "frq-11-1",
      "source": "2023 AP Exam, Free-Response Question 2",
      "title": "Identifying an Unknown Component and Finding EMF",
      "prompt": "Students are given an unknown circuit component connected in series with a known 500 Ω resistor. (a) Describe an experimental procedure to determine whether the component is a resistor or an uncharged capacitor, and describe expected results in terms of potential difference and charge. (b) In a separate experiment, students find the EMF ε of a non-ideal battery (internal resistance r=30 Ω) connected to a variable resistor, measuring current I for various Rvar: (0.087A,200Ω), (0.060A,300Ω), (0.042A,450Ω), (0.027A,700Ω), (0.016A,1200Ω). Write the governing equation, indicate what to graph for a straight line, and determine ε from the graph.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Describe the procedure and expected results.",
          "steps": [
            "Set up the circuit with the resistor and unknown component in series with the battery and switch, with a voltmeter ready to read across the unknown component.",
            "Close the switch and immediately observe the voltmeter reading across the unknown component over time.",
            "Distinguish based on behavior: a resistor shows a constant, steady voltage as soon as the switch closes; an uncharged capacitor instead shows a voltage that STARTS AT ZERO and gradually RISES over time as it charges.",
            "Explain why, in terms of potential difference and charge: an uncharged capacitor has zero stored charge initially, so V=Q/C=0 at that first instant (behaving like a wire); as charge accumulates, V rises toward the source voltage while current — and the resistor's share of voltage — falls."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find ε graphically from the data.",
          "steps": [
            "Apply Kirchhoff's Loop rule to the single-loop circuit: ε = I(r + Rvar), since the same current flows through both the internal resistance and Rvar.",
            "Rearrange into a form that graphs as a straight line: dividing both sides by εI gives 1/I = (1/ε)Rvar + r/ε — linear in Rvar, so plotting 1/I (vertical) against Rvar (horizontal) gives slope = 1/ε and y-intercept = r/ε.",
            "Compute 1/I for each data pair and estimate the best-fit slope — using the full spread of the data, the slope comes out to approximately 0.051 (in units of A⁻¹/Ω).",
            "Solve for the EMF from the slope: ε = 1/slope ≈ 1/0.051 ≈ 20 V."
          ]
        }
      ]
    },
    {
      "id": "frq-11-2",
      "source": "2024 AP Exam, Free-Response Question 3",
      "title": "Currents and Power in a Mixed Circuit",
      "prompt": "A circuit has an ideal battery of EMF ε and four identical resistors, each resistance R: R1 is in series with a parallel combination of R2 alone and (R3 in series with R4). (a) Derive expressions for I1 (through R1) and I3 (through R3), in terms of ε and R. (b) Draw a bar chart of |ΔV| across each resistor relative to ε. A student claims total power dissipated is P=3ε²/(5R) — state whether this is correct, justifying using your derivations. (c) The ideal battery is replaced with a non-ideal one (internal resistance r). Compare Pnew (power in R1) to Poriginal.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Derive I1 and I3.",
          "steps": [
            "Simplify the circuit: R3 and R4 in series combine to 2R; this sits in parallel with R2, giving 1/Rp = 1/R + 1/(2R) = 3/(2R), so Rp = 2R/3.",
            "Add the series resistor R1 to find total resistance: R<sub>total</sub> = R1 + Rp = R + 2R/3 = 5R/3.",
            "Apply Ohm's Law to the whole loop to find I1 (the current through R1, which is the total circuit current): I1 = ε/R<sub>total</sub> = 3ε/(5R).",
            "Find the voltage across the parallel section: V<sub>parallel</sub> = I1×Rp = [3ε/(5R)]×[2R/3] = 2ε/5.",
            "Apply Ohm's Law to the R3+R4 branch specifically: I3 = V<sub>parallel</sub>/(R3+R4) = (2ε/5)/(2R) = ε/(5R)."
          ]
        },
        {
          "label": "(b)",
          "ask": "Draw the bar chart and evaluate the power claim.",
          "steps": [
            "Compute each resistor's voltage: V<sub>R1</sub> = I1·R = 3ε/5; V<sub>R3</sub> = V<sub>R4</sub> = I3·R = ε/5 each; V<sub>R2</sub> = 2ε/5 (matches the parallel section's shared voltage).",
            "Verify the bars sum correctly: V<sub>R1</sub>+V<sub>R2</sub> = ε (matches battery EMF, since R1 is in series with the whole parallel group); V<sub>R3</sub>+V<sub>R4</sub> = 2ε/5 = V<sub>R2</sub> (parallel branches share voltage).",
            "Evaluate the power claim by computing total power directly: P = I1·ε = [3ε/(5R)]·ε = 3ε²/(5R) — matches the student's claim exactly.",
            "Double-check using ΣI²R across every resistor individually (9ε²/25R for R1, 6ε²/25R combined for the parallel section) — confirms the same total.",
            "Conclude the student's claim is actually CORRECT — not every 'evaluate this claim' question hides an error."
          ]
        },
        {
          "label": "(c)",
          "ask": "Compare Pnew to Poriginal after adding internal resistance.",
          "steps": [
            "Recognize that adding internal resistance r increases the total resistance of the loop: R<sub>total</sub>,new = 5R/3 + r, larger than the original 5R/3.",
            "Since a larger total resistance at the same EMF produces smaller total current, I1 decreases compared to the original ideal-battery case.",
            "Since P<sub>R1</sub> = I1²R depends on current squared, a smaller I1 directly means smaller power dissipated: P<sub>new</sub> < P<sub>original</sub>."
          ]
        }
      ]
    },
    {
      "id": "frq-11-3",
      "source": "2025 AP Exam, Free-Response Question 3",
      "title": "Predicting an RC Time Constant",
      "prompt": "A student has a resistor of unknown resistance and an air-filled parallel-plate capacitor of unknown capacitance (square plates, plate separation small compared to plate size), plus a battery of known EMF, a switch, an ammeter, and a ruler. (a) Describe a procedure to predict the expected time constant τ of the series RC circuit. (b) Describe how the collected data would be analyzed to determine τ. (c) In a second experiment, a new capacitor's charge q is measured for several applied voltages |ΔV|: (3.0V,2.4×10⁻¹⁰C), (5.0V,4.2), (7.2V,5.6), (8.0V,6.6), (10.0V,8.0). Determine what to graph to find C, and calculate C from the best-fit line.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Describe a procedure to predict τ.",
          "steps": [
            "To find R: connect the resistor alone in series with the battery and ammeter, close the switch, and record the steady current I.",
            "To find the measurements needed for C: use the ruler to measure the side length of the square capacitor plates (giving area A = side²) and the plate separation d.",
            "Repeat each measurement across multiple trials and average, to reduce random uncertainty in both the current reading and the ruler measurements."
          ]
        },
        {
          "label": "(b)",
          "ask": "Describe how the data is analyzed to find τ.",
          "steps": [
            "Calculate resistance from the resistor-only trial using Ohm's Law: R = ε/I.",
            "Calculate capacitance from the measured geometry using the parallel-plate formula, with κ=1 for air: C = ε0·A/d = ε0·(side length)²/d.",
            "Multiply the two independently-determined quantities to predict the expected time constant: τ = RC — a value built from separately measuring each component, not from timing the circuit's actual charging behavior."
          ]
        },
        {
          "label": "(c)",
          "ask": "Determine C graphically.",
          "steps": [
            "Recall the defining relationship for capacitance: q=CΔV — plotting q (vertical) against ΔV (horizontal) gives a straight line through the origin with slope equal to C directly.",
            "Using the given data, compute the slope — the data is quite linear, giving a slope of about 0.80×10⁻¹⁰ C/V.",
            "Read the capacitance directly from that slope: C ≈ 8.0×10⁻¹¹ F (80 pF)."
          ]
        }
      ]
    },
    {
      "id": "frq-11-4",
      "source": "Original — Mathematical Routines",
      "title": "Two-Loop Circuit with Two Batteries",
      "prompt": "A circuit has two batteries, ε1=9V and ε2=3V, each in series with an identical resistor R=3Ω, both branches meeting at a junction and connected through a shared resistor R=3Ω to complete the circuit. (a) Write the loop and junction equations needed to solve the circuit. (b) Solve for all three branch currents. (c) Interpret the sign of the current in the ε2 branch.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Write the governing equations.",
          "steps": [
            "Apply the junction rule at the node where all three branches meet: I1+I2=I3 (assuming both battery currents flow into the junction and I3 flows out through the shared resistor).",
            "Apply the loop rule to the loop containing ε1: 9=3I1+3I3.",
            "Apply the loop rule to the loop containing ε2: 3=3I2+3I3."
          ]
        },
        {
          "label": "(b)",
          "ask": "Solve for I1, I2, I3.",
          "steps": [
            "Simplify each loop equation: 3=I1+I3 and 1=I2+I3.",
            "Substitute both into the junction equation: (3−I3)+(1−I3)=I3, giving 4−2I3=I3, so I3=4/3 A.",
            "Back-substitute: I1=3−4/3=5/3 A; I2=1−4/3=−1/3 A."
          ]
        },
        {
          "label": "(c)",
          "ask": "Interpret the sign of I2.",
          "steps": [
            "Note that a negative I2 doesn't mean an error — it means the actual current flows OPPOSITE to the direction originally assumed.",
            "Interpret physically: the stronger ε1 branch is actually driving current backward through the weaker ε2 branch, similar to one battery 'charging' another, since ε1 dominates the shared loop."
          ]
        }
      ]
    },
    {
      "id": "frq-11-5",
      "source": "Original — Qualitative/Quantitative Translation",
      "title": "RC Circuit Timing Behavior",
      "prompt": "A series RC circuit (resistor R, capacitor C, battery ε, switch) is analyzed at three moments: right after the switch closes, at t=RC (one time constant later), and a very long time later. (a) Compare the current at t=0 to the current a long time later, justifying. (b) At t=RC, is the capacitor's voltage closer to 0, to ε, or at roughly 63% of the way to ε? Explain what one time constant physically represents. (c) If R is increased (C, ε unchanged), does the circuit take longer or shorter to approach full charge? Explain.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Compare initial and long-term current.",
          "steps": [
            "At t=0, the uncharged capacitor briefly behaves like a plain wire, so current is at its maximum, I<sub>max</sub>=ε/R.",
            "A long time later, the capacitor is essentially fully charged and blocks further current, so current approaches zero.",
            "Conclude: current is maximum immediately after closing and decreases toward zero over time."
          ]
        },
        {
          "label": "(b)",
          "ask": "Describe the capacitor's voltage at t=RC.",
          "steps": [
            "Recall that τ=RC is defined as the time at which the capacitor has charged to about 63% of its final voltage — not the halfway point, and not full charge.",
            "Explain physically: this is simply the characteristic timescale of the exponential charging process, a standard reference point describing how quickly the circuit responds.",
            "Answer directly: at t=RC, the capacitor's voltage is at about 63% of the way to ε — closer to ε than to 0, but not yet nearly fully charged."
          ]
        },
        {
          "label": "(c)",
          "ask": "Explain the effect of increasing R.",
          "steps": [
            "Recall that the time constant itself is τ=RC — directly proportional to resistance.",
            "Increasing R directly increases τ, meaning the characteristic charging timescale grows.",
            "Conclude: with larger R, the circuit takes LONGER to approach full charge — a larger resistance limits current at every stage, slowing the whole process, consistent with a smaller initial current I=ε/R too."
          ]
        }
      ]
    },
    {
      "id": "frq-11-6",
      "source": "Original — Qualitative/Quantitative Translation",
      "title": "Ranking Power in a Mixed Network",
      "prompt": "A circuit has resistor R1 in series with a parallel combination of R2 and R3, where R2=2×R3, connected to an ideal battery. (a) Compare the current through R2 to the current through R3. (b) Compare the power dissipated in R2 to the power dissipated in R3. (c) If R1 is increased (R2, R3, battery unchanged), does the power dissipated in R3 increase, decrease, or stay the same?",
      "parts": [
        {
          "label": "(a)",
          "ask": "Compare I2 to I3.",
          "steps": [
            "Recall that resistors in parallel share the same voltage across them.",
            "Apply Ohm's Law to each branch with that shared voltage: since R2=2R3 (R2 is larger) and I=V/R, the branch with the SMALLER resistance (R3) carries the LARGER current.",
            "Find the exact factor: since R2 is twice R3, I3=2×I2."
          ]
        },
        {
          "label": "(b)",
          "ask": "Compare P2 to P3.",
          "steps": [
            "Use P=I²R for each resistor with its own current: P2=I2²(2R3) and P3=(2I2)²R3=4I2²R3.",
            "Compare: P3/P2 = 4I2²R3/(2I2²R3) = 2 — R3 dissipates twice as much power as R2, since its higher current (squared) more than compensates for its lower resistance."
          ]
        },
        {
          "label": "(c)",
          "ask": "Explain the effect of increasing R1 on P3.",
          "steps": [
            "Recognize that increasing R1 increases the total circuit resistance, decreasing the total current from the battery.",
            "Since more voltage now drops across the larger R1, the voltage across the parallel section decreases.",
            "With less voltage across the parallel section, both branch currents decrease, including I3 — so the power dissipated in R3 DECREASES."
          ]
        }
      ]
    },
    {
      "id": "frq-11-7",
      "source": "Original — Mathematical Routines",
      "title": "A Five-Resistor Network",
      "prompt": "Five identical resistors, each R, are arranged as follows: R1 and R2 in series form one branch; R3 alone forms a second branch; these two branches are in parallel with each other; that combination is in series with R4; and R5 is in parallel with the entire rest of the network (R1 through R4 combined). Find the total equivalent resistance in terms of R.",
      "parts": [
        {
          "label": "Full Solution",
          "ask": "Find the total equivalent resistance.",
          "steps": [
            "Combine R1 and R2 (in series) first: R1+R2=2R.",
            "Combine this with R3 (in parallel): 1/Rp=1/(2R)+1/R=3/(2R), so Rp=2R/3.",
            "Add R4 in series with this combination: Rp+R4=2R/3+R=5R/3.",
            "Combine this entire sub-network with R5 (in parallel): 1/R<sub>total</sub>=1/(5R/3)+1/R=3/(5R)+5/(5R)=8/(5R), giving R<sub>total</sub>=5R/8."
          ]
        }
      ]
    },
    {
      "id": "frq-11-8",
      "source": "Original — Mathematical Routines",
      "title": "Capacitor Branch at Steady State",
      "prompt": "A circuit has an 18V ideal battery in series with resistor R1=3Ω, which then splits into two parallel branches: one has resistor R2=6Ω, the other has a capacitor C=4μF in series with resistor R3=3Ω. At steady state, find: (a) the current through R1. (b) the voltage across the capacitor. (c) the charge stored on the capacitor.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the current through R1.",
          "steps": [
            "Recognize that at steady state, the fully-charged capacitor blocks all current through its branch — so all current flows through the simpler R1-R2 path.",
            "Apply Ohm's Law to that series loop: I1=ε/(R1+R2)=18/(3+6)=2A."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the voltage across the capacitor.",
          "steps": [
            "Since the R3-C branch carries zero current, R3 has zero voltage drop (V=IR=0).",
            "Since R2 sits in parallel with the entire R3-C branch, both share the same voltage: V<sub>parallel</sub>=I1×R2=2×6=12V.",
            "Since R3 contributes none of that voltage, the entire 12V appears across the capacitor: V<sub>C</sub>=12V."
          ]
        },
        {
          "label": "(c)",
          "ask": "Find the charge stored.",
          "steps": [
            "Apply the capacitor definition directly: Q=C×V<sub>C</sub>=(4μF)(12V)=48μC."
          ]
        }
      ]
    }
  ],
  "12": [
    {
      "id": "frq-12-1",
      "source": "2024 AP Exam, Free-Response Question 4",
      "title": "Two Particles Accelerated Into a Magnetic Field",
      "prompt": "Particle 1 (mass M, charge −Q) and Particle 2 (mass M/2, charge +2Q) are each accelerated from rest in the −y direction through a potential difference of magnitude |ΔV| (polarity adjusted for each particle's sign), exiting with kinetic energies K1, K2. (a) Find K2/K1. They then enter a region of uniform field B0 (out of the page, +z), entering moving −y and exiting moving +y. (b) (i) Find Particle 2's speed in terms of M, K2. (ii) Derive the horizontal distance Δx between entry and exit points for Particle 2, in terms of M, Q, K2, B0. (c) Sketch both particles' paths in the region. (d) A uniform E field is added so Particle 1 travels straight through at constant speed. Determine E's direction.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the ratio K2/K1.",
          "steps": [
            "Recognize both particles are accelerated through the SAME magnitude of potential difference |ΔV| — meaning the kinetic energy gained by each equals |charge|×|ΔV|.",
            "Compute each: K1 = |−Q|·|ΔV| = Q|ΔV|; K2 = |2Q|·|ΔV| = 2Q|ΔV|.",
            "Form the ratio: K2/K1 = 2Q|ΔV| / Q|ΔV| = 2 — the charge ratio alone determines this, since |ΔV| cancels out completely."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find Particle 2's speed and Δx.",
          "steps": [
            "Start from the kinetic energy definition using Particle 2's actual mass M/2: K2 = ½(M/2)v² = Mv²/4, so v = 2√(K2/M).",
            "Use the radius formula for circular motion, r=mv/(qB), plugging in mass M/2, charge magnitude 2Q, and the speed just found: r = (M/2)(2√(K2/M))/(2Q·B0) = √(M·K2)/(2Q·B0).",
            "Recognize that entering moving −y and exiting moving +y means the particle traced exactly a half-circle, so the horizontal displacement equals the full diameter: Δx = 2r = √(M·K2)/(Q·B0)."
          ]
        },
        {
          "label": "(c)",
          "ask": "Sketch both particles' paths.",
          "steps": [
            "Find each particle's turning direction using the right-hand rule with B out of the page (+z) and both particles initially moving −y: the resulting v×B direction points in −x (before accounting for charge sign).",
            "Apply each charge's sign: Particle 1 is negative, so its force is opposite (+x) — it curves right. Particle 2 is positive, so its force follows −x directly — it curves left.",
            "Sketch each as a semicircular arc curving in its respective direction, both starting at the same point moving −y and ending moving +y."
          ]
        },
        {
          "label": "(d)",
          "ask": "Find the required E field direction.",
          "steps": [
            "Set up the force-balance condition for straight-line motion: qE = −q(v×B), or E = −(v×B) — notice the charge q cancels out entirely, so this applies regardless of which particle's sign you consider.",
            "Use the already-found v×B direction for motion in −y through a field in +z: this equals −x.",
            "Take the negative of that: E = −(−x) = +x — the electric field must point in the +x direction to balance the magnetic force on Particle 1."
          ]
        }
      ]
    },
    {
      "id": "frq-12-2",
      "source": "2025 AP Exam, Free-Response Question 1",
      "title": "Parallel Wires and a Moving Loop",
      "prompt": "Wire 1 (along y=0, current I in +x) and Wire 2 (along y=+d, current I in +x) lie in the xy-plane; Point P is on Wire 1 at the origin. (A.i) Indicate the field direction from Wire 2 at P, and the force direction on Wire 1 from Wire 2. (A.ii) Wire 3 (current 2I, +x direction) is placed at y=y3 so the net force on Wire 1 from Wires 2 and 3 is zero. Derive y3 in terms of d. (B) Wire 3 is removed. A circular loop initially at rest below Wire 1 moves at constant speed in the −y direction (away from both wires). Determine whether the induced current is clockwise, counterclockwise, or zero, with justification.",
      "parts": [
        {
          "label": "(A.i)",
          "ask": "Find the field and force directions.",
          "steps": [
            "Apply the right-hand grip rule to Wire 2 (current +x): since P sits below Wire 2 (in −y from it), curling your thumb along +x makes your fingers point INTO the page at P — Wire 2's field at P points into the page.",
            "Apply the force rule to Wire 1 (current +x) sitting in that field: using F=IL×B, current in +x crossed with field in −z gives a force in +y — pointing toward Wire 2.",
            "Confirm this matches the general rule: parallel (same-direction) currents always attract, consistent with the +y (toward Wire 2) result."
          ]
        },
        {
          "label": "(A.ii)",
          "ask": "Derive y3 for zero net force on Wire 1.",
          "steps": [
            "Recognize that canceling Wire 2's +y pull requires an equal −y pull — meaning Wire 3 must sit BELOW Wire 1 (negative y), so its attraction (same-direction currents attract) pulls Wire 1 downward instead.",
            "Write the force-per-length from each wire on Wire 1: F2/L = μ0I²/(2πd) from Wire 2; F3/L = μ0(I)(2I)/(2π|y3|) = μ0I²/(π|y3|) from Wire 3.",
            "Set these equal (for zero net force) and solve: 1/(2d) = 1/|y3|, giving |y3| = 2d, so y3 = −2d."
          ]
        },
        {
          "label": "(B)",
          "ask": "Determine the induced current's direction.",
          "steps": [
            "Determine the field direction at the loop's location (below both wires): using the same right-hand-rule reasoning, both wires contribute field pointing INTO the page there.",
            "Track how that field changes as the loop moves farther away (−y, away from both wires): field strength falls off with distance, so the into-the-page flux through the loop is DECREASING.",
            "Apply Lenz's Law: the induced current opposes this decrease, creating its own additional into-the-page field to compensate.",
            "Use the loop's right-hand rule in reverse: for the induced field to point into the page, the current must flow CLOCKWISE as viewed looking at the page."
          ]
        }
      ]
    },
    {
      "id": "frq-12-3",
      "source": "2026 AP Exam, Free-Response Question 3",
      "title": "Determining Magnetic Field Strength and Particle Mass",
      "prompt": "Experiment 1: parallel conducting plates with field B0 into the region, connected to a variable-EMF power supply (separation d, known). A device emits charged spheres of speed v; the EMF is varied until spheres pass through undeflected, detected by a motion detector. Only a voltmeter is otherwise available. (A) Indicate what to measure for a linear graph to find B0, and how to reduce uncertainty. (B) Indicate the graph's axes and how B0 relates to a feature of the graph. Experiment 2: particles of charge Q=+6.4×10⁻¹⁹ C are emitted at v0=3.0×10⁶ m/s into a region of variable field B; radius r is recorded: (0.04T,1.8m), (0.06T,1.2m), (0.14T,0.5m), (0.16T,0.4m), (0.20T,0.3m). (C) Determine what to graph to find mass m. (D) Calculate m from the best-fit line.",
      "parts": [
        {
          "label": "(A)–(B)",
          "ask": "Design the velocity-selector experiment and identify the graph.",
          "steps": [
            "Recognize the setup as a velocity selector: for undeflected motion, electric and magnetic forces balance, qE=qvB0, which simplifies (charge cancels) to E=vB0.",
            "Express E using the known plate separation d and emf: E=ε/d, giving ε/d=vB0, or ε=B0·d·v — directly proportional to v.",
            "For each known value of v, record the emf ε needed (via voltmeter) for undeflected motion, repeating multiple trials at each v to average out uncertainty.",
            "Plot ε (vertical) against v (horizontal) to get a line through the origin; since slope=B0·d, solve B0=slope/d using the known separation."
          ]
        },
        {
          "label": "(C)–(D)",
          "ask": "Determine the particle mass graphically.",
          "steps": [
            "Start from the radius formula for circular motion, r=mv0/(qB), and rearrange: r=(mv0/q)·(1/B) — plotting r (vertical) against 1/B (horizontal) gives a line through the origin with slope=mv0/q.",
            "Compute 1/B for each data point and estimate the best-fit slope — the data gives a slope of approximately 0.075 m·T.",
            "Solve for mass using the known charge and speed: m = slope·q/v0 = (0.075)(6.4×10⁻¹⁹)/(3.0×10⁶) ≈ 1.6×10⁻²⁶ kg."
          ]
        }
      ]
    },
    {
      "id": "frq-12-4",
      "source": "Original — Mathematical Routines",
      "title": "Force on a Wire in a Field",
      "prompt": "A straight wire segment, 0.50 m long, carries 3.0 A in the +x direction, in a region with a uniform 0.40 T field pointing in the +y direction. (a) Find the magnitude of the force on the wire. (b) Find the direction of the force. (c) If the wire is instead reoriented to carry current in the +y direction (same field), find the new force.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the magnitude of the force.",
          "steps": [
            "Confirm the wire and field are perpendicular (current along x, field along y, at 90° to each other).",
            "Apply F=BILsinθ with θ=90°: F=(0.40)(3.0)(0.50)(1)=0.60N."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the direction of the force.",
          "steps": [
            "Apply the right-hand rule with fingers along the current (+x), curling toward the field (+y): thumb points out of the page.",
            "State the direction: the force is directed out of the page."
          ]
        },
        {
          "label": "(c)",
          "ask": "Find the force if the current runs in +y instead.",
          "steps": [
            "Recognize that current in +y now runs PARALLEL to the field (also +y) — the angle between them is 0°.",
            "Since F=BILsinθ with sinθ=sin0°=0, the force is exactly zero — a wire carrying current parallel to the field feels no force at all."
          ]
        }
      ]
    },
    {
      "id": "frq-12-5",
      "source": "Original — Mathematical Routines",
      "title": "Induced EMF in a Shrinking Loop",
      "prompt": "A circular loop of wire (radius 0.10 m, resistance 2.0 Ω) sits in a uniform 0.50 T field, perpendicular to the loop's plane and directed into the page. The loop is mechanically shrunk at a constant rate, with radius decreasing from 0.10 m to 0.060 m over 0.40 s. (a) Find the change in the loop's area. (b) Find the average induced EMF. (c) Find the average induced current. (d) Determine the direction of the induced current, viewed by the reader.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the change in area.",
          "steps": [
            "Compute initial and final areas using A=πr²: A<sub>i</sub>=π(0.10)²≈0.0314m²; A<sub>f</sub>=π(0.060)²≈0.0113m².",
            "Find the change: ΔA=A<sub>f</sub>−A<sub>i</sub>≈−0.0201m² (a decrease)."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the average induced EMF.",
          "steps": [
            "Apply Faraday's Law using the change in flux, Φ=BA, with B constant: ΔΦ=B·ΔA=(0.50)(−0.0201)≈−0.0101 Wb.",
            "Find the average EMF magnitude: |EMF|=|ΔΦ|/Δt=0.0101/0.40≈0.025V."
          ]
        },
        {
          "label": "(c)",
          "ask": "Find the average induced current.",
          "steps": [
            "Apply Ohm's Law to the loop: I=EMF/R=0.025/2.0≈0.013A."
          ]
        },
        {
          "label": "(d)",
          "ask": "Determine the direction of the induced current.",
          "steps": [
            "Determine the flux trend: with the field into the page and the loop's area shrinking, the into-the-page flux is DECREASING.",
            "Apply Lenz's Law: the induced current opposes this decrease, creating its own additional into-the-page field inside the loop.",
            "Use the loop's right-hand rule in reverse: for the induced field to point into the page, the current must flow CLOCKWISE as viewed by the reader."
          ]
        }
      ]
    },
    {
      "id": "frq-12-6",
      "source": "Original — Qualitative/Quantitative Translation",
      "title": "Velocity Selector and Charge-to-Mass Ratio",
      "prompt": "A charged particle enters a region with both a uniform electric field E (downward) and a uniform magnetic field B (into the page), oriented so the particle travels in a straight horizontal line at constant velocity — a velocity selector. (a) Derive an expression for the particle's speed v in terms of E and B. (b) The particle then enters a second region with only field B, traveling in a circular arc of radius r. Derive an expression for q/m in terms of E, B, r. (c) A second, different particle passes through the same velocity selector undeflected but curves with a LARGER radius. Is its q/m larger or smaller than the first particle's?",
      "parts": [
        {
          "label": "(a)",
          "ask": "Derive the particle's speed.",
          "steps": [
            "Set up the force-balance condition for straight-line motion: the electric force must exactly cancel the magnetic force, qE=qvB.",
            "Notice the charge q cancels entirely from this equation.",
            "Solve for speed: v=E/B — depending only on the field strengths, not on the particle's charge or mass."
          ]
        },
        {
          "label": "(b)",
          "ask": "Derive q/m in terms of E, B, r.",
          "steps": [
            "In the second region, the magnetic force alone provides the centripetal force: qvB=mv²/r.",
            "Simplify by canceling one factor of v: qB=mv/r, or q/m=v/(rB).",
            "Substitute the speed found in part (a): q/m=(E/B)/(rB)=E/(rB²)."
          ]
        },
        {
          "label": "(c)",
          "ask": "Compare the two particles' q/m ratios.",
          "steps": [
            "Recognize both particles pass through the SAME velocity selector undeflected, so both must have the exact same speed v=E/B, independent of charge or mass.",
            "Use q/m=E/(rB²), which is INVERSELY proportional to radius r for fixed E and B.",
            "Conclude: the particle with the LARGER radius has a SMALLER charge-to-mass ratio — it takes more mass (relative to charge) for the same magnetic force to bend its path into a wider circle."
          ]
        }
      ]
    },
    {
      "id": "frq-12-7",
      "source": "Original — Mathematical Routines (Derivation)",
      "title": "Deriving Motional EMF from First Principles",
      "prompt": "A conducting rod of length L slides with speed v along parallel conducting rails, perpendicular to a uniform field B (into the page), completing a circuit with resistor R at the far end. (a) Using the magnetic force on individual charges in the rod (not starting from Faraday's Law), derive the motional EMF. (b) Derive the induced current. (c) Derive the force needed to keep the rod moving at constant speed.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Derive the motional EMF from the force on individual charges.",
          "steps": [
            "Consider a single positive charge q within the moving rod: as the rod moves with velocity v through field B, this charge experiences a magnetic force F=qvB, directed along the rod's length.",
            "Recognize this force does work on the charge as it's pushed the full length L of the rod: W=F×L=qvBL.",
            "Recall that EMF is work done per unit charge: EMF=W/q=(qvBL)/q=BLv — the charge cancels entirely."
          ]
        },
        {
          "label": "(b)",
          "ask": "Derive the induced current.",
          "steps": [
            "Treat the rod as a battery of EMF=BLv, connected to the external resistor R.",
            "Apply Ohm's Law to the resulting simple circuit: I=EMF/R=BLv/R."
          ]
        },
        {
          "label": "(c)",
          "ask": "Derive the force needed to maintain constant speed.",
          "steps": [
            "Recognize that the current-carrying rod, sitting in the field, experiences its own magnetic force acting as a drag opposing its motion (consistent with Lenz's Law): F<sub>drag</sub>=BIL.",
            "Substitute the current from part (b): F<sub>drag</sub>=B×(BLv/R)×L=B²L²v/R.",
            "Conclude that to maintain constant speed against this drag, an external agent must apply an equal and opposite force of magnitude B²L²v/R."
          ]
        }
      ]
    }
  ],
  "13": [
    {
      "id": "frq-13-1",
      "source": "2023 AP Exam, Free-Response Question 1",
      "title": "Refraction Through a Mirrored Tank",
      "prompt": "A rectangular tank with a mirrored bottom is filled with water (index nw). A beam passes from air (index na) into the water at angle θi from the normal; nw > na. (a) Sketch the entire beam path (entering, reflecting off the bottom, exiting). Sugar is then added, and two models are considered: Model A (uniform mixture, index nm > nw) and Model B (three equal-volume layers: water on top, the Model-A mixture in the middle, and a denser mixture nb on the bottom). (b) For Model A, describe how the observed wavelength changes as the beam enters the mixture. (c) Define θ1 (Model A's angle) and θ2, θ3, θ4 (Model B's angles in each layer, top to bottom). (i) Derive θ4 in terms of θi, na, nb. (ii) Rank θ1–θ4 from greatest to least, justifying. (d) The original beam exits the water-only tank a horizontal distance dw from its entry point; Models A and B give dA and dB. Determine whether dA and dB are each greater than, less than, or equal to dw.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Sketch the beam's full path.",
          "steps": [
            "Trace the beam entering the water from air: since water is denser (nw>na), the beam bends TOWARD the normal on entering.",
            "Continue to the mirrored bottom, where it reflects following the ordinary law of reflection (angle of incidence = angle of reflection).",
            "Trace the reflected beam back up through the water — by the symmetry of this reflection, it approaches the surface at the same angle it traveled down at.",
            "As it exits back into air, it bends AWAY from the normal, exiting at exactly the original angle θi, just laterally shifted from the entry point."
          ]
        },
        {
          "label": "(b)",
          "ask": "Describe the wavelength change in Model A.",
          "steps": [
            "Recall that wavelength inside a medium relates to vacuum wavelength via λ_medium=λ_vacuum/n.",
            "Since the mixture's index nm exceeds air's index na, the wavelength inside the mixture is SHORTER than in air.",
            "Note what does NOT change: frequency stays constant across the boundary — only speed and wavelength change during refraction."
          ]
        },
        {
          "label": "(c) i",
          "ask": "Derive θ4 in terms of θi, na, nb.",
          "steps": [
            "Recognize that Snell's Law relates the angles in the very FIRST medium and the very LAST medium directly, regardless of what's in between, as long as the interfaces are parallel (as here).",
            "Apply Snell's Law straight from air to the bottom layer: na·sinθi = nb·sinθ4.",
            "Solve: θ4 = arcsin[(na/nb)sinθi]."
          ]
        },
        {
          "label": "(c) ii",
          "ask": "Rank θ1–θ4 and justify.",
          "steps": [
            "Recognize every angle comes from na·sinθi = n·sinθ, where n is that layer's index — since na·sinθi is fixed, a LARGER index always produces a SMALLER angle.",
            "Rank the indices: nw (water) < nm (Model A's mixture, same as Model B's middle layer) < nb (Model B's bottom layer) — and since θ1 and θ3 both use index nm, they must be exactly equal.",
            "Convert to an angle ranking by reversing the index order: θ2 (smallest index nw) is largest; θ1 and θ3 (both nm) tie for the middle; θ4 (largest index nb) is smallest: θ2 > θ1 = θ3 > θ4."
          ]
        },
        {
          "label": "(d)",
          "ask": "Compare dA and dB to dw.",
          "steps": [
            "Compare Model A to the water-only case: since nm>nw, the beam bends more toward vertical, giving a smaller horizontal spread over the same depth — so dA < dw.",
            "Break Model B's horizontal distance into three equal-depth segments, one per layer, each contributing (depth/3)·tan(angle in that layer).",
            "Compare each segment to plain water: the top segment matches exactly (same index, same angle); the middle and bottom segments use higher indices (nm, nb), producing smaller angles and smaller tangent values than plain water would give.",
            "Conclude that since two of three segments are smaller (and one equal), dB must also be less than dw — both models produce a smaller horizontal exit distance than plain water."
          ]
        }
      ]
    },
    {
      "id": "frq-13-2",
      "source": "Original — Mathematical Routines",
      "title": "Converging Lens Image Formation",
      "prompt": "An object 3.0 cm tall is placed 24 cm from a converging lens with focal length 8.0 cm. (a) Find the image distance. (b) Find the magnification. (c) Find the image height. (d) Classify the image.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the image distance.",
          "steps": [
            "Apply the thin lens equation: 1/so+1/si=1/f.",
            "Substitute: 1/24+1/si=1/8.0.",
            "Solve: 1/si=1/8.0−1/24=3/24−1/24=2/24=1/12, giving si=12cm."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the magnification.",
          "steps": [
            "Apply M=−si/so=−12/24=−0.5."
          ]
        },
        {
          "label": "(c)",
          "ask": "Find the image height.",
          "steps": [
            "Use M=hi/ho to solve for image height: hi=M×ho=(−0.5)(3.0cm)=−1.5cm."
          ]
        },
        {
          "label": "(d)",
          "ask": "Classify the image.",
          "steps": [
            "Since si is positive, the image is REAL, forming on the opposite side of the lens from the object.",
            "Since M is negative, the image is INVERTED.",
            "Since |M|<1, the image is REDUCED — overall: real, inverted, reduced."
          ]
        }
      ]
    },
    {
      "id": "frq-13-3",
      "source": "Original — Mathematical Routines (Working Backward)",
      "title": "Locating an Object for a Target Image",
      "prompt": "A concave mirror has focal length 15 cm. A student wants a real image exactly twice the size of the object. (a) Find the required object distance. (b) Find the resulting image distance. (c) Explain why M=−2 (not +2) is the physically relevant solution here.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the required object distance.",
          "steps": [
            "Recognize a REAL, inverted image with double the size corresponds to M=−2 (negative for inverted, magnitude 2 for size).",
            "Use M=−si/so=−2 to express si: si=2so.",
            "Substitute into the mirror equation: 1/so+1/(2so)=1/15, simplifying to 3/(2so)=1/15.",
            "Solve: so=(3×15)/2=22.5cm."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the image distance.",
          "steps": [
            "Use si=2so found above: si=2(22.5)=45cm."
          ]
        },
        {
          "label": "(c)",
          "ask": "Explain why M=−2 is the correct choice.",
          "steps": [
            "Recall that for a concave mirror, a REAL image always comes with a NEGATIVE magnification — a direct consequence of the sign convention, since real images only occur when the object sits outside the focal length.",
            "A magnification of +2 would instead describe a VIRTUAL, upright, magnified image (object inside the focal length) — a physically different scenario, like a magnifying mirror.",
            "Since the problem specifically asks for a real image, M=−2 is the only physically consistent choice."
          ]
        }
      ]
    },
    {
      "id": "frq-13-4",
      "source": "Original — Mathematical Routines + Application",
      "title": "Critical Angle in an Optical Fiber",
      "prompt": "An optical fiber has a core with index 1.48, surrounded by cladding with index 1.44. (a) Find the critical angle for light traveling from the core into the cladding. (b) Explain why light hitting the wall at angles greater than this critical angle stays trapped inside via total internal reflection. (c) If a manufacturing defect increased the cladding's index to 1.46, would the critical angle increase, decrease, or stay the same? Explain the practical consequence.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the critical angle.",
          "steps": [
            "Apply the critical angle formula for light going from the denser core toward the less-dense cladding: sinθc=n2/n1=1.44/1.48≈0.973.",
            "Solve: θc=sin⁻¹(0.973)≈76.7°."
          ]
        },
        {
          "label": "(b)",
          "ask": "Explain how total internal reflection traps the light.",
          "steps": [
            "Recall that any light hitting the boundary at an angle GREATER than θc undergoes total internal reflection — 100% reflects back into the core.",
            "Explain the consequence: as long as light always strikes the walls above this critical angle, it continues bouncing down the fiber's length via repeated total internal reflections with no loss through the walls, enabling long-distance transmission."
          ]
        },
        {
          "label": "(c)",
          "ask": "Analyze the effect of the manufacturing defect.",
          "steps": [
            "Recompute the critical angle with the new cladding index: sinθc=1.46/1.48≈0.986, giving θc≈80.6° — LARGER than before.",
            "Explain why: as the cladding's index gets closer to the core's, it becomes 'easier' for light to refract out, requiring a more grazing (larger) angle to still totally internally reflect.",
            "State the consequence: with a larger required critical angle, more of the light's travel angles now fall below threshold and leak out — meaning more signal loss and reduced transmission efficiency."
          ]
        }
      ]
    }
  ],
  "14": [
    {
      "id": "frq-14-1",
      "source": "2025 AP Exam, Free-Response Question 4",
      "title": "Double-Slit Fringes for Violet vs. Red Light",
      "prompt": "Two slits are separated by distance d; a screen sits at distance L, with L≫d. Bright bands A and B are observed, with three additional bright bands (including the central band) between them. A student claims: the distance from Band A's center to the central bright band is SMALLER using violet light than red light. (A) Indicate whether this claim is correct, justifying without manipulating equations, by referencing the path-length difference to Band A. (B) Derive an expression for the distance between the centers of Bands A and B, for light of frequency f, in terms of d, L, f. (C) Indicate whether your answer to (B) is consistent with your answer to (A).",
      "parts": [
        {
          "label": "(A)",
          "ask": "Evaluate the student's claim conceptually.",
          "steps": [
            "Recall the defining condition for a bright fringe at position m: the path-length difference between the slits equals exactly mλ — the SAME m applies to Band A regardless of the light's color.",
            "Compare the path differences violet and red light need for that same m: since violet has a shorter wavelength, the absolute path difference needed (m×λ_violet) is smaller than red's (m×λ_red).",
            "Connect smaller path difference to fringe position: a smaller required path difference is achieved closer to the central band (where path difference is zero) — so violet's Band A sits closer to center, confirming the student is CORRECT."
          ]
        },
        {
          "label": "(B)",
          "ask": "Derive the distance between Bands A and B.",
          "steps": [
            "Start from the reference-sheet relationship for bright fringes: d·sinθ = mλ.",
            "Convert angle to screen position using the small-angle approximation (valid since L≫d): sinθ ≈ y/L, giving y = mλL/d.",
            "Identify m for each band: the pattern described (three bright bands, including the central one, between A and B) works out to A and B sitting at m=+2 and m=−2.",
            "Find the distance between them: Δy = y<sub>A</sub> − y<sub>B</sub> = (2λL/d) − (−2λL/d) = 4λL/d.",
            "Convert wavelength to frequency using c=fλ, so λ=c/f: Δy = 4cL/(fd)."
          ]
        },
        {
          "label": "(C)",
          "ask": "Check consistency with Part A.",
          "steps": [
            "Examine how Δy=4cL/(fd) depends on frequency: f sits in the denominator, so Δy is INVERSELY proportional to frequency.",
            "Recall violet light has a HIGHER frequency than red light (shorter wavelength, linked inversely via c=fλ).",
            "Conclude that higher-frequency violet light gives a SMALLER Δy than red — exactly matching Part A's conclusion that violet's bands sit closer together. The two answers are CONSISTENT."
          ]
        }
      ]
    },
    {
      "id": "frq-14-2",
      "source": "Original — Mathematical Routines",
      "title": "Standing Waves — Multi-Harmonic Analysis",
      "prompt": "A string of length 1.5 m, fixed at both ends, has a wave speed of 45 m/s. (a) Find the fundamental frequency. (b) Find the frequency of the third harmonic. (c) A student observes a pattern with exactly 5 antinodes. Identify the harmonic and find its frequency.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the fundamental frequency.",
          "steps": [
            "Apply the fundamental frequency formula for a string fixed at both ends: f1=v/(2L)=45/(2×1.5)=15Hz."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the third harmonic's frequency.",
          "steps": [
            "Recall harmonic frequencies are whole-number multiples of the fundamental: f3=3×f1=3×15=45Hz."
          ]
        },
        {
          "label": "(c)",
          "ask": "Identify the harmonic with 5 antinodes and find its frequency.",
          "steps": [
            "Recall that the number of antinodes directly identifies the harmonic number n, for a string fixed at both ends.",
            "With 5 antinodes, this is the FIFTH harmonic (n=5).",
            "Find its frequency: f5=5×f1=5×15=75Hz."
          ]
        }
      ]
    },
    {
      "id": "frq-14-3",
      "source": "Original — Mathematical Routines",
      "title": "Doppler Shift of an Emergency Vehicle",
      "prompt": "An ambulance siren emits sound at 480 Hz; sound speed in air is 340 m/s. (a) Find the frequency heard as the ambulance approaches a stationary observer at 25 m/s. (b) Find the frequency heard after it passes and recedes at the same speed. (c) Find the total perceived frequency change.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the approaching frequency.",
          "steps": [
            "Apply the Doppler formula for an approaching source: f'=f·v/(v−vs).",
            "Substitute: f'=480×340/(340−25)=480×340/315≈518Hz."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the receding frequency.",
          "steps": [
            "Apply the Doppler formula for a receding source: f'=f·v/(v+vs).",
            "Substitute: f'=480×340/(340+25)=480×340/365≈447Hz."
          ]
        },
        {
          "label": "(c)",
          "ask": "Find the total frequency change.",
          "steps": [
            "Subtract the two results: Δf=518−447≈71Hz — the audible pitch 'drop' a listener perceives as the ambulance passes."
          ]
        }
      ]
    },
    {
      "id": "frq-14-4",
      "source": "Original — Mathematical Routines",
      "title": "Diffraction Grating Wavelength",
      "prompt": "A diffraction grating with 5000 lines per centimeter is illuminated with monochromatic light. The second-order (m=2) bright line appears at 22° from the central maximum. (a) Find the slit spacing d. (b) Find the wavelength.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the slit spacing.",
          "steps": [
            "Recognize that d is the reciprocal of lines per unit length: d=1/(5000 lines/cm)=2.0×10⁻⁴cm=2.0×10⁻⁶m."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the wavelength.",
          "steps": [
            "Apply the grating equation (same form as double-slit): dsinθ=mλ.",
            "Solve: λ=dsinθ/m=(2.0×10⁻⁶)(sin22°)/2≈3.75×10⁻⁷m=375nm."
          ]
        }
      ]
    },
    {
      "id": "frq-14-5",
      "source": "Original — Qualitative/Quantitative Translation",
      "title": "Interference and Polarization — Conceptual Synthesis",
      "prompt": "A student runs a double-slit experiment with a laser, and separately, a polarization experiment with two filters. (a) Explain why the double-slit experiment demonstrates light's WAVE nature, referencing superposition. (b) Explain why the polarization experiment only works because light is TRANSVERSE, and describe what would differ if light were longitudinal. (c) Could a double-slit-style interference pattern be produced with sound instead of light? Explain.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Explain the double-slit experiment as wave evidence.",
          "steps": [
            "Recall that interference patterns arise from superposition — two waves overlapping and adding constructively or destructively at each point.",
            "Explain why this demonstrates wave behavior: only waves combine this way; particles would simply pile up behind each slit, never producing alternating bright and dark bands.",
            "Conclude that a genuine interference pattern is direct evidence light behaves as a wave in this experiment."
          ]
        },
        {
          "label": "(b)",
          "ask": "Explain the transverse-wave requirement for polarization.",
          "steps": [
            "Recall that polarization restricts a wave's oscillation to a single plane — meaningful only for TRANSVERSE waves, which oscillate perpendicular to their travel direction.",
            "Explain the longitudinal case: if light oscillated along its direction of travel (like sound), there would be no perpendicular plane to restrict — a polarizing filter would have nothing meaningful to filter.",
            "Conclude that light's ability to be polarized is itself evidence it's a transverse wave."
          ]
        },
        {
          "label": "(c)",
          "ask": "Evaluate whether sound could show double-slit interference.",
          "steps": [
            "Recall that interference is a general wave phenomenon, not unique to light.",
            "Apply this to sound: since sound is a wave (longitudinal, but still a wave), passing it through two openings and observing interference IS physically possible.",
            "Conclude YES — the fringe spacing would differ (sound's much longer wavelength means spacing on the scale of centimeters or more), but the same dsinθ=mλ relationship and underlying superposition principle apply."
          ]
        }
      ]
    }
  ],
  "15": [
    {
      "id": "frq-15-1",
      "source": "2024 AP Exam, Free-Response Question 1",
      "title": "Photoelectric Effect and de Broglie Wavelength",
      "prompt": "In a photoelectric experiment, light of frequency fA, fB, or fC strikes Metal 1 or Metal 2. The minimum de Broglie wavelength λe of ejected electrons is measured (using classical p=mv): (fA,Metal1,6.9×10⁻¹⁰m), (fA,Metal2,9.4×10⁻¹⁰m), (fB,Metal1,no electrons), (fB,Metal2,no electrons), (fC,Metal1,5.3×10⁻¹⁰m), (fC,Metal2,6.3×10⁻¹⁰m). (a) Indicate which frequency is greatest and which is least, justifying with physics principles. (b) Calculate the maximum kinetic energy of electrons ejected from Metal 1 in Trial 1 (fA). (c) Indicate whether Metal 1's work function is greater than, less than, or equal to Metal 2's, justifying by referencing the table.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Rank fA, fB, fC.",
          "steps": [
            "Note that fB produces NO ejected electrons from either metal — since a frequency below threshold ejects nothing regardless of intensity, fB must be the LOWEST of the three.",
            "Compare fA and fC using the de Broglie wavelengths on the same metal (Metal 1): fC gives a SMALLER λe (5.3 vs 6.9), meaning higher momentum and higher kinetic energy.",
            "Connect higher ejected-electron KE to higher photon frequency (K<sub>max</sub>=hf−φ, more KE for the same metal requires higher f): fC > fA.",
            "Combine into the full ranking: fC is greatest, fB is least, fA in between."
          ]
        },
        {
          "label": "(b)",
          "ask": "Calculate max KE for Metal 1, Trial 1.",
          "steps": [
            "Convert the given de Broglie wavelength into momentum using λ=h/p: p = h/λe = (6.63×10⁻³⁴)/(6.9×10⁻¹⁰) ≈ 9.6×10⁻²⁵ kg·m/s.",
            "Using the classical momentum definition as instructed, find kinetic energy: K = p²/(2m) = (9.6×10⁻²⁵)²/(2×9.11×10⁻³¹) ≈ 5.1×10⁻¹⁹ J.",
            "Convert to electron-volts: K ≈ 5.1×10⁻¹⁹/1.6×10⁻¹⁹ ≈ 3.2 eV."
          ]
        },
        {
          "label": "(c)",
          "ask": "Compare the work functions of Metal 1 and Metal 2.",
          "steps": [
            "Compare Trial 1 (fA on Metal 1) to Trial 2 (fA on Metal 2) — the SAME photon energy is used on both.",
            "Note Metal 1's electrons have a smaller λe (6.9 vs 9.4), meaning higher momentum and higher KE than Metal 2's, from the identical starting photon energy.",
            "Apply K<sub>max</sub>=hf−φ: since Metal 1's electrons ended up with MORE kinetic energy from the same photon energy, less energy was 'spent' overcoming Metal 1's work function — so φ(Metal 1) < φ(Metal 2)."
          ]
        }
      ]
    },
    {
      "id": "frq-15-2",
      "source": "2026 AP Exam, Free-Response Question 2",
      "title": "Energy Levels and Photon Transitions",
      "prompt": "A hypothetical atom has energy levels −5E0 (n=1), −3E0 (n=2), −2E0 (n=3). (A) Draw arrows for all possible transitions that result in photon emission. (B) Derive the wavelength of the highest-energy photon the atom can emit, in terms of E0. (C) A device emits monochromatic light of continuously variable wavelength; at λ0, the photon energy is 4E0. Sketch E vs. λ for λ0<λ<4λ0. (D) A student claims the atom can emit a photon of wavelength λ0 (energy 4E0), like the device. Indicate whether this is correct, justifying by referencing part A.",
      "parts": [
        {
          "label": "(A)",
          "ask": "Draw all possible emission transitions.",
          "steps": [
            "Recall that photon EMISSION requires the electron to drop to a LOWER energy level — only downward transitions count.",
            "With three levels, there are three possible downward transitions: n=3→n=2, n=3→n=1, and n=2→n=1 — draw an arrow for each, all pointing toward lower (more negative) energy."
          ]
        },
        {
          "label": "(B)",
          "ask": "Derive the highest-energy photon's wavelength.",
          "steps": [
            "Compute the energy gap for each transition: n=3→n=2 gives 1E0; n=2→n=1 gives 2E0; n=3→n=1 gives 3E0 — the largest.",
            "Relate photon energy to wavelength: E=hf combined with c=fλ gives E=hc/λ.",
            "Solve for the wavelength of the highest-energy (n=3→n=1) photon: λ=hc/(3E0)."
          ]
        },
        {
          "label": "(C)",
          "ask": "Sketch E vs. λ for the device.",
          "steps": [
            "Recognize the general shape: since E=hc/λ, energy is inversely proportional to wavelength — a decreasing hyperbola-shaped curve, not a straight line.",
            "Anchor the curve using the given point: at λ=λ0, E=4E0.",
            "Find the curve's value at the other end, λ=4λ0: since E∝1/λ, quadrupling λ cuts E to one-fourth, giving E=E0 at λ=4λ0.",
            "Sketch a smooth, concave-up decreasing curve connecting (λ0, 4E0) to (4λ0, E0)."
          ]
        },
        {
          "label": "(D)",
          "ask": "Evaluate the student's claim.",
          "steps": [
            "Recall the atom's maximum possible photon energy from part B: 3E0 (the largest available gap, n=3 to n=1) — no transition can release more energy than this.",
            "Compare to the student's claimed photon: at λ0, the device emits a photon of energy 4E0 — more than the atom's largest possible transition can provide.",
            "Conclude the student's claim is INCORRECT: since 4E0 exceeds the atom's maximum single-photon emission energy of 3E0, the atom cannot emit a photon matching the device's λ0 output."
          ]
        }
      ]
    },
    {
      "id": "frq-15-3",
      "source": "Original — Mathematical Routines",
      "title": "A Three-Step Radioactive Decay Chain",
      "prompt": "Uranium-235 (Z=92) undergoes: an alpha decay, then a beta-minus decay, then another alpha decay. (a) Find the mass number and atomic number after all three decays. (b) Identify the final element (Z=88 Radium, 89 Actinium, 90 Thorium, 91 Protactinium).",
      "parts": [
        {
          "label": "(a)",
          "ask": "Track mass number and atomic number through all three decays.",
          "steps": [
            "Apply the first decay (alpha): A=235−4=231, Z=92−2=90.",
            "Apply the second decay (beta-minus): A=231 (unchanged), Z=90+1=91.",
            "Apply the third decay (alpha): A=231−4=227, Z=91−2=89.",
            "Final result: mass number 227, atomic number 89."
          ]
        },
        {
          "label": "(b)",
          "ask": "Identify the final element.",
          "steps": [
            "Match atomic number 89 to its element using the given reference: Actinium.",
            "State the final nucleus: Actinium-227."
          ]
        }
      ]
    },
    {
      "id": "frq-15-4",
      "source": "Original — Mathematical Routines",
      "title": "Nuclear Binding Energy of Helium-4",
      "prompt": "A helium-4 nucleus (2 protons, 2 neutrons) has measured mass 4.001506 u. A free proton has mass 1.007276 u; a free neutron has mass 1.008665 u. (a) Find the mass defect. (b) Find the binding energy in MeV (1u=931 MeV/c²). (c) Find the binding energy per nucleon, and explain why this is more useful for comparing stability across elements than total binding energy alone.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the mass defect.",
          "steps": [
            "Compute the total mass of the separated particles: 2(1.007276)+2(1.008665)=4.031882u.",
            "Subtract the actual nucleus mass: Δm=4.031882−4.001506=0.030376u."
          ]
        },
        {
          "label": "(b)",
          "ask": "Find the binding energy.",
          "steps": [
            "Convert the mass defect to energy using 1u=931MeV/c²: BE=(0.030376)(931)≈28.3MeV."
          ]
        },
        {
          "label": "(c)",
          "ask": "Find binding energy per nucleon and explain its usefulness.",
          "steps": [
            "Divide by the number of nucleons (4): BE/nucleon=28.3/4≈7.07MeV/nucleon.",
            "Explain: total binding energy naturally grows with nucleus size, so comparing raw totals across different-sized nuclei doesn't show which is more stably bound per particle — dividing by nucleon count normalizes for size, enabling fair comparison of stability across elements."
          ]
        }
      ]
    },
    {
      "id": "frq-15-5",
      "source": "Original — Experimental Design",
      "title": "Measuring the Work Function and Planck's Constant",
      "prompt": "A student has a light source with adjustable known frequency, a metal sample, a variable voltage supply, and a way to measure the stopping voltage at each frequency. Design an experiment to determine the metal's work function φ and Planck's constant h from the same data set. (a) Describe the procedure. (b) Describe the graphical analysis.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Describe the procedure.",
          "steps": [
            "Select several light frequencies above the metal's threshold, shining each on the sample in turn.",
            "For each frequency, gradually increase the stopping voltage until the photoelectric current drops to exactly zero, recording that voltage.",
            "Repeat with multiple trials per frequency to reduce uncertainty in identifying the exact zero-current point."
          ]
        },
        {
          "label": "(b)",
          "ask": "Describe the graphical analysis.",
          "steps": [
            "Recall the governing relationship: qV<sub>stop</sub>=hf−φ, rearranged as V<sub>stop</sub>=(h/q)f−(φ/q) — linear in frequency.",
            "Plot V<sub>stop</sub> (vertical) against f (horizontal) to get a straight line.",
            "Extract h from the slope (multiply the measured slope by elementary charge q), and extract φ from the x-intercept (threshold frequency, multiplied by the h value found)."
          ]
        }
      ]
    },
    {
      "id": "frq-15-6",
      "source": "Original — Qualitative/Quantitative Translation",
      "title": "de Broglie Wavelength and Electron Microscopy",
      "prompt": "An electron microscope uses electrons rather than visible light because their de Broglie wavelength can be made far shorter. (a) Find the de Broglie wavelength of an electron accelerated from rest through 5000V. (b) Compare to visible light's ~500nm wavelength, and explain why shorter wavelength allows finer resolution. (c) If the accelerating voltage increases, does the wavelength increase or decrease?",
      "parts": [
        {
          "label": "(a)",
          "ask": "Find the electron's de Broglie wavelength.",
          "steps": [
            "Find the kinetic energy: K=qΔV=(1.6×10⁻¹⁹)(5000)=8.0×10⁻¹⁶J.",
            "Find momentum from kinetic energy: p=√(2mK)=√(2×9.11×10⁻³¹×8.0×10⁻¹⁶)≈3.82×10⁻²³kg·m/s.",
            "Apply de Broglie's relationship: λ=h/p=(6.63×10⁻³⁴)/(3.82×10⁻²³)≈1.7×10⁻¹¹m."
          ]
        },
        {
          "label": "(b)",
          "ask": "Compare to visible light and explain the resolution benefit.",
          "steps": [
            "Compare magnitudes: this wavelength is roughly 30,000 times shorter than visible light's ~500nm.",
            "Explain the connection: resolution is fundamentally limited by diffraction, significant when features are comparable to wavelength — a much shorter wavelength diffracts far less around small structures, resolving details invisible to any light microscope."
          ]
        },
        {
          "label": "(c)",
          "ask": "Explain the effect of increasing voltage.",
          "steps": [
            "Recall that increasing voltage increases kinetic energy directly: K=qΔV.",
            "Since momentum depends on the square root of K (p=√(2mK)), increasing K also increases p.",
            "Since wavelength is inversely related to momentum (λ=h/p), increasing p DECREASES the wavelength — higher voltage gives even shorter wavelength and potentially finer resolution."
          ]
        }
      ]
    },
    {
      "id": "frq-15-7",
      "source": "Original — Mathematical Routines",
      "title": "Radioactive Half-Life Calculation",
      "prompt": "A radioactive sample has a half-life of 8.0 days and starts with 4.0×10¹⁰ undecayed nuclei. (a) Find the number remaining after 24 days. (b) Find the number of half-lives elapsed after 24 days, confirming part (a). (c) Find the fraction of the original sample that has decayed after 24 days.",
      "parts": [
        {
          "label": "(a)–(b)",
          "ask": "Find the number remaining and confirm using half-life count.",
          "steps": [
            "Find the number of half-lives elapsed: 24 days ÷ 8.0 days/half-life = 3 half-lives.",
            "Apply N=N<sub>0</sub>×(1/2)<sup>n</sup>: N=(4.0×10¹⁰)(1/2)³=(4.0×10¹⁰)(1/8)=5.0×10⁹ nuclei remaining."
          ]
        },
        {
          "label": "(c)",
          "ask": "Find the decayed fraction.",
          "steps": [
            "Recognize the fraction remaining is (1/2)³=1/8, so the fraction decayed is the complement: 1−1/8=7/8.",
            "Convert to a percentage: 7/8=87.5% of the original sample has decayed after 24 days."
          ]
        }
      ]
    }
  ]
};

export { STUDY_CONTENT, UNITS, QUESTIONS, FRQ_CONTENT };
