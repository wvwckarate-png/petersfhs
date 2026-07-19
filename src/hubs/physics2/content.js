const STUDY_CONTENT = {
  9: `<div class="hero">
  <div class="eyebrow">Peters Family Homeschool · AP Physics 2</div>
  <h1>Thermodynamics</h1>
  <p class="sub">How heat, temperature, and energy move through matter — starting from what individual particles are actually doing, and building up to everything you'll need for the exam.</p>
  <div class="hero-pills">
    <span class="pill">Exam weight 15–18%</span>
    <span class="pill">6 topics</span>
    <span class="pill">13 practice problems</span>
  </div>
</div>

<div class="toc">
  <div class="toc-label">Jump to a section</div>
  <ol>
    <li><a href="#s91">9.1 Kinetic Theory</a></li>
    <li><a href="#s92">9.2 Ideal Gas Law</a></li>
    <li><a href="#s93">9.3 Thermal Energy Transfer</a></li>
    <li><a href="#s94">9.4 First Law</a></li>
    <li><a href="#s95">9.5 Experiments</a></li>
    <li><a href="#s96">9.6 Entropy</a></li>
    <li><a href="#practice">Practice Set</a></li>
  </ol>
</div>

<div class="wrap">

  <p class="quote">"Work each section in order — each one builds on the last." — Unit 9</p>

  <div class="skillbox">
    <span class="tag-label skill">Master This First — The Four-Process Table</span>
    <p>Nearly every FRQ and a large share of the multiple choice in this unit comes down to correctly identifying WHICH of the four classic processes you're looking at, then applying its shortcut:</p>
    <ul style="margin:10px 0 0;">
      <li><strong>Isochoric</strong> (constant V) → W=0, so ΔU=Q directly.</li>
      <li><strong>Isothermal</strong> (constant T) → ΔU=0, so W=−Q directly.</li>
      <li><strong>Isobaric</strong> (constant P) → W=−PΔV, the only case needing an actual multiplication.</li>
      <li><strong>Adiabatic</strong> (Q=0) → ΔU=W directly.</li>
    </ul>
    <p style="margin-top:10px;">Spend three extra seconds naming the process before touching any equation — it tells you which term in ΔU=Q+W is about to disappear.</p>
  </div>

  <h2 id="s91"><span class="num">9.1</span>Kinetic Theory of Temperature and Pressure</h2>
  <p>Let's start with the single idea this entire unit is built on, because if you actually get this one, half the unit stops feeling like memorization and starts feeling like common sense: a gas is just an enormous number of particles, flying around in random directions, constantly slamming into each other and into the walls of whatever container they're in. That's it. That's the whole picture. Temperature and pressure aren't two separate mysterious properties you need to keep track of — they're both just different ways of describing that same particle chaos.</p>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>This is the idea that unlocks the whole unit</div>
    <p>Temperature <strong>IS</strong> average kinetic energy. Not "related to it." Not "caused by it." It literally <strong>is</strong> it. So every time a problem changes the temperature, your first instinct should be to picture the particles physically speeding up or slowing down — not to reach for a formula. Get that reflex built in now, and an enormous number of questions in this unit basically answer themselves.</p>
  </div>

  <h3>Temperature is average kinetic energy</h3>
  <p>When you say a gas is "hot," what you actually mean — whether you realize it or not — is that its particles are moving fast, on average. That's what temperature measures.</p>
  <div class="eq">
    <div class="main">K<sub>avg</sub> = (3/2) k<sub>B</sub> T</div>
    <div class="sub">k<sub>B</sub> = 1.38 × 10⁻²³ J/K &nbsp;·&nbsp; T MUST be in kelvin</div>
  </div>
  <p>You need this one cold: <strong>T here has to be in kelvin, no exceptions.</strong> Not Celsius, not Fahrenheit — kelvin, every single time you touch this formula or anything derived from it. Here's why that's not just an arbitrary rule someone made up: kelvin is the one temperature scale that actually starts at zero particle motion. At 0 K, particles (in the idealized classical sense) stop moving entirely. Celsius' zero point, on the other hand, is just "where water happens to freeze" — a completely arbitrary reference that has nothing to do with what the particles are actually doing. Plug Celsius into an equation built around kinetic energy, and you're measuring particle motion using a ruler that doesn't start at zero motion. The math falls apart.</p>

  <h3>Pressure is collisions — nothing more mystical than that</h3>
  <p>Here's a question worth sitting with for a second: what IS pressure, physically? Not the formula — the actual phenomenon. It's the cumulative force of an absurd number of tiny particle collisions against a surface, spread out over that surface's area. More collisions per second, or harder collisions, means more pressure. Full stop. Once you internalize that, you can reason through pressure changes without memorizing anything:</p>
  <ul>
    <li>Squeeze the gas into a smaller volume (same number of particles, same speed) → particles hit the walls more often → <strong>pressure goes up</strong>.</li>
    <li>Heat the gas (same volume, same number of particles) → particles move faster and hit both harder and more often → <strong>pressure goes up</strong>.</li>
    <li>Add more particles (same volume, same temperature) → more collisions happening at any given moment → <strong>pressure goes up</strong>.</li>
  </ul>
  <p>You're going to see plenty of questions that ask you to reason through a pressure change qualitatively — no numbers, no equation, just "does it go up or down." Every single time, translate the question back into "what are the particles physically doing right now" before you try to answer. It's genuinely the fastest, most reliable way to get these right, faster than trying to remember a rule.</p>

  <h3>The Maxwell-Boltzmann distribution</h3>
  <p>Here's something worth knowing that trips a lot of students up: not every particle in a gas is moving at the same speed. There's a whole spread of speeds, described by a bell-shaped-ish curve called the Maxwell-Boltzmann distribution — number of particles per unit speed, plotted against speed. When you heat a gas, three things happen to that curve, and you should be able to sketch all three without hesitating:</p>
  <ul>
    <li>The peak of the curve shifts to the right — a higher average speed.</li>
    <li>The curve flattens out and spreads wider — a bigger range of speeds is now represented.</li>
    <li>The area under the curve stays exactly the same, because you haven't added or removed any particles.</li>
  </ul>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Students sometimes sketch a taller, narrower peak when a gas heats up, thinking "more energy means more concentrated." It's the opposite — heating <em>spreads</em> the distribution out, since a wider range of speeds becomes energetically accessible. A taller, narrower peak actually describes <em>cooling</em>, not heating.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 1</span>
    <p><strong>Reading a Maxwell-Boltzmann Sketch.</strong> A monatomic ideal gas in a sealed, rigid container is heated so its pressure triples (P → 3P) at constant volume. Sketch how the speed distribution changes.</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">Here's how I'd think through this one out loud. Constant volume and a fixed particle count mean the only thing actually changing is temperature. Since PV = NkT with V and N both locked in place, tripling P has to mean tripling T — there's no other way for the equation to balance. Because K<sub>avg</sub> ∝ T, tripling the temperature triples the average kinetic energy — which means average speed goes up too, though <strong>not</strong> by a factor of 3, since K depends on v² rather than v directly. So the new curve peaks at a higher speed, and it's shorter and wider than the original, with the same total area underneath. That last part — same area — is easy to forget under time pressure, but it's just conservation of particle count, and graders do look for it.</div>
    </details>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s92"><span class="num">9.2</span>The Ideal Gas Law</h2>
  <p>The ideal gas law is the workhorse of this entire unit — it ties pressure, volume, temperature, and particle count together into one equation, and you'll reach for it constantly.</p>
  <div class="eq">
    <div class="main">PV = nRT = Nk<sub>B</sub> T</div>
    <div class="sub">R = 8.31 J/(mol·K) &nbsp;·&nbsp; N = n·N₀ &nbsp;·&nbsp; N₀ = 6.02 × 10²³ /mol</div>
  </div>
  <p>Two versions of the exact same law — use n (moles) paired with R, or N (individual particles) paired with k<sub>B</sub>. They're connected by N = n·N₀. Whichever version matches the data you're actually given, use that one. Don't overthink which "flavor" to use.</p>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea</span>
    <p>Here's something that'll save you a lot of grief: the AP exam almost never asks you to just plug numbers into PV = nRT and solve for a single unknown. It's <strong>almost always</strong> comparing two states of the same gas. So instead of solving from scratch every time, write the law at both states and divide them — whatever's held constant just cancels out.</p>
  </div>

  <div class="eq">
    <div class="main">P₁V₁ / T₁ = P₂V₂ / T₂</div>
    <div class="sub">(when n is constant — cross out anything else that's fixed)</div>
  </div>

  <p>Constant volume → P and T move together, proportionally. Constant pressure → V and T move together. Constant temperature → P and V are inversely proportional (that's Boyle's Law, if you want the name). <span class="highlight">Correctly identifying what's held fixed is genuinely 80% of solving these problems</span> — the algebra afterward is almost always the easy part.</p>

  <div class="worked">
    <span class="tag-label example">Worked Example 2</span>
    <p><strong>Comparing States.</strong> A monatomic ideal gas in a sealed, rigid, thermally conducting container is heated from State X (pressure P, volume V) to State Y (pressure 3P). Derive an expression for ΔT.</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">Notice first that the container is rigid — that's your cue that volume is fixed, so P/T has to be constant: P/T<sub>X</sub> = 3P/T<sub>Y</sub>. From the initial state, T<sub>X</sub> = PV/(nR). Since pressure triples at that same fixed volume, T<sub>Y</sub> works out to 3T<sub>X</sub>. So ΔT = T<sub>Y</sub> − T<sub>X</sub> = 2T<sub>X</sub> = <strong>2PV/(nR)</strong>. The one move that unlocks the whole problem is recognizing that tripling pressure at constant volume triples temperature — everything else is just bookkeeping after that.</div>
    </details>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s93"><span class="num">9.3</span>Thermal Energy Transfer and Equilibrium</h2>
  <p>Put two objects at different temperatures in contact with each other, and here's what always happens: they exchange energy until they land on the same temperature — that end state is called thermal equilibrium. Energy transferred purely because of a temperature difference has a name, too: heat, symbol Q.</p>

  <h3>Conduction: the rate of heat transfer</h3>
  <div class="eq"><div class="main">Q/Δt = kAΔT / L</div><div class="sub">k = thermal conductivity · A = area · L = thickness</div></div>
  <p>Notice this is a <strong>rate</strong> equation — it tells you energy per second, not total energy transferred. A thicker material, or a less conductive one, moves heat more slowly. Makes intuitive sense: more material for the heat to fight through means it gets through more slowly.</p>

  <h3>Calorimetry and specific heat</h3>
  <p>Specific heat capacity, c, tells you how much energy it takes to raise a given mass of some substance by one degree. It's a property of the material itself. Water, notably, has a really high specific heat — which is exactly why it resists changing temperature and gets used constantly as an insulator or a temperature-moderating liquid in real experiments.</p>
  <div class="eq"><div class="main">Q = mcΔT</div></div>
  <p>When you combine two objects at different starting temperatures inside an insulated system, energy lost by the hotter one has to equal energy gained by the colder one — that's just conservation of energy, nothing sneaky about it:</p>
  <div class="eq"><div class="main">m<sub>hot</sub>·c<sub>hot</sub>·|ΔT<sub>hot</sub>| = m<sub>cold</sub>·c<sub>cold</sub>·|ΔT<sub>cold</sub>|</div></div>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Here's a mistake I see constantly: assuming the two objects end up experiencing the SAME temperature change. They don't — unless mc happens to be equal for both, which is rare. What's actually equal is the energy Q, not the temperature change. If one object has a smaller mc than the other, it's going to swing through a bigger |ΔT| to make up the difference. Keep that distinction sharp: <strong>same energy exchanged, different temperature swings.</strong></p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 3</span>
    <p><strong>Thermal Conductivity from Data.</strong> A liquid-filled container wrapped in a known-thickness, known-area material sits inside a heated gas chamber. Given a table of gas temp, liquid temp, and Q/Δt, find the wrap's thermal conductivity k graphically.</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">The move here is recognizing that Q/Δt = kAΔT/L is secretly a straight-line equation if you plot the right two things. Rearrange it: plot Q/Δt (vertical) against ΔT = T<sub>gas</sub> − T<sub>liquid</sub> (horizontal). It's linear, passes right through the origin, and its slope equals kA/L. Read the slope off your best-fit line, then solve k = slope × L/A. This "which variables make a straight line" instinct shows up constantly across nearly every unit's experimental-design FRQs — worth internalizing here, since you'll lean on it again and again.</div>
    </details>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 4</span>
    <p><strong>Mixed Calorimetry.</strong> A 200 g block of aluminum (c = 0.90 J/(g·°C)) at 90°C drops into 150 g of water (c = 4.18 J/(g·°C)) at 20°C, insulated. Find the equilibrium temperature.</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">200(0.90)(90 − T<sub>f</sub>) = 150(4.18)(T<sub>f</sub> − 20) → 180(90 − T<sub>f</sub>) = 627(T<sub>f</sub> − 20) → 16200 − 180T<sub>f</sub> = 627T<sub>f</sub> − 12540 → 28740 = 807T<sub>f</sub> → <strong>T<sub>f</sub> ≈ 35.6°C</strong>. Take a second to notice WHERE that final temperature landed — much closer to water's starting point than aluminum's. That's not a coincidence. Water's huge mc value means it barely budges compared to aluminum, which happily swings through a big temperature change for the same amount of energy. This is exactly the "same energy, different swings" idea from the trap box above, showing up in real numbers.</div>
    </details>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s94"><span class="num">9.4</span>The First Law of Thermodynamics</h2>
  <p>Here's the thing about the first law that a lot of students miss: it's not really a "thermodynamics formula" you need to memorize as its own separate fact. It's just conservation of energy, applied to a gas. That's genuinely the whole idea.</p>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>Don't skim past this one</div>
    <p>ΔU = Q + W is not a formula to memorize — it's "energy in equals energy out," with careful bookkeeping about which direction each term flows. If a gas's internal energy changes, it can ONLY be because heat moved in or out, or work was done on or by the gas. There is no third option, no hidden term, nothing else it could be. Once that clicks, every sign-convention headache in this section gets a lot less scary.</p>
  </div>

  <div class="eq"><div class="main">ΔU = Q + W</div></div>
  <p>Sign conventions matter enormously here, and the AP reference sheet is explicit about its convention: W is defined as work done <strong>ON</strong> the system. So:</p>
  <ul>
    <li>Q is positive when heat flows INTO the gas; negative when heat flows out.</li>
    <li>W is positive when work is done ON the gas (something compresses it); negative when the gas does work on its surroundings (it expands).</li>
    <li>For a gas expanding at constant pressure, W = −PΔV — notice the negative sign. That's consistent with expansion meaning the gas is doing work on the outside world, which reads as negative work done ON the gas.</li>
  </ul>

  <h3>Internal energy depends only on temperature (for an ideal gas)</h3>
  <p>This is a genuinely powerful shortcut, and it's worth memorizing on its own: for an ideal gas, internal energy U depends <em>only</em> on temperature — not pressure, not volume, individually. For a monatomic ideal gas specifically:</p>
  <div class="eq"><div class="main">U = (3/2) n R T = (3/2) N k<sub>B</sub> T</div></div>
  <p>Here's why that matters so much in practice: if you know a gas went through a process where temperature didn't change (isothermal), you already know ΔU = 0 — no calculation required, no matter how complicated the rest of the process looks. This shortcut shows up constantly in FRQs asking you to compare or rank ΔU across different processes, and it'll save you real time if you have it ready to go.</p>

  <h3>The four classic processes</h3>
  <table class="formula-table">
    <tr><th>Process</th><th>What's held constant</th><th>Key relationship</th><th>Work (W on gas)</th></tr>
    <tr><td>Isobaric</td><td>Pressure</td><td>V/T constant ratio</td><td>W = −PΔV (nonzero)</td></tr>
    <tr><td>Isochoric</td><td>Volume</td><td>P/T constant ratio</td><td>W = 0</td></tr>
    <tr><td>Isothermal</td><td>Temperature</td><td>PV constant</td><td>ΔU = 0, so W = −Q</td></tr>
    <tr><td>Adiabatic</td><td>Heat transfer (Q = 0)</td><td>No exchange with surroundings</td><td>ΔU = W</td></tr>
  </table>
  <p>You'll be asked to sketch these on a P-V diagram often enough that it's worth having the shapes memorized cold: isobaric is a horizontal line, isochoric is a vertical line, isothermal is a curve (hyperbola-shaped, following PV = constant), and adiabatic is a similar-looking curve but noticeably steeper at any given point.</p>

  <div class="divider">· · ·</div>

  <h2 id="s95"><span class="num">9.5</span>Specific Heat and Thermal Conductivity</h2>
  <p>This section builds directly on 9.3, but it's worth its own space because "design an experiment" questions have a very specific, learnable shape on this exam — once you've internalized the pattern, this becomes some of the easiest FRQ credit available.</p>

  <h3>Designing a specific heat experiment</h3>
  <p>You'll see some version of this constantly: "design an experiment to determine the specific heat of an unknown material." Here's the reliable structure that works basically every time:</p>
  <ul>
    <li>Measure the mass of the unknown sample on a scale.</li>
    <li>Heat it to a known starting temperature (a boiling water bath is the classic move) and record that temperature.</li>
    <li>Transfer it quickly into a known mass of water at a known, lower starting temperature, inside an insulated calorimeter.</li>
    <li>Measure the equilibrium temperature the water and sample settle to.</li>
    <li>Apply conservation of energy — heat lost by the sample equals heat gained by the water — and solve for c<sub>sample</sub>.</li>
  </ul>
  <p>Here's what I'd want you to really absorb: every single experimental-design FRQ in this course rewards the exact same instinct. Name the actual equipment you'd use. Describe specifically what you measure and exactly when. Explain how you'd cut down on uncertainty — multiple trials, a thermometer with fine graduations, minimizing transfer time to reduce heat loss to the air, good insulation. Graders are looking for that level of concrete specificity, not vague gestures at "doing the experiment carefully."</p>

  <div class="divider">· · ·</div>

  <h2 id="s96"><span class="num">9.6</span>Entropy and the Second Law of Thermodynamics</h2>
  <p>The Second Law of Thermodynamics says the total entropy of an isolated system never decreases over time — left alone, things drift toward disorder, never away from it. Entropy, informally, measures the number of ways a system's particles could be arranged while still looking the same from the outside. More possible arrangements means more entropy.</p>

  <h3>What increases entropy</h3>
  <ul>
    <li>Heat flowing from something hot to something cold (and never spontaneously the other way — you've never seen a cold drink spontaneously get colder while warming the room around it, and there's a real physical reason for that).</li>
    <li>A gas expanding into a larger volume (more possible positions for the particles to occupy).</li>
    <li>Mixing of substances that used to be kept separate.</li>
  </ul>
  <p>On the exam, entropy questions in Physics 2 are almost always conceptual rather than numerical. You'll be asked to explain, in words, why a process is or isn't consistent with the second law, or to compare entropy changes between two scenarios qualitatively. The reasoning almost always comes back to some version of the same idea: heat moving from hot to cold increases entropy; the reverse would need external energy input and simply doesn't happen on its own.</p>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Explain what temperature and pressure actually mean at the particle level — not just the formulas, the physical picture.</li>
      <li>Use PV = nRT to compare two states of a gas, correctly identifying what's held constant every time.</li>
      <li>Set up a calorimetry problem (heat lost = heat gained) and solve for an unknown mass, specific heat, or temperature.</li>
      <li>Apply ΔU = Q + W with correct sign conventions, and know the W = 0 and ΔU = 0 shortcuts without having to derive them each time.</li>
      <li>Sketch and interpret P-V diagrams for all four classic processes.</li>
      <li>Explain a change in entropy conceptually, without needing a calculation.</li>
    </ul>
  </div>

  <h2 id="practice"><span class="num">📘</span>Unit 9 Practice Set</h2>
  <p>Work through every problem before you check the answer key — for the FRQ-style ones especially, write out the physical principle you're starting from before you touch any numbers, exactly like the real exam expects.</p>

  <h3>Conceptual</h3>
  <div class="practice-item"><span class="qnum-badge">1</span><span>A sealed, rigid container of ideal gas is cooled. Sketch how its Maxwell-Boltzmann speed distribution changes, and explain your reasoning in one sentence.</span></div>
  <div class="practice-item"><span class="qnum-badge">2</span><span>Gas A and Gas B are at the same temperature. Gas A's molecules have twice the mass of Gas B's molecules. Compare the average kinetic energies and average speeds of the two gases.</span></div>
  <div class="practice-item"><span class="qnum-badge">3</span><span>A gas expands isothermally, absorbing heat Q from its surroundings. State whether ΔU, Q, and W (on the gas) are each positive, negative, or zero.</span></div>
  <div class="practice-item"><span class="qnum-badge">4</span><span>Explain, using the second law of thermodynamics, why a spilled cup of hot coffee never spontaneously re-collects the heat it lost to the room and returns to its original temperature.</span></div>
  <div class="practice-item"><span class="qnum-badge">5</span><span>Two blocks of the same material but different mass are heated with the same quantity of energy Q. Which block experiences the larger temperature change, and why?</span></div>

  <h3>Numerical</h3>
  <div class="practice-item"><span class="qnum-badge">6</span><span>A sample of gas occupies 2.0 L at a pressure of 1.5 atm and temperature of 300 K. It is compressed at constant temperature to 0.50 L. Find the new pressure.</span></div>
  <div class="practice-item"><span class="qnum-badge">7</span><span>A monatomic ideal gas sample contains 2.5 mol at 400 K. Find its internal energy.</span></div>
  <div class="practice-item"><span class="qnum-badge">8</span><span>A gas is held at constant volume while 500 J of heat is added to it. Find ΔU and the work done on the gas.</span></div>
  <div class="practice-item"><span class="qnum-badge">9</span><span>A gas expands at a constant pressure of 2.0 × 10⁵ Pa, and its volume increases from 0.010 m³ to 0.025 m³. Find the work done ON the gas.</span></div>
  <div class="practice-item"><span class="qnum-badge">10</span><span>A slab of insulation 0.02 m thick and 1.2 m² in area has a thermal conductivity of 0.040 W/(m·K). If one side is at 22°C and the other at 5°C, find the rate of heat conduction through the slab.</span></div>
  <div class="practice-item"><span class="qnum-badge">11</span><span>A 0.30 kg block of copper (c = 0.385 J/(g·°C) — convert units carefully) at 95°C is placed in 0.50 kg of water at 15°C in an insulated container. Find the equilibrium temperature.</span></div>
  <div class="practice-item"><span class="qnum-badge">12</span><span>A rigid container holds gas at pressure P and temperature T. The gas is heated at constant volume until its pressure is 2.5P. Find the new temperature in terms of T.</span></div>
  <div class="practice-item"><span class="qnum-badge">13</span><span>3.0 mol of a monatomic ideal gas undergoes an isobaric process, absorbing 6000 J of heat while its temperature rises by 160 K. Find the work done on the gas during this process. (Hint: find ΔU first using the temperature change, then use the first law to isolate W.)</span></div>

  <h3 style="margin-top:30px;">Answer Key</h3>
  <div class="answer-key">
    <details><summary>Question 1</summary><div class="a-content">The distribution shifts left (toward lower speeds) and grows taller/narrower, since cooling lowers average kinetic energy while the total particle count (area under curve) stays fixed.</div></details>
    <details><summary>Question 2</summary><div class="a-content">Average kinetic energy is the same for both gases, since K<sub>avg</sub> depends only on temperature (K<sub>avg</sub> = (3/2)k<sub>BT</sub>), not on particle mass. Average speed is different: since K = ½mv², the lighter gas (B) must have a higher average speed to have the same kinetic energy as the heavier gas (A).</div></details>
    <details><summary>Question 3</summary><div class="a-content">ΔU = 0 (isothermal means no temperature change, and internal energy of an ideal gas depends only on temperature). Q is positive (heat absorbed). Since ΔU = Q + W, and ΔU = 0, W (on the gas) = −Q, which is negative — the gas does positive work on its surroundings as it expands.</div></details>
    <details><summary>Question 4</summary><div class="a-content">Heat flowing spontaneously from hot to cold increases the total entropy of the coffee-plus-room system. The reverse process (heat spontaneously flowing from the now-cooler room back into the coffee) would decrease total entropy, which the second law forbids for an isolated system — so it doesn't happen without external work being done (like a refrigerator).</div></details>
    <details><summary>Question 5</summary><div class="a-content">From ΔT = Q/(mc), the block with the smaller mass has a smaller denominator (for the same c), so it experiences a larger temperature change for the same energy input.</div></details>
    <details><summary>Question 6</summary><div class="a-content">Using P₁V₁ = P₂V₂ (Boyle's Law, constant T): (1.5 atm)(2.0 L) = P₂(0.50 L), so P₂ = 6.0 atm.</div></details>
    <details><summary>Question 7</summary><div class="a-content">U = (3/2)nRT = (3/2)(2.5 mol)(8.31 J/(mol·K))(400 K) ≈ 12,500 J.</div></details>
    <details><summary>Question 8</summary><div class="a-content">Constant volume means W = 0. From the first law, ΔU = Q + W = 500 J + 0 = 500 J.</div></details>
    <details><summary>Question 9</summary><div class="a-content">W (on the gas) = −PΔV = −(2.0 × 10⁵ Pa)(0.025 − 0.010 m³) = −(2.0 × 10⁵)(0.015) = −3000 J. The negative sign indicates the gas does 3000 J of work on its surroundings as it expands.</div></details>
    <details><summary>Question 10</summary><div class="a-content">Q/Δt = kAΔT/L = (0.040)(1.2)(22 − 5) / 0.020 = (0.040)(1.2)(17)/0.020 ≈ 40.8 W.</div></details>
    <details><summary>Question 11</summary><div class="a-content">Convert copper's specific heat to J/(kg·°C): 0.385 J/(g·°C) = 385 J/(kg·°C). Set heat lost equal to heat gained: (0.30)(385)(95 − T<sub>f</sub>) = (0.50)(4180)(T<sub>f</sub> − 15). This gives 115.5(95 − T<sub>f</sub>) = 2090(T<sub>f</sub> − 15). Expanding: 10972.5 − 115.5T<sub>f</sub> = 2090T<sub>f</sub> − 31350, so 42322.5 = 2205.5T<sub>f</sub>, giving T<sub>f</sub> ≈ 19.2°C.</div></details>
    <details><summary>Question 12</summary><div class="a-content">At constant volume, P/T is constant, so P/T = 2.5P/T<sub>new</sub>, giving T<sub>new</sub> = 2.5T.</div></details>
    <details><summary>Question 13</summary><div class="a-content">First find ΔU using the temperature change: ΔU = (3/2)nRΔT = (3/2)(3.0)(8.31)(160) ≈ 5983 J. From the first law, ΔU = Q + W, so W = ΔU − Q = 5983 − 6000 ≈ −17 J. The work on the gas is very slightly negative (the gas does a small amount of positive work on its surroundings), consistent with an isobaric expansion — almost all of the added heat went into raising internal energy, with only a small amount going to expansion work.</div></details>
  </div>

  <div class="footer-nav">
    Next up: head to the <strong>Unit 9 QBank</strong> to drill these concepts with practice questions, then move on to <strong>Unit 10 — Electric Force, Field, and Potential</strong>.
  </div>

</div>
`,
  10: `<div class="hero">
  <div class="eyebrow">Peters Family Homeschool · AP Physics 2</div>
  <h1>Electric Force, Field &amp; Potential</h1>
  <p class="sub">Electric force, field, and potential — the biggest conceptual shift from Physics 1, since charge comes in two signs and changes almost every intuition you built for gravity.</p>
  <div class="hero-pills">
    <span class="pill">Exam weight 15–18%</span>
    <span class="pill">7 topics</span>
    <span class="pill">14 practice problems</span>
  </div>
</div>

<div class="toc">
  <div class="toc-label">Jump to a section</div>
  <ol>
    <li><a href="#s101">10.1 Coulomb's Law</a></li>
    <li><a href="#s102">10.2 Charging</a></li>
    <li><a href="#s103">10.3 Electric Fields</a></li>
    <li><a href="#s104">10.4 Potential Energy</a></li>
    <li><a href="#s105">10.5 Electric Potential</a></li>
    <li><a href="#s106">10.6 Capacitors</a></li>
    <li><a href="#s107">10.7 Conservation</a></li>
    <li><a href="#practice">Practice Set</a></li>
  </ol>
</div>

<div class="wrap">

  <p class="quote">"Force, field, and potential — vector, vector, scalar. Keep them straight and this whole unit clicks." — Unit 10</p>

  <div class="skillbox">
    <span class="tag-label skill">Master This First — Vector, Vector, Scalar</span>
    <p>Every mistake in this unit traces back to blurring these three together:</p>
    <ul style="margin:10px 0 0;">
      <li><strong>Force</strong> (F) — a vector. Depends on the charge actually feeling it.</li>
      <li><strong>Field</strong> (E) — a vector. A property of space, independent of any test charge. Add multiple sources as VECTORS.</li>
      <li><strong>Potential</strong> (V) — a scalar. No direction at all. Add multiple sources by simple algebraic addition, sign included — never components, never cancellation by geometry.</li>
    </ul>
    <p style="margin-top:10px;">Before adding anything from multiple charges, ask yourself which of these three you're actually computing — the answer changes whether you need angles at all.</p>
  </div>

  <h2 id="s101"><span class="num">10.1</span>Coulomb's Law</h2>
  <p>Here's a genuinely useful way to think about this whole unit before we even start: everything you're about to learn is essentially "gravity, but with a twist." You already know the shape of this from Physics 1 — an inverse-square force between two things at a distance. The twist is that charge, unlike mass, comes in two flavors. That single fact — the existence of both positive and negative charge — is what makes this unit feel harder than gravitation, even though the math looks almost identical.</p>
  <div class="eq">
    <div class="main">|F<sub>E</sub>| = (1/4πε₀) · |q₁q₂| / r²</div>
    <div class="sub">k = 1/(4πε₀) = 9.0 × 10⁹ N·m²/C²</div>
  </div>
  <p>Like charges repel, opposite charges attract — you know this already, probably from static shocks and balloons stuck to walls. The equation itself only spits out a magnitude, though. Direction always has to come from your own reasoning about the signs, then drawing the force vector along the line connecting the two charges.</p>
  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Here's one that catches people constantly: a bigger charge does NOT feel a bigger force from a smaller charge sitting next to it. This one trips people up because it feels wrong at first — surely the "stronger" charge exerts more force? But Newton's third law doesn't care about charge magnitude. The force each charge exerts on the other is always exactly equal and opposite, whether you're comparing a −10 μC charge to a −20 μC charge or a −10 μC charge to a −10,000 μC charge. Don't confuse "produces a stronger field around itself" with "feels a stronger force" — those are two completely different questions.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 1</span>
    <p><strong>Combined Scaling.</strong> Two charges +Q each feel a force F at separation r. Each charge is doubled to +2Q and the separation is also doubled to 2r. Find the new force in terms of F.</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">Let's walk through this carefully, because it's a great example of a problem designed to punish anyone who only tracks one variable at a time. New force = k(2Q)(2Q)/(2r)² = k(4Q²)/(4r²) = kQ²/r² = <strong>F</strong>, unchanged. Here's what's actually going on: the charge product quadruples (2×2), but r² also quadruples (2² in the denominator) — those two 4s cancel each other out exactly. The lesson to take away isn't really about this specific problem; it's the habit of tracking EVERY variable that's changing simultaneously, not just the one that catches your eye first.</div>
    </details>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s102"><span class="num">10.2</span>The Process of Charging</h2>
  <p>Objects become charged three distinct ways, and here's the thing — the AP exam expects you to tell these apart with real precision, not just a fuzzy sense of "something to do with electrons moving around."</p>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>Memorize this contrast, not each rule separately</div>
    <p>Conduction (touching) always leaves the SAME sign as the charging object. Induction (never touching) always leaves the OPPOSITE sign. If you remember just that one contrast — touch equals same, no-touch equals opposite — you can rebuild every specific rule about charging from scratch, even under exam pressure when your memory of the details gets shaky.</p>
  </div>

  <h3>Friction</h3>
  <p>Rubbing two different materials transfers electrons from one to the other. One object ends up with a surplus of electrons (negative), the other with a deficit (positive). Total charge is conserved across the whole system — nothing is created or destroyed, just moved.</p>
  <h3>Conduction (contact)</h3>
  <p>Touch a charged object to a neutral conductor, and charge flows between them until both reach the same potential. Both end up charged with the <strong>same sign</strong> as the original.</p>
  <h3>Induction</h3>
  <p>This one takes a bit more visualizing. A charged rod is brought near — never touching — a neutral conductor. The rod's field pushes the conductor's free charges around inside it (this is called polarization) without ever transferring any charge directly. Now, while the rod is still nearby, ground the conductor: charge of the same sign as the rod escapes through that ground wire, repelled away by the rod. Disconnect the ground first, THEN remove the rod, and the conductor is left with a charge <strong>opposite</strong> to the rod.</p>

  <div class="divider">· · ·</div>

  <h2 id="s103"><span class="num">10.3</span>Electric Fields</h2>
  <p>The electric field at a point is defined as the force per unit charge that a small positive "test charge" would feel if you placed it there. Here's the subtle but important part: fields exist whether or not a charge actually happens to be present to feel them. The field is a property of the space itself, set up by whatever charges are already there — you're just checking what force a hypothetical test charge would experience.</p>
  <div class="eq">
    <div class="main">E = F<sub>E</sub> / q &nbsp;·&nbsp; |E| = (1/4πε₀) · |q| / r²</div>
  </div>
  <p>Field vectors point away from positive charges and toward negative charges — literally the direction a positive test charge would get pushed if you dropped it there. When you're dealing with multiple charges, you add the individual field <strong>vectors</strong> together (this is called superposition) — never the forces directly, and never treat this like a scalar sum.</p>

  <h3>Field lines: learning to read the picture</h3>
  <ul>
    <li>Lines point in the direction of E at every single point along them.</li>
    <li>Denser lines mean a stronger field — but keep in mind the falloff is inverse-square, not a simple linear taper.</li>
    <li>Lines never cross each other. Ever. If a sketch shows crossing lines, something's wrong with it.</li>
    <li>Lines start on positive charges and end on negative charges.</li>
  </ul>

  <h3>Special case worth knowing cold: the parallel plate capacitor</h3>
  <p>Between two oppositely charged parallel plates, ignoring edge effects (per the AP reference sheet's own assumption), the field is uniform everywhere between the plates — same magnitude, same direction, no matter where you are between them.</p>
  <div class="eq"><div class="main">E = Q / (ε₀A)</div></div>

  <div class="worked">
    <span class="tag-label example">Worked Example 2</span>
    <p><strong>Opposite Charges at a Midpoint.</strong> Charges +Q and −Q sit at opposite ends of a rod of length L. Find the field at the midpoint, in terms of k, Q, L.</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">Each charge sits L/2 from the midpoint, contributing k·Q/(L/2)² = 4kQ/L² individually. Here's the part that catches people off guard: unlike two LIKE charges (whose fields can partially cancel between them), opposite charges' fields point the <strong>same direction</strong> at the midpoint — straight from + toward −. So instead of subtracting, you add them: total = 2 × 4kQ/L² = <strong>8kQ/L²</strong>. If you're used to thinking "fields between two charges cancel," pause and ask yourself: same sign, or opposite? The answer completely flips your approach.</div>
    </details>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s104"><span class="num">10.4</span>Electric Potential Energy</h2>
  <p>Electric potential energy U is the energy stored in a system based on how its charges are arranged relative to each other — the direct electric analog of gravitational PE, and honestly, the intuition carries over almost perfectly. Moving a positive charge closer to another positive charge increases U, because you're working against repulsion the whole way, just like lifting a mass against gravity. Moving it closer to a negative charge decreases U, the same way a mass falling toward Earth loses gravitational PE.</p>
  <div class="eq">
    <div class="main">ΔU<sub>E</sub> = qΔV &nbsp;·&nbsp; U = (1/4πε₀) · (q₁q₂/r)</div>
  </div>
  <p>Here's a shortcut worth internalizing: a charge released from rest always moves in whichever direction decreases the system's PE — exactly like a ball rolling downhill. That lets you answer a lot of "which way does it move" questions instantly, without grinding through a force calculation.</p>

  <div class="divider">· · ·</div>

  <h2 id="s105"><span class="num">10.5</span>Electric Potential</h2>
  <p>Electric potential V is potential energy per unit charge — a <strong>scalar</strong>, with no direction whatsoever. It has the same relationship to field that PE-per-charge has to force.</p>
  <div class="eq"><div class="main">V = (1/4πε₀) · q/r &nbsp;·&nbsp; |E| = |ΔV/Δr|</div></div>
  <p>Because V is a scalar, potentials from multiple charges just add algebraically — signs included, no vector components required anywhere. This is genuinely one of the most useful facts in the whole unit, because it makes multi-charge potential problems dramatically simpler than the equivalent field problems. It's also a favorite thing for the AP exam to specifically test, precisely because it's so easy to forget under pressure.</p>

  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>A really common wrong-answer pattern: treating multiple potentials as if they need vector addition, or somehow thinking two negative potentials "multiply" into a positive result. Neither is true. A −10 μC and −20 μC charge at equal distances from a point don't cancel, and they definitely don't multiply — they add as negative numbers, giving an even more negative total. Potential is just arithmetic with signs, nothing fancier.</p>
  </div>

  <p>One more picture worth locking in: equipotential lines are always <strong>perpendicular</strong> to field lines, at every single point where they cross. This shows up constantly in sketching questions, so it's worth having as an instant, automatic fact rather than something you re-derive each time. Moving along an equipotential line takes zero work, since ΔV = 0 along it by definition.</p>

  <div class="divider">· · ·</div>

  <h2 id="s106"><span class="num">10.6</span>Capacitors</h2>
  <p>A capacitor stores charge — and therefore energy — by separating positive and negative charge onto two conductive surfaces. Capacitance C measures how much charge gets stored per volt applied. It's worth noting this is a property of the capacitor's own geometry, not of how much charge happens to be sitting on it at any given moment — a capacitor has the same C whether it's fully charged, half charged, or empty.</p>
  <div class="eq"><div class="main">C = Q/ΔV &nbsp;·&nbsp; C = κε₀A/d &nbsp;·&nbsp; U<sub>C</sub> = ½QΔV = ½C(ΔV)²</div></div>
  <p>Larger plate area or smaller separation both increase capacitance — more room to store charge, or less distance for the field to have to fight across. Inserting a dielectric (a material with κ > 1) increases capacitance further, because the dielectric partially cancels the field between the plates, which lets more charge pile up for the same voltage.</p>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea</span>
    <p>Whether charge or voltage ends up being what changes always comes down to one question: is the battery still connected? Battery connected → voltage is forced to stay fixed, so charge is what has to respond to whatever else changes. Battery disconnected → charge is physically trapped with nowhere to go, so voltage is what responds instead. Check this first, every single time, before you reason about anything else in a capacitor problem — it determines which variable you're even allowed to treat as constant.</p>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s107"><span class="num">10.7</span>Conservation of Electric Energy</h2>
  <p>This section is where everything you've learned so far gets tied together with plain old energy conservation. A charged particle moving through a region with only electric forces acting on it obeys the work-energy theorem directly, expressed in terms of potential difference.</p>
  <div class="eq"><div class="main">W<sub>electric</sub> = −ΔU<sub>E</sub> = −qΔV = ΔK</div></div>
  <p>This is your go-to equation for anything that looks like a particle accelerator problem — a charged particle starts at rest (or with some given speed) and moves through a known potential difference. You can find its final kinetic energy or speed directly from qΔV, without ever needing to compute the field or force explicitly along the way. It's a genuine shortcut, and a very testable one.</p>

  <div class="worked">
    <span class="tag-label example">Worked Example 3</span>
    <p><strong>Accelerating a Proton.</strong> A proton (mass 1.67 × 10⁻²⁷ kg) starts at rest and accelerates through a potential difference of 1000 V. Find its final speed.</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">K = qΔV = (1.6×10⁻¹⁹)(1000) = 1.6×10⁻¹⁶ J. Then v = √(2K/m) = √[(2)(1.6×10⁻¹⁶)/(1.67×10⁻²⁷)] ≈ <strong>4.4 × 10⁵ m/s</strong>. Here's what I want you to notice: the field's exact shape, and the specific path the proton took, never entered the calculation at all — only the potential difference between the start and end points mattered. That's the whole point of working in terms of potential instead of force: it collapses a potentially messy path into one clean number.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Keep force, field, and potential straight — vector, vector, scalar.</li>
      <li>Correctly distinguish friction, conduction, and induction, including predicting induction's final sign.</li>
      <li>Add potentials algebraically (scalar) vs. adding fields as vectors — know which applies when.</li>
      <li>Sketch field lines and equipotentials together, remembering they're always perpendicular.</li>
      <li>Use W = −qΔV = ΔK to solve particle-through-a-potential-difference problems.</li>
      <li>Compute capacitance, charge, and stored energy — and know whether the battery stays connected.</li>
    </ul>
  </div>

  <h2 id="practice"><span class="num">📘</span>Unit 10 Practice Set</h2>
  <p>Work every problem before checking the answer — write out the physical principle you're starting from, exactly as the real AP exam requires.</p>

  <h3>Conceptual</h3>
  <div class="practice-item"><span class="qnum-badge">1</span><span>A negatively charged rod is brought near (never touching) a neutral conducting sphere, the sphere is briefly grounded while the rod stays in place, then the ground is removed, then the rod is removed. What is the sphere's final charge?</span></div>
  <div class="practice-item"><span class="qnum-badge">2</span><span>At a certain point, the electric field due to a system of charges is exactly zero. Must the electric potential also be zero there? Explain.</span></div>
  <div class="practice-item"><span class="qnum-badge">3</span><span>Two charges of −6 μC each sit at equal distances from Point P, on opposite sides. Find the electric potential at P.</span></div>
  <div class="practice-item"><span class="qnum-badge">4</span><span>A parallel plate capacitor stays connected to a battery holding voltage constant. A dielectric is inserted. Does the stored charge increase, decrease, or stay the same? Why?</span></div>
  <div class="practice-item"><span class="qnum-badge">5</span><span>A positive charge is released from rest near a fixed positive charge. Describe how its kinetic energy and the system's potential energy change as it moves away.</span></div>

  <h3>Numerical</h3>
  <div class="practice-item"><span class="qnum-badge">6</span><span>Find the force between a +4.0 μC charge and a +6.0 μC charge separated by 0.50 m.</span></div>
  <div class="practice-item"><span class="qnum-badge">7</span><span>Find the electric field 0.40 m from a point charge of +5.0 μC.</span></div>
  <div class="practice-item"><span class="qnum-badge">8</span><span>Find the electric potential 0.30 m from a point charge of −8.0 μC.</span></div>
  <div class="practice-item"><span class="qnum-badge">9</span><span>A 3.0 μF capacitor is charged to 15 V. Find the charge stored and the energy stored.</span></div>
  <div class="practice-item"><span class="qnum-badge">10</span><span>Parallel plates 0.010 m apart have a potential difference of 200 V. Find the field between them.</span></div>
  <div class="practice-item"><span class="qnum-badge">11</span><span>An electron accelerates from rest through a potential difference of 800 V. Find its final kinetic energy.</span></div>
  <div class="practice-item"><span class="qnum-badge">12</span><span>Two point charges, +2.0 μC and −3.0 μC, are separated by 0.25 m. Find their electric potential energy.</span></div>
  <div class="practice-item"><span class="qnum-badge">13</span><span>A capacitor with vacuum between its plates has capacitance 1.5 μF. A dielectric with κ = 4.0 is inserted, filling the gap. Find the new capacitance.</span></div>
  <div class="practice-item"><span class="qnum-badge">14</span><span>Find the speed of an electron (mass 9.11×10⁻³¹ kg) after being accelerated from rest through 400 V.</span></div>

  <h3 style="margin-top:30px;">Answer Key</h3>
  <div class="answer-key">
    <details><summary>Question 1</summary><div class="a-content">Positive — opposite in sign to the rod. This is the defining feature of induction: never touching, and always leaving the opposite sign.</div></details>
    <details><summary>Question 2</summary><div class="a-content">No. Field and potential are independent conditions — field is the rate of change of potential, not potential itself. A flat "plateau" in potential gives zero field but a nonzero potential value.</div></details>
    <details><summary>Question 3</summary><div class="a-content">Negative — potential adds as a scalar, so two equal negative contributions simply add together (they don't cancel, since both are the same sign).</div></details>
    <details><summary>Question 4</summary><div class="a-content">Increases. Capacitance rises (C = κε₀A/d, κ > 1), and since Q = CΔV with ΔV held fixed by the battery, Q must rise to match.</div></details>
    <details><summary>Question 5</summary><div class="a-content">Kinetic energy increases; potential energy decreases by the same amount — the repulsive force converts stored PE into motion, conserving total mechanical energy.</div></details>
    <details><summary>Question 6</summary><div class="a-content">F = k|q₁q₂|/r² = (9.0×10⁹)(4.0×10⁻⁶)(6.0×10⁻⁶)/(0.50)² ≈ <strong>0.86 N</strong>.</div></details>
    <details><summary>Question 7</summary><div class="a-content">E = kq/r² = (9.0×10⁹)(5.0×10⁻⁶)/(0.40)² ≈ <strong>2.8 × 10⁵ N/C</strong>.</div></details>
    <details><summary>Question 8</summary><div class="a-content">V = kq/r = (9.0×10⁹)(−8.0×10⁻⁶)/0.30 ≈ <strong>−2.4 × 10⁵ V</strong>.</div></details>
    <details><summary>Question 9</summary><div class="a-content">Q = CΔV = (3.0×10⁻⁶)(15) = <strong>45 μC</strong>. U = ½CΔV² = 0.5(3.0×10⁻⁶)(225) ≈ <strong>3.4 × 10⁻⁴ J</strong>.</div></details>
    <details><summary>Question 10</summary><div class="a-content">E = ΔV/d = 200/0.010 = <strong>2.0 × 10⁴ V/m</strong>.</div></details>
    <details><summary>Question 11</summary><div class="a-content">K = |q|ΔV = (1.6×10⁻¹⁹)(800) = <strong>1.28 × 10⁻¹⁶ J</strong>.</div></details>
    <details><summary>Question 12</summary><div class="a-content">U = kq₁q₂/r = (9.0×10⁹)(2.0×10⁻⁶)(−3.0×10⁻⁶)/0.25 ≈ <strong>−0.216 J</strong>.</div></details>
    <details><summary>Question 13</summary><div class="a-content">C<sub>new</sub> = κC₀ = (4.0)(1.5 μF) = <strong>6.0 μF</strong>.</div></details>
    <details><summary>Question 14</summary><div class="a-content">K = qΔV = (1.6×10⁻¹⁹)(400) = 6.4×10⁻¹⁷ J. v = √(2K/m) = √[(2)(6.4×10⁻¹⁷)/(9.11×10⁻³¹)] ≈ <strong>1.2 × 10⁷ m/s</strong>.</div></details>
  </div>

  <div class="footer-nav">
    Next up: head to the <strong>Unit 10 QBank</strong> to drill these ideas, then continue to <strong>Unit 11 — Electric Circuits</strong>.
  </div>

</div>
`,
  11: `<div class="hero">
  <div class="eyebrow">Peters Family Homeschool · AP Physics 2</div>
  <h1>Electric Circuits</h1>
  <p class="sub">Electric circuits — how charge, resistance, and energy interact in real, connected systems. This unit builds directly on the potential and capacitor ideas from Unit 10.</p>
  <div class="hero-pills">
    <span class="pill">Exam weight 15–18%</span>
    <span class="pill">8 topics</span>
    <span class="pill">15 practice problems</span>
  </div>
</div>

<div class="toc">
  <div class="toc-label">Jump to a section</div>
  <ol>
    <li><a href="#s111">11.1 Electric Current</a></li>
    <li><a href="#s112">11.2 Simple Circuits</a></li>
    <li><a href="#s113">11.3 Resistance & Ohm's Law</a></li>
    <li><a href="#s114">11.4 Electric Power</a></li>
    <li><a href="#s115">11.5 Compound DC Circuits</a></li>
    <li><a href="#s116">11.6 Kirchhoff's Loop Rule</a></li>
    <li><a href="#s117">11.7 Kirchhoff's Junction Rule</a></li>
    <li><a href="#s118">11.8 RC Circuits</a></li>
    <li><a href="#practice">Practice Set</a></li>
  </ol>
</div>

<div class="wrap">

  <p class="quote">"Current is what flows, resistance is what fights it, voltage is what pushes it — get those three roles straight and every circuit becomes readable." — Unit 11</p>

  <div class="skillbox">
    <span class="tag-label skill">Master This First — Series vs. Parallel, On Sight</span>
    <p>Before writing a single equation, train your eye to instantly classify every resistor in a diagram:</p>
    <ul style="margin:10px 0 0;">
      <li><strong>Series</strong> — one single path, no branching. Current is IDENTICAL through every element; voltage SPLITS.</li>
      <li><strong>Parallel</strong> — multiple paths reconnecting at both ends. Voltage is IDENTICAL across every branch; current SPLITS.</li>
    </ul>
    <p style="margin-top:10px;">In a mixed network, resolve the innermost series or parallel group first, replace it with its equivalent resistance, and repeat outward — never try to combine a whole tangled network in one step.</p>
  </div>

  <h2 id="s111"><span class="num">11.1</span>Electric Current</h2>
  <p>Electric current is just the rate at which charge flows past a point — literally charge per second, nothing more exotic than that. It behaves as a scalar with a defined direction convention, not as a true vector in the strict physics sense of the word.</p>
  <div class="eq"><div class="main">I = ΔQ / Δt</div><div class="sub">Unit: ampere (A) = coulomb/second</div></div>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>A weird fact worth knowing</div>
    <p>By convention, current flows in the direction positive charge WOULD move — even though in an actual metal wire, it's negatively charged electrons doing the moving, drifting the opposite way. This isn't a mistake baked into physics; it's a historical convention (stated explicitly on the AP reference sheet) that's baked into literally every circuit diagram you'll ever see. So reason in terms of conventional current, always — not electron flow — and you'll match every textbook and every exam answer key.</p>
  </div>

  <h2 id="s112"><span class="num">11.2</span>Simple Circuits</h2>
  <p>A circuit needs a complete, unbroken conducting path for current to flow at all — some kind of source (usually a battery), connecting wires, and typically a resistive element like a bulb or resistor. Break the loop anywhere, and current stops everywhere in that loop, not just downstream of wherever you broke it.</p>
  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Students sometimes picture current "running out" as it passes through a bulb, kind of like water being used up along the way. It doesn't work that way. The same current flows into and out of every single-path component, no exceptions. What actually changes as current passes through a resistor is energy — converted to heat or light — not the amount of charge flowing. Charge in equals charge out, always, for any single unbranched path.</p>
  </div>
  <p>A capacitor in a simple DC circuit blocks steady-state current once it's fully charged — no charge can cross the physical gap between its plates. So any part of a circuit that can ONLY be reached through a fully-charged capacitor carries zero current once the system settles down, even though current did flow briefly while the capacitor was still charging up.</p>

  <div class="divider">· · ·</div>

  <h2 id="s113"><span class="num">11.3</span>Resistance, Resistivity, and Ohm's Law</h2>
  <p>Resistance describes how strongly a material fights back against current flow. Ohm's Law ties voltage, current, and resistance together for a resistor.</p>
  <div class="eq"><div class="main">V = IR</div></div>
  <p>Resistance itself depends on the material and the wire's actual geometry:</p>
  <div class="eq"><div class="main">R = ρℓ / A</div><div class="sub">ρ = resistivity (a material property) · ℓ = length · A = cross-sectional area</div></div>
  <p>Longer wires resist more — charge has farther to fight through. Thicker wires resist less — more room to flow through, exactly like a wider pipe carrying water more easily. Here's something worth pausing on: this equation is structurally identical to the thermal conduction equation from Unit 9, just with length in the numerator this time instead of the denominator, since here you're describing resistance itself, not a rate.</p>

  <div class="worked">
    <span class="tag-label example">Worked Example 1</span>
    <p><strong>Wire Geometry and Resistance.</strong> Wire B has twice the length and half the cross-sectional area of Wire A, made from the same material. Find R<sub>B</sub> in terms of R<sub>A</sub>.</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">R = ρℓ/A. Doubling length doubles R on its own. Separately, halving area ALSO doubles R, since A sits in the denominator. Here's the part that trips people up: these two effects don't cancel or average out — they multiply together. Combined: R<sub>B</sub> = <strong>4 × R<sub>A</sub></strong>. Two independent geometric changes, each individually doubling the resistance, stack multiplicatively rather than just adding.</div>
    </details>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s114"><span class="num">11.4</span>Electric Power</h2>
  <p>Power is the rate at which electrical energy converts into some other form — heat in a resistor, light in a bulb, whatever the component is designed to do.</p>
  <div class="eq"><div class="main">P = IΔV &nbsp;·&nbsp; P = I²R &nbsp;·&nbsp; P = (ΔV)²/R</div></div>
  <p>All three of these are the exact same physics, just algebraically rearranged using Ohm's law. Pick whichever form matches the variables you're actually handed in a given problem — don't waste time solving for a missing variable first if you don't have to.</p>
  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>A bulb rated "100 W" only actually dissipates 100 W at its RATED voltage. Connect it to a different voltage, and its power draw changes along with it. Power isn't some fixed, permanent property of a bulb sitting on a shelf — it depends on the actual voltage and current the bulb is experiencing right now, in this specific circuit.</p>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s115"><span class="num">11.5</span>Compound DC Circuits</h2>
  <p>Real circuits combine resistors in series and in parallel, often both at once. Each arrangement has a completely different personality, and mixing the two up is, without question, the single most common circuits mistake on this exam.</p>
  <table class="formula-table">
    <tr><th>Arrangement</th><th>Current</th><th>Voltage</th><th>Equivalent Resistance</th></tr>
    <tr><td>Series</td><td>Same through each</td><td>Splits across each</td><td>R<sub>s</sub> = ΣR<sub>i</sub> (adds directly)</td></tr>
    <tr><td>Parallel</td><td>Splits across each</td><td>Same across each</td><td>1/R<sub>p</sub> = Σ(1/R<sub>i</sub>)</td></tr>
  </table>
  <div class="key-idea">
    <span class="tag-label idea">Key Idea</span>
    <p>Adding a resistor in SERIES always increases total resistance — you've added another obstacle to the only path available. Adding a resistor in PARALLEL always decreases total resistance — you've opened up an additional path, and even a high-resistance extra path makes it a little easier overall for charge to get through. These two facts pull in genuinely opposite directions, which is exactly why it's worth having them memorized as a contrasting pair rather than two separate rules.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 2</span>
    <p><strong>Series-Parallel Combination.</strong> A 6 Ω resistor is in series with a parallel combination of two 12 Ω resistors. Find the total equivalent resistance.</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">Start with the innermost group — the parallel pair: 1/R<sub>p</sub> = 1/12 + 1/12 = 2/12, so R<sub>p</sub> = 6 Ω. Then add the series resistor on top of that: R<sub>total</sub> = 6 + 6 = <strong>12 Ω</strong>. The habit to build here is always resolving the innermost parallel or series group first, then working outward one step at a time — trying to combine everything in one single step is exactly where errors sneak in.</div>
    </details>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s116"><span class="num">11.6</span>Kirchhoff's Loop Rule</h2>
  <p>The loop rule is really just energy conservation, dressed up for circuits: the sum of voltage changes around any complete closed loop equals zero. Go all the way around a loop and back to where you started, and you have to return to the same potential you left — there's no other option.</p>
  <div class="eq"><div class="main">ΣΔV = 0 (around any closed loop)</div></div>
  <p>Practically, this means adding up voltage RISES (crossing a battery from − to +) and voltage DROPS (crossing a resistor in the direction current flows, or crossing a battery from + to −), and setting the total to zero. This is how you solve for unknown currents or voltages in circuits with multiple loops and multiple batteries — genuinely one of the most powerful tools in this whole unit.</p>

  <div class="divider">· · ·</div>

  <h2 id="s117"><span class="num">11.7</span>Kirchhoff's Junction Rule</h2>
  <p>The junction rule is conservation of charge, applied at a single point: wherever wires meet, the total current flowing in has to equal the total current flowing out. Charge can't pile up anywhere, and it can't vanish either.</p>
  <div class="eq"><div class="main">ΣI<sub>in</sub> = ΣI<sub>out</sub> (at any junction)</div></div>
  <p>This is exactly why current splits across parallel branches in the first place, and why those branch currents have to add back up to the main current once the branches recombine — the junction rule is really the formal justification underneath the "current splits in parallel" behavior you saw back in 11.5.</p>

  <div class="divider">· · ·</div>

  <h2 id="s118"><span class="num">11.8</span>Resistor-Capacitor (RC) Circuits</h2>
  <p>Add a capacitor to a circuit with a resistor, and current stops behaving like the simple, constant-current DC circuits you've dealt with so far — it changes over time as the capacitor charges or discharges.</p>
  <ul>
    <li><strong>Charging:</strong> current starts high (an uncharged capacitor briefly acts like a plain wire) and decays toward zero as the capacitor approaches full charge and starts acting more and more like an open switch.</li>
    <li><strong>Discharging:</strong> current starts high and decays toward zero as the capacitor's stored charge runs out.</li>
  </ul>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>This one trick handles almost every RC question</div>
    <p>Two moments are always safe to reason about without any calculus at all: the instant right after the switch closes, and a long time later. Right after closing, an uncharged capacitor behaves like a plain wire — zero resistance. A long time later, a fully-charged capacitor behaves like a completely broken wire — no current flows through that branch at all. Nearly every AP RC question can be cracked open just by figuring out which of these two limits actually applies to what's being asked.</p>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Use I = ΔQ/Δt and know conventional current direction.</li>
      <li>Apply V = IR and R = ρℓ/A confidently, including how geometry changes affect resistance.</li>
      <li>Pick the right power equation for the variables you're given.</li>
      <li>Correctly identify series vs. parallel and compute equivalent resistance for combinations.</li>
      <li>Apply Kirchhoff's loop and junction rules to solve multi-loop circuits.</li>
      <li>Reason through RC circuits at t = 0 and t → ∞ without needing calculus.</li>
    </ul>
  </div>

  <h2 id="practice"><span class="num">📘</span>Unit 11 Practice Set</h2>
  <p>Work every problem before checking the answer — write out the physical principle you're starting from, exactly as the real AP exam requires.</p>

  <h3>Conceptual</h3>
  <div class="practice-item"><span class="qnum-badge">1</span><span>Explain why current is the same everywhere along a single loop with no branches, even before and after a resistor.</span></div>
  <div class="practice-item"><span class="qnum-badge">2</span><span>A resistor is added in parallel to an existing resistor. Does the total resistance of the circuit increase or decrease? Explain using the junction rule.</span></div>
  <div class="practice-item"><span class="qnum-badge">3</span><span>Immediately after a switch is closed in an RC circuit with an initially uncharged capacitor, how does the capacitor behave? How does it behave after a very long time?</span></div>
  <div class="practice-item"><span class="qnum-badge">4</span><span>A light bulb rated for 60 W at 120 V is connected instead to a 60 V source. Is its power output more, less, or equal to 60 W? Explain.</span></div>
  <div class="practice-item"><span class="qnum-badge">5</span><span>Two identical resistors are connected first in series, then in parallel, to the same battery. In which configuration does the battery supply more total current? Explain.</span></div>

  <h3>Numerical</h3>
  <div class="practice-item"><span class="qnum-badge">6</span><span>A wire carries a current of 2.5 A for 30 seconds. Find the total charge that passes through it.</span></div>
  <div class="practice-item"><span class="qnum-badge">7</span><span>A 12 V battery is connected to a 4.0 Ω resistor. Find the current.</span></div>
  <div class="practice-item"><span class="qnum-badge">8</span><span>Find the resistance of a wire 2.0 m long, cross-sectional area 1.0×10⁻⁶ m², made of a material with resistivity 1.7×10⁻⁸ Ω·m.</span></div>
  <div class="practice-item"><span class="qnum-badge">9</span><span>Find the power dissipated by a 6.0 Ω resistor carrying 3.0 A.</span></div>
  <div class="practice-item"><span class="qnum-badge">10</span><span>Three resistors, 2.0 Ω, 3.0 Ω, and 5.0 Ω, are connected in series. Find the equivalent resistance.</span></div>
  <div class="practice-item"><span class="qnum-badge">11</span><span>Two resistors, 4.0 Ω and 12 Ω, are connected in parallel. Find the equivalent resistance.</span></div>
  <div class="practice-item"><span class="qnum-badge">12</span><span>A 9.0 V battery drives current through a single 3.0 Ω resistor in series with two 6.0 Ω resistors in parallel with each other. Find the total current from the battery.</span></div>
  <div class="practice-item"><span class="qnum-badge">13</span><span>A circuit has an ideal 10 V battery and two resistors in series: 2.0 Ω and 8.0 Ω. Find the voltage drop across the 8.0 Ω resistor.</span></div>
  <div class="practice-item"><span class="qnum-badge">14</span><span>At a circuit junction, 3.0 A flows in from one wire and 1.5 A flows in from a second wire. If only one wire leaves the junction, find the current in that wire.</span></div>
  <div class="practice-item"><span class="qnum-badge">15</span><span>A 100 W bulb and a 60 W bulb are each rated for 120 V. Which has the higher resistance, and why?</span></div>

  <h3 style="margin-top:30px;">Answer Key</h3>
  <div class="answer-key">
    <details><summary>Question 1</summary><div class="a-content">Charge can't accumulate or disappear anywhere along a single unbranched path (conservation of charge / the junction rule applied to a trivial case) — whatever current enters a resistor must also exit it, even though energy is lost as heat along the way.</div></details>
    <details><summary>Question 2</summary><div class="a-content">Total resistance decreases. Adding a parallel path gives current an additional route, and by the junction rule, current splits across both paths — making it easier overall for charge to get through, which is exactly what lower resistance means.</div></details>
    <details><summary>Question 3</summary><div class="a-content">Immediately after closing: an uncharged capacitor acts like a plain wire (zero resistance), so current flows as if the capacitor weren't there. After a long time: the fully-charged capacitor acts like a broken wire (open switch), blocking any further current through that branch.</div></details>
    <details><summary>Question 4</summary><div class="a-content">Less than 60 W. Using P = (ΔV)²/R with R fixed (a property of the bulb's filament), halving the voltage to 60 V cuts power to (60/120)² = 1/4 of the rated value, or 15 W.</div></details>
    <details><summary>Question 5</summary><div class="a-content">Parallel draws more total current. Parallel resistors always produce a LOWER equivalent resistance than either resistor alone, and lower resistance at the same voltage means higher total current (I = V/R).</div></details>
    <details><summary>Question 6</summary><div class="a-content">Q = IΔt = (2.5)(30) = <strong>75 C</strong>.</div></details>
    <details><summary>Question 7</summary><div class="a-content">I = V/R = 12/4.0 = <strong>3.0 A</strong>.</div></details>
    <details><summary>Question 8</summary><div class="a-content">R = ρℓ/A = (1.7×10⁻⁸)(2.0)/(1.0×10⁻⁶) = <strong>0.034 Ω</strong>.</div></details>
    <details><summary>Question 9</summary><div class="a-content">P = I²R = (3.0)²(6.0) = <strong>54 W</strong>.</div></details>
    <details><summary>Question 10</summary><div class="a-content">R<sub>s</sub> = 2.0 + 3.0 + 5.0 = <strong>10 Ω</strong>.</div></details>
    <details><summary>Question 11</summary><div class="a-content">1/R<sub>p</sub> = 1/4.0 + 1/12 = 3/12 + 1/12 = 4/12, so R<sub>p</sub> = <strong>3.0 Ω</strong>.</div></details>
    <details><summary>Question 12</summary><div class="a-content">Parallel pair: 1/R<sub>p</sub> = 1/6 + 1/6 = 2/6, R<sub>p</sub> = 3.0 Ω. Total: R = 3.0 + 3.0 = 6.0 Ω. Current: I = V/R = 9.0/6.0 = <strong>1.5 A</strong>.</div></details>
    <details><summary>Question 13</summary><div class="a-content">Total R = 2.0 + 8.0 = 10 Ω. Current: I = 10/10 = 1.0 A. Voltage across 8.0 Ω: V = IR = (1.0)(8.0) = <strong>8.0 V</strong>.</div></details>
    <details><summary>Question 14</summary><div class="a-content">By the junction rule, current in must equal current out: 3.0 + 1.5 = <strong>4.5 A</strong>.</div></details>
    <details><summary>Question 15</summary><div class="a-content">The 60 W bulb has the higher resistance. From P = V²/R, R = V²/P — at the same voltage, the smaller power (60 W) corresponds to the larger resistance, since P and R are inversely related when voltage is fixed.</div></details>
  </div>

  <div class="footer-nav">
    Next up: head to the <strong>Unit 11 QBank</strong> to drill these ideas, then continue to <strong>Unit 12 — Magnetism and Electromagnetism</strong>.
  </div>

</div>
`,
  12: `<div class="hero">
  <div class="eyebrow">Peters Family Homeschool · AP Physics 2</div>
  <h1>Magnetism &amp; Electromagnetism</h1>
  <p class="sub">Magnetism — the unit where direction-finding becomes the real skill. Every equation here is simple; the right-hand rule is what actually separates a 5 from a 3.</p>
  <div class="hero-pills">
    <span class="pill">Exam weight 12–15%</span>
    <span class="pill">4 topics</span>
    <span class="pill">15 practice problems</span>
  </div>
</div>

<div class="toc">
  <div class="toc-label">Jump to a section</div>
  <ol>
    <li><a href="#s121">12.1 Magnetic Fields</a></li>
    <li><a href="#s122">12.2 Force on Moving Charges</a></li>
    <li><a href="#s123">12.3 Current-Carrying Wires</a></li>
    <li><a href="#s124">12.4 Electromagnetic Induction</a></li>
    <li><a href="#practice">Practice Set</a></li>
  </ol>
</div>

<div class="wrap">

  <p class="quote">"In this unit, knowing the formula is the easy 50%. Getting the direction right is the other 50% — and it's the half that actually separates scores." — Unit 12</p>

  <div class="skillbox">
    <span class="tag-label skill">Master This First — The Right-Hand Rule, Done Correctly</span>
    <p>This single procedure, done carefully every time, handles nearly every direction-finding question in this unit:</p>
    <ol class="steps">
      <li>Point your <strong>fingers</strong> in the direction of velocity v (for a moving charge) or current I (for a wire).</li>
      <li><strong>Curl</strong> your fingers toward the direction of the magnetic field B.</li>
      <li>Your <strong>thumb</strong> now points in the direction of the force F — but only if the charge is <strong>positive</strong>.</li>
      <li>If the charge is <strong>negative</strong>, do the whole procedure, then flip your answer 180°.</li>
    </ol>
    <p style="margin-top:10px;">The #1 way students lose points here isn't forgetting the rule — it's rushing it, or forgetting the negative-charge flip. Do it slowly, physically, with your actual hand, every single time.</p>
  </div>

  <h2 id="s121"><span class="num">12.1</span>Magnetic Fields</h2>
  <p>Magnetic fields are produced by moving charge — current flowing in a wire, or the intrinsic "spin" of electrons that makes permanent magnets work in the first place. Field lines run from a magnet's north pole to its south pole outside the magnet, and always form complete closed loops (they never just stop somewhere in space).</p>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — This Comes Up Constantly</span>
    <p>Unlike electric charges, magnetic poles always come in N-S pairs. There's no such thing as an isolated magnetic "monopole," and no one has ever found one. Cut a bar magnet in half, expecting to isolate a pure N piece and a pure S piece, and here's what actually happens: you just get two smaller magnets, each with its own complete N and S pole. It's genuinely counterintuitive the first time you hear it.</p>
  </div>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>The single most important fact in this whole unit</div>
    <p>The magnetic force on a moving charge is <strong>always perpendicular</strong> to its velocity. Here's why that matters so much: a force perpendicular to motion can never do work (remember W = Fd cosθ — with θ = 90°, that's automatically zero). So magnetic forces <strong>never change a charge's speed or kinetic energy</strong>, only its direction. This one fact is the backbone underneath nearly every circular-motion-in-a-magnetic-field question you'll ever see on this exam.</p>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s122"><span class="num">12.2</span>Magnetism and Moving Charges</h2>
  <div class="eq">
    <div class="main">F = qv × B &nbsp;·&nbsp; |F| = |q||v||B|sinθ</div>
    <div class="sub">θ = angle between v and B</div>
  </div>
  <p>Notice that sinθ tucked into the equation — it matters more than it looks like it does. A charge moving parallel (or antiparallel) to the field feels <strong>zero</strong> magnetic force, since sin(0°) = 0. Maximum force happens when velocity is exactly perpendicular to the field. Worth checking this angle before you assume there's any force at all.</p>

  <h3>Circular motion in a magnetic field</h3>
  <p>Since the magnetic force is always perpendicular to velocity, it behaves exactly like a centripetal force — constantly redirecting the charge without ever speeding it up or slowing it down. Left alone in a uniform field, this produces perfect uniform circular motion.</p>
  <div class="eq"><div class="main">qvB = mv²/r &nbsp;⟹&nbsp; r = mv / (qB)</div></div>
  <p>A bigger radius means either a faster-moving or more massive particle (harder to turn onto a tight circle), or a weaker field / smaller charge (less turning force available to bend the path).</p>

  <div class="worked">
    <span class="tag-label example">Worked Example 1</span>
    <p><strong>Direction and Radius.</strong> A proton moves to the right (+x) with speed v into a uniform magnetic field pointing into the page (−z). Find the direction of the magnetic force, and describe the resulting path.</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">Point your fingers along +x (velocity), curl them into the page (−z, the field direction) — your thumb ends up pointing <strong>+y (upward)</strong>. Since the proton is positive, that's the force direction directly, no flip needed. But here's the twist: since the force always stays perpendicular to velocity, as the proton curves upward, the force direction rotates right along with it, always staying perpendicular — and that's exactly what produces a full <strong>circular path</strong>, curving upward and to the left initially, eventually tracing a complete circle. If this were an electron instead (negative charge), the initial force would be downward instead — a full 180° flip, purely because of the sign.</div>
    </details>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s123"><span class="num">12.3</span>Magnetism and Current-Carrying Wires</h2>
  <p>A current-carrying wire is really just a huge organized collection of moving charges, so it makes sense that wires feel forces in magnetic fields too — and that wires themselves generate magnetic fields, since current literally is moving charge.</p>
  <h3>Force on a wire in an external field</h3>
  <div class="eq"><div class="main">|F| = |I||ℓ||B|sinθ</div><div class="sub">Same right-hand rule, fingers along current direction I instead of v</div></div>
  <h3>Field created by a long, straight current-carrying wire</h3>
  <div class="eq"><div class="main">B = μ₀I / (2πr)</div><div class="sub">Direction: grab the wire with your right thumb pointing along I — your curled fingers show B's direction, circling the wire</div></div>
  <p>Notice this field weakens with distance as 1/r, not 1/r² like the point-charge fields you got used to in Unit 10. That's a genuinely different falloff rate, worth explicitly remembering, since it's easy to default to the inverse-square pattern out of habit.</p>

  <div class="worked">
    <span class="tag-label example">Worked Example 2</span>
    <p><strong>Force Between Two Parallel Wires.</strong> Two long, straight wires run parallel to each other, both carrying current in the SAME direction. Do they attract or repel?</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">They <strong>attract</strong>. Wire 1's field circles around it; at Wire 2's location, that field points in a specific direction (found via the grab-the-wire rule). Apply the force rule to Wire 2 sitting in that field, and you find the force pulls Wire 2 toward Wire 1. Here's a genuinely memorable contrast to keep in your back pocket: <strong>parallel currents (same direction) attract, antiparallel currents (opposite directions) repel</strong> — the exact reverse of "likes repel" for electric charge. This flip-of-intuition is a favorite thing for the AP exam to test, specifically because it's counterintuitive if you're on autopilot.</div>
    </details>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s124"><span class="num">12.4</span>Electromagnetic Induction and Faraday's Law</h2>
  <p>This section is where magnetism loops back and connects to circuits — a changing magnetic environment can actually create a current, with no battery required anywhere in the picture.</p>
  <h3>Magnetic flux</h3>
  <div class="eq"><div class="main">Φ_B = B·A·cosθ</div><div class="sub">θ = angle between B and the area's normal (perpendicular) direction</div></div>
  <p>Flux measures how much field "passes through" a given area — maximum when the field is perpendicular to the surface (θ = 0°), zero when the field runs parallel to the surface (θ = 90°, grazing along it without actually crossing through).</p>

  <h3>Faraday's Law</h3>
  <div class="eq"><div class="main">ε = −N (ΔΦ_B / Δt)</div><div class="sub">N = number of loops</div></div>
  <p>An EMF — and therefore a current, if the circuit happens to be closed — is induced whenever magnetic flux through a loop CHANGES. Not when flux is simply present, specifically when it's changing. A steady, unchanging flux induces absolutely nothing, no matter how strong that field happens to be. This trips people up constantly, so let it sink in: strong and constant is not the same as changing.</p>

  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Three Ways to Change Flux</span>
    <p>Since Φ = BAcosθ, flux changes if ANY of the three factors change: the field strength B changes, the loop's area A changes (a loop being stretched or shrunk), or the angle θ between the field and the loop changes (a loop being rotated). Figuring out which of these three is actually varying in a given problem is usually the whole battle — once you spot it, the rest tends to follow.</p>
  </div>

  <h3>Lenz's Law: the direction of the induced current</h3>
  <p>Lenz's Law says the induced current flows in whatever direction creates a magnetic field that <strong>opposes the CHANGE</strong> in flux — not the flux itself, specifically the change happening to it.</p>
  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>This is genuinely the most commonly misunderstood idea in the whole unit. Students often assume Lenz's Law means the induced current always opposes the existing field — it doesn't. It opposes whatever is currently HAPPENING to the flux, which is a different thing entirely. If flux is increasing, the induced current fights to keep it from increasing further, creating an opposing field. If flux is decreasing, the induced current fights to prop it back up, creating a field in the SAME direction as the original, to resist that decrease. Nature resists change, in whichever direction that change happens to be occurring — never assume the answer is automatically "opposite" without checking whether flux is going up or down first.</p>
  </div>

  <h3>Motional EMF</h3>
  <p>Here's a special case that's very testable: a conducting rod of length L moves with speed v through a uniform field B, perpendicular to both its own length and its velocity.</p>
  <div class="eq"><div class="main">ε = BLv</div></div>
  <p>This is really just Faraday's Law wearing a disguise — the rod sweeps out area over time, changing the flux through whatever circuit it's part of, and this equation is the shortcut that skips straight to the resulting EMF without making you derive it from scratch each time.</p>

  <div class="worked">
    <span class="tag-label example">Worked Example 3</span>
    <p><strong>Lenz's Law in Action.</strong> A circular loop sits flat on a table, with a bar magnet's north pole approaching from directly above, moving downward toward the loop. Find the direction of the induced current in the loop, as viewed from above.</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">As the north pole approaches, the downward-pointing flux through the loop is <strong>increasing</strong>. By Lenz's Law, the induced current has to create its own field that OPPOSES this increase — meaning the induced field inside the loop needs to point upward, fighting against the growing downward flux. Using the right-hand rule for a loop (curl your fingers in the current's direction, thumb gives the field direction inside the loop), an upward-pointing field inside the loop requires the current to flow <strong>counterclockwise</strong>, viewed from above. Now here's the useful part: if the magnet were instead moving AWAY from the loop, the flux would be decreasing rather than increasing, and the induced current would need to reinforce it instead — flowing clockwise, the exact opposite answer from the same physical setup, purely because the magnet's motion reversed.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Execute the right-hand rule correctly and consistently, including the negative-charge flip.</li>
      <li>Explain why magnetic force does no work, and use that fact to reason about circular motion.</li>
      <li>Find the field from a long straight wire, including its 1/r falloff and its circular direction.</li>
      <li>Predict whether parallel wires attract or repel based on current direction.</li>
      <li>Identify all three ways magnetic flux can change (B, A, or θ).</li>
      <li>Apply Lenz's Law correctly — opposing the CHANGE, not the field itself.</li>
      <li>Use motional EMF (ε = BLv) for a rod sweeping through a field.</li>
    </ul>
  </div>

  <h2 id="practice"><span class="num">📘</span>Unit 12 Practice Set</h2>
  <p>Work every problem before checking the answer. For direction questions, physically use your right hand — don't try to do it in your head.</p>

  <h3>Conceptual</h3>
  <div class="practice-item"><span class="qnum-badge">1</span><span>Explain why a magnetic field can never change a charged particle's speed, only its direction.</span></div>
  <div class="practice-item"><span class="qnum-badge">2</span><span>A loop of wire sits in a magnetic field with the field strength increasing at a constant rate. Is a current induced? Explain, referencing Faraday's Law.</span></div>
  <div class="practice-item"><span class="qnum-badge">3</span><span>Two parallel wires carry current in opposite directions. Do they attract or repel?</span></div>
  <div class="practice-item"><span class="qnum-badge">4</span><span>A charge moves parallel to a magnetic field line. Find the magnitude of the magnetic force on it.</span></div>
  <div class="practice-item"><span class="qnum-badge">5</span><span>A bar magnet's south pole moves away from a loop of wire. Using Lenz's Law, will the induced current oppose or reinforce the existing flux through the loop as the magnet leaves?</span></div>

  <h3>Numerical</h3>
  <div class="practice-item"><span class="qnum-badge">6</span><span>An electron moves at 3.0×10⁶ m/s perpendicular to a 0.50 T field. Find the magnitude of the magnetic force on it. (q = 1.6×10⁻¹⁹ C)</span></div>
  <div class="practice-item"><span class="qnum-badge">7</span><span>A proton moves in a circular path of radius 0.20 m in a 0.80 T field. Find its speed. (m = 1.67×10⁻²⁷ kg)</span></div>
  <div class="practice-item"><span class="qnum-badge">8</span><span>A straight wire carries 4.0 A and is 0.30 m long, oriented perpendicular to a 0.60 T field. Find the force on the wire.</span></div>
  <div class="practice-item"><span class="qnum-badge">9</span><span>Find the magnetic field strength 0.050 m from a long straight wire carrying 10 A. (μ₀ = 4π×10⁻⁷ T·m/A)</span></div>
  <div class="practice-item"><span class="qnum-badge">10</span><span>A 0.40 m rod moves at 5.0 m/s perpendicular to a 0.25 T field. Find the motional EMF induced.</span></div>
  <div class="practice-item"><span class="qnum-badge">11</span><span>A circular loop of area 0.020 m² sits with its plane perpendicular to a 0.60 T field. Find the magnetic flux through the loop.</span></div>
  <div class="practice-item"><span class="qnum-badge">12</span><span>The flux through a single loop changes from 0.030 Wb to 0.010 Wb in 0.50 s. Find the magnitude of the induced EMF.</span></div>
  <div class="practice-item"><span class="qnum-badge">13</span><span>A 10-turn coil experiences a flux change of 0.0040 Wb per loop over 0.20 s. Find the induced EMF.</span></div>
  <div class="practice-item"><span class="qnum-badge">14</span><span>An electron travels at 2.0×10⁵ m/s in a circle of radius 0.010 m in a magnetic field. Find the field strength. (m = 9.11×10⁻³¹ kg, q = 1.6×10⁻¹⁹ C)</span></div>
  <div class="practice-item"><span class="qnum-badge">15</span><span>A square loop of side 0.10 m rotates so the angle between its normal and a 0.40 T field changes from 0° to 90°. Find the flux at each angle.</span></div>

  <h3 style="margin-top:30px;">Answer Key</h3>
  <div class="answer-key">
    <details><summary>Question 1</summary><div class="a-content">Magnetic force is always perpendicular to velocity, and work requires a force component along the direction of motion (W = Fd cosθ). A perpendicular force does zero work, so kinetic energy — and therefore speed — never changes, even as direction does.</div></details>
    <details><summary>Question 2</summary><div class="a-content">Yes, a current is induced. Faraday's Law states EMF is induced whenever flux changes — since B is increasing (with A and θ presumably fixed), Φ = BAcosθ is changing, which induces an EMF and, in a closed loop, a current.</div></details>
    <details><summary>Question 3</summary><div class="a-content">They repel. Parallel currents (same direction) attract; antiparallel currents (opposite directions) repel — the reverse of the "likes repel" rule for electric charges.</div></details>
    <details><summary>Question 4</summary><div class="a-content">Zero. F = qvBsinθ, and for motion parallel to the field, θ = 0°, so sinθ = 0 and the force is zero regardless of speed or field strength.</div></details>
    <details><summary>Question 5</summary><div class="a-content">The induced current will reinforce the existing flux, trying to prevent it from decreasing as the magnet leaves. Lenz's Law opposes the CHANGE (a decrease, here), not the flux itself — so the induced current creates a field in the same direction as the original to fight against that decrease.</div></details>
    <details><summary>Question 6</summary><div class="a-content">F = qvB = (1.6×10⁻¹⁹)(3.0×10⁶)(0.50) = <strong>2.4 × 10⁻¹³ N</strong>.</div></details>
    <details><summary>Question 7</summary><div class="a-content">From r = mv/(qB), solve for v: v = rqB/m = (0.20)(1.6×10⁻¹⁹)(0.80)/(1.67×10⁻²⁷) ≈ <strong>1.5 × 10⁷ m/s</strong>.</div></details>
    <details><summary>Question 8</summary><div class="a-content">F = BILsinθ = (0.60)(4.0)(0.30)(sin 90°) = <strong>0.72 N</strong>.</div></details>
    <details><summary>Question 9</summary><div class="a-content">B = μ₀I/(2πr) = (4π×10⁻⁷)(10)/(2π×0.050) = (2×10⁻⁷)(10)/0.050 = <strong>4.0 × 10⁻⁵ T</strong>.</div></details>
    <details><summary>Question 10</summary><div class="a-content">ε = BLv = (0.25)(0.40)(5.0) = <strong>0.50 V</strong>.</div></details>
    <details><summary>Question 11</summary><div class="a-content">Φ = BAcosθ = (0.60)(0.020)(cos 0°) = <strong>0.012 Wb</strong>.</div></details>
    <details><summary>Question 12</summary><div class="a-content">ε = ΔΦ/Δt = (0.030 − 0.010)/0.50 = 0.020/0.50 = <strong>0.040 V</strong>.</div></details>
    <details><summary>Question 13</summary><div class="a-content">ε = N(ΔΦ/Δt) = (10)(0.0040/0.20) = (10)(0.020) = <strong>0.20 V</strong>.</div></details>
    <details><summary>Question 14</summary><div class="a-content">From r = mv/(qB), solve for B: B = mv/(rq) = (9.11×10⁻³¹)(2.0×10⁵)/[(0.010)(1.6×10⁻¹⁹)] ≈ <strong>1.1 × 10⁻³ T</strong>.</div></details>
    <details><summary>Question 15</summary><div class="a-content">At θ = 0°: Φ = BAcos(0°) = (0.40)(0.010)(1) = <strong>4.0 × 10⁻³ Wb</strong> (maximum, field perpendicular to loop). At θ = 90°: Φ = BAcos(90°) = <strong>0 Wb</strong> (field runs parallel to the loop's surface, none of it "passes through").</div></details>
  </div>

  <div class="footer-nav">
    Next up: head to the <strong>Unit 12 QBank</strong> to drill these ideas — especially the right-hand rule and Lenz's Law — then continue to <strong>Unit 13 — Geometric Optics</strong>.
  </div>

</div>
`,
  13: `<div class="hero">
  <div class="eyebrow">Peters Family Homeschool · AP Physics 2</div>
  <h1>Geometric Optics</h1>
  <p class="sub">Geometric optics — mirrors, lenses, and refraction. The physics is simple; the sign conventions are where every point actually gets lost or won.</p>
  <div class="hero-pills">
    <span class="pill">Exam weight 12–15%</span>
    <span class="pill">4 topics</span>
    <span class="pill">15 practice problems</span>
  </div>
</div>

<div class="toc">
  <div class="toc-label">Jump to a section</div>
  <ol>
    <li><a href="#s131">13.1 Reflection</a></li>
    <li><a href="#s132">13.2 Mirror Images</a></li>
    <li><a href="#s133">13.3 Refraction</a></li>
    <li><a href="#s134">13.4 Lens Images</a></li>
    <li><a href="#practice">Practice Set</a></li>
  </ol>
</div>

<div class="wrap">

  <p class="quote">"Mirrors and lenses use the exact same equation. Everything hard about this unit is just sign conventions and ray-tracing discipline." — Unit 13</p>

  <div class="skillbox">
    <span class="tag-label skill">Master This First — The Sign Convention Table</span>
    <p>Every mirror and lens problem uses the same two equations:</p>
    <div class="eq" style="margin:10px 0;"><div class="main">1/s<sub>o</sub> + 1/s<sub>i</sub> = 1/f &nbsp;·&nbsp; M = h<sub>i</sub>/h<sub>o</sub> = −s<sub>i</sub>/s<sub>o</sub></div></div>
    <p>What changes between mirrors and lenses is only the SIGN CONVENTION for f, s<sub>i</sub>, and the resulting image type. Memorize this table cold — it resolves nearly every "is the image real or virtual, upright or inverted" question instantly:</p>
    <table class="formula-table" style="margin:10px 0 0;">
      <tr><th>Quantity</th><th>Positive means</th><th>Negative means</th></tr>
      <tr><td>f (mirror)</td><td>Concave (converging)</td><td>Convex (diverging)</td></tr>
      <tr><td>f (lens)</td><td>Converging lens</td><td>Diverging lens</td></tr>
      <tr><td>s<sub>i</sub></td><td>Real image (mirror: same side as object; lens: opposite side)</td><td>Virtual image</td></tr>
      <tr><td>M</td><td>Upright image</td><td>Inverted image</td></tr>
    </table>
  </div>

  <h2 id="s131"><span class="num">13.1</span>Reflection</h2>
  <p>Light reflecting off a surface obeys one deceptively simple rule, and honestly, everything about mirrors in this unit just builds on it.</p>
  <div class="eq"><div class="main">θ_incidence = θ_reflection</div><div class="sub">both angles measured from the NORMAL — the line perpendicular to the surface, not the surface itself</div></div>
  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Angles in optics are always measured from the normal — the perpendicular to the surface — never from the surface itself. Here's where this bites people: a ray hitting a mirror "at a steep angle" relative to the surface might actually have a SMALL angle of incidence, since it's nearly perpendicular to that surface. Get in the habit of physically drawing the normal line first, every single time, before you try to measure any angle at all.</p>
  </div>
  <p>A flat (plane) mirror always produces a <strong>virtual, upright, same-size</strong> image, located as far behind the mirror as the object sits in front of it. This is the one case in the whole unit where you don't need the mirror equation at all — it's just true by simple geometry, every single time, no calculation required.</p>

  <div class="divider">· · ·</div>

  <h2 id="s132"><span class="num">13.2</span>Images Formed by Mirrors</h2>
  <p>Curved mirrors come in two flavors: <strong>concave</strong> (curves inward, like the inside of a spoon — converges light, positive f) and <strong>convex</strong> (curves outward, like the back of a spoon — diverges light, negative f).</p>

  <h3>Ray tracing: the three principal rays</h3>
  <p>For a concave mirror, three specific rays are genuinely easy to trace by hand, and wherever any two of them cross tells you exactly where the image forms:</p>
  <ol class="steps">
    <li>A ray parallel to the axis reflects THROUGH the focal point.</li>
    <li>A ray through the focal point reflects back PARALLEL to the axis.</li>
    <li>A ray through the center of curvature reflects straight back on itself.</li>
  </ol>
  <p>For a convex mirror, the same rules apply in spirit, but the rays diverge AWAY from a virtual focal point sitting behind the mirror, rather than converging in front of it.</p>

  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>This one idea explains almost every mirror image question</div>
    <p>For a concave mirror, where the object sits relative to the focal point completely determines the image type. Object beyond the center of curvature (2f) gives a smaller, inverted, real image. Object between f and 2f gives a larger, inverted, real image. Object exactly at f gives no image at all (the rays emerge parallel, never converging anywhere). Object inside f, closer than the focal point, gives a magnified, upright, VIRTUAL image — this is exactly how a magnifying mirror works, and it's worth picturing a physical dentist's mirror the next time you see this scenario.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 1</span>
    <p><strong>Concave Mirror Image.</strong> An object sits 30 cm from a concave mirror with focal length 10 cm. Find the image distance and describe the image.</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">1/s<sub>o</sub> + 1/s<sub>i</sub> = 1/f → 1/30 + 1/s<sub>i</sub> = 1/10 → 1/s<sub>i</sub> = 1/10 − 1/30 = 3/30 − 1/30 = 2/30 → s<sub>i</sub> = 15 cm. Positive s<sub>i</sub> means a <strong>real image</strong>, sitting 15 cm in front of the mirror. Magnification: M = −s<sub>i</sub>/s<sub>o</sub> = −15/30 = −0.5 — negative means <strong>inverted</strong>, and a magnitude less than 1 means <strong>reduced</strong> (smaller than the object). Notice this matches the "beyond 2f" prediction from the key idea above (the object at 30 cm sits beyond 2f = 20 cm) — a good habit is checking your algebra against that qualitative prediction before you commit to an answer.</div>
    </details>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s133"><span class="num">13.3</span>Refraction</h2>
  <p>Light bends when it crosses between materials with different optical densities — described by the index of refraction n, and governed by Snell's Law.</p>
  <div class="eq"><div class="main">n = c/v &nbsp;·&nbsp; n₁sinθ₁ = n₂sinθ₂</div><div class="sub">n is always ≥ 1; higher n means light travels slower in that material</div></div>
  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Which Way Does It Bend?</span>
    <p>Going into a MORE optically dense material (higher n) bends the ray TOWARD the normal. Going into a LESS dense material (lower n) bends the ray AWAY from the normal. Here's a way to make this stick: light "slows down and steps closer to attention" entering a denser medium, and "speeds up and relaxes away" leaving one. Silly as that mnemonic sounds, it genuinely works under exam pressure.</p>
  </div>

  <h3>Total internal reflection</h3>
  <p>When light travels from a denser to a less-dense medium at a steep enough angle, it can't refract out at all — instead, every bit of it reflects back into the denser medium. This happens at angles beyond the <strong>critical angle</strong>:</p>
  <div class="eq"><div class="main">sinθ_c = n₂/n₁</div><div class="sub">only defined when n₁ > n₂ — going from denser to less dense</div></div>
  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Total internal reflection can ONLY happen when light tries to exit INTO a less optically dense material (n₁ > n₂). Light traveling from a less dense into a MORE dense material can never totally internally reflect, no matter the angle — there's no critical angle to even calculate in that direction. If you find yourself computing a critical angle "backwards," stop and recheck which medium is actually denser.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 2</span>
    <p><strong>Critical Angle.</strong> Light inside glass (n = 1.5) strikes the glass-air boundary (n<sub>air</sub> = 1.0). Find the critical angle.</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">sinθ_c = n₂/n₁ = 1.0/1.5 = 0.667. θ_c = sin⁻¹(0.667) ≈ <strong>41.8°</strong>. Any light hitting this boundary from inside the glass at an angle GREATER than 41.8° totally internally reflects — none of it escapes into the air. This is exactly the principle behind fiber optic cables, which rely entirely on total internal reflection to keep light trapped inside as it travels enormous distances with barely any loss.</div>
    </details>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s134"><span class="num">13.4</span>Images Formed by Lenses</h2>
  <p>Lenses use the exact same equation as mirrors — 1/s<sub>o</sub> + 1/s<sub>i</sub> = 1/f — but the sign convention flips in one crucial way: for a lens, a <strong>real image forms on the OPPOSITE side</strong> of the lens from the object, since light actually passes through the lens. For a mirror, a real image forms on the SAME side, since light reflects back the way it came.</p>

  <h3>Ray tracing for a converging (convex) lens</h3>
  <ol class="steps">
    <li>A ray parallel to the axis refracts THROUGH the far focal point.</li>
    <li>A ray through the near focal point refracts to travel PARALLEL to the axis after the lens.</li>
    <li>A ray through the exact center of the lens passes straight through, undeviated.</li>
  </ol>
  <p>A diverging (concave) lens always produces a virtual, upright, reduced image, regardless of the object's distance — the one lens case, like the plane mirror, where you can predict the image type on sight, with no calculation required at all.</p>

  <div class="worked">
    <span class="tag-label example">Worked Example 3</span>
    <p><strong>Converging Lens Image.</strong> An object sits 15 cm from a converging lens with focal length 10 cm. Find the image distance and describe the image.</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">1/s<sub>o</sub> + 1/s<sub>i</sub> = 1/f → 1/15 + 1/s<sub>i</sub> = 1/10 → 1/s<sub>i</sub> = 1/10 − 1/15 = 3/30 − 2/30 = 1/30 → s<sub>i</sub> = 30 cm. Positive s<sub>i</sub> means a <strong>real image</strong>, 30 cm on the FAR side of the lens — opposite the object, exactly the lens sign convention discussed above. Magnification: M = −s<sub>i</sub>/s<sub>o</sub> = −30/15 = −2 — negative means <strong>inverted</strong>, magnitude greater than 1 means <strong>magnified</strong>. This is essentially how a basic projector or camera lens setup works: object just outside the focal point produces a large, inverted, real image on the far side.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Measure every angle from the normal, not the surface.</li>
      <li>Trace the three principal rays confidently for both mirrors and converging lenses.</li>
      <li>Use the sign convention table to determine real/virtual and upright/inverted without second-guessing.</li>
      <li>Apply Snell's Law and know which way light bends entering a denser vs. less-dense material.</li>
      <li>Find the critical angle and know total internal reflection only occurs going into a LESS dense medium.</li>
      <li>Remember the one sign-convention difference between mirrors and lenses: which side a real image forms on.</li>
    </ul>
  </div>

  <h2 id="practice"><span class="num">📘</span>Unit 13 Practice Set</h2>
  <p>Work every problem before checking the answer. For ray-tracing questions, actually sketch them — this is a genuinely hands-on skill.</p>

  <h3>Conceptual</h3>
  <div class="practice-item"><span class="qnum-badge">1</span><span>Explain why total internal reflection can only occur when light travels from a denser into a less-dense medium.</span></div>
  <div class="practice-item"><span class="qnum-badge">2</span><span>An object is placed exactly at the focal point of a concave mirror. Describe what happens to the reflected rays.</span></div>
  <div class="practice-item"><span class="qnum-badge">3</span><span>Compare the image formed by a diverging (concave) lens for an object very close to the lens versus very far away.</span></div>
  <div class="practice-item"><span class="qnum-badge">4</span><span>Light travels from air into water. Does it bend toward or away from the normal? Explain.</span></div>
  <div class="practice-item"><span class="qnum-badge">5</span><span>Explain, using the sign convention table, what it means physically when a calculated image distance comes out negative.</span></div>

  <h3>Numerical</h3>
  <div class="practice-item"><span class="qnum-badge">6</span><span>An object sits 20 cm from a concave mirror with focal length 8.0 cm. Find the image distance.</span></div>
  <div class="practice-item"><span class="qnum-badge">7</span><span>Find the magnification for the mirror in Question 6, and describe the image (upright/inverted, magnified/reduced).</span></div>
  <div class="practice-item"><span class="qnum-badge">8</span><span>Light travels from air (n = 1.00) into glass (n = 1.50) at an incidence angle of 40°. Find the refraction angle.</span></div>
  <div class="practice-item"><span class="qnum-badge">9</span><span>Find the critical angle for light traveling from water (n = 1.33) into air (n = 1.00).</span></div>
  <div class="practice-item"><span class="qnum-badge">10</span><span>An object sits 25 cm from a converging lens with focal length 15 cm. Find the image distance.</span></div>
  <div class="practice-item"><span class="qnum-badge">11</span><span>Find the magnification for the lens in Question 10.</span></div>
  <div class="practice-item"><span class="qnum-badge">12</span><span>A convex mirror has focal length −12 cm (negative, per convention). An object sits 18 cm away. Find the image distance.</span></div>
  <div class="practice-item"><span class="qnum-badge">13</span><span>Find the speed of light in a medium with index of refraction 1.6. (c = 3.0×10⁸ m/s)</span></div>
  <div class="practice-item"><span class="qnum-badge">14</span><span>An object 4.0 cm tall is placed in front of a lens, forming an image with magnification −0.50. Find the image height.</span></div>
  <div class="practice-item"><span class="qnum-badge">15</span><span>A diverging lens has focal length −20 cm. An object sits 30 cm away. Find the image distance.</span></div>

  <h3 style="margin-top:30px;">Answer Key</h3>
  <div class="answer-key">
    <details><summary>Question 1</summary><div class="a-content">Snell's Law requires n₁sinθ₁ = n₂sinθ₂. Going from denser (n₁) to less dense (n₂), sinθ₂ = (n₁/n₂)sinθ₁ requires multiplying by a factor greater than 1 — at large enough θ₁, this would require sinθ₂ > 1, which is impossible, so no refracted ray can exist and all the light reflects instead. Going the other direction (less dense to denser), that multiplying factor is always less than 1, so a valid refraction angle always exists.</div></details>
    <details><summary>Question 2</summary><div class="a-content">The reflected rays emerge parallel to each other — no image forms at all (or, described differently, the image forms at infinity). This is exactly why f is a special, unique location: it's the one object distance with no proper image location.</div></details>
    <details><summary>Question 3</summary><div class="a-content">Both cases produce a virtual, upright, reduced image — a diverging lens ALWAYS does, regardless of object distance. The image just sits closer to the lens (and appears smaller/less reduced) for a closer object, and farther from the lens (appearing more strongly reduced) for a more distant object, but the type of image never changes.</div></details>
    <details><summary>Question 4</summary><div class="a-content">Toward the normal. Water is more optically dense than air (n<sub>water</sub> > n<sub>air</sub>), and light bends toward the normal when entering a denser medium.</div></details>
    <details><summary>Question 5</summary><div class="a-content">A negative image distance means a virtual image — for a mirror, that's an image behind the mirror; for a lens, that's an image on the same side as the object. Either way, a virtual image can't be projected onto a screen; it only exists in the sense that rays appear to diverge from that location.</div></details>
    <details><summary>Question 6</summary><div class="a-content">1/20 + 1/s<sub>i</sub> = 1/8.0 → 1/s<sub>i</sub> = 1/8.0 − 1/20 = 5/40 − 2/40 = 3/40 → s<sub>i</sub> ≈ <strong>13.3 cm</strong> (real image, in front of the mirror).</div></details>
    <details><summary>Question 7</summary><div class="a-content">M = −s<sub>i</sub>/s<sub>o</sub> = −13.3/20 ≈ <strong>−0.67</strong> — negative means inverted; magnitude less than 1 means reduced.</div></details>
    <details><summary>Question 8</summary><div class="a-content">n₁sinθ₁ = n₂sinθ₂ → (1.00)(sin 40°) = (1.50)(sinθ₂) → sinθ₂ = 0.643/1.50 ≈ 0.429 → θ₂ ≈ <strong>25.4°</strong>. The ray bends toward the normal entering the denser glass, exactly as expected.</div></details>
    <details><summary>Question 9</summary><div class="a-content">sinθ_c = n₂/n₁ = 1.00/1.33 ≈ 0.752 → θ_c ≈ <strong>48.8°</strong>.</div></details>
    <details><summary>Question 10</summary><div class="a-content">1/25 + 1/s<sub>i</sub> = 1/15 → 1/s<sub>i</sub> = 1/15 − 1/25 = 5/75 − 3/75 = 2/75 → s<sub>i</sub> ≈ <strong>37.5 cm</strong> (real image, opposite side of the lens from the object).</div></details>
    <details><summary>Question 11</summary><div class="a-content">M = −s<sub>i</sub>/s<sub>o</sub> = −37.5/25 = <strong>−1.5</strong> — inverted, magnified.</div></details>
    <details><summary>Question 12</summary><div class="a-content">1/18 + 1/s<sub>i</sub> = 1/(−12) → 1/s<sub>i</sub> = −1/12 − 1/18 = −3/36 − 2/36 = −5/36 → s<sub>i</sub> ≈ <strong>−7.2 cm</strong>. Negative means a virtual image, behind the convex mirror — consistent with the fact that convex mirrors always produce virtual, upright, reduced images no matter the object distance.</div></details>
    <details><summary>Question 13</summary><div class="a-content">v = c/n = (3.0×10⁸)/1.6 ≈ <strong>1.9 × 10⁸ m/s</strong>.</div></details>
    <details><summary>Question 14</summary><div class="a-content">M = h<sub>i</sub>/h<sub>o</sub> → h<sub>i</sub> = M × h<sub>o</sub> = (−0.50)(4.0) = <strong>−2.0 cm</strong>. The negative sign indicates the image is inverted relative to the object.</div></details>
    <details><summary>Question 15</summary><div class="a-content">1/30 + 1/s<sub>i</sub> = 1/(−20) → 1/s<sub>i</sub> = −1/20 − 1/30 = −3/60 − 2/60 = −5/60 → s<sub>i</sub> = <strong>−12 cm</strong>. Negative confirms a virtual image, as expected for any diverging lens regardless of object distance.</div></details>
  </div>

  <div class="footer-nav">
    Next up: head to the <strong>Unit 13 QBank</strong> to drill ray tracing and sign conventions, then continue to <strong>Unit 14 — Waves, Sound, and Physical Optics</strong>.
  </div>

</div>
`,
  14: `<div class="hero">
  <div class="eyebrow">Peters Family Homeschool · AP Physics 2</div>
  <h1>Waves, Sound &amp; Physical Optics</h1>
  <p class="sub">Waves — the unit that ties sound, light, and water ripples together under one shared mathematical language.</p>
  <div class="hero-pills">
    <span class="pill">Exam weight 12–15%</span>
    <span class="pill">9 topics</span>
    <span class="pill">16 practice problems</span>
  </div>
</div>

<div class="toc">
  <div class="toc-label">Jump to a section</div>
  <ol>
    <li><a href="#s141">14.1 Wave Basics</a></li>
    <li><a href="#s142">14.2 Periodic Waves</a></li>
    <li><a href="#s143">14.3 Boundaries & Polarization</a></li>
    <li><a href="#s144">14.4 EM Waves</a></li>
    <li><a href="#s145">14.5 Doppler Effect</a></li>
    <li><a href="#s146">14.6 Interference & Standing Waves</a></li>
    <li><a href="#s147">14.7 Diffraction</a></li>
    <li><a href="#s148">14.8 Double-Slit & Gratings</a></li>
    <li><a href="#s149">14.9 Thin Film Interference</a></li>
    <li><a href="#practice">Practice Set</a></li>
  </ol>
</div>

<div class="wrap">

  <p class="quote">"Every wave — sound, light, water — obeys the same handful of rules. Learn them once here, and you've learned them for the whole unit." — Unit 14</p>

  <div class="skillbox">
    <span class="tag-label skill">Master This First — Path Difference Decides Everything</span>
    <p>Whether it's a double slit, a thin film, or two speakers, the same single question determines constructive vs. destructive interference:</p>
    <ul style="margin:10px 0 0;">
      <li><strong>Whole number of wavelengths</strong> (mλ) → constructive — the waves arrive in step.</li>
      <li><strong>Half-integer number of wavelengths</strong> ((m+½)λ) → destructive — the waves arrive exactly out of step.</li>
    </ul>
    <p style="margin-top:10px;">The only extra wrinkle is thin films, where a reflection off a higher-index boundary silently adds an extra half-wavelength shift — check for that BEFORE applying the rule above, or the constructive/destructive answer will come out backwards.</p>
  </div>

  <h2 id="s141"><span class="num">14.1</span>Properties of Waves</h2>
  <p>A wave carries energy through a medium (or, for light, through empty space) without permanently transporting matter along with it — the medium itself just oscillates in place as the wave passes through it.</p>
  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Transverse vs. Longitudinal</span>
    <p>In a <strong>transverse</strong> wave (light, waves on a string), the medium oscillates PERPENDICULAR to the direction the wave travels. In a <strong>longitudinal</strong> wave (sound), the medium oscillates PARALLEL to the direction of travel — compressing and expanding along the same line the wave moves. Hang onto this distinction, because it matters enormously later on: only transverse waves can be polarized, full stop.</p>
  </div>
  <div class="eq"><div class="main">v = fλ</div><div class="sub">wave speed = frequency × wavelength — the single most-used equation in this unit</div></div>

  <div class="divider">· · ·</div>

  <h2 id="s142"><span class="num">14.2</span>Periodic Waves</h2>
  <p>A periodic wave repeats itself at regular intervals in both time and space — nothing more mysterious than that.</p>
  <div class="eq"><div class="main">T = 1/f</div><div class="sub">Period and frequency are reciprocals — always</div></div>
  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Wave SPEED depends on the medium — how fast sound moves through air vs. water, how fast light moves through glass vs. vacuum. It does NOT depend on frequency or wavelength individually. If frequency changes while the wave stays in the same medium, wavelength has to change to compensate, keeping v = fλ constant. Don't treat v, f, and λ as three independent knobs you can turn freely — only two of them are ever truly independent at once, and the medium locks in the third.</p>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s143"><span class="num">14.3</span>Boundary Behavior and Polarization</h2>
  <p>What happens when a wave hits the end of its medium depends entirely on whether that end is fixed or free.</p>
  <table class="formula-table">
    <tr><th>Boundary type</th><th>Reflected pulse</th></tr>
    <tr><td>Fixed end (can't move)</td><td>Inverted (flipped upside down, 180° phase shift)</td></tr>
    <tr><td>Free end (can move freely)</td><td>Upright (same orientation, no phase shift)</td></tr>
  </table>
  <p>This fixed-end phase flip is the exact same physical idea that reappears later in thin-film interference — worth connecting the two now rather than treating them as two unrelated facts to memorize separately.</p>
  <h3>Polarization</h3>
  <p>Only transverse waves can be polarized — meaning you can restrict their oscillation to a single plane. A polarizing filter blocks all oscillation except along one specific direction; passing unpolarized light through it cuts intensity roughly in half. Passing already-polarized light through a SECOND filter oriented perpendicular to the first blocks it almost completely — you may have seen this yourself with two pairs of polarized sunglasses.</p>
  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Sound waves CANNOT be polarized — they're longitudinal, oscillating along the direction of travel rather than perpendicular to it, so there's no "plane of oscillation" to restrict in the first place. If a question asks about polarizing sound, the honest answer is that it's simply not possible, and that's worth stating directly rather than trying to force an answer.</p>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s144"><span class="num">14.4</span>Electromagnetic Waves</h2>
  <p>Light is an electromagnetic wave — an oscillating electric field and an oscillating magnetic field, perpendicular to each other AND perpendicular to the direction of travel, propagating through space (even a total vacuum) at speed c.</p>
  <div class="eq"><div class="main">c = fλ</div><div class="sub">c = 3.00 × 10⁸ m/s, the same wave equation, specific to light</div></div>
  <div class="key-idea">
    <span class="tag-label idea">Key Idea — The EM Spectrum Is One Family</span>
    <p>Radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays are all fundamentally the SAME kind of wave — electromagnetic — differing only in frequency and, correspondingly, wavelength. Higher frequency means higher photon energy (E = hf, which you'll see again in Unit 15), and that's exactly why X-rays and gamma rays are dangerous while radio waves aren't, despite both technically being "light" in the broadest sense.</p>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s145"><span class="num">14.5</span>The Doppler Effect</h2>
  <p>The Doppler effect is the shift in observed frequency caused by relative motion between a wave source and an observer — you've heard this yourself every time a siren changes pitch as it passes you.</p>
  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Direction First, Numbers Second</span>
    <p>Source and observer moving TOWARD each other → observed frequency INCREASES (pitch sounds higher, wavelengths compress). Moving AWAY from each other → observed frequency DECREASES (pitch sounds lower, wavelengths stretch). Get this directional intuition locked in before you ever touch a formula — on the real exam, a conceptual Doppler question is far more likely to show up than a plug-and-chug numeric one.</p>
  </div>
  <div class="eq"><div class="main">f' = f × (v ± v<sub>observer</sub>)/(v ∓ v<sub>source</sub>)</div><div class="sub">v = speed of the wave in the medium; use + when motion is toward, − when away, applied consistently to numerator/denominator</div></div>

  <div class="divider">· · ·</div>

  <h2 id="s146"><span class="num">14.6</span>Wave Interference and Standing Waves</h2>
  <p>When two waves overlap, their displacements simply add together at every single point — this is called superposition, and it's really the whole idea behind interference.</p>
  <table class="formula-table">
    <tr><th>Interference type</th><th>Condition</th><th>Result</th></tr>
    <tr><td>Constructive</td><td>Path difference = mλ (whole number of wavelengths)</td><td>Waves reinforce — bigger amplitude</td></tr>
    <tr><td>Destructive</td><td>Path difference = (m + ½)λ</td><td>Waves cancel — smaller (or zero) amplitude</td></tr>
  </table>
  <h3>Standing waves</h3>
  <p>A standing wave forms when two identical waves travel in opposite directions along the same medium — like a wave reflecting back on itself along a string. Certain points, called <strong>nodes</strong>, never move at all. Others, called <strong>antinodes</strong>, oscillate with maximum amplitude.</p>
  <div class="eq"><div class="main">λ_n = 2L/n &nbsp;·&nbsp; f<sub>n</sub> = nv/(2L)</div><div class="sub">string fixed at both ends; n = 1, 2, 3... (harmonic number)</div></div>

  <div class="worked">
    <span class="tag-label example">Worked Example 1</span>
    <p><strong>Standing Wave on a String.</strong> A string of length 1.2 m, fixed at both ends, vibrates in its third harmonic (n = 3). If the wave speed on the string is 40 m/s, find the frequency.</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">f<sub>n</sub> = nv/(2L) = (3)(40)/(2 × 1.2) = 120/2.4 = <strong>50 Hz</strong>. Here's a subtlety worth catching: the third harmonic doesn't mean "three times the length" — it means three antinodes fit along the string, with the wavelength shortened to fit (λ₃ = 2L/3 = 0.8 m here), which is exactly why frequency scales up with n even though the string's physical length never actually changes.</div>
    </details>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s147"><span class="num">14.7</span>Diffraction</h2>
  <p>Diffraction is the bending of waves around obstacles or through openings. It becomes significant — noticeably bending the wave — when the wavelength is comparable to (or larger than) the size of the obstacle or opening.</p>
  <div class="key-idea">
    <span class="tag-label idea">Key Idea</span>
    <p>A LARGER wavelength relative to the opening produces MORE diffraction. This is exactly why sound (long wavelength) diffracts noticeably around a doorway, letting you hear someone in the next room even without a direct line of sight, while visible light (much shorter wavelength) diffracts far less through that same doorway and casts a comparatively sharp shadow. Same physics, wildly different wavelength scale, completely different everyday experience.</p>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s148"><span class="num">14.8</span>Double-Slit Interference and Diffraction Gratings</h2>
  <p>When light passes through two closely-spaced slits, it produces a pattern of alternating bright and dark bands on a screen — direct, visible evidence that light behaves as a wave.</p>
  <div class="eq"><div class="main">d sinθ = mλ</div><div class="sub">d = slit separation; m = 0, ±1, ±2... gives bright fringes (constructive)</div></div>
  <div class="eq"><div class="main">ΔL = mλ</div><div class="sub">ΔL = path length difference between the two slits to a given point</div></div>
  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>The central bright fringe (m = 0) sits exactly opposite the midpoint between the two slits — this is where the path difference is exactly zero, NOT where either individual slit lines up with the screen. Some students expect the brightest spot to align directly with one of the slits; it doesn't, and that mistake is worth deliberately unlearning now.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 2</span>
    <p><strong>Double-Slit Bright Fringe.</strong> Light of wavelength 600 nm passes through two slits separated by 0.20 mm. Find the angle to the second bright fringe (m = 2).</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">d sinθ = mλ → sinθ = mλ/d = (2)(600×10⁻⁹)/(0.20×10⁻³) = (1200×10⁻⁹)/(2.0×10⁻⁴) = 6.0×10⁻³. θ = sin⁻¹(6.0×10⁻³) ≈ <strong>0.34°</strong>. Notice how tiny this angle is — that's exactly why double-slit fringes require a screen placed far from the slits to be spread out enough to actually see distinct bands with your eyes.</div>
    </details>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s149"><span class="num">14.9</span>Thin Film Interference</h2>
  <p>Light reflecting off the top and bottom surfaces of a thin film — a soap bubble, an oil slick — can interfere constructively or destructively, producing exactly the colorful swirling patterns you've probably noticed in both.</p>
  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>The one rule that makes thin films actually make sense</div>
    <p>Reflection off a boundary into a HIGHER-index medium causes a 180° phase shift — think of it like a fixed end. Reflection off a boundary into a LOWER-index medium causes NO phase shift — think of it like a free end. You have to check this separately for BOTH the top surface and the bottom surface of the film. If the two reflections have a MISMATCHED number of phase shifts (one shifted, one not), the usual constructive/destructive conditions flip relative to what a simple path-difference calculation alone would tell you. This is the step almost everyone forgets, and it's the difference between a right and wrong answer on nearly every thin-film problem.</p>
  </div>
  <div class="eq"><div class="main">Path difference = 2t</div><div class="sub">t = film thickness; light crosses the film twice (down and back up)</div></div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Distinguish transverse from longitudinal waves, and know only transverse waves polarize.</li>
      <li>Apply v = fλ fluently, remembering wave speed is set by the medium.</li>
      <li>Know fixed-end vs. free-end reflection behavior.</li>
      <li>Reason through Doppler shifts directionally before calculating.</li>
      <li>Find standing wave frequencies and wavelengths for a string fixed at both ends.</li>
      <li>Apply d sinθ = mλ for double-slit bright fringes.</li>
      <li>Track phase shifts carefully on both surfaces in thin-film problems.</li>
    </ul>
  </div>

  <h2 id="practice"><span class="num">📘</span>Unit 14 Practice Set</h2>
  <p>Work every problem before checking the answer.</p>

  <h3>Conceptual</h3>
  <div class="practice-item"><span class="qnum-badge">1</span><span>Explain why sound waves cannot be polarized, but light waves can.</span></div>
  <div class="practice-item"><span class="qnum-badge">2</span><span>A wave pulse on a string reflects off a fixed end. Describe how the reflected pulse compares to the original.</span></div>
  <div class="practice-item"><span class="qnum-badge">3</span><span>An ambulance siren sounds higher-pitched as it approaches you and lower-pitched as it moves away. Explain why, using the Doppler effect.</span></div>
  <div class="practice-item"><span class="qnum-badge">4</span><span>Explain why low-pitched sounds diffract more noticeably around corners than high-pitched sounds.</span></div>
  <div class="practice-item"><span class="qnum-badge">5</span><span>A soap film appears colorful under white light. Explain, in general terms, why this happens.</span></div>

  <h3>Numerical</h3>
  <div class="practice-item"><span class="qnum-badge">6</span><span>A wave has frequency 250 Hz and wavelength 1.4 m. Find its speed.</span></div>
  <div class="practice-item"><span class="qnum-badge">7</span><span>Find the period of a wave with frequency 40 Hz.</span></div>
  <div class="practice-item"><span class="qnum-badge">8</span><span>A radio wave has frequency 100 MHz. Find its wavelength. (c = 3.0×10⁸ m/s)</span></div>
  <div class="practice-item"><span class="qnum-badge">9</span><span>A string 2.0 m long, fixed at both ends, vibrates in its second harmonic (n = 2) with wave speed 30 m/s. Find the frequency.</span></div>
  <div class="practice-item"><span class="qnum-badge">10</span><span>Find the fundamental (first harmonic) frequency for the same string in Question 9.</span></div>
  <div class="practice-item"><span class="qnum-badge">11</span><span>Light of wavelength 500 nm passes through two slits separated by 0.15 mm. Find the angle to the first bright fringe (m = 1).</span></div>
  <div class="practice-item"><span class="qnum-badge">12</span><span>Two waves arrive at a point with a path difference of 2.5 wavelengths. Is the interference constructive or destructive at that point?</span></div>
  <div class="practice-item"><span class="qnum-badge">13</span><span>A source emits sound at 500 Hz. If the observed frequency is 550 Hz, is the source moving toward or away from the observer?</span></div>
  <div class="practice-item"><span class="qnum-badge">14</span><span>Find the wavelength of visible light with frequency 5.0×10¹⁴ Hz.</span></div>
  <div class="practice-item"><span class="qnum-badge">15</span><span>A thin film has thickness 200 nm. Find the path difference light travels crossing the film and reflecting back.</span></div>
  <div class="practice-item"><span class="qnum-badge">16</span><span>Find the wavelength of a standing wave's fourth harmonic (n = 4) on a 1.6 m string fixed at both ends.</span></div>

  <h3 style="margin-top:30px;">Answer Key</h3>
  <div class="answer-key">
    <details><summary>Question 1</summary><div class="a-content">Sound is longitudinal — its oscillation is along the direction of travel, with no perpendicular "plane" to restrict. Light is transverse — its electric and magnetic fields oscillate perpendicular to the direction of travel, giving a genuine plane of oscillation that a polarizing filter can selectively restrict.</div></details>
    <details><summary>Question 2</summary><div class="a-content">The reflected pulse is inverted (flipped upside down, a 180° phase shift) compared to the original — the defining behavior of reflection off a fixed end, since the end cannot move and must push back with an opposite displacement.</div></details>
    <details><summary>Question 3</summary><div class="a-content">As the ambulance approaches, sound waves are compressed in front of it (shorter wavelength, higher observed frequency, higher pitch). As it moves away, sound waves stretch out behind it (longer wavelength, lower observed frequency, lower pitch) — motion toward the observer always raises pitch, motion away always lowers it.</div></details>
    <details><summary>Question 4</summary><div class="a-content">Low-pitched sounds have longer wavelengths, and diffraction is more pronounced when wavelength is comparable to (or larger than) the size of the opening or obstacle — a longer wavelength diffracts more noticeably around a typical doorway or corner than a higher-pitched, shorter-wavelength sound does.</div></details>
    <details><summary>Question 5</summary><div class="a-content">Light reflects off both the top and bottom surfaces of the thin soap film, and these two reflected waves interfere. Since the film's thickness varies slightly across its surface, different wavelengths (colors) of white light interfere constructively at different thicknesses — different colors appear brightest at different points on the film, producing the swirling colorful pattern.</div></details>
    <details><summary>Question 6</summary><div class="a-content">v = fλ = (250)(1.4) = <strong>350 m/s</strong>.</div></details>
    <details><summary>Question 7</summary><div class="a-content">T = 1/f = 1/40 = <strong>0.025 s</strong>.</div></details>
    <details><summary>Question 8</summary><div class="a-content">λ = c/f = (3.0×10⁸)/(1.0×10⁸) = <strong>3.0 m</strong>. (100 MHz = 1.0×10⁸ Hz.)</div></details>
    <details><summary>Question 9</summary><div class="a-content">f<sub>n</sub> = nv/(2L) = (2)(30)/(2×2.0) = 60/4.0 = <strong>15 Hz</strong>.</div></details>
    <details><summary>Question 10</summary><div class="a-content">f₁ = v/(2L) = 30/4.0 = <strong>7.5 Hz</strong> — exactly half of the second harmonic's frequency found above, since harmonic frequencies are always whole-number multiples of the fundamental.</div></details>
    <details><summary>Question 11</summary><div class="a-content">sinθ = mλ/d = (1)(500×10⁻⁹)/(0.15×10⁻³) ≈ 3.33×10⁻³ → θ ≈ <strong>0.19°</strong>.</div></details>
    <details><summary>Question 12</summary><div class="a-content">Destructive. A path difference of 2.5λ matches the destructive condition, (m + ½)λ, with m = 2 — a half-integer number of wavelengths means the two waves arrive exactly out of step with each other. Only a WHOLE number of wavelengths (1λ, 2λ, 3λ...) gives constructive interference; half-integer multiples always give destructive.</div></details>
    <details><summary>Question 13</summary><div class="a-content">Toward. The observed frequency (550 Hz) is higher than the emitted frequency (500 Hz), and motion toward an observer always raises the observed frequency.</div></details>
    <details><summary>Question 14</summary><div class="a-content">λ = c/f = (3.0×10⁸)/(5.0×10¹⁴) = <strong>6.0 × 10⁻⁷ m</strong> (600 nm, in the visible orange-red range).</div></details>
    <details><summary>Question 15</summary><div class="a-content">Path difference = 2t = 2(200 nm) = <strong>400 nm</strong> — light travels down through the film and back up, crossing the thickness twice.</div></details>
    <details><summary>Question 16</summary><div class="a-content">λ_n = 2L/n = 2(1.6)/4 = 3.2/4 = <strong>0.8 m</strong>.</div></details>
  </div>

  <div class="footer-nav">
    Next up: head to the <strong>Unit 14 QBank</strong>, then finish strong with <strong>Unit 15 — Modern Physics</strong>.
  </div>

</div>
`,
  15: `<div class="hero">
  <div class="eyebrow">Peters Family Homeschool · AP Physics 2</div>
  <h1>Modern Physics</h1>
  <p class="sub">Modern physics — the last unit, and the strangest. Energy comes in chunks, light behaves like particles, matter behaves like waves, and the nucleus has its own set of rules entirely.</p>
  <div class="hero-pills">
    <span class="pill">Exam weight 12–15%</span>
    <span class="pill">8 topics</span>
    <span class="pill">16 practice problems</span>
  </div>
</div>

<div class="toc">
  <div class="toc-label">Jump to a section</div>
  <ol>
    <li><a href="#s151">15.1 Quantum Theory</a></li>
    <li><a href="#s152">15.2 The Bohr Model</a></li>
    <li><a href="#s153">15.3 Spectra</a></li>
    <li><a href="#s154">15.4 Blackbody Radiation</a></li>
    <li><a href="#s155">15.5 Photoelectric Effect</a></li>
    <li><a href="#s156">15.6 Compton Scattering</a></li>
    <li><a href="#s157">15.7 Fission, Fusion & Decay</a></li>
    <li><a href="#s158">15.8 Types of Radioactive Decay</a></li>
    <li><a href="#practice">Practice Set</a></li>
  </ol>
</div>

<div class="wrap">

  <p class="quote">"Every classical intuition you've built over 14 units gets a little bit broken here — on purpose. That's the whole point of this unit." — Unit 15</p>

  <div class="skillbox">
    <span class="tag-label skill">Master This First — Moving Fluently Between E, f, λ, and eV</span>
    <p>More points get lost to unit mix-ups in this unit than to genuine conceptual errors. Keep these forms within reach:</p>
    <ul style="margin:10px 0 0;">
      <li><strong>E = hf</strong> and <strong>E = hc/λ</strong> — the same equation, two forms; pick whichever variable you're actually given.</li>
      <li><strong>hc = 1240 eV·nm</strong> — this version of the constant lets you skip joule/meter conversions entirely when working in nanometers and electron-volts, which is most of the time in this unit.</li>
      <li><strong>1 eV = 1.6×10⁻¹⁹ J</strong> — only convert to joules when a formula specifically demands SI units (like p=mv or F=ma); otherwise, stay in eV.</li>
    </ul>
    <p style="margin-top:10px;">Before calculating anything, decide which unit system the rest of the problem lives in, and commit to it — switching mid-calculation is where most arithmetic errors happen here.</p>
  </div>

  <h2 id="s151"><span class="num">15.1</span>Quantum Theory and Wave-Particle Duality</h2>
  <p>Here's the central, unifying idea running through this entire unit, and it's worth sitting with: light and matter both display BOTH wave-like and particle-like behavior, depending on how you look at them. Not "sometimes one, sometimes the other, and physicists haven't figured out which" — genuinely both, simultaneously, with which behavior shows up depending on the experiment you run.</p>
  <div class="eq"><div class="main">E = hf</div><div class="sub">h = 6.63×10⁻³⁴ J·s = 4.14×10⁻¹⁵ eV·s — Planck's constant</div></div>
  <div class="eq"><div class="main">λ = h/p</div><div class="sub">de Broglie wavelength — even matter has an associated wavelength</div></div>
  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Wave-Particle Duality Is Universal</span>
    <p>Light, normally described as a wave back in Unit 14, also behaves as discrete packets of energy called <strong>photons</strong>. Electrons and other matter, normally described as particles, also have a wavelength associated with their motion. Neither picture — pure wave, pure particle — is complete on its own; which behavior you actually observe often depends entirely on what experiment you happen to be running.</p>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s152"><span class="num">15.2</span>The Bohr Model of Atomic Structure</h2>
  <p>Electrons in an atom can only occupy specific, discrete energy levels — not any energy value in between, ever. This quantization is the entire reason atomic spectra look like sharp, distinct lines instead of a smooth continuous rainbow.</p>
  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Reading an Energy Level Diagram</span>
    <p>AP Physics 2 usually GIVES you the specific energy levels for a problem, as a diagram — something like −5E₀, −3E₀, −2E₀ for n = 1, 2, 3 — rather than expecting you to derive them from scratch. Your job is to correctly find the ENERGY DIFFERENCE between two levels an electron jumps between. That difference is precisely the energy of the photon absorbed or emitted, nothing more complicated than that.</p>
  </div>
  <div class="eq"><div class="main">E<sub>photon</sub> = |E<sub>final</sub> − E<sub>initial</sub>| = hf</div></div>
  <p>An electron dropping to a LOWER energy level <strong>emits</strong> a photon, releasing energy as it goes. An electron jumping to a HIGHER energy level must <strong>absorb</strong> a photon of exactly the right energy — no more, no less, ever.</p>

  <div class="worked">
    <span class="tag-label example">Worked Example 1</span>
    <p><strong>Photon Energy from a Transition.</strong> An electron drops from an energy level at −2.0 eV to a level at −5.0 eV. Find the energy and wavelength of the emitted photon.</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">E<sub>photon</sub> = |(−5.0) − (−2.0)| = 3.0 eV. Using E = hc/λ (rearranged from E=hf and c=fλ), and hc = 1240 eV·nm — a genuinely convenient version of this constant, given directly on the AP reference sheet: λ = hc/E = 1240/3.0 ≈ <strong>413 nm</strong>, falling in the visible violet range. Working in eV and the eV·nm form of hc together, instead of switching over to joules and meters, saves you a lot of unit-conversion hassle on problems shaped exactly like this one.</div>
    </details>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s153"><span class="num">15.3</span>Emission and Absorption Spectra</h2>
  <p>Because atomic energy levels are quantized into fixed, discrete values, atoms only emit or absorb photons at very specific wavelengths — producing a unique "fingerprint" pattern of sharp spectral lines for each individual element.</p>
  <div class="key-idea">
    <span class="tag-label idea">Key Idea — Emission vs. Absorption</span>
    <p>An <strong>emission spectrum</strong> — bright lines on a dark background — shows the specific wavelengths a hot, glowing gas emits as electrons fall to lower energy levels. An <strong>absorption spectrum</strong> — dark lines on a bright continuous background — shows the specific wavelengths a cooler gas absorbs from light passing through it, as electrons jump to higher levels instead. Here's the elegant part: for the SAME element, these two spectra show lines at the exact same wavelengths, just inverted, bright versus dark — because they're both governed by the identical set of energy level gaps underneath.</p>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s154"><span class="num">15.4</span>Blackbody Radiation</h2>
  <p>Any object with a temperature above absolute zero radiates electromagnetic energy across a whole range of wavelengths — the specific pattern of which wavelengths dominate depends on the object's temperature.</p>
  <div class="key-idea">
    <span class="tag-label idea">Key Idea</span>
    <p>Hotter objects radiate more total energy AND shift their peak emission toward SHORTER wavelengths — higher frequency, higher energy. This is exactly why a metal rod glows dull red when moderately hot, but shifts toward white-hot as its temperature climbs further — the peak of its emission is physically shifting toward shorter, higher-energy wavelengths as it heats up.</p>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s155"><span class="num">15.5</span>The Photoelectric Effect</h2>
  <p>Shining light on certain metals can eject electrons from the metal's surface — but only if the light's frequency clears a minimum threshold. This single experimental fact was the historical evidence that light must behave as discrete photons, not just a smooth continuous wave, and it's genuinely one of the most important experiments in the whole history of physics.</p>
  <div class="eq"><div class="main">K<sub>max</sub> = hf − φ</div><div class="sub">φ = work function (minimum energy needed to eject an electron, specific to each metal)</div></div>
  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>Below the threshold frequency — where hf = φ exactly — NO electrons are ejected at all, no matter how bright the light is. Increasing intensity below threshold just means more photons hitting the metal, but each individual photon still doesn't carry enough energy on its own to eject an electron. Above threshold, increasing intensity increases the NUMBER of electrons ejected per second, but does NOT increase each electron's maximum kinetic energy — that's set entirely by frequency, via K<sub>max</sub> = hf − φ, and intensity has no say in it whatsoever.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 2</span>
    <p><strong>Photoelectric Effect Calculation.</strong> A metal has work function 2.3 eV. Light of wavelength 400 nm strikes it. Find the maximum kinetic energy of ejected electrons.</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">First find photon energy: E = hc/λ = 1240/400 = 3.1 eV. Then K<sub>max</sub> = hf − φ = E<sub>photon</sub> − φ = 3.1 − 2.3 = <strong>0.8 eV</strong>. Here's a habit worth building: if the photon energy had come out LESS than 2.3 eV, the correct answer would simply be "no electrons are ejected at all" — always check for that possibility before you report a negative kinetic energy, which is physically meaningless and should be a red flag that something's off.</div>
    </details>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s156"><span class="num">15.6</span>Compton Scattering</h2>
  <p>When a high-energy photon collides with an electron, it scatters off at a new angle carrying LESS energy — and correspondingly, a longer wavelength — than it had before. The electron absorbs the difference as kinetic energy.</p>
  <div class="key-idea">
    <span class="tag-label idea">Key Idea</span>
    <p>Compton scattering provides direct evidence that photons carry real momentum, not just energy. Treating the photon-electron interaction exactly like a genuine two-particle collision — complete with conservation of both momentum and energy — is what makes the wavelength shift come out correctly. This is further, independent confirmation of light's particle-like behavior, building directly on the photoelectric effect's evidence from a completely different angle.</p>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s157"><span class="num">15.7</span>Fission, Fusion, and Nuclear Decay</h2>
  <p>The nucleus itself can transform — splitting apart in fission, combining together in fusion, or spontaneously emitting particles in radioactive decay — releasing enormous amounts of energy compared to ordinary chemical reactions, all governed by Einstein's mass-energy relationship.</p>
  <div class="eq"><div class="main">E = mc²</div><div class="sub">c² = (3.00×10⁸)² ≈ 9.0×10¹⁶ m²/s² — a huge number, which is why tiny mass changes release huge energy</div></div>
  <div class="heylook">
    <div class="heylook-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>Mass defect — the idea that ties fission AND fusion together</div>
    <p>The total mass of a nucleus's separate parts — protons and neutrons individually — is always slightly MORE than the mass of the assembled nucleus itself. That missing mass, called the mass defect, was converted into the binding energy that holds the nucleus together, via E = mc². Here's the part that surprises people: fission (splitting heavy nuclei) and fusion (combining light nuclei) BOTH release energy, for the exact same underlying reason — in each case, the resulting nuclei end up more tightly bound, with lower total mass, than the starting materials. The "lost" mass becomes released energy either way, whether you're splitting apart or combining.</p>
  </div>

  <div class="divider">· · ·</div>

  <h2 id="s158"><span class="num">15.8</span>Types of Radioactive Decay</h2>
  <table class="formula-table">
    <tr><th>Decay type</th><th>Emitted particle</th><th>Effect on nucleus</th></tr>
    <tr><td>Alpha (α)</td><td>Helium nucleus (2p + 2n)</td><td>Mass number −4, atomic number −2</td></tr>
    <tr><td>Beta-minus (β⁻)</td><td>Electron</td><td>Mass number unchanged, atomic number +1 (neutron → proton)</td></tr>
    <tr><td>Beta-plus (β⁺)</td><td>Positron</td><td>Mass number unchanged, atomic number −1 (proton → neutron)</td></tr>
    <tr><td>Gamma (γ)</td><td>High-energy photon</td><td>No change to mass or atomic number — just energy release</td></tr>
  </table>
  <div class="trap">
    <span class="tag-label trap">Watch Out For This</span>
    <p>In every nuclear reaction, BOTH the total mass number (top number, protons + neutrons) AND the total atomic number (bottom number, protons/charge) must balance on both sides of the equation. This is really the nuclear equivalent of balancing a chemical equation, and honestly, it's the fastest way to check your own work or figure out an unknown decay product when you're stuck.</p>
  </div>

  <div class="worked">
    <span class="tag-label example">Worked Example 3</span>
    <p><strong>Identifying a Decay Product.</strong> Uranium-238 (atomic number 92) undergoes alpha decay. Identify the resulting daughter nucleus.</p>
    <details class="solution"><summary></summary>
      <div class="sol-content">Alpha decay removes 4 from the mass number and 2 from the atomic number: mass number 238 − 4 = 234; atomic number 92 − 2 = 90. Atomic number 90 corresponds to Thorium. The daughter nucleus is <strong>Thorium-234</strong>. Quick check before you move on: mass numbers balance (238 = 234 + 4) and atomic numbers balance (92 = 90 + 2) — confirming the answer is self-consistent, which is a habit worth keeping on every decay problem.</div>
    </details>
  </div>

  <div class="recap">
    <span class="tag-label recap">Before You Move On</span>
    <ul>
      <li>Explain wave-particle duality for both light and matter.</li>
      <li>Find photon energy from an energy-level transition, using given energy diagrams.</li>
      <li>Distinguish emission and absorption spectra for the same element.</li>
      <li>Apply K<sub>max</sub> = hf − φ, including recognizing when no electrons are ejected at all.</li>
      <li>Explain Compton scattering as evidence for photon momentum.</li>
      <li>Use E = mc² and the concept of mass defect for fission/fusion energy release.</li>
      <li>Balance mass number and atomic number across all four types of radioactive decay.</li>
    </ul>
  </div>

  <h2 id="practice"><span class="num">📘</span>Unit 15 Practice Set</h2>
  <p>Work every problem before checking the answer.</p>

  <h3>Conceptual</h3>
  <div class="practice-item"><span class="qnum-badge">1</span><span>Explain why increasing the intensity of light below the threshold frequency still ejects zero electrons in the photoelectric effect.</span></div>
  <div class="practice-item"><span class="qnum-badge">2</span><span>Explain why an element's emission and absorption spectra show lines at the same wavelengths.</span></div>
  <div class="practice-item"><span class="qnum-badge">3</span><span>Explain the concept of mass defect and how it relates to nuclear binding energy.</span></div>
  <div class="practice-item"><span class="qnum-badge">4</span><span>A metal bar is heated from dull red to white-hot. Describe how its blackbody radiation spectrum changes.</span></div>
  <div class="practice-item"><span class="qnum-badge">5</span><span>Explain what "wave-particle duality" means, using both light and matter as examples.</span></div>

  <h3>Numerical</h3>
  <div class="practice-item"><span class="qnum-badge">6</span><span>Find the energy of a photon with frequency 6.0×10¹⁴ Hz. (h = 6.63×10⁻³⁴ J·s)</span></div>
  <div class="practice-item"><span class="qnum-badge">7</span><span>Find the energy in eV of a photon with wavelength 300 nm. (hc = 1240 eV·nm)</span></div>
  <div class="practice-item"><span class="qnum-badge">8</span><span>An electron drops from an energy level at −1.5 eV to −4.5 eV. Find the wavelength of the emitted photon.</span></div>
  <div class="practice-item"><span class="qnum-badge">9</span><span>A metal has work function 4.0 eV. Light of energy 3.0 eV strikes it. How many electrons are ejected?</span></div>
  <div class="practice-item"><span class="qnum-badge">10</span><span>A metal has work function 2.0 eV. Light of wavelength 400 nm strikes it. Find the maximum kinetic energy of ejected electrons.</span></div>
  <div class="practice-item"><span class="qnum-badge">11</span><span>Find the de Broglie wavelength of an electron (mass 9.11×10⁻³¹ kg) moving at 2.0×10⁶ m/s. (h = 6.63×10⁻³⁴ J·s)</span></div>
  <div class="practice-item"><span class="qnum-badge">12</span><span>Find the energy released when 0.0020 kg of mass is converted entirely into energy. (c = 3.0×10⁸ m/s)</span></div>
  <div class="practice-item"><span class="qnum-badge">13</span><span>Radon-222 (atomic number 86) undergoes alpha decay. Identify the resulting daughter nucleus (mass number and atomic number).</span></div>
  <div class="practice-item"><span class="qnum-badge">14</span><span>Carbon-14 (atomic number 6) undergoes beta-minus decay. Identify the resulting daughter nucleus.</span></div>
  <div class="practice-item"><span class="qnum-badge">15</span><span>A nucleus undergoes gamma decay. How do its mass number and atomic number change?</span></div>
  <div class="practice-item"><span class="qnum-badge">16</span><span>Find the stopping voltage needed to stop electrons with maximum kinetic energy 1.8 eV in a photoelectric experiment.</span></div>

  <h3 style="margin-top:30px;">Answer Key</h3>
  <div class="answer-key">
    <details><summary>Question 1</summary><div class="a-content">Below threshold frequency, each individual photon carries less energy than the work function φ — no single photon has enough energy to eject an electron, no matter how many photons (higher intensity) arrive per second. Electron ejection depends on a single photon's energy exceeding φ, not on the total energy delivered over time.</div></details>
    <details><summary>Question 2</summary><div class="a-content">Both spectra are governed by the exact same set of quantized energy level gaps within that element's atoms — emission shows the wavelengths released as electrons fall to lower levels, absorption shows the wavelengths absorbed as electrons jump to higher levels, and since it's the same set of energy gaps either way, the wavelengths match exactly, just displayed as bright lines (emission) versus dark lines (absorption).</div></details>
    <details><summary>Question 3</summary><div class="a-content">A nucleus's mass is always slightly less than the sum of its individual protons and neutrons' masses when separate. This "missing" mass (the mass defect) was converted into binding energy via E = mc² when the nucleus formed — that binding energy is what holds the nucleus together against the mutual repulsion of its protons.</div></details>
    <details><summary>Question 4</summary><div class="a-content">As the bar heats up, its blackbody spectrum shifts toward shorter wavelengths (higher frequencies) — the peak emission moves from the red end of the visible spectrum toward the blue/white end, and total radiated energy increases substantially.</div></details>
    <details><summary>Question 5</summary><div class="a-content">Wave-particle duality means both light and matter exhibit properties of BOTH waves and particles. Light (usually described as a wave) also behaves as discrete photons (the photoelectric effect). Matter (usually described as particles) also has an associated wavelength (de Broglie wavelength, λ = h/p) governing its wave-like behavior. Neither the pure-wave nor pure-particle picture is complete alone.</div></details>
    <details><summary>Question 6</summary><div class="a-content">E = hf = (6.63×10⁻³⁴)(6.0×10¹⁴) ≈ <strong>4.0 × 10⁻¹⁹ J</strong>.</div></details>
    <details><summary>Question 7</summary><div class="a-content">E = hc/λ = 1240/300 ≈ <strong>4.1 eV</strong>.</div></details>
    <details><summary>Question 8</summary><div class="a-content">E<sub>photon</sub> = |(−4.5) − (−1.5)| = 3.0 eV. λ = hc/E = 1240/3.0 ≈ <strong>413 nm</strong>.</div></details>
    <details><summary>Question 9</summary><div class="a-content"><strong>Zero electrons ejected.</strong> The photon energy (3.0 eV) is less than the work function (4.0 eV), so no single photon carries enough energy to eject an electron, regardless of how many photons arrive.</div></details>
    <details><summary>Question 10</summary><div class="a-content">Photon energy: E = hc/λ = 1240/400 = 3.1 eV. K<sub>max</sub> = E − φ = 3.1 − 2.0 = <strong>1.1 eV</strong>.</div></details>
    <details><summary>Question 11</summary><div class="a-content">First find momentum: p = mv = (9.11×10⁻³¹)(2.0×10⁶) ≈ 1.82×10⁻²⁴ kg·m/s. Then λ = h/p = (6.63×10⁻³⁴)/(1.82×10⁻²⁴) ≈ <strong>3.6 × 10⁻¹⁰ m</strong>.</div></details>
    <details><summary>Question 12</summary><div class="a-content">E = mc² = (0.0020)(3.0×10⁸)² = (0.0020)(9.0×10¹⁶) = <strong>1.8 × 10¹⁴ J</strong> — an enormous amount of energy from a tiny amount of mass.</div></details>
    <details><summary>Question 13</summary><div class="a-content">Mass number 222 − 4 = 218; atomic number 86 − 2 = 84 (Polonium). Daughter nucleus: <strong>Polonium-218</strong>.</div></details>
    <details><summary>Question 14</summary><div class="a-content">Beta-minus decay: mass number unchanged (14); atomic number 6 + 1 = 7 (Nitrogen). Daughter nucleus: <strong>Nitrogen-14</strong>.</div></details>
    <details><summary>Question 15</summary><div class="a-content">Neither changes. Gamma decay releases a high-energy photon without altering the nucleus's composition — mass number and atomic number both stay <strong>exactly the same</strong>.</div></details>
    <details><summary>Question 16</summary><div class="a-content">Since qV<sub>stop</sub> = K<sub>max</sub>, and using elementary charge for the ejected electron, the stopping voltage in volts numerically equals the kinetic energy in eV: V<sub>stop</sub> = <strong>1.8 V</strong>.</div></details>
  </div>

  <div class="footer-nav">
    <strong>That's all seven units.</strong> Head to the Unit 15 QBank to finish drilling, then start rotating back through earlier units to keep everything sharp before exam day.
  </div>

</div>

`,
};


const UNITS = [
  { id: 9, name: "Thermodynamics", weight: "15–18%", ready: true },
  { id: 10, name: "Electric Force, Field & Potential", weight: "15–18%", ready: true },
  { id: 11, name: "Electric Circuits", weight: "15–18%", ready: true },
  { id: 12, name: "Magnetism & Electromagnetism", weight: "12–15%", ready: true },
  { id: 13, name: "Geometric Optics", weight: "12–15%", ready: true },
  { id: 14, name: "Waves, Sound & Physical Optics", weight: "12–15%", ready: true },
  { id: 15, name: "Modern Physics", weight: "12–15%", ready: true },
];

const QUESTIONS = {
  9: [
    { id: "9-1", topic: "9.1 Kinetic Theory", stem: "A sealed, rigid container holds a sample of monatomic ideal gas. The gas is heated until its absolute temperature doubles. Which statement correctly describes the change in average particle speed?", choices: ["The average speed doubles, since speed is proportional to temperature.", "The average speed increases by a factor of √2, since kinetic energy (not speed) is proportional to temperature.", "The average speed stays the same, since volume is constant.", "The average speed quadruples, since kinetic energy depends on the square of speed."], correct: 1, explanation: "Temperature is proportional to average kinetic energy, not speed directly: K<sub>avg</sub> = (3/2)k<sub>BT</sub>. Since K depends on v², doubling T doubles K<sub>avg</sub>, and K ∝ v² means v ∝ √K. So the speed scales with the square root of the temperature ratio: √2, not 2. This is a classic AP trap — always check whether a quantity you're scaling is linear or squared in the governing equation before scaling it directly." },
    { id: "9-2", topic: "9.1 Kinetic Theory", stem: "A gas sample is cooled at constant volume. Which change to its Maxwell-Boltzmann speed distribution correctly describes what happens?", choices: ["The curve shifts left (lower peak speed) and becomes taller and narrower.", "The curve shifts right (higher peak speed) and becomes shorter and wider.", "The curve shifts left and becomes shorter and wider.", "The curve does not change shape, only its horizontal position."], correct: 0, explanation: "Cooling reduces average kinetic energy, so the distribution's peak moves toward lower speeds. Because the total number of particles (area under the curve) can't change, a leftward shift is paired with the curve growing taller and narrower — fewer particles are spread across a wider range of high speeds, so more of them bunch up near the new, lower average." },
    { id: "9-3", topic: "9.2 Ideal Gas Law", stem: "A fixed amount of ideal gas is compressed to half its original volume while its temperature is held constant. What happens to its pressure?", choices: ["It is cut in half.", "It doubles.", "It stays the same, since temperature is constant.", "It quadruples."], correct: 1, explanation: "At constant temperature and constant n, PV = nRT means PV is constant (Boyle's Law). If V is halved, P must double to keep the product PV unchanged. This is a direct application of comparing two states of the ideal gas law and canceling the variable that's held fixed — here, temperature." },
    { id: "9-4", topic: "9.2 Ideal Gas Law", stem: "A gas sample is held at constant pressure while its absolute temperature is tripled. What happens to its volume?", choices: ["It triples.", "It stays the same.", "It is cut to one third.", "It increases by a factor of 9."], correct: 0, explanation: "At constant pressure and constant n, V/T is constant (Charles's Law), which falls directly out of PV = nRT. Tripling T at fixed P requires V to triple as well to keep the ratio constant. Note this is a linear (not squared) relationship — unlike the kinetic theory speed question, volume and temperature scale together one-to-one here." },
    { id: "9-5", topic: "9.3 Thermal Energy Transfer", stem: "Two blocks, A and B, made of different materials but with equal mass, are heated by the same amount of energy Q. Block A has a higher specific heat than Block B. Which block undergoes the larger temperature change?", choices: ["Block A, because higher specific heat means more temperature change per unit of energy.", "Block B, because it has a lower specific heat, so the same energy produces a larger ΔT.", "Both undergo the same ΔT, since they received the same energy.", "It cannot be determined without knowing the initial temperatures."], correct: 1, explanation: "From Q = mcΔT, solving for ΔT gives ΔT = Q/(mc). A higher specific heat c means a larger denominator, so a smaller ΔT for the same Q and m — the material resists temperature change more. Block B, with the lower specific heat, heats up more for the same energy input. This is the same reasoning that explains why water (high specific heat) is slow to heat up or cool down compared to metals." },
    { id: "9-6", topic: "9.3 Thermal Energy Transfer", stem: "A metal rod conducts heat between two reservoirs at fixed temperatures. If the rod's length is doubled while its cross-sectional area and the temperature difference stay the same, what happens to the rate of heat transfer?", choices: ["It doubles.", "It is cut in half.", "It stays the same.", "It is cut to one quarter."], correct: 1, explanation: "The conduction rate is Q/Δt = kAΔT/L. Length L appears in the denominator, so doubling L halves the rate of heat transfer — a longer path means heat has farther to travel, so it moves more slowly through the material. Students sometimes confuse this with the area A, which appears in the numerator and would have the opposite effect if doubled." },
    { id: "9-7", topic: "9.4 First Law of Thermodynamics", stem: "A gas undergoes an isothermal expansion, absorbing heat Q from its surroundings. Which of the following is true?", choices: ["ΔU = 0, and the gas does positive work on its surroundings equal to Q.", "ΔU = Q, and no work is done.", "ΔU is negative, since the gas is expanding.", "ΔU = Q, and the gas does work equal to Q on itself."], correct: 0, explanation: "For an ideal gas, internal energy depends only on temperature. Isothermal means temperature doesn't change, so ΔU = 0 regardless of what else happens. From the first law, ΔU = Q + W, so 0 = Q + W, meaning W (work done ON the gas) = −Q. Since the gas absorbed positive Q, W on the gas is negative — meaning the gas does positive work on its surroundings, and that work has magnitude Q. This is a very common FRQ setup: isothermal process, comparing Q and W." },
    { id: "9-8", topic: "9.4 First Law of Thermodynamics", stem: "A gas is compressed at constant volume by an external heater that adds energy to it (no piston motion occurs). What can be said about the work done on the gas and its internal energy?", choices: ["W = 0, and ΔU = Q, so internal energy increases.", "W = Q, and ΔU = 0.", "W is negative, since the gas is being compressed.", "ΔU = 0, since volume did not change."], correct: 0, explanation: "This question is testing whether you conflate 'compression' with 'work' correctly — work done on a gas via pressure-volume changes requires an actual volume change (W = −PΔV for a constant-pressure case, or more generally the area under a P-V curve). Here, volume is explicitly constant (isochoric), so no P-V work is done regardless of what's happening to pressure: W = 0. All the added heat goes directly into internal energy: ΔU = Q. This is why isochoric processes are the simplest case of the first law — one term drops out entirely." },
    { id: "9-9", topic: "9.4 First Law / P-V Diagrams", stem: "On a P-V diagram, which of the four classic processes (isobaric, isochoric, isothermal, adiabatic) is represented by a vertical line segment?", choices: ["Isobaric", "Isochoric", "Isothermal", "Adiabatic"], correct: 1, explanation: "A vertical line on a P-V diagram means volume is not changing while pressure does — that's the definition of an isochoric (constant-volume) process. An isobaric process is a horizontal line (constant pressure); isothermal and adiabatic are both curves following PV = constant-type relationships, with adiabatic falling more steeply." },
    { id: "9-10", topic: "9.5 Experimental Design", stem: "A student wants to experimentally determine the specific heat of an unknown metal sample using a calorimeter of known, negligible heat capacity, a known mass of water, and a thermometer. Which piece of data is NOT needed for this experiment?", choices: ["The initial temperature of the water.", "The mass of the metal sample.", "The atmospheric pressure in the room.", "The equilibrium temperature reached by the water and metal together."], correct: 2, explanation: "The calorimetry calculation (heat lost by the metal equals heat gained by the water) requires only masses, specific heats, and temperature changes — atmospheric pressure doesn't appear anywhere in Q = mcΔT. This kind of question checks whether you actually understand which variables belong in the governing equation, rather than just recognizing 'more measurements' as always better." },
    { id: "9-11", topic: "9.6 Entropy", stem: "A cup of hot coffee is left on a table and slowly cools to room temperature. Which statement correctly applies the Second Law of Thermodynamics to this process?", choices: ["The entropy of the coffee decreases as it cools, and this is consistent with the second law because the coffee is not an isolated system.", "The total entropy of the coffee-plus-room system increases, since heat is flowing spontaneously from hot to cold.", "The entropy of the room decreases as it absorbs heat, violating the second law.", "Entropy is not applicable to this process since no phase change occurs."], correct: 1, explanation: "Heat flowing spontaneously from a hotter object (the coffee) to a colder surroundings (the room) is exactly the kind of process the second law describes as entropy-increasing overall. Even though the coffee itself loses some entropy as it cools, the room gains more than enough entropy to make the total (coffee + room) increase — that's why the process happens spontaneously in this direction and never spontaneously in reverse." },
    { id: "9-12", topic: "9.2 Ideal Gas Law", stem: "Two identical rigid containers hold ideal gas at the same temperature and pressure. Container A holds twice as many moles of gas as Container B. How do their volumes compare?", choices: ["Container A has twice the volume of Container B.", "Container A has half the volume of Container B.", "The containers have the same volume, since they're identical.", "The relationship cannot be determined without knowing the molar mass."], correct: 0, explanation: "This is a bit of a trick in the wording — 'identical containers' describes their physical construction, not that they're forced to hold the same volume of gas in this scenario. Using PV = nRT with P and T fixed, V is proportional to n. Twice the moles means twice the volume of gas, assuming the container can accommodate it. The key skill is applying V ∝ n directly from the ideal gas law." },
    { id: "9-13", topic: "9.1 Kinetic Theory", stem: "A gas sample is heated so its absolute temperature quadruples. By what factor does the average particle speed increase?", choices: ["2", "4", "8", "16"], correct: 0, explanation: "Since K<sub>avg</sub> ∝ T and K<sub>avg</sub> ∝ v², speed scales as the square root of temperature: v ∝ √T. Quadrupling T means speed increases by √4 = 2. This is the same skill as the earlier 'temperature doubles' question, just with different numbers — the pattern to internalize is always take the square root of whatever factor T changes by." },
    { id: "9-14", topic: "9.1 Kinetic Theory", stem: "Gas X has molecules with twice the mass of Gas Y's molecules. Both gases are at the same temperature. How do their average kinetic energies and average speeds compare?", choices: ["Gas X has twice the average kinetic energy and the same average speed as Gas Y.", "Gas X and Gas Y have equal average kinetic energy, but Gas X has a lower average speed.", "Gas X has half the average kinetic energy and a higher average speed than Gas Y.", "Gas X and Gas Y have equal average kinetic energy and equal average speed."], correct: 1, explanation: "Average kinetic energy depends only on temperature (K<sub>avg</sub> = (3/2)k<sub>BT</sub>), not on particle mass — so equal temperatures mean equal average kinetic energies, regardless of mass. But since K = ½mv², for the heavier gas (X) to have the same K as the lighter gas (Y), X's particles must be moving slower on average. This is a frequently tested pairing: same T means same K<sub>avg</sub> always, but never assume same T means same speed when masses differ." },
    { id: "9-15", topic: "9.2 Ideal Gas Law", stem: "A gas occupies 4.0 L at a pressure of 2.0 atm and temperature 250 K. It is allowed to expand to 8.0 L while its pressure drops to 1.0 atm. What is the new temperature?", choices: ["125 K", "250 K", "500 K", "1000 K"], correct: 1, explanation: "Using the combined gas law, P₁V₁/T₁ = P₂V₂/T₂: (2.0)(4.0)/250 = (1.0)(8.0)/T₂. The left side is 8.0/250 = 0.032; solving, T₂ = 8.0/0.032 = 250 K. Notice the pressure halved while volume doubled — those two changes exactly offset each other, so temperature doesn't change at all." },
    { id: "9-16", topic: "9.2 Ideal Gas Law", stem: "A rigid, sealed container of gas is initially at pressure P and temperature T. It is heated until the pressure reads 4P. What is the new temperature, in terms of T?", choices: ["T/4", "2T", "4T", "16T"], correct: 2, explanation: "Constant volume means P/T is constant (Gay-Lussac's Law): P/T = 4P/T<sub>new</sub>, so T<sub>new</sub> = 4T. Pressure and temperature scale together one-to-one at constant volume, so whatever factor pressure changes by, temperature changes by that same factor." },
    { id: "9-17", topic: "9.2 Ideal Gas Law", stem: "A balloon contains 0.40 mol of ideal gas at a pressure of 1.0 atm and volume 9.8 L. Approximately what is the temperature of the gas? (R = 0.0821 L·atm/(mol·K))", choices: ["150 K", "200 K", "300 K", "400 K"], correct: 2, explanation: "Using PV = nRT: T = PV/(nR) = (1.0)(9.8)/[(0.40)(0.0821)] = 9.8/0.0328 ≈ 299 K, so about 300 K. A direct plug-into-the-equation problem rather than a state comparison." },
    { id: "9-18", topic: "9.3 Thermal Transfer", stem: "A 0.50 kg block of iron (c = 450 J/(kg·°C)) is heated with 9000 J of energy from an initial temperature of 20°C. What is its final temperature?", choices: ["40°C", "50°C", "60°C", "80°C"], correct: 2, explanation: "Using Q = mcΔT: ΔT = Q/(mc) = 9000/(0.50 × 450) = 40°C. That 40°C is the CHANGE in temperature, not the final temperature. Final temperature = 20°C + 40°C = 60°C. Always circle back to what the question actually asked for before selecting an answer." },
    { id: "9-19", topic: "9.3 Thermal Transfer", stem: "Two slabs of insulation, made of the same material and having the same area, conduct heat between two fixed-temperature reservoirs. Slab 2 is three times as thick as Slab 1. How does the rate of heat conduction through Slab 2 compare to Slab 1?", choices: ["Slab 2 conducts heat three times as fast as Slab 1.", "Slab 2 conducts heat at one-third the rate of Slab 1.", "Slab 2 conducts heat at the same rate as Slab 1.", "Slab 2 conducts heat nine times as fast as Slab 1."], correct: 1, explanation: "Conduction rate is Q/Δt = kAΔT/L, with L (thickness) in the denominator. Tripling the thickness cuts the rate to one-third, since the heat has three times as far to travel through the same material and area." },
    { id: "9-20", topic: "9.3 Thermal Transfer", stem: "A hot metal block and a cool water bath are placed in an insulated container and reach thermal equilibrium. Which of the following is necessarily true?", choices: ["The block and water end up at the same temperature, and each undergoes the same temperature CHANGE (|ΔT|).", "The block and water end up at the same temperature, but do not necessarily undergo the same temperature change.", "The block and water undergo the same temperature change, but do not necessarily end up at the same final temperature.", "Neither the final temperature nor the heat exchanged need be related between the two objects."], correct: 1, explanation: "Thermal equilibrium means, by definition, the block and water end up at the same final temperature. What's conserved is energy: heat lost by the block equals heat gained by the water. But Q = mcΔT for each object, and mass/specific heat generally differ — so matching Q values does NOT mean matching ΔT values." },
    { id: "9-21", topic: "9.4 First Law of Thermodynamics", stem: "A gas is compressed at a constant pressure of 3.0 × 10⁵ Pa, and its volume decreases from 0.040 m³ to 0.025 m³. How much work is done ON the gas?", choices: ["−4500 J", "0 J", "+4500 J", "+12000 J"], correct: 2, explanation: "W (on the gas) = −PΔV = −(3.0 × 10⁵)(0.025 − 0.040) = +4500 J. The positive sign makes sense: the gas is being compressed, so something outside is pushing in on it and doing positive work on the gas." },
    { id: "9-22", topic: "9.4 First Law of Thermodynamics", stem: "A gas undergoes an adiabatic compression (Q = 0). What can be said about its internal energy and temperature?", choices: ["ΔU = 0 and temperature stays constant, since no heat is exchanged.", "ΔU is positive and temperature increases, since positive work is done on the gas.", "ΔU is negative and temperature decreases, since the gas is being compressed.", "ΔU cannot be determined without knowing the exact pressure and volume values."], correct: 1, explanation: "For an adiabatic process, Q = 0, so the first law becomes ΔU = W. Compression means positive work is done ON the gas, so ΔU is positive — and since U depends only on temperature for an ideal gas, temperature must increase." },
    { id: "9-23", topic: "9.4 First Law / P-V Diagrams", stem: "On a P-V diagram, a horizontal line segment represents which of the four classic thermodynamic processes?", choices: ["Isobaric", "Isochoric", "Isothermal", "Adiabatic"], correct: 0, explanation: "A horizontal line means pressure stays constant while volume changes — that's an isobaric (constant-pressure) process, by definition." },
    { id: "9-24", topic: "9.6 Entropy", stem: "A gas is allowed to expand freely into a vacuum inside an insulated container (no heat exchange, no work done). What happens to the entropy of the gas?", choices: ["It decreases, since the gas is doing work to expand.", "It stays the same, since no heat was exchanged with the surroundings.", "It increases, since the gas now has more possible positions/configurations available to its particles.", "It cannot change unless the temperature changes."], correct: 2, explanation: "Free expansion into a vacuum increases the number of possible arrangements available to the gas particles, which increases entropy — even though no heat was exchanged and no work was done. Entropy is fundamentally about accessible microscopic configurations, not just about heat flow." },
    { id: "9-25", topic: "9.5 Experimental Design", stem: "In a calorimetry experiment to find the specific heat of an unknown metal, which of the following would introduce the LEAST additional experimental uncertainty?", choices: ["Taking a long time to transfer the heated metal sample into the calorimeter.", "Using a calorimeter cup with significant heat capacity of its own, without accounting for it.", "Using a thermometer with fine temperature graduations and taking multiple trials.", "Estimating the mass of the metal sample rather than measuring it precisely."], correct: 2, explanation: "A precise thermometer and multiple trials are the standard moves for reducing uncertainty — they don't introduce new sources of error, they reduce existing ones. The other choices each introduce a real problem: heat loss during slow transfer, an unaccounted-for calorimeter heat capacity, or a corrupted mass measurement." },
    { id: "9-26", topic: "9.1 Kinetic Theory", stem: "A rigid, sealed container holds a fixed amount of ideal gas at temperature T. Additional gas of the same type is added while volume and temperature are held fixed. What happens to the Maxwell-Boltzmann speed distribution curve?", choices: ["It shifts right, to higher speeds.", "It shifts left, to lower speeds.", "It keeps the same shape and position, but grows taller (more particles at every speed).", "It keeps the same position, but grows shorter and wider."], correct: 2, explanation: "Temperature alone sets the shape and position of the Maxwell-Boltzmann distribution — average speed depends only on T and particle mass, not on how many particles there are. Adding more gas at the same T just scales up the number of particles at every speed, so the curve grows taller (more total area) while its shape and peak position stay exactly the same." },
    { id: "9-27", topic: "9.1 Kinetic Theory", stem: "A sample of helium gas and a sample of argon gas are each at a temperature such that their average kinetic energies per particle are equal. What must be true about their temperatures?", choices: ["Helium's temperature must be higher, since it's the lighter gas.", "Argon's temperature must be higher, since it's the heavier gas.", "The two temperatures must be equal.", "The temperatures cannot be compared without knowing the particle masses."], correct: 2, explanation: "Average kinetic energy depends only on temperature (K<sub>avg</sub> = (3/2)k<sub>BT</sub>) — it doesn't depend on particle mass or identity at all. Equal average kinetic energies directly imply equal temperatures, full stop. Particle mass affects how a given kinetic energy translates into average speed, but it has no bearing on the K–T relationship itself." },
    { id: "9-28", topic: "9.1 Kinetic Theory", stem: "A gas is compressed isothermally (constant temperature) to half its original volume. How do the average particle speed and the collision frequency with the container walls compare to before compression?", choices: ["Speed doubles; collision frequency doubles.", "Speed stays the same; collision frequency increases.", "Speed increases; collision frequency stays the same.", "Both speed and collision frequency stay the same."], correct: 1, explanation: "Isothermal means temperature is unchanged, so average kinetic energy — and therefore average speed — is unchanged, since speed depends only on temperature. But with half the volume, particles travel shorter distances between wall collisions, so they hit the walls more often. This is exactly why pressure rises during isothermal compression: more frequent collisions, not harder ones." },
    { id: "9-29", topic: "9.1 Kinetic Theory", stem: "Find the average translational kinetic energy of gas particles at a temperature of 227°C.", choices: ["1.0 × 10⁻²⁰ J", "4.7 × 10⁻²¹ J", "3.1 × 10⁻²¹ J", "6.9 × 10⁻²¹ J"], correct: 0, explanation: "First convert to kelvin: 227°C + 273 = 500 K. Then K<sub>avg</sub> = (3/2)(1.38×10⁻²³)(500) ≈ 1.0×10⁻²⁰ J. Choice B (4.7×10⁻²¹ J) is what you'd get by mistakenly plugging in 227 directly without converting to kelvin — a reminder that this equation only works in kelvin." },
    { id: "9-30", topic: "9.1 Kinetic Theory", stem: "A sample of nitrogen gas is heated until its average kinetic energy per particle increases by a factor of 9. By what factor does the average particle speed increase?", choices: ["3", "9", "27", "81"], correct: 0, explanation: "Since K<sub>avg</sub> ∝ v², speed scales as the square root of the kinetic energy ratio: √9 = 3. Whenever kinetic energy (or temperature, since they're proportional) changes by some factor, speed changes by the square root of that factor." },
    { id: "9-31", topic: "9.1 Kinetic Theory", stem: "Which of the following changes to a gas sample, considered independently of the others, would NOT increase its pressure?", choices: ["Increasing the temperature at constant volume and particle count.", "Increasing the number of particles at constant volume and temperature.", "Decreasing the volume at constant particle count and temperature.", "Decreasing the number of particles at constant volume and temperature."], correct: 3, explanation: "Removing particles at constant volume and temperature means fewer collisions with the walls per second, which decreases pressure — the opposite of the other three changes, which all increase collision frequency or force and therefore increase pressure." },
    { id: "9-32", topic: "9.2 Ideal Gas Law", stem: "A gas sample at 3.0 atm, 6.0 L, and 400 K has both its pressure and volume doubled. Find the new temperature.", choices: ["400 K", "800 K", "1600 K", "3200 K"], correct: 2, explanation: "Using P₁V₁/T₁ = P₂V₂/T₂: (3.0)(6.0)/400 = (6.0)(12)/T₂. Since both P and V doubled, PV increased by a factor of 4 (2×2), so T must also increase by a factor of 4: T₂ = 4 × 400 = 1600 K." },
    { id: "9-33", topic: "9.2 Ideal Gas Law", stem: "A sample contains 0.20 mol of ideal gas at 350 K in a 3.0 L container. Find the pressure. (R = 0.0821 L·atm/(mol·K))", choices: ["0.95 atm", "1.9 atm", "3.8 atm", "5.7 atm"], correct: 1, explanation: "Using PV = nRT: P = nRT/V = (0.20)(0.0821)(350)/3.0 ≈ 1.9 atm. This is a direct plug-in problem — good practice for staying comfortable with the equation outside of the more common two-state comparison format." },
    { id: "9-34", topic: "9.2 Ideal Gas Law", stem: "A rigid container of gas is cooled at constant volume from 600 K to 300 K. What happens to its pressure?", choices: ["It doubles.", "It is cut in half.", "It is cut to one quarter.", "It stays the same."], correct: 1, explanation: "At constant volume, P/T is constant. Halving the temperature (600 K → 300 K) halves the pressure. Same relationship as the pressure-quadrupling examples elsewhere in this unit, just running in the cooling direction instead of heating." },
    { id: "9-35", topic: "9.2 Ideal Gas Law", stem: "Container A (4.0 L) holds gas at 2.0 atm; Container B (2.0 L) holds the same type of gas at 5.0 atm, both at the same temperature. A valve connecting them is opened and the gas mixes at the same temperature. Find the final pressure.", choices: ["2.3 atm", "3.0 atm", "3.5 atm", "7.0 atm"], correct: 1, explanation: "Since n ∝ PV at fixed T, the total 'PV' before mixing is (2.0)(4.0) + (5.0)(2.0) = 8.0 + 10.0 = 18.0. After mixing, the total volume is 6.0 L, so the final pressure is 18.0/6.0 = 3.0 atm. This is really just a weighted-average calculation dressed up in gas-law language." },
    { id: "9-36", topic: "9.2 Ideal Gas Law", stem: "A weather balloon with volume 2.5 m³ is filled at sea level (1.0 atm, 300 K). It rises to an altitude where pressure is 0.25 atm and temperature is 250 K. Find its new volume.", choices: ["2.1 m³", "5.0 m³", "8.3 m³", "10 m³"], correct: 2, explanation: "Using P₁V₁/T₁ = P₂V₂/T₂: (1.0)(2.5)/300 = (0.25)(V₂)/250. Solving, V₂ = (1.0)(2.5)(250)/[(300)(0.25)] ≈ 8.3 m³. The huge pressure drop at altitude dominates over the temperature drop, so the balloon expands substantially." },
    { id: "9-37", topic: "9.2 Ideal Gas Law", stem: "A sealed syringe's plunger is slowly pulled out at constant temperature, increasing the enclosed gas's volume. What shape does a graph of pressure vs. volume take during this process?", choices: ["A straight line with negative slope.", "A hyperbola-shaped curve, decreasing (P inversely proportional to V).", "A straight line with positive slope.", "An exponential decay curve."], correct: 1, explanation: "At constant temperature, PV = constant (Boyle's Law), so P = constant/V — an inverse relationship, which graphs as a hyperbola, not a straight line. This is the same curve shape referenced for isothermal processes on P-V diagrams elsewhere in this unit." },
    { id: "9-38", topic: "9.2 Ideal Gas Law", stretch: true, stem: "A gas starts at pressure P, volume V, temperature T. First, its volume triples at constant pressure. Then, starting from that new state, its temperature is tripled at constant volume. Find the final pressure in terms of P.", choices: ["P", "3P", "9P", "27P"], correct: 1, explanation: "Step 1 (isobaric): tripling V at constant P triples T as well (V/T constant), giving an intermediate state of P, 3V, 3T. Step 2 (isochoric): tripling T again from 3T to 9T at constant V means pressure also triples (P/T constant): P<sub>final</sub> = P × (9T/3T) = 3P. Multi-step problems like this reward tracking one state transition at a time rather than trying to combine everything at once. Real AP multiple-choice questions are almost always single-step — this kind of chained, multi-stage reasoning is more typical of FRQ sub-parts than a single MC question, so treat this as good practice for that style of thinking rather than a preview of a typical bubble-sheet question." },
    { id: "9-39", topic: "9.2 Ideal Gas Law", stem: "A scuba tank (12 L) contains gas at 200 atm and 300 K. All the gas is released into the atmosphere, expanding to 1.0 atm and cooling to 250 K. Find the final volume of the released gas.", choices: ["200 L", "2000 L", "2400 L", "20,000 L"], correct: 1, explanation: "Using P₁V₁/T₁ = P₂V₂/T₂: (200)(12)/300 = (1.0)(V₂)/250. Solving, V₂ = (200)(12)(250)/[(300)(1.0)] = 2000 L. The huge pressure drop (200 atm to 1 atm) is the dominant factor, expanding the gas by roughly two orders of magnitude even though temperature also drops." },
    { id: "9-40", topic: "9.3 Thermal Transfer", stem: "Two rods of the same material and cross-sectional area conduct heat between the same fixed temperatures. Rod 2 is twice as long as Rod 1. If Rod 1 transfers heat at rate R, find Rod 2's rate in terms of R.", choices: ["R/2", "R", "2R", "4R"], correct: 0, explanation: "Conduction rate is Q/Δt = kAΔT/L, with length L in the denominator. Doubling the length halves the rate, since heat has twice as far to travel through the same material and cross-section." },
    { id: "9-41", topic: "9.3 Thermal Transfer", stem: "A rod conducts heat at rate R between two reservoirs with temperature difference ΔT. If the temperature difference is tripled while the rod's length and area stay the same, find the new rate in terms of R.", choices: ["R/3", "R", "3R", "9R"], correct: 2, explanation: "Conduction rate is directly proportional to ΔT: Q/Δt = kAΔT/L. Tripling ΔT triples the rate — a linear relationship, unlike the inverse relationship with length." },
    { id: "9-42", topic: "9.3 Thermal Transfer", stem: "A material with k = 0.20 W/(m·K), area 0.50 m², and thickness 0.10 m separates two regions with a temperature difference of 15°C. Find the rate of heat conduction.", choices: ["1.5 W", "7.5 W", "15 W", "150 W"], correct: 2, explanation: "Q/Δt = kAΔT/L = (0.20)(0.50)(15)/0.10 = 15 W. A direct plug-in using the conduction rate equation." },
    { id: "9-43", topic: "9.3 Thermal Transfer", stem: "A 0.40 kg block of lead (c = 130 J/(kg·°C)) at 200°C is dropped into 0.20 kg of water (c = 4180 J/(kg·°C)) at 25°C in an insulated container. Find the equilibrium temperature.", choices: ["28°C", "35°C", "50°C", "112°C"], correct: 1, explanation: "Setting heat lost equal to heat gained: (0.40)(130)(200 − T<sub>f</sub>) = (0.20)(4180)(T<sub>f</sub> − 25), which simplifies to 52(200 − T<sub>f</sub>) = 836(T<sub>f</sub> − 25). Solving gives T<sub>f</sub> ≈ 35°C — very close to the water's starting temperature, since lead's low specific heat means it gives up its heat with only a modest temperature change of its own, while water's high specific heat barely budges." },
    { id: "9-44", topic: "9.3 Thermal Transfer", stem: "A hot object with a large mc value is placed in contact with a cool object with a small mc value, in an insulated system. Where does the final equilibrium temperature end up?", choices: ["Closer to the hot object's initial temperature.", "Closer to the cool object's initial temperature.", "Exactly the average of the two initial temperatures.", "Equal to the hot object's initial temperature."], correct: 0, explanation: "A large mc value means an object strongly resists changing temperature — it takes a lot of energy to shift its temperature even a little. So the equilibrium temperature is pulled toward whichever object has the larger mc, in this case the hot object. This is the same underlying idea as the aluminum-and-water worked example, generalized into a direct rule." },
    { id: "9-45", topic: "9.3 Thermal Transfer", stretch: true, stem: "A wall is built from two layers of different materials, same area, but different thicknesses and conductivities. In steady state, what quantity is the same for both layers?", choices: ["The rate of heat flow through each layer.", "The temperature difference across each layer.", "The thermal conductivity of each layer.", "The temperature gradient (ΔT/L) across each layer."], correct: 0, explanation: "In steady state, no heat can be accumulating anywhere inside the wall — whatever heat flows into one layer must flow out the other side and into the next layer, so the rate of heat flow (Q/Δt) must be identical through both layers. The temperature difference across each layer generally differs, since it depends on that layer's own k and L. This is closely analogous to current being the same through resistors in series, which shows up again in the circuits unit. Composite/multi-layer conduction isn't a named AP Physics 2 topic on its own — it's a natural extension of the single-layer equation, useful for building real intuition, but you're unlikely to see a multi-layer conduction question exactly like this on the actual exam." },
    { id: "9-46", topic: "9.3 Thermal Transfer", stem: "A student adds known amounts of heat Q to a fixed mass m of a substance and measures the resulting temperature change ΔT for each trial. What should be graphed, and how is the specific heat c found from the graph?", choices: ["Q vs. ΔT; c = slope ÷ m", "Q vs. ΔT; c = 1 ÷ (slope × m)", "ΔT vs. Q; c = slope × m", "Q vs. ΔT; c = slope × m"], correct: 0, explanation: "From Q = mcΔT, plotting Q (vertical) against ΔT (horizontal) gives a line through the origin with slope = mc. Since m is known, c = slope/m. Recognizing which combination of measured quantities produces a straight line — and correctly isolating the unknown from the slope — is a core AP Physics 2 experimental-design skill." },
    { id: "9-47", topic: "9.3 Thermal Transfer", stem: "Three identical blocks (equal mass and specific heat) at 10°C, 30°C, and 50°C are brought into contact in an insulated system. Find the equilibrium temperature.", choices: ["20°C", "30°C", "40°C", "90°C"], correct: 1, explanation: "Because all three blocks have equal mc, the equilibrium temperature is simply the arithmetic mean: (10 + 30 + 50)/3 = 30°C. This simple averaging only works because mc is identical for all three objects — if masses or specific heats differed, you'd need to weight the average accordingly, the same way unequal mc values produce unequal temperature swings in two-object calorimetry." },
    { id: "9-48", topic: "9.3 Thermal Transfer", stem: "Two rods of the same length and material conduct heat between the same reservoirs. Rod 2 has twice the cross-sectional area of Rod 1. How do their conduction rates compare?", choices: ["Rod 2 conducts twice as fast as Rod 1.", "Rod 2 conducts half as fast as Rod 1.", "Rod 2 conducts four times as fast as Rod 1.", "They conduct at the same rate."], correct: 0, explanation: "Area A sits in the numerator of Q/Δt = kAΔT/L, so doubling the area doubles the rate — a direct proportionality, unlike length, which sits in the denominator and has an inverse effect. Comparing this to the length-based question elsewhere in this set is a good way to make sure you have the equation's structure memorized correctly, not just half of it." },
    { id: "9-49", topic: "9.3 Thermal Transfer", stem: "A window pane (k = 0.96 W/(m·K)), area 1.5 m², thickness 0.0050 m, separates an indoor temperature of 22°C from an outdoor temperature of −8°C. Find the rate of heat loss through the window.", choices: ["288 W", "1440 W", "4320 W", "8640 W"], correct: 3, explanation: "ΔT = 22 − (−8) = 30°C. Q/Δt = kAΔT/L = (0.96)(1.5)(30)/0.0050 = 8640 W. Thin, poorly-insulating materials like glass conduct heat at surprisingly high rates — this is part of why double-pane windows (with an insulating air or gas gap) are so much more efficient." },
    { id: "9-50", topic: "9.4 First Law of Thermodynamics", stem: "A gas undergoes a complete cyclic process, returning to its exact initial state after several steps. What is ΔU for the entire cycle?", choices: ["Zero, always.", "Equal to the net heat absorbed during the cycle.", "Equal to the net work done on the gas during the cycle.", "Cannot be determined without knowing the specific path."], correct: 0, explanation: "For an ideal gas, internal energy depends only on temperature. Since a complete cycle returns the gas to its exact starting state — including its starting temperature — ΔU for the full cycle is always exactly zero, no matter what path the cycle took or how many steps were involved. This is a general property of state functions." },
    { id: "9-51", topic: "9.4 First Law of Thermodynamics", stretch: true, stem: "For the same complete cyclic process (ΔU = 0), what must be true about the net heat Q and net work W (on the gas) over the full cycle?", choices: ["Q<sub>net</sub> and W<sub>net</sub> must both individually equal zero.", "Q<sub>net</sub> must equal −W<sub>net</sub> (they're equal in magnitude, opposite in sign).", "Q<sub>net</sub> must equal W<sub>net</sub> (they're equal in magnitude and sign).", "No relationship can be determined between them."], correct: 1, explanation: "From the first law, ΔU = Q + W. Since ΔU = 0 for a full cycle, Q<sub>net</sub> + W<sub>net</sub> = 0, meaning Q<sub>net</sub> = −W<sub>net</sub>. Physically, this means any net work done on the gas during the cycle is exactly balanced by an equal amount of heat leaving the gas (or vice versa) — the cycle can absorb heat and convert it into net work output, which is exactly the principle behind heat engines. Heat engines and cycle efficiency aren't a named topic in the AP Physics 2 course description, so treat this as background understanding rather than something you'll be tested on directly in this form." },
    { id: "9-52", topic: "9.4 First Law of Thermodynamics", stem: "A gas absorbs 800 J of heat while doing 300 J of work on its surroundings (expanding). Find ΔU for the gas.", choices: ["500 J", "800 J", "1100 J", "300 J"], correct: 0, explanation: "Work done BY the gas on its surroundings means work done ON the gas is negative: W = −300 J. Then ΔU = Q + W = 800 + (−300) = 500 J." },
    { id: "9-53", topic: "9.4 First Law of Thermodynamics", stem: "A gas releases 400 J of heat to its surroundings while 250 J of work is done ON it (compression). Find ΔU for the gas.", choices: ["−650 J", "−150 J", "150 J", "650 J"], correct: 1, explanation: "Heat released means Q = −400 J. Work done ON the gas is positive: W = +250 J. ΔU = Q + W = −400 + 250 = −150 J." },
    { id: "9-54", topic: "9.4 First Law of Thermodynamics", stem: "A gas is compressed while simultaneously being cooled, so its temperature decreases throughout the process. What must be true about ΔU, Q, and W (on the gas)?", choices: ["ΔU is negative, Q is negative, W is positive.", "ΔU is positive, Q is positive, W is negative.", "ΔU is negative, Q is positive, W is negative.", "ΔU cannot be determined without numerical values."], correct: 0, explanation: "Since temperature decreases, and internal energy of an ideal gas depends only on temperature, ΔU must be negative — this part is certain without any numbers. Compression means positive work is done ON the gas (W positive). Since ΔU = Q + W and ΔU is negative while W is positive, Q must be negative enough to make the sum negative — consistent with the gas actively losing heat (cooling) even as it's compressed." },
    { id: "9-55", topic: "9.4 First Law of Thermodynamics", stem: "A gas expands adiabatically (Q = 0). What happens to its temperature?", choices: ["It increases.", "It decreases.", "It stays the same.", "It cannot be determined without knowing the pressure and volume."], correct: 1, explanation: "With Q = 0, the first law becomes ΔU = W. Expansion means the gas does positive work on its surroundings, so work done ON the gas is negative, making ΔU negative — and since U depends only on temperature, temperature decreases. This is the mirror image of adiabatic compression, where positive work done ON the gas raises its temperature." },
    { id: "9-56", topic: "9.4 First Law / P-V Diagrams", stem: "A process on a P-V diagram is represented by a straight diagonal line (both P and V changing simultaneously) connecting two states. Is this consistent with any of the four classic named processes (isobaric, isochoric, isothermal, adiabatic)?", choices: ["Yes — it must be isothermal, since both variables change.", "Yes — it must be adiabatic, since both variables change.", "No — none of the four classic processes are represented by a straight diagonal line.", "Yes — any straight line on a P-V diagram represents one of the four named processes."], correct: 2, explanation: "Isobaric and isochoric processes are straight lines, but only horizontal or vertical, respectively. Isothermal and adiabatic processes both involve curves (roughly hyperbola-shaped, following PV ≈ constant-type relationships), not straight diagonal lines. A straight diagonal line on a P-V diagram doesn't correspond to any of the four named processes — a useful check against over-generalizing 'straight line' to mean 'named process.'" },
    { id: "9-57", topic: "9.4 First Law of Thermodynamics", stem: "The AP Physics 2 equation sheet defines W as the work done ON a system. Many textbooks instead define work as the work done BY the gas. If a gas expands at constant pressure P from volume V₁ to V₂, what is the work done BY the gas, using the textbook convention?", choices: ["W<sub>by</sub> = −P(V₂ − V₁)", "W<sub>by</sub> = P(V₂ − V₁)", "W<sub>by</sub> = P(V₁ − V₂)", "W<sub>by</sub> = 0"], correct: 1, explanation: "The AP convention gives work done ON the gas as W<sub>on</sub> = −PΔV = −P(V₂ − V₁). Work done BY the gas is simply the opposite sign: W<sub>by</sub> = −W<sub>on</sub> = P(V₂ − V₁). Since this is an expansion (V₂ > V₁), W<sub>by</sub> comes out positive, as expected — the gas does positive work on its surroundings as it pushes outward. Being able to flip between these two conventions without getting turned around is a genuinely important skill, since not every resource you'll encounter uses the AP sign convention." },
    { id: "9-58", topic: "9.4 First Law of Thermodynamics", stem: "3.0 mol of monatomic ideal gas is heated at constant volume from 280 K to 410 K. Find Q for this process.", choices: ["1620 J", "3240 J", "4860 J", "9720 J"], correct: 2, explanation: "At constant volume, W = 0, so Q = ΔU = (3/2)nRΔT = (3/2)(3.0)(8.31)(130) ≈ 4860 J. Since W = 0, all of the heat added goes directly into raising the gas's internal energy." },
    { id: "9-59", topic: "9.4 First Law of Thermodynamics", stem: "The same volume change ΔV occurs during two separate isobaric processes, one at constant pressure P₁ and the other at a higher constant pressure P₂. Compare the magnitudes of work done in each process.", choices: ["The higher-pressure process involves more work.", "The higher-pressure process involves less work.", "Both processes involve the same amount of work, since ΔV is the same.", "The relationship depends on the direction of the volume change."], correct: 0, explanation: "Work magnitude for an isobaric process is |W| = PΔV. For the same ΔV, a higher constant pressure directly produces a larger magnitude of work — a straightforward proportionality, but one worth confirming explicitly rather than assuming ΔV alone determines the work." },
    { id: "9-60", topic: "9.5 Experimental Design", stem: "A student varies the temperature difference ΔT across a sample of known area A and thickness L, measuring the resulting rate of heat transfer Q/Δt for each trial. What should be graphed to determine the material's thermal conductivity k, and how is k found?", choices: ["Q/Δt vs. ΔT; k = slope × L/A", "Q/Δt vs. ΔT; k = slope × A/L", "ΔT vs. Q/Δt; k = slope × L/A", "Q/Δt vs. 1/ΔT; k = 1/slope"], correct: 0, explanation: "Rearranging Q/Δt = kAΔT/L, plotting Q/Δt against ΔT gives a line through the origin with slope = kA/L. Solving for the target unknown, k = slope × L/A. This is a standalone version of the graphical-analysis skill from the study guide's thermal conductivity worked example." },
    { id: "9-61", topic: "9.5 Experimental Design", stem: "A student wants to experimentally verify Boyle's Law (pressure vs. volume at constant temperature) using a syringe connected to a pressure sensor. Which procedure best ensures the temperature stays constant throughout the trials?", choices: ["Move the plunger quickly to minimize the time available for heat exchange.", "Move the plunger slowly, allowing the gas to reach thermal equilibrium with the room at each volume.", "Insulate the syringe to prevent any heat exchange with the surroundings.", "Perform the experiment in a vacuum chamber."], correct: 1, explanation: "Slow, quasi-static volume changes give the gas time to exchange heat with the room and stay at (approximately) room temperature throughout — genuinely isothermal conditions. Moving quickly does the opposite, trapping heat inside the gas and pushing the process toward adiabatic behavior instead, which would corrupt an experiment specifically designed to test the isothermal relationship." },
    { id: "9-62", topic: "9.5 Experimental Design", stretch: true, stem: "In a calorimetry experiment (hot sample dropped into water in a calorimeter cup), a student forgets to account for the calorimeter cup's own heat capacity when calculating the sample's specific heat. How does the calculated value of the sample's specific heat compare to its true value?", choices: ["The calculated value will be too high.", "The calculated value will be too low.", "The calculated value will be unaffected.", "It could be too high or too low, depending on the sign of the temperature change."], correct: 1, explanation: "Some of the heat the sample actually released also went into warming the calorimeter cup, not just the water. If the student's equation only accounts for heat gained by the water, it underestimates the total heat that left the sample — and since that underestimated heat is what gets divided to solve for specific heat, the calculated value comes out too low. Predicting the DIRECTION of a systematic error, rather than just identifying that uncertainty exists, is a step beyond what most AP2 multiple-choice questions ask — real exam experimental-design questions more often ask you to describe a procedure or identify what to graph, rather than reason through the sign of a resulting bias." },
    { id: "9-63", topic: "9.6 Entropy", stem: "Which of the following processes, occurring within an isolated system, is consistent with the Second Law of Thermodynamics?", choices: ["Heat flows spontaneously from a colder object to a hotter one.", "A gas spontaneously compresses itself into a smaller region without any external work.", "Ice spontaneously forms from liquid water at room temperature.", "Two gases that have been mixed together do not spontaneously separate back into their original pure components."], correct: 3, explanation: "The first three choices all describe spontaneous decreases in entropy, which the second law forbids for an isolated system. The fourth choice describes the normal, expected behavior of mixed gases — they don't spontaneously un-mix, because that would require entropy to spontaneously decrease. This is the same 'arrow of time' idea behind why spilled coffee never spontaneously reheats itself." },
    { id: "9-64", topic: "9.6 Entropy", stretch: true, stem: "A gas undergoes a reversible isothermal expansion, absorbing heat Q from a thermal reservoir at temperature T while doing work on its surroundings. Compare the entropy change of the gas to the entropy change of the reservoir.", choices: ["The gas gains more entropy than the reservoir loses.", "The gas loses entropy while the reservoir gains even more.", "The two entropy changes are equal in magnitude and opposite in sign, since the process is reversible.", "Entropy isn't defined for reversible processes."], correct: 2, explanation: "For an idealized reversible process, the total entropy change of the universe (gas plus reservoir) is exactly zero — this is actually the defining feature of a reversible process. So whatever entropy the gas gains, the reservoir loses an equal amount. This contrasts with irreversible processes like the hot-coffee-cooling example, where total entropy strictly increases rather than staying at zero. This idea goes a bit beyond what AP Physics 2 typically tests directly — real exam entropy questions usually stay at the 'hot to cold, more disorder' level — but it's worth understanding as the deeper reasoning underneath that simpler rule." },
    { id: "9-65", topic: "9.6 Entropy", stem: "Consider three processes in an isolated system: (I) heat flows from a hot object to a cold object, (II) a gas expands freely into a vacuum, (III) two different gases mix together. Which statement is correct?", choices: ["All three processes result in an entropy increase for the isolated system.", "Only processes I and II result in an entropy increase.", "Only process III results in an entropy increase.", "None of these processes change the total entropy, since energy is conserved in each."], correct: 0, explanation: "Every one of these is a classic entropy-increasing process: heat flowing hot-to-cold, free expansion into more available space, and mixing of previously separated substances all increase the number of ways the system's particles can be arranged. This question ties together the different entropy-increasing scenarios covered across the unit into one comprehensive check — recognizing the common thread (more accessible configurations) across superficially different setups." },
  ],
  10: [
    { id: "10-1", topic: "10.1 Coulomb's Law", stem: "Sphere A carries charge −10 μC and Sphere B carries charge −40 μC. They are held a fixed distance apart. How does the magnitude of the force Sphere A exerts on Sphere B compare to the magnitude of the force Sphere B exerts on Sphere A?", choices: ["Sphere B exerts four times as much force on Sphere A as Sphere A exerts on Sphere B.", "Sphere A exerts four times as much force on Sphere B as Sphere B exerts on Sphere A.", "The forces are equal in magnitude, by Newton's third law.", "The force cannot be determined without knowing the distance between the spheres."], correct: 2, explanation: "Newton's third law applies to electric forces just as it does to any other force: the force each object exerts on the other is always equal in magnitude and opposite in direction, regardless of how different the two charge magnitudes are. Coulomb's Law itself confirms this — |F| = k|q₁q₂|/r² is symmetric in q₁ and q₂. Distance isn't needed here — a common trap is assuming distance is always required for a force comparison, when here it cancels out entirely." },
    { id: "10-2", topic: "10.2 Charging Processes", stem: "A negatively charged rod is brought close to (but never touching) a neutral conducting sphere. While the rod remains in place, the sphere is briefly connected to the ground via a wire, and then the ground wire is disconnected. Finally, the rod is removed. What is the final charge on the sphere?", choices: ["Negative, the same sign as the rod.", "Positive, opposite in sign to the rod.", "Neutral, since the rod never touched the sphere.", "It depends on how long the rod was held near the sphere."], correct: 1, explanation: "This is the classic charging-by-induction sequence. The negative rod repels electrons in the conductor away from the near side; when grounded, those repelled electrons flow out through the ground wire. Disconnecting the ground traps the sphere in a state with a deficit of electrons — positive charge — opposite in sign to the rod. Induction always leaves the OPPOSITE sign from the charging object; conduction (touching) always leaves the same sign." },
    { id: "10-3", topic: "10.3 Electric Fields", stem: "At a certain point in space, the electric field due to a system of charges is zero. Which of the following must be true at that point?", choices: ["There are no charges anywhere in the system.", "The electric potential at that point must also be zero.", "A test charge placed at that point would experience no net electric force.", "All the charges in the system must be equidistant from that point."], correct: 2, explanation: "Field is defined as force per unit charge (E = F/q), so a zero field at a point means any charge placed there feels zero net force. Potential is a separate scalar quantity that doesn't have to be zero just because field is zero — field is the rate of change of potential, not potential itself." },
    { id: "10-4", topic: "10.3 Electric Fields", stem: "Two point charges, +Q and +2Q, are separated by a fixed distance. At which point along the line connecting them (other than at infinity) could the net electric field be zero?", choices: ["The midpoint between the two charges.", "A point closer to the +Q charge than to the +2Q charge, between the two charges.", "A point closer to the +2Q charge than to the +Q charge, between the two charges.", "The net field cannot be zero anywhere along this line, since both charges are positive."], correct: 1, explanation: "Between two like charges, the fields from each point toward each other, so they can cancel somewhere between them. The cancellation point must be closer to the WEAKER charge (+Q), because being closer to the smaller charge lets its closer-range field magnitude match the larger charge's field from farther away." },
    { id: "10-5", topic: "10.5 Electric Potential", stem: "Point charges of −6 μC and −6 μC are placed at equal distances from Point P, on opposite sides. What is the electric potential at Point P due to these two charges?", choices: ["Zero, since the two negative potentials cancel.", "Positive, since two negatives multiplied together give a positive result.", "Negative, and equal to the sum of the two individual (negative) potentials.", "The potential cannot be determined without knowing the exact distances."], correct: 2, explanation: "Electric potential is a scalar, so contributions from multiple charges are added algebraically — including their signs — not combined like vectors, and definitely not multiplied. Two equal negative charges at equal distances from P each contribute an equal negative potential, and those add together to give a more negative total." },
    { id: "10-6", topic: "10.5 Electric Potential", stem: "Equipotential lines and electric field lines are sketched for a region of space. Which statement correctly describes their relationship?", choices: ["They are always parallel to each other at every point.", "They are always perpendicular to each other at every point.", "They can cross at points where the field is strongest.", "There is no required geometric relationship between them."], correct: 1, explanation: "Field lines and equipotential lines are always perpendicular wherever they intersect. Moving along an equipotential line involves zero work, and the electric force can only do zero work on a displacement if the force is perpendicular to that displacement." },
    { id: "10-7", topic: "10.6 Capacitors", stem: "A parallel plate capacitor is connected to a battery that maintains a constant voltage across it. While still connected, a dielectric material is inserted between the plates, filling the gap completely. What happens to the charge stored on the capacitor?", choices: ["The charge decreases, since the dielectric reduces the electric field.", "The charge increases, since the dielectric increases the capacitance while voltage stays fixed.", "The charge stays the same, since Q = CΔV and neither variable changes.", "The charge becomes zero, since the dielectric is an insulator."], correct: 1, explanation: "Inserting a dielectric increases capacitance: C = κε₀A/d, and κ > 1. Since the capacitor stays connected to a battery holding ΔV constant, and Q = CΔV, an increase in C with fixed ΔV means Q must increase — more charge flows onto the plates from the battery." },
    { id: "10-8", topic: "10.7 Conservation of Electric Energy", stem: "A proton is released from rest at a point where the electric potential is +200 V and moves through a region of electric field to a point where the potential is +50 V. What happens to the proton's kinetic energy?", choices: ["It decreases, since the proton moved to a region of lower potential.", "It increases, since the proton moved to a region of lower potential.", "It stays the same, since only the electric field (not potential) affects kinetic energy.", "It cannot be determined without knowing the distance traveled."], correct: 1, explanation: "Using W = −qΔV = ΔK: ΔV = 50 − 200 = −150 V, and q is positive. So ΔK = −qΔV = positive — kinetic energy increases. A positive charge released from rest always accelerates toward lower potential, just like a mass rolling downhill." },
    { id: "10-9", topic: "10.4 Electric Potential Energy", stem: "A positive charge and a negative charge are held fixed a certain distance apart. If the distance between them is doubled, what happens to the electric potential energy of the system?", choices: ["It doubles in magnitude, and remains negative.", "It is cut in half in magnitude, and remains negative.", "It doubles in magnitude, and becomes positive.", "It is cut in half in magnitude, and becomes positive."], correct: 1, explanation: "For a positive-negative pair, U = (1/4πε₀)(q₁q₂/r) is negative. U depends on 1/r, so doubling r cuts the magnitude of U in half — but the sign doesn't change, since the charges' signs haven't changed." },
    { id: "10-10", topic: "10.1–10.3 Mixed", stem: "A small object with mass m and positive charge q hangs in equilibrium from an insulating string inside a region with a uniform horizontal electric field E and vertical gravitational field g. Which of the following must be true about the string's angle from vertical?", choices: ["The string hangs exactly vertical, since only gravity acts on the object.", "The string makes a nonzero angle from vertical, determined by the ratio qE to mg.", "The string makes a 90° angle from vertical, since the electric field is horizontal.", "The angle cannot be determined without knowing the object's charge-to-mass ratio numerically."], correct: 1, explanation: "The object has two forces besides tension: gravity (mg, down) and the electric force (qE, horizontal). For equilibrium, tension balances both — the string tilts until tan(θ) = qE/mg. A nonzero angle must exist as long as both qE and mg are nonzero." },
    { id: "10-11", topic: "10.1 Coulomb's Law", stem: "Two point charges of +2.0 μC and +3.0 μC are separated by 0.30 m. Find the magnitude of the force between them.", choices: ["0.06 N", "0.6 N", "6 N", "60 N"], correct: 1, explanation: "Using F = k|q₁q₂|/r² = (9.0×10⁹)(2.0×10⁻⁶)(3.0×10⁻⁶)/(0.30)² = (9.0×10⁹)(6.0×10⁻¹²)/0.090 ≈ 0.6 N." },
    { id: "10-12", topic: "10.1 Coulomb's Law", stem: "If the distance between two point charges is tripled, by what factor does the Coulomb force between them change?", choices: ["1/3", "1/9", "3", "9"], correct: 1, explanation: "Coulomb's Law follows an inverse-square relationship: F ∝ 1/r². Tripling the distance divides the force by 3² = 9." },
    { id: "10-13", topic: "10.1 Coulomb's Law", stem: "Two identical charges +Q each experience a mutual force of magnitude F when separated by distance r. If each charge is doubled to +2Q and the distance is also doubled to 2r, find the new force in terms of F.", choices: ["F/4", "F", "4F", "F/16"], correct: 1, explanation: "New force = k(2Q)(2Q)/(2r)² = k(4Q²)/(4r²) = kQ²/r² = F. The charge product quadruples (2×2) while r² also quadruples (2²), and the two factors of 4 exactly cancel — a good reminder to track every variable that changes, not just one at a time." },
    { id: "10-14", topic: "10.1 Coulomb's Law", stem: "Three point charges lie on a line: +Q at x = 0, +Q at x = d, and +2Q at x = 2d. Find the magnitude of the net force on the charge at x = d, in terms of k, Q, and d.", choices: ["0", "kQ²/d²", "2kQ²/d²", "3kQ²/d²"], correct: 1, explanation: "The charge at x = 0 repels the charge at x = d in the +x direction with magnitude kQ²/d². The charge at x = 2d (which is +2Q) repels the charge at x = d in the −x direction with magnitude k(Q)(2Q)/d² = 2kQ²/d². The net force is 2kQ²/d² − kQ²/d² = kQ²/d², directed in the −x direction (toward the smaller charge)." },
    { id: "10-15", topic: "10.1 Coulomb's Law", stem: "A charge of +5.0 μC is placed 0.20 m from a charge of −5.0 μC. Find the magnitude of the force between them.", choices: ["0.56 N", "2.8 N", "5.6 N", "11 N"], correct: 2, explanation: "F = k|q₁q₂|/r² = (9.0×10⁹)(5.0×10⁻⁶)(5.0×10⁻⁶)/(0.20)² = (9.0×10⁹)(2.5×10⁻¹¹)/0.040 ≈ 5.6 N. The force magnitude only depends on the charge magnitudes and distance — the fact that one charge is negative affects the direction (attraction) but not the size of the force." },
    { id: "10-16", topic: "10.1 Coulomb's Law", stem: "Which of the following changes would increase the magnitude of the electric force between two point charges by the largest factor: (A) doubling one charge, (B) doubling both charges, (C) halving the distance, or (D) doubling both charges AND halving the distance simultaneously?", choices: ["A", "B", "C", "D"], correct: 3, explanation: "A gives a factor of 2. B gives a factor of 4 (both charges in the numerator double). C gives a factor of 4 (inverse-square: halving r squares to a factor of 4 in the force). D combines both effects: 4 (from the charges) × 4 (from the distance) = 16, by far the largest factor. Combined changes multiply their individual factors together." },
    { id: "10-17", topic: "10.1 Coulomb's Law", stem: "Two small charged spheres hang from the same point by identical strings, repelling each other into a symmetric V shape with each string at angle θ from vertical. If the mass of each sphere is doubled while the charges and separation stay the same, how does θ change?", choices: ["It increases.", "It decreases.", "It stays the same.", "It cannot be determined."], correct: 1, explanation: "The equilibrium angle satisfies tan(θ) = F<sub>electric</sub>/(mg). Since the electric force is unchanged (same charges, same separation) but mass doubles, the ratio F<sub>electric</sub>/(mg) is cut in half, so θ decreases — the heavier spheres hang closer to vertical, since gravity now plays a relatively larger role in the balance." },
    { id: "10-18", topic: "10.2 Charging Processes", stem: "A conducting sphere with net charge +8e touches an identical conducting sphere with net charge −2e. After they're separated, what is the charge on each sphere?", choices: ["+3e on each sphere.", "+8e and −2e, unchanged.", "+6e and 0.", "+4e and +2e."], correct: 0, explanation: "When identical conductors touch, the total charge redistributes equally between them. Total charge = +8e + (−2e) = +6e, split evenly gives +3e on each sphere." },
    { id: "10-19", topic: "10.2 Charging Processes", stem: "Complete the comparison: charging by induction always leaves the object with a final charge _______ in sign compared to the charging rod, while charging by conduction always leaves the object with a final charge _______ in sign.", choices: ["opposite; the same", "the same; opposite", "opposite; opposite", "the same; the same"], correct: 0, explanation: "Induction (never touching, then grounding while the rod is still nearby) always produces a charge opposite to the rod. Conduction (direct contact) always produces a charge of the same sign as the charging object. These two processes are, in this sense, exact opposites of each other." },
    { id: "10-20", topic: "10.2 Charging Processes", stem: "A negatively charged balloon sticks to a neutral insulating wall. Which phenomenon best explains this attraction?", choices: ["Charging by conduction between the balloon and the wall.", "Charging by induction, requiring free electrons to flow through the wall.", "Polarization of the wall's molecules, without any net charge transfer to the wall.", "Charging by friction between the balloon and the surrounding air."], correct: 2, explanation: "Insulators don't have free electrons that can flow, so true induction (which requires a path for charge to escape) can't happen. Instead, the balloon's nearby charge causes each of the wall's molecules to polarize slightly — their electron clouds shift toward or away from the balloon — creating a net attraction between the balloon and the now slightly-polarized wall surface, with zero net charge transferred." },
    { id: "10-21", topic: "10.2 Charging Processes", stem: "A neutral conductor is charged by induction using a positively charged rod, ending up negatively charged. If the same experiment is repeated with a negatively charged rod instead, what is the final charge on the conductor?", choices: ["Negative", "Positive", "Neutral", "Depends on the magnitude of the rod's charge"], correct: 1, explanation: "Induction always leaves the object with a charge opposite in sign to the charging rod. A negative rod therefore leaves the conductor positively charged — exactly the mirror image of the positive-rod case." },
    { id: "10-22", topic: "10.2 Charging Processes", stem: "Which of the following is the best example of a conductor, in which excess charge placed anywhere on the object quickly spreads across its entire surface?", choices: ["A copper sphere", "A glass rod", "A rubber balloon", "A wooden ruler"], correct: 0, explanation: "Metals like copper have abundant free (delocalized) electrons that can move throughout the material, allowing charge to redistribute rapidly across the whole surface. Glass, rubber, and wood are all insulators — their electrons are bound to individual atoms and can't flow freely." },
    { id: "10-23", topic: "10.2 Charging Processes", stem: "A student rubs a plastic rod with wool, leaving the rod negatively charged and the wool positively charged. What physical mechanism explains why the two objects end up with opposite charges?", choices: ["Electrons transfer from the wool to the rod during rubbing, conserving total charge.", "The two objects polarize each other without any charge transfer.", "Charge flows between the objects until they reach the same electric potential.", "Excess charge flows from both objects into the ground."], correct: 0, explanation: "Charging by friction works by transferring electrons from one material to the other — the exact direction depends on the two materials' relative tendency to hold onto electrons. The rod ends up with a surplus of electrons (negative), and the wool ends up with a matching deficit (positive), with total charge conserved across the whole rod-plus-wool system." },
    { id: "10-24", topic: "10.3 Electric Fields", stem: "Find the magnitude of the electric field at a point 0.50 m from a point charge of +4.0 μC.", choices: ["7.2 × 10⁴ N/C", "1.44 × 10⁵ N/C", "2.9 × 10⁵ N/C", "5.8 × 10⁵ N/C"], correct: 1, explanation: "E = kq/r² = (9.0×10⁹)(4.0×10⁻⁶)/(0.50)² = (3.6×10⁴)/0.25 = 1.44×10⁵ N/C." },
    { id: "10-25", topic: "10.3 Electric Fields", stem: "A charge of −3.0 μC experiences a force of 0.060 N when placed in an external electric field. Find the magnitude of the field and its direction relative to the force.", choices: ["2.0 × 10⁴ N/C, same direction as the force", "2.0 × 10⁴ N/C, opposite direction to the force", "5.0 × 10⁻⁵ N/C, same direction as the force", "5.0 × 10⁻⁵ N/C, opposite direction to the force"], correct: 1, explanation: "Magnitude: E = F/|q| = 0.060/(3.0×10⁻⁶) = 2.0×10⁴ N/C. Since the charge is negative, the force on it points opposite to the field direction (E = F/q, and dividing by a negative q flips the direction) — so the field points opposite to the given force." },
    { id: "10-26", topic: "10.3 Electric Fields", stem: "Field lines are sketched for a dipole consisting of a +Q charge and a −Q charge. Which statement correctly describes the pattern?", choices: ["Lines emanate from −Q and terminate on +Q.", "Lines emanate from +Q and curve around to terminate on −Q, densest along the line connecting them.", "Lines form closed loops that never touch either charge.", "Lines point straight from +Q to −Q only, with no curvature."], correct: 1, explanation: "Field lines always start on positive charges and end on negative charges. For a dipole, they emanate from +Q, curve through the surrounding space, and terminate on −Q, with the highest line density (strongest field) concentrated in the region directly between the two charges." },
    { id: "10-27", topic: "10.3 Electric Fields", stem: "A uniform electric field points in the +x direction. A negative charge is released from rest in this field. In which direction does it initially accelerate?", choices: ["+x", "−x", "+y", "It does not accelerate."], correct: 1, explanation: "The force on a charge is F = qE. For a negative charge, this force points opposite to the field direction. Since the field points in +x, the force — and therefore the initial acceleration — points in −x." },
    { id: "10-28", topic: "10.3 Electric Fields", stem: "Points A, B, and C are located at distances r, 2r, and 3r respectively from a single point charge. Rank the electric field magnitude at each point from greatest to least.", choices: ["A > B > C", "C > B > A", "A = B = C", "B > A > C"], correct: 0, explanation: "Field magnitude follows E ∝ 1/r². Since A is closest, it has the strongest field, followed by B, then C. The falloff isn't linear — going from r to 2r cuts the field to 1/4, and going to 3r cuts it further to 1/9 — but the ranking order itself is exactly what you'd expect from 'closer means stronger.'" },
    { id: "10-29", topic: "10.3 Electric Fields", stem: "Point charges +Q and −Q of equal magnitude are placed a distance d apart. At the midpoint between them, how does the field contribution from +Q compare in direction to the field contribution from −Q?", choices: ["They point in opposite directions and cancel.", "They point in the same direction and add together.", "They are perpendicular to each other.", "Only the positive charge contributes a field at the midpoint."], correct: 1, explanation: "At the midpoint, the field from +Q points away from +Q (toward −Q), and the field from −Q points toward −Q (i.e., also in the direction from + to −). Both fields point the same way, so they add constructively rather than canceling — a direct contrast to two LIKE charges, whose fields can cancel at a point between them." },
    { id: "10-30", topic: "10.3 Electric Fields", stem: "Point charges +Q and −Q are placed at opposite ends of a rod of length L. Find the magnitude of the electric field at the midpoint, in terms of k, Q, and L.", choices: ["kQ/L²", "4kQ/L²", "8kQ/L²", "0"], correct: 2, explanation: "Each charge is a distance L/2 from the midpoint, contributing a field of magnitude k Q/(L/2)² = 4kQ/L². Since (as established for opposite charges) these two contributions point in the same direction at the midpoint, they add: total = 2 × 4kQ/L² = 8kQ/L²." },
    { id: "10-31", topic: "10.3 Electric Fields", stem: "A student uses test charges of different magnitudes to map out the electric field around a fixed source charge. If a larger test charge is used, how does the measured field E = F/q compare to using a smaller test charge?", choices: ["The measured field is larger with the larger test charge.", "The measured field is smaller with the larger test charge.", "The measured field is the same either way.", "The measured field cannot be determined without knowing the source charge."], correct: 2, explanation: "While the force on a larger test charge is indeed larger, the RATIO F/q stays the same, since force scales proportionally with the test charge. Electric field is defined specifically so that it doesn't depend on which test charge you happen to use — it's a property of the source charge and the point in space, not of whatever you use to probe it." },
    { id: "10-32", topic: "10.4 Electric Potential Energy", stem: "Two point charges, +3.0 μC and +5.0 μC, are separated by 0.60 m. Find their electric potential energy.", choices: ["0.045 J", "0.225 J", "1.35 J", "2.25 J"], correct: 1, explanation: "U = kq₁q₂/r = (9.0×10⁹)(3.0×10⁻⁶)(5.0×10⁻⁶)/0.60 = (9.0×10⁹)(1.5×10⁻¹¹)/0.60 ≈ 0.225 J." },
    { id: "10-33", topic: "10.4 Electric Potential Energy", stem: "A positive charge is released from rest near another fixed positive charge and moves freely away from it. As it moves, how do its kinetic energy and the system's potential energy change?", choices: ["KE increases; PE decreases.", "KE decreases; PE increases.", "Both increase.", "Both decrease."], correct: 0, explanation: "The repulsive force accelerates the charge away, converting potential energy into kinetic energy — total mechanical energy of the system is conserved, so as one goes up, the other goes down by the same amount. This is the electric analog of a compressed spring pushing an object away, converting stored energy into motion." },
    { id: "10-34", topic: "10.4 Electric Potential Energy", stem: "Three point charges, each +Q, sit at the corners of an equilateral triangle with side length d. Find the total electric potential energy of the system, in terms of k, Q, and d.", choices: ["kQ²/d", "2kQ²/d", "3kQ²/d", "6kQ²/d"], correct: 2, explanation: "There are three distinct pairs of charges in a three-charge system, and each pair contributes kQ²/d to the total potential energy (since all sides are equal length d). Total: 3 × kQ²/d = 3kQ²/d. A common mistake is forgetting to count all three pairs, or double-counting them." },
    { id: "10-35", topic: "10.4 Electric Potential Energy", stem: "Charges of +4.0 μC and −2.0 μC are separated by 0.40 m. Find their electric potential energy.", choices: ["−0.36 J", "−0.18 J", "0.18 J", "0.36 J"], correct: 1, explanation: "U = kq₁q₂/r = (9.0×10⁹)(4.0×10⁻⁶)(−2.0×10⁻⁶)/0.40 = (9.0×10⁹)(−8.0×10⁻¹²)/0.40 ≈ −0.18 J. The negative sign reflects that opposite charges have negative potential energy — the system 'wants' to collapse together, releasing energy as it does." },
    { id: "10-36", topic: "10.4 Electric Potential Energy", stem: "Two like (same-sign) charges are brought together from infinite separation to a finite distance d by an external agent, moving slowly (no change in kinetic energy). Is the work done by the external agent positive or negative?", choices: ["Positive", "Negative", "Zero", "Depends on which charge is moved"], correct: 0, explanation: "Like charges repel, so an external agent must push against that repulsion to bring them closer — this requires positive work. Correspondingly, the system's potential energy increases from zero (at infinite separation) to a positive value at distance d." },
    { id: "10-37", topic: "10.4 Electric Potential Energy", stem: "Two opposite charges are brought together from infinite separation to a finite distance d by an external agent, moving slowly (no change in kinetic energy). Is the work done by the external agent positive or negative?", choices: ["Positive", "Negative", "Zero", "Depends on which charge is moved"], correct: 1, explanation: "Opposite charges attract, so left alone they would accelerate toward each other on their own. To move them together slowly (without gaining kinetic energy), the external agent must actually hold them back — doing negative work. Correspondingly, the potential energy decreases from zero to a negative value, exactly the reverse of the like-charges case." },
    { id: "10-38", topic: "10.4 Electric Potential Energy", stem: "A charge +Q is fixed at the origin. A second charge +2Q is moved from 0.80 m away to 0.20 m away (closer). Does the system's potential energy increase or decrease, and what sign of work does an external agent do?", choices: ["PE increases; external agent does positive work.", "PE decreases; external agent does positive work.", "PE increases; external agent does negative work.", "PE decreases; external agent does negative work."], correct: 0, explanation: "Bringing two like charges closer together against their mutual repulsion increases the system's potential energy, which requires positive work from whatever agent is doing the moving — consistent with the general rule that assembling like charges closer together always costs positive work." },
    { id: "10-39", topic: "10.5 Electric Potential", stem: "Find the electric potential at a point 0.25 m from a point charge of −6.0 μC.", choices: ["−2.16 × 10⁵ V", "−5.4 × 10⁴ V", "2.16 × 10⁵ V", "5.4 × 10⁴ V"], correct: 0, explanation: "V = kq/r = (9.0×10⁹)(−6.0×10⁻⁶)/0.25 = (−5.4×10⁴)/0.25 = −2.16×10⁵ V. Potential from a negative charge is always negative, at any finite distance." },
    { id: "10-40", topic: "10.5 Electric Potential", stem: "Point charges +2.0 μC and −2.0 μC are placed at equal distances from Point P, on opposite sides. Find the total electric potential at P.", choices: ["Zero", "A large positive value", "A large negative value", "Cannot be determined without knowing the distance"], correct: 0, explanation: "Since potential is a scalar and adds algebraically, equal-magnitude opposite-sign charges at equal distances contribute equal and opposite potentials, which sum to exactly zero. This is a direct contrast to two charges of the SAME sign at equal distances, whose potentials add together rather than canceling." },
    { id: "10-41", topic: "10.5 Electric Potential", stretch: true, stem: "Is it possible for the electric field at a point to be nonzero while the electric potential at that same point is exactly zero?", choices: ["No — if V = 0, then E must also be 0 at that point.", "Yes — this happens whenever potential contributions cancel (opposite signs) while field contributions, as vectors, happen to add instead.", "No — E and V are always proportional to each other at every point.", "Yes, but only if there is just a single point charge in the system."], correct: 1, explanation: "This happens at exactly the dipole midpoint scenario elsewhere in this set: potential from +Q and −Q cancels (opposite-sign scalars), but the field vectors from each actually point the same direction and add together, giving a nonzero net field. V = 0 and E = 0 are independent conditions — one being true never guarantees the other. This kind of abstract 'is it possible' synthesis question, which requires connecting two separate scenarios rather than applying one formula, tends to run a notch more conceptual than the typical AP2 multiple-choice question." },
    { id: "10-42", topic: "10.5 Electric Potential", stem: "Three point charges of +2.0 μC each sit at the corners of an equilateral triangle with side length 0.30 m. The centroid is 0.17 m from each vertex. Find the electric potential at the centroid.", choices: ["1.0 × 10⁵ V", "2.1 × 10⁵ V", "3.1 × 10⁵ V", "9.4 × 10⁵ V"], correct: 2, explanation: "Each charge contributes V = kq/r = (9.0×10⁹)(2.0×10⁻⁶)/0.17 ≈ 1.04×10⁵ V. Since potential adds as a scalar, the total is 3 × 1.04×10⁵ ≈ 3.1×10⁵ V — simply three times the individual contribution, since all three charges are equal and equidistant." },
    { id: "10-43", topic: "10.5 Electric Potential", stem: "A charge is moved along an equipotential surface. How much work is done by the electric force on the charge?", choices: ["Zero, by definition.", "A positive amount, proportional to the distance moved.", "A negative amount, proportional to the distance moved.", "It depends on the charge's speed."], correct: 0, explanation: "An equipotential surface is, by definition, a surface where potential doesn't change. Since work relates directly to potential difference (W = −qΔV), zero potential difference along the path means zero work is done, regardless of how far the charge travels along that surface." },
    { id: "10-44", topic: "10.5 Electric Potential", stem: "What shape do the equipotential surfaces take for a single isolated point charge +Q?", choices: ["Flat planes perpendicular to the charge.", "Concentric spheres centered on the charge.", "Concentric cylinders around the charge.", "Equipotential surfaces don't exist for a single point charge."], correct: 1, explanation: "Since V = kQ/r depends only on distance r from the charge, every point at the same distance r shares the same potential — and the set of all points at a fixed distance from a single point forms a sphere. So equipotential surfaces for a point charge are concentric spheres, centered on the charge." },
    { id: "10-45", topic: "10.5 Electric Potential", stem: "Parallel plates with separation d create a uniform field with potential difference ΔV between them. If the separation is doubled while ΔV is held the same (a battery maintains the voltage), find the new field strength in terms of the original field E.", choices: ["It doubles.", "It stays the same.", "It is cut in half.", "It quadruples."], correct: 2, explanation: "For a uniform field between parallel plates, E = ΔV/d. Doubling d while holding ΔV constant cuts E in half — spreading the same voltage over twice the distance means a gentler field." },
    { id: "10-46", topic: "10.5 Electric Potential", stem: "Parallel plates separated by 0.020 m have a potential difference of 300 V between them. Find the magnitude of the uniform electric field between the plates.", choices: ["6.0 × 10³ V/m", "1.5 × 10⁴ V/m", "6.0 × 10⁴ V/m", "1.5 × 10⁵ V/m"], correct: 1, explanation: "E = ΔV/d = 300/0.020 = 1.5×10⁴ V/m (equivalently, N/C)." },
    { id: "10-47", topic: "10.6 Capacitors", stem: "A parallel plate capacitor has capacitance 4.0 μF and is charged to 12 V. Find the charge stored.", choices: ["0.33 μC", "3.0 μC", "48 μC", "480 μC"], correct: 2, explanation: "Q = CΔV = (4.0×10⁻⁶)(12) = 4.8×10⁻⁵ C = 48 μC." },
    { id: "10-48", topic: "10.6 Capacitors", stem: "A capacitor stores 2.0 × 10⁻⁴ C of charge when connected to a 50 V source. Find its capacitance.", choices: ["0.25 μF", "4.0 μF", "25 μF", "100 μF"], correct: 1, explanation: "C = Q/ΔV = (2.0×10⁻⁴)/50 = 4.0×10⁻⁶ F = 4.0 μF." },
    { id: "10-49", topic: "10.6 Capacitors", stem: "Find the energy stored in a 6.0 μF capacitor charged to 100 V.", choices: ["3.0 × 10⁻⁴ J", "6.0 × 10⁻³ J", "3.0 × 10⁻² J", "6.0 × 10⁻¹ J"], correct: 2, explanation: "U = ½CΔV² = 0.5(6.0×10⁻⁶)(100)² = 0.5(6.0×10⁻⁶)(10,000) = 0.030 J = 3.0×10⁻² J." },
    { id: "10-50", topic: "10.6 Capacitors", stem: "A parallel plate capacitor's plate area is doubled while the separation and applied voltage stay the same. How does the stored charge change?", choices: ["It doubles.", "It stays the same.", "It is cut in half.", "It quadruples."], correct: 0, explanation: "Capacitance C = κε₀A/d is directly proportional to area, so doubling A doubles C. Since Q = CΔV and voltage is held constant, doubling C doubles Q as well." },
    { id: "10-51", topic: "10.6 Capacitors", stem: "A parallel plate capacitor is disconnected from its battery after being charged to Q₀. The plate separation is then increased. What happens to the charge, capacitance, and voltage?", choices: ["Charge decreases; capacitance decreases; voltage decreases.", "Charge stays constant; capacitance decreases; voltage increases.", "Charge stays constant; capacitance increases; voltage decreases.", "Charge increases; capacitance stays constant; voltage increases."], correct: 1, explanation: "With the battery disconnected, charge has nowhere to go, so Q stays constant. Increasing separation d decreases capacitance (C = κε₀A/d). Since Q = CΔV and Q is fixed while C decreases, ΔV must increase to compensate. This is the mirror-image scenario to inserting a dielectric with the battery still connected — here, voltage is free to change instead of charge, because the battery isn't there to hold it fixed." },
    { id: "10-52", topic: "10.6 Capacitors", stem: "Three capacitors are charged: Capacitor A has capacitance C at voltage ΔV; Capacitor B has capacitance 2C at voltage ΔV; Capacitor C has capacitance C at voltage 2ΔV. Rank their stored energies from greatest to least.", choices: ["C > B > A", "B > C > A", "A > B > C", "C > A > B"], correct: 0, explanation: "Using U = ½CΔV²: U<sub>A</sub> = ½C(ΔV)². U<sub>B</sub> = ½(2C)(ΔV)² = 2U<sub>A</sub>. U<sub>C</sub> = ½C(2ΔV)² = ½C(4ΔV²) = 4U<sub>A</sub>. So U<sub>C</sub> > U<sub>B</sub> > U<sub>A</sub> — doubling the voltage has a bigger effect on stored energy than doubling the capacitance, since voltage is squared in the energy formula." },
    { id: "10-53", topic: "10.6 Capacitors", stem: "A capacitor with vacuum between its plates has capacitance 2.0 μF. A dielectric with κ = 5.0 is inserted, completely filling the gap. Find the new capacitance.", choices: ["0.4 μF", "2.5 μF", "10 μF", "50 μF"], correct: 2, explanation: "C<sub>new</sub> = κC₀ = (5.0)(2.0 μF) = 10 μF." },
    { id: "10-54", topic: "10.6 Capacitors", stem: "Why does inserting a dielectric between capacitor plates increase the capacitance?", choices: ["The dielectric adds extra charge directly onto the plates.", "The dielectric polarizes and creates an internal field that partially opposes the plates' field, lowering the voltage needed for the same charge.", "The dielectric increases the plate area available for charge storage.", "The dielectric decreases the distance between the plates."], correct: 1, explanation: "The dielectric's molecules polarize in response to the field between the plates, and this induced polarization creates its own internal field pointing opposite to the plates' field, partially canceling it. A weaker net field for the same amount of charge means a lower voltage (since ΔV relates to field strength), and since C = Q/ΔV, a lower ΔV for the same Q means a higher capacitance." },
    { id: "10-55", topic: "10.7 Conservation of Electric Energy", stem: "An electron is accelerated from rest through a potential difference of 500 V. Find its final kinetic energy.", choices: ["3.2 × 10⁻¹⁷ J", "8.0 × 10⁻¹⁷ J", "1.6 × 10⁻¹⁶ J", "8.0 × 10⁻¹⁴ J"], correct: 1, explanation: "K = |q|ΔV = (1.6×10⁻¹⁹)(500) = 8.0×10⁻¹⁷ J. This is a standard way to express energies at the atomic scale, and it's also exactly where the electron volt (eV) unit comes from — 1 eV is simply the energy gained by an elementary charge accelerated through 1 V." },
    { id: "10-56", topic: "10.7 Conservation of Electric Energy", stem: "A proton and an electron are each released from rest in the same uniform external electric field, with no other forces acting. Compare the magnitude of the electric force on each, and compare their resulting accelerations.", choices: ["Same force; same acceleration.", "Same force; electron has much greater acceleration.", "Electron feels more force; same acceleration.", "Proton feels more force; proton has greater acceleration."], correct: 1, explanation: "Both particles carry the same magnitude of charge, so the electric force F = qE is the same magnitude on each. But acceleration is a = F/m, and the electron's mass is about 1800 times smaller than the proton's — so for the same force, the electron accelerates dramatically more. This is a useful contrast to gravity, where acceleration is independent of mass; here, unequal masses under equal force produce very different accelerations." },
    { id: "10-57", topic: "10.7 Conservation of Electric Energy", stem: "A charge of +2.0 μC moves from a point at 150 V to a point at 90 V. Find the work done BY the electric force on the charge.", choices: ["−1.2 × 10⁻⁴ J", "1.2 × 10⁻⁴ J", "−3.0 × 10⁻⁴ J", "3.0 × 10⁻⁴ J"], correct: 1, explanation: "Work done by the field is W = −qΔV = −(2.0×10⁻⁶)(90 − 150) = −(2.0×10⁻⁶)(−60) = +1.2×10⁻⁴ J. The positive sign makes sense: a positive charge moving from higher to lower potential is moving 'downhill,' so the field does positive work on it — the same logic as gravity doing positive work on a falling mass." },
    { id: "10-58", topic: "10.7 Conservation of Electric Energy", stem: "A charged particle moves through a region where only the electric force acts on it, and its kinetic energy does not change over the course of the motion. Which of the following must be true?", choices: ["It moved along a path of constant electric field magnitude.", "It started and ended at points of equal electric potential.", "It moved perpendicular to the field at every single instant.", "The particle carried no net charge."], correct: 1, explanation: "Since W = −qΔV = ΔK, if ΔK = 0 (and q ≠ 0), then ΔV must be 0 — the start and end points must be at equal potential. This doesn't require the path itself to stay on a single equipotential surface the whole time, just that it starts and ends at the same potential value." },
    { id: "10-59", topic: "10.7 Conservation of Electric Energy", stem: "Find the speed of a proton (mass 1.67 × 10⁻²⁷ kg) after being accelerated from rest through a potential difference of 1000 V.", choices: ["4.4 × 10⁴ m/s", "4.4 × 10⁵ m/s", "1.9 × 10⁶ m/s", "4.4 × 10⁷ m/s"], correct: 1, explanation: "First find kinetic energy: K = qΔV = (1.6×10⁻¹⁹)(1000) = 1.6×10⁻¹⁶ J. Then solve K = ½mv² for v: v = √(2K/m) = √[(2)(1.6×10⁻¹⁶)/(1.67×10⁻²⁷)] ≈ 4.4×10⁵ m/s." },
    { id: "10-60", topic: "10.7 Conservation of Electric Energy", stretch: true, stem: "A charged particle is released from rest in a region with both a uniform electric field and a uniform gravitational field, both pointing straight down. The particle is negatively charged. In which direction does it initially accelerate?", choices: ["Downward, since gravity always dominates.", "Upward, since electric forces are always stronger than gravity.", "It cannot be determined without knowing the relative magnitudes of the electric force and gravity.", "It remains at rest, since the forces must balance."], correct: 2, explanation: "Gravity pulls the particle down regardless of charge. But the electric force on a NEGATIVE charge in a downward field points upward (opposite the field) — so the two forces oppose each other. Without knowing which is larger, qE or mg, the direction of the net acceleration genuinely can't be determined. Most AP2 multiple-choice questions are built so a definite answer exists — recognizing when the honest answer is 'not enough information' is a rarer and slightly harder skill than the typical question on this topic." },
    { id: "10-61", topic: "10.7 Conservation of Electric Energy", stretch: true, stem: "A capacitor is charged by a battery of emf ε until it holds charge Q. Compare the total work done by the battery to the energy actually stored in the capacitor.", choices: ["W<sub>battery</sub> = ½Qε, equal to the stored energy — no other losses occur.", "W<sub>battery</sub> = Qε, twice the stored energy — the extra energy is dissipated as heat during charging.", "W<sub>battery</sub> = Qε, and all of it ends up stored in the capacitor.", "W<sub>battery</sub> is always zero once the capacitor is fully charged."], correct: 1, explanation: "The battery moves total charge Q through a constant potential difference ε, doing work W = Qε. But the energy actually stored in the capacitor is only ½Qε (since the voltage across the capacitor rises gradually from 0 to ε as it charges, not instantly). The other half of the battery's work is dissipated as heat in the circuit's resistance during the charging process. This result is genuinely correct and worth knowing, but it's more commonly emphasized in AP Physics C: E&M than in the algebra-based Physics 2 course — treat it as a useful deeper-dive rather than a core exam expectation." },
    { id: "10-62", topic: "10.1–10.5 Mixed", stem: "A positive charge is fixed at the origin. As distance r from the charge increases, how do the electric field magnitude E, electric potential V, and electric potential energy U of a nearby test charge each scale with r?", choices: ["E ∝ 1/r; V ∝ 1/r²; U ∝ 1/r²", "E ∝ 1/r²; V ∝ 1/r; U ∝ 1/r", "E ∝ 1/r²; V ∝ 1/r²; U ∝ 1/r", "All three scale the same way, as 1/r²"], correct: 1, explanation: "Field falls off fastest, as 1/r² (inverse-square). Potential falls off more gently, as 1/r. Potential energy of a test charge, U = qV, shares potential's 1/r dependence exactly, since q is just a constant multiplier. Remembering that V and U move together, while E is the odd one out, is a useful shortcut for these comparison questions." },
    { id: "10-63", topic: "10.1–10.5 Mixed", stretch: true, stem: "A charge +Q is fixed. A second charge +q is brought in from very far away to a distance d from Q. Considering the sign of the external work required, the change in potential energy, and the sign of the electric potential at the final location (with V = 0 at infinity), which statement is correct?", choices: ["External work is positive; ΔU is positive; V at the final location is positive.", "External work is negative; ΔU is negative; V at the final location is positive.", "External work is positive; ΔU is negative; V at the final location is negative.", "External work is negative; ΔU is positive; V at the final location is negative."], correct: 0, explanation: "Since both charges are positive, they repel — bringing them together requires positive external work, and the system's potential energy increases (both consistent with the earlier like-charges result). Separately, the potential at the final location, due to the fixed positive charge Q, is positive at any finite distance. All three facts are really describing the same underlying physical picture from different angles, which is why they're consistent with each other rather than needing to be memorized as three separate rules. Holding three related quantities in mind simultaneously like this is good deep-understanding practice, but it's more than a typical single AP2 question usually asks in one pass." },
    { id: "10-64", topic: "10.1–10.5 Mixed", stem: "A point charge +Q produces a certain electric potential at a nearby point. If the charge is replaced with +2Q at the same location, how does the potential at that point change?", choices: ["It doubles.", "It quadruples.", "It stays the same.", "It is cut in half."], correct: 0, explanation: "Potential from a single point charge is directly proportional to the charge: V = kq/r. Doubling the charge simply doubles the potential — no inverse-square complications here, since only one source charge is involved and nothing about the geometry changed." },
    { id: "10-65", topic: "10.1–10.5 Mixed", stem: "A positive test charge moves from Point A to Point B in a region of uniform electric field E pointing in the +x direction. Point B is located to the right of Point A, in the +x direction (along the field). Is the potential at B higher or lower than at A, and is the work done by the field on the charge positive or negative?", choices: ["V at B is higher; work is positive.", "V at B is higher; work is negative.", "V at B is lower; work is positive.", "V at B is lower; work is negative."], correct: 2, explanation: "Electric field always points from regions of higher potential toward regions of lower potential. Moving in the direction the field points (+x, from A to B) means moving toward lower potential. A positive charge moving to lower potential is moving 'downhill,' so the field does positive work on it — the same logic used throughout this section, now applied directly to the field's own direction rather than to a specific charge configuration." },
  ],
  11: [
    { id: "11-1", topic: "11.1 Electric Current", stem: "A wire carries a current of 4.0 A. Find the charge that passes a point in the wire in 5.0 seconds.", choices: ["0.8 C", "5.0 C", "20 C", "80 C"], correct: 2, explanation: "Q = 20 C. Current is defined as charge per unit time (I = ΔQ/Δt), so multiplying current by time recovers total charge: Q = It = (4.0)(5.0) = 20 C." },
    { id: "11-2", topic: "11.1 Electric Current", stem: "In a metal wire carrying conventional current to the right, what is the actual direction of electron motion?", choices: ["Electrons drift to the right, same direction as conventional current.", "Electrons drift to the left, opposite conventional current.", "Electrons don't move; only the field propagates.", "Electrons oscillate with no net drift direction."], correct: 1, explanation: "Electrons drift left, opposite the conventional current direction. Conventional current is defined (by the AP reference sheet's own stated convention) as the direction positive charge would move — but the actual charge carriers in a metal are negative electrons, which drift the opposite way. Every circuit diagram you'll ever read uses this convention, so train yourself to reason in terms of conventional current rather than the electrons' real motion." },
    { id: "11-3", topic: "11.1 Electric Current", stem: "A charge of 15 C flows through a wire at a constant rate over 3.0 seconds. Find the current.", choices: ["0.2 A", "5.0 A", "12 A", "45 A"], correct: 1, explanation: "I = 5.0 A. Rearranging I = Q/t: I = 15/3.0 = 5.0 A — a direct plug-in using the definition of current." },
    { id: "11-4", topic: "11.1 Electric Current", stem: "A steady current of 0.50 A flows through a resistor for 2.0 minutes. Find the total charge that passes through it.", choices: ["1.0 C", "30 C", "60 C", "120 C"], correct: 2, explanation: "Q = 60 C. Convert minutes to seconds first: 2.0 min = 120 s. Then Q = It = (0.50)(120) = 60 C. Unit conversion is where this type of problem most often goes wrong — always check that time is in seconds before using I = Q/t." },
    { id: "11-5", topic: "11.1 Electric Current", stretch: true, stem: "A wire carries current I. It is replaced with a wire of the same material and length, but twice the cross-sectional area, and the same current I still flows. How does the average drift velocity of the charge carriers compare to before?", choices: ["It doubles.", "It stays the same.", "It is cut in half.", "It quadruples."], correct: 2, explanation: "Drift velocity is cut in half. The same total charge flow (same current I) is now spread across twice the cross-sectional area, so each individual charge carrier doesn't need to move as fast to maintain that same total current — similar to how water flowing at the same volume-per-second moves more slowly through a wider pipe. This microscopic picture of current (carrier density and drift velocity) goes a step beyond the R = ρℓ/A relationship AP Physics 2 typically tests directly — it's genuinely useful intuition, but more at home in AP Physics C: E&M than on the algebra-based exam." },
    { id: "11-6", topic: "11.1 Electric Current", stem: "A device requires a continuous current of 0.25 A to operate. Find how long it takes for 100 C of charge to pass through the device.", choices: ["25 s", "40 s", "100 s", "400 s"], correct: 3, explanation: "t = 400 s. Rearranging I = Q/t: t = Q/I = 100/0.25 = 400 s." },
    { id: "11-7", topic: "11.2 Simple Circuits", stem: "In a simple single-loop circuit, a bulb's filament breaks. What happens to the current everywhere else in that loop?", choices: ["Current continues flowing everywhere except through the broken bulb.", "Current stops everywhere in the loop.", "Current doubles in the remaining wire to compensate.", "Current is unaffected, since the battery maintains the same voltage."], correct: 1, explanation: "Current stops everywhere in the loop. A circuit needs a complete, unbroken path for current to flow at all — breaking the loop anywhere breaks it for the whole loop, not just downstream of the break, since there's no alternate path in a single-loop circuit for current to route around the gap." },
    { id: "11-8", topic: "11.2 Simple Circuits", stem: "A single-loop circuit contains a battery, a switch, a bulb, and a capacitor, all in series. After the switch is closed and a long time passes, what current flows through the bulb?", choices: ["The same current as right after the switch closed.", "Zero.", "A current that oscillates indefinitely.", "A current equal to the battery voltage divided by the bulb's resistance alone."], correct: 1, explanation: "Zero. A capacitor in series blocks steady-state DC current — once it's fully charged, no more charge can cross the gap between its plates, so current throughout that entire loop (including through the bulb) drops to zero, even though current did flow briefly while the capacitor was charging up." },
    { id: "11-9", topic: "11.2 Simple Circuits", stem: "A 6.0 V battery is connected directly to a bulb with resistance 3.0 Ω. Find the current through the bulb.", choices: ["0.5 A", "2.0 A", "3.0 A", "18 A"], correct: 1, explanation: "I = 2.0 A. Using Ohm's Law, I = V/R = 6.0/3.0 = 2.0 A." },
    { id: "11-10", topic: "11.2 Simple Circuits", stem: "A student wires two bulbs and a battery so that removing either bulb causes the other one to go dark too. Are the bulbs wired in series or parallel?", choices: ["Series", "Parallel", "Neither — this behavior is impossible.", "It depends on the battery's voltage."], correct: 0, explanation: "Series. In a series circuit, both bulbs share a single loop with no alternate path — removing either one breaks the only path available, stopping current (and therefore light) everywhere in that loop." },
    { id: "11-11", topic: "11.2 Simple Circuits", stem: "A student wires two bulbs and a battery so that removing one bulb doesn't affect the other bulb's brightness at all. Are they wired in series or parallel?", choices: ["Series", "Parallel", "Neither — this behavior is impossible.", "It depends on the battery's voltage."], correct: 1, explanation: "Parallel. Each bulb has its own separate branch with a complete path back to the battery, so removing one branch doesn't interrupt the other branch's current at all — the surviving bulb keeps its same voltage and current exactly as before." },
    { id: "11-12", topic: "11.2 Simple Circuits", stem: "A single resistor is connected to an ideal battery. A second identical resistor is added in SERIES with the first. Does the current supplied by the battery increase, decrease, or stay the same?", choices: ["Increase", "Decrease", "Stay the same", "Cannot be determined"], correct: 1, explanation: "Decrease. Adding a resistor in series always increases total resistance, and since an ideal battery maintains constant voltage, I = V/R decreases as R increases." },
    { id: "11-13", topic: "11.2 Simple Circuits", stem: "A single resistor is connected to an ideal battery. A second identical resistor is added in PARALLEL with the first (both across the battery). Does the current supplied by the battery increase, decrease, or stay the same?", choices: ["Increase", "Decrease", "Stay the same", "Cannot be determined"], correct: 0, explanation: "Increase. Adding a resistor in parallel always decreases total resistance (it opens up an additional path for current), and lower resistance at the same voltage means the battery supplies more total current overall — the exact opposite effect of adding a series resistor." },
    { id: "11-14", topic: "11.2 Simple Circuits", stem: "A single bulb is connected to a battery. A second identical bulb is then added in series with the first. Compare each bulb's brightness afterward to its original brightness (before the second bulb was added).", choices: ["Each bulb is now brighter than before.", "Each bulb is now dimmer than before.", "Each bulb is exactly as bright as before.", "One bulb is brighter and the other is dimmer."], correct: 1, explanation: "Each bulb is dimmer. Adding a series resistor (the second bulb) increases total resistance, which decreases the current through the single shared path — and since both bulbs now carry this smaller current, each dissipates less power and glows more dimly than it did alone." },
    { id: "11-15", topic: "11.3 Resistance & Ohm's Law", stem: "A wire has resistance R. If its length is tripled while its cross-sectional area stays the same, find the new resistance in terms of R.", choices: ["R/3", "R", "3R", "9R"], correct: 2, explanation: "3R. From R = ρℓ/A, resistance is directly proportional to length — tripling length triples resistance, since the charge carriers now have three times as far to fight through the material." },
    { id: "11-16", topic: "11.3 Resistance & Ohm's Law", stem: "A wire has resistance R. If its cross-sectional area is quadrupled while its length stays the same, find the new resistance in terms of R.", choices: ["R/4", "R/2", "2R", "4R"], correct: 0, explanation: "R/4. Area sits in the denominator of R = ρℓ/A, so quadrupling area cuts resistance to one-fourth — a wider wire gives charge carriers more room to move through, lowering resistance." },
    { id: "11-17", topic: "11.3 Resistance & Ohm's Law", stem: "Two wires are made of the same material and have the same length, but Wire B has twice the diameter of Wire A. Compare their resistances.", choices: ["R<sub>B</sub> = 2R<sub>A</sub>", "R<sub>B</sub> = R<sub>A</sub>/2", "R<sub>B</sub> = 4R<sub>A</sub>", "R<sub>B</sub> = R<sub>A</sub>/4"], correct: 3, explanation: "R<sub>B</sub> = R<sub>A</sub>/4. Cross-sectional area depends on the SQUARE of diameter (A = πd²/4), so doubling diameter quadruples area, not just doubles it. Since resistance is inversely proportional to area, quadrupling area cuts resistance to one-fourth. Forgetting that area scales as d² — not d — is the most common way to get this type of question wrong." },
    { id: "11-18", topic: "11.3 Resistance & Ohm's Law", stem: "A resistor carries 0.40 A when connected to an 8.0 V source. Find its resistance.", choices: ["3.2 Ω", "5.0 Ω", "20 Ω", "32 Ω"], correct: 2, explanation: "R = 20 Ω. Using Ohm's Law, R = V/I = 8.0/0.40 = 20 Ω." },
    { id: "11-19", topic: "11.3 Resistance & Ohm's Law", stem: "A 15 Ω resistor is connected to a 45 V source. Find the current through it.", choices: ["0.33 A", "3.0 A", "30 A", "675 A"], correct: 1, explanation: "I = 3.0 A. Using Ohm's Law, I = V/R = 45/15 = 3.0 A." },
    { id: "11-20", topic: "11.3 Resistance & Ohm's Law", stem: "Two wires of the same length and cross-sectional area are made of different materials. Material A has a higher resistivity than Material B. Which wire has the greater resistance?", choices: ["The wire made of Material A.", "The wire made of Material B.", "They have equal resistance, since length and area are the same.", "Cannot be determined without knowing the exact resistivity values."], correct: 0, explanation: "The Material A wire. Resistivity ρ sits directly in the numerator of R = ρℓ/A, so with length and area held equal between the two wires, whichever material has the higher resistivity produces the higher resistance — resistivity is precisely the material property that captures this difference." },
    { id: "11-21", topic: "11.3 Resistance & Ohm's Law", stretch: true, stem: "A cylindrical wire is stretched so that its length doubles, while its volume stays constant during the stretching (meaning its cross-sectional area is cut in half). Find the new resistance in terms of the original R.", choices: ["R", "2R", "4R", "8R"], correct: 2, explanation: "4R. Doubling the length doubles R on its own; independently, halving the area doubles R again (area is in the denominator). Combined: R<sub>new</sub> = 2 × 2 × R = 4R. This one requires an extra inference most resistance problems don't ask for — recognizing that constant volume forces area to shrink as length grows — which pushes it a bit past the direct plug-and-chug version of this equation that's more typical of the real exam." },
    { id: "11-22", topic: "11.3 Resistance & Ohm's Law", stem: "A resistor's temperature increases, which increases its resistivity (true for most conductors). If the voltage across the resistor is held constant, what happens to the current through it as it heats up?", choices: ["The current increases.", "The current decreases.", "The current stays the same.", "The current becomes zero."], correct: 1, explanation: "The current decreases. Higher resistivity means higher resistance (R = ρℓ/A, ρ in the numerator), and at constant voltage, I = V/R decreases as R increases — a real-world example of why some devices draw slightly less current as they warm up during operation." },
    { id: "11-23", topic: "11.3 Resistance & Ohm's Law", stem: "Which single change to a wire, by itself, would leave its resistance unchanged?", choices: ["Doubling the length only.", "Doubling both the length and the cross-sectional area simultaneously.", "Doubling the resistivity only.", "Halving the cross-sectional area only."], correct: 1, explanation: "Doubling both length and area together. From R = ρℓ/A, doubling ℓ alone doubles R, and independently doubling A alone would halve R — but doing both at once means the two effects exactly cancel: R<sub>new</sub> = ρ(2ℓ)/(2A) = ρℓ/A = R, unchanged. Each of the other choices changes resistance on its own." },
    { id: "11-24", topic: "11.3 Resistance & Ohm's Law", stem: "A student measures current through a resistor at several different applied voltages and plots V (vertical axis) against I (horizontal axis). What does the slope of the best-fit line represent?", choices: ["The resistance R.", "The conductance 1/R.", "The power P.", "The resistivity ρ."], correct: 0, explanation: "The resistance R. From V = IR, plotting V against I gives a line through the origin with slope = ΔV/ΔI = R directly — one of the most common graphical-analysis setups you'll see in circuits experimental-design questions." },
    { id: "11-25", topic: "11.4 Electric Power", stem: "A resistor dissipates 45 W while carrying 3.0 A. Find its resistance.", choices: ["1.7 Ω", "5.0 Ω", "15 Ω", "135 Ω"], correct: 1, explanation: "R = 5.0 Ω. Using P = I²R, solve for R: R = P/I² = 45/(3.0)² = 45/9.0 = 5.0 Ω." },
    { id: "11-26", topic: "11.4 Electric Power", stem: "A 12 V battery delivers 0.50 A to a resistor. Find the power dissipated.", choices: ["1.5 W", "6.0 W", "12 W", "24 W"], correct: 1, explanation: "P = 6.0 W. Using P = IV = (0.50)(12) = 6.0 W — the most direct form of the power equation when current and voltage are both given." },
    { id: "11-27", topic: "11.4 Electric Power", stem: "Find the power dissipated by a 100 Ω resistor with 20 V across it.", choices: ["0.2 W", "2.0 W", "4.0 W", "40 W"], correct: 2, explanation: "P = 4.0 W. Using P = V²/R = (20)²/100 = 400/100 = 4.0 W — the form to reach for when voltage and resistance are given but current isn't." },
    { id: "11-28", topic: "11.4 Electric Power", stem: "Resistors R₁ = 10 Ω and R₂ = 20 Ω are connected in SERIES to the same battery. Which resistor dissipates more power?", choices: ["R₁", "R₂", "They dissipate equal power.", "Cannot be determined without knowing the battery's voltage."], correct: 1, explanation: "R₂ dissipates more. In series, both resistors carry the same current, so use P = I²R — with I identical for both, the larger resistance (R₂) dissipates more power. The larger resistor in a series chain always runs hotter." },
    { id: "11-29", topic: "11.4 Electric Power", stem: "Resistors R₁ = 10 Ω and R₂ = 20 Ω are connected in PARALLEL to the same battery. Which resistor dissipates more power?", choices: ["R₁", "R₂", "They dissipate equal power.", "Cannot be determined without knowing the battery's voltage."], correct: 0, explanation: "R₁ dissipates more. In parallel, both resistors share the same voltage, so use P = V²/R — with V identical for both, the smaller resistance (R₁) dissipates more power. This is the exact opposite outcome from the series case: in parallel, the SMALLER resistor runs hotter, since it draws more current at that shared voltage." },
    { id: "11-30", topic: "11.4 Electric Power", stem: "A 40 W bulb and a 60 W bulb are both rated for the same voltage. Which has the greater resistance?", choices: ["The 40 W bulb.", "The 60 W bulb.", "They have equal resistance.", "Cannot be determined without knowing the voltage."], correct: 0, explanation: "The 40 W bulb. Using R = V²/P with V fixed and equal for both, resistance is inversely related to rated power — the lower-power bulb (40 W) has the higher resistance, since it draws less current at the same voltage." },
    { id: "11-31", topic: "11.4 Electric Power", stem: "Two identical bulbs, each rated 60 W at 120 V, are connected in SERIES to a 120 V source (instead of each being connected individually at its rated voltage). Find the total power dissipated by the pair.", choices: ["15 W", "30 W", "60 W", "120 W"], correct: 1, explanation: "30 W. Wiring the bulbs in series doubles the total resistance in the loop compared to a single bulb, and with the same 120 V now spread across double the resistance, total power (P = V²/R<sub>total</sub>) drops to half of one bulb's rated power: 60/2 = 30 W. It's a common mistake to assume two 60 W bulbs always add up to 120 W — that's only true if each bulb individually sees its full rated 120 V, which doesn't happen once they're wired in series together." },
    { id: "11-32", topic: "11.4 Electric Power", stem: "A resistor R connected to an ideal battery of voltage V dissipates power P. A second identical resistor is added in PARALLEL. Find the new total power output in terms of P.", choices: ["P/2", "P", "2P", "4P"], correct: 2, explanation: "2P. Adding a parallel resistor halves the total resistance while the ideal battery's voltage stays fixed. Since P = V²/R, halving R doubles P — twice as much total power is now delivered by the battery." },
    { id: "11-33", topic: "11.4 Electric Power", stem: "An electric heater is rated to dissipate 1500 W when connected to a 120 V outlet. Find the current it draws and the resistance of its heating element.", choices: ["12.5 A and 9.6 Ω", "1500 A and 0.08 Ω", "0.08 A and 1500 Ω", "12.5 A and 120 Ω"], correct: 0, explanation: "12.5 A and 9.6 Ω. First find current: I = P/V = 1500/120 ≈ 12.5 A. Then find resistance: R = V/I = 120/12.5 ≈ 9.6 Ω. A two-step problem, but each step is a direct plug-in once you know which equation to reach for first." },
    { id: "11-34", topic: "11.5 Compound DC Circuits", stem: "Three resistors, 4.0 Ω, 6.0 Ω, and 10 Ω, are connected in series. Find the equivalent resistance.", choices: ["0.05 Ω", "6.7 Ω", "20 Ω", "240 Ω"], correct: 2, explanation: "20 Ω. Series resistances simply add: R<sub>s</sub> = 4.0 + 6.0 + 10 = 20 Ω." },
    { id: "11-35", topic: "11.5 Compound DC Circuits", stem: "Two 8.0 Ω resistors are connected in parallel. Find the equivalent resistance.", choices: ["2.0 Ω", "4.0 Ω", "8.0 Ω", "16 Ω"], correct: 1, explanation: "4.0 Ω. For two identical resistors R in parallel, the equivalent resistance is always R/2: 1/R<sub>p</sub> = 1/8.0 + 1/8.0 = 2/8.0, so R<sub>p</sub> = 4.0 Ω. Worth memorizing as a shortcut: n identical resistors in parallel always combine to R/n." },
    { id: "11-36", topic: "11.5 Compound DC Circuits", stem: "Three identical resistors, each with resistance R, are connected in parallel. Find the equivalent resistance in terms of R.", choices: ["R/3", "R", "3R", "9R"], correct: 0, explanation: "R/3. This is the general version of the identical-resistors-in-parallel shortcut: n identical resistors R in parallel combine to R/n — here, three of them give R/3." },
    { id: "11-37", topic: "11.5 Compound DC Circuits", stem: "A 5.0 Ω resistor is in series with a parallel pair of two 10 Ω resistors. Find the total equivalent resistance.", choices: ["2.5 Ω", "7.5 Ω", "10 Ω", "15 Ω"], correct: 2, explanation: "10 Ω. First resolve the parallel pair: two identical 10 Ω resistors in parallel give 10/2 = 5.0 Ω. Then add the series resistor: 5.0 + 5.0 = 10 Ω. Always resolve the innermost group first, then work outward." },
    { id: "11-38", topic: "11.5 Compound DC Circuits", stem: "A 12 V battery connects to a 4.0 Ω resistor in series with a parallel combination of 6.0 Ω and 3.0 Ω. Find the total current supplied by the battery.", choices: ["0.5 A", "2.0 A", "3.0 A", "6.0 A"], correct: 1, explanation: "2.0 A. First, the parallel pair: 1/R<sub>p</sub> = 1/6.0 + 1/3.0 = 1/6.0 + 2/6.0 = 3/6.0, so R<sub>p</sub> = 2.0 Ω. Total resistance: 4.0 + 2.0 = 6.0 Ω. Then current: I = V/R = 12/6.0 = 2.0 A." },
    { id: "11-39", topic: "11.5 Compound DC Circuits", stem: "In a series circuit with resistors of different values, which resistor has the largest voltage drop across it?", choices: ["The resistor with the largest resistance.", "The resistor with the smallest resistance.", "All resistors have equal voltage drops in series.", "Cannot be determined without knowing the current."], correct: 0, explanation: "The largest resistor. In series, the same current I flows through every resistor, so V = IR means the resistor with the largest R produces the largest voltage drop for that shared current." },
    { id: "11-40", topic: "11.5 Compound DC Circuits", stem: "In a parallel circuit with resistors of different values connected to the same battery, which resistor carries the most current?", choices: ["The resistor with the largest resistance.", "The resistor with the smallest resistance.", "All resistors carry equal current in parallel.", "Cannot be determined without knowing the total current."], correct: 1, explanation: "The smallest resistor. In parallel, every resistor shares the same voltage V, so I = V/R means the smallest R carries the most current for that shared voltage — the exact mirror image of the series case." },
    { id: "11-41", topic: "11.5 Compound DC Circuits", stem: "Four identical resistors, each R, are arranged so two are in series with each other, forming a branch, and that branch is in parallel with a second branch of the other two resistors (also in series with each other). Find the total equivalent resistance in terms of R.", choices: ["R/4", "R/2", "R", "2R"], correct: 2, explanation: "R. Each series branch combines to 2R. Two identical 2R branches in parallel then combine to (2R)/2 = R — the two effects (series doubling, then parallel halving) exactly cancel, landing back at the original single-resistor value." },
    { id: "11-42", topic: "11.5 Compound DC Circuits", stem: "A resistor is added in series to an existing circuit, changing total resistance from R to R'. The same resistor is instead added in parallel to the original circuit, changing total resistance from R to R''. Compare R' and R''.", choices: ["R' > R''", "R' < R''", "R' = R''", "Cannot be determined without specific values"], correct: 0, explanation: "R' > R''. Adding a resistor in series always increases total resistance (R' > R), while adding the same resistor in parallel always decreases total resistance (R'' < R) — so no matter the specific values involved, the series result must be greater than the parallel result." },
    { id: "11-43", topic: "11.5 Compound DC Circuits", stem: "A 24 V battery connects to two parallel resistors, 8.0 Ω and 24 Ω. Find the current through the 8.0 Ω resistor specifically (not the total current from the battery).", choices: ["1.0 A", "3.0 A", "4.0 A", "6.0 A"], correct: 1, explanation: "3.0 A. In parallel, each branch has the full battery voltage across it directly — you don't need to find the total equivalent resistance first. Just apply Ohm's Law to that one branch: I = V/R = 24/8.0 = 3.0 A." },
    { id: "11-44", topic: "11.5 Compound DC Circuits", stem: "A circuit has two batteries and several resistors arranged in a network with multiple independent loops, too complex to reduce with simple series/parallel rules alone. What tools are needed to solve for all the currents?", choices: ["Ohm's Law alone, applied repeatedly.", "Kirchhoff's Loop rule and junction rule, used together.", "Only the power equations P = IV and P = I²R.", "The capacitor equations from Unit 10."], correct: 1, explanation: "Kirchhoff's Loop rule and junction rule together. Simple series/parallel reduction only works when a circuit can be simplified branch by branch — a genuinely multi-loop circuit with multiple sources needs the more general tools: the loop rule (energy conservation around each loop) and the junction rule (charge conservation at each junction), used as a system of equations." },
    { id: "11-45", topic: "11.5 Compound DC Circuits", stretch: true, stem: "Resistors R₁ = 4.0 Ω and R₂ = 12 Ω are combined three different ways: (I) in series, (II) in parallel, (III) R₁ alone with R₂ disconnected. Rank the equivalent resistance of these three configurations from greatest to least.", choices: ["I > III > II", "III > I > II", "I > II > III", "II > I > III"], correct: 0, explanation: "Series (16 Ω) > R₁ alone (4.0 Ω) > Parallel (3.0 Ω). Series gives 4.0 + 12 = 16 Ω. Parallel gives 1/R<sub>p</sub> = 1/4.0 + 1/12 = 4/12, so R<sub>p</sub> = 3.0 Ω. The genuinely surprising piece here is that the parallel combination (3.0 Ω) is even smaller than R₁ ALONE (4.0 Ω) — a general and perhaps non-obvious property of parallel resistors: the combined resistance is always less than the smallest individual resistor in the group, not just less than the largest. Recognizing and trusting that general rule, rather than just computing a specific value, is a notch beyond what a typical single question asks." },
    { id: "11-46", topic: "11.6 Kirchhoff's Loop Rule", stem: "What physical principle underlies Kirchhoff's Loop rule?", choices: ["Conservation of charge.", "Conservation of energy.", "Conservation of momentum.", "Newton's third law."], correct: 1, explanation: "Conservation of energy. Electric potential is a well-defined property of every point in a circuit, so traveling all the way around any closed loop and returning to your starting point must bring you back to that same potential — meaning the net change in potential around the loop is exactly zero." },
    { id: "11-47", topic: "11.6 Kirchhoff's Loop Rule", stem: "A single-loop circuit has a 10 V battery and two resistors in series, 2.0 Ω and 3.0 Ω. Use the loop rule to find the current.", choices: ["0.5 A", "2.0 A", "5.0 A", "10 A"], correct: 1, explanation: "2.0 A. Applying the loop rule, the battery's voltage rise must equal the sum of the resistors' voltage drops: 10 = I(2.0) + I(3.0) = I(5.0), so I = 10/5.0 = 2.0 A. This is the same result you'd get from simply adding the resistors in series first, but framed explicitly through the loop-rule bookkeeping this section is building toward." },
    { id: "11-48", topic: "11.6 Kirchhoff's Loop Rule", stem: "A circuit loop has a 20 V battery and three resistors in series carrying a current of 1.0 A: a 4.0 Ω resistor, a 6.0 Ω resistor, and an unknown resistor R. Use the loop rule to find R.", choices: ["4.0 Ω", "6.0 Ω", "10 Ω", "20 Ω"], correct: 2, explanation: "10 Ω. The loop rule gives: 20 = (1.0)(4.0) + (1.0)(6.0) + (1.0)(R) = 4.0 + 6.0 + R = 10 + R. Solving, R = 20 − 10 = 10 Ω." },
    { id: "11-49", topic: "11.6 Kirchhoff's Loop Rule", stem: "When applying the loop rule, crossing a battery from its negative terminal to its positive terminal represents a voltage ______, while crossing a resistor in the direction of current flow represents a voltage ______.", choices: ["rise; drop", "drop; rise", "rise; rise", "drop; drop"], correct: 0, explanation: "Rise; drop. Moving from − to + inside a battery gains potential (a rise), while moving through a resistor in the direction current flows always loses potential (a drop) — current only flows from high to low potential through a resistor, never the reverse." },
    { id: "11-50", topic: "11.6 Kirchhoff's Loop Rule", stem: "A loop contains two batteries oriented so they oppose each other — 12 V and 6.0 V — in series with a 3.0 Ω resistor. Find the current in the loop.", choices: ["0.5 A", "2.0 A", "3.0 A", "6.0 A"], correct: 1, explanation: "2.0 A. When batteries oppose each other in the same loop, their EMFs subtract rather than add: net EMF = 12 − 6.0 = 6.0 V. Then I = net EMF/R = 6.0/3.0 = 2.0 A — the stronger battery wins out and drives the current in its preferred direction." },
    { id: "11-51", topic: "11.6 Kirchhoff's Loop Rule", stretch: true, stem: "In the same opposing-battery loop (12 V and 6.0 V opposing, 3.0 Ω resistor, current 2.0 A), find the power delivered by the 12 V battery and the power absorbed by the 6.0 V battery.", choices: ["24 W delivered by the 12 V battery; 12 W absorbed by the 6.0 V battery.", "12 W delivered; 24 W absorbed.", "6.0 W delivered; 3.0 W absorbed.", "18 W delivered; 18 W absorbed."], correct: 0, explanation: "24 W delivered; 12 W absorbed. Using P = IV for each battery with the same current I = 2.0 A: the 12 V battery delivers P = (2.0)(12) = 24 W, while the weaker 6.0 V battery has current forced backward through it by the stronger battery, meaning it ABSORBS power instead of supplying it: P = (2.0)(6.0) = 12 W. This 'one battery charging another' scenario is real and important (it's literally how battery charging circuits work), but it's a more applied, circuit-design-flavored idea than the typical single-battery loop-rule question the AP2 exam usually tests." },
    { id: "11-52", topic: "11.6 Kirchhoff's Loop Rule", stretch: true, stem: "A two-loop circuit has three unknown branch currents. In general, how many independent equations (combining loop-rule and junction-rule equations) are needed to solve for all three currents?", choices: ["1", "2", "3", "6"], correct: 2, explanation: "3. You need as many independent equations as unknowns — here, 3 unknown currents require 3 independent equations, typically assembled from some combination of loop-rule equations (one per independent loop) and junction-rule equations (one per independent junction). This is more of a problem-solving strategy question than a direct content question — useful to internalize before tackling a genuinely complex multi-loop FRQ, but it's testing exam technique as much as physics itself." },
    { id: "11-53", topic: "11.6 Kirchhoff's Loop Rule", stem: "A loop contains a battery and a single resistor. A student mistakenly treats the resistor's voltage drop as a voltage RISE instead when applying the loop rule. What would the resulting (incorrect) equation predict?", choices: ["It would still give the correct current, since only magnitude matters.", "It would give a negative value for the current, incorrectly suggesting the wrong direction.", "It would give a current exactly twice the correct value.", "It would produce no solvable equation at all."], correct: 1, explanation: "It gives a negative current, incorrectly implying the wrong direction. The correct equation is ε − IR = 0, giving I = ε/R (positive). Flipping the resistor's sign gives ε + IR = 0, which solves to I = −ε/R — the same magnitude, but a negative sign that would be misread as current flowing the opposite way. This is exactly why careful sign bookkeeping matters in loop-rule problems: a sign error doesn't just give a wrong number, it gives a wrong physical story." },
    { id: "11-54", topic: "11.7 Kirchhoff's Junction Rule", stem: "At a junction, 5.0 A flows in through one wire, and current leaves through two wires — one carrying 2.0 A. Find the current in the other departing wire.", choices: ["2.0 A", "3.0 A", "5.0 A", "7.0 A"], correct: 1, explanation: "3.0 A. The junction rule requires total current in to equal total current out: 5.0 = 2.0 + I₂, so I₂ = 3.0 A." },
    { id: "11-55", topic: "11.7 Kirchhoff's Junction Rule", stem: "At a junction, three wires carry current IN: 2.0 A, 3.0 A, and 1.5 A. One wire carries current OUT. Find that current.", choices: ["1.5 A", "3.5 A", "5.0 A", "6.5 A"], correct: 3, explanation: "6.5 A. By the junction rule, total current out must equal total current in: 2.0 + 3.0 + 1.5 = 6.5 A. It doesn't matter how many wires are on each side — only that the totals balance." },
    { id: "11-56", topic: "11.7 Kirchhoff's Junction Rule", stem: "What physical principle underlies Kirchhoff's Junction rule?", choices: ["Conservation of energy.", "Conservation of charge.", "Conservation of momentum.", "Ohm's Law."], correct: 1, explanation: "Conservation of charge. Charge can't spontaneously appear or vanish at a junction, so whatever total charge flows in during any time interval must exactly equal what flows out during that same interval — current in equals current out." },
    { id: "11-57", topic: "11.7 Kirchhoff's Junction Rule", stem: "A battery connects to two parallel resistors, 4.0 Ω and 12 Ω, and supplies a total current of 4.0 A. Find the current through the 4.0 Ω resistor.", choices: ["1.0 A", "3.0 A", "4.0 A", "12 A"], correct: 1, explanation: "3.0 A. First find the shared voltage: R<sub>p</sub> = 1/(1/4.0 + 1/12) = 1/(3/12 + 1/12) = 1/(4/12) = 3.0 Ω, so V = IR<sub>total</sub> = (4.0)(3.0) = 12 V. Then, since both resistors share that same 12 V in parallel: I₄ = V/R = 12/4.0 = 3.0 A. This ties the junction rule directly to the current-splits-inversely-with-resistance behavior of parallel branches." },
    { id: "11-58", topic: "11.7 Kirchhoff's Junction Rule", stem: "At a junction, current flows IN through two wires (I₁ and I₂) and OUT through two other wires (I₃ and I₄). Write the junction rule equation relating all four currents.", choices: ["I₁ = I₂ = I₃ = I₄", "I₁ + I₂ = I₃ + I₄", "I₁ − I₂ = I₃ − I₄", "I₁I₂ = I₃I₄"], correct: 1, explanation: "I₁ + I₂ = I₃ + I₄. The junction rule always takes this shape — sum of currents in equals sum of currents out — no matter how many wires are involved on each side of the junction." },
    { id: "11-59", topic: "11.7 Kirchhoff's Junction Rule", stem: "In a parallel circuit, is it possible for the current through one branch to be larger than the total current supplied by the battery?", choices: ["Yes, if that branch has very low resistance.", "Yes, if the branch contains a capacitor.", "No — the junction rule guarantees no single branch can exceed the total current.", "It depends on whether the battery is ideal."], correct: 2, explanation: "No, it's never possible. By the junction rule, the total current entering the parallel section (equal to the battery's total output) must equal the sum of ALL the branch currents combined — so no single branch can carry more than that total on its own. This is a useful sanity check: if you ever calculate a branch current larger than the total, that's a signal to go back and find your error." },
    { id: "11-60", topic: "11.8 RC Circuits", stem: "A capacitor charges through a resistor from an ideal battery. Describe how the current in the circuit changes from the instant the switch closes onward.", choices: ["Current starts at zero and increases toward a maximum.", "Current starts at a maximum and decreases toward zero.", "Current stays constant throughout the charging process.", "Current oscillates between zero and a maximum value."], correct: 1, explanation: "Current starts at a maximum and decreases toward zero. An uncharged capacitor initially offers no resistance to charge flow (it behaves like a plain wire at that first instant), so current starts as high as it can be for that circuit. As charge accumulates on the capacitor's plates, it becomes progressively harder to add more, so current tapers off, approaching zero as the capacitor nears full charge." },
    { id: "11-61", topic: "11.8 RC Circuits", stem: "Immediately after a switch closes in a series RC circuit (capacitor initially uncharged), what is the voltage across the capacitor, and what is the voltage across the resistor?", choices: ["Capacitor: full battery voltage. Resistor: zero.", "Capacitor: zero. Resistor: full battery voltage.", "Both share the battery voltage equally.", "Both are zero at that instant."], correct: 1, explanation: "Capacitor: zero. Resistor: full battery voltage. An uncharged capacitor has no charge separated on its plates yet, so it contributes zero voltage drop at that first instant. By the loop rule, all of the battery's voltage must then appear across the resistor instead." },
    { id: "11-62", topic: "11.8 RC Circuits", stem: "A long time after a switch closes in a series RC circuit, what is the voltage across the capacitor, and what is the current in the circuit?", choices: ["Capacitor: full battery voltage. Current: zero.", "Capacitor: zero. Current: maximum.", "Capacitor: half the battery voltage. Current: half its initial value.", "Capacitor: full battery voltage. Current: unchanged from its initial value."], correct: 0, explanation: "Capacitor: full battery voltage. Current: zero. Once fully charged, the capacitor can't accept any more charge, so current throughout the loop drops to zero. With zero current, the resistor has zero voltage drop (V = IR = 0), so by the loop rule, the entire battery voltage ends up across the fully-charged capacitor instead." },
    { id: "11-63", topic: "11.8 RC Circuits", stem: "A capacitor charges through a resistor from a 12 V battery. A long time after the switch closes, find the final charge on the capacitor if its capacitance is 4.0 μF.", choices: ["3.0 μC", "33 μC", "48 μC", "480 μC"], correct: 2, explanation: "48 μC. A fully-charged capacitor in this circuit has the full battery voltage across it (from the t → ∞ limit reasoning above), so Q = CΔV = (4.0×10⁻⁶)(12) = 4.8×10⁻⁵ C = 48 μC." },
    { id: "11-64", topic: "11.8 RC Circuits", stem: "A fully-charged capacitor discharges through a resistor after the battery is removed and replaced with a plain wire. Compare the direction of current flow during discharge to the direction during the original charging process.", choices: ["Current flows in the same direction during both charging and discharging.", "Current flows in the opposite direction during discharge compared to charging.", "There is no current during discharge, only during charging.", "The direction depends on the specific values of R and C."], correct: 1, explanation: "Opposite direction. During charging, the battery pushes charge onto the capacitor's plates in one direction. During discharge, the capacitor itself becomes the source, pushing that stored charge back out through the resistor the way it came — which means the current flows in reverse compared to the charging process." },
    { id: "11-65", topic: "11.8 RC Circuits", stem: "In an RC circuit, the resistance R is increased while capacitance and battery voltage stay the same. How does this affect the INITIAL current at the moment the switch closes, and how does it affect the FINAL charge once the capacitor is fully charged?", choices: ["Initial current decreases; final charge is unchanged.", "Initial current increases; final charge is unchanged.", "Initial current decreases; final charge decreases.", "Initial current is unchanged; final charge decreases."], correct: 0, explanation: "Initial current decreases; final charge is unchanged. At the very first instant, the capacitor acts like a plain wire, so initial current is just I = ε/R — a larger R directly gives a smaller initial current. But the final charge, Q<sub>final</sub> = CΔV, depends only on capacitance and battery voltage, not on resistance at all — resistance only controls HOW FAST the capacitor charges, never how much charge it ultimately ends up holding. This distinction — resistance changes the speed of the process but never the final state — is one of the most testable ideas in this whole section." },
  ],
  12: [
    { id: "12-1", topic: "12.1 Magnetic Fields", stem: "What is true about magnetic monopoles (an isolated north or south pole, with no opposite pole attached)?", choices: ["They have been directly observed in strong enough fields.", "They have never been observed — magnetic poles always occur in N-S pairs.", "They exist only inside current-carrying wires.", "They exist only at absolute zero temperature."], correct: 1, explanation: "Never observed — poles always come in pairs. Cut a bar magnet in half and you don't get an isolated N piece and S piece; you get two smaller complete magnets, each with its own N and S. This is a fundamental contrast to electric charge, where isolated positive or negative charges are completely ordinary." },
    { id: "12-2", topic: "12.1 Magnetic Fields", stem: "A charged particle moves through a magnetic field, constantly changing direction but never changing speed. What can be concluded about the work done by the magnetic force on it?", choices: ["The magnetic force does positive work, increasing kinetic energy.", "The magnetic force does zero work at every instant.", "The magnetic force does negative work, decreasing kinetic energy.", "Work cannot be determined without knowing the field strength."], correct: 1, explanation: "Zero work, always. The magnetic force is perpendicular to velocity at every instant (by definition, since F = qv × B), and a force perpendicular to motion does zero work (W = Fd cosθ, with θ = 90°). This is exactly why the particle's speed stays constant even as its direction constantly changes — the two facts aren't a coincidence, one directly causes the other." },
    { id: "12-3", topic: "12.1 Magnetic Fields", stem: "A charge of magnitude 2.0×10⁻⁶ C moving at 5.0×10³ m/s perpendicular to a magnetic field experiences a force of 3.0×10⁻⁴ N. Find the field strength.", choices: ["0.0030 T", "0.030 T", "0.30 T", "3.0 T"], correct: 1, explanation: "B = 0.030 T. Using F = qvB, solve for B: B = F/(qv) = (3.0×10⁻⁴)/[(2.0×10⁻⁶)(5.0×10³)] = (3.0×10⁻⁴)/(1.0×10⁻²) = 0.030 T." },
    { id: "12-4", topic: "12.1 Magnetic Fields", stem: "A charged particle moves at constant velocity through a region containing both a uniform electric field and a uniform magnetic field, with the two forces exactly balancing (a velocity selector). If the particle's speed increases while both fields stay the same, what happens to the net force on it?", choices: ["The net force stays zero, since both forces scale with the fields equally.", "The net force becomes nonzero, since the magnetic force depends on speed but the electric force doesn't.", "The net force becomes nonzero, since the electric force depends on speed but the magnetic force doesn't.", "The net force stays zero as long as the particle stays inside the field region."], correct: 1, explanation: "The forces stop balancing, and net force becomes nonzero. The electric force (qE) doesn't depend on the particle's speed at all, but the magnetic force (qvB) grows directly with speed. So if speed increases past the exact value where the two forces originally matched, the magnetic force now exceeds the electric force, breaking the balance. This asymmetry — one force speed-dependent, the other not — is exactly what makes a velocity selector work: only particles at one specific speed pass through undeflected." },
    { id: "12-5", topic: "12.1 Magnetic Fields", stem: "Find the magnitude of the force on a charge of 4.0×10⁻⁶ C moving at 2.0×10⁴ m/s at a 30° angle to a 0.50 T field.", choices: ["1.0 × 10⁻² N", "2.0 × 10⁻² N", "4.0 × 10⁻² N", "8.0 × 10⁻² N"], correct: 1, explanation: "F = 2.0 × 10⁻² N. Using F = qvBsinθ = (4.0×10⁻⁶)(2.0×10⁴)(0.50)(sin 30°) = (0.080)(0.50)(0.50) = 0.020 N. Don't forget the sinθ factor — it's easy to compute qvB and stop there, forgetting the angle isn't 90°." },
    { id: "12-6", topic: "12.1 Magnetic Fields", stem: "Which combination of units is equivalent to the tesla (the SI unit of magnetic field)?", choices: ["N/(A·m)", "N·m/A", "A/(N·m)", "N·A/m"], correct: 0, explanation: "N/(A·m). Starting from F = qvB, solving for B gives units of N/(C·m/s) = N·s/(C·m). Since current is charge per time (A = C/s), this simplifies to N/(A·m) — force per unit current per unit length, which also matches the F = BIL equation directly." },
    { id: "12-7", topic: "12.1 Magnetic Fields", stem: "A charged particle moves in a circular path in a uniform magnetic field. If the particle's charge is doubled while its speed, mass, and the field strength stay the same, how does the radius of its path change?", choices: ["It doubles.", "It is cut in half.", "It quadruples.", "It stays the same."], correct: 1, explanation: "The radius is cut in half. From r = mv/(qB), charge sits in the denominator — doubling q with everything else fixed halves r. A more strongly charged particle feels a proportionally stronger force, letting the field turn it into a tighter circle." },
    { id: "12-8", topic: "12.1 Magnetic Fields", stem: "A charged particle moves in a circular path in a uniform magnetic field. If the particle's mass is doubled while charge, speed, and field strength stay the same, how does the radius change?", choices: ["It doubles.", "It is cut in half.", "It quadruples.", "It stays the same."], correct: 0, explanation: "The radius doubles. From r = mv/(qB), mass sits in the numerator — a more massive particle has more inertia, resisting the turning force more, so it traces a larger circle for the same field and speed." },
    { id: "12-9", topic: "12.2 Force on Moving Charges", stem: "A proton moves in the +x direction (to the right) through a field pointing in the +y direction (straight up). Find the direction of the magnetic force on it.", choices: ["Out of the page", "Into the page", "In the +x direction", "In the −y direction"], correct: 0, explanation: "Out of the page. Point your fingers along +x (velocity), curl them toward +y (the field) — your thumb ends up pointing out of the page. Since the charge is positive, that's the force direction directly, no flip needed." },
    { id: "12-10", topic: "12.2 Force on Moving Charges", stem: "An electron moves in the +x direction through a field pointing in the +y direction. Find the direction of the magnetic force on it.", choices: ["Out of the page", "Into the page", "In the +x direction", "In the −y direction"], correct: 1, explanation: "Into the page. The right-hand rule gives out-of-the-page for a POSITIVE charge in this setup — but the electron is negative, so flip the result 180°: into the page. Same v and B as the previous question, opposite answer, purely because of the charge sign." },
    { id: "12-11", topic: "12.2 Force on Moving Charges", stem: "A proton moves to the right (+x) through a field pointing into the page. Find the direction of the magnetic force on it.", choices: ["Upward", "Downward", "To the left", "To the right"], correct: 0, explanation: "Upward. Fingers point right (velocity), curl into the page (field direction) — thumb points up. Positive charge, so no flip needed: the force is straight up." },
    { id: "12-12", topic: "12.2 Force on Moving Charges", stem: "An electron moves to the right (+x) through a field pointing into the page. Find the direction of the magnetic force on it.", choices: ["Upward", "Downward", "To the left", "To the right"], correct: 1, explanation: "Downward. The right-hand rule gives upward for a positive charge in this exact setup (as in the previous question) — flip it for the negative electron: downward." },
    { id: "12-13", topic: "12.2 Force on Moving Charges", stem: "A positive charge moves straight up (+y) through a field pointing out of the page. Find the direction of the magnetic force.", choices: ["To the right", "To the left", "Upward", "Downward"], correct: 0, explanation: "To the right. Fingers point up (velocity), curl out of the page (field) — thumb points to the right. Positive charge, direct result, no flip needed." },
    { id: "12-14", topic: "12.2 Force on Moving Charges", stem: "A negative charge moves straight up (+y) through a field pointing out of the page. Find the direction of the magnetic force.", choices: ["To the right", "To the left", "Upward", "Downward"], correct: 1, explanation: "To the left. Same v and B as the previous question give 'to the right' for a positive charge — flip it for the negative charge: to the left." },
    { id: "12-15", topic: "12.2 Force on Moving Charges", stem: "An electron moves at 4.0×10⁶ m/s in a circular path of radius 0.050 m in a magnetic field. Find the field strength.", choices: ["4.6 × 10⁻⁵ T", "4.6 × 10⁻⁴ T", "4.6 × 10⁻³ T", "4.6 × 10⁻² T"], correct: 1, explanation: "B ≈ 4.6 × 10⁻⁴ T. Rearranging r = mv/(qB): B = mv/(rq) = (9.11×10⁻³¹)(4.0×10⁶)/[(0.050)(1.6×10⁻¹⁹)] ≈ 4.6×10⁻⁴ T." },
    { id: "12-16", topic: "12.2 Force on Moving Charges", stem: "A proton moving at 1.0×10⁵ m/s enters a 0.20 T field perpendicular to its velocity. Find the radius of its circular path.", choices: ["5.2 × 10⁻⁴ m", "5.2 × 10⁻³ m", "5.2 × 10⁻² m", "5.2 × 10⁻¹ m"], correct: 1, explanation: "r ≈ 5.2 × 10⁻³ m. Using r = mv/(qB) = (1.67×10⁻²⁷)(1.0×10⁵)/[(1.6×10⁻¹⁹)(0.20)] ≈ 5.2×10⁻³ m." },
    { id: "12-17", topic: "12.2 Force on Moving Charges", stem: "A proton and an alpha particle (charge +2e, mass about 4 times the proton's mass) move at the same speed perpendicular to the same magnetic field. Compare their radii of circular motion.", choices: ["r<sub>alpha</sub> = r<sub>proton</sub>", "r<sub>alpha</sub> = 2 r<sub>proton</sub>", "r<sub>alpha</sub> = r<sub>proton</sub>/2", "r<sub>alpha</sub> = 4 r<sub>proton</sub>"], correct: 1, explanation: "r<sub>alpha</sub> = 2 r<sub>proton</sub>. Using r = mv/(qB): the alpha particle's mass is 4× the proton's, but its charge is 2× — so its radius is (4/2) = 2× the proton's radius. Both effects push in the same direction here (more mass increases r, but more charge decreases r), so you have to combine them carefully rather than assuming they cancel." },
    { id: "12-18", topic: "12.2 Force on Moving Charges", stretch: true, stem: "A charged particle moves in a circle of radius r with period T in a magnetic field. If the field strength B is doubled (speed, mass, and charge unchanged), how does the period change?", choices: ["It doubles.", "It is cut in half.", "It quadruples.", "It stays the same."], correct: 1, explanation: "The period is cut in half. Combining T = 2πr/v with r = mv/(qB) gives T = 2πm/(qB) — notice speed v actually cancels out completely, meaning the period of circular motion doesn't depend on how fast the particle is moving, only on its mass, charge, and the field strength. Doubling B directly halves T. This speed-independence of the period is a genuinely elegant result (it's the whole principle behind a cyclotron), but it's a step beyond what the r = mv/(qB) formula alone tells you, and it's more heavily emphasized in AP Physics C than in the algebra-based Physics 2 course." },
    { id: "12-19", topic: "12.2 Force on Moving Charges", stem: "A charged particle undergoes uniform circular motion in a magnetic field. Which of the following remains constant throughout the motion?", choices: ["Velocity", "Kinetic energy", "The direction of the magnetic force", "Momentum"], correct: 1, explanation: "Kinetic energy (and therefore speed) stays constant — this is the one true scalar invariant here, since the magnetic force never does work. Velocity, momentum, and the force direction are all vectors whose DIRECTION constantly changes throughout the circular motion, even though their magnitudes (speed, momentum magnitude, force magnitude) stay fixed. Watch for this distinction between a vector quantity and its magnitude." },
    { id: "12-20", topic: "12.2 Force on Moving Charges", stem: "A beam containing both protons and electrons, all moving at the same velocity, enters a region of uniform magnetic field perpendicular to that velocity. Compare their paths.", choices: ["They curve in the same direction, with equal radii.", "They curve in opposite directions, with equal radii.", "They curve in opposite directions, with very different radii (proton's radius much larger).", "They curve in the same direction, with very different radii."], correct: 2, explanation: "Opposite directions, very different radii. The opposite charge signs (proton positive, electron negative) guarantee the two curve in opposite directions. But the proton is about 1800 times more massive than the electron, and since r = mv/(qB) depends on mass directly, the proton's much greater inertia gives it a vastly larger radius — its path barely curves at all compared to the electron's tight little circle, even with equal charge magnitude and equal speed." },
    { id: "12-21", topic: "12.2 Force on Moving Charges", stem: "An alpha particle (charge 3.2×10⁻¹⁹ C, mass 6.64×10⁻²⁷ kg) moves at 5.0×10⁵ m/s perpendicular to a 0.40 T field. Find the radius of its circular path.", choices: ["2.6 × 10⁻³ m", "2.6 × 10⁻² m", "2.6 × 10⁻¹ m", "2.6 m"], correct: 1, explanation: "r ≈ 2.6 × 10⁻² m. Using r = mv/(qB) = (6.64×10⁻²⁷)(5.0×10⁵)/[(3.2×10⁻¹⁹)(0.40)] ≈ 2.6×10⁻² m." },
    { id: "12-22", topic: "12.2 Force on Moving Charges", stem: "A charged particle moves through a nonzero magnetic field along a perfectly straight path, with no deflection at all. What can be concluded?", choices: ["The particle's velocity must be parallel (or antiparallel) to the field everywhere along the path.", "The field must actually be zero, despite appearances.", "The particle's charge must be zero.", "This situation is physically impossible for a charged particle."], correct: 0, explanation: "Velocity is parallel (or antiparallel) to the field. Force is F = qvBsinθ, and the only way to get zero force from a genuinely nonzero charge, speed, and field is sinθ = 0, meaning θ = 0° or 180° — motion exactly along the field's own direction. Any other angle would produce a deflecting force." },
    { id: "12-23", topic: "12.2 Force on Moving Charges", stem: "Three identical charges move at the same speed through the same magnetic field, but at angles of 30°, 60°, and 90° to the field, respectively. Rank the magnitude of the magnetic force on each from greatest to least.", choices: ["90° > 60° > 30°", "30° > 60° > 90°", "60° > 90° > 30°", "All three experience equal force"], correct: 0, explanation: "90° > 60° > 30°. Force depends on sinθ, which increases steadily from 0° to 90° (sin30° = 0.5, sin60° ≈ 0.87, sin90° = 1). The charge moving exactly perpendicular to the field feels the strongest force; the more nearly parallel the motion, the weaker the force." },
    { id: "12-24", topic: "12.2 Force on Moving Charges", stem: "A charged particle moves through a region where the magnetic field is uniform in magnitude but its direction is always kept exactly perpendicular to the particle's instantaneous velocity. Describe the resulting motion.", choices: ["Uniform circular motion, same as the standard case.", "A straight-line path at increasing speed.", "A spiral that grows outward over time.", "The particle comes to rest."], correct: 0, explanation: "Uniform circular motion — exactly the standard result. Perpendicularity between force and velocity is the one condition that guarantees circular motion, regardless of how that perpendicularity is maintained or described. This scenario is really just restating the ordinary uniform-field case in different words." },
    { id: "12-25", topic: "12.2 Force on Moving Charges", stem: "A charged particle undergoes circular motion of radius r₁ in field B₁. The field is then changed to B₂ = 3B₁, with the particle's charge, mass, and speed unchanged. Find the new radius in terms of r₁.", choices: ["r₁/9", "r₁/3", "3r₁", "9r₁"], correct: 1, explanation: "r₁/3. Since r = mv/(qB), radius is inversely proportional to field strength — tripling B cuts the radius to one-third." },
    { id: "12-26", topic: "12.2 Force on Moving Charges", stretch: true, stem: "An electron and a proton move with the SAME kinetic energy (not the same speed) perpendicular to the same magnetic field. Compare their radii of circular motion.", choices: ["Equal radii, since kinetic energy is equal.", "The proton's radius is much larger, by a factor of √(m<sub>proton</sub>/m<sub>electron</sub>).", "The electron's radius is much larger, by a factor of √(m<sub>proton</sub>/m<sub>electron</sub>).", "Equal radii, since charge magnitude is equal."], correct: 1, explanation: "The proton's radius is much larger. This requires re-deriving the radius formula in terms of kinetic energy rather than speed: since KE = ½mv², v = √(2KE/m), so r = mv/(qB) = √(2mKE)/(qB) — meaning r ∝ √m when KE and q are equal. Since the proton is far more massive, its radius comes out much larger, by a factor of √(m<sub>proton</sub>/m<sub>electron</sub>) ≈ 43. This substitution step — swapping speed for kinetic energy inside the radius formula — is a genuine extra layer of algebra beyond simply plugging into r = mv/(qB) directly, which is why it's flagged here rather than treated as routine." },
    { id: "12-27", topic: "12.3 Current-Carrying Wires", stem: "A wire carries 5.0 A and is 0.40 m long, oriented perpendicular to a 0.30 T field. Find the force on the wire.", choices: ["0.15 N", "0.60 N", "1.5 N", "6.0 N"], correct: 1, explanation: "F = 0.60 N. Using F = BIL = (0.30)(5.0)(0.40) = 0.60 N, with sinθ = 1 since the wire is perpendicular to the field." },
    { id: "12-28", topic: "12.3 Current-Carrying Wires", stem: "A current-carrying wire is oriented parallel to an external magnetic field. Find the force on the wire.", choices: ["Zero", "BIL, its maximum possible value", "BIL/2", "Cannot be determined without knowing the current"], correct: 0, explanation: "Zero. Force on a wire is F = BILsinθ, and parallel orientation means θ = 0°, giving sinθ = 0 regardless of how large the current or field is." },
    { id: "12-29", topic: "12.3 Current-Carrying Wires", stem: "Find the magnetic field 0.10 m from a long, straight wire carrying 8.0 A.", choices: ["1.6 × 10⁻⁶ T", "1.6 × 10⁻⁵ T", "1.6 × 10⁻⁴ T", "1.6 × 10⁻³ T"], correct: 1, explanation: "B = 1.6 × 10⁻⁵ T. Using B = μ₀I/(2πr) = (4π×10⁻⁷)(8.0)/(2π×0.10) — the π cancels, leaving (2×10⁻⁷)(8.0)/0.10 = 1.6×10⁻⁵ T." },
    { id: "12-30", topic: "12.3 Current-Carrying Wires", stem: "If the distance from a long, straight current-carrying wire is doubled, how does the magnetic field strength there change?", choices: ["It doubles.", "It is cut in half.", "It quadruples.", "It is cut to one-fourth."], correct: 1, explanation: "It's cut in half. The field from a long straight wire falls off as B ∝ 1/r — a direct inverse relationship, NOT inverse-square like a point charge's electric field. Doubling the distance simply halves the field. Keeping this different falloff rate separate from Coulomb's Law's 1/r² in your memory is worth the deliberate effort." },
    { id: "12-31", topic: "12.3 Current-Carrying Wires", stem: "If the current in a long, straight wire is tripled, how does the field at a fixed distance change?", choices: ["It triples.", "It increases ninefold.", "It is cut to one-third.", "It stays the same."], correct: 0, explanation: "It triples. B = μ₀I/(2πr) is directly proportional to current, so tripling I triples B — a straightforward linear relationship." },
    { id: "12-32", topic: "12.3 Current-Carrying Wires", stem: "A long, straight wire carries current straight upward (+y). Find the direction of the magnetic field at a point located to the right of the wire.", choices: ["Into the page", "Out of the page", "Upward, parallel to the wire", "Directly away from the wire"], correct: 0, explanation: "Into the page. Grip the wire with your right thumb pointing up (along the current); your fingers curl around the wire. At a point to the right of the wire, that curl points into the page." },
    { id: "12-33", topic: "12.3 Current-Carrying Wires", stem: "The same wire carries current straight upward. Find the direction of the magnetic field at a point located to the LEFT of the wire.", choices: ["Into the page", "Out of the page", "Downward, parallel to the wire", "Directly toward the wire"], correct: 1, explanation: "Out of the page. This is the exact opposite side from the previous question, and the field reverses accordingly — the field circles all the way around the wire, so opposite sides always have opposite field directions relative to the page." },
    { id: "12-34", topic: "12.3 Current-Carrying Wires", stem: "Two long, parallel wires carry current in the SAME direction. Explain, from the underlying physics (not just the memorized rule), whether they attract or repel.", choices: ["Attract — Wire 1's field at Wire 2's location, combined with Wire 2's current, produces a force pulling the wires together.", "Repel — like currents behave like like charges and push apart.", "Neither — parallel wires never exert force on each other.", "It depends on the wires' exact separation distance."], correct: 0, explanation: "Attract. Wire 1 creates a field that circles around it; at Wire 2's location, that field has a specific direction (found via the grip rule). Applying F = IL × B to Wire 2 sitting in that field shows the resulting force pulls Wire 2 toward Wire 1. This is a genuine reversal of electric-charge intuition — parallel (same-direction) currents attract, while antiparallel currents repel, exactly backwards from how like and unlike electric charges behave." },
    { id: "12-35", topic: "12.3 Current-Carrying Wires", stem: "Two long parallel wires, each carrying 6.0 A in the same direction, are separated by 0.020 m. Find the field that Wire 1 creates at Wire 2's location.", choices: ["6.0 × 10⁻⁶ T", "6.0 × 10⁻⁵ T", "6.0 × 10⁻⁴ T", "6.0 × 10⁻³ T"], correct: 1, explanation: "B = 6.0 × 10⁻⁵ T. Using B = μ₀I/(2πr) = (4π×10⁻⁷)(6.0)/(2π×0.020), the π cancels: (2×10⁻⁷)(6.0)/0.020 = 6.0×10⁻⁵ T." },
    { id: "12-36", topic: "12.3 Current-Carrying Wires", stem: "Using the field from the previous question (6.0×10⁻⁵ T) and Wire 2 also carrying 6.0 A, find the magnetic force between the wires over a 1.0 m length.", choices: ["3.6 × 10⁻⁵ N", "3.6 × 10⁻⁴ N", "3.6 × 10⁻³ N", "3.6 × 10⁻² N"], correct: 1, explanation: "F = 3.6 × 10⁻⁴ N. Using F = BIL = (6.0×10⁻⁵)(6.0)(1.0) = 3.6×10⁻⁴ N — treating Wire 2 as a current-carrying wire sitting in Wire 1's field, exactly like any other force-on-a-wire problem." },
    { id: "12-37", topic: "12.3 Current-Carrying Wires", stem: "Describe the general shape of the magnetic field created by a single current-carrying loop of wire.", choices: ["Field lines run in straight parallel lines through the loop.", "Field lines pass through the loop's center and curve back around outside it, resembling a bar magnet's field.", "The field is zero everywhere except exactly at the wire itself.", "Field lines form concentric circles centered on the loop's edge only."], correct: 1, explanation: "Resembles a bar magnet's field. The looped current creates a concentrated, roughly uniform field through the center, with field lines curving back around outside the loop to close the loop — one face of the current loop effectively acts like a north pole, the other like a south pole, with the direction set by the loop's own right-hand rule." },
    { id: "12-38", topic: "12.3 Current-Carrying Wires", stem: "A wire loop lies flat, with current flowing counterclockwise when viewed from above. Find the direction of the magnetic field at the center of the loop.", choices: ["Upward, out of the loop", "Downward, into the loop", "Radially outward from the center", "Radially inward toward the center"], correct: 0, explanation: "Upward. Curl your right-hand fingers in the direction of the current (counterclockwise, viewed from above) — your thumb points straight up, out of the loop's plane, giving the field direction at the center." },
    { id: "12-39", topic: "12.3 Current-Carrying Wires", stem: "The same loop now carries current clockwise when viewed from above. Find the field direction at the center.", choices: ["Upward, out of the loop", "Downward, into the loop", "Radially outward from the center", "Radially inward toward the center"], correct: 1, explanation: "Downward. Reversing the current direction reverses the curl of your fingers, and therefore flips the thumb's direction — the exact opposite of the counterclockwise case." },
    { id: "12-40", topic: "12.3 Current-Carrying Wires", stem: "Compare how quickly the magnetic field weakens with distance for (a) a single point charge's electric field, versus (b) a long, straight current-carrying wire's magnetic field.", choices: ["Both fall off as 1/r².", "Both fall off as 1/r.", "The point charge's field falls off as 1/r²; the wire's field falls off more gently, as 1/r.", "The point charge's field falls off as 1/r; the wire's field falls off as 1/r²."], correct: 2, explanation: "Point charge: 1/r² (inverse-square). Wire: 1/r (a gentler falloff). It's easy to default to the inverse-square pattern out of habit, since it's so central to Coulomb's Law and electric fields — but the long-wire magnetic field genuinely follows a different rule, and mixing the two up is a common, avoidable error." },
    { id: "12-41", topic: "12.3 Current-Carrying Wires", stem: "A wire carries current I at a 40° angle to a 0.25 T field, experiencing a force of 0.60 N over a 2.0 m length. Find I.", choices: ["0.75 A", "1.9 A", "3.0 A", "4.7 A"], correct: 1, explanation: "I ≈ 1.9 A. Rearranging F = BILsinθ: I = F/(BLsinθ) = 0.60/[(0.25)(2.0)(sin 40°)] ≈ 0.60/0.322 ≈ 1.9 A." },
    { id: "12-42", topic: "12.3 Current-Carrying Wires", stem: "A current-carrying wire segment experiences zero net magnetic force despite sitting in a strong external field. What can be concluded?", choices: ["The wire must be oriented parallel (or antiparallel) to the field.", "The wire must be oriented perpendicular to the field.", "The current in the wire must be zero.", "This situation is physically impossible."], correct: 0, explanation: "Parallel (or antiparallel) to the field. F = BILsinθ = 0 with nonzero B, I, and L requires sinθ = 0, meaning θ = 0° or 180° — the wire runs along the same line as the field, with no perpendicular component to generate a force." },
    { id: "12-43", topic: "12.3 Current-Carrying Wires", stretch: true, stem: "Compare the magnetic field strength at the center of a current loop to the field at an equivalent distance from a long straight wire carrying the same current.", choices: ["The loop's center field is stronger, since contributions from every segment of the wire add together at that central point.", "The straight wire's field is always stronger, since it extends infinitely in both directions.", "They are always exactly equal for the same current.", "The comparison depends entirely on the wire's resistivity."], correct: 0, explanation: "The loop's center field is stronger. A looped wire concentrates the magnetic contribution from every point along its length toward the same central location, where they add constructively — a straight wire's field at a given point, by contrast, only benefits from the portions of wire nearest that point, without the same 'focusing' effect. This is a genuinely useful comparison, but it's more qualitative than the direct formula-based questions this section usually asks, since a precise loop-center-field formula isn't heavily emphasized in the AP2 course description." },
    { id: "12-44", topic: "12.3 Current-Carrying Wires", stretch: true, stem: "A charged particle moves directly toward a long, straight current-carrying wire (radially, in the plane perpendicular to the wire). What is the magnetic force on the particle at that instant?", choices: ["Zero, since the particle's velocity points straight at the field's source.", "Nonzero, directed parallel to the wire itself, since the particle's radial velocity is perpendicular to the wire's circular field everywhere.", "Nonzero, directed radially, pushing the particle either toward or away from the wire.", "The force cannot be determined without knowing the particle's exact starting distance."], correct: 1, explanation: "Nonzero, directed parallel to the wire. The wire's field circles around it (tangential to circles centered on the wire), while the particle's velocity is radial (pointing straight at the wire) — radial and tangential directions are always perpendicular to each other, so sinθ = 1 and a genuine force exists, with magnitude qvB. Since F must be perpendicular to both v (radial) and B (tangential), the only direction left is along the wire's own length. This requires visualizing the wire's cylindrical field symmetry with a non-standard (radial) velocity direction, which goes past the simple axis-aligned setups this section usually tests." },
    { id: "12-45", topic: "12.4 Electromagnetic Induction", stem: "Find the magnetic flux through a 0.030 m² loop with a 0.50 T field perpendicular to the loop's plane.", choices: ["0.0075 Wb", "0.015 Wb", "0.030 Wb", "0.060 Wb"], correct: 1, explanation: "Φ = 0.015 Wb. Using Φ = BAcosθ with θ = 0° (field perpendicular to the loop means it's parallel to the loop's normal): Φ = (0.50)(0.030)(1) = 0.015 Wb." },
    { id: "12-46", topic: "12.4 Electromagnetic Induction", stem: "Find the flux through the same loop (0.030 m², 0.50 T) if the field instead makes a 60° angle with the loop's normal direction.", choices: ["0.0075 Wb", "0.013 Wb", "0.015 Wb", "0.026 Wb"], correct: 0, explanation: "Φ = 0.0075 Wb. Using Φ = BAcosθ = (0.50)(0.030)(cos 60°) = (0.015)(0.5) = 0.0075 Wb — half of the maximum flux found in the previous question, since cos 60° = 0.5 exactly." },
    { id: "12-47", topic: "12.4 Electromagnetic Induction", stem: "A loop is oriented so the magnetic field runs exactly parallel to the loop's surface (grazing along it, rather than passing through). Find the flux through the loop.", choices: ["Maximum possible flux, BA.", "Zero.", "Half of the maximum flux.", "Cannot be determined without knowing the loop's area."], correct: 1, explanation: "Zero. This is a common trap: 'field parallel to the surface' sounds like it should maximize something, but flux depends on alignment with the loop's NORMAL (perpendicular) direction, not the surface itself. A field running along the surface makes a 90° angle with the normal, and cos 90° = 0 — none of that field actually 'passes through' the loop in the sense flux measures." },
    { id: "12-48", topic: "12.4 Electromagnetic Induction", stem: "A loop's flux changes from 0.020 Wb to 0.050 Wb in 0.10 s. Find the magnitude of the induced EMF.", choices: ["0.030 V", "0.30 V", "3.0 V", "30 V"], correct: 1, explanation: "ε = 0.30 V. Using ε = ΔΦ/Δt = (0.050 − 0.020)/0.10 = 0.030/0.10 = 0.30 V." },
    { id: "12-49", topic: "12.4 Electromagnetic Induction", stem: "A loop's flux decreases from 0.080 Wb to 0.020 Wb over 0.30 s. Find the magnitude of the induced EMF.", choices: ["0.060 V", "0.20 V", "0.60 V", "2.0 V"], correct: 1, explanation: "ε = 0.20 V. Using ε = |ΔΦ|/Δt = |0.020 − 0.080|/0.30 = 0.060/0.30 = 0.20 V. The direction of change (decreasing rather than increasing) doesn't affect this magnitude calculation, only the direction of the resulting current, per Lenz's Law." },
    { id: "12-50", topic: "12.4 Electromagnetic Induction", stem: "A 20-turn coil experiences a flux change of 0.0030 Wb per turn over 0.15 s. Find the total induced EMF.", choices: ["0.020 V", "0.10 V", "0.40 V", "3.0 V"], correct: 2, explanation: "ε = 0.40 V. Using ε = N(ΔΦ/Δt) = (20)(0.0030/0.15) = (20)(0.020) = 0.40 V. Each additional turn of wire contributes its own EMF, and since they're wired in series, the total EMF is N times what a single loop alone would produce." },
    { id: "12-51", topic: "12.4 Electromagnetic Induction", stem: "A loop sits in a constant, unchanging magnetic field. Is any EMF induced?", choices: ["Yes, proportional to the field strength.", "No, regardless of how strong the field is.", "Yes, but only if the field exceeds 1 Tesla.", "It depends on the loop's resistance."], correct: 1, explanation: "No, regardless of field strength. Faraday's Law requires a CHANGE in flux to induce an EMF — a perfectly constant field through a stationary, fixed-area, fixed-orientation loop produces zero flux change, and therefore zero induced EMF, no matter how strong that constant field is." },
    { id: "12-52", topic: "12.4 Electromagnetic Induction", stem: "A loop's area is steadily shrinking while it sits in a constant magnetic field perpendicular to its plane. Is an EMF induced?", choices: ["Yes, since the changing area changes the flux.", "No, since the field itself isn't changing.", "Yes, but only during the instant the area stops changing.", "No, since flux only depends on field strength, not area."], correct: 0, explanation: "Yes. Flux is Φ = BAcosθ, and area A is just as much a part of that product as B is — a shrinking area produces a genuinely changing flux even with B held perfectly constant, which is enough on its own to induce an EMF via Faraday's Law." },
    { id: "12-53", topic: "12.4 Electromagnetic Induction", stem: "A loop rotates at constant angular speed in a uniform magnetic field, continuously changing the angle between its normal and the field. Is an EMF induced, even though B and the loop's area are both constant?", choices: ["No, since neither B nor A is changing.", "Yes, since the changing angle changes the flux.", "Yes, but only at the instant the loop is exactly perpendicular to the field.", "No, since angle doesn't appear in the flux equation."], correct: 1, explanation: "Yes. Flux depends on all three factors in Φ = BAcosθ — including the angle θ. A continuously rotating loop has a continuously changing θ, which produces a continuously changing flux even with B and A both held fixed. This rotating-loop scenario is literally the operating principle behind AC generators." },
    { id: "12-54", topic: "12.4 Electromagnetic Induction", stem: "A loop lies flat with a bar magnet's north pole approaching from directly above, so the downward flux through the loop is increasing. Find the direction of the induced current, viewed from above.", choices: ["Clockwise", "Counterclockwise", "No current is induced", "The current alternates direction"], correct: 1, explanation: "Counterclockwise. By Lenz's Law, the induced current must oppose the INCREASING downward flux, meaning it needs to generate its own upward-pointing field inside the loop. Using the loop's right-hand rule in reverse (upward field requires counterclockwise current when viewed from above) gives the answer." },
    { id: "12-55", topic: "12.4 Electromagnetic Induction", stem: "The same magnet's north pole now moves AWAY from the loop (retreating upward), so the downward flux is decreasing instead. Find the induced current direction, viewed from above.", choices: ["Clockwise", "Counterclockwise", "No current is induced", "The current alternates direction"], correct: 0, explanation: "Clockwise — the exact opposite of the approaching-magnet case. Since flux is now DECREASING instead of increasing, the induced current must reinforce it rather than oppose it, creating a downward field inside the loop to prop up the shrinking flux. This flip is exactly why Lenz's Law is about opposing the CHANGE, not the flux's existing direction — the same magnet, same loop, opposite outcome, purely because the motion reversed." },
    { id: "12-56", topic: "12.4 Electromagnetic Induction", stem: "A bar magnet's SOUTH pole (instead of north) approaches the same loop from above. Since field lines point INTO a south pole, the upward flux through the loop is increasing as the magnet approaches. Find the induced current direction, viewed from above.", choices: ["Clockwise", "Counterclockwise", "No current is induced", "The current alternates direction"], correct: 0, explanation: "Clockwise. The upward flux is increasing, so the induced current must oppose that increase by generating a downward field inside the loop — which, by the loop's right-hand rule, requires clockwise current viewed from above. This is the reverse outcome from the original north-pole-approaching example, since both the pole identity AND its effect on flux direction have flipped — a good check that you're reasoning through the logic each time rather than just recalling a single memorized answer." },
    { id: "12-57", topic: "12.4 Electromagnetic Induction", stem: "Using energy conservation, explain why the induced current always opposes the CHANGE in flux, rather than reinforcing an increasing flux.", choices: ["If it reinforced an increasing flux, the system would spontaneously generate unlimited energy with no external input, violating conservation of energy.", "It's simply an arbitrary convention with no deeper physical justification.", "Reinforcing an increasing flux would violate conservation of charge instead.", "The direction is actually random and only appears consistent due to measurement limitations."], correct: 0, explanation: "It would create energy from nothing, which conservation of energy forbids. If the induced current reinforced (rather than opposed) an increasing flux, that reinforcement would further increase the flux, inducing an even stronger current, reinforcing it even more — a runaway feedback loop generating limitless energy from nothing. Lenz's Law's direction isn't an arbitrary rule to memorize; it's a direct requirement of energy conservation." },
    { id: "12-58", topic: "12.4 Electromagnetic Induction", stem: "A 0.60 m rod moves at 8.0 m/s perpendicular to a 0.40 T field. Find the motional EMF induced.", choices: ["0.48 V", "1.9 V", "4.8 V", "19 V"], correct: 1, explanation: "ε ≈ 1.9 V. Using ε = BLv = (0.40)(0.60)(8.0) = 1.92 V." },
    { id: "12-59", topic: "12.4 Electromagnetic Induction", stem: "A rod moves through a magnetic field, but its velocity is PARALLEL to the field (not perpendicular). Find the motional EMF induced.", choices: ["Zero", "BLv, the full standard value", "BLv/2", "Cannot be determined without more information"], correct: 0, explanation: "Zero. Motional EMF assumes the rod's velocity is perpendicular to the field. If velocity is instead parallel to B, the magnetic force on individual charges within the rod (F = qv × B) is zero, since v and B point the same way — with no force pushing charge toward either end of the rod, no EMF builds up at all." },
    { id: "12-60", topic: "12.4 Electromagnetic Induction", stem: "A rod's speed through a magnetic field doubles, with its length and the field strength unchanged. How does the motional EMF change?", choices: ["It doubles.", "It quadruples.", "It is cut in half.", "It stays the same."], correct: 0, explanation: "It doubles. Motional EMF is ε = BLv, directly proportional to speed — a straightforward linear relationship, no squaring involved." },
    { id: "12-61", topic: "12.4 Electromagnetic Induction", stem: "An induced current in a loop of resistance R dissipates power P. If the RATE of flux change is doubled (same resistance), how does the dissipated power change?", choices: ["It doubles.", "It quadruples.", "It is cut in half.", "It stays the same."], correct: 1, explanation: "It quadruples. Doubling the rate of flux change doubles the induced EMF (ε = ΔΦ/Δt). Since power dissipated is P = ε²/R, and ε has doubled, P increases by a factor of 2² = 4. This connects Faraday's Law directly back to the power relationships from the circuits unit — an induced EMF drives power dissipation exactly like a battery's EMF does." },
    { id: "12-62", topic: "12.4 Electromagnetic Induction", stretch: true, stem: "A metal ring falls freely through a region where the magnetic field strength varies with height (stronger at the bottom, weaker at the top). As the ring falls through this region, is a current induced, and how might this affect its fall?", choices: ["No current is induced, since the ring itself isn't a closed circuit with a battery.", "A current is induced, and by Lenz's Law, it creates a force that slows the ring's fall compared to free-fall.", "A current is induced, and it speeds up the ring's fall compared to free-fall.", "A current is induced, but it has no mechanical effect on the ring's motion."], correct: 1, explanation: "Yes, current is induced, and it slows the fall — a real phenomenon called electromagnetic braking. As the ring moves into a region of different field strength, it experiences a changing flux, inducing a current. By Lenz's Law, that induced current creates a force opposing the CHANGE causing it — in this case, opposing the ring's own motion into the stronger field, which manifests as an upward drag force slowing the fall. This connects induction, Lenz's Law, and an implied mechanical force on a MOVING object (rather than the more standard stationary-loop-near-a-moving-magnet setup), which is a layer of application beyond what this section typically asks directly." },
    { id: "12-63", topic: "12.4 Electromagnetic Induction", stem: "Find the flux through a 0.15 m × 0.20 m rectangular loop with a 0.80 T field perpendicular to it.", choices: ["0.012 Wb", "0.024 Wb", "0.048 Wb", "0.24 Wb"], correct: 1, explanation: "Φ = 0.024 Wb. First find area: A = (0.15)(0.20) = 0.030 m². Then Φ = BA = (0.80)(0.030) = 0.024 Wb." },
    { id: "12-64", topic: "12.4 Electromagnetic Induction", stem: "A loop's flux is given by Φ(t) = 0.020 + 0.50t (webers, with t in seconds) — increasing at a constant rate. Find the induced EMF.", choices: ["0.020 V", "0.50 V", "0.52 V", "Cannot be determined without a specific value of t"], correct: 1, explanation: "ε = 0.50 V. Since flux changes at a constant rate, the induced EMF is simply that rate — the coefficient of t in the equation, 0.50 Wb/s = 0.50 V. This value doesn't depend on t at all, since the rate of change is constant throughout; only a non-constant rate would require picking a specific instant." },
    { id: "12-65", topic: "12.4 Electromagnetic Induction", stem: "A loop with resistance 5.0 Ω experiences an induced EMF of 2.0 V due to changing flux. Find the induced current in the loop.", choices: ["0.10 A", "0.40 A", "2.5 A", "10 A"], correct: 1, explanation: "I = 0.40 A. Using I = ε/R = 2.0/5.0 = 0.40 A — an induced EMF drives current through a circuit exactly the same way a battery's EMF does, so all the Ohm's Law and circuit-analysis tools from Unit 11 carry over directly once you've found ε." },
  ],
  13: [
    { id: "13-1", topic: "13.1 Reflection", stem: "A ray of light strikes a flat mirror at an angle of 35° from the normal. Find the angle of reflection.", choices: ["17.5°", "35°", "55°", "70°"], correct: 1, explanation: "35°. The law of reflection states the angle of incidence equals the angle of reflection, both measured from the normal — a direct, one-step application." },
    { id: "13-2", topic: "13.1 Reflection", stem: "A ray strikes a mirror making a 20° angle with the mirror SURFACE (not the normal). Find the angle of incidence, measured from the normal.", choices: ["20°", "45°", "70°", "90°"], correct: 2, explanation: "70°. Since the surface and the normal are perpendicular to each other, an angle measured from the surface and the corresponding angle measured from the normal always add up to 90°: 90° − 20° = 70°. Always double-check which reference line an angle is measured from before using it in the law of reflection." },
    { id: "13-3", topic: "13.1 Reflection", stem: "An object stands 2.0 m in front of a plane mirror. Find the distance between the object and its image.", choices: ["1.0 m", "2.0 m", "4.0 m", "8.0 m"], correct: 2, explanation: "4.0 m. A plane mirror's image forms exactly as far behind the mirror as the object is in front — 2.0 m behind. The total object-to-image distance is therefore 2.0 + 2.0 = 4.0 m, spanning across the mirror's surface." },
    { id: "13-4", topic: "13.1 Reflection", stem: "Describe the image formed by a plane (flat) mirror, for any object distance.", choices: ["Real, inverted, magnified", "Virtual, upright, same size", "Real, upright, reduced", "Virtual, inverted, magnified"], correct: 1, explanation: "Virtual, upright, same size — always, for any object distance, with no calculation required. This is the one case in the entire unit where the image type never depends on where the object is placed." },
    { id: "13-5", topic: "13.1 Reflection", stretch: true, stem: "Two mirrors are placed perpendicular to each other, forming a 90° corner. A ray of light enters and reflects off both mirrors in sequence. Compare the ray's final direction to its original direction.", choices: ["It exits parallel to its original direction, but reversed 180° in sense.", "It exits perpendicular to its original direction.", "It exits along the same exact path it entered.", "The final direction depends entirely on the initial angle of incidence."], correct: 0, explanation: "It exits parallel to the original ray, but traveling in the reversed sense — regardless of the entry angle. This is the working principle behind a corner reflector, used in bicycle reflectors and even the reflector panels astronauts left on the Moon to bounce laser beams straight back to Earth. Tracing two sequential reflections off perpendicular surfaces requires more spatial reasoning than the single-bounce law of reflection this section otherwise tests." },
    { id: "13-6", topic: "13.1 Reflection", stretch: true, stem: "A flat mirror is rotated by 10° about an axis in its own surface. For a fixed incoming ray, how much does the reflected ray's direction change?", choices: ["10°", "20°", "5°", "It doesn't change, since the law of reflection is unaffected by mirror orientation."], correct: 1, explanation: "20° — twice the mirror's rotation angle, not the same amount. This is a classic and genuinely useful optics fact: rotating a mirror by angle θ deflects the reflected ray by 2θ, since both the incidence and reflection angles shift together relative to the new normal direction. This 'rotate by θ, deflect by 2θ' rule goes a step beyond simply reapplying the law of reflection to a single fixed setup." },
    { id: "13-7", topic: "13.1 Reflection", stem: "A ray of light travels exactly along the normal direction (perpendicular) to a flat mirror. Find the angle of incidence, and describe the reflected ray's path.", choices: ["0°; the ray reflects straight back along its own path.", "90°; the ray reflects along the mirror's surface.", "45°; the ray reflects at a right angle to its original path.", "0°; the ray passes through the mirror without reflecting."], correct: 0, explanation: "0° angle of incidence; the ray reflects straight back the way it came. Since the ray already travels along the normal itself, there's no angle to speak of relative to that reference line, and by the law of reflection, it must retrace its own path exactly." },
    { id: "13-8", topic: "13.1 Reflection", stem: "Explain why we see a clear reflection in a smooth mirror but not in a rough, matte wall, even though both surfaces obey the law of reflection.", choices: ["The wall absorbs all incoming light instead of reflecting it.", "Smooth surfaces cause specular reflection (organized, parallel rays stay parallel); rough surfaces cause diffuse reflection (rays scatter in many directions).", "The law of reflection only applies to mirrors, not ordinary surfaces.", "Rough surfaces reflect light at a different angle than the law of reflection predicts."], correct: 1, explanation: "Specular vs. diffuse reflection. A smooth mirror reflects parallel incoming rays as parallel outgoing rays, preserving the organized image information. A rough surface still obeys the law of reflection at every microscopic point, but those countless tiny points are all tilted in different directions, scattering the reflected light every which way and destroying any coherent image, even though no law of physics is being violated." },
    { id: "13-9", topic: "13.1 Reflection", stretch: true, stem: "A person stands in front of a plane mirror and walks toward it at 1.0 m/s. Find the rate at which the gap between the person and their image is closing.", choices: ["1.0 m/s", "2.0 m/s", "0.5 m/s", "4.0 m/s"], correct: 1, explanation: "2.0 m/s. The image always sits as far behind the mirror as the person is in front, so as the person approaches at 1.0 m/s, the image approaches the mirror at that same 1.0 m/s from the other side — meaning the person and image close the gap between themselves at a combined rate of 2.0 m/s. This requires layering a relative-motion argument on top of the basic plane-mirror image rule, rather than just restating the rule itself." },
    { id: "13-10", topic: "13.1 Reflection", stem: "A full-length plane mirror lets a person see their entire body, from feet to head. How tall does the mirror need to be, relative to the person's height?", choices: ["Exactly the person's full height.", "Exactly half the person's height, positioned appropriately.", "At least twice the person's height.", "It depends entirely on how far the person stands from the mirror."], correct: 1, explanation: "Half the person's height, and — perhaps surprisingly — this is true regardless of viewing distance. Working through the geometry of reflection for light leaving the feet and the top of the head shows the mirror only needs to span half the person's height, positioned with its center at the midpoint between the person's eyes and the floor, to capture the full reflection." },
    { id: "13-11", topic: "13.2 Images Formed by Mirrors", stem: "A concave mirror has focal length 15 cm. An object is placed 40 cm away. Find the image distance.", choices: ["12 cm", "24 cm", "30 cm", "60 cm"], correct: 1, explanation: "s<sub>i</sub> = 24 cm. Using 1/s<sub>o</sub> + 1/s<sub>i</sub> = 1/f: 1/40 + 1/s<sub>i</sub> = 1/15, so 1/s<sub>i</sub> = 1/15 − 1/40 = 8/120 − 3/120 = 5/120, giving s<sub>i</sub> = 24 cm — a real image (positive), in front of the mirror." },
    { id: "13-12", topic: "13.2 Images Formed by Mirrors", stem: "Find the magnification for the mirror setup in the previous question (s<sub>o</sub> = 40 cm, s<sub>i</sub> = 24 cm).", choices: ["−0.6", "−1.67", "0.6", "1.67"], correct: 0, explanation: "M = −0.6. Using M = −s<sub>i</sub>/s<sub>o</sub> = −24/40 = −0.6. The negative sign means inverted; a magnitude less than 1 means reduced (smaller than the object)." },
    { id: "13-13", topic: "13.2 Images Formed by Mirrors", stem: "A concave mirror has focal length 20 cm. An object is placed exactly at 20 cm (at the focal point). Find the image distance.", choices: ["0 cm", "20 cm", "40 cm", "Undefined — no image forms"], correct: 3, explanation: "Undefined — no image forms. Plugging in: 1/20 + 1/s<sub>i</sub> = 1/20 gives 1/s<sub>i</sub> = 0, meaning s<sub>i</sub> is infinite. Reflected rays emerge exactly parallel to each other and never converge (or diverge from a single point), so no proper image location exists — this is precisely why the focal point is such a special, unique location." },
    { id: "13-14", topic: "13.2 Images Formed by Mirrors", stem: "A concave mirror has focal length 12 cm. An object is placed 8.0 cm away (inside the focal length). Find the image distance.", choices: ["−24 cm", "−8 cm", "24 cm", "8 cm"], correct: 0, explanation: "s<sub>i</sub> = −24 cm. Using 1/8.0 + 1/s<sub>i</sub> = 1/12: 1/s<sub>i</sub> = 1/12 − 1/8.0 = 2/24 − 3/24 = −1/24, giving s<sub>i</sub> = −24 cm. The negative sign indicates a virtual image, behind the mirror." },
    { id: "13-15", topic: "13.2 Images Formed by Mirrors", stem: "Find the magnification for the mirror in the previous question (s<sub>o</sub> = 8.0 cm, s<sub>i</sub> = −24 cm).", choices: ["3.0", "−3.0", "0.33", "−0.33"], correct: 0, explanation: "M = 3.0. Using M = −s<sub>i</sub>/s<sub>o</sub> = −(−24)/8.0 = 3.0. Positive means upright; magnitude greater than 1 means magnified — exactly the magnifying-mirror behavior expected when the object sits inside the focal length." },
    { id: "13-16", topic: "13.2 Images Formed by Mirrors", stem: "An object is placed exactly at the center of curvature (2f) of a concave mirror. Describe the resulting image.", choices: ["Virtual, upright, magnified", "Real, inverted, same size as the object", "Real, upright, reduced", "No image forms"], correct: 1, explanation: "Real, inverted, same size (M = −1 exactly). At so = 2f, the mirror equation always produces si = 2f as well, giving |M| = si/so = 1 — a special boundary case worth memorizing on its own, separate from the general 'beyond 2f gives reduced, between f and 2f gives magnified' trend." },
    { id: "13-17", topic: "13.2 Images Formed by Mirrors", stem: "A convex mirror has focal length −10 cm. An object is placed 15 cm away. Find the image distance.", choices: ["−6.0 cm", "−25 cm", "6.0 cm", "25 cm"], correct: 0, explanation: "s<sub>i</sub> = −6.0 cm. Using 1/15 + 1/s<sub>i</sub> = 1/(−10): 1/s<sub>i</sub> = −1/10 − 1/15 = −3/30 − 2/30 = −5/30, giving s<sub>i</sub> = −6.0 cm — virtual, as expected for a convex mirror." },
    { id: "13-18", topic: "13.2 Images Formed by Mirrors", stem: "Explain why a convex mirror ALWAYS produces a virtual image, regardless of where the object is placed.", choices: ["Because convex mirrors don't actually reflect light.", "Because f is always negative for a convex mirror, and the mirror equation can never produce a positive s<sub>i</sub> when 1/f is negative and 1/s<sub>o</sub> is positive.", "Because the object distance is always greater than f for a convex mirror.", "This is simply a rule to memorize, with no underlying mathematical reason."], correct: 1, explanation: "It's guaranteed by the math itself. Since f is always negative for a convex mirror, 1/s<sub>i</sub> = 1/f − 1/s<sub>o</sub> is negative minus a positive quantity — always negative, for any positive object distance. A negative s<sub>i</sub> always means virtual. This matches the physical picture: convex mirrors spread reflected rays apart rather than converging them to a real point in front of the mirror." },
    { id: "13-19", topic: "13.2 Images Formed by Mirrors", stem: "A concave mirror produces a real image with magnification −2.0 for an object placed 18 cm away. Find the mirror's focal length.", choices: ["6.0 cm", "9.0 cm", "12 cm", "24 cm"], correct: 2, explanation: "f = 12 cm. Since M = −s<sub>i</sub>/s<sub>o</sub> = −2.0, s<sub>i</sub> = 2.0 × 18 = 36 cm. Then 1/18 + 1/36 = 2/36 + 1/36 = 3/36 = 1/12, giving f = 12 cm." },
    { id: "13-20", topic: "13.2 Images Formed by Mirrors", stem: "For a concave mirror, a ray traveling parallel to the principal axis reflects through which point?", choices: ["The center of curvature", "The focal point", "The vertex of the mirror", "It doesn't pass through any special point"], correct: 1, explanation: "The focal point. This is the first of the three principal rays used for hand-tracing concave mirror images — a parallel ray always reflects through f, by the defining property of a parabolic (or approximately spherical) focusing mirror." },
    { id: "13-21", topic: "13.2 Images Formed by Mirrors", stem: "For a concave mirror, a ray traveling through the center of curvature reflects in which direction?", choices: ["Parallel to the principal axis", "Through the focal point", "Straight back along its own incoming path", "Perpendicular to its incoming path"], correct: 2, explanation: "Straight back along its own path. A ray through the center of curvature strikes the mirror's surface exactly perpendicular to that curved surface at the point of contact, meaning its angle of incidence is 0° — and by the law of reflection, it reflects right back the way it came." },
    { id: "13-22", topic: "13.2 Images Formed by Mirrors", stem: "As an object moves from very far away, toward 2f, then between f and 2f, then approaching f (from outside), how does the size of its real image change?", choices: ["The image shrinks steadily throughout.", "The image grows steadily larger throughout, becoming very large as the object nears f.", "The image size stays constant regardless of object position.", "The image alternates between growing and shrinking."], correct: 1, explanation: "The image grows steadily larger. Far away, the image is tiny (much less than object size); at exactly 2f, image and object match in size; between f and 2f, the image is magnified; and as the object approaches f from outside, the image grows dramatically larger, approaching infinite size right at f (where no proper image forms at all). This is the full progression the 'object distance determines everything' key idea describes." },
    { id: "13-23", topic: "13.2 Images Formed by Mirrors", stem: "A convex mirror has focal length −25 cm. An object is placed very far away (approaching infinity). Find the image distance.", choices: ["−25 cm", "25 cm", "−12.5 cm", "12.5 cm"], correct: 0, explanation: "s<sub>i</sub> = −25 cm. As s<sub>o</sub> → ∞, the term 1/s<sub>o</sub> → 0, leaving 1/s<sub>i</sub> = 1/f directly — so the image forms right at the focal point. This limiting case (object at infinity, image at f) applies to any mirror or lens, not just convex mirrors." },
    { id: "13-24", topic: "13.2 Images Formed by Mirrors", stem: "For a concave mirror producing a real image, on which side of the mirror does that image form — the same side as the object, or the opposite side?", choices: ["The same side as the object", "The opposite side from the object", "Neither — real images always form exactly at the mirror's surface", "It depends on the object's distance from the mirror"], correct: 0, explanation: "The same side as the object. Light physically reflects back off a mirror and converges in front of it — the same side the object sits on. This is the mirror-specific half of the sign convention that differs from lenses, where a real image instead forms on the opposite side (since light passes through a lens rather than bouncing back)." },
    { id: "13-25", topic: "13.2 Images Formed by Mirrors", stem: "An object is placed 50 cm from a concave mirror, producing a real image at 25 cm. Find the mirror's focal length.", choices: ["12.5 cm", "16.7 cm", "25 cm", "37.5 cm"], correct: 1, explanation: "f ≈ 16.7 cm. Using 1/50 + 1/25 = 1/f: 1/50 + 2/50 = 3/50, so f = 50/3 ≈ 16.7 cm." },
    { id: "13-26", topic: "13.2 Images Formed by Mirrors", stem: "A concave mirror forms a real, inverted image exactly the same size as the object. Find the object's distance from the mirror, in terms of f.", choices: ["s<sub>o</sub> = f/2", "s<sub>o</sub> = f", "s<sub>o</sub> = 2f", "s<sub>o</sub> = 4f"], correct: 2, explanation: "s<sub>o</sub> = 2f. This is the exact reverse of the earlier 'object at 2f gives unity magnification' fact — same-size, inverted, real images only occur at this one specific object distance, the center of curvature." },
    { id: "13-27", topic: "13.2 Images Formed by Mirrors", stem: "What is the key difference in ray-tracing between a concave and a convex mirror?", choices: ["Concave mirrors don't have a focal point at all.", "For a concave mirror, principal rays converge to real points in front of the mirror; for a convex mirror, they only appear to diverge from virtual points behind it.", "Convex mirrors require four principal rays instead of three.", "There is no meaningful difference between the two."], correct: 1, explanation: "Real vs. virtual reference points. A concave mirror's focal point and center of curvature are real locations in front of the mirror where rays genuinely converge. A convex mirror's equivalent points are virtual, behind the mirror — you trace rays as if they originated from these virtual points using dashed construction lines, since no real light ever actually reaches back there." },
    { id: "13-28", topic: "13.2 Images Formed by Mirrors", stem: "An object is placed 45 cm from a concave mirror with focal length 15 cm. Find the image distance and classify the image.", choices: ["22.5 cm; real, inverted, reduced", "22.5 cm; virtual, upright, magnified", "45 cm; real, inverted, same size", "11.25 cm; real, upright, reduced"], correct: 0, explanation: "22.5 cm; real, inverted, reduced. Using 1/45 + 1/s<sub>i</sub> = 1/15: 1/s<sub>i</sub> = 1/15 − 1/45 = 3/45 − 1/45 = 2/45, giving s<sub>i</sub> = 22.5 cm (real, positive). M = −22.5/45 = −0.5 (inverted, reduced) — consistent with the object sitting beyond 2f (30 cm) for this mirror." },
    { id: "13-29", topic: "13.2 Images Formed by Mirrors", stem: "A dentist's mirror is a small concave mirror used to see a magnified, upright image of a tooth. Based on this application, is the tooth positioned inside or outside the mirror's focal length?", choices: ["Inside the focal length (s<sub>o</sub> < f)", "Outside the focal length but inside 2f", "Exactly at 2f", "Beyond 2f"], correct: 0, explanation: "Inside the focal length. This is the one concave-mirror configuration — object closer to the mirror than its focal point — that produces a magnified, upright, VIRTUAL image, exactly matching how a magnifying or dentist's mirror is actually used in practice." },
    { id: "13-30", topic: "13.2 Images Formed by Mirrors", stem: "A concave mirror (f = +20 cm) and a convex mirror (f = −20 cm) each have an object placed 40 cm away. Compare which mirror produces the larger-magnitude image.", choices: ["The concave mirror produces the larger image.", "The convex mirror produces the larger image.", "They produce equal-magnitude images.", "This cannot be determined without more information."], correct: 0, explanation: "The concave mirror produces the larger image. For the concave mirror: 1/40 + 1/s<sub>i</sub> = 1/20 gives s<sub>i</sub> = 40 cm, so |M| = 40/40 = 1.0. For the convex mirror: 1/40 + 1/s<sub>i</sub> = 1/(−20) gives s<sub>i</sub> ≈ −13.3 cm, so |M| ≈ 13.3/40 ≈ 0.33. The concave mirror's image magnitude is roughly three times larger, even with the same object distance and same magnitude of focal length." },
    { id: "13-31", topic: "13.3 Refraction", stem: "Light travels from air (n = 1.00) into a material with n = 1.4 at an incidence angle of 50°. Find the refraction angle.", choices: ["22°", "33°", "50°", "71°"], correct: 1, explanation: "θ₂ ≈ 33°. Using Snell's Law: (1.00)(sin 50°) = (1.4)(sinθ₂), so sinθ₂ = 0.766/1.4 ≈ 0.547, giving θ₂ ≈ 33°. The ray bends toward the normal entering the denser material, so the refraction angle is smaller than the incidence angle, as expected." },
    { id: "13-32", topic: "13.3 Refraction", stem: "Light travels from water (n = 1.33) into air (n = 1.00) at an incidence angle of 25°. Find the refraction angle.", choices: ["19°", "25°", "34°", "48°"], correct: 2, explanation: "θ₂ ≈ 34°. Using Snell's Law: (1.33)(sin 25°) = (1.00)(sinθ₂), so sinθ₂ = 1.33(0.4226) ≈ 0.562, giving θ₂ ≈ 34°. This time the ray bends AWAY from the normal exiting into the less-dense air, so the refraction angle is larger than the incidence angle — the exact opposite pattern from the previous question." },
    { id: "13-33", topic: "13.3 Refraction", stem: "Light passes from a medium with n = 1.2 into a medium with n = 1.6. Does it bend toward or away from the normal?", choices: ["Toward the normal", "Away from the normal", "It doesn't bend at all", "Cannot be determined without the incidence angle"], correct: 0, explanation: "Toward the normal. Going from a less dense medium (n = 1.2) into a more dense one (n = 1.6) always bends light toward the normal, regardless of the specific incidence angle — the direction of bending only depends on which way the density is changing, not the exact angle involved." },
    { id: "13-34", topic: "13.3 Refraction", stem: "Find the speed of light in a material with index of refraction 2.0.", choices: ["1.5 × 10⁸ m/s", "3.0 × 10⁸ m/s", "6.0 × 10⁸ m/s", "1.5 × 10⁹ m/s"], correct: 0, explanation: "v = 1.5 × 10⁸ m/s. Using n = c/v, solve for v: v = c/n = (3.0×10⁸)/2.0 = 1.5×10⁸ m/s — half the speed of light in vacuum." },
    { id: "13-35", topic: "13.3 Refraction", stem: "Light travels through a material at 2.0×10⁸ m/s. Find the material's index of refraction.", choices: ["0.67", "1.5", "2.0", "6.0"], correct: 1, explanation: "n = 1.5. Using n = c/v = (3.0×10⁸)/(2.0×10⁸) = 1.5." },
    { id: "13-36", topic: "13.3 Refraction", stem: "Find the critical angle for light traveling from a medium with n = 1.6 into a medium with n = 1.2.", choices: ["36.9°", "41.8°", "48.6°", "53.1°"], correct: 2, explanation: "θ_c ≈ 48.6°. Using sinθ_c = n₂/n₁ = 1.2/1.6 = 0.75, so θ_c = sin⁻¹(0.75) ≈ 48.6°." },
    { id: "13-37", topic: "13.3 Refraction", stem: "Can total internal reflection occur for light traveling from air (n = 1.00) into glass (n = 1.5)?", choices: ["Yes, at any angle beyond a specific critical angle.", "No — total internal reflection requires going from a MORE dense into a LESS dense medium, and this is the reverse direction.", "Yes, but only for angles less than 45°.", "It depends on the specific wavelength of light used."], correct: 1, explanation: "No, it's impossible in this direction. Total internal reflection requires n₁ > n₂ (denser into less dense). Here, air (less dense) is entering glass (more dense) — the reverse situation — so no critical angle exists, and total internal reflection simply cannot happen, no matter how large the incidence angle is." },
    { id: "13-38", topic: "13.3 Refraction", stem: "Light inside glass (n = 1.5, critical angle ≈ 41.8° for a glass-air boundary) strikes that boundary at 45° from inside the glass. Describe what happens.", choices: ["The light refracts out into the air as normal, just at a large angle.", "Total internal reflection occurs — 100% of the light reflects back into the glass.", "The light splits evenly between refracting out and reflecting back.", "The light is completely absorbed at the boundary."], correct: 1, explanation: "Total internal reflection. Since 45° exceeds the critical angle of 41.8° for this glass-air boundary, no refracted ray can exist at all — all of the light reflects back into the glass instead, with none escaping into the air." },
    { id: "13-39", topic: "13.3 Refraction", stem: "A ray of light enters a rectangular glass block through one face (from air) and exits through the opposite, parallel face (back into air). Compare its final direction to its original direction before entering.", choices: ["The exiting ray is parallel to the original ray, though laterally shifted.", "The exiting ray is perpendicular to the original ray.", "The exiting ray continues at the same angle it had inside the glass.", "The exiting ray's direction depends on the glass's thickness."], correct: 0, explanation: "Parallel, but laterally displaced. The bending on entry (air into glass) and the bending on exit (glass back into air) involve the exact same pair of media in reverse, so the two refractions exactly undo each other's angular effect — the ray emerges traveling in its original direction, just shifted sideways by an amount that depends on the glass's thickness." },
    { id: "13-40", topic: "13.3 Refraction", stem: "Light in medium 1 (n₁ = 1.8) strikes a boundary with medium 2 at exactly the critical angle of 35°. Find n₂.", choices: ["0.57", "1.03", "1.8", "3.14"], correct: 1, explanation: "n₂ ≈ 1.03. At the critical angle, sinθ_c = n₂/n₁, so n₂ = n₁sinθ_c = (1.8)(sin 35°) = (1.8)(0.574) ≈ 1.03." },
    { id: "13-41", topic: "13.3 Refraction", stem: "Rank the speed of light in air (n = 1.0), water (n = 1.33), and glass (n = 1.5), from fastest to slowest.", choices: ["Air > water > glass", "Glass > water > air", "Water > air > glass", "All three are equal, since c is a universal constant"], correct: 0, explanation: "Air > water > glass. Since v = c/n, speed and index of refraction are inversely related — the material with the smallest n (air) allows the fastest light travel, while the material with the largest n (glass) slows light the most." },
    { id: "13-42", topic: "13.3 Refraction", stem: "A swimming pool appears shallower than it actually is when viewed from above the water's surface. Explain this using refraction.", choices: ["Water absorbs some light, making the bottom appear closer.", "Light from the pool bottom bends away from the normal exiting into air, and tracing this refracted ray backward in a straight line makes the bottom seem closer than it really is.", "The pool bottom is actually reflecting a virtual image of itself.", "This is an optical illusion unrelated to refraction."], correct: 1, explanation: "Refraction plus our brain's assumption of straight-line light travel. Light from the pool bottom bends away from the normal as it exits water into air. Our visual system interprets light as having traveled in a perfectly straight line, so tracing the refracted ray backward (rather than following its actual bent path) places the apparent source of that light closer to the surface than the real pool bottom actually is." },
    { id: "13-43", topic: "13.3 Refraction", stem: "Find the angle of incidence that produces a 20° refraction angle when light travels from air (n = 1.00) into a medium with n = 1.6.", choices: ["12.5°", "20°", "33.2°", "54.6°"], correct: 2, explanation: "θ₁ ≈ 33.2°. Using Snell's Law: (1.00)sinθ₁ = (1.6)(sin 20°) = (1.6)(0.342) ≈ 0.547, giving θ₁ = sin⁻¹(0.547) ≈ 33.2°. Snell's Law works equally well solving for either angle, given the other — don't assume you can only solve 'forward.'" },
    { id: "13-44", topic: "13.3 Refraction", stem: "Light travels fastest in Material A, slower in Material B, and slowest in Material C. Rank their indices of refraction.", choices: ["n<sub>A</sub> < n<sub>B</sub> < n<sub>C</sub>", "n<sub>A</sub> > n<sub>B</sub> > n<sub>C</sub>", "n<sub>A</sub> = n<sub>B</sub> = n<sub>C</sub>", "Cannot be determined without exact speed values"], correct: 0, explanation: "n<sub>A</sub> < n<sub>B</sub> < n<sub>C</sub>. Speed and index of refraction are inversely related (n = c/v) — the material where light moves fastest has the smallest n, and the material where light moves slowest has the largest n." },
    { id: "13-45", topic: "13.3 Refraction", stem: "Explain why the index of refraction n is always greater than or equal to 1 for any real material.", choices: ["Because n is defined as always positive by convention, regardless of physics.", "Because no material allows light to travel faster than its speed in vacuum, c, so v ≤ c always, meaning n = c/v ≥ 1 always.", "Because light always slows down when passing through any boundary.", "Because the human eye cannot perceive n values less than 1."], correct: 1, explanation: "It follows directly from n = c/v combined with the fact that nothing travels faster than light in vacuum. Since v (light's speed in any real material) can never exceed c, the ratio c/v can never be less than 1 — n = 1 exactly only in true vacuum, and n > 1 for every real material, since light always slows down at least somewhat when passing through matter." },
    { id: "13-46", topic: "13.3 Refraction", stretch: true, stem: "Light enters a glass prism (n = 1.5) from air, striking the first face at 30° incidence. It then travels inside the glass and strikes a second face at 50°, attempting to exit back into air. Find the refraction angle at the first face, and determine whether total internal reflection occurs at the second face.", choices: ["19.5° at the first face; yes, TIR occurs at the second face (50° exceeds the ≈41.8° critical angle).", "19.5° at the first face; no, the light refracts out normally at the second face.", "45° at the first face; yes, TIR occurs at the second face.", "30° at the first face (no bending); no TIR at the second face."], correct: 0, explanation: "19.5° at the first face; TIR occurs at the second. First: sinθ₂ = (1.00/1.5)(sin 30°) = (0.667)(0.5) ≈ 0.333, giving θ₂ ≈ 19.5°. Second: the critical angle for a glass-to-air boundary with n = 1.5 is sin⁻¹(1.00/1.5) ≈ 41.8° — since the ray strikes this second face at 50°, well beyond that critical angle, total internal reflection occurs, and none of the light exits at that face. This chains two separate calculations (a refraction, then a TIR check) together in a single connected prism geometry, which is more elaborate than the section's usual single-boundary problems." },
    { id: "13-47", topic: "13.3 Refraction", stem: "A student claims: 'The index of refraction of a material is exactly equal to the ratio of sin(incidence angle) to sin(refraction angle), when light enters that material from a vacuum.' Evaluate this claim.", choices: ["True — this follows directly from Snell's Law with n₁ = 1 for vacuum.", "False — index of refraction can only be measured using the critical angle.", "True, but only for incidence angles less than 45°.", "False — this ratio instead gives the material's density, not its index of refraction."], correct: 0, explanation: "True. Snell's Law with n₁ = 1 (vacuum) gives sinθ₁ = n₂sinθ₂, which rearranges directly to n₂ = sinθ₁/sinθ₂. This isn't just a coincidental relationship — it's literally the standard experimental method for measuring a material's index of refraction in the first place." },
    { id: "13-48", topic: "13.4 Images Formed by Lenses", stem: "A converging lens has focal length 12 cm. An object is placed 30 cm away. Find the image distance.", choices: ["7.5 cm", "20 cm", "36 cm", "60 cm"], correct: 1, explanation: "s<sub>i</sub> = 20 cm. Using 1/30 + 1/s<sub>i</sub> = 1/12: 1/s<sub>i</sub> = 1/12 − 1/30 = 5/60 − 2/60 = 3/60 = 1/20, giving s<sub>i</sub> = 20 cm — a real image on the opposite side of the lens from the object." },
    { id: "13-49", topic: "13.4 Images Formed by Lenses", stem: "Find the magnification for the lens setup in the previous question (s<sub>o</sub> = 30 cm, s<sub>i</sub> = 20 cm).", choices: ["−0.667", "0.667", "−1.5", "1.5"], correct: 0, explanation: "M = −0.667. Using M = −s<sub>i</sub>/s<sub>o</sub> = −20/30 ≈ −0.667 — inverted, reduced." },
    { id: "13-50", topic: "13.4 Images Formed by Lenses", stem: "A converging lens has focal length 15 cm. An object is placed 10 cm away (inside the focal length). Find the image distance.", choices: ["−30 cm", "−6 cm", "30 cm", "6 cm"], correct: 0, explanation: "s<sub>i</sub> = −30 cm. Using 1/10 + 1/s<sub>i</sub> = 1/15: 1/s<sub>i</sub> = 1/15 − 1/10 = 2/30 − 3/30 = −1/30, giving s<sub>i</sub> = −30 cm — a virtual image, on the SAME side as the object (this is exactly how a converging lens works as a magnifying glass)." },
    { id: "13-51", topic: "13.4 Images Formed by Lenses", stem: "Find the magnification for the lens in the previous question (s<sub>o</sub> = 10 cm, s<sub>i</sub> = −30 cm).", choices: ["3.0", "−3.0", "0.33", "−0.33"], correct: 0, explanation: "M = 3.0. Using M = −s<sub>i</sub>/s<sub>o</sub> = −(−30)/10 = 3.0 — upright and magnified, the classic magnifying-glass result when an object sits inside a converging lens's focal length." },
    { id: "13-52", topic: "13.4 Images Formed by Lenses", stem: "For a lens (not a mirror), on which side does a real image form relative to the object?", choices: ["The same side as the object", "The opposite side from the object", "Neither — real images always form exactly at the lens", "It depends on whether the lens is converging or diverging"], correct: 1, explanation: "The opposite side. Light physically passes through a lens and converges on the far side from the object — the direct contrast to a mirror, where a real image forms on the SAME side as the object (light reflects back rather than passing through). This is the one sign-convention difference to keep straight between the two."},
    { id: "13-53", topic: "13.4 Images Formed by Lenses", stem: "A diverging lens has focal length −18 cm. An object is placed 24 cm away. Find the image distance.", choices: ["−10.3 cm", "−42 cm", "10.3 cm", "42 cm"], correct: 0, explanation: "s<sub>i</sub> ≈ −10.3 cm. Using 1/24 + 1/s<sub>i</sub> = 1/(−18): 1/s<sub>i</sub> = −1/18 − 1/24 = −4/72 − 3/72 = −7/72, giving s<sub>i</sub> ≈ −10.3 cm — virtual, as always for a diverging lens." },
    { id: "13-54", topic: "13.4 Images Formed by Lenses", stem: "Explain why a diverging lens ALWAYS produces a virtual image, regardless of object distance.", choices: ["Diverging lenses don't actually refract light.", "Because f is always negative for a diverging lens, and the lens equation can never produce a positive s<sub>i</sub> when 1/f is negative and 1/s<sub>o</sub> is positive.", "Because the object is always placed beyond 2f for a diverging lens.", "This is an arbitrary rule with no underlying mathematical basis."], correct: 1, explanation: "It's guaranteed by the equation itself — the exact parallel to the convex mirror case. With f always negative, 1/s<sub>i</sub> = 1/f − 1/s<sub>o</sub> is always negative for any positive object distance, meaning s<sub>i</sub> always comes out negative (virtual). This matches the physical picture: a diverging lens spreads parallel rays apart rather than converging them anywhere real." },
    { id: "13-55", topic: "13.4 Images Formed by Lenses", stem: "A converging lens produces a real image with magnification −3.0 for an object placed 20 cm away. Find the lens's focal length.", choices: ["5.0 cm", "10 cm", "15 cm", "45 cm"], correct: 2, explanation: "f = 15 cm. Since |M| = s<sub>i</sub>/s<sub>o</sub> = 3.0, s<sub>i</sub> = 3.0 × 20 = 60 cm. Then 1/20 + 1/60 = 3/60 + 1/60 = 4/60 = 1/15, giving f = 15 cm." },
    { id: "13-56", topic: "13.4 Images Formed by Lenses", stem: "For a converging lens, a ray traveling parallel to the axis refracts through which point after passing through the lens?", choices: ["The near focal point", "The far focal point (on the opposite side from where the ray entered)", "The exact center of the lens", "It continues parallel forever, never converging"], correct: 1, explanation: "The far focal point. A parallel incoming ray always bends to pass through the focal point on the far side of a converging lens — the direct lens analog of the concave mirror's equivalent rule." },
    { id: "13-57", topic: "13.4 Images Formed by Lenses", stem: "For a converging lens, what happens to a ray passing through the exact center of the lens?", choices: ["It bends sharply toward the near focal point.", "It passes straight through, completely undeviated.", "It reflects back the way it came.", "It splits into two separate rays."], correct: 1, explanation: "It passes straight through, undeviated. At the lens's exact center, the front and back surfaces are essentially parallel to each other over that tiny region, so the lens behaves locally like a thin flat piece of glass — entering and exiting refractions cancel out, leaving the ray's direction unchanged." },
    { id: "13-58", topic: "13.4 Images Formed by Lenses", stem: "An object is placed 50 cm from a converging lens with focal length 20 cm. Find the image distance and classify the image.", choices: ["33.3 cm; real, inverted, reduced", "33.3 cm; virtual, upright, magnified", "50 cm; real, inverted, same size", "16.7 cm; real, upright, reduced"], correct: 0, explanation: "33.3 cm; real, inverted, reduced. Using 1/50 + 1/s<sub>i</sub> = 1/20: 1/s<sub>i</sub> = 1/20 − 1/50 = 5/100 − 2/100 = 3/100, giving s<sub>i</sub> ≈ 33.3 cm (real). M = −33.3/50 ≈ −0.667 (inverted, reduced) — the object sits beyond 2f (40 cm), consistent with this outcome." },
    { id: "13-59", topic: "13.4 Images Formed by Lenses", stem: "Compare the image formed by a converging lens to the image formed by a concave mirror, for an object placed beyond 2f in each case.", choices: ["Both produce a real, inverted, reduced image.", "The lens produces a virtual image while the mirror produces a real image.", "The lens produces an upright image while the mirror produces an inverted image.", "There is no meaningful parallel between the two cases."], correct: 0, explanation: "Both produce a real, inverted, reduced image. This is one of the genuine parallels between mirrors and lenses — since they share the exact same governing equation, the general trend of image type as a function of object distance (relative to f and 2f) matches between the two, even though the specific side convention for where a real image forms differs." },
    { id: "13-60", topic: "13.4 Images Formed by Lenses", stem: "A camera lens (converging, f = 50 mm) forms a real image of a very distant object. Where does the image form?", choices: ["Exactly at the focal point (s<sub>i</sub> = f)", "At twice the focal length (s<sub>i</sub> = 2f)", "At the lens itself (s<sub>i</sub> = 0)", "The image location depends on the object's exact brightness"], correct: 0, explanation: "At the focal point. As s<sub>o</sub> → ∞, the term 1/s<sub>o</sub> → 0, leaving 1/s<sub>i</sub> = 1/f directly, so s<sub>i</sub> = f exactly. This is precisely why a camera's image sensor sits at the lens's focal length — it's optimized for photographing distant objects." },
    { id: "13-61", topic: "13.4 Images Formed by Lenses", stem: "An object is placed exactly at the focal point of a converging lens. Describe the rays after passing through the lens.", choices: ["They converge to a point immediately after the lens.", "They emerge parallel to each other; no image forms.", "They diverge as if from a virtual point behind the lens.", "They reverse direction entirely."], correct: 1, explanation: "They emerge parallel; no proper image forms. This is the exact lens analog of the concave-mirror-at-f case — object at the focal point is the one special location where the equation breaks down (1/s<sub>i</sub> comes out to zero, meaning s<sub>i</sub> is infinite)." },
    { id: "13-62", topic: "13.4 Images Formed by Lenses", stem: "A converging lens (f = +15 cm) and a diverging lens (f = −15 cm) each have an object placed 30 cm away. Compare which produces the larger-magnitude image.", choices: ["The converging lens produces the larger image.", "The diverging lens produces the larger image.", "They produce equal-magnitude images.", "This cannot be determined without more information."], correct: 0, explanation: "The converging lens produces the larger image. For the converging lens: 1/30 + 1/s<sub>i</sub> = 1/15 gives s<sub>i</sub> = 30 cm, so |M| = 30/30 = 1.0. For the diverging lens: 1/30 + 1/s<sub>i</sub> = 1/(−15) gives s<sub>i</sub> = −10 cm, so |M| = 10/30 ≈ 0.33. This mirrors (pun intended) the identical comparison for concave vs. convex mirrors — same governing equation, same directional outcome." },
    { id: "13-63", topic: "13.4 Images Formed by Lenses", stem: "An object starts very far from a converging lens (beyond 2f) and moves slowly toward the lens, while staying outside f. Describe the general trend in the real image's size and location.", choices: ["The image moves closer to the lens and shrinks.", "The image moves farther from the lens and grows larger.", "The image stays at a fixed location but changes size.", "The image alternates between real and virtual as the object approaches."], correct: 1, explanation: "The image moves farther away and grows larger. As the object approaches the lens (from far away toward f, while remaining outside f), the real image on the opposite side moves progressively farther from the lens and increases in size — the identical directional trend that concave mirrors follow, since both share the same governing equation." },
    { id: "13-64", topic: "13.4 Images Formed by Lenses", stem: "A converging lens has focal length 25 cm. Find the object distance that produces a real image with the same magnitude as the object (|M| = 1).", choices: ["12.5 cm", "25 cm", "50 cm", "100 cm"], correct: 2, explanation: "s<sub>o</sub> = 50 cm = 2f. Just as with a concave mirror, a converging lens produces a real, same-size (M = −1) image only when the object sits at exactly twice the focal length — a special boundary case worth recognizing directly rather than solving from scratch each time." },
    { id: "13-65", topic: "13.4 Images Formed by Lenses", stem: "Compare the reasoning behind the 'ray through the center' rule for a mirror (center of curvature) versus a lens (center of the lens itself). Are they the same underlying rule?", choices: ["Yes, both rely on the ray reflecting straight back on itself.", "No — the mirror rule relies on perpendicular incidence at the curved surface; the lens rule relies on the lens acting locally like a flat, parallel-sided piece of glass.", "Yes, both rely on the lens or mirror being infinitely thin.", "No — only the mirror has a valid 'through the center' rule; lenses have no equivalent."], correct: 1, explanation: "They're different rules that happen to look similar. For a mirror, a ray through the center of curvature hits the curved surface exactly perpendicular (0° incidence), reflecting straight back. For a lens, a ray through the lens's own center passes through undeviated because the lens behaves like a flat, parallel-faced piece of glass at that exact spot, with entry and exit refractions canceling out. Both give an easy-to-trace straight-through-or-straight-back ray, but for genuinely different physical reasons — worth keeping distinct rather than assuming they're 'the same rule' just because they sound alike." },
  ],
  14: [
    { id: "14-1", topic: "14.1 Wave Basics", stem: "In a transverse wave, how does the medium's oscillation relate to the wave's direction of travel?", choices: ["Perpendicular to it", "Parallel to it", "There is no relationship", "It depends on the wave's amplitude"], correct: 0, explanation: "Perpendicular. Light and waves on a string are classic transverse waves — the medium (or field) oscillates at 90° to the direction the wave itself moves." },
    { id: "14-2", topic: "14.1 Wave Basics", stem: "In a longitudinal wave, how does the medium's oscillation relate to the wave's direction of travel?", choices: ["Perpendicular to it", "Parallel to it", "There is no relationship", "It depends on the wave's frequency"], correct: 1, explanation: "Parallel. Sound is the classic longitudinal wave — air molecules compress and expand along the same line the sound wave travels, not off to the side." },
    { id: "14-3", topic: "14.1 Wave Basics", stem: "Classify light waves, sound waves, and waves on a taut string as transverse or longitudinal.", choices: ["All three are transverse.", "All three are longitudinal.", "Light and string waves are transverse; sound is longitudinal.", "Light is longitudinal; sound and string waves are transverse."], correct: 2, explanation: "Light and waves on a string are transverse (oscillation perpendicular to travel); sound is longitudinal (oscillation parallel to travel, via compression and rarefaction of air)." },
    { id: "14-4", topic: "14.1 Wave Basics", stem: "A sound wave has frequency 20 Hz and travels at 340 m/s through air. Find its wavelength.", choices: ["0.059 m", "17 m", "320 m", "6800 m"], correct: 1, explanation: "λ = 17 m. Using v = fλ, solve for λ: λ = v/f = 340/20 = 17 m." },
    { id: "14-5", topic: "14.1 Wave Basics", stem: "A wave's frequency doubles while it remains in the same medium (same speed). How does its wavelength change?", choices: ["It doubles.", "It is cut in half.", "It quadruples.", "It stays the same."], correct: 1, explanation: "It's cut in half. Since v = fλ and speed is fixed by the medium, doubling frequency requires wavelength to be cut in half to keep the product fλ constant." },
    { id: "14-6", topic: "14.1 Wave Basics", stem: "Waves A and B travel through the same medium, with A having twice B's frequency. Compare their speeds.", choices: ["A travels twice as fast as B.", "B travels twice as fast as A.", "A and B travel at equal speed.", "Cannot be determined without knowing their wavelengths."], correct: 2, explanation: "Equal speed. Wave speed is set by the medium's properties, not by frequency — A and B travel at the same speed through that shared medium, with their wavelengths differing (not their speeds) to account for the different frequencies." },
    { id: "14-7", topic: "14.2 Periodic Waves", stem: "Find the frequency of a wave with period 0.025 s.", choices: ["0.025 Hz", "4.0 Hz", "40 Hz", "400 Hz"], correct: 2, explanation: "f = 40 Hz. Using f = 1/T = 1/0.025 = 40 Hz." },
    { id: "14-8", topic: "14.2 Periodic Waves", stem: "Find the period of a wave with frequency 500 Hz.", choices: ["2.0 × 10⁻³ s", "5.0 × 10⁻³ s", "2.0 × 10² s", "5.0 × 10² s"], correct: 0, explanation: "T = 2.0 × 10⁻³ s. Using T = 1/f = 1/500 = 0.0020 s." },
    { id: "14-9", topic: "14.2 Periodic Waves", stem: "A wave travels at 300 m/s through a medium with frequency 150 Hz. Find its wavelength.", choices: ["0.5 m", "2.0 m", "450 m", "45,000 m"], correct: 1, explanation: "λ = 2.0 m. Using λ = v/f = 300/150 = 2.0 m." },
    { id: "14-10", topic: "14.2 Periodic Waves", stem: "What primarily determines a wave's speed through a given medium?", choices: ["The wave's frequency", "The wave's amplitude", "Properties of the medium itself (such as density, tension, or elasticity)", "The wave's period"], correct: 2, explanation: "Properties of the medium. Speed is set by what the wave is traveling through — not by the wave's own frequency, period, or amplitude, all of which can vary independently while speed stays fixed for a given medium." },
    { id: "14-11", topic: "14.2 Periodic Waves", stem: "A wave's amplitude is doubled while its frequency and medium stay the same. How does its speed change?", choices: ["It doubles.", "It is cut in half.", "It stays the same.", "It quadruples."], correct: 2, explanation: "Unchanged. Wave speed depends on the medium's properties, not on amplitude at all — a louder sound and a quieter sound of the same frequency travel through air at exactly the same speed." },
    { id: "14-12", topic: "14.2 Periodic Waves", stem: "A wave completes 15 full cycles in 3.0 seconds. Find its frequency and period.", choices: ["5.0 Hz and 0.20 s", "0.20 Hz and 5.0 s", "45 Hz and 0.022 s", "15 Hz and 0.067 s"], correct: 0, explanation: "5.0 Hz and 0.20 s. Frequency is cycles per second: f = 15/3.0 = 5.0 Hz. Period is the reciprocal: T = 1/5.0 = 0.20 s." },
    { id: "14-13", topic: "14.3 Boundaries & Polarization", stem: "A wave pulse on a string reflects off a FREE end. Describe the reflected pulse compared to the original.", choices: ["Inverted (180° phase shift)", "Upright, same orientation as the original", "Split into two smaller pulses", "Completely absorbed, no reflection occurs"], correct: 1, explanation: "Upright, same orientation. A free end can move freely, so it simply follows the incoming pulse's displacement and sends a matching (non-inverted) reflected pulse back." },
    { id: "14-14", topic: "14.3 Boundaries & Polarization", stem: "A wave pulse on a string reflects off a FIXED end. Describe the reflected pulse compared to the original.", choices: ["Inverted (180° phase shift)", "Upright, same orientation as the original", "Split into two smaller pulses", "Completely absorbed, no reflection occurs"], correct: 0, explanation: "Inverted, a 180° phase shift. Since the fixed end cannot move at all, it must exert an equal and opposite reaction force on the string, sending back a reflected pulse with the opposite displacement from the original." },
    { id: "14-15", topic: "14.3 Boundaries & Polarization", stem: "Explain, physically, why a fixed end inverts a reflected wave pulse.", choices: ["The fixed end absorbs half the pulse's energy, flipping the remainder.", "By Newton's third law, the immovable end exerts an equal and opposite reaction force on the string, producing an oppositely-displaced reflected pulse.", "Fixed ends only reflect pulses of a specific wavelength.", "This is simply an empirical rule with no deeper physical explanation."], correct: 1, explanation: "Newton's third law. When the incoming pulse tries to displace the fixed end, the end can't move — instead it pushes back on the string with an equal and opposite force, launching a reflected pulse with inverted (opposite) displacement." },
    { id: "14-16", topic: "14.3 Boundaries & Polarization", stem: "Unpolarized light passes through a single polarizing filter. Approximately what fraction of the original intensity passes through?", choices: ["About 100%", "About 50%", "About 25%", "About 0%"], correct: 1, explanation: "About 50%. For genuinely unpolarized (randomly oriented) light, on average half of the amplitude components already align with the filter's transmission axis, letting roughly half the original intensity through." },
    { id: "14-17", topic: "14.3 Boundaries & Polarization", stem: "Polarized light passes through a second polarizing filter oriented exactly perpendicular (90°) to the first filter. Approximately how much light passes through the second filter?", choices: ["About 100%", "About 50%", "About 25%", "Essentially none (about 0%)"], correct: 3, explanation: "Essentially none. A filter oriented perpendicular to the light's existing polarization direction blocks it almost completely — this is exactly how polarized sunglasses stacked at 90° to each other appear to go completely dark." },
    { id: "14-18", topic: "14.3 Boundaries & Polarization", stem: "Which of the following pairs of waves could, in principle, both be polarized?", choices: ["Sound waves and light waves", "Light waves and waves on a string", "Sound waves and waves on a string", "None of these waves can be polarized"], correct: 1, explanation: "Light waves and waves on a string — both are transverse. Polarization only applies to transverse waves, since it involves restricting the direction of a perpendicular oscillation; sound, being longitudinal, has no such perpendicular oscillation to restrict." },
    { id: "14-19", topic: "14.4 EM Waves", stem: "Which of the following correctly ranks these electromagnetic waves from LOWEST to HIGHEST frequency: visible light, radio waves, X-rays?", choices: ["Radio waves < visible light < X-rays", "X-rays < visible light < radio waves", "Visible light < radio waves < X-rays", "Radio waves < X-rays < visible light"], correct: 0, explanation: "Radio waves < visible light < X-rays. This is the standard ordering of the electromagnetic spectrum by increasing frequency (and correspondingly decreasing wavelength) — radio waves have the longest wavelengths and lowest frequencies, X-rays among the shortest wavelengths and highest frequencies." },
    { id: "14-20", topic: "14.4 EM Waves", stem: "Find the wavelength of an electromagnetic wave with frequency 6.0×10¹⁴ Hz.", choices: ["5.0 × 10⁻⁸ m", "5.0 × 10⁻⁷ m", "5.0 × 10⁻⁶ m", "5.0 × 10⁻⁵ m"], correct: 1, explanation: "λ = 5.0 × 10⁻⁷ m. Using λ = c/f = (3.0×10⁸)/(6.0×10¹⁴) = 5.0×10⁻⁷ m — this falls in the visible light range (500 nm, roughly green light)." },
    { id: "14-21", topic: "14.4 EM Waves", stem: "Compare the speed of a radio wave to the speed of a gamma ray, both traveling through vacuum.", choices: ["The gamma ray travels faster.", "The radio wave travels faster.", "They travel at exactly the same speed.", "This cannot be determined without knowing their exact frequencies."], correct: 2, explanation: "Exactly equal. All electromagnetic waves travel at precisely c in vacuum, regardless of their frequency or wavelength — only the frequency and wavelength differ across the spectrum, never the speed in vacuum." },
    { id: "14-22", topic: "14.4 EM Waves", stem: "In an electromagnetic wave, how are the electric field, magnetic field, and direction of propagation oriented relative to each other?", choices: ["All three point in the same direction.", "The electric and magnetic fields are parallel to each other but perpendicular to the direction of travel.", "All three are mutually perpendicular to each other.", "The electric field is perpendicular to travel; the magnetic field is parallel to travel."], correct: 2, explanation: "Mutually perpendicular. The oscillating electric field, oscillating magnetic field, and the direction the wave propagates are all at right angles to one another — this three-way perpendicularity is a defining structural feature of every electromagnetic wave." },
    { id: "14-23", topic: "14.4 EM Waves", stem: "Compare the photon energy of a gamma ray to that of a radio wave.", choices: ["Gamma ray photons have much higher energy, since E = hf and gamma rays have far higher frequency.", "Radio wave photons have much higher energy, since they have longer wavelengths.", "They have equal photon energy, since both travel at speed c.", "Photon energy cannot be compared without knowing the wave amplitudes."], correct: 0, explanation: "Gamma rays have much higher photon energy. Since E = hf, and gamma rays sit at the extreme high-frequency end of the spectrum while radio waves sit at the extreme low-frequency end, gamma ray photons carry vastly more energy per photon — this is exactly why gamma rays are dangerous to biological tissue while radio waves are essentially harmless." },
    { id: "14-24", topic: "14.4 EM Waves", stem: "An electromagnetic wave's frequency increases while it remains in vacuum. How does its wavelength change?", choices: ["It increases.", "It decreases.", "It stays the same.", "Cannot be determined without more information."], correct: 1, explanation: "It decreases. Since c = fλ and c is a fixed constant in vacuum, an increase in frequency must be matched by a proportional decrease in wavelength to keep their product equal to c." },
    { id: "14-25", topic: "14.5 Doppler Effect", stem: "A car horn sounds as the car drives TOWARD a stationary listener. Compared to the horn's true emitted frequency, does the listener hear a higher or lower frequency?", choices: ["Higher", "Lower", "Exactly the same", "Cannot be determined without the car's exact speed"], correct: 0, explanation: "Higher. Motion of the source toward the observer compresses the sound waves in front of it, shortening the effective wavelength and raising the observed frequency — the classic rising pitch of an approaching vehicle." },
    { id: "14-26", topic: "14.5 Doppler Effect", stem: "The same car horn sounds as the car drives AWAY from the stationary listener. Compared to the horn's true frequency, does the listener hear a higher or lower frequency?", choices: ["Higher", "Lower", "Exactly the same", "Cannot be determined without the car's exact speed"], correct: 1, explanation: "Lower. Motion of the source away from the observer stretches the sound waves out behind it, lengthening the effective wavelength and lowering the observed frequency — the classic falling pitch as a vehicle passes and recedes." },
    { id: "14-27", topic: "14.5 Doppler Effect", stem: "A stationary source emits sound, and a listener moves TOWARD the source. Does the listener observe a higher or lower frequency than the source's true frequency?", choices: ["Higher", "Lower", "Exactly the same, since only source motion causes a Doppler shift", "Cannot be determined without the listener's exact speed"], correct: 0, explanation: "Higher. The same directional rule applies regardless of which object is actually moving — motion toward always raises the observed frequency, whether it's the source moving toward a stationary listener, or (as here) the listener moving toward a stationary source." },
    { id: "14-28", topic: "14.5 Doppler Effect", stretch: true, stem: "Two cars move directly toward each other, one honking its horn continuously. Compare the observed frequency in this case to a scenario where only the honking car moves (listener stationary) at the same total relative closing speed.", choices: ["The two-cars-moving scenario produces a LARGER frequency shift than the single-mover scenario at the same relative speed.", "The two-cars-moving scenario produces a SMALLER frequency shift.", "The frequency shift is identical in both cases, since only relative speed matters.", "No Doppler shift occurs unless the source alone is moving."], correct: 0, explanation: "The two-cars-moving case produces a larger shift. In the full Doppler formula, source motion toward the observer affects the denominator and observer motion toward the source affects the numerator — when both happen simultaneously, both effects stack together, each independently pushing the observed frequency higher, producing a bigger total shift than either effect alone would at the same combined relative speed. This requires reasoning about combined source-and-observer motion together, rather than the simpler single-mover scenarios more commonly emphasized." },
    { id: "14-29", topic: "14.5 Doppler Effect", stem: "A source emits sound at 400 Hz while moving TOWARD a stationary observer at 30 m/s (sound speed 340 m/s). Find the observed frequency.", choices: ["367 Hz", "400 Hz", "439 Hz", "483 Hz"], correct: 2, explanation: "f' ≈ 439 Hz. Using f' = f·v/(v − v<sub>source</sub>) = 400(340)/(340 − 30) = 400(340)/310 ≈ 439 Hz. Source approaching means using the minus sign in the denominator, which increases the observed frequency." },
    { id: "14-30", topic: "14.5 Doppler Effect", stem: "The same source (400 Hz) now moves AWAY from the stationary observer at 30 m/s (sound speed 340 m/s). Find the observed frequency.", choices: ["368 Hz", "400 Hz", "439 Hz", "483 Hz"], correct: 0, explanation: "f' ≈ 368 Hz. Using f' = f·v/(v + v<sub>source</sub>) = 400(340)/(340 + 30) = 400(340)/370 ≈ 368 Hz. Source receding means using the plus sign in the denominator, which decreases the observed frequency — the exact mirror image of the approaching case." },
    { id: "14-31", topic: "14.5 Doppler Effect", stem: "A stationary source emits sound at 500 Hz. An observer moves TOWARD the source at 20 m/s (sound speed 340 m/s). Find the observed frequency.", choices: ["471 Hz", "500 Hz", "529 Hz", "559 Hz"], correct: 2, explanation: "f' ≈ 529 Hz. Using f' = f(v + v<sub>observer</sub>)/v = 500(340 + 20)/340 = 500(360)/340 ≈ 529 Hz. Observer approaching uses the plus sign in the numerator, raising the observed frequency." },
    { id: "14-32", topic: "14.5 Doppler Effect", stem: "A source and an observer move at the same velocity — same speed, same direction, moving together with zero relative motion between them. Is a Doppler shift observed?", choices: ["Yes, proportional to their shared speed.", "No — the Doppler effect depends on relative motion between source and observer, and there is none here.", "Yes, but only if their shared speed exceeds the speed of sound.", "This situation is physically impossible."], correct: 1, explanation: "No shift at all. The Doppler effect fundamentally depends on the RELATIVE velocity between source and observer. If both move together with zero relative motion — even if they're both moving fast relative to the ground or medium — there's no compression or stretching of the waves between them, and no frequency shift occurs." },
    { id: "14-33", topic: "14.5 Doppler Effect", stem: "A distant galaxy is moving away from Earth. Using the Doppler effect, explain why its light appears 'redshifted' (shifted toward longer wavelengths) to an observer on Earth.", choices: ["The galaxy's light loses energy traveling through empty space, unrelated to its motion.", "The galaxy's motion away from Earth stretches the light waves, increasing the observed wavelength — the same Doppler principle as a receding sound source, applied to light.", "Red light travels faster than other colors, so it arrives first.", "This effect only applies to sound waves, not light."], correct: 1, explanation: "It's the same Doppler stretching effect as a receding sound source, applied to light instead. A source (the galaxy) moving away increases the effective wavelength observed — and since red light sits at the long-wavelength end of the visible spectrum, a shift toward longer wavelengths is called a redshift. This is one of the primary pieces of evidence for the expanding universe." },
    { id: "14-34", topic: "14.6 Interference & Standing Waves", stem: "Two waves arrive at a point with a path difference of exactly 3 wavelengths. Is the interference constructive or destructive?", choices: ["Constructive", "Destructive", "Neither — no interference occurs", "Cannot be determined without the wavelength's exact value"], correct: 0, explanation: "Constructive. A path difference of a whole number of wavelengths (here, 3λ) means the two waves arrive perfectly in phase, reinforcing each other." },
    { id: "14-35", topic: "14.6 Interference & Standing Waves", stem: "Two waves arrive at a point with a path difference of exactly 1.5 wavelengths. Is the interference constructive or destructive?", choices: ["Constructive", "Destructive", "Neither — no interference occurs", "Cannot be determined without the wavelength's exact value"], correct: 1, explanation: "Destructive. A path difference of a half-integer number of wavelengths (here, 1.5λ) means the two waves arrive exactly out of phase, canceling each other." },
    { id: "14-36", topic: "14.6 Interference & Standing Waves", stem: "A string 3.0 m long, fixed at both ends, vibrates in its first harmonic (fundamental) with wave speed 60 m/s. Find the frequency.", choices: ["5.0 Hz", "10 Hz", "20 Hz", "180 Hz"], correct: 1, explanation: "f₁ = 10 Hz. Using f<sub>n</sub> = nv/(2L) with n = 1: f₁ = (1)(60)/(2×3.0) = 60/6.0 = 10 Hz." },
    { id: "14-37", topic: "14.6 Interference & Standing Waves", stem: "Find the frequency of the fourth harmonic for the same string (3.0 m, fixed both ends, wave speed 60 m/s).", choices: ["10 Hz", "20 Hz", "40 Hz", "80 Hz"], correct: 2, explanation: "f₄ = 40 Hz. Using f<sub>n</sub> = nv/(2L) with n = 4: f₄ = (4)(60)/(6.0) = 40 Hz — exactly four times the fundamental (10 Hz), since harmonic frequencies are always whole-number multiples of the fundamental." },
    { id: "14-38", topic: "14.6 Interference & Standing Waves", stem: "What is true about the displacement of a node in a standing wave pattern, at all times?", choices: ["It oscillates with maximum amplitude.", "It is always exactly zero.", "It oscillates with half the maximum amplitude.", "Its displacement depends on which harmonic is present."], correct: 1, explanation: "Always exactly zero. Nodes are, by definition, the points where the standing wave pattern never moves at all, regardless of the wave's phase at any given instant — they mark the locations of perfect destructive interference between the two opposite-traveling component waves." },
    { id: "14-39", topic: "14.6 Interference & Standing Waves", stem: "How many nodes and antinodes does the SECOND harmonic (n = 2) have on a string fixed at both ends?", choices: ["2 nodes, 2 antinodes", "3 nodes, 2 antinodes", "2 nodes, 3 antinodes", "3 nodes, 3 antinodes"], correct: 1, explanation: "3 nodes, 2 antinodes. For a string fixed at both ends, the general rule is n antinodes and (n+1) nodes — the two fixed endpoints always count as nodes themselves. For n = 2, that's 2 antinodes and 3 nodes total (including both endpoints)." },
    { id: "14-40", topic: "14.6 Interference & Standing Waves", stem: "Find the wavelength of the fundamental (n = 1) standing wave on a 0.90 m string fixed at both ends.", choices: ["0.45 m", "0.90 m", "1.8 m", "3.6 m"], correct: 2, explanation: "λ₁ = 1.8 m. Using λ_n = 2L/n with n = 1: λ₁ = 2(0.90)/1 = 1.8 m — the fundamental wavelength is always twice the string's length, for a string fixed at both ends." },
    { id: "14-41", topic: "14.6 Interference & Standing Waves", stem: "A string's tension is increased, increasing the wave speed on the string. If the string's length and the harmonic number stay the same, how does the standing wave's frequency change?", choices: ["It increases.", "It decreases.", "It stays the same.", "Cannot be determined without knowing the exact tension."], correct: 0, explanation: "It increases. Since f<sub>n</sub> = nv/(2L), a higher wave speed v (with n and L unchanged) directly raises the frequency. This is exactly why tightening a guitar or violin string raises its pitch — increased tension increases wave speed, which increases frequency." },
    { id: "14-42", topic: "14.6 Interference & Standing Waves", stem: "Two speakers emit sound waves of the same frequency, in phase with each other. At a point exactly equidistant from both speakers, is the interference constructive or destructive?", choices: ["Constructive", "Destructive", "Neither — equal distances always produce silence", "Cannot be determined without knowing the wavelength"], correct: 0, explanation: "Constructive. At a point equidistant from both speakers, the path difference is exactly zero — which counts as 0×λ, a whole number of wavelengths — so the two in-phase waves arrive perfectly in sync and reinforce each other." },
    { id: "14-43", topic: "14.6 Interference & Standing Waves", stem: "Two identical, in-phase speakers are positioned so a listener is exactly half a wavelength farther from one speaker than the other. Describe what the listener hears at that point.", choices: ["Sound significantly louder than from either speaker alone.", "Sound at normal volume, unaffected by the second speaker.", "Sound much quieter, or even near-silent, due to destructive interference.", "A pure tone shifted to a different frequency."], correct: 2, explanation: "Much quieter, potentially near-silent. A path difference of half a wavelength satisfies the destructive interference condition exactly, so the two sound waves arrive out of phase and largely cancel each other — this is the same underlying principle used in active noise-canceling headphones, which generate a precisely out-of-phase sound wave to cancel unwanted noise." },
    { id: "14-44", topic: "14.7 Diffraction", stem: "A wave passes through an opening much LARGER than its wavelength. Describe the resulting diffraction.", choices: ["Significant — the wave spreads out substantially.", "Minimal — the wave travels mostly straight through with little spreading.", "The wave is completely blocked.", "The wave's frequency changes upon passing through."], correct: 1, explanation: "Minimal diffraction. When the opening is much larger than the wavelength, the wave passes through with little noticeable bending around the edges, producing a comparatively sharp-edged pattern beyond the opening." },
    { id: "14-45", topic: "14.7 Diffraction", stem: "A wave passes through an opening comparable in size to (or smaller than) its wavelength. Describe the resulting diffraction.", choices: ["Significant — the wave spreads out substantially, bending around the opening's edges.", "Minimal — the wave travels mostly straight through.", "The wave is completely blocked.", "The wave's speed changes upon passing through."], correct: 0, explanation: "Significant diffraction. When wavelength is comparable to (or larger than) the opening, the wave bends and spreads noticeably as it passes through — the opening effectively acts like a new point source radiating outward." },
    { id: "14-46", topic: "14.7 Diffraction", stem: "Compare the diffraction of red light versus blue light (red has the longer wavelength) passing through the same narrow slit.", choices: ["Red light diffracts more, since it has the longer wavelength.", "Blue light diffracts more, since it has the higher frequency.", "Both diffract equally, since they're both visible light.", "Neither diffracts noticeably, since both wavelengths are far smaller than any everyday slit."], correct: 0, explanation: "Red light diffracts more. Diffraction increases as wavelength becomes more comparable to the size of the opening — since red light has the longer wavelength of the two, it spreads out more after passing through the same slit than blue light does." },
    { id: "14-47", topic: "14.7 Diffraction", stem: "Explain why you can hear someone talking around a corner with no direct line of sight, but generally cannot see them.", choices: ["Sound travels faster than light, so it arrives from a different path.", "Sound wavelengths are comparable to typical corners/doorways and diffract substantially; visible light's wavelength is vastly smaller and diffracts far too little to bend around the same corner.", "Light is absorbed by air around corners, while sound is not.", "This has nothing to do with diffraction — it's purely due to reflection off nearby walls."], correct: 1, explanation: "It comes down to the vast difference in wavelength. Sound wavelengths (centimeters to meters) are comparable to everyday openings like doorways and corners, so sound diffracts substantially around them. Visible light's wavelength (around 500 nm) is many orders of magnitude smaller than any everyday-sized opening, so it diffracts far too little to bend meaningfully around the same corner — casting a comparatively sharp shadow instead." },
    { id: "14-48", topic: "14.7 Diffraction", stem: "If the size of an opening is decreased while the wavelength passing through it stays fixed, how does the amount of diffraction change?", choices: ["It increases.", "It decreases.", "It stays the same.", "Cannot be determined without knowing the exact wavelength."], correct: 0, explanation: "It increases. A smaller opening relative to a fixed wavelength means the wavelength becomes MORE comparable to (or exceeds) the opening size, which is exactly the condition that produces more significant diffraction." },
    { id: "14-49", topic: "14.7 Diffraction", stem: "A radio wave (wavelength ≈ 1 m) and a light wave (wavelength ≈ 500 nm) both encounter an obstacle 10 cm wide. Which diffracts more around this obstacle?", choices: ["The radio wave, since its wavelength is much larger relative to the obstacle size.", "The light wave, since it has a much higher frequency.", "Both diffract equally, since they're both electromagnetic waves.", "Neither diffracts, since the obstacle is opaque to both."], correct: 0, explanation: "The radio wave diffracts far more. Its 1 m wavelength is comparable to (even larger than) the 10 cm obstacle, causing substantial bending around it. The light wave's 500 nm wavelength is many orders of magnitude smaller than the obstacle, so it essentially casts a sharp shadow with negligible bending." },
    { id: "14-50", topic: "14.8 Double-Slit & Diffraction Gratings", stem: "Light of wavelength 450 nm passes through two slits separated by 0.10 mm. Find the angle to the first bright fringe (m = 1).", choices: ["0.13°", "0.26°", "0.52°", "1.0°"], correct: 1, explanation: "θ ≈ 0.26°. Using dsinθ = mλ: sinθ = mλ/d = (1)(450×10⁻⁹)/(0.10×10⁻³) = 4.5×10⁻³, giving θ = sin⁻¹(4.5×10⁻³) ≈ 0.26°." },
    { id: "14-51", topic: "14.8 Double-Slit & Diffraction Gratings", stem: "Using the same setup (450 nm, d = 0.10 mm), find the angle to the SECOND bright fringe (m = 2).", choices: ["0.26°", "0.52°", "0.78°", "1.0°"], correct: 1, explanation: "θ ≈ 0.52°. Using sinθ = mλ/d = (2)(450×10⁻⁹)/(0.10×10⁻³) = 9.0×10⁻³, giving θ ≈ 0.52° — almost exactly double the m = 1 angle, since sinθ scales directly with m at these small angles." },
    { id: "14-52", topic: "14.8 Double-Slit & Diffraction Gratings", stem: "If the slit separation d is increased (wavelength unchanged), how does the angle to a given bright fringe (fixed m) change?", choices: ["It increases.", "It decreases.", "It stays the same.", "Cannot be determined without knowing m."], correct: 1, explanation: "It decreases. Since sinθ = mλ/d, increasing d (in the denominator) decreases sinθ, and therefore θ — wider slit spacing compresses the fringe pattern closer together." },
    { id: "14-53", topic: "14.8 Double-Slit & Diffraction Gratings", stem: "If the wavelength of light used is increased (slit separation unchanged), how does the angle to a given bright fringe change?", choices: ["It increases.", "It decreases.", "It stays the same.", "Cannot be determined without knowing m."], correct: 0, explanation: "It increases. Since sinθ = mλ/d, a longer wavelength directly increases sinθ, and therefore θ — longer-wavelength light produces a more spread-out fringe pattern, the exact opposite effect from increasing slit separation." },
    { id: "14-54", topic: "14.8 Double-Slit & Diffraction Gratings", stem: "At the exact center of a double-slit interference pattern (m = 0), what is true about the light arriving there from each slit?", choices: ["The two waves have traveled paths differing by exactly half a wavelength.", "The two waves have traveled exactly equal path lengths, arriving perfectly in phase.", "Only light from one of the two slits reaches this point.", "The two waves arrive completely out of phase."], correct: 1, explanation: "Equal path lengths, perfectly in phase. The central bright fringe sits at the point of zero path difference — equidistant from both slits — which is why it's typically the brightest fringe in the entire pattern." },
    { id: "14-55", topic: "14.8 Double-Slit & Diffraction Gratings", stem: "Light passing through two slits (d = 8.0×10⁻⁶ m) produces a bright fringe at 15° for m = 3. Find the wavelength.", choices: ["230 nm", "690 nm", "1400 nm", "2100 nm"], correct: 1, explanation: "λ ≈ 690 nm. Rearranging dsinθ = mλ: λ = dsinθ/m = (8.0×10⁻⁶)(sin 15°)/3 = (8.0×10⁻⁶)(0.259)/3 ≈ 6.9×10⁻⁷ m = 690 nm." },
    { id: "14-56", topic: "14.8 Double-Slit & Diffraction Gratings", stem: "A diffraction grating has many more evenly-spaced slits than a simple double slit. Compared to a double slit, how does a grating's bright fringe pattern differ?", choices: ["The bright fringes appear at completely different angles.", "The bright fringes appear at the same angles, but much sharper and narrower, with darker regions between them.", "A grating produces no distinct fringes at all, just uniform brightness.", "A grating only works for a single specific wavelength."], correct: 1, explanation: "Same angles (still given by dsinθ = mλ), but sharper and narrower fringes. With many slits instead of two, light must align even more precisely across all of them to interfere constructively, producing much more sharply-defined bright fringes with more distinctly dark regions between — this is exactly why diffraction gratings are far more precise tools for measuring wavelength than a simple two-slit setup." },
    { id: "14-57", topic: "14.8 Double-Slit & Diffraction Gratings", stretch: true, stem: "Does single-slit diffraction also produce a bright/dark fringe pattern, and if so, is the underlying cause the same as double-slit interference?", choices: ["Yes, and the cause is identical — light from two physically separate slits interfering.", "Yes, but the cause differs — it comes from different parts of the SAME slit interfering with each other, not light from two separate slits.", "No, single-slit diffraction produces uniform brightness with no fringe pattern at all.", "Yes, but only for light with wavelength longer than the slit width."], correct: 1, explanation: "Yes, but for a genuinely different reason. Single-slit diffraction produces its own bright/dark pattern from many secondary wavelets across the SAME single opening interfering with each other — as opposed to double-slit interference, which comes from light emerging from two physically distinct slits interfering. Both are fundamentally wave-superposition phenomena, but distinguishing 'diffraction pattern' (self-interference within one opening) from 'interference pattern' (two distinct sources) is a more nuanced distinction than the core dsinθ = mλ relationship this section usually emphasizes." },
    { id: "14-58", topic: "14.9 Thin Film Interference", stem: "A thin film has thickness 150 nm. Find the path difference for light reflecting off the top and bottom surfaces.", choices: ["75 nm", "150 nm", "300 nm", "600 nm"], correct: 2, explanation: "300 nm. Using path difference = 2t = 2(150 nm) = 300 nm — light crosses the film's thickness twice, once going down to the bottom surface and once coming back up." },
    { id: "14-59", topic: "14.9 Thin Film Interference", stem: "Light reflects off a boundary going from a LOWER-index medium into a HIGHER-index medium. Describe the phase shift that occurs.", choices: ["180° phase shift", "No phase shift", "90° phase shift", "The phase shift depends on the exact wavelength"], correct: 0, explanation: "180° phase shift — the same behavior as reflection off a fixed end. Reflecting into a higher-index (optically denser) medium always introduces this phase flip." },
    { id: "14-60", topic: "14.9 Thin Film Interference", stem: "Light reflects off a boundary going from a HIGHER-index medium into a LOWER-index medium. Describe the phase shift.", choices: ["180° phase shift", "No phase shift", "90° phase shift", "The phase shift depends on the exact wavelength"], correct: 1, explanation: "No phase shift — the same behavior as reflection off a free end. Reflecting into a lower-index (optically less dense) medium never introduces a phase flip." },
    { id: "14-61", topic: "14.9 Thin Film Interference", stem: "A thin oil film (n = 1.4) floats on water (n = 1.33), with air (n = 1.0) above. Determine whether each reflecting surface — the top (air-to-oil) and bottom (oil-to-water) — involves a phase shift.", choices: ["Both surfaces shift.", "Neither surface shifts.", "Only the top surface shifts (air to oil is going to a higher index); the bottom does not (oil to water is going to a lower index).", "Only the bottom surface shifts."], correct: 2, explanation: "Only the top surface shifts. Air (n = 1.0) to oil (n = 1.4) is going into a HIGHER index — a 180° shift. Oil (n = 1.4) to water (n = 1.33) is going into a LOWER index — no shift. This mismatch (one surface shifts, the other doesn't) changes how the usual constructive/destructive path-difference conditions apply compared to a film with matching behavior on both sides." },
    { id: "14-62", topic: "14.9 Thin Film Interference", stem: "A thin film has MATCHED phase-shift behavior on both surfaces (either both shift, or neither does). What is the condition for constructive interference, in terms of the path difference and the wavelength in the film?", choices: ["2t = mλ_film", "2t = (m + ½)λ_film", "2t = mλ_film/2", "t = mλ_film"], correct: 0, explanation: "2t = mλ_film — a whole number of wavelengths, the straightforward path-difference condition. When both surfaces either shift together or don't shift at all, their phase effects either cancel each other out or simply don't factor in, leaving the ordinary constructive-interference condition intact." },
    { id: "14-63", topic: "14.9 Thin Film Interference", stem: "A thin film has MISMATCHED phase-shift behavior (one surface shifts, the other doesn't). What is the condition for constructive interference in this case?", choices: ["2t = mλ_film", "2t = (m + ½)λ_film", "2t = 2mλ_film", "t = (m + ½)λ_film"], correct: 1, explanation: "2t = (m + ½)λ_film — the constructive and destructive conditions SWAP compared to the matched case. The single unmatched 180° shift effectively adds an extra half-wavelength to the interference bookkeeping, flipping which path differences count as constructive versus destructive." },
    { id: "14-64", topic: "14.9 Thin Film Interference", stretch: true, stem: "A soap film (n = 1.33) surrounded by air on both sides has mismatched phase-shift behavior (only the top surface shifts). Find the minimum nonzero thickness for constructive interference of light with vacuum wavelength 500 nm.", choices: ["70 nm", "94 nm", "188 nm", "376 nm"], correct: 1, explanation: "t ≈ 94 nm. First convert to the wavelength INSIDE the film: λ_film = λ_vacuum/n = 500/1.33 ≈ 376 nm. Since this is the mismatched case, use 2t = (m + ½)λ_film, and for minimum thickness take the smallest value, m = 0: 2t = (½)(376) = 188, giving t ≈ 94 nm. This combines three separate steps — recognizing the mismatched condition applies, converting wavelength using the film's index of refraction, and solving for minimum thickness — making it noticeably more involved than the section's single-step problems." },
    { id: "14-65", topic: "14.9 Thin Film Interference", stem: "Explain why a soap bubble shows different colors at different points across its surface, even under uniform white-light illumination.", choices: ["Different colors of light travel at different speeds inside the soap film.", "The film's thickness varies slightly across its surface, and since the constructive-interference condition depends on thickness, different wavelengths (colors) satisfy that condition — and appear brightest — at different locations.", "The soap molecules themselves are colored and simply reflect different colors at random.", "This is caused by diffraction, not interference, and has nothing to do with the film's thickness."], correct: 1, explanation: "It comes down to varying thickness across the film. Since the constructive-interference condition (2t = mλ_film or (m+½)λ_film, depending on the phase-shift situation) depends directly on thickness t, different wavelengths of white light satisfy that condition at different thicknesses — so different colors appear brightest at different points on the film's slightly uneven surface, producing the familiar swirling rainbow pattern." },
  ],
  15: [
    { id: "15-1", topic: "15.1 Quantum Theory", stem: "Find the energy of a photon with frequency 5.0×10¹⁴ Hz. (h = 6.63×10⁻³⁴ J·s)", choices: ["3.3 × 10⁻²⁰ J", "3.3 × 10⁻¹⁹ J", "3.3 × 10⁻¹⁸ J", "3.3 × 10⁻¹⁷ J"], correct: 1, explanation: "E ≈ 3.3 × 10⁻¹⁹ J. Using E = hf = (6.63×10⁻³⁴)(5.0×10¹⁴) ≈ 3.3×10⁻¹⁹ J." },
    { id: "15-2", topic: "15.1 Quantum Theory", stem: "Find the energy in eV of a photon with wavelength 620 nm. (hc = 1240 eV·nm)", choices: ["0.5 eV", "2.0 eV", "4.0 eV", "8.0 eV"], correct: 1, explanation: "E = 2.0 eV. Using E = hc/λ = 1240/620 = 2.0 eV — the convenient eV·nm form of hc avoids converting to joules and meters." },
    { id: "15-3", topic: "15.1 Quantum Theory", stem: "If a photon's frequency doubles, how does its energy change?", choices: ["It doubles.", "It is cut in half.", "It quadruples.", "It stays the same."], correct: 0, explanation: "It doubles. Photon energy is E = hf, a direct proportionality — doubling frequency doubles energy, with no other complications." },
    { id: "15-4", topic: "15.1 Quantum Theory", stem: "If a photon's wavelength doubles, how does its energy change?", choices: ["It doubles.", "It is cut in half.", "It quadruples.", "It stays the same."], correct: 1, explanation: "It's cut in half. Photon energy is E = hc/λ, with wavelength in the denominator — doubling wavelength halves energy." },
    { id: "15-5", topic: "15.1 Quantum Theory", stem: "Find the de Broglie wavelength of a proton (mass 1.67×10⁻²⁷ kg) moving at 5.0×10⁵ m/s. (h = 6.63×10⁻³⁴ J·s)", choices: ["7.9 × 10⁻¹⁴ m", "7.9 × 10⁻¹³ m", "7.9 × 10⁻¹² m", "7.9 × 10⁻¹¹ m"], correct: 1, explanation: "λ ≈ 7.9 × 10⁻¹³ m. First find momentum: p = mv = (1.67×10⁻²⁷)(5.0×10⁵) ≈ 8.35×10⁻²² kg·m/s. Then λ = h/p = (6.63×10⁻³⁴)/(8.35×10⁻²²) ≈ 7.9×10⁻¹³ m." },
    { id: "15-6", topic: "15.1 Quantum Theory", stem: "A baseball and an electron travel at the same speed. Compare their de Broglie wavelengths.", choices: ["The baseball's wavelength is vastly smaller than the electron's, due to its much larger mass.", "The baseball's wavelength is vastly larger than the electron's.", "They have equal wavelengths, since they travel at the same speed.", "The baseball has no de Broglie wavelength at all."], correct: 0, explanation: "The baseball's wavelength is vastly, immeasurably smaller. Since λ = h/p = h/(mv), and the baseball's mass dwarfs the electron's by many orders of magnitude, its wavelength becomes utterly negligible — this is exactly why everyday macroscopic objects never display noticeable wave behavior, even though technically every moving object has some de Broglie wavelength." },
    { id: "15-7", topic: "15.1 Quantum Theory", stem: "Which experimental phenomenon provides evidence for the WAVE nature of light?", choices: ["The photoelectric effect", "Double-slit interference", "Compton scattering", "Blackbody radiation"], correct: 1, explanation: "Double-slit interference. Bright and dark interference fringes are a purely wave-based phenomenon, requiring light to combine via superposition — direct evidence for light's wave behavior, in contrast to the particle-behavior evidence from the photoelectric effect and Compton scattering." },
    { id: "15-8", topic: "15.1 Quantum Theory", stem: "Which experimental phenomenon provides evidence for the PARTICLE nature of light?", choices: ["Double-slit interference", "Thin film interference", "The photoelectric effect", "Diffraction around an obstacle"], correct: 2, explanation: "The photoelectric effect. Electrons are ejected only above a threshold frequency, regardless of light intensity — this behavior only makes sense if light delivers energy in discrete packets (photons), not as a continuous wave, which is exactly the historical evidence that established light's particle-like nature." },
    { id: "15-9", topic: "15.2 The Bohr Model", stem: "An atom's electron has possible energy levels at −8.0 eV (n=1), −2.0 eV (n=2), and −1.0 eV (n=3). Find the energy of a photon emitted for the n=3 to n=1 transition.", choices: ["1.0 eV", "6.0 eV", "7.0 eV", "9.0 eV"], correct: 2, explanation: "7.0 eV. Photon energy equals the magnitude of the energy difference: |(−1.0) − (−8.0)| = 7.0 eV." },
    { id: "15-10", topic: "15.2 The Bohr Model", stem: "Using the same energy levels (−8.0 eV, −2.0 eV, −1.0 eV for n=1,2,3), find the photon energy for the n=2 to n=1 transition.", choices: ["1.0 eV", "6.0 eV", "7.0 eV", "9.0 eV"], correct: 1, explanation: "6.0 eV. |(−2.0) − (−8.0)| = 6.0 eV." },
    { id: "15-11", topic: "15.2 The Bohr Model", stem: "Using the same energy levels, find the photon energy for the n=3 to n=2 transition.", choices: ["1.0 eV", "6.0 eV", "7.0 eV", "9.0 eV"], correct: 0, explanation: "1.0 eV. |(−1.0) − (−2.0)| = 1.0 eV — notice this is the smallest of the three possible transitions among these levels, since n=2 and n=3 are the closest together in energy." },
    { id: "15-12", topic: "15.2 The Bohr Model", stem: "An electron absorbs a photon and jumps from a lower energy level to a higher one. Compare the photon's energy to the exact energy difference between the two levels.", choices: ["The photon's energy must exceed the energy difference.", "The photon's energy must exactly equal the energy difference.", "The photon's energy can be anywhere close to the energy difference.", "There is no required relationship between them."], correct: 1, explanation: "They must be exactly equal. An atom can only absorb a photon whose energy precisely matches an available energy level gap — a photon with even slightly more or less energy simply passes through without being absorbed at all." },
    { id: "15-13", topic: "15.2 The Bohr Model", stem: "Using the levels from the earlier question (−8.0 eV, −2.0 eV, −1.0 eV), find the wavelength of the photon emitted for the n=3 to n=1 transition (photon energy 7.0 eV). (hc = 1240 eV·nm)", choices: ["89 nm", "177 nm", "354 nm", "708 nm"], correct: 1, explanation: "λ ≈ 177 nm. Using λ = hc/E = 1240/7.0 ≈ 177 nm — in the ultraviolet range, just beyond visible light." },
    { id: "15-14", topic: "15.2 The Bohr Model", stem: "An electron in the ground state is illuminated with photons of energy LESS than the energy needed to reach the next level up. Is the photon absorbed?", choices: ["Yes, partially — the electron absorbs what energy it can.", "No — since the photon's energy doesn't exactly match any available energy gap, it passes through unabsorbed.", "Yes, and the electron jumps to the nearest available level anyway.", "This depends on the photon's intensity."], correct: 1, explanation: "No, it passes through unabsorbed. Absorption requires an exact match between photon energy and an available energy gap — being close isn't sufficient, no matter how small the mismatch." },
    { id: "15-15", topic: "15.2 The Bohr Model", stem: "If an atom's electron is already in its highest possible bound energy level, can it absorb another photon and remain bound to the atom?", choices: ["Yes, it can always absorb any photon and stay bound.", "No further bound-to-bound absorption is possible, but it could absorb a high-enough-energy photon to be ionized (ejected) entirely.", "No, the electron can never absorb another photon under any circumstances.", "This depends only on the photon's wavelength, not its energy."], correct: 1, explanation: "No further bound transition, but ionization is possible. With no higher bound level available, the electron can't make another bound-to-bound jump — but a sufficiently energetic photon can still be absorbed if it provides enough energy to fully eject the electron from the atom (ionization), a qualitatively different process from a simple level-to-level transition." },
    { id: "15-16", topic: "15.2 The Bohr Model", stem: "A hypothetical atom has an ionization threshold at 0 eV and a ground state at −4.0 eV, with no intermediate levels. Find the minimum photon energy needed to ionize an electron starting in the ground state.", choices: ["0 eV", "4.0 eV", "8.0 eV", "Cannot be determined"], correct: 1, explanation: "4.0 eV. The electron needs exactly enough energy to bridge the gap from −4.0 eV up to the 0 eV ionization threshold — any less, and it remains bound; any photon energy at or above 4.0 eV can ionize it (with energy above 4.0 eV giving the freed electron leftover kinetic energy)." },
    { id: "15-17", topic: "15.3 Emission and Absorption Spectra", stem: "Describe the appearance of an emission spectrum.", choices: ["Bright lines at specific wavelengths, against an otherwise dark background.", "Dark lines at specific wavelengths, against an otherwise bright background.", "A smooth, continuous rainbow with no distinct lines.", "A single bright line at one specific wavelength only."], correct: 0, explanation: "Bright lines on a dark background. An emission spectrum shows the specific wavelengths released as electrons in a hot, excited gas fall to lower energy levels." },
    { id: "15-18", topic: "15.3 Emission and Absorption Spectra", stem: "Describe the appearance of an absorption spectrum.", choices: ["Bright lines at specific wavelengths, against an otherwise dark background.", "Dark lines at specific wavelengths, against an otherwise bright, continuous background.", "A smooth, continuous rainbow with no distinct lines.", "A single dark line at one specific wavelength only."], correct: 1, explanation: "Dark lines on a bright, continuous background. An absorption spectrum shows the specific wavelengths removed from a broad light source as it passes through a cooler gas, with those photons absorbed to excite electrons upward." },
    { id: "15-19", topic: "15.3 Emission and Absorption Spectra", stem: "A star's light passes through a cloud of cool hydrogen gas before reaching Earth. What would you expect to see at the specific wavelengths hydrogen normally emits?", choices: ["Bright lines, brighter than the surrounding continuous spectrum.", "Dark absorption lines, at exactly those same wavelengths.", "No effect at all — the gas is too cool to interact with the light.", "A uniform dimming across the entire spectrum, not specific to hydrogen's wavelengths."], correct: 1, explanation: "Dark absorption lines, at hydrogen's characteristic wavelengths. The cool gas absorbs photons of exactly those energies from the star's continuous spectrum as the light passes through, removing them and leaving dark gaps at precisely hydrogen's known spectral positions." },
    { id: "15-20", topic: "15.3 Emission and Absorption Spectra", stem: "Why does each element produce a unique spectral 'fingerprint' of specific wavelengths?", choices: ["Each element has a different color naturally.", "Each element has a unique set of quantized electron energy levels, and photon wavelengths correspond directly to the specific gaps between them.", "Different elements absorb different amounts of ambient heat.", "This is purely a labeling convention, not a physical distinction."], correct: 1, explanation: "Unique energy level structures. Since photon wavelengths emitted or absorbed correspond directly to specific energy GAPS between an atom's levels, and no two elements share identical energy level structures, no two elements produce identical spectral line patterns — each is as unique as a fingerprint." },
    { id: "15-21", topic: "15.3 Emission and Absorption Spectra", stem: "Astronomers determine a distant star's chemical composition by analyzing its spectrum. Explain the basic principle behind this technique.", choices: ["They measure the star's overall color and brightness only.", "They compare the specific wavelengths of the star's spectral lines to the known, unique fingerprints of elements measured in Earth laboratories.", "They measure the star's temperature and infer composition from a universal formula.", "This is done by directly sampling material from the star."], correct: 1, explanation: "Matching spectral fingerprints. By comparing the specific wavelengths present in a star's absorption or emission lines to the catalogued, unique spectral signatures of known elements, astronomers can identify which elements are present — all without ever physically sampling the star itself." },
    { id: "15-22", topic: "15.3 Emission and Absorption Spectra", stem: "If an atom had continuously variable (non-quantized) energy levels instead of discrete ones, what would its emission spectrum look like?", choices: ["Identical to the actual sharp-line spectrum we observe.", "A continuous spectrum — a smooth rainbow of all wavelengths, rather than distinct sharp lines.", "No spectrum at all — such an atom couldn't emit light.", "A spectrum with only a single super-intense line."], correct: 1, explanation: "A continuous, smooth spectrum. If energy levels could take any value rather than being restricted to discrete steps, electrons could emit photons of any energy at all, producing a smooth rainbow rather than distinct lines — the sharp-line spectra we actually observe are direct evidence that energy levels really are quantized." },
    { id: "15-23", topic: "15.3 Emission and Absorption Spectra", stretch: true, stem: "For the same element, emission and absorption spectra show lines at the same wavelengths — but why might their RELATIVE intensities differ, even though the line positions match exactly?", choices: ["They never actually differ in intensity — this premise is false.", "Emission depends on which excited states happen to be populated (often requiring specific excitation conditions), while absorption from the ground state depends on which transitions are accessible from that specific starting level — different population distributions lead to different relative intensities.", "Absorption spectra are always uniformly dimmer than emission spectra by a fixed factor.", "Intensity differences are purely due to instrument calibration errors, not physics."], correct: 1, explanation: "Different starting populations across energy levels. Wavelength position is set purely by the energy GAP between levels, which is identical either way — but how BRIGHT each line appears depends on how many atoms are actually undergoing that specific transition, which depends on which levels are populated in the first place (often requiring specific temperature or excitation conditions for emission, versus starting purely from the ground state for absorption). This distinction between line POSITION and line INTENSITY goes beyond the core wavelength-matching fact this section usually emphasizes." },
    { id: "15-24", topic: "15.4 Blackbody Radiation", stem: "As an object's temperature increases, how does its peak blackbody emission wavelength change?", choices: ["It shifts to longer wavelengths.", "It shifts to shorter wavelengths.", "It stays at the same wavelength.", "It becomes undefined."], correct: 1, explanation: "Shifts to shorter wavelengths (higher frequency, higher energy). This is why a heated metal shifts from dull red, through orange and yellow, toward white as its temperature climbs — the peak of its emission is moving toward shorter wavelengths." },
    { id: "15-25", topic: "15.4 Blackbody Radiation", stem: "As an object's temperature increases, how does its total radiated power change?", choices: ["It increases.", "It decreases.", "It stays the same.", "It becomes zero."], correct: 0, explanation: "It increases, and quite dramatically — a hotter object radiates significantly more total electromagnetic energy across its whole spectrum than a cooler one." },
    { id: "15-26", topic: "15.4 Blackbody Radiation", stem: "Compare the peak emission wavelength of a very hot blue star to that of a cooler red star.", choices: ["The blue star's peak wavelength is shorter.", "The blue star's peak wavelength is longer.", "They have equal peak wavelengths.", "Cannot be determined without knowing the stars' sizes."], correct: 0, explanation: "The blue star's peak wavelength is shorter. Blue light itself has a shorter wavelength than red light, and hotter objects peak at shorter wavelengths — both facts point the same direction, consistently identifying the hotter star as blue and the cooler star as red." },
    { id: "15-27", topic: "15.4 Blackbody Radiation", stem: "Why was blackbody radiation historically difficult to explain using classical (non-quantum) physics?", choices: ["Classical physics predicted no radiation at all from any object.", "Classical predictions suggested radiated intensity should increase without bound at short wavelengths — not what's actually observed — until Planck's quantized-energy proposal resolved the discrepancy.", "Classical physics couldn't account for any temperature dependence whatsoever.", "This was never actually a problem for classical physics."], correct: 1, explanation: "The 'ultraviolet catastrophe.' Classical physics, treating energy as continuously variable, predicted intensity should keep increasing without limit at short wavelengths — a prediction wildly at odds with real measurements. Planck's proposal that energy is emitted and absorbed only in discrete chunks (quanta, hf) resolved this contradiction and matched the observed spectrum, marking the historical birth of quantum theory." },
    { id: "15-28", topic: "15.4 Blackbody Radiation", stem: "Does every object with a nonzero temperature emit blackbody radiation, even if it isn't visibly glowing?", choices: ["Yes — objects at everyday temperatures simply peak in the infrared, invisible to human eyes.", "No — only objects hot enough to glow visibly emit any radiation at all.", "Yes, but only metals emit blackbody radiation.", "No — blackbody radiation only applies to stars and other astronomical objects."], correct: 0, explanation: "Yes, universally. Every object above absolute zero radiates across a spectrum of wavelengths — objects at everyday, room-like temperatures simply peak in the infrared range, which human eyes can't detect, so we don't perceive them as 'glowing' even though they are indeed continuously radiating energy." },
    { id: "15-29", topic: "15.4 Blackbody Radiation", stretch: true, stem: "A blackbody's absolute temperature is doubled. How does its peak emission wavelength change?", choices: ["It roughly doubles.", "It roughly halves.", "It stays the same.", "It quadruples."], correct: 1, explanation: "It roughly halves. Peak wavelength is inversely proportional to absolute temperature (Wien's Law: λ_peak ∝ 1/T) — doubling temperature roughly halves the peak wavelength, not doubles it. This specific inverse proportionality (rather than just the general 'hotter means shorter wavelength' direction) is a more precise, quantitative relationship than what's typically expected on the AP2 exam, which usually stays at the qualitative level." },
    { id: "15-30", topic: "15.5 Photoelectric Effect", stem: "A metal has work function 3.0 eV. Light of energy 5.0 eV strikes it. Find the maximum kinetic energy of ejected electrons.", choices: ["2.0 eV", "3.0 eV", "5.0 eV", "8.0 eV"], correct: 0, explanation: "K<sub>max</sub> = 2.0 eV. Using K<sub>max</sub> = hf − φ (with photon energy standing in for hf): K<sub>max</sub> = 5.0 − 3.0 = 2.0 eV." },
    { id: "15-31", topic: "15.5 Photoelectric Effect", stem: "The same metal (work function 3.0 eV) is now struck by light of energy 2.0 eV. Describe what happens.", choices: ["K<sub>max</sub> = −1.0 eV.", "No electrons are ejected at all, since photon energy is below the work function.", "K<sub>max</sub> = 1.0 eV, with fewer electrons ejected than usual.", "K<sub>max</sub> = 2.0 eV, same as the photon energy."], correct: 1, explanation: "No electrons are ejected. Since the photon energy (2.0 eV) is less than the work function (3.0 eV), no single photon carries enough energy to eject an electron — there's no such thing as a negative kinetic energy, so 'zero ejection' is the only physically sensible outcome here, not a negative K<sub>max</sub>." },
    { id: "15-32", topic: "15.5 Photoelectric Effect", stem: "A metal has work function 2.5 eV. Find its threshold frequency. (h = 6.63×10⁻³⁴ J·s, 1 eV = 1.6×10⁻¹⁹ J)", choices: ["1.5 × 10¹⁴ Hz", "3.0 × 10¹⁴ Hz", "6.0 × 10¹⁴ Hz", "1.2 × 10¹⁵ Hz"], correct: 2, explanation: "f ≈ 6.0 × 10¹⁴ Hz. First convert φ to joules: (2.5)(1.6×10⁻¹⁹) = 4.0×10⁻¹⁹ J. Then f<sub>threshold</sub> = φ/h = (4.0×10⁻¹⁹)/(6.63×10⁻³⁴) ≈ 6.0×10¹⁴ Hz — the frequency at which hf exactly equals the work function, with K<sub>max</sub> = 0." },
    { id: "15-33", topic: "15.5 Photoelectric Effect", stem: "A metal has work function 2.0 eV. Light of wavelength 500 nm strikes it. Find the maximum kinetic energy of ejected electrons. (hc = 1240 eV·nm)", choices: ["0.5 eV", "1.0 eV", "2.0 eV", "2.5 eV"], correct: 0, explanation: "K<sub>max</sub> ≈ 0.5 eV. First find photon energy: E = hc/λ = 1240/500 = 2.48 eV. Then K<sub>max</sub> = 2.48 − 2.0 ≈ 0.5 eV." },
    { id: "15-34", topic: "15.5 Photoelectric Effect", stem: "If the intensity of light striking a metal is increased (frequency held fixed, above threshold), how does the maximum kinetic energy of ejected electrons change?", choices: ["It increases proportionally with intensity.", "It stays unchanged.", "It decreases.", "It becomes undefined."], correct: 1, explanation: "Unchanged. Maximum kinetic energy depends only on frequency, via K<sub>max</sub> = hf − φ — intensity has no place in that equation at all. Increasing intensity increases the NUMBER of electrons ejected per second (more photons arriving), not the maximum energy each individual electron carries." },
    { id: "15-35", topic: "15.5 Photoelectric Effect", stem: "If the frequency of light striking a metal is increased (staying above threshold), how does the maximum kinetic energy of ejected electrons change?", choices: ["It increases.", "It stays unchanged.", "It decreases.", "It becomes undefined."], correct: 0, explanation: "It increases, directly and linearly. Since K<sub>max</sub> = hf − φ, a higher frequency directly raises K<sub>max</sub> — this is the one variable that DOES control maximum kinetic energy, in contrast to intensity." },
    { id: "15-36", topic: "15.5 Photoelectric Effect", stem: "Metals A and B are illuminated with the same frequency of light (above both their threshold frequencies). Metal A has a higher work function than Metal B. Compare the maximum kinetic energy of ejected electrons from each.", choices: ["Metal A's electrons have higher K<sub>max</sub>.", "Metal B's electrons have higher K<sub>max</sub>.", "Both have equal K<sub>max</sub>, since frequency is the same.", "Cannot be determined without knowing the exact frequency."], correct: 1, explanation: "Metal B's electrons have higher K<sub>max</sub>. Using K<sub>max</sub> = hf − φ with the same hf for both: the metal with the SMALLER work function (Metal B) has less energy 'spent' overcoming the binding, leaving more left over as kinetic energy." },
    { id: "15-37", topic: "15.5 Photoelectric Effect", stem: "Electrons ejected from a metal have maximum kinetic energy 1.5 eV. Find the stopping voltage needed to halt even the fastest of these electrons.", choices: ["0.75 V", "1.5 V", "3.0 V", "1.5 × 10⁻¹⁹ V"], correct: 1, explanation: "V<sub>stop</sub> = 1.5 V. Since qV<sub>stop</sub> = K<sub>max</sub>, and using the elementary charge for a single electron, the stopping voltage in volts numerically equals K<sub>max</sub> in eV directly — a convenient shortcut of working in electron-volts." },
    { id: "15-38", topic: "15.5 Photoelectric Effect", stem: "A photoelectric experiment measures stopping voltage at several light frequencies, then plots stopping voltage (vertical axis) against frequency (horizontal axis). What does the slope represent, and what does the x-intercept represent?", choices: ["Slope = h/e; x-intercept = threshold frequency.", "Slope = φ; x-intercept = h/e.", "Slope = e/h; x-intercept = φ.", "Slope has no physical meaning; only the y-intercept matters."], correct: 0, explanation: "Slope = h/e; x-intercept = threshold frequency. Rearranging qV<sub>stop</sub> = hf − φ into V<sub>stop</sub> = (h/e)f − (φ/e) gives a linear equation, where the slope directly yields Planck's constant divided by elementary charge, and the x-intercept (where V<sub>stop</sub> = 0) is exactly the threshold frequency — a classic linear-graph analysis question, the same style used throughout this course to extract physical constants from experimental data." },
    { id: "15-39", topic: "15.5 Photoelectric Effect", stem: "A photoelectric experiment is repeated with a more intense light source at the same frequency (above threshold). Compare the stopping voltage required in the two trials.", choices: ["The more intense trial requires a higher stopping voltage.", "The more intense trial requires a lower stopping voltage.", "The stopping voltage required is unchanged.", "No stopping voltage exists once intensity is increased."], correct: 2, explanation: "Unchanged. Stopping voltage depends only on K<sub>max</sub> (via qV<sub>stop</sub> = K<sub>max</sub>), and K<sub>max</sub> depends only on frequency, not intensity. A more intense light source ejects more electrons per second (more current), but the maximum kinetic energy of even the fastest electron — and thus the voltage needed to stop it — stays exactly the same." },
    { id: "15-40", topic: "15.6 Compton Scattering", stem: "In Compton scattering, a photon collides with an electron and scatters off at an angle. Compare the scattered photon's wavelength to its original wavelength.", choices: ["The scattered photon has a shorter wavelength (higher energy).", "The scattered photon has a longer wavelength (lower energy).", "The wavelength is unchanged.", "The wavelength change depends only on the electron's initial speed."], correct: 1, explanation: "Longer wavelength, lower energy. The photon transfers some of its energy and momentum to the electron during the collision, leaving the scattered photon with less energy — and correspondingly, via E = hc/λ, a longer wavelength than it started with." },
    { id: "15-41", topic: "15.6 Compton Scattering", stem: "What does Compton scattering provide direct evidence for?", choices: ["That light travels slower inside matter than in vacuum.", "That photons carry real, quantifiable momentum, not just energy.", "That electrons have no mass.", "That light cannot interact with individual particles at all."], correct: 1, explanation: "Photon momentum. Treating the photon-electron interaction as a genuine two-particle collision — with both momentum AND energy conserved — is exactly what's needed to correctly predict the observed wavelength shift, providing strong evidence that photons carry real momentum, not just energy." },
    { id: "15-42", topic: "15.6 Compton Scattering", stem: "In a Compton scattering event, compare the electron's kinetic energy after the collision to before.", choices: ["It increases.", "It decreases.", "It stays the same.", "It becomes exactly zero."], correct: 0, explanation: "It increases. The electron gains kinetic energy from the collision, consistent with the photon losing energy (and gaining wavelength) as it transfers some of its energy and momentum to the electron." },
    { id: "15-43", topic: "15.6 Compton Scattering", stem: "Which conservation laws are applied together to analyze a Compton scattering collision?", choices: ["Conservation of charge only.", "Conservation of energy only.", "Conservation of both energy AND momentum, simultaneously.", "Conservation of angular momentum only."], correct: 2, explanation: "Both energy and momentum together. Compton scattering is analyzed exactly like any two-particle collision from earlier mechanics work, just with a photon as one of the 'particles' — both conservation laws must be satisfied simultaneously to correctly predict the outcome." },
    { id: "15-44", topic: "15.6 Compton Scattering", stem: "Does Compton scattering primarily support the wave model of light, the particle model, or both equally?", choices: ["Primarily the wave model.", "Primarily the particle model.", "Both models equally, with no distinction.", "Neither model — Compton scattering is unrelated to light's fundamental nature."], correct: 1, explanation: "Primarily the particle model. Treating the photon as a discrete, particle-like object with definite momentum and energy — engaging in a billiard-ball-style collision with the electron — is what correctly predicts the Compton wavelength shift. A purely wave-based treatment doesn't naturally produce this same result." },
    { id: "15-45", topic: "15.6 Compton Scattering", stretch: true, stem: "At which scattering angle does a photon transfer the MAXIMUM possible energy to an electron in Compton scattering: 0° (no deflection), 90°, or 180° (directly backward)?", choices: ["0°", "90°", "180°", "Energy transfer is the same at every angle"], correct: 2, explanation: "180° — direct backward scattering. This is the most 'head-on' type of collision possible, analogous to how a direct head-on collision in ordinary mechanics transfers more momentum and energy than a glancing one. Extending the collision analogy to reason about how scattering ANGLE affects energy transfer efficiency is a step beyond the core 'photon loses energy, wavelength increases' fact this section typically emphasizes." },
    { id: "15-46", topic: "15.7 Fission, Fusion & Decay", stem: "Find the energy released when 0.0010 kg of mass is converted entirely into energy. (c = 3.0×10⁸ m/s)", choices: ["3.0 × 10⁷ J", "9.0 × 10¹³ J", "9.0 × 10¹⁶ J", "2.7 × 10²⁵ J"], correct: 1, explanation: "E = 9.0 × 10¹³ J. Using E = mc² = (0.0010)(3.0×10⁸)² = (0.0010)(9.0×10¹⁶) = 9.0×10¹³ J — an enormous amount of energy from a genuinely tiny amount of mass." },
    { id: "15-47", topic: "15.7 Fission, Fusion & Decay", stem: "Explain the concept of 'mass defect' in a nucleus.", choices: ["The nucleus has slightly MORE mass than its separate constituent protons and neutrons.", "The nucleus has slightly LESS mass than its separate constituent protons and neutrons — the missing mass became binding energy.", "Mass defect refers to measurement error in determining nuclear mass.", "Mass defect only applies to unstable, radioactive nuclei."], correct: 1, explanation: "The nucleus has less mass than its separated parts. The assembled nucleus's mass is always slightly LESS than the sum of the masses of its individual protons and neutrons when separate — that missing mass was converted into binding energy (via E = mc²) when the nucleus formed, and that binding energy is what holds the nucleus together." },
    { id: "15-48", topic: "15.7 Fission, Fusion & Decay", stem: "Compare the total mass of a helium-4 nucleus to the sum of the masses of 2 free protons and 2 free neutrons.", choices: ["The helium-4 nucleus has more total mass.", "The helium-4 nucleus has less total mass — the difference became binding energy.", "They have exactly equal mass.", "This comparison depends on the nucleus's temperature."], correct: 1, explanation: "The helium-4 nucleus has less mass. The 'missing' mass compared to the separated particles became the binding energy holding the nucleus together — this mass defect is a universal feature of every bound nucleus, not just helium." },
    { id: "15-49", topic: "15.7 Fission, Fusion & Decay", stem: "Explain why BOTH nuclear fission (splitting heavy nuclei) and nuclear fusion (combining light nuclei) release energy, despite being essentially opposite processes.", choices: ["Fission releases energy, but fusion actually requires a net energy input overall.", "Both processes move nuclei toward more tightly bound, lower mass-per-nucleon configurations, converting the mass difference into released energy either way.", "Only fission releases energy; the premise about fusion is incorrect.", "Both release energy for entirely unrelated reasons that happen to coincide."], correct: 1, explanation: "Both move toward greater stability. Heavy nuclei become more stable by splitting into medium-sized pieces; light nuclei become more stable by combining into medium-sized nuclei — in both cases, the resulting products are more tightly bound (have less total mass) than the starting materials, and that mass difference converts to released energy via E = mc², regardless of which direction the process runs." },
    { id: "15-50", topic: "15.7 Fission, Fusion & Decay", stem: "Find the energy released, in MeV, corresponding to a mass defect of 0.020 u. (1 u = 931 MeV/c²)", choices: ["0.019 MeV", "1.9 MeV", "19 MeV", "190 MeV"], correct: 2, explanation: "E ≈ 19 MeV. Using E = (0.020 u)(931 MeV/u) ≈ 18.6 MeV, rounding to about 19 MeV." },
    { id: "15-51", topic: "15.7 Fission, Fusion & Decay", stem: "Which type of nuclear process powers the Sun?", choices: ["Fission", "Fusion", "Gamma decay", "Beta decay"], correct: 1, explanation: "Fusion. In the Sun's core, hydrogen nuclei combine (fuse) into helium at extremely high temperatures and pressures, releasing the energy that powers the Sun's light and heat." },
    { id: "15-52", topic: "15.7 Fission, Fusion & Decay", stem: "Which type of nuclear process is used in conventional nuclear power plants on Earth?", choices: ["Fission", "Fusion", "Gamma decay", "Beta decay"], correct: 0, explanation: "Fission. Conventional nuclear reactors split heavy uranium or plutonium nuclei, releasing energy from the mass difference between the original heavy nucleus and the resulting fission fragments." },
    { id: "15-53", topic: "15.7 Fission, Fusion & Decay", stretch: true, stem: "A reactor's fuel undergoes fission, releasing energy. If you account for the released energy as an equivalent mass (via E = mc²), how does the total mass-energy before and after the fission event compare?", choices: ["Total mass-energy decreases overall, since some mass was destroyed.", "Total mass-energy is exactly conserved — the 'lost' mass exactly corresponds to the released energy's equivalent mass.", "Total mass-energy increases, since energy was created from nothing.", "Mass and energy must be tracked as two entirely separate conserved quantities, with no relationship between them."], correct: 1, explanation: "Exactly conserved, when mass and energy are treated together. Mass alone appears to decrease during fission, but that 'lost' mass exactly equals (via E = mc²) the energy released — total mass-ENERGY, properly combined into one quantity, is strictly conserved throughout. This more sophisticated framing — mass-energy equivalence as a single conserved quantity, rather than 'mass decreases, energy appears' as two separate facts — is a deeper synthesis than the basic mass-defect calculation this section usually tests." },
    { id: "15-54", topic: "15.7 Fission, Fusion & Decay", stem: "A fission event releases 200 MeV. Find this energy in joules. (1 eV = 1.6×10⁻¹⁹ J)", choices: ["3.2 × 10⁻¹⁴ J", "3.2 × 10⁻¹¹ J", "3.2 × 10⁻⁸ J", "3.2 × 10⁻⁵ J"], correct: 1, explanation: "E = 3.2 × 10⁻¹¹ J. Converting: 200 MeV = 200×10⁶ eV, so E = (200×10⁶)(1.6×10⁻¹⁹) = 3.2×10⁻¹¹ J." },
    { id: "15-55", topic: "15.7 Fission, Fusion & Decay", stem: "Why do fusion reactions require extremely high temperatures, unlike most fission reactions (which can be triggered by a single low-energy neutron)?", choices: ["Fusion requires overcoming the mutual electric repulsion between two positively charged nuclei; fission is triggered by an electrically neutral neutron facing no such barrier.", "Fusion reactions are actually easier to trigger than fission, contrary to the premise.", "High temperature is needed to supply the mass that gets converted to energy.", "Fusion only works with radioactive isotopes, which require heat to become unstable."], correct: 0, explanation: "Overcoming Coulomb repulsion. Fusing two nuclei requires bringing two positively charged objects close enough for the short-range strong nuclear force to take over — but their electric repulsion strongly resists this approach. Extremely high temperatures give nuclei enough kinetic energy to overcome that repulsion. Fission, by contrast, is triggered by an electrically neutral neutron, which faces no repulsive barrier and can approach a nucleus freely at any temperature." },
    { id: "15-56", topic: "15.8 Types of Radioactive Decay", stem: "Uranium-238 (atomic number 92) undergoes alpha decay. Identify the resulting daughter nucleus.", choices: ["Thorium-234", "Protactinium-234", "Thorium-242", "Radium-234"], correct: 0, explanation: "Thorium-234. Alpha decay removes 4 from the mass number (238 − 4 = 234) and 2 from the atomic number (92 − 2 = 90, which is Thorium)." },
    { id: "15-57", topic: "15.8 Types of Radioactive Decay", stem: "Carbon-14 (atomic number 6) undergoes beta-minus decay. Identify the resulting daughter nucleus.", choices: ["Nitrogen-14", "Boron-14", "Nitrogen-13", "Carbon-13"], correct: 0, explanation: "Nitrogen-14. Beta-minus decay leaves the mass number unchanged (14) while increasing the atomic number by 1 (6 + 1 = 7, which is Nitrogen), since a neutron converts into a proton." },
    { id: "15-58", topic: "15.8 Types of Radioactive Decay", stem: "Sodium-22 (atomic number 11) undergoes beta-plus decay. Identify the resulting daughter nucleus.", choices: ["Neon-22", "Magnesium-22", "Neon-21", "Sodium-21"], correct: 0, explanation: "Neon-22. Beta-plus decay leaves the mass number unchanged (22) while decreasing the atomic number by 1 (11 − 1 = 10, which is Neon), since a proton converts into a neutron." },
    { id: "15-59", topic: "15.8 Types of Radioactive Decay", stem: "A nucleus undergoes gamma decay. How do its mass number and atomic number change?", choices: ["Both decrease.", "Mass number decreases; atomic number stays the same.", "Neither changes at all.", "Both increase."], correct: 2, explanation: "Neither changes. Gamma decay simply releases excess internal energy as a high-energy photon, with no alteration to the nucleus's composition — same number of protons, same number of neutrons, before and after." },
    { id: "15-60", topic: "15.8 Types of Radioactive Decay", stem: "In beta-minus decay, a neutron transforms into a proton, emitting an electron. Using conservation of charge, explain why this transformation is consistent.", choices: ["Charge is not actually conserved in beta decay.", "Total charge before (0, neutron) equals total charge after (+1 proton plus −1 electron = 0).", "The neutron's charge simply disappears during the transformation.", "The electron carries no charge, so charge is trivially conserved."], correct: 1, explanation: "Charge balances exactly. A neutral neutron (charge 0) becomes a proton (charge +1) plus an emitted electron (charge −1); adding the products' charges together, +1 + (−1) = 0, exactly matching the starting charge — conservation of charge holds throughout." },
    { id: "15-61", topic: "15.8 Types of Radioactive Decay", stem: "In beta-plus decay, a proton transforms into a neutron, emitting a positron. Using conservation of charge, explain why this is consistent.", choices: ["Charge is not conserved in this process.", "Total charge before (+1, proton) equals total charge after (0 neutron plus +1 positron = +1).", "The positron carries negative charge, balancing the proton.", "This process actually violates charge conservation, which is why it's rare."], correct: 1, explanation: "Charge balances exactly. A proton (charge +1) becomes a neutron (charge 0) plus an emitted positron (charge +1, since a positron is the positively-charged antimatter counterpart of an electron); the products' total charge, 0 + 1 = +1, exactly matches the starting charge." },
    { id: "15-62", topic: "15.8 Types of Radioactive Decay", stem: "Which type of radioactive decay does NOT change either the mass number or the atomic number of the nucleus?", choices: ["Alpha decay", "Beta-minus decay", "Beta-plus decay", "Gamma decay"], correct: 3, explanation: "Gamma decay. It releases only energy (as a photon), with the nucleus's proton and neutron counts left completely unchanged — the only one of the four decay types that leaves both numbers untouched." },
    { id: "15-63", topic: "15.8 Types of Radioactive Decay", stem: "A nucleus decays by alpha emission, producing a daughter nucleus with mass number 210 and atomic number 82. Find the original (parent) nucleus's mass number and atomic number.", choices: ["214 and 84", "206 and 80", "214 and 80", "206 and 84"], correct: 0, explanation: "214 and 84. Working backward from the daughter: alpha decay REMOVES 4 from mass number and 2 from atomic number, so the parent must have had 4 MORE mass number (210 + 4 = 214) and 2 MORE atomic number (82 + 2 = 84) than the daughter." },
    { id: "15-64", topic: "15.8 Types of Radioactive Decay", stem: "A parent nucleus (mass number 232, atomic number 90) first emits an alpha particle, and the resulting daughter then emits a beta-minus particle. Find the final mass number and atomic number after both decays.", choices: ["228 and 89", "232 and 91", "224 and 86", "228 and 87"], correct: 0, explanation: "228 and 89. Alpha decay first: mass number 232 − 4 = 228; atomic number 90 − 2 = 88. Beta-minus decay next: mass number stays at 228; atomic number 88 + 1 = 89. Working through each step of a decay chain individually, rather than trying to combine them in one move, is the reliable way to avoid errors on multi-step problems like this." },
    { id: "15-65", topic: "15.8 Types of Radioactive Decay", stem: "Which conservation laws must be satisfied in every type of nuclear decay (alpha, beta-minus, beta-plus, and gamma)?", choices: ["Only conservation of mass number.", "Only conservation of charge.", "Conservation of mass number, atomic number (charge), energy, and momentum — all four, universally.", "No conservation laws apply to nuclear decay; it is fundamentally random."], correct: 2, explanation: "All four, in every case. Mass number (total nucleons) and atomic number (total charge) must balance on both sides of every nuclear equation, exactly like balancing a chemical equation — and energy and momentum, the same fundamental conservation laws from mechanics, apply universally to nuclear decay processes as well, governing the kinetic energies and directions of the emitted particles." },
  ],
};

const FRQ_CONTENT = {
  9: [
    {
      id: "frq-9-1",
      source: "2024 AP Exam, Free-Response Question 2",
      title: "Ideal Gas Thermal Experiments",
      prompt: "Experiment 1: A sample of ideal gas is sealed in an insulated chamber with thin, rigid walls, containing a heater and sensors that measure temperature and pressure. (a) Describe a procedure to determine the number N of gas molecules in the chamber. (b) While the heater is on: (i) sketch the expected P vs. V relationship, with an arrow showing the process direction; (ii) sketch the expected U vs. V relationship, with an arrow; (iii) briefly justify the shape of the U vs. V graph. Experiment 2: A liquid-filled container wrapped in a material (thickness 0.01 m, area 0.06 m² in contact with the gas) sits inside the same chamber. As gas temperature T<sub>G</sub> rises, data for liquid temperature T<sub>L</sub> and rate of energy transfer Q/Δt are collected: (295K,295K,0.0 J/s), (371K,303K,26.3), (425K,308K,43.1), (475K,313K,60.0), (528K,323K,75.0). (c) Determine what to graph to find thermal conductivity k, and (d) calculate k from the best-fit line.",
      parts: [
        { label: "(a)", ask: "Describe a procedure to determine N, the number of gas molecules.", steps: [
          "Identify the fixed known quantity: since the chamber has rigid, thin walls, volume V is constant throughout — this lets you use PV = NkT with only P and T changing.",
          "Describe the procedure: use the heater to set the gas at several different temperatures; at each setting, wait for thermal equilibrium, then record T and P from the built-in sensors.",
          "Describe the graph and how N is extracted: plot P (vertical) vs. T (horizontal); since P = (Nk/V)T, this is a line through the origin with slope Nk/V — multiply the measured slope by V/k to solve for N.",
          "Note the uncertainty-reduction step: taking multiple (T, P) pairs and using a best-fit line instead of one single calculation averages out random measurement error."
        ]},
        { label: "(b) i–ii", ask: "Sketch P vs. V and U vs. V while the heater is on.", steps: [
          "Recognize the process type: the rigid, thin-walled chamber means volume cannot change — this is an isochoric (constant-volume) process regardless of how much heat is added.",
          "Sketch logic for P vs. V: with V pinned at a single value and P increasing as the heater warms the gas, the graph is a vertical line segment, arrow pointing upward.",
          "Sketch logic for U vs. V: the same constant-V reasoning applies — U increases as T increases, so this is also a vertical line, arrow pointing upward."
        ]},
        { label: "(b) iii", ask: "Justify the shape of the U vs. V graph.", steps: [
          "Recall the first law: ΔU = Q + W.",
          "Since V never changes (rigid container), W = −PΔV = 0 — no expansion work is possible.",
          "Therefore ΔU = Q exactly: every joule of heat added by the heater goes directly into raising internal energy, with none 'spent' on expansion work, which is why U rises while V stays fixed."
        ]},
        { label: "(c)–(d)", ask: "Determine k graphically from the Experiment 2 data.", steps: [
          "Rearrange the governing equation into slope-intercept form: Q/Δt = (kA/L)·ΔT, where ΔT = T<sub>G</sub> − T<sub>L</sub> — so plotting Q/Δt (vertical) against ΔT (horizontal) gives a line through the origin with slope = kA/L.",
          "Compute ΔT for every data row (T<sub>G</sub> − T<sub>L</sub>): 0, 68, 117, 162, 205 K, and plot each against its corresponding Q/Δt value.",
          "Draw the best-fit line through the plotted points and read its slope — here it comes out to approximately 0.37 W/K.",
          "Solve for k using the given thickness (0.01 m) and area (0.06 m²): k = slope × L/A = (0.37)(0.01)/(0.06) ≈ 0.061 W/(m·K)."
        ]}
      ]
    },
    {
      id: "frq-9-2",
      source: "2025 AP Exam, Free-Response Question 2",
      title: "Gas Cylinder with a Loaded Piston",
      prompt: "A monatomic ideal gas is sealed by a movable piston (mass M, area A) in a container held in a water bath at constant temperature T0. The piston is free to move with negligible friction. The gas occupies volume V0; the air above the piston has pressure P<sub>atm</sub>. (a) Draw and label the forces on the piston. (b) Derive an expression for the gas's internal energy in terms of M, A, V0, P<sub>atm</sub>. (c) A block of mass M is placed on the piston at t0 and slowly lowered; the piston comes to rest at tf. Sketch the P-V process with a direction arrow. (d) With the block still on the piston, the water bath's temperature is changed to Tnew, and the gas returns to volume V0 at the new equilibrium. Indicate whether Tnew is greater than, less than, or equal to T0, and justify.",
      parts: [
        { label: "(a)", ask: "Draw and label the forces on the piston.", steps: [
          "Identify all forces acting on the piston: gravity (Mg, downward), the force from atmospheric pressure pushing down from above (P<sub>atm</sub>·A, downward), and the force from the gas pressure pushing up from below (P<sub>gas</sub>·A, upward).",
          "Since the piston is in equilibrium (at rest, free to move but not accelerating), draw these three as balanced arrows starting at the dot representing the piston."
        ]},
        { label: "(b)", ask: "Derive the gas's internal energy in terms of M, A, V0, P<sub>atm</sub>.", steps: [
          "Use force balance on the piston to find the gas pressure: since the piston doesn't accelerate, the upward gas force must equal the sum of the downward forces: P<sub>gas</sub>·A = P<sub>atm</sub>·A + Mg, so P<sub>gas</sub> = P<sub>atm</sub> + Mg/A.",
          "Recall internal energy for a monatomic ideal gas: U = (3/2)nRT, and since PV = nRT, this simplifies directly to U = (3/2)PV — no need to separately solve for n or T.",
          "Substitute the pressure found above and the given volume V0: U = (3/2)(P<sub>atm</sub> + Mg/A)(V0)."
        ]},
        { label: "(c)", ask: "Sketch the P-V process as the block is slowly lowered.", steps: [
          "Recognize the process type: since the block is lowered slowly and the container stays in the water bath (which holds temperature constant), this is a quasi-static isothermal compression.",
          "Identify start and end points: the process starts at (V0, P<sub>atm</sub>+Mg/A) and ends at a smaller volume with pressure P<sub>atm</sub>+2Mg/A, once the block's full weight has transferred onto the piston.",
          "Sketch the connecting curve: an isothermal process follows PV=constant, a downward-curving hyperbola-shaped path from the starting point to the ending point, arrow pointing toward decreasing V and increasing P."
        ]},
        { label: "(d)", ask: "Compare Tnew to T0.", steps: [
          "Write the ideal gas law at both the original state and this new state: P1V0 = nRT0 and P2V0 = nRTnew, where P1 = P<sub>atm</sub>+Mg/A (original) and P2 = P<sub>atm</sub>+2Mg/A (fully loaded with the block).",
          "Since V0 and n are identical in both equations, divide them to eliminate those variables: Tnew/T0 = P2/P1.",
          "Since P2 > P1 (more weight requires higher pressure to support), the ratio must be greater than 1, so Tnew > T0 — the bath must be heated further to re-expand the more heavily loaded piston back to the original volume."
        ]}
      ]
    },
    {
      id: "frq-9-3",
      source: "2026 AP Exam, Free-Response Question 1",
      title: "Heating a Gas with an Embedded Sphere",
      prompt: "A sample of n moles of monatomic ideal gas is in a large, sealed, thermally conducting, fixed-volume container along with a small sphere of mass mS, initially in thermal equilibrium with the gas. The gas starts in State X (pressure P, volume V). It's heated to State Y (pressure 3P), and the sphere returns to equilibrium with the gas. Total energy transferred to the sphere during heating is QS. Part A: (i) Sketch the Maxwell-Boltzmann speed distribution for State Y, given State X's distribution. (ii) Derive ΔT for the gas in terms of n, P, V. (iii) Derive the sphere's specific heat cS in terms of n, mS, P, V, QS. Part B: The same sphere is submerged in a liquid (mass mL, specific heat cL) in an insulated container, with mS<mL and cS<cL. The sphere starts hotter than the liquid; they reach thermal equilibrium. Indicate whether |ΔTS| is greater than, less than, or equal to |ΔTL|, with conceptual justification beyond algebra.",
      parts: [
        { label: "Part A(i)", ask: "Sketch the Maxwell-Boltzmann distribution for State Y.", steps: [
          "Determine what changed physically: since the container is rigid and sealed (fixed V and n), tripling the pressure means — via PV=NkT — the temperature has also tripled.",
          "Translate that into distribution shape: since average kinetic energy (and therefore average speed) increases with tripled temperature, the curve's peak shifts to a higher speed.",
          "Preserve total particle count: since N hasn't changed, the area under the new curve must equal the original area, so the curve becomes shorter and wider (spread over more speeds) while its peak shifts right."
        ]},
        { label: "Part A(ii)", ask: "Derive ΔT for the gas.", steps: [
          "Identify the constant: the container is rigid and sealed, so volume V and particle count n never change — only P and T vary.",
          "Apply the ideal gas law at constant V and n: this means P/T is constant, so P/T<sub>X</sub> = 3P/T<sub>Y</sub>.",
          "Solve for the relationship between the temperatures: T<sub>Y</sub> = 3T<sub>X</sub>.",
          "Express T<sub>X</sub> using the ideal gas law at the initial state: T<sub>X</sub> = PV/(nR).",
          "Combine to find ΔT: ΔT = T<sub>Y</sub> − T<sub>X</sub> = 3T<sub>X</sub> − T<sub>X</sub> = 2T<sub>X</sub> = 2PV/(nR)."
        ]},
        { label: "Part A(iii)", ask: "Derive the sphere's specific heat cS.", steps: [
          "Recognize that the sphere's temperature change equals the gas's temperature change, since the sphere stays in thermal equilibrium with the gas at both the start and end states.",
          "Apply the specific heat relationship for the sphere: Q<sub>S</sub> = m<sub>S</sub>·c<sub>S</sub>·ΔT, where Q<sub>S</sub> is given.",
          "Solve algebraically for c<sub>S</sub> using the ΔT found in part (ii): c<sub>S</sub> = Q<sub>S</sub>/(m<sub>S</sub>·ΔT) = Q<sub>S</sub>/[m<sub>S</sub> · 2PV/(nR)] = (Q<sub>S</sub>·nR)/(2m<sub>S</sub>·PV)."
        ]},
        { label: "Part B", ask: "Compare |ΔTS| to |ΔTL|.", steps: [
          "Set up the energy conservation statement for the insulated sphere-and-liquid system: heat lost by the (hotter) sphere equals heat gained by the (cooler) liquid, in magnitude: m<sub>S</sub>·c<sub>S</sub>·|ΔT<sub>S</sub>| = m<sub>L</sub>·c<sub>L</sub>·|ΔT<sub>L</sub>|.",
          "Compare the mc products on each side: since m<sub>S</sub><m<sub>L</sub> AND c<sub>S</sub><c<sub>L</sub>, the product m<sub>S</sub>·c<sub>S</sub> is considerably smaller than m<sub>L</sub>·c<sub>L</sub>.",
          "Use that comparison to determine which ΔT must be larger: since the two sides must balance, the sphere's temperature change |ΔT<sub>S</sub>| must be the LARGER of the two to make up the difference — so |ΔT<sub>S</sub>| > |ΔT<sub>L</sub>|.",
          "State the conceptual reason in words: the liquid's greater mass and greater specific heat both mean it resists changing temperature more strongly, so for the same energy exchanged, the liquid barely shifts while the sphere swings much more."
        ]}
      ]
    }
,{
      id: "frq-9-4",
      source: "Original — Experimental Design",
      title: "Determining Specific Heat by Calorimetry",
      prompt: "A student has an unknown metal sample, a calorimeter (negligible heat capacity), water, a thermometer, and a balance. (a) Describe a procedure to determine the metal's specific heat. (b) Describe how the data should be analyzed. (c) In a trial, 150 g of the metal at 95°C is dropped into 200 g of water at 22°C inside the calorimeter; the mixture reaches equilibrium at 27°C. Find the metal's specific heat (c<sub>water</sub> = 4180 J/(kg·°C)).",
      parts: [
        { label: "(a)", ask: "Describe the experimental procedure.", steps: [
          "Measure the metal sample's mass using the balance, then heat it to a known, elevated starting temperature (e.g., boiling water bath).",
          "Measure a known mass of water at a known, lower starting temperature, and place it in the insulated calorimeter.",
          "Quickly transfer the heated metal into the water, seal the calorimeter, and monitor the thermometer until the system reaches a stable equilibrium temperature."
        ]},
        { label: "(b)", ask: "Describe how the data is analyzed.", steps: [
          "Apply conservation of energy for the insulated system: heat lost by the metal equals heat gained by the water, m<sub>metal</sub>·c<sub>metal</sub>·|ΔT<sub>metal</sub>| = m<sub>water</sub>·c<sub>water</sub>·|ΔT<sub>water</sub>|.",
          "Since every quantity except c<sub>metal</sub> is directly measured (masses via balance, temperatures via thermometer), solve algebraically for the one unknown, c<sub>metal</sub>."
        ]},
        { label: "(c)", ask: "Calculate the metal's specific heat from the given trial.", steps: [
          "Set up the energy balance: (0.150 kg)(c)(95−27) = (0.200 kg)(4180)(27−22).",
          "Simplify both sides: (0.150)(68)c = (0.200)(4180)(5), giving 10.2c = 4180.",
          "Solve: c = 4180/10.2 ≈ 410 J/(kg·°C)."
        ]}
      ]
    },
    {
      id: "frq-9-5",
      source: "Original — Mathematical Routines",
      title: "A Rectangular P-V Cycle",
      prompt: "A monatomic ideal gas undergoes a cycle: A(P0, V0) → B(3P0, V0) at constant volume; B → C(3P0, 3V0) at constant pressure; C → D(P0, 3V0) at constant volume; D → A(P0, V0) at constant pressure, returning to the start. (a) Find the total work done ON the gas over the complete cycle. (b) Find the net heat transferred to or from the gas over the complete cycle.",
      parts: [
        { label: "(a)", ask: "Find the total work done on the gas over the cycle.", steps: [
          "Identify each leg: A→B and C→D are isochoric (constant volume), contributing zero work each, since W=−PΔV requires a volume change.",
          "Compute B→C (isobaric expansion at 3P0, volume V0→3V0): W<sub>on</sub> = −P·ΔV = −(3P0)(2V0) = −6P0V0.",
          "Compute D→A (isobaric compression at P0, volume 3V0→V0): W<sub>on</sub> = −P·ΔV = −(P0)(−2V0) = +2P0V0.",
          "Sum all four legs: W<sub>total</sub>,on = 0 + (−6P0V0) + 0 + (2P0V0) = −4P0V0 — the gas does a net +4P0V0 of work ON its surroundings over the full cycle."
        ]},
        { label: "(b)", ask: "Find the net heat transferred over the cycle.", steps: [
          "Recall that internal energy is a state function: since the cycle returns the gas to its exact starting state, ΔU<sub>cycle</sub>=0, regardless of the path.",
          "Apply the first law over the full cycle: ΔU=Q+W<sub>on</sub>, so with ΔU=0: Q<sub>net</sub> = −W<sub>on</sub>,total = −(−4P0V0) = +4P0V0.",
          "Interpret: the gas absorbs a net 4P0V0 of heat over the cycle, exactly matching the net work it does on its surroundings — consistent with zero net change in internal energy."
        ]}
      ]
    },
    {
      id: "frq-9-6",
      source: "Original — Qualitative/Quantitative Translation",
      title: "Entropy and the Direction of Heat Flow",
      prompt: "Two identical blocks, one at 80°C and one at 20°C, are placed in thermal contact inside an insulated enclosure. (a) Describe what happens to each block's temperature over time, and justify using entropy reasoning (not just 'heat flows hot to cold'). (b) A proposed device would make heat flow spontaneously from the cooler block to the hotter block, with no external work, making the hot block hotter and the cold block colder over time. Evaluate whether this is possible, explaining in terms of entropy.",
      parts: [
        { label: "(a)", ask: "Describe and justify the temperature change over time.", steps: [
          "Recall that heat spontaneously flows from higher to lower temperature because this direction increases the total entropy of the two-block system.",
          "Describe the outcome: the 80°C block cools while the 20°C block warms, both approaching a common intermediate equilibrium temperature.",
          "Justify using entropy explicitly: since ΔS=Q/T, a given quantity of heat leaving the hot block causes a smaller entropy decrease than the same heat causes entering the cold block (dividing by the smaller T gives a larger entropy change) — so this direction of flow produces a net entropy INCREASE, consistent with the second law."
        ]},
        { label: "(b)", ask: "Evaluate whether the proposed device is possible.", steps: [
          "Recognize what the device requires: heat flowing spontaneously from cold to hot, the opposite of the natural direction, with no external work.",
          "Apply the entropy argument in reverse: moving heat from a cold reservoir to a hot one spontaneously would DECREASE total entropy (removing energy from the low-T block loses more entropy than the high-T block gains).",
          "Conclude the device is IMPOSSIBLE as described: a spontaneous entropy decrease in an isolated system violates the second law — this could only happen with external work input, like a refrigerator, never on its own."
        ]}
      ]
    },
    {
      id: "frq-9-7",
      source: "Original — Mathematical Routines",
      title: "Multi-State Gas Process",
      prompt: "A gas sample starts at State 1 (2.0 atm, 8.0 L, 300 K). It is first compressed at constant temperature to 4.0 L (State 2), then heated at constant volume until the pressure reaches 6.0 atm (State 3). (a) Find the pressure at State 2. (b) Find the temperature at State 3. (c) Find the number of moles of gas present (R=0.0821 L·atm/(mol·K)).",
      parts: [
        { label: "(a)", ask: "Find P2.", steps: [
          "Identify the process: compression at constant temperature is isothermal, so Boyle's Law applies: P1V1=P2V2.",
          "Solve: (2.0)(8.0)=P2(4.0), giving P2=4.0 atm."
        ]},
        { label: "(b)", ask: "Find T3.", steps: [
          "Identify the second process: heating at constant volume is isochoric, so P/T is constant: P2/T2=P3/T3, using T2=T1=300K (isothermal step didn't change T).",
          "Solve: 4.0/300=6.0/T3, giving T3=450K."
        ]},
        { label: "(c)", ask: "Find the number of moles.", steps: [
          "Use the ideal gas law at the original state (the only state with all three of P, V, T known): n=P1V1/(RT1).",
          "Substitute: n=(2.0)(8.0)/[(0.0821)(300)]=16.0/24.63≈0.65 mol."
        ]}
      ]
    },
  ],
  10: [
    {
      id: "frq-10-1",
      source: "2023 AP Exam, Free-Response Question 4",
      title: "Three Charges on a Triangle",
      prompt: "Charges A and B (each +Q) sit at two vertices of an equilateral triangle of side d. Point P is equidistant from all three vertices (the centroid). Two students discuss what happens if a third charge is placed at the empty third vertex. Student Y claims: placing +2Q there makes the net field zero at P. Student Z claims: placing −Q there makes the potential zero at P. (a) Evaluate the accuracy of each claim in a coherent paragraph. (b) Particles A and B are held in place; a third charge is brought from infinity to the empty vertex and held. A bar chart shows the initial potential energy Ui (A-B pair alone). For Scenario 1 (+Q added) and Scenario 2 (−Q added), determine the work W and final potential energy Uf for each scenario.",
      parts: [
        { label: "(a)", ask: "Evaluate both students' claims.", steps: [
          "Recall the symmetry fact: three EQUAL charges at the vertices of an equilateral triangle produce exactly zero net field at the centroid, since the three contributions are equal in magnitude and point 120° apart, summing to zero.",
          "Apply this to Student Y: since A and B are +Q, only an additional +Q (matching, not doubled) at the third vertex completes the symmetric zero-field configuration — placing +2Q instead breaks that symmetry and leaves a nonzero net field, so Y is INCORRECT.",
          "Evaluate Student Z using potential instead of field: potential is a scalar that adds directly without needing symmetry — the total potential at P is V=k(Q+Q+q<sub>C</sub>)/r, and setting this to zero requires q<sub>C</sub>=−2Q, not −Q, so Z is also INCORRECT (right sign, wrong magnitude)."
        ]},
        { label: "(b) Scenario 1 (+Q)", ask: "Find W1 and Uf1.", steps: [
          "Recognize that Ui1 represents only the original A–B pair's potential energy (the third charge is still infinitely far away): Ui1 = kQ²/d.",
          "Find W1 by calculating the work needed to push the incoming +Q charge in against repulsion from BOTH A and B (each at distance d): W1 = kQ²/d + kQ²/d = 2kQ²/d — a positive bar, twice Ui1's height.",
          "Find Uf1 by summing all three pairwise interactions in the final system (A–B, A–C, B–C, each kQ²/d since all sides equal d): Uf1 = 3kQ²/d — check that Ui1+W1=Uf1 as confirmation."
        ]},
        { label: "(b) Scenario 2 (−Q)", ask: "Find W2 and Uf2.", steps: [
          "Recognize Ui2 is identical to Ui1 — still just the original A–B pair's energy before the new charge (now −Q) arrives: Ui2=kQ²/d, same height as before.",
          "Find W2: since the incoming charge is now negative, it's ATTRACTED to A and B rather than repelled, so the external agent does NEGATIVE work bringing it in: W2 = −2kQ²/d, a bar below the axis.",
          "Find Uf2 by summing the three pairwise energies (two now attractive, A–C and B–C; one still repulsive, A–B): Uf2 = kQ²/d − kQ²/d − kQ²/d = −kQ²/d — confirm Ui2+W2=Uf2 as a check."
        ]}
      ]
    },
    {
      id: "frq-10-2",
      source: "2026 AP Exam, Free-Response Question 4",
      title: "A Sphere Moving Through Equipotential Lines",
      prompt: "Equipotential lines are shown for a region, with values (left to right) −3V0, −2V0, −V0, 0, V0, 2V0. A small sphere with charge +Q starts at Point S (sitting on the −2V0 line) with speed vS and kinetic energy KS, and moves to Point T (sitting on the +V0 line), with the electric force as the only force acting. Part A: Indicate whether vT is greater than, less than, or equal to vS, with conceptual justification. Part B: Derive KT in terms of V0, Q, KS. Part C: A new sphere of the same mass but charge −Q starts at S with the same speed vS. Compare its final kinetic energy Knew to KT.",
      parts: [
        { label: "Part A", ask: "Compare vT to vS.", steps: [
          "Recall the connection between field and potential: electric field always points from high potential toward low potential, and a POSITIVE charge naturally accelerates toward LOWER potential — the 'downhill' direction, gaining kinetic energy as it goes.",
          "Read the diagram: moving from S (−2V0) to T (+V0) means moving toward HIGHER potential — the opposite of a positive charge's natural downhill direction.",
          "Conclude: since the sphere moves toward higher potential, the field does negative work on it, so kinetic energy — and therefore speed — decreases: vT < vS."
        ]},
        { label: "Part B", ask: "Derive KT in terms of V0, Q, KS.", steps: [
          "Read the potential values directly from the diagram: V<sub>S</sub> = −2V0 and V<sub>T</sub> = +V0, giving ΔV = V<sub>T</sub>−V<sub>S</sub> = V0−(−2V0) = 3V0.",
          "Apply the work-energy theorem in terms of potential difference: W<sub>field</sub> = −qΔV = −Q(3V0) = −3QV0 — this equals ΔK directly, since the electric force is the only force acting.",
          "Solve for the final kinetic energy: K<sub>T</sub> = K<sub>S</sub> + ΔK = K<sub>S</sub> − 3QV0."
        ]},
        { label: "Part C", ask: "Compare Knew to KT for the negative sphere.", steps: [
          "Redo the same work-energy calculation with charge −Q instead of +Q, moving through the same ΔV=3V0: W<sub>field</sub> = −qΔV = −(−Q)(3V0) = +3QV0 — positive this time, since a negative charge is pushed TOWARD higher potential rather than resisted.",
          "Find the new kinetic energy: K<sub>new</sub> = K<sub>S</sub> + 3QV0 — an INCREASE, the opposite trend from the positive sphere in Part B.",
          "Compare directly to K<sub>T</sub> (which was K<sub>S</sub> − 3QV0): K<sub>new</sub> is unambiguously greater than K<sub>T</sub>, a full 6QV0 apart, without needing any specific numbers."
        ]}
      ]
    }
,{
      id: "frq-10-3",
      source: "Original — Mathematical Routines",
      title: "Finding a Zero-Field Point Beyond Two Charges",
      prompt: "A charge of +4.0 μC sits at x=0 and a charge of −2.0 μC sits at x=6.0 cm on the x-axis. Find the location (other than infinity) where the net electric field along the x-axis is exactly zero.",
      parts: [
        { label: "Full Solution", ask: "Find the zero-field point.", steps: [
          "Recognize that since the charges have opposite signs, their fields between them both point in the same direction (from + toward −) and cannot cancel — a zero-field point can only exist OUTSIDE the pair, on the side of the WEAKER charge, since distance falloff lets the weaker charge's closer field match the stronger charge's farther field.",
          "Since |−2μC| < |4μC|, the zero point lies beyond the −2μC charge, farther from the +4μC charge.",
          "Set the field magnitudes equal, letting x be the distance beyond the −2μC charge: k(4)/(6+x)² = k(2)/x², which simplifies to 2x² = (6+x)².",
          "Solve algebraically: taking the positive square root, x√2 = 6+x, so x(√2−1)=6, giving x = 6/(√2−1) = 6(√2+1) ≈ 14.5 cm beyond the −2μC charge (about 20.5 cm from the origin)."
        ]}
      ]
    },
    {
      id: "frq-10-4",
      source: "Original — Mathematical Routines",
      title: "Series-Parallel Capacitor Network",
      prompt: "Three capacitors, C1=2.0 μF, C2=4.0 μF, and C3=6.0 μF, are arranged so C2 and C3 are in parallel with each other, and that combination is in series with C1, all connected to a 12 V battery. (a) Find the equivalent capacitance. (b) Find the total charge stored. (c) Find the voltage across C1.",
      parts: [
        { label: "(a)", ask: "Find the equivalent capacitance.", steps: [
          "Combine the parallel pair first: C<sub>parallel</sub>=C2+C3=4.0+6.0=10.0 μF (parallel capacitances add directly).",
          "Combine this with C1 in series: 1/C<sub>eq</sub>=1/2.0+1/10.0=6/10, giving C<sub>eq</sub>=10/6≈1.67 μF."
        ]},
        { label: "(b)", ask: "Find the total charge.", steps: [
          "Apply Q=C<sub>eq</sub>×V using the equivalent capacitance found above: Q=(10/6 μF)(12V)=20 μC."
        ]},
        { label: "(c)", ask: "Find the voltage across C1.", steps: [
          "Recognize that capacitors in series all store the SAME charge — so C1 also holds 20 μC.",
          "Solve for its voltage: V<sub>C1</sub>=Q/C1=20μC/2.0μF=10V."
        ]}
      ]
    },
    {
      id: "frq-10-5",
      source: "Original — Qualitative/Quantitative Translation",
      title: "Field and Potential of a Charged Conducting Sphere",
      prompt: "A hollow charged conducting sphere (net charge +Q) sits in isolation. (a) Describe the electric field inside the conductor's metal material, and explain why, referencing properties of conductors in electrostatic equilibrium. (b) Describe the field just outside the sphere's surface, and compare the far-field behavior of E and V to that of a point charge. (c) Is the potential inside the empty hollow space equal to, or different from, the potential at the sphere's surface? Justify.",
      parts: [
        { label: "(a)", ask: "Describe and explain the field inside the conducting material.", steps: [
          "Recall the defining property of conductors in electrostatic equilibrium: free charges rearrange until there's no net force on them, requiring the field inside the material to be exactly zero.",
          "Explain why: if a field existed inside the metal, it would keep pushing charges around until they redistributed enough to cancel it — equilibrium requires E=0 throughout the conductor's material."
        ]},
        { label: "(b)", ask: "Describe the field just outside and the far-field behavior.", steps: [
          "Describe the field just outside: since all excess charge resides on the outer surface, the field just outside behaves as if all of Q were concentrated at the center, pointing radially outward.",
          "Describe the far-field behavior: far from the sphere, both E (∝1/r²) and V (∝1/r) behave exactly like a point charge Q at the center — the sphere's actual size becomes irrelevant at large distances."
        ]},
        { label: "(c)", ask: "Compare the potential inside the hollow space to the surface potential.", steps: [
          "Recall that E=0 throughout the interior hollow space too, since there's no enclosed charge and no field lines can originate in empty space.",
          "Since E=0 throughout that region, potential cannot change anywhere inside it (E is the rate of change of V).",
          "Conclude the potential inside the hollow space EQUALS the potential at the surface — the entire interior sits at one uniform potential, matching the surface value."
        ]}
      ]
    },
    {
      id: "frq-10-6",
      source: "Original — Mathematical Routines",
      title: "Potential Energy of a Three-Charge System",
      prompt: "Three charges are arranged at the corners of a right triangle: +3.0 μC at (0,0), +5.0 μC at (4.0 cm, 0), and −2.0 μC at (0, 3.0 cm) — a 3-4-5 triangle with the hypotenuse being 5.0 cm. Find the total electric potential energy of the system.",
      parts: [
        { label: "Full Solution", ask: "Find the total potential energy.", steps: [
          "Identify all three pairwise distances from the coordinates: the +3μC/+5μC pair is 4.0cm apart, the +3μC/−2μC pair is 3.0cm apart, and the +5μC/−2μC pair is 5.0cm apart.",
          "Compute each pairwise potential energy using U=kq1q2/r: U(3,5)=+3.375J (both positive, repulsive); U(3,−2)=−1.8J (attractive); U(5,−2)=−1.8J (attractive).",
          "Sum all three pairwise energies for the total: U<sub>total</sub>=3.375−1.8−1.8=−0.225J — the two attractive pairs pull the total negative overall, despite the large positive repulsive term."
        ]}
      ]
    },
    {
      id: "frq-10-7",
      source: "Original — Experimental Design",
      title: "Verifying the Parallel-Plate Capacitance Formula",
      prompt: "A student has two flat metal plates, a ruler, a variable DC power supply, a voltmeter, and a device to measure charge. Design an experiment to verify C=ε0A/d for an air-filled parallel-plate capacitor. (a) Describe the procedure. (b) Describe how to analyze the data graphically to test the relationship.",
      parts: [
        { label: "(a)", ask: "Describe the procedure.", steps: [
          "Set the plates at a fixed, measured separation d and fixed overlapping area A (both measured with the ruler).",
          "Apply several different known voltages using the power supply, and for each, measure the resulting charge Q on the plates.",
          "Repeat using a different known separation d (holding A fixed) to test the 1/d dependence, varying the geometric factors independently."
        ]},
        { label: "(b)", ask: "Describe the graphical analysis.", steps: [
          "For a fixed geometry, plot Q (vertical) against V (horizontal) for the voltage trials — since Q=CV, this should be a line through the origin with slope equal to C.",
          "Repeat this slope-finding process at several different values of d, then plot the resulting C values (vertical) against 1/d (horizontal) — this should also be linear through the origin, with slope=ε0A.",
          "Confirm the relationship by checking that this second slope, divided by the known area A, gives a value close to the accepted constant ε0."
        ]}
      ]
    },
  ],
  11: [
    {
      id: "frq-11-1",
      source: "2023 AP Exam, Free-Response Question 2",
      title: "Identifying an Unknown Component and Finding EMF",
      prompt: "Students are given an unknown circuit component connected in series with a known 500 Ω resistor. (a) Describe an experimental procedure to determine whether the component is a resistor or an uncharged capacitor, and describe expected results in terms of potential difference and charge. (b) In a separate experiment, students find the EMF ε of a non-ideal battery (internal resistance r=30 Ω) connected to a variable resistor, measuring current I for various Rvar: (0.087A,200Ω), (0.060A,300Ω), (0.042A,450Ω), (0.027A,700Ω), (0.016A,1200Ω). Write the governing equation, indicate what to graph for a straight line, and determine ε from the graph.",
      parts: [
        { label: "(a)", ask: "Describe the procedure and expected results.", steps: [
          "Set up the circuit with the resistor and unknown component in series with the battery and switch, with a voltmeter ready to read across the unknown component.",
          "Close the switch and immediately observe the voltmeter reading across the unknown component over time.",
          "Distinguish based on behavior: a resistor shows a constant, steady voltage as soon as the switch closes; an uncharged capacitor instead shows a voltage that STARTS AT ZERO and gradually RISES over time as it charges.",
          "Explain why, in terms of potential difference and charge: an uncharged capacitor has zero stored charge initially, so V=Q/C=0 at that first instant (behaving like a wire); as charge accumulates, V rises toward the source voltage while current — and the resistor's share of voltage — falls."
        ]},
        { label: "(b)", ask: "Find ε graphically from the data.", steps: [
          "Apply Kirchhoff's Loop rule to the single-loop circuit: ε = I(r + Rvar), since the same current flows through both the internal resistance and Rvar.",
          "Rearrange into a form that graphs as a straight line: dividing both sides by εI gives 1/I = (1/ε)Rvar + r/ε — linear in Rvar, so plotting 1/I (vertical) against Rvar (horizontal) gives slope = 1/ε and y-intercept = r/ε.",
          "Compute 1/I for each data pair and estimate the best-fit slope — using the full spread of the data, the slope comes out to approximately 0.051 (in units of A⁻¹/Ω).",
          "Solve for the EMF from the slope: ε = 1/slope ≈ 1/0.051 ≈ 20 V."
        ]}
      ]
    },
    {
      id: "frq-11-2",
      source: "2024 AP Exam, Free-Response Question 3",
      title: "Currents and Power in a Mixed Circuit",
      prompt: "A circuit has an ideal battery of EMF ε and four identical resistors, each resistance R: R1 is in series with a parallel combination of R2 alone and (R3 in series with R4). (a) Derive expressions for I1 (through R1) and I3 (through R3), in terms of ε and R. (b) Draw a bar chart of |ΔV| across each resistor relative to ε. A student claims total power dissipated is P=3ε²/(5R) — state whether this is correct, justifying using your derivations. (c) The ideal battery is replaced with a non-ideal one (internal resistance r). Compare Pnew (power in R1) to Poriginal.",
      parts: [
        { label: "(a)", ask: "Derive I1 and I3.", steps: [
          "Simplify the circuit: R3 and R4 in series combine to 2R; this sits in parallel with R2, giving 1/Rp = 1/R + 1/(2R) = 3/(2R), so Rp = 2R/3.",
          "Add the series resistor R1 to find total resistance: R<sub>total</sub> = R1 + Rp = R + 2R/3 = 5R/3.",
          "Apply Ohm's Law to the whole loop to find I1 (the current through R1, which is the total circuit current): I1 = ε/R<sub>total</sub> = 3ε/(5R).",
          "Find the voltage across the parallel section: V<sub>parallel</sub> = I1×Rp = [3ε/(5R)]×[2R/3] = 2ε/5.",
          "Apply Ohm's Law to the R3+R4 branch specifically: I3 = V<sub>parallel</sub>/(R3+R4) = (2ε/5)/(2R) = ε/(5R)."
        ]},
        { label: "(b)", ask: "Draw the bar chart and evaluate the power claim.", steps: [
          "Compute each resistor's voltage: V<sub>R1</sub> = I1·R = 3ε/5; V<sub>R3</sub> = V<sub>R4</sub> = I3·R = ε/5 each; V<sub>R2</sub> = 2ε/5 (matches the parallel section's shared voltage).",
          "Verify the bars sum correctly: V<sub>R1</sub>+V<sub>R2</sub> = ε (matches battery EMF, since R1 is in series with the whole parallel group); V<sub>R3</sub>+V<sub>R4</sub> = 2ε/5 = V<sub>R2</sub> (parallel branches share voltage).",
          "Evaluate the power claim by computing total power directly: P = I1·ε = [3ε/(5R)]·ε = 3ε²/(5R) — matches the student's claim exactly.",
          "Double-check using ΣI²R across every resistor individually (9ε²/25R for R1, 6ε²/25R combined for the parallel section) — confirms the same total.",
          "Conclude the student's claim is actually CORRECT — not every 'evaluate this claim' question hides an error."
        ]},
        { label: "(c)", ask: "Compare Pnew to Poriginal after adding internal resistance.", steps: [
          "Recognize that adding internal resistance r increases the total resistance of the loop: R<sub>total</sub>,new = 5R/3 + r, larger than the original 5R/3.",
          "Since a larger total resistance at the same EMF produces smaller total current, I1 decreases compared to the original ideal-battery case.",
          "Since P<sub>R1</sub> = I1²R depends on current squared, a smaller I1 directly means smaller power dissipated: P<sub>new</sub> < P<sub>original</sub>."
        ]}
      ]
    },
    {
      id: "frq-11-3",
      source: "2025 AP Exam, Free-Response Question 3",
      title: "Predicting an RC Time Constant",
      prompt: "A student has a resistor of unknown resistance and an air-filled parallel-plate capacitor of unknown capacitance (square plates, plate separation small compared to plate size), plus a battery of known EMF, a switch, an ammeter, and a ruler. (a) Describe a procedure to predict the expected time constant τ of the series RC circuit. (b) Describe how the collected data would be analyzed to determine τ. (c) In a second experiment, a new capacitor's charge q is measured for several applied voltages |ΔV|: (3.0V,2.4×10⁻¹⁰C), (5.0V,4.2), (7.2V,5.6), (8.0V,6.6), (10.0V,8.0). Determine what to graph to find C, and calculate C from the best-fit line.",
      parts: [
        { label: "(a)", ask: "Describe a procedure to predict τ.", steps: [
          "To find R: connect the resistor alone in series with the battery and ammeter, close the switch, and record the steady current I.",
          "To find the measurements needed for C: use the ruler to measure the side length of the square capacitor plates (giving area A = side²) and the plate separation d.",
          "Repeat each measurement across multiple trials and average, to reduce random uncertainty in both the current reading and the ruler measurements."
        ]},
        { label: "(b)", ask: "Describe how the data is analyzed to find τ.", steps: [
          "Calculate resistance from the resistor-only trial using Ohm's Law: R = ε/I.",
          "Calculate capacitance from the measured geometry using the parallel-plate formula, with κ=1 for air: C = ε0·A/d = ε0·(side length)²/d.",
          "Multiply the two independently-determined quantities to predict the expected time constant: τ = RC — a value built from separately measuring each component, not from timing the circuit's actual charging behavior."
        ]},
        { label: "(c)", ask: "Determine C graphically.", steps: [
          "Recall the defining relationship for capacitance: q=CΔV — plotting q (vertical) against ΔV (horizontal) gives a straight line through the origin with slope equal to C directly.",
          "Using the given data, compute the slope — the data is quite linear, giving a slope of about 0.80×10⁻¹⁰ C/V.",
          "Read the capacitance directly from that slope: C ≈ 8.0×10⁻¹¹ F (80 pF)."
        ]}
      ]
    }
,{
      id: "frq-11-4",
      source: "Original — Mathematical Routines",
      title: "Two-Loop Circuit with Two Batteries",
      prompt: "A circuit has two batteries, ε1=9V and ε2=3V, each in series with an identical resistor R=3Ω, both branches meeting at a junction and connected through a shared resistor R=3Ω to complete the circuit. (a) Write the loop and junction equations needed to solve the circuit. (b) Solve for all three branch currents. (c) Interpret the sign of the current in the ε2 branch.",
      parts: [
        { label: "(a)", ask: "Write the governing equations.", steps: [
          "Apply the junction rule at the node where all three branches meet: I1+I2=I3 (assuming both battery currents flow into the junction and I3 flows out through the shared resistor).",
          "Apply the loop rule to the loop containing ε1: 9=3I1+3I3.",
          "Apply the loop rule to the loop containing ε2: 3=3I2+3I3."
        ]},
        { label: "(b)", ask: "Solve for I1, I2, I3.", steps: [
          "Simplify each loop equation: 3=I1+I3 and 1=I2+I3.",
          "Substitute both into the junction equation: (3−I3)+(1−I3)=I3, giving 4−2I3=I3, so I3=4/3 A.",
          "Back-substitute: I1=3−4/3=5/3 A; I2=1−4/3=−1/3 A."
        ]},
        { label: "(c)", ask: "Interpret the sign of I2.", steps: [
          "Note that a negative I2 doesn't mean an error — it means the actual current flows OPPOSITE to the direction originally assumed.",
          "Interpret physically: the stronger ε1 branch is actually driving current backward through the weaker ε2 branch, similar to one battery 'charging' another, since ε1 dominates the shared loop."
        ]}
      ]
    },
    {
      id: "frq-11-5",
      source: "Original — Qualitative/Quantitative Translation",
      title: "RC Circuit Timing Behavior",
      prompt: "A series RC circuit (resistor R, capacitor C, battery ε, switch) is analyzed at three moments: right after the switch closes, at t=RC (one time constant later), and a very long time later. (a) Compare the current at t=0 to the current a long time later, justifying. (b) At t=RC, is the capacitor's voltage closer to 0, to ε, or at roughly 63% of the way to ε? Explain what one time constant physically represents. (c) If R is increased (C, ε unchanged), does the circuit take longer or shorter to approach full charge? Explain.",
      parts: [
        { label: "(a)", ask: "Compare initial and long-term current.", steps: [
          "At t=0, the uncharged capacitor briefly behaves like a plain wire, so current is at its maximum, I<sub>max</sub>=ε/R.",
          "A long time later, the capacitor is essentially fully charged and blocks further current, so current approaches zero.",
          "Conclude: current is maximum immediately after closing and decreases toward zero over time."
        ]},
        { label: "(b)", ask: "Describe the capacitor's voltage at t=RC.", steps: [
          "Recall that τ=RC is defined as the time at which the capacitor has charged to about 63% of its final voltage — not the halfway point, and not full charge.",
          "Explain physically: this is simply the characteristic timescale of the exponential charging process, a standard reference point describing how quickly the circuit responds.",
          "Answer directly: at t=RC, the capacitor's voltage is at about 63% of the way to ε — closer to ε than to 0, but not yet nearly fully charged."
        ]},
        { label: "(c)", ask: "Explain the effect of increasing R.", steps: [
          "Recall that the time constant itself is τ=RC — directly proportional to resistance.",
          "Increasing R directly increases τ, meaning the characteristic charging timescale grows.",
          "Conclude: with larger R, the circuit takes LONGER to approach full charge — a larger resistance limits current at every stage, slowing the whole process, consistent with a smaller initial current I=ε/R too."
        ]}
      ]
    },
    {
      id: "frq-11-6",
      source: "Original — Qualitative/Quantitative Translation",
      title: "Ranking Power in a Mixed Network",
      prompt: "A circuit has resistor R1 in series with a parallel combination of R2 and R3, where R2=2×R3, connected to an ideal battery. (a) Compare the current through R2 to the current through R3. (b) Compare the power dissipated in R2 to the power dissipated in R3. (c) If R1 is increased (R2, R3, battery unchanged), does the power dissipated in R3 increase, decrease, or stay the same?",
      parts: [
        { label: "(a)", ask: "Compare I2 to I3.", steps: [
          "Recall that resistors in parallel share the same voltage across them.",
          "Apply Ohm's Law to each branch with that shared voltage: since R2=2R3 (R2 is larger) and I=V/R, the branch with the SMALLER resistance (R3) carries the LARGER current.",
          "Find the exact factor: since R2 is twice R3, I3=2×I2."
        ]},
        { label: "(b)", ask: "Compare P2 to P3.", steps: [
          "Use P=I²R for each resistor with its own current: P2=I2²(2R3) and P3=(2I2)²R3=4I2²R3.",
          "Compare: P3/P2 = 4I2²R3/(2I2²R3) = 2 — R3 dissipates twice as much power as R2, since its higher current (squared) more than compensates for its lower resistance."
        ]},
        { label: "(c)", ask: "Explain the effect of increasing R1 on P3.", steps: [
          "Recognize that increasing R1 increases the total circuit resistance, decreasing the total current from the battery.",
          "Since more voltage now drops across the larger R1, the voltage across the parallel section decreases.",
          "With less voltage across the parallel section, both branch currents decrease, including I3 — so the power dissipated in R3 DECREASES."
        ]}
      ]
    },
    {
      id: "frq-11-7",
      source: "Original — Mathematical Routines",
      title: "A Five-Resistor Network",
      prompt: "Five identical resistors, each R, are arranged as follows: R1 and R2 in series form one branch; R3 alone forms a second branch; these two branches are in parallel with each other; that combination is in series with R4; and R5 is in parallel with the entire rest of the network (R1 through R4 combined). Find the total equivalent resistance in terms of R.",
      parts: [
        { label: "Full Solution", ask: "Find the total equivalent resistance.", steps: [
          "Combine R1 and R2 (in series) first: R1+R2=2R.",
          "Combine this with R3 (in parallel): 1/Rp=1/(2R)+1/R=3/(2R), so Rp=2R/3.",
          "Add R4 in series with this combination: Rp+R4=2R/3+R=5R/3.",
          "Combine this entire sub-network with R5 (in parallel): 1/R<sub>total</sub>=1/(5R/3)+1/R=3/(5R)+5/(5R)=8/(5R), giving R<sub>total</sub>=5R/8."
        ]}
      ]
    },
    {
      id: "frq-11-8",
      source: "Original — Mathematical Routines",
      title: "Capacitor Branch at Steady State",
      prompt: "A circuit has an 18V ideal battery in series with resistor R1=3Ω, which then splits into two parallel branches: one has resistor R2=6Ω, the other has a capacitor C=4μF in series with resistor R3=3Ω. At steady state, find: (a) the current through R1. (b) the voltage across the capacitor. (c) the charge stored on the capacitor.",
      parts: [
        { label: "(a)", ask: "Find the current through R1.", steps: [
          "Recognize that at steady state, the fully-charged capacitor blocks all current through its branch — so all current flows through the simpler R1-R2 path.",
          "Apply Ohm's Law to that series loop: I1=ε/(R1+R2)=18/(3+6)=2A."
        ]},
        { label: "(b)", ask: "Find the voltage across the capacitor.", steps: [
          "Since the R3-C branch carries zero current, R3 has zero voltage drop (V=IR=0).",
          "Since R2 sits in parallel with the entire R3-C branch, both share the same voltage: V<sub>parallel</sub>=I1×R2=2×6=12V.",
          "Since R3 contributes none of that voltage, the entire 12V appears across the capacitor: V<sub>C</sub>=12V."
        ]},
        { label: "(c)", ask: "Find the charge stored.", steps: [
          "Apply the capacitor definition directly: Q=C×V<sub>C</sub>=(4μF)(12V)=48μC."
        ]}
      ]
    },
  ]
,
12: [
    {
      id: "frq-12-1",
      source: "2024 AP Exam, Free-Response Question 4",
      title: "Two Particles Accelerated Into a Magnetic Field",
      prompt: "Particle 1 (mass M, charge −Q) and Particle 2 (mass M/2, charge +2Q) are each accelerated from rest in the −y direction through a potential difference of magnitude |ΔV| (polarity adjusted for each particle's sign), exiting with kinetic energies K1, K2. (a) Find K2/K1. They then enter a region of uniform field B0 (out of the page, +z), entering moving −y and exiting moving +y. (b) (i) Find Particle 2's speed in terms of M, K2. (ii) Derive the horizontal distance Δx between entry and exit points for Particle 2, in terms of M, Q, K2, B0. (c) Sketch both particles' paths in the region. (d) A uniform E field is added so Particle 1 travels straight through at constant speed. Determine E's direction.",
      parts: [
        { label: "(a)", ask: "Find the ratio K2/K1.", steps: [
          "Recognize both particles are accelerated through the SAME magnitude of potential difference |ΔV| — meaning the kinetic energy gained by each equals |charge|×|ΔV|.",
          "Compute each: K1 = |−Q|·|ΔV| = Q|ΔV|; K2 = |2Q|·|ΔV| = 2Q|ΔV|.",
          "Form the ratio: K2/K1 = 2Q|ΔV| / Q|ΔV| = 2 — the charge ratio alone determines this, since |ΔV| cancels out completely."
        ]},
        { label: "(b)", ask: "Find Particle 2's speed and Δx.", steps: [
          "Start from the kinetic energy definition using Particle 2's actual mass M/2: K2 = ½(M/2)v² = Mv²/4, so v = 2√(K2/M).",
          "Use the radius formula for circular motion, r=mv/(qB), plugging in mass M/2, charge magnitude 2Q, and the speed just found: r = (M/2)(2√(K2/M))/(2Q·B0) = √(M·K2)/(2Q·B0).",
          "Recognize that entering moving −y and exiting moving +y means the particle traced exactly a half-circle, so the horizontal displacement equals the full diameter: Δx = 2r = √(M·K2)/(Q·B0)."
        ]},
        { label: "(c)", ask: "Sketch both particles' paths.", steps: [
          "Find each particle's turning direction using the right-hand rule with B out of the page (+z) and both particles initially moving −y: the resulting v×B direction points in −x (before accounting for charge sign).",
          "Apply each charge's sign: Particle 1 is negative, so its force is opposite (+x) — it curves right. Particle 2 is positive, so its force follows −x directly — it curves left.",
          "Sketch each as a semicircular arc curving in its respective direction, both starting at the same point moving −y and ending moving +y."
        ]},
        { label: "(d)", ask: "Find the required E field direction.", steps: [
          "Set up the force-balance condition for straight-line motion: qE = −q(v×B), or E = −(v×B) — notice the charge q cancels out entirely, so this applies regardless of which particle's sign you consider.",
          "Use the already-found v×B direction for motion in −y through a field in +z: this equals −x.",
          "Take the negative of that: E = −(−x) = +x — the electric field must point in the +x direction to balance the magnetic force on Particle 1."
        ]}
      ]
    },
    {
      id: "frq-12-2",
      source: "2025 AP Exam, Free-Response Question 1",
      title: "Parallel Wires and a Moving Loop",
      prompt: "Wire 1 (along y=0, current I in +x) and Wire 2 (along y=+d, current I in +x) lie in the xy-plane; Point P is on Wire 1 at the origin. (A.i) Indicate the field direction from Wire 2 at P, and the force direction on Wire 1 from Wire 2. (A.ii) Wire 3 (current 2I, +x direction) is placed at y=y3 so the net force on Wire 1 from Wires 2 and 3 is zero. Derive y3 in terms of d. (B) Wire 3 is removed. A circular loop initially at rest below Wire 1 moves at constant speed in the −y direction (away from both wires). Determine whether the induced current is clockwise, counterclockwise, or zero, with justification.",
      parts: [
        { label: "(A.i)", ask: "Find the field and force directions.", steps: [
          "Apply the right-hand grip rule to Wire 2 (current +x): since P sits below Wire 2 (in −y from it), curling your thumb along +x makes your fingers point INTO the page at P — Wire 2's field at P points into the page.",
          "Apply the force rule to Wire 1 (current +x) sitting in that field: using F=IL×B, current in +x crossed with field in −z gives a force in +y — pointing toward Wire 2.",
          "Confirm this matches the general rule: parallel (same-direction) currents always attract, consistent with the +y (toward Wire 2) result."
        ]},
        { label: "(A.ii)", ask: "Derive y3 for zero net force on Wire 1.", steps: [
          "Recognize that canceling Wire 2's +y pull requires an equal −y pull — meaning Wire 3 must sit BELOW Wire 1 (negative y), so its attraction (same-direction currents attract) pulls Wire 1 downward instead.",
          "Write the force-per-length from each wire on Wire 1: F2/L = μ0I²/(2πd) from Wire 2; F3/L = μ0(I)(2I)/(2π|y3|) = μ0I²/(π|y3|) from Wire 3.",
          "Set these equal (for zero net force) and solve: 1/(2d) = 1/|y3|, giving |y3| = 2d, so y3 = −2d."
        ]},
        { label: "(B)", ask: "Determine the induced current's direction.", steps: [
          "Determine the field direction at the loop's location (below both wires): using the same right-hand-rule reasoning, both wires contribute field pointing INTO the page there.",
          "Track how that field changes as the loop moves farther away (−y, away from both wires): field strength falls off with distance, so the into-the-page flux through the loop is DECREASING.",
          "Apply Lenz's Law: the induced current opposes this decrease, creating its own additional into-the-page field to compensate.",
          "Use the loop's right-hand rule in reverse: for the induced field to point into the page, the current must flow CLOCKWISE as viewed looking at the page."
        ]}
      ]
    },
    {
      id: "frq-12-3",
      source: "2026 AP Exam, Free-Response Question 3",
      title: "Determining Magnetic Field Strength and Particle Mass",
      prompt: "Experiment 1: parallel conducting plates with field B0 into the region, connected to a variable-EMF power supply (separation d, known). A device emits charged spheres of speed v; the EMF is varied until spheres pass through undeflected, detected by a motion detector. Only a voltmeter is otherwise available. (A) Indicate what to measure for a linear graph to find B0, and how to reduce uncertainty. (B) Indicate the graph's axes and how B0 relates to a feature of the graph. Experiment 2: particles of charge Q=+6.4×10⁻¹⁹ C are emitted at v0=3.0×10⁶ m/s into a region of variable field B; radius r is recorded: (0.04T,1.8m), (0.06T,1.2m), (0.14T,0.5m), (0.16T,0.4m), (0.20T,0.3m). (C) Determine what to graph to find mass m. (D) Calculate m from the best-fit line.",
      parts: [
        { label: "(A)–(B)", ask: "Design the velocity-selector experiment and identify the graph.", steps: [
          "Recognize the setup as a velocity selector: for undeflected motion, electric and magnetic forces balance, qE=qvB0, which simplifies (charge cancels) to E=vB0.",
          "Express E using the known plate separation d and emf: E=ε/d, giving ε/d=vB0, or ε=B0·d·v — directly proportional to v.",
          "For each known value of v, record the emf ε needed (via voltmeter) for undeflected motion, repeating multiple trials at each v to average out uncertainty.",
          "Plot ε (vertical) against v (horizontal) to get a line through the origin; since slope=B0·d, solve B0=slope/d using the known separation."
        ]},
        { label: "(C)–(D)", ask: "Determine the particle mass graphically.", steps: [
          "Start from the radius formula for circular motion, r=mv0/(qB), and rearrange: r=(mv0/q)·(1/B) — plotting r (vertical) against 1/B (horizontal) gives a line through the origin with slope=mv0/q.",
          "Compute 1/B for each data point and estimate the best-fit slope — the data gives a slope of approximately 0.075 m·T.",
          "Solve for mass using the known charge and speed: m = slope·q/v0 = (0.075)(6.4×10⁻¹⁹)/(3.0×10⁶) ≈ 1.6×10⁻²⁶ kg."
        ]}
      ]
    }
,{
      id: "frq-12-4",
      source: "Original — Mathematical Routines",
      title: "Force on a Wire in a Field",
      prompt: "A straight wire segment, 0.50 m long, carries 3.0 A in the +x direction, in a region with a uniform 0.40 T field pointing in the +y direction. (a) Find the magnitude of the force on the wire. (b) Find the direction of the force. (c) If the wire is instead reoriented to carry current in the +y direction (same field), find the new force.",
      parts: [
        { label: "(a)", ask: "Find the magnitude of the force.", steps: [
          "Confirm the wire and field are perpendicular (current along x, field along y, at 90° to each other).",
          "Apply F=BILsinθ with θ=90°: F=(0.40)(3.0)(0.50)(1)=0.60N."
        ]},
        { label: "(b)", ask: "Find the direction of the force.", steps: [
          "Apply the right-hand rule with fingers along the current (+x), curling toward the field (+y): thumb points out of the page.",
          "State the direction: the force is directed out of the page."
        ]},
        { label: "(c)", ask: "Find the force if the current runs in +y instead.", steps: [
          "Recognize that current in +y now runs PARALLEL to the field (also +y) — the angle between them is 0°.",
          "Since F=BILsinθ with sinθ=sin0°=0, the force is exactly zero — a wire carrying current parallel to the field feels no force at all."
        ]}
      ]
    },
    {
      id: "frq-12-5",
      source: "Original — Mathematical Routines",
      title: "Induced EMF in a Shrinking Loop",
      prompt: "A circular loop of wire (radius 0.10 m, resistance 2.0 Ω) sits in a uniform 0.50 T field, perpendicular to the loop's plane and directed into the page. The loop is mechanically shrunk at a constant rate, with radius decreasing from 0.10 m to 0.060 m over 0.40 s. (a) Find the change in the loop's area. (b) Find the average induced EMF. (c) Find the average induced current. (d) Determine the direction of the induced current, viewed by the reader.",
      parts: [
        { label: "(a)", ask: "Find the change in area.", steps: [
          "Compute initial and final areas using A=πr²: A<sub>i</sub>=π(0.10)²≈0.0314m²; A<sub>f</sub>=π(0.060)²≈0.0113m².",
          "Find the change: ΔA=A<sub>f</sub>−A<sub>i</sub>≈−0.0201m² (a decrease)."
        ]},
        { label: "(b)", ask: "Find the average induced EMF.", steps: [
          "Apply Faraday's Law using the change in flux, Φ=BA, with B constant: ΔΦ=B·ΔA=(0.50)(−0.0201)≈−0.0101 Wb.",
          "Find the average EMF magnitude: |EMF|=|ΔΦ|/Δt=0.0101/0.40≈0.025V."
        ]},
        { label: "(c)", ask: "Find the average induced current.", steps: [
          "Apply Ohm's Law to the loop: I=EMF/R=0.025/2.0≈0.013A."
        ]},
        { label: "(d)", ask: "Determine the direction of the induced current.", steps: [
          "Determine the flux trend: with the field into the page and the loop's area shrinking, the into-the-page flux is DECREASING.",
          "Apply Lenz's Law: the induced current opposes this decrease, creating its own additional into-the-page field inside the loop.",
          "Use the loop's right-hand rule in reverse: for the induced field to point into the page, the current must flow CLOCKWISE as viewed by the reader."
        ]}
      ]
    },
    {
      id: "frq-12-6",
      source: "Original — Qualitative/Quantitative Translation",
      title: "Velocity Selector and Charge-to-Mass Ratio",
      prompt: "A charged particle enters a region with both a uniform electric field E (downward) and a uniform magnetic field B (into the page), oriented so the particle travels in a straight horizontal line at constant velocity — a velocity selector. (a) Derive an expression for the particle's speed v in terms of E and B. (b) The particle then enters a second region with only field B, traveling in a circular arc of radius r. Derive an expression for q/m in terms of E, B, r. (c) A second, different particle passes through the same velocity selector undeflected but curves with a LARGER radius. Is its q/m larger or smaller than the first particle's?",
      parts: [
        { label: "(a)", ask: "Derive the particle's speed.", steps: [
          "Set up the force-balance condition for straight-line motion: the electric force must exactly cancel the magnetic force, qE=qvB.",
          "Notice the charge q cancels entirely from this equation.",
          "Solve for speed: v=E/B — depending only on the field strengths, not on the particle's charge or mass."
        ]},
        { label: "(b)", ask: "Derive q/m in terms of E, B, r.", steps: [
          "In the second region, the magnetic force alone provides the centripetal force: qvB=mv²/r.",
          "Simplify by canceling one factor of v: qB=mv/r, or q/m=v/(rB).",
          "Substitute the speed found in part (a): q/m=(E/B)/(rB)=E/(rB²)."
        ]},
        { label: "(c)", ask: "Compare the two particles' q/m ratios.", steps: [
          "Recognize both particles pass through the SAME velocity selector undeflected, so both must have the exact same speed v=E/B, independent of charge or mass.",
          "Use q/m=E/(rB²), which is INVERSELY proportional to radius r for fixed E and B.",
          "Conclude: the particle with the LARGER radius has a SMALLER charge-to-mass ratio — it takes more mass (relative to charge) for the same magnetic force to bend its path into a wider circle."
        ]}
      ]
    },
    {
      id: "frq-12-7",
      source: "Original — Mathematical Routines (Derivation)",
      title: "Deriving Motional EMF from First Principles",
      prompt: "A conducting rod of length L slides with speed v along parallel conducting rails, perpendicular to a uniform field B (into the page), completing a circuit with resistor R at the far end. (a) Using the magnetic force on individual charges in the rod (not starting from Faraday's Law), derive the motional EMF. (b) Derive the induced current. (c) Derive the force needed to keep the rod moving at constant speed.",
      parts: [
        { label: "(a)", ask: "Derive the motional EMF from the force on individual charges.", steps: [
          "Consider a single positive charge q within the moving rod: as the rod moves with velocity v through field B, this charge experiences a magnetic force F=qvB, directed along the rod's length.",
          "Recognize this force does work on the charge as it's pushed the full length L of the rod: W=F×L=qvBL.",
          "Recall that EMF is work done per unit charge: EMF=W/q=(qvBL)/q=BLv — the charge cancels entirely."
        ]},
        { label: "(b)", ask: "Derive the induced current.", steps: [
          "Treat the rod as a battery of EMF=BLv, connected to the external resistor R.",
          "Apply Ohm's Law to the resulting simple circuit: I=EMF/R=BLv/R."
        ]},
        { label: "(c)", ask: "Derive the force needed to maintain constant speed.", steps: [
          "Recognize that the current-carrying rod, sitting in the field, experiences its own magnetic force acting as a drag opposing its motion (consistent with Lenz's Law): F<sub>drag</sub>=BIL.",
          "Substitute the current from part (b): F<sub>drag</sub>=B×(BLv/R)×L=B²L²v/R.",
          "Conclude that to maintain constant speed against this drag, an external agent must apply an equal and opposite force of magnitude B²L²v/R."
        ]}
      ]
    },
  ],
  13: [
    {
      id: "frq-13-1",
      source: "2023 AP Exam, Free-Response Question 1",
      title: "Refraction Through a Mirrored Tank",
      prompt: "A rectangular tank with a mirrored bottom is filled with water (index nw). A beam passes from air (index na) into the water at angle θi from the normal; nw > na. (a) Sketch the entire beam path (entering, reflecting off the bottom, exiting). Sugar is then added, and two models are considered: Model A (uniform mixture, index nm > nw) and Model B (three equal-volume layers: water on top, the Model-A mixture in the middle, and a denser mixture nb on the bottom). (b) For Model A, describe how the observed wavelength changes as the beam enters the mixture. (c) Define θ1 (Model A's angle) and θ2, θ3, θ4 (Model B's angles in each layer, top to bottom). (i) Derive θ4 in terms of θi, na, nb. (ii) Rank θ1–θ4 from greatest to least, justifying. (d) The original beam exits the water-only tank a horizontal distance dw from its entry point; Models A and B give dA and dB. Determine whether dA and dB are each greater than, less than, or equal to dw.",
      parts: [
        { label: "(a)", ask: "Sketch the beam's full path.", steps: [
          "Trace the beam entering the water from air: since water is denser (nw>na), the beam bends TOWARD the normal on entering.",
          "Continue to the mirrored bottom, where it reflects following the ordinary law of reflection (angle of incidence = angle of reflection).",
          "Trace the reflected beam back up through the water — by the symmetry of this reflection, it approaches the surface at the same angle it traveled down at.",
          "As it exits back into air, it bends AWAY from the normal, exiting at exactly the original angle θi, just laterally shifted from the entry point."
        ]},
        { label: "(b)", ask: "Describe the wavelength change in Model A.", steps: [
          "Recall that wavelength inside a medium relates to vacuum wavelength via λ_medium=λ_vacuum/n.",
          "Since the mixture's index nm exceeds air's index na, the wavelength inside the mixture is SHORTER than in air.",
          "Note what does NOT change: frequency stays constant across the boundary — only speed and wavelength change during refraction."
        ]},
        { label: "(c) i", ask: "Derive θ4 in terms of θi, na, nb.", steps: [
          "Recognize that Snell's Law relates the angles in the very FIRST medium and the very LAST medium directly, regardless of what's in between, as long as the interfaces are parallel (as here).",
          "Apply Snell's Law straight from air to the bottom layer: na·sinθi = nb·sinθ4.",
          "Solve: θ4 = arcsin[(na/nb)sinθi]."
        ]},
        { label: "(c) ii", ask: "Rank θ1–θ4 and justify.", steps: [
          "Recognize every angle comes from na·sinθi = n·sinθ, where n is that layer's index — since na·sinθi is fixed, a LARGER index always produces a SMALLER angle.",
          "Rank the indices: nw (water) < nm (Model A's mixture, same as Model B's middle layer) < nb (Model B's bottom layer) — and since θ1 and θ3 both use index nm, they must be exactly equal.",
          "Convert to an angle ranking by reversing the index order: θ2 (smallest index nw) is largest; θ1 and θ3 (both nm) tie for the middle; θ4 (largest index nb) is smallest: θ2 > θ1 = θ3 > θ4."
        ]},
        { label: "(d)", ask: "Compare dA and dB to dw.", steps: [
          "Compare Model A to the water-only case: since nm>nw, the beam bends more toward vertical, giving a smaller horizontal spread over the same depth — so dA < dw.",
          "Break Model B's horizontal distance into three equal-depth segments, one per layer, each contributing (depth/3)·tan(angle in that layer).",
          "Compare each segment to plain water: the top segment matches exactly (same index, same angle); the middle and bottom segments use higher indices (nm, nb), producing smaller angles and smaller tangent values than plain water would give.",
          "Conclude that since two of three segments are smaller (and one equal), dB must also be less than dw — both models produce a smaller horizontal exit distance than plain water."
        ]}
      ]
    }
,{
      id: "frq-13-2",
      source: "Original — Mathematical Routines",
      title: "Converging Lens Image Formation",
      prompt: "An object 3.0 cm tall is placed 24 cm from a converging lens with focal length 8.0 cm. (a) Find the image distance. (b) Find the magnification. (c) Find the image height. (d) Classify the image.",
      parts: [
        { label: "(a)", ask: "Find the image distance.", steps: [
          "Apply the thin lens equation: 1/so+1/si=1/f.",
          "Substitute: 1/24+1/si=1/8.0.",
          "Solve: 1/si=1/8.0−1/24=3/24−1/24=2/24=1/12, giving si=12cm."
        ]},
        { label: "(b)", ask: "Find the magnification.", steps: [
          "Apply M=−si/so=−12/24=−0.5."
        ]},
        { label: "(c)", ask: "Find the image height.", steps: [
          "Use M=hi/ho to solve for image height: hi=M×ho=(−0.5)(3.0cm)=−1.5cm."
        ]},
        { label: "(d)", ask: "Classify the image.", steps: [
          "Since si is positive, the image is REAL, forming on the opposite side of the lens from the object.",
          "Since M is negative, the image is INVERTED.",
          "Since |M|<1, the image is REDUCED — overall: real, inverted, reduced."
        ]}
      ]
    },
    {
      id: "frq-13-3",
      source: "Original — Mathematical Routines (Working Backward)",
      title: "Locating an Object for a Target Image",
      prompt: "A concave mirror has focal length 15 cm. A student wants a real image exactly twice the size of the object. (a) Find the required object distance. (b) Find the resulting image distance. (c) Explain why M=−2 (not +2) is the physically relevant solution here.",
      parts: [
        { label: "(a)", ask: "Find the required object distance.", steps: [
          "Recognize a REAL, inverted image with double the size corresponds to M=−2 (negative for inverted, magnitude 2 for size).",
          "Use M=−si/so=−2 to express si: si=2so.",
          "Substitute into the mirror equation: 1/so+1/(2so)=1/15, simplifying to 3/(2so)=1/15.",
          "Solve: so=(3×15)/2=22.5cm."
        ]},
        { label: "(b)", ask: "Find the image distance.", steps: [
          "Use si=2so found above: si=2(22.5)=45cm."
        ]},
        { label: "(c)", ask: "Explain why M=−2 is the correct choice.", steps: [
          "Recall that for a concave mirror, a REAL image always comes with a NEGATIVE magnification — a direct consequence of the sign convention, since real images only occur when the object sits outside the focal length.",
          "A magnification of +2 would instead describe a VIRTUAL, upright, magnified image (object inside the focal length) — a physically different scenario, like a magnifying mirror.",
          "Since the problem specifically asks for a real image, M=−2 is the only physically consistent choice."
        ]}
      ]
    },
    {
      id: "frq-13-4",
      source: "Original — Mathematical Routines + Application",
      title: "Critical Angle in an Optical Fiber",
      prompt: "An optical fiber has a core with index 1.48, surrounded by cladding with index 1.44. (a) Find the critical angle for light traveling from the core into the cladding. (b) Explain why light hitting the wall at angles greater than this critical angle stays trapped inside via total internal reflection. (c) If a manufacturing defect increased the cladding's index to 1.46, would the critical angle increase, decrease, or stay the same? Explain the practical consequence.",
      parts: [
        { label: "(a)", ask: "Find the critical angle.", steps: [
          "Apply the critical angle formula for light going from the denser core toward the less-dense cladding: sinθc=n2/n1=1.44/1.48≈0.973.",
          "Solve: θc=sin⁻¹(0.973)≈76.7°."
        ]},
        { label: "(b)", ask: "Explain how total internal reflection traps the light.", steps: [
          "Recall that any light hitting the boundary at an angle GREATER than θc undergoes total internal reflection — 100% reflects back into the core.",
          "Explain the consequence: as long as light always strikes the walls above this critical angle, it continues bouncing down the fiber's length via repeated total internal reflections with no loss through the walls, enabling long-distance transmission."
        ]},
        { label: "(c)", ask: "Analyze the effect of the manufacturing defect.", steps: [
          "Recompute the critical angle with the new cladding index: sinθc=1.46/1.48≈0.986, giving θc≈80.6° — LARGER than before.",
          "Explain why: as the cladding's index gets closer to the core's, it becomes 'easier' for light to refract out, requiring a more grazing (larger) angle to still totally internally reflect.",
          "State the consequence: with a larger required critical angle, more of the light's travel angles now fall below threshold and leak out — meaning more signal loss and reduced transmission efficiency."
        ]}
      ]
    },
  ],
  14: [
    {
      id: "frq-14-1",
      source: "2025 AP Exam, Free-Response Question 4",
      title: "Double-Slit Fringes for Violet vs. Red Light",
      prompt: "Two slits are separated by distance d; a screen sits at distance L, with L≫d. Bright bands A and B are observed, with three additional bright bands (including the central band) between them. A student claims: the distance from Band A's center to the central bright band is SMALLER using violet light than red light. (A) Indicate whether this claim is correct, justifying without manipulating equations, by referencing the path-length difference to Band A. (B) Derive an expression for the distance between the centers of Bands A and B, for light of frequency f, in terms of d, L, f. (C) Indicate whether your answer to (B) is consistent with your answer to (A).",
      parts: [
        { label: "(A)", ask: "Evaluate the student's claim conceptually.", steps: [
          "Recall the defining condition for a bright fringe at position m: the path-length difference between the slits equals exactly mλ — the SAME m applies to Band A regardless of the light's color.",
          "Compare the path differences violet and red light need for that same m: since violet has a shorter wavelength, the absolute path difference needed (m×λ_violet) is smaller than red's (m×λ_red).",
          "Connect smaller path difference to fringe position: a smaller required path difference is achieved closer to the central band (where path difference is zero) — so violet's Band A sits closer to center, confirming the student is CORRECT."
        ]},
        { label: "(B)", ask: "Derive the distance between Bands A and B.", steps: [
          "Start from the reference-sheet relationship for bright fringes: d·sinθ = mλ.",
          "Convert angle to screen position using the small-angle approximation (valid since L≫d): sinθ ≈ y/L, giving y = mλL/d.",
          "Identify m for each band: the pattern described (three bright bands, including the central one, between A and B) works out to A and B sitting at m=+2 and m=−2.",
          "Find the distance between them: Δy = y<sub>A</sub> − y<sub>B</sub> = (2λL/d) − (−2λL/d) = 4λL/d.",
          "Convert wavelength to frequency using c=fλ, so λ=c/f: Δy = 4cL/(fd)."
        ]},
        { label: "(C)", ask: "Check consistency with Part A.", steps: [
          "Examine how Δy=4cL/(fd) depends on frequency: f sits in the denominator, so Δy is INVERSELY proportional to frequency.",
          "Recall violet light has a HIGHER frequency than red light (shorter wavelength, linked inversely via c=fλ).",
          "Conclude that higher-frequency violet light gives a SMALLER Δy than red — exactly matching Part A's conclusion that violet's bands sit closer together. The two answers are CONSISTENT."
        ]}
      ]
    }
,{
      id: "frq-14-2",
      source: "Original — Mathematical Routines",
      title: "Standing Waves — Multi-Harmonic Analysis",
      prompt: "A string of length 1.5 m, fixed at both ends, has a wave speed of 45 m/s. (a) Find the fundamental frequency. (b) Find the frequency of the third harmonic. (c) A student observes a pattern with exactly 5 antinodes. Identify the harmonic and find its frequency.",
      parts: [
        { label: "(a)", ask: "Find the fundamental frequency.", steps: [
          "Apply the fundamental frequency formula for a string fixed at both ends: f1=v/(2L)=45/(2×1.5)=15Hz."
        ]},
        { label: "(b)", ask: "Find the third harmonic's frequency.", steps: [
          "Recall harmonic frequencies are whole-number multiples of the fundamental: f3=3×f1=3×15=45Hz."
        ]},
        { label: "(c)", ask: "Identify the harmonic with 5 antinodes and find its frequency.", steps: [
          "Recall that the number of antinodes directly identifies the harmonic number n, for a string fixed at both ends.",
          "With 5 antinodes, this is the FIFTH harmonic (n=5).",
          "Find its frequency: f5=5×f1=5×15=75Hz."
        ]}
      ]
    },
    {
      id: "frq-14-3",
      source: "Original — Mathematical Routines",
      title: "Doppler Shift of an Emergency Vehicle",
      prompt: "An ambulance siren emits sound at 480 Hz; sound speed in air is 340 m/s. (a) Find the frequency heard as the ambulance approaches a stationary observer at 25 m/s. (b) Find the frequency heard after it passes and recedes at the same speed. (c) Find the total perceived frequency change.",
      parts: [
        { label: "(a)", ask: "Find the approaching frequency.", steps: [
          "Apply the Doppler formula for an approaching source: f'=f·v/(v−vs).",
          "Substitute: f'=480×340/(340−25)=480×340/315≈518Hz."
        ]},
        { label: "(b)", ask: "Find the receding frequency.", steps: [
          "Apply the Doppler formula for a receding source: f'=f·v/(v+vs).",
          "Substitute: f'=480×340/(340+25)=480×340/365≈447Hz."
        ]},
        { label: "(c)", ask: "Find the total frequency change.", steps: [
          "Subtract the two results: Δf=518−447≈71Hz — the audible pitch 'drop' a listener perceives as the ambulance passes."
        ]}
      ]
    },
    {
      id: "frq-14-4",
      source: "Original — Mathematical Routines",
      title: "Diffraction Grating Wavelength",
      prompt: "A diffraction grating with 5000 lines per centimeter is illuminated with monochromatic light. The second-order (m=2) bright line appears at 22° from the central maximum. (a) Find the slit spacing d. (b) Find the wavelength.",
      parts: [
        { label: "(a)", ask: "Find the slit spacing.", steps: [
          "Recognize that d is the reciprocal of lines per unit length: d=1/(5000 lines/cm)=2.0×10⁻⁴cm=2.0×10⁻⁶m."
        ]},
        { label: "(b)", ask: "Find the wavelength.", steps: [
          "Apply the grating equation (same form as double-slit): dsinθ=mλ.",
          "Solve: λ=dsinθ/m=(2.0×10⁻⁶)(sin22°)/2≈3.75×10⁻⁷m=375nm."
        ]}
      ]
    },
    {
      id: "frq-14-5",
      source: "Original — Qualitative/Quantitative Translation",
      title: "Interference and Polarization — Conceptual Synthesis",
      prompt: "A student runs a double-slit experiment with a laser, and separately, a polarization experiment with two filters. (a) Explain why the double-slit experiment demonstrates light's WAVE nature, referencing superposition. (b) Explain why the polarization experiment only works because light is TRANSVERSE, and describe what would differ if light were longitudinal. (c) Could a double-slit-style interference pattern be produced with sound instead of light? Explain.",
      parts: [
        { label: "(a)", ask: "Explain the double-slit experiment as wave evidence.", steps: [
          "Recall that interference patterns arise from superposition — two waves overlapping and adding constructively or destructively at each point.",
          "Explain why this demonstrates wave behavior: only waves combine this way; particles would simply pile up behind each slit, never producing alternating bright and dark bands.",
          "Conclude that a genuine interference pattern is direct evidence light behaves as a wave in this experiment."
        ]},
        { label: "(b)", ask: "Explain the transverse-wave requirement for polarization.", steps: [
          "Recall that polarization restricts a wave's oscillation to a single plane — meaningful only for TRANSVERSE waves, which oscillate perpendicular to their travel direction.",
          "Explain the longitudinal case: if light oscillated along its direction of travel (like sound), there would be no perpendicular plane to restrict — a polarizing filter would have nothing meaningful to filter.",
          "Conclude that light's ability to be polarized is itself evidence it's a transverse wave."
        ]},
        { label: "(c)", ask: "Evaluate whether sound could show double-slit interference.", steps: [
          "Recall that interference is a general wave phenomenon, not unique to light.",
          "Apply this to sound: since sound is a wave (longitudinal, but still a wave), passing it through two openings and observing interference IS physically possible.",
          "Conclude YES — the fringe spacing would differ (sound's much longer wavelength means spacing on the scale of centimeters or more), but the same dsinθ=mλ relationship and underlying superposition principle apply."
        ]}
      ]
    },
  ],
  15: [
    {
      id: "frq-15-1",
      source: "2024 AP Exam, Free-Response Question 1",
      title: "Photoelectric Effect and de Broglie Wavelength",
      prompt: "In a photoelectric experiment, light of frequency fA, fB, or fC strikes Metal 1 or Metal 2. The minimum de Broglie wavelength λe of ejected electrons is measured (using classical p=mv): (fA,Metal1,6.9×10⁻¹⁰m), (fA,Metal2,9.4×10⁻¹⁰m), (fB,Metal1,no electrons), (fB,Metal2,no electrons), (fC,Metal1,5.3×10⁻¹⁰m), (fC,Metal2,6.3×10⁻¹⁰m). (a) Indicate which frequency is greatest and which is least, justifying with physics principles. (b) Calculate the maximum kinetic energy of electrons ejected from Metal 1 in Trial 1 (fA). (c) Indicate whether Metal 1's work function is greater than, less than, or equal to Metal 2's, justifying by referencing the table.",
      parts: [
        { label: "(a)", ask: "Rank fA, fB, fC.", steps: [
          "Note that fB produces NO ejected electrons from either metal — since a frequency below threshold ejects nothing regardless of intensity, fB must be the LOWEST of the three.",
          "Compare fA and fC using the de Broglie wavelengths on the same metal (Metal 1): fC gives a SMALLER λe (5.3 vs 6.9), meaning higher momentum and higher kinetic energy.",
          "Connect higher ejected-electron KE to higher photon frequency (K<sub>max</sub>=hf−φ, more KE for the same metal requires higher f): fC > fA.",
          "Combine into the full ranking: fC is greatest, fB is least, fA in between."
        ]},
        { label: "(b)", ask: "Calculate max KE for Metal 1, Trial 1.", steps: [
          "Convert the given de Broglie wavelength into momentum using λ=h/p: p = h/λe = (6.63×10⁻³⁴)/(6.9×10⁻¹⁰) ≈ 9.6×10⁻²⁵ kg·m/s.",
          "Using the classical momentum definition as instructed, find kinetic energy: K = p²/(2m) = (9.6×10⁻²⁵)²/(2×9.11×10⁻³¹) ≈ 5.1×10⁻¹⁹ J.",
          "Convert to electron-volts: K ≈ 5.1×10⁻¹⁹/1.6×10⁻¹⁹ ≈ 3.2 eV."
        ]},
        { label: "(c)", ask: "Compare the work functions of Metal 1 and Metal 2.", steps: [
          "Compare Trial 1 (fA on Metal 1) to Trial 2 (fA on Metal 2) — the SAME photon energy is used on both.",
          "Note Metal 1's electrons have a smaller λe (6.9 vs 9.4), meaning higher momentum and higher KE than Metal 2's, from the identical starting photon energy.",
          "Apply K<sub>max</sub>=hf−φ: since Metal 1's electrons ended up with MORE kinetic energy from the same photon energy, less energy was 'spent' overcoming Metal 1's work function — so φ(Metal 1) < φ(Metal 2)."
        ]}
      ]
    },
    {
      id: "frq-15-2",
      source: "2026 AP Exam, Free-Response Question 2",
      title: "Energy Levels and Photon Transitions",
      prompt: "A hypothetical atom has energy levels −5E0 (n=1), −3E0 (n=2), −2E0 (n=3). (A) Draw arrows for all possible transitions that result in photon emission. (B) Derive the wavelength of the highest-energy photon the atom can emit, in terms of E0. (C) A device emits monochromatic light of continuously variable wavelength; at λ0, the photon energy is 4E0. Sketch E vs. λ for λ0<λ<4λ0. (D) A student claims the atom can emit a photon of wavelength λ0 (energy 4E0), like the device. Indicate whether this is correct, justifying by referencing part A.",
      parts: [
        { label: "(A)", ask: "Draw all possible emission transitions.", steps: [
          "Recall that photon EMISSION requires the electron to drop to a LOWER energy level — only downward transitions count.",
          "With three levels, there are three possible downward transitions: n=3→n=2, n=3→n=1, and n=2→n=1 — draw an arrow for each, all pointing toward lower (more negative) energy."
        ]},
        { label: "(B)", ask: "Derive the highest-energy photon's wavelength.", steps: [
          "Compute the energy gap for each transition: n=3→n=2 gives 1E0; n=2→n=1 gives 2E0; n=3→n=1 gives 3E0 — the largest.",
          "Relate photon energy to wavelength: E=hf combined with c=fλ gives E=hc/λ.",
          "Solve for the wavelength of the highest-energy (n=3→n=1) photon: λ=hc/(3E0)."
        ]},
        { label: "(C)", ask: "Sketch E vs. λ for the device.", steps: [
          "Recognize the general shape: since E=hc/λ, energy is inversely proportional to wavelength — a decreasing hyperbola-shaped curve, not a straight line.",
          "Anchor the curve using the given point: at λ=λ0, E=4E0.",
          "Find the curve's value at the other end, λ=4λ0: since E∝1/λ, quadrupling λ cuts E to one-fourth, giving E=E0 at λ=4λ0.",
          "Sketch a smooth, concave-up decreasing curve connecting (λ0, 4E0) to (4λ0, E0)."
        ]},
        { label: "(D)", ask: "Evaluate the student's claim.", steps: [
          "Recall the atom's maximum possible photon energy from part B: 3E0 (the largest available gap, n=3 to n=1) — no transition can release more energy than this.",
          "Compare to the student's claimed photon: at λ0, the device emits a photon of energy 4E0 — more than the atom's largest possible transition can provide.",
          "Conclude the student's claim is INCORRECT: since 4E0 exceeds the atom's maximum single-photon emission energy of 3E0, the atom cannot emit a photon matching the device's λ0 output."
        ]}
      ]
    }
,{
      id: "frq-15-3",
      source: "Original — Mathematical Routines",
      title: "A Three-Step Radioactive Decay Chain",
      prompt: "Uranium-235 (Z=92) undergoes: an alpha decay, then a beta-minus decay, then another alpha decay. (a) Find the mass number and atomic number after all three decays. (b) Identify the final element (Z=88 Radium, 89 Actinium, 90 Thorium, 91 Protactinium).",
      parts: [
        { label: "(a)", ask: "Track mass number and atomic number through all three decays.", steps: [
          "Apply the first decay (alpha): A=235−4=231, Z=92−2=90.",
          "Apply the second decay (beta-minus): A=231 (unchanged), Z=90+1=91.",
          "Apply the third decay (alpha): A=231−4=227, Z=91−2=89.",
          "Final result: mass number 227, atomic number 89."
        ]},
        { label: "(b)", ask: "Identify the final element.", steps: [
          "Match atomic number 89 to its element using the given reference: Actinium.",
          "State the final nucleus: Actinium-227."
        ]}
      ]
    },
    {
      id: "frq-15-4",
      source: "Original — Mathematical Routines",
      title: "Nuclear Binding Energy of Helium-4",
      prompt: "A helium-4 nucleus (2 protons, 2 neutrons) has measured mass 4.001506 u. A free proton has mass 1.007276 u; a free neutron has mass 1.008665 u. (a) Find the mass defect. (b) Find the binding energy in MeV (1u=931 MeV/c²). (c) Find the binding energy per nucleon, and explain why this is more useful for comparing stability across elements than total binding energy alone.",
      parts: [
        { label: "(a)", ask: "Find the mass defect.", steps: [
          "Compute the total mass of the separated particles: 2(1.007276)+2(1.008665)=4.031882u.",
          "Subtract the actual nucleus mass: Δm=4.031882−4.001506=0.030376u."
        ]},
        { label: "(b)", ask: "Find the binding energy.", steps: [
          "Convert the mass defect to energy using 1u=931MeV/c²: BE=(0.030376)(931)≈28.3MeV."
        ]},
        { label: "(c)", ask: "Find binding energy per nucleon and explain its usefulness.", steps: [
          "Divide by the number of nucleons (4): BE/nucleon=28.3/4≈7.07MeV/nucleon.",
          "Explain: total binding energy naturally grows with nucleus size, so comparing raw totals across different-sized nuclei doesn't show which is more stably bound per particle — dividing by nucleon count normalizes for size, enabling fair comparison of stability across elements."
        ]}
      ]
    },
    {
      id: "frq-15-5",
      source: "Original — Experimental Design",
      title: "Measuring the Work Function and Planck's Constant",
      prompt: "A student has a light source with adjustable known frequency, a metal sample, a variable voltage supply, and a way to measure the stopping voltage at each frequency. Design an experiment to determine the metal's work function φ and Planck's constant h from the same data set. (a) Describe the procedure. (b) Describe the graphical analysis.",
      parts: [
        { label: "(a)", ask: "Describe the procedure.", steps: [
          "Select several light frequencies above the metal's threshold, shining each on the sample in turn.",
          "For each frequency, gradually increase the stopping voltage until the photoelectric current drops to exactly zero, recording that voltage.",
          "Repeat with multiple trials per frequency to reduce uncertainty in identifying the exact zero-current point."
        ]},
        { label: "(b)", ask: "Describe the graphical analysis.", steps: [
          "Recall the governing relationship: qV<sub>stop</sub>=hf−φ, rearranged as V<sub>stop</sub>=(h/q)f−(φ/q) — linear in frequency.",
          "Plot V<sub>stop</sub> (vertical) against f (horizontal) to get a straight line.",
          "Extract h from the slope (multiply the measured slope by elementary charge q), and extract φ from the x-intercept (threshold frequency, multiplied by the h value found)."
        ]}
      ]
    },
    {
      id: "frq-15-6",
      source: "Original — Qualitative/Quantitative Translation",
      title: "de Broglie Wavelength and Electron Microscopy",
      prompt: "An electron microscope uses electrons rather than visible light because their de Broglie wavelength can be made far shorter. (a) Find the de Broglie wavelength of an electron accelerated from rest through 5000V. (b) Compare to visible light's ~500nm wavelength, and explain why shorter wavelength allows finer resolution. (c) If the accelerating voltage increases, does the wavelength increase or decrease?",
      parts: [
        { label: "(a)", ask: "Find the electron's de Broglie wavelength.", steps: [
          "Find the kinetic energy: K=qΔV=(1.6×10⁻¹⁹)(5000)=8.0×10⁻¹⁶J.",
          "Find momentum from kinetic energy: p=√(2mK)=√(2×9.11×10⁻³¹×8.0×10⁻¹⁶)≈3.82×10⁻²³kg·m/s.",
          "Apply de Broglie's relationship: λ=h/p=(6.63×10⁻³⁴)/(3.82×10⁻²³)≈1.7×10⁻¹¹m."
        ]},
        { label: "(b)", ask: "Compare to visible light and explain the resolution benefit.", steps: [
          "Compare magnitudes: this wavelength is roughly 30,000 times shorter than visible light's ~500nm.",
          "Explain the connection: resolution is fundamentally limited by diffraction, significant when features are comparable to wavelength — a much shorter wavelength diffracts far less around small structures, resolving details invisible to any light microscope."
        ]},
        { label: "(c)", ask: "Explain the effect of increasing voltage.", steps: [
          "Recall that increasing voltage increases kinetic energy directly: K=qΔV.",
          "Since momentum depends on the square root of K (p=√(2mK)), increasing K also increases p.",
          "Since wavelength is inversely related to momentum (λ=h/p), increasing p DECREASES the wavelength — higher voltage gives even shorter wavelength and potentially finer resolution."
        ]}
      ]
    },
    {
      id: "frq-15-7",
      source: "Original — Mathematical Routines",
      title: "Radioactive Half-Life Calculation",
      prompt: "A radioactive sample has a half-life of 8.0 days and starts with 4.0×10¹⁰ undecayed nuclei. (a) Find the number remaining after 24 days. (b) Find the number of half-lives elapsed after 24 days, confirming part (a). (c) Find the fraction of the original sample that has decayed after 24 days.",
      parts: [
        { label: "(a)–(b)", ask: "Find the number remaining and confirm using half-life count.", steps: [
          "Find the number of half-lives elapsed: 24 days ÷ 8.0 days/half-life = 3 half-lives.",
          "Apply N=N<sub>0</sub>×(1/2)<sup>n</sup>: N=(4.0×10¹⁰)(1/2)³=(4.0×10¹⁰)(1/8)=5.0×10⁹ nuclei remaining."
        ]},
        { label: "(c)", ask: "Find the decayed fraction.", steps: [
          "Recognize the fraction remaining is (1/2)³=1/8, so the fraction decayed is the complement: 1−1/8=7/8.",
          "Convert to a percentage: 7/8=87.5% of the original sample has decayed after 24 days."
        ]}
      ]
    }
  ]
};


export { STUDY_CONTENT, UNITS, QUESTIONS, FRQ_CONTENT };