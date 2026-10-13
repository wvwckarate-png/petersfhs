// AP Chemistry FRQ — Sample exam (1 long + 1 short question, 14 points)
import { exam, P, Q } from "./frqlib.mjs";

// ---- numbers ----
const MNaOH = 0.100, Vb = 31.40, Va = 25.00;
const Macid = (MNaOH * Vb) / Va;                 // 0.1256
const pH0 = -Math.log10(Macid);                  // 0.90
const excess = (MNaOH * (35.00 - Vb)) / (Va + 35.00);   // mol/L
const pH35 = 14 + Math.log10(excess);            // 11.78
if (Math.abs(Macid - 0.1256) > 1e-9 || Math.abs(pH0 - 0.90) > 0.01 || Math.abs(pH35 - 11.78) > 0.01) throw new Error("sample numbers");

export default exam({
  id: "sample",
  title: "Sample Exam",
  description: "A short two-question sample (14 points) so you can see how the FRQ exams work — one long acid–base titration question and one short intermolecular forces question. Safe to try; reset it afterward and take the full exams fresh.",
  sample: true,
  minutes: 32,
  questions: [
    Q("1", "Long Answer", 23,
      ["A student determines the concentration of a hydrochloric acid solution by titration. The student places 25.00 mL of the HCl(<i>aq</i>) in a flask, adds a few drops of indicator, and titrates it with 0.100 <i>M</i> NaOH(<i>aq</i>). The endpoint is reached after 31.40 mL of NaOH(<i>aq</i>) has been added."],
      [],
      [
        P("A", "Write the balanced net ionic equation for the reaction that occurs in the flask.", [
          "For the correct net ionic equation: H<sup>+</sup>(<i>aq</i>) + OH<sup>−</sup>(<i>aq</i>) → H<sub>2</sub>O(<i>l</i>)",
        ], ["H<sup>+</sup>(<i>aq</i>) + OH<sup>−</sup>(<i>aq</i>) → H<sub>2</sub>O(<i>l</i>). Cl<sup>−</sup> and Na<sup>+</sup> are spectator ions."], { label: "Part A" }),
        P("B", "Calculate the molarity of the HCl(<i>aq</i>). Show your work.", [
          "For correctly using the 1:1 mole ratio to find the moles of HCl at the endpoint, (0.03140 L)(0.100 mol/L) = 3.14 × 10<sup>−3</sup> mol",
          "For the correct molarity, 3.14 × 10<sup>−3</sup> mol/0.02500 L = 0.126 <i>M</i>",
        ], [`Moles of NaOH added = (0.03140 L)(0.100 mol/L) = 3.14 × 10<sup>−3</sup> mol. At the endpoint the moles of HCl equal the moles of NaOH (1:1), so [HCl] = (3.14 × 10<sup>−3</sup> mol)/(0.02500 L) = <b>${Macid.toFixed(3)} M</b>.`], { label: "Part B" }),
        P("C", "Calculate the pH of the HCl(<i>aq</i>) before any NaOH(<i>aq</i>) is added. Show your work.", [
          "For the correct pH, about 0.90, calculated as −log(0.126), since HCl is a strong acid and [H<sup>+</sup>] equals the acid concentration",
        ], [`HCl is a strong acid, so it ionizes completely and [H<sup>+</sup>] = 0.126 M. pH = −log(0.126) = <b>${pH0.toFixed(2)}</b>.`], { label: "Part C" }),
        P("D", "What is the pH of the solution at the equivalence point of this titration? Justify your answer.", [
          "For indicating that the pH is 7 (at 25 °C), because the solution contains only Na<sup>+</sup> and Cl<sup>−</sup>, ions of a strong base and a strong acid that do not react with water",
        ], ["The pH at the equivalence point is <b>7.0</b> at 25 °C. At the equivalence point the H<sup>+</sup> from the acid and the OH<sup>−</sup> from the base have completely reacted to form water, leaving a solution of NaCl. Na<sup>+</sup> (the conjugate acid of a strong base) and Cl<sup>−</sup> (the conjugate base of a strong acid) do not hydrolyze, so the solution is neutral."], { label: "Part D" }),
        P("E", "Calculate the pH of the mixture after a total of 35.00 mL of NaOH(<i>aq</i>) has been added. Show your work.", [
          "For correctly determining the excess OH<sup>−</sup>: (35.00 − 31.40 mL)(0.100 <i>M</i>) = 3.6 × 10<sup>−4</sup> mol in a total volume of 60.00 mL",
          "For the correct pH, about 11.78 (pOH = 2.22)",
        ], [`The equivalence point was reached at 31.40 mL, so the excess NaOH is (35.00 − 31.40) mL = 3.60 mL: (0.00360 L)(0.100 M) = 3.60 × 10<sup>−4</sup> mol of OH<sup>−</sup>. The total volume is 25.00 + 35.00 = 60.00 mL, so [OH<sup>−</sup>] = (3.60 × 10<sup>−4</sup> mol)/(0.06000 L) = 6.0 × 10<sup>−3</sup> M. pOH = 2.22, so pH = 14.00 − 2.22 = <b>${pH35.toFixed(2)}</b>.`], { label: "Part E" }),
        P("F", "The student rinses the buret with distilled water, but not with the NaOH(<i>aq</i>), just before filling it with the 0.100 <i>M</i> NaOH(<i>aq</i>). Indicate whether the calculated molarity of the HCl(<i>aq</i>) will be too high, too low, or unaffected. Justify your answer.", [
          "For indicating that the calculated molarity will be too high",
          "For reasoning that residual water dilutes the NaOH, so its actual concentration is less than 0.100 <i>M</i>, and more volume is needed to reach the endpoint; using 0.100 <i>M</i> in the calculation with this larger volume overestimates the moles of base and acid",
        ], ["The calculated molarity will be <b>too high</b>. The water left in the buret dilutes the NaOH, so its true concentration is lower than 0.100 M. More volume of this weaker base is needed to neutralize the acid, so the recorded volume is larger than it would have been. The calculation multiplies the (too large) volume by the (too large) assumed concentration of 0.100 M, which overestimates the moles of NaOH and therefore the moles and molarity of HCl."], { label: "Part F" }),
        P("G", "Identify one indicator that would be suitable for this titration, and justify your choice.", [
          "For identifying a suitable indicator, such as bromothymol blue or phenolphthalein, whose color change occurs near the steep part of the titration curve (a pH between about 4 and 10 is acceptable for a strong acid–strong base titration)",
        ], ["Either bromothymol blue (pH range about 6.0–7.6, centered near the equivalence point at pH 7) or phenolphthalein (8.2–10.0) is suitable. For a strong acid titrated with a strong base, the pH changes from about 3 to 11 within a fraction of a drop of the equivalence point, so any indicator whose color change occurs in that steep region marks the endpoint to within experimental error."], { label: "Part G" }),
      ]),
    Q("2", "Short Answer", 9,
      ["Methane, CH<sub>4</sub>, and silane, SiH<sub>4</sub>, are both nonpolar, tetrahedral molecules. The normal boiling point of CH<sub>4</sub> is 112 K and that of SiH<sub>4</sub> is 161 K."],
      [],
      [
        P("A", "Identify the type of intermolecular force that is present in both substances and explain why neither substance has dipole–dipole forces.", [
          "For identifying London dispersion forces as the only intermolecular force in both substances",
          "For explaining that the molecules are nonpolar because the bond dipoles (the Si–H and C–H bonds are only slightly polar) cancel in the symmetrical tetrahedral geometry, so there is no permanent dipole",
        ], ["Both substances have <b>London dispersion forces</b>, which are present between all molecules. Methane and silane are tetrahedral and symmetric, so any small bond dipoles cancel and the molecules have no net dipole moment; therefore there are no dipole–dipole forces and no hydrogen bonding (hydrogen is not bonded to N, O, or F)."], { label: "Part A" }),
        P("B", "Explain why SiH<sub>4</sub> has a higher boiling point than CH<sub>4</sub>.", [
          "For explaining that SiH<sub>4</sub> has more electrons and a larger, more polarizable electron cloud, so its instantaneous dipoles are larger and its London dispersion forces are stronger",
          "For concluding that more energy is needed to overcome the stronger attractions between SiH<sub>4</sub> molecules, so the boiling point is higher",
        ], ["SiH<sub>4</sub> has more electrons (18 vs. 10) and a larger electron cloud that is more easily distorted (more polarizable) than that of CH<sub>4</sub>. Larger temporary dipoles produce stronger London dispersion forces between SiH<sub>4</sub> molecules. More energy is therefore needed to separate the molecules into the gas phase, so SiH<sub>4</sub> must be heated to a higher temperature (161 K) than CH<sub>4</sub> (112 K) to boil."], { label: "Part B" }),
      ]),
  ],
});
