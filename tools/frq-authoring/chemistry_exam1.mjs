// AP Chemistry FRQ — Exam 1 (46 points, 105 minutes)
import { exam, P, Q, fig, table, sig } from "./frqlib.mjs";
import { energyProfile, pesSpectrum } from "./chemfrqfigs.mjs";

// ---------- Q1: neutralization calorimetry ----------
const m = 100.0, c = 4.18, dT = 27.5 - 21.0;
const qSoln = m * c * dT;                     // 2717 J
const nWater = 0.0500;
const dHexp = -(qSoln / 1000) / nWater;       // -54.3 kJ/mol
const dHtheory = -285.8 - (-230.0);           // -55.8
const pctDiff = (Math.abs(dHexp - dHtheory) / Math.abs(dHtheory)) * 100;
if (Math.abs(qSoln - 2717) > 1 || Math.abs(dHexp + 54.3) > 0.05 || Math.abs(dHtheory + 55.8) > 1e-9) throw new Error("calorimetry");

// ---------- Q2: kinetics ----------
const rate1 = 1.2e-3, k = rate1 / (0.10 * 0.10);          // 0.12 L/(mol s)
const rate4 = k * 0.30 * 0.050;                           // 1.8e-3
if (Math.abs(k - 0.12) > 1e-9 || Math.abs(rate4 - 1.8e-3) > 1e-9) throw new Error("kinetics");
const kinTable = table(["Trial", "Initial [H<sub>2</sub>O<sub>2</sub>] (M)", "Initial [I<sup>−</sup>] (M)", "Initial rate of O<sub>2</sub> formation (M/s)"], [
  ["1", "0.10", "0.10", "1.2 × 10<sup>−3</sup>"], ["2", "0.20", "0.10", "2.4 × 10<sup>−3</sup>"], ["3", "0.10", "0.20", "2.4 × 10<sup>−3</sup>"],
], "Table 1");
const catModel = fig(energyProfile({ r: 0, p: -95, peak: 75, catPeak: 40, labels: true }),
  "A potential energy diagram. The solid curve for the uncatalyzed reaction rises from the reactants to a high peak and then falls to the lower-energy products. The dashed curve for the catalyzed reaction has a lower peak but starts and ends at the same energies.",
  { caption: "Model diagram: the catalyst lowers the activation energy (dashed curve) but reactants, products and ΔH are unchanged." });

// ---------- Q3: ammonia ----------
const Kb = 1.8e-5, C0 = 0.150;
const OH = Math.sqrt(Kb * C0), pOH = -Math.log10(OH), pH = 14 - pOH;                 // 1.6e-3, 2.79, 11.21
const nB = 25.0 * 0.150, nA = 10.0 * 0.150;                                          // mmol
const base = nB - nA, acid = nA;                                                      // 2.25, 1.50
const pKa = 14 + Math.log10(Kb), pHbuf = pKa + Math.log10(base / acid);               // 9.26, 9.43
if (Math.abs(pH - 11.21) > 0.01 || Math.abs(pHbuf - 9.43) > 0.01 || Math.abs(base - 2.25) > 1e-9) throw new Error("ammonia");

// ---------- Q5: PES ----------
const pes = fig(pesSpectrum({
  peaks: [{ E: 239, n: 2, label: "2" }, { E: 22.7, n: 2, label: "2" }, { E: 16.5, n: 6, label: "6" }, { E: 2.19, n: 2, label: "2" }, { E: 1.00, n: 4, label: "4" }],
  xMax: 300, xTicks: [1, 10, 100, 300],
}), "A photoelectron spectrum of element X on a logarithmic binding energy axis. There are five peaks: at 239 megajoules per mole with relative height 2, 22.7 with height 2, 16.5 with height 6, 2.19 with height 2, and 1.00 with height 4.", { caption: "Figure 1. Photoelectron spectrum of a neutral atom of element X (binding energy in MJ/mol; peak heights show the relative number of electrons)." });

// ---------- Q6: gas from KClO3 ----------
const Mk = 122.55, nKClO3 = 5.00 / Mk, nO2 = nKClO3 * 1.5, R = 0.08206, Tg = 298;
const Vo2 = (nO2 * R * Tg) / 1.00;                      // 1.50 L
const Pw = 24 / 760, Po2 = 1.00 - Pw;                    // 0.968
const nWrong = (1.00 * Vo2) / (R * Tg);                  // uses 1.00 atm
const nRight = (Po2 * Vo2) / (R * Tg);
if (Math.abs(Vo2 - 1.50) > 0.01 || nWrong <= nRight) throw new Error("gas numbers");

// ---------- Q7: free energy ----------
const dH = 57.2, dS = 175.8;
const dG = dH - 298 * (dS / 1000), Tx = (dH * 1000) / dS;   // 4.81 kJ, 325 K
if (Math.abs(dG - 4.81) > 0.02 || Math.abs(Tx - 325.4) > 0.2) throw new Error("free energy");

export default exam({
  id: "exam1",
  title: "Exam 1",
  description: "A full-length, seven-question free-response exam: calorimetry, kinetics with a catalyst, a weak base and buffer, intermolecular forces, photoelectron spectroscopy, gas stoichiometry, and free energy.",
  minutes: 105,
  questions: [
    Q("1", "Long Answer", 23,
      ["A student performs a calorimetry experiment to determine the enthalpy change for the neutralization of a strong acid by a strong base. The student mixes 50.0 mL of 1.00 <i>M</i> HCl(<i>aq</i>) with 50.0 mL of 1.00 <i>M</i> NaOH(<i>aq</i>) in an insulated cup. Both solutions are initially at 21.0 °C, and the highest temperature reached by the mixture is 27.5 °C. Assume that the solutions have a density of 1.00 g/mL and that the specific heat capacity of the mixture is 4.18 J/(g·°C)."],
      [],
      [
        P("A", "Write the balanced net ionic equation for the neutralization reaction.", [
          "For the correct net ionic equation: H<sup>+</sup>(<i>aq</i>) + OH<sup>−</sup>(<i>aq</i>) → H<sub>2</sub>O(<i>l</i>)",
        ], ["H<sup>+</sup>(<i>aq</i>) + OH<sup>−</sup>(<i>aq</i>) → H<sub>2</sub>O(<i>l</i>). The Na<sup>+</sup> and Cl<sup>−</sup> ions are spectator ions and do not appear."], { label: "Part A" }),
        P("B", "Calculate the thermal energy, in joules, absorbed by the solution during the experiment. Show your work.", [
          "For using <i>q</i> = <i>mc</i>Δ<i>T</i> with the total mass of the mixture (100.0 g) and Δ<i>T</i> = 6.5 °C",
          "For the correct value, about 2.7 × 10<sup>3</sup> J (2717 J)",
        ], [`The total volume is 100.0 mL, so the mass of the solution is 100.0 g. The temperature rises by 27.5 °C − 21.0 °C = 6.5 °C. <i>q</i> = <i>mc</i>Δ<i>T</i> = (100.0 g)(4.18 J/(g·°C))(6.5 °C) = <b>2.7 × 10<sup>3</sup> J</b> (${Math.round(qSoln)} J).`], { label: "Part B" }),
        P("C", "Calculate the molar enthalpy of neutralization, Δ<i>H</i><sub>rxn</sub>, in kJ per mole of H<sub>2</sub>O formed. Include the sign. Show your work.", [
          "For the correct number of moles of water formed, 0.0500 mol (the reactants are in a 1:1 ratio, and each has 0.0500 mol)",
          "For a correct value, about −54 kJ/mol, with a negative sign because the reaction releases energy",
        ], [`Each solution contains (0.0500 L)(1.00 mol/L) = 0.0500 mol, and the reactants combine in a 1:1 ratio, so 0.0500 mol of H<sub>2</sub>O forms. The solution gained 2.717 kJ, so the reaction released 2.717 kJ: Δ<i>H</i><sub>rxn</sub> = −2.717 kJ / 0.0500 mol = <b>−54 kJ/mol</b> (−${sig(-dHexp, 3)} kJ/mol). The negative sign shows that the reaction is exothermic.`], { label: "Part C" }),
        P("D", "The student repeats the experiment using 100.0 mL of 1.00 <i>M</i> HCl(<i>aq</i>) and 100.0 mL of 1.00 <i>M</i> NaOH(<i>aq</i>), with all initial temperatures again at 21.0 °C. Predict whether the maximum temperature reached will be greater than, less than, or the same as in the first experiment. Justify your answer.", [
          "For predicting that the final temperature is the same (the temperature change is the same)",
          "For justifying that twice as many moles react and release twice the energy, but twice the mass of solution absorbs it, so Δ<i>T</i> is unchanged (temperature change is an intensive result)",
        ], ["The maximum temperature is the <b>same</b>. Doubling both volumes doubles the moles of H<sup>+</sup> and OH<sup>−</sup> that react (0.100 mol of water forms), so the energy released is twice as large. The mass of solution that absorbs this energy is also twice as large, so Δ<i>T</i> = <i>q</i>/(<i>mc</i>) is unchanged: the energy per gram of solution is the same."], { label: "Part D" }),
        P("E", "Identify one assumption that was made in the calculation in part B.", [
          "For identifying a valid assumption, such as: the calorimeter (cup) absorbs no thermal energy; no energy is lost to the surroundings; the solution's density is 1.00 g/mL; or the solution's specific heat capacity equals that of water",
        ], ["Any one of these is acceptable: the insulated cup absorbs a negligible amount of thermal energy; no thermal energy escapes to the surroundings; the density of the mixture is 1.00 g/mL so 100.0 mL has a mass of 100.0 g; or the specific heat capacity of the dilute solution is the same as that of pure water, 4.18 J/(g·°C)."], { label: "Part E" }),
        P("F", "The standard enthalpies of formation are: Δ<i>H</i><sub>f</sub>° of H<sub>2</sub>O(<i>l</i>) = −285.8 kJ/mol, of OH<sup>−</sup>(<i>aq</i>) = −230.0 kJ/mol, and of H<sup>+</sup>(<i>aq</i>) = 0 kJ/mol. Calculate the standard enthalpy change for the reaction in part A. Then indicate whether the experimental value from part C is consistent with some thermal energy being lost from the cup to the surroundings. Justify your answer.", [
          "For the correct calculation Δ<i>H</i>° = (−285.8) − (−230.0 + 0) = −55.8 kJ/mol",
          "For indicating that the experimental result is consistent with heat loss, because the experimental value (−54 kJ/mol) is smaller in magnitude than the accepted value (−55.8 kJ/mol): if energy escaped, the measured Δ<i>T</i> and the calculated |Δ<i>H</i>| would be too small",
        ], [`Δ<i>H</i>° = Σ Δ<i>H</i><sub>f</sub>°(products) − Σ Δ<i>H</i><sub>f</sub>°(reactants) = (−285.8) − [(−230.0) + 0] = <b>−55.8 kJ/mol</b>. The experimental value, about −54 kJ/mol, is about ${sig(pctDiff, 2)}% smaller in magnitude. This is <b>consistent</b> with some energy leaving the cup: if the solution did not absorb all the energy released, the measured temperature rise would be smaller than expected, and so would the calculated magnitude of Δ<i>H</i>.`], { label: "Part F" }),
      ]),

    Q("2", "Long Answer", 23,
      ["Hydrogen peroxide decomposes in water according to the equation 2 H<sub>2</sub>O<sub>2</sub>(<i>aq</i>) → 2 H<sub>2</sub>O(<i>l</i>) + O<sub>2</sub>(<i>g</i>). The reaction is very slow at room temperature, but it is speeded up when iodide ions, I<sup>−</sup>(<i>aq</i>), are added. A student measures the initial rate of O<sub>2</sub> formation for three different combinations of initial concentrations at 25 °C. The data are shown in Table 1."],
      [kinTable],
      [
        P("A", "Using the data in Table 1, determine the order of the reaction with respect to H<sub>2</sub>O<sub>2</sub> and with respect to I<sup>−</sup>. Justify your answers, and then write the rate law for the reaction.", [
          "For the correct order with respect to H<sub>2</sub>O<sub>2</sub> (first order), justified by comparing trials 1 and 2: doubling [H<sub>2</sub>O<sub>2</sub>] with [I<sup>−</sup>] constant doubles the rate",
          "For the correct order with respect to I<sup>−</sup> (first order), justified by comparing trials 1 and 3: doubling [I<sup>−</sup>] with [H<sub>2</sub>O<sub>2</sub>] constant doubles the rate",
          "For the correct rate law: rate = <i>k</i>[H<sub>2</sub>O<sub>2</sub>][I<sup>−</sup>]",
        ], ["Compare trials 1 and 2: [H<sub>2</sub>O<sub>2</sub>] doubles (0.10 M → 0.20 M) while [I<sup>−</sup>] is constant, and the rate doubles (1.2 × 10<sup>−3</sup> → 2.4 × 10<sup>−3</sup> M/s), so the reaction is <b>first order in H<sub>2</sub>O<sub>2</sub></b>. Compare trials 1 and 3: [I<sup>−</sup>] doubles with [H<sub>2</sub>O<sub>2</sub>] constant, and the rate doubles, so the reaction is <b>first order in I<sup>−</sup></b>. The rate law is <b>rate = <i>k</i>[H<sub>2</sub>O<sub>2</sub>][I<sup>−</sup>]</b>."], { label: "Part A" }),
        P("B", "Calculate the value of the rate constant, <i>k</i>, for the reaction at 25 °C. Include units with your answer. Show your work.", [
          "For correctly substituting data from any trial into the rate law, e.g., 1.2 × 10<sup>−3</sup> M/s = <i>k</i>(0.10 M)(0.10 M)",
          "For the correct value with correct units: <i>k</i> = 0.12 M<sup>−1</sup>s<sup>−1</sup> (or L mol<sup>−1</sup> s<sup>−1</sup>)",
        ], [`Using trial 1: <i>k</i> = rate/([H<sub>2</sub>O<sub>2</sub>][I<sup>−</sup>]) = (1.2 × 10<sup>−3</sup> M/s)/[(0.10 M)(0.10 M)] = <b>0.12 M<sup>−1</sup>s<sup>−1</sup></b>. The units follow from a second-order overall rate law: M/s divided by M<sup>2</sup> is M<sup>−1</sup>s<sup>−1</sup>.`], { label: "Part B" }),
        P("C", "Predict the initial rate of O<sub>2</sub> formation at 25 °C when the initial concentrations are [H<sub>2</sub>O<sub>2</sub>] = 0.30 <i>M</i> and [I<sup>−</sup>] = 0.050 <i>M</i>. Show your work.", [
          "For the correct predicted rate of 1.8 × 10<sup>−3</sup> M/s, calculated from the rate law with the value of <i>k</i> from part B",
        ], [`rate = <i>k</i>[H<sub>2</sub>O<sub>2</sub>][I<sup>−</sup>] = (0.12 M<sup>−1</sup>s<sup>−1</sup>)(0.30 M)(0.050 M) = <b>1.8 × 10<sup>−3</sup> M/s</b>.`], { label: "Part C" }),
        P("D", "A proposed mechanism for the reaction is given below.<br>Step 1 (slow): H<sub>2</sub>O<sub>2</sub> + I<sup>−</sup> → H<sub>2</sub>O + IO<sup>−</sup><br>Step 2 (fast): H<sub>2</sub>O<sub>2</sub> + IO<sup>−</sup> → H<sub>2</sub>O + O<sub>2</sub> + I<sup>−</sup><br>Explain how the mechanism is consistent with the rate law in part A, and identify the catalyst and the reaction intermediate.".replace(/<br>/g, " "), [
          "For explaining that the rate is determined by the slow step, which involves one H<sub>2</sub>O<sub>2</sub> and one I<sup>−</sup>, so the rate law is first order in each (rate = <i>k</i>[H<sub>2</sub>O<sub>2</sub>][I<sup>−</sup>]), consistent with part A",
          "For identifying I<sup>−</sup> as the catalyst (consumed in step 1 and regenerated in step 2) and IO<sup>−</sup> as the intermediate (produced in step 1 and consumed in step 2)",
        ], ["The rate of a multistep reaction is set by its slowest (rate-determining) step. Step 1 is an elementary step that involves one H<sub>2</sub>O<sub>2</sub> and one I<sup>−</sup>, so its rate law is rate = <i>k</i>[H<sub>2</sub>O<sub>2</sub>][I<sup>−</sup>], exactly the experimental rate law. The <b>catalyst is I<sup>−</sup></b>: it is used in step 1 and regenerated in step 2, and it does not appear in the overall equation. The <b>intermediate is IO<sup>−</sup></b>: it is formed in step 1 and used up in step 2. Adding the two steps gives 2 H<sub>2</sub>O<sub>2</sub> → 2 H<sub>2</sub>O + O<sub>2</sub>, matching the overall reaction."], { label: "Part D" }),
        P("E", "Describe how adding the I<sup>−</sup> catalyst changes (i) the activation energy and (ii) the enthalpy change of the reaction. Support your answer by describing how the catalyzed and uncatalyzed reactions would appear on a potential energy diagram.", [
          "For indicating that the catalyst provides an alternative pathway with a lower activation energy (a lower peak on the diagram), so the reaction is faster",
          "For indicating that the enthalpy change (the energy difference between reactants and products) is unchanged, because the reactants and products are the same",
        ], ["On a potential energy diagram, both pathways start at the same energy for the reactants and end at the same energy for the products, so the <b>enthalpy change is unchanged</b>. The catalyzed pathway (dashed) has a <b>lower peak</b>, which means a <b>lower activation energy</b>. A lower activation energy means that a larger fraction of collisions have enough energy to react, so the rate constant increases."], { label: "Part E", paper: true, modelFigures: [catModel] }),
      ]),

    Q("3", "Long Answer", 23,
      ["Ammonia, NH<sub>3</sub>, is a weak base that reacts with water according to the equation below. At 25 °C, <i>K</i><sub>b</sub> for ammonia is 1.8 × 10<sup>−5</sup>.", "NH<sub>3</sub>(<i>aq</i>) + H<sub>2</sub>O(<i>l</i>) ⇌ NH<sub>4</sub><sup>+</sup>(<i>aq</i>) + OH<sup>−</sup>(<i>aq</i>)"],
      [],
      [
        P("A", "Write the equilibrium-constant expression for <i>K</i><sub>b</sub>, and identify a conjugate acid–base pair in the equation. Label which is the acid and which is the base.", [
          "For the correct expression, <i>K</i><sub>b</sub> = [NH<sub>4</sub><sup>+</sup>][OH<sup>−</sup>]/[NH<sub>3</sub>] (water is omitted)",
          "For a correctly labeled conjugate pair: NH<sub>4</sub><sup>+</sup> (acid) and NH<sub>3</sub> (base), or H<sub>2</sub>O (acid) and OH<sup>−</sup> (base)",
        ], ["<i>K</i><sub>b</sub> = [NH<sub>4</sub><sup>+</sup>][OH<sup>−</sup>]/[NH<sub>3</sub>]; pure liquid water is not included. NH<sub>3</sub> accepts a proton from water, so NH<sub>3</sub> is the base and its conjugate acid is NH<sub>4</sub><sup>+</sup>. In the reverse direction, OH<sup>−</sup> is the conjugate base of the acid H<sub>2</sub>O."], { label: "Part A" }),
        P("B", "A solution of NH<sub>3</sub>(<i>aq</i>) has an initial concentration of 0.150 <i>M</i>. Calculate the pH of the solution at equilibrium. Show your work, and state any approximation you make.", [
          "For a correct equilibrium setup, e.g., 1.8 × 10<sup>−5</sup> = <i>x</i><sup>2</sup>/(0.150 − <i>x</i>) with [NH<sub>4</sub><sup>+</sup>] = [OH<sup>−</sup>] = <i>x</i>",
          "For a correct value of [OH<sup>−</sup>], about 1.6 × 10<sup>−3</sup> M (using the approximation 0.150 − <i>x</i> ≈ 0.150)",
          "For a correct pH of about 11.2 (pOH = 2.79, pH = 14.00 − pOH)",
        ], [`Let <i>x</i> = [OH<sup>−</sup>] = [NH<sub>4</sub><sup>+</sup>] at equilibrium. Because <i>K</i><sub>b</sub> is small, assume 0.150 − <i>x</i> ≈ 0.150. Then <i>x</i><sup>2</sup> = (1.8 × 10<sup>−5</sup>)(0.150) = 2.7 × 10<sup>−6</sup>, so [OH<sup>−</sup>] = <i>x</i> = ${(OH * 1000).toFixed(1)} × 10<sup>−3</sup> M ≈ 1.6 × 10<sup>−3</sup> M (which is about 1% of 0.150 M, so the approximation is valid). pOH = −log(1.6 × 10<sup>−3</sup>) = ${pOH.toFixed(2)}, so pH = 14.00 − ${pOH.toFixed(2)} = <b>${pH.toFixed(2)}</b>.`], { label: "Part B" }),
        P("C", "A buffer solution is prepared by adding 10.0 mL of 0.150 <i>M</i> HCl(<i>aq</i>) to 25.0 mL of 0.150 <i>M</i> NH<sub>3</sub>(<i>aq</i>). Calculate the pH of the buffer. Show your work.", [
          "For correctly determining the moles after the reaction NH<sub>3</sub> + H<sup>+</sup> → NH<sub>4</sub><sup>+</sup>: 3.75 mmol NH<sub>3</sub> − 1.50 mmol = 2.25 mmol NH<sub>3</sub> remaining and 1.50 mmol NH<sub>4</sub><sup>+</sup> formed",
          "For a correct method for the pH of a buffer: the Henderson–Hasselbalch equation (with p<i>K</i><sub>a</sub> of NH<sub>4</sub><sup>+</sup> = 14.00 − p<i>K</i><sub>b</sub> = 9.26) or substitution into the <i>K</i><sub>b</sub> expression",
          "For a correct pH of about 9.43",
        ], [`The strong acid reacts completely with NH<sub>3</sub>: moles NH<sub>3</sub> initially = (0.0250 L)(0.150 M) = 3.75 mmol; moles H<sup>+</sup> added = (0.0100 L)(0.150 M) = 1.50 mmol. After reaction: NH<sub>3</sub> = 2.25 mmol and NH<sub>4</sub><sup>+</sup> = 1.50 mmol (the volume cancels in the ratio). p<i>K</i><sub>a</sub> of NH<sub>4</sub><sup>+</sup> = 14.00 − p<i>K</i><sub>b</sub> = 14.00 − 4.74 = ${pKa.toFixed(2)}. pH = p<i>K</i><sub>a</sub> + log([NH<sub>3</sub>]/[NH<sub>4</sub><sup>+</sup>]) = ${pKa.toFixed(2)} + log(2.25/1.50) = ${pKa.toFixed(2)} + 0.18 = <b>${pHbuf.toFixed(2)}</b>. (Using [OH<sup>−</sup>] = <i>K</i><sub>b</sub>[NH<sub>3</sub>]/[NH<sub>4</sub><sup>+</sup>] = 2.7 × 10<sup>−5</sup> M gives the same answer.)`], { label: "Part C" }),
        P("D", "In a titration of NH<sub>3</sub>(<i>aq</i>) with HCl(<i>aq</i>), the pH at the equivalence point is less than 7. Explain why, using the chemical species present at the equivalence point.", [
          "For identifying that at the equivalence point the solution contains NH<sub>4</sub><sup>+</sup> (the conjugate acid of a weak base) and Cl<sup>−</sup> (which does not react with water)",
          "For explaining that NH<sub>4</sub><sup>+</sup> donates protons to water, NH<sub>4</sub><sup>+</sup> + H<sub>2</sub>O ⇌ NH<sub>3</sub> + H<sub>3</sub>O<sup>+</sup>, producing H<sub>3</sub>O<sup>+</sup> and making the solution acidic",
        ], ["At the equivalence point, all the NH<sub>3</sub> has been converted to NH<sub>4</sub><sup>+</sup>, and the solution contains NH<sub>4</sub><sup>+</sup> and Cl<sup>−</sup>. Cl<sup>−</sup> is the conjugate base of a strong acid and does not react with water. NH<sub>4</sub><sup>+</sup> is the conjugate acid of a weak base and is a weak acid: NH<sub>4</sub><sup>+</sup>(<i>aq</i>) + H<sub>2</sub>O(<i>l</i>) ⇌ NH<sub>3</sub>(<i>aq</i>) + H<sub>3</sub>O<sup>+</sup>(<i>aq</i>). This adds H<sub>3</sub>O<sup>+</sup> to the solution, so the pH at the equivalence point is below 7 (about 5.2 for a 0.075 M solution)."], { label: "Part D" }),
      ]),

    Q("4", "Short Answer", 9,
      ["Ethanol, CH<sub>3</sub>CH<sub>2</sub>OH, and dimethyl ether, CH<sub>3</sub>OCH<sub>3</sub>, both have the molecular formula C<sub>2</sub>H<sub>6</sub>O and nearly the same molar mass (46 g/mol). The normal boiling point of ethanol is 78 °C, and the normal boiling point of dimethyl ether is −24 °C. In ethanol, one oxygen is bonded to a carbon and to a hydrogen; in dimethyl ether, the oxygen is bonded to two carbons."],
      [],
      [
        P("A", "Identify all of the types of intermolecular forces present in a sample of pure liquid ethanol and in a sample of pure liquid dimethyl ether.", [
          "For correctly identifying the forces in ethanol: London dispersion forces, dipole–dipole forces, and hydrogen bonding",
          "For correctly identifying the forces in dimethyl ether: London dispersion forces and dipole–dipole forces (no hydrogen bonding, because H is not bonded to O, N, or F)",
        ], ["<b>Ethanol:</b> London dispersion forces (all molecules), dipole–dipole attractions (polar C–O and O–H bonds in a bent, polar molecule), and hydrogen bonding (a hydrogen covalently bonded to the very electronegative oxygen is attracted to a lone pair on oxygen of a neighboring molecule). <b>Dimethyl ether:</b> London dispersion forces and dipole–dipole attractions only; its hydrogens are bonded to carbon, not to O, N, or F, so it cannot form hydrogen bonds with itself."], { label: "Part A" }),
        P("B", "In terms of the relative strengths of the intermolecular forces, explain why ethanol has a much higher boiling point than dimethyl ether.", [
          "For indicating that the two molecules have similar molar masses and therefore similar dispersion forces, so the difference is due to hydrogen bonding in ethanol",
          "For explaining that hydrogen bonds are stronger than the other forces present in dimethyl ether, so more energy (a higher temperature) is needed to overcome the attractions between ethanol molecules and vaporize the liquid",
        ], ["The molar masses are essentially the same, so the London dispersion forces are of similar strength in both liquids. The important difference is that ethanol molecules form hydrogen bonds with each other, which are much stronger than the dipole–dipole and dispersion forces that hold dimethyl ether molecules together. More energy must be supplied to separate ethanol molecules from the liquid, so ethanol must be heated to a much higher temperature (78 °C) before its vapor pressure equals atmospheric pressure."], { label: "Part B" }),
      ]),

    Q("5", "Short Answer", 9,
      ["The photoelectron spectrum of a neutral atom of element X is shown in Figure 1. Assume that the atom is in its ground state."],
      [pes],
      [
        P("A", "Identify element X, and write its complete ground-state electron configuration. Justify your answer using the data in Figure 1.", [
          "For adding the relative numbers of electrons (2 + 2 + 6 + 2 + 4 = 16) to conclude that the neutral atom has 16 electrons (Z = 16) and identifying the element as sulfur",
          "For a correct electron configuration, 1<i>s</i><sup>2</sup>2<i>s</i><sup>2</sup>2<i>p</i><sup>6</sup>3<i>s</i><sup>2</sup>3<i>p</i><sup>4</sup> (consistent with the peak heights: 2, 2, 6, 2, 4)",
        ], ["The relative peak heights give the numbers of electrons in each subshell: 2 + 2 + 6 + 2 + 4 = 16 electrons. A neutral atom with 16 electrons has 16 protons, so element X is <b>sulfur</b>. Reading from the highest binding energy (the 1<i>s</i> electrons, closest to the nucleus) to the lowest, the peaks correspond to 1<i>s</i><sup>2</sup>, 2<i>s</i><sup>2</sup>, 2<i>p</i><sup>6</sup>, 3<i>s</i><sup>2</sup>, 3<i>p</i><sup>4</sup>: the configuration is <b>1<i>s</i><sup>2</sup>2<i>s</i><sup>2</sup>2<i>p</i><sup>6</sup>3<i>s</i><sup>2</sup>3<i>p</i><sup>4</sup></b>."], { label: "Part A" }),
        P("B", "Explain, in terms of electron shielding and distance from the nucleus, why the 3<i>s</i> peak has a higher binding energy (2.19 MJ/mol) than the 3<i>p</i> peak (1.00 MJ/mol), even though both subshells are in the third energy level.", [
          "For explaining that a 3<i>s</i> electron penetrates closer to the nucleus (has a higher probability of being near the nucleus) than a 3<i>p</i> electron, so it is shielded less by the inner electrons and experiences a larger effective nuclear charge",
          "For concluding that the stronger attraction (Coulomb's law) means that more energy is needed to remove a 3<i>s</i> electron than a 3<i>p</i> electron",
        ], ["Both subshells are in the third shell, but a 3<i>s</i> electron has a greater probability of being found close to the nucleus (it penetrates through the inner shells), so it is shielded less by the 1<i>s</i>, 2<i>s</i>, and 2<i>p</i> electrons and experiences a larger effective nuclear charge. By Coulomb's law the attraction between the nucleus and the 3<i>s</i> electrons is stronger, so more energy is needed to remove them: the 3<i>s</i> binding energy is higher than the 3<i>p</i> binding energy."], { label: "Part B" }),
      ]),

    Q("6", "Short Answer", 9,
      ["Oxygen gas can be prepared in the laboratory by heating potassium chlorate according to the equation 2 KClO<sub>3</sub>(<i>s</i>) → 2 KCl(<i>s</i>) + 3 O<sub>2</sub>(<i>g</i>). A student completely decomposes a 5.00 g sample of KClO<sub>3</sub> (molar mass 122.55 g/mol). The oxygen is collected at 298 K and 1.00 atm."],
      [],
      [
        P("A", "Calculate the volume, in liters, that the O<sub>2</sub>(<i>g</i>) occupies at 298 K and 1.00 atm. Show your work. (<i>R</i> = 0.08206 L·atm/(mol·K))", [
          "For the correct number of moles of O<sub>2</sub>: (5.00 g ÷ 122.55 g/mol)(3 mol O<sub>2</sub>/2 mol KClO<sub>3</sub>) = 0.0612 mol",
          "For the correct volume, 1.50 L, using <i>V</i> = <i>nRT</i>/<i>P</i>",
        ], [`<i>n</i>(KClO<sub>3</sub>) = 5.00 g / 122.55 g/mol = 0.04080 mol. From the equation, <i>n</i>(O<sub>2</sub>) = (0.04080 mol)(3/2) = 0.0612 mol. <i>V</i> = <i>nRT</i>/<i>P</i> = (0.0612 mol)(0.08206 L·atm/(mol·K))(298 K)/(1.00 atm) = <b>${Vo2.toFixed(2)} L</b>.`], { label: "Part A" }),
        P("B", "In a second experiment, the student collects the O<sub>2</sub>(<i>g</i>) over water. The total pressure of the gas in the collection vessel is 1.00 atm, and the vapor pressure of water at 298 K is 0.031 atm. A student who mistakenly uses 1.00 atm as the pressure of the O<sub>2</sub> in a calculation of the moles of O<sub>2</sub> collected will obtain a value that is too high, too low, or correct. Explain.", [
          "For indicating that the calculated moles will be too high",
          "For explaining that the gas contains water vapor, so the partial pressure of O<sub>2</sub> is only 1.00 − 0.031 = 0.97 atm; using a larger pressure in <i>n</i> = <i>PV</i>/<i>RT</i> gives too many moles",
        ], ["The calculated value will be <b>too high</b>. The gas in the vessel is a mixture of O<sub>2</sub> and water vapor, so by Dalton's law the partial pressure of O<sub>2</sub> is 1.00 atm − 0.031 atm = 0.97 atm. In <i>n</i> = <i>PV</i>/<i>RT</i> with the same <i>V</i> and <i>T</i>, using 1.00 atm instead of 0.97 atm overestimates the moles of O<sub>2</sub> by about 3%."], { label: "Part B" }),
      ]),

    Q("7", "Short Answer", 9,
      ["The decomposition of dinitrogen tetroxide is represented by the equation N<sub>2</sub>O<sub>4</sub>(<i>g</i>) → 2 NO<sub>2</sub>(<i>g</i>). For this reaction, Δ<i>H</i>° = +57.2 kJ/mol<sub>rxn</sub> and Δ<i>S</i>° = +175.8 J/(mol<sub>rxn</sub>·K), and both values can be assumed to be independent of temperature."],
      [],
      [
        P("A", "Calculate the value of Δ<i>G</i>° for the reaction at 298 K, in kJ/mol<sub>rxn</sub>. Is the reaction thermodynamically favorable at 298 K? Justify your answer. Show your work.", [
          "For the correct calculation, Δ<i>G</i>° = Δ<i>H</i>° − <i>T</i>Δ<i>S</i>° = 57.2 kJ − (298 K)(0.1758 kJ/K) ≈ +4.8 kJ/mol (the unit conversion of Δ<i>S</i>° to kJ is essential)",
          "For indicating that the reaction is not thermodynamically favorable at 298 K because Δ<i>G</i>° is positive",
        ], [`Δ<i>G</i>° = Δ<i>H</i>° − <i>T</i>Δ<i>S</i>° = 57.2 kJ/mol − (298 K)(175.8 J/(mol·K))(1 kJ/1000 J) = 57.2 − 52.4 = <b>+${dG.toFixed(1)} kJ/mol</b>. Because Δ<i>G</i>° is positive, the decomposition is <b>not</b> thermodynamically favorable under standard conditions at 298 K (the reverse reaction is).`], { label: "Part A" }),
        P("B", "Calculate the temperature above which the forward reaction becomes thermodynamically favorable. Justify, in terms of the signs of Δ<i>H</i>° and Δ<i>S</i>°, why the reaction becomes favorable at high temperature.", [
          "For setting Δ<i>G</i>° = 0 and solving, <i>T</i> = Δ<i>H</i>°/Δ<i>S</i>° = 57,200 J / 175.8 J/K ≈ 325 K",
          "For explaining that Δ<i>S</i>° is positive (more moles of gas) and Δ<i>H</i>° is positive, so the −<i>T</i>Δ<i>S</i>° term becomes more negative as <i>T</i> increases until it outweighs the positive Δ<i>H</i>°",
        ], [`The reaction becomes favorable when Δ<i>G</i>° &lt; 0, i.e., when <i>T</i>Δ<i>S</i>° &gt; Δ<i>H</i>°. At the crossover, <i>T</i> = Δ<i>H</i>°/Δ<i>S</i>° = (57,200 J/mol)/(175.8 J/(mol·K)) = <b>${Math.round(Tx)} K</b>; above about ${Math.round(Tx)} K (52 °C), the forward reaction is favorable. The reaction is endothermic (Δ<i>H</i>° &gt; 0, which opposes it), but one mole of gas becomes two (Δ<i>S</i>° &gt; 0, which favors it). Raising the temperature increases the importance of the entropy term, −<i>T</i>Δ<i>S</i>°, until it outweighs the enthalpy term.`.replace(/&lt;/g, "<").replace(/&gt;/g, ">")], { label: "Part B" }),
      ]),
  ],
});
