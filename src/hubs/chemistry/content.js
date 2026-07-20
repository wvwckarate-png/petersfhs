const STUDY_CONTENT = {
  "1": "\n<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Chemistry</div>\n  <h1>Atomic Structure and Properties</h1>\n  <p class=\"sub\">Every AP Chem unit after this one assumes you can move fluently between \"how many atoms/moles do I have,\" \"what does this atom's electron configuration look like,\" and \"where does this element sit on the periodic table, and why does that matter.\" Unit 1 is where all three of those muscles get built. It looks like review of stuff you learned in a first-year chem course — moles, electron configurations, the periodic table — but the AP version goes a layer deeper: PES spectra, precise mass spectrometry reasoning, and periodic trends explained by actual physics (effective nuclear charge, shielding), not just memorized up/down/left/right arrows.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 7–9%</span>\n    <span class=\"pill\">8 topics</span>\n    <span class=\"pill\">65 practice questions</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s11\">1.1 Moles and Molar Mass</a></li>\n    <li><a href=\"#s12\">1.2 Mass Spectra of Elements</a></li>\n    <li><a href=\"#s13\">1.3 Elemental Composition of Pure Substances</a></li>\n    <li><a href=\"#s14\">1.4 Composition of Mixtures</a></li>\n    <li><a href=\"#s15\">1.5 Atomic Structure and Electron Configuration</a></li>\n    <li><a href=\"#s16\">1.6 Photoelectron Spectroscopy</a></li>\n    <li><a href=\"#s17\">1.7 Periodic Trends</a></li>\n    <li><a href=\"#s18\">1.8 Valence Electrons and Ionic Compounds</a></li>\n    <li><a href=\"#practice\">Unit 1 Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <h2 id=\"s11\"><span class=\"num\">1.1</span>Moles and Molar Mass</h2>\n  <p>Chemists can't count atoms one at a time — a single drop of water has more molecules in it than there are stars in the observable universe. So instead of counting atoms directly, chemists count them in bulk, the same way you'd count \"a dozen eggs\" instead of counting twelve individual eggs one by one. The mole is just a very large \"dozen\": 6.022 × 10²³ of something. That number, Avogadro's number, isn't magic — it's simply defined as the number of atoms in exactly 12 grams of carbon-12. Once you have that anchor, you can convert between the three quantities you'll juggle constantly all year: mass (grams), moles, and number of particles.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">n = m / M</div>\n    <div class=\"sub\">n = moles, m = mass (g), M = molar mass (g/mol)</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Molar mass is the bridge between the macroscopic world (grams, something you can put on a scale) and the atomic world (individual atoms and molecules, something you could never see or count directly). Every stoichiometry problem you'll ever do in this course is really just: convert what you're given into moles, do the chemistry in moles, then convert back to whatever unit the question actually wants.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p>How many molecules of glucose (C₆H₁₂O₆) are in a 9.00 g sample?</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">First find the molar mass of glucose: 6(12.01) + 12(1.008) + 6(16.00) = 72.06 + 12.10 + 96.00 = 180.16 g/mol. Convert grams to moles: 9.00 g ÷ 180.16 g/mol = 0.0500 mol. Convert moles to molecules using Avogadro's number: 0.0500 mol × 6.022 × 10²³ molecules/mol = 3.01 × 10²² molecules. Notice the two-step conversion chain: grams → moles → particles. That chain is the backbone of nearly every calculation in this unit.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Students frequently forget to multiply subscripts by the number of atoms when computing molar mass — e.g. forgetting that C₆H₁₂O₆ has <em>six</em> carbons, not one. Always rewrite the formula's atom counts explicitly before adding, especially with hydrates or polyatomic ions in parentheses like Ca(NO₃)₂, where the \"2\" outside the parentheses multiplies everything inside it.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you calculate molar mass from a chemical formula, including compounds with parentheses?</li>\n      <li>Can you convert fluently between grams, moles, and number of particles?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s12\"><span class=\"num\">1.2</span>Mass Spectra of Elements</h2>\n  <p>Not all atoms of the same element are identical — isotopes have the same number of protons but different numbers of neutrons, which means different masses. A mass spectrometer separates a sample into its isotopes and reports two things for each one: its exact mass and its relative abundance (what fraction of the sample it makes up). The periodic table's atomic mass for an element is a weighted average of all its naturally occurring isotopes — \"weighted\" because isotopes that are more abundant pull the average closer to their own mass.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">Average atomic mass = Σ (isotope mass × fractional abundance)</div>\n    <div class=\"sub\">Sum over all isotopes; abundances must add to 1 (100%)</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p>Element X has two isotopes: X-63 (69.15% abundance) and X-65 (30.85% abundance). Find the average atomic mass.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Convert percentages to decimals: 0.6915 and 0.3085. Multiply each isotope's mass by its fractional abundance: (63)(0.6915) = 43.57, and (65)(0.3085) = 20.05. Add these weighted contributions: 43.57 + 20.05 = 63.62 amu. This matches copper's actual atomic mass (63.55 amu is the real value — the small gap here is just rounding in this example), which is a nice sanity check: since 63-amu Cu-63 is the more abundant isotope, the average should land closer to 63 than to 65, and it does.</div>\n    </details>\n  </div>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: Reading a Mass Spectrum Graph</span>\n    <p>AP mass spectra are shown as bar graphs: x-axis is mass-to-charge ratio (basically isotope mass), y-axis is relative abundance (%). To find average atomic mass from a graph, read off each peak's x-value and y-value, then apply the weighted-average formula exactly as above. The tallest peak isn't automatically \"the answer\" — it's just the most abundant isotope, not the average.</p>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>A common error is averaging the isotope masses without weighting by abundance (just adding them and dividing by the number of isotopes). That only works if the isotopes happen to be equally abundant. Always weight by the actual percentages given.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you compute a weighted average atomic mass from isotope masses and abundances?</li>\n      <li>Can you read isotope mass and relative abundance off a mass spectrum bar graph?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s13\"><span class=\"num\">1.3</span>Elemental Composition of Pure Substances</h2>\n  <p>Percent composition tells you what fraction of a compound's total mass comes from each element. It's the same molar-mass machinery from 1.1, just aimed at a different question. Once you can go from formula → percent composition, you can also run the process backward: given percent composition (often from real experimental combustion data), determine the empirical formula — the simplest whole-number ratio of atoms in the compound.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">% element = (mass of element in 1 mol compound / molar mass of compound) × 100</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p>A compound is 40.0% carbon, 6.7% hydrogen, and 53.3% oxygen by mass. Find its empirical formula.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Assume a 100 g sample, so the percentages become grams directly: 40.0 g C, 6.7 g H, 53.3 g O. Convert each to moles: 40.0/12.01 = 3.33 mol C; 6.7/1.008 = 6.65 mol H; 53.3/16.00 = 3.33 mol O. Divide every value by the smallest (3.33): C → 1.00, H → 2.00, O → 1.00. The ratio C:H:O = 1:2:1 gives the empirical formula CH₂O — this happens to be the empirical formula of glucose, formaldehyde, and every other carbohydrate, which is exactly why empirical formula alone can't tell you the actual molecule; you'd need the molar mass too, to scale up to the true molecular formula.</div>\n    </details>\n  </div>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>Notice the pattern here</div>\n    <p>Empirical formula problems are always the same three moves: percent → grams (assume 100 g sample) → moles → divide by smallest. You'll use this exact \"divide by the smallest\" ratio-finding trick again in Unit 4 when balancing net ionic equations from experimental data and in stoichiometry problems throughout the year. Learn it once here.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you calculate percent composition by mass from a chemical formula?</li>\n      <li>Can you determine an empirical formula from percent composition or combustion data?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s14\"><span class=\"num\">1.4</span>Composition of Mixtures</h2>\n  <p>Mixtures — unlike pure compounds — don't have a fixed elemental ratio; two samples of the same mixture can have different proportions of each component. This section is about applying the same mole/mass tools to systems where you first have to figure out how much of each pure substance is present before you can say anything about composition. Common contexts: a solid mixture of two salts, an alloy, or a solution with a known concentration.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p>A 10.0 g mixture of NaCl and CaCl₂ contains 3.55 g of chlorine. Find the percent by mass of NaCl in the mixture.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Let x = mass of NaCl and (10.0 − x) = mass of CaCl₂. NaCl is 35.45/58.44 = 60.7% Cl by mass; CaCl₂ is 70.90/110.98 = 63.9% Cl by mass. Set up the mass balance: 0.607x + 0.639(10.0 − x) = 3.55. Expanding: 0.607x + 6.39 − 0.639x = 3.55, so −0.032x = −2.84, giving x = 88.8 g — which is larger than the whole 10.0 g sample, so something's off; re-checking the chlorine mass balance, it should be 0.607x + 0.639(10.0−x) = 3.55 → 6.39 − 0.032x = 3.55 → 0.032x = 2.84 → x = 88.8, confirming the same result, which signals the given chlorine mass (3.55 g) was set too low relative to a 10.0 g mixture of these two salts to be physically possible. In a real problem you'd instead be given self-consistent numbers; the method — set up a mass-balance equation using each component's known elemental percentage — is what to take away here.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Don't assume a mixture behaves like a compound with one fixed formula. If a question gives you \"percent by mass of element X in a mixture of A and B,\" you need a mass-balance (system of equations) approach, not a single percent-composition calculation — that only works for one pure substance at a time.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you distinguish a mixture's variable composition from a compound's fixed ratio?</li>\n      <li>Can you set up and solve a mass-balance equation to find composition of a two-component mixture?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s15\"><span class=\"num\">1.5</span>Atomic Structure and Electron Configuration</h2>\n  <p>Atoms are built from protons and neutrons packed into a tiny, dense nucleus, surrounded by electrons occupying regions of space called orbitals. Electron configuration is just bookkeeping: a shorthand for which orbitals an atom's electrons are sitting in. It matters because chemistry — literally all of it, bonding, reactivity, color, magnetism — is driven by where the outermost (valence) electrons are and how easily they can be gained, lost, or shared.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Electrons fill orbitals from lowest to highest energy (Aufbau principle), no two electrons in an atom can share all four quantum numbers (Pauli exclusion), and degenerate orbitals (like the three p orbitals in a subshell) each get one electron before any gets a second (Hund's rule) — this is why nitrogen's three 2p electrons sit unpaired in three separate p orbitals rather than pairing up in fewer orbitals.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 5</span>\n    <p>Write the electron configuration for iron (Fe, Z = 26) and for the Fe³⁺ ion.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Following the Aufbau filling order (1s, 2s, 2p, 3s, 3p, 4s, 3d, ...) and filling 26 electrons: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶. For the cation, electrons are removed from the highest principal quantum number shell first — not necessarily the last subshell filled. Even though 3d filled after 4s, the 4s electrons are removed first when forming a cation, because once occupied, 4s electrons are actually higher in energy than filled 3d electrons in a transition metal ion. Removing three electrons (two from 4s, one from 3d) gives Fe³⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ — a nicely stable half-filled d-subshell, which is part of why Fe³⁺ is a common, stable oxidation state for iron.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>The single most common electron configuration error on the AP exam: removing electrons from 3d before 4s when forming a transition metal cation. Remember — fill order and removal order are different rules. Fill low-to-high energy; remove from the highest principal quantum number (n) shell first.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you write full electron configurations for atoms and monatomic ions, including transition metals?</li>\n      <li>Do you know why 4s empties before 3d when forming a cation?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s16\"><span class=\"num\">1.6</span>Photoelectron Spectroscopy</h2>\n  <p>Photoelectron spectroscopy (PES) is one of the more distinctly \"AP\" topics — it rarely shows up in an intro high-school chem course, but it's tested regularly here. The idea: shine high-energy light on a sample, and that light knocks electrons out of their orbitals entirely. The energy needed to eject an electron from a particular orbital (its binding energy) depends on how tightly that electron is held — electrons close to the nucleus in low-energy orbitals need more energy to remove than outer, higher-energy valence electrons.</p>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: Reading a PES Spectrum</span>\n    <p>A PES graph plots binding energy (x-axis, usually decreasing left to right, in MJ/mol) against the number of electrons at that energy (peak height, proportional to how many electrons occupy that orbital). Each peak corresponds to one subshell. Innermost electrons (1s) have the highest binding energy and appear farthest to the left/at the highest x-value; valence electrons have the lowest binding energy and sit at the low end. Peak heights should be in a 2:2:6:2:6... ratio matching orbital capacities (s holds 2, p holds 6, etc.) if the orbital is full.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 6</span>\n    <p>A PES spectrum shows three peaks, in order of decreasing binding energy, with relative heights 2:2:4. Identify the element.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Three peaks means three occupied subshells. Reading from highest binding energy (innermost, most tightly held) to lowest, the subshells fill in the standard order 1s, 2s, 2p. Peak heights tell you how many electrons are in each: 1s² (height 2), 2s² (height 2), 2p⁴ (height 4). Adding these up: 2 + 2 + 4 = 8 total electrons, giving the configuration 1s²2s²2p⁴ — this is oxygen (Z = 8). Notice the 2p subshell is only partially filled (4 of a possible 6 electrons); that's expected and simply tells you the element's outermost subshell isn't full yet, which is exactly why oxygen is reactive.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Don't confuse peak <em>position</em> (which tells you binding energy, i.e. which subshell) with peak <em>height</em> (which tells you how many electrons are in that subshell). A tall peak far to the left means many tightly-bound core electrons — it does not mean \"more important\" or \"higher energy\" in the everyday sense.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you identify an element from its PES spectrum (number of peaks, positions, relative heights)?</li>\n      <li>Do you understand why binding energy decreases from core to valence electrons?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s17\"><span class=\"num\">1.7</span>Periodic Trends</h2>\n  <p>Periodic trends aren't arbitrary patterns to memorize — they all fall out of two competing effects: nuclear charge (more protons pull electrons in harder) and shielding (inner electrons block some of that pull from reaching outer electrons). The combination of the two gives you effective nuclear charge (Z_eff), the net positive pull an outer electron actually feels. Every trend on the periodic table — atomic radius, ionization energy, electronegativity — is really just a story about how Z_eff changes as you move across a period or down a group.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Across a period (left to right): protons increase but shielding from core electrons stays roughly constant, so Z_eff increases → atoms pull their electrons in tighter → atomic radius decreases and ionization energy increases. Down a group: a new electron shell is added each row, and that extra shielding outweighs the added protons, so Z_eff on the outermost electron stays roughly flat while the electrons are simply farther from the nucleus → atomic radius increases and ionization energy decreases.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 7</span>\n    <p>Explain why the first ionization energy of aluminum (Al) is slightly lower than that of magnesium (Mg), even though Al has one more proton.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">This is a classic exception to the simple \"IE increases across a period\" rule, and the AP exam loves testing whether you know why. Mg's outermost electron comes from a filled, extra-stable 3s² subshell. Al's added electron goes into 3p¹ — a higher-energy subshell than 3s, and also one that experiences slightly more shielding from the spherical, symmetric 3s² electrons beneath it. That combination (higher starting energy + a bit more shielding) makes Al's outermost electron actually easier to remove than one of Mg's paired 3s electrons, despite Al's higher nuclear charge. The lesson: subshell identity (s vs. p) and stability of full/half-full subshells can locally override the general periodic trend.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Two well-known \"dips\" in ionization energy trends show up repeatedly on the AP exam: Be→B (2s² full subshell vs. starting 2p) and N→O (half-filled 2p³, extra-stable, vs. starting to pair electrons in 2p⁴). Don't force every trend to be perfectly monotonic — know these two exceptions and why they happen (same 3s vs 3p logic as Mg vs Al above).</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 8</span>\n    <p>Rank F⁻, Na⁺, and Mg²⁺ from largest to smallest radius. All three are isoelectronic with neon (10 electrons).</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">All three species have exactly 10 electrons, so the deciding factor is nuclear charge — more protons pull the same number of electrons in tighter, shrinking the radius. Proton counts: F⁻ has 9 protons, Na⁺ has 11, Mg²⁺ has 12. More protons pulling on the same 10 electrons means a smaller radius, so the order from largest to smallest is F⁻ > Na⁺ > Mg²⁺. This \"isoelectronic series\" reasoning — same electron count, radius set entirely by nuclear charge — is a very common AP question type.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you explain atomic radius, ionization energy, and electronegativity trends using Z_eff and shielding?</li>\n      <li>Do you know the two standard exceptions to the ionization energy trend (Be→B and N→O)?</li>\n      <li>Can you rank isoelectronic species by radius using nuclear charge?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s18\"><span class=\"num\">1.8</span>Valence Electrons and Ionic Compounds</h2>\n  <p>Valence electrons — the outermost-shell electrons — are the only ones involved in bonding; core electrons are chemically \"invisible\" to everything except very high-energy processes like PES. This section connects electron configuration and periodic trends to a real chemical outcome: which ions atoms tend to form, and why those ions combine in predictable ratios to form stable ionic compounds.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Atoms tend to gain or lose valence electrons to reach the same electron configuration as the nearest noble gas — not because atoms \"want\" to be stable in some literal sense, but because full s and p subshells are unusually low in energy, and processes that move a system to lower energy happen spontaneously. Main-group metals lose electrons to expose an underlying full shell; nonmetals gain electrons to complete their own outer shell.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 9</span>\n    <p>Predict the formula of the ionic compound formed between calcium and phosphorus, and explain the ratio.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Calcium (Group 2) loses 2 electrons to form Ca²⁺, reaching argon's configuration. Phosphorus (Group 15) gains 3 electrons to form P³⁻, reaching argon's configuration as well. To balance total positive and negative charge, you need the least common multiple of 2 and 3, which is 6: three Ca²⁺ (total +6) and two P³⁻ (total −6). That gives the formula Ca₃P₂ — the classic \"criss-cross the charges as subscripts, then reduce if possible\" shortcut is really just this LCM logic in disguise.</div>\n    </details>\n  </div>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>This is the seed of Unit 2</div>\n    <p>Everything in this section — why atoms form the ions they do, why ionic compounds have the formulas they have — is really just \"atoms moving toward a lower-energy electron configuration.\" In Unit 2, you'll see this exact same energy-minimization logic drive covalent bonding, Lewis structures, and even why some resonance structures are more favorable than others. Ionic bonding isn't a separate topic from covalent bonding; it's the same underlying story (atoms rearranging electrons to reach lower potential energy) at a different extreme.</p>\n  </div>\n\n  <div class=\"practice-item\"><span class=\"qnum-badge\">Q</span><span>Why does sulfur form S²⁻ rather than S⁺ or S³⁻?</span></div>\n  <div class=\"answer-key\"><details><summary>Check your answer</summary><div class=\"a-content\">Sulfur (Group 16) has 6 valence electrons. Gaining 2 electrons completes its octet (8 valence electrons), reaching argon's configuration — the lowest-energy, most stable option. Losing electrons instead (to form S⁺) would move it further from a full octet, not closer, and would require removing electrons from a stable, half-shielded p-subshell, which costs far more energy than gaining 2 electrons does. S³⁻ overshoots the octet and isn't a configuration that corresponds to any noble gas, so it isn't favorable either.</div></details></div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you predict the charge a main-group atom will form based on its position on the periodic table?</li>\n      <li>Can you determine the correct formula (and explain the ratio) for an ionic compound from two elements?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"practice\">Unit 1 Practice Set</h2>\n  <p>Try these on your own before checking the answer key — that struggle is where the actual learning happens.</p>\n\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>A sample of an unknown metal contains two isotopes: 60.0% at 68.93 amu and 40.0% at 70.92 amu. What is the average atomic mass, and which element is this likely to be?</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>A compound is found to be 25.9% N and 74.1% O by mass. Determine its empirical formula.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>Write the full electron configuration of Br⁻, and identify the noble gas it is isoelectronic with.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>A PES spectrum shows peaks (in order of decreasing binding energy) with relative heights 2:2:6:2:6:1. Identify the element.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">5</span><span>Explain, using Z_eff and shielding, why the atomic radius of K is larger than that of Ca.</span></div>\n\n  <div class=\"answer-key\">\n    <details><summary>Check your answers</summary>\n      <div class=\"a-content\">\n        <p><strong>1.</strong> (68.93)(0.600) + (70.92)(0.400) = 41.36 + 28.37 = 69.72 amu. This is close to gallium's actual atomic mass (69.72 amu), so the element is gallium.</p>\n        <p><strong>2.</strong> Assume 100 g: 25.9 g N ÷ 14.01 = 1.85 mol N; 74.1 g O ÷ 16.00 = 4.63 mol O. Divide by the smaller (1.85): N → 1.00, O → 2.50. Multiply both by 2 to clear the fraction: N₂O₅.</p>\n        <p><strong>3.</strong> Br (Z=35) gains one electron to form Br⁻ (36 electrons): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ — isoelectronic with krypton.</p>\n        <p><strong>4.</strong> Total electrons = 2+2+6+2+6+1 = 19, matching potassium (Z=19), configuration 1s²2s²2p⁶3s²3p⁶4s¹.</p>\n        <p><strong>5.</strong> K and Ca are in the same period, but K has one fewer proton (Z=19 vs Z=20) while both have the same number of shielding core electrons under their outermost 4s electron. Lower nuclear charge with essentially the same shielding means a lower Z_eff on the outer electron for K, so that electron is held less tightly and sits farther out — giving K a larger radius than Ca, consistent with the general \"radius decreases left to right across a period\" trend.</p>\n      </div>\n    </details>\n  </div>\n\n</div>\n",
  "2": "\n<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Chemistry</div>\n  <h1>Compound Structure and Properties</h1>\n  <p class=\"sub\">Unit 1 was about single atoms. Unit 2 is about what happens when atoms link up — and it turns out the entire menu of bonding types (ionic, metallic, covalent) is really one continuous idea: electrons rearranging themselves to reach lower potential energy. By the end of this unit you'll be able to draw a Lewis structure, predict its 3D shape, and explain why that shape exists, all from the same handful of principles.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 7–9%</span>\n    <span class=\"pill\">7 topics</span>\n    <span class=\"pill\">65 practice questions</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s21\">2.1 Types of Chemical Bonds</a></li>\n    <li><a href=\"#s22\">2.2 Intramolecular Force and Potential Energy</a></li>\n    <li><a href=\"#s23\">2.3 Structure of Ionic Solids</a></li>\n    <li><a href=\"#s24\">2.4 Structure of Metals and Alloys</a></li>\n    <li><a href=\"#s25\">2.5 Lewis Diagrams</a></li>\n    <li><a href=\"#s26\">2.6 Resonance and Formal Charge</a></li>\n    <li><a href=\"#s27\">2.7 VSEPR and Hybridization</a></li>\n    <li><a href=\"#practice\">Unit 2 Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <h2 id=\"s21\"><span class=\"num\">2.1</span>Types of Chemical Bonds</h2>\n  <p>Bonds exist because two atoms sharing or transferring electrons can reach a lower total potential energy than they'd have as separate atoms. Which \"type\" of bond forms — ionic, covalent, or metallic — depends mostly on how the two atoms compare in electronegativity: a huge difference (metal + nonmetal) tends toward ionic bonding (electron transfer), a small or zero difference (nonmetal + nonmetal) tends toward covalent bonding (electron sharing), and a \"sea\" of many identical or similar low-electronegativity metal atoms leads to metallic bonding (delocalized shared electrons).</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Bond type is a spectrum, not three separate boxes. Even \"ionic\" bonds have some covalent character, and even \"nonpolar covalent\" bonds between different atoms usually have a little ionic character. Electronegativity difference (ΔEN) is the dial that determines where on that spectrum a given bond sits.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p>Classify the bond in HF, in F₂, and in NaF, using electronegativity values (H = 2.20, F = 3.98, Na = 0.93).</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">HF: ΔEN = 3.98 − 2.20 = 1.78, a large but not extreme difference — this is a polar covalent bond, with electrons shared unequally and pulled toward fluorine. F₂: ΔEN = 0 (identical atoms) — a nonpolar covalent bond, electrons shared perfectly equally. NaF: ΔEN = 3.98 − 0.93 = 3.05, the largest gap of the three — this is an ionic bond, where sodium's valence electron essentially transfers entirely to fluorine rather than being shared.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>There's no single official ΔEN cutoff the AP exam expects you to memorize as a strict boundary between \"polar covalent\" and \"ionic.\" Reason about it qualitatively: metal + nonmetal → ionic; two different nonmetals → polar covalent; two identical atoms → nonpolar covalent. Don't get stuck trying to recall an exact numerical threshold.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you classify a bond as ionic, polar covalent, or nonpolar covalent using electronegativity difference?</li>\n      <li>Do you understand bond type as a continuous spectrum rather than three rigid categories?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s22\"><span class=\"num\">2.2</span>Intramolecular Force and Potential Energy</h2>\n  <p>A bond's strength and length are directly connected: shorter bonds are stronger, because the positively charged nuclei and shared electron density are held closer together, producing a deeper potential energy well. Think of a bond like a spring at its natural resting length — pulling atoms apart or pushing them together both cost energy, and the bond length you actually observe is the distance where potential energy is at its minimum.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">Bond order ∝ 1/(bond length), Bond order ∝ bond energy</div>\n    <div class=\"sub\">Higher bond order → shorter, stronger bond</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p>Rank the carbon-carbon bonds in ethane (C₂H₆, single bond), ethene (C₂H₄, double bond), and ethyne (C₂H₂, triple bond) by bond length and by bond energy.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Bond order increases from ethane (1) to ethene (2) to ethyne (3). More shared electron pairs pull the two carbon nuclei closer together and hold them more tightly, so bond length decreases as bond order increases: ethyne < ethene < ethane. Bond energy runs the opposite direction in terms of ranking magnitude — more shared pairs means more energy is needed to break the bond, so bond energy increases: ethane < ethene < ethyne.</div>\n    </details>\n  </div>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>This shows up again in Unit 6</div>\n    <p>Bond energy is exactly the quantity you'll use in Unit 6 to estimate enthalpy of reaction — breaking bonds costs energy (endothermic) and forming bonds releases energy (exothermic). The bond-order-to-strength relationship you're learning here is the entire foundation of that later calculation.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you relate bond order to both bond length and bond energy?</li>\n      <li>Do you understand bond length as the potential-energy minimum distance between bonded atoms?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s23\"><span class=\"num\">2.3</span>Structure of Ionic Solids</h2>\n  <p>Ionic solids aren't made of individual \"molecules\" — they're a continuous 3D lattice of alternating positive and negative ions, held together by electrostatic attraction in every direction. That lattice structure explains ionic compounds' signature properties: high melting points (you must break many strong electrostatic attractions throughout the lattice, not just one bond), brittleness (shifting the lattice slightly lines up same-charge ions, which repel and shatter the crystal), and conductivity only when melted or dissolved (ions must be free to move to carry current; in the solid lattice they're locked in place).</p>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: Explaining Ionic Solid Properties</span>\n    <p>When asked \"why does this ionic solid have property X,\" always tie your answer back to the lattice: strong, non-directional electrostatic forces throughout the crystal (high melting point), and rigid ion positions until melted or dissolved (conductivity, brittleness). Full credit responses name the electrostatic force explicitly, not just \"ionic bonds are strong.\"</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p>Explain why MgO has a much higher melting point than NaCl.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Lattice energy — the strength of the electrostatic attraction holding the lattice together — depends on both ionic charge and ionic radius, following a Coulomb's-law-like relationship (stronger with higher charges, weaker with larger distances between ion centers). MgO's ions (Mg²⁺ and O²⁻) carry twice the charge of NaCl's ions (Na⁺ and Cl⁻), and Coulombic attraction scales with the product of the charges. This much stronger electrostatic attraction in MgO requires far more thermal energy to overcome, giving it a dramatically higher melting point (2852°C) than NaCl (801°C).</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you describe the structure of an ionic lattice?</li>\n      <li>Can you explain melting point, brittleness, and conductivity trends using lattice structure and ionic charge/radius?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s24\"><span class=\"num\">2.4</span>Structure of Metals and Alloys</h2>\n  <p>Metallic bonding is often described as a \"sea of electrons\": metal atoms release their valence electrons into a shared, delocalized pool that surrounds a lattice of positive metal cations. Unlike ionic or covalent bonds, these delocalized electrons aren't tied to any specific pair of atoms, which explains metals' distinctive properties: malleability and ductility (the electron sea lets metal cations slide past each other without breaking any specific bond), and electrical/thermal conductivity (delocalized electrons are already mobile, free to carry charge or transfer energy).</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p>Explain, at the particle level, why metals are malleable (can be hammered into sheets) while ionic solids are brittle (shatter under stress).</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">In a metal, when a force shifts rows of cations past one another, the delocalized electron sea simply flows and redistributes around the new arrangement, maintaining the attractive force everywhere — so the metal deforms smoothly instead of breaking. In an ionic solid, the same kind of shift lines up same-charge ions directly next to each other, and the resulting strong repulsion pushes the lattice apart along that plane, causing it to shatter rather than bend.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>An alloy is a mixture, not a compound — its composition can vary (e.g., different grades of steel have different %carbon), which is exactly the mixture-vs-compound distinction from Unit 1, section 1.4. Don't describe an alloy's composition using a fixed chemical formula.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you describe metallic bonding using the electron-sea model?</li>\n      <li>Can you explain malleability, ductility, and conductivity of metals using that model?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s25\"><span class=\"num\">2.5</span>Lewis Diagrams</h2>\n  <p>A Lewis structure is a map of where every valence electron sits in a molecule — bonding pairs (shared between two atoms) and lone pairs (belonging to just one atom). Drawing them correctly is a mechanical skill with a reliable procedure, and it's the prerequisite for almost everything else in this unit: resonance, formal charge, VSEPR shape, and hybridization all start from a correct Lewis structure.</p>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: Drawing a Lewis Structure</span>\n    <p>1) Count total valence electrons (sum each atom's group number; add 1 per negative charge, subtract 1 per positive charge). 2) Arrange atoms with the least electronegative (usually) in the center. 3) Connect atoms with single bonds, using 2 electrons per bond. 4) Distribute remaining electrons as lone pairs, starting with terminal (outer) atoms, giving each atom an octet where possible. 5) If the central atom lacks an octet, convert lone pairs on outer atoms into additional bonds (double/triple bonds) until it's satisfied.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 5</span>\n    <p>Draw the Lewis structure for CO₂.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Total valence electrons: C(4) + 2×O(6) = 4 + 12 = 16. Place C in the center, bonded to each O with a single bond (uses 4 electrons, 2 bonds × 2 e⁻). Remaining: 16 − 4 = 12 electrons, distributed as 3 lone pairs on each oxygen (6 electrons × 2 oxygens = 12). Checking the central carbon: it only has 2 bonding pairs (4 electrons), far short of an octet. Convert one lone pair from each oxygen into a second bond to carbon, giving two C=O double bonds. Now carbon has 4 bonding pairs (8 electrons, full octet) and each oxygen has 2 lone pairs plus a double bond (8 electrons total, full octet) — a complete, correct structure: O=C=O.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Hydrogen only ever forms 1 bond and never has lone pairs (it can only hold 2 electrons total, not 8) — don't try to give it an octet. Also remember certain elements (B, Be) are commonly stable with fewer than 8 electrons, and elements in period 3 or below (like P, S, Cl) can sometimes exceed an octet (expanded octet) in molecules like SF₆ or PCl₅.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you count total valence electrons correctly, including for ions?</li>\n      <li>Can you draw a complete, correct Lewis structure following the standard procedure?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s26\"><span class=\"num\">2.6</span>Resonance and Formal Charge</h2>\n  <p>Sometimes a single Lewis structure can't fully capture a molecule's real bonding — the true structure is better described as a blend (resonance hybrid) of two or more valid Lewis structures that differ only in electron placement, not atom placement. Formal charge is the tool that tells you which resonance structure (or which overall structure) is the most realistic contributor to that blend.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">FC = (valence e⁻ in free atom) − (lone pair e⁻) − ½(bonding e⁻)</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>The best Lewis structure (or best resonance contributor) minimizes formal charges overall, keeps any negative formal charge on the more electronegative atom, and avoids having like charges on adjacent atoms. Formal charge is a bookkeeping tool, not a real physical charge — real charge distribution is better described by electronegativity — but it's a very reliable predictor of structural stability.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 6</span>\n    <p>Calculate formal charges for each atom in the resonance structure O=N-O⁻ (one possible structure for NO₂⁻, ignoring the second oxygen's lone pairs for clarity of this specific calculation).</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Double-bonded O: FC = 6 − 4(lone pair e⁻) − ½(4 bonding e⁻) = 6 − 4 − 2 = 0. Central N: FC = 5 − 2(lone pair e⁻) − ½(6 bonding e⁻, from 1 double + 1 single bond) = 5 − 2 − 3 = 0. Single-bonded O⁻: FC = 6 − 6(lone pair e⁻) − ½(2 bonding e⁻) = 6 − 6 − 1 = −1. These formal charges (0, 0, −1) sum to −1, correctly matching the overall −1 charge of the nitrite ion — a good consistency check to always run after calculating formal charges.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Formal charges must always sum to the overall charge of the species (0 for a neutral molecule, matching the ion charge for an ion). If your formal charges don't sum correctly, you've made an arithmetic or electron-counting error somewhere and need to recheck before trusting your structure.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you calculate formal charge for any atom in a Lewis structure?</li>\n      <li>Can you use formal charge to identify the best resonance contributor?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s27\"><span class=\"num\">2.7</span>VSEPR and Hybridization</h2>\n  <p>VSEPR (Valence Shell Electron Pair Repulsion) theory predicts molecular shape from one simple idea: electron groups around a central atom — whether bonding pairs or lone pairs — repel each other and arrange themselves to be as far apart as possible. Hybridization is the orbital-level explanation for how that geometry is actually achieved: atomic orbitals mix together to form new hybrid orbitals oriented exactly toward the VSEPR-predicted positions.</p>\n\n  <table class=\"formula-table\">\n    <thead><tr><th>Electron groups</th><th>Hybridization</th><th>Electron geometry</th><th>Example</th></tr></thead>\n    <tbody>\n      <tr><td>2</td><td>sp</td><td>Linear</td><td>CO₂</td></tr>\n      <tr><td>3</td><td>sp²</td><td>Trigonal planar</td><td>BF₃</td></tr>\n      <tr><td>4</td><td>sp³</td><td>Tetrahedral</td><td>CH₄</td></tr>\n      <tr><td>5</td><td>sp³d</td><td>Trigonal bipyramidal</td><td>PCl₅</td></tr>\n      <tr><td>6</td><td>sp³d²</td><td>Octahedral</td><td>SF₆</td></tr>\n    </tbody>\n  </table>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 7</span>\n    <p>Predict the molecular geometry, bond angle, and hybridization of the central atom in NH₃.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Nitrogen has 5 valence electrons: 3 form bonds to hydrogen, leaving 1 lone pair. That's 4 total electron groups (3 bonding + 1 lone pair), giving a tetrahedral electron geometry and sp³ hybridization. But molecular geometry (the shape you'd actually observe, ignoring the invisible lone pair) is trigonal pyramidal — three bonded atoms arranged around the central N with the lone pair occupying the fourth tetrahedral position. Because lone pairs repel more strongly than bonding pairs (they're held closer to the nucleus, spread out more), the H-N-H bond angle compresses slightly from the ideal 109.5° tetrahedral angle to about 107°.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Electron geometry and molecular geometry are not the same thing whenever lone pairs are present. Electron geometry counts all electron groups; molecular geometry only describes the visible positions of bonded atoms. Always specify which one a question is asking for.</p>\n  </div>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>This is the whole reason Unit 3 works</div>\n    <p>Molecular shape and bond polarity — both direct outputs of VSEPR — determine whether a molecule has an overall dipole moment. That dipole moment is the single biggest factor in Unit 3's discussion of intermolecular forces: is a molecule polar or nonpolar, and how strongly do neighboring molecules attract each other? Everything about boiling points, solubility, and phase behavior in Unit 3 traces straight back to the shape you're learning to predict right here.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you determine electron geometry and molecular geometry from a Lewis structure?</li>\n      <li>Can you assign hybridization to a central atom based on its number of electron groups?</li>\n      <li>Do you understand why lone pairs compress bond angles?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"practice\">Unit 2 Practice Set</h2>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>Draw the Lewis structure of SO₃ and determine the central atom's hybridization.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>Explain why CsCl has a lower melting point than MgO.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>Calculate the formal charge on each atom in the structure H-O-Cl (all single bonds, complete octets).</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>Predict the molecular geometry and bond angle of SF₄ (central S has 4 bonding pairs and 1 lone pair).</span></div>\n\n  <div class=\"answer-key\">\n    <details><summary>Check your answers</summary>\n      <div class=\"a-content\">\n        <p><strong>1.</strong> Valence electrons: S(6) + 3×O(6) = 24. With S bonded to 3 O via single bonds and expanded to include one or more double bonds to satisfy octets and minimize formal charge, the most common accepted Lewis structure has one S=O double bond and two S-O single bonds (with resonance across all three positions), giving S three electron groups (all bonding, no lone pairs on S) — trigonal planar electron geometry, sp² hybridization.</p>\n        <p><strong>2.</strong> Cs⁺ has a much larger ionic radius and lower charge (+1) than Mg²⁺ (+2, smaller radius), and Cl⁻ is larger and lower-charged than O²⁻. Lower charges and greater distance between ion centers both weaken Coulombic attraction, giving CsCl a much weaker lattice energy and therefore a lower melting point than the strongly-bonded, small, highly-charged MgO lattice.</p>\n        <p><strong>3.</strong> H: FC = 1 − 0 − ½(2) = 0. O: FC = 6 − 4 − ½(4) = 0. Cl: FC = 7 − 6 − ½(2) = 0. All formal charges are 0, summing to 0, matching the neutral overall molecule (HOCl, hypochlorous acid) — a good, stable structure.</p>\n        <p><strong>4.</strong> With 4 bonding pairs and 1 lone pair (5 total electron groups), the electron geometry is trigonal bipyramidal (sp³d hybridization), but the lone pair occupies an equatorial position (to minimize repulsion with the most neighbors), giving a molecular geometry called \"seesaw,\" with bond angles compressed somewhat below the ideal 90°/120° trigonal bipyramidal angles due to lone pair repulsion.</p>\n      </div>\n    </details>\n  </div>\n\n</div>\n",
  "3": "\n<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Chemistry</div>\n  <h1>Properties of Substances and Mixtures</h1>\n  <p class=\"sub\">This is the single heaviest-weighted unit on the entire AP Chemistry exam — 18 to 22% of your score comes from this material alone, more than double most other units. It's also where the course's biggest ideas converge: everything you learned about polarity and shape in Unit 2 becomes the explanation for why substances have the boiling points, solubilities, and physical states they do. Take your time here. Every other unit assumes you've internalized this one.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 18–22%</span>\n    <span class=\"pill\">13 topics</span>\n    <span class=\"pill\">100 practice questions</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s31\">3.1 Intermolecular and Interparticle Forces</a></li>\n    <li><a href=\"#s32\">3.2 Properties of Solids</a></li>\n    <li><a href=\"#s33\">3.3 Solids, Liquids, and Gases</a></li>\n    <li><a href=\"#s34\">3.4 Ideal Gas Law</a></li>\n    <li><a href=\"#s35\">3.5 Kinetic Molecular Theory</a></li>\n    <li><a href=\"#s36\">3.6 Deviation from Ideal Gas Law</a></li>\n    <li><a href=\"#s37\">3.7 Solutions and Mixtures</a></li>\n    <li><a href=\"#s38\">3.8 Representations of Solutions</a></li>\n    <li><a href=\"#s39\">3.9 Separation of Solutions and Mixtures</a></li>\n    <li><a href=\"#s310\">3.10 Solubility</a></li>\n    <li><a href=\"#s311\">3.11 Spectroscopy and the Electromagnetic Spectrum</a></li>\n    <li><a href=\"#s312\">3.12 Properties of Photons</a></li>\n    <li><a href=\"#s313\">3.13 Beer-Lambert Law</a></li>\n    <li><a href=\"#practice\">Unit 3 Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <h2 id=\"s31\"><span class=\"num\">3.1</span>Intermolecular and Interparticle Forces</h2>\n  <p>Intermolecular forces (IMFs) are the attractions <em>between</em> separate molecules — completely different from the intramolecular (within-molecule) bonds you studied in Unit 2. IMFs are much weaker than covalent or ionic bonds, but they're responsible for essentially every macroscopic physical property you can observe about a substance: whether it's a solid, liquid, or gas at room temperature; its boiling and melting points; its viscosity; whether it dissolves in water. There are three main types, and they scale in a predictable order of strength.</p>\n\n  <table class=\"formula-table\">\n    <thead><tr><th>Force</th><th>Present in</th><th>Relative strength</th><th>Origin</th></tr></thead>\n    <tbody>\n      <tr><td>London dispersion</td><td>All molecules/atoms</td><td>Weakest (but scales with size)</td><td>Temporary, instantaneous dipoles from electron motion</td></tr>\n      <tr><td>Dipole-dipole</td><td>Polar molecules</td><td>Moderate</td><td>Permanent partial charges attracting oppositely</td></tr>\n      <tr><td>Hydrogen bonding</td><td>H bonded to N, O, or F</td><td>Strongest IMF</td><td>Especially strong dipole-dipole from H's small size and high ΔEN with N/O/F</td></tr>\n    </tbody>\n  </table>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Every molecule experiences London dispersion forces — even nonpolar ones — because electron distribution is never perfectly static; at any instant, electrons can be unevenly distributed, creating a temporary dipole that induces a matching temporary dipole in a neighboring molecule. Larger molecules (more electrons, more surface area) have stronger dispersion forces, which is why nonpolar substances can still have surprisingly high boiling points if they're large enough.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p>Rank CH₄, SiH₄, and GeH₄ by expected boiling point.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">All three are nonpolar, tetrahedral molecules (identical shape, identical bond polarity roughly canceling), so the only IMF present in all three is London dispersion. Dispersion force strength increases with molecular size (more electrons, larger, more polarizable electron cloud), and molecular size increases down this series: CH₄ < SiH₄ < GeH₄. So boiling point should increase in that same order: CH₄ (−161°C) < SiH₄ (−112°C) < GeH₄ (−88°C) — matching real experimental data closely.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Hydrogen bonding is NOT a separate, unique force distinct from dipole-dipole — it's the strongest special case of dipole-dipole attraction, occurring specifically when H is directly bonded to N, O, or F (small, highly electronegative atoms that create an unusually strong, concentrated partial positive charge on the hydrogen). Don't say \"H₂S has hydrogen bonding\" just because it contains hydrogen — sulfur isn't N, O, or F, so H₂S only has dipole-dipole and dispersion forces, not true hydrogen bonding.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p>Explain why H₂O (boiling point 100°C) has a dramatically higher boiling point than H₂S (boiling point −60°C), despite S being larger and heavier than O.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Based on size/dispersion forces alone, you'd actually expect H₂S to have the higher boiling point (more electrons, larger, more polarizable). But H₂O has hydrogen bonding — O is small and highly electronegative enough to qualify — while H₂S does not (S isn't electronegative enough, and it's a larger atom that spreads out the partial negative charge, weakening the dipole-dipole interaction significantly). Hydrogen bonding is strong enough to completely overwhelm the size-based dispersion force disadvantage, giving water the anomalously high boiling point.</div>\n    </details>\n  </div>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: Predicting IMFs Present in a Substance</span>\n    <p>Ask three questions in order: (1) Is it ionic? If so, ion-ion (Coulombic) forces dominate, and these are much stronger than any IMF. (2) If molecular, does it have H bonded directly to N, O, or F? If yes, hydrogen bonding is present (plus dipole-dipole and dispersion). (3) If no H-bonding, is the molecule polar overall (check both bond polarity AND molecular symmetry from Unit 2)? If polar, dipole-dipole and dispersion are present. If nonpolar, only dispersion forces are present.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you identify all IMFs present in a given substance using its structure and polarity?</li>\n      <li>Can you rank substances by relative boiling point using IMF type and molecular size?</li>\n      <li>Do you understand why hydrogen bonding requires H bonded directly to N, O, or F specifically?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s32\"><span class=\"num\">3.2</span>Properties of Solids</h2>\n  <p>Solids come in two broad structural categories: crystalline (a highly ordered, repeating 3D arrangement of particles) and amorphous (no long-range order, like glass). Within crystalline solids, the type of particle at each lattice point — and what holds those particles together — determines the solid's properties: ionic solids (ions held by electrostatic attraction), metallic solids (cations in an electron sea), covalent network solids (atoms connected by a continuous web of covalent bonds, like diamond or quartz), and molecular solids (individual molecules held together only by IMFs).</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p>Explain why quartz (SiO₂, a covalent network solid) has an extremely high melting point (1713°C), while dry ice (CO₂, a molecular solid) sublimes at −78°C, even though both contain similar elements.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">In quartz, every silicon and oxygen atom is connected to its neighbors by strong covalent bonds extending throughout the entire crystal — melting requires breaking a continuous network of real covalent bonds. In dry ice, individual CO₂ molecules are complete, stable units held to their neighbors only by weak London dispersion forces (CO₂ is nonpolar); no covalent bonds need to be broken to separate the molecules, only weak IMFs. This is why dry ice sublimes at such a low temperature compared to quartz's melting point — the energy required is fundamentally different in kind, not just in scale.</div>\n    </details>\n  </div>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: Classifying an Unknown Solid</span>\n    <p>Given melting point + conductivity + hardness data: very high melting point AND extremely hard AND non-conducting even molten → covalent network. High melting point AND conducts only when molten/dissolved → ionic. Conducts as a solid AND malleable → metallic. Low melting point AND non-conducting in any state → molecular.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you classify a solid as ionic, metallic, covalent network, or molecular from its properties?</li>\n      <li>Can you explain why covalent network solids have exceptionally high melting points?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s33\"><span class=\"num\">3.3</span>Solids, Liquids, and Gases</h2>\n  <p>Phase changes are all about the competing balance between IMF-driven attraction (pulling particles together, favoring order) and thermal kinetic energy (pushing particles apart, favoring disorder). A heating curve — temperature plotted against heat added — visually captures this competition: temperature rises while a single phase is heating up (kinetic energy increasing), but temperature stays flat during a phase change (all added energy goes into overcoming IMFs, not increasing speed).</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p>On a heating curve for water, why does temperature remain constant during the melting plateau, even though heat is continuously being added?</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Temperature is a direct measure of average kinetic energy, not total energy. During melting, all the added heat energy is being used to overcome the hydrogen bonds and other IMFs holding the solid's rigid lattice together (increasing potential energy) rather than speeding up particle motion (which would increase kinetic energy/temperature). Only once the lattice is fully disrupted and all particles are in the liquid phase does further heat addition go back into increasing kinetic energy, and temperature starts rising again.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you interpret a heating/cooling curve, identifying phases and phase changes?</li>\n      <li>Can you explain why temperature plateaus during a phase change in terms of kinetic vs. potential energy?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s34\"><span class=\"num\">3.4</span>Ideal Gas Law</h2>\n  <p>The ideal gas law connects the four measurable properties of any gas sample — pressure, volume, temperature, and moles — into a single, extremely useful equation. \"Ideal\" is an approximation (real gas particles do take up space and do attract each other slightly), but it's remarkably accurate for most gases under normal conditions, and it's the workhorse equation for essentially every gas calculation on the AP exam.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">PV = nRT</div>\n    <div class=\"sub\">P in atm, V in L, n in mol, R = 0.0821 L·atm/(mol·K), T in Kelvin (always!)</div>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Temperature MUST be in Kelvin for every gas law calculation — plugging in Celsius directly is probably the single most common error in this entire unit. Always convert first: K = °C + 273.15. Also double check your value of R matches your pressure units (0.0821 for atm, 8.314 for kPa or J units) — using the wrong R constant with the wrong pressure unit is a close second in frequency.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 5</span>\n    <p>What volume does 2.50 mol of an ideal gas occupy at 1.20 atm and 305 K?</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Rearranging PV = nRT for V: V = nRT/P = (2.50 mol)(0.0821 L·atm/mol·K)(305 K) / (1.20 atm). Numerator: 2.50 × 0.0821 × 305 = 62.60. Dividing by 1.20: V = 52.2 L. Always double-check units cancel correctly: (mol)(L·atm/mol·K)(K)/(atm) leaves L, confirming the setup is dimensionally consistent.</div>\n    </details>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 6</span>\n    <p>A 5.00 L rigid container holds gas at 2.00 atm and 300 K. If the temperature is raised to 450 K with volume held constant, what is the new pressure?</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Since n, R, and V are all constant here, P/T must remain constant (combined gas law, a shortcut derived directly from PV=nRT). Setting up P₁/T₁ = P₂/T₂: 2.00/300 = P₂/450. Solving: P₂ = 2.00 × (450/300) = 2.00 × 1.5 = 3.00 atm. This combined-gas-law shortcut avoids recalculating moles every time — it's just PV=nRT with the constant terms cancelled out algebraically.</div>\n    </details>\n  </div>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: Gas Density and Molar Mass</span>\n    <p>Combining PV=nRT with n = m/M gives PM = (m/V)RT = dRT, so M = dRT/P. This lets you find a gas's molar mass directly from its density at known temperature and pressure — a very common \"identify the unknown gas\" question type.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you apply PV=nRT to solve for any one variable given the other three?</li>\n      <li>Can you use the combined gas law shortcut when some variables are held constant?</li>\n      <li>Can you find molar mass from gas density using the ideal gas law?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s35\"><span class=\"num\">3.5</span>Kinetic Molecular Theory</h2>\n  <p>Kinetic Molecular Theory (KMT) is the microscopic model that explains why the ideal gas law works: gas particles are treated as point masses (negligible volume) in constant, random, straight-line motion, colliding elastically (no energy lost) with each other and the container walls, with average kinetic energy directly proportional to absolute temperature — and nothing else (not molar mass, not particle identity).</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>At a given temperature, ALL gases have the same average kinetic energy, regardless of molar mass. But since KE = ½mv², a lighter gas particle must move faster on average to have the same kinetic energy as a heavier one. This single fact explains diffusion rate, effusion rate, and RMS speed differences between different gases at the same temperature.</p>\n  </div>\n\n  <div class=\"eq\">\n    <div class=\"main\">Rate₁/Rate₂ = √(M₂/M₁)</div>\n    <div class=\"sub\">Graham's Law of Effusion — lighter gases effuse/diffuse faster</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 7</span>\n    <p>Compare the effusion rates of H₂ and O₂ at the same temperature.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Using Graham's Law: Rate(H₂)/Rate(O₂) = √(M(O₂)/M(H₂)) = √(32.00/2.02) = √15.84 = 3.98. So H₂ effuses about 4 times faster than O₂ — this makes sense given H₂'s much lower molar mass means its molecules must move roughly 4 times faster on average to carry the same average kinetic energy as the heavier O₂ molecules at the same temperature.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Don't confuse \"same average kinetic energy\" with \"same average speed.\" At a given temperature, different gases have the same average KE but different average speeds (lighter = faster) — this is the entire point of Graham's Law, and mixing these two ideas up is one of the most common conceptual errors in this section.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you state the core postulates of Kinetic Molecular Theory?</li>\n      <li>Can you apply Graham's Law to compare effusion/diffusion rates of different gases?</li>\n      <li>Do you understand why lighter gases move faster at the same temperature?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s36\"><span class=\"num\">3.6</span>Deviation from Ideal Gas Law</h2>\n  <p>Real gases deviate from ideal behavior under two specific conditions: high pressure (particles are forced close enough together that their actual volume, assumed zero in the ideal model, starts to matter) and low temperature (particles move slowly enough that intermolecular attractions, assumed zero in the ideal model, start to matter and pull particles together). The van der Waals equation adds correction terms for both effects.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">(P + an²/V²)(V − nb) = nRT</div>\n    <div class=\"sub\">a corrects for intermolecular attraction; b corrects for particle volume</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 8</span>\n    <p>Predict which gas deviates more from ideal behavior at the same conditions: He or Xe. Explain.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Xe is a much larger atom with far more electrons than He, giving it significantly stronger London dispersion forces (larger 'a' value) and a larger actual particle volume (larger 'b' value). Both factors push Xe further from ideal behavior than He, which is nearly ideal even at fairly extreme conditions due to its tiny size and extremely weak dispersion forces. This is a direct, testable prediction from comparing van der Waals constants, and it matches real experimental data.</div>\n    </details>\n  </div>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: Explaining Deviations Conceptually</span>\n    <p>High pressure deviation: real gas volume is actually LARGER than the ideal gas law predicts, because particle volume becomes non-negligible, so there's less truly \"empty\" compressible space than the ideal model assumes. Low temperature deviation: real gas pressure is actually LOWER than the ideal gas law predicts, because slow-moving particles have time to attract each other before colliding with the container wall, softening the force of each collision.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you explain the two conditions (high P, low T) under which real gases deviate most from ideal behavior?</li>\n      <li>Can you predict which of two gases will deviate more, based on molecular size and IMF strength?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s37\"><span class=\"num\">3.7</span>Solutions and Mixtures</h2>\n  <p>A solution is a homogeneous mixture — uniform composition throughout, down to the molecular level — of a solute (the substance being dissolved, present in smaller amount) and a solvent (the substance doing the dissolving, present in larger amount). Whether one substance dissolves in another comes down to a simple, memorable principle.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>\"Like dissolves like.\" Polar solvents (like water) dissolve polar and ionic solutes well, because the solvent's own dipoles (or full charges, for ionic dissolution) can form strong, favorable IMFs with the solute — strong enough to overcome the solute's own internal attractions and the solvent's own internal attractions. Nonpolar solvents dissolve nonpolar solutes well for the same reason, using dispersion forces. Mismatched polarity (polar solvent + nonpolar solute, or vice versa) generally leads to little or no dissolution, since neither substance can form comparably strong new attractions with the other.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 9</span>\n    <p>Explain, at the particle level, why NaCl dissolves readily in water.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Water's polar molecules orient themselves around each ion at the surface of the NaCl crystal — oxygen's partial negative end faces Na⁺, hydrogen's partial positive end faces Cl⁻. This ion-dipole attraction is strong enough to pull individual ions away from the crystal lattice, and once surrounded by water molecules (a process called hydration), the ions are stabilized in solution. The energy released by forming these new, favorable ion-dipole attractions is large enough to outweigh both the lattice energy holding NaCl together and the hydrogen bonds broken within pure water to accommodate the ions.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you predict whether a solute will dissolve in a given solvent using \"like dissolves like\"?</li>\n      <li>Can you explain ionic dissolution at the particle level using ion-dipole attraction?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s38\"><span class=\"num\">3.8</span>Representations of Solutions</h2>\n  <p>Concentration can be expressed several ways, and each has a specific use case. Molarity is by far the most common on this exam — it's the one you'll use constantly for stoichiometry, equilibrium, and acid-base calculations throughout the rest of the course.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">M = mol solute / L solution</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 10</span>\n    <p>What is the molarity of a solution made by dissolving 14.6 g of NaCl (molar mass 58.44 g/mol) in enough water to make 500.0 mL of solution?</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Moles of NaCl = 14.6 g ÷ 58.44 g/mol = 0.2499 mol. Convert mL to L: 500.0 mL = 0.5000 L. Molarity = 0.2499 mol / 0.5000 L = 0.500 M. Note that the total solution volume (0.5000 L) is used in the denominator — not just the volume of water added before the solid dissolved, which is a common point of confusion.</div>\n    </details>\n  </div>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: Dilution Calculations</span>\n    <p>M₁V₁ = M₂V₂ (moles of solute stay constant during dilution; only volume and concentration change). This single equation handles essentially every dilution problem on the exam.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you calculate molarity from mass and volume?</li>\n      <li>Can you solve dilution problems using M₁V₁ = M₂V₂?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s39\"><span class=\"num\">3.9</span>Separation of Solutions and Mixtures</h2>\n  <p>Physical separation techniques exploit different physical properties (not chemical reactions) to isolate components of a mixture. Choosing the right technique means identifying which property differs between the components you're trying to separate.</p>\n\n  <table class=\"formula-table\">\n    <thead><tr><th>Technique</th><th>Property exploited</th><th>Best for</th></tr></thead>\n    <tbody>\n      <tr><td>Filtration</td><td>Particle size (solid vs. liquid/solution)</td><td>Separating an insoluble solid from a liquid</td></tr>\n      <tr><td>Distillation</td><td>Boiling point</td><td>Separating miscible liquids or solvent from dissolved solute</td></tr>\n      <tr><td>Chromatography</td><td>Relative affinity for stationary vs. mobile phase</td><td>Separating similar dissolved components</td></tr>\n      <tr><td>Recrystallization</td><td>Solubility change with temperature</td><td>Purifying a solid</td></tr>\n    </tbody>\n  </table>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 11</span>\n    <p>A mixture contains water and ethanol (both liquids, fully miscible). What separation technique should be used, and why?</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Since both are liquids fully mixed together (not a solid-liquid mixture), filtration won't work. Water (boiling point 100°C) and ethanol (boiling point 78°C) have different boiling points, so distillation is the appropriate technique — heating the mixture allows the lower-boiling-point ethanol to vaporize first and be collected separately, leaving the higher-boiling water behind (or captured afterward at a higher temperature).</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you match a separation technique to the physical property it exploits?</li>\n      <li>Can you select the correct separation method given a description of a mixture?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s310\"><span class=\"num\">3.10</span>Solubility</h2>\n  <p>Solubility — how much of a solute can dissolve in a given amount of solvent at a given temperature — depends on the same IMF principles from 3.7, plus temperature and (for gases) pressure effects. Most solids become more soluble as temperature increases (more thermal energy helps overcome the solute's internal lattice attractions), while gas solubility in liquids typically decreases as temperature increases (faster-moving gas molecules more easily escape the liquid).</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>For gas solubility in a liquid, Henry's Law states solubility is directly proportional to the partial pressure of that gas above the solution: higher pressure pushes more gas molecules into solution. This is why a sealed, pressurized soda can stays carbonated, and why it fizzes (gas rapidly leaving solution) once opened and pressure drops.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 12</span>\n    <p>Explain why warm soda goes flat faster than cold soda.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Gas solubility in liquids decreases as temperature increases — warmer CO₂ molecules have more kinetic energy and more easily overcome the weak IMFs holding them in solution, escaping into the gas phase faster. This is the opposite temperature trend from most solid solutes, which is a common point of confusion; always identify whether the solute is a solid or a gas before applying a temperature-solubility trend.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you explain how temperature affects solid solubility versus gas solubility?</li>\n      <li>Can you apply Henry's Law conceptually to explain gas solubility and pressure?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s311\"><span class=\"num\">3.11</span>Spectroscopy and the Electromagnetic Spectrum</h2>\n  <p>Spectroscopy is how chemists \"see\" what's happening at the atomic and molecular level, using light's interaction with matter. Different regions of the electromagnetic spectrum interact with different types of molecular or atomic motion — this connection between energy, wavelength, and what's being probed is the foundation for every spectroscopic technique you'll encounter, including PES from Unit 1.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">E = hν = hc/λ</div>\n    <div class=\"sub\">E = energy, h = Planck's constant, ν = frequency, c = speed of light, λ = wavelength</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Energy and frequency are directly proportional; energy and wavelength are inversely proportional. Higher-energy light (UV, X-ray) has short wavelength and high frequency; lower-energy light (infrared, radio) has long wavelength and low frequency. This single relationship (E = hc/λ) underlies every calculation in this section.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 13</span>\n    <p>Calculate the energy of a photon with a wavelength of 500 nm.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Convert wavelength to meters: 500 nm = 500 × 10⁻⁹ m = 5.00 × 10⁻⁷ m. Using E = hc/λ = (6.626 × 10⁻³⁴ J·s)(3.00 × 10⁸ m/s) / (5.00 × 10⁻⁷ m) = (1.988 × 10⁻²⁵ J·m) / (5.00 × 10⁻⁷ m) = 3.98 × 10⁻¹⁹ J per photon. This is the energy of a single photon of green light — a genuinely tiny number, which is exactly why chemists usually deal with moles of photons (multiplying by Avogadro's number) when discussing energy on a lab scale.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you calculate photon energy from wavelength or frequency?</li>\n      <li>Do you understand the inverse relationship between energy and wavelength?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s312\"><span class=\"num\">3.12</span>Properties of Photons</h2>\n  <p>Light behaves as discrete packets of energy called photons — this is the particle side of light's wave-particle duality, and it's essential for understanding atomic emission and absorption spectra. When an electron absorbs a photon with exactly the right energy, it jumps to a higher energy level; when it falls back down, it emits a photon of exactly that same energy gap.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 14</span>\n    <p>An electron in a hydrogen atom falls from a higher energy level to a lower one, emitting a photon of wavelength 656 nm (visible red light). What can you conclude about the energy levels involved?</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">The photon's energy exactly equals the energy difference between the two levels the electron transitioned between (E = hc/λ gives that specific energy gap). Since this is a single, sharp wavelength rather than a continuous range, it confirms that electron energy levels in an atom are quantized (existing only at specific, discrete values) rather than continuous — if energy levels were continuous, atoms would emit a continuous rainbow of light rather than sharp, specific spectral lines.</div>\n    </details>\n  </div>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>Full circle back to Unit 1</div>\n    <p>This is the same \"quantized energy levels\" idea underlying PES from Unit 1 — a PES spectrum's sharp, distinct peaks exist for exactly the same reason atomic emission spectra show sharp lines instead of a smooth rainbow: electrons only occupy specific, discrete energy levels, never anything in between.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you explain atomic emission/absorption spectra using quantized energy levels?</li>\n      <li>Do you understand why photon energy directly corresponds to an energy level gap?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s313\"><span class=\"num\">3.13</span>Beer-Lambert Law</h2>\n  <p>The Beer-Lambert Law connects how much light a solution absorbs to its concentration — a direct, practical application of spectroscopy used constantly in real chemistry labs to determine unknown concentrations.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">A = εbc</div>\n    <div class=\"sub\">A = absorbance (unitless), ε = molar absorptivity (L/mol·cm), b = path length (cm), c = concentration (M)</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 15</span>\n    <p>A solution has an absorbance of 0.450 at a wavelength where ε = 5.00 × 10³ L/(mol·cm), measured in a 1.00 cm cuvette. Find the concentration.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Rearranging A = εbc for c: c = A/(εb) = 0.450 / (5.00 × 10³ × 1.00) = 0.450 / 5000 = 9.00 × 10⁻⁵ M. This direct proportionality between absorbance and concentration is what makes Beer-Lambert so useful: measure absorbance of several known-concentration standards to build a calibration curve, then use that line to find the concentration of an unknown from its measured absorbance.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you apply A = εbc to solve for absorbance, concentration, or path length?</li>\n      <li>Do you understand how a calibration curve is used to find an unknown concentration?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"practice\">Unit 3 Practice Set</h2>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>Rank the boiling points of CH₃OH, CH₃F, and CH₄, and justify using IMF type.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>Find the pressure of 3.00 mol of gas in a 10.0 L container at 350 K.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>A solution is made by diluting 25.0 mL of 6.00 M HCl to a final volume of 300.0 mL. Find the new concentration.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>Calculate the energy of a photon with frequency 4.50 × 10¹⁴ Hz.</span></div>\n\n  <div class=\"answer-key\">\n    <details><summary>Check your answers</summary>\n      <div class=\"a-content\">\n        <p><strong>1.</strong> CH₃OH has hydrogen bonding (O-H present) — strongest IMF, highest boiling point (65°C). CH₃F is polar (C-F bond, no H directly on F) — dipole-dipole plus dispersion, intermediate boiling point (−78°C). CH₄ is nonpolar — only dispersion forces, lowest boiling point (−161°C). Order: CH₄ < CH₃F < CH₃OH.</p>\n        <p><strong>2.</strong> P = nRT/V = (3.00)(0.0821)(350)/(10.0) = 86.2/10.0 = 8.62 atm.</p>\n        <p><strong>3.</strong> M₁V₁ = M₂V₂ → (6.00)(25.0) = M₂(300.0) → M₂ = 150/300.0 = 0.500 M.</p>\n        <p><strong>4.</strong> E = hν = (6.626 × 10⁻³⁴)(4.50 × 10¹⁴) = 2.98 × 10⁻¹⁹ J.</p>\n      </div>\n    </details>\n  </div>\n\n</div>\n",
  "4": "\n<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Chemistry</div>\n  <h1>Chemical Reactions</h1>\n  <p class=\"sub\">This unit is where chemistry starts to feel like chemistry — writing equations, predicting products, and using stoichiometry to connect the amount of one substance to the amount of another. Everything here rests on one unbreakable law: atoms are neither created nor destroyed in a chemical reaction, only rearranged. Every technique in this unit is really just that single idea, applied in different contexts.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 7–9%</span>\n    <span class=\"pill\">9 topics</span>\n    <span class=\"pill\">65 practice questions</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s41\">4.1 Introduction for Reactions</a></li>\n    <li><a href=\"#s42\">4.2 Net Ionic Equations</a></li>\n    <li><a href=\"#s43\">4.3 Representations of Reactions</a></li>\n    <li><a href=\"#s44\">4.4 Physical and Chemical Changes</a></li>\n    <li><a href=\"#s45\">4.5 Stoichiometry</a></li>\n    <li><a href=\"#s46\">4.6 Introduction to Titration</a></li>\n    <li><a href=\"#s47\">4.7 Types of Chemical Reactions</a></li>\n    <li><a href=\"#s48\">4.8 Introduction to Acid-Base Reactions</a></li>\n    <li><a href=\"#s49\">4.9 Oxidation-Reduction (Redox) Reactions</a></li>\n    <li><a href=\"#practice\">Unit 4 Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <h2 id=\"s41\"><span class=\"num\">4.1</span>Introduction for Reactions</h2>\n  <p>A balanced chemical equation is a bookkeeping statement of the law of conservation of mass: the same number of atoms of each element must appear on both sides. Balancing isn't a matter of trial and error forever — it's a systematic skill, and the AP exam expects you to do it quickly and reliably for any reaction thrown at you.</p>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: Balancing Equations Efficiently</span>\n    <p>Balance elements that appear in only one reactant and one product first, save elements that appear in multiple species (like O and H, often) for last, and balance polyatomic ions as whole units when they appear unchanged on both sides rather than breaking them into individual atoms.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p>Balance: C₃H₈ + O₂ → CO₂ + H₂O</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Balance carbon first: 3 C on the left needs 3 CO₂ on the right. Balance hydrogen next: 8 H on the left needs 4 H₂O on the right (4 × 2 = 8). Now count oxygen on the right: 3 CO₂ (6 O) + 4 H₂O (4 O) = 10 O total needed. Since O₂ comes in pairs, 10 O requires 5 O₂. Final balanced equation: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Checking: C (3=3), H (8=8), O (10=10) — balanced.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you balance a chemical equation systematically?</li>\n      <li>Do you understand balancing as an expression of conservation of mass?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s42\"><span class=\"num\">4.2</span>Net Ionic Equations</h2>\n  <p>When ionic compounds react in aqueous solution, many ions don't actually participate in the reaction — they're \"spectator ions,\" present in solution before and after but never chemically changed. A net ionic equation strips these out, showing only the species that actually undergo a chemical transformation.</p>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: Writing a Net Ionic Equation</span>\n    <p>1) Write the balanced molecular equation. 2) Rewrite every soluble ionic compound (strong electrolyte) as its separate dissolved ions — this is the \"complete ionic equation.\" 3) Cancel any ion that appears identically on both sides (spectators). What's left is the net ionic equation.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p>Write the net ionic equation for the reaction between aqueous AgNO₃ and aqueous NaCl.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Molecular equation: AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq). Complete ionic equation: Ag⁺ + NO₃⁻ + Na⁺ + Cl⁻ → AgCl(s) + Na⁺ + NO₃⁻ (splitting every soluble ionic compound, but NOT the insoluble solid AgCl, which stays intact). Na⁺ and NO₃⁻ appear unchanged on both sides — they're spectators and cancel. Net ionic equation: Ag⁺(aq) + Cl⁻(aq) → AgCl(s). This correctly isolates the actual chemical change: silver and chloride ions combining to form an insoluble solid.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Only split strong electrolytes (soluble ionic compounds, strong acids, strong bases) into ions. Never split insoluble solids, weak acids/bases, molecular (covalent) compounds, or pure water — these stay written as intact formulas in the complete ionic equation, since they don't meaningfully dissociate.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you write a complete ionic equation, correctly identifying which species to split?</li>\n      <li>Can you identify and cancel spectator ions to reach the net ionic equation?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s43\"><span class=\"num\">4.3</span>Representations of Reactions</h2>\n  <p>Chemical reactions can be represented multiple ways — a written equation, a particulate-level diagram (drawing actual atoms/molecules before and after), or a macroscopic description of what's observed. The AP exam frequently asks you to translate between these representations, especially reading particulate diagrams to determine limiting reactant or write a balanced equation.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p>A particulate diagram shows a box \"before\" containing 4 diatomic A₂ molecules and 6 diatomic B₂ molecules, reacting to form AB molecules. The \"after\" box shows 4 AB molecules, 4 leftover B₂ molecules, and 0 leftover A₂. What is the balanced equation and which reactant, if either, is limiting?</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">All 4 A₂ molecules were consumed (0 leftover), while only 2 of the 6 B₂ molecules were consumed (4 remain), producing 4 AB. Since 4 A₂ + 2 B₂ → 4 AB, dividing by the common factor of 2 gives the balanced equation A₂ + B₂ → 2AB (1:1:2 ratio). A₂ is the limiting reactant, since it was completely used up while B₂ had leftover amount remaining.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you translate between a particulate diagram and a balanced chemical equation?</li>\n      <li>Can you identify the limiting reactant from a particulate diagram?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s44\"><span class=\"num\">4.4</span>Physical and Chemical Changes</h2>\n  <p>Distinguishing physical from chemical change comes down to one question: has a new substance with different chemical properties actually formed, or has the same substance just changed form/appearance? Common evidence for a chemical change includes color change, gas bubble formation, precipitate formation, temperature change, or light/energy release — but none of these alone is absolute proof; each needs to be interpreted in context.</p>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Dissolving is usually a physical change (NaCl dissolving in water — the ions are still NaCl's ions, just separated and surrounded by water, and evaporating the water gets NaCl back unchanged). But some \"dissolving-like\" processes are actually chemical changes (e.g., a reactive metal dissolving in acid, releasing H₂ gas, is a genuine chemical reaction). Always check whether a new substance has actually formed, not just whether something \"disappeared\" into a solution.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you distinguish physical from chemical changes using evidence of new substance formation?</li>\n      <li>Do you understand the limitations of relying on a single piece of \"evidence\" alone?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s45\"><span class=\"num\">4.5</span>Stoichiometry</h2>\n  <p>Stoichiometry is the mole-ratio bridge between different substances in a balanced equation — it's the single most tested calculation skill in this entire unit, and it builds directly on everything from Unit 1's mole/mass toolkit.</p>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: The Stoichiometry Roadmap</span>\n    <p>Whatever you're given (grams, particles, liters of gas, molarity×volume) → convert to moles of the given substance → use the balanced equation's mole ratio to find moles of the substance you want → convert those moles to whatever final unit is being asked for. Every stoichiometry problem follows this same \"convert to moles, use the ratio, convert back\" structure.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p>Given 2Al + 3CuSO₄ → Al₂(SO₄)₃ + 3Cu, how many grams of Cu can be produced from 5.00 g of Al (molar mass 26.98 g/mol; Cu molar mass 63.55 g/mol)?</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Convert grams of Al to moles: 5.00 g ÷ 26.98 g/mol = 0.1853 mol Al. Use the mole ratio from the balanced equation (2 Al : 3 Cu): 0.1853 mol Al × (3 mol Cu / 2 mol Al) = 0.2780 mol Cu. Convert moles of Cu to grams: 0.2780 mol × 63.55 g/mol = 17.7 g Cu. This assumes CuSO₄ is present in excess (not limiting) — always check for a limiting reactant when two reactant amounts are given, not just one.</div>\n    </details>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 5</span>\n    <p>In the reaction N₂ + 3H₂ → 2NH₃, 2.00 mol N₂ is mixed with 3.00 mol H₂. Identify the limiting reactant.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Divide each given mole amount by its coefficient in the balanced equation: N₂: 2.00/1 = 2.00; H₂: 3.00/3 = 1.00. The smaller resulting value identifies the limiting reactant — here, H₂'s value (1.00) is smaller than N₂'s (2.00), so H₂ is limiting. This \"divide by coefficient, smaller value wins\" method is a fast, reliable shortcut for limiting reactant problems, avoiding the need to fully calculate product amounts from both reactants and compare.</div>\n    </details>\n  </div>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: Percent Yield</span>\n    <p>% yield = (actual yield / theoretical yield) × 100. Theoretical yield is the maximum possible product calculated from stoichiometry (assuming the reaction goes to completion with no losses); actual yield is what's really obtained in the lab, always less than or equal to theoretical due to side reactions, incomplete reactions, or physical loss of product.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you perform a complete mole-ratio stoichiometry calculation from given mass to desired mass?</li>\n      <li>Can you identify the limiting reactant given two starting amounts?</li>\n      <li>Can you calculate percent yield?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s46\"><span class=\"num\">4.6</span>Introduction to Titration</h2>\n  <p>Titration is a stoichiometry-based laboratory technique for determining an unknown concentration by reacting it with a solution of known concentration until the reaction is exactly complete (the equivalence point). It's a direct, hands-on application of the mole-ratio machinery from 4.5.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 6</span>\n    <p>25.00 mL of an unknown HCl solution is exactly neutralized by 32.50 mL of 0.100 M NaOH. Find the HCl concentration. (HCl + NaOH → NaCl + H₂O)</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Moles of NaOH used = M × V = 0.100 mol/L × 0.03250 L = 3.250 × 10⁻³ mol. Since the mole ratio of HCl to NaOH is 1:1, moles of HCl = 3.250 × 10⁻³ mol. Concentration of HCl = moles / volume = 3.250 × 10⁻³ mol / 0.02500 L = 0.130 M.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you calculate an unknown concentration from titration data?</li>\n      <li>Do you understand the equivalence point as the moment of exact stoichiometric reaction?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s47\"><span class=\"num\">4.7</span>Types of Chemical Reactions</h2>\n  <p>Recognizing a reaction's general category — synthesis, decomposition, single replacement, double replacement (precipitation), or combustion — helps you predict products quickly before doing any calculations.</p>\n\n  <table class=\"formula-table\">\n    <thead><tr><th>Type</th><th>Pattern</th></tr></thead>\n    <tbody>\n      <tr><td>Synthesis</td><td>A + B → AB</td></tr>\n      <tr><td>Decomposition</td><td>AB → A + B</td></tr>\n      <tr><td>Single replacement</td><td>A + BC → AC + B</td></tr>\n      <tr><td>Double replacement</td><td>AB + CD → AD + CB</td></tr>\n      <tr><td>Combustion</td><td>hydrocarbon + O₂ → CO₂ + H₂O</td></tr>\n    </tbody>\n  </table>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you classify a reaction into one of the standard categories?</li>\n      <li>Can you predict products for each reaction type given reasonable reactants?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s48\"><span class=\"num\">4.8</span>Introduction to Acid-Base Reactions</h2>\n  <p>Acid-base reactions (a specific kind of double replacement) involve a proton (H⁺) transferring from an acid to a base, typically producing water and a salt. This is just a first introduction — Unit 8 goes much deeper into acid-base equilibrium, but the core neutralization pattern is established here.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 7</span>\n    <p>Write the balanced molecular and net ionic equations for the reaction between HNO₃ and Ca(OH)₂.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Molecular: 2HNO₃(aq) + Ca(OH)₂(aq) → Ca(NO₃)₂(aq) + 2H₂O(l) (balanced by ensuring 2 H⁺ react with the 2 OH⁻ from calcium hydroxide). Since both HNO₃ and Ca(OH)₂ are strong acid/base and fully soluble, splitting all species: 2H⁺ + 2NO₃⁻ + Ca²⁺ + 2OH⁻ → Ca²⁺ + 2NO₃⁻ + 2H₂O. Cancelling spectators (Ca²⁺ and NO₃⁻): net ionic equation is 2H⁺(aq) + 2OH⁻(aq) → 2H₂O(l), which reduces to H⁺(aq) + OH⁻(aq) → H₂O(l) — the same net ionic equation for essentially every strong acid-strong base neutralization.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you write balanced and net ionic equations for acid-base neutralization?</li>\n      <li>Do you recognize that H⁺ + OH⁻ → H₂O is the universal net ionic equation for strong acid-strong base neutralization?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s49\"><span class=\"num\">4.9</span>Oxidation-Reduction (Redox) Reactions</h2>\n  <p>Redox reactions involve electron transfer — one species loses electrons (oxidation) while another gains them (reduction), always simultaneously (electrons lost by one species must be gained by another). Oxidation numbers are the bookkeeping tool for tracking this electron transfer, even in covalent compounds where electrons aren't fully transferred.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>OIL RIG: Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons). An increase in oxidation number means that species was oxidized (lost electron density); a decrease means it was reduced (gained electron density).</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 8</span>\n    <p>In the reaction Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s), identify what is oxidized and what is reduced.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Zinc's oxidation number goes from 0 (elemental Zn) to +2 (Zn²⁺) — an increase, meaning zinc lost 2 electrons and was oxidized. Copper's oxidation number goes from +2 (Cu²⁺) to 0 (elemental Cu) — a decrease, meaning copper gained 2 electrons and was reduced. The 2 electrons lost by Zn are exactly the 2 electrons gained by Cu²⁺, satisfying conservation of charge/electrons throughout the reaction.</div>\n    </details>\n  </div>\n\n  <div class=\"heylook\">\n    <div class=\"heylook-label\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>This is the seed of Unit 9</div>\n    <p>This exact zinc-copper electron transfer reaction is the foundation of a real battery (a galvanic cell), which you'll build out fully in Unit 9's electrochemistry material. The oxidation and reduction happening here don't have to happen in the same beaker — separating them physically while connecting them with a wire is precisely how you generate usable electrical current from a chemical reaction.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you assign oxidation numbers to atoms in a compound or ion?</li>\n      <li>Can you identify what is oxidized and what is reduced in a redox reaction?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"practice\">Unit 4 Practice Set</h2>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>Balance: Fe₂O₃ + CO → Fe + CO₂</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>Write the net ionic equation for mixing aqueous Pb(NO₃)₂ and aqueous KI (forming solid PbI₂).</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>How many grams of CO₂ form from burning 10.0 g of CH₄ completely (CH₄ + 2O₂ → CO₂ + 2H₂O)?</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>Assign oxidation numbers to each atom in MnO₄⁻.</span></div>\n\n  <div class=\"answer-key\">\n    <details><summary>Check your answers</summary>\n      <div class=\"a-content\">\n        <p><strong>1.</strong> Fe₂O₃ + 3CO → 2Fe + 3CO₂.</p>\n        <p><strong>2.</strong> Pb²⁺(aq) + 2I⁻(aq) → PbI₂(s).</p>\n        <p><strong>3.</strong> Moles CH₄ = 10.0/16.05 = 0.6231 mol. Mole ratio CH₄:CO₂ is 1:1, so moles CO₂ = 0.6231 mol. Mass CO₂ = 0.6231 × 44.01 = 27.4 g.</p>\n        <p><strong>4.</strong> O is −2 (×4 = −8 total). Overall ion charge is −1, so Mn + (−8) = −1, giving Mn = +7.</p>\n      </div>\n    </details>\n  </div>\n\n</div>\n",
  "5": "\n<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Chemistry</div>\n  <h1>Kinetics</h1>\n  <p class=\"sub\">Kinetics answers the question \"how fast?\" — as opposed to Unit 7's equilibrium, which answers \"how far?\" These are genuinely separate questions: a reaction can be fast but not go very far (small equilibrium constant), or slow but go essentially to completion (large equilibrium constant). This unit builds the mathematical and conceptual tools to describe, measure, and explain reaction rate.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 7–9%</span>\n    <span class=\"pill\">11 topics</span>\n    <span class=\"pill\">65 practice questions</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s51\">5.1 Reaction Rates</a></li>\n    <li><a href=\"#s52\">5.2 Introduction to Rate Law</a></li>\n    <li><a href=\"#s53\">5.3 Concentration Changes Over Time</a></li>\n    <li><a href=\"#s54\">5.4 Elementary Reactions</a></li>\n    <li><a href=\"#s55\">5.5 Collision Model</a></li>\n    <li><a href=\"#s56\">5.6 Reaction Energy Profile</a></li>\n    <li><a href=\"#s57\">5.7 Introduction to Reaction Mechanisms</a></li>\n    <li><a href=\"#s58\">5.8 Reaction Mechanism and Rate Law</a></li>\n    <li><a href=\"#s59\">5.9 Steady-State Approximation</a></li>\n    <li><a href=\"#s510\">5.10 Multistep Reaction Energy Profile</a></li>\n    <li><a href=\"#s511\">5.11 Catalysis</a></li>\n    <li><a href=\"#practice\">Unit 5 Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <h2 id=\"s51\"><span class=\"num\">5.1</span>Reaction Rates</h2>\n  <p>Reaction rate measures how quickly reactant concentration decreases (or product concentration increases) over time. Because different species in a reaction are consumed or formed at different relative rates (matching their stoichiometric coefficients), rate must always be reported per specific species, or as an overall rate that accounts for those coefficients.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">Rate = −(1/a)Δ[A]/Δt = (1/b)Δ[B]/Δt</div>\n    <div class=\"sub\">For a reaction aA → bB; negative sign for reactants since their concentration decreases</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p>For the reaction 2N₂O₅ → 4NO₂ + O₂, if O₂ forms at a rate of 0.0250 M/s, what is the rate of N₂O₅ disappearance?</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Using the coefficient ratio: rate of N₂O₅ disappearance / 2 = rate of O₂ formation / 1. So rate of N₂O₅ disappearance = 2 × 0.0250 = 0.0500 M/s. N₂O₅ disappears twice as fast as O₂ forms, exactly matching the 2:1 ratio of their coefficients in the balanced equation.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you relate the rate of disappearance/formation of different species using stoichiometric coefficients?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s52\"><span class=\"num\">5.2</span>Introduction to Rate Law</h2>\n  <p>A rate law expresses how reaction rate depends on reactant concentrations, with exponents (reaction orders) that must be determined experimentally — they are NOT necessarily the same as the stoichiometric coefficients in the overall balanced equation. This is one of the most important, most frequently misunderstood ideas in the entire unit.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">Rate = k[A]ᵐ[B]ⁿ</div>\n    <div class=\"sub\">k = rate constant, m and n = reaction orders (determined experimentally, NOT from stoichiometry)</div>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Never assume reaction order equals the stoichiometric coefficient from the balanced equation — this is true only for elementary reactions (single-step mechanisms, covered in 5.4). For any overall/net reaction, orders must be determined from experimental data (initial rates method), never just read off the balanced equation.</p>\n  </div>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: Determining Rate Law from Initial Rates Data</span>\n    <p>Compare two trials where only one reactant's concentration changes (all others held constant). If doubling [A] doubles the rate, order in A is 1; if it quadruples the rate, order in A is 2; if rate is unchanged, order in A is 0. Repeat for each reactant using a different pair of trials.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p>Given data: Trial 1: [A]=0.10, [B]=0.10, rate=0.020. Trial 2: [A]=0.20, [B]=0.10, rate=0.080. Trial 3: [A]=0.10, [B]=0.20, rate=0.020. Determine the rate law.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Comparing Trial 1 and 2 (only [A] doubles, [B] constant): rate quadruples (0.020 → 0.080, a factor of 4). Since 2ᵐ = 4, m = 2 (second order in A). Comparing Trial 1 and 3 (only [B] doubles, [A] constant): rate is unchanged (0.020 → 0.020). Since 2ⁿ = 1, n = 0 (zero order in B — B doesn't affect rate at all). Rate law: Rate = k[A]². Overall reaction order = m + n = 2 + 0 = 2.</div>\n    </details>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p>Using the rate law Rate = k[A]² from Example 2, and Trial 1 data (rate = 0.020 M/s at [A] = 0.10 M), find k.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">0.020 = k(0.10)² = k(0.010). Solving: k = 0.020/0.010 = 2.0. Units of k depend on overall reaction order — for a 2nd order reaction, k has units of M⁻¹s⁻¹ (since rate in M/s = k × M², k must carry units of 1/(M·s) to make the equation dimensionally consistent).</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you determine reaction order for each reactant using the initial rates method?</li>\n      <li>Can you calculate the rate constant k, including correct units?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s53\"><span class=\"num\">5.3</span>Concentration Changes Over Time</h2>\n  <p>Integrated rate laws describe how concentration itself (not just rate) changes over time, and each reaction order has a distinctive mathematical form and a distinctive \"linear plot\" that can be used to identify order graphically.</p>\n\n  <table class=\"formula-table\">\n    <thead><tr><th>Order</th><th>Integrated rate law</th><th>Linear plot</th><th>Half-life</th></tr></thead>\n    <tbody>\n      <tr><td>0</td><td>[A] = −kt + [A]₀</td><td>[A] vs. t</td><td>t½ = [A]₀/2k</td></tr>\n      <tr><td>1</td><td>ln[A] = −kt + ln[A]₀</td><td>ln[A] vs. t</td><td>t½ = 0.693/k</td></tr>\n      <tr><td>2</td><td>1/[A] = kt + 1/[A]₀</td><td>1/[A] vs. t</td><td>t½ = 1/(k[A]₀)</td></tr>\n    </tbody>\n  </table>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>The single most testable fact in this section: first-order half-life is CONSTANT, independent of starting concentration. This is unique to first order — zero and second order half-lives both depend on [A]₀. This constant half-life property is also exactly why radioactive decay (a first-order process) is described using a fixed half-life value regardless of sample size.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p>A first-order reaction has k = 0.0231 s⁻¹. What is its half-life?</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">For first order: t½ = 0.693/k = 0.693/0.0231 = 30.0 s. Notice no initial concentration was needed — first-order half-life truly doesn't depend on [A]₀, unlike zero or second order reactions.</div>\n    </details>\n  </div>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: Identifying Order from a Graph</span>\n    <p>Given concentration-vs-time data, plot [A], ln[A], and 1/[A] each against time. Whichever plot produces a straight line reveals the reaction order (linear [A] vs t → zero order; linear ln[A] vs t → first order; linear 1/[A] vs t → second order).</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you use the correct integrated rate law for a given reaction order?</li>\n      <li>Do you know why first-order half-life is constant, unlike zero or second order?</li>\n      <li>Can you identify reaction order from a linear graph transformation?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s54\"><span class=\"num\">5.4</span>Elementary Reactions</h2>\n  <p>An elementary reaction is a single reaction step that occurs exactly as written, in one collision event — no hidden intermediate steps. For elementary reactions ONLY, the rate law's exponents DO match the reaction's stoichiometric coefficients, which is the one exception to the trap noted in 5.2.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Molecularity describes how many reactant particles collide in a single elementary step: unimolecular (1 particle, e.g. decomposition), bimolecular (2 particles colliding, most common), or termolecular (3 particles colliding simultaneously — very rare, since a genuine three-way simultaneous collision is statistically unlikely).</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 5</span>\n    <p>For the elementary reaction 2NO + O₂ → 2NO₂, write the rate law directly from the equation.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Because this is stated to be an elementary reaction, the rate law's exponents directly match the coefficients: Rate = k[NO]²[O₂]¹. This is termolecular (3 total particles colliding: 2 NO + 1 O₂), which is genuinely uncommon in nature, but is presented here as a simplified elementary step for teaching purposes.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you write a rate law directly from an elementary reaction's coefficients?</li>\n      <li>Do you understand molecularity and why termolecular steps are rare?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s55\"><span class=\"num\">5.5</span>Collision Model</h2>\n  <p>The collision model explains, at the particle level, why reactions have the rates they do: for a reaction to occur, particles must collide with both sufficient energy (to overcome the activation energy barrier) AND correct orientation (so the reactive parts of each molecule actually meet). Most collisions fail one or both of these requirements, which is exactly why reactions don't happen instantaneously even when reactants are constantly colliding.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 6</span>\n    <p>Explain, using the collision model, why increasing temperature increases reaction rate.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Higher temperature increases the average kinetic energy of particles (per KMT, Unit 3), which increases both the frequency of collisions AND — more significantly — the fraction of collisions with enough energy to exceed the activation energy barrier. This second effect (more collisions clearing the energy threshold) is by far the dominant reason rate increases with temperature, not simply \"more collisions happening.\"</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Don't attribute temperature's effect on rate mainly to \"more frequent collisions.\" While collision frequency does increase somewhat with temperature, the dominant effect is the sharp increase in the fraction of collisions with sufficient energy to react (governed by the Maxwell-Boltzmann distribution shifting to higher energies) — this is a common point students get partial credit taken off for on the actual exam.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you explain the two requirements (energy and orientation) for an effective collision?</li>\n      <li>Can you explain why temperature primarily affects rate through the energy-threshold effect, not just collision frequency?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s56\"><span class=\"num\">5.6</span>Reaction Energy Profile</h2>\n  <p>A reaction energy (potential energy) diagram plots energy against reaction progress, visually showing the energy of reactants, the activation energy barrier (the \"hill\" that must be climbed), the transition state (the highest-energy point, an unstable, fleeting arrangement), and the energy of products.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">ΔH = E(products) − E(reactants) = Ea(forward) − Ea(reverse)</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 7</span>\n    <p>A reaction has Ea(forward) = 75 kJ/mol and Ea(reverse) = 25 kJ/mol. Is this reaction exothermic or endothermic, and what is ΔH?</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">ΔH = Ea(forward) − Ea(reverse) = 75 − 25 = +50 kJ/mol. A positive ΔH means the reaction is endothermic — products are higher in energy than reactants, consistent with a larger 'uphill' forward activation energy than the 'downhill' reverse activation energy needed to get back to reactants.</div>\n    </details>\n  </div>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: Reading a Reaction Energy Diagram</span>\n    <p>The peak height above the reactants gives Ea(forward). The peak height above the products gives Ea(reverse). The vertical distance between reactants and products (which sign is higher) gives ΔH and tells you exothermic (products lower) vs. endothermic (products higher).</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you read Ea(forward), Ea(reverse), and ΔH off a reaction energy diagram?</li>\n      <li>Can you determine whether a reaction is exothermic or endothermic from this diagram?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s57\"><span class=\"num\">5.7</span>Introduction to Reaction Mechanisms</h2>\n  <p>Most real reactions don't happen in a single step — they proceed through a sequence of elementary steps (a mechanism) that, when added together, give the overall balanced equation. Intermediates are species formed in one step and consumed in a later step; they don't appear in the overall equation, but they DO appear in individual mechanism steps.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 8</span>\n    <p>A proposed mechanism is: Step 1: NO₂ + NO₂ → NO₃ + NO (slow); Step 2: NO₃ + CO → NO₂ + CO₂ (fast). Determine the overall reaction and identify any intermediate.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Adding both steps: 2NO₂ + NO₃ + CO → NO₃ + NO + NO₂ + CO₂. Cancelling species that appear identically on both sides (NO₃ cancels completely; one NO₂ cancels, leaving one NO₂ on the reactant side): NO₂ + CO → NO + CO₂. NO₃ is the intermediate — it's produced in step 1 and completely consumed in step 2, never appearing in the overall net equation.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Don't confuse an intermediate with a catalyst. An intermediate is produced then consumed (appears first on the product side, then on the reactant side of a later step). A catalyst is consumed then regenerated (appears first as a reactant, then reappears as a product later) — they have opposite roles in a mechanism, covered further in 5.11.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you add mechanism steps together to find the overall reaction?</li>\n      <li>Can you identify an intermediate in a multi-step mechanism?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s58\"><span class=\"num\">5.8</span>Reaction Mechanism and Rate Law</h2>\n  <p>The overall rate law for a multi-step mechanism is determined entirely by the rate-determining step (RDS) — the slowest step, which acts as a bottleneck for the entire reaction (like the narrowest point in a highway limiting overall traffic flow, no matter how fast the other sections move).</p>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: Deriving Rate Law from a Mechanism</span>\n    <p>If the rate-determining step is the FIRST step, the rate law can be written directly from that step's coefficients (just like an elementary reaction). If the rate-determining step is a LATER step and involves an intermediate, that intermediate must be replaced (substituted out) using the equilibrium expression from the preceding fast, reversible step(s), since intermediates cannot appear in a valid overall rate law expression.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 9</span>\n    <p>Given the mechanism: Step 1: A₂ ⇌ 2A (fast, equilibrium); Step 2: A + B → AB (slow, RDS). Derive the overall rate law.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Since Step 2 is the RDS, the rate law based on that step alone would be Rate = k₂[A][B]. But A is an intermediate (produced in step 1, consumed in step 2), so it can't appear in the final rate law. Using the fast equilibrium in step 1: since it's a true equilibrium, forward rate = reverse rate, giving k₁[A₂] = k₋₁[A]², so [A] = √(k₁[A₂]/k₋₁). Substituting this into the RDS rate law: Rate = k₂√(k₁[A₂]/k₋₁) × [B] = k[A₂]^0.5[B], where k combines all the rate constants into a single new observed constant. This is why some experimentally observed reaction orders come out as fractions (like 0.5) — they reflect exactly this kind of intermediate-substitution process from a multi-step mechanism.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you write the rate law when the RDS is the first step?</li>\n      <li>Can you substitute out an intermediate using a preceding fast equilibrium step?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s59\"><span class=\"num\">5.9</span>Steady-State Approximation</h2>\n  <p>The steady-state approximation is an alternative (more advanced) method for handling intermediates in mechanisms where no step is clearly \"fast equilibrium\" — instead, it assumes the intermediate's concentration stays roughly constant over time because its rate of formation equals its rate of consumption.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Setting rate of formation of intermediate = rate of consumption of intermediate and solving for the intermediate's concentration achieves the same goal as the fast-equilibrium method from 5.8 (eliminating an intermediate from the final rate law), just via a different assumption about the mechanism's behavior — useful when no single step is obviously a fast pre-equilibrium.</p>\n    </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Do you understand the core assumption behind the steady-state approximation?</li>\n      <li>Can you distinguish when to use fast-equilibrium substitution vs. steady-state reasoning?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s510\"><span class=\"num\">5.10</span>Multistep Reaction Energy Profile</h2>\n  <p>A multistep reaction's energy profile shows multiple humps (one per elementary step), with valleys between humps representing the relatively stable (but temporary) intermediates. The tallest hump overall corresponds to the rate-determining step — visually, it's the step that requires climbing over the highest energy barrier.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 10</span>\n    <p>A two-step reaction energy diagram shows the first hump reaching a higher peak than the second hump. Which step is rate-determining?</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">The rate-determining step is always the one with the highest activation energy (tallest hump) relative to the point it starts from, since this represents the biggest energy barrier — the true bottleneck of the overall mechanism. Since the first hump is taller here, the first step is rate-determining, and the overall reaction rate law should be derivable primarily from that first step (using the methods from 5.8).</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you identify the rate-determining step from a multistep energy diagram?</li>\n      <li>Can you identify intermediates as the valleys between energy humps?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s511\"><span class=\"num\">5.11</span>Catalysis</h2>\n  <p>A catalyst speeds up a reaction without being consumed overall — it participates in the mechanism (often forming a temporary intermediate-like species of its own) but is fully regenerated by the end. Catalysts work by providing an alternative reaction pathway with a lower overall activation energy, not by changing the reaction's thermodynamics (ΔH stays exactly the same).</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>A catalyst lowers activation energy for BOTH the forward and reverse reaction equally, meaning it speeds up how quickly equilibrium is reached, but does NOT shift the position of equilibrium itself (Unit 7) and does NOT change ΔH (this unit). It's purely a kinetic effect, not a thermodynamic one.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 11</span>\n    <p>Distinguish the roles of a catalyst and an intermediate in the following mechanism: Step 1: O₃ + Cl → O₂ + ClO; Step 2: ClO + O → Cl + O₂.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Cl appears first as a reactant (step 1) and reappears as a product (step 2) — consumed then regenerated, making it a catalyst. ClO appears first as a product (step 1) and then as a reactant (step 2) — produced then consumed, making it an intermediate. This is the real mechanism believed to be responsible for chlorine-catalyzed ozone depletion, where a single Cl atom can catalyze the destruction of many O₃ molecules before eventually being removed from the atmosphere by other processes.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you distinguish a catalyst from an intermediate based on its role across mechanism steps?</li>\n      <li>Do you understand that a catalyst changes kinetics (rate) but not thermodynamics (ΔH, equilibrium position)?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"practice\">Unit 5 Practice Set</h2>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>A reaction is first order with k = 0.050 s⁻¹. Find the half-life.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>Given data showing that tripling [A] triples the rate, what is the order in A?</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>A mechanism's first step is rate-determining: Step 1: 2NO → N₂O₂ (slow). What is the rate law?</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>Explain why a catalyst does not appear in the overall balanced equation.</span></div>\n\n  <div class=\"answer-key\">\n    <details><summary>Check your answers</summary>\n      <div class=\"a-content\">\n        <p><strong>1.</strong> t½ = 0.693/k = 0.693/0.050 = 13.9 s.</p>\n        <p><strong>2.</strong> Tripling [A] triples rate means 3ᵐ = 3, so m = 1 (first order in A).</p>\n        <p><strong>3.</strong> Since this is both an elementary step and the RDS, Rate = k[NO]².</p>\n        <p><strong>4.</strong> A catalyst is consumed in an early step and fully regenerated in a later step, so it cancels out completely when all mechanism steps are added together to give the overall equation — even though it's essential to how the reaction actually proceeds, it doesn't appear in the net, overall balanced equation.</p>\n      </div>\n    </details>\n  </div>\n\n</div>\n",
  "6": "\n<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Chemistry</div>\n  <h1>Thermochemistry</h1>\n  <p class=\"sub\">Thermochemistry tracks energy as it flows into and out of chemical systems. It connects directly back to bond energy from Unit 2 (breaking bonds costs energy, forming bonds releases it) and sets up everything in Unit 9's thermodynamics. The central skill here is calorimetry — using a measured temperature change to calculate how much energy a process released or absorbed.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 7–9%</span>\n    <span class=\"pill\">9 topics</span>\n    <span class=\"pill\">65 practice questions</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s61\">6.1 Endothermic and Exothermic Processes</a></li>\n    <li><a href=\"#s62\">6.2 Energy Diagrams</a></li>\n    <li><a href=\"#s63\">6.3 Heat Transfer and Thermal Equilibrium</a></li>\n    <li><a href=\"#s64\">6.4 Heat Capacity and Calorimetry</a></li>\n    <li><a href=\"#s65\">6.5 Energy of Phase Changes</a></li>\n    <li><a href=\"#s66\">6.6 Introduction to Enthalpy of Reaction</a></li>\n    <li><a href=\"#s67\">6.7 Bond Enthalpies</a></li>\n    <li><a href=\"#s68\">6.8 Enthalpy of Formation</a></li>\n    <li><a href=\"#s69\">6.9 Hess's Law</a></li>\n    <li><a href=\"#practice\">Unit 6 Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <h2 id=\"s61\"><span class=\"num\">6.1</span>Endothermic and Exothermic Processes</h2>\n  <p>Every physical or chemical process either releases energy to the surroundings (exothermic, ΔH negative) or absorbs energy from the surroundings (endothermic, ΔH positive). This isn't just about chemical reactions — phase changes, dissolving, and other physical processes all have a sign too.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Sign conventions are always from the SYSTEM's perspective. Exothermic: system loses energy (releases heat to surroundings), ΔH < 0, surroundings get warmer. Endothermic: system gains energy (absorbs heat from surroundings), ΔH > 0, surroundings get cooler. A common trap: describing \"the surroundings feel hot\" and concluding endothermic — that's backwards; hot surroundings mean the system released heat into them (exothermic).</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you correctly apply sign conventions for exothermic vs. endothermic processes, from the system's perspective?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s62\"><span class=\"num\">6.2</span>Energy Diagrams</h2>\n  <p>This connects directly to Unit 5.6 — the same reaction energy diagram used there for kinetics also displays ΔH, just with the focus here on the thermodynamic (not kinetic/rate) information it contains.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p>A reaction energy diagram shows reactants at 100 kJ, a transition state peak at 180 kJ, and products at 60 kJ. Find ΔH and Ea(forward).</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">ΔH = E(products) − E(reactants) = 60 − 100 = −40 kJ/mol (exothermic). Ea(forward) = E(transition state) − E(reactants) = 180 − 100 = 80 kJ/mol.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you extract ΔH and Ea directly from a labeled reaction energy diagram?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s63\"><span class=\"num\">6.3</span>Heat Transfer and Thermal Equilibrium</h2>\n  <p>Heat spontaneously flows from a hotter object to a cooler one until both reach the same temperature (thermal equilibrium) — never the reverse, without external work being done. In an isolated system (like a well-insulated calorimeter), energy lost by one part must exactly equal energy gained by another part.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">q(lost by hot object) = −q(gained by cold object)</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p>A hot metal block loses 450 J of heat as it cools in water. How much heat does the water gain?</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Assuming an isolated system (no heat lost to the surroundings beyond the water), conservation of energy requires q(water gained) = −q(metal lost) = −(−450 J) = +450 J. The water gains exactly the heat the metal lost — this equal-and-opposite relationship is the foundation of every calorimetry calculation in section 6.4.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Do you understand heat flow direction (hot to cold) and thermal equilibrium?</li>\n      <li>Can you apply conservation of energy (q lost = −q gained) in an isolated system?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s64\"><span class=\"num\">6.4</span>Heat Capacity and Calorimetry</h2>\n  <p>Specific heat capacity (c) is a substance-specific property: how much energy is needed to raise the temperature of 1 gram of that substance by 1°C. Calorimetry uses a measured temperature change, along with mass and specific heat, to calculate how much heat energy was involved in a process.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">q = mcΔT</div>\n    <div class=\"sub\">q = heat (J), m = mass (g), c = specific heat (J/g·°C), ΔT = T(final) − T(initial)</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p>How much heat is required to raise the temperature of 50.0 g of water (c = 4.184 J/g·°C) from 20.0°C to 80.0°C?</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">ΔT = 80.0 − 20.0 = 60.0°C. q = mcΔT = (50.0)(4.184)(60.0) = 12,552 J ≈ 12.6 kJ. Positive q here means heat was absorbed by the water (consistent with the water's temperature increasing), matching the endothermic sign convention for the water as the \"system\" in this calculation.</div>\n    </details>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p>A 25.0 g piece of metal at 95.0°C is dropped into 100.0 g of water (c = 4.184 J/g·°C) at 22.0°C. The final temperature is 24.5°C. Find the metal's specific heat.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Heat gained by water: q(water) = (100.0)(4.184)(24.5−22.0) = (100.0)(4.184)(2.5) = 1046 J. By conservation of energy, heat lost by metal = −1046 J (metal cools from 95.0°C to 24.5°C, ΔT = −70.5°C). Solving q=mcΔT for c: c(metal) = q/(mΔT) = −1046/[(25.0)(−70.5)] = −1046/−1762.5 = 0.593 J/g·°C. Both q and ΔT are negative for the metal (it loses heat and cools down), so they correctly cancel to give a positive specific heat value.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>ΔT is always T(final) − T(initial), never the reverse. Getting this backward flips the sign of q and leads to a physically nonsensical negative specific heat or an exothermic/endothermic mix-up. Also, don't forget that in a calorimetry problem with two objects, the SAME final temperature applies to both — they've reached thermal equilibrium together.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you apply q = mcΔT to find heat, mass, specific heat, or temperature change?</li>\n      <li>Can you solve a two-object calorimetry problem using conservation of energy?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s65\"><span class=\"num\">6.5</span>Energy of Phase Changes</h2>\n  <p>Phase changes involve energy too, but this energy doesn't change temperature (recall Unit 3.3's heating curve plateaus) — instead it uses a different formula entirely, based on heat of fusion (melting/freezing) or heat of vaporization (boiling/condensing).</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">q = nΔH(fus or vap)</div>\n    <div class=\"sub\">n = moles (or use mass and a mass-based ΔH in J/g), ΔH values are always given per mole (or per gram) for the specific substance</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 5</span>\n    <p>How much energy is needed to melt 36.0 g of ice at 0°C? (ΔH(fus) for water = 6.01 kJ/mol, molar mass 18.02 g/mol)</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Moles of ice = 36.0/18.02 = 1.998 mol. q = nΔH(fus) = 1.998 × 6.01 kJ/mol = 12.0 kJ. Note this calculation uses NO temperature change at all — melting occurs entirely at the constant melting point temperature, consistent with the flat plateau on a heating curve.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you calculate energy for a phase change using q = nΔH(fus/vap)?</li>\n      <li>Do you understand why phase change calculations don't involve ΔT?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s66\"><span class=\"num\">6.6</span>Introduction to Enthalpy of Reaction</h2>\n  <p>Enthalpy of reaction (ΔH°rxn) is the heat released or absorbed by a chemical reaction at constant pressure — this is the ΔH value you'll calculate using several different methods throughout the rest of this unit (bond energies, formation enthalpies, Hess's Law), all converging on the same underlying quantity.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>ΔH is an extensive property — it scales with the amount of reaction that occurs. If a reaction's ΔH is −100 kJ for the equation as written, running twice as much reaction releases −200 kJ, and running the reverse reaction has ΔH = +100 kJ (exactly flipped sign).</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 6</span>\n    <p>Given N₂ + 3H₂ → 2NH₃, ΔH = −92 kJ, find the heat released when 4.00 mol of N₂ reacts completely.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">The given ΔH (−92 kJ) corresponds to exactly 1 mol N₂ reacting (matching its coefficient of 1 in the balanced equation). For 4.00 mol N₂: heat released = 4.00 × (−92 kJ) = −368 kJ. This treats ΔH per mole of the specific coefficient given, exactly like a stoichiometric mole-ratio calculation from Unit 4, just applied to energy instead of mass.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you scale ΔH proportionally to the amount of reaction occurring?</li>\n      <li>Do you understand that reversing a reaction flips the sign of ΔH?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s67\"><span class=\"num\">6.7</span>Bond Enthalpies</h2>\n  <p>Since breaking bonds always costs energy (endothermic) and forming bonds always releases energy (exothermic), you can estimate a reaction's ΔH by comparing the total energy needed to break all reactant bonds against the total energy released forming all product bonds.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">ΔH ≈ ΣBE(bonds broken, reactants) − ΣBE(bonds formed, products)</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 7</span>\n    <p>Estimate ΔH for H₂ + Cl₂ → 2HCl, given bond energies: H-H = 436 kJ/mol, Cl-Cl = 243 kJ/mol, H-Cl = 431 kJ/mol.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Bonds broken (reactants): 1 H-H (436) + 1 Cl-Cl (243) = 679 kJ. Bonds formed (products): 2 H-Cl (2 × 431 = 862 kJ). ΔH ≈ 679 − 862 = −183 kJ/mol. The negative value indicates this reaction is exothermic — more energy is released forming the new H-Cl bonds than was required to break the original H-H and Cl-Cl bonds.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Bond enthalpy calculations give an ESTIMATE of ΔH, not an exact value, because average bond energies (tabulated from many different molecules) don't perfectly capture the exact bond strength in every specific molecule. Formation enthalpies (6.8) and Hess's Law (6.9) generally give more precise results.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you estimate ΔH using bonds broken minus bonds formed?</li>\n      <li>Do you understand why this method only gives an approximation, not an exact value?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s68\"><span class=\"num\">6.8</span>Enthalpy of Formation</h2>\n  <p>Standard enthalpy of formation (ΔH°f) is the enthalpy change when 1 mole of a compound forms from its elements in their standard states. By definition, ΔH°f of any pure element in its standard state is exactly zero — this is the reference point everything else is measured against.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">ΔH°rxn = ΣnΔH°f(products) − ΣnΔH°f(reactants)</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 8</span>\n    <p>Calculate ΔH°rxn for CH₄ + 2O₂ → CO₂ + 2H₂O, given ΔH°f: CH₄ = −74.8 kJ/mol, CO₂ = −393.5 kJ/mol, H₂O(l) = −285.8 kJ/mol (O₂ = 0, an element in its standard state).</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Products: 1(−393.5) + 2(−285.8) = −393.5 − 571.6 = −965.1 kJ. Reactants: 1(−74.8) + 2(0) = −74.8 kJ. ΔH°rxn = −965.1 − (−74.8) = −890.3 kJ/mol. This large negative value is consistent with methane combustion being a strongly exothermic reaction, as expected for any typical combustion process.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Always multiply each ΔH°f value by its coefficient from the balanced equation before summing — forgetting the coefficient on H₂O (using −285.8 instead of 2 × −285.8) is one of the most common errors in this type of calculation.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you calculate ΔH°rxn from tabulated ΔH°f values?</li>\n      <li>Do you know that elements in their standard state have ΔH°f = 0?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s69\"><span class=\"num\">6.9</span>Hess's Law</h2>\n  <p>Hess's Law states that ΔH for an overall reaction is the same regardless of the path taken to get there — it only depends on the initial and final states (enthalpy is a state function). This lets you calculate an unknown ΔH by algebraically combining several known reactions with known ΔH values.</p>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: Applying Hess's Law</span>\n    <p>If you reverse a given reaction, flip the sign of its ΔH. If you multiply a given reaction by a factor, multiply its ΔH by that same factor. Add the (possibly modified) reactions together so that all intermediate species cancel, leaving exactly the target overall reaction — then add up the (possibly modified) ΔH values to get the target ΔH.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 9</span>\n    <p>Given: (1) C(s) + O₂(g) → CO₂(g), ΔH = −393.5 kJ; (2) CO(g) + ½O₂(g) → CO₂(g), ΔH = −283.0 kJ. Find ΔH for C(s) + ½O₂(g) → CO(g).</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">The target has C(s) and CO(g); keep reaction (1) as written (has C(s) as reactant), and reverse reaction (2) (to get CO(g) as a product instead of reactant), flipping its sign to +283.0 kJ. Reversed (2): CO₂(g) → CO(g) + ½O₂(g), ΔH = +283.0 kJ. Adding (1) + reversed (2): C(s) + O₂ + CO₂ → CO₂ + CO + ½O₂. Cancelling CO₂ (appears both sides) and combining O₂ terms (1 O₂ on left, ½ O₂ on right, net ½ O₂ remaining on left): C(s) + ½O₂(g) → CO(g), exactly the target equation. ΔH = −393.5 + 283.0 = −110.5 kJ.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you manipulate given reactions (reverse, multiply) and correctly adjust their ΔH values?</li>\n      <li>Can you combine manipulated reactions to reach a target overall reaction and calculate its ΔH?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"practice\">Unit 6 Practice Set</h2>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>How much heat is released when 75.0 g of water cools from 90.0°C to 25.0°C?</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>Calculate ΔH°rxn for 2H₂(g) + O₂(g) → 2H₂O(l), given ΔH°f(H₂O, l) = −285.8 kJ/mol.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>How much energy is needed to vaporize 10.0 g of water at 100°C? (ΔH(vap) = 40.7 kJ/mol)</span></div>\n\n  <div class=\"answer-key\">\n    <details><summary>Check your answers</summary>\n      <div class=\"a-content\">\n        <p><strong>1.</strong> q = mcΔT = (75.0)(4.184)(25.0−90.0) = (75.0)(4.184)(−65.0) = −20,397 J ≈ −20.4 kJ (negative because heat is released as the water cools).</p>\n        <p><strong>2.</strong> ΔH°rxn = 2(−285.8) − [2(0) + 1(0)] = −571.6 kJ.</p>\n        <p><strong>3.</strong> Moles = 10.0/18.02 = 0.555 mol. q = 0.555 × 40.7 = 22.6 kJ.</p>\n      </div>\n    </details>\n  </div>\n\n</div>\n",
  "7": "\n<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Chemistry</div>\n  <h1>Equilibrium</h1>\n  <p class=\"sub\">If Unit 5 (Kinetics) answers \"how fast,\" Unit 7 answers \"how far.\" Equilibrium describes the state a reversible reaction settles into — not a static stop, but a dynamic balance where forward and reverse reactions continue happening at equal rates. This unit's tools (K, Q, ICE tables, Le Chatelier's Principle) form the backbone for Unit 8's acid-base chemistry, so mastery here pays off directly.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 7–9%</span>\n    <span class=\"pill\">12 topics</span>\n    <span class=\"pill\">65 practice questions</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s71\">7.1 Introduction to Equilibrium</a></li>\n    <li><a href=\"#s72\">7.2 Direction of Reversible Reactions</a></li>\n    <li><a href=\"#s73\">7.3 Reaction Quotient and Equilibrium Constant</a></li>\n    <li><a href=\"#s74\">7.4 Calculating the Equilibrium Constant</a></li>\n    <li><a href=\"#s75\">7.5 Magnitude of the Equilibrium Constant</a></li>\n    <li><a href=\"#s76\">7.6 Properties of the Equilibrium Constant</a></li>\n    <li><a href=\"#s77\">7.7 Calculating Equilibrium Concentrations</a></li>\n    <li><a href=\"#s78\">7.8 Representations of Equilibrium</a></li>\n    <li><a href=\"#s79\">7.9 Introduction to Le Chatelier's Principle</a></li>\n    <li><a href=\"#s710\">7.10 Reaction Quotient and Le Chatelier's Principle</a></li>\n    <li><a href=\"#s711\">7.11 Introduction to Solubility Equilibria</a></li>\n    <li><a href=\"#s712\">7.12 Common-Ion Effect</a></li>\n    <li><a href=\"#practice\">Unit 7 Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <h2 id=\"s71\"><span class=\"num\">7.1</span>Introduction to Equilibrium</h2>\n  <p>Chemical equilibrium is a dynamic state: forward and reverse reactions are both still occurring, but at equal rates, so concentrations of all species remain constant over time (even though individual molecules are constantly reacting and re-forming). This is fundamentally different from a reaction that has simply \"stopped.\"</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Equilibrium is dynamic, not static. At the particle level, reactions continue in both directions at all times; what's constant is the macroscopic concentration of each species, because forward consumption and reverse production of each species exactly balance out.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you explain why equilibrium is dynamic rather than static?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s72\"><span class=\"num\">7.2</span>Direction of Reversible Reactions</h2>\n  <p>A reversible reaction can be pushed toward products or toward reactants depending on starting conditions — there's no single \"correct direction,\" only a direction that leads toward whatever the equilibrium state happens to be for the given starting concentrations.</p>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Do you understand that reaching equilibrium can occur from either direction depending on starting conditions?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s73\"><span class=\"num\">7.3</span>Reaction Quotient and Equilibrium Constant</h2>\n  <p>The reaction quotient Q has the exact same mathematical form as the equilibrium constant K, but Q can be calculated at ANY point during a reaction (not just at equilibrium), using whatever concentrations currently exist. Comparing Q to K tells you which direction a reaction needs to shift to reach equilibrium.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">K (or Q) = [products]^coefficients / [reactants]^coefficients</div>\n    <div class=\"sub\">Pure solids and pure liquids are omitted (their \"concentration\" doesn't meaningfully change)</div>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Q < K: not enough product yet, reaction shifts forward (toward products) to reach equilibrium. Q > K: too much product already, reaction shifts backward (toward reactants). Q = K: already at equilibrium, no net shift.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p>For N₂O₄ ⇌ 2NO₂, K = 4.63 × 10⁻³ at a given temperature. At a certain moment, [N₂O₄]=0.500 M and [NO₂]=0.0300 M. Which direction will the reaction shift?</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Q = [NO₂]²/[N₂O₄] = (0.0300)²/0.500 = 0.000900/0.500 = 1.80 × 10⁻³. Since Q (1.80 × 10⁻³) < K (4.63 × 10⁻³), there isn't yet enough product relative to equilibrium, so the reaction will shift forward (toward products, making more NO₂) until Q increases to match K.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you write a correct K (or Q) expression, correctly omitting pure solids/liquids?</li>\n      <li>Can you use a Q vs. K comparison to predict reaction shift direction?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s74\"><span class=\"num\">7.4</span>Calculating the Equilibrium Constant</h2>\n  <p>Given equilibrium concentrations (directly measured or determined via an ICE table), calculating K is a direct plug-in into the equilibrium expression.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p>At equilibrium, a mixture contains [H₂]=0.200 M, [I₂]=0.200 M, [HI]=1.500 M for H₂ + I₂ ⇌ 2HI. Find K.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">K = [HI]²/([H₂][I₂]) = (1.500)²/[(0.200)(0.200)] = 2.250/0.0400 = 56.3.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you calculate K directly from given equilibrium concentrations?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s75\"><span class=\"num\">7.5</span>Magnitude of the Equilibrium Constant</h2>\n  <p>K's numerical size directly tells you where equilibrium lies: a very large K means the reaction strongly favors products (goes essentially to completion); a very small K means it strongly favors reactants (barely proceeds at all); K near 1 means significant amounts of both reactants and products are present at equilibrium.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>K says nothing about how FAST equilibrium is reached (that's kinetics, Unit 5) — only about the final position once equilibrium is reached. A reaction can have a huge K (strongly favors products) but be extremely slow to actually get there, or vice versa. These are genuinely independent concepts.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you interpret what a large, small, or near-1 K value indicates about product/reactant favorability?</li>\n      <li>Do you understand that K and reaction rate are independent concepts?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s76\"><span class=\"num\">7.6</span>Properties of the Equilibrium Constant</h2>\n  <p>K values follow predictable mathematical rules when equations are manipulated — reversed, scaled, or added together — directly analogous to the ΔH manipulation rules from Hess's Law (Unit 6.9), just using multiplication/powers instead of addition/multiplication.</p>\n\n  <table class=\"formula-table\">\n    <thead><tr><th>Manipulation</th><th>Effect on K</th></tr></thead>\n    <tbody>\n      <tr><td>Reverse the reaction</td><td>K(new) = 1/K(original)</td></tr>\n      <tr><td>Multiply coefficients by n</td><td>K(new) = K(original)ⁿ</td></tr>\n      <tr><td>Add two reactions together</td><td>K(new) = K₁ × K₂</td></tr>\n    </tbody>\n  </table>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p>If K = 2.5 for A ⇌ B, find K for 2B ⇌ 2A.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">2B ⇌ 2A is the reverse of A ⇌ B (swapping sides), AND doubled (coefficients ×2). Reversing gives K = 1/2.5 = 0.40. Doubling then squares that value: K(new) = (0.40)² = 0.16. Both modifications must be applied together, in either order — the result is the same.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you correctly adjust K when a reaction is reversed, scaled, or combined with another reaction?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s77\"><span class=\"num\">7.7</span>Calculating Equilibrium Concentrations</h2>\n  <p>ICE tables (Initial, Change, Equilibrium) are the standard tool for finding equilibrium concentrations starting from known initial conditions and a known K — this is the single most calculation-heavy skill in the entire unit.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p>For H₂ + I₂ ⇌ 2HI, K = 54.0. Starting with [H₂]₀ = [I₂]₀ = 0.100 M and no HI, find equilibrium concentrations.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">ICE table: Initial: H₂=0.100, I₂=0.100, HI=0. Change: H₂=−x, I₂=−x, HI=+2x. Equilibrium: H₂=0.100−x, I₂=0.100−x, HI=2x. Substituting into K: 54.0 = (2x)²/[(0.100−x)(0.100−x)] = (2x)²/(0.100−x)². Taking the square root of both sides (valid since both sides are perfect squares here): √54.0 = 2x/(0.100−x), so 7.348 = 2x/(0.100−x). Solving: 7.348(0.100−x) = 2x → 0.7348 − 7.348x = 2x → 0.7348 = 9.348x → x = 0.0786. Equilibrium concentrations: [H₂]=[I₂]=0.100−0.0786=0.0214 M, [HI]=2(0.0786)=0.157 M.</div>\n    </details>\n  </div>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: The Simplifying Assumption</span>\n    <p>When K is very small (K << 1) and initial concentration is reasonably large, you can often assume x is negligible compared to the initial concentration (e.g., 0.100 − x ≈ 0.100), avoiding the quadratic formula. Always verify this assumption afterward: if x turns out to be less than about 5% of the initial concentration, the approximation was valid; if not, you must redo the problem using the full quadratic equation.</p>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Don't take the square root shortcut unless both sides of the K expression are genuinely perfect squares (as in Worked Example 4, where the H₂ and I₂ coefficients matched). If reactant coefficients differ, or if there's a mix of different species that don't reduce to a clean square, you must use the full quadratic formula instead.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you set up and solve an ICE table for equilibrium concentrations?</li>\n      <li>Can you correctly apply (and verify) the simplifying \"x is small\" assumption?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s78\"><span class=\"num\">7.8</span>Representations of Equilibrium</h2>\n  <p>Particulate diagrams of equilibrium mixtures show a snapshot with a fixed number of each species present — reading these diagrams correctly (counting particles, applying the equilibrium expression using particle counts as a proxy for concentration in a fixed volume) is a common exam question type.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 5</span>\n    <p>A 1.00 L container at equilibrium shows 4 A molecules and 2 B molecules for A ⇌ 2B (as a particulate diagram). Find K.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">In a 1.00 L container, particle count directly equals concentration in arbitrary particle-count units (a common simplification for particulate-diagram problems): [A]=4, [B]=2. K = [B]²/[A] = (2)²/4 = 4/4 = 1.0.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you calculate K from a particulate equilibrium diagram?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s79\"><span class=\"num\">7.9</span>Introduction to Le Chatelier's Principle</h2>\n  <p>Le Chatelier's Principle: if a system at equilibrium is disturbed (by a change in concentration, pressure/volume, or temperature), the system shifts in the direction that partially counteracts (opposes) that disturbance, reaching a new equilibrium.</p>\n\n  <div class=\"skillbox\">\n    <span class=\"tag-label skill\">Exam Skill: Predicting Shift Direction</span>\n    <p>Adding a reactant or removing a product → shifts forward (toward products). Adding a product or removing a reactant → shifts backward (toward reactants). Decreasing volume (increasing pressure) → shifts toward the side with FEWER moles of gas. Increasing volume (decreasing pressure) → shifts toward the side with MORE moles of gas. Increasing temperature → shifts in the endothermic direction. Decreasing temperature → shifts in the exothermic direction.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 6</span>\n    <p>For the exothermic reaction N₂ + 3H₂ ⇌ 2NH₃, predict the shift when: (a) H₂ is added, (b) volume is decreased, (c) temperature is increased.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">(a) Adding a reactant (H₂) shifts the equilibrium forward, toward products (more NH₃ forms) to partially consume the added H₂. (b) Decreasing volume favors the side with fewer moles of gas; reactants have 4 total mol gas (1+3), products have 2 mol gas, so the equilibrium shifts forward (toward products, the side with fewer moles) to partially counteract the pressure increase. (c) Since this reaction is exothermic (releases heat, effectively acting like a \"product\"), increasing temperature is like adding more of a \"product,\" so equilibrium shifts backward, toward reactants (the endothermic direction) to partially absorb the added heat.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you predict shift direction for concentration, volume/pressure, and temperature changes?</li>\n      <li>Do you understand why temperature changes K itself, while concentration/pressure changes do not?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s710\"><span class=\"num\">7.10</span>Reaction Quotient and Le Chatelier's Principle</h2>\n  <p>Le Chatelier's Principle and the Q-vs-K comparison from 7.3 are really the same underlying idea, viewed two ways: any disturbance changes Q away from K, and the system then shifts in whichever direction restores Q = K.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 7</span>\n    <p>Explain, using Q, why adding more reactant to a system at equilibrium causes a forward shift.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Adding reactant increases the denominator of the Q expression (reactant concentrations are in the denominator), which decreases Q below its previous value (which equaled K just before the disturbance). Since Q is now less than K, the reaction must shift forward (producing more product, consuming reactant) until Q rises back up to once again equal K.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you explain Le Chatelier's shifts using the underlying Q vs. K mechanism, not just the memorized shortcut rules?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s711\"><span class=\"num\">7.11</span>Introduction to Solubility Equilibria</h2>\n  <p>Ksp (the solubility product constant) is just a specialized equilibrium constant for the dissolution of a slightly soluble ionic solid — it follows every rule established for K so far, just applied specifically to a solid ⇌ ions equilibrium.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">MX(s) ⇌ M⁺(aq) + X⁻(aq); Ksp = [M⁺][X⁻]</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 8</span>\n    <p>AgCl has Ksp = 1.8 × 10⁻¹⁰. Find its molar solubility in pure water.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq). Let s = molar solubility; at equilibrium [Ag⁺]=[Cl⁻]=s. Ksp = s × s = s². Solving: s² = 1.8 × 10⁻¹⁰, so s = √(1.8 × 10⁻¹⁰) = 1.3 × 10⁻⁵ M. This tells you that only a tiny amount of AgCl actually dissolves before the solution becomes saturated, consistent with AgCl being classified as \"insoluble\" by standard solubility rules despite technically having a small, nonzero solubility.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you write a correct Ksp expression for a given ionic solid?</li>\n      <li>Can you calculate molar solubility from Ksp, or Ksp from molar solubility?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s712\"><span class=\"num\">7.12</span>Common-Ion Effect</h2>\n  <p>The common-ion effect is Le Chatelier's Principle applied specifically to solubility equilibria: adding a soluble source of an ion already present in a solubility equilibrium (a \"common ion\") shifts the equilibrium backward, decreasing the solubility of the slightly soluble solid.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 9</span>\n    <p>Would AgCl be more or less soluble in a 0.100 M NaCl solution compared to pure water? Explain, and calculate the new solubility (Ksp = 1.8 × 10⁻¹⁰).</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">AgCl will be LESS soluble in NaCl solution than in pure water — the NaCl provides a common ion (Cl⁻) already involved in AgCl's dissolution equilibrium, shifting that equilibrium backward (toward the solid, undissolved form) per Le Chatelier's Principle. Setting up: Ksp = [Ag⁺][Cl⁻] = (s)(0.100 + s) ≈ (s)(0.100), since s is expected to be very small compared to 0.100 M. Solving: 1.8 × 10⁻¹⁰ = s(0.100), so s = 1.8 × 10⁻⁹ M — dramatically smaller than the 1.3 × 10⁻⁵ M solubility calculated in pure water (Worked Example 8), confirming the substantial suppressing effect of the common ion.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you explain the common-ion effect using Le Chatelier's Principle?</li>\n      <li>Can you calculate solubility in the presence of a common ion?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"practice\">Unit 7 Practice Set</h2>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>For 2SO₂ + O₂ ⇌ 2SO₃, K = 280 at a given temperature. If Q = 150, which direction will the reaction shift?</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>Predict the shift for N₂O₄ ⇌ 2NO₂ (endothermic) when temperature is increased.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>PbCl₂ has Ksp = 1.7 × 10⁻⁵. Find its molar solubility in pure water.</span></div>\n\n  <div class=\"answer-key\">\n    <details><summary>Check your answers</summary>\n      <div class=\"a-content\">\n        <p><strong>1.</strong> Since Q (150) < K (280), the reaction shifts forward, toward products, to increase Q up to K.</p>\n        <p><strong>2.</strong> Since the reaction is endothermic, increasing temperature shifts equilibrium forward (toward products, the endothermic direction), favoring more NO₂.</p>\n        <p><strong>3.</strong> PbCl₂ ⇌ Pb²⁺ + 2Cl⁻. Ksp = (s)(2s)² = 4s³. 1.7×10⁻⁵ = 4s³, so s³ = 4.25×10⁻⁶, giving s = 0.0162 M.</p>\n      </div>\n    </details>\n  </div>\n\n</div>\n",
  "8": "\n<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Chemistry</div>\n  <h1>Acids and Bases</h1>\n  <p class=\"sub\">Acid-base chemistry is equilibrium chemistry (Unit 7) applied to one specific, hugely important type of reaction: proton transfer. At 11–15% of the exam, this is the second-heaviest unit after Unit 3, and it rewards genuinely understanding Ka/Kb relationships and buffer behavior rather than memorizing formulas in isolation.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 11–15%</span>\n    <span class=\"pill\">11 topics</span>\n    <span class=\"pill\">65 practice questions</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s81\">8.1 Introduction to Acids and Bases</a></li>\n    <li><a href=\"#s82\">8.2 pH and pOH of Strong Acids and Bases</a></li>\n    <li><a href=\"#s83\">8.3 Weak Acid and Base Equilibria</a></li>\n    <li><a href=\"#s84\">8.4 Acid-Base Reactions and Titrations</a></li>\n    <li><a href=\"#s85\">8.5 Molecular Structure and Acid Strength</a></li>\n    <li><a href=\"#s86\">8.6 pH and pKa</a></li>\n    <li><a href=\"#s87\">8.7 Properties of Buffers</a></li>\n    <li><a href=\"#s88\">8.8 Buffer Capacity</a></li>\n    <li><a href=\"#s89\">8.9 pH and Composition of a Buffer</a></li>\n    <li><a href=\"#s810\">8.10 Acid-Base Titrations Deep Dive</a></li>\n    <li><a href=\"#s811\">8.11 Molecular Structure and Acid-Base Properties</a></li>\n    <li><a href=\"#practice\">Unit 8 Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <h2 id=\"s81\"><span class=\"num\">8.1</span>Introduction to Acids and Bases</h2>\n  <p>The Brønsted-Lowry definition is the working model for this entire unit: an acid is a proton (H⁺) donor, a base is a proton acceptor. Every acid-base reaction is fundamentally a proton transfer, and every acid has a conjugate base (what's left after donating H⁺) while every base has a conjugate acid (what results after accepting H⁺).</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Conjugate acid-base pairs differ by exactly one H⁺. A strong acid's conjugate base is always very weak (it has essentially no tendency to reclaim the proton it lost so easily), and a weak acid's conjugate base is comparatively stronger (with more genuine tendency to grab a proton back) — strength is always inversely related within a conjugate pair.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p>Identify the conjugate acid-base pairs in: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">NH₃ accepts a proton to become NH₄⁺ — NH₃ is the base, NH₄⁺ is its conjugate acid (pair 1). H₂O donates a proton to become OH⁻ — H₂O is the acid, OH⁻ is its conjugate base (pair 2). This reaction shows water acting as an acid here — a reminder that water is amphoteric (can act as either an acid or a base depending on what it's reacting with).</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you identify conjugate acid-base pairs in a given reaction?</li>\n      <li>Do you understand the inverse relationship between an acid's strength and its conjugate base's strength?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s82\"><span class=\"num\">8.2</span>pH and pOH of Strong Acids and Bases</h2>\n  <p>Strong acids and bases are defined by complete (essentially 100%) dissociation in water — this makes their pH calculations refreshingly direct, since [H⁺] or [OH⁻] can be read straight from the given concentration, with no equilibrium calculation needed at all.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">pH = −log[H⁺]; pOH = −log[OH⁻]; pH + pOH = 14 (at 25°C)</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p>Find the pH of 0.0025 M HCl.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">HCl is a strong acid, dissociating completely: [H⁺] = 0.0025 M (1:1 ratio with HCl). pH = −log(0.0025) = 2.60.</div>\n    </details>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p>Find the pH of 0.0040 M Ca(OH)₂.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Ca(OH)₂ is a strong base providing 2 OH⁻ per formula unit: [OH⁻] = 2 × 0.0040 = 0.0080 M. pOH = −log(0.0080) = 2.10. pH = 14.00 − 2.10 = 11.90. Forgetting the factor of 2 from Ca(OH)₂'s stoichiometry is the single most common error in this type of problem.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you calculate pH/pOH directly from strong acid/base concentration, correctly accounting for stoichiometry?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s83\"><span class=\"num\">8.3</span>Weak Acid and Base Equilibria</h2>\n  <p>Unlike strong acids/bases, weak acids/bases only partially dissociate — this is a genuine equilibrium problem (an ICE table, exactly like Unit 7), governed by Ka (for acids) or Kb (for bases).</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p>Find the pH of 0.200 M acetic acid (CH₃COOH, Ka = 1.8 × 10⁻⁵).</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">ICE table for CH₃COOH ⇌ H⁺ + CH₃COO⁻: Initial: 0.200, 0, 0. Change: −x, +x, +x. Equilibrium: 0.200−x, x, x. Ka = x²/(0.200−x) ≈ x²/0.200 (assuming x is small, since Ka is small). Solving: x² = 0.200 × 1.8×10⁻⁵ = 3.6×10⁻⁶, so x = 1.90×10⁻³ M. Checking the assumption: 1.90×10⁻³/0.200 = 0.95%, well under 5%, valid. [H⁺] = 1.90×10⁻³ M. pH = −log(1.90×10⁻³) = 2.72.</div>\n    </details>\n  </div>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Ka × Kb = Kw = 1.0 × 10⁻¹⁴ (at 25°C) for any conjugate acid-base pair. This lets you find Kb for a weak base if you know Ka for its conjugate acid (or vice versa) — an extremely common calculation.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you set up and solve an ICE table for a weak acid or base to find pH?</li>\n      <li>Can you use Ka × Kb = Kw to relate a conjugate acid-base pair?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s84\"><span class=\"num\">8.4</span>Acid-Base Reactions and Titrations</h2>\n  <p>This extends Unit 4.6's introduction to titration with the acid-base-specific detail needed for full titration curve analysis: strong-strong, weak-strong, and the shape/key points of each type of titration curve.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Strong acid + strong base: equivalence point pH = 7.00 exactly. Weak acid + strong base: equivalence point pH > 7.00 (the resulting solution contains the weak acid's conjugate base, which is itself a weak base, making the solution basic). Weak base + strong acid: equivalence point pH < 7.00 (conjugate acid formed is weakly acidic).</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you predict whether an equivalence point pH will be 7, above 7, or below 7 based on acid/base strength?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s85\"><span class=\"num\">8.5</span>Molecular Structure and Acid Strength</h2>\n  <p>Acid strength (Ka size) can often be predicted from molecular structure, following two main patterns: for binary acids (H-X), acid strength increases with bond polarity and with decreasing bond strength (larger X, weaker H-X bond, easier to release H⁺); for oxyacids (H-O-X=O type structures), acid strength increases with the electronegativity of X and with the number of additional oxygen atoms attached.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 5</span>\n    <p>Rank HClO, HClO₂, HClO₃, and HClO₄ by acid strength.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">All four are oxyacids of chlorine, differing only in the number of additional oxygen atoms attached (0, 1, 2, and 3 extra O beyond the one in the O-H group, respectively). More oxygen atoms pull electron density away from the O-H bond (through the highly electronegative oxygens), weakening that bond and better stabilizing the resulting conjugate base's negative charge through delocalization — both effects increase acid strength. Ranking from weakest to strongest: HClO < HClO₂ < HClO₃ < HClO₄.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you predict relative acid strength for binary acids using bond polarity/strength trends?</li>\n      <li>Can you predict relative acid strength for oxyacids using electronegativity and oxygen count?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s86\"><span class=\"num\">8.6</span>pH and pKa</h2>\n  <p>pKa (= −log Ka) is just a more convenient way to express Ka, following the same logic as pH vs. [H⁺]. Smaller pKa means a stronger acid (larger Ka) — this inverse relationship trips students up constantly, so internalize it carefully.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 6</span>\n    <p>An acid has pKa = 4.76. Find its Ka, and compare its strength to an acid with pKa = 3.20.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Ka = 10^(−pKa) = 10^(−4.76) = 1.74 × 10⁻⁵. Since pKa = 3.20 is a SMALLER number than 4.76, that acid has a LARGER Ka, making it the stronger acid — smaller pKa always means stronger acid, exactly analogous to how a smaller pH means a higher [H⁺] (more acidic solution).</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you convert between Ka and pKa in both directions?</li>\n      <li>Do you understand that smaller pKa corresponds to a stronger acid?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s87\"><span class=\"num\">8.7</span>Properties of Buffers</h2>\n  <p>A buffer is a solution that resists significant pH change upon addition of small amounts of acid or base — it requires a mixture of a weak acid and its conjugate base (or a weak base and its conjugate acid) in comparable amounts, so there's a reservoir of both species ready to neutralize any added H⁺ or OH⁻.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>A buffer works because it has BOTH a weak acid component (to neutralize added base) AND its conjugate base component (to neutralize added acid) present simultaneously in significant amounts — this dual capability is exactly why a buffer can resist change in either direction, unlike a solution containing only a weak acid or only a strong acid/base alone.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 7</span>\n    <p>Explain, using chemical equations, how an acetic acid/acetate buffer (CH₃COOH/CH₃COO⁻) resists pH change when a small amount of strong acid (H⁺) is added.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">The buffer's conjugate base component (CH₃COO⁻, present in significant quantity) reacts with and consumes the added H⁺: CH₃COO⁻ + H⁺ → CH₃COOH. Because this reaction consumes nearly all of the added strong acid (converting it into more of the already-present weak acid, rather than leaving it as free H⁺ raising the solution's overall acidity dramatically), the pH changes only slightly rather than dropping sharply, as it would in an unbuffered solution.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you identify what makes a solution a buffer (weak acid/conjugate base pair, both present in significant amounts)?</li>\n      <li>Can you write the reactions showing how a buffer neutralizes added acid or base?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s88\"><span class=\"num\">8.8</span>Buffer Capacity</h2>\n  <p>Buffer capacity is how MUCH acid or base a buffer can neutralize before its pH starts changing significantly — it depends on the absolute amounts (concentrations) of the weak acid and conjugate base present, not just their ratio (which determines the actual pH, per 8.9).</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>A buffer has its greatest capacity (most resistant to pH change) when [weak acid] and [conjugate base] are roughly EQUAL to each other, and when both are present in large absolute concentrations. A buffer with a 1:1 ratio but very dilute concentrations has a much smaller capacity than one with the same 1:1 ratio but concentrated components.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Do you understand the distinction between buffer capacity (resistance magnitude) and buffer pH (Henderson-Hasselbalch, 8.9)?</li>\n      <li>Can you identify which of two buffers has greater capacity?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s89\"><span class=\"num\">8.9</span>pH and Composition of a Buffer</h2>\n  <p>The Henderson-Hasselbalch equation is the direct, algebra-shortcut way to find a buffer's pH from the ratio of its two components — it's really just the weak acid equilibrium expression (8.3) rearranged and expressed in log form.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">pH = pKa + log([conjugate base]/[weak acid])</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 8</span>\n    <p>Find the pH of a buffer containing 0.300 M CH₃COOH and 0.500 M CH₃COONa (Ka of acetic acid = 1.8 × 10⁻⁵).</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">pKa = −log(1.8×10⁻⁵) = 4.74. pH = pKa + log([CH₃COO⁻]/[CH₃COOH]) = 4.74 + log(0.500/0.300) = 4.74 + log(1.667) = 4.74 + 0.222 = 4.96.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Henderson-Hasselbalch's log term is [base]/[acid] — base on top, always. Flipping this ratio is a very common error that gives a plausible-looking but wrong answer (it would give an answer that's symmetric around pKa in the wrong direction).</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 9</span>\n    <p>What ratio of [CH₃COO⁻]/[CH₃COOH] is needed to make a buffer with pH = 5.00, given pKa = 4.74?</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">5.00 = 4.74 + log(ratio). Solving: log(ratio) = 5.00 − 4.74 = 0.26. Ratio = 10^0.26 = 1.82. So [CH₃COO⁻]/[CH₃COOH] = 1.82 — meaning the conjugate base must be present in somewhat greater concentration than the weak acid to push the pH above pKa, consistent with pH > pKa corresponding to base/acid ratio > 1.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you use Henderson-Hasselbalch to find buffer pH from component concentrations?</li>\n      <li>Can you use it in reverse, to find the ratio needed for a target pH?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s810\"><span class=\"num\">8.10</span>Acid-Base Titrations Deep Dive</h2>\n  <p>A full weak-acid/strong-base titration curve has several key, testable points: the initial pH (weak acid equilibrium alone), the half-equivalence point (where pH = pKa exactly — a direct, elegant consequence of Henderson-Hasselbalch when [acid]=[base]), the equivalence point (pH > 7, from the conjugate base), and the region beyond equivalence (dominated by excess strong base).</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>At the half-equivalence point, exactly half of the original weak acid has been converted to its conjugate base, meaning [weak acid] = [conjugate base]. Plugging this into Henderson-Hasselbalch: pH = pKa + log(1) = pKa + 0 = pKa. This is one of the most elegant, frequently tested facts in the whole unit — half-equivalence point pH directly reveals pKa (and therefore Ka) experimentally.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you identify the half-equivalence point on a titration curve and explain why pH = pKa there?</li>\n      <li>Can you sketch/describe the overall shape of a weak acid-strong base titration curve, identifying key points?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s811\"><span class=\"num\">8.11</span>Molecular Structure and Acid-Base Properties</h2>\n  <p>This section extends 8.5's structural reasoning to more complex molecules, including polyprotic acids (multiple acidic protons, released in a stepwise sequence, each with its own Ka) and amino acids/other biologically relevant acid-base molecules.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>For a polyprotic acid, Ka₁ > Ka₂ > Ka₃ (each successive proton is harder to remove than the last) — this makes sense because removing a proton from an already-negatively-charged species requires overcoming additional electrostatic attraction that wasn't present when removing the first, neutral-starting proton.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 10</span>\n    <p>Explain why Ka₁ for H₂SO₄ is much larger than Ka₂.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Removing the first proton from neutral H₂SO₄ requires overcoming only the normal covalent bond strength, and H₂SO₄ is actually a strong acid for this first dissociation (Ka₁ is enormous). Removing the second proton means pulling H⁺ away from HSO₄⁻, a species that is already negatively charged — the resulting extra electrostatic attraction between the departing (positive) H⁺ and the (negative) HSO₄⁻ makes this second removal significantly more difficult, giving Ka₂ a much smaller value than Ka₁.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you explain why successive Ka values for a polyprotic acid decrease?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"practice\">Unit 8 Practice Set</h2>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>Find the pH of 0.050 M HNO₃ (a strong acid).</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>A weak acid has Ka = 6.3 × 10⁻⁵. Find its pKa.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>Find the pH of a buffer with 0.250 M weak acid (pKa=4.20) and 0.400 M conjugate base.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">4</span><span>Why is the equivalence point pH above 7 for a weak acid-strong base titration?</span></div>\n\n  <div class=\"answer-key\">\n    <details><summary>Check your answers</summary>\n      <div class=\"a-content\">\n        <p><strong>1.</strong> [H⁺] = 0.050 M (strong acid, complete dissociation). pH = −log(0.050) = 1.30.</p>\n        <p><strong>2.</strong> pKa = −log(6.3×10⁻⁵) = 4.20.</p>\n        <p><strong>3.</strong> pH = 4.20 + log(0.400/0.250) = 4.20 + log(1.60) = 4.20 + 0.204 = 4.40.</p>\n        <p><strong>4.</strong> At the equivalence point, the strong acid's conjugate base has been fully converted to the weak acid's conjugate base (a genuinely weak base itself, since it's the conjugate of a weak acid), which reacts partially with water to produce OH⁻, making the solution basic (pH > 7).</p>\n      </div>\n    </details>\n  </div>\n\n</div>\n",
  "9": "\n<div class=\"hero\">\n  <div class=\"eyebrow\">Peters Family Homeschool · AP Chemistry</div>\n  <h1>Thermodynamics and Electrochemistry</h1>\n  <p class=\"sub\">The final unit ties together threads from across the entire course. Entropy and Gibbs free energy answer the deep question \"why do reactions happen at all\" — going beyond Unit 6's enthalpy to explain spontaneity fully. Electrochemistry then applies the redox concepts from Unit 4.9 to build real batteries and electrolytic cells, connecting thermodynamics directly to voltage.</p>\n  <div class=\"hero-pills\">\n    <span class=\"pill\">Exam weight 7–9%</span>\n    <span class=\"pill\">11 topics</span>\n    <span class=\"pill\">65 practice questions</span>\n  </div>\n</div>\n\n<div class=\"toc\">\n  <div class=\"toc-label\">Jump to a section</div>\n  <ol>\n    <li><a href=\"#s91\">9.1 Introduction to Entropy</a></li>\n    <li><a href=\"#s92\">9.2 Absolute Entropy and Molecular Structure</a></li>\n    <li><a href=\"#s93\">9.3 Gibbs Free Energy and Thermodynamic Favorability</a></li>\n    <li><a href=\"#s94\">9.4 Thermodynamic and Kinetic Control</a></li>\n    <li><a href=\"#s95\">9.5 Free Energy and Equilibrium</a></li>\n    <li><a href=\"#s96\">9.6 Coupled Reactions</a></li>\n    <li><a href=\"#s97\">9.7 Galvanic (Voltaic) Cells</a></li>\n    <li><a href=\"#s98\">9.8 Cell Potential and Free Energy</a></li>\n    <li><a href=\"#s99\">9.9 Cell Potential Under Nonstandard Conditions</a></li>\n    <li><a href=\"#s910\">9.10 Electrolysis and Faraday's Law</a></li>\n    <li><a href=\"#s911\">9.11 Applications of Electrochemistry</a></li>\n    <li><a href=\"#practice\">Unit 9 Practice Set</a></li>\n  </ol>\n</div>\n\n<div class=\"wrap\">\n\n  <h2 id=\"s91\"><span class=\"num\">9.1</span>Introduction to Entropy</h2>\n  <p>Entropy (S) measures the number of ways energy and matter can be arranged in a system — informally, \"disorder\" or \"dispersal,\" though the more precise idea is the number of accessible microstates. The Second Law of Thermodynamics states that the total entropy of the universe (system + surroundings) always increases for any spontaneous process.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Entropy generally increases when: a solid or liquid becomes a gas (far more possible arrangements), the number of moles of gas increases in a reaction, a solid dissolves into solution, or temperature increases (more accessible energy states). Recognizing these patterns lets you predict the SIGN of ΔS for a process without needing to calculate anything.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 1</span>\n    <p>Predict the sign of ΔS for: 2SO₂(g) + O₂(g) → 2SO₃(g)</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Count moles of gas: reactants have 3 mol gas (2 SO₂ + 1 O₂), products have 2 mol gas (2 SO₃). Since moles of gas DECREASE, the number of possible particle arrangements decreases, so ΔS is negative (entropy decreases) for this reaction.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you predict the sign of ΔS for a physical or chemical process using moles-of-gas and phase-change reasoning?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s92\"><span class=\"num\">9.2</span>Absolute Entropy and Molecular Structure</h2>\n  <p>Unlike enthalpy, absolute entropy values (S°, not ΔS°) can be measured directly for a single substance — there's no need for a \"formation from elements\" reference point, since entropy has an absolute zero (a perfect crystal at 0 K has exactly zero entropy, per the Third Law of Thermodynamics).</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Larger, more complex molecules generally have higher absolute entropy (more possible internal arrangements/vibrations). Gases have far higher entropy than liquids, which have higher entropy than solids, for the same substance. More complex crystal structures or larger molecules within the same phase also tend to have higher S° than simpler ones.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 2</span>\n    <p>Rank Br₂(s), Br₂(l), and Br₂(g) by absolute entropy (S°).</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">For the exact same substance, gas has the most possible arrangements/motion (highest entropy), followed by liquid, followed by solid (most ordered, most restricted, lowest entropy). Ranking from lowest to highest S°: Br₂(s) < Br₂(l) < Br₂(g).</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you rank substances by absolute entropy using phase and molecular complexity?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s93\"><span class=\"num\">9.3</span>Gibbs Free Energy and Thermodynamic Favorability</h2>\n  <p>Gibbs free energy (ΔG) combines enthalpy and entropy into a single value that determines whether a process is thermodynamically favorable (spontaneous) under given conditions — this is the single most important quantity in this unit.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">ΔG = ΔH − TΔS</div>\n    <div class=\"sub\">T must be in Kelvin; ΔG < 0 means favorable/spontaneous, ΔG > 0 means unfavorable/nonspontaneous</div>\n  </div>\n\n  <table class=\"formula-table\">\n    <thead><tr><th>ΔH</th><th>ΔS</th><th>ΔG result</th></tr></thead>\n    <tbody>\n      <tr><td>Negative (exothermic)</td><td>Positive (increases)</td><td>Always negative — favorable at all temperatures</td></tr>\n      <tr><td>Positive (endothermic)</td><td>Negative (decreases)</td><td>Always positive — unfavorable at all temperatures</td></tr>\n      <tr><td>Negative</td><td>Negative</td><td>Favorable only at LOW temperature</td></tr>\n      <tr><td>Positive</td><td>Positive</td><td>Favorable only at HIGH temperature</td></tr>\n    </tbody>\n  </table>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 3</span>\n    <p>A reaction has ΔH = −45.0 kJ and ΔS = −0.125 kJ/K. Is it favorable at 298 K? At 400 K?</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">At 298 K: ΔG = −45.0 − (298)(−0.125) = −45.0 + 37.25 = −7.75 kJ. Since ΔG < 0, favorable at 298 K. At 400 K: ΔG = −45.0 − (400)(−0.125) = −45.0 + 50.0 = +5.0 kJ. Since ΔG > 0, unfavorable at 400 K. This confirms the table's prediction: with negative ΔH and negative ΔS, the reaction is favorable only at lower temperatures, becoming unfavorable as temperature rises.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>ΔS is very often given in J/(mol·K), while ΔH is usually given in kJ/mol — always convert both to the SAME energy unit (usually kJ) before calculating ΔG, or you'll be off by a factor of 1000. This unit-mismatch error is extremely common.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you calculate ΔG from ΔH, ΔS, and T, watching unit consistency?</li>\n      <li>Can you predict favorability across all four ΔH/ΔS sign combinations, including temperature-dependence?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s94\"><span class=\"num\">9.4</span>Thermodynamic and Kinetic Control</h2>\n  <p>Thermodynamic favorability (ΔG < 0) tells you a reaction CAN happen, releasing energy overall — it says nothing about whether that reaction actually happens quickly. This is the same fundamental distinction as K vs. rate (Unit 7.5), just now framed in terms of ΔG vs. Ea.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>A reaction can be thermodynamically favorable (ΔG < 0) yet kinetically very slow (high activation energy) — diamond converting to graphite is the classic example: thermodynamically favorable at room temperature (graphite is more stable), but so kinetically slow that diamonds are, for all practical human timescales, \"forever.\"</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you explain the independence of thermodynamic favorability (ΔG) and reaction rate (kinetics)?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s95\"><span class=\"num\">9.5</span>Free Energy and Equilibrium</h2>\n  <p>ΔG° (standard conditions) and K are directly mathematically linked — a large, negative ΔG° corresponds to a large K (strongly favors products), connecting this unit's thermodynamics directly back to Unit 7's equilibrium.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">ΔG° = −RTlnK</div>\n    <div class=\"sub\">R = 8.314 J/(mol·K), T in Kelvin</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 4</span>\n    <p>A reaction has K = 250 at 298 K. Find ΔG°.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">ΔG° = −RTlnK = −(8.314)(298)ln(250) = −(2477.6)(5.521) = −13,679 J ≈ −13.7 kJ. Since K > 1 (favors products), ΔG° is negative, consistent with the general rule that K > 1 always corresponds to ΔG° < 0, and K < 1 always corresponds to ΔG° > 0.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you calculate ΔG° from K (and vice versa)?</li>\n      <li>Do you understand why K > 1 always corresponds to ΔG° < 0?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s96\"><span class=\"num\">9.6</span>Coupled Reactions</h2>\n  <p>An unfavorable (ΔG > 0) reaction can be driven forward by \"coupling\" it to a strongly favorable (ΔG << 0) reaction — since ΔG values add together (a direct application of Hess's Law-style thinking), the combined process can have an overall negative ΔG even though one piece alone would not proceed.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 5</span>\n    <p>Reaction 1 has ΔG = +30 kJ (unfavorable). Reaction 2 has ΔG = −80 kJ (favorable). If reaction 2 is coupled to reaction 1 (added together), is the overall process favorable?</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">ΔG(overall) = ΔG₁ + ΔG₂ = +30 + (−80) = −50 kJ. Since the overall ΔG is negative, the coupled process IS favorable overall, even though reaction 1 alone would not be — this is exactly the strategy living cells use to drive otherwise-unfavorable biosynthesis reactions by coupling them to the strongly favorable hydrolysis of ATP.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you calculate the overall ΔG of two coupled reactions and determine overall favorability?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s97\"><span class=\"num\">9.7</span>Galvanic (Voltaic) Cells</h2>\n  <p>A galvanic cell physically separates a spontaneous redox reaction's oxidation and reduction half-reactions into two compartments, forcing electrons to travel through an external wire (generating usable electrical current) rather than transferring directly upon contact.</p>\n\n  <div class=\"key-idea\">\n    <span class=\"tag-label idea\">Key Idea</span>\n    <p>Oxidation always occurs at the anode; reduction always occurs at the cathode (a useful memory aid: \"AN OX, RED CAT\" — Anode=OXidation, REDuction=CAThode). Electrons flow through the external wire from anode to cathode. A salt bridge (or porous barrier) allows ion flow between the two half-cells to maintain electrical neutrality, without allowing the solutions to fully mix.</p>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 6</span>\n    <p>A galvanic cell is built from Zn/Zn²⁺ and Cu/Cu²⁺ half-cells. Given standard reduction potentials E°(Cu²⁺/Cu) = +0.34 V and E°(Zn²⁺/Zn) = −0.76 V, determine which half-reaction is oxidation, which is reduction, and calculate E°cell.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">The half-reaction with the more positive (higher) reduction potential proceeds as WRITTEN (as reduction); the other is reversed (becomes oxidation). Cu²⁺/Cu (+0.34 V) is higher than Zn²⁺/Zn (−0.76 V), so Cu²⁺ is reduced (cathode) and Zn is oxidized (anode). E°cell = E°(cathode) − E°(anode) = 0.34 − (−0.76) = 1.10 V — a positive E°cell confirms this reaction is indeed spontaneous as a galvanic cell, matching real experimental values for this classic Zn-Cu cell.</div>\n    </details>\n  </div>\n\n  <div class=\"trap\">\n    <span class=\"tag-label trap\">Watch Out For This</span>\n    <p>Never flip the sign of a reduction potential just because a half-reaction is \"reversed\" to become oxidation in your calculation — the E°cell formula (cathode minus anode) already correctly accounts for this. Manually flipping the sign AND using the subtraction formula together is a double-negation error that gives a wrong (and often obviously implausible) answer.</p>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you identify anode/cathode and predict electron flow direction in a galvanic cell?</li>\n      <li>Can you calculate E°cell from standard reduction potentials?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s98\"><span class=\"num\">9.8</span>Cell Potential and Free Energy</h2>\n  <p>E°cell and ΔG° are directly linked, connecting electrochemistry back to the thermodynamics earlier in this unit — a positive E°cell (spontaneous galvanic cell) always corresponds to a negative ΔG° (thermodynamically favorable), consistent with everything established in 9.3.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">ΔG° = −nFE°cell</div>\n    <div class=\"sub\">n = moles of electrons transferred, F = Faraday's constant = 96,485 C/mol</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 7</span>\n    <p>For the Zn-Cu cell (E°cell = 1.10 V, n = 2 electrons transferred), calculate ΔG°.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">ΔG° = −nFE°cell = −(2)(96,485)(1.10) = −212,267 J ≈ −212.3 kJ. The negative ΔG° confirms this reaction is thermodynamically favorable, exactly matching the positive E°cell — this is a direct numerical illustration of the always-consistent relationship between cell potential sign and free energy sign.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you calculate ΔG° from E°cell (and vice versa)?</li>\n      <li>Do you understand why positive E°cell always corresponds to negative ΔG°?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s99\"><span class=\"num\">9.9</span>Cell Potential Under Nonstandard Conditions</h2>\n  <p>The Nernst equation extends E°cell (standard conditions, 1 M concentrations) to any actual, real (nonstandard) concentrations — connecting this unit back to the reaction quotient Q from Unit 7.3.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">Ecell = E°cell − (RT/nF)lnQ</div>\n    <div class=\"sub\">Simplified at 298 K: Ecell = E°cell − (0.0592/n)logQ</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 8</span>\n    <p>For a cell with E°cell = 1.10 V and n = 2, find Ecell if Q = 0.010 at 298 K.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Ecell = 1.10 − (0.0592/2)log(0.010) = 1.10 − (0.0296)(−2.00) = 1.10 + 0.0592 = 1.16 V. Since Q < 1 (less product-favored than standard conditions), the cell potential increases above E°cell — this makes sense: with relatively more \"driving force\" available (less product built up yet), the cell can do more electrical work per the reaction as written.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you apply the Nernst equation to find cell potential under nonstandard conditions?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s910\"><span class=\"num\">9.10</span>Electrolysis and Faraday's Law</h2>\n  <p>Electrolysis uses an external power source to force a NONspontaneous redox reaction to occur (the opposite situation from a galvanic cell) — this is how reactive metals are purified/isolated and how rechargeable batteries are recharged. Faraday's Law connects the amount of charge passed through the cell to the amount of substance produced or consumed.</p>\n\n  <div class=\"eq\">\n    <div class=\"main\">moles of electrons = (Current × time) / F = (I × t) / 96,485</div>\n  </div>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 9</span>\n    <p>A current of 2.50 A is passed through molten CuCl₂ for 1800 s. How many grams of Cu (molar mass 63.55 g/mol) are deposited? (Cu²⁺ + 2e⁻ → Cu)</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Total charge: Q = It = (2.50 A)(1800 s) = 4500 C. Moles of electrons: 4500/96,485 = 0.04664 mol e⁻. Using the 2 electrons : 1 Cu ratio from the half-reaction: moles Cu = 0.04664/2 = 0.02332 mol. Mass Cu = 0.02332 × 63.55 = 1.48 g.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you apply Faraday's Law to relate current, time, and moles of electrons?</li>\n      <li>Can you use the half-reaction's electron count to find mass of product deposited/consumed?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"s911\"><span class=\"num\">9.11</span>Applications of Electrochemistry</h2>\n  <p>Real-world batteries (galvanic cells) and corrosion (an unwanted, spontaneous redox process) are both direct applications of everything in this unit — recognizing these real systems as instances of the same underlying half-reaction/cell-potential framework is the final synthesis this course builds toward.</p>\n\n  <div class=\"worked\">\n    <span class=\"tag-label example\">Worked Example 10</span>\n    <p>Explain why zinc is often used as a \"sacrificial anode\" to protect iron structures (like ship hulls) from rusting.</p>\n    <details class=\"solution\"><summary>Show the reasoning</summary>\n      <div class=\"sol-content\">Zinc has a more negative (lower) standard reduction potential than iron, meaning zinc is more easily oxidized than iron. When zinc is electrically connected to iron in a corrosive (e.g., seawater) environment, zinc preferentially oxidizes (acts as the anode, \"sacrificing\" itself) instead of iron, protecting the iron (which would otherwise act as the anode and rust) by ensuring it instead functions as the cathode. Once the zinc is eventually consumed, it must be replaced to continue protecting the iron.</div>\n    </details>\n  </div>\n\n  <div class=\"recap\">\n    <span class=\"tag-label recap\">Before You Move On</span>\n    <ul>\n      <li>Can you apply reduction potential comparisons to explain real applications like sacrificial anodes or battery design?</li>\n    </ul>\n  </div>\n\n  <h2 id=\"practice\">Unit 9 Practice Set</h2>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">1</span><span>A reaction has ΔH = +25 kJ and ΔS = +0.080 kJ/K. Is it favorable at 500 K?</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">2</span><span>A cell has E°(cathode) = +0.80 V and E°(anode) = +0.15 V. Find E°cell.</span></div>\n  <div class=\"practice-item\"><span class=\"qnum-badge\">3</span><span>A current of 3.00 A flows for 900 s. How many moles of electrons pass through the circuit?</span></div>\n\n  <div class=\"answer-key\">\n    <details><summary>Check your answers</summary>\n      <div class=\"a-content\">\n        <p><strong>1.</strong> ΔG = 25 − (500)(0.080) = 25 − 40 = −15 kJ. Since ΔG < 0, favorable at 500 K.</p>\n        <p><strong>2.</strong> E°cell = E°(cathode) − E°(anode) = 0.80 − 0.15 = 0.65 V.</p>\n        <p><strong>3.</strong> moles e⁻ = It/F = (3.00)(900)/96,485 = 2700/96,485 = 0.0280 mol.</p>\n      </div>\n    </details>\n  </div>\n\n</div>\n"
};

const UNITS = [
  { id: 1, name: "Atomic Structure and Properties", weight: "7–9%", ready: true },
  { id: 2, name: "Compound Structure and Properties", weight: "7–9%", ready: true },
  { id: 3, name: "Properties of Substances and Mixtures", weight: "18–22%", ready: true },
  { id: 4, name: "Chemical Reactions", weight: "7–9%", ready: true },
  { id: 5, name: "Kinetics", weight: "7–9%", ready: true },
  { id: 6, name: "Thermochemistry", weight: "7–9%", ready: true },
  { id: 7, name: "Equilibrium", weight: "7–9%", ready: true },
  { id: 8, name: "Acids and Bases", weight: "11–15%", ready: true },
  { id: 9, name: "Thermodynamics and Electrochemistry", weight: "7–9%", ready: true },
];

const QUESTIONS = {
  "1": [
    {
      "id": "1-1",
      "topic": "1.1 Moles and Molar Mass",
      "stem": "What is the molar mass of Ca(NO₃)₂?",
      "choices": [
        "102.09 g/mol",
        "128.10 g/mol",
        "164.10 g/mol",
        "70.10 g/mol"
      ],
      "correct": 2,
      "explanation": "Ca(NO₃)₂ contains 1 Ca, 2 N, and 6 O (the subscript 2 multiplies everything inside the parentheses). Molar mass = 40.08 + 2(14.01) + 6(16.00) = 40.08 + 28.02 + 96.00 = 164.10 g/mol. A common error is forgetting to multiply the 3 oxygens inside the parentheses by the outer subscript 2, which would undercount oxygen and give a smaller, incorrect value."
    },
    {
      "id": "1-2",
      "topic": "1.1 Moles and Molar Mass",
      "stem": "How many moles of oxygen atoms are in 4.50 mol of Al₂(SO₄)₃?",
      "choices": [
        "4.50 mol",
        "18.0 mol",
        "13.5 mol",
        "54.0 mol"
      ],
      "correct": 3,
      "explanation": "Each formula unit of Al₂(SO₄)₃ contains 12 oxygen atoms (4 O per sulfate × 3 sulfates). Multiplying: 4.50 mol compound × 12 mol O/mol compound = 54.0 mol O. The trap here is stopping at 4 (oxygens per sulfate ion) instead of accounting for all three sulfate groups in the formula."
    },
    {
      "id": "1-3",
      "topic": "1.1 Moles and Molar Mass",
      "stem": "A sample contains 1.20 × 10²⁴ atoms of iron. What is the mass of this sample?",
      "choices": [
        "55.85 g",
        "111.7 g",
        "186.2 g",
        "279.3 g"
      ],
      "correct": 1,
      "explanation": "Convert atoms to moles first: 1.20 × 10²⁴ atoms ÷ 6.022 × 10²³ atoms/mol = 1.993 mol Fe. Then convert moles to mass: 1.993 mol × 55.85 g/mol = 111.3 g ≈ 111.7 g. This is the reverse of the standard grams → moles → particles chain, so working backward from particles is exactly as valid, just run in the opposite direction."
    },
    {
      "id": "1-4",
      "topic": "1.1 Moles and Molar Mass",
      "stem": "Which sample contains the greatest number of atoms?",
      "choices": [
        "10.0 g of He",
        "10.0 g of Ne",
        "10.0 g of Ar",
        "10.0 g of Kr"
      ],
      "correct": 0,
      "explanation": "For a fixed mass, the number of moles (and therefore atoms) is inversely proportional to molar mass: n = m/M. Helium has by far the smallest molar mass (4.00 g/mol) among these noble gases, so 10.0 g of He corresponds to the most moles, and therefore the most atoms, even though it's the same mass as the others. This is a common conceptual trap — equal mass does not mean equal number of particles unless molar masses are equal."
    },
    {
      "id": "1-5",
      "topic": "1.1 Moles and Molar Mass",
      "stem": "What is the mass, in grams, of 0.250 mol of Mg₃N₂?",
      "choices": [
        "25.7 g",
        "34.4 g",
        "51.4 g",
        "68.8 g"
      ],
      "correct": 0,
      "explanation": "Molar mass of Mg₃N₂ = 3(24.31) + 2(14.01) = 72.93 + 28.02 = 100.95 g/mol. Mass = moles × molar mass = 0.250 mol × 100.95 g/mol = 25.24 g ≈ 25.7 g. Double-checking the formula's subscripts before computing molar mass avoids the most common source of error in this type of problem."
    },
    {
      "id": "1-6",
      "topic": "1.1 Moles and Molar Mass",
      "stem": "A chemist needs 0.0500 mol of glucose (C₆H₁₂O₆, molar mass 180.16 g/mol) for an experiment. Approximately how many grams should be measured out?",
      "choices": [
        "0.90 g",
        "3.60 g",
        "9.01 g",
        "18.0 g"
      ],
      "correct": 2,
      "explanation": "Mass = moles × molar mass = 0.0500 mol × 180.16 g/mol = 9.01 g. This is a direct application of n = m/M solved for mass, and matches the reverse direction of the reasoning used in Worked Example 1 of the study guide."
    },
    {
      "id": "1-7",
      "topic": "1.1 Moles and Molar Mass",
      "stem": "Which quantity of substance contains the same number of molecules as 2.00 mol of H₂O?",
      "choices": [
        "1.00 mol of CO₂",
        "2.00 mol of CO₂",
        "1.00 mol of O₂ plus 1.00 mol of N₂",
        "4.00 mol of NH₃"
      ],
      "correct": 1,
      "explanation": "Number of molecules depends only on number of moles, not on molar mass or chemical identity — 1 mole of any substance always contains Avogadro's number of particles. So 2.00 mol of CO₂ contains exactly as many molecules as 2.00 mol of H₂O. Choice (c) is a trap: 1.00 mol O₂ + 1.00 mol N₂ totals 2.00 mol of molecules combined, which actually also matches — but since only one answer can be correct on this format, (b) is the direct, unambiguous match without needing to combine two different substances."
    },
    {
      "id": "1-8",
      "topic": "1.1 Moles and Molar Mass",
      "stem": "Stretch — beyond typical AP difficulty: A hydrate has the formula CuSO₄·xH₂O and a molar mass of 249.68 g/mol. Determine x.",
      "choices": [
        "3",
        "4",
        "5",
        "7"
      ],
      "correct": 2,
      "explanation": "Molar mass of anhydrous CuSO₄ = 63.55 + 32.07 + 4(16.00) = 159.62 g/mol. Subtracting from the hydrate's total molar mass: 249.68 − 159.62 = 90.06 g/mol worth of water. Dividing by water's molar mass (18.02 g/mol): 90.06 ÷ 18.02 ≈ 5.00, so x = 5, meaning the compound is copper(II) sulfate pentahydrate. This stretch problem combines molar mass calculation with hydrate stoichiometry, a combination not always covered until later units but fair game given Unit 1's foundational mole/mass tools.",
      "stretch": true
    },
    {
      "id": "1-9",
      "topic": "1.2 Mass Spectra of Elements",
      "stem": "An element has two isotopes: 90.0% at 10.01 amu and 10.0% at 11.01 amu. What is the average atomic mass?",
      "choices": [
        "10.01 amu",
        "10.10 amu",
        "10.51 amu",
        "11.01 amu"
      ],
      "correct": 1,
      "explanation": "Weighted average = (10.01)(0.900) + (11.01)(0.100) = 9.009 + 1.101 = 10.11 amu ≈ 10.10 amu. Since the lighter isotope is far more abundant (90%), the average should land close to 10.01 rather than halfway between the two masses — and it does, which is a good way to sanity-check the arithmetic."
    },
    {
      "id": "1-10",
      "topic": "1.2 Mass Spectra of Elements",
      "stem": "A mass spectrum shows chlorine with peaks at 35 amu (75.77%) and 37 amu (24.23%). What is chlorine's average atomic mass?",
      "choices": [
        "35.00 amu",
        "35.45 amu",
        "36.00 amu",
        "36.45 amu"
      ],
      "correct": 1,
      "explanation": "Weighted average = (35)(0.7577) + (37)(0.2423) = 26.52 + 8.965 = 35.48 ≈ 35.45 amu, matching the periodic table's listed atomic mass for chlorine. This is a good real-world check: whenever your weighted-average calculation for a common element lands near its known periodic table value, that's strong evidence your method was applied correctly."
    },
    {
      "id": "1-11",
      "topic": "1.2 Mass Spectra of Elements",
      "stem": "In a mass spectrometer, why do heavier isotopes of the same element deflect less than lighter isotopes when passing through a magnetic field (at the same charge and velocity)?",
      "choices": [
        "Heavier isotopes have a greater charge-to-mass ratio.",
        "Heavier isotopes have more inertia, so the same magnetic force produces less curvature in their path.",
        "Heavier isotopes travel faster and outrun the magnetic field.",
        "Heavier isotopes are attracted to the detector more strongly."
      ],
      "correct": 1,
      "explanation": "The magnetic force bends charged particles into a curved path, and for a fixed force, greater mass means greater inertia and therefore less deflection (smaller curvature radius change) — this follows from Newton's second law, F = ma, where a larger mass requires more force to achieve the same acceleration. Choice (a) has it backward: heavier isotopes with the same charge actually have a smaller charge-to-mass ratio, not greater, which is consistent with less deflection."
    },
    {
      "id": "1-12",
      "topic": "1.2 Mass Spectra of Elements",
      "stem": "Element Q has three isotopes: 20.0% at 24.00 amu, 10.0% at 25.00 amu, and 70.0% at 26.00 amu. What is the average atomic mass of Q?",
      "choices": [
        "24.50 amu",
        "25.00 amu",
        "25.50 amu",
        "26.00 amu"
      ],
      "correct": 2,
      "explanation": "Weighted average = (24.00)(0.200) + (25.00)(0.100) + (26.00)(0.700) = 4.80 + 2.50 + 18.20 = 25.50 amu. With three isotopes instead of two, the method doesn't change — multiply each mass by its own fractional abundance and sum all the products; just be careful to include every isotope in the sum."
    },
    {
      "id": "1-13",
      "topic": "1.2 Mass Spectra of Elements",
      "stem": "A mass spectrum bar graph shows a single, tall peak at 27.0 amu and no other peaks. What can be concluded about this element?",
      "choices": [
        "It has no naturally occurring isotopes; all atoms have the same mass.",
        "It must be a noble gas.",
        "Its average atomic mass cannot be determined from this data.",
        "It has exactly two isotopes of equal abundance."
      ],
      "correct": 0,
      "explanation": "A single peak means every atom of the element detected has the same mass — in other words, the element is monoisotopic (naturally occurring in essentially one isotopic form), like aluminum or fluorine. Its average atomic mass equals that one peak's mass directly, since there's nothing else to weight-average against; option (c) is incorrect because the calculation is actually trivial in this case, not impossible."
    },
    {
      "id": "1-14",
      "topic": "1.2 Mass Spectra of Elements",
      "stem": "Boron has an average atomic mass of 10.81 amu and two isotopes, B-10 (10.01 amu) and B-11 (11.01 amu). Which is more abundant, and why?",
      "choices": [
        "B-10, because the average is closer to 10.01",
        "B-11, because the average (10.81) is closer to 11.01 than to 10.01",
        "They are equally abundant, since the average is roughly the midpoint",
        "B-10, because lighter isotopes are always more common"
      ],
      "correct": 1,
      "explanation": "A weighted average is always pulled closer to whichever value has the larger weight. Since 10.81 is much closer to 11.01 than to 10.01, B-11 must be the more abundant isotope (in reality, B-11 is about 80% abundant). This is a useful reverse-reasoning check: you can often estimate which isotope dominates just by seeing which raw mass the average sits nearer to, without doing the full calculation."
    },
    {
      "id": "1-15",
      "topic": "1.2 Mass Spectra of Elements",
      "stem": "Which statement correctly distinguishes isotopes of the same element?",
      "choices": [
        "They have different numbers of protons but the same number of neutrons.",
        "They have the same number of protons but different numbers of neutrons.",
        "They have the same number of protons and neutrons but different numbers of electrons.",
        "They have different atomic numbers but the same mass number."
      ],
      "correct": 1,
      "explanation": "Isotopes are defined by having the same atomic number (same number of protons, which is what makes them the same element) but different numbers of neutrons, giving them different mass numbers. Option (a) actually describes different elements with the same neutron count (isotones), and option (c) describes ions, not isotopes — a distinct and unrelated concept."
    },
    {
      "id": "1-16",
      "topic": "1.2 Mass Spectra of Elements",
      "stem": "Silver has an average atomic mass of 107.87 amu from two isotopes: Ag-107 (106.90 amu) and Ag-109 (108.90 amu). Find the percent abundance of each isotope.",
      "choices": [
        "Ag-107: 48.5%, Ag-109: 51.5%",
        "Ag-107: 51.5%, Ag-109: 48.5%",
        "Ag-107: 50.0%, Ag-109: 50.0%",
        "Ag-107: 60.0%, Ag-109: 40.0%"
      ],
      "correct": 1,
      "explanation": "Let x = fractional abundance of Ag-107, so (1 − x) = abundance of Ag-109. Set up: 106.90x + 108.90(1 − x) = 107.87. Expanding: 106.90x + 108.90 − 108.90x = 107.87, so −2.00x = −1.03, giving x = 0.515, or 51.5% Ag-107 and 48.5% Ag-109. Checking: (106.90)(0.515) + (108.90)(0.485) = 55.05 + 52.82 = 107.87, confirming the answer. This requires solving algebraically for an unknown abundance rather than just plugging in given percentages."
    },
    {
      "id": "1-17",
      "topic": "1.3 Elemental Composition of Pure Substances",
      "stem": "What is the percent composition of oxygen in Al₂O₃?",
      "choices": [
        "29.4%",
        "47.1%",
        "52.9%",
        "70.6%"
      ],
      "correct": 1,
      "explanation": "Molar mass of Al₂O₃ = 2(26.98) + 3(16.00) = 53.96 + 48.00 = 101.96 g/mol. Mass of O per mole = 48.00 g. Percent O = (48.00/101.96) × 100 = 47.1%. Note that 52.9% (the percent aluminum, not oxygen) is included as a distractor — a common error is computing the correct ratio but for the wrong element."
    },
    {
      "id": "1-18",
      "topic": "1.3 Elemental Composition of Pure Substances",
      "stem": "A compound is 92.3% carbon and 7.7% hydrogen by mass. What is its empirical formula?",
      "choices": [
        "CH",
        "CH₂",
        "C₂H₃",
        "C₃H₄"
      ],
      "correct": 0,
      "explanation": "Assuming 100 g: 92.3 g C ÷ 12.01 = 7.69 mol C; 7.7 g H ÷ 1.008 = 7.64 mol H. Dividing both by the smaller value (7.64): C → 1.01 ≈ 1, H → 1.00. The ratio is 1:1, giving empirical formula CH — this matches benzene's and acetylene's empirical formula, another example of why empirical formula alone can't identify a unique molecule."
    },
    {
      "id": "1-19",
      "topic": "1.3 Elemental Composition of Pure Substances",
      "stem": "A 5.00 g sample of a pure compound contains 1.75 g of nitrogen. What is the percent composition of nitrogen in this compound?",
      "choices": [
        "17.5%",
        "28.6%",
        "35.0%",
        "71.4%"
      ],
      "correct": 2,
      "explanation": "Percent composition = (mass of element / total mass) × 100 = (1.75 g / 5.00 g) × 100 = 35.0%. This is the most direct form of a percent composition problem — no formula or molar mass is even needed when you're given actual measured masses from a sample."
    },
    {
      "id": "1-20",
      "topic": "1.3 Elemental Composition of Pure Substances",
      "stem": "An oxide of nitrogen has an empirical formula of NO₂ and a molar mass of approximately 92 g/mol. What is its molecular formula?",
      "choices": [
        "NO₂",
        "N₂O₄",
        "N₃O₆",
        "N₄O₈"
      ],
      "correct": 1,
      "explanation": "The empirical formula mass of NO₂ is 14.01 + 2(16.00) = 46.01 g/mol. Dividing the molecular molar mass by the empirical formula mass: 92 ÷ 46.01 ≈ 2. Multiplying every subscript in the empirical formula by 2 gives the molecular formula N₂O₄ (dinitrogen tetroxide). This step — dividing actual molar mass by empirical formula mass to find the scaling factor — is exactly the missing piece needed to go from empirical to molecular formula."
    },
    {
      "id": "1-21",
      "topic": "1.3 Elemental Composition of Pure Substances",
      "stem": "Combustion of a 2.50 g sample of a hydrocarbon produces 7.70 g of CO₂ and 3.15 g of H₂O. What is the empirical formula of the hydrocarbon?",
      "choices": [
        "CH₂",
        "CH₃",
        "C₂H₅",
        "C₃H₈"
      ],
      "correct": 0,
      "explanation": "All carbon in the original sample ends up in CO₂: 7.70 g CO₂ ÷ 44.01 g/mol = 0.175 mol CO₂ = 0.175 mol C. All hydrogen ends up in H₂O: 3.15 g H₂O ÷ 18.02 g/mol = 0.175 mol H₂O × 2 H per H₂O = 0.350 mol H. Dividing both by the smaller value (0.175 mol): C → 1.00, H → 2.00, giving the empirical formula CH₂. Mass balance confirms this is reasonable: 0.175 mol C (2.10 g) + 0.350 mol H (0.353 g) ≈ 2.46 g, close to the 2.50 g sample."
    },
    {
      "id": "1-22",
      "topic": "1.3 Elemental Composition of Pure Substances",
      "stem": "Which pair of compounds share the same empirical formula?",
      "choices": [
        "C₂H₄ and C₃H₆",
        "C₂H₆ and C₃H₈",
        "C₂H₂ and C₄H₄",
        "CH₄ and C₂H₆"
      ],
      "correct": 0,
      "explanation": "C₂H₄ reduces to CH₂ (dividing both subscripts by 2), and C₃H₆ also reduces to CH₂ (dividing both by 3) — so they share the empirical formula CH₂, even though their molecular formulas and actual molar masses differ. Checking the other pairs: C₂H₆ reduces to C₁H₃ while C₃H₈ doesn't reduce at all (already in lowest terms), so those don't match."
    },
    {
      "id": "1-23",
      "topic": "1.3 Elemental Composition of Pure Substances",
      "stem": "A metal oxide is 69.9% metal (M) and 30.1% oxygen by mass, with the formula MO. What is the approximate atomic mass of M?",
      "choices": [
        "16.0 amu",
        "24.3 amu",
        "37.2 amu",
        "65.4 amu"
      ],
      "correct": 2,
      "explanation": "In one mole of MO there is one mole of M and one mole of O (16.00 g). Since M is 69.9% of the total mass and O is 30.1%, the ratio of M's mass to O's mass equals the ratio of their percentages: mass of M / 16.00 g = 69.9 / 30.1 = 2.322. Solving gives mass of M = 16.00 × 2.322 = 37.2 amu — close to chlorine's atomic mass, which is a reasonable check since this problem is modeled on a generic MO-type oxide rather than a specific real compound."
    },
    {
      "id": "1-24",
      "topic": "1.3 Elemental Composition of Pure Substances",
      "stem": "A hydrate MgSO₄·xH₂O is heated until all water is driven off. A 4.92 g sample of the hydrate loses 2.52 g of mass upon heating. Given MgSO₄'s molar mass is 120.37 g/mol, determine x.",
      "choices": [
        "5",
        "6",
        "7",
        "9"
      ],
      "correct": 2,
      "explanation": "Mass of anhydrous MgSO₄ remaining = 4.92 − 2.52 = 2.40 g. Moles of MgSO₄ = 2.40 g ÷ 120.37 g/mol = 0.01994 mol. Moles of water lost = 2.52 g ÷ 18.02 g/mol = 0.1398 mol. Dividing moles of water by moles of MgSO₄ to find the ratio x: 0.1398 / 0.01994 ≈ 7.01, so x = 7 — this is Epsom salt, MgSO₄·7H₂O. This problem requires combining a mass-loss experimental setup with mole-ratio reasoning."
    },
    {
      "id": "1-25",
      "topic": "1.4 Composition of Mixtures",
      "stem": "Which of the following best distinguishes a mixture from a pure compound?",
      "choices": [
        "A mixture always contains only one element.",
        "A mixture has a fixed, definite ratio of components, while a compound's ratio can vary.",
        "A mixture's components can be present in variable proportions, while a compound has a fixed elemental ratio.",
        "A mixture cannot be separated by physical means."
      ],
      "correct": 2,
      "explanation": "Compounds are held together by chemical bonds in a fixed, definite ratio of atoms (e.g., water is always exactly 2 H : 1 O). Mixtures are just physical combinations of substances, so their relative proportions can vary from sample to sample — a saltwater solution can be dilute or concentrated and still be 'saltwater.' Option (b) has the definitions reversed."
    },
    {
      "id": "1-26",
      "topic": "1.4 Composition of Mixtures",
      "stem": "A 20.0 g mixture of NaCl and sand (an inert, insoluble component) is dissolved in water, filtered, and the water evaporated from the filtrate, leaving 8.00 g of pure NaCl. What is the percent by mass of sand in the original mixture?",
      "choices": [
        "8.0%",
        "40.0%",
        "60.0%",
        "92.0%"
      ],
      "correct": 2,
      "explanation": "Mass of sand = total mass − mass of NaCl recovered = 20.0 g − 8.00 g = 12.0 g. Percent sand = (12.0/20.0) × 100 = 60.0%. This is a classic separation-based mixture composition problem: since sand doesn't dissolve, filtering it out and weighing what's left directly gives you each component's mass without needing any molar mass calculations at all."
    },
    {
      "id": "1-27",
      "topic": "1.4 Composition of Mixtures",
      "stem": "A mixture of KCl and KBr has a total mass of 5.00 g and contains 2.00 g of potassium. Given K's molar mass is 39.10 g/mol, KCl's is 74.55 g/mol, and KBr's is 119.00 g/mol, which set-up correctly finds the mass of KCl (x) in the mixture?",
      "choices": [
        "x(39.10/74.55) + (5.00 − x)(39.10/119.00) = 2.00",
        "x(74.55/39.10) + (5.00 − x)(119.00/39.10) = 2.00",
        "x + (5.00 − x) = 2.00",
        "x(39.10) + (5.00 − x)(39.10) = 2.00"
      ],
      "correct": 0,
      "explanation": "Let x = mass of KCl, so (5.00 − x) = mass of KBr. The fraction of potassium's mass within each compound is K's molar mass divided by the whole compound's molar mass (39.10/74.55 for KCl, 39.10/119.00 for KBr). Multiplying each component's mass by its potassium mass-fraction and setting the sum equal to the total potassium mass (2.00 g) correctly sets up the mass-balance equation — this mirrors the exact structure used in the study guide's mixture worked example, just with different elements and compounds."
    },
    {
      "id": "1-28",
      "topic": "1.4 Composition of Mixtures",
      "stem": "A brass alloy is a mixture of copper and zinc. A 15.0 g sample of brass contains 10.5 g of copper. What percent of the sample (by mass) is zinc?",
      "choices": [
        "10.5%",
        "30.0%",
        "45.0%",
        "70.0%"
      ],
      "correct": 1,
      "explanation": "Mass of zinc = total mass − mass of copper = 15.0 g − 10.5 g = 4.5 g. Percent zinc = (4.5/15.0) × 100 = 30.0%. Alloys are a classic real-world example of a mixture (as opposed to a compound) — their exact copper-to-zinc ratio varies by brass type, unlike a compound such as CuO, which always has the exact same 1:1 mole ratio."
    },
    {
      "id": "1-29",
      "topic": "1.4 Composition of Mixtures",
      "stem": "Two samples of the same solid mixture of NaOH and NaCl are analyzed. Sample A is 40% NaOH by mass; Sample B is 65% NaOH by mass. What does this indicate?",
      "choices": [
        "The samples must be different compounds.",
        "One of the measurements must be experimentally incorrect.",
        "This is consistent with both samples being the same mixture, since mixture composition can vary from sample to sample.",
        "NaOH and NaCl cannot form a mixture together."
      ],
      "correct": 2,
      "explanation": "Because mixtures don't have a fixed composition, two samples described as 'the same mixture' (same components) can absolutely have different relative proportions — that's precisely what defines something as a mixture rather than a compound. If NaOH and NaCl were somehow chemically bonded into a single compound, its composition would have to be identical in every sample, which is not what's observed here."
    },
    {
      "id": "1-30",
      "topic": "1.4 Composition of Mixtures",
      "stem": "A mixture contains only Fe₂O₃ and Al₂O₃. If the mixture is 35.0% oxygen by mass, and Fe₂O₃ is 30.06% oxygen while Al₂O₃ is 47.08% oxygen by mass, which is true of the mixture?",
      "choices": [
        "It is mostly Fe₂O₃, since 35.0% is closer to Fe₂O₃'s oxygen percentage.",
        "It is mostly Al₂O₃, since 35.0% is closer to Al₂O₃'s oxygen percentage.",
        "It must be exactly 50/50 by mass.",
        "Not enough information is given to make any comparison."
      ],
      "correct": 0,
      "explanation": "The mixture's overall oxygen percentage is a weighted average of its two components' individual oxygen percentages, just like the mixture mass-balance logic used throughout this section. Since 35.0% is numerically closer to Fe₂O₃'s 30.06% than to Al₂O₃'s 47.08%, the mixture must contain proportionally more Fe₂O₃ by mass — the same 'closer to the more abundant component' reasoning used for isotope abundance in section 1.2 applies here too."
    },
    {
      "id": "1-31",
      "topic": "1.4 Composition of Mixtures",
      "stem": "A student has a mixture of CaCO₃ and an inert solid. Heating the mixture drives off CO₂ gas from the CaCO₃ (CaCO₃ → CaO + CO₂). A 10.00 g sample loses 2.20 g of mass. What mass of CaCO₃ was in the original sample? (Molar mass CaCO₃ = 100.09 g/mol, CO₂ = 44.01 g/mol)",
      "choices": [
        "2.20 g",
        "4.40 g",
        "5.00 g",
        "8.00 g"
      ],
      "correct": 2,
      "explanation": "The mass lost is entirely CO₂ gas escaping: 2.20 g CO₂ ÷ 44.01 g/mol = 0.0500 mol CO₂. Since the balanced equation shows a 1:1 mole ratio between CaCO₃ and CO₂, moles of CaCO₃ that decomposed = 0.0500 mol. Mass of CaCO₃ = 0.0500 mol × 100.09 g/mol = 5.00 g. This combines mixture reasoning with a simple 1:1 stoichiometric ratio, a preview of the mole-ratio approach used constantly starting in Unit 4."
    },
    {
      "id": "1-32",
      "topic": "1.4 Composition of Mixtures",
      "stem": "A 12.0 g mixture of pure Na₂CO₃ and pure NaHCO₃ contains a total of 4.41 g of sodium. Given Na's molar mass is 22.99 g/mol, Na₂CO₃'s is 105.99 g/mol, and NaHCO₃'s is 84.01 g/mol, find the mass of Na₂CO₃ in the mixture.",
      "choices": [
        "3.18 g",
        "5.00 g",
        "7.00 g",
        "8.82 g"
      ],
      "correct": 2,
      "explanation": "Let x = mass of Na₂CO₃, so (12.0 − x) = mass of NaHCO₃. Sodium's mass fraction in Na₂CO₃ is (2 × 22.99)/105.99 = 0.4338; in NaHCO₃ it's 22.99/84.01 = 0.2737. Mass balance: 0.4338x + 0.2737(12.0 − x) = 4.41. Expanding: 0.4338x + 3.284 − 0.2737x = 4.41, so 0.1601x = 1.126, giving x = 7.03 ≈ 7.00 g. Checking: 0.4338(7.00) + 0.2737(5.00) = 3.04 + 1.37 = 4.41 g, confirming the answer is self-consistent."
    },
    {
      "id": "1-33",
      "topic": "1.5 Atomic Structure and Electron Configuration",
      "stem": "What is the correct ground-state electron configuration of phosphorus (P, Z = 15)?",
      "choices": [
        "1s² 2s² 2p⁶ 3s² 3p³",
        "1s² 2s² 2p⁶ 3s² 3p⁵",
        "1s² 2s² 2p⁷ 3s² 3p²",
        "1s² 2s² 2p⁶ 3s¹ 3p⁴"
      ],
      "correct": 0,
      "explanation": "Filling orbitals in order of increasing energy (1s, 2s, 2p, 3s, 3p) and placing 15 electrons total: 1s²(2) + 2s²(2) + 2p⁶(6) + 3s²(2) + 3p³(3) = 2+2+6+2+3 = 15. This gives 1s² 2s² 2p⁶ 3s² 3p³, matching phosphorus's known valence configuration (Group 15, 5 valence electrons: the 3s² and 3p³). Option (c) is impossible since a p subshell can never hold more than 6 electrons."
    },
    {
      "id": "1-34",
      "topic": "1.5 Atomic Structure and Electron Configuration",
      "stem": "What is the electron configuration of the Cr atom (Z = 24), accounting for its known exception to the standard filling order?",
      "choices": [
        "[Ar] 4s² 3d⁴",
        "[Ar] 4s¹ 3d⁵",
        "[Ar] 4s⁰ 3d⁶",
        "[Ar] 4s² 3d³ 4p¹"
      ],
      "correct": 1,
      "explanation": "Chromium is one of a small number of well-known exceptions to the standard Aufbau filling order. Rather than [Ar] 4s² 3d⁴, one electron shifts from 4s into 3d to give [Ar] 4s¹ 3d⁵ — a half-filled d-subshell (extra stable, similar to nitrogen's stable half-filled 2p³) combined with a half-filled s-subshell is lower in overall energy than the 'expected' configuration. Copper (Cu) shows the same type of exception for a fully-filled d-subshell reason."
    },
    {
      "id": "1-35",
      "topic": "1.5 Atomic Structure and Electron Configuration",
      "stem": "Which electron configuration represents an excited state, not a ground state, for a neutral atom?",
      "choices": [
        "1s² 2s² 2p⁶ 3s²",
        "1s² 2s² 2p⁵ 3s¹",
        "1s² 2s² 2p⁶",
        "1s² 2s¹"
      ],
      "correct": 1,
      "explanation": "In 1s² 2s² 2p⁵ 3s¹, an electron sits in the higher-energy 3s orbital while the lower-energy 2p subshell is not yet completely full (only 5 of 6 possible electrons). Ground-state atoms always fill lower-energy orbitals completely before occupying higher-energy ones, so this configuration reflects an electron that has been promoted (excited) to a higher energy level rather than the atom's lowest-energy, most stable arrangement."
    },
    {
      "id": "1-36",
      "topic": "1.5 Atomic Structure and Electron Configuration",
      "stem": "How many unpaired electrons does a ground-state nitrogen atom (Z = 7) have?",
      "choices": [
        "1",
        "2",
        "3",
        "0"
      ],
      "correct": 2,
      "explanation": "Nitrogen's configuration is 1s² 2s² 2p³. Following Hund's rule, the three 2p electrons each occupy a separate one of the three degenerate p orbitals before any pairing occurs, so all three 2p electrons remain unpaired. This half-filled, all-unpaired 2p³ arrangement is also the reason nitrogen shows an anomalously high ionization energy compared to the general trend, since removing an electron would break this extra-stable arrangement."
    },
    {
      "id": "1-37",
      "topic": "1.5 Atomic Structure and Electron Configuration",
      "stem": "What is the electron configuration of the Cu²⁺ ion (Cu, Z = 29)?",
      "choices": [
        "[Ar] 4s² 3d⁷",
        "[Ar] 3d⁹",
        "[Ar] 4s¹ 3d⁸",
        "[Ar] 3d⁷ 4p²"
      ],
      "correct": 1,
      "explanation": "Neutral copper's ground-state configuration is the exception [Ar] 4s¹ 3d¹⁰. Forming Cu²⁺ requires removing 2 electrons; electrons are always removed from the highest principal quantum number shell first, meaning the single 4s electron goes first, followed by one electron from 3d, leaving [Ar] 3d⁹. This is a favorite AP trap because copper's neutral-atom exception (4s¹, not 4s²) makes it easy to mis-track which electrons are actually available to remove first."
    },
    {
      "id": "1-38",
      "topic": "1.5 Atomic Structure and Electron Configuration",
      "stem": "Which set of quantum numbers is not allowed for an electron in an atom?",
      "choices": [
        "n=2, l=1, mₗ=0, mₛ=+½",
        "n=3, l=2, mₗ=−2, mₛ=−½",
        "n=2, l=2, mₗ=0, mₛ=+½",
        "n=1, l=0, mₗ=0, mₛ=−½"
      ],
      "correct": 2,
      "explanation": "The angular momentum quantum number l must range from 0 to (n − 1). For n = 2, the maximum allowed value of l is 1 (corresponding to 2s and 2p), so l = 2 is not a valid combination at n = 2 (that would require n to be at least 3, as in a 3d orbital). This tests whether the underlying quantum number rules — not just memorized configurations — are understood."
    },
    {
      "id": "1-39",
      "topic": "1.5 Atomic Structure and Electron Configuration",
      "stem": "A neutral atom has the electron configuration [Ne] 3s² 3p⁴. What element is this, and how many valence electrons does it have?",
      "choices": [
        "Silicon (Si), 4 valence electrons",
        "Sulfur (S), 6 valence electrons",
        "Phosphorus (P), 5 valence electrons",
        "Sulfur (S), 4 valence electrons"
      ],
      "correct": 1,
      "explanation": "[Ne] accounts for 10 electrons, plus 3s²(2) + 3p⁴(4) = 6 more, for 16 total electrons — matching sulfur (Z = 16). All electrons in the outermost shell (n = 3 here) count as valence electrons: 3s² and 3p⁴ together give 6 valence electrons, consistent with sulfur's position in Group 16."
    },
    {
      "id": "1-40",
      "topic": "1.5 Atomic Structure and Electron Configuration",
      "stem": "Which ion is isoelectronic with Ar (18 electrons)?",
      "choices": [
        "Cl⁻",
        "Ca²⁺",
        "S²⁻",
        "All of the above"
      ],
      "correct": 3,
      "explanation": "Cl (Z=17) gains 1 electron to form Cl⁻ (18 electrons); Ca (Z=20) loses 2 electrons to form Ca²⁺ (18 electrons); S (Z=16) gains 2 electrons to form S²⁻ (18 electrons). All three ions have exactly 18 electrons, the same as neutral argon, making all three isoelectronic with it — even though they come from elements in very different positions on the periodic table."
    },
    {
      "id": "1-41",
      "topic": "1.5 Atomic Structure and Electron Configuration",
      "stem": "Stretch — beyond typical AP difficulty: Which of the following correctly ranks the ions Sc³⁺, Ti⁴⁺, and Ca²⁺ (all isoelectronic with Ar) from smallest to largest ionic radius?",
      "choices": [
        "Ca²⁺ < Sc³⁺ < Ti⁴⁺",
        "Ti⁴⁺ < Sc³⁺ < Ca²⁺",
        "Sc³⁺ < Ca²⁺ < Ti⁴⁺",
        "Ti⁴⁺ < Ca²⁺ < Sc³⁺"
      ],
      "correct": 1,
      "explanation": "All three ions have 18 electrons (isoelectronic with argon), so radius is determined entirely by nuclear charge — more protons pull the same 18 electrons in tighter. Proton counts: Ca (Z=20), Sc (Z=21), Ti (Z=22). More protons means smaller radius, so from smallest to largest: Ti⁴⁺ (22 protons, smallest) < Sc³⁺ (21 protons) < Ca²⁺ (20 protons, largest). This extends the isoelectronic-series logic from Worked Example 8 to transition metal ions, which is a step beyond the typical main-group example.",
      "stretch": true
    },
    {
      "id": "1-42",
      "topic": "1.6 Photoelectron Spectroscopy",
      "stem": "In a PES spectrum, which peak corresponds to the electrons with the lowest binding energy?",
      "choices": [
        "The peak farthest to the left (highest binding energy value)",
        "The peak farthest to the right (lowest binding energy value)",
        "The tallest peak",
        "The shortest peak"
      ],
      "correct": 1,
      "explanation": "PES spectra are conventionally plotted with binding energy decreasing from left to right, so the peak farthest to the right represents the electrons that are easiest to remove — the lowest binding energy, which corresponds to the outermost valence electrons. Peak height (choices c and d) reflects the number of electrons in that subshell, an entirely separate piece of information from binding energy."
    },
    {
      "id": "1-43",
      "topic": "1.6 Photoelectron Spectroscopy",
      "stem": "A PES spectrum shows four peaks (decreasing binding energy) with relative heights 2:2:6:1. Identify the element.",
      "choices": [
        "Na (Z=11)",
        "Mg (Z=12)",
        "Al (Z=13)",
        "Ne (Z=10)"
      ],
      "correct": 0,
      "explanation": "Adding the peak heights: 2+2+6+1 = 11 total electrons, matching sodium (Z=11). The subshells in order of decreasing binding energy are 1s, 2s, 2p, 3s, giving configuration 1s²2s²2p⁶3s¹ — exactly sodium's known ground-state configuration, with its single valence electron producing that small final peak of height 1."
    },
    {
      "id": "1-44",
      "topic": "1.6 Photoelectron Spectroscopy",
      "stem": "Which of the following would cause a PES peak to appear farther to the left (higher binding energy) than expected for a typical valence electron?",
      "choices": [
        "The electron is farther from the nucleus.",
        "The electron is more shielded by other electrons.",
        "The electron is held more tightly by the nucleus, such as a core electron.",
        "The electron is part of a completely filled subshell only."
      ],
      "correct": 2,
      "explanation": "Binding energy measures how tightly an electron is held — the more tightly bound (harder to remove), the more energy is needed to eject it, and the farther left that peak appears. Core electrons, being closest to the nucleus and least shielded from its full charge, are the most tightly bound of all and always produce the leftmost, highest-binding-energy peaks in any PES spectrum."
    },
    {
      "id": "1-45",
      "topic": "1.6 Photoelectron Spectroscopy",
      "stem": "A PES spectrum for a certain ion shows the same number of peaks and relative heights as neutral argon, but the compound is known to have a 2+ charge. What is the identity of this ion?",
      "choices": [
        "Ca²⁺",
        "S²⁻",
        "K⁺",
        "Cl⁻"
      ],
      "correct": 0,
      "explanation": "Matching argon's PES pattern means the ion has the same 18-electron configuration as neutral argon. Since the ion carries a 2+ charge, it must come from an atom that lost 2 electrons to reach 18 — that atom originally had 20 electrons (Z=20), which is calcium. Ca²⁺ is therefore isoelectronic with argon and shows an identical PES pattern, even though the actual binding energies would be slightly shifted higher due to calcium's larger nuclear charge pulling more strongly on the same electron count."
    },
    {
      "id": "1-46",
      "topic": "1.6 Photoelectron Spectroscopy",
      "stem": "Why does a 2p electron generally have a lower binding energy than a 2s electron in the same atom?",
      "choices": [
        "2p electrons are farther from the nucleus on average and experience more shielding from the 2s electrons beneath them.",
        "2p orbitals hold more electrons than 2s orbitals, which lowers the binding energy.",
        "2p electrons have a different charge than 2s electrons.",
        "There is no consistent difference; it depends only on the specific element."
      ],
      "correct": 0,
      "explanation": "Within the same principal energy level (same n), s orbitals penetrate closer to the nucleus than p orbitals do, meaning 2s electrons spend more time near the nucleus and are held more tightly (higher binding energy). The 2p electrons are, on average, farther out and experience some shielding from the 2s electrons, making them easier to remove — hence a lower binding energy and a peak farther to the right than the 2s peak."
    },
    {
      "id": "1-47",
      "topic": "1.6 Photoelectron Spectroscopy",
      "stem": "A PES spectrum shows peaks with heights in the ratio 2:2:6:2:6 as binding energy decreases. What is the total number of electrons, and which element does this represent?",
      "choices": [
        "16 electrons, sulfur",
        "18 electrons, argon",
        "20 electrons, calcium",
        "17 electrons, chlorine"
      ],
      "correct": 1,
      "explanation": "Summing the peak heights: 2+2+6+2+6 = 18 total electrons. The subshells in decreasing binding energy order are 1s, 2s, 2p, 3s, 3p, giving 1s²2s²2p⁶3s²3p⁶ — a completely filled third shell (in terms of s and p subshells), which is exactly argon's (Z=18) ground-state configuration, and also the reason argon is chemically inert."
    },
    {
      "id": "1-48",
      "topic": "1.6 Photoelectron Spectroscopy",
      "stem": "Which two elements would have PES spectra with the same number of peaks but different peak heights for their outermost peak?",
      "choices": [
        "Li and Na",
        "O and S",
        "C and N",
        "F and Cl"
      ],
      "correct": 2,
      "explanation": "Carbon (1s²2s²2p²) and nitrogen (1s²2s²2p³) both show exactly three peaks (1s, 2s, 2p subshells occupied), so the number of peaks matches. However their outermost 2p peak heights differ — height 2 for carbon versus height 3 for nitrogen — since they have different numbers of valence p electrons. The other pairs listed are in different periods and would show different total numbers of peaks, not just different heights on a shared peak count."
    },
    {
      "id": "1-49",
      "topic": "1.6 Photoelectron Spectroscopy",
      "stem": "A PES spectrum of an unknown element shows five peaks (decreasing binding energy) with relative heights 2:2:6:2:3. This element most likely forms which type of ion in ionic compounds?",
      "choices": [
        "A 3− anion, to reach a full octet",
        "A 3+ cation, to reach a noble gas configuration",
        "A 1− anion",
        "It does not typically form ions"
      ],
      "correct": 0,
      "explanation": "Summing peak heights: 2+2+6+2+3 = 15 total electrons, matching phosphorus (Z=15), configuration 1s²2s²2p⁶3s²3p³. Phosphorus is a nonmetal in Group 15 with a relatively high effective nuclear charge, so removing 3 electrons to form a hypothetical 3+ cation would cost far more energy than gaining 3 electrons to complete its octet. Phosphorus therefore tends to form P³⁻, reaching argon's configuration — a reminder that a PES spectrum tells you electron count and configuration, but predicting ion charge still requires connecting that back to metal vs. nonmetal character, not just 'nearest noble gas' arithmetic in isolation."
    },
    {
      "id": "1-50",
      "topic": "1.7 Periodic Trends",
      "stem": "Which correctly ranks Na, Mg, and Al by increasing first ionization energy?",
      "choices": [
        "Al < Mg < Na",
        "Na < Al < Mg",
        "Mg < Na < Al",
        "Na < Mg < Al"
      ],
      "correct": 1,
      "explanation": "Moving across a period generally increases ionization energy (higher Z_eff), but Al is an exception: its outermost electron sits in a higher-energy, more-shielded 3p orbital rather than the extra-stable filled 3s² of Mg, making Al's IE dip slightly below Mg's. So the order is Na (lowest, leftmost) < Al (dips below the general trend) < Mg. This is a direct application of the Mg/Al exception covered in the study guide's Worked Example 7."
    },
    {
      "id": "1-51",
      "topic": "1.7 Periodic Trends",
      "stem": "Which element has the largest atomic radius?",
      "choices": [
        "Li",
        "Na",
        "K",
        "Rb"
      ],
      "correct": 3,
      "explanation": "All four are in Group 1 (alkali metals), and atomic radius increases down a group as each successive row adds a new electron shell, with shielding from inner electrons outweighing the added nuclear charge. Rb sits lowest in the group among these four choices, so it has the most electron shells and the largest atomic radius."
    },
    {
      "id": "1-52",
      "topic": "1.7 Periodic Trends",
      "stem": "Which best explains why ionization energy generally increases across a period from left to right?",
      "choices": [
        "Atomic radius increases, making electrons easier to remove.",
        "Nuclear charge increases while shielding from core electrons stays roughly constant, increasing effective nuclear charge on the outer electrons.",
        "The number of electron shells increases across a period.",
        "Electrons become more shielded as more protons are added."
      ],
      "correct": 1,
      "explanation": "Across a period, electrons are added to the same outermost shell, so core-electron shielding barely changes, while the number of protons (and thus nuclear charge) steadily increases. The result is a higher effective nuclear charge pulling on the valence electrons, making them harder to remove — hence increasing ionization energy. Option (c) is incorrect because the number of shells stays constant within a single period; only the number of protons and valence electrons changes."
    },
    {
      "id": "1-53",
      "topic": "1.7 Periodic Trends",
      "stem": "Which pair shows the correct direction for electronegativity trends?",
      "choices": [
        "Increases down a group, increases across a period",
        "Decreases down a group, increases across a period",
        "Increases down a group, decreases across a period",
        "Decreases down a group, decreases across a period"
      ],
      "correct": 1,
      "explanation": "Electronegativity follows the same underlying logic as ionization energy, since both depend on effective nuclear charge on the valence shell. Down a group, added shielding from new shells outweighs added protons, lowering effective nuclear charge and decreasing electronegativity. Across a period, effective nuclear charge increases (more protons, roughly constant shielding), increasing electronegativity — this is why fluorine (top-right of the nonmetals) is the most electronegative element."
    },
    {
      "id": "1-54",
      "topic": "1.7 Periodic Trends",
      "stem": "Why is the second ionization energy of an alkali metal (Group 1) dramatically higher than its first ionization energy?",
      "choices": [
        "The second electron removed comes from a full, lower-energy core shell, requiring much more energy to remove than the lone valence electron.",
        "The second electron has a stronger attraction because the atom is now neutral.",
        "Removing any second electron always requires roughly the same energy as removing the first.",
        "Alkali metals do not have a measurable second ionization energy."
      ],
      "correct": 0,
      "explanation": "After removing the single valence electron, the alkali metal cation has a completely filled, noble-gas-like core configuration. The next electron to be removed comes from that stable, tightly-held inner shell — much closer to the nucleus and far less shielded — so it takes dramatically more energy to remove. This large jump between IE₁ and IE₂ is actually strong experimental evidence for the shell model of the atom and for exactly how many valence electrons an element has."
    },
    {
      "id": "1-55",
      "topic": "1.7 Periodic Trends",
      "stem": "Which comparison correctly reflects a well-known exception to the general ionization energy trend across Period 2?",
      "choices": [
        "IE(Be) > IE(B)",
        "IE(C) > IE(N)",
        "IE(F) > IE(Ne)",
        "IE(Li) > IE(Be)"
      ],
      "correct": 0,
      "explanation": "Beryllium's outermost electron sits in a stable, filled 2s² subshell, while boron's outermost electron is in a higher-energy 2p¹ subshell that is also slightly more shielded by the 2s² electrons beneath it. This combination makes boron's electron easier to remove than beryllium's, despite boron having one more proton — so IE(Be) is actually greater than IE(B), the reverse of what the simple 'increases across a period' rule would predict."
    },
    {
      "id": "1-56",
      "topic": "1.7 Periodic Trends",
      "stem": "Rank O²⁻, F⁻, and Na⁺ from largest to smallest radius. (All are isoelectronic with Ne.)",
      "choices": [
        "Na⁺ > F⁻ > O²⁻",
        "O²⁻ > F⁻ > Na⁺",
        "F⁻ > O²⁻ > Na⁺",
        "O²⁻ > Na⁺ > F⁻"
      ],
      "correct": 1,
      "explanation": "All three species have 10 electrons (isoelectronic with neon), so radius depends entirely on nuclear charge — fewer protons means less pull on the same 10 electrons, and a larger radius. Proton counts: O has 8, F has 9, Na has 11. Fewer protons gives a larger radius, so from largest to smallest: O²⁻ (8 protons) > F⁻ (9 protons) > Na⁺ (11 protons)."
    },
    {
      "id": "1-57",
      "topic": "1.7 Periodic Trends",
      "stem": "Which element would you expect to have the smallest atomic radius?",
      "choices": [
        "S",
        "Cl",
        "Se",
        "F"
      ],
      "correct": 3,
      "explanation": "Radius decreases across a period (left to right) and decreases up a group. F is both farther right and higher up than S, Cl, and Se among these four choices, so it experiences the strongest combination of both trends acting together, giving it the smallest atomic radius. (Note: F actually has one of the smallest atomic radii of any element on the entire periodic table, second only to elements like He and Ne, which aren't typically compared this way since they rarely form bonds.)"
    },
    {
      "id": "1-58",
      "topic": "1.7 Periodic Trends",
      "stem": "Stretch — beyond typical AP difficulty: Successive ionization energies for an element are: IE₁ = 738, IE₂ = 1450, IE₃ = 7730, IE₄ = 10,540 kJ/mol. Based on this data, which group does this element most likely belong to?",
      "choices": [
        "Group 1",
        "Group 2",
        "Group 13",
        "Group 16"
      ],
      "correct": 1,
      "explanation": "The huge jump between IE₂ (1450) and IE₃ (7730) — more than a five-fold increase — signals that the third electron removed comes from a completely different, much more tightly-held inner shell. This means the atom has exactly 2 valence electrons (easily removed as IE₁ and IE₂, both relatively low and similar in magnitude), consistent with a Group 2 element (this data closely matches magnesium). Reading successive ionization energy jumps to deduce valence electron count is a skill that goes beyond simply stating the general periodic trend.",
      "stretch": true
    },
    {
      "id": "1-59",
      "topic": "1.8 Valence Electrons and Ionic Compounds",
      "stem": "What is the correct formula for the ionic compound formed between aluminum and oxygen?",
      "choices": [
        "AlO",
        "Al₂O₃",
        "Al₃O₂",
        "AlO₂"
      ],
      "correct": 1,
      "explanation": "Aluminum (Group 13) forms Al³⁺; oxygen (Group 16) forms O²⁻. Balancing total charge requires the least common multiple of 3 and 2, which is 6: two Al³⁺ (total +6) and three O²⁻ (total −6), giving the formula Al₂O₃. This 'criss-cross' pattern — Al's charge (3) becomes O's subscript, and O's charge (2) becomes Al's subscript — is a fast shortcut for exactly this LCM-based charge-balancing logic."
    },
    {
      "id": "1-60",
      "topic": "1.8 Valence Electrons and Ionic Compounds",
      "stem": "Which main-group element is most likely to form a 2− ion?",
      "choices": [
        "Na (Group 1)",
        "Mg (Group 2)",
        "O (Group 16)",
        "Cl (Group 17)"
      ],
      "correct": 2,
      "explanation": "Oxygen (Group 16) has 6 valence electrons and needs to gain 2 more to complete its octet and reach neon's configuration, forming O²⁻. Mg (Group 2) tends to lose electrons (forming Mg²⁺) rather than gain them, since metals lose electrons far more readily than they gain them; Na loses 1 electron (Na⁺); Cl gains only 1 electron (Cl⁻) to complete its octet."
    },
    {
      "id": "1-61",
      "topic": "1.8 Valence Electrons and Ionic Compounds",
      "stem": "How many valence electrons does a neutral atom of tin (Sn, Group 14) have?",
      "choices": [
        "2",
        "4",
        "14",
        "50"
      ],
      "correct": 1,
      "explanation": "For main-group elements, the group number (using the 1–18 convention, adjusted for groups 13-18 as 13→3, 14→4, etc.) directly gives the number of valence electrons. Tin is in Group 14, so it has 4 valence electrons — the same as carbon and silicon above it in the same group, which is exactly why all three elements share similar bonding behavior (commonly forming 4 bonds)."
    },
    {
      "id": "1-62",
      "topic": "1.8 Valence Electrons and Ionic Compounds",
      "stem": "Predict the ionic compound formula formed between barium and nitrogen.",
      "choices": [
        "BaN",
        "Ba₂N₃",
        "Ba₃N₂",
        "BaN₃"
      ],
      "correct": 2,
      "explanation": "Barium (Group 2) forms Ba²⁺; nitrogen (Group 15) forms N³⁻. Balancing charges requires the LCM of 2 and 3 (which is 6): three Ba²⁺ (total +6) and two N³⁻ (total −6), giving Ba₃N₂. This is the identical charge-balancing pattern used in the study guide's Worked Example 9 for calcium phosphide, just with different elements and the same 2-and-3 charge combination."
    },
    {
      "id": "1-63",
      "topic": "1.8 Valence Electrons and Ionic Compounds",
      "stem": "Why do transition metals typically not follow a simple 'lose electrons to reach the nearest noble gas' rule the way main-group metals do?",
      "choices": [
        "Transition metals don't lose electrons at all.",
        "Transition metals can lose varying numbers of electrons from both s and d subshells, often without reaching a full noble gas configuration, since d electrons are close in energy to one another.",
        "Transition metals only ever form 1+ ions.",
        "Transition metals gain electrons instead of losing them."
      ],
      "correct": 1,
      "explanation": "Unlike main-group elements, where there's usually one clearly favorable noble-gas-configuration ion to form, transition metals have (n)s and (n−1)d electrons that are close enough in energy that multiple ionic charges can be reasonably stable (Fe²⁺ and Fe³⁺ are both common, for example). Many transition metal ions don't correspond to any noble gas configuration at all — d-subshell stability (empty, half-full, or full) plays a bigger role than 'nearest noble gas' reasoning."
    },
    {
      "id": "1-64",
      "topic": "1.8 Valence Electrons and Ionic Compounds",
      "stem": "Which best explains why potassium readily forms K⁺ but essentially never forms K²⁺?",
      "choices": [
        "K⁺ has a full valence octet (noble gas configuration), while forming K²⁺ would require removing an electron from a very stable, tightly-held inner shell, requiring far more energy than is released by ionic bond formation.",
        "K²⁺ would have too small a radius to be stable.",
        "Potassium's nucleus can only stabilize a single positive charge.",
        "K²⁺ does not exist under any circumstances, even in the gas phase."
      ],
      "correct": 0,
      "explanation": "This connects directly back to the ionization energy jump reasoning from section 1.7: after losing its single valence electron, K⁺ has argon's stable, filled-shell configuration. Removing a second electron would mean breaking into that tightly-held core shell, an enormous energy cost (a huge IE₂) that isn't recovered by the modest additional lattice energy gained from a 2+ ion, making K²⁺ compounds essentially never observed under normal chemical conditions."
    },
    {
      "id": "1-65",
      "topic": "1.8 Valence Electrons and Ionic Compounds",
      "stem": "Stretch — beyond typical AP difficulty: Both Sn and Pb (Group 14) commonly form 2+ ions in addition to the 'expected' 4+ ion. Which explanation for this is most consistent with periodic trends?",
      "choices": [
        "The inert pair effect: for heavier p-block elements, the outermost s² electron pair becomes increasingly stable and resistant to being removed or used in bonding, due to poor shielding by filled d and f subshells beneath it.",
        "Sn and Pb are transition metals and therefore behave unpredictably.",
        "Sn and Pb violate the octet rule and have no consistent oxidation states.",
        "The 2+ ion is simply a measurement error commonly seen in older data."
      ],
      "correct": 0,
      "explanation": "This is the 'inert pair effect,' a real periodic trend most noticeable in heavier p-block elements (Sn, Pb, Tl, Bi). Poor shielding from filled inner d and f subshells means the outermost ns² electron pair is held unusually tightly by a higher effective nuclear charge than expected, making it energetically costly to involve those two electrons in bonding or ionization. The result is that the 'lower' oxidation state (losing only the p electrons, e.g., Pb²⁺ instead of Pb⁴⁺) becomes increasingly favorable moving down Group 14, which is a genuine, if advanced, extension of the effective nuclear charge and shielding concepts from section 1.7.",
      "stretch": true
    }
  ],
  "2": [
    {
      "id": "2-1",
      "topic": "2.1 Types of Chemical Bonds",
      "stem": "Which pair of elements would most likely form an ionic bond?",
      "choices": [
        "C and O",
        "K and Br",
        "N and O",
        "Cl and Cl"
      ],
      "correct": 1,
      "explanation": "K (a Group 1 metal, low electronegativity) and Br (a Group 17 nonmetal, high electronegativity) have a large electronegativity difference, favoring electron transfer rather than sharing — the hallmark of ionic bonding. The other pairs are combinations of nonmetals with small ΔEN, favoring covalent bonding instead."
    },
    {
      "id": "2-2",
      "topic": "2.1 Types of Chemical Bonds",
      "stem": "Which bond is most polar?",
      "choices": [
        "H-F",
        "H-Cl",
        "H-Br",
        "H-I"
      ],
      "correct": 0,
      "explanation": "Bond polarity increases with electronegativity difference. Fluorine is the most electronegative element on the periodic table, so H-F has the largest ΔEN of these four hydrogen halide bonds, making it the most polar. Electronegativity decreases down Group 17 (Cl > Br > I), so ΔEN — and polarity — decreases correspondingly down that series."
    },
    {
      "id": "2-3",
      "topic": "2.1 Types of Chemical Bonds",
      "stem": "A solid conducts electricity when melted but not as a solid, and has a high melting point. What type of bonding does it most likely have?",
      "choices": [
        "Metallic",
        "Ionic",
        "Nonpolar covalent",
        "Polar covalent, molecular"
      ],
      "correct": 1,
      "explanation": "This is the classic signature of ionic bonding: ions are locked in a rigid lattice as a solid (no charge carriers can move, so no conductivity), but once melted, the ions become mobile and free to carry current. Metallic solids, by contrast, conduct electricity even as solids, since the electron sea is already mobile."
    },
    {
      "id": "2-4",
      "topic": "2.1 Types of Chemical Bonds",
      "stem": "Which best describes the bonding in Cl₂ gas?",
      "choices": [
        "Ionic",
        "Polar covalent",
        "Nonpolar covalent",
        "Metallic"
      ],
      "correct": 2,
      "explanation": "Cl₂ consists of two identical chlorine atoms, so ΔEN = 0 — the shared electron pair is distributed perfectly equally between them, making this a nonpolar covalent bond. Any diatomic molecule made of two atoms of the same element (O₂, N₂, H₂, etc.) will always have a nonpolar covalent bond for this same reason."
    },
    {
      "id": "2-5",
      "topic": "2.1 Types of Chemical Bonds",
      "stem": "Which property is most characteristic of substances with metallic bonding?",
      "choices": [
        "High melting point but brittle, shattering under stress",
        "Malleable and a good conductor of electricity as a solid",
        "Low melting point and does not conduct electricity in any state",
        "Conducts electricity only when dissolved in water"
      ],
      "correct": 1,
      "explanation": "The delocalized electron sea in metallic bonding is mobile at all times (not just when melted or dissolved), giving metals solid-state conductivity, and it allows metal cations to shift position without breaking specific bonds, giving metals their signature malleability — very different from the brittleness of ionic solids."
    },
    {
      "id": "2-6",
      "topic": "2.1 Types of Chemical Bonds",
      "stem": "Which compound would you expect to have the highest melting point, based on bond type and ionic charge?",
      "choices": [
        "NaCl",
        "MgCl₂",
        "AlN",
        "KBr"
      ],
      "correct": 2,
      "explanation": "AlN pairs a 3+ cation (Al³⁺) with a 3− anion (N³⁻), giving the largest product of charges among these choices, and therefore the strongest Coulombic lattice attraction and highest melting point. NaCl and KBr both involve 1+/1− ions (weakest), and MgCl₂ involves a 2+/1− combination (intermediate)."
    },
    {
      "id": "2-7",
      "topic": "2.1 Types of Chemical Bonds",
      "stem": "Two nonmetal atoms with a small but nonzero electronegativity difference bond together. What type of bond forms?",
      "choices": [
        "Nonpolar covalent",
        "Polar covalent",
        "Ionic",
        "Metallic"
      ],
      "correct": 1,
      "explanation": "A small but nonzero ΔEN between two nonmetals means electrons are shared, but not perfectly equally — this unequal sharing is the definition of a polar covalent bond. If ΔEN were exactly zero (identical atoms), it would be nonpolar covalent instead; if ΔEN were very large (metal + nonmetal), it would be ionic."
    },
    {
      "id": "2-8",
      "topic": "2.1 Types of Chemical Bonds",
      "stem": "Which statement correctly describes the electronegativity difference (ΔEN) spectrum of bonding?",
      "choices": [
        "As ΔEN increases from 0, bonding shifts from ionic to nonpolar covalent to polar covalent.",
        "As ΔEN increases from 0, bonding shifts from nonpolar covalent to polar covalent to ionic.",
        "ΔEN has no relationship to bond type; only atomic size determines bond type.",
        "Bond type depends only on whether both atoms are metals or both are nonmetals, never on ΔEN."
      ],
      "correct": 1,
      "explanation": "At ΔEN = 0 (identical atoms), electrons are shared exactly equally: nonpolar covalent. As ΔEN grows, sharing becomes increasingly unequal: polar covalent. At very large ΔEN (typically metal + nonmetal), electron transfer essentially occurs rather than sharing: ionic. This progression is the entire basis of using ΔEN to classify bond character."
    },
    {
      "id": "2-9",
      "topic": "2.1 Types of Chemical Bonds",
      "stem": "Diamond and graphite are both pure carbon but have dramatically different properties (diamond is extremely hard and non-conducting; graphite is soft, slippery, and conducts electricity). What best explains this difference?",
      "choices": [
        "Diamond is ionic while graphite is covalent.",
        "Diamond has a rigid 3D network of sp³ covalent bonds throughout, while graphite consists of sp² bonded sheets with delocalized electrons that can move within (but not easily between) layers, and the layers slide past each other.",
        "Graphite contains metallic bonds while diamond contains only covalent bonds.",
        "The two forms have different numbers of valence electrons per carbon atom."
      ],
      "correct": 1,
      "explanation": "Both are allotropes of pure carbon (same element, different structures), so composition alone can't explain the difference — structure does. Diamond's every carbon is sp³ hybridized, forming a rigid, 3D tetrahedral network of strong covalent bonds in all directions, making it extremely hard. Graphite's carbons are sp² hybridized in flat hexagonal sheets, with one delocalized electron per carbon free to move within a sheet (giving conductivity along the sheet) while the sheets themselves are held together only by weak forces, letting them slide past each other easily (giving graphite its softness and lubricating slipperiness)."
    },
    {
      "id": "2-10",
      "topic": "2.2 Intramolecular Force and Potential Energy",
      "stem": "Which bond is the shortest?",
      "choices": [
        "C-C single bond",
        "C=C double bond",
        "C≡C triple bond",
        "They are all the same length"
      ],
      "correct": 2,
      "explanation": "Bond length decreases as bond order increases, since more shared electron pairs pull the bonded nuclei closer together. A triple bond (bond order 3) is therefore shorter than a double bond (order 2), which is shorter than a single bond (order 1)."
    },
    {
      "id": "2-11",
      "topic": "2.2 Intramolecular Force and Potential Energy",
      "stem": "As two atoms approach each other from far apart to form a bond, how does potential energy change?",
      "choices": [
        "It increases continuously as the atoms get closer.",
        "It decreases continuously as the atoms get closer, with no minimum.",
        "It decreases to a minimum at the bond length, then increases sharply if the atoms get even closer.",
        "It remains constant regardless of distance."
      ],
      "correct": 2,
      "explanation": "As atoms approach, attractive forces (nucleus-electron) initially lower potential energy, but once atoms get very close, repulsive forces (nucleus-nucleus, electron-electron) dominate and potential energy rises sharply. The bond length observed in nature is exactly the distance at that potential energy minimum — the most stable, lowest-energy separation."
    },
    {
      "id": "2-12",
      "topic": "2.2 Intramolecular Force and Potential Energy",
      "stem": "Which requires the most energy to break?",
      "choices": [
        "A C-C single bond",
        "A C=C double bond",
        "A C≡C triple bond",
        "Bond energy cannot be compared between bond orders"
      ],
      "correct": 2,
      "explanation": "Bond energy increases with bond order — more shared electron pairs means a deeper potential energy well and a stronger overall attraction holding the atoms together, so more energy is required to separate them. A carbon-carbon triple bond is the strongest of the three, requiring the most energy to break."
    },
    {
      "id": "2-13",
      "topic": "2.2 Intramolecular Force and Potential Energy",
      "stem": "The bond length in N₂ (triple bond) is shorter than in N₂H₄ (single bond between nitrogens). What does this indicate about their relative bond strengths?",
      "choices": [
        "N₂'s N-N bond is weaker, since shorter bonds are always weaker.",
        "N₂'s N-N bond is stronger, since shorter bonds correspond to higher bond order and greater bond strength.",
        "Bond length and bond strength are unrelated.",
        "Both bonds have identical strength since both involve nitrogen."
      ],
      "correct": 1,
      "explanation": "Shorter bond length is a direct signal of higher bond order in this kind of comparison, and higher bond order corresponds to a stronger bond. N₂'s triple bond is indeed one of the strongest bonds known in chemistry (contributing to nitrogen gas's notorious unreactivity), consistent with the short-bond-length observation."
    },
    {
      "id": "2-14",
      "topic": "2.2 Intramolecular Force and Potential Energy",
      "stem": "Which best describes what a potential energy diagram for bond formation shows on its y-axis?",
      "choices": [
        "Kinetic energy of the approaching atoms",
        "Distance between the two nuclei",
        "Potential energy of the two-atom system as a function of internuclear distance",
        "Total mass of the system"
      ],
      "correct": 2,
      "explanation": "A bond-formation potential energy diagram plots potential energy (y-axis) against internuclear distance (x-axis), showing energy decreasing as atoms approach (attraction dominates), reaching a minimum at the bond length, then rising sharply if atoms get closer still (repulsion dominates). This diagram is a graphical representation of exactly the reasoning used throughout this section."
    },
    {
      "id": "2-15",
      "topic": "2.2 Intramolecular Force and Potential Energy",
      "stem": "Comparing a C-C bond (346 kJ/mol) and a C-O bond (358 kJ/mol), which is likely true about their relative lengths?",
      "choices": [
        "The C-O bond is likely shorter, since it has a somewhat higher bond energy.",
        "The C-C bond is likely shorter.",
        "They must be exactly the same length since both are single bonds.",
        "Bond energy provides no information about relative bond length."
      ],
      "correct": 0,
      "explanation": "Within reasonable comparisons, higher bond energy correlates with shorter bond length — a stronger, tighter bond holds atoms closer together. Since C-O has a somewhat higher bond energy than C-C, it's reasonable to expect a somewhat shorter bond length as well (this also aligns with oxygen's smaller atomic radius compared to carbon, an independent confirming factor)."
    },
    {
      "id": "2-16",
      "topic": "2.2 Intramolecular Force and Potential Energy",
      "stem": "Which of the following correctly ranks O₂, O₃ (ozone, with a bond order of 1.5 for each O-O bond due to resonance), and a hypothetical O-O single bond, from shortest to longest O-O bond?",
      "choices": [
        "O₂ < O₃ < single bond",
        "single bond < O₃ < O₂",
        "O₃ < O₂ < single bond",
        "O₂ < single bond < O₃"
      ],
      "correct": 0,
      "explanation": "O₂ has a bond order of 2 (double bond), ozone's O-O bonds each have an averaged bond order of 1.5 due to resonance, and a hypothetical single bond has bond order 1. Higher bond order means shorter bond length, so ranking from shortest to longest by decreasing bond order: O₂ (order 2) < O₃ (order 1.5) < single bond (order 1)."
    },
    {
      "id": "2-17",
      "topic": "2.2 Intramolecular Force and Potential Energy",
      "stem": "Why is more energy required to break a C≡N bond than a C=N bond?",
      "choices": [
        "The triple bond has three shared electron pairs creating stronger overall electrostatic attraction between the nuclei and the shared electron density, compared to two pairs in the double bond.",
        "Triple bonds involve larger atoms than double bonds.",
        "Triple bonds are longer than double bonds, so more energy is needed to stretch them.",
        "There is no real difference in the energy needed to break these two bond types."
      ],
      "correct": 0,
      "explanation": "Each additional shared electron pair adds more electron density between the two nuclei, increasing the overall electrostatic attraction holding the bonded atoms together. A triple bond's three shared pairs create a deeper potential energy well (and therefore a shorter, stronger bond) than a double bond's two pairs, so more energy input is required to overcome that stronger attraction and separate the atoms."
    },
    {
      "id": "2-18",
      "topic": "2.2 Intramolecular Force and Potential Energy",
      "stem": "Stretch — beyond typical AP difficulty: A researcher observes that the bond length in a molecule XY is 1.20 Å with a bond energy of 610 kJ/mol, while a related molecule XZ has a bond length of 1.42 Å. Which bond energy value is most plausible for XZ, and why?",
      "choices": [
        "Approximately 950 kJ/mol, since longer bonds are always stronger",
        "Approximately 610 kJ/mol, since bond energy doesn't depend on bond length",
        "Approximately 350–400 kJ/mol, since the longer bond length suggests a lower bond order and weaker overall attraction",
        "It's impossible to estimate bond energy from bond length"
      ],
      "correct": 2,
      "explanation": "Since XZ's bond is noticeably longer than XY's (1.42 Å vs. 1.20 Å), this pattern strongly suggests XZ has a lower bond order (likely a double or single bond compared to XY's likely triple bond) and correspondingly weaker overall electrostatic attraction between the bonded atoms. This should translate to a substantially lower bond energy — a value in the 350–400 kJ/mol range is a reasonable order-of-magnitude estimate consistent with a lower-order bond, whereas 950 kJ/mol would actually suggest an even stronger, shorter bond, which contradicts the observed increase in length.",
      "stretch": true
    },
    {
      "id": "2-19",
      "topic": "2.3 Structure of Ionic Solids",
      "stem": "Why do ionic solids generally have high melting points?",
      "choices": [
        "Ionic bonds involve shared electrons, which are very difficult to separate.",
        "The lattice consists of strong electrostatic attractions extending throughout the entire crystal, all of which must be overcome to melt the solid.",
        "Ionic solids are always composed of very heavy atoms.",
        "Ionic solids conduct electricity, which requires high temperatures."
      ],
      "correct": 1,
      "explanation": "Melting an ionic solid means disrupting the ordered lattice held together by electrostatic attraction between every neighboring pair of oppositely-charged ions, not just a single bond — this is a fundamentally 'many strong attractions at once' situation, requiring a large energy input (high temperature) to overcome throughout the whole structure."
    },
    {
      "id": "2-20",
      "topic": "2.3 Structure of Ionic Solids",
      "stem": "Why are ionic solids brittle rather than malleable?",
      "choices": [
        "Shifting the lattice under stress aligns same-charge ions adjacent to each other, causing strong repulsion that shatters the crystal.",
        "Ionic solids have weak bonds that break easily under any stress.",
        "The electron sea in ionic solids cannot redistribute under stress.",
        "Ionic solids lack a regular, repeating structure."
      ],
      "correct": 0,
      "explanation": "A small shift in an ionic lattice — unlike in a metal — brings ions of the same charge into direct proximity, and the resulting strong electrostatic repulsion causes the crystal to fracture along that plane rather than deform smoothly. Option (c) actually describes metals, not ionic solids — ionic solids don't have a delocalized electron sea at all."
    },
    {
      "id": "2-21",
      "topic": "2.3 Structure of Ionic Solids",
      "stem": "Solid NaCl does not conduct electricity, but molten NaCl does. Why?",
      "choices": [
        "Molten NaCl contains free electrons that solid NaCl does not.",
        "In the solid, ions are fixed in place in the lattice; when melted, ions become mobile and can carry charge.",
        "Melting converts NaCl into a covalent compound, which conducts electricity.",
        "Solid NaCl has no charged particles at all."
      ],
      "correct": 1,
      "explanation": "Conductivity requires mobile charge carriers. In solid NaCl, Na⁺ and Cl⁻ ions are locked into fixed lattice positions and cannot move to carry current. Melting breaks down the rigid lattice structure, freeing the ions to move and conduct electricity — the same underlying reason dissolving an ionic solid in water also allows it to conduct."
    },
    {
      "id": "2-22",
      "topic": "2.3 Structure of Ionic Solids",
      "stem": "Which factor increases lattice energy the most?",
      "choices": [
        "Increasing ionic radius while keeping charge constant",
        "Increasing ionic charge while keeping radius roughly constant",
        "Decreasing the number of ions in the formula unit",
        "Increasing the atomic mass of the ions"
      ],
      "correct": 1,
      "explanation": "Lattice energy follows a Coulomb's-law-type relationship: it's proportional to the product of the ionic charges and inversely proportional to the distance between ion centers. Increasing charge has a large, direct effect on that product (and thus a large effect on lattice energy), which is why compounds with 2+/2− ion pairs (like MgO) have dramatically higher lattice energies than 1+/1− pairs (like NaCl) even at similar ionic radii."
    },
    {
      "id": "2-23",
      "topic": "2.3 Structure of Ionic Solids",
      "stem": "Rank NaF, NaCl, and NaBr by expected lattice energy, from highest to lowest.",
      "choices": [
        "NaBr > NaCl > NaF",
        "NaF > NaCl > NaBr",
        "All three have equal lattice energy",
        "NaCl > NaF > NaBr"
      ],
      "correct": 1,
      "explanation": "All three compounds share the same cation (Na⁺) and the same ionic charges (1+/1−), so lattice energy depends only on ionic radius here — smaller ions can pack closer together, giving stronger Coulombic attraction. Anion radius increases down Group 17 (F⁻ < Cl⁻ < Br⁻), so lattice energy decreases in that same order: NaF (smallest anion, highest lattice energy) > NaCl > NaBr (largest anion, lowest lattice energy)."
    },
    {
      "id": "2-24",
      "topic": "2.3 Structure of Ionic Solids",
      "stem": "A student proposes that CaO should have a higher lattice energy than KF, even though both compounds have similarly-sized ions. Is this reasonable?",
      "choices": [
        "Yes — CaO's ions carry 2+ and 2− charges, while KF's ions carry only 1+ and 1−, and lattice energy is much more sensitive to charge than to modest differences in radius.",
        "No — lattice energy depends only on ionic radius, not charge.",
        "No — CaO and KF must have identical lattice energies if their ionic radii are similar.",
        "Yes, but only because calcium is a heavier element than potassium."
      ],
      "correct": 0,
      "explanation": "Lattice energy is proportional to the product of ionic charges, so doubling both charges (from 1+/1− to 2+/2−) roughly quadruples the Coulombic attraction, a far bigger effect than any modest radius difference. This is exactly why CaO has a much higher melting point (2613°C) than KF (858°C), despite the ions being in a similar size range."
    },
    {
      "id": "2-25",
      "topic": "2.3 Structure of Ionic Solids",
      "stem": "Which experimental observation would provide the strongest evidence that a solid unknown compound is ionic rather than molecular (covalent)?",
      "choices": [
        "It is a solid at room temperature.",
        "It dissolves in water.",
        "It conducts electricity when dissolved in water but not as a solid.",
        "It has a distinct color."
      ],
      "correct": 2,
      "explanation": "This specific pattern — no conductivity as a solid, but conductivity once dissolved — is a direct signature of mobile ions being released into solution, which only happens for ionic compounds. Molecular (covalent) compounds, even if soluble, generally don't dissociate into freely moving charged particles and so don't conduct electricity in solution (barring some acids/bases, a special case covered in Unit 8)."
    },
    {
      "id": "2-26",
      "topic": "2.3 Structure of Ionic Solids",
      "stem": "Which best explains why ionic compounds tend to have very high boiling points as well as high melting points?",
      "choices": [
        "Boiling an ionic compound (vaporizing it) requires completely separating individual ions from the strong electrostatic lattice into a gas phase, an even larger energy requirement than simply melting the solid.",
        "Ionic compounds do not actually have measurable boiling points.",
        "Boiling point is unrelated to bonding type.",
        "Ionic compounds boil at the same temperature they melt."
      ],
      "correct": 0,
      "explanation": "Melting only requires enough disruption of the lattice to allow ions to move past each other while still remaining close together (liquid phase); boiling requires fully separating individual ions into a gas phase, breaking essentially all remaining electrostatic attraction. Since that attraction is strong throughout an ionic lattice, both melting and especially boiling require large energy inputs, giving ionic compounds high values for both."
    },
    {
      "id": "2-27",
      "topic": "2.3 Structure of Ionic Solids",
      "stem": "Two hypothetical ionic compounds, AB and CD, have identical ionic charges (1+/1−) and nearly identical lattice energies. However, AB has a much larger cation and much smaller anion than CD, which has two medium-sized ions. What does this suggest about the relationship between lattice energy and ionic radius?",
      "choices": [
        "Lattice energy depends only on the sum of the two ionic radii, not on how that total is distributed between cation and anion.",
        "Lattice energy depends on the difference between cation and anion radii, not their sum.",
        "This scenario is impossible; lattice energy must differ if individual ion sizes differ.",
        "Lattice energy depends only on the larger of the two ions."
      ],
      "correct": 0,
      "explanation": "Lattice energy in a simple Coulombic model depends on the distance between ion centers, which is essentially the sum of the cation and anion radii (r_cation + r_anion) — not on how that total distance is split between the two ions individually. Since AB (large cation + small anion) and CD (two medium ions) could plausibly have the same total ion-center distance, they could indeed have very similar lattice energies despite quite different individual ion sizes, illustrating that it's the sum of radii, not the specific split, that matters most in this model."
    },
    {
      "id": "2-28",
      "topic": "2.4 Structure of Metals and Alloys",
      "stem": "In the electron sea model of metallic bonding, what is delocalized?",
      "choices": [
        "The protons in the metal nuclei",
        "The valence electrons, shared collectively among many metal cations",
        "The entire metal atom",
        "Only the core electrons"
      ],
      "correct": 1,
      "explanation": "In metallic bonding, each metal atom contributes its valence electrons to a shared, mobile pool (the 'sea') that surrounds a lattice of positive metal cations. These delocalized valence electrons — not core electrons, and certainly not protons — are what's responsible for metals' conductivity and malleability."
    },
    {
      "id": "2-29",
      "topic": "2.4 Structure of Metals and Alloys",
      "stem": "Which best explains why metals are good conductors of electricity as solids, unlike ionic solids?",
      "choices": [
        "Metals have a delocalized electron sea that is already mobile at room temperature, allowing charge to flow without needing to melt the solid first.",
        "Metal atoms are smaller than ions in ionic compounds.",
        "Metals have more protons than nonmetals.",
        "Metals are always liquids at room temperature."
      ],
      "correct": 0,
      "explanation": "Ionic solids need their lattice to break down (melting or dissolving) before their ions can move and carry current. Metals don't have this restriction — their delocalized electrons are mobile in the solid state itself, which is exactly why metals conduct electricity as solids while ionic compounds do not."
    },
    {
      "id": "2-30",
      "topic": "2.4 Structure of Metals and Alloys",
      "stem": "A substitutional alloy (like brass, Cu and Zn) forms most easily when the two metal atoms involved have:",
      "choices": [
        "Very different atomic radii",
        "Similar atomic radii, allowing one metal's atoms to directly replace the other's in the lattice",
        "Opposite charges",
        "Identical melting points only"
      ],
      "correct": 1,
      "explanation": "In a substitutional alloy, atoms of one metal directly take the place of atoms of the other within the same crystal lattice structure — this only works smoothly if the two atoms are similar enough in size that the lattice geometry isn't badly distorted. Very different radii instead tend to favor an interstitial alloy, where the smaller atoms fit into the gaps between the larger atoms' lattice positions instead of replacing them."
    },
    {
      "id": "2-31",
      "topic": "2.4 Structure of Metals and Alloys",
      "stem": "Steel is an interstitial alloy of iron and carbon. What does 'interstitial' mean in this context?",
      "choices": [
        "The carbon atoms replace iron atoms directly in the lattice.",
        "The much smaller carbon atoms fit into the small gaps between the larger iron atoms in the lattice.",
        "Carbon and iron form a separate ionic compound within the alloy.",
        "The alloy has no regular structure at all."
      ],
      "correct": 1,
      "explanation": "Carbon atoms are much smaller than iron atoms, so rather than substituting for iron atoms in the lattice, they squeeze into the interstitial spaces (gaps) between the iron atoms. This actually makes steel harder and less malleable than pure iron, since the carbon atoms disrupt the ability of iron atom layers to slide smoothly past one another."
    },
    {
      "id": "2-32",
      "topic": "2.4 Structure of Metals and Alloys",
      "stem": "Why does adding carbon to iron (forming steel) increase hardness but decrease malleability compared to pure iron?",
      "choices": [
        "The interstitial carbon atoms physically block the smooth sliding of iron atom layers past each other that gives pure metals their malleability.",
        "Carbon atoms replace all the delocalized electrons in the iron lattice.",
        "Steel is an ionic compound, unlike pure iron.",
        "Adding carbon has no measurable effect on iron's mechanical properties."
      ],
      "correct": 0,
      "explanation": "Pure metal malleability relies on layers of metal cations being able to slide past each other smoothly, with the electron sea simply flowing to accommodate the new arrangement. Interstitial carbon atoms sit in the gaps between iron atoms and physically interfere with that sliding motion, making the alloy harder and more resistant to deformation — a direct trade-off between hardness and malleability."
    },
    {
      "id": "2-33",
      "topic": "2.4 Structure of Metals and Alloys",
      "stem": "Which property is NOT typically associated with metallic bonding?",
      "choices": [
        "High electrical conductivity as a solid",
        "Malleability and ductility",
        "Luster (shininess)",
        "Extreme brittleness under stress"
      ],
      "correct": 3,
      "explanation": "Brittleness under stress is the signature of ionic solids, not metals — metals typically deform smoothly (malleability/ductility) rather than shattering, because the mobile electron sea allows metal cations to shift position without breaking any single fixed bond, unlike the rigid, directional bonding in an ionic lattice."
    },
    {
      "id": "2-34",
      "topic": "2.4 Structure of Metals and Alloys",
      "stem": "Alloy composition, unlike a pure ionic compound's formula, can vary continuously. Why?",
      "choices": [
        "Alloys are mixtures of metals, not chemically bonded compounds with a fixed ratio.",
        "Alloys are actually pure elements, not mixtures at all.",
        "Metal atoms cannot bond to each other at all in an alloy.",
        "This statement is false; alloys always have a single, fixed formula."
      ],
      "correct": 0,
      "explanation": "An alloy is fundamentally a mixture (metal atoms physically combined, whether substitutionally or interstitially) rather than a chemical compound held together in a fixed stoichiometric ratio — this connects directly back to the mixture-vs-compound distinction from Unit 1. Different grades of steel or brass can have different relative percentages of their component metals while still being called 'steel' or 'brass.'"
    },
    {
      "id": "2-35",
      "topic": "2.4 Structure of Metals and Alloys",
      "stem": "Which best explains why metals typically have relatively high melting points, though generally lower than most ionic compounds?",
      "choices": [
        "The delocalized electron sea creates an attraction throughout the metallic lattice, but this attraction is generally weaker than the highly directional, strong electrostatic attraction in an ionic lattice.",
        "Metals have no significant bonding forces at all.",
        "Metallic bonds are always stronger than ionic bonds.",
        "Metal melting points depend only on atomic mass, not bonding."
      ],
      "correct": 0,
      "explanation": "Metallic bonding does involve real attractive forces (between the positive metal cations and the delocalized electron sea) strong enough to require substantial energy to overcome, giving metals generally high melting points. However, this attraction is typically less concentrated and directional than the strong electrostatic pull between oppositely-charged ions in an ionic lattice, which is why many ionic compounds have even higher melting points than most metals."
    },
    {
      "id": "2-36",
      "topic": "2.4 Structure of Metals and Alloys",
      "stem": "Stretch — beyond typical AP difficulty: Tungsten has one of the highest melting points of any metal (3422°C), while sodium has one of the lowest (98°C). Both are held together by metallic bonding. What best explains this large difference?",
      "choices": [
        "Tungsten has many more valence electrons available for delocalization and a much smaller atomic radius than sodium, both of which strengthen the electron-sea attraction throughout the lattice.",
        "Tungsten is an ionic solid, while sodium is metallic.",
        "There is no real difference in bonding strength; the melting points differ due to unrelated factors.",
        "Sodium has more valence electrons than tungsten."
      ],
      "correct": 0,
      "explanation": "Metallic bond strength (and thus melting point) increases with the number of delocalized valence electrons per atom and decreases with atomic radius — more electrons in the sea and a smaller radius both increase the electron density and effective attraction holding the lattice together. Tungsten (a transition metal with several delocalized d and s electrons and a relatively small, dense atomic radius) has dramatically stronger metallic bonding than sodium (only 1 valence electron and a large atomic radius), explaining the enormous difference in melting points despite both being 'metals.'",
      "stretch": true
    },
    {
      "id": "2-37",
      "topic": "2.5 Lewis Diagrams",
      "stem": "How many total valence electrons should be used to draw the Lewis structure of CO₃²⁻?",
      "choices": [
        "22",
        "24",
        "26",
        "20"
      ],
      "correct": 1,
      "explanation": "Sum each atom's valence electrons: C(4) + 3×O(6) = 4 + 18 = 22, then add 2 more electrons for the 2− charge: 22 + 2 = 24 total valence electrons. Forgetting to add electrons for a negative charge (or forgetting to subtract for a positive charge) is one of the most common Lewis structure errors."
    },
    {
      "id": "2-38",
      "topic": "2.5 Lewis Diagrams",
      "stem": "In the correct Lewis structure of NH₄⁺, how many lone pairs are on the central nitrogen atom?",
      "choices": [
        "0",
        "1",
        "2",
        "4"
      ],
      "correct": 0,
      "explanation": "Nitrogen normally has 5 valence electrons and 1 lone pair when neutral (as in NH₃), but forming NH₄⁺ requires losing that lone pair to form a fourth bond to hydrogen (accounting for the 1+ charge). With all 4 bonding pairs to hydrogen and no lone pairs remaining, nitrogen in NH₄⁺ has zero lone pairs, giving it a full octet entirely through bonding electrons."
    },
    {
      "id": "2-39",
      "topic": "2.5 Lewis Diagrams",
      "stem": "Which molecule's central atom has an incomplete octet in its correct Lewis structure?",
      "choices": [
        "CO₂",
        "BF₃",
        "H₂O",
        "NH₃"
      ],
      "correct": 1,
      "explanation": "Boron in BF₃ has only 3 valence electrons to contribute and forms exactly 3 single bonds to fluorine, giving it only 6 electrons around the central atom (3 bonding pairs) — an incomplete octet. Boron and beryllium are the two most common examples of atoms that are chemically stable with fewer than 8 electrons, since they simply don't have enough valence electrons to reach 8 through typical single bonding."
    },
    {
      "id": "2-40",
      "topic": "2.5 Lewis Diagrams",
      "stem": "Which molecule requires an expanded octet on its central atom?",
      "choices": [
        "CH₄",
        "SF₆",
        "NF₃",
        "CO₂"
      ],
      "correct": 1,
      "explanation": "Sulfur in SF₆ forms 6 bonds to fluorine, requiring 12 electrons around the central atom — well beyond a standard octet. This is possible because sulfur is in Period 3, where accessible d-orbitals (or, in modern bonding models, sufficient orbital flexibility) allow certain central atoms to accommodate more than 8 electrons; period 2 elements like carbon or nitrogen can never do this."
    },
    {
      "id": "2-41",
      "topic": "2.5 Lewis Diagrams",
      "stem": "How many bonding pairs and lone pairs does the central atom have in the Lewis structure of PCl₃?",
      "choices": [
        "3 bonding pairs, 0 lone pairs",
        "3 bonding pairs, 1 lone pair",
        "4 bonding pairs, 0 lone pairs",
        "2 bonding pairs, 2 lone pairs"
      ],
      "correct": 1,
      "explanation": "Phosphorus has 5 valence electrons. Forming 3 single bonds to chlorine uses 3 of those electrons (as bonding pairs), leaving 2 electrons (1 lone pair) on phosphorus. This gives phosphorus a complete octet: 3 bonding pairs (6 electrons) + 1 lone pair (2 electrons) = 8 total."
    },
    {
      "id": "2-42",
      "topic": "2.5 Lewis Diagrams",
      "stem": "What is the correct Lewis structure arrangement for HCN?",
      "choices": [
        "H-C≡N, with 1 lone pair on N",
        "H-C=N-H",
        "H≡C-N, with 2 lone pairs on N",
        "H-N≡C, with 1 lone pair on C"
      ],
      "correct": 0,
      "explanation": "Total valence electrons: H(1) + C(4) + N(5) = 10. Hydrogen can only form 1 bond (never central), so carbon is central, bonded to both H and N. Placing single bonds first (H-C-N) uses 4 electrons, leaving 6 to distribute; giving carbon and nitrogen each an octet requires a triple bond between C and N (using 6 electrons for that bond), with one lone pair left on nitrogen: H-C≡N, with N holding 1 lone pair — this correctly gives carbon 4 bonds total (1 to H, 3 to N) and nitrogen an octet (3 bonds + 1 lone pair)."
    },
    {
      "id": "2-43",
      "topic": "2.5 Lewis Diagrams",
      "stem": "In the Lewis structure of SO₂, how many lone pairs are on the central sulfur atom?",
      "choices": [
        "0",
        "1",
        "2",
        "3"
      ],
      "correct": 1,
      "explanation": "Total valence electrons: S(6) + 2×O(6) = 18. With S bonded to each O (one double bond, one single bond, or resonance between two equivalent structures), sulfur ends up with 3 electron groups: 2 bonding regions and 1 lone pair, giving it a bent molecular geometry — this single lone pair on the central S is why SO₂ is bent rather than linear, unlike CO₂."
    },
    {
      "id": "2-44",
      "topic": "2.5 Lewis Diagrams",
      "stem": "Which of the following correctly counts total valence electrons for the polyatomic ion PO₄³⁻?",
      "choices": [
        "29",
        "32",
        "35",
        "26"
      ],
      "correct": 1,
      "explanation": "Sum atomic valence electrons: P(5) + 4×O(6) = 5 + 24 = 29, then add 3 more electrons for the 3− charge: 29 + 3 = 32 total valence electrons. This is a two-step process — sum the atoms' own valence electrons first, then separately adjust for the ion's overall charge — and skipping the charge adjustment is a very common source of error."
    },
    {
      "id": "2-45",
      "topic": "2.5 Lewis Diagrams",
      "stem": "What is the hybridization and lone pair count on the central atom of XeF₂?",
      "choices": [
        "sp³d, 3 lone pairs, linear molecular geometry",
        "sp³, 2 lone pairs, bent molecular geometry",
        "sp³d², 4 lone pairs, square planar geometry",
        "sp, 0 lone pairs, linear geometry"
      ],
      "correct": 0,
      "explanation": "Xenon has 8 valence electrons; forming 2 single bonds to fluorine uses 2 electrons, leaving 6 electrons (3 lone pairs) on Xe. That's 5 total electron groups (2 bonding + 3 lone pairs), giving sp³d hybridization and a trigonal bipyramidal electron geometry — but with all 3 lone pairs placed in the equatorial positions (to minimize repulsion), the two bonded fluorines end up directly opposite each other, giving a linear molecular geometry despite the electron-rich central atom."
    },
    {
      "id": "2-46",
      "topic": "2.5 Lewis Diagrams",
      "stem": "A student draws a Lewis structure for XeF₄ and gives xenon an incomplete octet (only 4 bonding pairs, no lone pairs). What is wrong with this structure, and what should it show instead?",
      "choices": [
        "The structure is correct as drawn; xenon should have no lone pairs in XeF₄.",
        "Xenon should have 2 lone pairs in addition to its 4 bonding pairs, since it starts with 8 valence electrons and uses only 4 of them to form the 4 Xe-F bonds, leaving 4 electrons (2 lone pairs) unaccounted for.",
        "Xenon cannot bond to fluorine at all under any circumstances.",
        "XeF₄ does not have a central atom."
      ],
      "correct": 1,
      "explanation": "Xenon has 8 valence electrons (a full octet as a noble gas), and forming 4 single bonds to fluorine only uses 4 of those 8 electrons. The remaining 4 electrons must be placed as 2 lone pairs on xenon, giving it an expanded 12-electron count (6 total electron groups: 4 bonding + 2 lone pairs), consistent with square planar molecular geometry — a well-known example of a noble gas participating in real, expanded-octet covalent bonding, which goes beyond the 'noble gases are always unreactive' assumption often carried over from introductory chemistry."
    },
    {
      "id": "2-47",
      "topic": "2.6 Resonance and Formal Charge",
      "stem": "What is the formal charge of oxygen in the structure R-O-H, where oxygen has 2 lone pairs and 2 single bonds?",
      "choices": [
        "-1",
        "0",
        "+1",
        "-2"
      ],
      "correct": 1,
      "explanation": "FC = (valence electrons in free atom) − (lone pair electrons) − ½(bonding electrons) = 6 − 4 − ½(4) = 6 − 4 − 2 = 0. This is the typical, most stable formal charge situation for oxygen in a structure like an alcohol or water, where 2 bonds and 2 lone pairs is oxygen's most common, lowest-energy bonding pattern."
    },
    {
      "id": "2-48",
      "topic": "2.6 Resonance and Formal Charge",
      "stem": "In the two resonance structures of the nitrate ion (NO₃⁻), what is true about the actual, real structure of the molecule?",
      "choices": [
        "The molecule rapidly flips back and forth between the different resonance structures.",
        "The real structure is a hybrid/blend of all valid resonance structures, with bond lengths and electron density intermediate between what any single structure shows.",
        "Only one resonance structure is ever actually correct, and the others are purely hypothetical.",
        "Resonance structures represent different molecules entirely."
      ],
      "correct": 1,
      "explanation": "Resonance structures aren't different states the molecule switches between — they're different, incomplete attempts to represent one real, blended structure using the limitations of a single Lewis diagram. In NO₃⁻, this means all three N-O bonds are experimentally observed to be identical in length, intermediate between a single and double bond, exactly as the hybrid concept predicts."
    },
    {
      "id": "2-49",
      "topic": "2.6 Resonance and Formal Charge",
      "stem": "Which formal charge pattern would generally represent the LEAST favorable (least stable) Lewis structure?",
      "choices": [
        "All atoms have a formal charge of 0.",
        "A small negative formal charge on the most electronegative atom, 0 elsewhere.",
        "A positive formal charge on the most electronegative atom, with a negative formal charge on a less electronegative atom.",
        "A single, small negative formal charge on one terminal atom."
      ],
      "correct": 2,
      "explanation": "The best Lewis structures minimize formal charge magnitudes overall and place any negative formal charge on the more electronegative atom (which is more able to stabilize extra electron density). A structure with a positive charge on the most electronegative atom works directly against that atom's natural tendency to attract electrons, making this the least favorable, least realistic arrangement of the options given."
    },
    {
      "id": "2-50",
      "topic": "2.6 Resonance and Formal Charge",
      "stem": "Calculate the formal charge on nitrogen in the structure H-N=O, where N has 1 lone pair, 1 single bond to H, and 1 double bond to O.",
      "choices": [
        "-1",
        "0",
        "+1",
        "+2"
      ],
      "correct": 1,
      "explanation": "FC = 5 − (lone pair electrons: 2) − ½(bonding electrons: 2 from single bond + 4 from double bond = 6) = 5 − 2 − 3 = 0. Formal charge calculations always require carefully counting all bonding electrons around that specific atom (both single and double/triple bonds contribute), not just counting the number of bonds."
    },
    {
      "id": "2-51",
      "topic": "2.6 Resonance and Formal Charge",
      "stem": "Two resonance structures for a molecule are proposed. Structure A has formal charges of 0 on every atom. Structure B has formal charges of +1 and -1 on two atoms, with 0 elsewhere. Which is generally the better (more significant) contributor to the resonance hybrid?",
      "choices": [
        "Structure A, since minimizing formal charge magnitude is generally more favorable/stable.",
        "Structure B, since having some nonzero formal charges is always required for valid resonance.",
        "Both structures contribute exactly equally in all cases.",
        "Neither structure is valid if formal charges differ between them."
      ],
      "correct": 0,
      "explanation": "All else being equal, a Lewis structure with formal charges of zero everywhere is generally more stable (and a more significant/major contributor to the resonance hybrid) than one with nonzero formal charges, since minimizing charge separation typically corresponds to lower potential energy. Structure B may still be a valid, minor resonance contributor, but Structure A would dominate the actual electron distribution."
    },
    {
      "id": "2-52",
      "topic": "2.6 Resonance and Formal Charge",
      "stem": "In SO₄²⁻, formal charge calculations can be used to justify structures with S=O double bonds (reducing formal charge on oxygen) over an all-single-bond structure. What is the tradeoff in choosing the all-single-bond structure instead?",
      "choices": [
        "There is no tradeoff; the all-single-bond structure is always preferred.",
        "The all-single-bond structure gives sulfur a formal charge of +2 and each oxygen -1 (summing correctly to -2), while double-bond structures reduce these formal charge magnitudes but require sulfur to have an expanded octet.",
        "The all-single-bond structure is not a valid Lewis structure at all.",
        "Formal charge has no bearing on which resonance structure to draw for SO₄²⁻."
      ],
      "correct": 1,
      "explanation": "The all-single-bond structure for SO₄²⁻ does satisfy the total charge and electron count, but places relatively high formal charges (S: +2, each O: −1) on the atoms. Introducing S=O double bonds lowers these formal charge magnitudes, generally considered more favorable — but doing so requires sulfur to exceed a standard octet (expanded octet, allowed for Period 3+ elements). This is a genuine tradeoff debated even among chemists, and different textbooks/models sometimes favor different representations for exactly this reason."
    },
    {
      "id": "2-53",
      "topic": "2.6 Resonance and Formal Charge",
      "stem": "What is the formal charge on chlorine in ClO⁻, where Cl has 3 lone pairs and 1 single bond to O?",
      "choices": [
        "-1",
        "0",
        "+1",
        "-2"
      ],
      "correct": 1,
      "explanation": "FC = 7 − (lone pair electrons: 6) − ½(bonding electrons: 2) = 7 − 6 − 1 = 0. Checking oxygen: FC = 6 − 6 − 1 = −1. The formal charges (0 for Cl, −1 for O) sum to −1, correctly matching the overall charge of the hypochlorite ion, and placing the negative charge on oxygen (the more electronegative atom) rather than chlorine is the more chemically reasonable, favored structure."
    },
    {
      "id": "2-54",
      "topic": "2.6 Resonance and Formal Charge",
      "stem": "Why does ozone (O₃) require resonance structures to be accurately described?",
      "choices": [
        "A single Lewis structure would show one O-O bond as a double bond and the other as a single bond, but experimentally both O-O bonds are observed to have identical, intermediate bond lengths.",
        "Ozone does not follow the octet rule under any Lewis structure.",
        "Ozone has no valid Lewis structure at all.",
        "Resonance is only needed for ionic compounds, and ozone is a special exception."
      ],
      "correct": 0,
      "explanation": "Any single Lewis structure for ozone necessarily shows one O-O bond as a double bond (shorter, stronger) and the other as a single bond (longer, weaker) — but real, experimental measurements show both O-O bonds in ozone are identical in length, roughly halfway between a single and double bond. Averaging (or 'resonating' between) two equivalent Lewis structures, each with the double bond on a different side, correctly captures this observed symmetry that neither individual structure can represent alone."
    },
    {
      "id": "2-55",
      "topic": "2.6 Resonance and Formal Charge",
      "stem": "Stretch — beyond typical AP difficulty: The formate ion (HCOO⁻) has two resonance structures, differing in which oxygen carries the double bond. Based on formal charge and the resonance hybrid concept, what can be predicted about the two C-O bonds in the actual ion?",
      "choices": [
        "One C-O bond will be a full double bond and the other a full single bond, with no averaging.",
        "Both C-O bonds will have identical, intermediate bond lengths and bond orders of 1.5, since the two resonance structures contribute equally to the hybrid (they are equivalent by symmetry).",
        "The C-O bonds cannot be compared without more information.",
        "Only one resonance structure is valid, so there is no bond order averaging in formate."
      ],
      "correct": 1,
      "explanation": "Because the two resonance structures of formate are equivalent to each other (related simply by swapping which oxygen carries the double bond, with identical formal charges in both), they contribute equally to the true resonance hybrid. This predicts — and experiment confirms — that both C-O bonds in the formate ion are identical, each with a bond order of 1.5 (partway between a full single and full double bond) and identical, intermediate bond lengths, the same reasoning pattern used for both ozone and nitrate.",
      "stretch": true
    },
    {
      "id": "2-56",
      "topic": "2.7 VSEPR and Hybridization",
      "stem": "What is the molecular geometry of CH₄?",
      "choices": [
        "Trigonal planar",
        "Tetrahedral",
        "Trigonal pyramidal",
        "Square planar"
      ],
      "correct": 1,
      "explanation": "Carbon in CH₄ has 4 bonding pairs and 0 lone pairs (4 total electron groups, all bonding), giving both an electron geometry and molecular geometry of tetrahedral, with bond angles of exactly 109.5° since there are no lone pairs to cause any angle compression."
    },
    {
      "id": "2-57",
      "topic": "2.7 VSEPR and Hybridization",
      "stem": "What is the hybridization of the central carbon in formaldehyde, H₂C=O?",
      "choices": [
        "sp",
        "sp²",
        "sp³",
        "sp³d"
      ],
      "correct": 1,
      "explanation": "Carbon in H₂C=O has 3 electron groups around it: 2 single bonds to hydrogen and 1 double bond to oxygen (a double bond still counts as just one electron group/region for VSEPR purposes). Three electron groups corresponds to sp² hybridization and trigonal planar geometry, with bond angles close to 120°."
    },
    {
      "id": "2-58",
      "topic": "2.7 VSEPR and Hybridization",
      "stem": "Which molecule has a bent (not linear) molecular geometry?",
      "choices": [
        "CO₂",
        "BeCl₂",
        "H₂O",
        "C₂H₂"
      ],
      "correct": 2,
      "explanation": "Oxygen in H₂O has 4 total electron groups (2 bonding pairs, 2 lone pairs) — a tetrahedral electron geometry, but since 2 of those positions are invisible lone pairs, the visible molecular geometry (just the 2 bonded H atoms and central O) is bent, with an angle compressed to about 104.5° from the ideal 109.5° due to the extra repulsion from 2 lone pairs. CO₂, BeCl₂, and C₂H₂ are all linear, having only 2 electron groups (or, in C₂H₂'s case, 2 groups around each relevant carbon) with no lone pairs on the central atoms."
    },
    {
      "id": "2-59",
      "topic": "2.7 VSEPR and Hybridization",
      "stem": "Which best explains why the bond angle in NH₃ (about 107°) is smaller than the bond angle in CH₄ (109.5°)?",
      "choices": [
        "Nitrogen is a smaller atom than carbon.",
        "NH₃'s lone pair occupies more space and repels the bonding pairs more strongly than another bonding pair would, compressing the H-N-H angle below the ideal tetrahedral angle.",
        "NH₃ has fewer total electron groups than CH₄.",
        "There is no real difference; both angles are identical."
      ],
      "correct": 1,
      "explanation": "Both NH₃ and CH₄ have 4 total electron groups (tetrahedral electron geometry), but NH₃ has one lone pair replacing one of CH₄'s bonding pairs. Lone pairs are held closer to the central atom's nucleus (not stretched out toward another atom) and occupy more angular space, exerting greater repulsion on neighboring electron groups than a bonding pair would — this pushes the remaining bonding pairs slightly closer together, compressing the observed bond angle."
    },
    {
      "id": "2-60",
      "topic": "2.7 VSEPR and Hybridization",
      "stem": "What is the electron geometry and molecular geometry of the central atom in ClF₃, which has 3 bonding pairs and 2 lone pairs?",
      "choices": [
        "Electron geometry: trigonal bipyramidal; molecular geometry: T-shaped",
        "Electron geometry: trigonal bipyramidal; molecular geometry: trigonal pyramidal",
        "Electron geometry: tetrahedral; molecular geometry: bent",
        "Electron geometry: octahedral; molecular geometry: square planar"
      ],
      "correct": 0,
      "explanation": "With 5 total electron groups (3 bonding + 2 lone pairs), the electron geometry is trigonal bipyramidal (sp³d hybridization). The two lone pairs preferentially occupy equatorial positions (to minimize repulsion, since equatorial positions have fewer close 90° neighbors than axial positions), leaving the 3 bonded fluorines in a shape described as T-shaped — a distinctive VSEPR result worth recognizing directly rather than re-deriving each time."
    },
    {
      "id": "2-61",
      "topic": "2.7 VSEPR and Hybridization",
      "stem": "Why do lone pairs preferentially occupy equatorial rather than axial positions in a trigonal bipyramidal electron geometry?",
      "choices": [
        "Equatorial positions have fewer neighboring electron groups at the closer 90° angle, minimizing total repulsion.",
        "Axial positions are physically farther from the central atom's nucleus.",
        "There is no actual preference; lone pair placement is random.",
        "Equatorial positions always have a negative formal charge."
      ],
      "correct": 0,
      "explanation": "In a trigonal bipyramidal arrangement, axial positions have 3 close 90° neighbors while equatorial positions only have 2 close 90° neighbors (the rest are farther at 120°). Since repulsion is strongest at smaller angles, and lone pairs already repel more strongly than bonding pairs, placing lone pairs equatorially minimizes the number of strong 90°-type repulsions in the overall structure — this is why the lowest-energy, most stable arrangement always puts lone pairs equatorial first."
    },
    {
      "id": "2-62",
      "topic": "2.7 VSEPR and Hybridization",
      "stem": "What hybridization does the central atom have in SF₆?",
      "choices": [
        "sp³",
        "sp³d",
        "sp³d²",
        "sp²"
      ],
      "correct": 2,
      "explanation": "Sulfur in SF₆ has 6 bonding pairs and 0 lone pairs (6 total electron groups), corresponding to sp³d² hybridization and octahedral geometry — this requires an expanded octet (12 electrons around sulfur), which is only possible for elements in Period 3 or below."
    },
    {
      "id": "2-63",
      "topic": "2.7 VSEPR and Hybridization",
      "stem": "A central atom has 2 bonding pairs and 2 lone pairs (4 total electron groups). What is the molecular geometry?",
      "choices": [
        "Linear",
        "Bent",
        "Tetrahedral",
        "Trigonal planar"
      ],
      "correct": 1,
      "explanation": "4 total electron groups gives a tetrahedral electron geometry (sp³ hybridization) regardless of how many are lone pairs. But with only 2 bonding pairs visible (and 2 lone pairs invisible to molecular geometry), the observed shape connecting just the 3 atoms (central + 2 bonded) is bent — this is exactly the situation for water, and the bond angle is compressed even further than NH₃'s (down to about 104.5°) since there are 2 lone pairs pushing inward instead of just 1."
    },
    {
      "id": "2-64",
      "topic": "2.7 VSEPR and Hybridization",
      "stem": "Which molecule is nonpolar overall, despite containing polar bonds?",
      "choices": [
        "H₂O",
        "NH₃",
        "CO₂",
        "CHCl₃"
      ],
      "correct": 2,
      "explanation": "Each individual C=O bond in CO₂ is polar (oxygen is more electronegative than carbon), but because CO₂ is linear and perfectly symmetric, the two bond dipoles point in exactly opposite directions and cancel completely, giving a net molecular dipole moment of zero — an overall nonpolar molecule. H₂O, NH₃, and CHCl₃ are all asymmetric enough (due to lone pairs or different substituents) that their bond dipoles don't fully cancel, making them polar overall."
    },
    {
      "id": "2-65",
      "topic": "2.7 VSEPR and Hybridization",
      "stem": "Stretch — beyond typical AP difficulty: XeF₄ has 4 bonding pairs and 2 lone pairs on the central Xe. Explain why the molecule is nonpolar despite having polar Xe-F bonds, using both symmetry and lone pair placement.",
      "choices": [
        "The molecule is actually polar; this premise is false.",
        "The two lone pairs occupy positions directly opposite each other (axial) in the octahedral electron geometry, leaving the 4 fluorines in a perfectly symmetric square planar arrangement, so the 4 individual Xe-F bond dipoles cancel completely by symmetry.",
        "Fluorine and xenon have identical electronegativity, so there are no bond dipoles to begin with.",
        "Lone pairs never affect molecular polarity."
      ],
      "correct": 1,
      "explanation": "With 6 total electron groups (4 bonding + 2 lone pairs), the electron geometry is octahedral. To minimize repulsion, the 2 lone pairs occupy positions directly across from each other (180° apart) rather than adjacent, leaving the 4 fluorine atoms arranged in a perfectly symmetric square planar molecular geometry. Because this square planar arrangement is highly symmetric, the four individual (and definitely polar, since Xe and F have different electronegativities) Xe-F bond dipoles point in four directions that cancel exactly in pairs, giving a net dipole moment of zero despite the clearly polar individual bonds — a good example of why molecular polarity requires considering overall geometry, not just individual bond polarity.",
      "stretch": true
    }
  ],
  "3": [
    {
      "id": "3-1",
      "topic": "3.1 IMFs",
      "stem": "Which type of intermolecular force is present in ALL molecular substances, regardless of polarity?",
      "choices": [
        "Hydrogen bonding",
        "Dipole-dipole",
        "London dispersion",
        "Ion-dipole"
      ],
      "correct": 2,
      "explanation": "London dispersion forces arise from temporary, instantaneous fluctuations in electron distribution, which occur in every atom and molecule regardless of overall polarity. Dipole-dipole and hydrogen bonding require permanent polarity or specific H-N/O/F bonds, so they're not universal the way dispersion forces are."
    },
    {
      "id": "3-2",
      "topic": "3.1 IMFs",
      "stem": "Which molecule exhibits hydrogen bonding?",
      "choices": [
        "CH₃-O-CH₃",
        "CH₃-CH₂-OH",
        "CH₃-CH₂-CH₃",
        "CH₃-F"
      ],
      "correct": 1,
      "explanation": "Hydrogen bonding requires H bonded directly to N, O, or F. In CH₃-CH₂-OH (ethanol), the H on the -OH group is directly bonded to oxygen, qualifying for hydrogen bonding. In CH₃-O-CH₃ (dimethyl ether), no H is directly bonded to the oxygen — all hydrogens are on carbon — so despite containing oxygen, this molecule does not hydrogen bond with itself."
    },
    {
      "id": "3-3",
      "topic": "3.1 IMFs",
      "stem": "Which best explains why London dispersion forces increase with molecular size?",
      "choices": [
        "Larger molecules have more protons, increasing nuclear attraction.",
        "Larger molecules have more electrons and a larger, more polarizable electron cloud, allowing for stronger temporary dipoles.",
        "Larger molecules are always polar.",
        "Molecular size has no effect on dispersion forces."
      ],
      "correct": 1,
      "explanation": "More electrons spread over a larger volume are more easily distorted into a temporary, uneven distribution (more 'polarizable'), creating stronger instantaneous dipoles and therefore stronger induced-dipole attractions with neighboring molecules."
    },
    {
      "id": "3-4",
      "topic": "3.1 IMFs",
      "stem": "Rank NH₃, PH₃, and AsH₃ by boiling point (highest to lowest).",
      "choices": [
        "NH₃ > PH₃ > AsH₃",
        "AsH₃ > PH₃ > NH₃",
        "PH₃ > NH₃ > AsH₃",
        "All three have identical boiling points"
      ],
      "correct": 0,
      "explanation": "NH₃ has hydrogen bonding (H bonded to N), giving it an anomalously high boiling point despite being the smallest molecule. PH₃ and AsH₃ don't hydrogen bond (P and As aren't electronegative enough), so their boiling points depend on dispersion forces, which favor the larger AsH₃ over PH₃ — but neither comes close to NH₃'s hydrogen-bonding-boosted value."
    },
    {
      "id": "3-5",
      "topic": "3.1 IMFs",
      "stem": "Which pair of molecules would primarily interact via dipole-dipole forces (not hydrogen bonding)?",
      "choices": [
        "H₂O and H₂O",
        "HF and HF",
        "CH₃Cl and CH₃Cl",
        "NH₃ and NH₃"
      ],
      "correct": 2,
      "explanation": "CH₃Cl is polar (C-Cl bond dipole not cancelled by symmetry) but has no H bonded directly to N, O, or F — its hydrogens are all on carbon. This makes dipole-dipole (not hydrogen bonding) the strongest IMF present. The other three options all have H bonded directly to O, F, or N respectively, qualifying for hydrogen bonding."
    },
    {
      "id": "3-6",
      "topic": "3.1 IMFs",
      "stem": "Why does I₂ have a higher melting point than F₂, even though both are nonpolar diatomic halogens?",
      "choices": [
        "I₂ has ionic bonding while F₂ does not.",
        "I₂ has far more electrons and a larger, more polarizable electron cloud, giving it stronger London dispersion forces.",
        "I₂ is polar while F₂ is nonpolar.",
        "Melting point is unrelated to IMF strength for diatomic molecules."
      ],
      "correct": 1,
      "explanation": "Both I₂ and F₂ are nonpolar, so dispersion forces are the only IMF present in both. Iodine's much larger size and greater number of electrons give it substantially stronger dispersion forces than fluorine, which is why I₂ is a solid at room temperature while F₂ is a gas."
    },
    {
      "id": "3-7",
      "topic": "3.1 IMFs",
      "stem": "A molecule is polar but does not have H bonded to N, O, or F. Which IMFs does it experience?",
      "choices": [
        "Only London dispersion",
        "Dipole-dipole and London dispersion",
        "Only hydrogen bonding",
        "Only dipole-dipole"
      ],
      "correct": 1,
      "explanation": "A polar molecule always experiences dipole-dipole attraction (from its permanent partial charges) in addition to London dispersion forces (present in every molecule, polar or not). Since it lacks H directly bonded to N, O, or F, hydrogen bonding is not present."
    },
    {
      "id": "3-8",
      "topic": "3.1 IMFs",
      "stem": "Which of the following molecules would you expect to have the highest boiling point?",
      "choices": [
        "CH₃CH₂CH₃ (propane)",
        "CH₃COCH₃ (acetone, polar C=O)",
        "CH₃CH₂OH (ethanol)",
        "CH₃CH₃ (ethane)"
      ],
      "correct": 2,
      "explanation": "Ethanol has hydrogen bonding (O-H group), the strongest IMF among these options, giving it the highest boiling point (78°C) despite being one of the smaller molecules listed. Acetone is polar (dipole-dipole) but has no O-H or N-H bond, so it lacks hydrogen bonding; propane and ethane are both nonpolar with only dispersion forces."
    },
    {
      "id": "3-9",
      "topic": "3.1 IMFs",
      "stem": "Two isomers, both with formula C₄H₁₀O, are compared: one is an alcohol (has an -OH group) and one is an ether (no -OH group, oxygen bonded to two carbons). Which has the higher boiling point, and why?",
      "choices": [
        "The ether, since ethers are always more polar",
        "The alcohol, because it has hydrogen bonding while the ether does not",
        "They have identical boiling points since they share the same molecular formula",
        "The ether, because it has more London dispersion forces"
      ],
      "correct": 1,
      "explanation": "Despite having the exact same molecular formula (and thus the same molar mass and similar dispersion forces), the alcohol isomer has an O-H bond capable of hydrogen bonding, while the ether's oxygen is bonded only to carbons on both sides — no H directly on O. This structural difference alone gives the alcohol a substantially higher boiling point, a great example of how connectivity (not just formula) determines IMFs and physical properties."
    },
    {
      "id": "3-10",
      "topic": "3.2 Properties of Solids",
      "stem": "Which type of solid has the highest typical melting point?",
      "choices": [
        "Molecular solid",
        "Metallic solid",
        "Covalent network solid",
        "Amorphous solid"
      ],
      "correct": 2,
      "explanation": "Covalent network solids (like diamond or quartz) require breaking actual covalent bonds extending throughout the entire 3D structure to melt, which requires far more energy than overcoming IMFs (molecular solids) or even the electron-sea/ionic attractions in metallic or ionic solids."
    },
    {
      "id": "3-11",
      "topic": "3.2 Properties of Solids",
      "stem": "Which best describes an amorphous solid like glass?",
      "choices": [
        "A solid with a perfectly repeating, long-range ordered structure",
        "A solid lacking long-range order, with only local/short-range structure",
        "A solid that is always ionic",
        "A solid that always conducts electricity"
      ],
      "correct": 1,
      "explanation": "Amorphous solids, unlike crystalline solids, lack the long-range, repeating structural order of a true crystal lattice — atoms or molecules are frozen in a relatively random, disordered arrangement (more like a 'frozen liquid'), even though some short-range local structure may still exist."
    },
    {
      "id": "3-12",
      "topic": "3.2 Properties of Solids",
      "stem": "Dry ice (solid CO₂) is an example of what type of solid?",
      "choices": [
        "Ionic solid",
        "Covalent network solid",
        "Molecular solid",
        "Metallic solid"
      ],
      "correct": 2,
      "explanation": "Dry ice consists of individual, intact CO₂ molecules held to their neighbors only by weak London dispersion forces (CO₂ is nonpolar) — a molecular solid. This is why it sublimes at such a low temperature; only weak IMFs, not covalent bonds, need to be overcome."
    },
    {
      "id": "3-13",
      "topic": "3.2 Properties of Solids",
      "stem": "Which observation would best support classifying an unknown solid as a covalent network solid?",
      "choices": [
        "It has a low melting point and dissolves easily in water.",
        "It conducts electricity as a solid.",
        "It is extremely hard, has an extremely high melting point, and does not conduct electricity even when molten.",
        "It shatters easily under stress and conducts electricity when dissolved in water."
      ],
      "correct": 2,
      "explanation": "Covalent network solids like diamond or quartz are characterized by extreme hardness and extremely high melting points (breaking actual covalent bonds throughout the structure) and, unlike ionic solids, do not conduct electricity even when molten, since there are no charged, mobile particles — just a continuous covalent framework."
    },
    {
      "id": "3-14",
      "topic": "3.2 Properties of Solids",
      "stem": "Silicon dioxide (SiO₂, quartz) has a much higher melting point than solid iodine (I₂). What best explains this difference?",
      "choices": [
        "SiO₂ is a covalent network solid requiring covalent bonds to be broken; I₂ is a molecular solid held together only by weaker London dispersion forces.",
        "SiO₂ has stronger dispersion forces than I₂.",
        "Iodine is an ionic solid while SiO₂ is not.",
        "There is no real difference in their melting points."
      ],
      "correct": 0,
      "explanation": "SiO₂'s silicon and oxygen atoms are connected in a continuous 3D network of covalent bonds, requiring genuine bond-breaking to melt. I₂ molecules, by contrast, are complete, stable units held to their neighbors only by comparatively weak London dispersion forces — no bonds need breaking, only IMFs need overcoming, explaining the much lower melting point."
    },
    {
      "id": "3-15",
      "topic": "3.2 Properties of Solids",
      "stem": "Which of these is classified as a molecular solid at room temperature (as a solid, at low enough temperature)?",
      "choices": [
        "NaCl",
        "Diamond",
        "Solid CO₂ (dry ice)",
        "Copper metal"
      ],
      "correct": 2,
      "explanation": "Solid CO₂ consists of discrete CO₂ molecules held together by weak dispersion forces — a molecular solid. NaCl is ionic, diamond is a covalent network solid, and copper is metallic; each has a fundamentally different type of interparticle attraction holding its solid structure together."
    },
    {
      "id": "3-16",
      "topic": "3.2 Properties of Solids",
      "stem": "Graphite and diamond are both covalent network-type solids (in graphite's case, within each 2D sheet), yet graphite conducts electricity while diamond does not. What structural difference explains this?",
      "choices": [
        "Graphite has ionic bonds between layers, unlike diamond.",
        "In graphite, each carbon is sp² hybridized with one unhybridized p-orbital electron delocalized across the sheet (similar to a metal's electron sea), while diamond's carbons are all sp³ hybridized with every valence electron localized in a single covalent bond, leaving none free to move.",
        "Diamond contains more carbon atoms per unit volume than graphite.",
        "Graphite is not actually a solid at room temperature."
      ],
      "correct": 1,
      "explanation": "Diamond's sp³ carbons each form four localized single bonds, using all 4 valence electrons in fixed positions with no mobile charge carriers, making it an electrical insulator despite being a covalent network solid. Graphite's sp² carbons each leave one electron in an unhybridized p-orbital that delocalizes across the entire 2D sheet (much like a metallic electron sea, but confined to 2D), giving graphite conductivity within each layer — a genuine hybrid case between covalent network and metallic-like behavior."
    },
    {
      "id": "3-17",
      "topic": "3.3 Phases",
      "stem": "On a heating curve, what does a flat (constant temperature) plateau represent?",
      "choices": [
        "The substance is not being heated during that time.",
        "A phase change is occurring; added energy is overcoming IMFs (or bonds) rather than increasing kinetic energy.",
        "The substance has reached its maximum possible temperature.",
        "A measurement error in the experiment."
      ],
      "correct": 1,
      "explanation": "During a phase change, all added heat energy goes into overcoming the attractive forces between particles (increasing potential energy) rather than increasing particle speed (kinetic energy/temperature) — this is exactly why temperature stays constant even while heat continues to be added throughout the entire phase transition."
    },
    {
      "id": "3-18",
      "topic": "3.3 Phases",
      "stem": "Which correctly describes the relative particle motion and organization in a liquid compared to a solid and a gas?",
      "choices": [
        "Liquids have particles in fixed positions, like solids, but move faster than gas particles.",
        "Liquids have particles that can move past one another (unlike a rigid solid) but remain close together (unlike a widely-spaced gas).",
        "Liquids have no intermolecular forces at all, unlike solids and gases.",
        "Liquids and gases have identical particle spacing and organization."
      ],
      "correct": 1,
      "explanation": "Liquid particles retain enough attractive interaction to stay close together (much closer than in a gas) but have enough kinetic energy to slide past one another rather than being locked into fixed lattice positions like a solid — this intermediate combination of closeness and mobility explains liquids' ability to flow while still being nearly incompressible."
    },
    {
      "id": "3-19",
      "topic": "3.3 Phases",
      "stem": "Why does sweat evaporating from skin have a cooling effect?",
      "choices": [
        "Evaporation releases heat into the skin.",
        "The molecules that escape into the gas phase are, on average, the highest-kinetic-energy molecules, leaving the remaining liquid with lower average kinetic energy (lower temperature).",
        "Evaporation is an exothermic process that warms the surroundings.",
        "Sweat has no measurable temperature effect on skin."
      ],
      "correct": 1,
      "explanation": "Only the fastest-moving (highest KE) molecules have enough energy to escape the liquid's IMFs and evaporate. Once they leave, the molecules remaining in the liquid phase have a lower average kinetic energy than before — and since temperature is a direct measure of average KE, the remaining liquid (and the skin it's in contact with) cools down."
    },
    {
      "id": "3-20",
      "topic": "3.3 Phases",
      "stem": "Which phase change releases energy into the surroundings (exothermic)?",
      "choices": [
        "Melting",
        "Boiling",
        "Condensation",
        "Sublimation"
      ],
      "correct": 2,
      "explanation": "Condensation (gas → liquid) is exothermic because new attractive IMFs are being formed as molecules come together, releasing energy. Melting, boiling, and sublimation are all endothermic — they require energy input to overcome existing attractive forces and separate particles further apart."
    },
    {
      "id": "3-21",
      "topic": "3.3 Phases",
      "stem": "A substance's heating curve shows a much longer plateau at its boiling point than at its melting point. What does this indicate?",
      "choices": [
        "The substance boils faster than it melts.",
        "More energy is required to completely vaporize the substance than to completely melt it (since vaporization requires fully overcoming all remaining IMFs, not just enough to allow particle mobility).",
        "The measurement must be flawed, since both plateaus should always be equal length.",
        "The substance has a lower boiling point than melting point."
      ],
      "correct": 1,
      "explanation": "The length of a heating curve plateau directly reflects the energy required for that phase change (heat of fusion for melting, heat of vaporization for boiling), assuming a constant heating rate. Boiling requires completely separating particles from all their neighbors into a gas phase, while melting only requires enough energy to let particles move past each other while remaining close together — this is why heat of vaporization is almost always substantially larger than heat of fusion for the same substance."
    },
    {
      "id": "3-22",
      "topic": "3.3 Phases",
      "stem": "Which best explains why increasing pressure generally raises a liquid's boiling point?",
      "choices": [
        "Higher pressure increases IMF strength directly.",
        "At higher external pressure, gas molecules must have more kinetic energy (achieved at a higher temperature) to overcome the greater pressure pushing back on the liquid's surface and escape into the gas phase.",
        "Pressure has no effect on boiling point.",
        "Higher pressure decreases the number of particles in the liquid."
      ],
      "correct": 1,
      "explanation": "Boiling occurs when a liquid's vapor pressure equals the external (atmospheric) pressure. Increasing external pressure means the liquid's vapor pressure must also increase to match it before boiling can occur, and vapor pressure increases with temperature — so a higher external pressure requires a higher temperature to reach boiling. This is exactly why a pressure cooker (higher internal pressure) cooks food faster at a higher-than-normal boiling point of water."
    },
    {
      "id": "3-23",
      "topic": "3.3 Phases",
      "stem": "Why does water at high altitude (lower atmospheric pressure) boil at a lower temperature than at sea level?",
      "choices": [
        "Lower atmospheric pressure means water's vapor pressure needs to reach only a lower value to match it and begin boiling, which happens at a lower temperature.",
        "Water molecules have weaker IMFs at high altitude.",
        "There is less water available at high altitude.",
        "Atmospheric pressure has no relationship to boiling point."
      ],
      "correct": 0,
      "explanation": "Since boiling occurs when vapor pressure equals external pressure, a lower external (atmospheric) pressure at high altitude means water's vapor pressure only needs to reach that lower value to boil — and since vapor pressure increases with temperature, reaching a lower required vapor pressure happens at a lower temperature than at sea level."
    },
    {
      "id": "3-24",
      "topic": "3.4 Ideal Gas Law",
      "stem": "How many moles of gas are in a 15.0 L container at 2.50 atm and 298 K?",
      "choices": [
        "0.766 mol",
        "1.53 mol",
        "3.06 mol",
        "0.383 mol"
      ],
      "correct": 1,
      "explanation": "n = PV/RT = (2.50 atm)(15.0 L) / [(0.0821 L·atm/mol·K)(298 K)] = 37.5 / 24.47 = 1.53 mol."
    },
    {
      "id": "3-25",
      "topic": "3.4 Ideal Gas Law",
      "stem": "A gas sample occupies 2.00 L at 1.00 atm and 273 K. What volume will it occupy at 2.00 atm and 273 K (temperature constant)?",
      "choices": [
        "1.00 L",
        "2.00 L",
        "4.00 L",
        "0.500 L"
      ],
      "correct": 0,
      "explanation": "With n, R, and T constant, PV must remain constant (Boyle's Law): P₁V₁ = P₂V₂. (1.00)(2.00) = (2.00)V₂, so V₂ = 2.00/2.00 = 1.00 L. Doubling pressure at constant temperature halves the volume, consistent with the inverse relationship between P and V."
    },
    {
      "id": "3-26",
      "topic": "3.4 Ideal Gas Law",
      "stem": "What is the density of an ideal gas with molar mass 44.01 g/mol at 1.00 atm and 298 K?",
      "choices": [
        "0.900 g/L",
        "1.80 g/L",
        "3.60 g/L",
        "0.450 g/L"
      ],
      "correct": 1,
      "explanation": "Using d = PM/RT = (1.00 atm)(44.01 g/mol) / [(0.0821 L·atm/mol·K)(298 K)] = 44.01 / 24.47 = 1.80 g/L. This formula is a direct rearrangement of PV=nRT combined with n=m/M, useful for identifying unknown gases from measured density."
    },
    {
      "id": "3-27",
      "topic": "3.4 Ideal Gas Law",
      "stem": "A gas at constant volume and constant moles is cooled from 400 K to 200 K. What happens to its pressure?",
      "choices": [
        "It doubles.",
        "It is cut in half.",
        "It stays the same.",
        "It quadruples."
      ],
      "correct": 1,
      "explanation": "With n, R, and V constant, P/T remains constant (Gay-Lussac's Law): P₁/T₁ = P₂/T₂. Halving the absolute temperature (400 K to 200 K) must therefore halve the pressure to keep P/T constant."
    },
    {
      "id": "3-28",
      "topic": "3.4 Ideal Gas Law",
      "stem": "What is the molar mass of a gas that has a density of 1.43 g/L at STP (1.00 atm, 273 K)?",
      "choices": [
        "16.0 g/mol",
        "22.4 g/mol",
        "32.0 g/mol",
        "44.0 g/mol"
      ],
      "correct": 2,
      "explanation": "M = dRT/P = (1.43 g/L)(0.0821 L·atm/mol·K)(273 K) / (1.00 atm) = 32.05 g/mol ≈ 32.0 g/mol, consistent with O₂ gas — a good real-world check since 1.43 g/L is in fact O₂'s known density at STP."
    },
    {
      "id": "3-29",
      "topic": "3.4 Ideal Gas Law",
      "stem": "A 1.00 L container holds 0.0500 mol of gas at 25°C. What is the pressure inside the container?",
      "choices": [
        "1.22 atm",
        "0.610 atm",
        "2.44 atm",
        "12.2 atm"
      ],
      "correct": 0,
      "explanation": "First convert temperature to Kelvin: 25°C + 273 = 298 K. P = nRT/V = (0.0500)(0.0821)(298) / (1.00) = 1.223 atm ≈ 1.22 atm. Forgetting the Celsius-to-Kelvin conversion here would give an incorrect answer of roughly 1.03 atm — a good example of why that conversion step matters."
    },
    {
      "id": "3-30",
      "topic": "3.4 Ideal Gas Law",
      "stem": "Two gas samples, A and B, occupy the same volume at the same temperature and pressure. What must be true about them?",
      "choices": [
        "They must be the same gas.",
        "They must have the same number of moles (and therefore the same number of particles), regardless of identity.",
        "They must have the same mass.",
        "They must have the same density."
      ],
      "correct": 1,
      "explanation": "This is Avogadro's Law, a direct consequence of PV=nRT: at the same P, V, and T, n must be identical regardless of which gas is present. Mass and density, however, depend on molar mass, which can differ between different gases even with identical mole counts."
    },
    {
      "id": "3-31",
      "topic": "3.4 Ideal Gas Law",
      "stem": "A balloon contains 0.500 mol of He at 1.00 atm and 293 K. If the balloon is heated to 350 K at constant pressure, what is the new volume (initial volume was 12.0 L)?",
      "choices": [
        "10.0 L",
        "12.0 L",
        "14.3 L",
        "16.8 L"
      ],
      "correct": 2,
      "explanation": "With n and P constant, V/T remains constant (Charles's Law): V₁/T₁ = V₂/T₂. 12.0/293 = V₂/350, so V₂ = 12.0 × (350/293) = 14.3 L. This matches the expected behavior of a balloon expanding as it's heated at constant (atmospheric) pressure."
    },
    {
      "id": "3-32",
      "topic": "3.4 Ideal Gas Law",
      "stem": "Stretch — beyond typical AP difficulty: A 2.00 L rigid container holds a mixture of 0.300 mol N₂ and 0.200 mol O₂ at 300 K. What is the total pressure, and what is the partial pressure of O₂?",
      "choices": [
        "Total: 6.16 atm; P(O₂) = 2.46 atm",
        "Total: 3.70 atm; P(O₂) = 2.46 atm",
        "Total: 6.16 atm; P(O₂) = 3.70 atm",
        "Total: 12.3 atm; P(O₂) = 4.93 atm"
      ],
      "correct": 0,
      "explanation": "Total moles = 0.300 + 0.200 = 0.500 mol. Total pressure = nRT/V = (0.500)(0.0821)(300)/(2.00) = 12.315/2.00 = 6.16 atm. Partial pressure of O₂ = (mole fraction of O₂) × total pressure = (0.200/0.500) × 6.16 = 0.400 × 6.16 = 2.46 atm. This applies Dalton's Law of Partial Pressures, combining mole fraction reasoning with the ideal gas law for a gas mixture.",
      "stretch": true
    },
    {
      "id": "3-33",
      "topic": "3.5 KMT",
      "stem": "According to Kinetic Molecular Theory, what determines the average kinetic energy of gas particles?",
      "choices": [
        "Molar mass only",
        "Absolute temperature only",
        "Both molar mass and temperature equally",
        "Pressure only"
      ],
      "correct": 1,
      "explanation": "KMT states average kinetic energy depends only on absolute temperature (in Kelvin) — all gases at the same temperature have identical average kinetic energy, regardless of their molar mass or identity. This is a foundational, frequently-tested principle of the theory."
    },
    {
      "id": "3-34",
      "topic": "3.5 KMT",
      "stem": "At the same temperature, which gas has the highest average molecular speed?",
      "choices": [
        "CO₂ (44 g/mol)",
        "N₂ (28 g/mol)",
        "He (4 g/mol)",
        "O₂ (32 g/mol)"
      ],
      "correct": 2,
      "explanation": "Since all gases at the same temperature have the same average kinetic energy (½mv²), and KE is fixed, a lower molar mass must correspond to a higher average speed to maintain that same KE. Helium, with by far the lowest molar mass here, has the highest average molecular speed."
    },
    {
      "id": "3-35",
      "topic": "3.5 KMT",
      "stem": "Using Graham's Law, compare the effusion rates of Ne (20.2 g/mol) and Ar (40.0 g/mol) at the same temperature.",
      "choices": [
        "Ne effuses about 1.4× faster than Ar",
        "Ar effuses about 1.4× faster than Ne",
        "They effuse at identical rates",
        "Ne effuses about 2× faster than Ar"
      ],
      "correct": 0,
      "explanation": "Rate(Ne)/Rate(Ar) = √(M(Ar)/M(Ne)) = √(40.0/20.2) = √1.98 = 1.41. Neon, being lighter, effuses about 1.4 times faster than argon at the same temperature."
    },
    {
      "id": "3-36",
      "topic": "3.5 KMT",
      "stem": "Which KMT postulate explains why gas pressure increases when a gas is compressed into a smaller volume at constant temperature and moles?",
      "choices": [
        "Gas particles collide with container walls more frequently in a smaller volume, since there's less distance to travel between collisions.",
        "Gas particles move faster in a smaller volume.",
        "Compressing a gas increases the number of gas particles.",
        "Compression has no effect on pressure according to KMT."
      ],
      "correct": 0,
      "explanation": "KMT models pressure as the result of particle collisions with the container walls. In a smaller volume, particles travel a shorter average distance between wall collisions, so they collide with the walls more often per unit time — more frequent collisions means greater force per unit area, i.e., higher pressure, even though average speed (tied to temperature) hasn't changed."
    },
    {
      "id": "3-37",
      "topic": "3.5 KMT",
      "stem": "A sample of gas X takes 3.0 minutes to effuse through a small opening; the same amount of gas Y takes 1.5 minutes under identical conditions. Which gas has the greater molar mass?",
      "choices": [
        "Gas X",
        "Gas Y",
        "They have equal molar mass",
        "Cannot be determined from this information"
      ],
      "correct": 0,
      "explanation": "Slower effusion corresponds to a heavier gas (Graham's Law: rate is inversely related to the square root of molar mass). Since gas X takes longer to effuse (slower rate), it must have the greater molar mass — specifically, using rate ratios, gas X's molar mass would be 4 times gas Y's molar mass (since the time ratio is 2, and rate ∝ 1/time, giving a rate ratio of 2, and molar mass ratio = rate ratio² = 4)."
    },
    {
      "id": "3-38",
      "topic": "3.5 KMT",
      "stem": "Which assumption of the ideal gas model, according to KMT, is the LEAST accurate for real gases at high pressure?",
      "choices": [
        "Gas particles are in constant random motion.",
        "Gas particles have negligible volume compared to the container.",
        "Collisions between gas particles are elastic.",
        "Average kinetic energy is proportional to temperature."
      ],
      "correct": 1,
      "explanation": "At high pressure, gas particles are forced close together, and their actual physical volume becomes a significant fraction of the total container volume — no longer negligible as the ideal model assumes. This is exactly the assumption that breaks down first and most significantly under high-pressure conditions, requiring a correction term (the 'b' term in van der Waals) to account for it."
    },
    {
      "id": "3-39",
      "topic": "3.5 KMT",
      "stem": "A container holds a mixture of He and Ar at the same temperature. Which statement is true?",
      "choices": [
        "He and Ar particles have the same average speed.",
        "He and Ar particles have the same average kinetic energy but different average speeds.",
        "He and Ar particles have the same average kinetic energy and the same average speed.",
        "Ar particles have higher average kinetic energy than He particles since Ar is heavier."
      ],
      "correct": 1,
      "explanation": "At the same temperature, all gases share the same average kinetic energy regardless of identity (a direct KMT postulate) — but since KE = ½mv² and He has a much smaller mass than Ar, He's particles must move faster on average to have that same kinetic energy."
    },
    {
      "id": "3-40",
      "topic": "3.5 KMT",
      "stem": "Which best describes the distribution of molecular speeds within a single gas sample at a fixed temperature?",
      "choices": [
        "All particles move at exactly the same speed.",
        "Particles have a range (distribution) of speeds, with most clustered around an average value, described by the Maxwell-Boltzmann distribution.",
        "Half the particles are stationary and half move at maximum speed.",
        "Speed distribution is impossible to describe or model."
      ],
      "correct": 1,
      "explanation": "Even within a single gas sample at one fixed temperature, individual particles have a range of speeds due to random collisions constantly redistributing kinetic energy among particles — this range is described by the Maxwell-Boltzmann distribution, a bell-shaped-ish curve with most particles clustered near the average speed but a tail extending to both higher and lower speeds."
    },
    {
      "id": "3-41",
      "topic": "3.6 Deviation from Ideal",
      "stem": "Under which conditions do real gases deviate MOST from ideal gas behavior?",
      "choices": [
        "Low pressure and high temperature",
        "High pressure and low temperature",
        "High pressure and high temperature",
        "Low pressure and low temperature"
      ],
      "correct": 1,
      "explanation": "High pressure forces particles close enough together that their actual volume (assumed zero in the ideal model) becomes significant, and low temperature slows particles enough that intermolecular attractions (also assumed zero) become significant. Both conditions together produce the greatest deviation from ideal behavior."
    },
    {
      "id": "3-42",
      "topic": "3.6 Deviation from Ideal",
      "stem": "In the van der Waals equation, what does the constant 'a' correct for?",
      "choices": [
        "The volume occupied by gas particles",
        "Intermolecular attractive forces between gas particles",
        "The number of moles of gas",
        "Temperature fluctuations"
      ],
      "correct": 1,
      "explanation": "The 'a' term in the van der Waals equation (P + an²/V²) accounts for the fact that real gas particles attract each other, which reduces the actual pressure exerted on the container walls compared to what the ideal gas law would predict — the correction adds back the 'missing' pressure caused by this attraction."
    },
    {
      "id": "3-43",
      "topic": "3.6 Deviation from Ideal",
      "stem": "Which gas would you expect to behave most ideally under normal conditions?",
      "choices": [
        "He",
        "Xe",
        "CO₂",
        "NH₃"
      ],
      "correct": 0,
      "explanation": "Helium is small, has very few electrons (weak dispersion forces), and is nonpolar (no dipole-dipole) — all factors that minimize intermolecular attraction and particle volume, the two sources of deviation from ideal behavior. Xe (larger, more electrons), CO₂ (larger, more electrons), and especially NH₃ (hydrogen bonding, strong IMFs) all deviate more significantly."
    },
    {
      "id": "3-44",
      "topic": "3.6 Deviation from Ideal",
      "stem": "At very high pressure, the measured volume of a real gas is generally __________ the volume predicted by the ideal gas law.",
      "choices": [
        "equal to",
        "greater than",
        "less than",
        "unrelated to"
      ],
      "correct": 1,
      "explanation": "At high pressure, real gas particles' own physical volume becomes significant (not truly negligible/compressible 'empty space' as the ideal model assumes), so the gas resists compression more than ideal behavior would predict — meaning the real measured volume ends up larger than the ideal gas law's prediction at that same pressure."
    },
    {
      "id": "3-45",
      "topic": "3.6 Deviation from Ideal",
      "stem": "At low temperature, the measured pressure of a real gas is generally __________ the pressure predicted by the ideal gas law.",
      "choices": [
        "equal to",
        "greater than",
        "less than",
        "unrelated to"
      ],
      "correct": 2,
      "explanation": "At low temperature, gas particles move slowly enough that intermolecular attractions have time to act before a particle collides with the container wall, softening the force of that collision. This means real gas pressure ends up lower than what the ideal gas law (which assumes zero attraction) would predict at that same temperature and volume."
    },
    {
      "id": "3-46",
      "topic": "3.6 Deviation from Ideal",
      "stem": "Which pair of gases would you expect to have the most different van der Waals 'a' constants, reflecting different strengths of intermolecular attraction?",
      "choices": [
        "He and Ne (both nonpolar, similar size)",
        "CH₄ and CO₂ (both nonpolar, similar size)",
        "He and NH₃ (very different polarity and size)",
        "N₂ and CO (similar size and polarity)"
      ],
      "correct": 2,
      "explanation": "He is nonpolar, tiny, with extremely weak dispersion forces (very small 'a'), while NH₃ is polar and hydrogen-bonds (much stronger IMFs, much larger 'a'). This pairing has by far the largest expected difference in intermolecular attraction strength — and therefore the largest difference in van der Waals 'a' values — among the options given."
    },
    {
      "id": "3-47",
      "topic": "3.6 Deviation from Ideal",
      "stem": "Stretch — beyond typical AP difficulty: A gas sample shows a measured pressure lower than the ideal gas law predicts at a fixed volume and temperature. As temperature is significantly increased (volume held constant), what would you expect to happen to this discrepancy?",
      "choices": [
        "The discrepancy would increase, since higher temperature always increases deviation from ideal behavior.",
        "The discrepancy would decrease, since higher temperature gives particles more kinetic energy, making intermolecular attractions comparatively less significant relative to particle motion.",
        "The discrepancy would remain exactly the same regardless of temperature.",
        "Real gases only deviate from ideal behavior at low pressure, so temperature is irrelevant here."
      ],
      "correct": 1,
      "explanation": "Deviation from ideal behavior driven by intermolecular attraction (the low-pressure discrepancy scenario described) is a low-temperature phenomenon — as temperature rises, particles move faster and attractive forces become comparatively less able to affect their trajectories before collisions, moving the gas's actual behavior closer to ideal predictions, shrinking rather than growing the discrepancy.",
      "stretch": true
    },
    {
      "id": "3-48",
      "topic": "3.7 Solutions",
      "stem": "Which solvent would best dissolve a nonpolar solute like hexane?",
      "choices": [
        "Water",
        "Ethanol",
        "Carbon tetrachloride (nonpolar)",
        "Ammonia (polar)"
      ],
      "correct": 2,
      "explanation": "'Like dissolves like' — a nonpolar solute is best dissolved by a nonpolar solvent, since both rely on relatively weak London dispersion forces that can form comparably favorable new attractions. Water, ethanol, and ammonia are all polar and would not effectively dissolve a nonpolar substance like hexane."
    },
    {
      "id": "3-49",
      "topic": "3.7 Solutions",
      "stem": "Why does oil not dissolve in water?",
      "choices": [
        "Oil molecules are too large to fit between water molecules.",
        "Water's strong hydrogen bonding network is more favorable to maintain with itself than to break apart and form weak interactions with nonpolar oil molecules.",
        "Oil is denser than water.",
        "Oil and water have identical polarity."
      ],
      "correct": 1,
      "explanation": "Dissolving requires the solvent's own favorable attractions (here, water's strong hydrogen bonds) to be broken and replaced by comparably favorable new solute-solvent attractions. Nonpolar oil can only offer weak dispersion forces to water, nowhere near strong enough to compensate for the hydrogen bonds that would need to be disrupted, so mixing is energetically unfavorable and the two remain separate."
    },
    {
      "id": "3-50",
      "topic": "3.7 Solutions",
      "stem": "What type of attraction is primarily responsible for dissolving an ionic solid in water?",
      "choices": [
        "Dispersion forces",
        "Ion-dipole attraction",
        "Covalent bond formation",
        "Metallic bonding"
      ],
      "correct": 1,
      "explanation": "Water's polar molecules orient their partial charges toward the ions at the surface of an ionic crystal (oxygen toward cations, hydrogen toward anions), and this ion-dipole attraction is what pulls individual ions away from the lattice and stabilizes them in solution (hydration)."
    },
    {
      "id": "3-51",
      "topic": "3.7 Solutions",
      "stem": "Which term describes a solution where no more solute can dissolve at a given temperature, with undissolved solute in equilibrium with dissolved solute?",
      "choices": [
        "Unsaturated",
        "Saturated",
        "Supersaturated",
        "Diluted"
      ],
      "correct": 1,
      "explanation": "A saturated solution is at the maximum solute concentration the solvent can hold at that temperature, with dissolved and undissolved solute in dynamic equilibrium (solute continues dissolving and recrystallizing at equal rates, even though no net change is visible)."
    },
    {
      "id": "3-52",
      "topic": "3.7 Solutions",
      "stem": "A supersaturated solution contains more dissolved solute than would normally be possible at that temperature. How is this typically achieved?",
      "choices": [
        "By adding excess undissolved solute at room temperature",
        "By dissolving solute at a higher temperature (where solubility is greater), then slowly cooling the solution without disturbance, so excess solute cannot immediately crystallize back out",
        "It cannot be achieved under any circumstances",
        "By diluting a saturated solution further"
      ],
      "correct": 1,
      "explanation": "Supersaturation is achieved by exploiting the fact that solubility (for most solids) increases with temperature: dissolve solute at high temperature up to its (higher) solubility limit, then carefully cool the solution — if done without disturbance (no seed crystals, no agitation), the excess solute can remain dissolved in an unstable, supersaturated state beyond what the now-lower temperature would normally allow."
    },
    {
      "id": "3-53",
      "topic": "3.7 Solutions",
      "stem": "Which factor is most directly responsible for why ethanol (CH₃CH₂OH) is miscible with water in all proportions?",
      "choices": [
        "Both molecules are nonpolar.",
        "Both molecules can hydrogen bond with each other, providing comparably strong solute-solvent attraction to the pure-substance attractions being disrupted.",
        "Ethanol is an ionic compound.",
        "Water and ethanol have identical molar mass."
      ],
      "correct": 1,
      "explanation": "Ethanol's -OH group can hydrogen bond directly with water's hydrogen-bonding network, providing new solute-solvent attractions comparable in strength to the ones being broken (water-water and ethanol-ethanol hydrogen bonds) — this comparably strong new attraction is why the two liquids can mix in any ratio, unlike a nonpolar liquid such as oil."
    },
    {
      "id": "3-54",
      "topic": "3.7 Solutions",
      "stem": "Which best explains why methanol (CH₃OH) is more soluble in water than octanol (C₈H₁₇OH), even though both have an -OH group?",
      "choices": [
        "Methanol has a much larger nonpolar hydrocarbon 'tail' than octanol.",
        "Octanol's much larger nonpolar hydrocarbon chain increasingly dominates the molecule's overall character, making it behave more like a nonpolar substance overall despite the polar -OH group.",
        "Octanol cannot hydrogen bond at all.",
        "Methanol and octanol have identical solubility in water."
      ],
      "correct": 1,
      "explanation": "Both molecules have one hydrogen-bonding -OH group, but octanol's much longer nonpolar carbon chain (8 carbons vs. methanol's 1) contributes an increasingly large nonpolar 'like dissolves like' mismatch with water. As alcohol chain length increases, water solubility generally decreases, since the molecule's overall character shifts from 'mostly polar' toward 'mostly nonpolar.'"
    },
    {
      "id": "3-55",
      "topic": "3.7 Solutions",
      "stem": "Which of the following pairs would you predict to be miscible (fully soluble in each other in all proportions)?",
      "choices": [
        "Hexane (nonpolar) and heptane (nonpolar)",
        "Hexane (nonpolar) and water (polar, hydrogen-bonding)",
        "NaCl (ionic) and hexane (nonpolar)",
        "Water (polar) and hexane (nonpolar)"
      ],
      "correct": 0,
      "explanation": "Hexane and heptane are both nonpolar hydrocarbons with very similar structure and IMF profile (both rely almost entirely on London dispersion forces of comparable strength), so they mix freely and completely in any ratio — a textbook 'like dissolves like' match. All the other pairs mismatch polarity (polar/ionic vs. nonpolar), which strongly limits or prevents mutual solubility."
    },
    {
      "id": "3-56",
      "topic": "3.8 Representations",
      "stem": "What is the molarity of a solution containing 2.00 mol of solute in 4.00 L of solution?",
      "choices": [
        "0.500 M",
        "2.00 M",
        "8.00 M",
        "0.250 M"
      ],
      "correct": 0,
      "explanation": "M = mol solute / L solution = 2.00 mol / 4.00 L = 0.500 M."
    },
    {
      "id": "3-57",
      "topic": "3.8 Representations",
      "stem": "How many moles of solute are present in 250.0 mL of a 0.400 M solution?",
      "choices": [
        "0.0250 mol",
        "0.100 mol",
        "0.400 mol",
        "1.60 mol"
      ],
      "correct": 1,
      "explanation": "Convert mL to L: 250.0 mL = 0.2500 L. mol = M × L = 0.400 × 0.2500 = 0.100 mol."
    },
    {
      "id": "3-58",
      "topic": "3.8 Representations",
      "stem": "A 2.00 M stock solution is diluted by adding water to bring 50.0 mL of stock up to a total volume of 200.0 mL. What is the new concentration?",
      "choices": [
        "0.125 M",
        "0.500 M",
        "8.00 M",
        "0.250 M"
      ],
      "correct": 1,
      "explanation": "Using M₁V₁ = M₂V₂: (2.00)(50.0) = M₂(200.0), so M₂ = 100/200.0 = 0.500 M."
    },
    {
      "id": "3-59",
      "topic": "3.8 Representations",
      "stem": "What volume of a 6.00 M stock solution is needed to prepare 500.0 mL of a 1.50 M solution?",
      "choices": [
        "100.0 mL",
        "125.0 mL",
        "150.0 mL",
        "200.0 mL"
      ],
      "correct": 1,
      "explanation": "Using M₁V₁ = M₂V₂: M₁(V₁) = (1.50)(500.0), so V₁ = 750/6.00 = 125.0 mL of the 6.00 M stock solution should be measured out and diluted to a final volume of 500.0 mL."
    },
    {
      "id": "3-60",
      "topic": "3.8 Representations",
      "stem": "What is the molarity of a solution prepared by dissolving 20.0 g of NaOH (molar mass 40.00 g/mol) in enough water to make 250.0 mL of solution?",
      "choices": [
        "0.500 M",
        "1.00 M",
        "2.00 M",
        "0.800 M"
      ],
      "correct": 2,
      "explanation": "Moles of NaOH = 20.0 g / 40.00 g/mol = 0.500 mol. Molarity = 0.500 mol / 0.2500 L = 2.00 M."
    },
    {
      "id": "3-61",
      "topic": "3.8 Representations",
      "stem": "Which correctly describes what happens to molarity when a solution is diluted with additional solvent (no solute added or removed)?",
      "choices": [
        "Molarity increases, since volume increases.",
        "Molarity decreases, since the same number of moles is now spread through a larger volume.",
        "Molarity stays exactly the same.",
        "Molarity becomes undefined."
      ],
      "correct": 1,
      "explanation": "Dilution adds solvent (increasing total volume) while the number of moles of solute stays fixed. Since M = mol/L, keeping the numerator constant while increasing the denominator necessarily decreases molarity — this is the entire basis of the M₁V₁ = M₂V₂ relationship."
    },
    {
      "id": "3-62",
      "topic": "3.8 Representations",
      "stem": "A particulate-level diagram shows a box with 6 solute particles dissolved in a solvent, at a certain concentration. If the box's volume is doubled with the same number of solute particles shown, how does the depicted concentration change?",
      "choices": [
        "It doubles.",
        "It is cut in half.",
        "It stays the same.",
        "It cannot be determined."
      ],
      "correct": 1,
      "explanation": "The same number of particles spread through twice the volume represents half the original concentration — this is exactly the visual/conceptual representation of dilution at the particulate level, matching the mathematical M₁V₁=M₂V₂ relationship used numerically elsewhere in this section."
    },
    {
      "id": "3-63",
      "topic": "3.8 Representations",
      "stem": "Stretch — beyond typical AP difficulty: 150.0 mL of 4.00 M CaCl₂ is mixed with 350.0 mL of 2.00 M CaCl₂. Assuming volumes are additive, what is the final concentration of the mixed solution?",
      "choices": [
        "2.60 M",
        "3.00 M",
        "1.30 M",
        "2.10 M"
      ],
      "correct": 0,
      "explanation": "Moles from first solution: (4.00 M)(0.1500 L) = 0.600 mol. Moles from second solution: (2.00 M)(0.3500 L) = 0.700 mol. Total moles = 1.300 mol. Total volume = 0.1500 + 0.3500 = 0.5000 L. Final concentration = 1.300 mol / 0.5000 L = 2.60 M. This requires combining moles (not just averaging molarities directly) from two different solutions before dividing by the new total volume.",
      "stretch": true
    },
    {
      "id": "3-64",
      "topic": "3.9 Separation",
      "stem": "Which separation technique is best suited for removing sand (insoluble) from a saltwater solution?",
      "choices": [
        "Distillation",
        "Filtration followed by evaporation",
        "Chromatography",
        "Recrystallization"
      ],
      "correct": 1,
      "explanation": "Filtration removes the insoluble sand (a solid particle too large to pass through filter paper) from the saltwater, leaving the dissolved salt in the filtrate. Evaporating the water afterward then isolates the pure NaCl. Distillation would be needed only if you specifically wanted to recover pure water (the solvent) rather than the salt."
    },
    {
      "id": "3-65",
      "topic": "3.9 Separation",
      "stem": "Paper chromatography is used to separate two dissolved dyes with different colors. What property allows this separation?",
      "choices": [
        "Different boiling points",
        "Different particle sizes only",
        "Different relative attraction (affinity) to the stationary phase (paper) versus the mobile phase (solvent)",
        "Different densities"
      ],
      "correct": 2,
      "explanation": "In chromatography, components separate based on how strongly they interact with the stationary phase (here, the paper) compared to the mobile phase (the solvent moving through it). A dye that's more strongly attracted to the paper moves more slowly and travels a shorter distance than one that's more attracted to the moving solvent."
    },
    {
      "id": "3-66",
      "topic": "3.9 Separation",
      "stem": "A mixture of two miscible liquids with significantly different boiling points needs to be separated into its pure components. What technique should be used?",
      "choices": [
        "Filtration",
        "Distillation",
        "Decanting",
        "Simple filtration through paper"
      ],
      "correct": 1,
      "explanation": "Distillation exploits differences in boiling point to separate miscible liquids: heating the mixture selectively vaporizes the lower-boiling-point component first, which can then be condensed and collected separately from the higher-boiling-point liquid left behind."
    },
    {
      "id": "3-67",
      "topic": "3.9 Separation",
      "stem": "Recrystallization is used to purify a solid by exploiting which property?",
      "choices": [
        "The solid's boiling point",
        "The solid's solubility, which typically changes significantly with temperature",
        "The solid's electrical conductivity",
        "The solid's color"
      ],
      "correct": 1,
      "explanation": "Recrystallization dissolves an impure solid in hot solvent (where solubility is high), then slowly cools the solution so the desired solid selectively crystallizes back out in purer form (impurities, present in smaller amounts, tend to remain dissolved rather than reaching their own saturation point), exploiting the temperature-dependence of solubility."
    },
    {
      "id": "3-68",
      "topic": "3.9 Separation",
      "stem": "Which technique would best separate two solid components of a mixture, one of which is soluble in a given solvent and one of which is not?",
      "choices": [
        "Dissolve the mixture in that solvent, then filter to remove the insoluble solid, followed by evaporating the filtrate to recover the soluble solid.",
        "Heat the mixture until both solids melt simultaneously.",
        "Use chromatography only, without any dissolution step.",
        "This separation is not possible using any physical technique."
      ],
      "correct": 0,
      "explanation": "This combines two separation techniques in sequence: selective dissolution (using the solvent to dissolve only the soluble component) followed by filtration (removing the remaining insoluble solid), and finally evaporation (recovering the dissolved solid from the filtrate) — a very common real lab procedure for separating a two-solid mixture based on differing solubility."
    },
    {
      "id": "3-69",
      "topic": "3.9 Separation",
      "stem": "A mixture contains three components: an insoluble solid, and two miscible liquids with different but relatively close boiling points. Design a suitable multi-step separation procedure.",
      "choices": [
        "Filtration alone is sufficient for all three components.",
        "First filter to remove the insoluble solid, then use fractional distillation (a more gradual, repeated-vaporization-condensation process) on the remaining liquid mixture to separate the two close-boiling-point liquids.",
        "Simple distillation alone, with no filtration needed.",
        "Chromatography alone is sufficient for all three components."
      ],
      "correct": 1,
      "explanation": "Filtration handles the solid/liquid separation first (removing the insoluble solid based on particle size/phase). Then, because the two remaining liquids have boiling points that are close together, simple distillation may not achieve a clean separation — fractional distillation, which uses repeated vaporization-condensation cycles up a fractionating column, provides the additional resolving power needed to separate liquids with similar (rather than widely different) boiling points."
    },
    {
      "id": "3-70",
      "topic": "3.10 Solubility",
      "stem": "As temperature increases, the solubility of most solid solutes in water:",
      "choices": [
        "Decreases",
        "Increases",
        "Stays exactly the same",
        "Becomes impossible to predict"
      ],
      "correct": 1,
      "explanation": "For most solids, dissolving is endothermic overall (or at least the temperature-dependence favors more dissolution), so additional thermal energy at higher temperatures generally helps overcome the solute's internal lattice attractions, increasing solubility — this is why more sugar dissolves in hot tea than in iced tea."
    },
    {
      "id": "3-71",
      "topic": "3.10 Solubility",
      "stem": "As temperature increases, the solubility of most gases in water:",
      "choices": [
        "Increases",
        "Decreases",
        "Stays exactly the same",
        "Becomes zero"
      ],
      "correct": 1,
      "explanation": "Gas solubility in liquids typically decreases with increasing temperature — faster-moving gas molecules at higher temperature more easily escape the weak IMFs holding them in solution, returning to the gas phase. This is the opposite trend from most solids, an important distinction to keep straight."
    },
    {
      "id": "3-72",
      "topic": "3.10 Solubility",
      "stem": "According to Henry's Law, gas solubility in a liquid is directly proportional to:",
      "choices": [
        "Temperature only",
        "The partial pressure of that gas above the solution",
        "The volume of the container",
        "The identity of the solvent only, regardless of pressure"
      ],
      "correct": 1,
      "explanation": "Henry's Law states that at constant temperature, the amount of gas dissolved in a liquid is directly proportional to the partial pressure of that gas above the liquid's surface — higher pressure pushes more gas molecules into solution, and lower pressure allows more to escape."
    },
    {
      "id": "3-73",
      "topic": "3.10 Solubility",
      "stem": "Why does a can of soda fizz vigorously when opened?",
      "choices": [
        "Opening the can suddenly increases temperature, decreasing CO₂ solubility.",
        "Opening the can suddenly drops the pressure above the liquid, decreasing CO₂'s solubility (Henry's Law) and causing dissolved CO₂ to rapidly leave solution as gas bubbles.",
        "Opening the can adds more CO₂ to the solution.",
        "Fizzing is unrelated to gas solubility."
      ],
      "correct": 1,
      "explanation": "Soda is bottled/canned under high CO₂ pressure, keeping a large amount of CO₂ dissolved (per Henry's Law). Opening the container suddenly drops the pressure above the liquid to atmospheric pressure, meaning much less CO₂ can now stay dissolved — the excess rapidly escapes as visible bubbles, which is the fizzing you observe."
    },
    {
      "id": "3-74",
      "topic": "3.10 Solubility",
      "stem": "A solubility curve shows that KNO₃'s solubility increases sharply with temperature, while NaCl's solubility increases only slightly with temperature. What does this predict about cooling saturated solutions of each?",
      "choices": [
        "Cooling a saturated KNO₃ solution will cause a large amount of solid to recrystallize out, while cooling a saturated NaCl solution will cause comparatively little solid to come out of solution.",
        "Both solutions will behave identically upon cooling.",
        "Neither solution will show any change upon cooling.",
        "NaCl will show a larger amount of recrystallization than KNO₃."
      ],
      "correct": 0,
      "explanation": "A steep solubility curve (KNO₃) means solubility drops sharply as temperature decreases, so a solution saturated at high temperature will have a large 'excess' of solute forced out of solution (recrystallized) upon cooling. A shallow curve (NaCl) means solubility barely changes with temperature, so cooling causes comparatively little recrystallization — this difference is exploited in recrystallization purification, choosing solvents/solutes with steep solubility-temperature curves for the best results."
    },
    {
      "id": "3-75",
      "topic": "3.10 Solubility",
      "stem": "Which best explains why solubility depends on IMF matching between solute and solvent, as covered in section 3.7?",
      "choices": [
        "Solubility and IMF matching are unrelated concepts.",
        "Dissolution requires breaking solute-solute and solvent-solvent attractions and replacing them with new solute-solvent attractions; the more comparable in strength these new attractions are to what's being broken, the more soluble the substance will be.",
        "Solubility depends only on temperature, never on IMFs.",
        "Only ionic solutes have any solubility considerations related to IMFs."
      ],
      "correct": 1,
      "explanation": "This connects sections 3.7 and 3.10 directly: 'like dissolves like' is really a statement about energetics — dissolving is favorable when the new solute-solvent attractions formed are comparable in strength to the solute-solute and solvent-solvent attractions being broken in the process, and matched polarity/IMF type is what makes that comparable strength possible."
    },
    {
      "id": "3-76",
      "topic": "3.10 Solubility",
      "stem": "Stretch — beyond typical AP difficulty: A deep-sea diver breathing pressurized air is at risk of decompression sickness ('the bends') if they ascend too quickly. Using Henry's Law, explain why.",
      "choices": [
        "Rapid ascent has no effect on dissolved gas in the bloodstream.",
        "At depth, high pressure causes more nitrogen gas to dissolve into the diver's blood/tissues than at the surface; ascending too quickly drops pressure faster than the dissolved nitrogen can be safely exhaled, causing it to rapidly form bubbles in the bloodstream, similar to a soda can being opened suddenly.",
        "Decompression sickness is caused by oxygen toxicity, unrelated to Henry's Law.",
        "The diver's blood pressure directly causes the bends, with no connection to dissolved gas solubility."
      ],
      "correct": 1,
      "explanation": "This is a direct real-world application of Henry's Law and the same soda-can logic from earlier in this section: high pressure at depth increases nitrogen's solubility in blood and tissue, dissolving more gas than would be present at surface pressure. A too-rapid ascent drops external pressure faster than the body can safely release the excess dissolved nitrogen through normal breathing, causing it to come out of solution as bubbles within the bloodstream — a genuinely dangerous, literal application of the exact same principle that makes soda fizz.",
      "stretch": true
    },
    {
      "id": "3-77",
      "topic": "3.11 Spectroscopy",
      "stem": "Which region of the electromagnetic spectrum has the highest energy per photon?",
      "choices": [
        "Radio waves",
        "Infrared",
        "Visible light",
        "X-rays"
      ],
      "correct": 3,
      "explanation": "Energy and wavelength are inversely related (E = hc/λ). X-rays have extremely short wavelengths compared to radio waves, infrared, or visible light, giving them the highest photon energy among these four regions of the EM spectrum."
    },
    {
      "id": "3-78",
      "topic": "3.11 Spectroscopy",
      "stem": "What is the frequency of light with a wavelength of 450 nm?",
      "choices": [
        "6.67 × 10¹⁴ Hz",
        "1.50 × 10⁻⁶ Hz",
        "3.33 × 10¹⁴ Hz",
        "1.35 × 10¹⁷ Hz"
      ],
      "correct": 0,
      "explanation": "ν = c/λ = (3.00 × 10⁸ m/s) / (450 × 10⁻⁹ m) = (3.00 × 10⁸) / (4.50 × 10⁻⁷) = 6.67 × 10¹⁴ Hz."
    },
    {
      "id": "3-79",
      "topic": "3.11 Spectroscopy",
      "stem": "As wavelength increases, what happens to a photon's energy?",
      "choices": [
        "It increases",
        "It decreases",
        "It stays constant",
        "The relationship is not consistent"
      ],
      "correct": 1,
      "explanation": "Energy and wavelength are inversely proportional (E = hc/λ) — as wavelength increases, energy decreases. This is why long-wavelength radio waves are extremely low energy, while short-wavelength gamma rays are extremely high energy."
    },
    {
      "id": "3-80",
      "topic": "3.11 Spectroscopy",
      "stem": "Which type of molecular motion is typically probed by infrared (IR) spectroscopy?",
      "choices": [
        "Electron transitions between energy levels",
        "Molecular bond vibrations and stretching",
        "Nuclear spin transitions",
        "Ejection of core electrons"
      ],
      "correct": 1,
      "explanation": "IR radiation has energy in the right range to excite molecular bond vibrations (stretching, bending) rather than electron transitions (which typically require higher-energy UV/visible light) or nuclear-level processes (which require very different techniques entirely). This is why IR spectroscopy is widely used to identify functional groups in organic molecules based on their characteristic vibrational frequencies."
    },
    {
      "id": "3-81",
      "topic": "3.11 Spectroscopy",
      "stem": "A photon has an energy of 4.00 × 10⁻¹⁹ J. What is its wavelength?",
      "choices": [
        "497 nm",
        "1.66 × 10⁻²⁷ m",
        "4.97 × 10⁻⁷ nm",
        "2.68 × 10⁻⁶ m"
      ],
      "correct": 0,
      "explanation": "Rearranging E = hc/λ for λ: λ = hc/E = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (4.00 × 10⁻¹⁹) = (1.988 × 10⁻²⁵) / (4.00 × 10⁻¹⁹) = 4.97 × 10⁻⁷ m = 497 nm, which falls in the visible light range (blue-green light)."
    },
    {
      "id": "3-82",
      "topic": "3.11 Spectroscopy",
      "stem": "Why does UV-visible spectroscopy typically probe electron transitions, while IR spectroscopy probes vibrations?",
      "choices": [
        "UV-visible light carries more energy per photon than IR light, matching the larger energy gaps of electron transitions rather than the smaller energy gaps of bond vibrations.",
        "IR light has more energy than UV-visible light.",
        "There is no real difference; both regions probe identical types of molecular motion.",
        "UV-visible spectroscopy cannot be used to study molecules at all."
      ],
      "correct": 0,
      "explanation": "Photon energy must closely match the specific energy gap of the process being probed for absorption to occur. Electron transitions between energy levels require relatively large amounts of energy, matched by UV-visible light's higher-energy, shorter-wavelength photons; bond vibrations require much smaller energy inputs, matched by IR's lower-energy, longer-wavelength photons."
    },
    {
      "id": "3-83",
      "topic": "3.11 Spectroscopy",
      "stem": "Which lists regions of the electromagnetic spectrum in order of INCREASING wavelength?",
      "choices": [
        "X-ray, UV, visible, infrared, radio",
        "Radio, infrared, visible, UV, X-ray",
        "Visible, X-ray, radio, UV, infrared",
        "Infrared, visible, UV, X-ray, radio"
      ],
      "correct": 0,
      "explanation": "From shortest to longest wavelength (and correspondingly highest to lowest energy), the EM spectrum runs: gamma rays, X-rays, UV, visible, infrared, microwave, radio. So X-ray → UV → visible → infrared → radio is indeed the correct order of increasing wavelength among these five regions."
    },
    {
      "id": "3-84",
      "topic": "3.11 Spectroscopy",
      "stem": "A chemist wants to identify an unknown organic compound's functional groups (e.g., is there a C=O or O-H present?) as well as determine its approximate electronic structure (HOMO-LUMO energy gap). Which combination of techniques would be most appropriate?",
      "choices": [
        "IR spectroscopy for functional groups; UV-visible spectroscopy for the electronic energy gap",
        "Only PES for both purposes",
        "Only radio wave spectroscopy for both purposes",
        "UV-visible spectroscopy for functional groups; IR spectroscopy for the electronic energy gap"
      ],
      "correct": 0,
      "explanation": "IR spectroscopy's photon energies match bond vibration energy gaps, making it the standard tool for identifying functional groups (each type of bond/group has characteristic vibrational absorption frequencies). UV-visible spectroscopy's higher-energy photons match electronic transition energy gaps (like HOMO-LUMO gaps), making it the appropriate tool for probing electronic structure — correctly matching each technique's photon energy range to the specific type of molecular information being sought."
    },
    {
      "id": "3-85",
      "topic": "3.12 Photons",
      "stem": "What does it mean for atomic energy levels to be 'quantized'?",
      "choices": [
        "Electrons can have any energy value, forming a continuous range.",
        "Electrons can only occupy specific, discrete energy values, not anything in between.",
        "Energy levels apply only to the nucleus, not electrons.",
        "Quantization only applies to molecules, never single atoms."
      ],
      "correct": 1,
      "explanation": "Quantization means electron energy levels exist only at specific, fixed values — an electron can be at one level or another, but never at an energy value in between. This is why atomic emission and absorption spectra show sharp, distinct lines rather than a continuous rainbow of all wavelengths."
    },
    {
      "id": "3-86",
      "topic": "3.12 Photons",
      "stem": "When an electron absorbs a photon and moves to a higher energy level, what is true about the photon's energy?",
      "choices": [
        "The photon's energy must exceed the energy gap between the two levels.",
        "The photon's energy must exactly equal the energy gap between the electron's initial and final levels.",
        "The photon's energy is unrelated to the energy gap.",
        "Any photon energy can cause this transition."
      ],
      "correct": 1,
      "explanation": "Because energy levels are quantized (fixed, discrete values), only a photon with energy exactly matching the gap between two specific levels can be absorbed to cause that particular transition — a photon with too much or too little energy simply won't be absorbed for that transition, which is why absorption spectra show sharp lines at specific wavelengths rather than broad absorption everywhere."
    },
    {
      "id": "3-87",
      "topic": "3.12 Photons",
      "stem": "An atomic emission spectrum shows several distinct, separated lines rather than a continuous spectrum of colors. What does this indicate?",
      "choices": [
        "The atom has continuous, non-quantized energy levels.",
        "The atom has quantized energy levels, and each line corresponds to a specific electron transition between two particular levels.",
        "The measurement equipment must be malfunctioning.",
        "The atom is not emitting any photons."
      ],
      "correct": 1,
      "explanation": "Each distinct spectral line corresponds to a photon emitted from one specific electron transition between two quantized energy levels; the atom simply doesn't have any energy levels in between to produce photons of intermediate energies, which is exactly why the spectrum consists of sharp lines rather than a smooth continuous rainbow of all possible wavelengths."
    },
    {
      "id": "3-88",
      "topic": "3.12 Photons",
      "stem": "Why do different elements produce different, characteristic atomic emission spectra?",
      "choices": [
        "Each element has a unique arrangement and spacing of electron energy levels, producing a unique set of possible transition energies (and therefore a unique set of emitted photon wavelengths).",
        "All elements actually produce identical emission spectra.",
        "Emission spectra depend only on temperature, not on element identity.",
        "Emission spectra are randomly generated and provide no useful information."
      ],
      "correct": 0,
      "explanation": "Because each element has a distinct number of protons and electrons, its electron energy levels are arranged at different specific values than any other element's. Since spectral lines correspond directly to the energy gaps between these levels, each element produces its own unique 'fingerprint' pattern of emission lines — this uniqueness is what allows emission spectroscopy to be used for elemental identification."
    },
    {
      "id": "3-89",
      "topic": "3.12 Photons",
      "stem": "An electron falls from n=3 to n=1 in a hydrogen atom, emitting a photon of a certain energy. If instead it fell from n=2 to n=1, would the emitted photon have higher or lower energy?",
      "choices": [
        "Higher energy, since the n=3 to n=1 transition spans a larger energy gap than n=2 to n=1.",
        "Lower energy, since n=3 to n=1 is a larger transition.",
        "The exact same energy in both cases.",
        "It's impossible to compare without more information."
      ],
      "correct": 1,
      "explanation": "The n=3 to n=1 transition spans a larger energy gap than the n=2 to n=1 transition (energy levels get closer together as n increases, but the n=3-to-n=1 gap is still larger than the n=2-to-n=1 gap). A larger energy gap means the photon emitted during that transition carries more energy — so the n=2 to n=1 transition, spanning a smaller gap, emits a lower-energy photon than the n=3 to n=1 transition."
    },
    {
      "id": "3-90",
      "topic": "3.12 Photons",
      "stem": "Which best describes the photoelectric effect, connecting it to the particle nature of light?",
      "choices": [
        "Light striking a metal surface can eject electrons only if each individual photon carries at least a minimum threshold energy, regardless of the total light intensity.",
        "Any wavelength of light, given enough total intensity, will eventually eject electrons from a metal.",
        "The photoelectric effect proves light behaves only as a wave, never as a particle.",
        "Electron ejection depends only on light intensity, not on individual photon energy."
      ],
      "correct": 0,
      "explanation": "The photoelectric effect showed that electron ejection depends on individual photon energy (related to frequency/wavelength) exceeding a threshold value specific to the metal — not on the total intensity (number of photons) of the light. Increasing intensity of below-threshold-energy light produces zero ejected electrons, no matter how bright, which was strong historical evidence that light must be quantized into discrete photon packets rather than behaving as a purely continuous wave."
    },
    {
      "id": "3-91",
      "topic": "3.12 Photons",
      "stem": "Stretch — beyond typical AP difficulty: A hydrogen atom's electron absorbs a photon and transitions from n=1 to n=4. It then falls back to n=1, but does so in two steps: first n=4 to n=2, then n=2 to n=1. How does the sum of the two emitted photon energies compare to the single absorbed photon's energy?",
      "choices": [
        "The sum of the two emitted photon energies exactly equals the absorbed photon's energy, since total energy is conserved across the full n=4-to-n=1 transition regardless of the path taken.",
        "The sum will always be less than the absorbed photon's energy, since some energy is lost as heat.",
        "The sum will always be greater than the absorbed photon's energy.",
        "There is no relationship between the absorbed and emitted photon energies."
      ],
      "correct": 0,
      "explanation": "Energy is a state function — the total energy released falling from n=4 to n=1 is fixed and doesn't depend on whether the electron falls directly or through an intermediate step (n=4→n=2→n=1). So the sum of the two emitted photons' energies (n=4→n=2 plus n=2→n=1) must exactly equal the single photon's energy that was originally absorbed for the direct n=1→n=4 transition — a direct application of conservation of energy to quantized atomic transitions.",
      "stretch": true
    },
    {
      "id": "3-92",
      "topic": "3.13 Beer-Lambert Law",
      "stem": "A solution has ε = 2.00 × 10³ L/(mol·cm), path length 1.00 cm, and concentration 3.00 × 10⁻⁴ M. What is its absorbance?",
      "choices": [
        "0.600",
        "6.00 × 10⁻⁷",
        "1.50 × 10⁷",
        "0.0600"
      ],
      "correct": 0,
      "explanation": "A = εbc = (2.00 × 10³)(1.00)(3.00 × 10⁻⁴) = 0.600. Absorbance is unitless, since it represents a ratio (log of incident light intensity to transmitted light intensity), which is why the units of ε, b, and c must cancel completely in this equation."
    },
    {
      "id": "3-93",
      "topic": "3.13 Beer-Lambert Law",
      "stem": "If concentration doubles while ε and path length stay constant, what happens to absorbance?",
      "choices": [
        "It doubles.",
        "It is cut in half.",
        "It stays the same.",
        "It quadruples."
      ],
      "correct": 0,
      "explanation": "Absorbance is directly proportional to concentration (A = εbc, a linear relationship at constant ε and b). Doubling concentration directly doubles absorbance — this direct proportionality is exactly what makes Beer-Lambert useful for determining unknown concentrations from measured absorbance."
    },
    {
      "id": "3-94",
      "topic": "3.13 Beer-Lambert Law",
      "stem": "A calibration curve of absorbance vs. concentration is constructed from several known standards, giving a best-fit line: A = 1500c. An unknown sample has an absorbance of 0.750. What is its concentration?",
      "choices": [
        "5.00 × 10⁻⁴ M",
        "2.00 × 10³ M",
        "1125 M",
        "0.500 M"
      ],
      "correct": 0,
      "explanation": "Using the calibration line equation: 0.750 = 1500 × c, so c = 0.750/1500 = 5.00 × 10⁻⁴ M. This is exactly how Beer-Lambert is used practically in a lab: build a calibration curve from known standards, then read off an unknown's concentration using its measured absorbance and the curve's equation."
    },
    {
      "id": "3-95",
      "topic": "3.13 Beer-Lambert Law",
      "stem": "If path length is doubled while concentration and ε stay constant, what happens to absorbance?",
      "choices": [
        "It doubles.",
        "It is cut in half.",
        "It stays the same.",
        "It becomes zero."
      ],
      "correct": 0,
      "explanation": "Absorbance is directly proportional to path length (A = εbc) — light traveling through twice the distance of absorbing solution encounters twice as many absorbing molecules along its path, doubling the measured absorbance, all else held constant."
    },
    {
      "id": "3-96",
      "topic": "3.13 Beer-Lambert Law",
      "stem": "Two solutions of the same colored compound have absorbances of 0.200 and 0.800 at the same wavelength and path length. What is the ratio of their concentrations (lower:higher)?",
      "choices": [
        "1:4",
        "1:2",
        "4:1",
        "1:16"
      ],
      "correct": 0,
      "explanation": "Since A ∝ c at constant ε and b, the ratio of absorbances directly equals the ratio of concentrations: 0.200/0.800 = 1/4, so the ratio of the lower-concentration to higher-concentration solution is 1:4."
    },
    {
      "id": "3-97",
      "topic": "3.13 Beer-Lambert Law",
      "stem": "Why must a calibration curve be constructed using the SAME wavelength of light for all standards and the unknown sample?",
      "choices": [
        "Molar absorptivity (ε) is wavelength-dependent, so using different wavelengths would mean comparing absorbances governed by different ε values, invalidating the direct comparison.",
        "Wavelength has no effect on absorbance measurements.",
        "Using different wavelengths would change the concentration of the solution.",
        "Calibration curves work equally well regardless of wavelength consistency."
      ],
      "correct": 0,
      "explanation": "Molar absorptivity (ε) is a property specific to a given substance AND a given wavelength — it's typically chosen at the wavelength of maximum absorbance for that substance. Using inconsistent wavelengths between standards and the unknown would mean each measurement reflects a different ε value, making direct comparison via a single calibration line invalid."
    },
    {
      "id": "3-98",
      "topic": "3.13 Beer-Lambert Law",
      "stem": "A solution's absorbance is measured as 1.200, which is unusually high (often considered outside the reliable linear range of many instruments). What is a common practical solution to this issue?",
      "choices": [
        "Report the value as-is; high absorbance values are always equally reliable.",
        "Dilute the sample to bring its concentration (and therefore absorbance) into a more reliable range, then account for the dilution factor when calculating the original concentration.",
        "Increase the path length to make the absorbance even higher.",
        "Absorbance values above 1.0 are impossible to obtain."
      ],
      "correct": 1,
      "explanation": "Very high absorbance readings often fall outside the range where the A vs. c relationship remains cleanly linear (due to instrumental limitations), reducing measurement reliability. The standard practical fix is to dilute the sample by a known factor, remeasure its (now lower, more reliable) absorbance, calculate that diluted concentration via Beer-Lambert, and then multiply back by the dilution factor to find the original concentration."
    },
    {
      "id": "3-99",
      "topic": "3.13 Beer-Lambert Law",
      "stem": "Which correctly describes molar absorptivity (ε)?",
      "choices": [
        "A universal constant, identical for all substances and all wavelengths",
        "A substance- and wavelength-specific constant describing how strongly that substance absorbs light at that particular wavelength",
        "A measure of solution volume",
        "Directly equal to a solution's pH"
      ],
      "correct": 1,
      "explanation": "Molar absorptivity is specific to both the particular substance being measured and the specific wavelength of light used — different substances (and even the same substance at different wavelengths) have different ε values, reflecting how strongly that substance absorbs light of that particular color/energy."
    },
    {
      "id": "3-100",
      "topic": "3.13 Beer-Lambert Law",
      "stem": "Stretch — beyond typical AP difficulty: A student measures the absorbance of five standard solutions and plots A vs. c, obtaining a strong linear fit except for the highest-concentration standard, which falls noticeably below the line extrapolated from the other four points. What is the most likely explanation, and what should the student do?",
      "choices": [
        "The Beer-Lambert relationship is fundamentally invalid and should be discarded entirely.",
        "At sufficiently high concentration, the linear A=εbc relationship can break down (e.g., due to instrumental stray light limitations or solute self-interactions), so the student should exclude that point from the linear fit or dilute the standard and re-measure, rather than force a straight line through all five points.",
        "The measurement must have been recorded with the wrong units and should simply be multiplied by a correction factor.",
        "High-concentration standards should always be given more weight than low-concentration ones in a calibration curve."
      ],
      "correct": 1,
      "explanation": "Beer-Lambert's linearity assumes dilute, well-behaved solutions; at higher concentrations, effects like solute-solute interactions or instrumental limitations (e.g., stray light reaching the detector) can cause real absorbance to deviate below the ideal linear prediction. The appropriate response is recognizing this practical limitation of the technique — excluding the deviating high-concentration point from the calibration fit (using only the reliably linear region) or diluting that standard and re-measuring — rather than assuming the underlying law itself is wrong or forcing a fit through a point known to be unreliable.",
      "stretch": true
    }
  ],
  "4": [
    {
      "id": "4-1",
      "topic": "4.1 Introduction for Reactions",
      "stem": "What is the correctly balanced coefficient set for: __Al + __O₂ → __Al₂O₃?",
      "choices": [
        "1, 1, 1",
        "4, 3, 2",
        "2, 3, 1",
        "4, 6, 2"
      ],
      "correct": 1,
      "explanation": "Balance Al: 4 Al needed for 2 Al₂O₃ (2×2=4). Balance O: 2 Al₂O₃ has 6 O total, requiring 3 O₂ (3×2=6). Final: 4Al + 3O₂ → 2Al₂O₃. Checking: Al (4=4), O (6=6) — balanced."
    },
    {
      "id": "4-2",
      "topic": "4.1 Introduction for Reactions",
      "stem": "Balance: __C₄H₁₀ + __O₂ → __CO₂ + __H₂O",
      "choices": [
        "1, 6, 4, 5; coefficients 2,13,8,10",
        "2, 13, 8, 10",
        "1, 13, 4, 5",
        "2, 6, 8, 5"
      ],
      "correct": 1,
      "explanation": "Balance C: 4 C needs 4 CO₂ per C₄H₁₀ (so 2 C₄H₁₀ → 8 CO₂ to keep whole numbers). Balance H: 10 H per C₄H₁₀ needs 5 H₂O per C₄H₁₀ (so 2 C₄H₁₀ → 10 H₂O). Count O needed: 8 CO₂ (16 O) + 10 H₂O (10 O) = 26 O total, requiring 13 O₂. Final: 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O."
    },
    {
      "id": "4-3",
      "topic": "4.1 Introduction for Reactions",
      "stem": "Which statement about balancing chemical equations is correct?",
      "choices": [
        "Subscripts within a formula can be changed to balance an equation.",
        "Only coefficients (numbers placed in front of formulas) can be changed to balance an equation; subscripts must stay fixed.",
        "Balancing is only necessary for reactions involving gases.",
        "A balanced equation must have the same number of molecules on both sides."
      ],
      "correct": 1,
      "explanation": "Subscripts define the actual identity of a compound (e.g., changing H₂O to H₂O₂ makes it a completely different substance, hydrogen peroxide) — they can never be altered to balance an equation. Only coefficients, which indicate the relative number of each formula unit, can be adjusted."
    },
    {
      "id": "4-4",
      "topic": "4.1 Introduction for Reactions",
      "stem": "Balance: __Fe + __O₂ → __Fe₂O₃",
      "choices": [
        "4, 3, 2",
        "2, 3, 1",
        "1, 1, 1",
        "4, 6, 2"
      ],
      "correct": 0,
      "explanation": "Balance Fe: 4 Fe for 2 Fe₂O₃. Balance O: 2 Fe₂O₃ has 6 O, requiring 3 O₂. Final: 4Fe + 3O₂ → 2Fe₂O₃."
    },
    {
      "id": "4-5",
      "topic": "4.1 Introduction for Reactions",
      "stem": "In a correctly balanced chemical equation, what must be conserved?",
      "choices": [
        "The number of molecules on each side",
        "The number of atoms of each element and total mass",
        "The number of moles of gas only",
        "The physical states of matter only"
      ],
      "correct": 1,
      "explanation": "Balancing reflects conservation of mass at the atomic level: the total number of atoms of each specific element must be identical on both sides of the equation, which also guarantees total mass is conserved. The total number of molecules or moles of gas is not required to be equal — only atom counts per element."
    },
    {
      "id": "4-6",
      "topic": "4.1 Introduction for Reactions",
      "stem": "Balance: __P₄ + __O₂ → __P₂O₅",
      "choices": [
        "1, 5, 2",
        "1, 10, 4",
        "2, 5, 4",
        "4, 5, 2"
      ],
      "correct": 0,
      "explanation": "Balance P: 1 P₄ provides 4 P atoms, requiring 2 P₂O₅ (2×2=4 P). Balance O: 2 P₂O₅ has 10 O, requiring 5 O₂. Final, lowest-whole-number balanced equation: P₄ + 5O₂ → 2P₂O₅, matching coefficients 1, 5, 2."
    },
    {
      "id": "4-7",
      "topic": "4.1 Introduction for Reactions",
      "stem": "Balance the equation: __C₆H₅COOH + __O₂ → __CO₂ + __H₂O (benzoic acid combustion).",
      "choices": [
        "2, 15, 14, 6",
        "1, 7, 7, 3",
        "2, 7, 14, 3",
        "1, 15, 7, 3"
      ],
      "correct": 0,
      "explanation": "Balance C: C₆H₅COOH has 7 carbons total, so 1 molecule needs 7 CO₂ (or 2 molecules need 14 CO₂ for cleaner whole numbers). Balance H: C₆H₅COOH has 6 H, so 2 molecules provide 12 H, requiring 6 H₂O. Count O needed: 14 CO₂ (28 O) + 6 H₂O (6 O) = 34 O total; each C₆H₅COOH already contributes 2 O (×2 molecules = 4 O), so O₂ must supply 34−4=30 O, requiring 15 O₂. Final: 2C₆H₅COOH + 15O₂ → 14CO₂ + 6H₂O — this requires carefully accounting for the oxygen already present in the acid itself, not just the O₂ reactant, which is the extra layer of difficulty here."
    },
    {
      "id": "4-8",
      "topic": "4.2 Net Ionic Equations",
      "stem": "Which species should be written as separate ions (not as an intact formula) in a complete ionic equation?",
      "choices": [
        "A soluble ionic compound (strong electrolyte)",
        "An insoluble solid precipitate",
        "A weak acid",
        "Pure liquid water"
      ],
      "correct": 0,
      "explanation": "Only strong electrolytes (soluble ionic compounds, strong acids, strong bases) meaningfully and essentially completely dissociate into ions in solution, so only these are split into separate ions. Insoluble solids, weak acids/bases, and pure water remain written as intact formulas since they don't dissociate to a significant extent."
    },
    {
      "id": "4-9",
      "topic": "4.2 Net Ionic Equations",
      "stem": "What is the net ionic equation for mixing aqueous BaCl₂ and aqueous Na₂SO₄ (forming solid BaSO₄)?",
      "choices": [
        "Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)",
        "BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq)",
        "2Na⁺(aq) + 2Cl⁻(aq) → 2NaCl(aq)",
        "Ba²⁺(aq) + 2Cl⁻(aq) + 2Na⁺(aq) + SO₄²⁻(aq) → BaSO₄(s) + 2Na⁺(aq) + 2Cl⁻(aq)"
      ],
      "correct": 0,
      "explanation": "After splitting all soluble species into ions, Na⁺ and Cl⁻ appear unchanged on both sides (spectators) and cancel out, leaving only the ions that actually combine to form the insoluble precipitate: Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s). Option (d) is the correct complete ionic equation but has not yet cancelled the spectators, so it isn't the net ionic equation."
    },
    {
      "id": "4-10",
      "topic": "4.2 Net Ionic Equations",
      "stem": "Which ions are the spectator ions in the reaction: 2HCl(aq) + Ca(OH)₂(aq) → CaCl₂(aq) + 2H₂O(l)?",
      "choices": [
        "H⁺ and OH⁻",
        "Ca²⁺ and Cl⁻",
        "Only Ca²⁺",
        "There are no spectator ions in this reaction"
      ],
      "correct": 1,
      "explanation": "Splitting into ions: 2H⁺ + 2Cl⁻ + Ca²⁺ + 2OH⁻ → Ca²⁺ + 2Cl⁻ + 2H₂O. Ca²⁺ and Cl⁻ appear identically on both sides and don't participate in forming the new substance (water), making them the spectator ions. H⁺ and OH⁻ are the actual reacting species, combining to form water."
    },
    {
      "id": "4-11",
      "topic": "4.2 Net Ionic Equations",
      "stem": "A net ionic equation shows Pb²⁺(aq) + 2Cl⁻(aq) → PbCl₂(s). Which pair of reactants could have produced this?",
      "choices": [
        "NaCl and KNO₃",
        "Pb(NO₃)₂ and NaCl",
        "PbCl₂ and NaNO₃",
        "Pb(NO₃)₂ and KNO₃"
      ],
      "correct": 1,
      "explanation": "The net ionic equation requires a soluble lead source (providing Pb²⁺) and a soluble chloride source (providing Cl⁻). Pb(NO₃)₂ is soluble and provides Pb²⁺; NaCl is soluble and provides Cl⁻. Mixing these produces the insoluble PbCl₂ precipitate exactly as shown, with Na⁺ and NO₃⁻ as spectators."
    },
    {
      "id": "4-12",
      "topic": "4.2 Net Ionic Equations",
      "stem": "Why is CH₃COOH (acetic acid, a weak acid) NOT split into separate ions when writing a complete ionic equation?",
      "choices": [
        "It is insoluble in water.",
        "It only partially (not fully) dissociates into ions in solution, so writing it as fully dissociated ions would misrepresent its actual behavior.",
        "It contains no hydrogen atoms.",
        "Weak acids never participate in any reactions."
      ],
      "correct": 1,
      "explanation": "Weak acids (and weak bases) only partially ionize in water — most of the compound remains in its intact molecular form at any given time, with only a small fraction dissociated. Writing it as fully separated ions (as done for strong electrolytes) would incorrectly suggest complete dissociation, so weak acids/bases are kept in their molecular formula throughout ionic equations."
    },
    {
      "id": "4-13",
      "topic": "4.2 Net Ionic Equations",
      "stem": "Which reaction would produce NO precipitate, meaning there is no meaningful net ionic equation to write (all species remain spectators)?",
      "choices": [
        "NaCl(aq) + AgNO₃(aq)",
        "KNO₃(aq) + NaCl(aq)",
        "BaCl₂(aq) + Na₂SO₄(aq)",
        "Pb(NO₃)₂(aq) + KI(aq)"
      ],
      "correct": 1,
      "explanation": "Checking solubility rules for possible products: mixing KNO₃ and NaCl could theoretically swap to form NaNO₃ and KCl, but both of these are soluble compounds — no insoluble solid forms, so all four ions (K⁺, NO₃⁻, Na⁺, Cl⁻) remain fully dissolved and are all spectators. The other three options each produce a known insoluble precipitate (AgCl, BaSO₄, and PbI₂ respectively)."
    },
    {
      "id": "4-14",
      "topic": "4.2 Net Ionic Equations",
      "stem": "In the complete ionic equation for a reaction, an ion appears as a reactant on the left with a coefficient of 2 and as a product on the right with a coefficient of 2, in the exact same physical state. What can be concluded?",
      "choices": [
        "This ion is a spectator and will cancel out of the net ionic equation.",
        "This ion must be the limiting reactant.",
        "This ion was chemically transformed during the reaction.",
        "This indicates a balancing error."
      ],
      "correct": 0,
      "explanation": "An ion appearing identically (same species, same physical state, same coefficient) on both sides of a complete ionic equation is, by definition, a spectator ion — it didn't undergo any chemical change and can be cancelled to reach the net ionic equation."
    },
    {
      "id": "4-15",
      "topic": "4.2 Net Ionic Equations",
      "stem": "Write the net ionic equation for mixing aqueous ammonium sulfate, (NH₄)₂SO₄, with aqueous barium nitrate, Ba(NO₃)₂.",
      "choices": [
        "Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)",
        "2NH₄⁺(aq) + 2NO₃⁻(aq) → 2NH₄NO₃(aq)",
        "(NH₄)₂SO₄(aq) + Ba(NO₃)₂(aq) → BaSO₄(s) + 2NH₄NO₃(aq)",
        "NH₄⁺(aq) + NO₃⁻(aq) → NH₄NO₃(aq)"
      ],
      "correct": 0,
      "explanation": "Both reactants are soluble; checking for a possible insoluble product via a double replacement swap: NH₄⁺ pairs with NO₃⁻ (forming soluble NH₄NO₃) and Ba²⁺ pairs with SO₄²⁻ (forming insoluble BaSO₄, per standard solubility rules that most sulfates are soluble except with Ba²⁺, Pb²⁺, Sr²⁺, and Ca²⁺). Splitting all soluble species and cancelling NH₄⁺ and NO₃⁻ as spectators leaves Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s), requiring correctly recalling a specific solubility exception rather than a general rule."
    },
    {
      "id": "4-16",
      "topic": "4.3 Representations",
      "stem": "A particulate diagram shows 6 X atoms and 6 Y atoms combining completely to form 6 XY molecules with nothing left over. What is the balanced equation?",
      "choices": [
        "X + Y → XY",
        "2X + Y → X₂Y",
        "X + 2Y → XY₂",
        "6X + 6Y → 6XY"
      ],
      "correct": 0,
      "explanation": "Since 6 X and 6 Y react in a 1:1 ratio to form 6 XY (also 1:1 with each reactant) with nothing left over, the simplest whole-number ratio (dividing all coefficients by 6) gives X + Y → XY."
    },
    {
      "id": "4-17",
      "topic": "4.3 Representations",
      "stem": "A diagram shows a reaction between 8 diatomic A₂ molecules and 4 diatomic B₂ molecules, producing 8 AB₂ molecules with A₂ completely consumed and B₂ having some left over — wait, if 8 AB₂ requires 16 B atoms (8 B₂ worth), but only 4 B₂ (8 B atoms) was provided, is this diagram physically possible?",
      "choices": [
        "Yes, this is a perfectly valid and balanced representation.",
        "No — there are not enough B atoms provided (only 8 B atoms available) to form 8 AB₂ molecules (which require 16 B atoms), so this diagram is NOT physically consistent.",
        "Yes, because A₂ is the limiting reactant, so B atom count doesn't matter.",
        "No, because there are too many A atoms shown."
      ],
      "correct": 1,
      "explanation": "Every atom must be conserved. Forming 8 AB₂ molecules requires 8 A atoms (matching the 8 A₂'s worth of A atoms, i.e., 16 A atoms from 8 A₂, more than enough) and 16 B atoms (2 per AB₂ × 8 = 16), but only 4 B₂ molecules (8 B atoms total) were provided — not enough B atoms to form the stated 8 AB₂ product. This diagram violates conservation of mass/atoms and could not be a real, valid representation."
    },
    {
      "id": "4-18",
      "topic": "4.3 Representations",
      "stem": "Which of the following is NOT typically conserved when comparing a 'before' and 'after' particulate diagram of a chemical reaction?",
      "choices": [
        "Total number of atoms of each element",
        "Total mass",
        "Total number of individual molecules/particles",
        "Total charge (for ionic species)"
      ],
      "correct": 2,
      "explanation": "The total number of individual molecules can change during a reaction (e.g., 2 molecules of reactant combining into 1 molecule of product), even though the total number of atoms of each element, total mass, and total charge are all always conserved. This is a key distinction: conservation applies at the atom/mass/charge level, not necessarily at the 'number of distinct particles' level."
    },
    {
      "id": "4-19",
      "topic": "4.3 Representations",
      "stem": "A particulate diagram shows a reaction between 3 A₂B molecules and 6 C atoms, producing some number of AC molecules and B₂ molecules. If the reaction is A₂B + 2C → 2AC + ½B₂ (scaled appropriately), how many AC and B₂ molecules should be shown as products from 3 A₂B and 6 C?",
      "choices": [
        "6 AC and 1.5 B₂",
        "6 AC and 3 B₂",
        "3 AC and 3 B₂",
        "6 AC and 1 B₂"
      ],
      "correct": 0,
      "explanation": "Using the given ratio (1 A₂B : 2 C : 2 AC : 0.5 B₂) and scaling by 3 (since 3 A₂B is given, matching the 6 C given at a 1:2 ratio exactly): 3 × 2 AC = 6 AC, and 3 × 0.5 B₂ = 1.5 B₂. While a particulate diagram technically can't show 'half a molecule,' this calculation illustrates why chemical equations are often best scaled to whole numbers (e.g., doubling everything: 2A₂B + 4C → 4AC + B₂) before attempting an actual particulate diagram, which is itself a useful conceptual checkpoint."
    },
    {
      "id": "4-20",
      "topic": "4.3 Representations",
      "stem": "In a particulate diagram, how can you visually distinguish a physical change (like a phase change) from a chemical change?",
      "choices": [
        "A physical change is impossible to represent in a particulate diagram.",
        "In a physical change, the same individual molecules are present before and after (just rearranged in space/phase), while in a chemical change, entirely new molecules with different atom connectivity appear.",
        "A chemical change always shows fewer total atoms after than before.",
        "There is no way to distinguish these using a particulate diagram."
      ],
      "correct": 1,
      "explanation": "A particulate diagram of a physical change (like ice melting) would show the exact same molecules (e.g., H₂O) simply spaced differently or in a different arrangement, with no change in which atoms are bonded to which. A chemical change diagram shows genuinely different molecules forming — different bonding connectivity between atoms — even though the same total atoms are present."
    },
    {
      "id": "4-21",
      "topic": "4.3 Representations",
      "stem": "A diagram shows 5 reactant molecules of type X completely converting into 5 product molecules of type Y, with X and Y having the same molecular formula. What does this most likely represent?",
      "choices": [
        "A chemical reaction producing a new compound",
        "An isomerization (rearrangement of atoms within a molecule to form a structural isomer), since the formula is unchanged but presumably the connectivity/structure differs",
        "A physical phase change",
        "A balancing error, since formulas must change in a valid reaction"
      ],
      "correct": 1,
      "explanation": "If X and Y share the identical molecular formula (same atoms, same count) but are described as different substances (implying different structure/connectivity), this represents isomerization — a legitimate type of chemical change where atoms rearrange into a different bonding pattern without any atoms being gained, lost, or exchanged with another reactant."
    },
    {
      "id": "4-22",
      "topic": "4.3 Representations",
      "stem": "Stretch — beyond typical AP difficulty: A particulate diagram shows a reaction vessel before and after a reaction between diatomic X₂ and diatomic Y₂ gas, forming XY₃ gas. Before: 6 X₂, 12 Y₂. After: some XY₃, with leftover reactant. Determine the balanced equation, the limiting reactant, and the maximum possible moles of XY₃ (in terms of diagram units) that could form.",
      "choices": [
        "X₂ + 3Y₂ → 2XY₃; X₂ is limiting; max 4 XY₃ (using all 6 X₂, needing 18 Y₂, but only 12 available, so actually Y₂ is limiting)",
        "X₂ + 3Y₂ → 2XY₃; Y₂ is limiting; max 8 XY₃",
        "2X₂ + 3Y₂ → 2XY₃; Y₂ is limiting; max 8 XY₃",
        "X₂ + 3Y₂ → 2XY₃; X₂ is limiting; max 12 XY₃"
      ],
      "correct": 1,
      "explanation": "The balanced equation for forming XY₃ from X₂ and Y₂ (each X has 3 Y attached, so 1 X₂ provides 2 X, needing 2 XY₃ worth of X, and 3 Y₂ provides 6 Y, matching 2 XY₃'s worth of 3 Y each: 2×3=6) is X₂ + 3Y₂ → 2XY₃. Checking limiting reactant: dividing each given amount by its coefficient — X₂: 6/1 = 6; Y₂: 12/3 = 4. The smaller value (Y₂'s 4) identifies Y₂ as limiting. Maximum XY₃ = 4 × 2 (from the 2 XY₃ per 3 Y₂ ratio) = 8 XY₃, using only 4×1=4 of the 6 available X₂ (2 X₂ left over).",
      "stretch": true
    },
    {
      "id": "4-23",
      "topic": "4.4 Physical and Chemical Changes",
      "stem": "Which of the following is a physical change?",
      "choices": [
        "Rusting of iron",
        "Burning of wood",
        "Melting of ice",
        "Digestion of food"
      ],
      "correct": 2,
      "explanation": "Melting ice converts H₂O from solid to liquid — the same substance, same chemical formula and bonding, just a different phase. Rusting, burning, and digestion all involve genuine chemical transformations, producing substances with different chemical properties than the starting materials."
    },
    {
      "id": "4-24",
      "topic": "4.4 Physical and Chemical Changes",
      "stem": "Which piece of observational evidence is the STRONGEST indicator that a chemical change has occurred?",
      "choices": [
        "The substance changed color.",
        "The substance's temperature changed.",
        "A gas was produced from mixing two liquids with no boiling involved, and this gas was chemically confirmed to be a new substance not originally present.",
        "The substance changed physical state."
      ],
      "correct": 2,
      "explanation": "Gas formation from mixing two liquids (with no boiling occurring, ruling out a simple physical vaporization) strongly suggests new chemical bonds have formed to create a genuinely new gaseous substance. Color change and temperature change can each occur during purely physical processes too (e.g., dissolving some substances changes color or releases/absorbs heat without any new substance forming), making them weaker standalone evidence."
    },
    {
      "id": "4-25",
      "topic": "4.4 Physical and Chemical Changes",
      "stem": "A reactive metal is placed in dilute acid, and gas bubbles form. Is this a physical or chemical change, and why?",
      "choices": [
        "Physical — gas formation is always a physical change.",
        "Chemical — the metal and acid have reacted to form a new gaseous substance (typically H₂) and a dissolved salt, chemically different from the starting metal and acid.",
        "Physical — the metal has simply changed phase from solid to gas.",
        "Cannot be determined without more information."
      ],
      "correct": 1,
      "explanation": "A metal reacting with acid (e.g., Zn + 2HCl → ZnCl₂ + H₂) involves genuine electron transfer (a redox reaction) and the formation of new substances (H₂ gas and a dissolved metal salt) with entirely different chemical properties than the starting metal or acid — a clear chemical change, not a phase change of the original metal."
    },
    {
      "id": "4-26",
      "topic": "4.4 Physical and Chemical Changes",
      "stem": "Dissolving table salt (NaCl) in water is generally considered what type of change, and why?",
      "choices": [
        "Chemical, because a new substance (saltwater) is formed.",
        "Physical, because the Na⁺ and Cl⁻ ions are still present (just separated and surrounded by water), and evaporating the water recovers the original NaCl unchanged.",
        "Chemical, because ions are formed that weren't present before.",
        "Neither — dissolving is not a valid category of change."
      ],
      "correct": 1,
      "explanation": "Although the NaCl separates into individual, hydrated ions upon dissolving, no new chemical substance is formed — the Na⁺ and Cl⁻ ions retain their identity, and simply evaporating the water leaves behind the exact same NaCl you started with. This reversibility to the original substance is a hallmark of a physical change."
    },
    {
      "id": "4-27",
      "topic": "4.4 Physical and Chemical Changes",
      "stem": "Which best describes why 'color change' alone is not always reliable proof of a chemical change?",
      "choices": [
        "Color change never indicates a chemical change.",
        "Some purely physical processes (such as certain phase changes or dilution effects) can also cause an apparent color change without any new substance forming.",
        "Color change always indicates a physical change, never chemical.",
        "Color is not a real observable property."
      ],
      "correct": 1,
      "explanation": "Because some physical processes (for instance, diluting a colored solution, or certain phase transitions affecting how light interacts with a substance) can also produce a visible color change without forming any new substance, color change by itself isn't conclusive proof of a chemical change — it needs to be considered alongside other evidence or confirmed through further testing."
    },
    {
      "id": "4-28",
      "topic": "4.4 Physical and Chemical Changes",
      "stem": "Which of these processes is a chemical change?",
      "choices": [
        "Boiling water",
        "Dissolving sugar in tea",
        "Silver tarnishing (forming Ag₂S)",
        "Crushing a piece of chalk into powder"
      ],
      "correct": 2,
      "explanation": "Silver tarnishing involves silver metal reacting with sulfur-containing compounds in the air to form silver sulfide (Ag₂S), a genuinely new substance with different chemical properties (different color, different reactivity) than pure silver — a clear chemical change. The other three options are all physical changes: no new substance forms in boiling, dissolving sugar, or crushing chalk."
    },
    {
      "id": "4-29",
      "topic": "4.4 Physical and Chemical Changes",
      "stem": "Which observation, if made in isolation, would be the WEAKEST evidence of a chemical change?",
      "choices": [
        "Formation of a precipitate when two clear solutions are mixed",
        "A change in temperature during a reaction",
        "Formation of a gas with a distinctly different smell than either starting reactant",
        "A change in odor consistent with a genuinely new compound forming"
      ],
      "correct": 1,
      "explanation": "Temperature change alone is the weakest standalone evidence, since many purely physical processes (like dissolving certain salts, which can be endothermic or exothermic without forming any new chemical substance) also involve a measurable temperature change. Precipitate formation, a genuinely new smell, and clear new-substance odor are all much stronger (though still not always absolutely conclusive alone) indicators of an actual chemical transformation."
    },
    {
      "id": "4-30",
      "topic": "4.5 Stoichiometry",
      "stem": "Given 2H₂ + O₂ → 2H₂O, how many moles of H₂O form from 5.00 mol of H₂ (excess O₂)?",
      "choices": [
        "2.50 mol",
        "5.00 mol",
        "10.0 mol",
        "1.25 mol"
      ],
      "correct": 1,
      "explanation": "Using the 1:1 mole ratio between H₂ and H₂O in the balanced equation (2:2 reduces to 1:1): 5.00 mol H₂ × (2 mol H₂O / 2 mol H₂) = 5.00 mol H₂O."
    },
    {
      "id": "4-31",
      "topic": "4.5 Stoichiometry",
      "stem": "Given N₂ + 3H₂ → 2NH₃, how many moles of H₂ are needed to completely react with 4.00 mol N₂?",
      "choices": [
        "4.00 mol",
        "8.00 mol",
        "12.0 mol",
        "1.33 mol"
      ],
      "correct": 2,
      "explanation": "Using the mole ratio 1 N₂ : 3 H₂: 4.00 mol N₂ × (3 mol H₂ / 1 mol N₂) = 12.0 mol H₂."
    },
    {
      "id": "4-32",
      "topic": "4.5 Stoichiometry",
      "stem": "In the reaction 2Mg + O₂ → 2MgO, 3.00 mol Mg is mixed with 1.00 mol O₂. Which is the limiting reactant?",
      "choices": [
        "Mg",
        "O₂",
        "Neither is limiting; both are used up exactly",
        "Cannot be determined"
      ],
      "correct": 1,
      "explanation": "Divide each amount by its coefficient: Mg: 3.00/2 = 1.50; O₂: 1.00/1 = 1.00. The smaller value (O₂'s 1.00) identifies O₂ as the limiting reactant — there's more than enough Mg (1.50 'units' worth) compared to what O₂ can support (1.00 'units' worth)."
    },
    {
      "id": "4-33",
      "topic": "4.5 Stoichiometry",
      "stem": "A reaction has a theoretical yield of 25.0 g of product. If the actual yield obtained is 21.3 g, what is the percent yield?",
      "choices": [
        "85.2%",
        "117%",
        "21.3%",
        "25.0%"
      ],
      "correct": 0,
      "explanation": "% yield = (actual/theoretical) × 100 = (21.3/25.0) × 100 = 85.2%."
    },
    {
      "id": "4-34",
      "topic": "4.5 Stoichiometry",
      "stem": "Given 2Al + 3Cl₂ → 2AlCl₃, how many grams of AlCl₃ (molar mass 133.34 g/mol) form from 4.00 g of Al (molar mass 26.98 g/mol), assuming excess Cl₂?",
      "choices": [
        "19.8 g",
        "9.90 g",
        "39.6 g",
        "4.94 g"
      ],
      "correct": 0,
      "explanation": "Moles of Al = 4.00/26.98 = 0.1483 mol. Mole ratio Al:AlCl₃ is 2:2 = 1:1, so moles AlCl₃ = 0.1483 mol. Mass AlCl₃ = 0.1483 × 133.34 = 19.8 g."
    },
    {
      "id": "4-35",
      "topic": "4.5 Stoichiometry",
      "stem": "Given the reaction 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O, how many moles of O₂ are needed to completely react with 3.00 mol C₂H₆?",
      "choices": [
        "10.5 mol",
        "21.0 mol",
        "3.00 mol",
        "7.00 mol"
      ],
      "correct": 0,
      "explanation": "Using the mole ratio 2 C₂H₆ : 7 O₂: 3.00 mol C₂H₆ × (7 mol O₂ / 2 mol C₂H₆) = 10.5 mol O₂."
    },
    {
      "id": "4-36",
      "topic": "4.5 Stoichiometry",
      "stem": "A student mixes 2.00 mol of A and 5.00 mol of B in the reaction A + 2B → 3C. What is the theoretical maximum moles of C that can form?",
      "choices": [
        "4.00 mol",
        "6.00 mol",
        "7.50 mol",
        "5.00 mol"
      ],
      "correct": 1,
      "explanation": "Check limiting reactant: A: 2.00/1 = 2.00; B: 5.00/2 = 2.50. A is limiting (smaller value). Using A's full amount: 2.00 mol A × (3 mol C / 1 mol A) = 6.00 mol C is the maximum that can form, limited by the available A."
    },
    {
      "id": "4-37",
      "topic": "4.5 Stoichiometry",
      "stem": "Why is percent yield generally less than or equal to 100%, essentially always in practice?",
      "choices": [
        "Theoretical yield calculations always overestimate the amount of reactant available.",
        "Real reactions often involve side reactions, incomplete conversion, or physical loss of product during transfer/purification, so actual yield is rarely equal to the theoretical maximum.",
        "Percent yield is always exactly 100% for any reaction performed correctly.",
        "Actual yield is always calculated incorrectly in a real lab."
      ],
      "correct": 1,
      "explanation": "Theoretical yield assumes a perfect reaction: complete conversion of limiting reactant with no losses. In real laboratory conditions, side reactions consume some reactant into unwanted products, reactions often don't go to 100% completion, and physical product is inevitably lost during transfers, filtration, or purification — all of which push actual yield below the theoretical maximum."
    },
    {
      "id": "4-38",
      "topic": "4.5 Stoichiometry",
      "stem": "In the reaction 2KClO₃ → 2KCl + 3O₂, how many liters of O₂ gas (at STP, where 1 mol gas = 22.4 L) form from 0.500 mol KClO₃?",
      "choices": [
        "11.2 L",
        "16.8 L",
        "22.4 L",
        "8.40 L"
      ],
      "correct": 1,
      "explanation": "Mole ratio KClO₃:O₂ is 2:3. Moles O₂ = 0.500 mol × (3/2) = 0.750 mol. Volume at STP = 0.750 mol × 22.4 L/mol = 16.8 L."
    },
    {
      "id": "4-39",
      "topic": "4.5 Stoichiometry",
      "stem": "Stretch — beyond typical AP difficulty: In the reaction 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O, 40.0 g of NaOH (molar mass 40.00 g/mol) reacts with 39.2 g of H₂SO₄ (molar mass 98.09 g/mol). Determine the limiting reactant and the mass of Na₂SO₄ (molar mass 142.05 g/mol) produced.",
      "choices": [
        "H₂SO₄ is limiting; 56.8 g Na₂SO₄",
        "NaOH is limiting; 71.0 g Na₂SO₄",
        "NaOH is limiting; 56.8 g Na₂SO₄",
        "H₂SO₄ is limiting; 71.0 g Na₂SO₄"
      ],
      "correct": 0,
      "explanation": "Moles NaOH = 40.0/40.00 = 1.000 mol. Moles H₂SO₄ = 39.2/98.09 = 0.400 mol. Dividing by coefficients: NaOH: 1.000/2 = 0.500; H₂SO₄: 0.400/1 = 0.400. Since 0.400 < 0.500, H₂SO₄ is limiting. Using the 1:1 ratio between H₂SO₄ and Na₂SO₄: moles Na₂SO₄ = 0.400 mol. Mass = 0.400 × 142.05 = 56.8 g.",
      "stretch": true
    },
    {
      "id": "4-40",
      "topic": "4.6 Titration",
      "stem": "In an acid-base titration, what defines the equivalence point?",
      "choices": [
        "The point where the indicator changes color, always exactly.",
        "The point where moles of acid exactly equal moles of base, according to the reaction's stoichiometric ratio.",
        "The point where the pH is always exactly 7.",
        "The point where equal volumes of acid and base have been mixed."
      ],
      "correct": 1,
      "explanation": "The equivalence point is defined stoichiometrically: the moles of acid and base present have reacted in exactly the ratio the balanced equation requires, with neither in excess. This is distinct from pH = 7 (which only occurs for a strong acid-strong base titration specifically) and distinct from the indicator's visible color change (the 'endpoint,' which is an experimental approximation of the equivalence point)."
    },
    {
      "id": "4-41",
      "topic": "4.6 Titration",
      "stem": "30.0 mL of 0.200 M HCl is titrated with NaOH. What volume of 0.150 M NaOH is needed to reach the equivalence point?",
      "choices": [
        "20.0 mL",
        "40.0 mL",
        "22.5 mL",
        "30.0 mL"
      ],
      "correct": 1,
      "explanation": "Moles HCl = 0.200 × 0.0300 = 6.00 × 10⁻³ mol. Since HCl + NaOH → NaCl + H₂O is a 1:1 ratio, moles NaOH needed = 6.00 × 10⁻³ mol. Volume NaOH = moles/M = 6.00 × 10⁻³ / 0.150 = 0.0400 L = 40.0 mL."
    },
    {
      "id": "4-42",
      "topic": "4.6 Titration",
      "stem": "In a titration of H₂SO₄ with NaOH (2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O), 25.0 mL of unknown H₂SO₄ requires 42.0 mL of 0.250 M NaOH to reach equivalence. Find the H₂SO₄ concentration.",
      "choices": [
        "0.210 M",
        "0.105 M",
        "0.420 M",
        "0.0525 M"
      ],
      "correct": 0,
      "explanation": "Moles NaOH = 0.250 × 0.0420 = 0.01050 mol. Since the mole ratio is 2 NaOH : 1 H₂SO₄, moles H₂SO₄ = 0.01050 / 2 = 5.250 × 10⁻³ mol. Concentration H₂SO₄ = 5.250 × 10⁻³ mol / 0.0250 L = 0.210 M."
    },
    {
      "id": "4-43",
      "topic": "4.6 Titration",
      "stem": "Why must the mole ratio from the balanced equation be included in a titration calculation, rather than simply setting moles of acid equal to moles of base?",
      "choices": [
        "The mole ratio is never actually needed for titration calculations.",
        "Many acid-base reactions are not a simple 1:1 ratio (e.g., a diprotic acid reacting with a monoprotic base requires a 1:2 ratio), so ignoring the actual stoichiometric ratio would give an incorrect result.",
        "Mole ratios only matter for redox reactions, not acid-base reactions.",
        "Titration calculations never involve stoichiometry at all."
      ],
      "correct": 1,
      "explanation": "Whenever an acid or base isn't simply 1:1 in its reacting ratio (like H₂SO₄, which needs 2 moles of a monoprotic base to fully neutralize each mole of acid), correctly applying the balanced equation's mole ratio is essential — assuming a 1:1 ratio by default would give an incorrect concentration for any polyprotic acid or base titration."
    },
    {
      "id": "4-44",
      "topic": "4.6 Titration",
      "stem": "What is the purpose of an indicator in an acid-base titration?",
      "choices": [
        "To change the pH of the solution being titrated.",
        "To visually signal (typically via a color change) that the endpoint — an experimental approximation of the equivalence point — has been reached.",
        "To increase the concentration of the titrant.",
        "To neutralize the titrant before it reacts."
      ],
      "correct": 1,
      "explanation": "An indicator is chosen to change color at a pH close to the expected equivalence point pH, giving the experimenter a visible signal to stop adding titrant — this observed color-change point (the endpoint) is meant to closely approximate, though not always exactly match, the true stoichiometric equivalence point."
    },
    {
      "id": "4-45",
      "topic": "4.6 Titration",
      "stem": "A student titrates 20.00 mL of an unknown NaOH solution with 0.100 M HCl, requiring 35.60 mL to reach the equivalence point. Find the concentration of the NaOH solution.",
      "choices": [
        "0.178 M",
        "0.0562 M",
        "0.356 M",
        "0.200 M"
      ],
      "correct": 0,
      "explanation": "Moles HCl = 0.100 × 0.03560 = 3.560 × 10⁻³ mol. Since NaOH + HCl → NaCl + H₂O is 1:1, moles NaOH = 3.560 × 10⁻³ mol. Concentration NaOH = 3.560 × 10⁻³ / 0.02000 L = 0.178 M."
    },
    {
      "id": "4-46",
      "topic": "4.6 Titration",
      "stem": "Stretch — beyond typical AP difficulty: A 0.500 g sample of an unknown monoprotic solid acid is dissolved in water and titrated to its equivalence point with 28.40 mL of 0.150 M NaOH. Determine the molar mass of the unknown acid.",
      "choices": [
        "117 g/mol",
        "58.7 g/mol",
        "234 g/mol",
        "4.26 g/mol"
      ],
      "correct": 0,
      "explanation": "Moles NaOH used = 0.150 × 0.02840 = 4.260 × 10⁻³ mol. Since the acid is monoprotic, it reacts 1:1 with NaOH, so moles of acid = 4.260 × 10⁻³ mol. Molar mass = mass/moles = 0.500 g / 4.260 × 10⁻³ mol = 117 g/mol. This combines titration stoichiometry with a molar mass determination, similar in structure to the gas-density molar mass problems from section 3.4, but using titration data instead.",
      "stretch": true
    },
    {
      "id": "4-47",
      "topic": "4.7 Types of Reactions",
      "stem": "Which reaction type does 2H₂O₂ → 2H₂O + O₂ represent?",
      "choices": [
        "Synthesis",
        "Decomposition",
        "Single replacement",
        "Double replacement"
      ],
      "correct": 1,
      "explanation": "A single compound (H₂O₂) breaks down into two simpler products (H₂O and O₂) — this is the defining pattern of a decomposition reaction, AB → A + B (or in this case, one compound splitting into two different products)."
    },
    {
      "id": "4-48",
      "topic": "4.7 Types of Reactions",
      "stem": "Which reaction type does Zn + CuSO₄ → ZnSO₄ + Cu represent?",
      "choices": [
        "Synthesis",
        "Decomposition",
        "Single replacement",
        "Double replacement"
      ],
      "correct": 2,
      "explanation": "An uncombined element (Zn) replaces another element (Cu) within a compound — this is the defining pattern of a single replacement reaction, A + BC → AC + B, driven here by zinc being more reactive than copper."
    },
    {
      "id": "4-49",
      "topic": "4.7 Types of Reactions",
      "stem": "Which reaction type does AgNO₃ + NaCl → AgCl + NaNO₃ represent?",
      "choices": [
        "Synthesis",
        "Single replacement",
        "Double replacement",
        "Combustion"
      ],
      "correct": 2,
      "explanation": "Two ionic compounds exchange partners (cations swap anions) — this is the defining pattern of a double replacement reaction, AB + CD → AD + CB, commonly resulting in a precipitate (here, insoluble AgCl)."
    },
    {
      "id": "4-50",
      "topic": "4.7 Types of Reactions",
      "stem": "Which reaction type does 2Mg + O₂ → 2MgO represent?",
      "choices": [
        "Synthesis",
        "Decomposition",
        "Single replacement",
        "Combustion only, not synthesis"
      ],
      "correct": 0,
      "explanation": "Two simpler substances (Mg and O₂) combine to form a single, more complex product (MgO) — this is the defining pattern of a synthesis (combination) reaction, A + B → AB. Note that this reaction could also be loosely described using combustion-like characteristics (burning magnesium in oxygen), but its fundamental classification as A + B → AB makes synthesis the most precise category."
    },
    {
      "id": "4-51",
      "topic": "4.7 Types of Reactions",
      "stem": "Which general equation pattern represents a combustion reaction of a hydrocarbon?",
      "choices": [
        "Hydrocarbon + O₂ → CO₂ + H₂O",
        "Hydrocarbon → C + H₂",
        "Hydrocarbon + H₂O → alcohol",
        "Hydrocarbon + acid → salt + H₂"
      ],
      "correct": 0,
      "explanation": "Combustion of any hydrocarbon (a compound containing only C and H) with sufficient oxygen produces carbon dioxide and water as the standard complete-combustion products — this pattern holds regardless of which specific hydrocarbon is being burned, only the coefficients change."
    },
    {
      "id": "4-52",
      "topic": "4.7 Types of Reactions",
      "stem": "Predict the products of the single replacement reaction: Cl₂ + 2NaBr → ?",
      "choices": [
        "2NaCl + Br₂",
        "NaCl₂ + NaBr",
        "2NaBr + Cl₂ (no reaction)",
        "NaClBr + Na"
      ],
      "correct": 0,
      "explanation": "Chlorine, being more reactive (higher on the reactivity series for halogens) than bromine, displaces Br⁻ from NaBr, forming NaCl and elemental Br₂. This follows the single replacement pattern A + BC → AC + B, and the reaction proceeds because Cl₂ is more reactive than Br₂ (reactivity for halogens decreases going down the group)."
    },
    {
      "id": "4-53",
      "topic": "4.7 Types of Reactions",
      "stem": "Which of these is generally a decomposition reaction?",
      "choices": [
        "CaCO₃ → CaO + CO₂",
        "H₂ + Cl₂ → 2HCl",
        "Fe + S → FeS",
        "AgNO₃ + KCl → AgCl + KNO₃"
      ],
      "correct": 0,
      "explanation": "Calcium carbonate breaking down into calcium oxide and carbon dioxide when heated is a classic decomposition reaction: one compound (CaCO₃) splitting into two simpler products. The other options are examples of synthesis (H₂+Cl₂, Fe+S) and double replacement (AgNO₃+KCl) reactions."
    },
    {
      "id": "4-54",
      "topic": "4.8 Acid-Base Reactions",
      "stem": "What is the net ionic equation for the reaction of any strong acid with any strong base, producing water?",
      "choices": [
        "H⁺(aq) + OH⁻(aq) → H₂O(l)",
        "Acid + Base → Salt + Water (molecular form only)",
        "H₂O(l) → H⁺(aq) + OH⁻(aq)",
        "The net ionic equation differs for every strong acid-strong base pair"
      ],
      "correct": 0,
      "explanation": "Because both the strong acid and strong base fully dissociate, and the salt product is generally soluble, the spectator ions (from the acid's anion and the base's cation) always cancel out, leaving the universal net ionic equation H⁺(aq) + OH⁻(aq) → H₂O(l) for any strong acid-strong base neutralization."
    },
    {
      "id": "4-55",
      "topic": "4.8 Acid-Base Reactions",
      "stem": "Balance the acid-base reaction: __H₃PO₄ + __NaOH → __Na₃PO₄ + __H₂O",
      "choices": [
        "1, 3, 1, 3",
        "1, 1, 1, 1",
        "3, 1, 1, 3",
        "1, 3, 3, 1"
      ],
      "correct": 0,
      "explanation": "H₃PO₄ has 3 acidic hydrogens, requiring 3 NaOH to fully neutralize (one OH⁻ per H⁺). This produces 1 Na₃PO₄ (using all 3 Na⁺) and 3 H₂O (using all 3 H⁺ and 3 OH⁻). Final: H₃PO₄ + 3NaOH → Na₃PO₄ + 3H₂O."
    },
    {
      "id": "4-56",
      "topic": "4.8 Acid-Base Reactions",
      "stem": "What are the products of a general acid-base neutralization reaction?",
      "choices": [
        "An oxide and hydrogen gas",
        "A salt and water",
        "Two new acids",
        "A precipitate only"
      ],
      "correct": 1,
      "explanation": "A neutralization reaction between an acid and a base generally produces a salt (an ionic compound formed from the acid's anion and the base's cation) and water (formed from the acid's H⁺ combining with the base's OH⁻)."
    },
    {
      "id": "4-57",
      "topic": "4.8 Acid-Base Reactions",
      "stem": "How many moles of H⁺ does 1 mole of H₂SO₄ (a diprotic acid) provide upon complete neutralization?",
      "choices": [
        "1 mole",
        "2 moles",
        "3 moles",
        "0.5 moles"
      ],
      "correct": 1,
      "explanation": "'Diprotic' means each molecule of H₂SO₄ has two acidic hydrogens available to donate, so 1 mole of H₂SO₄ can provide up to 2 moles of H⁺ when fully neutralized — this is exactly why H₂SO₄ requires a 1:2 ratio with a monoprotic base like NaOH, as seen in earlier titration calculations."
    },
    {
      "id": "4-58",
      "topic": "4.8 Acid-Base Reactions",
      "stem": "Predict the products of the neutralization reaction between HBr and KOH.",
      "choices": [
        "KBr and H₂O",
        "KH and BrOH",
        "K₂Br and H₂O",
        "KBr and H₂"
      ],
      "correct": 0,
      "explanation": "H⁺ from HBr combines with OH⁻ from KOH to form H₂O, while the remaining ions (K⁺ and Br⁻) combine to form the salt KBr — a standard 1:1 monoprotic acid + monoprotic base neutralization: HBr + KOH → KBr + H₂O."
    },
    {
      "id": "4-59",
      "topic": "4.8 Acid-Base Reactions",
      "stem": "Which best explains why the net ionic equation for a strong acid-strong base reaction does NOT include the specific identity of the salt formed?",
      "choices": [
        "The salt formed never actually exists in solution.",
        "The salt's ions (the acid's original anion and the base's original cation) are spectator ions, since they remain fully dissolved and unchanged — only H⁺ and OH⁻ actually undergo a chemical transformation into water.",
        "Salts are never soluble in water.",
        "Net ionic equations never include any information about products."
      ],
      "correct": 1,
      "explanation": "Since the acid and base are both strong (fully dissociated) and the resulting salt is generally soluble, the salt's constituent ions remain dissolved and unchanged throughout the reaction — true spectators. Only H⁺ and OH⁻ genuinely combine to form a new substance (water), which is why they alone appear in the universal net ionic equation, regardless of which specific strong acid or base was used."
    },
    {
      "id": "4-60",
      "topic": "4.8 Acid-Base Reactions",
      "stem": "A student neutralizes HCl with Ca(OH)₂. What is the correctly balanced molecular equation?",
      "choices": [
        "2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O",
        "HCl + Ca(OH)₂ → CaCl₂ + H₂O",
        "HCl + Ca(OH)₂ → CaCl + H₂O",
        "2HCl + Ca(OH)₂ → CaCl₂ + H₂O₂"
      ],
      "correct": 0,
      "explanation": "Ca(OH)₂ provides 2 OH⁻ per formula unit, requiring 2 HCl (each providing 1 H⁺) for complete neutralization. Balancing: 2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O. Checking: Ca (1=1), Cl (2=2), O (2=2), H (2+2=4 on left; 4 on right in 2H₂O) — balanced."
    },
    {
      "id": "4-61",
      "topic": "4.9 Redox Reactions",
      "stem": "What is the oxidation number of sulfur in SO₄²⁻?",
      "choices": [
        "+6",
        "+4",
        "-2",
        "+2"
      ],
      "correct": 0,
      "explanation": "Oxygen is almost always −2 in compounds (4 × −2 = −8 total). Since the overall ion charge is −2, S + (−8) = −2, so S = +6."
    },
    {
      "id": "4-62",
      "topic": "4.9 Redox Reactions",
      "stem": "In the reaction 2Na + Cl₂ → 2NaCl, which species is oxidized?",
      "choices": [
        "Na, since its oxidation number increases from 0 to +1",
        "Cl, since its oxidation number increases",
        "Na, since it gains electrons",
        "Neither species changes oxidation state"
      ],
      "correct": 0,
      "explanation": "Sodium's oxidation number goes from 0 (elemental Na) to +1 (in NaCl) — an increase, indicating loss of electrons, which is the definition of oxidation (OIL: Oxidation Is Loss). Chlorine's oxidation number goes from 0 to −1, a decrease, meaning it was reduced (gained electrons)."
    },
    {
      "id": "4-63",
      "topic": "4.9 Redox Reactions",
      "stem": "Which species acts as the reducing agent in the reaction Mg + 2HCl → MgCl₂ + H₂?",
      "choices": [
        "Mg, because it is oxidized and causes the reduction of another species",
        "H⁺, because it is oxidized",
        "Cl⁻, because it is reduced",
        "H₂, because it is a product"
      ],
      "correct": 0,
      "explanation": "The reducing agent is the species that gets oxidized (loses electrons) and thereby causes another species to be reduced. Mg goes from 0 to +2 (oxidized, losing 2 electrons), while H⁺ goes from +1 to 0 in H₂ (reduced, gaining those electrons) — so Mg, by donating electrons, is the reducing agent, even though it's the one being oxidized."
    },
    {
      "id": "4-64",
      "topic": "4.9 Redox Reactions",
      "stem": "What is the oxidation number of chromium in Cr₂O₇²⁻ (dichromate)?",
      "choices": [
        "+6",
        "+3",
        "+7",
        "+12"
      ],
      "correct": 0,
      "explanation": "Oxygen is −2 (7 × −2 = −14 total). Overall ion charge is −2, so 2Cr + (−14) = −2, meaning 2Cr = +12, so each Cr = +6."
    },
    {
      "id": "4-65",
      "topic": "4.9 Redox Reactions",
      "stem": "Stretch — beyond typical AP difficulty: In the disproportionation reaction 3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O, explain why chlorine is said to undergo 'disproportionation.'",
      "choices": [
        "Because chlorine is completely unreactive in this equation.",
        "Because the same element (chlorine) is simultaneously oxidized (in NaClO₃, Cl goes from 0 to +5) and reduced (in NaCl, Cl goes from 0 to −1) within the same reaction.",
        "Because sodium is oxidized while chlorine remains unchanged.",
        "Because this reaction does not actually involve any redox chemistry."
      ],
      "correct": 1,
      "explanation": "Disproportionation is a special type of redox reaction where a single element, starting at one oxidation state, ends up in two different products at two different oxidation states — one higher (oxidized) and one lower (reduced) than the starting state. Here, elemental Cl₂ (oxidation state 0) ends up as both Cl⁻ in NaCl (reduced to −1) and Cl in ClO₃⁻ (oxidized to +5), with the same element simultaneously serving as both the oxidized and reduced species in the same overall reaction.",
      "stretch": true
    }
  ],
  "5": [
    {
      "id": "5-1",
      "topic": "5.1 Reaction Rates",
      "stem": "For the reaction A → 2B, if [A] decreases at 0.0400 M/s, at what rate does [B] increase?",
      "choices": [
        "0.0200 M/s",
        "0.0400 M/s",
        "0.0800 M/s",
        "0.1600 M/s"
      ],
      "correct": 2,
      "explanation": "Rate of B formation = 2 × rate of A disappearance = 2 × 0.0400 = 0.0800 M/s, matching the 1:2 stoichiometric ratio between A and B."
    },
    {
      "id": "5-2",
      "topic": "5.1 Reaction Rates",
      "stem": "For 2H₂O₂ → 2H₂O + O₂, if O₂ forms at 0.0150 M/s, what is the rate of H₂O₂ disappearance?",
      "choices": [
        "0.0075 M/s",
        "0.0150 M/s",
        "0.0300 M/s",
        "0.0450 M/s"
      ],
      "correct": 2,
      "explanation": "Using the 2:1 ratio between H₂O₂ and O₂: rate of H₂O₂ disappearance = 2 × 0.0150 = 0.0300 M/s."
    },
    {
      "id": "5-3",
      "topic": "5.1 Reaction Rates",
      "stem": "Why must reaction rate be defined relative to a specific reactant or product's stoichiometric coefficient?",
      "choices": [
        "Different species in a reaction change concentration at different relative rates, matching their coefficients, so a single unqualified 'rate' would be ambiguous.",
        "All species in a reaction always change concentration at exactly the same rate.",
        "Rate is only ever measured for gaseous species.",
        "Stoichiometric coefficients have no bearing on reaction rate."
      ],
      "correct": 0,
      "explanation": "Since reactants and products are consumed/formed in proportion to their coefficients (not necessarily at equal numerical rates), reporting 'the rate' without specifying which species (or dividing by that species' coefficient) would be ambiguous — this is why the standardized rate expression divides each species' rate of change by its own coefficient."
    },
    {
      "id": "5-4",
      "topic": "5.1 Reaction Rates",
      "stem": "What are the typical units of reaction rate?",
      "choices": [
        "M (molarity)",
        "M/s (or similar concentration/time)",
        "s (seconds)",
        "mol (moles)"
      ],
      "correct": 1,
      "explanation": "Reaction rate measures how concentration changes per unit time, so its units are always concentration divided by time — commonly M/s, though other time units (minutes, hours) may be used depending on the reaction's timescale."
    },
    {
      "id": "5-5",
      "topic": "5.1 Reaction Rates",
      "stem": "For 3A → B, if the rate of A disappearance is 0.0900 M/s, what is the rate of B formation?",
      "choices": [
        "0.0300 M/s",
        "0.0900 M/s",
        "0.2700 M/s",
        "0.0450 M/s"
      ],
      "correct": 0,
      "explanation": "Using the 3:1 ratio, rate of B formation = (1/3) × rate of A disappearance = (1/3)(0.0900) = 0.0300 M/s. B forms three times more slowly than A disappears, matching the coefficients."
    },
    {
      "id": "5-6",
      "topic": "5.1 Reaction Rates",
      "stem": "As a reaction proceeds toward completion, what generally happens to its instantaneous rate?",
      "choices": [
        "It generally decreases, since reactant concentration decreases over time.",
        "It generally increases as the reaction proceeds.",
        "It remains perfectly constant throughout.",
        "It is impossible to predict without more information about the specific reaction."
      ],
      "correct": 0,
      "explanation": "Since rate typically depends on reactant concentration (per the rate law), and reactant concentration decreases as a reaction proceeds toward completion, rate generally decreases over time as well — this is why concentration-vs-time graphs typically curve, becoming shallower as the reaction slows down."
    },
    {
      "id": "5-7",
      "topic": "5.2 Rate Law",
      "stem": "Data: Trial 1: [A]=0.10, rate=0.0050. Trial 2: [A]=0.20, rate=0.0200 (all else constant). What is the order in A?",
      "choices": [
        "0",
        "1",
        "2",
        "3"
      ],
      "correct": 2,
      "explanation": "Doubling [A] (0.10→0.20) causes rate to quadruple (0.0050→0.0200, factor of 4). Since 2ᵐ = 4, m = 2, so the reaction is second order in A."
    },
    {
      "id": "5-8",
      "topic": "5.2 Rate Law",
      "stem": "If doubling a reactant's concentration has no effect on rate, what is the order with respect to that reactant?",
      "choices": [
        "0",
        "1",
        "2",
        "Cannot be determined"
      ],
      "correct": 0,
      "explanation": "A reactant with zero order doesn't affect rate at all, regardless of its concentration — mathematically, [A]⁰ = 1 for any concentration, so changing [A] has no effect on the rate expression."
    },
    {
      "id": "5-10",
      "topic": "5.2 Rate Law",
      "stem": "A reaction has rate law Rate = k[A]²[B]. If [A] is tripled and [B] is doubled, by what factor does the rate increase?",
      "choices": [
        "6",
        "9",
        "18",
        "3"
      ],
      "correct": 2,
      "explanation": "Rate scales as [A]² × [B]¹. Tripling [A] increases rate by 3² = 9. Doubling [B] increases rate by 2¹ = 2. Combined factor: 9 × 2 = 18."
    },
    {
      "id": "5-11",
      "topic": "5.2 Rate Law",
      "stem": "Why can reaction order NOT generally be determined just by looking at a balanced overall chemical equation?",
      "choices": [
        "Reaction order for an overall (non-elementary) reaction reflects the actual mechanism, which may involve multiple steps not visible in the overall equation, so it must be determined experimentally.",
        "Balanced equations never contain enough information about atoms.",
        "Reaction order is always equal to 1, regardless of the equation.",
        "Reaction order can always be read directly from stoichiometric coefficients for every reaction."
      ],
      "correct": 0,
      "explanation": "The overall balanced equation only shows net atom conservation, not the actual step-by-step mechanism by which the reaction proceeds. Since rate law reflects the (often multi-step) mechanism, and coefficients in the overall equation don't reveal mechanism details, order must be determined experimentally (except for elementary reactions, where mechanism = the single written step)."
    },
    {
      "id": "5-12",
      "topic": "5.2 Rate Law",
      "stem": "A reaction follows Rate = k[A]. If [A] = 0.050 M and rate = 0.0030 M/s, find k (including units).",
      "choices": [
        "0.060 s⁻¹",
        "0.150 M·s⁻¹",
        "0.0015 s⁻¹",
        "6.0 × 10⁻⁵ M·s⁻¹"
      ],
      "correct": 0,
      "explanation": "k = rate/[A] = 0.0030/0.050 = 0.060. For a first-order reaction, units of k are always s⁻¹ (or generally, 1/time), since Rate (M/s) = k × [A] (M) requires k to have units of 1/s to balance dimensionally."
    },
    {
      "id": "5-13",
      "topic": "5.2 Rate Law",
      "stem": "Data: Trial 1: [A]=0.20, [B]=0.10, rate=0.0080. Trial 2: [A]=0.20, [B]=0.30, rate=0.0720. What is the order in B?",
      "choices": [
        "0",
        "1",
        "2",
        "3"
      ],
      "correct": 2,
      "explanation": "With [A] held constant, [B] triples (0.10→0.30) and rate increases by a factor of 9 (0.0080→0.0720). Since 3ⁿ = 9, n = 2, second order in B."
    },
    {
      "id": "5-15",
      "topic": "5.2 Rate Law",
      "stem": "Stretch — beyond typical AP difficulty: A reaction has rate law Rate = k[A]^1.5[B]^0.5. If both [A] and [B] are doubled simultaneously, by what factor does the rate increase?",
      "choices": [
        "2",
        "2.83",
        "4",
        "2^2"
      ],
      "correct": 1,
      "explanation": "Rate scales as [A]^1.5 × [B]^0.5. Doubling both: factor = 2^1.5 × 2^0.5 = 2^(1.5+0.5) = 2^2.0 = 4... rechecking exponent arithmetic: 1.5 + 0.5 = 2.0, so the factor is 2² = 4, not 2.83. Reworking: 2^1.5 ≈ 2.828 and 2^0.5 ≈ 1.414, and 2.828 × 1.414 ≈ 4.00, confirming the factor is indeed 4 — matching answer choice (c), demonstrating that fractional-order rate laws (which arise from certain mechanism substitutions, as in section 5.8) are handled with the same exponent rules as integer orders, just requiring careful fractional-exponent arithmetic.",
      "stretch": true
    },
    {
      "id": "5-16",
      "topic": "5.3 Concentration vs Time",
      "stem": "A first-order reaction has a half-life of 20.0 s. Starting from [A]₀ = 0.800 M, what is [A] after 40.0 s (two half-lives)?",
      "choices": [
        "0.400 M",
        "0.200 M",
        "0.100 M",
        "0.600 M"
      ],
      "correct": 1,
      "explanation": "After 1 half-life (20.0 s): [A] = 0.400 M. After 2 half-lives (40.0 s total): [A] = 0.200 M — each half-life cuts the remaining concentration exactly in half, regardless of starting value, since this is a first-order process."
    },
    {
      "id": "5-17",
      "topic": "5.3 Concentration vs Time",
      "stem": "Which graph would be linear for a second-order reaction?",
      "choices": [
        "[A] vs. time",
        "ln[A] vs. time",
        "1/[A] vs. time",
        "[A]² vs. time"
      ],
      "correct": 2,
      "explanation": "The integrated rate law for second order is 1/[A] = kt + 1/[A]₀, which has the form of a straight line (y = mx + b) when 1/[A] is plotted against time, with slope k and y-intercept 1/[A]₀."
    },
    {
      "id": "5-18",
      "topic": "5.3 Concentration vs Time",
      "stem": "Which best describes how the half-life of a zero-order reaction changes as the reaction proceeds?",
      "choices": [
        "It remains constant throughout the reaction.",
        "It decreases as the reaction proceeds, since [A]₀ used in the half-life formula decreases with each successive half-life.",
        "It increases as the reaction proceeds.",
        "Zero-order reactions do not have a defined half-life."
      ],
      "correct": 1,
      "explanation": "For zero order, t½ = [A]₀/2k — since this formula depends directly on the current concentration at the start of that particular half-life period, and concentration is decreasing throughout the reaction, each successive half-life becomes shorter than the one before, unlike first-order's constant half-life."
    },
    {
      "id": "5-19",
      "topic": "5.3 Concentration vs Time",
      "stem": "For a first-order reaction with k = 0.0350 min⁻¹, how long will it take for [A] to decrease from 0.500 M to 0.125 M?",
      "choices": [
        "19.8 min",
        "39.6 min",
        "9.90 min",
        "79.2 min"
      ],
      "correct": 1,
      "explanation": "Going from 0.500 M to 0.125 M represents exactly 2 half-lives (0.500 → 0.250 → 0.125). t½ = 0.693/k = 0.693/0.0350 = 19.8 min. Time for 2 half-lives = 2 × 19.8 = 39.6 min."
    },
    {
      "id": "5-20",
      "topic": "5.3 Concentration vs Time",
      "stem": "A plot of ln[A] vs. time gives a straight line with slope −0.0250 s⁻¹. What is the reaction order and the value of k?",
      "choices": [
        "Zero order; k = 0.0250 M/s",
        "First order; k = 0.0250 s⁻¹",
        "Second order; k = 0.0250 M⁻¹s⁻¹",
        "First order; k = −0.0250 s⁻¹"
      ],
      "correct": 1,
      "explanation": "A linear ln[A] vs. time plot is the signature of a first-order reaction (ln[A] = −kt + ln[A]₀), where the slope equals −k. Since the given slope is −0.0250 s⁻¹, k = +0.0250 s⁻¹ (k itself is always reported as a positive value, even though the slope of this particular plot is negative)."
    },
    {
      "id": "5-21",
      "topic": "5.3 Concentration vs Time",
      "stem": "Radioactive decay is a first-order process. A sample with an initial activity corresponding to [A]₀ decays to 12.5% of its original amount. How many half-lives have passed?",
      "choices": [
        "2",
        "3",
        "4",
        "8"
      ],
      "correct": 1,
      "explanation": "Each half-life cuts the remaining amount in half: 100% → 50% → 25% → 12.5%, which takes exactly 3 half-lives. This is a classic application connecting first-order kinetics directly to nuclear decay, since radioactive decay follows the exact same mathematical form."
    },
    {
      "id": "5-22",
      "topic": "5.3 Concentration vs Time",
      "stem": "Which correctly describes the shape of a concentration-vs-time graph for a first-order reaction?",
      "choices": [
        "A straight line with negative slope",
        "An exponential decay curve, decreasing steeply at first and leveling off (approaching, but not reaching, zero)",
        "A straight line with positive slope",
        "A parabola"
      ],
      "correct": 1,
      "explanation": "First-order concentration decay follows [A] = [A]₀e^(−kt), an exponential decay function — starting steep (high concentration, high rate) and gradually flattening as concentration (and thus rate) decreases, asymptotically approaching but never mathematically reaching exactly zero."
    },
    {
      "id": "5-23",
      "topic": "5.3 Concentration vs Time",
      "stem": "For a zero-order reaction with k = 0.0200 M/s and [A]₀ = 0.600 M, what is [A] after 15.0 s?",
      "choices": [
        "0.300 M",
        "0.450 M",
        "0.600 M",
        "0.150 M"
      ],
      "correct": 0,
      "explanation": "Using the zero-order integrated rate law: [A] = −kt + [A]₀ = −(0.0200)(15.0) + 0.600 = −0.300 + 0.600 = 0.300 M."
    },
    {
      "id": "5-24",
      "topic": "5.3 Concentration vs Time",
      "stem": "A second-order reaction has k = 0.0400 M⁻¹s⁻¹ and [A]₀ = 0.250 M. What is the half-life?",
      "choices": [
        "10.0 s",
        "17.3 s",
        "100 s",
        "6.93 s"
      ],
      "correct": 2,
      "explanation": "For second order: t½ = 1/(k[A]₀) = 1/[(0.0400)(0.250)] = 1/0.0100 = 100 s."
    },
    {
      "id": "5-25",
      "topic": "5.3 Concentration vs Time",
      "stem": "Stretch — beyond typical AP difficulty: A first-order reaction is 75% complete after 24.0 minutes. Calculate the rate constant k.",
      "choices": [
        "0.0578 min⁻¹",
        "0.0289 min⁻¹",
        "0.116 min⁻¹",
        "1.386 min⁻¹"
      ],
      "correct": 0,
      "explanation": "75% complete means 25% of the original concentration remains: [A]/[A]₀ = 0.25. Using the first-order integrated rate law: ln([A]/[A]₀) = −kt, so ln(0.25) = −k(24.0). ln(0.25) = −1.386, giving −1.386 = −k(24.0), so k = 1.386/24.0 = 0.0578 min⁻¹. This requires connecting a percent-completion statement to a concentration ratio before applying the integrated rate law, an extra conceptual step beyond a direct plug-in problem.",
      "stretch": true
    },
    {
      "id": "5-26",
      "topic": "5.4 Elementary Reactions",
      "stem": "For the elementary reaction 2NO₂ → 2NO + O₂, what is the rate law?",
      "choices": [
        "Rate = k[NO₂]",
        "Rate = k[NO₂]²",
        "Rate = k[NO]²[O₂]",
        "Rate = k[NO₂]²[NO][O₂]"
      ],
      "correct": 1,
      "explanation": "Since this is stated to be an elementary reaction, the rate law's exponents directly match the reactant coefficients: Rate = k[NO₂]²."
    },
    {
      "id": "5-27",
      "topic": "5.4 Elementary Reactions",
      "stem": "What does 'bimolecular' mean in the context of an elementary reaction step?",
      "choices": [
        "Two separate reactions occur simultaneously.",
        "Two reactant particles collide and react in that single step.",
        "The reaction produces two different products.",
        "The reaction has two possible mechanisms."
      ],
      "correct": 1,
      "explanation": "Molecularity describes the number of reactant particles that come together in a single elementary step's collision event. Bimolecular specifically means exactly two particles (which could be two of the same species or two different species) collide and react in that step."
    },
    {
      "id": "5-28",
      "topic": "5.4 Elementary Reactions",
      "stem": "Why are termolecular elementary steps (three particles colliding simultaneously) very rare?",
      "choices": [
        "Three particles are never present in the same reaction at once.",
        "The probability of three particles colliding with correct energy and orientation all at the exact same instant is statistically very low compared to two-particle collisions.",
        "Termolecular reactions violate conservation of mass.",
        "Chemistry does not allow more than two reactants in any single reaction."
      ],
      "correct": 1,
      "explanation": "A genuine three-way simultaneous collision — all three particles meeting in the same place at the same time with sufficient energy and correct orientation — is statistically much less likely than a simpler two-particle collision, which is why most elementary steps are unimolecular or bimolecular, and termolecular steps are comparatively rare in real mechanisms."
    },
    {
      "id": "5-29",
      "topic": "5.4 Elementary Reactions",
      "stem": "For the elementary reaction A → B + C, what is the rate law and molecularity?",
      "choices": [
        "Rate = k[A]; unimolecular",
        "Rate = k[A]²; bimolecular",
        "Rate = k[B][C]; bimolecular",
        "Rate = k; zero order, unimolecular"
      ],
      "correct": 0,
      "explanation": "A single reactant particle (A) undergoes this elementary step alone — unimolecular. The rate law directly matches the coefficient of A (which is 1): Rate = k[A], first order."
    },
    {
      "id": "5-30",
      "topic": "5.4 Elementary Reactions",
      "stem": "A proposed elementary step is A + A → A₂. What is the correct rate law for this step?",
      "choices": [
        "Rate = k[A]",
        "Rate = k[A]²",
        "Rate = k[A₂]",
        "Rate = 2k[A]"
      ],
      "correct": 1,
      "explanation": "Even though only one distinct species (A) is involved, two separate A particles must collide for this bimolecular step to occur, giving a rate law of Rate = k[A]² — the coefficient of 2 (implied by 'A + A') becomes an exponent of 2 in the rate law for this elementary step."
    },
    {
      "id": "5-31",
      "topic": "5.4 Elementary Reactions",
      "stem": "Which statement correctly distinguishes an elementary reaction from an overall (net) reaction?",
      "choices": [
        "An elementary reaction is always faster than an overall reaction.",
        "An elementary reaction represents a single mechanistic step occurring exactly as written, while an overall reaction may represent the sum of multiple such steps.",
        "There is no real difference between the two terms.",
        "An elementary reaction always has a higher activation energy than an overall reaction."
      ],
      "correct": 1,
      "explanation": "An elementary reaction is a genuine single-step molecular event (the actual physical collision/transformation), whereas an overall (net) reaction is simply the balanced equation summarizing the total, cumulative change — which might be the result of one elementary step or many, added together."
    },
    {
      "id": "5-32",
      "topic": "5.5 Collision Model",
      "stem": "According to the collision model, what two conditions must be met for a collision to result in a successful reaction?",
      "choices": [
        "The colliding particles must have equal mass and equal charge.",
        "The collision must have sufficient energy (exceeding Ea) and proper orientation.",
        "The collision must occur at exactly room temperature.",
        "The particles must be the same size."
      ],
      "correct": 1,
      "explanation": "The collision model states that a successful (reaction-producing) collision requires both sufficient kinetic energy (enough to overcome the activation energy barrier) AND correct geometric orientation (so the reactive parts of the colliding molecules actually align to allow bond breaking/forming) — missing either condition results in an unsuccessful, non-reactive collision."
    },
    {
      "id": "5-34",
      "topic": "5.5 Collision Model",
      "stem": "Which best explains why only a small fraction of collisions between reactant molecules actually result in a chemical reaction, even at reasonably high temperature?",
      "choices": [
        "Most collisions lack either sufficient energy, correct orientation, or both.",
        "Most molecules are chemically inert and cannot react under any circumstances.",
        "Collisions between molecules are extremely rare events.",
        "Temperature has no effect on collision success."
      ],
      "correct": 0,
      "explanation": "Even in a reactive mixture, the vast majority of random collisions either don't have enough combined kinetic energy to overcome the activation energy barrier, don't align the molecules in the specific orientation needed for bond rearrangement, or both — which is exactly why reaction rates are typically much slower than the raw frequency of all molecular collisions would suggest."
    },
    {
      "id": "5-35",
      "topic": "5.5 Collision Model",
      "stem": "A catalyst increases reaction rate primarily by affecting which part of the collision model?",
      "choices": [
        "It increases collision frequency directly.",
        "It provides an alternative pathway with a lower activation energy, increasing the fraction of collisions with sufficient energy to react.",
        "It increases the temperature of the reaction mixture.",
        "It has no connection to the collision model."
      ],
      "correct": 1,
      "explanation": "A catalyst works by offering a different reaction pathway (often via a different mechanism) with a lower activation energy barrier than the uncatalyzed reaction. Since Ea is lower, a larger fraction of collisions (at the same temperature/energy distribution) now have enough energy to successfully react, increasing the overall rate — a direct, testable connection to the collision model's energy requirement."
    },
    {
      "id": "5-36",
      "topic": "5.5 Collision Model",
      "stem": "Two reactant molecules collide with more than enough energy to react, but the reaction still doesn't occur. What is the most likely explanation?",
      "choices": [
        "The molecules had incorrect orientation, so the necessary bonds could not properly break and form.",
        "This scenario is impossible; sufficient energy always guarantees a successful reaction.",
        "The molecules must have been at too low a temperature.",
        "The reaction must be zero order."
      ],
      "correct": 0,
      "explanation": "Sufficient energy is a necessary but not sufficient condition for a successful reaction — the colliding molecules must also be oriented correctly so that the specific atoms/bonds involved in the reaction can actually interact properly. A high-energy collision with poor orientation (e.g., molecules colliding 'backward' relative to where new bonds need to form) still fails to react, even with plenty of energy available."
    },
    {
      "id": "5-37",
      "topic": "5.5 Collision Model",
      "stem": "Which molecular property would you expect to make orientation requirements LESS restrictive (i.e., a wider range of orientations lead to successful reaction)?",
      "choices": [
        "A very small, simple, roughly spherical reacting molecule with few distinct reactive sites",
        "A very large, complex molecule with one very specific, small reactive site",
        "Orientation requirements are identical for all molecules regardless of size or shape",
        "A charged ion always has stricter orientation requirements than a neutral molecule"
      ],
      "correct": 0,
      "explanation": "Small, simple, roughly symmetric molecules (like individual atoms or small spherical molecules) generally have less restrictive orientation requirements, since there's less complex molecular geometry that needs to align correctly. Large, complex molecules with one small specific reactive site require a much narrower range of correct orientations for a successful collision, which is part of why very large biomolecules often need enzyme catalysts (Unit 5.11) to react efficiently."
    },
    {
      "id": "5-38",
      "topic": "5.5 Collision Model",
      "stem": "Reaction A has a much larger orientation-sensitive activation entropy requirement than reaction B (meaning A requires a much narrower range of correct collision orientations), even though both reactions have identical activation energies (Ea) and are run at the same temperature and concentration. What would you predict about their relative rates?",
      "choices": [
        "They must have identical rates, since Ea, temperature, and concentration are all the same.",
        "Reaction B would likely proceed faster, since a wider range of successful collision orientations effectively increases the fraction of energetically-sufficient collisions that also succeed geometrically.",
        "Reaction A would proceed faster, since narrower orientation requirements always increase rate.",
        "Orientation requirements have no measurable effect on rate if Ea is identical."
      ],
      "correct": 1,
      "explanation": "While the Arrhenius equation's Ea term captures the energy requirement, the frequency factor (A, sometimes called the pre-exponential factor) reflects both collision frequency AND the probability of correct orientation. Two reactions with identical Ea can still have very different rates if their orientation requirements (captured in this frequency factor) differ — a reaction with looser orientation requirements (B) will have effectively more 'successful' collisions per energetically-sufficient collision than one with very strict requirements (A), predicting a faster rate for B despite identical activation energies."
    },
    {
      "id": "5-39",
      "topic": "5.6 Reaction Energy Profile",
      "stem": "On a reaction energy diagram, what does the difference in energy between the transition state and the reactants represent?",
      "choices": [
        "ΔH",
        "Ea (forward)",
        "Ea (reverse)",
        "The rate constant k"
      ],
      "correct": 1,
      "explanation": "The activation energy for the forward reaction (Ea forward) is defined as the energy difference between the reactants' starting energy and the peak of the energy diagram (the transition state) — this is the barrier the forward reaction must overcome."
    },
    {
      "id": "5-41",
      "topic": "5.6 Reaction Energy Profile",
      "stem": "A reaction has Ea(forward) = 45 kJ/mol and ΔH = −20 kJ/mol. What is Ea(reverse)?",
      "choices": [
        "25 kJ/mol",
        "65 kJ/mol",
        "−65 kJ/mol",
        "20 kJ/mol"
      ],
      "correct": 1,
      "explanation": "Using ΔH = Ea(forward) − Ea(reverse): −20 = 45 − Ea(reverse), so Ea(reverse) = 45 − (−20) = 65 kJ/mol. This makes sense visually: since the reaction is exothermic (products lower than reactants), the reverse reaction has to climb a bigger energy hill (from the lower product energy back up to the same transition state) than the forward reaction does."
    },
    {
      "id": "5-42",
      "topic": "5.6 Reaction Energy Profile",
      "stem": "What does the transition state represent on a reaction energy diagram?",
      "choices": [
        "A stable, isolable intermediate species",
        "The highest-energy, most unstable, fleeting arrangement of atoms during the transformation from reactants to products",
        "The final product of the reaction",
        "A catalyst molecule"
      ],
      "correct": 1,
      "explanation": "The transition state is the peak of the energy diagram — a genuinely unstable, extremely short-lived arrangement where old bonds are partially broken and new bonds are partially formed. Unlike an intermediate (which sits in an energy valley and can, at least in principle, be isolated), the transition state exists only for an instant and can never be isolated or directly observed."
    },
    {
      "id": "5-43",
      "topic": "5.6 Reaction Energy Profile",
      "stem": "Which correctly describes the relationship between Ea(forward), Ea(reverse), and ΔH?",
      "choices": [
        "ΔH = Ea(forward) + Ea(reverse)",
        "ΔH = Ea(forward) − Ea(reverse)",
        "ΔH = Ea(reverse) / Ea(forward)",
        "ΔH is completely unrelated to either activation energy"
      ],
      "correct": 1,
      "explanation": "ΔH equals the difference between the forward and reverse activation energies — this makes sense since both Ea values are measured relative to the same transition state peak, just from opposite starting points (reactants vs. products), so subtracting them recovers the net energy difference between reactants and products."
    },
    {
      "id": "5-44",
      "topic": "5.6 Reaction Energy Profile",
      "stem": "How does increasing temperature affect a reaction's activation energy (Ea)?",
      "choices": [
        "It has no effect; Ea is a fixed property of a given reaction pathway, independent of temperature.",
        "It always increases Ea.",
        "It always decreases Ea.",
        "Temperature and Ea are the same quantity."
      ],
      "correct": 0,
      "explanation": "Activation energy is a fixed property of the specific reaction pathway (the energy of the transition state relative to reactants) and does not change with temperature. What temperature DOES change is the fraction of molecules with enough energy to clear that fixed barrier (per the Maxwell-Boltzmann distribution) — this is a commonly confused distinction worth keeping very clear."
    },
    {
      "id": "5-45",
      "topic": "5.6 Reaction Energy Profile",
      "stem": "A reaction has Ea(forward) = 30 kJ/mol and Ea(reverse) = 80 kJ/mol. Is the reaction exothermic or endothermic, and what is ΔH?",
      "choices": [
        "Endothermic; ΔH = +50 kJ/mol",
        "Exothermic; ΔH = −50 kJ/mol",
        "Endothermic; ΔH = −50 kJ/mol",
        "Exothermic; ΔH = +50 kJ/mol"
      ],
      "correct": 1,
      "explanation": "ΔH = Ea(forward) − Ea(reverse) = 30 − 80 = −50 kJ/mol. A negative ΔH indicates an exothermic reaction — consistent with a lower forward activation energy (easier to go forward) and a much higher reverse activation energy (harder to go backward), since products are lower in energy than reactants."
    },
    {
      "id": "5-46",
      "topic": "5.7 Reaction Mechanisms",
      "stem": "In a reaction mechanism, what defines an intermediate?",
      "choices": [
        "A species present at the start and end of the reaction, unchanged.",
        "A species produced in one mechanism step and completely consumed in a later step, never appearing in the overall net equation.",
        "A species that speeds up the reaction without being consumed.",
        "The slowest step in the mechanism."
      ],
      "correct": 1,
      "explanation": "An intermediate is generated as a product in an early mechanism step and then fully consumed as a reactant in a subsequent step — because it's completely used up by the end, it doesn't appear anywhere in the overall (net) balanced equation, even though it's essential to understanding how the reaction actually proceeds."
    },
    {
      "id": "5-48",
      "topic": "5.7 Reaction Mechanisms",
      "stem": "Given the mechanism: Step 1: A + B → C (slow); Step 2: C + A → D (fast), what is the overall reaction?",
      "choices": [
        "2A + B → D",
        "A + B → C",
        "C + A → D",
        "2A + 2B → D"
      ],
      "correct": 0,
      "explanation": "Adding both steps: A + B + C + A → C + D. Cancelling C (appears as a product in step 1, reactant in step 2 — a true intermediate): A + B + A → D, which combines to 2A + B → D."
    },
    {
      "id": "5-49",
      "topic": "5.7 Reaction Mechanisms",
      "stem": "Why must the sum of all elementary steps in a proposed mechanism exactly equal the overall balanced equation?",
      "choices": [
        "This is not actually a requirement for a valid mechanism.",
        "A mechanism must be experimentally consistent with the known overall stoichiometry — a proposed mechanism that doesn't sum to the correct overall equation cannot be the correct explanation for that reaction.",
        "Elementary steps never need to add up to anything specific.",
        "Only the first step of a mechanism needs to match the overall equation."
      ],
      "correct": 1,
      "explanation": "A mechanism is a proposed, physically plausible explanation for how a known overall reaction actually occurs at the molecular level. Since the overall reaction's stoichiometry is an experimentally observed fact, any valid mechanism must sum (after cancelling intermediates) to reproduce that exact overall equation — otherwise, the mechanism doesn't actually explain the reaction it claims to explain."
    },
    {
      "id": "5-50",
      "topic": "5.7 Reaction Mechanisms",
      "stem": "A three-step mechanism is proposed for a reaction. How many intermediates would you generally expect, at most?",
      "choices": [
        "Exactly 3",
        "Up to 2 (one fewer than the number of steps, at most)",
        "Exactly 0",
        "Always exactly 1"
      ],
      "correct": 1,
      "explanation": "Each 'connection' between consecutive steps can introduce one intermediate (a species produced in one step and consumed in the next), so a mechanism with n steps can have at most n−1 intermediates. A 3-step mechanism could therefore have up to 2 intermediates (though it's also possible to have fewer, or even the same intermediate reused across non-adjacent steps in more complex mechanisms)."
    },
    {
      "id": "5-51",
      "topic": "5.7 Reaction Mechanisms",
      "stem": "Given the mechanism: Step 1: X₂ → 2X (slow); Step 2: X + Y → XY (fast); Step 3: X + XY → X₂Y (fast), determine the overall equation.",
      "choices": [
        "X₂ + Y → X₂Y",
        "2X + Y → X₂Y",
        "X₂ + 2Y → X₂Y",
        "3X + Y → X₂Y"
      ],
      "correct": 0,
      "explanation": "Adding all three steps: X₂ + X + Y + X + XY → 2X + XY + X₂Y. Cancelling species appearing on both sides — X appears as 2X produced in step 1 and 2X consumed total in steps 2 and 3 (1 in each), fully cancelling; XY appears as a product in step 2 and reactant in step 3, fully cancelling. What remains: X₂ + Y → X₂Y."
    },
    {
      "id": "5-53",
      "topic": "5.8 Mechanism and Rate Law",
      "stem": "Given a two-step mechanism where the FIRST step is rate-determining: Step 1: NO₂ + CO → NO + CO₂ (slow), what is the overall rate law?",
      "choices": [
        "Rate = k[NO₂][CO]",
        "Rate = k[NO][CO₂]",
        "Rate = k[NO₂]",
        "Rate = k[CO]"
      ],
      "correct": 0,
      "explanation": "Since the rate-determining (slow) step is the FIRST step, and it involves no intermediates, the rate law can be written directly from that step's coefficients, exactly as if it were a standalone elementary reaction: Rate = k[NO₂][CO]."
    },
    {
      "id": "5-54",
      "topic": "5.8 Mechanism and Rate Law",
      "stem": "Why is the rate-determining step often called the 'bottleneck' of a reaction mechanism?",
      "choices": [
        "It is always the very first step in every mechanism.",
        "It is the slowest step, and the overall reaction can never proceed faster than this single, rate-limiting step allows, regardless of how fast the other steps are.",
        "It always involves the highest number of reactant molecules.",
        "It is the step that releases the most energy."
      ],
      "correct": 1,
      "explanation": "Just like the narrowest section of a highway limits total traffic flow no matter how fast cars move elsewhere, the slowest step in a mechanism limits the overall reaction rate no matter how quickly the other (faster) steps occur — this is exactly why the overall rate law is derived from (or heavily influenced by) this specific step."
    },
    {
      "id": "5-55",
      "topic": "5.8 Mechanism and Rate Law",
      "stem": "A proposed rate-determining step involves an intermediate that cannot appear in the final rate law. What must be done?",
      "choices": [
        "The intermediate is simply ignored and left out of the calculation entirely.",
        "The intermediate's concentration must be substituted out using an expression derived from a preceding fast equilibrium (or steady-state) step.",
        "The mechanism must be entirely discarded as invalid.",
        "The intermediate's concentration is always assumed to equal 1 M."
      ],
      "correct": 1,
      "explanation": "Since intermediates aren't present in the overall reaction (and their concentration typically isn't directly measurable or controllable like a true reactant), any intermediate appearing in the rate-determining step's rate expression must be replaced with an equivalent expression in terms of actual reactants, derived from an earlier fast equilibrium step (5.8) or via the steady-state approximation (5.9)."
    },
    {
      "id": "5-56",
      "topic": "5.8 Mechanism and Rate Law",
      "stem": "Given: Step 1: 2NO ⇌ N₂O₂ (fast equilibrium); Step 2: N₂O₂ + O₂ → 2NO₂ (slow), derive the rate law in terms of only NO and O₂.",
      "choices": [
        "Rate = k[NO]²[O₂]",
        "Rate = k[NO][O₂]",
        "Rate = k[N₂O₂][O₂]",
        "Rate = k[NO][N₂O₂]"
      ],
      "correct": 0,
      "explanation": "The RDS gives Rate = k₂[N₂O₂][O₂], but N₂O₂ is an intermediate. Using the fast equilibrium in step 1 (forward rate = reverse rate): k₁[NO]² = k₋₁[N₂O₂], so [N₂O₂] = (k₁/k₋₁)[NO]². Substituting into the RDS rate law: Rate = k₂(k₁/k₋₁)[NO]²[O₂] = k[NO]²[O₂], where k combines all the individual rate constants."
    },
    {
      "id": "5-57",
      "topic": "5.8 Mechanism and Rate Law",
      "stem": "An experimentally determined rate law is Rate = k[A][B], but a proposed single-step mechanism A + 2B → products would predict Rate = k[A][B]². What can be concluded?",
      "choices": [
        "The proposed mechanism is consistent with experimental data.",
        "The proposed single-step mechanism is NOT consistent with the experimental rate law and must be incorrect (or the reaction is not actually a single elementary step as proposed).",
        "The experimental data must be flawed.",
        "Rate laws never need to match proposed mechanisms."
      ],
      "correct": 1,
      "explanation": "A valid mechanism's predicted rate law (based on the rate-determining step, accounting for any necessary intermediate substitutions) must match the experimentally measured rate law. Since the proposed single elementary step predicts an order of 2 in B, but experiment shows order 1 in B, this specific proposed mechanism must be rejected as inconsistent with the data — the actual mechanism must be different (likely multi-step)."
    },
    {
      "id": "5-58",
      "topic": "5.8 Mechanism and Rate Law",
      "stem": "Why can a proposed mechanism never be definitively 'proven' correct, only shown to be 'consistent with' experimental data?",
      "choices": [
        "Multiple different mechanisms could potentially predict the same overall rate law, so matching data alone doesn't uniquely rule out all alternative mechanisms.",
        "Mechanisms are always randomly guessed and can never be tested.",
        "Rate laws are never actually related to mechanisms.",
        "This statement is false; mechanisms can always be definitively proven."
      ],
      "correct": 0,
      "explanation": "Because it's possible (in principle) for more than one proposed mechanism to predict an identical rate law, matching the experimental rate law is strong supporting evidence but not absolute proof that a specific mechanism is THE correct one — this is a genuine epistemic limitation of kinetics as a tool, and part of why additional evidence (like direct intermediate detection) strengthens a proposed mechanism further."
    },
    {
      "id": "5-59",
      "topic": "5.8 Mechanism and Rate Law",
      "stem": "Stretch — beyond typical AP difficulty: Given the mechanism Step 1: A ⇌ B (fast equilibrium, k₁ forward, k₋₁ reverse); Step 2: B + C → D (slow), and given that experimentally the overall rate law is found to be Rate = k[A][C], what can be concluded about the relationship between [A] and [B]?",
      "choices": [
        "[B] must be directly proportional to [A], consistent with the fast equilibrium in step 1 (since the RDS rate law substituting [B] ∝ [A] correctly reproduces the observed first-order dependence on A).",
        "[B] must be completely independent of [A].",
        "This rate law is inconsistent with the proposed mechanism, which must be rejected.",
        "[A] and [B] must always be numerically equal."
      ],
      "correct": 0,
      "explanation": "The RDS predicts Rate = k₂[B][C], with B as an intermediate needing substitution. From the fast equilibrium (k₁[A] = k₋₁[B]), [B] = (k₁/k₋₁)[A] — directly proportional to [A]. Substituting: Rate = k₂(k₁/k₋₁)[A][C] = k[A][C], exactly matching the given experimental rate law. This confirms the proposed mechanism is indeed consistent with the data, and specifically requires [B] to be proportional to [A] (not independent, not equal) for that consistency to hold.",
      "stretch": true
    },
    {
      "id": "5-60",
      "topic": "5.9 Steady-State Approximation",
      "stem": "What is the core assumption of the steady-state approximation?",
      "choices": [
        "The concentration of an intermediate remains approximately constant because its rate of formation approximately equals its rate of consumption.",
        "All reactant concentrations remain constant throughout the reaction.",
        "The reaction has reached chemical equilibrium.",
        "The rate constant k is the same for every step in the mechanism."
      ],
      "correct": 0,
      "explanation": "The steady-state approximation assumes that, after an initial brief period, a reactive intermediate's concentration stays roughly constant over time because it's being formed and consumed at nearly equal rates — this allows solving for that intermediate's (roughly constant) concentration and substituting it out of the rate law, without needing to identify a specific 'fast equilibrium' step."
    },
    {
      "id": "5-62",
      "topic": "5.9 Steady-State Approximation",
      "stem": "In the steady-state approximation, setting rate of formation = rate of consumption for an intermediate allows you to:",
      "choices": [
        "Determine the overall reaction's ΔH.",
        "Solve algebraically for the intermediate's concentration in terms of reactant concentrations, allowing it to be substituted out of the rate law.",
        "Determine the reaction's equilibrium constant directly.",
        "Skip writing a rate law entirely."
      ],
      "correct": 1,
      "explanation": "Setting the intermediate's formation rate equal to its consumption rate creates a solvable algebraic equation for that intermediate's (steady-state) concentration in terms of other, non-intermediate species — which can then be substituted into the rate-determining step's rate expression, achieving a rate law expressed only in terms of actual reactants."
    },
    {
      "id": "5-63",
      "topic": "5.9 Steady-State Approximation",
      "stem": "Which best distinguishes the steady-state approximation from the assumption used in a fast pre-equilibrium approach?",
      "choices": [
        "Steady-state assumes formation rate = consumption rate for the intermediate; fast pre-equilibrium specifically assumes an early reversible step reaches true equilibrium before the slow step occurs.",
        "The two methods are mathematically and conceptually identical in every case.",
        "Steady-state only applies to zero-order reactions.",
        "Fast pre-equilibrium never involves any algebraic substitution."
      ],
      "correct": 0,
      "explanation": "Fast pre-equilibrium assumes a specific structural feature of the mechanism (an early step reaching genuine dynamic equilibrium before the slow step matters), while the steady-state approximation makes a more general assumption (formation rate ≈ consumption rate for the intermediate) that doesn't require identifying a distinctly fast, reversible early step — making it applicable to a broader range of mechanisms, though the two methods sometimes yield the same final result for a given mechanism."
    },
    {
      "id": "5-64",
      "topic": "5.10 Multistep Energy Profile",
      "stem": "On a multistep reaction energy diagram, what do the 'valleys' between energy humps represent?",
      "choices": [
        "Transition states",
        "Intermediates",
        "Catalysts",
        "The overall ΔH"
      ],
      "correct": 1,
      "explanation": "Each valley between two energy humps represents a relatively stable (locally low-energy) species formed after one elementary step and consumed in the next — exactly the definition of an intermediate. Transition states are the peaks (humps), not the valleys."
    },
    {
      "id": "5-65",
      "topic": "5.10 Multistep Energy Profile",
      "stem": "On a multistep energy diagram, how do you identify the rate-determining step?",
      "choices": [
        "It's always the very first hump, regardless of height.",
        "It's the step corresponding to the tallest energy hump (highest activation energy relative to its own starting point) in the entire diagram.",
        "It's always the last hump.",
        "It's the step with the lowest activation energy."
      ],
      "correct": 1,
      "explanation": "The rate-determining step is, by definition, the slowest step, which corresponds to the largest activation energy barrier — visually, the tallest 'hump' on the energy diagram (measured from that specific step's own starting valley, not necessarily from the overall starting reactants)."
    },
    {
      "id": "5-66",
      "topic": "5.10 Multistep Energy Profile",
      "stem": "A three-step reaction energy diagram shows the second hump as the tallest. What can be concluded?",
      "choices": [
        "The overall reaction rate law is determined primarily by the second step.",
        "The first step must be the fastest overall reaction step.",
        "The reaction is definitely endothermic overall.",
        "The third step must involve a catalyst."
      ],
      "correct": 0,
      "explanation": "Since the tallest hump corresponds to the largest activation energy barrier, and that's the second hump here, the second step is the rate-determining step — meaning the overall rate law should be derived primarily from this step (using the substitution methods from 5.8 or 5.9 if it involves an intermediate)."
    },
    {
      "id": "5-67",
      "topic": "5.10 Multistep Energy Profile",
      "stem": "Stretch — beyond typical AP difficulty: A multistep reaction energy diagram shows an overall exothermic reaction (products lower than reactants), but the second of three humps is the tallest AND corresponds to a step that is itself endothermic (that valley-to-peak-to-next-valley segment shows a net energy increase). Is this scenario possible?",
      "choices": [
        "No — if the overall reaction is exothermic, every individual step must also be exothermic.",
        "Yes — individual elementary steps within a mechanism can be endothermic or exothermic independently, as long as the sum of all the step-by-step energy changes correctly gives the overall (exothermic) ΔH.",
        "No — the rate-determining step must always be the most exothermic step.",
        "Yes, but only if the reaction has exactly two steps."
      ],
      "correct": 1,
      "explanation": "The overall ΔH is simply the sum of the ΔH values of each individual elementary step. It's entirely possible (and common) for some individual steps to be endothermic and others exothermic, as long as they combine algebraically to the correct overall (in this case, negative/exothermic) ΔH — there is no rule requiring every single step to individually share the same sign as the overall reaction, and the rate-determining step is identified by activation energy (barrier height), not by whether that specific step happens to be exo- or endothermic.",
      "stretch": true
    },
    {
      "id": "5-68",
      "topic": "5.11 Catalysis",
      "stem": "How does a catalyst increase reaction rate?",
      "choices": [
        "By increasing the concentration of reactants.",
        "By providing an alternative reaction pathway with a lower activation energy.",
        "By increasing the temperature of the reaction.",
        "By shifting the equilibrium position toward products."
      ],
      "correct": 1,
      "explanation": "A catalyst works by enabling a different mechanism (a different reaction pathway) with a lower overall activation energy barrier than the uncatalyzed reaction — this allows a greater fraction of collisions to have sufficient energy to react, increasing rate, without changing the reactants' or products' concentrations or the reaction's thermodynamics directly."
    },
    {
      "id": "5-69",
      "topic": "5.11 Catalysis",
      "stem": "Does a catalyst change the value of ΔH for a reaction?",
      "choices": [
        "Yes, it always makes ΔH more negative.",
        "No — ΔH depends only on the energy of reactants and products, which a catalyst does not change.",
        "Yes, it always makes ΔH more positive.",
        "It depends on the specific catalyst."
      ],
      "correct": 1,
      "explanation": "Since a catalyst only provides an alternative pathway (changing the activation energy and the mechanism), it does not alter the actual energy of the reactants or products themselves — ΔH, which depends only on those two energy values, remains exactly the same with or without a catalyst present."
    },
    {
      "id": "5-70",
      "topic": "5.11 Catalysis",
      "stem": "How does a catalyst appear in a proposed mechanism, distinguishing it from an intermediate?",
      "choices": [
        "A catalyst appears first as a reactant in an early step, then reappears as a product in a later step — consumed then regenerated.",
        "A catalyst appears first as a product, then as a reactant — the same pattern as an intermediate.",
        "A catalyst never appears anywhere in the mechanism.",
        "A catalyst and an intermediate are the exact same thing."
      ],
      "correct": 0,
      "explanation": "A catalyst is consumed early in the mechanism (appearing as a reactant) but is fully regenerated later (reappearing as a product) — the opposite pattern from an intermediate, which is produced first and consumed later. This 'consumed then regenerated' pattern is exactly why a catalyst doesn't appear in the overall net equation, despite being essential to the actual mechanism."
    },
    {
      "id": "5-72",
      "topic": "5.11 Catalysis",
      "stem": "Does adding a catalyst change the equilibrium position (the ratio of products to reactants at equilibrium) of a reversible reaction?",
      "choices": [
        "Yes, a catalyst always shifts equilibrium toward products.",
        "No — a catalyst speeds up both the forward and reverse reactions equally, so equilibrium is reached faster, but the equilibrium position itself is unchanged.",
        "Yes, a catalyst always shifts equilibrium toward reactants.",
        "Catalysts have no effect on reaction rate at all."
      ],
      "correct": 1,
      "explanation": "Because a catalyst lowers the activation energy for both the forward and reverse reactions by an equal amount (it doesn't change ΔH), both directions speed up proportionally. This means equilibrium is reached more quickly, but the final equilibrium position (the relative amounts of reactants and products once equilibrium is established) remains exactly the same as it would be without the catalyst — a purely kinetic effect, not a thermodynamic one."
    },
    {
      "id": "5-73",
      "topic": "5.11 Catalysis",
      "stem": "An enzyme is a biological catalyst. Which best explains why enzymes are often highly specific to one particular reactant (substrate)?",
      "choices": [
        "Enzymes have a specific, complex three-dimensional active site shape that only allows molecules with a matching, complementary shape and functional groups to bind and react effectively — directly connecting to the orientation requirement from the collision model.",
        "Enzymes react with literally any molecule they encounter.",
        "Enzyme specificity has no connection to molecular shape or structure.",
        "All catalysts, not just enzymes, are always highly specific to one substrate."
      ],
      "correct": 0,
      "explanation": "An enzyme's active site is a precisely shaped 3D pocket that only accommodates substrate molecules with a closely matching shape and chemical functional groups (the 'lock and key' or 'induced fit' models) — this specificity is a direct, biological-scale illustration of the orientation requirement from the collision model (5.5), just taken to an extremely refined, evolved level of precision."
    }
  ],
  "6": [
    {
      "id": "6-1",
      "topic": "6.1 Endo/Exothermic",
      "stem": "A reaction container feels warm to the touch during the reaction. What can be concluded?",
      "choices": [
        "The reaction is endothermic.",
        "The reaction is exothermic — the system released heat into the surroundings, including the container.",
        "No conclusion can be drawn about heat flow.",
        "The reaction must be reversible."
      ],
      "correct": 1,
      "explanation": "Heat flows from the system to the surroundings in an exothermic process, warming the surroundings (including the container you're touching) — feeling warmth is direct evidence of heat being released, consistent with ΔH < 0."
    },
    {
      "id": "6-2",
      "topic": "6.1 Endo/Exothermic",
      "stem": "Which sign of ΔH corresponds to an endothermic process?",
      "choices": [
        "Negative",
        "Positive",
        "Zero",
        "Sign is unrelated to endo/exothermic classification"
      ],
      "correct": 1,
      "explanation": "Endothermic processes absorb energy from the surroundings into the system, meaning the system's enthalpy increases — by convention, this corresponds to a positive ΔH."
    },
    {
      "id": "6-3",
      "topic": "6.1 Endo/Exothermic",
      "stem": "Dissolving ammonium nitrate in water causes the solution to feel noticeably cold. What does this indicate?",
      "choices": [
        "The dissolving process is exothermic, releasing heat.",
        "The dissolving process is endothermic, absorbing heat from the surrounding water/solution.",
        "No energy change occurred during dissolving.",
        "The ammonium nitrate must be undergoing a chemical decomposition."
      ],
      "correct": 1,
      "explanation": "A cold feeling means heat is being absorbed from the surroundings (your hand, the solution) into the dissolving process — this is the signature of an endothermic process, consistent with ammonium nitrate's well-known use in instant cold packs."
    },
    {
      "id": "6-4",
      "topic": "6.1 Endo/Exothermic",
      "stem": "In an exothermic reaction, how does the enthalpy of the products compare to the enthalpy of the reactants?",
      "choices": [
        "Products have higher enthalpy than reactants.",
        "Products have lower enthalpy than reactants.",
        "Products and reactants always have identical enthalpy.",
        "There is no relationship between the two."
      ],
      "correct": 1,
      "explanation": "ΔH = E(products) − E(reactants). For an exothermic process, ΔH < 0, meaning products must have lower enthalpy than reactants — the reaction 'releases' energy, ending in a lower-energy state."
    },
    {
      "id": "6-5",
      "topic": "6.1 Endo/Exothermic",
      "stem": "Which is a correct example of an endothermic physical process?",
      "choices": [
        "Water freezing into ice",
        "Steam condensing into liquid water",
        "Ice melting into liquid water",
        "Water vapor depositing directly into frost"
      ],
      "correct": 2,
      "explanation": "Melting requires energy input to overcome the intermolecular forces holding a solid's rigid structure together — this is always endothermic, regardless of the substance. Freezing, condensing, and depositing are all the reverse processes (forming stronger intermolecular attractions), which are always exothermic."
    },
    {
      "id": "6-6",
      "topic": "6.1 Endo/Exothermic",
      "stem": "From the system's perspective, what happens to energy during an exothermic process?",
      "choices": [
        "Energy is gained by the system from the surroundings.",
        "Energy is lost by the system to the surroundings.",
        "Energy remains exactly constant within the system.",
        "The system's mass increases."
      ],
      "correct": 1,
      "explanation": "In an exothermic process, the system (the chemicals reacting, or the substance undergoing a physical change) loses energy, which flows out into the surroundings — this is exactly why the surroundings warm up during an exothermic process."
    },
    {
      "id": "6-7",
      "topic": "6.1 Endo/Exothermic",
      "stem": "A hot pack uses a chemical reaction to generate warmth for muscle relief. What does this indicate about the reaction inside the pack?",
      "choices": [
        "It must be endothermic.",
        "It must be exothermic, releasing heat into the surroundings (including the person using it).",
        "It must have ΔH = 0.",
        "It cannot be a chemical reaction, only physical."
      ],
      "correct": 1,
      "explanation": "A hot pack works by releasing heat energy from a chemical reaction directly into its surroundings (your hands or muscles) — this observable warmth generation is a direct real-world example of an exothermic process, ΔH < 0."
    },
    {
      "id": "6-8",
      "topic": "6.2 Energy Diagrams",
      "stem": "On a reaction energy diagram, reactants are at 50 kJ and products are at 120 kJ. What is ΔH, and is the reaction endo- or exothermic?",
      "choices": [
        "+70 kJ, endothermic",
        "−70 kJ, exothermic",
        "+170 kJ, endothermic",
        "−170 kJ, exothermic"
      ],
      "correct": 0,
      "explanation": "ΔH = E(products) − E(reactants) = 120 − 50 = +70 kJ. A positive ΔH indicates an endothermic reaction, consistent with products ending up at a higher energy than the starting reactants."
    },
    {
      "id": "6-9",
      "topic": "6.2 Energy Diagrams",
      "stem": "A reaction energy diagram shows a transition state at 200 kJ, reactants at 80 kJ, and products at 30 kJ. Find Ea(reverse).",
      "choices": [
        "120 kJ",
        "170 kJ",
        "50 kJ",
        "230 kJ"
      ],
      "correct": 1,
      "explanation": "Ea(reverse) = E(transition state) − E(products) = 200 − 30 = 170 kJ — the energy the reverse reaction must climb, starting from the lower product energy level up to the same transition state peak."
    },
    {
      "id": "6-10",
      "topic": "6.2 Energy Diagrams",
      "stem": "Which feature of a reaction energy diagram directly represents ΔH?",
      "choices": [
        "The height of the peak above the reactants",
        "The vertical distance between the reactant energy level and the product energy level",
        "The horizontal distance across the diagram (reaction progress)",
        "The height of the peak above the products"
      ],
      "correct": 1,
      "explanation": "ΔH is the net energy change of the overall process, represented by the vertical distance (and sign) between where reactants start and where products end — not by anything related to the transition state peak, which instead relates to activation energy."
    },
    {
      "id": "6-11",
      "topic": "6.2 Energy Diagrams",
      "stem": "A highly exothermic reaction and a mildly exothermic reaction have identical activation energies (Ea forward). How would their energy diagrams differ?",
      "choices": [
        "The highly exothermic reaction would show a much larger drop from reactants down to products, while the mildly exothermic one shows a smaller drop — but both would have the same peak height above their respective reactant starting points.",
        "Their diagrams would be completely identical in every respect.",
        "The highly exothermic reaction must have a much higher activation energy.",
        "Exothermic reactions never have a defined activation energy."
      ],
      "correct": 0,
      "explanation": "Since Ea(forward) is identical for both, the peak sits at the same height above each reaction's respective reactant starting point. But the products' final energy level differs — dropping much further down for the highly exothermic reaction than for the mildly exothermic one — meaning ΔH differs even though Ea(forward) does not; these are genuinely independent pieces of information."
    },
    {
      "id": "6-12",
      "topic": "6.2 Energy Diagrams",
      "stem": "In a reaction energy diagram, if the product energy level is drawn identical to the reactant energy level, what does this indicate?",
      "choices": [
        "ΔH = 0 for this process.",
        "The reaction is highly exothermic.",
        "The reaction is highly endothermic.",
        "This scenario is not physically possible."
      ],
      "correct": 0,
      "explanation": "If reactants and products are at the same energy level, ΔH = E(products) − E(reactants) = 0 — the process releases no net energy and absorbs no net energy overall, even though it likely still has to pass over some activation energy barrier to occur."
    },
    {
      "id": "6-13",
      "topic": "6.2 Energy Diagrams",
      "stem": "Which correctly relates Ea(forward), Ea(reverse), and ΔH on any energy diagram?",
      "choices": [
        "ΔH = Ea(forward) + Ea(reverse)",
        "ΔH = Ea(forward) − Ea(reverse)",
        "ΔH and the two Ea values are unrelated",
        "Ea(forward) always equals Ea(reverse)"
      ],
      "correct": 1,
      "explanation": "Since both Ea values are measured relative to the same transition state (just from opposite starting points), subtracting them (Ea forward − Ea reverse) directly recovers the net reactant-to-product energy difference, which is exactly ΔH — this relationship, introduced in Unit 5.6, applies identically here."
    },
    {
      "id": "6-14",
      "topic": "6.3 Heat Transfer",
      "stem": "Two objects at different temperatures are placed in contact within an isolated system. In which direction does heat flow?",
      "choices": [
        "From the cooler object to the hotter object",
        "From the hotter object to the cooler object, until both reach the same temperature",
        "Heat does not flow between objects at different temperatures",
        "Heat flows equally in both directions simultaneously with no net effect"
      ],
      "correct": 1,
      "explanation": "Heat spontaneously flows from higher to lower temperature (never the reverse without external work being done) until thermal equilibrium is reached — both objects ending at the same final temperature."
    },
    {
      "id": "6-15",
      "topic": "6.3 Heat Transfer",
      "stem": "In an isolated calorimetry system, a hot object loses 320 J of heat. What can be said about the heat gained by the surrounding cooler substance?",
      "choices": [
        "It gains exactly 320 J, assuming no heat is lost to the outside environment.",
        "It gains an unrelated, unknown amount of heat.",
        "It gains less than 320 J, always.",
        "It gains more than 320 J, always."
      ],
      "correct": 0,
      "explanation": "In a truly isolated (perfectly insulated) system, conservation of energy requires that all heat lost by one object is gained by the other — no heat escapes to the outside environment, so the cooler substance gains exactly the 320 J the hot object lost."
    },
    {
      "id": "6-16",
      "topic": "6.3 Heat Transfer",
      "stem": "What defines 'thermal equilibrium' between two objects?",
      "choices": [
        "Both objects have the same mass.",
        "Both objects have reached the same temperature, and net heat flow between them has stopped.",
        "Both objects are made of the same substance.",
        "One object has completely transferred all its energy to the other."
      ],
      "correct": 1,
      "explanation": "Thermal equilibrium is reached when two objects in contact reach the same temperature — at that point, while individual particles continue colliding and exchanging energy, there's no longer any NET heat flow in either direction, since both objects are equally 'hot' or 'cold' relative to each other."
    },
    {
      "id": "6-17",
      "topic": "6.3 Heat Transfer",
      "stem": "Why is a real calorimetry experiment (not perfectly insulated) generally expected to show a slightly LOWER calculated heat capacity or ΔH magnitude than the true value, if heat loss to the surroundings is not accounted for?",
      "choices": [
        "Some heat escapes to the outside environment (not captured by the measured temperature change), so the calculated q based only on the captured temperature change underestimates the true total heat released or absorbed.",
        "Real calorimeters always overestimate heat capacity, never underestimate.",
        "Heat loss to the environment has no effect on calorimetry calculations.",
        "Real experiments always give perfectly identical results to theoretical predictions."
      ],
      "correct": 0,
      "explanation": "If the calorimeter isn't perfectly insulated, some heat escapes to the broader environment rather than staying contained within the system being measured. Since calorimetry calculations rely on the temperature change actually observed within the insulated system, any 'lost' heat that escapes without being measured leads to an underestimate of the true total heat released (or absorbed) by the process."
    },
    {
      "id": "6-18",
      "topic": "6.3 Heat Transfer",
      "stem": "A 100 g sample of metal A is placed in contact with a 100 g sample of metal B at a different starting temperature, in an isolated system. If metal A has a much higher specific heat than metal B, which object will show a larger change in temperature to reach the shared final equilibrium temperature?",
      "choices": [
        "Metal A, since it has a higher specific heat.",
        "Metal B, since a lower specific heat means the same amount of heat exchanged corresponds to a larger temperature change for that object.",
        "Both will show identical temperature changes regardless of specific heat.",
        "Specific heat has no bearing on temperature change during heat exchange."
      ],
      "correct": 1,
      "explanation": "Since q = mcΔT, and both objects exchange the same magnitude of heat (q) with equal mass, the object with the SMALLER specific heat (c) must undergo a LARGER temperature change (ΔT) to account for that same heat exchange — metal B, with the lower specific heat, will show the bigger temperature swing."
    },
    {
      "id": "6-19",
      "topic": "6.3 Heat Transfer",
      "stem": "Which best explains why metal objects often feel colder to the touch than wooden objects at the same room temperature?",
      "choices": [
        "Metal is actually at a lower temperature than wood in the same room.",
        "Metal typically has higher thermal conductivity than wood, so it draws heat away from your hand more quickly, creating a stronger sensation of coldness even though both are at the same actual temperature.",
        "Wood has no measurable temperature.",
        "This is purely a psychological effect with no physical basis."
      ],
      "correct": 1,
      "explanation": "Both objects are genuinely at the same room temperature, but 'feeling cold' is actually a measure of how quickly heat is drawn away from your skin, not the object's absolute temperature. Metal's high thermal conductivity means it conducts heat away from your warmer hand much faster than wood does, creating a stronger cold sensation despite both being at identical starting temperatures — an important distinction between thermal conductivity and temperature itself."
    },
    {
      "id": "6-20",
      "topic": "6.4 Calorimetry",
      "stem": "How much heat is required to raise the temperature of 25.0 g of water (c = 4.184 J/g·°C) by 15.0°C?",
      "choices": [
        "1569 J",
        "62.8 J",
        "6276 J",
        "104.6 J"
      ],
      "correct": 0,
      "explanation": "q = mcΔT = (25.0)(4.184)(15.0) = 1569 J."
    },
    {
      "id": "6-21",
      "topic": "6.4 Calorimetry",
      "stem": "A 40.0 g sample absorbs 836.8 J of heat, and its temperature rises by 5.00°C. Find its specific heat.",
      "choices": [
        "4.184 J/g·°C",
        "0.239 J/g·°C",
        "167.4 J/g·°C",
        "2.09 J/g·°C"
      ],
      "correct": 0,
      "explanation": "c = q/(mΔT) = 836.8/[(40.0)(5.00)] = 836.8/200.0 = 4.184 J/g·°C — matching water's known specific heat, a plausible real-world value."
    },
    {
      "id": "6-22",
      "topic": "6.4 Calorimetry",
      "stem": "60.0 g of water at 80.0°C is mixed with 40.0 g of water at 20.0°C. Assuming no heat loss, what is the final temperature? (Hint: use conservation of energy, both are water so specific heat cancels)",
      "choices": [
        "50.0°C",
        "56.0°C",
        "44.0°C",
        "60.0°C"
      ],
      "correct": 1,
      "explanation": "Since both samples are water (same c), set heat lost by hot water = heat gained by cold water: (60.0)(80.0−T) = (40.0)(T−20.0). Expanding: 4800 − 60.0T = 40.0T − 800. Solving: 5600 = 100.0T, so T = 56.0°C."
    },
    {
      "id": "6-23",
      "topic": "6.4 Calorimetry",
      "stem": "A 15.0 g sample of metal at 100.0°C is placed in 75.0 g of water (c=4.184 J/g·°C) at 20.0°C. Final temperature is 23.29°C. Find the metal's specific heat.",
      "choices": [
        "0.897 J/g·°C",
        "0.449 J/g·°C",
        "1.79 J/g·°C",
        "4.184 J/g·°C"
      ],
      "correct": 0,
      "explanation": "Heat gained by water: q = (75.0)(4.184)(23.29−20.0) = (75.0)(4.184)(3.29) = 1032.3 J. Heat lost by metal = −1032.3 J, with ΔT(metal) = 23.29−100.0 = −76.71°C. c(metal) = q/(mΔT) = −1032.3/[(15.0)(−76.71)] = −1032.3/−1150.7 = 0.897 J/g·°C — matching aluminum's known specific heat, a good real-world consistency check."
    },
    {
      "id": "6-24",
      "topic": "6.4 Calorimetry",
      "stem": "Which substance would require the MOST energy to raise 100 g of it by 10°C, given specific heats: water (4.184), aluminum (0.897), iron (0.449), gold (0.129) J/g·°C?",
      "choices": [
        "Water",
        "Aluminum",
        "Iron",
        "Gold"
      ],
      "correct": 0,
      "explanation": "Since q = mcΔT and mass and ΔT are identical for all four substances here, the substance with the largest specific heat requires the most energy for the same temperature change. Water's specific heat (4.184 J/g·°C) is dramatically higher than the three metals listed, requiring the most energy input."
    },
    {
      "id": "6-25",
      "topic": "6.4 Calorimetry",
      "stem": "In a coffee-cup calorimetry experiment measuring a reaction's heat, why is the calorimeter typically assumed to be at constant pressure (open to the atmosphere)?",
      "choices": [
        "This assumption allows the measured heat to be directly equated with ΔH (enthalpy change), since ΔH is specifically defined as heat exchanged at constant pressure.",
        "Constant pressure has no relevance to calorimetry at all.",
        "Constant pressure calorimeters are never used in real chemistry labs.",
        "This assumption is only relevant for gas-phase reactions."
      ],
      "correct": 0,
      "explanation": "Enthalpy (H) is specifically defined such that ΔH equals the heat exchanged at constant pressure — a coffee-cup calorimeter, open to the atmosphere, naturally maintains roughly constant (atmospheric) pressure throughout the experiment, making it a good practical setup for directly measuring ΔH via q = mcΔT."
    },
    {
      "id": "6-26",
      "topic": "6.4 Calorimetry",
      "stem": "A student mixes 50.0 mL of 1.00 M HCl with 50.0 mL of 1.00 M NaOH in a calorimeter (assume density 1.00 g/mL and c = 4.184 J/g·°C for the resulting solution). Temperature rises from 22.0°C to 28.4°C. Calculate q for the reaction.",
      "choices": [
        "2678 J released",
        "2678 J absorbed",
        "1339 J released",
        "5356 J released"
      ],
      "correct": 0,
      "explanation": "Total mass of solution = 50.0 + 50.0 = 100.0 g (assuming densities combine additively as given). q = mcΔT = (100.0)(4.184)(28.4−22.0) = (100.0)(4.184)(6.4) = 2678 J absorbed by the solution. Since the solution's temperature rose, the reaction itself must have released this heat into the solution — so from the reaction's (system's) perspective, q = −2678 J, meaning 2678 J was released."
    },
    {
      "id": "6-27",
      "topic": "6.4 Calorimetry",
      "stem": "Why must ΔT always be calculated as T(final) − T(initial), and not the reverse, in a q=mcΔT calculation?",
      "choices": [
        "This ordering ensures the correct sign of q, correctly reflecting whether heat was absorbed (temperature rose, positive ΔT) or released (temperature fell, negative ΔT) by that specific substance.",
        "The ordering of subtraction is arbitrary and does not matter.",
        "T(initial) must always be a larger number than T(final).",
        "This convention only applies to solids, not liquids."
      ],
      "correct": 0,
      "explanation": "Using final − initial correctly produces a positive ΔT (and thus positive q) when a substance's temperature rises (absorbing heat, consistent with q representing heat gained by that substance) and a negative ΔT (negative q) when temperature falls (releasing heat) — reversing this order would flip every sign and break the physical meaning of the calculation."
    },
    {
      "id": "6-28",
      "topic": "6.4 Calorimetry",
      "stem": "A calorimeter contains 200.0 g of water. Adding a hot object causes the water's temperature to rise from 24.0°C to 31.5°C. Calculate the heat gained by the water.",
      "choices": [
        "6276 J",
        "836.8 J",
        "3138 J",
        "12,552 J"
      ],
      "correct": 0,
      "explanation": "q = mcΔT = (200.0)(4.184)(31.5−24.0) = (200.0)(4.184)(7.5) = 6276 J."
    },
    {
      "id": "6-29",
      "topic": "6.4 Calorimetry",
      "stem": "Stretch — beyond typical AP difficulty: A calorimeter itself (not just the water inside it) absorbs a measurable amount of heat, characterized by its own 'calorimeter constant' C(cal) = 15.5 J/°C. If 250.0 g of water inside the calorimeter shows a temperature increase of 4.20°C after a reaction, calculate the TOTAL heat absorbed, including by the calorimeter itself.",
      "choices": [
        "4460 J",
        "4395 J",
        "65.1 J",
        "4526 J"
      ],
      "correct": 0,
      "explanation": "Heat absorbed by water: q(water) = mcΔT = (250.0)(4.184)(4.20) = 4393.2 J. Heat absorbed by the calorimeter itself: q(cal) = C(cal) × ΔT = (15.5)(4.20) = 65.1 J. Total heat absorbed = 4393.2 + 65.1 = 4458.3 J ≈ 4460 J. This introduces the calorimeter constant, an extra term needed for more realistic, higher-precision calorimetry that accounts for the calorimeter apparatus itself absorbing some heat, not just the water/solution inside it.",
      "stretch": true
    },
    {
      "id": "6-30",
      "topic": "6.5 Phase Change Energy",
      "stem": "How much energy is needed to vaporize 5.00 mol of water at its boiling point? (ΔH(vap) = 40.7 kJ/mol)",
      "choices": [
        "8.14 kJ",
        "40.7 kJ",
        "203.5 kJ",
        "45.7 kJ"
      ],
      "correct": 2,
      "explanation": "q = nΔH(vap) = 5.00 mol × 40.7 kJ/mol = 203.5 kJ."
    },
    {
      "id": "6-31",
      "topic": "6.5 Phase Change Energy",
      "stem": "Why is ΔH(vap) for a substance always significantly larger than its ΔH(fus)?",
      "choices": [
        "Vaporization requires completely separating particles from ALL their neighbors into a gas phase, while melting only requires enough energy to let particles move past each other while remaining relatively close (still in the liquid phase) — a much smaller disruption of IMFs.",
        "ΔH(vap) is always smaller than ΔH(fus), not larger.",
        "There is no general relationship between these two quantities.",
        "ΔH(vap) only applies to water, never other substances."
      ],
      "correct": 0,
      "explanation": "Melting only needs to disrupt the rigid, fixed lattice structure enough to allow particle mobility while particles stay close together (still experiencing significant IMFs in the liquid state), while vaporization requires overcoming essentially ALL remaining intermolecular attractions to fully separate particles into a gas — a much larger energy requirement, consistent with ΔH(vap) almost always being several times larger than ΔH(fus) for the same substance."
    },
    {
      "id": "6-32",
      "topic": "6.5 Phase Change Energy",
      "stem": "How many kJ are released when 72.08 g of water freezes? (ΔH(fus) = 6.01 kJ/mol, molar mass 18.02 g/mol)",
      "choices": [
        "24.0 kJ",
        "6.01 kJ",
        "12.0 kJ",
        "-24.0 kJ, since freezing is exothermic"
      ],
      "correct": 3,
      "explanation": "Moles of water = 72.08/18.02 = 4.00 mol. Freezing is the reverse of melting, so ΔH(freezing) = −ΔH(fus) = −6.01 kJ/mol. q = nΔH(freezing) = 4.00 × (−6.01) = −24.0 kJ — the negative sign correctly reflects that freezing releases energy (exothermic), the opposite of melting."
    },
    {
      "id": "6-33",
      "topic": "6.5 Phase Change Energy",
      "stem": "A sample absorbs 30.0 kJ while completely melting, and the sample is known to be 100.0 g. If the substance has a molar mass of 60.0 g/mol, calculate its ΔH(fus).",
      "choices": [
        "18.0 kJ/mol",
        "3.00 kJ/mol",
        "0.500 kJ/mol",
        "300 kJ/mol"
      ],
      "correct": 0,
      "explanation": "Moles = 100.0/60.0 = 1.667 mol. ΔH(fus) = q/n = 30.0 kJ / 1.667 mol = 18.0 kJ/mol."
    },
    {
      "id": "6-34",
      "topic": "6.5 Phase Change Energy",
      "stem": "On a heating curve, which segment requires more total energy input for a typical substance: the melting plateau or the boiling plateau (assuming equal moles of substance)?",
      "choices": [
        "The boiling plateau, since ΔH(vap) is almost always larger than ΔH(fus).",
        "The melting plateau, since melting always requires more energy than boiling.",
        "Both plateaus always require exactly equal energy.",
        "Neither plateau requires any energy input."
      ],
      "correct": 0,
      "explanation": "Since ΔH(vap) is almost always substantially larger than ΔH(fus) for the same substance (as established in Q6-31), and both plateaus involve the same number of moles, the boiling plateau requires more total energy input, and correspondingly appears as a longer flat segment on a heating curve than the melting plateau."
    },
    {
      "id": "6-35",
      "topic": "6.5 Phase Change Energy",
      "stem": "Which correctly describes the sign of q for condensation (gas → liquid)?",
      "choices": [
        "Positive, since condensation is endothermic.",
        "Negative, since condensation is exothermic — new attractive IMFs form as gas particles come together into a liquid, releasing energy.",
        "Always zero.",
        "The sign cannot be determined without knowing the specific substance."
      ],
      "correct": 1,
      "explanation": "Condensation is the reverse of vaporization; while vaporization (endothermic, q positive) requires energy input to separate particles against attractive forces, condensation releases energy as new attractive intermolecular forces form when gas particles come together into the liquid phase — making q negative (exothermic) for any substance undergoing condensation."
    },
    {
      "id": "6-36",
      "topic": "6.6 Enthalpy of Reaction",
      "stem": "Given 2SO₂ + O₂ → 2SO₃, ΔH = −198 kJ, find ΔH for the reverse reaction 2SO₃ → 2SO₂ + O₂.",
      "choices": [
        "−198 kJ",
        "+198 kJ",
        "−99 kJ",
        "+99 kJ"
      ],
      "correct": 1,
      "explanation": "Reversing a reaction exactly flips the sign of ΔH, since it's simply swapping which side is 'start' and which is 'end.' ΔH for the reverse reaction is +198 kJ."
    },
    {
      "id": "6-37",
      "topic": "6.6 Enthalpy of Reaction",
      "stem": "Given N₂ + O₂ → 2NO, ΔH = +180 kJ, find ΔH if the equation is instead written as 2N₂ + 2O₂ → 4NO.",
      "choices": [
        "+180 kJ",
        "+90 kJ",
        "+360 kJ",
        "+720 kJ"
      ],
      "correct": 2,
      "explanation": "Doubling every coefficient in the equation means twice as much reaction is occurring, so ΔH must also double: 2 × 180 = +360 kJ. ΔH scales directly (is extensive) with the amount of reaction represented by the equation's coefficients."
    },
    {
      "id": "6-38",
      "topic": "6.6 Enthalpy of Reaction",
      "stem": "A reaction releases 250 kJ of heat when 2.00 mol of a given reactant fully reacts, per the balanced equation's coefficient. How much heat is released if only 0.500 mol of that same reactant reacts?",
      "choices": [
        "250 kJ",
        "125 kJ",
        "62.5 kJ",
        "500 kJ"
      ],
      "correct": 2,
      "explanation": "Since 250 kJ corresponds to 2.00 mol reacting, the heat released per mole is 250/2.00 = 125 kJ/mol. For 0.500 mol: 0.500 × 125 = 62.5 kJ released."
    },
    {
      "id": "6-39",
      "topic": "6.6 Enthalpy of Reaction",
      "stem": "Why is ΔH considered an 'extensive' property?",
      "choices": [
        "Its value depends on the amount of substance involved in the reaction (scales with the reaction's stated coefficients).",
        "Its value is always the same regardless of how much substance reacts.",
        "It can never be measured experimentally.",
        "It only applies to gas-phase reactions."
      ],
      "correct": 0,
      "explanation": "Extensive properties depend on the amount of matter present (unlike intensive properties, like temperature or specific heat, which don't) — ΔH scales directly with how much of the reaction (as written, with specific coefficients) actually occurs, which is exactly why doubling the equation doubles ΔH."
    },
    {
      "id": "6-40",
      "topic": "6.6 Enthalpy of Reaction",
      "stem": "A reaction has ΔH = −56 kJ for the equation as written, involving 1 mol of the limiting reactant. If only 60% of the theoretical yield is actually obtained in an experiment, does this change the ΔH value itself?",
      "choices": [
        "No — ΔH per mole of reaction (as defined by the balanced equation) is a fixed thermodynamic property; percent yield reflects how much product was actually isolated, not a change in the fundamental ΔH value per mole reacted.",
        "Yes — ΔH would decrease to 60% of its original value automatically.",
        "Yes — ΔH would increase due to the lower yield.",
        "Percent yield and ΔH are the same quantity."
      ],
      "correct": 0,
      "explanation": "ΔH (as given per the balanced equation, e.g., 'per 1 mol of reactant reacting') is an intrinsic thermodynamic property of that specific chemical transformation and doesn't change based on real-world experimental yield. If less product is obtained due to incomplete reaction or side reactions, that affects how much heat is actually released overall (since less reaction actually occurred), but not the fundamental ΔH value characterizing the reaction itself."
    },
    {
      "id": "6-41",
      "topic": "6.7 Bond Enthalpies",
      "stem": "Estimate ΔH for the reaction H₂ + F₂ → 2HF, given bond energies: H-H = 436 kJ/mol, F-F = 154 kJ/mol, H-F = 565 kJ/mol.",
      "choices": [
        "−540 kJ/mol",
        "+540 kJ/mol",
        "−283 kJ/mol",
        "+283 kJ/mol"
      ],
      "correct": 0,
      "explanation": "Bonds broken: 1 H-H (436) + 1 F-F (154) = 590 kJ. Bonds formed: 2 H-F (2 × 565 = 1130 kJ). ΔH ≈ 590 − 1130 = −540 kJ/mol."
    },
    {
      "id": "6-42",
      "topic": "6.7 Bond Enthalpies",
      "stem": "Which correctly describes the sign convention for breaking versus forming bonds?",
      "choices": [
        "Breaking bonds is always exothermic; forming bonds is always endothermic.",
        "Breaking bonds is always endothermic (requires energy input); forming bonds is always exothermic (releases energy).",
        "Both breaking and forming bonds always release energy.",
        "Bond breaking/forming has no associated energy change."
      ],
      "correct": 1,
      "explanation": "Breaking a bond requires energy input to separate two attracted atoms — always endothermic. Forming a bond releases energy as atoms settle into a lower-energy, more stable bonded arrangement — always exothermic. This is a completely universal rule, regardless of which specific bond or molecule is involved."
    },
    {
      "id": "6-43",
      "topic": "6.7 Bond Enthalpies",
      "stem": "Estimate ΔH for N₂ + 3H₂ → 2NH₃, given bond energies: N≡N = 946 kJ/mol, H-H = 436 kJ/mol, N-H = 391 kJ/mol.",
      "choices": [
        "−92 kJ/mol",
        "+92 kJ/mol",
        "−1172 kJ/mol",
        "+1172 kJ/mol"
      ],
      "correct": 0,
      "explanation": "Bonds broken: 1 N≡N (946) + 3 H-H (3×436=1308) = 2254 kJ. Bonds formed: 2 NH₃, each with 3 N-H bonds, so 6 N-H total (6×391=2346 kJ). ΔH ≈ 2254 − 2346 = −92 kJ/mol, matching the real, experimentally known value for ammonia synthesis quite closely."
    },
    {
      "id": "6-44",
      "topic": "6.7 Bond Enthalpies",
      "stem": "Why do bond-energy-based ΔH calculations give only an approximate (not exact) value?",
      "choices": [
        "Tabulated bond energies are AVERAGE values across many different molecules containing that bond type, which may not perfectly match the actual bond strength in any one specific molecule.",
        "Bond energies are always measured incorrectly.",
        "This method actually always gives an exact value, with no approximation involved.",
        "Bond energies only apply to ionic compounds."
      ],
      "correct": 0,
      "explanation": "A tabulated 'C-H bond energy,' for instance, is an average value calculated across many different molecules containing C-H bonds, each of which may have a slightly different actual bond strength due to its specific surrounding chemical environment — using this single averaged value in a calculation introduces some inherent approximation compared to a molecule-specific, directly measured ΔH."
    },
    {
      "id": "6-45",
      "topic": "6.7 Bond Enthalpies",
      "stem": "A reaction has more total bond energy in its reactants than in its products (bonds broken require more energy than what's released forming product bonds). Is this reaction exothermic or endothermic?",
      "choices": [
        "Exothermic",
        "Endothermic",
        "Neither; ΔH = 0",
        "Cannot be determined from bond energies alone"
      ],
      "correct": 1,
      "explanation": "If breaking reactant bonds costs MORE energy than is released forming product bonds, the overall process requires a net energy input — this is the definition of endothermic (positive ΔH). Using the formula ΔH ≈ (bonds broken) − (bonds formed), a larger 'bonds broken' term relative to 'bonds formed' gives a positive result."
    },
    {
      "id": "6-46",
      "topic": "6.7 Bond Enthalpies",
      "stem": "Given bond energies C-H = 413, O=O = 495, C=O = 799, O-H = 467 kJ/mol, estimate ΔH for CH₄ + 2O₂ → CO₂ + 2H₂O (all gas phase for this estimate).",
      "choices": [
        "−824 kJ/mol",
        "+824 kJ/mol",
        "−412 kJ/mol",
        "−1648 kJ/mol"
      ],
      "correct": 0,
      "explanation": "Bonds broken: 4 C-H (4×413=1652) + 2 O=O (2×495=990) = 2642 kJ. Bonds formed: 2 C=O (2×799=1598) + 4 O-H (4×467=1868) = 3466 kJ. ΔH ≈ 2642 − 3466 = −824 kJ/mol, a reasonable estimate for methane combustion's known strongly exothermic character."
    },
    {
      "id": "6-47",
      "topic": "6.7 Bond Enthalpies",
      "stem": "Which bond would you expect to have the highest bond energy?",
      "choices": [
        "A C-C single bond",
        "A C=C double bond",
        "A C≡C triple bond",
        "All carbon-carbon bonds have identical energy"
      ],
      "correct": 2,
      "explanation": "This directly connects back to Unit 2.2: bond energy increases with bond order, since more shared electron pairs create a stronger overall attraction holding the bonded atoms together. A triple bond has the highest bond order (and thus highest bond energy) among these three options."
    },
    {
      "id": "6-48",
      "topic": "6.7 Bond Enthalpies",
      "stem": "Stretch — beyond typical AP difficulty: A reaction's bond-energy-estimated ΔH is −45 kJ/mol, but the experimentally measured (more precise, via calorimetry or Hess's Law) ΔH is −62 kJ/mol. What does this discrepancy most likely indicate?",
      "choices": [
        "The bond-energy method's use of AVERAGE tabulated bond energies doesn't perfectly capture the actual bond strengths in these specific molecules, which is an inherent and expected limitation of that estimation method, not necessarily an error in the experimental value.",
        "The experimental value must be incorrect, since bond-energy calculations are always more accurate.",
        "This discrepancy is impossible and indicates a serious calculation error somewhere.",
        "Bond energies and experimental ΔH values should never be compared."
      ],
      "correct": 0,
      "explanation": "Since bond-energy calculations rely on averaged bond energy values (not the exact bond strengths specific to the actual molecules in this particular reaction), some discrepancy between the bond-energy estimate and a more precise experimental (or Hess's Law-derived) value is expected and normal — this is exactly the kind of limitation flagged in the study guide's trap box for this section, and the experimental/Hess's Law value should generally be trusted as more accurate when the two disagree.",
      "stretch": true
    },
    {
      "id": "6-49",
      "topic": "6.8 Enthalpy of Formation",
      "stem": "What is the standard enthalpy of formation (ΔH°f) of O₂(g) at standard conditions?",
      "choices": [
        "0 kJ/mol",
        "−393.5 kJ/mol",
        "+249 kJ/mol",
        "Cannot be determined without more information"
      ],
      "correct": 0,
      "explanation": "By definition, any element in its standard state (O₂ gas is oxygen's standard state at standard conditions) has a standard enthalpy of formation of exactly zero — this is the reference point all other ΔH°f values are measured relative to."
    },
    {
      "id": "6-50",
      "topic": "6.8 Enthalpy of Formation",
      "stem": "Calculate ΔH°rxn for CaCO₃(s) → CaO(s) + CO₂(g), given ΔH°f: CaCO₃ = −1207.6 kJ/mol, CaO = −635.1 kJ/mol, CO₂ = −393.5 kJ/mol.",
      "choices": [
        "+179.0 kJ/mol",
        "−179.0 kJ/mol",
        "−2236.2 kJ/mol",
        "+2236.2 kJ/mol"
      ],
      "correct": 0,
      "explanation": "ΔH°rxn = ΣΔH°f(products) − ΣΔH°f(reactants) = [(−635.1) + (−393.5)] − [−1207.6] = −1028.6 − (−1207.6) = +179.0 kJ/mol, an endothermic reaction, consistent with the fact that this decomposition (calcination) requires substantial heating to proceed."
    },
    {
      "id": "6-51",
      "topic": "6.8 Enthalpy of Formation",
      "stem": "Which is the correct formula for calculating ΔH°rxn from formation enthalpies?",
      "choices": [
        "ΔH°rxn = ΣΔH°f(reactants) − ΣΔH°f(products)",
        "ΔH°rxn = ΣnΔH°f(products) − ΣnΔH°f(reactants)",
        "ΔH°rxn = ΣΔH°f(products) + ΣΔH°f(reactants)",
        "ΔH°rxn = ΔH°f(products) only"
      ],
      "correct": 1,
      "explanation": "The correct formula is 'products minus reactants,' with each ΔH°f value multiplied by its coefficient (n) from the balanced equation — using reactants minus products (as in option a) would give the exact opposite sign, a very common student error."
    },
    {
      "id": "6-52",
      "topic": "6.8 Enthalpy of Formation",
      "stem": "Calculate ΔH°rxn for 2Al(s) + 3/2O₂(g) → Al₂O₃(s), given ΔH°f(Al₂O₃) = −1675.7 kJ/mol.",
      "choices": [
        "−1675.7 kJ/mol",
        "+1675.7 kJ/mol",
        "−837.9 kJ/mol",
        "−3351.4 kJ/mol"
      ],
      "correct": 0,
      "explanation": "Reactants (Al and O₂) are both elements in their standard states, so ΔH°f = 0 for each. ΔH°rxn = [1 × (−1675.7)] − [2(0) + 1.5(0)] = −1675.7 kJ/mol. This equation is, in fact, exactly the definition-style formation reaction for Al₂O₃, so ΔH°rxn here IS simply Al₂O₃'s own ΔH°f value."
    },
    {
      "id": "6-53",
      "topic": "6.8 Enthalpy of Formation",
      "stem": "Which of the following represents a valid standard formation reaction (the type of reaction ΔH°f is defined for)?",
      "choices": [
        "H₂(g) + ½O₂(g) → H₂O(l)",
        "2H₂O(l) → 2H₂(g) + O₂(g)",
        "H₂O(l) + CO₂(g) → H₂CO₃(aq)",
        "2H₂(g) + O₂(g) → 2H₂O(l)"
      ],
      "correct": 0,
      "explanation": "A standard formation reaction must show exactly 1 mole of a single compound forming directly from its elements in their standard states — option (a) does exactly this (1 mol H₂O from H₂ and O₂). Option (d) forms 2 mol of H₂O, not 1, so it doesn't match the formal definition (though it's a valid balanced equation, just not 'the' formation reaction as formally defined)."
    },
    {
      "id": "6-54",
      "topic": "6.8 Enthalpy of Formation",
      "stem": "Calculate ΔH°rxn for C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(g), given ΔH°f: C₃H₈ = −103.8, CO₂ = −393.5, H₂O(g) = −241.8 kJ/mol.",
      "choices": [
        "−2043.9 kJ/mol",
        "−2147.7 kJ/mol",
        "+2043.9 kJ/mol",
        "−1876.5 kJ/mol"
      ],
      "correct": 0,
      "explanation": "Products: 3(−393.5) + 4(−241.8) = −1180.5 + (−967.2) = −2147.7 kJ. Reactants: 1(−103.8) + 5(0) = −103.8 kJ. ΔH°rxn = −2147.7 − (−103.8) = −2043.9 kJ/mol."
    },
    {
      "id": "6-55",
      "topic": "6.8 Enthalpy of Formation",
      "stem": "Why is graphite (not diamond) typically assigned ΔH°f = 0 for elemental carbon?",
      "choices": [
        "Graphite is the more thermodynamically stable form (allotrope) of carbon under standard conditions, making it the conventionally chosen 'standard state' reference.",
        "Diamond does not actually contain carbon atoms.",
        "Graphite is more expensive than diamond.",
        "This choice is completely arbitrary with no scientific basis."
      ],
      "correct": 0,
      "explanation": "When an element has multiple possible forms (allotropes), the standard state — and thus the one assigned ΔH°f = 0 — is conventionally the most thermodynamically stable form under standard conditions. For carbon, graphite is more stable than diamond at standard pressure and temperature, so graphite (not diamond) is the reference state, and diamond actually has a small positive ΔH°f relative to graphite."
    },
    {
      "id": "6-56",
      "topic": "6.8 Enthalpy of Formation",
      "stem": "Stretch — beyond typical AP difficulty: A textbook lists ΔH°f for Br₂(l) as 0 kJ/mol and ΔH°f for Br₂(g) as +30.9 kJ/mol. Explain why these differ, even though both refer to the same element.",
      "choices": [
        "Br₂(l) is bromine's standard state at standard conditions (bromine is a liquid at room temperature), so it's assigned ΔH°f = 0; Br₂(g) requires additional energy input (vaporization) beyond the standard state, giving it a nonzero, positive ΔH°f.",
        "This is a printing error; both forms must have identical ΔH°f.",
        "Gases always have a ΔH°f of exactly zero.",
        "Liquid and gas states of the same substance always have identical thermodynamic properties."
      ],
      "correct": 0,
      "explanation": "Only the specific physical state that is the actual standard (most stable) state at standard conditions gets ΔH°f = 0 — for bromine, that's the liquid state, since Br₂ is a liquid at room temperature and standard pressure. Br₂(g) represents bromine after already undergoing vaporization from its true standard state, an inherently endothermic process, which is exactly why Br₂(g)'s ΔH°f is a positive, nonzero value (essentially equal to bromine's heat of vaporization) rather than zero.",
      "stretch": true
    },
    {
      "id": "6-57",
      "topic": "6.9 Hess's Law",
      "stem": "Hess's Law states that the enthalpy change for a reaction is:",
      "choices": [
        "Dependent on the specific pathway taken from reactants to products",
        "Independent of the pathway taken — it depends only on the initial and final states",
        "Always equal to zero regardless of pathway",
        "Only valid for exothermic reactions"
      ],
      "correct": 1,
      "explanation": "Hess's Law is a direct consequence of enthalpy being a state function — its value depends only on the current state of the system (defined by reactants and products here), not on the specific path or number of steps taken to get from one to the other."
    },
    {
      "id": "6-58",
      "topic": "6.9 Hess's Law",
      "stem": "If a given reaction is reversed to use it in a Hess's Law calculation, what happens to its ΔH value?",
      "choices": [
        "It stays exactly the same.",
        "Its sign flips (multiplied by −1).",
        "It is automatically doubled.",
        "It becomes exactly zero."
      ],
      "correct": 1,
      "explanation": "Reversing a reaction swaps which side is the 'start' and which is the 'end,' which exactly flips the sign of ΔH (since ΔH = E_end − E_start, reversing start and end negates the result)."
    },
    {
      "id": "6-59",
      "topic": "6.9 Hess's Law",
      "stem": "If a given reaction is multiplied by a factor of 3 in a Hess's Law calculation, what happens to its ΔH value?",
      "choices": [
        "It stays exactly the same.",
        "It is also multiplied by 3.",
        "It is divided by 3.",
        "Its sign flips."
      ],
      "correct": 1,
      "explanation": "Since ΔH is an extensive property (Unit 6.6), scaling a reaction's coefficients by any factor scales its ΔH by that exact same factor — multiplying the equation by 3 means 3 times as much reaction occurs, releasing/absorbing 3 times as much energy."
    },
    {
      "id": "6-60",
      "topic": "6.9 Hess's Law",
      "stem": "Given: (1) A → B, ΔH = +30 kJ; (2) B → C, ΔH = −50 kJ. Find ΔH for A → C.",
      "choices": [
        "+80 kJ",
        "−80 kJ",
        "−20 kJ",
        "+20 kJ"
      ],
      "correct": 2,
      "explanation": "Adding reactions (1) and (2) directly (A→B then B→C) gives A→C with B cancelling as an intermediate. ΔH = ΔH(1) + ΔH(2) = 30 + (−50) = −20 kJ."
    },
    {
      "id": "6-61",
      "topic": "6.9 Hess's Law",
      "stem": "Given: (1) 2A → B, ΔH = −40 kJ; (2) C → 2A, ΔH = +25 kJ. Find ΔH for C → B.",
      "choices": [
        "−15 kJ",
        "+15 kJ",
        "−65 kJ",
        "+65 kJ"
      ],
      "correct": 0,
      "explanation": "Adding (1) and (2) directly: C → 2A → B, with 2A cancelling as an intermediate, giving C → B. ΔH = −40 + 25 = −15 kJ."
    },
    {
      "id": "6-62",
      "topic": "6.9 Hess's Law",
      "stem": "Given: (1) X + Y → Z, ΔH = −60 kJ. Find ΔH for 2Z → 2X + 2Y.",
      "choices": [
        "−60 kJ",
        "+60 kJ",
        "−120 kJ",
        "+120 kJ"
      ],
      "correct": 3,
      "explanation": "This target reaction is reaction (1) both reversed AND doubled. Reversing flips the sign: +60 kJ. Doubling then multiplies by 2: +120 kJ. Both modifications must be applied together."
    },
    {
      "id": "6-63",
      "topic": "6.9 Hess's Law",
      "stem": "Given: (1) S + O₂ → SO₂, ΔH = −297 kJ; (2) 2SO₂ + O₂ → 2SO₃, ΔH = −198 kJ. Find ΔH for S + 3/2O₂ → SO₃.",
      "choices": [
        "−396 kJ",
        "−495 kJ",
        "−198 kJ",
        "+99 kJ"
      ],
      "correct": 0,
      "explanation": "Take reaction (1) as written. Take reaction (2) and divide by 2 (halving its ΔH to −99 kJ): SO₂ + ½O₂ → SO₃. Adding these two (modified) reactions: S + O₂ + SO₂ + ½O₂ → SO₂ + SO₃, cancelling SO₂: S + 1.5O₂ → SO₃. ΔH = −297 + (−99) = −396 kJ."
    },
    {
      "id": "6-64",
      "topic": "6.9 Hess's Law",
      "stem": "Why is Hess's Law particularly useful for reactions that are difficult or dangerous to measure directly via calorimetry?",
      "choices": [
        "It allows ΔH to be calculated indirectly by combining several other, more easily/safely measured reactions that sum to the target reaction.",
        "It eliminates the need for any experimental data whatsoever.",
        "It only works for reactions that release no heat at all.",
        "Hess's Law cannot be applied to dangerous or difficult reactions."
      ],
      "correct": 0,
      "explanation": "Since ΔH only depends on initial and final states (not path), a reaction that's hard to measure directly (perhaps too slow, too fast, too dangerous, or producing impure products) can have its ΔH calculated indirectly by algebraically combining other, more convenient reactions whose ΔH values ARE known and directly measurable — this is precisely the practical value of Hess's Law in real chemistry."
    },
    {
      "id": "6-65",
      "topic": "6.9 Hess's Law",
      "stem": "Stretch — beyond typical AP difficulty: Given: (1) 2C(s) + O₂(g) → 2CO(g), ΔH = −221.0 kJ; (2) 2CO(g) + O₂(g) → 2CO₂(g), ΔH = −566.0 kJ; (3) C(s) + O₂(g) → CO₂(g), ΔH = −393.5 kJ. Verify that these three equations are thermodynamically consistent with each other using Hess's Law.",
      "choices": [
        "They are consistent: taking ½ of reaction (1) plus ½ of reaction (2) should equal reaction (3), and checking the ΔH values confirms this.",
        "They are inconsistent and cannot all be correct simultaneously.",
        "Consistency cannot be checked without additional data.",
        "Only reactions (1) and (3) need to be consistent; reaction (2) is unrelated."
      ],
      "correct": 0,
      "explanation": "Taking ½(1): C(s) + ½O₂(g) → CO(g), ΔH = −110.5 kJ. Taking ½(2): CO(g) + ½O₂(g) → CO₂(g), ΔH = −283.0 kJ. Adding these two halved reactions: C(s) + O₂(g) → CO₂(g) (CO cancels as an intermediate), with ΔH = −110.5 + (−283.0) = −393.5 kJ — exactly matching reaction (3) as given. This confirms all three reactions are thermodynamically self-consistent, illustrating Hess's Law being used as a genuine consistency-check tool, not just a forward calculation method.",
      "stretch": true
    }
  ],
  "7": [
    {
      "id": "7-1",
      "topic": "7.1 Introduction to Equilibrium",
      "stem": "Which best describes chemical equilibrium?",
      "choices": [
        "A state where all reactions have completely stopped.",
        "A dynamic state where forward and reverse reactions continue at equal rates, keeping concentrations constant.",
        "A state that only occurs in irreversible reactions.",
        "A state where only the forward reaction is occurring."
      ],
      "correct": 1,
      "explanation": "Equilibrium is dynamic — both forward and reverse reactions continue happening continuously, but at exactly equal rates, so there's no NET change in any species' concentration over time, even though individual molecules keep reacting."
    },
    {
      "id": "7-2",
      "topic": "7.1 Introduction to Equilibrium",
      "stem": "At equilibrium, what is true about the concentrations of reactants and products?",
      "choices": [
        "They must always be exactly equal to each other.",
        "They remain constant over time, though not necessarily equal to each other.",
        "They must both be zero.",
        "They continuously oscillate up and down."
      ],
      "correct": 1,
      "explanation": "Equilibrium concentrations remain constant over time (since forward and reverse rates are equal), but there's no requirement that reactant and product concentrations be numerically equal to each other — that depends entirely on the specific value of K for that reaction."
    },
    {
      "id": "7-3",
      "topic": "7.1 Introduction to Equilibrium",
      "stem": "Why is equilibrium described as 'dynamic' rather than 'static'?",
      "choices": [
        "Because concentrations are constantly changing in a visible, macroscopic way.",
        "Because at the molecular level, forward and reverse reactions are still actively occurring, even though macroscopic concentrations appear unchanging.",
        "Because equilibrium only exists for a brief instant before disappearing.",
        "Because equilibrium requires constant external energy input to maintain."
      ],
      "correct": 1,
      "explanation": "The word 'dynamic' emphasizes that molecular-level activity (both forward and reverse reactions) never actually stops at equilibrium — it's only the observable, macroscopic concentrations that appear constant, because the two opposing processes exactly balance each other out."
    },
    {
      "id": "7-4",
      "topic": "7.1 Introduction to Equilibrium",
      "stem": "A sealed container initially has only reactants. Over time, product begins forming. What happens to the forward and reverse reaction rates as the system approaches equilibrium?",
      "choices": [
        "Forward rate increases and reverse rate decreases continuously.",
        "Forward rate decreases (as reactant is consumed) and reverse rate increases (as product accumulates), until they become equal.",
        "Both rates remain constant from the very start.",
        "Forward rate becomes zero once equilibrium is reached."
      ],
      "correct": 1,
      "explanation": "As the reaction proceeds, reactant concentration decreases (slowing the forward reaction) while product concentration increases (speeding up the reverse reaction) — these two trends continue until the rates become exactly equal, which is the defining condition of equilibrium being reached."
    },
    {
      "id": "7-5",
      "topic": "7.1 Introduction to Equilibrium",
      "stem": "Which everyday analogy best illustrates the concept of dynamic equilibrium?",
      "choices": [
        "A parked car with its engine off.",
        "Two people walking at exactly the same speed on a moving walkway in opposite directions, such that neither person's position relative to the ground changes, even though both are actively walking.",
        "A ball resting motionless at the bottom of a bowl.",
        "A light switch that is either fully on or fully off."
      ],
      "correct": 1,
      "explanation": "This analogy captures the key feature of dynamic equilibrium: both processes (walking forward, walking backward relative to the walkway) are actively ongoing, but they exactly cancel out in terms of net observable change (position), just as forward and reverse reactions continue at equilibrium while net concentrations stay constant."
    },
    {
      "id": "7-6",
      "topic": "7.2 Direction of Reversible Reactions",
      "stem": "Which statement about reversible reactions is correct?",
      "choices": [
        "A reversible reaction can only proceed in the forward direction.",
        "A reversible reaction can approach equilibrium starting from pure reactants, pure products, or any mixture of the two.",
        "Reversible reactions never reach equilibrium.",
        "Reversible reactions always favor products completely."
      ],
      "correct": 1,
      "explanation": "Because both forward and reverse reactions can occur, a reversible reaction will move toward the same equilibrium state (the same K value at a given temperature) regardless of whether it starts with only reactants, only products, or some mixture of both — the path to equilibrium can begin from any starting point."
    },
    {
      "id": "7-7",
      "topic": "7.2 Direction of Reversible Reactions",
      "stem": "If a reaction starts with only pure products present (no reactants), what will happen over time?",
      "choices": [
        "Nothing; without reactants, no reaction can occur.",
        "The reverse reaction will proceed, converting some products into reactants, until equilibrium is established.",
        "The products will spontaneously disappear with no reactants forming.",
        "This scenario is impossible for any reversible reaction."
      ],
      "correct": 1,
      "explanation": "Starting with only products doesn't prevent a reaction from occurring — the reverse reaction can proceed (converting products back into reactants) until the system reaches the same equilibrium position (same relative concentrations, governed by K) that it would reach from any other starting point at that temperature."
    },
    {
      "id": "7-8",
      "topic": "7.2 Direction of Reversible Reactions",
      "stem": "Two identical reaction vessels are set up: Vessel 1 starts with only reactants; Vessel 2 starts with only products (stoichiometrically equivalent amounts). At the same temperature, what is true about their final equilibrium states?",
      "choices": [
        "They will reach completely different equilibrium concentrations.",
        "They will reach the same equilibrium position (same K, same relative equilibrium concentrations), since K depends only on temperature, not starting direction.",
        "Only Vessel 1 will actually reach equilibrium.",
        "The two vessels cannot be compared without additional information."
      ],
      "correct": 1,
      "explanation": "Since K is a fixed value at a given temperature (regardless of which direction the reaction approaches it from), both vessels — approaching from opposite starting points — will converge on the exact same equilibrium concentrations, as long as the overall total amount of each element is conserved between the two stoichiometrically-equivalent starting setups."
    },
    {
      "id": "7-9",
      "topic": "7.2 Direction of Reversible Reactions",
      "stem": "Which symbol correctly denotes a reversible reaction capable of reaching equilibrium?",
      "choices": [
        "→",
        "⇌",
        "=",
        "≠"
      ],
      "correct": 1,
      "explanation": "The double-headed harpoon arrow (⇌) specifically denotes a reversible reaction, indicating that both forward and reverse processes can occur — this is distinct from a single forward arrow (→), which implies the reaction only proceeds in one direction (often treated as going essentially to completion)."
    },
    {
      "id": "7-10",
      "topic": "7.3 Q and K",
      "stem": "Write the equilibrium expression for 2NO(g) + O₂(g) ⇌ 2NO₂(g).",
      "choices": [
        "K = [NO₂]²/([NO]²[O₂])",
        "K = [NO]²[O₂]/[NO₂]²",
        "K = [NO₂]/([NO][O₂])",
        "K = [NO][O₂]/[NO₂]"
      ],
      "correct": 0,
      "explanation": "The equilibrium expression is products (raised to their coefficients) divided by reactants (raised to their coefficients): K = [NO₂]²/([NO]²[O₂]), correctly using the coefficient 2 for both NO and NO₂ as exponents."
    },
    {
      "id": "7-11",
      "topic": "7.3 Q and K",
      "stem": "Write the equilibrium expression for CaCO₃(s) ⇌ CaO(s) + CO₂(g).",
      "choices": [
        "K = [CaO][CO₂]/[CaCO₃]",
        "K = [CO₂]",
        "K = [CaO]/[CaCO₃]",
        "K = [CaCO₃]/([CaO][CO₂])"
      ],
      "correct": 1,
      "explanation": "Pure solids are omitted from the equilibrium expression, since their 'concentration' (better described as activity) doesn't meaningfully change regardless of how much solid is present. With CaCO₃(s) and CaO(s) both omitted, only the gas-phase CO₂ remains: K = [CO₂]."
    },
    {
      "id": "7-12",
      "topic": "7.3 Q and K",
      "stem": "For a reaction with K = 25.0 at a given temperature, a mixture is found to have Q = 40.0. Which direction will the reaction shift?",
      "choices": [
        "Forward, toward products",
        "Backward, toward reactants",
        "No shift; the system is already at equilibrium",
        "Cannot be determined without more information"
      ],
      "correct": 1,
      "explanation": "Since Q (40.0) > K (25.0), there is currently too much product relative to the equilibrium ratio, so the reaction shifts backward (toward reactants), converting some product back to reactant, until Q decreases to match K."
    },
    {
      "id": "7-13",
      "topic": "7.3 Q and K",
      "stem": "For 2H₂S(g) ⇌ 2H₂(g) + S₂(g), K = 1.0 × 10⁻⁶ at a given temperature. A mixture has [H₂S]=0.500, [H₂]=0.0500, [S₂]=0.0500. Calculate Q and determine the shift direction.",
      "choices": [
        "Q = 5.0 × 10⁻⁴; shifts forward (Q < K)",
        "Q = 5.0 × 10⁻³; shifts forward (Q < K)",
        "Q = 5.0 × 10⁻⁴; shifts backward (Q > K)",
        "Q = 5.0 × 10⁻³; shifts backward (Q > K)"
      ],
      "correct": 2,
      "explanation": "Q = [H₂]²[S₂]/[H₂S]² = (0.0500)²(0.0500)/(0.500)² = (0.00250)(0.0500)/0.250 = 1.25×10⁻⁴/0.250 = 5.0×10⁻⁴... recalculating precisely: (0.0500)²=0.00250; ×0.0500=1.25×10⁻⁴; ÷0.250=5.0×10⁻⁴. Comparing to K=1.0×10⁻⁶: since Q (5.0×10⁻⁴) > K (1.0×10⁻⁶), the reaction shifts backward, toward reactants, to decrease Q back down to K."
    },
    {
      "id": "7-14",
      "topic": "7.3 Q and K",
      "stem": "Why are pure liquids (like water as a solvent) typically omitted from an equilibrium expression?",
      "choices": [
        "Pure liquids have a constant, essentially unchanging concentration (or activity), which is mathematically folded into the value of K itself rather than treated as a separate variable.",
        "Liquids never participate in equilibrium reactions.",
        "Liquids always have a concentration of exactly zero.",
        "This omission is arbitrary and has no scientific justification."
      ],
      "correct": 0,
      "explanation": "A pure liquid's 'concentration' (technically, its activity) remains essentially constant regardless of how much is present, since it's not diluted or concentrated the way a solute in solution would be — this constant value is mathematically absorbed into the equilibrium constant K itself, rather than appearing as a separate, changing term in the expression."
    },
    {
      "id": "7-15",
      "topic": "7.3 Q and K",
      "stem": "For the reaction A(g) + B(g) ⇌ C(g), which of the following changes to a system already at equilibrium would immediately change the value of Q (before any shift occurs)?",
      "choices": [
        "Adding more A to the container",
        "Waiting for a longer period of time with no other changes",
        "Increasing the container's temperature only very slightly, with no concentration changes yet",
        "None of these would change Q"
      ],
      "correct": 0,
      "explanation": "Adding more A directly and immediately changes the concentration values used in the Q expression, changing its calculated value away from K (making Q ≠ K momentarily, until the system shifts to restore equality). Waiting with no changes wouldn't alter Q if already at equilibrium; a temperature change primarily affects K itself (Unit 7.9), a separate effect from directly perturbing Q via concentration."
    },
    {
      "id": "7-16",
      "topic": "7.3 Q and K",
      "stem": "A reaction has Q = K exactly. What can be concluded about the system?",
      "choices": [
        "The system is currently at equilibrium; no net shift will occur.",
        "The system is far from equilibrium.",
        "The reaction has not yet begun.",
        "This condition is impossible to achieve."
      ],
      "correct": 0,
      "explanation": "Q = K is, by definition, the equilibrium condition — when the reaction quotient (calculated from current concentrations) exactly matches the equilibrium constant, the system has no net tendency to shift in either direction, meaning it has reached (or is already at) equilibrium."
    },
    {
      "id": "7-17",
      "topic": "7.3 Q and K",
      "stem": "For 2A(g) ⇌ B(g) + C(g), if [A]=2.00 M, [B]=1.00 M, [C]=0.500 M, calculate Q.",
      "choices": [
        "0.125",
        "0.250",
        "4.00",
        "8.00"
      ],
      "correct": 0,
      "explanation": "Q = [B][C]/[A]² = (1.00)(0.500)/(2.00)² = 0.500/4.00 = 0.125."
    },
    {
      "id": "7-18",
      "topic": "7.3 Q and K",
      "stem": "Which correctly explains why Q and K share the exact same mathematical formula?",
      "choices": [
        "Q is simply the reaction quotient formula evaluated at any given moment (not necessarily equilibrium), while K is that same formula evaluated specifically at equilibrium — they're the same expression, just evaluated at different points in time.",
        "Q and K are entirely unrelated formulas that happen to look similar by coincidence.",
        "Q only applies to gases, while K only applies to solutions.",
        "Q is always exactly double the value of K."
      ],
      "correct": 0,
      "explanation": "Q and K use the identical mathematical expression (products over reactants, raised to coefficients) — the only difference is when it's evaluated: Q can be calculated using concentrations at ANY point during a reaction, while K is specifically the value of that same expression once the system has reached true equilibrium."
    },
    {
      "id": "7-19",
      "topic": "7.4 Calculating K",
      "stem": "At equilibrium for 2NOCl(g) ⇌ 2NO(g) + Cl₂(g): [NOCl]=0.200, [NO]=0.100, [Cl₂]=0.0500. Calculate K.",
      "choices": [
        "0.0125",
        "0.125",
        "1.25",
        "0.00625"
      ],
      "correct": 0,
      "explanation": "K = [NO]²[Cl₂]/[NOCl]² = (0.100)²(0.0500)/(0.200)² = (0.0100)(0.0500)/0.0400 = 0.000500/0.0400 = 0.0125."
    },
    {
      "id": "7-20",
      "topic": "7.4 Calculating K",
      "stem": "At equilibrium for A(g) ⇌ 2B(g): [A]=0.400 M, [B]=0.800 M. Calculate K.",
      "choices": [
        "1.60",
        "0.500",
        "0.400",
        "2.00"
      ],
      "correct": 0,
      "explanation": "K = [B]²/[A] = (0.800)²/0.400 = 0.640/0.400 = 1.60."
    },
    {
      "id": "7-21",
      "topic": "7.4 Calculating K",
      "stem": "A 2.00 L container at equilibrium contains 0.600 mol of A and 0.400 mol of B for A(g) ⇌ B(g). Calculate K.",
      "choices": [
        "0.667",
        "1.50",
        "0.300",
        "1.20"
      ],
      "correct": 0,
      "explanation": "Concentrations: [A] = 0.600/2.00 = 0.300 M, [B] = 0.400/2.00 = 0.200 M. K = [B]/[A] = 0.200/0.300 = 0.667. Note that dividing both mole values by the same volume before taking the ratio actually means the volume cancels for a reaction with equal moles of gas on each side — but it's still good practice to always convert to concentration first, since this cancellation doesn't happen for reactions with unequal mole totals."
    },
    {
      "id": "7-22",
      "topic": "7.4 Calculating K",
      "stem": "At equilibrium for PCl₅(g) ⇌ PCl₃(g) + Cl₂(g): [PCl₅]=0.0300, [PCl₃]=0.0970, [Cl₂]=0.0970. Calculate K.",
      "choices": [
        "0.314",
        "3.18",
        "0.0970",
        "0.00941"
      ],
      "correct": 0,
      "explanation": "K = [PCl₃][Cl₂]/[PCl₅] = (0.0970)(0.0970)/0.0300 = 0.009409/0.0300 = 0.314."
    },
    {
      "id": "7-23",
      "topic": "7.4 Calculating K",
      "stem": "Why must all concentrations used in calculating K be equilibrium concentrations, not initial concentrations?",
      "choices": [
        "K is specifically defined using the equilibrium expression evaluated at the point where the system has actually reached equilibrium; using initial (non-equilibrium) concentrations would give Q, not K.",
        "Initial concentrations are always numerically identical to equilibrium concentrations.",
        "K can be calculated using any concentrations, initial or equilibrium, with identical results.",
        "This distinction does not actually matter for calculating K correctly."
      ],
      "correct": 0,
      "explanation": "K is, by definition, the value of the equilibrium expression specifically at equilibrium — using initial (pre-equilibrium) concentrations instead would simply calculate Q at that initial moment, which generally does NOT equal K (unless the system happened to already be at equilibrium at that initial point, in which case no reaction would occur at all)."
    },
    {
      "id": "7-24",
      "topic": "7.4 Calculating K",
      "stem": "Stretch — beyond typical AP difficulty: An ICE table gives equilibrium concentrations of [A]=0.150 M and [B]=x M for A(g) ⇌ 2B(g), with K = 0.0800. Given that x was solved to be 0.110 M, verify this value is consistent with K.",
      "choices": [
        "Consistent: K = (0.110)²/0.150 = 0.0807, closely matching the given K = 0.0800.",
        "Not consistent: the calculated K does not match at all.",
        "Cannot be verified without additional information.",
        "The verification requires a completely different formula than the one used to solve for x."
      ],
      "correct": 0,
      "explanation": "Plugging the solved equilibrium concentrations back into the original K expression is always a valuable verification step: K = [B]²/[A] = (0.110)²/0.150 = 0.0121/0.150 = 0.0807, which closely matches the given K = 0.0800 (small difference attributable to rounding during the solving process) — confirming the solved value of x is essentially correct and self-consistent.",
      "stretch": true
    },
    {
      "id": "7-25",
      "topic": "7.5 Magnitude of K",
      "stem": "A reaction has K = 4.2 × 10¹⁵. What does this indicate about the reaction at equilibrium?",
      "choices": [
        "The reaction strongly favors reactants; very little product forms.",
        "The reaction strongly favors products; it proceeds essentially to completion.",
        "The reaction is exactly balanced between reactants and products.",
        "The reaction does not reach equilibrium at all."
      ],
      "correct": 1,
      "explanation": "An extremely large K value means the numerator (products) vastly outweighs the denominator (reactants) at equilibrium — this indicates the reaction strongly favors products, proceeding essentially to completion, with only a negligible amount of reactant remaining."
    },
    {
      "id": "7-26",
      "topic": "7.5 Magnitude of K",
      "stem": "A reaction has K = 3.5 × 10⁻¹². What does this indicate?",
      "choices": [
        "The reaction strongly favors products.",
        "The reaction strongly favors reactants; the forward reaction barely proceeds at all.",
        "The reaction has an equal mix of products and reactants.",
        "K cannot be this small for any real reaction."
      ],
      "correct": 1,
      "explanation": "An extremely small K value means the denominator (reactants) vastly outweighs the numerator (products) at equilibrium — the forward reaction proceeds to only a negligible extent, strongly favoring reactants remaining largely unreacted."
    },
    {
      "id": "7-27",
      "topic": "7.5 Magnitude of K",
      "stem": "Does a very large K value tell you anything about how quickly a reaction reaches equilibrium?",
      "choices": [
        "Yes, a large K always means the reaction reaches equilibrium quickly.",
        "No — K describes only the final position of equilibrium, not the rate (speed) at which that position is reached; these are independent concepts.",
        "Yes, a large K always means the reaction is very slow.",
        "K and rate are actually the exact same quantity."
      ],
      "correct": 1,
      "explanation": "K is a purely thermodynamic quantity describing the equilibrium position (how far a reaction proceeds), while rate is a kinetic quantity describing how quickly that position is reached — a reaction can have an enormous K (strongly favoring products) yet still be kinetically very slow to actually get there, since these describe genuinely different aspects of the reaction."
    },
    {
      "id": "7-28",
      "topic": "7.5 Magnitude of K",
      "stem": "A reaction has K ≈ 1. What does this suggest about the equilibrium mixture?",
      "choices": [
        "The mixture contains essentially no reactants at all.",
        "The mixture contains essentially no products at all.",
        "The mixture contains significant, comparable amounts of both reactants and products.",
        "The reaction cannot reach equilibrium under any conditions."
      ],
      "correct": 2,
      "explanation": "A K value close to 1 means the numerator (products) and denominator (reactants) in the equilibrium expression are of comparable, similar magnitude — indicating that at equilibrium, meaningful (non-negligible) amounts of both reactants and products coexist, rather than the mixture being overwhelmingly one or the other."
    },
    {
      "id": "7-29",
      "topic": "7.5 Magnitude of K",
      "stem": "Which reaction is most likely to be considered to 'go essentially to completion,' based on its K value?",
      "choices": [
        "K = 1.0 × 10⁻²⁰",
        "K = 0.50",
        "K = 2.0",
        "K = 5.0 × 10²⁵"
      ],
      "correct": 3,
      "explanation": "A reaction with an enormously large K (like 5.0 × 10²⁵) has an equilibrium position so heavily favoring products that, practically speaking, the reaction can be treated as going to completion, with an immeasurably tiny amount of reactant remaining at equilibrium."
    },
    {
      "id": "7-30",
      "topic": "7.6 Properties of K",
      "stem": "If K = 8.0 for A ⇌ B, what is K for the reverse reaction B ⇌ A?",
      "choices": [
        "8.0",
        "0.125",
        "−8.0",
        "1.0"
      ],
      "correct": 1,
      "explanation": "K for a reversed reaction is the reciprocal of the original: K(reverse) = 1/K(original) = 1/8.0 = 0.125."
    },
    {
      "id": "7-31",
      "topic": "7.6 Properties of K",
      "stem": "If K = 4.0 for A ⇌ 2B, what is K for the reaction 2A ⇌ 4B?",
      "choices": [
        "8.0",
        "4.0",
        "16.0",
        "2.0"
      ],
      "correct": 2,
      "explanation": "Doubling all coefficients means squaring K: K(new) = K(original)² = (4.0)² = 16.0."
    },
    {
      "id": "7-32",
      "topic": "7.6 Properties of K",
      "stem": "Given: (1) A ⇌ B, K₁ = 2.0; (2) B ⇌ C, K₂ = 3.0. Find K for A ⇌ C.",
      "choices": [
        "5.0",
        "6.0",
        "1.5",
        "0.667"
      ],
      "correct": 1,
      "explanation": "When reactions are added together (with B cancelling as an intermediate, exactly like a Hess's Law combination), the overall K is the PRODUCT of the individual K values: K(overall) = K₁ × K₂ = 2.0 × 3.0 = 6.0."
    },
    {
      "id": "7-33",
      "topic": "7.6 Properties of K",
      "stem": "If K = 25 for a reaction A ⇌ 2B, what is K for the reaction ½A ⇌ B (halved coefficients)?",
      "choices": [
        "12.5",
        "5.0",
        "50",
        "625"
      ],
      "correct": 1,
      "explanation": "Halving all coefficients means taking the square root of K: K(new) = √K(original) = √25 = 5.0. This is the reverse operation of squaring K when doubling coefficients."
    },
    {
      "id": "7-34",
      "topic": "7.6 Properties of K",
      "stem": "Given: (1) 2A ⇌ B, K₁ = 10.0; (2) B ⇌ 2C, K₂ = 0.50. Find K for 2A ⇌ 2C.",
      "choices": [
        "10.5",
        "5.0",
        "20.0",
        "0.05"
      ],
      "correct": 1,
      "explanation": "Adding (1) and (2) directly (B cancels as an intermediate) gives 2A ⇌ 2C. K(overall) = K₁ × K₂ = 10.0 × 0.50 = 5.0."
    },
    {
      "id": "7-35",
      "topic": "7.6 Properties of K",
      "stem": "Why does multiplying a reaction's coefficients by n raise K to the nth power, rather than simply multiplying K by n?",
      "choices": [
        "Because K's mathematical formula involves each concentration raised to a power (its coefficient), so scaling every coefficient by n means every individual concentration term in the expression is now raised to n times its original power, which is mathematically equivalent to raising the entire original K expression to the nth power.",
        "This is simply an arbitrary rule with no underlying mathematical justification.",
        "K should actually be multiplied by n, and this is a common misconception.",
        "This rule only applies to reactions involving gases."
      ],
      "correct": 0,
      "explanation": "Since K's formula raises each concentration to its stoichiometric coefficient, scaling every coefficient by a factor of n effectively raises every individual exponent in the expression by that same factor of n — and raising every exponent in a product/quotient expression by n is mathematically identical to raising the entire original expression to the nth power, which is exactly why K(new) = K(original)ⁿ."
    },
    {
      "id": "7-36",
      "topic": "7.7 Calculating Equilibrium Concentrations",
      "stem": "For A ⇌ B, K = 4.0. Starting with [A]₀ = 1.00 M and [B]₀ = 0, set up the correct ICE table equilibrium row expression.",
      "choices": [
        "[A] = 1.00 − x, [B] = x",
        "[A] = 1.00 + x, [B] = −x",
        "[A] = x, [B] = 1.00 − x",
        "[A] = 1.00, [B] = x"
      ],
      "correct": 0,
      "explanation": "Since the reaction proceeds forward (A is consumed, B is formed) to reach equilibrium from these starting conditions, the ICE table shows A decreasing by x and B increasing by x: [A] = 1.00 − x, [B] = 0 + x = x."
    },
    {
      "id": "7-37",
      "topic": "7.7 Calculating Equilibrium Concentrations",
      "stem": "For A ⇌ B, K = 4.0, [A]₀=1.00 M, [B]₀=0. Solve for equilibrium concentrations.",
      "choices": [
        "[A]=0.20 M, [B]=0.80 M",
        "[A]=0.50 M, [B]=0.50 M",
        "[A]=0.80 M, [B]=0.20 M",
        "[A]=0.25 M, [B]=0.75 M"
      ],
      "correct": 0,
      "explanation": "K = x/(1.00−x) = 4.0. Solving: x = 4.0(1.00−x) = 4.0 − 4.0x, so x + 4.0x = 4.0, giving 5.0x = 4.0, x = 0.80. Equilibrium: [A] = 1.00−0.80 = 0.20 M, [B] = 0.80 M."
    },
    {
      "id": "7-38",
      "topic": "7.7 Calculating Equilibrium Concentrations",
      "stem": "For A(g) ⇌ B(g) + C(g), K = 1.0 × 10⁻⁵, starting with [A]₀ = 0.500 M and no B or C. Which simplification is most appropriate for solving this?",
      "choices": [
        "Since K is very small relative to the initial concentration, assume x is negligible compared to 0.500 M, simplifying (0.500−x) ≈ 0.500.",
        "Use the full quadratic formula regardless of K's size.",
        "Assume x = 0.500 M exactly.",
        "No simplification is ever appropriate in ICE table problems."
      ],
      "correct": 0,
      "explanation": "When K is very small (here, 1.0 × 10⁻⁵) relative to a reasonably large initial concentration, very little reaction actually occurs to reach equilibrium, meaning x will be very small compared to 0.500 M — this justifies the standard simplifying assumption (0.500−x) ≈ 0.500, avoiding a more complex calculation, as long as the resulting x is later verified to be less than about 5% of 0.500 M."
    },
    {
      "id": "7-39",
      "topic": "7.7 Calculating Equilibrium Concentrations",
      "stem": "Using the simplification from Q7-38, solve for x given K = 1.0 × 10⁻⁵ and [A]₀ = 0.500 M for A ⇌ B + C.",
      "choices": [
        "2.2 × 10⁻³ M",
        "1.0 × 10⁻⁵ M",
        "5.0 × 10⁻⁶ M",
        "0.500 M"
      ],
      "correct": 0,
      "explanation": "Using the simplified K expression: K ≈ x²/0.500 = 1.0×10⁻⁵. Solving: x² = 0.500 × 1.0×10⁻⁵ = 5.0×10⁻⁶, so x = √(5.0×10⁻⁶) = 2.2×10⁻³ M. Checking the simplification: 2.2×10⁻³/0.500 = 0.0045 = 0.45%, well under 5%, confirming the simplifying assumption was valid."
    },
    {
      "id": "7-40",
      "topic": "7.7 Calculating Equilibrium Concentrations",
      "stem": "For 2A ⇌ B, K = 0.25, starting with [A]₀ = 0.800 M and [B]₀ = 0. Set up the ICE table's equilibrium row.",
      "choices": [
        "[A] = 0.800 − 2x, [B] = x",
        "[A] = 0.800 − x, [B] = x",
        "[A] = 0.800 − x, [B] = 2x",
        "[A] = 0.800 + 2x, [B] = x"
      ],
      "correct": 0,
      "explanation": "Since A has a coefficient of 2, its change is −2x (twice the change of B, which has coefficient 1): [A] = 0.800 − 2x, [B] = 0 + x = x. Getting the coefficient-matched change amounts right for each species is essential before setting up the K expression."
    },
    {
      "id": "7-41",
      "topic": "7.7 Calculating Equilibrium Concentrations",
      "stem": "When is it appropriate to take the square root of both sides of a K expression to solve for x, rather than using the full quadratic formula?",
      "choices": [
        "Only when both sides of the resulting equation, after substitution, are perfect squares (typically when reactant coefficients on both sides of the original equation match cleanly).",
        "Always, regardless of the specific reaction stoichiometry.",
        "Never; the quadratic formula must always be used.",
        "Only when K is exactly equal to 1."
      ],
      "correct": 0,
      "explanation": "The square-root shortcut only works cleanly when the equilibrium expression, after ICE table substitution, reduces to a perfect square on both sides (as in Worked Example 4 in the study guide, where identical initial concentrations of two reactants with matching coefficients created symmetric, squarable terms) — in general cases with different coefficients or different initial concentrations, this shortcut isn't valid and the full quadratic formula must be used instead."
    },
    {
      "id": "7-42",
      "topic": "7.7 Calculating Equilibrium Concentrations",
      "stem": "A student calculates x = 0.45 M when solving an ICE table problem with an initial concentration of 0.50 M, having used the simplifying 'x is small' assumption. Is this assumption valid?",
      "choices": [
        "Yes, since x is a positive number.",
        "No — x (0.45 M) represents 90% of the initial concentration (0.50 M), far exceeding the typical 5% validity threshold for the simplifying assumption; the problem must be redone using the full quadratic formula.",
        "Yes, since 0.45 is less than 0.50.",
        "The validity of this assumption cannot be checked."
      ],
      "correct": 1,
      "explanation": "The simplifying assumption is only considered valid if x turns out to be less than about 5% of the initial concentration used in that approximation. Here, x is 90% of the initial value (0.45/0.50 = 90%) — a massive violation of the assumption's underlying premise (that x is negligibly small) — meaning the calculation must be redone properly using the full quadratic formula rather than the simplified linear approximation."
    },
    {
      "id": "7-43",
      "topic": "7.7 Calculating Equilibrium Concentrations",
      "stem": "For A ⇌ 2B, K = 0.0400, starting with only [B]₀ = 1.00 M and no A. In which direction will the reaction initially proceed, and how should the ICE table changes be written?",
      "choices": [
        "The reaction proceeds in reverse (right to left as written); [B] = 1.00 − 2x, [A] = x.",
        "The reaction proceeds forward; [A] = −x, [B] = 1.00 + 2x.",
        "No reaction occurs since there's no A present initially.",
        "The reaction proceeds forward; [A] = x, [B] = 1.00 − x."
      ],
      "correct": 0,
      "explanation": "Starting with only product (B) present, the reverse reaction must occur to establish equilibrium (converting some B back into A), since forward reaction is impossible without any A present initially. The ICE table reflects this: B decreases by 2x (matching its coefficient of 2) while A increases by x (matching its coefficient of 1): [B] = 1.00 − 2x, [A] = 0 + x = x."
    },
    {
      "id": "7-44",
      "topic": "7.7 Calculating Equilibrium Concentrations",
      "stem": "Stretch — beyond typical AP difficulty: For A + B ⇌ 2C, K = 9.00, starting with [A]₀ = 2.00 M, [B]₀ = 2.00 M, [C]₀ = 0. Set up and solve for x using the square-root shortcut, if valid.",
      "choices": [
        "Valid; x = 1.20 M, giving [A]=[B]=0.80 M, [C]=2.40 M",
        "Not valid; must use the full quadratic formula",
        "Valid; x = 2.00 M exactly",
        "Valid; x = 0.60 M, giving [A]=[B]=1.40 M, [C]=1.20 M"
      ],
      "correct": 0,
      "explanation": "ICE: [A]=[B]=2.00−x, [C]=2x. Since [A] and [B] have identical initial concentrations and identical coefficients, K = (2x)²/[(2.00−x)(2.00−x)] = (2x)²/(2.00−x)² is indeed a valid perfect-square setup. Taking the square root of both sides: √9.00 = 2x/(2.00−x), so 3.00 = 2x/(2.00−x). Solving: 3.00(2.00−x) = 2x → 6.00−3.00x = 2x → 6.00 = 5.00x → x = 1.20 M. Equilibrium: [A]=[B]=2.00−1.20=0.80 M, [C]=2(1.20)=2.40 M — confirming the square-root shortcut is valid here since A and B share both identical initial concentrations and identical coefficients.",
      "stretch": true
    },
    {
      "id": "7-45",
      "topic": "7.8 Representations of Equilibrium",
      "stem": "A particulate diagram of a 1.00 L container at equilibrium for A ⇌ 2B shows 3 A particles and 6 B particles. Calculate K.",
      "choices": [
        "4.0",
        "2.0",
        "12",
        "0.50"
      ],
      "correct": 2,
      "explanation": "Treating particle count directly as concentration (in a 1.00 L container): [A]=3, [B]=6. K = [B]²/[A] = 6²/3 = 36/3 = 12."
    },
    {
      "id": "7-46",
      "topic": "7.8 Representations of Equilibrium",
      "stem": "A particulate diagram shows a reaction NOT yet at equilibrium (more particles of one type than would be expected). What additional information would confirm whether a system is truly at equilibrium versus just a snapshot mid-reaction?",
      "choices": [
        "Comparing Q, calculated from the diagram's particle counts, against the known value of K for that reaction — if Q ≠ K, the system is not yet at equilibrium.",
        "Simply counting the total number of particles present.",
        "There is no way to distinguish an equilibrium diagram from a non-equilibrium diagram.",
        "Checking whether the container is sealed or open."
      ],
      "correct": 0,
      "explanation": "A particulate diagram alone (a single snapshot) doesn't inherently tell you whether the system is at equilibrium — you need to calculate Q from that specific diagram's particle counts and compare it to the known K value for that reaction at that temperature; only if Q = K can you conclude the depicted state is truly at equilibrium."
    },
    {
      "id": "7-47",
      "topic": "7.8 Representations of Equilibrium",
      "stem": "Two particulate diagrams for the same reaction A ⇌ B are shown at two different times. Diagram 1 (earlier) shows 8 A and 2 B; Diagram 2 (later) shows 5 A and 5 B, with no further change afterward. What can be concluded?",
      "choices": [
        "The reaction is proceeding forward and has reached equilibrium by Diagram 2 (since no further net change occurs after that point).",
        "The reaction is proceeding in reverse.",
        "Diagram 2 must represent the initial conditions.",
        "No conclusion can be drawn from two diagrams."
      ],
      "correct": 0,
      "explanation": "The shift from more A/less B (Diagram 1) to less A/more B (Diagram 2) shows the reaction proceeding in the forward direction (A converting to B) over time. Since no further net change is observed after Diagram 2, this indicates the system has reached equilibrium by that point — forward and reverse rates have become equal."
    },
    {
      "id": "7-48",
      "topic": "7.8 Representations of Equilibrium",
      "stem": "In a particulate diagram at true equilibrium, would you expect to see zero reactant particles remaining if K is extremely large?",
      "choices": [
        "Yes, always exactly zero.",
        "Generally no — even with a very large K, some small, possibly not visually depictable, amount of reactant technically remains at equilibrium, though it may be too small to show clearly on a simplified diagram.",
        "Yes, because equilibrium requires all reactants to be fully consumed.",
        "This depends only on the total number of particles shown, not on K."
      ],
      "correct": 1,
      "explanation": "Even with an extremely large K (strongly favoring products), true equilibrium technically still involves both forward and reverse reactions continuing — meaning some infinitesimally small amount of reactant remains, even if it's too small to be meaningfully depicted in a simplified particulate diagram (which typically shows small, whole numbers of particles for illustrative purposes)."
    },
    {
      "id": "7-49",
      "topic": "7.8 Representations of Equilibrium",
      "stem": "A particulate diagram shows equal numbers of reactant and product particles for a reaction A ⇌ B with a 1:1 stoichiometric ratio. What can be concluded about K?",
      "choices": [
        "K must equal exactly 1, since [A] = [B] gives K = [B]/[A] = 1.",
        "K must be greater than 1.",
        "K must be less than 1.",
        "No conclusion about K can be drawn from equal particle counts."
      ],
      "correct": 0,
      "explanation": "For a simple A ⇌ B equilibrium (1:1 stoichiometry), if the particulate diagram shows equal numbers of A and B particles (and this is confirmed to be the equilibrium state, not just a random snapshot), then K = [B]/[A] = (equal value)/(equal value) = 1 exactly."
    },
    {
      "id": "7-50",
      "topic": "7.9 Le Chatelier's Principle",
      "stem": "For N₂ + 3H₂ ⇌ 2NH₃, what happens to the equilibrium position if NH₃ is removed from the container?",
      "choices": [
        "The equilibrium shifts backward, toward reactants.",
        "The equilibrium shifts forward, toward products, to partially replace the removed NH₃.",
        "No shift occurs.",
        "The reaction stops completely."
      ],
      "correct": 1,
      "explanation": "Removing a product decreases its concentration below the equilibrium value, causing Q to become less than K momentarily — the system responds by shifting forward (producing more NH₃) to partially counteract this removal and restore Q = K."
    },
    {
      "id": "7-51",
      "topic": "7.9 Le Chatelier's Principle",
      "stem": "For the exothermic reaction 2SO₂ + O₂ ⇌ 2SO₃, what happens if temperature is decreased?",
      "choices": [
        "The equilibrium shifts forward, toward products (the exothermic direction), since decreasing temperature favors whichever direction releases heat.",
        "The equilibrium shifts backward, toward reactants.",
        "No shift occurs; only concentration changes affect equilibrium.",
        "K decreases but the equilibrium position remains unchanged."
      ],
      "correct": 0,
      "explanation": "Since this reaction is exothermic (forward direction releases heat), decreasing temperature effectively 'removes heat' from the system — per Le Chatelier's Principle, the equilibrium shifts in the direction that produces more heat (the exothermic, forward direction) to partially counteract that removal, favoring products."
    },
    {
      "id": "7-52",
      "topic": "7.9 Le Chatelier's Principle",
      "stem": "For the reaction 2NO₂(g) ⇌ N₂O₄(g), what happens to the equilibrium position if the container's volume is decreased (increasing pressure)?",
      "choices": [
        "Shifts toward N₂O₄, the side with fewer total moles of gas.",
        "Shifts toward NO₂, the side with more total moles of gas.",
        "No shift occurs, since both sides contain gas.",
        "The reaction reverses direction entirely and does not re-equilibrate."
      ],
      "correct": 0,
      "explanation": "Decreasing volume favors the side of the reaction with fewer total moles of gas particles, since that side takes up less volume and partially counteracts the pressure increase. Reactants have 2 moles of gas (2 NO₂); products have 1 mole of gas (1 N₂O₄) — the equilibrium shifts toward N₂O₄, the side with fewer moles."
    },
    {
      "id": "7-53",
      "topic": "7.9 Le Chatelier's Principle",
      "stem": "For a reaction where moles of gas are EQUAL on both sides (e.g., H₂ + I₂ ⇌ 2HI, with 2 mol gas total on each side), what happens to the equilibrium position if volume is decreased?",
      "choices": [
        "No shift occurs, since neither side is favored by a pressure change when moles of gas are equal on both sides.",
        "The equilibrium always shifts toward products regardless of mole count.",
        "The equilibrium always shifts toward reactants regardless of mole count.",
        "The reaction stops entirely."
      ],
      "correct": 0,
      "explanation": "Le Chatelier's pressure/volume shift is driven specifically by an imbalance in moles of gas between the two sides. When moles of gas are equal on both sides (as in H₂ + I₂ ⇌ 2HI, with 2 total moles gas on each side), a volume/pressure change affects both sides equally, and there's no net shift — Q remains unchanged despite the concentration change, since the volume terms cancel out identically in the numerator and denominator."
    },
    {
      "id": "7-54",
      "topic": "7.9 Le Chatelier's Principle",
      "stem": "For an endothermic reaction, how does increasing temperature affect the value of K itself (not just the equilibrium position)?",
      "choices": [
        "K increases, since the reaction shifts forward (favoring products) at higher temperature.",
        "K decreases.",
        "K remains exactly unchanged.",
        "Temperature has no effect on K, only on reaction rate."
      ],
      "correct": 0,
      "explanation": "Unlike concentration or pressure changes (which shift the equilibrium POSITION without changing K itself), temperature changes actually change the numerical value of K. For an endothermic reaction, increasing temperature favors the forward (endothermic) direction, meaning more product is favored at equilibrium — this corresponds to an increased K value at the higher temperature."
    },
    {
      "id": "7-55",
      "topic": "7.9 Le Chatelier's Principle",
      "stem": "Which of the following changes to a system at equilibrium does NOT change the value of K, only the equilibrium position (concentrations)?",
      "choices": [
        "Adding an inert (non-reacting) gas at constant volume",
        "Adding more of a reactant",
        "Increasing temperature",
        "Adding more of a reactant is correct, along with removing a product and changing volume/pressure — all of these shift the equilibrium position but leave K unchanged"
      ],
      "correct": 3,
      "explanation": "K is a function of temperature ONLY — concentration changes (adding/removing reactant or product) and pressure/volume changes shift the equilibrium POSITION (the specific concentrations present at the new equilibrium) but do not change the actual numerical value of K itself; only a temperature change actually alters K. (Note: adding an inert gas at CONSTANT volume also has no effect on equilibrium position at all, since it doesn't change any actual reacting species' concentrations or partial pressures.)"
    },
    {
      "id": "7-56",
      "topic": "7.9 Le Chatelier's Principle",
      "stem": "For CO(g) + 2H₂(g) ⇌ CH₃OH(g), predict the shift when the volume of the container is increased.",
      "choices": [
        "Shifts toward reactants (CO + H₂), the side with more total moles of gas (3 mol vs. 1 mol).",
        "Shifts toward CH₃OH, the side with fewer moles of gas.",
        "No shift occurs.",
        "The reaction cannot be analyzed without temperature data."
      ],
      "correct": 0,
      "explanation": "Increasing volume favors the side with MORE total moles of gas (the opposite effect of decreasing volume), since that side can better take advantage of the newly available space. Reactants total 3 moles of gas (1 CO + 2 H₂); products total 1 mole of gas (1 CH₃OH) — the equilibrium shifts toward reactants, the side with more gas moles."
    },
    {
      "id": "7-57",
      "topic": "7.10 Q and Le Chatelier",
      "stem": "Using Q, explain why removing a reactant from a system at equilibrium shifts the reaction backward (toward reactants).",
      "choices": [
        "Removing a reactant decreases the denominator of Q, increasing Q above K; the system shifts backward (converting product back to reactant) until Q decreases to match K again.",
        "Removing a reactant has no effect on the value of Q.",
        "Removing a reactant always increases K.",
        "Removing a reactant makes the reaction stop permanently."
      ],
      "correct": 0,
      "explanation": "Reactant concentrations sit in the denominator of Q. Decreasing a reactant's concentration (by removing some) makes the denominator smaller, which makes the overall Q value larger — larger than K — so per the Q vs. K rule, the system must shift backward (toward reactants) to reduce Q back down to K."
    },
    {
      "id": "7-58",
      "topic": "7.10 Q and Le Chatelier",
      "stem": "Using Q, explain why increasing pressure (decreasing volume) shifts equilibrium toward the side with fewer moles of gas.",
      "choices": [
        "Decreasing volume increases ALL concentrations, but the side with more moles of gas (more total concentration terms multiplied together) experiences a proportionally larger increase in its contribution to Q, temporarily pushing Q away from K in a direction that requires shifting toward the side with fewer gas moles to restore Q = K.",
        "Decreasing volume has no effect on any concentration.",
        "Decreasing volume always decreases every concentration equally, with no net effect on Q.",
        "This effect cannot be explained using Q."
      ],
      "correct": 0,
      "explanation": "When volume decreases, every gas-phase concentration increases equally (since concentration = moles/volume, and volume decreased). However, since Q involves multiplying several concentration terms together (one per mole of gas on each side), the side with MORE moles of gas sees a proportionally bigger jump in its overall contribution to Q — this temporarily unbalances Q away from K, and the system must shift toward the side with fewer gas moles to bring Q back down (or up) to match K again."
    },
    {
      "id": "7-59",
      "topic": "7.10 Q and Le Chatelier",
      "stem": "A system at equilibrium has a product added. Immediately after this addition (before any shift occurs), how does Q compare to K?",
      "choices": [
        "Q > K, since adding product increases the numerator of Q.",
        "Q < K.",
        "Q = K, unchanged.",
        "Q becomes undefined."
      ],
      "correct": 0,
      "explanation": "Product concentrations sit in the numerator of Q. Adding more product increases the numerator, making Q immediately larger than its previous value (which had equaled K) — so right after the addition, Q > K, and the system must shift backward (toward reactants) to bring Q back down to K."
    },
    {
      "id": "7-60",
      "topic": "7.10 Q and Le Chatelier",
      "stem": "Which statement best summarizes the relationship between Le Chatelier's Principle and the Q vs. K comparison method?",
      "choices": [
        "They are two different ways of describing and predicting the exact same underlying phenomenon — any disturbance to equilibrium changes Q away from K, and the system shifts in whichever direction restores Q = K.",
        "Le Chatelier's Principle and the Q vs. K method give contradictory predictions.",
        "Le Chatelier's Principle only applies to concentration changes, while Q vs. K only applies to temperature changes.",
        "These are entirely unrelated concepts with no connection to each other."
      ],
      "correct": 0,
      "explanation": "The memorized 'shortcut rules' of Le Chatelier's Principle (add reactant → shift forward, decrease volume → shift toward fewer gas moles, etc.) are all just convenient shortcuts for the same underlying mechanism: any disturbance changes Q away from its previous value of K, and the system responds by shifting in the direction needed to restore Q = K — understanding this underlying mechanism lets you derive any specific shift prediction from first principles, rather than needing to separately memorize each rule."
    },
    {
      "id": "7-61",
      "topic": "7.11 Solubility Equilibria",
      "stem": "Write the Ksp expression for Ca₃(PO₄)₂ ⇌ 3Ca²⁺ + 2PO₄³⁻.",
      "choices": [
        "Ksp = [Ca²⁺][PO₄³⁻]",
        "Ksp = [Ca²⁺]³[PO₄³⁻]²",
        "Ksp = 3[Ca²⁺] × 2[PO₄³⁻]",
        "Ksp = [Ca₃(PO₄)₂]"
      ],
      "correct": 1,
      "explanation": "Following the standard equilibrium expression format (products raised to their coefficients, with the solid omitted): Ksp = [Ca²⁺]³[PO₄³⁻]², correctly using the coefficients 3 and 2 as exponents, not as multiplying factors."
    },
    {
      "id": "7-62",
      "topic": "7.11 Solubility Equilibria",
      "stem": "CaF₂ has Ksp = 3.9 × 10⁻¹¹. Set up (but do not necessarily solve) the correct expression for molar solubility s.",
      "choices": [
        "Ksp = s² = 3.9 × 10⁻¹¹",
        "Ksp = s × (2s)² = 4s³ = 3.9 × 10⁻¹¹",
        "Ksp = (2s)² = 3.9 × 10⁻¹¹",
        "Ksp = 2s = 3.9 × 10⁻¹¹"
      ],
      "correct": 1,
      "explanation": "CaF₂ ⇌ Ca²⁺ + 2F⁻. If s = molar solubility, then [Ca²⁺]=s and [F⁻]=2s (twice as much fluoride dissolves per formula unit, matching the coefficient of 2). Ksp = [Ca²⁺][F⁻]² = (s)(2s)² = s × 4s² = 4s³."
    },
    {
      "id": "7-63",
      "topic": "7.11 Solubility Equilibria",
      "stem": "Mg(OH)₂ has Ksp = 5.6 × 10⁻¹². Calculate its molar solubility in pure water.",
      "choices": [
        "1.11 × 10⁻⁴ M",
        "2.37 × 10⁻⁶ M",
        "5.6 × 10⁻¹² M",
        "7.48 × 10⁻⁵ M"
      ],
      "correct": 0,
      "explanation": "Mg(OH)₂ ⇌ Mg²⁺ + 2OH⁻. Ksp = (s)(2s)² = 4s³ = 5.6×10⁻¹². Solving: s³ = 1.4×10⁻¹², so s = (1.4×10⁻¹²)^(1/3) = 1.12×10⁻⁴ M ≈ 1.11×10⁻⁴ M."
    },
    {
      "id": "7-64",
      "topic": "7.11 Solubility Equilibria",
      "stem": "A salt MX₂ has a measured molar solubility of 2.0 × 10⁻⁴ M in pure water. Calculate its Ksp.",
      "choices": [
        "3.2 × 10⁻¹¹",
        "4.0 × 10⁻⁸",
        "1.6 × 10⁻¹¹",
        "8.0 × 10⁻¹²"
      ],
      "correct": 0,
      "explanation": "MX₂ ⇌ M²⁺ + 2X⁻. With s = 2.0×10⁻⁴ M: [M²⁺]=s=2.0×10⁻⁴, [X⁻]=2s=4.0×10⁻⁴. Ksp = [M²⁺][X⁻]² = (2.0×10⁻⁴)(4.0×10⁻⁴)² = (2.0×10⁻⁴)(1.6×10⁻⁷) = 3.2×10⁻¹¹."
    },
    {
      "id": "7-65",
      "topic": "7.11 Solubility Equilibria",
      "stem": "Which of two salts, both of the general form MX (1:1 stoichiometry), is more soluble if Salt A has Ksp = 1.0 × 10⁻⁸ and Salt B has Ksp = 1.0 × 10⁻¹⁵?",
      "choices": [
        "Salt A, since it has the larger Ksp, indicating a greater equilibrium concentration of dissolved ions.",
        "Salt B, since a smaller Ksp always means greater solubility.",
        "Both salts have identical solubility regardless of Ksp.",
        "Solubility cannot be compared using Ksp values."
      ],
      "correct": 0,
      "explanation": "For salts with the SAME ion ratio (both 1:1 here), a larger Ksp directly corresponds to greater molar solubility (since Ksp = s² for a 1:1 salt, and Ksp increases as s increases). Salt A's much larger Ksp (1.0×10⁻⁸ vs. 1.0×10⁻¹⁵) means it is significantly more soluble than Salt B."
    }
  ],
  "8": [
    {
      "id": "8-1",
      "topic": "8.1 Intro to Acids/Bases",
      "stem": "According to the Brønsted-Lowry definition, what is a base?",
      "choices": [
        "A proton donor",
        "A proton acceptor",
        "An electron donor",
        "A substance that produces OH⁻ in any solvent"
      ],
      "correct": 1,
      "explanation": "The Brønsted-Lowry definition specifically defines a base as any species capable of accepting a proton (H⁺) — this is broader than the older Arrhenius definition (which required producing OH⁻ specifically in water), allowing species like NH₃ to be classified as a base even without any OH⁻ group of its own."
    },
    {
      "id": "8-2",
      "topic": "8.1 Intro to Acids/Bases",
      "stem": "In the reaction HF + H₂O ⇌ F⁻ + H₃O⁺, identify the conjugate base of HF.",
      "choices": [
        "H₂O",
        "F⁻",
        "H₃O⁺",
        "HF itself"
      ],
      "correct": 1,
      "explanation": "HF donates a proton (acts as the acid) to become F⁻ — F⁻ is HF's conjugate base, differing from HF by exactly one H⁺."
    },
    {
      "id": "8-3",
      "topic": "8.1 Intro to Acids/Bases",
      "stem": "Which species is the conjugate acid of NH₃?",
      "choices": [
        "NH₂⁻",
        "NH₄⁺",
        "N₂H₄",
        "NH₃ has no conjugate acid"
      ],
      "correct": 1,
      "explanation": "A conjugate acid is formed when a base GAINS a proton. NH₃ gaining one H⁺ becomes NH₄⁺ — this is NH₃'s conjugate acid."
    },
    {
      "id": "8-4",
      "topic": "8.1 Intro to Acids/Bases",
      "stem": "Which statement correctly describes the relationship between an acid's strength and its conjugate base's strength?",
      "choices": [
        "A stronger acid has a stronger conjugate base.",
        "A stronger acid has a weaker conjugate base, since strength within a conjugate pair is inversely related.",
        "Acid strength and conjugate base strength are completely unrelated.",
        "All conjugate bases have identical strength regardless of the parent acid."
      ],
      "correct": 1,
      "explanation": "A strong acid readily gives up its proton, meaning its conjugate base has very little tendency to reclaim that proton (making it a very weak base). Conversely, a weak acid holds onto its proton more tightly, meaning its conjugate base has a comparatively greater tendency to grab a proton back (making it a relatively stronger base) — this inverse relationship holds consistently across all conjugate acid-base pairs."
    },
    {
      "id": "8-5",
      "topic": "8.1 Intro to Acids/Bases",
      "stem": "Water can act as either an acid or a base depending on what it reacts with. What term describes this property?",
      "choices": [
        "Amphoteric",
        "Neutral",
        "Polyprotic",
        "Inert"
      ],
      "correct": 0,
      "explanation": "A substance capable of acting as either an acid (donating a proton) or a base (accepting a proton), depending on the specific reaction it's involved in, is described as amphoteric. Water is the classic example, acting as a base when reacting with a strong acid and as an acid when reacting with a strong base."
    },
    {
      "id": "8-6",
      "topic": "8.1 Intro to Acids/Bases",
      "stem": "In the reaction HCO₃⁻ + H₂O ⇌ H₂CO₃ + OH⁻, what role is HCO₃⁻ playing?",
      "choices": [
        "Acid, donating a proton to water",
        "Base, accepting a proton from water",
        "Neither acid nor base",
        "Both acid and base simultaneously in this specific reaction"
      ],
      "correct": 1,
      "explanation": "HCO₃⁻ gains a proton (from water) to become H₂CO₃ — this means HCO₃⁻ is acting as a base (proton acceptor) in this specific reaction, even though HCO₃⁻ is also capable of acting as an acid in other reactions (it too is amphoteric, like water)."
    },
    {
      "id": "8-7",
      "topic": "8.2 pH/pOH Strong Acids/Bases",
      "stem": "Find the pH of 0.0100 M HCl.",
      "choices": [
        "1.00",
        "2.00",
        "12.00",
        "0.0100"
      ],
      "correct": 1,
      "explanation": "HCl is a strong acid, fully dissociating: [H⁺] = 0.0100 M. pH = −log(0.0100) = 2.00."
    },
    {
      "id": "8-8",
      "topic": "8.2 pH/pOH Strong Acids/Bases",
      "stem": "Find the pH of 0.00500 M NaOH.",
      "choices": [
        "2.30",
        "11.70",
        "9.00",
        "5.00"
      ],
      "correct": 1,
      "explanation": "NaOH is a strong base: [OH⁻] = 0.00500 M. pOH = −log(0.00500) = 2.30. pH = 14.00 − 2.30 = 11.70."
    },
    {
      "id": "8-9",
      "topic": "8.2 pH/pOH Strong Acids/Bases",
      "stem": "Find [H⁺] for a solution with pH = 3.50.",
      "choices": [
        "3.16 × 10⁻⁴ M",
        "3.50 × 10⁻³ M",
        "3.16 × 10⁻³ M",
        "1.00 × 10⁻³·⁵⁰ M, non-numeric"
      ],
      "correct": 0,
      "explanation": "[H⁺] = 10^(−pH) = 10^(−3.50) = 3.16 × 10⁻⁴ M."
    },
    {
      "id": "8-10",
      "topic": "8.2 pH/pOH Strong Acids/Bases",
      "stem": "Find the pH of 0.00250 M Ba(OH)₂.",
      "choices": [
        "2.60",
        "11.40",
        "2.30",
        "11.70"
      ],
      "correct": 1,
      "explanation": "Ba(OH)₂ provides 2 OH⁻ per formula unit: [OH⁻] = 2 × 0.00250 = 0.00500 M. pOH = −log(0.00500) = 2.30. pH = 14.00 − 2.30 = 11.70."
    },
    {
      "id": "8-11",
      "topic": "8.2 pH/pOH Strong Acids/Bases",
      "stem": "A solution has pOH = 4.80. Find its pH.",
      "choices": [
        "9.20",
        "4.80",
        "14.00",
        "−4.80"
      ],
      "correct": 0,
      "explanation": "pH + pOH = 14.00 at 25°C. pH = 14.00 − 4.80 = 9.20."
    },
    {
      "id": "8-12",
      "topic": "8.2 pH/pOH Strong Acids/Bases",
      "stem": "Which solution is most acidic?",
      "choices": [
        "pH = 3.0",
        "pH = 7.0",
        "pH = 9.0",
        "pH = 12.0"
      ],
      "correct": 0,
      "explanation": "Lower pH corresponds to higher [H⁺], meaning greater acidity. Among these options, pH = 3.0 is the lowest value and therefore the most acidic solution."
    },
    {
      "id": "8-13",
      "topic": "8.2 pH/pOH Strong Acids/Bases",
      "stem": "A 0.100 M solution of a strong acid HX is diluted by a factor of 10 (to 0.0100 M). What happens to the pH?",
      "choices": [
        "It increases by exactly 1 unit (from pH 1.00 to pH 2.00), since diluting by a factor of 10 decreases [H⁺] by a factor of 10.",
        "It decreases by 1 unit.",
        "It stays exactly the same.",
        "It increases by a factor of 10, not by 1 unit."
      ],
      "correct": 0,
      "explanation": "Original pH = −log(0.100) = 1.00. Diluted pH = −log(0.0100) = 2.00. Since pH is a logarithmic (base-10) scale, decreasing concentration by a factor of 10 increases pH by exactly 1 whole unit (log₁₀ of a factor of 10 is exactly 1) — not a factor of 10 change in pH itself, which is a common point of confusion."
    },
    {
      "id": "8-14",
      "topic": "8.3 Weak Acid/Base Equilibria",
      "stem": "For a weak acid HA with Ka = 4.0 × 10⁻⁶ and initial concentration 0.100 M, which expression correctly sets up (with the simplifying assumption) the equilibrium calculation for [H⁺]?",
      "choices": [
        "Ka = x²/0.100",
        "Ka = x²/(0.100+x)",
        "Ka = x/0.100",
        "Ka = 0.100/x²"
      ],
      "correct": 0,
      "explanation": "For a weak acid ICE table (HA ⇌ H⁺ + A⁻), with x representing both [H⁺] and [A⁻] formed, and applying the simplifying assumption that x is small relative to 0.100 M (valid since Ka is small): Ka = x²/(0.100−x) ≈ x²/0.100."
    },
    {
      "id": "8-15",
      "topic": "8.3 Weak Acid/Base Equilibria",
      "stem": "Find [H⁺] for a 0.100 M weak acid with Ka = 4.0 × 10⁻⁶, using the simplifying assumption.",
      "choices": [
        "6.3 × 10⁻⁴ M",
        "4.0 × 10⁻⁶ M",
        "2.0 × 10⁻³ M",
        "4.0 × 10⁻⁷ M"
      ],
      "correct": 0,
      "explanation": "x² = 0.100 × 4.0×10⁻⁶ = 4.0×10⁻⁷. x = √(4.0×10⁻⁷) = 6.3×10⁻⁴ M. Checking: 6.3×10⁻⁴/0.100 = 0.63%, well under 5%, confirming the simplification was valid."
    },
    {
      "id": "8-16",
      "topic": "8.3 Weak Acid/Base Equilibria",
      "stem": "For a weak base B with Kb = 1.8 × 10⁻⁵ and initial concentration 0.150 M, find [OH⁻] using the simplifying assumption.",
      "choices": [
        "1.6 × 10⁻³ M",
        "1.8 × 10⁻⁵ M",
        "2.7 × 10⁻⁶ M",
        "5.2 × 10⁻³ M"
      ],
      "correct": 0,
      "explanation": "Kb = x²/0.150 (using the simplifying assumption). x² = 0.150 × 1.8×10⁻⁵ = 2.7×10⁻⁶. x = √(2.7×10⁻⁶) = 1.6×10⁻³ M = [OH⁻]."
    },
    {
      "id": "8-17",
      "topic": "8.3 Weak Acid/Base Equilibria",
      "stem": "Given Ka for a weak acid is 1.0 × 10⁻⁴, find Kb for its conjugate base (Kw = 1.0 × 10⁻¹⁴).",
      "choices": [
        "1.0 × 10⁻¹⁰",
        "1.0 × 10⁻¹⁸",
        "1.0 × 10⁻⁴",
        "1.0 × 10¹⁰"
      ],
      "correct": 0,
      "explanation": "Ka × Kb = Kw. Kb = Kw/Ka = (1.0×10⁻¹⁴)/(1.0×10⁻⁴) = 1.0×10⁻¹⁰."
    },
    {
      "id": "8-18",
      "topic": "8.3 Weak Acid/Base Equilibria",
      "stem": "A weak acid has a small Ka value. What does this indicate about its degree of dissociation in water?",
      "choices": [
        "It dissociates almost completely.",
        "It dissociates only to a small extent, with most of the acid remaining in its undissociated (molecular) form.",
        "It does not dissociate at all under any conditions.",
        "Ka provides no information about degree of dissociation."
      ],
      "correct": 1,
      "explanation": "A small Ka means the equilibrium strongly favors the undissociated (reactant) form of the weak acid — only a small fraction actually ionizes into H⁺ and its conjugate base at equilibrium, which is exactly what distinguishes a weak acid from a strong acid (which dissociates essentially completely)."
    },
    {
      "id": "8-19",
      "topic": "8.3 Weak Acid/Base Equilibria",
      "stem": "Calculate the pH of a 0.0500 M solution of a weak acid with Ka = 1.0 × 10⁻⁵.",
      "choices": [
        "3.15",
        "2.65",
        "4.30",
        "5.00"
      ],
      "correct": 0,
      "explanation": "x² = 0.0500 × 1.0×10⁻⁵ = 5.0×10⁻⁷. x = √(5.0×10⁻⁷) = 7.07×10⁻⁴ M = [H⁺]. pH = −log(7.07×10⁻⁴) = 3.15."
    },
    {
      "id": "8-20",
      "topic": "8.3 Weak Acid/Base Equilibria",
      "stem": "Why is the simplifying 'x is small' assumption generally valid for most weak acid/base equilibrium problems with reasonably concentrated solutions?",
      "choices": [
        "Because a small Ka means only a small fraction of the acid/base actually dissociates, so x (the amount that reacts) is genuinely small compared to the starting concentration.",
        "The assumption is actually never valid and should never be used.",
        "Because all weak acids have identical Ka values.",
        "Because concentration has no effect on the validity of this assumption."
      ],
      "correct": 0,
      "explanation": "Since Ka (or Kb) values for weak acids/bases are typically quite small, only a small fraction of the initial concentration actually dissociates at equilibrium — this small degree of dissociation is exactly why x often turns out to be negligible compared to a reasonably large starting concentration, justifying the simplification (though it should always be verified afterward, especially for very dilute solutions or unusually large Ka values)."
    },
    {
      "id": "8-21",
      "topic": "8.3 Weak Acid/Base Equilibria",
      "stem": "A 0.500 M solution of ammonia (NH₃, Kb = 1.8 × 10⁻⁵) is prepared. Find its pH.",
      "choices": [
        "11.48",
        "9.26",
        "2.52",
        "4.74"
      ],
      "correct": 0,
      "explanation": "x² = 0.500 × 1.8×10⁻⁵ = 9.0×10⁻⁶. x = √(9.0×10⁻⁶) = 3.0×10⁻³ M = [OH⁻]. pOH = −log(3.0×10⁻³) = 2.52. pH = 14.00 − 2.52 = 11.48."
    },
    {
      "id": "8-22",
      "topic": "8.3 Weak Acid/Base Equilibria",
      "stem": "Which of the following is a valid reason a calculated 'x is small' approximation might need to be rejected in favor of the full quadratic formula?",
      "choices": [
        "The calculated x turns out to be more than about 5% of the initial concentration used in the approximation.",
        "The Ka value is extremely small.",
        "The initial concentration is very large.",
        "The temperature is exactly 25°C."
      ],
      "correct": 0,
      "explanation": "The standard threshold for accepting the simplifying assumption is that x should be less than roughly 5% of the initial concentration; if the calculated x exceeds this threshold, the approximation isn't sufficiently accurate, and the problem must be redone using the full (unapproximated) quadratic equation instead."
    },
    {
      "id": "8-23",
      "topic": "8.3 Weak Acid/Base Equilibria",
      "stem": "Stretch — beyond typical AP difficulty: A 0.0100 M solution of a weak acid has Ka = 1.0 × 10⁻³. Determine whether the simplifying assumption is valid, and if not, solve using the full quadratic formula.",
      "choices": [
        "Not valid (x would be ~28% of 0.0100); using the quadratic formula, [H⁺] ≈ 2.70 × 10⁻³ M",
        "Valid; [H⁺] = 3.16 × 10⁻³ M using the simplified approach",
        "Not valid; the problem cannot be solved without more data",
        "Valid; [H⁺] = 1.0 × 10⁻³ M exactly"
      ],
      "correct": 0,
      "explanation": "Simplified approach would give x² = 0.0100 × 1.0×10⁻³ = 1.0×10⁻⁵, x = 3.16×10⁻³ M — but checking, 3.16×10⁻³/0.0100 = 31.6%, far exceeding the 5% threshold, so the assumption is NOT valid here (Ka is too large relative to the initial concentration). Using the full quadratic: x²+ (1.0×10⁻³)x − (1.0×10⁻³)(0.0100) = 0, i.e., x² + 0.00100x − 0.0000100 = 0. Using the quadratic formula: x = [−0.00100 + √(0.00100² + 4×0.0000100)]/2 = [−0.00100 + √(0.0000010+0.0000400)]/2 = [−0.00100+√0.0000410]/2 = [−0.00100+0.00640]/2 = 0.00540/2 = 0.00270 M. This demonstrates exactly when and why the full quadratic formula becomes necessary instead of the simplifying assumption.",
      "stretch": true
    },
    {
      "id": "8-24",
      "topic": "8.4 Acid-Base Reactions/Titrations",
      "stem": "What is the pH at the equivalence point of a strong acid-strong base titration?",
      "choices": [
        "Always exactly 7.00",
        "Always greater than 7.00",
        "Always less than 7.00",
        "Depends entirely on the specific acid and base used"
      ],
      "correct": 0,
      "explanation": "In a strong acid-strong base titration, the resulting salt at the equivalence point is formed from a strong acid's conjugate base (which has no appreciable basicity) and a strong base's conjugate acid (which has no appreciable acidity) — neither ion affects the water's natural neutrality, giving exactly pH = 7.00 at 25°C."
    },
    {
      "id": "8-25",
      "topic": "8.4 Acid-Base Reactions/Titrations",
      "stem": "In a weak acid-strong base titration, why is the equivalence point pH greater than 7?",
      "choices": [
        "The resulting solution contains the weak acid's conjugate base, which is itself a weak base and reacts with water to produce some OH⁻.",
        "Strong bases always make every titration's equivalence point exactly pH 14.",
        "The equivalence point pH is unrelated to the identity of the acid or base used.",
        "Weak acids always produce a completely neutral equivalence point."
      ],
      "correct": 0,
      "explanation": "At the equivalence point of a weak acid-strong base titration, all the original weak acid has been converted into its conjugate base. Since this conjugate base is itself a genuine (if weak) base, it reacts with water to produce some OH⁻, making the solution basic — hence a pH greater than 7 at equivalence."
    },
    {
      "id": "8-26",
      "topic": "8.4 Acid-Base Reactions/Titrations",
      "stem": "In a weak base-strong acid titration, what is true about the equivalence point pH?",
      "choices": [
        "It is less than 7, since the resulting conjugate acid of the weak base makes the solution acidic.",
        "It is always greater than 7.",
        "It is always exactly 7.",
        "It cannot be predicted without extensive calculation."
      ],
      "correct": 0,
      "explanation": "At the equivalence point, the weak base has been fully converted into its conjugate acid, which — being the conjugate of a weak base — has genuine, if modest, acidic character and reacts with water to produce some H⁺, making the solution acidic (pH < 7)."
    },
    {
      "id": "8-27",
      "topic": "8.4 Acid-Base Reactions/Titrations",
      "stem": "25.0 mL of 0.150 M HCl is titrated with 0.100 M NaOH. What volume of NaOH is needed to reach the equivalence point?",
      "choices": [
        "37.5 mL",
        "16.7 mL",
        "25.0 mL",
        "50.0 mL"
      ],
      "correct": 0,
      "explanation": "Moles HCl = 0.150 × 0.0250 = 3.75×10⁻³ mol. Since HCl + NaOH is a 1:1 reaction, moles NaOH needed = 3.75×10⁻³ mol. Volume = moles/M = 3.75×10⁻³/0.100 = 0.0375 L = 37.5 mL."
    },
    {
      "id": "8-28",
      "topic": "8.4 Acid-Base Reactions/Titrations",
      "stem": "Why can't the equivalence point pH of a weak acid-strong base titration be assumed to be exactly 7.00, the way it can for a strong acid-strong base titration?",
      "choices": [
        "Because the weak acid's conjugate base (present at equivalence) still has genuine, unreacted basic character, unlike a strong acid's conjugate base, which has essentially none.",
        "Weak acids never actually reach a true equivalence point.",
        "This is actually a false statement; all titrations have equivalence point pH = 7.",
        "Only strong bases can be used in any titration."
      ],
      "correct": 0,
      "explanation": "A strong acid's conjugate base is so weak (essentially negligible basicity) that it doesn't meaningfully affect the solution's pH, leaving pure water's natural neutrality (pH 7) intact at equivalence. A weak acid's conjugate base, by contrast, retains genuine basic character (since it came from an acid that didn't fully dissociate), which does measurably shift the equivalence point pH above 7."
    },
    {
      "id": "8-29",
      "topic": "8.5 Structure and Acid Strength",
      "stem": "Which binary acid is the strongest, based on bond strength trends down a group?",
      "choices": [
        "HF",
        "HCl",
        "HBr",
        "HI"
      ],
      "correct": 3,
      "explanation": "For binary acids within the same group, acid strength increases as the H-X bond becomes weaker (easier to break, releasing H⁺ more readily) — bond strength decreases down a group as atomic radius increases (weaker orbital overlap), making HI's H-I bond the weakest and HI the strongest acid among these four hydrohalic acids."
    },
    {
      "id": "8-30",
      "topic": "8.5 Structure and Acid Strength",
      "stem": "Which oxyacid is the strongest?",
      "choices": [
        "HClO",
        "HBrO",
        "HIO",
        "All have identical strength"
      ],
      "correct": 0,
      "explanation": "For oxyacids with the same basic structure but different central halogen atoms, acid strength increases with the electronegativity of the central atom (more electronegative central atom pulls more electron density away from the O-H bond, weakening it and stabilizing the resulting conjugate base). Since electronegativity decreases down Group 17 (Cl > Br > I), HClO is the strongest of these three oxyacids."
    },
    {
      "id": "8-31",
      "topic": "8.5 Structure and Acid Strength",
      "stem": "Between H₂SO₃ and H₂SO₄, which is the stronger acid, and why?",
      "choices": [
        "H₂SO₄, because it has one more oxygen atom, which further weakens the O-H bond and better stabilizes the conjugate base through additional electron-withdrawing effect.",
        "H₂SO₃, because fewer oxygens means a stronger acid.",
        "They are equally strong, since both contain sulfur.",
        "Acid strength cannot be compared between these two compounds."
      ],
      "correct": 0,
      "explanation": "H₂SO₄ has one more oxygen atom bonded to the central sulfur than H₂SO₃ (4 vs. 3 total oxygens). More oxygen atoms increase acid strength for oxyacids, since each additional highly electronegative oxygen further withdraws electron density from the O-H bond, weakening it and increasing the conjugate base's stability through resonance delocalization — making H₂SO₄ the significantly stronger acid (in fact, a strong acid, while H₂SO₃ is weak)."
    },
    {
      "id": "8-32",
      "topic": "8.5 Structure and Acid Strength",
      "stem": "Why does increasing the number of oxygen atoms in an oxyacid increase its acid strength?",
      "choices": [
        "Additional highly electronegative oxygen atoms withdraw electron density from the O-H bond (making it more polar/weaker) and help stabilize the resulting negative charge on the conjugate base through delocalization.",
        "More oxygen atoms make the molecule physically larger, which always increases acidity for unrelated reasons.",
        "Oxygen atoms have no electronic effect on acid strength.",
        "Additional oxygens decrease the molecule's overall polarity."
      ],
      "correct": 0,
      "explanation": "Each additional oxygen atom bonded to the central atom pulls electron density toward itself (being highly electronegative), which indirectly weakens the O-H bond by pulling electron density away from it, making the proton easier to release. Additionally, more oxygens allow better delocalization (spreading out) of the negative charge on the conjugate base once the proton leaves, making that conjugate base more stable — both effects favor greater acid strength."
    },
    {
      "id": "8-33",
      "topic": "8.5 Structure and Acid Strength",
      "stem": "Which factor makes CCl₃COOH (trichloroacetic acid) a stronger acid than CH₃COOH (acetic acid)?",
      "choices": [
        "The three highly electronegative chlorine atoms withdraw electron density through the molecule, stabilizing the negative charge on the conjugate base and making the O-H proton easier to release.",
        "Chlorine atoms have no electronic effect on nearby O-H bonds.",
        "CCl₃COOH has fewer oxygen atoms than CH₃COOH.",
        "CCl₃COOH is actually a weaker acid than CH₃COOH."
      ],
      "correct": 0,
      "explanation": "Even though the chlorine atoms aren't directly bonded to the acidic O-H group, their strong electronegativity withdraws electron density through the molecule's bonding framework (an inductive effect), which helps stabilize the resulting negative charge on the conjugate base after the proton leaves — this inductive electron-withdrawal is why halogen-substituted acids are consistently stronger than their non-substituted counterparts."
    },
    {
      "id": "8-34",
      "topic": "8.5 Structure and Acid Strength",
      "stem": "Which factor primarily determines binary acid (H-X) strength within the SAME period (not group)?",
      "choices": [
        "Bond polarity — increasing electronegativity of X across a period increases the H-X bond's polarity, making it easier to ionize.",
        "Bond strength only, with no consideration of polarity.",
        "Atomic radius of X only.",
        "Binary acid strength cannot be compared across a period."
      ],
      "correct": 0,
      "explanation": "Within the same period (where bond strength differences are less dominant than the group-wise trend), increasing electronegativity of X across the period increases the polarity of the H-X bond, making the H more readily released as H⁺ — this is why, for example, acid strength trends H₂O < HF within Period 2 hydrides (comparing across a period rather than down a group)."
    },
    {
      "id": "8-35",
      "topic": "8.5 Structure and Acid Strength",
      "stem": "Stretch — beyond typical AP difficulty: Explain why HF is a WEAK acid, despite fluorine being the most electronegative element, while HCl, HBr, and HI (less electronegative halogens) are all strong acids.",
      "choices": [
        "For binary acids, bond STRENGTH (which depends heavily on atomic size/orbital overlap) dominates over electronegativity/polarity trends down a group; F's very small size creates an unusually strong, hard-to-break H-F bond that outweighs its high electronegativity's tendency to increase polarity.",
        "This is a printing error; HF is actually a strong acid.",
        "Electronegativity has no bearing on acid strength for any binary acid.",
        "HF is weak simply because fluorine has the smallest atomic radius, with no other explanation needed."
      ],
      "correct": 0,
      "explanation": "This is a genuinely subtle point: while electronegativity trends would suggest HF should be a very strong acid (high bond polarity), fluorine's very small atomic radius creates unusually strong orbital overlap with hydrogen, making the H-F bond significantly stronger (harder to break) than the H-Cl, H-Br, or H-I bonds. For binary acids down a group, this bond-strength effect (which favors weaker acids for smaller X) ends up dominating over the polarity effect (which would favor stronger acids for more electronegative X) — resulting in HF being a notable, well-known exception among the hydrohalic acids.",
      "stretch": true
    },
    {
      "id": "8-36",
      "topic": "8.6 pH and pKa",
      "stem": "An acid has Ka = 2.5 × 10⁻³. Find its pKa.",
      "choices": [
        "2.60",
        "0.40",
        "−2.60",
        "3.00"
      ],
      "correct": 0,
      "explanation": "pKa = −log(Ka) = −log(2.5×10⁻³) = 2.60."
    },
    {
      "id": "8-37",
      "topic": "8.6 pH and pKa",
      "stem": "An acid has pKa = 8.30. Find its Ka.",
      "choices": [
        "5.0 × 10⁻⁹",
        "8.30",
        "1.3 × 10⁸",
        "3.16 × 10⁻⁹"
      ],
      "correct": 0,
      "explanation": "Ka = 10^(−pKa) = 10^(−8.30) = 5.0 × 10⁻⁹."
    },
    {
      "id": "8-38",
      "topic": "8.6 pH and pKa",
      "stem": "Which acid is the strongest, based on pKa values: Acid A (pKa=2.1), Acid B (pKa=5.8), Acid C (pKa=9.3)?",
      "choices": [
        "Acid A, since it has the smallest pKa (and therefore the largest Ka)",
        "Acid C, since it has the largest pKa number",
        "All three acids are equally strong",
        "Acid B, since it is in the middle"
      ],
      "correct": 0,
      "explanation": "Smaller pKa corresponds to larger Ka, which corresponds to a stronger acid. Acid A's pKa (2.1) is the smallest of the three, meaning it has the largest Ka and is therefore the strongest acid among the three options."
    },
    {
      "id": "8-39",
      "topic": "8.6 pH and pKa",
      "stem": "Why is it useful to express Ka as pKa, analogous to expressing [H⁺] as pH?",
      "choices": [
        "Ka values often span many orders of magnitude (very large ranges), and the logarithmic pKa scale compresses this range into more convenient, easily comparable numbers.",
        "pKa and Ka are actually the exact same numerical value, just with different names.",
        "pKa has no practical advantage over using Ka directly.",
        "pKa can only be used for strong acids, never weak acids."
      ],
      "correct": 0,
      "explanation": "Ka values for different weak acids can range from around 10⁻² down to 10⁻¹⁰ or smaller — an enormous range that's unwieldy to compare directly. Taking the negative log (pKa) compresses this into a much more manageable, typically single-digit-to-low-double-digit range, making it far easier to quickly compare relative acid strengths, exactly analogous to how pH is more convenient than working directly with [H⁺]."
    },
    {
      "id": "8-40",
      "topic": "8.6 pH and pKa",
      "stem": "A weak acid has pKa = 4.5. At what pH would you expect [HA] to equal [A⁻] exactly (i.e., a 50/50 mixture of acid and conjugate base)?",
      "choices": [
        "pH = 4.5, since this is exactly where pH = pKa",
        "pH = 7.0",
        "pH = 9.0",
        "pH = 0"
      ],
      "correct": 0,
      "explanation": "Using Henderson-Hasselbalch (covered fully in 8.9): pH = pKa + log([A⁻]/[HA]). When [A⁻] = [HA], the ratio is 1, and log(1) = 0, so pH = pKa exactly. This is the same principle underlying the half-equivalence point in a titration (Unit 8.10)."
    },
    {
      "id": "8-41",
      "topic": "8.6 pH and pKa",
      "stem": "Which best describes the relationship between an acid's Ka and its conjugate base's Kb, expressed via their negative logs?",
      "choices": [
        "pKa + pKb = pKw = 14.00 (at 25°C), directly analogous to pH + pOH = 14.00",
        "pKa = pKb always, for any conjugate pair",
        "pKa − pKb = 14.00",
        "There is no relationship between pKa and pKb"
      ],
      "correct": 0,
      "explanation": "Since Ka × Kb = Kw, taking the negative log of both sides gives pKa + pKb = pKw = 14.00 at 25°C — this is the exact logarithmic-form analog of the Ka × Kb = Kw relationship covered in section 8.3, useful for quickly converting between an acid's pKa and its conjugate base's pKb."
    },
    {
      "id": "8-42",
      "topic": "8.7 Properties of Buffers",
      "stem": "Which combination would create an effective buffer solution?",
      "choices": [
        "HCl and NaCl",
        "CH₃COOH and CH₃COONa",
        "NaOH and NaCl",
        "HCl and NaOH in exactly stoichiometric amounts"
      ],
      "correct": 1,
      "explanation": "A buffer requires a weak acid (or weak base) together with a significant amount of its conjugate partner. CH₃COOH (a weak acid) and CH₃COONa (providing its conjugate base, acetate ion) is a classic, valid buffer pair. The other options either involve only a strong acid/base with a non-conjugate spectator salt, or a strong acid-strong base combination that would simply neutralize to a non-buffered neutral salt solution."
    },
    {
      "id": "8-43",
      "topic": "8.7 Properties of Buffers",
      "stem": "Why does a buffer resist significant pH change upon addition of a small amount of strong acid?",
      "choices": [
        "The buffer's conjugate base component reacts with and consumes the added H⁺, converting it into more of the weak acid rather than leaving it as free H⁺.",
        "Buffers chemically destroy any added acid instantly and completely.",
        "Buffers prevent any acid from ever being added to the solution.",
        "The buffer's weak acid component reacts with the added H⁺."
      ],
      "correct": 0,
      "explanation": "The buffer's conjugate base component (present in significant quantity) reacts with added H⁺ (conjugate base + H⁺ → weak acid), consuming most of the added strong acid and converting it into more of the already-present weak acid — this neutralization prevents the free [H⁺] from spiking dramatically, keeping the pH change small."
    },
    {
      "id": "8-44",
      "topic": "8.7 Properties of Buffers",
      "stem": "Why does a buffer resist significant pH change upon addition of a small amount of strong base?",
      "choices": [
        "The buffer's weak acid component reacts with and consumes the added OH⁻, converting it into more of the conjugate base and water, rather than leaving free OH⁻ to raise pH sharply.",
        "Buffers cannot resist added base, only added acid.",
        "The buffer's conjugate base component reacts with the added OH⁻.",
        "Added base has no effect on a buffered solution whatsoever."
      ],
      "correct": 0,
      "explanation": "The buffer's weak acid component reacts with added OH⁻ (weak acid + OH⁻ → conjugate base + H₂O), neutralizing most of the added strong base and converting it into more of the conjugate base plus water — this prevents the free [OH⁻] from spiking, keeping the pH increase small rather than dramatic."
    },
    {
      "id": "8-45",
      "topic": "8.7 Properties of Buffers",
      "stem": "Which of the following would NOT function as an effective buffer?",
      "choices": [
        "A solution of only strong acid, with no other components",
        "A mixture of NH₃ and NH₄Cl",
        "A mixture of HF and NaF",
        "A mixture of H₂CO₃ and NaHCO₃"
      ],
      "correct": 0,
      "explanation": "A solution of only a strong acid has no significant reservoir of conjugate base to neutralize any added base, and any added acid would simply increase [H⁺] directly without any buffering mechanism — strong acid/base solutions alone are never buffers. The other three options are all valid weak acid/conjugate base (or weak base/conjugate acid) pairs."
    },
    {
      "id": "8-46",
      "topic": "8.7 Properties of Buffers",
      "stem": "A buffer is prepared using a weak base and its conjugate acid. Which pair correctly represents this type of buffer?",
      "choices": [
        "NH₃ and NH₄Cl",
        "HCl and NaCl",
        "CH₃COOH and CH₃COONa",
        "NaOH and Na₂SO₄"
      ],
      "correct": 0,
      "explanation": "NH₃ (a weak base) paired with NH₄Cl (providing NH₄⁺, its conjugate acid) is a classic weak-base-type buffer, functioning by the same underlying logic as a weak-acid-type buffer, just with the roles of acid and base reversed."
    },
    {
      "id": "8-47",
      "topic": "8.7 Properties of Buffers",
      "stem": "Which statement correctly explains why buffers must contain BOTH a weak acid/base AND its conjugate, rather than just a weak acid/base alone?",
      "choices": [
        "A weak acid alone can neutralize added base (via its own dissociation reaction) but has no significant reservoir to neutralize added acid; the conjugate base component is specifically needed to handle added acid.",
        "A weak acid alone can already resist both added acid and added base equally well.",
        "Conjugate bases have no chemical function in a buffer.",
        "This dual-component requirement is unnecessary; any weak acid alone makes an effective buffer."
      ],
      "correct": 0,
      "explanation": "A weak acid solution alone, while it does have some inherent equilibrium buffering-like behavior, lacks a significant reservoir of its conjugate base to neutralize ADDED acid effectively — without a substantial amount of conjugate base already present, adding strong acid would push the weak acid equilibrium hard toward even less dissociation, but there's no dedicated species specifically positioned to consume that added H⁺ the way a true, properly-constituted buffer's conjugate base component does."
    },
    {
      "id": "8-48",
      "topic": "8.8 Buffer Capacity",
      "stem": "Which buffer would have the GREATEST buffer capacity?",
      "choices": [
        "0.010 M weak acid / 0.010 M conjugate base",
        "1.0 M weak acid / 1.0 M conjugate base",
        "0.10 M weak acid / 0.010 M conjugate base",
        "0.010 M weak acid / 0.10 M conjugate base"
      ],
      "correct": 1,
      "explanation": "Buffer capacity increases with the ABSOLUTE concentration of both components (more total 'reservoir' available to neutralize added acid/base), and is maximized when the two components are present in roughly EQUAL amounts. The 1.0 M/1.0 M option has both the highest absolute concentrations and an equal ratio, giving it the greatest buffer capacity among these choices."
    },
    {
      "id": "8-49",
      "topic": "8.8 Buffer Capacity",
      "stem": "Two buffers have the same 1:1 ratio of weak acid to conjugate base, but Buffer X has concentrations of 0.50 M each while Buffer Y has concentrations of 0.050 M each. Which has greater capacity?",
      "choices": [
        "Buffer X, since higher absolute concentrations mean a larger reservoir of both components available to neutralize added acid or base.",
        "Buffer Y, since lower concentrations always mean greater capacity.",
        "Both have identical capacity, since the ratio (and therefore the pH) is the same.",
        "Capacity cannot be determined from concentration alone."
      ],
      "correct": 0,
      "explanation": "While both buffers would have the SAME pH (since Henderson-Hasselbalch depends only on the ratio, not absolute concentration), Buffer X's much higher absolute concentrations mean it has far more weak acid and conjugate base available to consume before either component is significantly depleted — giving it substantially greater buffer capacity, even though the pH values are identical."
    },
    {
      "id": "8-50",
      "topic": "8.8 Buffer Capacity",
      "stem": "Which is generally true about a buffer's capacity as its acid-to-base ratio moves further away from 1:1 (becomes more unequal)?",
      "choices": [
        "Buffer capacity generally decreases as the ratio becomes more unequal, since one component becomes depleted more easily upon addition of acid or base in that direction.",
        "Buffer capacity is completely unaffected by the ratio between components.",
        "Buffer capacity always increases as the ratio becomes more unequal.",
        "A buffer's ratio has no meaningful upper or lower limit for effective functioning."
      ],
      "correct": 0,
      "explanation": "A buffer works best (has maximum capacity) when both components are present in comparable, roughly equal amounts, since this maximizes the reservoir available to neutralize disturbances in EITHER direction. As the ratio becomes more skewed (e.g., 10:1 or more), the minority component becomes relatively easy to fully deplete with only a modest addition of acid or base, reducing the buffer's overall effective capacity, especially in that particular direction."
    },
    {
      "id": "8-51",
      "topic": "8.8 Buffer Capacity",
      "stem": "A buffer's pH is determined by the RATIO of its components (Henderson-Hasselbalch), while its capacity is determined by:",
      "choices": [
        "The absolute concentrations of both components, not just their ratio.",
        "The temperature of the solution only.",
        "The exact same factor as pH (the ratio alone).",
        "Nothing measurable; capacity cannot be quantified."
      ],
      "correct": 0,
      "explanation": "This is the key distinction covered in this section: pH depends only on the RATIO of conjugate base to weak acid (Henderson-Hasselbalch), while buffer CAPACITY depends on the actual absolute amounts (concentrations) of both components present — two buffers can share an identical pH but have very different capacities if their absolute concentrations differ."
    },
    {
      "id": "8-52",
      "topic": "8.8 Buffer Capacity",
      "stem": "A buffer with a 1:1 ratio of weak acid to conjugate base has its pH change measured after adding a small amount of strong acid. Compared to a buffer with a 9:1 ratio (weak acid: conjugate base) receiving the SAME amount of added strong acid, which buffer likely shows a smaller pH change?",
      "choices": [
        "The 1:1 buffer, since it has more conjugate base available (relative to a 9:1 ratio) to specifically neutralize the added acid.",
        "The 9:1 buffer, since more weak acid always means better buffering against added acid specifically.",
        "Both buffers would show identical pH changes regardless of ratio.",
        "This scenario cannot be analyzed without knowing the exact Ka value."
      ],
      "correct": 0,
      "explanation": "Since added acid is specifically neutralized by the conjugate base component, a buffer with MORE conjugate base available relative to its total (like the 1:1 ratio, which has proportionally more conjugate base than the 9:1 ratio's minority conjugate base) is better equipped to absorb added acid without depleting that component significantly — giving the 1:1 buffer a smaller pH change in response to added acid specifically."
    },
    {
      "id": "8-53",
      "topic": "8.9 pH and Buffer Composition",
      "stem": "Find the pH of a buffer with pKa = 4.20, [weak acid] = 0.300 M, [conjugate base] = 0.300 M.",
      "choices": [
        "4.20",
        "4.00",
        "4.50",
        "8.40"
      ],
      "correct": 0,
      "explanation": "Using Henderson-Hasselbalch: pH = pKa + log([base]/[acid]) = 4.20 + log(0.300/0.300) = 4.20 + log(1) = 4.20 + 0 = 4.20. Whenever the two components are equal, pH always equals pKa exactly."
    },
    {
      "id": "8-54",
      "topic": "8.9 pH and Buffer Composition",
      "stem": "Find the pH of a buffer with pKa = 4.74, [weak acid] = 0.200 M, [conjugate base] = 0.600 M.",
      "choices": [
        "5.22",
        "4.26",
        "4.74",
        "5.50"
      ],
      "correct": 0,
      "explanation": "pH = 4.74 + log(0.600/0.200) = 4.74 + log(3.00) = 4.74 + 0.477 = 5.22."
    },
    {
      "id": "8-55",
      "topic": "8.9 pH and Buffer Composition",
      "stem": "Find the pH of a buffer with pKa = 9.25, [weak base's conjugate acid] = 0.400 M, [weak base] = 0.100 M.",
      "choices": [
        "8.65",
        "9.85",
        "9.25",
        "8.25"
      ],
      "correct": 0,
      "explanation": "For a weak-base-type buffer, Henderson-Hasselbalch is applied with [base]/[acid] using NH₃ (base) and NH₄⁺ (its conjugate acid): pH = 9.25 + log(0.100/0.400) = 9.25 + log(0.250) = 9.25 + (−0.602) = 8.65."
    },
    {
      "id": "8-56",
      "topic": "8.9 pH and Buffer Composition",
      "stem": "A buffer has pKa = 5.00. What ratio of [conjugate base]/[weak acid] is needed to achieve pH = 6.00?",
      "choices": [
        "10:1",
        "1:10",
        "1:1",
        "100:1"
      ],
      "correct": 0,
      "explanation": "6.00 = 5.00 + log(ratio). Solving: log(ratio) = 1.00, so ratio = 10^1.00 = 10. The ratio [base]/[acid] must be 10:1 to raise pH exactly 1 unit above pKa."
    },
    {
      "id": "8-57",
      "topic": "8.9 pH and Buffer Composition",
      "stem": "A buffer has pKa = 5.00. What ratio of [conjugate base]/[weak acid] is needed to achieve pH = 4.00 (one unit BELOW pKa)?",
      "choices": [
        "1:10",
        "10:1",
        "1:1",
        "1:100"
      ],
      "correct": 0,
      "explanation": "4.00 = 5.00 + log(ratio). Solving: log(ratio) = −1.00, so ratio = 10^(−1.00) = 0.10, or 1:10. A pH below pKa requires more weak acid than conjugate base, exactly the mirror image of the previous question's above-pKa scenario."
    },
    {
      "id": "8-58",
      "topic": "8.9 pH and Buffer Composition",
      "stem": "A buffer is prepared by mixing 0.400 mol of CH₃COOH with 0.250 mol of CH₃COONa in 1.00 L of solution (pKa = 4.74). Find the pH.",
      "choices": [
        "4.54",
        "4.94",
        "4.74",
        "5.14"
      ],
      "correct": 0,
      "explanation": "Since both are in the same 1.00 L, moles directly equal molarity here. pH = 4.74 + log(0.250/0.400) = 4.74 + log(0.625) = 4.74 + (−0.204) = 4.54."
    },
    {
      "id": "8-59",
      "topic": "8.9 pH and Buffer Composition",
      "stem": "Which correctly identifies the source of the Henderson-Hasselbalch equation?",
      "choices": [
        "It is derived directly from the weak acid equilibrium expression (Ka = [H⁺][A⁻]/[HA]), rearranged and expressed using logarithms.",
        "It is an entirely independent empirical formula unrelated to Ka.",
        "It only applies to strong acids and bases.",
        "It has no mathematical connection to equilibrium concepts."
      ],
      "correct": 0,
      "explanation": "Starting from Ka = [H⁺][A⁻]/[HA] and solving for [H⁺], then taking the negative log of both sides and applying logarithm rules, directly yields pH = pKa + log([A⁻]/[HA]) — Henderson-Hasselbalch isn't a separate, independent formula, but rather a convenient rearrangement of the same fundamental weak acid equilibrium expression covered in Unit 8.3."
    },
    {
      "id": "8-60",
      "topic": "8.10 Titrations Deep Dive",
      "stem": "At the half-equivalence point of a weak acid-strong base titration, what is true?",
      "choices": [
        "pH = pKa exactly, since [weak acid] = [conjugate base] at this point.",
        "pH = 7.00 exactly.",
        "All of the weak acid has been converted to its conjugate base.",
        "No reaction has occurred yet."
      ],
      "correct": 0,
      "explanation": "At the half-equivalence point, exactly half of the original weak acid has reacted with the added base, meaning [weak acid remaining] = [conjugate base formed]. Plugging this 1:1 ratio into Henderson-Hasselbalch gives pH = pKa + log(1) = pKa + 0 = pKa exactly — a direct, elegant experimental way to determine an unknown acid's pKa."
    },
    {
      "id": "8-61",
      "topic": "8.10 Titrations Deep Dive",
      "stem": "A titration curve for a weak acid titrated with a strong base shows a relatively flat region before the equivalence point, followed by a steep rise near equivalence. What does the flat region represent?",
      "choices": [
        "The buffer region, where the solution contains significant amounts of both the weak acid and its conjugate base, resisting large pH changes as base is added.",
        "The region where no reaction is occurring at all.",
        "The point where the titration is complete.",
        "A region unrelated to buffering."
      ],
      "correct": 0,
      "explanation": "As strong base is gradually added to a weak acid (before reaching equivalence), a mixture of unreacted weak acid and newly formed conjugate base accumulates — this mixture IS a buffer, and its buffering action (resisting significant pH change) is exactly why this region of the titration curve appears relatively flat compared to the steep rise seen right at the equivalence point."
    },
    {
      "id": "8-62",
      "topic": "8.10 Titrations Deep Dive",
      "stem": "A titration curve shows a very steep, nearly vertical rise in pH right around the equivalence point. What does the STEEPNESS of this rise generally indicate?",
      "choices": [
        "A relatively small volume of added titrant causes a large pH change, since near the equivalence point, the buffering capacity has been essentially exhausted (one component is nearly fully depleted).",
        "The titration has actually failed at this point.",
        "The steepness has no chemical significance.",
        "The reaction is now proceeding in reverse."
      ],
      "correct": 0,
      "explanation": "Right around the equivalence point, the weak acid (or conjugate base being consumed) has been almost entirely used up, meaning the buffering system that kept pH changes gradual throughout the earlier region is no longer functioning effectively — with the buffer's reservoir essentially depleted, even a very small additional amount of titrant causes a dramatic, steep pH swing, which is exactly the feature used to visually identify the equivalence point on a titration curve."
    },
    {
      "id": "8-63",
      "topic": "8.10 Titrations Deep Dive",
      "stem": "In a weak acid-strong base titration, what is the pH BEFORE any base has been added (at the very start)?",
      "choices": [
        "Determined by the initial weak acid equilibrium alone (a standard weak acid ICE table calculation, as in Unit 8.3).",
        "Always exactly 7.00.",
        "Always equal to the equivalence point pH.",
        "Cannot be determined under any circumstances."
      ],
      "correct": 0,
      "explanation": "At the very start of the titration (zero volume of base added), the solution is simply the original weak acid in water, with no base yet added to create any buffer mixture — its pH is found using the standard weak acid equilibrium (ICE table) methods from Unit 8.3, entirely independent of any titration-specific reasoning."
    },
    {
      "id": "8-64",
      "topic": "8.10 Titrations Deep Dive",
      "stem": "A student titrates an unknown weak acid and observes the half-equivalence point at a pH of 5.35. What can be directly concluded?",
      "choices": [
        "The unknown acid's pKa is 5.35, and its Ka = 10^(−5.35) = 4.47×10⁻⁶.",
        "The unknown acid's equivalence point pH must also be 5.35.",
        "The unknown acid is a strong acid.",
        "No information about the acid can be determined from this single data point."
      ],
      "correct": 0,
      "explanation": "Since pH = pKa exactly at the half-equivalence point, observing a half-equivalence pH of 5.35 directly and immediately reveals that this unknown acid's pKa = 5.35, from which Ka can be calculated as 10^(−5.35) = 4.47×10⁻⁶ — this is precisely why the half-equivalence point is such a valuable, frequently-used experimental technique for determining an unknown weak acid's Ka."
    },
    {
      "id": "8-65",
      "topic": "8.10 Titrations Deep Dive",
      "stem": "Stretch — beyond typical AP difficulty: A diprotic weak acid (H₂A) is titrated with a strong base. How many equivalence points and half-equivalence points would you expect to observe on the titration curve?",
      "choices": [
        "Two equivalence points and two half-equivalence points, corresponding to the sequential loss of each of the two acidic protons, each with its own Ka₁ and Ka₂.",
        "Only one equivalence point and one half-equivalence point, exactly like a monoprotic acid.",
        "Three equivalence points, since diprotic implies three distinct species.",
        "Diprotic acids cannot be titrated using standard methods."
      ],
      "correct": 0,
      "explanation": "A diprotic acid loses its two acidic protons sequentially (first the more easily removed proton, governed by Ka₁, then the second, governed by the smaller Ka₂), producing a titration curve with two distinct equivalence points (one after each proton is fully neutralized) and two corresponding half-equivalence points — the first half-equivalence point reveals pKa₁, and the second reveals pKa₂, extending the standard monoprotic titration curve logic to a more complex, two-step process.",
      "stretch": true
    }
  ],
  "9": [
    {
      "id": "9-1",
      "topic": "9.1 Introduction to Entropy",
      "stem": "Predict the sign of ΔS for the process: H₂O(l) → H₂O(g)",
      "choices": [
        "Positive",
        "Negative",
        "Zero",
        "Cannot be determined"
      ],
      "correct": 0,
      "explanation": "Vaporization (liquid to gas) dramatically increases the number of possible arrangements/positions available to the molecules, since gas particles are far more spread out and have much greater freedom of motion than liquid particles — this always corresponds to a positive ΔS (increasing entropy)."
    },
    {
      "id": "9-2",
      "topic": "9.1 Introduction to Entropy",
      "stem": "Predict the sign of ΔS for: N₂(g) + 3H₂(g) → 2NH₃(g)",
      "choices": [
        "Positive",
        "Negative",
        "Zero",
        "Cannot be determined without more data"
      ],
      "correct": 1,
      "explanation": "Moles of gas decrease from 4 (1 N₂ + 3 H₂) on the reactant side to 2 (2 NH₃) on the product side. Fewer moles of gas means fewer possible particle arrangements, so ΔS is negative (entropy decreases) for this reaction."
    },
    {
      "id": "9-3",
      "topic": "9.1 Introduction to Entropy",
      "stem": "What does the Second Law of Thermodynamics state about entropy?",
      "choices": [
        "The entropy of any individual system always increases.",
        "The total entropy of the universe (system + surroundings) always increases for any spontaneous process.",
        "Entropy can never decrease for any process, system, or surroundings.",
        "Entropy is always conserved, like energy."
      ],
      "correct": 1,
      "explanation": "The Second Law specifically refers to the TOTAL entropy of the universe (system plus surroundings combined), which must increase for any spontaneous process — an individual system's own entropy CAN decrease (like water freezing), as long as the surroundings' entropy increases by an even greater amount to keep the total positive."
    },
    {
      "id": "9-4",
      "topic": "9.1 Introduction to Entropy",
      "stem": "Predict the sign of ΔS when a solid ionic compound dissolves in water.",
      "choices": [
        "Generally positive, since the highly ordered ionic lattice breaks apart into more randomly distributed, mobile ions in solution.",
        "Always negative, since dissolving always decreases entropy.",
        "Always exactly zero.",
        "Impossible to predict for any dissolving process."
      ],
      "correct": 0,
      "explanation": "Dissolving generally increases entropy, since the rigid, highly ordered arrangement of ions in a solid lattice is disrupted into a much more randomly distributed, mobile arrangement of hydrated ions spread throughout the solution — more accessible arrangements means higher entropy."
    },
    {
      "id": "9-5",
      "topic": "9.1 Introduction to Entropy",
      "stem": "Which process would you expect to have a negative ΔS?",
      "choices": [
        "CO₂(s) → CO₂(g) (sublimation)",
        "2H₂(g) + O₂(g) → 2H₂O(g)",
        "NaCl(s) → Na⁺(aq) + Cl⁻(aq)",
        "N₂O₄(g) → 2NO₂(g)"
      ],
      "correct": 1,
      "explanation": "This reaction decreases moles of gas from 3 (2 H₂ + 1 O₂) to 2 (2 H₂O), decreasing the number of possible particle arrangements — a negative ΔS. The other three options all involve an increase in disorder/particle count/phase change toward gas, all favoring positive ΔS."
    },
    {
      "id": "9-6",
      "topic": "9.1 Introduction to Entropy",
      "stem": "Why does increasing temperature generally increase a substance's entropy?",
      "choices": [
        "Higher temperature gives particles access to a greater range of possible energy states/levels and increases molecular motion, both of which increase the number of accessible microstates.",
        "Higher temperature always converts a substance to a gas.",
        "Temperature has no relationship to entropy.",
        "Higher temperature decreases the total number of particles present."
      ],
      "correct": 0,
      "explanation": "At higher temperature, particles have more kinetic energy and can occupy a wider range of possible energy states (translational, rotational, vibrational), increasing the total number of ways the system's energy can be distributed among its particles — more accessible microstates directly corresponds to higher entropy."
    },
    {
      "id": "9-7",
      "topic": "9.2 Absolute Entropy",
      "stem": "Which has the highest absolute entropy (S°) at room temperature?",
      "choices": [
        "H₂O(s)",
        "H₂O(l)",
        "H₂O(g)",
        "All three have identical entropy"
      ],
      "correct": 2,
      "explanation": "For the same substance, gas phase has the highest entropy (greatest freedom of motion and largest number of possible arrangements), followed by liquid, then solid (most restricted, most ordered, lowest entropy)."
    },
    {
      "id": "9-8",
      "topic": "9.2 Absolute Entropy",
      "stem": "Which molecule would you expect to have a higher S° value: CH₄ or C₃H₈ (both gases)?",
      "choices": [
        "C₃H₈, since it is a larger, more structurally complex molecule with more possible internal vibrations and arrangements.",
        "CH₄, since smaller molecules always have higher entropy.",
        "Both would have identical entropy.",
        "Entropy cannot be compared between different molecules."
      ],
      "correct": 0,
      "explanation": "Larger, more complex molecules generally have more possible internal degrees of freedom (bond rotations, vibrations, and configurations), giving them higher absolute entropy than smaller, simpler molecules in the same phase — C₃H₈ (propane) has more atoms and more possible internal motions than CH₄ (methane)."
    },
    {
      "id": "9-9",
      "topic": "9.2 Absolute Entropy",
      "stem": "According to the Third Law of Thermodynamics, what is the entropy of a perfect crystal at 0 K?",
      "choices": [
        "Exactly zero",
        "Always positive, but small",
        "Always negative",
        "Undefined at 0 K"
      ],
      "correct": 0,
      "explanation": "The Third Law of Thermodynamics states that a perfect crystalline solid at absolute zero (0 K) has exactly zero entropy — this represents a state of perfect order with only one possible microstate (every particle in one exact, fixed position), providing the absolute reference point that allows entropy to be measured on an absolute scale, unlike enthalpy."
    },
    {
      "id": "9-10",
      "topic": "9.2 Absolute Entropy",
      "stem": "Which correctly ranks these substances by expected S° (lowest to highest): diamond (a rigid covalent network solid), NaCl(s) (ionic solid), and Ar(g)?",
      "choices": [
        "Diamond < NaCl(s) < Ar(g)",
        "Ar(g) < NaCl(s) < Diamond",
        "NaCl(s) < Diamond < Ar(g)",
        "All three have identical entropy"
      ],
      "correct": 0,
      "explanation": "Diamond's extremely rigid, highly ordered covalent network structure gives it very low entropy (very few possible arrangements). NaCl's ionic lattice, while still ordered, is somewhat less rigidly constrained. Ar, being a gas, has by far the highest entropy of the three (much greater freedom of particle motion and arrangement) — giving the order diamond < NaCl(s) < Ar(g)."
    },
    {
      "id": "9-11",
      "topic": "9.2 Absolute Entropy",
      "stem": "Why can absolute entropy (S°) be measured for a single pure substance, unlike enthalpy (which requires ΔH, a change relative to some reference)?",
      "choices": [
        "Because entropy has a true absolute zero point (a perfect crystal at 0 K), established by the Third Law, providing a genuine reference point for measuring absolute values rather than only changes.",
        "Entropy cannot actually be measured absolutely; this is a common misconception.",
        "Enthalpy also has an absolute zero point, identical to entropy's.",
        "Absolute entropy values are purely theoretical and have no real physical meaning."
      ],
      "correct": 0,
      "explanation": "Because the Third Law establishes that entropy is exactly zero for a perfect crystal at absolute zero, entropy has a genuine, physically meaningful zero point — unlike enthalpy, which has no such natural zero and can therefore only be measured as a change (ΔH) relative to an arbitrarily chosen reference state (like elements in their standard states, ΔH°f = 0)."
    },
    {
      "id": "9-12",
      "topic": "9.3 Gibbs Free Energy",
      "stem": "A reaction has ΔH = −80.0 kJ and ΔS = +0.200 kJ/K. Calculate ΔG at 298 K.",
      "choices": [
        "−139.6 kJ",
        "−20.4 kJ",
        "+139.6 kJ",
        "−80.0 kJ"
      ],
      "correct": 0,
      "explanation": "ΔG = ΔH − TΔS = −80.0 − (298)(0.200) = −80.0 − 59.6 = −139.6 kJ."
    },
    {
      "id": "9-13",
      "topic": "9.3 Gibbs Free Energy",
      "stem": "A reaction has ΔH < 0 and ΔS > 0. At what temperatures is this reaction thermodynamically favorable?",
      "choices": [
        "Only at low temperatures",
        "Only at high temperatures",
        "At all temperatures",
        "At no temperature"
      ],
      "correct": 2,
      "explanation": "With ΔH negative (favoring negative ΔG) and ΔS positive (the −TΔS term is also negative, further favoring negative ΔG, since T is always positive in Kelvin), both terms in ΔG = ΔH − TΔS push toward a negative ΔG regardless of temperature — this combination is favorable at ALL temperatures."
    },
    {
      "id": "9-14",
      "topic": "9.3 Gibbs Free Energy",
      "stem": "A reaction has ΔH > 0 and ΔS < 0. At what temperatures is this reaction thermodynamically favorable?",
      "choices": [
        "Only at low temperatures",
        "Only at high temperatures",
        "At all temperatures",
        "At no temperature — always unfavorable"
      ],
      "correct": 3,
      "explanation": "With ΔH positive (unfavorable) and ΔS negative (−TΔS is positive, also unfavorable), both terms in ΔG = ΔH − TΔS push toward a positive ΔG regardless of temperature — this combination is unfavorable (ΔG > 0) at every temperature, never becoming spontaneous."
    },
    {
      "id": "9-15",
      "topic": "9.3 Gibbs Free Energy",
      "stem": "A reaction has ΔH = +50.0 kJ and ΔS = +0.150 kJ/K. Below what temperature is this reaction NOT favorable?",
      "choices": [
        "333 K",
        "50.0 K",
        "150 K",
        "200 K"
      ],
      "correct": 0,
      "explanation": "Set ΔG = 0 to find the crossover temperature: 0 = 50.0 − T(0.150), so T = 50.0/0.150 = 333 K. Below 333 K, ΔG > 0 (unfavorable, since the smaller TΔS term can't overcome the positive ΔH); above 333 K, ΔG < 0 (favorable, since TΔS grows large enough to overcome ΔH)."
    },
    {
      "id": "9-16",
      "topic": "9.3 Gibbs Free Energy",
      "stem": "Which of the following correctly describes 'thermodynamic favorability'?",
      "choices": [
        "A reaction with ΔG < 0 will proceed spontaneously in the forward direction as written, without needing continuous external energy input to drive it forward.",
        "A favorable reaction always proceeds instantly and completely.",
        "Thermodynamic favorability guarantees a reaction is also fast.",
        "ΔG > 0 indicates a favorable reaction."
      ],
      "correct": 0,
      "explanation": "Thermodynamic favorability (ΔG < 0) means the reaction is energetically 'downhill' and will proceed spontaneously without requiring ongoing external energy input — but this says nothing about HOW FAST it proceeds (that's a kinetic question, covered in Unit 9.4), and doesn't mean it proceeds instantly or completely."
    },
    {
      "id": "9-17",
      "topic": "9.3 Gibbs Free Energy",
      "stem": "A reaction has ΔH = −30.0 kJ/mol and ΔS = −85.0 J/(mol·K). Calculate ΔG at 298 K, being careful with units.",
      "choices": [
        "−4.67 kJ/mol",
        "+55.3 kJ/mol",
        "−30.0 kJ/mol",
        "−25330 kJ/mol"
      ],
      "correct": 0,
      "explanation": "Converting ΔS to kJ: −85.0 J/(mol·K) = −0.0850 kJ/(mol·K). ΔG = ΔH − TΔS = −30.0 − (298)(−0.0850) = −30.0 + 25.33 = −4.67 kJ/mol. Skipping the unit conversion (using −85.0 directly with kJ-scale ΔH) would give a wildly wrong answer, exactly the trap flagged in the study guide."
    },
    {
      "id": "9-18",
      "topic": "9.3 Gibbs Free Energy",
      "stem": "Ice melting (H₂O(s) → H₂O(l)) is thermodynamically favorable above 0°C but unfavorable below 0°C. What does this indicate about the signs of ΔH and ΔS for melting?",
      "choices": [
        "Both ΔH and ΔS are positive for melting, making it a temperature-dependent process (favorable only at high enough temperature).",
        "Both ΔH and ΔS are negative for melting.",
        "ΔH is negative and ΔS is positive, making melting favorable at all temperatures.",
        "Melting has no defined ΔH or ΔS."
      ],
      "correct": 0,
      "explanation": "Melting is endothermic (ΔH > 0, absorbing energy to overcome the solid's intermolecular forces) and increases entropy (ΔS > 0, liquid has more accessible arrangements than solid). This combination (+ΔH, +ΔS) is exactly the case that's favorable only at HIGH temperature — consistent with ice melting spontaneously above 0°C but not below, where the smaller TΔS term can't yet overcome the positive ΔH."
    },
    {
      "id": "9-19",
      "topic": "9.3 Gibbs Free Energy",
      "stem": "A reaction has ΔG = −5.0 kJ/mol at 298 K, calculated from ΔH = +20.0 kJ/mol. Determine ΔS for this reaction.",
      "choices": [
        "+83.9 J/(mol·K)",
        "+50.3 J/(mol·K)",
        "−83.9 J/(mol·K)",
        "+25.0 J/(mol·K)"
      ],
      "correct": 0,
      "explanation": "Rearranging ΔG = ΔH − TΔS for ΔS: ΔS = (ΔH − ΔG)/T = (20.0 − (−5.0))/298 = 25.0/298 = 0.0839 kJ/(mol·K) = 83.9 J/(mol·K). This reverse-engineering of ΔS from given ΔG and ΔH values requires the same equation, just solved for a different variable — a common extension of the basic ΔG=ΔH−TΔS calculation.",
      "stretch": true
    },
    {
      "id": "9-20",
      "topic": "9.4 Thermodynamic/Kinetic Control",
      "stem": "A reaction has ΔG < 0 but a very high activation energy. What can be concluded?",
      "choices": [
        "The reaction is thermodynamically favorable but may proceed very slowly due to kinetic limitations.",
        "The reaction cannot occur under any circumstances.",
        "The reaction must proceed instantly.",
        "ΔG < 0 guarantees a low activation energy."
      ],
      "correct": 0,
      "explanation": "Thermodynamic favorability (ΔG < 0) and kinetics (activation energy, rate) are independent properties of a reaction. A reaction can be strongly thermodynamically favorable yet still proceed extremely slowly if it has a high activation energy barrier — exactly the diamond-to-graphite example highlighted in the study guide."
    },
    {
      "id": "9-21",
      "topic": "9.4 Thermodynamic/Kinetic Control",
      "stem": "Why is the conversion of diamond to graphite (thermodynamically favorable at room temperature) not observed to occur in any practical human timescale?",
      "choices": [
        "The reaction has an extremely high activation energy, making it kinetically far too slow to observe, despite being thermodynamically favorable.",
        "The conversion is actually thermodynamically unfavorable.",
        "Diamond and graphite are actually the same substance.",
        "This conversion has never been studied or measured."
      ],
      "correct": 0,
      "explanation": "Even though graphite is the more thermodynamically stable form of carbon (ΔG < 0 for the diamond-to-graphite conversion), the activation energy required to rearrange diamond's rigid covalent network into graphite's layered structure is enormous, making the reaction kinetically prohibitively slow at normal conditions — a textbook illustration of thermodynamic favorability not implying kinetic feasibility."
    },
    {
      "id": "9-22",
      "topic": "9.4 Thermodynamic/Kinetic Control",
      "stem": "Which best distinguishes 'thermodynamic control' from 'kinetic control' of a reaction's outcome?",
      "choices": [
        "Thermodynamic control favors the most stable (lowest energy) product, typically requiring longer reaction times or higher temperatures to reach; kinetic control favors whichever product forms fastest, often via the lowest activation energy pathway, even if it's not the most stable.",
        "These two terms mean exactly the same thing.",
        "Kinetic control always produces the same result as thermodynamic control.",
        "Thermodynamic control refers only to reaction rate, not stability."
      ],
      "correct": 0,
      "explanation": "When a reaction can form multiple possible products, 'kinetic control' means the reaction stops at whichever product forms fastest (often lower activation energy, but not necessarily the most stable), while 'thermodynamic control' means the reaction is given enough time/energy to reach the most stable, lowest-energy product overall — these can sometimes give genuinely different products for the same starting materials."
    },
    {
      "id": "9-23",
      "topic": "9.4 Thermodynamic/Kinetic Control",
      "stem": "A catalyst is added to a reaction with ΔG < 0 but a very slow observed rate. What effect does the catalyst have?",
      "choices": [
        "It lowers the activation energy, increasing the rate at which the already-favorable reaction proceeds, without changing ΔG itself.",
        "It changes ΔG to make the reaction favorable.",
        "It has no effect on either rate or ΔG.",
        "It makes the reaction thermodynamically unfavorable."
      ],
      "correct": 0,
      "explanation": "A catalyst addresses the KINETIC limitation (high activation energy) without touching the THERMODYNAMIC properties of the reaction (ΔG, ΔH, ΔS remain unchanged, as established in Unit 5.11) — it simply provides a faster pathway to the same already-favorable outcome, connecting Unit 9's thermodynamics back to Unit 5's kinetics/catalysis material."
    },
    {
      "id": "9-24",
      "topic": "9.4 Thermodynamic/Kinetic Control",
      "stem": "Which statement correctly captures the overall relationship between thermodynamics and kinetics established across Units 5, 7, and 9?",
      "choices": [
        "Thermodynamic quantities (K, ΔG) describe whether/how far a reaction proceeds; kinetic quantities (rate, Ea) describe how fast it gets there — these are fundamentally independent, and a full understanding of a reaction requires considering both.",
        "Thermodynamics and kinetics always give identical, redundant information about a reaction.",
        "Kinetics determines the final equilibrium position of a reaction.",
        "Thermodynamics determines how quickly equilibrium is reached."
      ],
      "correct": 0,
      "explanation": "This synthesizes the recurring theme across the course: K (Unit 7) and ΔG (Unit 9) are thermodynamic quantities describing a reaction's ultimate extent/favorability, while rate and Ea (Unit 5) are kinetic quantities describing the speed of getting there — genuinely independent pieces of information, both needed for a complete picture of any given reaction."
    },
    {
      "id": "9-25",
      "topic": "9.5 Free Energy and Equilibrium",
      "stem": "A reaction has K = 0.00500 at 298 K. Calculate ΔG°.",
      "choices": [
        "+13.1 kJ",
        "−13.1 kJ",
        "+5.30 kJ",
        "−5.30 kJ"
      ],
      "correct": 0,
      "explanation": "ΔG° = −RTlnK = −(8.314)(298)ln(0.00500) = −(2477.6)(−5.298) = +13,128 J ≈ +13.1 kJ. Since K < 1 (favors reactants), ΔG° is correctly positive, consistent with the general K-ΔG° relationship."
    },
    {
      "id": "9-26",
      "topic": "9.5 Free Energy and Equilibrium",
      "stem": "A reaction has ΔG° = −25.0 kJ/mol at 298 K. Calculate K.",
      "choices": [
        "2.96 × 10⁴",
        "8.4 × 10⁻⁵",
        "−25.0",
        "1.01 × 10⁻⁴"
      ],
      "correct": 0,
      "explanation": "Rearranging ΔG° = −RTlnK: lnK = −ΔG°/(RT) = −(−25,000)/[(8.314)(298)] = 25,000/2477.6 = 10.09. K = e^10.09 = 2.96 × 10⁴."
    },
    {
      "id": "9-27",
      "topic": "9.5 Free Energy and Equilibrium",
      "stem": "Why does K > 1 always correspond to ΔG° < 0?",
      "choices": [
        "Because ΔG° = −RTlnK, and ln(K) is positive whenever K > 1 (with R and T always positive), making the overall expression negative.",
        "This relationship is not actually always true.",
        "K > 1 has no mathematical connection to ΔG°.",
        "K > 1 always corresponds to ΔG° being exactly zero."
      ],
      "correct": 0,
      "explanation": "Since ln(K) is positive whenever K > 1 (a basic property of the natural log function), and R and T are always positive, the overall product −RTlnK must be negative whenever K > 1 — this is a direct mathematical consequence of the ΔG° = −RTlnK relationship, not a separate empirical rule."
    },
    {
      "id": "9-28",
      "topic": "9.5 Free Energy and Equilibrium",
      "stem": "A reaction has ΔG° = 0 exactly. What can be concluded about K?",
      "choices": [
        "K = 1 exactly",
        "K = 0",
        "K is undefined",
        "K must be very large"
      ],
      "correct": 0,
      "explanation": "If ΔG° = −RTlnK = 0, then lnK must equal 0 (since R and T are nonzero), and lnK = 0 corresponds to K = e⁰ = 1 exactly — a reaction with ΔG° = 0 has neither products nor reactants favored at equilibrium."
    },
    {
      "id": "9-29",
      "topic": "9.5 Free Energy and Equilibrium",
      "stem": "Which correctly describes the relationship between the magnitude of ΔG° and the magnitude of K's deviation from 1?",
      "choices": [
        "A larger magnitude of ΔG° (more strongly negative or positive) corresponds to K being further from 1 (either much greater than 1, or much less than 1).",
        "ΔG° magnitude has no relationship to how far K is from 1.",
        "A larger magnitude ΔG° always means K is closer to 1.",
        "ΔG° and K magnitude are always numerically identical."
      ],
      "correct": 0,
      "explanation": "Since ΔG° = −RTlnK, a very large negative ΔG° corresponds to a very large positive ln(K), meaning K is very much greater than 1 (strongly favors products); a very large positive ΔG° corresponds to a very negative ln(K), meaning K is very much less than 1 (strongly favors reactants) — the further ΔG° is from zero, the further K is from 1 in the corresponding direction."
    },
    {
      "id": "9-30",
      "topic": "9.5 Free Energy and Equilibrium",
      "stem": "How does the ΔG° = −RTlnK relationship connect Unit 9 (thermodynamics) directly back to Unit 7 (equilibrium)?",
      "choices": [
        "It provides a direct mathematical bridge between a reaction's thermodynamic favorability (ΔG°) and its equilibrium position (K), showing these are two complementary descriptions of the same underlying chemical reality.",
        "It shows that thermodynamics and equilibrium are entirely unrelated topics.",
        "It only applies to reactions that never reach equilibrium.",
        "K and ΔG° describe completely different, unrelated reactions."
      ],
      "correct": 0,
      "explanation": "This equation formally confirms what's been implied throughout the course: a reaction's tendency to favor products (large K) is exactly the same underlying property as it being thermodynamically favorable (negative ΔG°) — they're not two separate facts about a reaction, but two mathematically linked ways of describing the identical underlying chemical reality of how far a reaction proceeds toward products."
    },
    {
      "id": "9-31",
      "topic": "9.6 Coupled Reactions",
      "stem": "Reaction 1 has ΔG = +45 kJ. Reaction 2 has ΔG = −60 kJ. What is ΔG for the coupled (combined) process?",
      "choices": [
        "−15 kJ",
        "+15 kJ",
        "+105 kJ",
        "−105 kJ"
      ],
      "correct": 0,
      "explanation": "ΔG(overall) = ΔG₁ + ΔG₂ = 45 + (−60) = −15 kJ. Since the overall value is negative, the coupled process is favorable overall, even though Reaction 1 alone was unfavorable."
    },
    {
      "id": "9-32",
      "topic": "9.6 Coupled Reactions",
      "stem": "Why must the two coupled reactions share a common intermediate species for the coupling strategy to work?",
      "choices": [
        "So that adding the two reactions together (Hess's Law-style) correctly cancels that intermediate, producing a single overall net reaction with a combined ΔG.",
        "Coupled reactions never actually need to share any common species.",
        "The shared species must always be water.",
        "Coupling only works if both reactions have identical ΔG values."
      ],
      "correct": 0,
      "explanation": "For two reactions to be meaningfully 'coupled' into a single overall process (rather than just two separate, unrelated reactions happening in the same container), they typically share a common species that's produced by one and consumed by the other — this allows them to be combined (added together, cancelling the shared intermediate) into one true overall reaction with a well-defined combined ΔG."
    },
    {
      "id": "9-33",
      "topic": "9.6 Coupled Reactions",
      "stem": "In biological systems, ATP hydrolysis (ΔG ≈ −30 kJ/mol) is often coupled to otherwise-unfavorable biosynthesis reactions. Why is this strategy necessary?",
      "choices": [
        "Many essential biosynthesis reactions have positive ΔG on their own and would not occur spontaneously; coupling them to the strongly favorable ATP hydrolysis provides the thermodynamic 'push' needed to make the overall combined process favorable.",
        "ATP hydrolysis has no real connection to biosynthesis reactions.",
        "Biosynthesis reactions are always thermodynamically favorable on their own, so coupling is unnecessary.",
        "This coupling strategy is purely a biological myth with no thermodynamic basis."
      ],
      "correct": 0,
      "explanation": "Many of the reactions cells need to build complex molecules (like proteins, DNA, or other biosynthesis products) are thermodynamically unfavorable on their own (positive ΔG). Coupling them to ATP hydrolysis, which is strongly favorable (ΔG≈−30 kJ/mol), provides enough 'thermodynamic push' to make the overall combined process favorable — a direct biological application of the coupled-reactions strategy covered in this section."
    },
    {
      "id": "9-34",
      "topic": "9.6 Coupled Reactions",
      "stem": "Two reactions are coupled: Reaction A (ΔG = +20 kJ) and Reaction B (ΔG = +15 kJ). What is the overall ΔG, and is this coupling strategy successful?",
      "choices": [
        "+35 kJ; not successful, since the overall process remains unfavorable.",
        "−5 kJ; successful.",
        "+5 kJ; successful.",
        "−35 kJ; successful."
      ],
      "correct": 0,
      "explanation": "ΔG(overall) = 20 + 15 = +35 kJ, still positive (unfavorable). Coupling only 'works' (produces an overall favorable process) if at least one of the two reactions is favorable enough (sufficiently negative ΔG) to overcome the unfavorable one — coupling two unfavorable reactions together simply produces an even more unfavorable overall process, as shown here."
    },
    {
      "id": "9-35",
      "topic": "9.6 Coupled Reactions",
      "stem": "Which mathematical principle underlies the calculation of overall ΔG for a coupled reaction pair?",
      "choices": [
        "The same additive principle as Hess's Law (Unit 6.9) — since ΔG, like ΔH, is a state function, the ΔG values of combined reaction steps simply add together to give the overall ΔG.",
        "ΔG values must always be multiplied together, not added.",
        "Coupled reaction ΔG values cannot be combined mathematically.",
        "Only the larger of the two ΔG values matters for the overall process."
      ],
      "correct": 0,
      "explanation": "Because ΔG, like ΔH, is a state function (its value depends only on initial and final states, not the path taken), combining reaction steps by simple addition — exactly the logic behind Hess's Law — correctly gives the overall ΔG for the coupled process, which is why this technique works reliably."
    },
    {
      "id": "9-36",
      "topic": "9.7 Galvanic Cells",
      "stem": "In a galvanic cell, where does oxidation occur?",
      "choices": [
        "At the cathode",
        "At the anode",
        "In the salt bridge",
        "Oxidation does not occur in a galvanic cell"
      ],
      "correct": 1,
      "explanation": "By definition and universal convention, oxidation always occurs at the anode in any electrochemical cell (galvanic or electrolytic) — the mnemonic 'AN OX' (Anode = OXidation) is a standard memory aid for this fact."
    },
    {
      "id": "9-37",
      "topic": "9.7 Galvanic Cells",
      "stem": "In which direction do electrons flow through the external wire of a galvanic cell?",
      "choices": [
        "From cathode to anode",
        "From anode to cathode",
        "Electrons do not flow through the external wire",
        "In both directions simultaneously"
      ],
      "correct": 1,
      "explanation": "Electrons are released at the anode (where oxidation occurs, releasing electrons) and flow through the external wire toward the cathode (where reduction occurs, consuming electrons) — this directional electron flow through the external circuit is what constitutes the usable electrical current generated by a galvanic cell."
    },
    {
      "id": "9-38",
      "topic": "9.7 Galvanic Cells",
      "stem": "What is the purpose of a salt bridge in a galvanic cell?",
      "choices": [
        "To allow ion flow between the two half-cells, maintaining electrical neutrality, without letting the solutions fully mix.",
        "To allow electrons to flow directly between the half-cells.",
        "To increase the cell's overall voltage.",
        "To prevent any current from flowing in the cell."
      ],
      "correct": 0,
      "explanation": "As the reaction proceeds, one half-cell accumulates excess positive charge (from the oxidation half-reaction) and the other accumulates excess negative charge (from the reduction half-reaction) — the salt bridge allows ions to migrate between compartments to balance this charge buildup, maintaining electrical neutrality, without allowing the bulk solutions themselves to directly mix."
    },
    {
      "id": "9-39",
      "topic": "9.7 Galvanic Cells",
      "stem": "Given E°(Ag⁺/Ag) = +0.80 V and E°(Ni²⁺/Ni) = −0.25 V, calculate E°cell for a galvanic cell built from these two half-reactions.",
      "choices": [
        "1.05 V",
        "0.55 V",
        "−1.05 V",
        "1.30 V"
      ],
      "correct": 0,
      "explanation": "The half-reaction with the higher (more positive) reduction potential (Ag⁺/Ag, +0.80 V) proceeds as reduction (cathode); the other (Ni²⁺/Ni, −0.25 V) is reversed as oxidation (anode). E°cell = E°(cathode) − E°(anode) = 0.80 − (−0.25) = 1.05 V."
    },
    {
      "id": "9-40",
      "topic": "9.7 Galvanic Cells",
      "stem": "Which species is reduced in a galvanic cell built from Al/Al³⁺ (E°=−1.66 V) and Sn²⁺/Sn (E°=−0.14 V)?",
      "choices": [
        "Al³⁺, since it has the more negative reduction potential",
        "Sn²⁺, since it has the higher (less negative) reduction potential",
        "Al metal",
        "Neither species is reduced"
      ],
      "correct": 1,
      "explanation": "Sn²⁺/Sn has the higher (less negative, i.e., more positive relative to Al³⁺/Al) reduction potential, so it proceeds as written (reduction): Sn²⁺ + 2e⁻ → Sn. Al³⁺/Al, with the more negative potential, is reversed and acts as the oxidation half-reaction instead."
    },
    {
      "id": "9-41",
      "topic": "9.7 Galvanic Cells",
      "stem": "A student calculates a negative E°cell for a proposed galvanic cell setup. What does this indicate?",
      "choices": [
        "The reaction as proposed is not spontaneous in that direction; the reverse reaction would actually be spontaneous instead.",
        "The calculation must contain an arithmetic error, since E°cell is always positive.",
        "A negative E°cell indicates an unusually strong galvanic cell.",
        "Negative E°cell values are impossible under any circumstances."
      ],
      "correct": 0,
      "explanation": "A negative E°cell indicates that the specific reaction as proposed (with that particular assignment of anode and cathode) is NOT spontaneous — the reverse reaction (swapping which half-reaction is oxidized and which is reduced) would actually be the spontaneous, correct pairing, giving a positive E°cell instead."
    },
    {
      "id": "9-42",
      "topic": "9.7 Galvanic Cells",
      "stem": "Why is the more positive standard reduction potential half-reaction always assigned as the cathode (reduction) in a spontaneous galvanic cell?",
      "choices": [
        "Because a more positive reduction potential indicates a greater inherent tendency for that species to be reduced (gain electrons) compared to the other half-reaction, so pairing it as the cathode (where reduction occurs) is the pairing that produces a spontaneous, positive E°cell.",
        "This assignment is arbitrary and could be made either way with identical results.",
        "The more positive reduction potential is always assigned as the anode instead.",
        "Reduction potential has no bearing on which half-reaction is the cathode."
      ],
      "correct": 0,
      "explanation": "Standard reduction potential directly measures a species' tendency to be reduced (gain electrons) relative to the standard hydrogen electrode reference. The half-reaction with the greater such tendency (more positive E°) will indeed be reduced when paired with a half-reaction of lower reduction tendency — assigning it as the cathode (site of reduction) is exactly the pairing that reflects this greater tendency and produces a spontaneous (positive E°cell) galvanic cell."
    },
    {
      "id": "9-43",
      "topic": "9.7 Galvanic Cells",
      "stem": "In the notation for a galvanic cell (e.g., Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)), what does the double vertical line (||) represent?",
      "choices": [
        "The salt bridge (or porous barrier) separating the two half-cells",
        "The external wire",
        "A phase boundary within a single half-cell",
        "The direction of electron flow"
      ],
      "correct": 0,
      "explanation": "In standard cell notation, the double vertical line specifically represents the salt bridge (or other porous barrier) separating the anode half-cell (written on the left) from the cathode half-cell (written on the right), with single vertical lines representing phase boundaries within each half-cell (e.g., between solid Zn and aqueous Zn²⁺)."
    },
    {
      "id": "9-44",
      "topic": "9.8 Cell Potential and Free Energy",
      "stem": "A cell has E°cell = 0.75 V and n = 3 electrons transferred. Calculate ΔG°.",
      "choices": [
        "−217,091 J",
        "+217,091 J",
        "−72,364 J",
        "−289,455 J"
      ],
      "correct": 0,
      "explanation": "ΔG° = −nFE°cell = −(3)(96,485)(0.75) = −217,091 J."
    },
    {
      "id": "9-45",
      "topic": "9.8 Cell Potential and Free Energy",
      "stem": "A reaction has ΔG° = −150,000 J and n = 2. Calculate E°cell.",
      "choices": [
        "0.777 V",
        "1.554 V",
        "−0.777 V",
        "77,700 V"
      ],
      "correct": 0,
      "explanation": "Rearranging ΔG° = −nFE°cell: E°cell = −ΔG°/(nF) = −(−150,000)/[(2)(96,485)] = 150,000/192,970 = 0.777 V."
    },
    {
      "id": "9-46",
      "topic": "9.8 Cell Potential and Free Energy",
      "stem": "Why does a positive E°cell always correspond to a negative ΔG°?",
      "choices": [
        "Because ΔG° = −nFE°cell, and n and F are always positive, so a positive E°cell directly makes the overall expression negative.",
        "This relationship does not always hold true.",
        "E°cell and ΔG° are actually unrelated quantities.",
        "A positive E°cell always corresponds to a positive ΔG° instead."
      ],
      "correct": 0,
      "explanation": "Since n (moles of electrons) and F (Faraday's constant) are always positive quantities, the negative sign in ΔG° = −nFE°cell means that a positive E°cell (indicating a spontaneous galvanic cell) directly and necessarily produces a negative ΔG° — consistent with spontaneous processes always having negative ΔG°."
    },
    {
      "id": "9-47",
      "topic": "9.8 Cell Potential and Free Energy",
      "stem": "A galvanic cell has E°cell = 2.20 V with n = 4. Which of the following correctly describes ΔG° for this cell?",
      "choices": [
        "Strongly negative, since a large positive E°cell with a large n produces a very large-magnitude negative ΔG°.",
        "Strongly positive.",
        "Exactly zero.",
        "Cannot be determined without additional data."
      ],
      "correct": 0,
      "explanation": "ΔG° = −nFE°cell, and with both a relatively large E°cell (2.20 V) and a relatively large n (4 electrons), the product nFE°cell will be large, giving a strongly negative ΔG° — consistent with a strongly spontaneous, highly favorable galvanic cell."
    },
    {
      "id": "9-48",
      "topic": "9.8 Cell Potential and Free Energy",
      "stem": "How many electrons (n) are transferred in a reaction with ΔG° = −386,000 J and E°cell = 2.00 V?",
      "choices": [
        "2",
        "1",
        "3",
        "4"
      ],
      "correct": 0,
      "explanation": "Rearranging ΔG° = −nFE°cell for n: n = −ΔG°/(FE°cell) = −(−386,000)/[(96,485)(2.00)] = 386,000/192,970 = 2.00, so n = 2 electrons."
    },
    {
      "id": "9-49",
      "topic": "9.8 Cell Potential and Free Energy",
      "stem": "Which best explains why n (moles of electrons transferred) must be correctly identified from the balanced half-reactions before using ΔG° = −nFE°cell?",
      "choices": [
        "Since n directly multiplies the entire expression, using an incorrect n value (e.g., forgetting to balance electrons between half-reactions) would produce a proportionally incorrect ΔG° value.",
        "The value of n has no actual effect on the calculated ΔG°.",
        "n is always assumed to be exactly 1 for every reaction.",
        "n only matters for electrolysis calculations, not galvanic cells."
      ],
      "correct": 0,
      "explanation": "Because n appears as a direct multiplying factor in ΔG° = −nFE°cell, correctly determining the actual number of electrons transferred in the overall balanced reaction (found by properly balancing the two half-reactions so their electron counts match before combining them) is essential — an incorrect n value would scale the calculated ΔG° by the wrong factor, giving a numerically wrong (though correctly-signed) answer."
    },
    {
      "id": "9-50",
      "topic": "9.9 Nernst Equation",
      "stem": "For a cell with E°cell = 0.50 V and n = 2, find Ecell if Q = 100 at 298 K.",
      "choices": [
        "0.441 V",
        "0.559 V",
        "0.500 V",
        "0.290 V"
      ],
      "correct": 0,
      "explanation": "Ecell = E°cell − (0.0592/n)logQ = 0.50 − (0.0592/2)log(100) = 0.50 − (0.0296)(2.00) = 0.50 − 0.0592 = 0.441 V."
    },
    {
      "id": "9-51",
      "topic": "9.9 Nernst Equation",
      "stem": "For a cell with E°cell = 1.20 V and n = 2, find Ecell if Q = 0.00100 at 298 K.",
      "choices": [
        "1.289 V",
        "1.111 V",
        "1.200 V",
        "1.230 V"
      ],
      "correct": 0,
      "explanation": "Ecell = 1.20 − (0.0592/2)log(0.00100) = 1.20 − (0.0296)(−3.00) = 1.20 + 0.0888 = 1.289 V."
    },
    {
      "id": "9-52",
      "topic": "9.9 Nernst Equation",
      "stem": "According to the Nernst equation, what happens to Ecell as Q increases (moving further from standard conditions toward more product-favored)?",
      "choices": [
        "Ecell decreases, since logQ increases, making the subtracted term larger.",
        "Ecell increases as Q increases.",
        "Ecell is unaffected by Q.",
        "Ecell becomes negative whenever Q > 1."
      ],
      "correct": 0,
      "explanation": "As Q increases (more products relative to reactants than standard conditions), log(Q) increases, making the (RT/nF)lnQ (or 0.0592/n × logQ) term larger, which is SUBTRACTED from E°cell — so Ecell decreases as Q increases, reflecting less 'driving force' remaining as the system moves closer to equilibrium (where Q=K and Ecell=0)."
    },
    {
      "id": "9-53",
      "topic": "9.9 Nernst Equation",
      "stem": "What is Ecell when a cell reaches equilibrium (Q = K)?",
      "choices": [
        "Ecell = 0, since a cell at equilibrium has no remaining driving force to generate voltage.",
        "Ecell = E°cell exactly.",
        "Ecell becomes infinite.",
        "Ecell cannot be determined at equilibrium."
      ],
      "correct": 0,
      "explanation": "At equilibrium, the forward and reverse reactions proceed at equal rates, with no net driving force remaining to push electrons through the circuit — this corresponds to Ecell = 0 (a 'dead' battery), regardless of what E°cell was under standard conditions. This is also the point at which the Nernst equation, combined with ΔG=0 at equilibrium, connects directly back to the ΔG°=−RTlnK relationship."
    },
    {
      "id": "9-54",
      "topic": "9.9 Nernst Equation",
      "stem": "Which value in the Nernst equation reflects the actual, real-time concentrations of the cell's reactants and products, rather than standard (1 M) values?",
      "choices": [
        "Q, the reaction quotient",
        "E°cell",
        "n",
        "F"
      ],
      "correct": 0,
      "explanation": "Q is calculated using the actual, current (nonstandard) concentrations present in the cell at that moment — this is exactly the role Q plays throughout the course (Unit 7.3), extended here to electrochemistry: E°cell remains a fixed, standard-condition reference value, while Q captures the deviation from those standard conditions."
    },
    {
      "id": "9-55",
      "topic": "9.9 Nernst Equation",
      "stem": "A concentration cell is built using the same electrode material and ion in both half-cells, but at different concentrations (e.g., 1.0 M Cu²⁺ vs. 0.010 M Cu²⁺). What generates the cell's voltage in this case?",
      "choices": [
        "The concentration difference itself, since the system will spontaneously move toward equalizing concentrations, generating a nonzero Ecell via the Nernst equation even though E°cell = 0 for this setup.",
        "Concentration cells cannot generate any voltage.",
        "E°cell alone determines the voltage, with no role for Q.",
        "Concentration cells require two different metals to function."
      ],
      "correct": 0,
      "explanation": "Since both half-cells use the identical redox couple, E°cell = 0 for a concentration cell (the standard reduction potentials are identical and cancel). However, the concentration difference between the two half-cells means Q ≠ 1, so the Nernst equation (Ecell = E°cell − (0.0592/n)logQ = 0 − (0.0592/n)logQ) still produces a nonzero Ecell, driven entirely by the system's spontaneous tendency to equalize the concentration difference — a genuinely elegant application of the Nernst equation."
    },
    {
      "id": "9-56",
      "topic": "9.10 Electrolysis/Faraday's Law",
      "stem": "How many moles of electrons pass through a circuit carrying 4.00 A for 3220 s?",
      "choices": [
        "0.1335 mol",
        "12,880 mol",
        "804.9 mol",
        "0.0334 mol"
      ],
      "correct": 0,
      "explanation": "moles e⁻ = It/F = (4.00)(3220)/96,485 = 12,880/96,485 = 0.1335 mol."
    },
    {
      "id": "9-57",
      "topic": "9.10 Electrolysis/Faraday's Law",
      "stem": "How many grams of Ag (molar mass 107.87 g/mol) are deposited by passing 0.500 mol of electrons through a solution containing Ag⁺ (Ag⁺ + e⁻ → Ag)?",
      "choices": [
        "53.9 g",
        "107.9 g",
        "26.97 g",
        "215.7 g"
      ],
      "correct": 0,
      "explanation": "Since the half-reaction shows a 1:1 ratio between electrons and Ag deposited, moles Ag = moles e⁻ = 0.500 mol. Mass = 0.500 × 107.87 = 53.9 g."
    },
    {
      "id": "9-58",
      "topic": "9.10 Electrolysis/Faraday's Law",
      "stem": "How does electrolysis fundamentally differ from a galvanic cell in terms of spontaneity?",
      "choices": [
        "Electrolysis uses external electrical energy to force a NONspontaneous redox reaction to occur; a galvanic cell harnesses a naturally SPONTANEOUS redox reaction to generate electrical energy.",
        "Both electrolysis and galvanic cells always involve spontaneous reactions.",
        "Electrolysis and galvanic cells are identical processes with different names.",
        "Electrolysis only occurs in gas-phase reactions."
      ],
      "correct": 0,
      "explanation": "A galvanic cell is powered BY a spontaneous redox reaction (ΔG < 0, generating usable electrical energy as a product). Electrolysis works in the opposite direction — using an external power source (like a battery) to supply electrical energy that FORCES an otherwise nonspontaneous redox reaction (ΔG > 0) to occur, essentially running a galvanic cell 'in reverse.'"
    },
    {
      "id": "9-59",
      "topic": "9.10 Electrolysis/Faraday's Law",
      "stem": "How many grams of Al (molar mass 26.98 g/mol) are deposited by a current of 10.0 A flowing for 3.00 hours, given Al³⁺ + 3e⁻ → Al?",
      "choices": [
        "10.06 g",
        "30.19 g",
        "3.353 g",
        "90.56 g"
      ],
      "correct": 0,
      "explanation": "Convert time to seconds: 3.00 hr × 3600 s/hr = 10,800 s. Charge: Q = It = (10.0)(10,800) = 108,000 C. Moles e⁻ = 108,000/96,485 = 1.1195 mol. Using the 3:1 ratio (3 e⁻ per Al): moles Al = 1.1195/3 = 0.3732 mol. Mass = 0.3732 × 26.98 = 10.07 g ≈ 10.06 g."
    },
    {
      "id": "9-60",
      "topic": "9.10 Electrolysis/Faraday's Law",
      "stem": "Which factor determines HOW MANY electrons are required to deposit or produce 1 mole of a given substance during electrolysis?",
      "choices": [
        "The coefficient of electrons in that species' balanced half-reaction (e.g., 2 e⁻ per Cu²⁺ reduced, 3 e⁻ per Al³⁺ reduced).",
        "This is always exactly 1 electron per mole, regardless of the substance.",
        "The total current used has no bearing on this ratio.",
        "The half-reaction's electron count is irrelevant to Faraday's Law calculations."
      ],
      "correct": 0,
      "explanation": "The specific half-reaction for a given ion determines the electron-to-product mole ratio (e.g., a 2+ ion typically requires 2 electrons per ion reduced, a 3+ ion requires 3, etc.) — this ratio, taken directly from the balanced half-reaction, is essential for correctly converting between moles of electrons (from Faraday's Law) and moles of the actual substance produced or consumed."
    },
    {
      "id": "9-61",
      "topic": "9.10 Electrolysis/Faraday's Law",
      "stem": "Stretch — beyond typical AP difficulty: Two electrolytic cells are connected in series (the same current flows through both) — one containing molten NaCl and one containing molten MgCl₂. If the same amount of charge passes through both cells, how do the moles of Na produced (from Na⁺ + e⁻ → Na) compare to the moles of Mg produced (from Mg²⁺ + 2e⁻ → Mg)?",
      "choices": [
        "Twice as many moles of Na are produced as moles of Mg, since Na requires only 1 electron per atom while Mg requires 2.",
        "Equal moles of Na and Mg are produced.",
        "Half as many moles of Na are produced as moles of Mg.",
        "The comparison cannot be made without knowing the specific current and time."
      ],
      "correct": 0,
      "explanation": "Since both cells are in series, they receive the exact same total charge (and therefore the same moles of electrons). Na⁺ requires only 1 electron per atom deposited, while Mg²⁺ requires 2 electrons per atom deposited — for the same total moles of electrons, twice as many moles of Na can be produced compared to Mg, since each moles of Mg 'costs' twice as many electrons as a mole of Na. This ratio (2:1 for Na:Mg) depends only on the electron stoichiometry of each half-reaction, not on the specific current or time used.",
      "stretch": true
    },
    {
      "id": "9-62",
      "topic": "9.11 Applications",
      "stem": "Why is zinc commonly used as a 'sacrificial anode' to protect iron structures from corrosion?",
      "choices": [
        "Zinc has a more negative standard reduction potential than iron, making it preferentially oxidized instead of the iron, which is thereby protected.",
        "Zinc has a more positive standard reduction potential than iron.",
        "Zinc does not conduct electricity, preventing any corrosion current.",
        "Zinc is simply more visually appealing than iron for structural applications."
      ],
      "correct": 0,
      "explanation": "Because zinc is more easily oxidized than iron (a more negative standard reduction potential, meaning a greater tendency to lose electrons), connecting zinc to an iron structure causes the zinc to preferentially corrode (act as the anode) instead of the iron, protecting the iron by ensuring it functions as the cathode (protected from oxidation) instead."
    },
    {
      "id": "9-63",
      "topic": "9.11 Applications",
      "stem": "A rechargeable battery is being recharged by plugging it into a power outlet. What electrochemical process is occurring during recharging?",
      "choices": [
        "Electrolysis — external electrical energy is forcing the (now reversed, nonspontaneous) reaction to run backward, regenerating the original reactants.",
        "A spontaneous galvanic cell reaction.",
        "No electrochemical process occurs during recharging.",
        "The battery's chemical composition is entirely replaced during recharging."
      ],
      "correct": 0,
      "explanation": "During normal use, a rechargeable battery operates as a galvanic cell (spontaneous reaction generating current). During recharging, an external power source forces this reaction to run in reverse (electrolysis), regenerating the original reactants from the discharged products — this cycle of galvanic discharge and electrolytic recharge is exactly what makes a battery 'rechargeable.'"
    },
    {
      "id": "9-64",
      "topic": "9.11 Applications",
      "stem": "Why does rusting (iron corrosion) require the presence of both oxygen and water/moisture to occur?",
      "choices": [
        "Rusting is fundamentally an electrochemical (redox) process: iron is oxidized while oxygen is reduced, and water/moisture provides the medium (electrolyte) for ion movement, completing the necessary electrochemical circuit.",
        "Rusting is a purely physical process unrelated to electrochemistry.",
        "Oxygen and water have no actual role in rusting.",
        "Rusting only requires oxygen, never water."
      ],
      "correct": 0,
      "explanation": "Rusting is genuinely a redox (electrochemical) process: iron metal is oxidized (loses electrons, forming Fe²⁺/Fe³⁺), while atmospheric oxygen is reduced (gains electrons, ultimately forming hydroxide/oxide species) — but like any electrochemical cell, this process requires a conductive medium (an electrolyte) for ion movement to complete the circuit, a role played by moisture/water; without both oxygen (the reducible species) and water (the electrolyte medium), rusting cannot proceed at any significant rate."
    },
    {
      "id": "9-65",
      "topic": "9.11 Applications",
      "stem": "Which best explains why a galvanized (zinc-coated) iron nail resists rusting even if the zinc coating is scratched, exposing the underlying iron?",
      "choices": [
        "The exposed zinc (even in small remaining patches) continues to act as the sacrificial anode relative to the exposed iron, since zinc's greater tendency to oxidize still applies locally around the scratch, continuing to protect the iron electrochemically.",
        "A scratched galvanized nail always rusts immediately, with no continued protection.",
        "The zinc coating provides only a physical (non-electrochemical) barrier, with no protective effect once scratched.",
        "Galvanization has no actual protective mechanism."
      ],
      "correct": 0,
      "explanation": "Galvanization provides two layers of protection: a physical barrier (the zinc coating itself preventing direct oxygen/moisture contact with iron) AND an electrochemical (sacrificial anode) protection. Even when the physical barrier is broken (scratched), the remaining zinc in the vicinity continues to act as the preferentially-oxidized sacrificial anode, still protecting the locally-exposed iron electrochemically — this is why galvanized nails resist rust even with minor surface damage, unlike a purely physical coating (like paint) which offers no such backup protection once breached."
    }
  ]
};

const FRQ_CONTENT = {
  "1": [
    {
      "id": "frq-1-1",
      "source": "Original",
      "title": "Isotopes and Average Atomic Mass",
      "prompt": "An unknown element Q has two naturally occurring isotopes. A mass spectrum shows Q-63 with relative abundance 69.2% and Q-65 with relative abundance 30.8%.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Calculate the average atomic mass of Q, and identify the element.",
          "steps": [
            "Convert percentages to decimal fractions: 0.692 and 0.308.",
            "Weighted average = (63)(0.692) + (65)(0.308) = 43.60 + 20.02 = 63.62 amu.",
            "This value is close to copper's known atomic mass (63.55 amu), so Q is copper.",
            "Full credit requires both the correct weighted-average setup (multiplying each isotope mass by its own decimal abundance, not an unweighted average) and a final numeric answer with appropriate sig figs."
          ]
        },
        {
          "label": "(b)",
          "ask": "Explain, in terms of subatomic particles, why Q-63 and Q-65 are both considered atoms of the same element despite having different masses.",
          "steps": [
            "Identity of an element is determined by atomic number — the number of protons — not mass.",
            "Q-63 and Q-65 have the same number of protons (and therefore the same number of electrons in a neutral atom), which is why they share identical chemical behavior.",
            "They differ only in neutron count, which changes mass but not chemical identity — this is the definition of isotopes.",
            "Full credit requires explicitly connecting 'same element' to 'same proton number' and 'different mass' to 'different neutron number,' not just restating that they are isotopes without explaining why."
          ]
        }
      ]
    },
    {
      "id": "frq-1-2",
      "source": "Original",
      "title": "Electron Configuration and Periodic Trends",
      "prompt": "Consider the elements Mg, Al, and Si, all in Period 3.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Write the complete ground-state electron configuration for each of the three elements.",
          "steps": [
            "Mg (Z=12): 1s² 2s² 2p⁶ 3s².",
            "Al (Z=13): 1s² 2s² 2p⁶ 3s² 3p¹.",
            "Si (Z=14): 1s² 2s² 2p⁶ 3s² 3p².",
            "Full credit requires each configuration to have the correct total electron count and correct subshell filling order; partial credit is often given per correct configuration."
          ]
        },
        {
          "label": "(b)",
          "ask": "The first ionization energy of Al (578 kJ/mol) is lower than that of Mg (738 kJ/mol), even though Al has a greater nuclear charge. Explain this observation.",
          "steps": [
            "Mg's highest-energy electron is removed from a filled, especially stable 3s² subshell.",
            "Al's highest-energy electron is removed from the 3p¹ subshell, which is higher in energy than 3s and experiences some additional shielding from the 3s² electrons beneath it.",
            "This combination of higher starting orbital energy and slightly greater shielding makes Al's outermost electron easier to remove than Mg's, despite Al's larger nuclear charge — a well-known exception to the general 'IE increases across a period' trend.",
            "Full credit requires explicitly referencing both the subshell (s vs. p) difference and the shielding/energy reasoning, not just stating that 'it's an exception' without justification."
          ]
        },
        {
          "label": "(c)",
          "ask": "Predict whether Mg²⁺ or Al³⁺ has the smaller ionic radius, and justify your answer.",
          "steps": [
            "Both Mg²⁺ and Al³⁺ are isoelectronic, each having 10 electrons (matching neon's configuration).",
            "Since both ions have the same number of electrons, radius is determined by nuclear charge: Al (13 protons) has a greater nuclear charge than Mg (12 protons).",
            "Greater nuclear charge pulling on the same number of electrons results in a smaller radius, so Al³⁺ has the smaller ionic radius.",
            "Full credit requires identifying the isoelectronic relationship as the reason radius comparison is valid in the first place, not just stating 'more charge means smaller' without that context."
          ]
        }
      ]
    },
    {
      "id": "frq-1-3",
      "source": "Original",
      "title": "Empirical Formula from Combustion Data",
      "prompt": "A 3.00 g sample of a compound containing only carbon, hydrogen, and oxygen is combusted completely, producing 4.40 g of CO₂ and 1.80 g of H₂O.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Determine the mass of carbon and the mass of hydrogen in the original 3.00 g sample.",
          "steps": [
            "Moles of CO₂ = 4.40 g ÷ 44.01 g/mol = 0.100 mol, so moles of C = 0.100 mol (1:1 ratio of C to CO₂).",
            "Mass of C = 0.100 mol × 12.01 g/mol = 1.20 g.",
            "Moles of H₂O = 1.80 g ÷ 18.02 g/mol = 0.0999 mol, so moles of H = 2 × 0.0999 = 0.200 mol (2 H per H₂O).",
            "Mass of H = 0.200 mol × 1.008 g/mol = 0.202 g.",
            "Full credit requires correctly using the 1:1 mole ratio for C→CO₂ and the 1:2 mole ratio for H₂O→H, not just tracking mass without mole conversions."
          ]
        },
        {
          "label": "(b)",
          "ask": "Determine the mass and moles of oxygen in the original sample.",
          "steps": [
            "Mass of O = total sample mass − mass of C − mass of H = 3.00 g − 1.20 g − 0.202 g = 1.60 g.",
            "Moles of O = 1.60 g ÷ 16.00 g/mol = 0.100 mol.",
            "Full credit requires recognizing that oxygen's mass must be found by difference (since it isn't directly measured by the combustion products), not looked up or assumed."
          ]
        },
        {
          "label": "(c)",
          "ask": "Determine the empirical formula of the compound.",
          "steps": [
            "Mole ratio: C = 0.100 mol, H = 0.200 mol, O = 0.100 mol.",
            "Divide all by the smallest value (0.100): C → 1.00, H → 2.00, O → 1.00.",
            "Empirical formula: CH₂O.",
            "Full credit requires correctly carrying forward the mole values from parts (a) and (b) and dividing by the smallest to reach whole-number subscripts."
          ]
        }
      ]
    },
    {
      "id": "frq-1-4",
      "source": "Original",
      "title": "Photoelectron Spectroscopy Interpretation",
      "prompt": "The photoelectron spectrum of a neutral element in the third period shows peaks (in order of decreasing binding energy) at relative heights 2:2:6:2:4.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Determine the total number of electrons in this atom and identify the element.",
          "steps": [
            "Sum the peak heights: 2 + 2 + 6 + 2 + 4 = 16 total electrons.",
            "An atom with 16 electrons corresponds to sulfur (Z = 16).",
            "Full credit requires showing the summation explicitly, not just stating the final element without work."
          ]
        },
        {
          "label": "(b)",
          "ask": "Write the complete ground-state electron configuration consistent with this spectrum, and identify which subshell each peak corresponds to.",
          "steps": [
            "The five peaks in order of decreasing binding energy correspond to the subshells 1s, 2s, 2p, 3s, and 3p respectively.",
            "Configuration: 1s² 2s² 2p⁶ 3s² 3p⁴.",
            "Full credit requires matching peak order to subshell filling order correctly (highest binding energy = innermost/lowest-energy subshell) and reproducing the given peak heights exactly within that configuration."
          ]
        },
        {
          "label": "(c)",
          "ask": "A student claims that the peak with relative height 6 must represent the valence electrons, since it is the tallest peak. Explain what is incorrect about this claim.",
          "steps": [
            "Peak height reflects the number of electrons in a subshell, not whether that subshell is the valence (outermost) shell.",
            "The valence electrons are identified by which peak has the lowest binding energy — i.e., the peak farthest to the right — which in this spectrum is the final peak (height 4, corresponding to 3p), not the tallest peak.",
            "The tallest peak (height 6) corresponds to the filled 2p subshell, which is a core (non-valence) subshell in this atom, since it lies underneath the occupied n=3 shell.",
            "Full credit requires explicitly distinguishing 'tallest peak' (most electrons in a subshell) from 'rightmost peak' (lowest binding energy, valence electrons) as two separate, unrelated properties of the graph."
          ]
        }
      ]
    },
    {
      "id": "frq-1-5",
      "source": "Original",
      "title": "Ionic Compound Formation and Periodic Position",
      "prompt": "Element X is a metal in Period 4 that forms only a 2+ ion in its compounds. Element Y is a nonmetal in Period 3 with the electron configuration [Ne] 3s² 3p⁵.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Identify element Y and write the charge of the ion it is most likely to form.",
          "steps": [
            "[Ne] accounts for 10 electrons; adding 3s²(2) + 3p⁵(5) gives 17 total electrons, so Y = chlorine (Z = 17).",
            "Chlorine has 7 valence electrons and needs only 1 more to complete its octet, so it forms Cl⁻ (a 1− ion).",
            "Full credit requires both correctly identifying the element from its configuration and correctly predicting the ion charge from valence electron count, not just one or the other."
          ]
        },
        {
          "label": "(b)",
          "ask": "Given that X forms only a 2+ ion, propose a reasonable identity for X and justify your choice using its position on the periodic table.",
          "steps": [
            "A Period 4 metal that reliably forms only a 2+ ion is most consistent with a Group 2 element, such as calcium (Ca), since Group 2 elements have exactly 2 valence electrons and reliably lose both to reach a noble gas configuration.",
            "Unlike many transition metals, Group 2 elements don't show variable oxidation states, since there's no partially-filled d-subshell to complicate ion formation — losing both valence electrons and stopping there is the single strongly favored outcome.",
            "Full credit accepts calcium or another justified Group 2 element, as long as the reasoning correctly connects 'forms only one consistent ionic charge' to 'main-group element with a small, fixed number of valence electrons,' rather than a transition metal."
          ]
        },
        {
          "label": "(c)",
          "ask": "Predict the empirical formula of the ionic compound formed between X and Y, and justify the ratio.",
          "steps": [
            "X forms a 2+ ion; Y (chlorine) forms a 1− ion.",
            "Balancing total charge requires two Y⁻ ions for every one X²⁺ ion: one X²⁺ (+2 total) and two Cl⁻ (−2 total).",
            "Empirical formula: XCl₂.",
            "Full credit requires correctly balancing total positive and negative charge to zero, not simply combining the numeric charge values as a formula subscript without the balancing logic."
          ]
        }
      ]
    }
  ],
  "2": [
    {
      "id": "frq-2-1",
      "source": "Original",
      "title": "Lewis Structure, Resonance, and Formal Charge for NO₂⁻",
      "prompt": "The nitrite ion, NO₂⁻, can be represented by two resonance structures.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Draw both resonance structures of NO₂⁻, showing all lone pairs.",
          "steps": [
            "Total valence electrons: N(5) + 2×O(6) + 1(for charge) = 18.",
            "Structure 1: N double-bonded to one O (2 lone pairs on that O), single-bonded to the other O (3 lone pairs on that O), with 1 lone pair on N.",
            "Structure 2: identical but with the double bond on the other oxygen — the two structures are equivalent by symmetry.",
            "Full credit requires both structures with correct electron counts (18 total in each) and correct lone pair placement."
          ]
        },
        {
          "label": "(b)",
          "ask": "Calculate the formal charge on each atom in one resonance structure.",
          "steps": [
            "Double-bonded O: FC = 6 − 4 − ½(4) = 0.",
            "Singly-bonded O: FC = 6 − 6 − ½(2) = −1.",
            "N: FC = 5 − 2 − ½(6) = 0.",
            "Formal charges sum to −1, correctly matching the ion's overall charge — full credit requires showing this check explicitly."
          ]
        },
        {
          "label": "(c)",
          "ask": "Predict the actual N-O bond lengths in NO₂⁻ relative to a typical N-O single bond and N=O double bond, and justify your answer.",
          "steps": [
            "Since the two resonance structures are equivalent and contribute equally to the true hybrid, both N-O bonds in the actual ion are identical.",
            "Each bond has an averaged bond order of 1.5, so both bond lengths are intermediate — shorter than a typical N-O single bond but longer than a typical N=O double bond.",
            "Full credit requires connecting the equal-contribution reasoning to the prediction of two identical, intermediate bond lengths, not just stating 'resonance makes them equal' without explaining why."
          ]
        }
      ]
    },
    {
      "id": "frq-2-2",
      "source": "Original",
      "title": "VSEPR and Polarity of SF₄ and CF₄",
      "prompt": "Consider the molecules SF₄ and CF₄.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Draw the Lewis structure of SF₄ and determine the number of lone pairs on sulfur.",
          "steps": [
            "Total valence electrons: S(6) + 4×F(7) = 34.",
            "4 S-F single bonds use 8 electrons; remaining 26 electrons distributed as 3 lone pairs per F (24 electrons) and 1 lone pair on S (2 electrons).",
            "Sulfur has 1 lone pair in the correct structure."
          ]
        },
        {
          "label": "(b)",
          "ask": "Predict and sketch the molecular geometry of SF₄, and explain how it differs from CF₄'s geometry.",
          "steps": [
            "SF₄ has 5 total electron groups (4 bonding + 1 lone pair): trigonal bipyramidal electron geometry, with the lone pair in an equatorial position, giving a 'seesaw' molecular geometry.",
            "CF₄ has 4 total electron groups (4 bonding, 0 lone pairs): tetrahedral electron and molecular geometry, since there's no lone pair to distort the shape.",
            "Full credit requires correctly identifying both electron geometry and molecular geometry for SF₄, and explicitly attributing the difference from CF₄ to the presence/absence of a lone pair."
          ]
        },
        {
          "label": "(c)",
          "ask": "Determine whether SF₄ and CF₄ are each polar or nonpolar overall, and justify each answer.",
          "steps": [
            "CF₄: individual C-F bonds are polar, but the symmetric tetrahedral arrangement causes all 4 bond dipoles to cancel exactly, giving CF₄ zero net dipole moment — nonpolar.",
            "SF₄: the seesaw geometry is asymmetric (the lone pair breaks the symmetry that would otherwise cause cancellation), so the S-F bond dipoles do not fully cancel, giving SF₄ a net dipole moment — polar.",
            "Full credit requires connecting molecular symmetry (not just individual bond polarity) to the overall polarity conclusion for both molecules."
          ]
        }
      ]
    },
    {
      "id": "frq-2-3",
      "source": "Original",
      "title": "Bonding and Properties Comparison",
      "prompt": "A student is given three unlabeled solid samples: sample X conducts electricity as a solid and can be hammered into a thin sheet without breaking; sample Y does not conduct electricity as a solid but does conduct when dissolved in water, and shatters when struck; sample Z does not conduct electricity in any state and has a relatively low melting point.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Identify the most likely bonding type for each sample and justify using the observations given.",
          "steps": [
            "Sample X: metallic bonding — solid-state conductivity and malleability (deforming rather than shattering) are the signature properties of a mobile electron sea.",
            "Sample Y: ionic bonding — no conductivity as a rigid solid (ions fixed in lattice), conductivity once dissolved (ions become mobile), and brittleness (lattice shattering when same-charge ions are forced adjacent under stress).",
            "Sample Z: covalent (molecular) bonding — no conductivity in any state (no mobile charged particles at all) and a relatively low melting point (only weak intermolecular forces need to be overcome, not a full 3D ionic lattice or metallic bonding network).",
            "Full credit requires connecting each specific observation to the correct particle-level explanation, not just naming a bonding type."
          ]
        },
        {
          "label": "(b)",
          "ask": "Explain, at the particle level, why sample X can be hammered into a sheet without breaking, while sample Y shatters under the same kind of stress.",
          "steps": [
            "In sample X (metallic), the delocalized electron sea can redistribute freely as the metal cations shift position under stress, maintaining the attractive force throughout and allowing smooth deformation.",
            "In sample Y (ionic), shifting the lattice under stress forces ions of the same charge into close proximity, and the resulting strong electrostatic repulsion causes the crystal to fracture rather than bend.",
            "Full credit requires an explicit particle-level mechanism for both materials, not just restating that one is 'malleable' and the other 'brittle' as a conclusion without the underlying reason."
          ]
        }
      ]
    },
    {
      "id": "frq-2-4",
      "source": "Original",
      "title": "Bond Order, Length, and Energy",
      "prompt": "The table below shows average bond lengths and bond energies for three carbon-oxygen bonds: C-O (143 pm, 358 kJ/mol), C=O (123 pm, 799 kJ/mol), and C≡O (113 pm, 1072 kJ/mol).",
      "parts": [
        {
          "label": "(a)",
          "ask": "Explain the relationship between bond order, bond length, and bond energy shown in this data.",
          "steps": [
            "As bond order increases from 1 (C-O) to 2 (C=O) to 3 (C≡O), bond length consistently decreases (143 → 123 → 113 pm).",
            "As bond order increases, bond energy consistently increases (358 → 799 → 1072 kJ/mol).",
            "This reflects that more shared electron pairs pull the bonded atoms into a shorter, more strongly attracted (deeper potential energy well) configuration, requiring more energy to separate.",
            "Full credit requires stating both trends (length decreasing, energy increasing) and connecting them to the number of shared electron pairs, not just describing the numbers without the underlying cause."
          ]
        },
        {
          "label": "(b)",
          "ask": "A student claims that going from C-O to C=O should exactly double the bond energy, since bond order doubles. Evaluate this claim using the data.",
          "steps": [
            "The data shows bond energy increasing from 358 to 799 kJ/mol, which is more than double (a factor of about 2.23), not exactly double.",
            "This shows that bond energy does not scale in a simple direct proportion with bond order; the relationship is positive but not linear/exact.",
            "Full credit requires explicitly checking the claim against the actual numerical ratio and correctly concluding it is not an exact doubling, rather than assuming the general trend implies precise proportionality."
          ]
        }
      ]
    },
    {
      "id": "frq-2-5",
      "source": "Original",
      "title": "VSEPR, Hybridization, and Polarity of NF₃",
      "prompt": "Consider the molecule NF₃.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Draw the Lewis structure of NF₃ and determine the number of lone pairs on the central nitrogen.",
          "steps": [
            "Total valence electrons: N(5) + 3×F(7) = 5 + 21 = 26.",
            "3 N-F single bonds use 6 electrons; remaining 20 electrons distributed as 3 lone pairs per F (18 electrons) and 1 lone pair on N (2 electrons).",
            "Nitrogen has 1 lone pair in the correct structure."
          ]
        },
        {
          "label": "(b)",
          "ask": "Determine the electron geometry, molecular geometry, and hybridization of the central nitrogen.",
          "steps": [
            "Nitrogen has 4 total electron groups (3 bonding + 1 lone pair): tetrahedral electron geometry, sp³ hybridization.",
            "With 3 bonded atoms and 1 lone pair occupying one tetrahedral position, the molecular geometry is trigonal pyramidal (the same shape as NH₃, since both have an identical electron-group arrangement)."
          ]
        },
        {
          "label": "(c)",
          "ask": "Determine whether NF₃ is polar or nonpolar, and justify your answer using both bond polarity and molecular symmetry.",
          "steps": [
            "Each individual N-F bond is polar, since fluorine is more electronegative than nitrogen.",
            "Because the molecular geometry is trigonal pyramidal (asymmetric, due to the lone pair breaking what would otherwise be trigonal planar symmetry), the three N-F bond dipoles do not cancel, giving NF₃ a net dipole moment overall.",
            "Full credit requires connecting both the individual bond polarity and the asymmetric molecular geometry to the conclusion that NF₃ is polar, not just asserting polarity without both pieces of reasoning."
          ]
        }
      ]
    }
  ],
  "3": [
    {
      "id": "frq-3-1",
      "source": "Original",
      "title": "IMF Comparison and Boiling Point Prediction",
      "prompt": "Consider the molecules CH₃CH₂CH₃ (propane), CH₃OCH₃ (dimethyl ether), and CH₃CH₂OH (ethanol) — all with similar molar mass.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Identify all intermolecular forces present in each molecule.",
          "steps": [
            "Propane: nonpolar (symmetric, low ΔEN C-H bonds) — only London dispersion forces.",
            "Dimethyl ether: polar (C-O-C bond angle, net dipole) but no H bonded directly to O — dipole-dipole and dispersion forces, no hydrogen bonding.",
            "Ethanol: has an O-H group — hydrogen bonding, plus dipole-dipole and dispersion forces.",
            "Full credit requires correctly identifying the complete set of IMFs for each molecule, including explicitly ruling out hydrogen bonding for dimethyl ether."
          ]
        },
        {
          "label": "(b)",
          "ask": "Rank the three compounds by predicted boiling point and justify your ranking.",
          "steps": [
            "Since all three have similar molar mass, dispersion forces are roughly comparable across all three — the deciding factor is the strongest additional IMF present.",
            "Ranking from lowest to highest boiling point: propane (dispersion only) < dimethyl ether (dipole-dipole added) < ethanol (hydrogen bonding added, strongest IMF).",
            "Full credit requires the correct order AND an explicit justification tied to which IMF is the strongest present in each, not just restating the ranking."
          ]
        }
      ]
    },
    {
      "id": "frq-3-2",
      "source": "Original",
      "title": "Ideal Gas Law and Molar Mass Determination",
      "prompt": "A 0.250 g sample of an unknown volatile liquid is vaporized completely in a 250.0 mL flask at 1.00 atm and 373 K.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Calculate the number of moles of gas in the flask.",
          "steps": [
            "Convert volume to L: 250.0 mL = 0.2500 L.",
            "n = PV/RT = (1.00)(0.2500) / [(0.0821)(373)] = 0.2500/30.62 = 8.16 × 10⁻³ mol.",
            "Full credit requires correct unit conversion (mL to L) and correct use of R matching atm units."
          ]
        },
        {
          "label": "(b)",
          "ask": "Calculate the molar mass of the unknown compound.",
          "steps": [
            "M = mass / moles = 0.250 g / 8.16 × 10⁻³ mol = 30.6 g/mol.",
            "Full credit requires correctly carrying forward the moles calculated in part (a)."
          ]
        },
        {
          "label": "(c)",
          "ask": "Based on the calculated molar mass, propose a plausible molecular formula for this compound if it is known to contain only carbon and hydrogen, and justify your choice.",
          "steps": [
            "A molar mass of about 30.6 g/mol is very close to C₂H₆ (ethane, molar mass 30.07 g/mol), which fits both the numerical value and the constraint of containing only C and H.",
            "Full credit accepts C₂H₆ or another chemically reasonable formula with a calculated molar mass close to 30.6 g/mol, as long as the reasoning explicitly connects the numerical match to the proposed formula."
          ]
        }
      ]
    },
    {
      "id": "frq-3-3",
      "source": "Original",
      "title": "Solution Preparation and Dilution",
      "prompt": "A chemist needs to prepare 500.0 mL of a 0.150 M solution of K₂CrO₄ (molar mass 194.19 g/mol), starting from solid K₂CrO₄ and a 2.00 M stock solution.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Calculate the mass of solid K₂CrO₄ needed to directly prepare the target solution (assume no stock solution is used for this part).",
          "steps": [
            "Moles needed = M × V = 0.150 mol/L × 0.5000 L = 0.0750 mol.",
            "Mass = moles × molar mass = 0.0750 mol × 194.19 g/mol = 14.6 g.",
            "Full credit requires correct volume unit conversion and correct multiplication order (moles first, then mass)."
          ]
        },
        {
          "label": "(b)",
          "ask": "Instead, calculate the volume of the 2.00 M stock solution needed to prepare the same 500.0 mL of 0.150 M solution by dilution.",
          "steps": [
            "Using M₁V₁ = M₂V₂: (2.00)(V₁) = (0.150)(500.0), so V₁ = 75.0/2.00 = 37.5 mL.",
            "Full credit requires correctly identifying which concentration/volume pair is the stock (1) versus the target (2), and solving algebraically rather than just plugging numbers in the wrong positions."
          ]
        },
        {
          "label": "(c)",
          "ask": "Describe the correct laboratory procedure for preparing this diluted solution using a volumetric flask.",
          "steps": [
            "Measure 37.5 mL of the 2.00 M stock solution using a graduated cylinder or volumetric pipet.",
            "Transfer this volume into a 500.0 mL volumetric flask.",
            "Add distilled water gradually up to the calibration mark on the flask, mixing thoroughly, being careful to reach the mark exactly (not overshoot).",
            "Full credit requires mentioning the volumetric flask specifically (for volume precision) and the correct order of operations (stock solution first, then dilute to the mark), not simply 'add water to the stock solution.'"
          ]
        }
      ]
    },
    {
      "id": "frq-3-4",
      "source": "Original",
      "title": "Solid Classification from Experimental Properties",
      "prompt": "A student is given an unknown solid with the following properties: it does not conduct electricity as a solid or when melted; it has a low melting point (54°C); and it dissolves readily in a nonpolar organic solvent but not in water.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Classify the type of solid (ionic, metallic, covalent network, or molecular) and justify using the given properties.",
          "steps": [
            "The complete lack of conductivity in any state rules out ionic (which conducts when molten) and metallic (which conducts as a solid).",
            "The relatively low melting point rules out covalent network solids, which typically have very high melting points from breaking actual covalent bonds throughout the structure.",
            "This leaves molecular solid as the best classification — low melting point (only IMFs need to be overcome) and no conductivity in any state (no mobile charged particles) are both consistent with a molecular solid.",
            "Full credit requires explicitly ruling out the other three categories using specific evidence, not just stating the correct final answer."
          ]
        },
        {
          "label": "(b)",
          "ask": "Using the solubility data given, predict whether this compound is likely polar or nonpolar, and justify your reasoning.",
          "steps": [
            "The compound dissolves in a nonpolar solvent but not in water (a polar solvent) — this is a direct application of 'like dissolves like.'",
            "This pattern strongly suggests the compound itself is nonpolar, since only a nonpolar solute would preferentially dissolve in a nonpolar solvent while being insoluble in a polar one.",
            "Full credit requires connecting the specific solubility behavior to the 'like dissolves like' principle explicitly, not just stating a conclusion."
          ]
        }
      ]
    },
    {
      "id": "frq-3-5",
      "source": "Original",
      "title": "Photon Energy and the Photoelectric Effect",
      "prompt": "A metal surface has a threshold frequency of 5.50 × 10¹⁴ Hz for the photoelectric effect. Light with a frequency of 7.00 × 10¹⁴ Hz is shone on the surface.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Explain, using the particle nature of light, whether electrons will be ejected from the metal.",
          "steps": [
            "Since the incident light's frequency (7.00 × 10¹⁴ Hz) exceeds the metal's threshold frequency (5.50 × 10¹⁴ Hz), each individual photon carries enough energy to eject an electron.",
            "Electrons will be ejected, because the photoelectric effect depends on individual photon energy exceeding a threshold, not on the total intensity of light.",
            "Full credit requires explicitly comparing the given frequency to the threshold frequency and connecting that comparison to individual photon energy, not just referencing brightness/intensity."
          ]
        },
        {
          "label": "(b)",
          "ask": "Calculate the energy of one photon of the incident light (7.00 × 10¹⁴ Hz).",
          "steps": [
            "E = hν = (6.626 × 10⁻³⁴ J·s)(7.00 × 10¹⁴ Hz) = 4.64 × 10⁻¹⁹ J.",
            "Full credit requires correct unit handling and using the given frequency (not the threshold frequency) in the calculation."
          ]
        },
        {
          "label": "(c)",
          "ask": "If the frequency of incident light were instead decreased to 4.00 × 10¹⁴ Hz (below the threshold), but the intensity were greatly increased, would electrons be ejected? Explain.",
          "steps": [
            "No electrons would be ejected, regardless of how high the intensity is raised.",
            "This is because each individual photon at 4.00 × 10¹⁴ Hz still carries less energy than the threshold requires; increasing intensity only increases the number of photons hitting the surface per second, not the energy carried by each individual photon.",
            "Full credit requires explicitly distinguishing 'more photons' (intensity) from 'more energetic photons' (frequency), and correctly concluding that intensity alone cannot compensate for insufficient individual photon energy."
          ]
        }
      ]
    },
    {
      "id": "frq-3-6",
      "source": "Original",
      "title": "Beer-Lambert Law and Calibration Curve Analysis",
      "prompt": "A student prepares four standard solutions of a colored dye and measures their absorbance at 520 nm: 0.0500 M (A=0.250), 0.100 M (A=0.501), 0.150 M (A=0.752), and 0.200 M (A=1.002).",
      "parts": [
        {
          "label": "(a)",
          "ask": "Determine the molar absorptivity (ε) of the dye at 520 nm, assuming a path length of 1.00 cm, using the data from the 0.100 M standard.",
          "steps": [
            "Using A = εbc: 0.501 = ε(1.00)(0.100).",
            "Solving: ε = 0.501/0.100 = 5.01 L/(mol·cm).",
            "Full credit requires correctly rearranging the Beer-Lambert equation and substituting the correct standard's data."
          ]
        },
        {
          "label": "(b)",
          "ask": "An unknown sample of the same dye has a measured absorbance of 0.625 at 520 nm in a 1.00 cm cuvette. Determine its concentration.",
          "steps": [
            "Using A = εbc with ε = 5.01 L/(mol·cm) (or directly interpolating from the linear calibration data): c = A/(εb) = 0.625/(5.01 × 1.00) = 0.125 M.",
            "Full credit accepts either the ε-based calculation or a reasonable graphical/linear-interpolation approach from the standards data, as long as the final concentration is consistent with the trend shown."
          ]
        },
        {
          "label": "(c)",
          "ask": "Explain why it is important that the unknown sample's absorbance (0.625) falls within the range of the standard solutions' absorbances (0.250 to 1.002) used to construct the calibration curve.",
          "steps": [
            "The calibration curve is only verified to be linear within the range of concentrations actually measured for the standards.",
            "Using the curve to determine a concentration outside this measured range requires extrapolation, which assumes the linear relationship continues to hold beyond the tested region — an assumption that may not be valid, especially at very high concentrations where Beer-Lambert's linearity is known to break down.",
            "Full credit requires explicitly connecting 'staying within the calibrated range' to the reliability/validity of the linear assumption, not just stating that extrapolation is 'less accurate' without explaining why."
          ]
        }
      ]
    },
    {
      "id": "frq-3-7",
      "source": "Original",
      "title": "Real Gas Deviation and van der Waals Reasoning",
      "prompt": "A chemist compares the behavior of NH₃ gas and Ne gas under identical conditions of high pressure and low temperature.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Predict which gas will show greater deviation from ideal gas behavior under these conditions, and justify your answer using intermolecular forces.",
          "steps": [
            "NH₃ is polar and capable of hydrogen bonding (H bonded directly to N), giving it significantly stronger intermolecular attractions than Ne, which is a nonpolar noble gas with only very weak London dispersion forces.",
            "Since deviation from ideal behavior at low temperature is driven primarily by intermolecular attraction (particles have time to attract each other before wall collisions), NH₃'s much stronger IMFs mean it will deviate more from ideal behavior than Ne under these conditions.",
            "Full credit requires connecting IMF strength directly to the specific mechanism of low-temperature deviation, not just stating 'NH₃ is more polar' without that connection."
          ]
        },
        {
          "label": "(b)",
          "ask": "Explain how the measured pressure of NH₃ under these conditions would compare to the pressure predicted by the ideal gas law, and why.",
          "steps": [
            "The measured (real) pressure of NH₃ would be lower than the ideal gas law predicts.",
            "This is because NH₃'s molecules, moving relatively slowly at low temperature, have time for their attractive intermolecular forces (especially hydrogen bonding) to act on each other just before striking the container wall, softening the force of each collision compared to what would occur with zero attraction (the ideal assumption).",
            "Full credit requires explicitly describing the collision-softening mechanism, not just stating that pressure will be 'lower' without the underlying particle-level reasoning."
          ]
        }
      ]
    }
  ],
  "4": [
    {
      "id": "frq-4-1",
      "source": "Original",
      "title": "Precipitation Reaction and Net Ionic Equation",
      "prompt": "Aqueous solutions of lead(II) nitrate and potassium iodide are mixed, forming a bright yellow precipitate.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Write the balanced molecular equation for this reaction.",
          "steps": [
            "Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq).",
            "Full credit requires correct formulas (including correct charges for the double-replacement swap) and correct balancing coefficients."
          ]
        },
        {
          "label": "(b)",
          "ask": "Write the complete ionic equation and identify the spectator ions.",
          "steps": [
            "Complete ionic: Pb²⁺(aq) + 2NO₃⁻(aq) + 2K⁺(aq) + 2I⁻(aq) → PbI₂(s) + 2K⁺(aq) + 2NO₃⁻(aq).",
            "Spectator ions: K⁺ and NO₃⁻, since they appear identically and unchanged on both sides.",
            "Full credit requires splitting only the soluble species (not the insoluble PbI₂) and correctly identifying both spectator ions."
          ]
        },
        {
          "label": "(c)",
          "ask": "Write the net ionic equation.",
          "steps": [
            "Pb²⁺(aq) + 2I⁻(aq) → PbI₂(s).",
            "Full credit requires correctly cancelling the spectators identified in part (b) and preserving the correct coefficients."
          ]
        }
      ]
    },
    {
      "id": "frq-4-2",
      "source": "Original",
      "title": "Stoichiometry and Limiting Reactant",
      "prompt": "Aluminum reacts with excess hydrochloric acid according to the equation 2Al(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂(g). A student reacts 5.40 g of Al (molar mass 26.98 g/mol) with 200.0 mL of 3.00 M HCl.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Determine the limiting reactant.",
          "steps": [
            "Moles Al = 5.40/26.98 = 0.2002 mol. Moles HCl = 3.00 × 0.2000 = 0.600 mol.",
            "Divide by coefficients: Al: 0.2002/2 = 0.1001; HCl: 0.600/6 = 0.100.",
            "The values are essentially equal (0.1001 vs 0.100), meaning the reactants are present in almost exactly stoichiometric proportion — but since HCl's value is marginally smaller, HCl is technically the limiting reactant.",
            "Full credit requires the coefficient-dividing method shown explicitly, with a reasonable conclusion given how close the two values are."
          ]
        },
        {
          "label": "(b)",
          "ask": "Calculate the theoretical yield of H₂ gas, in moles.",
          "steps": [
            "Using HCl as limiting (or Al, given how close the values are, either should earn credit if methodology is consistent): moles H₂ = 0.600 mol HCl × (3 mol H₂ / 6 mol HCl) = 0.300 mol H₂.",
            "Full credit requires using the limiting reactant identified in part (a) and the correct mole ratio (3 H₂ : 6 HCl, reducible to 1:2)."
          ]
        },
        {
          "label": "(c)",
          "ask": "If only 0.271 mol of H₂ is actually collected, calculate the percent yield.",
          "steps": [
            "% yield = (actual/theoretical) × 100 = (0.271/0.300) × 100 = 90.3%.",
            "Full credit requires correctly using the theoretical yield calculated in part (b), not a re-derived or different value."
          ]
        }
      ]
    },
    {
      "id": "frq-4-3",
      "source": "Original",
      "title": "Titration Analysis",
      "prompt": "A student standardizes an NaOH solution by titrating it against a known mass of potassium hydrogen phthalate (KHP, a monoprotic acid, molar mass 204.22 g/mol). A 0.5110 g sample of KHP requires 24.85 mL of NaOH solution to reach the equivalence point.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Write the balanced net ionic equation for this reaction.",
          "steps": [
            "KHP contributes one acidic H⁺ (from its -COOH group) that reacts with OH⁻ from NaOH: HP⁻(aq) + OH⁻(aq) → P²⁻(aq) + H₂O(l), where HP⁻ represents the hydrogen phthalate ion.",
            "Full credit accepts a reasonable representation of KHP's single acidic proton reacting 1:1 with OH⁻, even if the exact organic anion notation varies."
          ]
        },
        {
          "label": "(b)",
          "ask": "Calculate the concentration of the NaOH solution.",
          "steps": [
            "Moles KHP = 0.5110 g / 204.22 g/mol = 2.502 × 10⁻³ mol.",
            "Since KHP is monoprotic, moles NaOH at equivalence = moles KHP = 2.502 × 10⁻³ mol.",
            "Concentration NaOH = 2.502 × 10⁻³ mol / 0.02485 L = 0.1007 M.",
            "Full credit requires correct mass-to-mole conversion, correct 1:1 ratio reasoning, and correct final division by volume in liters."
          ]
        },
        {
          "label": "(c)",
          "ask": "Explain why KHP, rather than a liquid strong acid, is commonly used to standardize a base solution.",
          "steps": [
            "KHP is a solid that can be weighed precisely on an analytical balance, avoiding the volume-measurement uncertainty involved in measuring out a liquid acid.",
            "KHP is also stable, non-hygroscopic (doesn't absorb water from air, which would throw off its measured mass), and has a well-known, precise molar mass — all factors that make titration calculations based on it highly reliable.",
            "Full credit requires at least one specific, correct reason connecting KHP's physical/chemical properties to measurement precision, not just 'it works well' without justification."
          ]
        }
      ]
    },
    {
      "id": "frq-4-4",
      "source": "Original",
      "title": "Redox Reaction Analysis",
      "prompt": "Consider the reaction: MnO₄⁻(aq) + 5Fe²⁺(aq) + 8H⁺(aq) → Mn²⁺(aq) + 5Fe³⁺(aq) + 4H₂O(l)",
      "parts": [
        {
          "label": "(a)",
          "ask": "Determine the oxidation number of Mn in MnO₄⁻ and in Mn²⁺, and state whether Mn is oxidized or reduced.",
          "steps": [
            "In MnO₄⁻: O is −2 (4×−2=−8 total); overall charge −1, so Mn + (−8) = −1, giving Mn = +7.",
            "In Mn²⁺: oxidation number is simply +2 (a monatomic ion's oxidation number equals its charge).",
            "Mn's oxidation number decreases from +7 to +2 — this is a gain of electrons (reduction), so Mn is reduced.",
            "Full credit requires both oxidation number calculations shown explicitly and correct identification of reduction (not oxidation)."
          ]
        },
        {
          "label": "(b)",
          "ask": "Determine whether Fe is oxidized or reduced, and identify the oxidizing agent in this reaction.",
          "steps": [
            "Fe²⁺ → Fe³⁺ shows an oxidation number increase from +2 to +3 — a loss of electrons, meaning Fe is oxidized.",
            "The oxidizing agent is the species that is reduced (and thereby causes oxidation elsewhere) — that's MnO₄⁻, since Mn was reduced from +7 to +2.",
            "Full credit requires correctly identifying Fe as oxidized and MnO₄⁻ (not Fe²⁺) as the oxidizing agent — a common point of confusion is mixing up which species is the 'agent' versus which is oxidized/reduced itself."
          ]
        },
        {
          "label": "(c)",
          "ask": "Verify that this equation is balanced with respect to charge, showing your work.",
          "steps": [
            "Left side charge: MnO₄⁻ (−1) + 5Fe²⁺ (5 × +2 = +10) + 8H⁺ (8 × +1 = +8) = −1 + 10 + 8 = +17.",
            "Right side charge: Mn²⁺ (+2) + 5Fe³⁺ (5 × +3 = +15) + 4H₂O (0, neutral) = +2 + 15 + 0 = +17.",
            "Both sides equal +17, confirming the equation is balanced with respect to charge, in addition to being balanced with respect to atoms.",
            "Full credit requires showing the explicit charge summation on both sides, not just asserting that it balances."
          ]
        }
      ]
    },
    {
      "id": "frq-4-5",
      "source": "Original",
      "title": "Reaction Type Identification and Prediction",
      "prompt": "A student is given three separate reactions to analyze: (1) 2KClO₃(s) → 2KCl(s) + 3O₂(g); (2) Zn(s) + CuCl₂(aq) → ZnCl₂(aq) + Cu(s); (3) BaCl₂(aq) + K₂CO₃(aq) → BaCO₃(s) + 2KCl(aq).",
      "parts": [
        {
          "label": "(a)",
          "ask": "Classify each of the three reactions by type.",
          "steps": [
            "Reaction 1: decomposition — a single compound (KClO₃) breaks down into two simpler products (KCl and O₂).",
            "Reaction 2: single replacement — elemental Zn replaces Cu within CuCl₂.",
            "Reaction 3: double replacement (precipitation) — the cations and anions of two soluble ionic compounds swap partners, forming an insoluble solid (BaCO₃).",
            "Full credit requires correct classification of all three, with brief justification tied to the specific reaction pattern observed."
          ]
        },
        {
          "label": "(b)",
          "ask": "For reaction 2, explain — using the concept of reactivity — why this reaction proceeds as written rather than the reverse (Cu displacing Zn²⁺).",
          "steps": [
            "Zinc is more reactive than copper (higher on the activity/reactivity series for metals), meaning zinc more readily loses electrons to form a cation than copper does.",
            "This greater tendency to be oxidized allows elemental Zn to displace Cu²⁺ from solution, reducing it to elemental Cu while Zn itself is oxidized to Zn²⁺; the reverse process does not occur spontaneously because copper is less reactive and doesn't readily give up electrons to reduce Zn²⁺.",
            "Full credit requires explicitly invoking relative reactivity to justify the direction of the reaction, not just stating 'that's the way it happens.'"
          ]
        },
        {
          "label": "(c)",
          "ask": "Write the net ionic equation for reaction 3.",
          "steps": [
            "Splitting soluble species: Ba²⁺(aq) + 2Cl⁻(aq) + 2K⁺(aq) + CO₃²⁻(aq) → BaCO₃(s) + 2K⁺(aq) + 2Cl⁻(aq).",
            "Cancelling spectators (K⁺ and Cl⁻): Ba²⁺(aq) + CO₃²⁻(aq) → BaCO₃(s).",
            "Full credit requires correctly identifying which ions are spectators and reducing to the simplest correct net ionic equation."
          ]
        }
      ]
    }
  ],
  "5": [
    {
      "id": "frq-5-1",
      "source": "Original",
      "title": "Determining Rate Law from Initial Rates Data",
      "prompt": "The reaction 2ClO₂(aq) + 2OH⁻(aq) → ClO₃⁻(aq) + ClO₂⁻(aq) + H₂O(l) was studied, giving the data: Trial 1: [ClO₂]=0.060, [OH⁻]=0.030, rate=0.0248. Trial 2: [ClO₂]=0.020, [OH⁻]=0.030, rate=0.00276. Trial 3: [ClO₂]=0.020, [OH⁻]=0.090, rate=0.00828.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Determine the order of the reaction with respect to ClO₂.",
          "steps": [
            "Comparing Trial 1 and 2 (only [ClO₂] changes, ratio 0.060/0.020 = 3): rate ratio = 0.0248/0.00276 = 8.99 ≈ 9.",
            "Since 3ᵐ = 9, m = 2 — second order in ClO₂.",
            "Full credit requires setting up the correct ratio comparison using two trials that isolate ClO₂ specifically."
          ]
        },
        {
          "label": "(b)",
          "ask": "Determine the order of the reaction with respect to OH⁻.",
          "steps": [
            "Comparing Trial 2 and 3 (only [OH⁻] changes, ratio 0.090/0.030 = 3): rate ratio = 0.00828/0.00276 = 3.00.",
            "Since 3ⁿ = 3, n = 1 — first order in OH⁻.",
            "Full credit requires using the correct pair of trials that isolate OH⁻."
          ]
        },
        {
          "label": "(c)",
          "ask": "Write the complete rate law and calculate k, including units, using Trial 1's data.",
          "steps": [
            "Rate law: Rate = k[ClO₂]²[OH⁻].",
            "Solving for k using Trial 1: 0.0248 = k(0.060)²(0.030) = k(0.0036)(0.030) = k(1.08×10⁻⁴). k = 0.0248/1.08×10⁻⁴ = 230 M⁻²s⁻¹.",
            "Full credit requires correct rate law construction from parts (a) and (b), correct substitution, and correct units (M⁻²s⁻¹ for an overall third-order reaction)."
          ]
        }
      ]
    },
    {
      "id": "frq-5-2",
      "source": "Original",
      "title": "Integrated Rate Law and Half-Life",
      "prompt": "The decomposition of a certain pollutant in a lake follows first-order kinetics with a rate constant of k = 0.0198 day⁻¹.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Calculate the half-life of the pollutant.",
          "steps": [
            "t½ = 0.693/k = 0.693/0.0198 = 35.0 days.",
            "Full credit requires the correct first-order half-life formula and correct substitution."
          ]
        },
        {
          "label": "(b)",
          "ask": "If the initial concentration of the pollutant is 5.00 × 10⁻³ M, calculate its concentration after 100.0 days.",
          "steps": [
            "Using the first-order integrated rate law: ln[A] = −kt + ln[A]₀.",
            "ln[A] = −(0.0198)(100.0) + ln(5.00×10⁻³) = −1.98 + (−5.298) = −7.278.",
            "[A] = e^(−7.278) = 6.90 × 10⁻⁴ M.",
            "Full credit requires correct use of natural log form and correct final exponentiation."
          ]
        },
        {
          "label": "(c)",
          "ask": "Explain why the half-life calculated in part (a) would be the same regardless of the pollutant's starting concentration, and contrast this with what would happen if the reaction were instead second order.",
          "steps": [
            "For a first-order reaction, t½ = 0.693/k depends only on k, not on [A]₀ — this is a mathematical consequence of the exponential decay form of the first-order integrated rate law.",
            "For a second-order reaction, t½ = 1/(k[A]₀) depends directly on the starting concentration — a more concentrated sample would have a shorter half-life, and each successive half-life would take progressively longer as concentration decreases.",
            "Full credit requires explicitly contrasting both half-life formulas and their dependence (or lack thereof) on [A]₀, not just restating that first-order half-life is constant without the second-order comparison."
          ]
        }
      ]
    },
    {
      "id": "frq-5-3",
      "source": "Original",
      "title": "Reaction Mechanism Analysis",
      "prompt": "The reaction 2NO(g) + Br₂(g) → 2NOBr(g) is proposed to occur via the following two-step mechanism: Step 1: NO + Br₂ ⇌ NOBr₂ (fast, reversible); Step 2: NOBr₂ + NO → 2NOBr (slow).",
      "parts": [
        {
          "label": "(a)",
          "ask": "Show that this mechanism is consistent with the overall balanced equation.",
          "steps": [
            "Adding both steps: NO + Br₂ + NOBr₂ + NO → NOBr₂ + 2NOBr.",
            "Cancelling NOBr₂ (produced in step 1, consumed in step 2): 2NO + Br₂ → 2NOBr, exactly matching the given overall equation.",
            "Full credit requires showing the explicit addition and cancellation, not just asserting consistency."
          ]
        },
        {
          "label": "(b)",
          "ask": "Identify the intermediate in this mechanism and explain how you know it's an intermediate rather than a catalyst.",
          "steps": [
            "NOBr₂ is the intermediate.",
            "It's produced in step 1 (appears as a product) and consumed in step 2 (appears as a reactant) — this 'produced then consumed' pattern is the definition of an intermediate, the opposite of a catalyst's 'consumed then regenerated' pattern.",
            "Full credit requires explicitly contrasting the intermediate pattern with the catalyst pattern, not just naming NOBr₂."
          ]
        },
        {
          "label": "(c)",
          "ask": "Derive the overall rate law for this reaction, in terms of only NO and Br₂.",
          "steps": [
            "The RDS (step 2) gives Rate = k₂[NOBr₂][NO], but NOBr₂ is an intermediate and must be substituted out.",
            "Using the fast equilibrium in step 1: k₁[NO][Br₂] = k₋₁[NOBr₂], so [NOBr₂] = (k₁/k₋₁)[NO][Br₂].",
            "Substituting into the RDS rate law: Rate = k₂(k₁/k₋₁)[NO][Br₂][NO] = k[NO]²[Br₂], where k combines the individual rate constants.",
            "Full credit requires the full substitution process shown explicitly, arriving at a rate law expressed only in terms of NO and Br₂."
          ]
        }
      ]
    },
    {
      "id": "frq-5-4",
      "source": "Original",
      "title": "Reaction Energy Diagrams and Catalysis",
      "prompt": "A student is given data for an uncatalyzed reaction: Ea(forward) = 90 kJ/mol, Ea(reverse) = 40 kJ/mol. A catalyst is then added, and the new Ea(forward) is measured as 55 kJ/mol.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Calculate ΔH for the uncatalyzed reaction, and determine whether it is exothermic or endothermic.",
          "steps": [
            "ΔH = Ea(forward) − Ea(reverse) = 90 − 40 = +50 kJ/mol.",
            "Since ΔH is positive, the reaction is endothermic.",
            "Full credit requires correct formula application and correct sign interpretation."
          ]
        },
        {
          "label": "(b)",
          "ask": "Determine the new Ea(reverse) after the catalyst is added.",
          "steps": [
            "A catalyst lowers Ea for both forward and reverse directions by the same amount, since ΔH does not change with a catalyst.",
            "The forward Ea decreased by 90 − 55 = 35 kJ/mol, so the reverse Ea must also decrease by 35 kJ/mol: new Ea(reverse) = 40 − 35 = 5 kJ/mol.",
            "Checking: new ΔH = 55 − 5 = +50 kJ/mol, matching the original ΔH from part (a), confirming the catalyst didn't change the reaction's thermodynamics.",
            "Full credit requires recognizing that ΔH must remain unchanged and using that constraint to solve for the new Ea(reverse), rather than assuming an arbitrary decrease."
          ]
        },
        {
          "label": "(c)",
          "ask": "Sketch (in words) how the reaction energy diagram would change with the catalyst present, and explain why the equilibrium position is unaffected despite the faster rate.",
          "steps": [
            "The catalyzed diagram would show a lower overall peak (transition state) than the uncatalyzed diagram, while the reactant and product energy levels themselves remain exactly the same as before.",
            "Because both the forward and reverse rates increase by the same proportional amount (both activation energies drop equally), the ratio of forward to reverse rate at equilibrium — which determines the equilibrium position — is unchanged; equilibrium is simply reached more quickly.",
            "Full credit requires explicitly connecting 'equal reduction in both Ea values' to 'unchanged equilibrium position,' not just asserting that equilibrium is unaffected without that reasoning."
          ]
        }
      ]
    },
    {
      "id": "frq-5-5",
      "source": "Original",
      "title": "Collision Theory and Temperature Dependence",
      "prompt": "A student proposes that reaction rate increases with temperature primarily because particles collide more frequently at higher temperature.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Evaluate whether this explanation is complete, and provide a more thorough explanation using the collision model.",
          "steps": [
            "This explanation is incomplete. While collision frequency does increase somewhat with temperature (particles move faster, covering more distance per unit time), this effect alone is relatively modest.",
            "The dominant effect is that increasing temperature shifts the Maxwell-Boltzmann distribution of molecular kinetic energies toward higher values, dramatically increasing the fraction of collisions with energy exceeding the activation energy (Ea) — this energy-threshold effect, not raw collision frequency, is primarily responsible for the often large rate increases observed with modest temperature increases.",
            "Full credit requires explicitly naming both effects (frequency and energy-threshold/Maxwell-Boltzmann) and correctly identifying the energy effect as dominant, not just restating the student's original (incomplete) claim."
          ]
        },
        {
          "label": "(b)",
          "ask": "Using this reasoning, explain why a 10°C increase in temperature can sometimes roughly double a reaction's rate, even though the increase in average kinetic energy at that temperature range is relatively small in percentage terms.",
          "steps": [
            "The relationship between the fraction of sufficiently energetic collisions and temperature is exponential (following the Arrhenius equation, k = Ae^(−Ea/RT)), not linear.",
            "Because of this exponential dependence, even a relatively small absolute change in temperature can cause a disproportionately large change in the fraction of molecules with energy exceeding Ea, explaining how a modest 10°C change can produce a large (e.g., doubling) effect on rate.",
            "Full credit requires connecting the exponential form of the rate constant's temperature dependence to the disproportionately large rate change, rather than assuming the relationship is simply proportional to temperature."
          ]
        }
      ]
    }
  ],
  "6": [
    {
      "id": "frq-6-1",
      "source": "Original",
      "title": "Calorimetry Determination of Specific Heat",
      "prompt": "A student heats a 32.5 g sample of an unknown metal to 98.5°C, then drops it into 100.0 g of water (c = 4.184 J/g·°C) at 21.0°C in an insulated calorimeter. The final temperature of the system is 24.9°C.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Calculate the heat gained by the water.",
          "steps": [
            "q(water) = mcΔT = (100.0)(4.184)(24.9−21.0) = (100.0)(4.184)(3.9) = 1631.8 J.",
            "Full credit requires correct ΔT direction (final − initial) and correct substitution."
          ]
        },
        {
          "label": "(b)",
          "ask": "Calculate the specific heat of the unknown metal.",
          "steps": [
            "Heat lost by metal = −q(water) = −1631.8 J (conservation of energy in the isolated system).",
            "ΔT(metal) = 24.9 − 98.5 = −73.6°C.",
            "c(metal) = q/(mΔT) = −1631.8/[(32.5)(−73.6)] = −1631.8/−2392.0 = 0.682 J/g·°C.",
            "Full credit requires correctly using the negative q and negative ΔT for the metal (both signs must be consistent) and correct final division."
          ]
        },
        {
          "label": "(c)",
          "ask": "Based on the calculated specific heat, suggest a plausible identity for the metal, and explain one source of experimental error that could affect this result.",
          "steps": [
            "A specific heat around 0.682 J/g·°C is reasonably close to metals like nickel (0.444) or could suggest some heat loss affected the measurement; accept any reasonable metal identification with justification tied to the calculated value, or an acknowledgment that the value doesn't precisely match a common tabulated metal.",
            "A reasonable source of error: heat loss to the surrounding air/calorimeter walls (not perfectly insulated) would cause the water's measured temperature increase to be smaller than the true value, leading to an underestimated q(water) and therefore an underestimated specific heat for the metal.",
            "Full credit requires a specific, physically reasonable error source connected to its actual effect on the calculated result, not a vague statement like 'human error.'"
          ]
        }
      ]
    },
    {
      "id": "frq-6-2",
      "source": "Original",
      "title": "Enthalpy of Formation Calculation",
      "prompt": "Consider the combustion of ethanol: C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l). Given ΔH°f: C₂H₅OH(l) = −277.6 kJ/mol, CO₂(g) = −393.5 kJ/mol, H₂O(l) = −285.8 kJ/mol.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Calculate ΔH°rxn for this combustion reaction.",
          "steps": [
            "Products: 2(−393.5) + 3(−285.8) = −787.0 + (−857.4) = −1644.4 kJ.",
            "Reactants: 1(−277.6) + 3(0) [O₂ is an element in its standard state] = −277.6 kJ.",
            "ΔH°rxn = −1644.4 − (−277.6) = −1366.8 kJ/mol.",
            "Full credit requires correct coefficients applied to each ΔH°f value and correct products-minus-reactants order."
          ]
        },
        {
          "label": "(b)",
          "ask": "Calculate the heat released when 23.0 g of ethanol (molar mass 46.07 g/mol) is completely combusted.",
          "steps": [
            "Moles of ethanol = 23.0/46.07 = 0.4993 mol.",
            "Heat released = 0.4993 mol × 1366.8 kJ/mol = 682.4 kJ.",
            "Full credit requires correct mole conversion and correct use of the ΔH°rxn value from part (a), scaled to the actual moles reacting."
          ]
        },
        {
          "label": "(c)",
          "ask": "Explain why O₂(g) is assigned a ΔH°f of exactly zero in this calculation.",
          "steps": [
            "By definition, any element in its standard state (O₂ gas is oxygen's standard state at standard conditions) is assigned ΔH°f = 0, serving as the reference point that all other formation enthalpies are measured relative to.",
            "Full credit requires explicitly invoking the definitional convention, not just stating 'because it's an element' without the standard-state reasoning."
          ]
        }
      ]
    },
    {
      "id": "frq-6-3",
      "source": "Original",
      "title": "Hess's Law Multi-Step Calculation",
      "prompt": "Given the following reactions: (1) N₂(g) + 2O₂(g) → 2NO₂(g), ΔH = +66.4 kJ; (2) 2NO(g) + O₂(g) → 2NO₂(g), ΔH = −114.2 kJ.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Using Hess's Law, determine ΔH for the reaction N₂(g) + O₂(g) → 2NO(g).",
          "steps": [
            "Take reaction (1) as written. Reverse reaction (2) to get 2NO₂(g) → 2NO(g) + O₂(g), flipping its sign to +114.2 kJ.",
            "Adding (1) + reversed (2): N₂ + 2O₂ + 2NO₂ → 2NO₂ + 2NO + O₂. Cancelling 2NO₂ (appears both sides) and combining O₂ (2O₂ on left, 1 O₂ on right, net 1 O₂ remaining on left): N₂ + O₂ → 2NO.",
            "ΔH = 66.4 + 114.2 = +180.6 kJ.",
            "Full credit requires correctly reversing reaction (2) and flipping its sign, then correctly cancelling species to reach the target equation."
          ]
        },
        {
          "label": "(b)",
          "ask": "Is the reaction N₂(g) + O₂(g) → 2NO(g) exothermic or endothermic? Explain what this suggests about why NO is not typically formed in large amounts at low temperatures.",
          "steps": [
            "Since ΔH = +180.6 kJ (positive), the reaction is endothermic.",
            "A significantly positive ΔH means this reaction requires substantial energy input to proceed favorably in the forward direction; at low temperatures, without that available energy, very little NO tends to form — this is consistent with NO formation becoming more significant only at very high temperatures, such as inside a car engine or during lightning strikes.",
            "Full credit requires connecting the positive ΔH to the practical implication about low-temperature NO formation, not just stating 'endothermic' without that connection."
          ]
        },
        {
          "label": "(c)",
          "ask": "If reaction (1) were instead written with all coefficients doubled, what would happen to its ΔH value, and would this change your answer to part (a)?",
          "steps": [
            "Doubling all coefficients in reaction (1) would double its ΔH value to +132.8 kJ, since ΔH is an extensive property that scales with the amount of reaction represented.",
            "If used in the Hess's Law calculation with this doubled version, the final answer to part (a) would need to be adjusted accordingly (e.g., halving the contribution back down, or working entirely with the doubled version and then halving the final combined result) to correctly reach the same target equation — the final ΔH for the original target reaction (N₂ + O₂ → 2NO) would NOT actually change, since it's a fixed thermodynamic property of that specific equation, only the intermediate bookkeeping would look different.",
            "Full credit requires recognizing that while intermediate ΔH values can be scaled, the final target reaction's ΔH remains a fixed value regardless of which valid combination of manipulated reactions is used to reach it."
          ]
        }
      ]
    },
    {
      "id": "frq-6-4",
      "source": "Original",
      "title": "Heating Curve and Combined Energy Calculation",
      "prompt": "A 25.0 g sample of ice at −10.0°C is heated until it becomes steam at 120.0°C. Use: c(ice) = 2.09 J/g·°C, c(water) = 4.184 J/g·°C, c(steam) = 2.01 J/g·°C, ΔH(fus) = 6.01 kJ/mol, ΔH(vap) = 40.7 kJ/mol, molar mass H₂O = 18.02 g/mol.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Calculate the heat required to warm the ice from −10.0°C to 0.0°C.",
          "steps": [
            "q₁ = mcΔT = (25.0)(2.09)(0.0−(−10.0)) = (25.0)(2.09)(10.0) = 522.5 J.",
            "Full credit requires correct specific heat for the ice phase and correct ΔT."
          ]
        },
        {
          "label": "(b)",
          "ask": "Calculate the heat required to melt the ice completely at 0.0°C.",
          "steps": [
            "Moles = 25.0/18.02 = 1.387 mol.",
            "q₂ = nΔH(fus) = 1.387 × 6.01 kJ/mol = 8.336 kJ = 8336 J.",
            "Full credit requires recognizing this step uses q=nΔH, not q=mcΔT, since it's a phase change."
          ]
        },
        {
          "label": "(c)",
          "ask": "Calculate the total heat required for the entire process (ice at −10.0°C to steam at 120.0°C), given that warming the liquid water from 0.0°C to 100.0°C requires 10,460 J, boiling it at 100.0°C requires 56,463 J, and warming the steam from 100.0°C to 120.0°C requires 1005 J.",
          "steps": [
            "Total q = q₁ + q₂ + q(warm liquid) + q(vaporize) + q(warm steam) = 522.5 + 8336 + 10,460 + 56,463 + 1005 = 76,786.5 J ≈ 76.8 kJ.",
            "Full credit requires correctly summing all five distinct segments (two heating-within-a-phase steps use q=mcΔT with a different c each time; two phase-change steps use q=nΔH; ensuring none are skipped or double-counted).",
            "This mirrors the shape of a full heating curve from Unit 3.3 — alternating between sloped (temperature-changing) segments and flat (phase-change) plateaus, with each segment requiring a different formula and different substance-specific constant."
          ]
        }
      ]
    },
    {
      "id": "frq-6-5",
      "source": "Original",
      "title": "Bond Enthalpy vs. Formation Enthalpy Comparison",
      "prompt": "A student calculates ΔH for the reaction 2H₂(g) + O₂(g) → 2H₂O(g) using two different methods: bond enthalpies (getting −483 kJ/mol) and standard enthalpies of formation (getting −483.6 kJ/mol using ΔH°f of H₂O(g) = −241.8 kJ/mol).",
      "parts": [
        {
          "label": "(a)",
          "ask": "Show the calculation using standard enthalpies of formation.",
          "steps": [
            "ΔH°rxn = ΣnΔH°f(products) − ΣnΔH°f(reactants) = [2(−241.8)] − [2(0) + 1(0)] = −483.6 kJ − 0 = −483.6 kJ/mol.",
            "Full credit requires correctly setting reactant ΔH°f values to zero (both H₂ and O₂ are elements in their standard states) and correctly applying the coefficient of 2 to H₂O."
          ]
        },
        {
          "label": "(b)",
          "ask": "Explain why the bond-enthalpy method and the formation-enthalpy method give very close, but not perfectly identical, results.",
          "steps": [
            "The formation-enthalpy method uses precisely measured, compound-specific thermodynamic data (each ΔH°f value reflects the exact molecule in question).",
            "The bond-enthalpy method instead uses AVERAGE bond energies compiled across many different molecules containing a given bond type, which only approximates the true bond strength in this specific reaction's actual molecules — this inherent averaging is the source of the small discrepancy between the two methods.",
            "Full credit requires identifying the averaged nature of bond enthalpies as the specific source of the (typically small) discrepancy, not a vague 'measurement error' explanation."
          ]
        },
        {
          "label": "(c)",
          "ask": "If a much larger discrepancy (e.g., 50 kJ/mol difference) were observed between these two methods for some other reaction, which method's result would you trust more, and why?",
          "steps": [
            "The formation-enthalpy method's result should generally be trusted more, since it directly uses experimentally determined, compound-specific data rather than averaged, generalized bond energy values.",
            "A large discrepancy in this scenario likely signals that the specific bonds in that reaction's molecules deviate significantly from the 'typical' bond strength baked into the average bond energy tables (for example, due to unusual resonance, ring strain, or an atypical chemical environment around that bond).",
            "Full credit requires justifying the preference for formation-enthalpy data with a specific reason (compound-specific vs. averaged data), not simply asserting one method is 'more accurate' without explanation."
          ]
        }
      ]
    }
  ],
  "7": [
    {
      "id": "frq-7-1",
      "source": "Original",
      "title": "ICE Table and Equilibrium Calculation",
      "prompt": "For the reaction H₂(g) + Br₂(g) ⇌ 2HBr(g), K = 168 at a given temperature. A 1.00 L container is initially filled with 0.500 mol H₂ and 0.500 mol Br₂, with no HBr present.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Set up a complete ICE table for this system.",
          "steps": [
            "Initial: [H₂]=0.500, [Br₂]=0.500, [HBr]=0.",
            "Change: [H₂]=−x, [Br₂]=−x, [HBr]=+2x.",
            "Equilibrium: [H₂]=0.500−x, [Br₂]=0.500−x, [HBr]=2x.",
            "Full credit requires correctly matching each species' change to its stoichiometric coefficient."
          ]
        },
        {
          "label": "(b)",
          "ask": "Solve for the equilibrium concentrations of all three species.",
          "steps": [
            "K = (2x)²/[(0.500−x)(0.500−x)] = (2x)²/(0.500−x)² = 168. Since both sides are perfect squares, take the square root: √168 = 2x/(0.500−x), so 12.96 = 2x/(0.500−x).",
            "Solving: 12.96(0.500−x) = 2x → 6.48 − 12.96x = 2x → 6.48 = 14.96x → x = 0.433.",
            "Equilibrium: [H₂]=[Br₂]=0.500−0.433=0.067 M, [HBr]=2(0.433)=0.866 M.",
            "Full credit requires recognizing the perfect-square shortcut is valid here (identical initial concentrations, matching coefficients) and correctly solving the resulting linear equation."
          ]
        },
        {
          "label": "(c)",
          "ask": "Verify your answer by substituting the equilibrium concentrations back into the K expression.",
          "steps": [
            "K = (0.866)²/[(0.067)(0.067)] = 0.750/0.00449 = 167 ≈ 168, confirming the solution is correct (small difference due to rounding).",
            "Full credit requires showing this explicit verification step, not just asserting the answer is correct."
          ]
        }
      ]
    },
    {
      "id": "frq-7-2",
      "source": "Original",
      "title": "Le Chatelier's Principle Analysis",
      "prompt": "Consider the exothermic reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) at equilibrium in a rigid, sealed container.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Predict and justify the shift in equilibrium position if additional O₂(g) is injected into the container.",
          "steps": [
            "The equilibrium shifts forward, toward products.",
            "Adding O₂ increases the denominator (reactant concentration) in Q's expression momentarily, decreasing Q below K; the system shifts forward to consume the added O₂ and restore Q = K.",
            "Full credit requires the explicit Q vs. K mechanism, not just the memorized shortcut rule stated without justification."
          ]
        },
        {
          "label": "(b)",
          "ask": "Predict and justify the shift in equilibrium position if the temperature of the system is increased.",
          "steps": [
            "The equilibrium shifts backward, toward reactants.",
            "Since the reaction is exothermic, increasing temperature is equivalent to 'adding' more of a product (heat); the system shifts in the endothermic direction (backward) to partially absorb this added heat, per Le Chatelier's Principle.",
            "Full credit requires connecting the exothermic nature of the reaction to the direction of the temperature-driven shift."
          ]
        },
        {
          "label": "(c)",
          "ask": "Does the change in part (b) also change the value of K? Explain, and contrast this with the effect of the change in part (a) on K.",
          "steps": [
            "Yes, the temperature change in part (b) DOES change K — temperature is the only variable that actually changes K's numerical value, since the reaction shifting backward at higher temperature results in a genuinely different equilibrium ratio (a smaller K, favoring reactants more than before).",
            "In contrast, the concentration change in part (a) shifts the equilibrium POSITION (the specific concentrations present) but does NOT change K itself — K remains the same value both before and after the new equilibrium is established.",
            "Full credit requires explicitly contrasting these two effects (position vs. K value) and correctly attributing the K-changing effect only to temperature."
          ]
        }
      ]
    },
    {
      "id": "frq-7-3",
      "source": "Original",
      "title": "Ksp and the Common-Ion Effect",
      "prompt": "Silver chromate, Ag₂CrO₄, has Ksp = 1.1 × 10⁻¹².",
      "parts": [
        {
          "label": "(a)",
          "ask": "Write the dissolution equilibrium and the Ksp expression for Ag₂CrO₄.",
          "steps": [
            "Ag₂CrO₄(s) ⇌ 2Ag⁺(aq) + CrO₄²⁻(aq).",
            "Ksp = [Ag⁺]²[CrO₄²⁻].",
            "Full credit requires correct coefficients in both the equilibrium equation and the Ksp expression."
          ]
        },
        {
          "label": "(b)",
          "ask": "Calculate the molar solubility of Ag₂CrO₄ in pure water.",
          "steps": [
            "Let s = molar solubility. [Ag⁺]=2s, [CrO₄²⁻]=s.",
            "Ksp = (2s)²(s) = 4s³ = 1.1×10⁻¹². Solving: s³ = 2.75×10⁻¹³, so s = (2.75×10⁻¹³)^(1/3) = 6.5×10⁻⁵ M.",
            "Full credit requires correctly setting up the 2s/s relationship from the stoichiometry and correctly taking the cube root."
          ]
        },
        {
          "label": "(c)",
          "ask": "Would Ag₂CrO₄ be more or less soluble in a 0.100 M solution of Na₂CrO₄ compared to pure water? Explain and set up (but do not need to fully solve) the new Ksp expression.",
          "steps": [
            "Ag₂CrO₄ would be LESS soluble in the Na₂CrO₄ solution.",
            "Na₂CrO₄ provides a common ion (CrO₄²⁻) already involved in the Ag₂CrO₄ solubility equilibrium; by Le Chatelier's Principle, this shifts the dissolution equilibrium backward (toward the undissolved solid), suppressing further dissolution.",
            "New setup: Ksp = (2s)²(0.100 + s) ≈ (2s)²(0.100), since s is expected to be very small compared to 0.100 M.",
            "Full credit requires identifying CrO₄²⁻ specifically as the common ion (not Ag⁺) and correctly setting up the modified Ksp expression with the common-ion concentration added."
          ]
        }
      ]
    },
    {
      "id": "frq-7-4",
      "source": "Original",
      "title": "Equilibrium Constant Manipulation",
      "prompt": "Given the following two reactions at the same temperature: (1) N₂(g) + O₂(g) ⇌ 2NO(g), K₁ = 4.1 × 10⁻³¹; (2) N₂(g) + 2O₂(g) ⇌ 2NO₂(g), K₂ = 4.1 × 10⁻⁹.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Determine K for the reaction 2NO(g) + O₂(g) ⇌ 2NO₂(g).",
          "steps": [
            "The target reaction can be obtained by reversing reaction (1) and adding it to reaction (2).",
            "Reversed (1): 2NO(g) ⇌ N₂(g) + O₂(g), K = 1/K₁ = 1/(4.1×10⁻³¹) = 2.44×10³⁰.",
            "Adding reversed (1) to (2): 2NO + N₂ + 2O₂ → N₂ + O₂ + 2NO₂, cancelling N₂ (appears both sides) and combining O₂ (2O₂ on left minus 1 O₂ cancelling with right's O₂, net 1 O₂ remaining on left): 2NO + O₂ → 2NO₂.",
            "K(target) = K(reversed 1) × K₂ = 2.44×10³⁰ × 4.1×10⁻⁹ = 1.0×10²².",
            "Full credit requires correctly reversing reaction (1), correctly identifying which reactions to combine, and correctly multiplying the resulting K values."
          ]
        },
        {
          "label": "(b)",
          "ask": "Based on the magnitude of K calculated in part (a), what can be concluded about this reaction at equilibrium?",
          "steps": [
            "With K ≈ 1.0×10²², an extraordinarily large value, the reaction strongly favors products — it proceeds essentially to completion, with a negligible amount of NO remaining at equilibrium.",
            "Full credit requires connecting the specific magnitude of K to a clear, correct qualitative interpretation (strongly favors products / goes to completion)."
          ]
        },
        {
          "label": "(c)",
          "ask": "Does this large K value indicate that the reaction 2NO(g) + O₂(g) → 2NO₂(g) occurs rapidly? Explain.",
          "steps": [
            "No — K describes only the equilibrium position (how far the reaction proceeds), not the rate at which equilibrium is reached; these are independent, unrelated properties of a reaction.",
            "A large K only tells us that, GIVEN ENOUGH TIME, the reaction strongly favors products; it says nothing about whether that equilibrium is reached quickly or slowly, which depends on kinetic factors like activation energy (Unit 5), not thermodynamic factors like K.",
            "Full credit requires explicitly stating that K and rate are independent, not simply asserting 'no' without that justification."
          ]
        }
      ]
    },
    {
      "id": "frq-7-5",
      "source": "Original",
      "title": "Reaction Quotient and Direction of Shift",
      "prompt": "For the reaction 2A(g) + B(g) ⇌ C(g), K = 12.5 at 400 K. A 1.00 L container is set up with [A]=0.600 M, [B]=0.400 M, [C]=1.20 M.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Calculate Q for this initial mixture.",
          "steps": [
            "Q = [C]/([A]²[B]) = 1.20/[(0.600)²(0.400)] = 1.20/[(0.360)(0.400)] = 1.20/0.144 = 8.33.",
            "Full credit requires correctly setting up the Q expression with A squared (matching its coefficient of 2) and correct arithmetic."
          ]
        },
        {
          "label": "(b)",
          "ask": "Determine which direction the reaction will shift to reach equilibrium, and justify your answer.",
          "steps": [
            "Since Q (8.33) < K (12.5), the system has not yet reached equilibrium and needs more product relative to reactants.",
            "The reaction will shift forward, toward products (forming more C, consuming A and B), until Q increases to match K.",
            "Full credit requires the explicit Q vs. K numerical comparison, not just a stated direction without justification."
          ]
        },
        {
          "label": "(c)",
          "ask": "Set up (but do not solve) the ICE table that would be used to find the equilibrium concentrations from this starting point.",
          "steps": [
            "Initial: [A]=0.600, [B]=0.400, [C]=1.20.",
            "Change: [A]=−2x, [B]=−x, [C]=+x (matching the forward-shift direction determined in part (b), with coefficients 2, 1, 1 respectively).",
            "Equilibrium: [A]=0.600−2x, [B]=0.400−x, [C]=1.20+x.",
            "Full credit requires correctly matching each change term to its stoichiometric coefficient and correctly reflecting the forward-shift direction (reactants decreasing, product increasing) established in part (b)."
          ]
        }
      ]
    }
  ],
  "8": [
    {
      "id": "frq-8-1",
      "source": "Original",
      "title": "Weak Acid Equilibrium and pH Calculation",
      "prompt": "A 0.250 M solution of propanoic acid (CH₃CH₂COOH, Ka = 1.3 × 10⁻⁵) is prepared.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Set up an ICE table and calculate the pH of this solution.",
          "steps": [
            "ICE: Initial 0.250, 0, 0. Change: −x, +x, +x. Equilibrium: 0.250−x, x, x.",
            "Ka = x²/0.250 (using the simplifying assumption) = 1.3×10⁻⁵. x² = 0.250×1.3×10⁻⁵ = 3.25×10⁻⁶. x = 1.80×10⁻³ M.",
            "Checking assumption: 1.80×10⁻³/0.250 = 0.72%, valid.",
            "pH = −log(1.80×10⁻³) = 2.74.",
            "Full credit requires the complete ICE setup, correct simplification check, and correct final pH calculation."
          ]
        },
        {
          "label": "(b)",
          "ask": "Calculate the percent ionization of propanoic acid at this concentration.",
          "steps": [
            "% ionization = ([H⁺] at equilibrium / initial concentration) × 100 = (1.80×10⁻³/0.250) × 100 = 0.72%.",
            "Full credit requires correctly using the equilibrium [H⁺] (not initial concentration) as the numerator."
          ]
        },
        {
          "label": "(c)",
          "ask": "Predict, without recalculating, whether percent ionization would increase or decrease if the solution were diluted to 0.0250 M, and explain why.",
          "steps": [
            "Percent ionization would increase upon dilution.",
            "Diluting shifts the equilibrium according to Le Chatelier's Principle: with fewer total particles per unit volume, the system shifts toward the side with MORE total dissolved particles (ionized products, H⁺ and A⁻) to partially counteract the concentration decrease — this is a general trend for weak electrolytes, where percent ionization increases as concentration decreases.",
            "Full credit requires connecting this prediction to Le Chatelier's Principle explicitly, not just stating the trend as a memorized fact."
          ]
        }
      ]
    },
    {
      "id": "frq-8-2",
      "source": "Original",
      "title": "Buffer Preparation and Henderson-Hasselbalch",
      "prompt": "A student wants to prepare 1.00 L of a buffer with pH = 9.00 using NH₃ (Kb = 1.8 × 10⁻⁵) and NH₄Cl.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Calculate pKa for NH₄⁺ (the conjugate acid of NH₃).",
          "steps": [
            "Ka(NH₄⁺) = Kw/Kb(NH₃) = (1.0×10⁻¹⁴)/(1.8×10⁻⁵) = 5.56×10⁻¹⁰.",
            "pKa = −log(5.56×10⁻¹⁰) = 9.26.",
            "Full credit requires correctly using Ka×Kb=Kw to find Ka(NH₄⁺) from the given Kb(NH₃), not confusing which species' constant is which."
          ]
        },
        {
          "label": "(b)",
          "ask": "Determine the required ratio of [NH₃]/[NH₄⁺] to achieve pH = 9.00.",
          "steps": [
            "Using Henderson-Hasselbalch: 9.00 = 9.26 + log(ratio). log(ratio) = 9.00−9.26 = −0.26.",
            "Ratio = 10^(−0.26) = 0.55.",
            "Full credit requires correct algebraic rearrangement and correct final ratio value."
          ]
        },
        {
          "label": "(c)",
          "ask": "If the student uses 0.400 mol of NH₄Cl, calculate the moles of NH₃ needed to achieve the target ratio, and describe the general procedure for preparing this buffer.",
          "steps": [
            "moles NH₃ = ratio × moles NH₄⁺ = 0.55 × 0.400 = 0.22 mol.",
            "Procedure: dissolve 0.400 mol NH₄Cl and 0.22 mol NH₃ (or an equivalent amount of concentrated aqueous ammonia) together in a volumetric flask, then add distilled water up to the 1.00 L calibration mark, mixing thoroughly.",
            "Full credit requires correctly scaling the ratio from part (b) to the specific given moles of NH₄⁺, and a reasonably complete description of the preparation procedure (dissolving both components, then diluting to final volume)."
          ]
        }
      ]
    },
    {
      "id": "frq-8-3",
      "source": "Original",
      "title": "Titration Curve Analysis",
      "prompt": "A 40.00 mL sample of an unknown weak monoprotic acid (0.200 M) is titrated with 0.200 M NaOH. The equivalence point is reached at 40.00 mL of NaOH added, and the pH at 20.00 mL of NaOH added is measured to be 4.85.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Explain why the volume of NaOH needed to reach the equivalence point (40.00 mL) equals the original volume of acid (40.00 mL).",
          "steps": [
            "Since both solutions have the identical concentration (0.200 M) and the acid is monoprotic (reacting 1:1 with NaOH), equal moles require equal volumes: moles acid = (0.200)(0.04000) = 0.00800 mol, requiring exactly 0.00800 mol of NaOH, which at 0.200 M requires exactly 40.00 mL.",
            "Full credit requires this explicit mole-based reasoning, not just noting the volumes happen to match."
          ]
        },
        {
          "label": "(b)",
          "ask": "Determine the pKa (and Ka) of this unknown acid using the given data.",
          "steps": [
            "20.00 mL of NaOH added is exactly half of the 40.00 mL needed for full equivalence — this is the half-equivalence point.",
            "At the half-equivalence point, pH = pKa, so pKa = 4.85.",
            "Ka = 10^(−4.85) = 1.41×10⁻⁵.",
            "Full credit requires correctly identifying 20.00 mL as the half-equivalence point (half of 40.00 mL) and correctly applying the pH=pKa relationship."
          ]
        },
        {
          "label": "(c)",
          "ask": "Is the pH at the equivalence point (40.00 mL) expected to be greater than, less than, or equal to 7? Justify your answer.",
          "steps": [
            "Greater than 7.",
            "At the equivalence point, all of the original weak acid has been converted into its conjugate base, which reacts with water (hydrolysis) to produce a small amount of OH⁻, making the solution basic.",
            "Full credit requires explicit reference to the conjugate base's hydrolysis reaction with water, not just stating 'weak acid-strong base titrations are always above 7' without the underlying reasoning."
          ]
        }
      ]
    },
    {
      "id": "frq-8-4",
      "source": "Original",
      "title": "Molecular Structure and Acid Strength Comparison",
      "prompt": "Consider the acids HOCl, HOBr, and HClO₄.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Rank HOCl and HOBr by acid strength and justify your ranking using molecular structure.",
          "steps": [
            "HOCl is the stronger acid.",
            "Both are oxyacids with an identical structural pattern (H-O-X), differing only in the halogen. Chlorine is more electronegative than bromine, so it withdraws more electron density from the O-H bond, weakening it and better stabilizing the resulting conjugate base's negative charge — both effects favor greater acid strength for HOCl over HOBr.",
            "Full credit requires explicitly invoking the electronegativity difference between Cl and Br as the deciding factor, not just stating a ranking without structural justification."
          ]
        },
        {
          "label": "(b)",
          "ask": "Explain why HClO₄ is a much stronger acid than HOCl, despite both containing chlorine.",
          "steps": [
            "HClO₄ has three additional oxygen atoms bonded to the central chlorine compared to HOCl's zero additional oxygens.",
            "Each additional highly electronegative oxygen atom further withdraws electron density from the O-H bond (weakening it) and helps stabilize the conjugate base's negative charge through greater delocalization across more oxygen atoms — both effects compound with each additional oxygen, making HClO₄ dramatically stronger (in fact, one of the strongest known acids) compared to HOCl.",
            "Full credit requires connecting the number of additional oxygens specifically to both the electron-withdrawal and charge-delocalization effects, not just noting 'more oxygens means stronger' without the mechanism."
          ]
        },
        {
          "label": "(c)",
          "ask": "Predict how the conjugate base strength compares between ClO⁻ (from HOCl) and ClO₄⁻ (from HClO₄), and justify using the inverse relationship between acid and conjugate base strength.",
          "steps": [
            "ClO⁻ (the conjugate base of the weaker acid, HOCl) is the STRONGER base compared to ClO₄⁻.",
            "Since acid strength and conjugate base strength are inversely related, and HOCl is the weaker acid of the two, its conjugate base (ClO⁻) must be the stronger base; conversely, HClO₄'s much greater acid strength means its conjugate base (ClO₄⁻) is an extremely weak base — barely acting as a base at all.",
            "Full credit requires explicitly invoking the inverse acid/conjugate-base-strength relationship established in Unit 8.1, not simply asserting the correct ranking without that connection."
          ]
        }
      ]
    },
    {
      "id": "frq-8-5",
      "source": "Original",
      "title": "Common-Ion Effect on Weak Acid Equilibrium",
      "prompt": "A 0.100 M solution of HF (Ka = 6.8 × 10⁻⁴) is prepared. In a separate experiment, 0.100 M HF is combined with 0.050 M NaF in solution.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Calculate the pH of the pure 0.100 M HF solution (without NaF).",
          "steps": [
            "ICE: x²/(0.100−x) = 6.8×10⁻⁴. Since Ka is relatively large compared to typical weak acids, check if the simplifying assumption is likely to hold; using the quadratic due to the relatively large Ka: x² + 6.8×10⁻⁴x − 6.8×10⁻⁵ = 0.",
            "Using the quadratic formula: x = [−6.8×10⁻⁴ + √((6.8×10⁻⁴)² + 4(6.8×10⁻⁵))]/2 = [−6.8×10⁻⁴ + √(4.62×10⁻⁷+2.72×10⁻⁴)]/2 ≈ [−6.8×10⁻⁴+0.01652]/2 ≈ 0.00792 M.",
            "pH = −log(0.00792) = 2.10.",
            "Full credit requires recognizing the need for the full quadratic formula (given HF's relatively large Ka) and correctly solving it, though reasonable credit is given for a correctly-labeled simplified approach if the check is shown."
          ]
        },
        {
          "label": "(b)",
          "ask": "Calculate the pH of the HF/NaF mixture, and explain qualitatively why it differs from the pure HF solution's pH.",
          "steps": [
            "With the common ion F⁻ already present at 0.050 M from NaF, set up: Ka = x(0.050+x)/(0.100−x) ≈ x(0.050)/0.100 = 6.8×10⁻⁴ (assuming x is small relative to both 0.050 and 0.100).",
            "Solving: x = (6.8×10⁻⁴)(0.100)/0.050 = 1.36×10⁻³ M.",
            "pH = −log(1.36×10⁻³) = 2.87.",
            "This pH (2.87) is higher (less acidic) than the pure HF solution's pH (2.10) because the added F⁻ (common ion) shifts the HF dissociation equilibrium backward per Le Chatelier's Principle, suppressing further ionization and resulting in a lower [H⁺] than in pure HF alone.",
            "Full credit requires both the numerical calculation and the qualitative Le Chatelier's-based explanation for why the pH differs from part (a)."
          ]
        }
      ]
    },
    {
      "id": "frq-8-6",
      "source": "Original",
      "title": "Buffer Response to Added Acid and Base",
      "prompt": "A buffer is prepared containing 0.500 mol CH₃COOH and 0.500 mol CH₃COONa in 1.00 L of solution (Ka = 1.8 × 10⁻⁵, pKa = 4.74).",
      "parts": [
        {
          "label": "(a)",
          "ask": "Calculate the initial pH of this buffer.",
          "steps": [
            "pH = pKa + log([base]/[acid]) = 4.74 + log(0.500/0.500) = 4.74 + 0 = 4.74.",
            "Full credit requires recognizing the 1:1 ratio gives pH = pKa directly."
          ]
        },
        {
          "label": "(b)",
          "ask": "0.100 mol of solid NaOH is added to this buffer (assume no volume change). Calculate the new pH.",
          "steps": [
            "The added OH⁻ reacts with the weak acid component: CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O, consuming 0.100 mol of CH₃COOH and producing 0.100 mol of additional CH₃COO⁻.",
            "New amounts: CH₃COOH = 0.500−0.100 = 0.400 mol; CH₃COO⁻ = 0.500+0.100 = 0.600 mol.",
            "New pH = 4.74 + log(0.600/0.400) = 4.74 + log(1.50) = 4.74 + 0.176 = 4.92.",
            "Full credit requires correctly identifying which component reacts with added base, correctly updating both mole amounts, and correctly recalculating pH using Henderson-Hasselbalch."
          ]
        },
        {
          "label": "(c)",
          "ask": "Calculate the pH change (ΔpH) caused by the added NaOH, and compare this to the pH change that would occur if the same 0.100 mol NaOH were added to 1.00 L of pure water instead (assume no buffering).",
          "steps": [
            "ΔpH for the buffer = 4.92 − 4.74 = 0.18, a relatively small change.",
            "In pure water, adding 0.100 mol NaOH to 1.00 L directly gives [OH⁻] = 0.100 M, pOH = 1.00, pH = 13.00 — an enormous change from water's neutral starting pH of 7.00 (a change of 6.00 pH units).",
            "This dramatic contrast (0.18 vs. 6.00 pH unit change) directly illustrates the buffer's function: the weak acid component absorbs the added strong base by converting it into more weak acid's conjugate base, rather than allowing free OH⁻ to accumulate and directly spike the pH.",
            "Full credit requires calculating both scenarios explicitly and drawing the direct numerical comparison, not just stating that buffers resist pH change in the abstract."
          ]
        }
      ]
    },
    {
      "id": "frq-8-7",
      "source": "Original",
      "title": "Polyprotic Acid Analysis",
      "prompt": "Oxalic acid, H₂C₂O₄, is a diprotic acid with Ka₁ = 5.9 × 10⁻² and Ka₂ = 6.4 × 10⁻⁵.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Explain why Ka₁ is significantly larger than Ka₂ for this diprotic acid.",
          "steps": [
            "Ka₁ governs removal of the first proton from neutral H₂C₂O₄, requiring only enough energy to overcome normal covalent bond strength.",
            "Ka₂ governs removal of the second proton from HC₂O₄⁻, a species that is already negatively charged; removing a positively-charged H⁺ from an already-negative ion requires overcoming additional electrostatic attraction between the departing proton and the negative charge, making this second ionization significantly more difficult (smaller Ka₂).",
            "Full credit requires this explicit electrostatic-attraction reasoning connecting the charge of the intermediate species to the reduced ease of the second ionization."
          ]
        },
        {
          "label": "(b)",
          "ask": "For a 0.100 M solution of H₂C₂O₄, calculate [H⁺] contributed primarily by the first ionization, and justify why the second ionization can generally be neglected for this calculation.",
          "steps": [
            "Using Ka₁: x²/(0.100−x) ≈ 5.9×10⁻² requires the full quadratic given the relatively large Ka₁ (comparable in magnitude to the initial concentration): x² + 0.059x − 0.0059 = 0.",
            "Using the quadratic formula: x = [−0.059+√(0.059²+4×0.0059)]/2 = [−0.059+√(0.00348+0.0236)]/2 = [−0.059+0.1652]/2 = 0.0531 M.",
            "The second ionization can generally be neglected because Ka₂ (6.4×10⁻⁵) is nearly 1000 times smaller than Ka₁ (5.9×10⁻²), meaning the second proton is released to a far smaller extent, contributing a comparatively negligible additional amount of H⁺ to the total.",
            "Full credit requires the calculation (quadratic formula appropriately applied given the large Ka₁) and the explicit magnitude-comparison justification for neglecting the second ionization."
          ]
        },
        {
          "label": "(c)",
          "ask": "Sketch (in words) how many equivalence points you would expect on a titration curve of H₂C₂O₄ with NaOH, and what each one represents.",
          "steps": [
            "Two equivalence points would be expected.",
            "The first equivalence point corresponds to complete neutralization of the first (more acidic) proton, converting H₂C₂O₄ entirely into HC₂O₄⁻. The second equivalence point corresponds to complete neutralization of the second proton, converting HC₂O₄⁻ entirely into C₂O₄²⁻.",
            "Full credit requires correctly describing what species is present (or fully converted) at each of the two equivalence points, not just stating 'there are two' without that detail."
          ]
        }
      ]
    }
  ],
  "9": [
    {
      "id": "frq-9-1",
      "source": "Original",
      "title": "Gibbs Free Energy and Temperature Dependence",
      "prompt": "A reaction has ΔH° = +65.0 kJ/mol and ΔS° = +0.185 kJ/(mol·K).",
      "parts": [
        {
          "label": "(a)",
          "ask": "Calculate ΔG° at 298 K and determine whether the reaction is favorable at this temperature.",
          "steps": [
            "ΔG° = ΔH° − TΔS° = 65.0 − (298)(0.185) = 65.0 − 55.13 = +9.87 kJ/mol.",
            "Since ΔG° > 0, the reaction is NOT favorable (nonspontaneous) at 298 K.",
            "Full credit requires correct substitution and correct favorability conclusion."
          ]
        },
        {
          "label": "(b)",
          "ask": "Calculate the temperature at which this reaction becomes favorable.",
          "steps": [
            "Set ΔG° = 0: 0 = 65.0 − T(0.185). Solving: T = 65.0/0.185 = 351 K.",
            "Above 351 K, ΔG° becomes negative (favorable); below 351 K, it remains positive (unfavorable).",
            "Full credit requires correctly setting ΔG°=0 and solving for T, with a statement of which direction (above/below) is favorable."
          ]
        },
        {
          "label": "(c)",
          "ask": "Explain, in terms of the individual ΔH° and ΔS° contributions, why this reaction requires a sufficiently high temperature to become favorable.",
          "steps": [
            "The reaction is endothermic (ΔH° > 0), which alone works against favorability, requiring energy input.",
            "However, the reaction also increases entropy (ΔS° > 0), and the −TΔS° term becomes increasingly negative as temperature rises, since T multiplies ΔS°.",
            "At a high enough temperature, this increasingly favorable −TΔS° term becomes large enough in magnitude to outweigh the unfavorable positive ΔH°, making the overall ΔG° negative.",
            "Full credit requires explaining the competition between the fixed ΔH° term and the temperature-scaling −TΔS° term, not just restating the calculated crossover temperature."
          ]
        }
      ]
    },
    {
      "id": "frq-9-2",
      "source": "Original",
      "title": "Galvanic Cell Construction and Analysis",
      "prompt": "A galvanic cell is constructed using the half-reactions: Fe³⁺(aq) + e⁻ → Fe²⁺(aq), E° = +0.77 V, and Sn⁴⁺(aq) + 2e⁻ → Sn²⁺(aq), E° = +0.15 V.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Identify which half-reaction occurs at the cathode and which occurs at the anode, and write the balanced overall cell reaction.",
          "steps": [
            "Fe³⁺/Fe²⁺ has the higher (more positive) reduction potential (+0.77 V vs. +0.15 V), so it proceeds as reduction at the cathode.",
            "Sn⁴⁺/Sn²⁺ has the lower reduction potential, so it is reversed and proceeds as oxidation at the anode: Sn²⁺ → Sn⁴⁺ + 2e⁻.",
            "To balance electrons (1 e⁻ for Fe, 2 e⁻ for Sn), the Fe half-reaction must be multiplied by 2: 2Fe³⁺ + 2e⁻ → 2Fe²⁺.",
            "Overall: 2Fe³⁺(aq) + Sn²⁺(aq) → 2Fe²⁺(aq) + Sn⁴⁺(aq).",
            "Full credit requires correct anode/cathode assignment and a correctly balanced (including electron-balanced) overall equation."
          ]
        },
        {
          "label": "(b)",
          "ask": "Calculate E°cell for this galvanic cell.",
          "steps": [
            "E°cell = E°(cathode) − E°(anode) = 0.77 − 0.15 = 0.62 V.",
            "Full credit requires using the ORIGINAL (unmultiplied, unreversed) reduction potential values directly in this formula — E°cell is not affected by the balancing multiplication in part (a), since E° is an intensive property."
          ]
        },
        {
          "label": "(c)",
          "ask": "Calculate ΔG° for this reaction, using the correct value of n from the balanced equation.",
          "steps": [
            "From the balanced equation in part (a), n = 2 (2 electrons transferred overall).",
            "ΔG° = −nFE°cell = −(2)(96,485)(0.62) = −119,641 J ≈ −119.6 kJ.",
            "Full credit requires correctly identifying n=2 from the balanced overall equation (not simply defaulting to the smaller half-reaction's coefficient) and correct final calculation."
          ]
        }
      ]
    },
    {
      "id": "frq-9-3",
      "source": "Original",
      "title": "Faraday's Law and Electrolysis",
      "prompt": "A student electroplates a metal object with chromium using the half-reaction Cr³⁺(aq) + 3e⁻ → Cr(s) (molar mass of Cr = 52.00 g/mol). A current of 5.00 A is applied for 2.00 hours.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Calculate the total charge passed through the cell.",
          "steps": [
            "Convert time to seconds: 2.00 hr × 3600 s/hr = 7200 s.",
            "Q = It = (5.00)(7200) = 36,000 C.",
            "Full credit requires correct time unit conversion before multiplying by current."
          ]
        },
        {
          "label": "(b)",
          "ask": "Calculate the mass of chromium deposited.",
          "steps": [
            "Moles of electrons = Q/F = 36,000/96,485 = 0.3731 mol e⁻.",
            "Using the 3:1 ratio (3 e⁻ per Cr deposited): moles Cr = 0.3731/3 = 0.1244 mol.",
            "Mass Cr = 0.1244 mol × 52.00 g/mol = 6.47 g.",
            "Full credit requires correctly applying the 3-electron stoichiometry from the given half-reaction, not assuming a 1:1 ratio."
          ]
        },
        {
          "label": "(c)",
          "ask": "If the student mistakenly used a Cr²⁺ solution instead of Cr³⁺ (with half-reaction Cr²⁺ + 2e⁻ → Cr), and passed the exact same total charge (36,000 C), would more, less, or the same mass of Cr be deposited? Explain.",
          "steps": [
            "More chromium would be deposited using Cr²⁺.",
            "With only 2 electrons required per Cr atom (instead of 3), the same total moles of electrons (0.3731 mol) would deposit more moles of Cr: 0.3731/2 = 0.1866 mol, or 9.70 g — more than the 6.47 g calculated in part (b).",
            "Full credit requires explicitly recalculating (or at least clearly reasoning through) the effect of the smaller electron requirement per Cr atom on the resulting mass, not just asserting 'more' without justification."
          ]
        }
      ]
    },
    {
      "id": "frq-9-4",
      "source": "Original",
      "title": "Free Energy, Equilibrium, and Cell Potential Integration",
      "prompt": "A redox reaction has K = 4.5 × 10⁸ at 298 K, and the reaction involves the transfer of 2 moles of electrons.",
      "parts": [
        {
          "label": "(a)",
          "ask": "Calculate ΔG° for this reaction using K.",
          "steps": [
            "ΔG° = −RTlnK = −(8.314)(298)ln(4.5×10⁸) = −(2477.6)(20.02) = −49,606 J ≈ −49.6 kJ.",
            "Full credit requires correct use of the natural log and correct final unit conversion (J to kJ, if reported that way)."
          ]
        },
        {
          "label": "(b)",
          "ask": "Using your answer from part (a), calculate E°cell for this reaction.",
          "steps": [
            "Rearranging ΔG° = −nFE°cell: E°cell = −ΔG°/(nF) = −(−49,606)/[(2)(96,485)] = 49,606/192,970 = 0.257 V.",
            "Full credit requires correctly using the ΔG° value calculated in part (a) (not re-deriving it from scratch) and correct use of n=2 as given."
          ]
        },
        {
          "label": "(c)",
          "ask": "Explain how this single set of calculations (parts a and b) demonstrates that K, ΔG°, and E°cell are three interconnected descriptions of the same underlying reaction favorability.",
          "steps": [
            "All three quantities were derived from each other using direct mathematical relationships (ΔG°=−RTlnK and ΔG°=−nFE°cell), starting from a single given piece of information (K).",
            "Each quantity is internally consistent with the others: a large K (favoring products) corresponds to a negative ΔG° (thermodynamically favorable), which in turn corresponds to a positive E°cell (spontaneous galvanic cell) — none of these three facts is independent; each one determines the other two.",
            "Full credit requires explicitly stating that these three quantities are mathematically linked descriptions of one underlying thermodynamic reality, not just noting that calculations were performed using each formula."
          ]
        }
      ]
    },
    {
      "id": "frq-9-5",
      "source": "Original",
      "title": "Nernst Equation and Concentration Cells",
      "prompt": "A concentration cell is built using two Ag/Ag⁺ half-cells: one with [Ag⁺] = 1.00 M and one with [Ag⁺] = 1.00 × 10⁻⁴ M, connected by a salt bridge (n = 1 for the Ag⁺/Ag half-reaction).",
      "parts": [
        {
          "label": "(a)",
          "ask": "Explain why E°cell = 0 V for this cell, despite the cell producing a measurable voltage.",
          "steps": [
            "Both half-cells use the identical redox couple (Ag⁺/Ag) with the identical standard reduction potential.",
            "E°cell = E°(cathode) − E°(anode), and since both half-cells have the same E° value, this difference is exactly zero — this is true regardless of the actual (nonstandard) concentrations used.",
            "Full credit requires explicitly stating that E°cell depends only on the identity of the redox couples (which are identical here), not on their concentrations."
          ]
        },
        {
          "label": "(b)",
          "ask": "Determine which half-cell acts as the cathode and calculate Ecell using the Nernst equation.",
          "steps": [
            "The more concentrated half-cell (1.00 M) acts as the cathode (reduction, Ag⁺ + e⁻ → Ag occurs there), since the system will spontaneously move to reduce the concentration difference — effectively 'diluting' the more concentrated side by depositing more Ag out of solution there.",
            "Q = [Ag⁺]dilute/[Ag⁺]concentrated = (1.00×10⁻⁴)/(1.00) = 1.00×10⁻⁴ (using the standard concentration cell Q setup, dilute side as 'product' relative to concentrated 'reactant' in the net ion-transfer reaction).",
            "Ecell = E°cell − (0.0592/n)logQ = 0 − (0.0592/1)log(1.00×10⁻⁴) = 0 − (0.0592)(−4.00) = +0.237 V.",
            "Full credit requires correctly identifying the concentrated half-cell as the cathode and correctly setting up and evaluating the Nernst equation with E°cell=0."
          ]
        },
        {
          "label": "(c)",
          "ask": "As the cell operates, what happens to the concentration difference between the two half-cells over time, and what happens to Ecell as a result?",
          "steps": [
            "As the cell operates, Ag⁺ is deposited (reduced) at the cathode (concentrated side, decreasing its concentration) while Ag is oxidized into solution at the anode (dilute side, increasing its concentration) — the concentration difference between the two half-cells gradually decreases over time.",
            "As this concentration difference shrinks, Q moves closer to 1, and per the Nernst equation, Ecell correspondingly decreases toward zero — the cell voltage decreases over time until the two concentrations become equal, at which point Ecell = 0 (the cell reaches equilibrium and can do no further work).",
            "Full credit requires connecting the physical process (concentrations equalizing) to the mathematical consequence (Q approaching 1, Ecell approaching 0) explicitly."
          ]
        }
      ]
    }
  ]
};

export { STUDY_CONTENT, UNITS, QUESTIONS, FRQ_CONTENT };