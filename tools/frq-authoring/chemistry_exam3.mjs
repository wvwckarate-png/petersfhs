// AP Chemistry FRQ — Exam 3 (46 points, 105 minutes)
import { exam, P, Q, fig, table, sig } from "./frqlib.mjs";
import { titrationCurve, massSpectrum, maxwell } from "./chemfrqfigs.mjs";

// ---------- Q1: weak acid titration ----------
const Ka = 1.8e-5, Ca = 0.100;
const pKa = -Math.log10(Ka);
const h0 = Math.sqrt(Ka * Ca), pH0 = -Math.log10(h0);                   // 1.3e-3, 2.87
const Aeq = (Ca * 25.0) / 50.0, Kb = 1.0e-14 / Ka, OHeq = Math.sqrt(Kb * Aeq), pHeq = 14 + Math.log10(OHeq);   // 8.72
const OHexc = (0.100 * 5.0) / 55.0, pH30 = 14 + Math.log10(OHexc);       // 11.96
if (Math.abs(pH0 - 2.87) > 0.01 || Math.abs(pHeq - 8.72) > 0.01 || Math.abs(pH30 - 11.96) > 0.01) throw new Error("titration");
const titrFig = fig(titrationCurve({ Ca: 0.100, Va: 25.0, Cb: 0.100, Ka, vMax: 50 }),
  "A titration curve of pH versus volume of 0.100 molar NaOH added to 25.0 milliliters of a 0.100 molar weak acid HA. The pH starts near 3, rises gradually to about 4.7 at 12.5 milliliters, rises steeply near 25 milliliters to a pH of about 8.7 at the equivalence point and above 10 just after, and then levels off near 12.",
  { caption: "Figure 1. Titration of 25.0 mL of 0.100 M HA with 0.100 M NaOH." });
const indicators = table(["Indicator", "Color change range (pH)"], [["Methyl orange", "3.1 – 4.4"], ["Methyl red", "4.4 – 6.2"], ["Bromothymol blue", "6.0 – 7.6"], ["Phenolphthalein", "8.2 – 10.0"]], "Table 1");

// ---------- Q2: Haber process ----------
const R = 8.314;
const dH = -92.2, dS = -198.7;
const dG = dH - 298 * (dS / 1000);                         // -33.0 kJ
const K = Math.exp((-dG * 1000) / (R * 298));              // 6.1e5
const Tx = (dH * 1000) / dS;                               // 464 K
if (Math.abs(dG + 33.0) > 0.05 || Math.abs(Math.log10(K) - 5.78) > 0.02 || Math.abs(Tx - 464) > 1) throw new Error("Haber");

// ---------- Q3: gases ----------
const nHe = 0.100, nNe = 0.200, V = 2.00, T = 300, Rg = 0.08206;
const Ptot = ((nHe + nNe) * Rg * T) / V, PNe = Ptot * (nNe / (nHe + nNe));
const ratio = Math.sqrt(20.18 / 4.003);
if (Math.abs(Ptot - 3.69) > 0.01 || Math.abs(PNe - 2.46) > 0.01 || Math.abs(ratio - 2.245) > 0.01) throw new Error("gases");

// ---------- Q4: gallium ----------
const avg = 69 * 0.601 + 71 * 0.399;                       // 69.80
if (Math.abs(avg - 69.80) > 0.01) throw new Error("avg");
const ms = fig(massSpectrum({ peaks: [{ mz: 69, ab: 60.1 }, { mz: 71, ab: 39.9 }], mzMin: 67, mzMax: 73 }),
  "A mass spectrum of gallium with two peaks: m over z equals 69 with relative abundance 60.1 percent, and m over z equals 71 with relative abundance 39.9 percent.", { caption: "Figure 1. Mass spectrum of a sample of gallium." });

// ---------- Q5: precipitate ----------
const nPb = 0.0500 * 0.200 * 1, nI = 0.0500 * 0.300, nPbI2 = nI / 2, mPbI2 = nPbI2 * 461.0, PbLeft = (nPb - nPbI2) / 0.100;
if (Math.abs(mPbI2 - 3.46) > 0.01 || Math.abs(PbLeft - 0.025) > 1e-6) throw new Error("precip");

// ---------- Q6: calorimetry ----------
const qw = 100.0 * 4.18 * (25.5 - 22.0), cMetal = qw / (50.0 * (100.0 - 25.5));
if (Math.abs(cMetal - 0.393) > 0.001) throw new Error("metal");

const maxFig = fig(maxwell({ labels: ["Sample X", "Sample Y"] }),
  "Two speed distribution curves for the same gas. Sample Y has a lower, broader curve with its peak at a higher speed than the peak of Sample X.",
  { caption: "Figure 1. Distributions of molecular speeds for the same gas in two samples at different temperatures." });

export default exam({
  id: "exam3",
  title: "Exam 3",
  description: "A full-length, seven-question free-response exam: a weak-acid titration, the Haber process, gases and kinetic theory, isotopes, precipitation, calorimetry, and the effect of temperature on rate.",
  minutes: 105,
  questions: [
    Q("1", "Long Answer", 23,
      ["A student titrates 25.0 mL of a 0.100 <i>M</i> solution of a weak monoprotic acid, HA, with 0.100 <i>M</i> NaOH(<i>aq</i>) at 25 °C. The pH is monitored throughout, producing the titration curve in Figure 1. The reaction is HA(<i>aq</i>) + OH<sup>−</sup>(<i>aq</i>) → A<sup>−</sup>(<i>aq</i>) + H<sub>2</sub>O(<i>l</i>)."],
      [titrFig],
      [
        P("A", "Determine the volume of NaOH(<i>aq</i>) that must be added to reach the equivalence point. Justify your answer.", [
          "For the correct volume of 25.0 mL, justified from the 1:1 mole ratio (moles of HA = moles of OH<sup>−</sup>: (0.0250 L)(0.100 M) = (0.100 M)<i>V</i>) or from the steep rise in pH on the curve",
        ], ["Moles of HA = (0.0250 L)(0.100 mol/L) = 2.50 × 10<sup>−3</sup> mol. The reaction is 1:1, so the same amount of OH<sup>−</sup> is needed: <i>V</i> = (2.50 × 10<sup>−3</sup> mol)/(0.100 mol/L) = <b>25.0 mL</b>. This agrees with the very steep rise in pH on the curve at about 25 mL."], { label: "Part A" }),
        P("B", "Use the titration curve to estimate the acid-dissociation constant, <i>K</i><sub>a</sub>, of HA. Explain your method.", [
          "For identifying the half-equivalence point (12.5 mL) and reading the pH there, about 4.7, and indicating that at that point [HA] = [A<sup>−</sup>], so pH = p<i>K</i><sub>a</sub>",
          "For a correct value of <i>K</i><sub>a</sub> ≈ 1.8 × 10<sup>−5</sup> (10<sup>−4.74</sup>)",
        ], [`At the half-equivalence point (12.5 mL of base), half of the HA has been converted to A<sup>−</sup>, so [HA] = [A<sup>−</sup>] and the Henderson–Hasselbalch equation gives pH = p<i>K</i><sub>a</sub>. From Figure 1 the pH at 12.5 mL is about 4.7, so <i>K</i><sub>a</sub> = 10<sup>−4.7</sup> ≈ <b>${(Ka * 1e5).toFixed(1)} × 10<sup>−5</sup></b> (p<i>K</i><sub>a</sub> = ${pKa.toFixed(2)}).`], { label: "Part B" }),
        P("C", "Calculate the pH of the 0.100 <i>M</i> HA solution before any NaOH is added. Use <i>K</i><sub>a</sub> = 1.8 × 10<sup>−5</sup>. Show your work.", [
          "For a correct equilibrium setup with [H<sup>+</sup>] = [A<sup>−</sup>] = <i>x</i> and <i>K</i><sub>a</sub> = <i>x</i><sup>2</sup>/(0.100 − <i>x</i>) ≈ <i>x</i><sup>2</sup>/0.100, giving <i>x</i> ≈ 1.3 × 10<sup>−3</sup> <i>M</i>",
          "For a correct pH of about 2.9",
        ], [`Let <i>x</i> = [H<sup>+</sup>]. <i>K</i><sub>a</sub> = <i>x</i><sup>2</sup>/(0.100 − <i>x</i>) ≈ <i>x</i><sup>2</sup>/0.100 (since the acid is weak). <i>x</i><sup>2</sup> = (1.8 × 10<sup>−5</sup>)(0.100) = 1.8 × 10<sup>−6</sup>, <i>x</i> = ${(h0 * 1000).toFixed(2)} × 10<sup>−3</sup> M. pH = −log(${(h0 * 1000).toFixed(2)} × 10<sup>−3</sup>) = <b>${pH0.toFixed(2)}</b>, consistent with the starting point of the curve.`], { label: "Part C" }),
        P("D", "Calculate the pH at the equivalence point. Show your work.", [
          "For correctly determining that [A<sup>−</sup>] = 0.0500 <i>M</i> at the equivalence point (the volume has doubled) and using <i>K</i><sub>b</sub> = <i>K</i><sub>w</sub>/<i>K</i><sub>a</sub> = 5.6 × 10<sup>−10</sup>",
          "For a correct pH of about 8.7 (from [OH<sup>−</sup>] ≈ 5.3 × 10<sup>−6</sup> <i>M</i>)",
        ], [`At the equivalence point all the HA has become A<sup>−</sup>: [A<sup>−</sup>] = (2.50 × 10<sup>−3</sup> mol)/(0.0500 L) = 0.0500 M. A<sup>−</sup> is a weak base: <i>K</i><sub>b</sub> = <i>K</i><sub>w</sub>/<i>K</i><sub>a</sub> = (1.0 × 10<sup>−14</sup>)/(1.8 × 10<sup>−5</sup>) = 5.6 × 10<sup>−10</sup>. Then [OH<sup>−</sup>] = √[(5.6 × 10<sup>−10</sup>)(0.0500)] = 5.3 × 10<sup>−6</sup> M, pOH = ${(14 - pHeq).toFixed(2)}, and pH = <b>${pHeq.toFixed(2)}</b>.`], { label: "Part D" }),
        P("E", "Table 1 lists several indicators. Select the indicator that is best for this titration, and justify your choice.", [
          "For selecting phenolphthalein",
          "For justifying that its color-change range (8.2–10.0) includes the pH at the equivalence point (about 8.7) and lies on the steep part of the curve, whereas indicators such as methyl red would change color well before the equivalence point",
        ], ["<b>Phenolphthalein</b> is the best choice. An indicator should change color over a pH range that contains the pH at the equivalence point and lies on the steep vertical part of the titration curve. The equivalence-point pH here is about 8.7, which is inside the transition range of phenolphthalein (8.2–10.0). Methyl orange and methyl red change color at a pH below the vertical portion (about 3–6), so they would signal the end well before 25.0 mL of base had been added."], { label: "Part E", figures: [indicators] }),
        P("F", "Calculate the pH of the solution after 30.0 mL of NaOH(<i>aq</i>) has been added. Show your work.", [
          "For a correct pH of about 12.0 (11.96), obtained from the excess OH<sup>−</sup>: (5.0 mL × 0.100 <i>M</i>)/(55.0 mL) = 9.1 × 10<sup>−3</sup> <i>M</i>",
        ], [`After the equivalence point, the pH is controlled by the excess OH<sup>−</sup>: moles of excess OH<sup>−</sup> = (0.0300 L − 0.0250 L)(0.100 M) = 5.0 × 10<sup>−4</sup> mol, in a total volume of 55.0 mL. [OH<sup>−</sup>] = (5.0 × 10<sup>−4</sup> mol)/(0.0550 L) = 9.1 × 10<sup>−3</sup> M, pOH = 2.04, so pH = <b>${pH30.toFixed(2)}</b>.`], { label: "Part F" }),
      ]),

    Q("2", "Long Answer", 23,
      ["Ammonia is produced industrially by the Haber process: N<sub>2</sub>(<i>g</i>) + 3 H<sub>2</sub>(<i>g</i>) ⇌ 2 NH<sub>3</sub>(<i>g</i>). For this reaction at 298 K, Δ<i>H</i>° = −92.2 kJ/mol<sub>rxn</sub> and Δ<i>S</i>° = −198.7 J/(mol<sub>rxn</sub>·K). Assume that Δ<i>H</i>° and Δ<i>S</i>° do not change with temperature."],
      [],
      [
        P("A", "Calculate Δ<i>G</i>° at 298 K, in kJ/mol<sub>rxn</sub>. Is the reaction thermodynamically favorable at 298 K? Show your work.", [
          "For the correct setup, Δ<i>G</i>° = Δ<i>H</i>° − <i>T</i>Δ<i>S</i>° with Δ<i>S</i>° converted to kJ/K (−0.1987 kJ/K)",
          "For the correct value, about −33 kJ/mol<sub>rxn</sub>, and indicating that the reaction is thermodynamically favorable because Δ<i>G</i>° is negative",
        ], [`Δ<i>G</i>° = Δ<i>H</i>° − <i>T</i>Δ<i>S</i>° = −92.2 kJ − (298 K)(−0.1987 kJ/K) = −92.2 kJ + 59.2 kJ = <b>${dG.toFixed(1)} kJ/mol<sub>rxn</sub></b>. Δ<i>G</i>° is negative, so the reaction is thermodynamically favorable at 298 K.`], { label: "Part A" }),
        P("B", "Calculate the value of the equilibrium constant, <i>K</i>, at 298 K. Show your work. (<i>R</i> = 8.314 J/(mol·K))", [
          "For using Δ<i>G</i>° = −<i>RT</i> ln <i>K</i> with Δ<i>G</i>° in joules",
          "For the correct value, <i>K</i> ≈ 6 × 10<sup>5</sup>",
        ], [`Δ<i>G</i>° = −<i>RT</i> ln <i>K</i> → ln <i>K</i> = −Δ<i>G</i>°/(<i>RT</i>) = −(−33.0 × 10<sup>3</sup> J/mol)/[(8.314 J/(mol·K))(298 K)] = 13.3, so <i>K</i> = e<sup>13.3</sup> ≈ <b>${sig(K, 2)}</b> (about 6 × 10<sup>5</sup>). The large value of <i>K</i> shows that products are strongly favored at 298 K.`], { label: "Part B" }),
        P("C", "Predict whether <i>K</i> increases, decreases, or stays the same when the temperature is raised to 700 K. Justify your answer.", [
          "For predicting that <i>K</i> decreases",
          "For reasoning that the reaction is exothermic (Δ<i>H</i>° &lt; 0), so raising the temperature shifts the equilibrium toward the reactants (or: Δ<i>G</i>° becomes less negative as <i>T</i> increases because −<i>T</i>Δ<i>S</i>° is positive)".replace("&lt;", "<"),
        ], ["<i>K</i> <b>decreases</b>. The forward reaction is exothermic (Δ<i>H</i>° is negative). Raising the temperature adds energy to the system, and the equilibrium shifts in the direction that absorbs energy, the endothermic (reverse) direction, which lowers the amount of NH<sub>3</sub> at equilibrium and decreases <i>K</i>. In terms of thermodynamics, Δ<i>G</i>° = Δ<i>H</i>° − <i>T</i>Δ<i>S</i>° becomes less negative as <i>T</i> increases because Δ<i>S</i>° is negative."], { label: "Part C" }),
        P("D", "At constant temperature, the volume of the container holding the equilibrium mixture is decreased to half of its original value. Indicate how the equilibrium position changes and whether <i>K</i> changes. Justify your answers.", [
          "For indicating that the equilibrium shifts toward the products (more NH<sub>3</sub>), since the products have fewer moles of gas (2 mol versus 4 mol) and the system relieves the increase in pressure",
          "For indicating that <i>K</i> does not change, because <i>K</i> depends only on temperature",
        ], ["Decreasing the volume at constant temperature increases the pressure. The equilibrium shifts toward the side with fewer moles of gas: 4 mol of reactant gas (N<sub>2</sub> + 3 H<sub>2</sub>) convert to 2 mol of NH<sub>3</sub>, so the shift is <b>toward the products</b>. The value of <b><i>K</i> is unchanged</b>, because the equilibrium constant depends only on temperature; the shift occurs because the reaction quotient <i>Q</i> is temporarily smaller than <i>K</i> right after the compression, and the system re-establishes <i>Q</i> = <i>K</i>."], { label: "Part D" }),
        P("E", "Calculate the temperature at which Δ<i>G</i>° = 0 for this reaction, and describe what happens to the spontaneity of the forward reaction at temperatures above this value.", [
          "For setting Δ<i>G</i>° = 0 and solving <i>T</i> = Δ<i>H</i>°/Δ<i>S</i>° = (−92,200 J)/(−198.7 J/K) ≈ 464 K",
          "For indicating that above this temperature Δ<i>G</i>° is positive, so the forward reaction is not thermodynamically favorable under standard conditions (the unfavorable −<i>T</i>Δ<i>S</i>° term outweighs the favorable enthalpy)",
        ], [`Δ<i>G</i>° = 0 when Δ<i>H</i>° = <i>T</i>Δ<i>S</i>°, so <i>T</i> = Δ<i>H</i>°/Δ<i>S</i>° = (−92,200 J/mol)/(−198.7 J/(mol·K)) = <b>${Math.round(Tx)} K</b>. Because Δ<i>S</i>° is negative (4 mol of gas become 2 mol), −<i>T</i>Δ<i>S</i>° grows more positive as the temperature rises. Above about ${Math.round(Tx)} K it is larger than |Δ<i>H</i>°|, so Δ<i>G</i>° &gt; 0 and the forward reaction is <b>not</b> thermodynamically favorable under standard conditions. (Industrial plants use a compromise: a high temperature for rate, with high pressure and a catalyst to keep the yield acceptable.)`.replace("&gt;", ">")], { label: "Part E" }),
      ]),

    Q("3", "Long Answer", 23,
      ["A rigid 2.00 L container holds a gas mixture of 0.100 mol of helium (<i>M</i> = 4.003 g/mol) and 0.200 mol of neon (<i>M</i> = 20.18 g/mol) at 300 K. Assume that both gases behave ideally."],
      [],
      [
        P("A", "Calculate the total pressure of the gas mixture, in atm. Show your work. (<i>R</i> = 0.08206 L·atm/(mol·K))", [
          "For using <i>PV</i> = <i>nRT</i> with the total number of moles (0.300 mol)",
          "For the correct pressure, about 3.69 atm",
        ], [`<i>P</i> = <i>nRT</i>/<i>V</i> = (0.300 mol)(0.08206 L·atm/(mol·K))(300 K)/(2.00 L) = <b>${Ptot.toFixed(2)} atm</b>.`], { label: "Part A" }),
        P("B", "Calculate the partial pressure of neon in the mixture. Show your work.", [
          "For using Dalton's law, <i>P</i><sub>Ne</sub> = <i>X</i><sub>Ne</sub><i>P</i><sub>total</sub> (or <i>P</i> = <i>nRT</i>/<i>V</i> with the moles of Ne), where <i>X</i><sub>Ne</sub> = 0.200/0.300",
          "For the correct partial pressure, about 2.46 atm",
        ], [`The mole fraction of neon is 0.200/0.300 = 0.667, so <i>P</i><sub>Ne</sub> = (0.667)(${Ptot.toFixed(2)} atm) = <b>${PNe.toFixed(2)} atm</b>. (Using the neon alone: (0.200)(0.08206)(300)/2.00 = 2.46 atm.)`], { label: "Part B" }),
        P("C", "Indicate whether the average kinetic energy of the helium atoms is greater than, less than, or equal to that of the neon atoms. Justify your answer.", [
          "For indicating that the average kinetic energies are equal",
          "For explaining that average kinetic energy depends only on temperature (KE<sub>avg</sub> = (3/2)<i>k</i><sub>B</sub><i>T</i>), and both gases are at the same temperature",
        ], ["The average kinetic energies are <b>equal</b>. According to the kinetic molecular theory, the average kinetic energy of the particles of an ideal gas is directly proportional to the absolute temperature and does not depend on the mass or identity of the particles. Both gases are at 300 K."], { label: "Part C" }),
        P("D", "Calculate the ratio of the root-mean-square speed of helium atoms to that of neon atoms. Show your work.", [
          "For using <i>v</i><sub>rms</sub> ∝ 1/√<i>M</i> at constant temperature (or <i>v</i><sub>rms</sub> = √(3<i>RT</i>/<i>M</i>)) to set up <i>v</i><sub>He</sub>/<i>v</i><sub>Ne</sub> = √(<i>M</i><sub>Ne</sub>/<i>M</i><sub>He</sub>)",
          "For the correct ratio, about 2.2",
        ], [`At the same temperature, <i>v</i><sub>rms</sub> = √(3<i>RT</i>/<i>M</i>), so <i>v</i><sub>He</sub>/<i>v</i><sub>Ne</sub> = √(<i>M</i><sub>Ne</sub>/<i>M</i><sub>He</sub>) = √(20.18/4.003) = <b>${ratio.toFixed(1)}</b>. The lighter helium atoms move more than twice as fast, on average, as the neon atoms, even though they have the same average kinetic energy.`], { label: "Part D" }),
        P("E", "Under which conditions of temperature and pressure — high temperature and low pressure, or low temperature and high pressure — does a real gas behave more like an ideal gas? Explain, in terms of the volume of the gas particles and the attractions between them.", [
          "For indicating high temperature and low pressure",
          "For explaining that at low pressure the particles are far apart, so their own volume is negligible compared with the container volume, and at high temperature the particles' kinetic energy is large compared with the attractions between them, so those attractions have little effect",
        ], ["A real gas behaves most like an ideal gas at <b>high temperature and low pressure</b>. At low pressure the particles are far apart, so the volume of the particles themselves is a negligible fraction of the container volume, and the attractions between them are small. At high temperature the particles move so fast that the intermolecular attractions have little effect on collisions with the walls. At low temperature and high pressure, the particles are close together, their own volume matters, and attractions between them reduce the force of collisions with the walls, so the measured pressure falls below the ideal value."], { label: "Part E" }),
      ]),

    Q("4", "Short Answer", 9,
      ["A sample of naturally occurring gallium is analyzed with a mass spectrometer, producing the spectrum shown in Figure 1."],
      [ms],
      [
        P("A", "Use the data in Figure 1 to calculate the average atomic mass of gallium. Show your work.", [
          "For correctly weighting each mass by its fractional abundance: 69(0.601) + 71(0.399)",
          "For the correct result, about 69.8 amu",
        ], [`Average atomic mass = (69 amu)(0.601) + (71 amu)(0.399) = 41.47 + 28.33 = <b>${avg.toFixed(1)} amu</b>.`], { label: "Part A" }),
        P("B", "Explain why the spectrum shows two peaks for a sample of a single element, and identify how the atoms that produce the two peaks differ in their atomic structure.", [
          "For explaining that gallium has two isotopes — atoms with the same number of protons (31) but different numbers of neutrons",
          "For identifying that the isotope with <i>m</i>/<i>z</i> = 71 has two more neutrons than the isotope with <i>m</i>/<i>z</i> = 69, and that the number of electrons and the chemical properties are the same",
        ], ["Gallium has two naturally occurring isotopes. Atoms of both isotopes have 31 protons (that is what makes them gallium) and, when neutral, 31 electrons, but they have different numbers of neutrons: Ga-69 has 38 neutrons and Ga-71 has 40 neutrons. The heavier isotope, with two more neutrons, is deflected differently in the spectrometer and produces the peak at <i>m</i>/<i>z</i> = 71."], { label: "Part B" }),
      ]),

    Q("5", "Short Answer", 9,
      ["A student mixes 50.0 mL of 0.200 <i>M</i> Pb(NO<sub>3</sub>)<sub>2</sub>(<i>aq</i>) with 50.0 mL of 0.300 <i>M</i> NaI(<i>aq</i>), and a bright yellow precipitate of PbI<sub>2</sub>(<i>s</i>) (molar mass 461.0 g/mol) forms."],
      [],
      [
        P("A", "Write the balanced net ionic equation for the formation of the precipitate.", [
          "For the correct equation: Pb<sup>2+</sup>(<i>aq</i>) + 2 I<sup>−</sup>(<i>aq</i>) → PbI<sub>2</sub>(<i>s</i>)",
        ], ["Pb<sup>2+</sup>(<i>aq</i>) + 2 I<sup>−</sup>(<i>aq</i>) → PbI<sub>2</sub>(<i>s</i>). Na<sup>+</sup> and NO<sub>3</sub><sup>−</sup> are spectator ions."], { label: "Part A" }),
        P("B", "Identify the limiting reactant, and calculate the mass of PbI<sub>2</sub>(<i>s</i>) that precipitates, assuming that the reaction goes to completion. Show your work.", [
          "For correctly determining the moles of each reactant (0.0100 mol Pb<sup>2+</sup> and 0.0150 mol I<sup>−</sup>) and identifying I<sup>−</sup> as the limiting reactant (it would take 0.0200 mol I<sup>−</sup> to react with all the Pb<sup>2+</sup>)",
          "For the correct mass of precipitate, about 3.46 g (0.00750 mol × 461.0 g/mol)",
        ], [`Moles Pb<sup>2+</sup> = (0.0500 L)(0.200 M) = 0.0100 mol; moles I<sup>−</sup> = (0.0500 L)(0.300 M) = 0.0150 mol. The reaction requires 2 mol I<sup>−</sup> per mol Pb<sup>2+</sup>, so 0.0100 mol Pb<sup>2+</sup> would need 0.0200 mol I<sup>−</sup>: there is not enough, so <b>I<sup>−</sup> is the limiting reactant</b>. Moles of PbI<sub>2</sub> = 0.0150 mol I<sup>−</sup> × (1 mol PbI<sub>2</sub>/2 mol I<sup>−</sup>) = 0.00750 mol, and mass = (0.00750 mol)(461.0 g/mol) = <b>${mPbI2.toFixed(2)} g</b>.`], { label: "Part B" }),
        P("C", "Calculate the concentration of Pb<sup>2+</sup>(<i>aq</i>) remaining in the solution after the reaction goes to completion. (Assume the volumes are additive and ignore the small solubility of PbI<sub>2</sub>.)", [
          "For the correct concentration: (0.0100 − 0.00750) mol/(0.1000 L) = 0.025 <i>M</i>",
        ], [`Moles of Pb<sup>2+</sup> remaining = 0.0100 mol − 0.00750 mol = 0.00250 mol, in a total volume of 100.0 mL (0.1000 L): [Pb<sup>2+</sup>] = 0.00250 mol/0.1000 L = <b>${PbLeft.toFixed(3)} M</b>.`], { label: "Part C" }),
      ]),

    Q("6", "Short Answer", 9,
      ["A student heats a 50.0 g sample of an unknown metal to 100.0 °C and quickly transfers it to an insulated cup containing 100.0 g of water at 22.0 °C. The final temperature of the metal and water is 25.5 °C. The specific heat capacity of water is 4.18 J/(g·°C). Assume that the cup absorbs a negligible amount of thermal energy."],
      [],
      [
        P("A", "Calculate the specific heat capacity of the metal. Show your work.", [
          "For using <i>q</i> = <i>mc</i>Δ<i>T</i> to find the energy gained by the water, (100.0 g)(4.18 J/(g·°C))(3.5 °C) = 1.46 × 10<sup>3</sup> J, and setting <i>q</i><sub>metal</sub> = −<i>q</i><sub>water</sub>",
          "For the correct specific heat capacity of the metal, about 0.39 J/(g·°C), using the metal's temperature change of 74.5 °C",
        ], [`The water gains <i>q</i> = (100.0 g)(4.18 J/(g·°C))(25.5 − 22.0 °C) = ${Math.round(qw)} J. The metal loses the same amount of energy as it cools from 100.0 °C to 25.5 °C (Δ<i>T</i> = 74.5 °C): ${Math.round(qw)} J = (50.0 g)<i>c</i>(74.5 °C), so <i>c</i> = <b>${cMetal.toFixed(2)} J/(g·°C)</b>.`], { label: "Part A" }),
        P("B", "Suppose that some thermal energy was lost to the surroundings before the final temperature was measured. Would the specific heat capacity calculated in part A be too high, too low, or unaffected? Justify your answer.", [
          "For indicating that the calculated specific heat capacity would be too low",
          "For reasoning that the water would gain less energy than the metal lost, so the measured final temperature (and the calculated <i>q</i> for the water) would be too small, which makes the calculated <i>c</i> smaller than the true value",
        ], ["The calculated value would be <b>too low</b>. If some of the thermal energy that left the metal escaped to the surroundings, the water would warm up less than it should, so the measured temperature change of the water, and the energy <i>q</i> = <i>mc</i>Δ<i>T</i> calculated for it, would be too small. The calculation assumes that this smaller <i>q</i> is the energy lost by the metal, so dividing by <i>m</i>Δ<i>T</i> of the metal gives a specific heat capacity that is lower than the true value."], { label: "Part B" }),
      ]),

    Q("7", "Short Answer", 9,
      ["Figure 1 shows the distributions of molecular speeds for the same gas in two samples, X and Y, at different temperatures."],
      [maxFig],
      [
        P("A", "Indicate which sample is at the higher temperature, and justify your answer using the information in Figure 1.", [
          "For indicating that sample Y is at the higher temperature",
          "For justifying that the peak of the distribution for Y is at a higher speed, so the molecules have a higher average kinetic energy (and the curve is broader, with a lower peak)",
        ], ["Sample <b>Y</b> is at the higher temperature. Temperature is a measure of the average kinetic energy of the molecules. The curve for Y has its maximum at a higher speed, and it is broader, so a larger fraction of its molecules have high speeds. Because the area under each curve is the same (all of the molecules), the broader curve has a lower peak."], { label: "Part A" }),
        P("B", "A reaction between molecules of this gas and another reactant occurs much faster at the higher temperature, even though the temperature increases by only a few tens of degrees. Explain this observation in terms of the distribution of molecular energies and the activation energy.", [
          "For explaining that a reaction occurs only when colliding molecules have at least the activation energy, and that only the high-energy tail of the distribution has such energies",
          "For explaining that a small increase in temperature increases the fraction of molecules in this tail by a large factor, so many more collisions are successful and the rate constant increases substantially",
        ], ["A collision leads to reaction only if the colliding molecules have a combined energy at least equal to the activation energy. At normal temperatures only a small fraction of the molecules, those in the high-energy tail of the distribution, have this much energy. When the temperature rises, the distribution shifts and spreads toward higher energies, and the fraction of molecules in the far tail increases by a large factor (it depends exponentially on <i>E</i><sub>a</sub>/<i>RT</i>), even for a small temperature change. A far larger fraction of collisions is then successful, so the rate constant and the rate increase greatly."], { label: "Part B" }),
      ]),
  ],
});
