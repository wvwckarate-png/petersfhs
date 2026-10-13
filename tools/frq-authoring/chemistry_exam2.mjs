// AP Chemistry FRQ — Exam 2 (46 points, 105 minutes)
import { exam, P, Q, fig, table, sig } from "./frqlib.mjs";
import { galvanicCell, lewis } from "./chemfrqfigs.mjs";

// ---------- Q1: galvanic cell ----------
const F = 96485, Eag = 0.80, Eni = -0.26;
const E0 = Eag - Eni;                                  // 1.06 V
const dG0 = -2 * F * E0;                               // J
const Eact = E0 - (0.0257 / 2) * Math.log(1.0 / 0.010 ** 2);   // [Ni2+]=1.0, [Ag+]=0.010
const qC = 0.500 * 30.0 * 60, molE = qC / F, mAg = molE * 107.87;
if (Math.abs(E0 - 1.06) > 1e-9 || Math.abs(dG0 / 1000 + 204.6) > 0.5 || Math.abs(Eact - 0.942) > 0.002 || Math.abs(mAg - 1.006) > 0.002) throw new Error("cell numbers");

// ---------- Q2: spectrophotometry ----------
const slope = 4.50e3, Asample = 0.216;
const cFe = Asample / slope;                           // 4.80e-5
const c0 = 1.00e-3;
const eq = c0 - cFe;                                   // 9.52e-4
const Kc = cFe / (eq * eq);                            // ~53
if (Math.abs(cFe - 4.80e-5) > 1e-9 || Math.abs(Kc - 53) > 0.5) throw new Error("Kc");
const calTable = table(["Concentration of FeSCN<sup>2+</sup> (× 10<sup>−5</sup> <i>M</i>)", "Absorbance at 447 nm"], [["2.00", "0.090"], ["4.00", "0.180"], ["6.00", "0.270"], ["8.00", "0.360"]], "Table 1. Standard solutions (1.00 cm cuvette).");

// ---------- Q3: carbonate titration ----------
const nHCl = 0.02130 * 0.500, nNa2CO3 = nHCl / 2, mNa2CO3 = nNa2CO3 * 105.99, pct = (mNa2CO3 / 1.250) * 100;
if (Math.abs(mNa2CO3 - 0.5644) > 0.001 || Math.abs(pct - 45.15) > 0.05) throw new Error("carbonate");

// ---------- Q4: first-order data ----------
const ts = [0, 100, 200, 300, 400];
const conc = ts.map((t) => 0.800 * Math.exp((-Math.LN2 / 200) * t));
const kfirst = Math.LN2 / 200;
const kTable = table(["Time (s)", "[A] (<i>M</i>)"], ts.map((t, i) => [String(t), conc[i].toFixed(3)]), "Table 1");

// ---------- Q6: dilution ----------
const V1 = (0.100 * 250.0) / 2.00;                      // 12.5 mL

// ---------- Q7: Hess ----------
const dHf = 2 * -393.5 + 3 * -285.8 - -1560;            // -84.4
if (Math.abs(dHf + 84.4) > 1e-9) throw new Error("Hess");

const cellFig = fig(galvanicCell({ left: { metal: "Ni", sol: "1.0 M Ni²⁺" }, right: { metal: "Ag", sol: "1.0 M Ag⁺" }, volts: "", electronDir: null }),
  "A galvanic cell diagram. The left beaker holds a nickel electrode in 1.0 molar nickel(II) solution. The right beaker holds a silver electrode in 1.0 molar silver ion solution. A salt bridge connects the beakers and a voltmeter connects the two electrodes.",
  { caption: "Figure 1" });

const so2 = fig(lewis({
  atoms: [{ s: "O", x: 90, y: 130, lp: [180, 90] }, { s: "S", x: 190, y: 90, lp: [270] }, { s: "O", x: 290, y: 130, lp: [0, 270, 90] }],
  bonds: [[0, 1, 2], [1, 2, 1]], H: 200,
}), "A Lewis diagram of sulfur dioxide: sulfur in the center with one lone pair, a double bond to the left oxygen and a single bond to the right oxygen, with the oxygen atoms having lone pairs. The molecule is bent.", { caption: "One resonance structure of SO₂ (an equivalent structure has the double bond on the other oxygen). The molecule is bent." });

export default exam({
  id: "exam2",
  title: "Exam 2",
  description: "A full-length, seven-question free-response exam: a galvanic cell, equilibrium by spectrophotometry, a carbonate titration, first-order kinetics, molecular shape and polarity, dilution, and Hess's law.",
  minutes: 105,
  questions: [
    Q("1", "Long Answer", 23,
      ["A galvanic cell is constructed from a nickel electrode in 1.0 <i>M</i> Ni(NO<sub>3</sub>)<sub>2</sub>(<i>aq</i>) and a silver electrode in 1.0 <i>M</i> AgNO<sub>3</sub>(<i>aq</i>), connected by a salt bridge and an external wire, as shown in Figure 1. The standard reduction potentials are:", "Ag<sup>+</sup>(<i>aq</i>) + e<sup>−</sup> → Ag(<i>s</i>)  <i>E</i>° = +0.80 V", "Ni<sup>2+</sup>(<i>aq</i>) + 2 e<sup>−</sup> → Ni(<i>s</i>)  <i>E</i>° = −0.26 V"],
      [cellFig],
      [
        P("A", "Identify the anode and the cathode, and indicate the direction of electron flow in the external wire.", [
          "For identifying the nickel electrode as the anode (where oxidation occurs) and the silver electrode as the cathode (where reduction occurs)",
          "For indicating that electrons flow through the external wire from the nickel electrode to the silver electrode",
        ], ["Nickel has the more negative reduction potential, so Ni is oxidized: Ni(<i>s</i>) → Ni<sup>2+</sup>(<i>aq</i>) + 2 e<sup>−</sup> at the <b>anode</b>. Silver ions are reduced: Ag<sup>+</sup>(<i>aq</i>) + e<sup>−</sup> → Ag(<i>s</i>) at the <b>cathode</b>. Electrons are released at the anode and travel through the external wire <b>from Ni to Ag</b>."], { label: "Part A" }),
        P("B", "Calculate the standard cell potential, <i>E</i>°<sub>cell</sub>, and the standard free energy change, Δ<i>G</i>°, in kJ per mole of reaction for the cell reaction. Show your work. (1 faraday = 96,485 C/mol e<sup>−</sup>)", [
          "For the correct cell potential: <i>E</i>°<sub>cell</sub> = 0.80 V − (−0.26 V) = +1.06 V (the silver half-reaction is not multiplied)",
          "For a correct Δ<i>G</i>° using Δ<i>G</i>° = −<i>nFE</i>° with <i>n</i> = 2: about −205 kJ/mol<sub>rxn</sub>",
        ], [`<i>E</i>°<sub>cell</sub> = <i>E</i>°<sub>cathode</sub> − <i>E</i>°<sub>anode</sub> = 0.80 V − (−0.26 V) = <b>+1.06 V</b>. The balanced cell reaction, Ni(<i>s</i>) + 2 Ag<sup>+</sup>(<i>aq</i>) → Ni<sup>2+</sup>(<i>aq</i>) + 2 Ag(<i>s</i>), transfers <i>n</i> = 2 mol of electrons. Δ<i>G</i>° = −<i>nFE</i>° = −(2)(96,485 C/mol)(1.06 V) = −2.05 × 10<sup>5</sup> J/mol = <b>−205 kJ/mol<sub>rxn</sub></b>. The negative sign shows that the reaction is thermodynamically favorable.`], { label: "Part B" }),
        P("C", "The concentration of Ag<sup>+</sup>(<i>aq</i>) in the cathode compartment is lowered to 0.010 <i>M</i>, and [Ni<sup>2+</sup>] stays at 1.0 <i>M</i>. Calculate the cell potential at 298 K. Is the potential greater than, less than, or equal to the standard cell potential? Show your work. (<i>E</i> = <i>E</i>° − (0.0257 V/<i>n</i>) ln <i>Q</i> at 298 K)", [
          "For the correct reaction quotient, <i>Q</i> = [Ni<sup>2+</sup>]/[Ag<sup>+</sup>]<sup>2</sup> = 1.0/(0.010)<sup>2</sup> = 1.0 × 10<sup>4</sup>",
          "For a correct cell potential of about 0.94 V, which is less than the standard potential",
        ], [`The cell reaction is Ni + 2 Ag<sup>+</sup> → Ni<sup>2+</sup> + 2 Ag, so <i>Q</i> = [Ni<sup>2+</sup>]/[Ag<sup>+</sup>]<sup>2</sup> = 1.0/(0.010)<sup>2</sup> = 1.0 × 10<sup>4</sup>. <i>E</i> = 1.06 V − (0.0257 V/2) ln(1.0 × 10<sup>4</sup>) = 1.06 V − (0.01285)(9.21) = <b>${Eact.toFixed(2)} V</b>. This is <b>less than</b> 1.06 V: lowering the concentration of a reactant makes <i>Q</i> larger than 1, so the reaction has less driving force.`], { label: "Part C" }),
        P("D", "The cell operates for 30.0 minutes with a constant current of 0.500 A. Calculate the mass of silver that is deposited on the silver electrode. Show your work.", [
          "For the correct number of moles of electrons: (0.500 C/s)(1800 s)/(96,485 C/mol) = 9.33 × 10<sup>−3</sup> mol e<sup>−</sup>",
          "For the correct mass of silver, about 1.01 g (1 mol Ag per mol of e<sup>−</sup>, 107.87 g/mol)",
        ], [`Charge = <i>It</i> = (0.500 A)(30.0 × 60 s) = 900 C. Moles of electrons = 900 C/96,485 C/mol = ${(molE * 1000).toFixed(2)} × 10<sup>−3</sup> mol. Each mole of electrons deposits one mole of Ag (Ag<sup>+</sup> + e<sup>−</sup> → Ag), so mass = (${(molE * 1000).toFixed(2)} × 10<sup>−3</sup> mol)(107.87 g/mol) = <b>${mAg.toFixed(2)} g</b> of Ag.`], { label: "Part D" }),
        P("E", "Describe the function of the salt bridge in the cell, including the direction in which anions move.", [
          "For explaining that the salt bridge allows ions to flow between the half-cells to maintain electrical neutrality (otherwise charge would build up and the current would stop)",
          "For indicating that anions move toward the anode (the nickel half-cell, where positive Ni<sup>2+</sup> ions are being produced) and cations move toward the cathode (where Ag<sup>+</sup> ions are being removed)",
        ], ["As the cell operates, Ni<sup>2+</sup> ions accumulate in the anode compartment and Ag<sup>+</sup> ions are removed from the cathode compartment. Without a way to balance these charges, the anode solution would become positively charged and the cathode solution negatively charged, which would quickly stop the flow of electrons. The salt bridge completes the circuit with a flow of ions: <b>anions (such as NO<sub>3</sub><sup>−</sup>) move toward the nickel anode compartment</b> and <b>cations move toward the silver cathode compartment</b>, keeping both solutions electrically neutral."], { label: "Part E" }),
      ]),

    Q("2", "Long Answer", 23,
      ["A student studies the equilibrium Fe<sup>3+</sup>(<i>aq</i>) + SCN<sup>−</sup>(<i>aq</i>) ⇌ FeSCN<sup>2+</sup>(<i>aq</i>), in which FeSCN<sup>2+</sup> is a deep red ion. The student uses a spectrophotometer set to 447 nm and first measures the absorbances of several standard solutions of FeSCN<sup>2+</sup>(<i>aq</i>), as shown in Table 1. The student then mixes 5.00 mL of 2.00 × 10<sup>−3</sup> <i>M</i> Fe(NO<sub>3</sub>)<sub>3</sub> with 5.00 mL of 2.00 × 10<sup>−3</sup> <i>M</i> KSCN, and the absorbance of the resulting mixture, after equilibrium is reached, is 0.216."],
      [calTable],
      [
        P("A", "State the relationship between absorbance and concentration that is described by the Beer–Lambert law, and explain why the student sets the spectrophotometer to the wavelength at which the FeSCN<sup>2+</sup> absorbs most strongly.", [
          "For stating that absorbance is directly proportional to the concentration of the absorbing species (<i>A</i> = ε<i>bc</i>, with a constant path length)",
          "For explaining that the wavelength of maximum absorbance gives the greatest sensitivity (the largest change in absorbance for a given change in concentration) and the most reliable linear relationship",
        ], ["The Beer–Lambert law says that <i>A</i> = ε<i>bc</i>: for a fixed path length <i>b</i> and wavelength, absorbance is directly proportional to concentration, so a plot of absorbance against concentration for the standards is a straight line through the origin (here, slope 4.50 × 10<sup>3</sup> M<sup>−1</sup>). At the wavelength of maximum absorbance, ε is largest, so a small change in concentration produces the largest change in absorbance. That gives the best sensitivity and the smallest relative uncertainty."], { label: "Part A" }),
        P("B", "Use Table 1 to determine the equilibrium concentration of FeSCN<sup>2+</sup>(<i>aq</i>) in the student's mixture. Show your work.", [
          "For a correct concentration of about 4.80 × 10<sup>−5</sup> <i>M</i>, determined from the calibration relationship (<i>A</i> = 4.50 × 10<sup>3</sup> <i>M</i><sup>−1</sup> × [FeSCN<sup>2+</sup>]) or from the graph",
        ], [`The standards give a line through the origin with slope 0.360/(8.00 × 10<sup>−5</sup> <i>M</i>) = 4.50 × 10<sup>3</sup> <i>M</i><sup>−1</sup>. For <i>A</i> = 0.216: [FeSCN<sup>2+</sup>] = 0.216/(4.50 × 10<sup>3</sup> <i>M</i><sup>−1</sup>) = <b>4.80 × 10<sup>−5</sup> <i>M</i></b>.`], { label: "Part B" }),
        P("C", "Calculate the equilibrium concentrations of Fe<sup>3+</sup>(<i>aq</i>) and SCN<sup>−</sup>(<i>aq</i>) in the mixture. Show your work.", [
          "For correctly determining the initial concentrations after mixing (the volume doubles): 1.00 × 10<sup>−3</sup> <i>M</i> for each reactant",
          "For correct equilibrium concentrations, 9.52 × 10<sup>−4</sup> <i>M</i> for each, by subtracting 4.80 × 10<sup>−5</sup> <i>M</i> (the reaction uses Fe<sup>3+</sup> and SCN<sup>−</sup> in a 1:1:1 ratio)",
        ], [`Mixing equal volumes halves each concentration: initial [Fe<sup>3+</sup>] = [SCN<sup>−</sup>] = (2.00 × 10<sup>−3</sup> M)(5.00 mL/10.00 mL) = 1.00 × 10<sup>−3</sup> M. The reaction forms 4.80 × 10<sup>−5</sup> M FeSCN<sup>2+</sup>, which uses an equal amount of each reactant: [Fe<sup>3+</sup>] = [SCN<sup>−</sup>] = 1.00 × 10<sup>−3</sup> − 4.80 × 10<sup>−5</sup> = <b>9.52 × 10<sup>−4</sup> M</b>.`], { label: "Part C" }),
        P("D", "Calculate the value of the equilibrium constant, <i>K</i><sub>c</sub>, for the reaction. Show your work.", [
          "For a correct expression, <i>K</i><sub>c</sub> = [FeSCN<sup>2+</sup>]/([Fe<sup>3+</sup>][SCN<sup>−</sup>]), with the values from parts B and C substituted",
          "For a correct value of about 53 (<i>K</i><sub>c</sub> is unitless in AP Chemistry; an answer with units M<sup>−1</sup> is also accepted)",
        ], [`<i>K</i><sub>c</sub> = [FeSCN<sup>2+</sup>]/([Fe<sup>3+</sup>][SCN<sup>−</sup>]) = (4.80 × 10<sup>−5</sup>)/[(9.52 × 10<sup>−4</sup>)(9.52 × 10<sup>−4</sup>)] = <b>${Math.round(Kc)}</b>. The value is moderately greater than 1, so the products are somewhat favored at equilibrium at this temperature.`], { label: "Part D" }),
        P("E", "The student heats the equilibrium mixture and finds that the absorbance at 447 nm decreases. Is the forward reaction endothermic or exothermic? Justify your answer.", [
          "For indicating that the forward reaction is exothermic",
          "For reasoning that the lower absorbance means less FeSCN<sup>2+</sup>, so the equilibrium shifted toward the reactants when the temperature increased; a system shifts in the endothermic direction when heated, so the reverse reaction is endothermic and the forward reaction is exothermic",
        ], ["The forward reaction is <b>exothermic</b>. A smaller absorbance means a smaller concentration of FeSCN<sup>2+</sup>: heating shifted the equilibrium to the left (toward Fe<sup>3+</sup> and SCN<sup>−</sup>) and decreased <i>K</i>. By Le Châtelier's principle, adding thermal energy shifts a system in the direction that absorbs energy, which is the endothermic direction. The reverse reaction is therefore endothermic, and the forward reaction releases energy."], { label: "Part E" }),
        P("F", "Before measuring the absorbance of the equilibrium mixture, the student sets the absorbance of the spectrophotometer to zero using a cuvette filled with a \"blank\" that does not contain FeSCN<sup>2+</sup>. Explain the purpose of this step.", [
          "For explaining that the blank (solvent and cuvette without the absorbing species) corrects for light absorbed or scattered by the cuvette and solvent, so that the measured absorbance is due only to FeSCN<sup>2+</sup>",
        ], ["Light can be absorbed or scattered by the cuvette and the solvent as well as by the colored ion. Setting the absorbance of the blank to zero removes these contributions, so that the reading for the equilibrium mixture reflects only the absorbance of FeSCN<sup>2+</sup>, which is the quantity that is proportional to its concentration."], { label: "Part F" }),
      ]),

    Q("3", "Long Answer", 23,
      ["A student determines the percent by mass of sodium carbonate, Na<sub>2</sub>CO<sub>3</sub> (molar mass 105.99 g/mol), in an impure solid sample. The student dissolves a 1.250 g sample of the solid in water and titrates it with 0.500 <i>M</i> HCl(<i>aq</i>) until both of the H<sup>+</sup> ions needed per carbonate ion have been added (the equivalence point). The titration requires 21.30 mL of HCl(<i>aq</i>). Assume that the impurities do not react with HCl."],
      [],
      [
        P("A", "Write the balanced net ionic equation for the reaction that occurs between the carbonate ion and HCl(<i>aq</i>) up to the equivalence point.", [
          "For a correct balanced net ionic equation: CO<sub>3</sub><sup>2−</sup>(<i>aq</i>) + 2 H<sup>+</sup>(<i>aq</i>) → H<sub>2</sub>O(<i>l</i>) + CO<sub>2</sub>(<i>g</i>) (or → H<sub>2</sub>CO<sub>3</sub>(<i>aq</i>))",
        ], ["CO<sub>3</sub><sup>2−</sup>(<i>aq</i>) + 2 H<sup>+</sup>(<i>aq</i>) → H<sub>2</sub>O(<i>l</i>) + CO<sub>2</sub>(<i>g</i>). Two protons react with each carbonate ion, first forming HCO<sub>3</sub><sup>−</sup> and then H<sub>2</sub>CO<sub>3</sub>, which decomposes to CO<sub>2</sub> and water."], { label: "Part A" }),
        P("B", "Calculate the mass of Na<sub>2</sub>CO<sub>3</sub> in the sample. Show your work.", [
          "For the correct number of moles of HCl: (0.02130 L)(0.500 mol/L) = 0.01065 mol",
          "For using the 2:1 mole ratio to obtain 0.005325 mol of Na<sub>2</sub>CO<sub>3</sub>",
          "For the correct mass, about 0.564 g (0.005325 mol × 105.99 g/mol)",
        ], [`Moles of HCl = (0.02130 L)(0.500 mol/L) = ${nHCl.toFixed(5)} mol. From the equation, 2 mol HCl react per 1 mol Na<sub>2</sub>CO<sub>3</sub>, so moles of Na<sub>2</sub>CO<sub>3</sub> = ${nHCl.toFixed(5)}/2 = ${nNa2CO3.toFixed(6)} mol. Mass = (${nNa2CO3.toFixed(6)} mol)(105.99 g/mol) = <b>${mNa2CO3.toFixed(3)} g</b>.`], { label: "Part B" }),
        P("C", "Calculate the percent by mass of Na<sub>2</sub>CO<sub>3</sub> in the 1.250 g sample. Show your work.", [
          "For dividing the mass of Na<sub>2</sub>CO<sub>3</sub> by the mass of the sample and multiplying by 100",
          "For a correct value of about 45.2%",
        ], [`Percent by mass = (mass of Na<sub>2</sub>CO<sub>3</sub>/mass of sample)(100) = (${mNa2CO3.toFixed(4)} g / 1.250 g)(100) = <b>${pct.toFixed(1)}%</b> Na<sub>2</sub>CO<sub>3</sub>. The remaining 54.8% of the sample is impurities that do not react with HCl.`], { label: "Part C" }),
        P("D", "The student accidentally adds a little too much HCl, so that the volume of HCl recorded is greater than the volume needed to reach the equivalence point. Indicate whether the calculated percent by mass of Na<sub>2</sub>CO<sub>3</sub> is too high, too low, or unaffected. Justify your answer.", [
          "For indicating that the calculated percent is too high",
          "For reasoning that a larger recorded volume of HCl gives a larger calculated number of moles of HCl and therefore of Na<sub>2</sub>CO<sub>3</sub> (and a larger mass and percent)",
        ], ["The calculated percent is <b>too high</b>. The calculation assumes that every mole of HCl added reacted with carbonate. If the recorded volume is larger than the true equivalence volume, the calculated moles of HCl, moles of Na<sub>2</sub>CO<sub>3</sub>, mass of Na<sub>2</sub>CO<sub>3</sub>, and percent by mass are all larger than the true values."], { label: "Part D" }),
        P("E", "At the equivalence point, the solution is acidic (pH &lt; 7) even though the NaCl that has formed is a neutral salt. Explain this observation in terms of the species formed in the titration.".replace("&lt;", "<"), [
          "For identifying that dissolved CO<sub>2</sub>, which is present as carbonic acid, H<sub>2</sub>CO<sub>3</sub>, is a weak acid",
          "For explaining that H<sub>2</sub>CO<sub>3</sub> ionizes slightly in water (H<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>O ⇌ HCO<sub>3</sub><sup>−</sup> + H<sub>3</sub>O<sup>+</sup>), producing H<sub>3</sub>O<sup>+</sup>, while Na<sup>+</sup> and Cl<sup>−</sup> do not react with water",
        ], ["The Na<sup>+</sup> and Cl<sup>−</sup> ions come from a strong base and a strong acid and have no effect on pH. However, the reaction produces CO<sub>2</sub>, which dissolves in the water as carbonic acid, H<sub>2</sub>CO<sub>3</sub>, a weak acid. It ionizes slightly: H<sub>2</sub>CO<sub>3</sub>(<i>aq</i>) + H<sub>2</sub>O(<i>l</i>) ⇌ HCO<sub>3</sub><sup>−</sup>(<i>aq</i>) + H<sub>3</sub>O<sup>+</sup>(<i>aq</i>), which makes the solution acidic (a pH of about 4 for a saturated CO<sub>2</sub> solution)."], { label: "Part E" }),
      ]),

    Q("4", "Short Answer", 9,
      ["A compound A decomposes in a sealed container at constant temperature according to the equation A(<i>g</i>) → products. The concentration of A is measured over time, as shown in Table 1."],
      [kTable],
      [
        P("A", "Determine the order of the reaction with respect to A. Justify your answer using the data in Table 1.", [
          "For indicating that the reaction is first order in A",
          "For justifying with a constant half-life: [A] falls from 0.800 <i>M</i> to 0.400 <i>M</i> in 200 s and from 0.400 <i>M</i> to 0.200 <i>M</i> in the next 200 s (or ln[A] versus time is linear)",
        ], ["The reaction is <b>first order</b> in A. The concentration is cut in half every 200 s: 0.800 M at 0 s, 0.400 M at 200 s, and 0.200 M at 400 s. A constant half-life that does not depend on the starting concentration is the signature of a first-order reaction. (A graph of ln[A] versus time would also be a straight line.)"], { label: "Part A" }),
        P("B", "Calculate the value of the rate constant, <i>k</i>, for the reaction. Include units. Show your work.", [
          "For using <i>t</i><sub>1/2</sub> = ln 2/<i>k</i> (or the integrated rate law ln[A]<sub>0</sub>/[A] = <i>kt</i>) with a correct value substituted",
          "For the correct value of <i>k</i> = 3.5 × 10<sup>−3</sup> s<sup>−1</sup> (with units of s<sup>−1</sup>)",
        ], [`For a first-order reaction, <i>k</i> = ln 2/<i>t</i><sub>1/2</sub> = 0.693/(200 s) = <b>${(kfirst * 1000).toFixed(2)} × 10<sup>−3</sup> s<sup>−1</sup></b>. Check with the integrated rate law at <i>t</i> = 400 s: ln(0.800/0.200) = 1.386 = <i>k</i>(400 s), giving the same value.`], { label: "Part B" }),
      ]),

    Q("5", "Short Answer", 9,
      ["Sulfur dioxide, SO<sub>2</sub>, and carbon dioxide, CO<sub>2</sub>, are both triatomic molecules in which a central atom is bonded to two oxygen atoms. Sulfur dioxide is a polar molecule, but carbon dioxide is nonpolar."],
      [],
      [
        P("A", "Draw a Lewis diagram for SO<sub>2</sub> that has a double bond and a single bond, and predict its molecular geometry.", [
          "For a correct Lewis diagram with 18 valence electrons: sulfur in the center bonded to two oxygen atoms (one double bond, one single bond), a lone pair on sulfur, and the correct lone pairs on the oxygen atoms",
          "For predicting a bent (angular) molecular geometry, justified by three electron domains (two bonds and one lone pair) around sulfur",
        ], ["The total number of valence electrons is 6 + 6 + 6 = 18. In the Lewis diagram sulfur is the central atom, with one double bond to one oxygen, one single bond to the other oxygen, one lone pair on sulfur, two lone pairs on the doubly bonded oxygen, and three lone pairs on the singly bonded oxygen. Sulfur has three electron domains (two bonding, one nonbonding), arranged in a trigonal planar electron geometry; the molecular geometry is therefore <b>bent</b>."], { label: "Part A", paper: true, modelFigures: [so2] }),
        P("B", "Explain, in terms of molecular geometry and bond polarity, why SO<sub>2</sub> is polar but CO<sub>2</sub> is nonpolar.", [
          "For explaining that both molecules have polar bonds (the central atom–oxygen bonds have a dipole toward oxygen)",
          "For explaining that CO<sub>2</sub> is linear, so the two bond dipoles point in opposite directions and cancel, whereas SO<sub>2</sub> is bent, so the bond dipoles do not cancel and the molecule has a net dipole moment",
        ], ["The S–O and C–O bonds are both polar, with oxygen (more electronegative) as the negative end. CO<sub>2</sub> has no lone pairs on carbon, so it is <b>linear</b>: the two equal bond dipoles point in opposite directions and cancel, so the molecule is nonpolar. SO<sub>2</sub> has a lone pair on sulfur and is <b>bent</b>: the two bond dipoles point partly in the same direction and add to give a net dipole moment pointing between the oxygen atoms, so the molecule is polar."], { label: "Part B" }),
      ]),

    Q("6", "Short Answer", 9,
      ["A student must prepare 250.0 mL of 0.100 <i>M</i> NaCl(<i>aq</i>) by diluting a stock solution of 2.00 <i>M</i> NaCl(<i>aq</i>) with distilled water in a 250.0 mL volumetric flask."],
      [],
      [
        P("A", "Calculate the volume of the stock solution that the student must transfer to the volumetric flask. Show your work.", [
          "For using the dilution relationship, <i>M</i><sub>1</sub><i>V</i><sub>1</sub> = <i>M</i><sub>2</sub><i>V</i><sub>2</sub>, with correct values substituted",
          "For the correct volume of 12.5 mL",
        ], [`<i>M</i><sub>1</sub><i>V</i><sub>1</sub> = <i>M</i><sub>2</sub><i>V</i><sub>2</sub>: (2.00 M)<i>V</i><sub>1</sub> = (0.100 M)(250.0 mL), so <i>V</i><sub>1</sub> = <b>${V1.toFixed(1)} mL</b>. The moles of NaCl are the same before and after dilution (0.0250 mol).`], { label: "Part A" }),
        P("B", "When adding distilled water, the student accidentally fills the flask a little above the 250.0 mL mark. Is the concentration of the resulting solution greater than, less than, or equal to 0.100 <i>M</i>? Justify your answer.", [
          "For indicating that the concentration is less than 0.100 M",
          "For reasoning that the moles of NaCl are unchanged but the total volume is greater than 250.0 mL, so the concentration (moles ÷ volume) is smaller",
        ], ["The concentration is <b>less than</b> 0.100 M. The amount of NaCl is fixed at 0.0250 mol by the 12.5 mL of stock solution that was transferred. If the final volume is larger than 250.0 mL, then <i>M</i> = (0.0250 mol)/(a volume greater than 0.2500 L), which is less than 0.100 M."], { label: "Part B" }),
      ]),

    Q("7", "Short Answer", 9,
      ["The standard enthalpies of the following reactions are known:", "(1) C(<i>s</i>) + O<sub>2</sub>(<i>g</i>) → CO<sub>2</sub>(<i>g</i>)  Δ<i>H</i>° = −393.5 kJ/mol<sub>rxn</sub>", "(2) H<sub>2</sub>(<i>g</i>) + ½ O<sub>2</sub>(<i>g</i>) → H<sub>2</sub>O(<i>l</i>)  Δ<i>H</i>° = −285.8 kJ/mol<sub>rxn</sub>", "(3) C<sub>2</sub>H<sub>6</sub>(<i>g</i>) + 7/2 O<sub>2</sub>(<i>g</i>) → 2 CO<sub>2</sub>(<i>g</i>) + 3 H<sub>2</sub>O(<i>l</i>)  Δ<i>H</i>° = −1560 kJ/mol<sub>rxn</sub>"],
      [],
      [
        P("A", "Use the information to calculate the standard enthalpy of formation of ethane, C<sub>2</sub>H<sub>6</sub>(<i>g</i>), for the reaction 2 C(<i>s</i>) + 3 H<sub>2</sub>(<i>g</i>) → C<sub>2</sub>H<sub>6</sub>(<i>g</i>). Show your work.", [
          "For reversing equation (3), which changes the sign of its Δ<i>H</i>° (+1560 kJ)",
          "For multiplying equation (1) by 2 and equation (2) by 3 (−787.0 kJ and −857.4 kJ)",
          "For the correct sum, Δ<i>H</i><sub>f</sub>° = −84.4 kJ/mol",
        ], [`Ethane must appear as a product, so reverse (3): 2 CO<sub>2</sub> + 3 H<sub>2</sub>O → C<sub>2</sub>H<sub>6</sub> + 7/2 O<sub>2</sub>, Δ<i>H</i> = +1560 kJ. The carbon is supplied by 2 × (1): 2 C + 2 O<sub>2</sub> → 2 CO<sub>2</sub>, Δ<i>H</i> = −787.0 kJ; the hydrogen is supplied by 3 × (2): 3 H<sub>2</sub> + 3/2 O<sub>2</sub> → 3 H<sub>2</sub>O, Δ<i>H</i> = −857.4 kJ. Adding the three equations, the CO<sub>2</sub>, H<sub>2</sub>O, and O<sub>2</sub> cancel, leaving 2 C + 3 H<sub>2</sub> → C<sub>2</sub>H<sub>6</sub>. Δ<i>H</i><sub>f</sub>° = +1560 − 787.0 − 857.4 = <b>${dHf.toFixed(1)} kJ/mol</b>.`], { label: "Part A" }),
        P("B", "Is the formation of ethane from its elements an endothermic or an exothermic process? Justify your answer.", [
          "For indicating that the formation is exothermic, because Δ<i>H</i>° is negative (energy is released)",
        ], ["The formation of ethane from its elements is <b>exothermic</b>, because Δ<i>H</i><sub>f</sub>° = −84.4 kJ/mol is negative: the products (the bonds in ethane) are lower in enthalpy than the reactants (graphite and H<sub>2</sub>), and energy is released to the surroundings."], { label: "Part B" }),
      ]),
  ],
});
