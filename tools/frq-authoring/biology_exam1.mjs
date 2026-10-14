// AP Biology FRQ — Exam 1 (34 points, 90 minutes)
import { exam, P, Q, fig, table } from "./frqlib.mjs";
import { pedigree, chart, COL } from "./biofrqfigs.mjs";

// ---------- Q2: potato osmosis ----------
const sucrose = [0.0, 0.2, 0.4, 0.6, 0.8];
const pctChange = [18.0, 9.0, -1.0, -11.5, -20.0];
const se = [1.5, 1.2, 1.0, 1.3, 1.6];
// x-intercept by interpolation between 0.2 and 0.4 M
const iso = 0.2 + (9.0 / (9.0 - -1.0)) * 0.2;           // 0.38 M
const final06 = 4.20 * (1 + pctChange[3] / 100);         // 3.717 g
if (Math.abs(iso - 0.38) > 1e-9 || Math.abs(final06 - 3.717) > 0.001) throw new Error("potato");

// model graph for Q2 Part A
const potatoModel = fig(chart({
  w: 520, h: 320, x: [0, 0.8, 0.2], y: [-25, 25, 5], xLabel: "Sucrose concentration (M)", yLabel: "Mean change in mass (%)",
  series: [{ name: "mean", pts: sucrose.map((s, i) => [s, pctChange[i]]), color: COL.a, markers: true }],
  annotations: [{ type: "hline", y: 0 }, { type: "dot", x: iso, y: 0, fill: COL.b }, { type: "text", x: iso + 0.02, y: 4, s: "≈ 0.38 M (isotonic)", size: 12 }],
}), "A line graph of mean percent change in mass versus sucrose concentration. The points fall from plus 18 percent at 0.0 molar to minus 20 percent at 0.8 molar, crossing zero near 0.38 molar.",
{ caption: "Model graph: independent variable (sucrose molarity) on the horizontal axis with units, dependent variable (mean % change in mass) on the vertical axis, plotted points joined or fitted; the line crosses 0% near 0.38 M." });

const t1 = table(["Temperature (°C)", "Time for complete starch digestion (s)"], [["10", "420"], ["25", "150"], ["37", "60"], ["50", "110"], ["70", "No digestion in 600 s"]], "Table 1. Effect of temperature on amylase activity (pH 7).");
const t2 = table(["pH of reaction mixture", "Time for complete starch digestion (s)"], [["3", "No digestion in 600 s"], ["5", "140"], ["7", "60"], ["9", "180"]], "Table 2. Effect of pH on amylase activity (37 °C).");
const t3 = table(["Sucrose concentration (M)", "Mean change in mass (%)", "Standard error (± SE)"], sucrose.map((s, i) => [s.toFixed(1), (pctChange[i] > 0 ? "+" : "−") + Math.abs(pctChange[i]).toFixed(1), se[i].toFixed(1)]), "Table 1. Change in mass of potato cores after 24 hours (n = 5 cores per solution).");

// ---------- Q5: pedigree ----------
const ped = fig(pedigree({
  people: [
    { id: "I1", x: 150, y: 50, sex: "M", aff: false, label: "I-1" }, { id: "I2", x: 270, y: 50, sex: "F", aff: false, label: "I-2" },
    { id: "II1", x: 100, y: 170, sex: "F", aff: true, label: "II-1" }, { id: "II2", x: 210, y: 170, sex: "M", aff: false, label: "II-2" }, { id: "II3", x: 320, y: 170, sex: "F", aff: false, label: "II-3" },
  ],
  couples: [["I1", "I2"]],
  kids: [{ parents: ["I1", "I2"], kids: ["II1", "II2", "II3"] }],
  W: 420, H: 250,
}), "A pedigree. Generation I: an unaffected male I-1 and an unaffected female I-2 are a couple. Generation II: their three children are an affected female II-1 (shaded circle), an unaffected male II-2 and an unaffected female II-3.",
{ caption: "Figure 1. Pedigree for a rare trait. Squares are males, circles are females, and a shaded symbol is an individual with the trait." });

export default exam({
  id: "exam1",
  title: "Exam 1",
  description: "A full-length, six-question free-response exam: enzyme activity, osmosis in potato cores, an algae investigation, mutations, a pedigree, and Hardy–Weinberg data.",
  minutes: 90,
  topics: ["Unit 3 — Cellular energetics (enzymes: temperature and pH)", "Unit 2 — Cell structure and function (osmosis and water potential)", "Unit 3 — Cellular energetics (photosynthesis and pigments)", "Unit 6 — Gene expression and regulation (transcription, translation, mutations)", "Unit 5 — Heredity (pedigrees)", "Unit 7 — Natural selection (Hardy–Weinberg equilibrium)"],
  questions: [
    Q("1", "Interpreting and Evaluating Experimental Results", 25,
      ["Salivary amylase is an enzyme that catalyzes the hydrolysis of starch into the sugar maltose. A student investigated how temperature and pH affect the activity of amylase. In each trial, the student mixed 5.0 mL of a starch solution with 1.0 mL of amylase solution in a test tube and removed a drop of the mixture every 10 seconds. Each drop was added to iodine solution, which turns blue-black in the presence of starch. The time at which a drop no longer turned blue-black was recorded as the time for complete starch digestion. The student ran one set of trials at different temperatures with the pH kept at 7 (Table 1) and another set at different values of pH with the temperature kept at 37 °C (Table 2)."],
      [t1, t2],
      [
        P("A", "Describe how the structure of an enzyme allows it to catalyze a reaction.", [
          "For describing that the enzyme has an active site whose shape fits the substrate, and that binding the substrate at the active site lowers the activation energy of the reaction (so the reaction proceeds faster)",
        ], ["An enzyme is a protein with a three-dimensional shape that forms an active site complementary to its substrate. When the substrate binds at the active site, the enzyme stabilizes the transition state and lowers the activation energy needed for the reaction, so the reaction occurs much faster. The enzyme is not consumed and can be used again."], { label: "Part A" }),
        P("B (i)", "Identify the independent variable and the dependent variable in the experiment summarized in Table 1.", [
          "For identifying the independent variable as temperature, and the dependent variable as the time for complete digestion of starch (a measure of the rate of the reaction)",
        ], ["The independent variable (the factor the student changed) is the <b>temperature</b>. The dependent variable (the factor measured) is the <b>time required for complete starch digestion</b>, which indicates the rate of amylase activity: a shorter time means a faster reaction."], { label: "Part B (i)" }),
        P("B (ii)", "Identify one variable that the student should keep constant in the experiment summarized in Table 1.", [
          "For identifying a valid constant (controlled) variable, such as the pH, the volume or concentration of starch, the volume or concentration of amylase, or the volume of iodine and the timing of sampling",
        ], ["Any one of: pH (kept at 7), the volume and concentration of the starch solution, the volume and concentration of the amylase solution, or the sampling procedure (drop size and timing). Keeping these constant ensures that any difference in digestion time is caused by the temperature."], { label: "Part B (ii)" }),
        P("C", "Based on the data in Table 1, describe the effect of increasing temperature on the activity of amylase, and explain why no starch digestion occurred at 70 °C.", [
          "For describing that the rate of the reaction increases as temperature rises from 10 °C to an optimum near 37 °C (the digestion time decreases from 420 s to 60 s) and then decreases at higher temperatures (110 s at 50 °C)",
          "For explaining that at 70 °C the enzyme is denatured: high temperature disrupts the bonds that maintain the protein's three-dimensional shape, so the active site is no longer functional and the substrate cannot bind",
        ], ["Between 10 °C and 37 °C the digestion time falls from 420 s to 60 s, so the activity increases with temperature (molecules move faster and collide with the enzyme more often). The activity is greatest near 37 °C, and by 50 °C it is lower (110 s). At 70 °C there was no digestion: the high temperature <b>denatured</b> the amylase. The hydrogen bonds and other interactions that hold the protein in its specific shape were disrupted, so the active site changed shape and could no longer bind starch."], { label: "Part C", tip: "Use numbers from the table to describe the trend, and call the loss of activity at 70 °C <em>denaturation</em> (the active site changes shape), not “the enzyme dies.”" }),
        P("D", "Pepsin, an enzyme in the stomach, works best at about pH 2. Predict the time for complete starch digestion if the student repeated the pH experiment at pH 2, and justify your prediction using the data in Table 2.", [
          "For predicting that there would be no digestion within 600 s (or an extremely long time) at pH 2",
          "For justifying that, like the result at pH 3, extreme acidity alters the charges on amino acid side chains and disrupts the enzyme's shape, so amylase (which has an optimum near pH 7) would be denatured/inactive",
        ], ["I predict <b>no digestion</b> within 600 s at pH 2. Table 2 shows that the time increases as the pH moves away from 7 (180 s at pH 9, 140 s at pH 5) and that there was no digestion at pH 3. At pH 2 the solution is even more acidic, so the excess H<sup>+</sup> would change the charge of the amino acid side chains, disrupt the ionic and hydrogen bonds that maintain the enzyme's tertiary structure, and deform the active site. Amylase is adapted to near-neutral conditions, unlike pepsin."], { label: "Part D" }),
        P("E", "The student also set up a tube containing starch solution and water but no amylase. Justify the inclusion of this tube in the experiment.", [
          "For justifying that this tube is a negative control that shows that the starch is not broken down without the enzyme (so that the digestion seen in the other tubes is due to the amylase)",
        ], ["The tube without amylase is a <b>negative control</b>. If its drops still turned blue-black throughout the experiment, the student would know that starch does not disappear spontaneously or because of the other components, so the loss of starch in the other tubes can be attributed to the activity of amylase."], { label: "Part E" }),
        P("F", "Using the data in Table 1, calculate the percent decrease in the time for complete starch digestion when the temperature was increased from 10 °C to 37 °C. Show your work.", [
          "For a correct calculation: (420 s − 60 s)/420 s × 100 = 85.7% (about 86%)",
        ], ["Percent decrease = [(original − new)/original] × 100 = [(420 s − 60 s)/420 s] × 100 = 360/420 × 100 = <b>85.7%</b> (about 86%). The reaction at 37 °C took only about one-seventh as long as at 10 °C."], { label: "Part F" }),
      ]),

    Q("2", "Interpreting and Evaluating Experimental Results with Graphing", 25,
      ["A student investigated osmosis using potato cores. The student cut cores of potato tissue, determined the mass of each core, and placed five cores into each of five beakers containing different concentrations of sucrose solution. After 24 hours the student removed the cores, blotted them dry, determined their masses again, and calculated the percent change in mass. The data are shown in Table 1. Assume that the potato cells were alive and the tissue was permeable to water but not to sucrose."],
      [t3],
      [
        P("A", "On paper, construct an appropriately labeled graph of the mean percent change in mass versus sucrose concentration.", [
          "For correctly labeling and scaling the axes: sucrose concentration (M) on the horizontal axis (independent variable) and mean percent change in mass on the vertical axis, with appropriate scales that include negative values",
          "For correctly plotting all five data points and connecting them with a line or best-fit line (error bars may be included)",
        ], ["Plot sucrose concentration (M, 0.0–0.8) on the horizontal axis and the mean percent change in mass (about −25 to +25) on the vertical axis, with equal intervals on each axis and units shown. Plot the five means (0.0, +18.0), (0.2, +9.0), (0.4, −1.0), (0.6, −11.5), (0.8, −20.0) and connect them with a line; error bars of ± SE may be added."], { label: "Part A", paper: true, modelFigures: [potatoModel] }),
        P("B", "Using your graph, determine the sucrose concentration at which there would be no net change in the mass of the potato cores.", [
          "For a value of about 0.35–0.40 M, read from the point where the line crosses 0% change (interpolated between 0.2 M and 0.4 M)",
        ], ["The line crosses 0% change between 0.2 M (+9.0%) and 0.4 M (−1.0%). Interpolating, the crossing is at 0.2 + (9.0/10.0)(0.2) ≈ <b>0.38 M</b> (any value from about 0.35 to 0.40 M is acceptable). At this concentration the potato tissue and the solution have the same water potential (they are isotonic)."], { label: "Part B" }),
        P("C", "Using the concept of water potential, explain the change in mass of the potato cores (i) in the 0.0 M solution and (ii) in the 0.8 M solution.", [
          "For explaining that in 0.0 M sucrose (pure water), the water potential of the solution is higher than that inside the cells, so water moves into the cells by osmosis and the cores gain mass",
          "For explaining that in 0.8 M sucrose, the solution has a lower water potential than the cells, so water moves out of the cells (toward the lower water potential) and the cores lose mass",
        ], ["Water moves by osmosis from a region of higher water potential to a region of lower water potential. (i) Pure water has the highest water potential (0), higher than that of the potato cells, which contain dissolved solutes, so water enters the cells and the mass increases by 18%. (ii) A 0.8 M sucrose solution has a very low (negative) solute potential, lower than that of the potato cells, so water leaves the cells and the mass decreases by about 20%."], { label: "Part C", tip: "Water moves toward the <em>lower water potential</em>. Phrases such as “toward the higher concentration of water” are not accepted." }),
        P("D", "A potato core in the 0.6 M solution had an initial mass of 4.20 g. Calculate the final mass of this core if it changed by the mean percentage in Table 1.", [
          "For a correct final mass, about 3.72 g (4.20 g × (1 − 0.115) = 3.717 g)",
        ], [`The mean change was −11.5%, so the final mass = (4.20 g)(1 − 0.115) = 4.20 g − 0.483 g = <b>${final06.toFixed(2)} g</b> (3.717 g before rounding).`], { label: "Part D" }),
        P("E", "The student repeats the experiment using NaCl solutions in place of sucrose solutions. Predict how the concentration (in M) of NaCl at which there is no net change in mass will compare with the value in part B, and justify your prediction.", [
          "For predicting that the NaCl concentration would be lower (about half)",
          "For justifying that NaCl dissociates into two ions (Na<sup>+</sup> and Cl<sup>−</sup>) in solution, so each mole of NaCl provides about twice as many solute particles as a mole of sucrose, which does not dissociate; water potential depends on the number of dissolved particles",
        ], ["The no-net-change concentration would be <b>lower</b>, about 0.19 M. Water potential depends on the total concentration of dissolved particles. Sucrose stays as one particle per molecule, whereas each NaCl formula unit dissociates into two ions. Therefore a NaCl solution has about twice as many solute particles per liter as a sucrose solution of the same molarity, and only about half the molarity is needed to match the water potential of the potato cells."], { label: "Part E" }),
        P("F", "Explain why the student blotted the potato cores dry before determining their final masses.", [
          "For explaining that blotting removes the solution clinging to the surface, which would otherwise add mass and make the final mass appear larger than the mass of the tissue itself",
        ], ["The solution on the surface of a core has a mass that is not part of the potato tissue. If it were not blotted off, the final mass would include this extra water and sugar, which would make the percent change in mass larger (less negative) than the true change caused by osmosis, so the data would not accurately reflect water movement into or out of the cells."], { label: "Part F" }),
      ]),

    Q("3", "Scientific Investigation", 10,
      ["A student hypothesizes that green algae will grow faster when exposed to red light than when exposed to green light. The student has cultures of identical green algae, a growth medium, a light source, and red and green filters."],
      [],
      [
        P("A", "Identify the independent variable and one variable that must be held constant in an experiment to test the student's hypothesis.", [
          "For identifying the independent variable as the color (wavelength) of the light, and a valid constant such as light intensity, temperature, growth medium, volume or starting number of algae cells, or duration of exposure",
        ], ["The independent variable is the <b>color of the light</b> (red versus green). Variables that must be kept constant include the light intensity, the temperature, the volume and composition of the growth medium, and the starting number of algae cells, so that any difference in growth is caused by the light color."], { label: "Part A" }),
        P("B", "Describe a measurement the student could make to determine the growth of the algae in each culture.", [
          "For describing a valid measure of growth, such as counting cells with a hemocytometer, measuring the turbidity/absorbance of the culture with a spectrophotometer, or measuring the dry mass of algae, taken at the start and at regular intervals",
        ], ["The student could measure the turbidity of each culture with a spectrophotometer (absorbance increases as cells multiply), or count the cells in a small sample on a hemocytometer slide, at the start and at regular time intervals. Either allows growth rates in the two cultures to be compared."], { label: "Part B" }),
        P("C", "Predict the results of the experiment if the student's hypothesis is correct.", [
          "For predicting that the algae in red light will show greater growth (higher cell count or turbidity, increasing faster over time) than the algae in green light",
        ], ["If the hypothesis is correct, the culture in red light will have a greater increase in cell number (or turbidity) over time than the culture in green light."], { label: "Part C" }),
        P("D", "Justify the student's prediction using the absorption of light by photosynthetic pigments.", [
          "For justifying that chlorophyll absorbs red (and blue) light strongly but reflects/transmits green light, so there is more light energy for the light reactions of photosynthesis in red light",
        ], ["Chlorophyll <i>a</i> and <i>b</i> absorb red and blue wavelengths strongly, but they absorb green light poorly (they reflect it, which is why plants and algae look green). Under red light the algae capture much more light energy for the light-dependent reactions, so they make more ATP and NADPH for carbon fixation and grow faster than under green light."], { label: "Part D", tip: "Green light is not “useless”: it is poorly absorbed. Say that chlorophyll absorbs red and blue light strongly and reflects green." }),
      ]),

    Q("4", "Conceptual Analysis", 10,
      ["Mutations in DNA can alter the proteins that a cell makes. Consider a gene that is transcribed and translated in a eukaryotic cell."],
      [],
      [
        P("A", "Describe how the mRNA that is translated is produced from the DNA template during transcription.", [
          "For describing that RNA polymerase binds to the promoter and synthesizes an mRNA strand complementary to the DNA template strand, using RNA nucleotides (with U pairing with A)",
        ], ["During transcription, RNA polymerase binds to the promoter, separates the DNA strands, and reads the template strand 3′ to 5′, adding complementary RNA nucleotides (A–U, G–C, T–A, C–G) to build the mRNA strand in the 5′ to 3′ direction. In eukaryotes, this primary transcript is then processed (5′ cap, poly-A tail, and removal of introns) before translation."], { label: "Part A" }),
        P("B", "A single-nucleotide substitution in the third position of a codon sometimes does not change the amino acid in the protein. Explain why.", [
          "For explaining that the genetic code is redundant (degenerate): more than one codon can specify the same amino acid, so some changes in the third base result in a codon for the same amino acid (a silent mutation)",
        ], ["The genetic code is redundant: most amino acids are specified by more than one codon, and the codons for the same amino acid usually differ only in the third nucleotide. A substitution at the third position can therefore produce a different codon for the <i>same</i> amino acid (for example, GAA and GAG both code for glutamic acid), leaving the protein unchanged: a silent mutation."], { label: "Part B", tip: "Use the key term: the genetic code is <em>redundant</em> (degenerate). More than one codon can code for the same amino acid." }),
        P("C", "A different mutation changes a codon in the middle of the coding sequence into a stop codon. Predict the effect of this mutation on the protein, and justify your prediction.", [
          "For predicting that a shortened (truncated) protein is made, which is likely nonfunctional",
          "For justifying that translation ends at the stop codon, so the amino acids coded for by the rest of the sequence are not added, and the missing part (probably including functional domains) changes the protein's structure",
        ], ["The cell would produce a <b>truncated protein</b> that is likely nonfunctional. When the ribosome reaches the new stop codon, release factors cause translation to end, so the polypeptide contains only the amino acids coded before the mutation. Because the protein's function depends on its complete three-dimensional structure, the missing portion (which may include the active site or other domains) would usually prevent the protein from functioning."], { label: "Part C" }),
      ]),

    Q("5", "Analyze a Model or Visual Representation", 10,
      ["Figure 1 shows a pedigree for a rare genetic trait."],
      [ped],
      [
        P("A", "Identify the most likely mode of inheritance of the trait, and justify your answer using the pedigree.", [
          "For identifying autosomal recessive inheritance",
          "For justifying that two unaffected parents (I-1 and I-2) have an affected daughter (II-1), so the trait is recessive and both parents are carriers; an affected daughter of an unaffected father rules out X-linked recessive inheritance",
        ], ["The most likely mode is <b>autosomal recessive</b>. Two unaffected parents had an affected child, so the trait must be recessive and masked in the parents (who are carriers). Because the affected child is a daughter and her father (I-1) is unaffected, the trait cannot be X-linked recessive: an affected daughter would have to inherit an X chromosome with the recessive allele from her father, who would then be affected."], { label: "Part A" }),
        P("B", "Using <i>A</i> for the dominant allele and <i>a</i> for the recessive allele, give the genotype of individual I-1 and explain how you know it.", [
          "For giving the genotype <i>Aa</i> for I-1, because he is unaffected (has at least one <i>A</i>) and had an affected child (II-1, <i>aa</i>) who must have received an <i>a</i> allele from him",
        ], ["I-1 is <b><i>Aa</i></b>. He is unaffected, so he has at least one dominant <i>A</i>. His daughter II-1 is affected and must be <i>aa</i>, so she received one <i>a</i> from each parent; therefore I-1 must carry an <i>a</i> allele."], { label: "Part B" }),
        P("C", "Determine the probability that the unaffected individual II-2 is a carrier of the recessive allele. Show your reasoning.", [
          "For the correct probability of 2/3, because both parents are <i>Aa</i> (the cross <i>Aa</i> × <i>Aa</i> produces 1/4 <i>AA</i>, 1/2 <i>Aa</i>, 1/4 <i>aa</i>), and II-2 is known to be unaffected, so the <i>aa</i> outcome is eliminated: (1/2)/(3/4) = 2/3",
        ], ["Both parents are carriers (<i>Aa</i> × <i>Aa</i>), so the possible offspring are 1/4 <i>AA</i>, 2/4 <i>Aa</i>, and 1/4 <i>aa</i>. II-2 is unaffected, which eliminates <i>aa</i>. Among the remaining 3/4 of the offspring, 2/4 are carriers, so the probability that II-2 is a carrier is (2/4)/(3/4) = <b>2/3</b>."], { label: "Part C", tip: "The answer is 2/3 because the <i>aa</i> outcome is removed from the possibilities for an unaffected child. A probability of 1/2 ignores that information." }),
      ]),

    Q("6", "Analyze Data", 10,
      ["In a population of 500 beetles, body color is determined by one gene with two alleles: a dominant allele <i>G</i> for black and a recessive allele <i>g</i> for green. Of the 500 beetles, 80 have green bodies. Assume that the population is in Hardy–Weinberg equilibrium."],
      [],
      [
        P("A", "Calculate the frequency of the recessive allele, <i>q</i>, and the frequency of the dominant allele, <i>p</i>, in the population. Show your work.", [
          "For a correct calculation of <i>q</i> = √(80/500) = √0.16 = 0.40 and <i>p</i> = 1 − <i>q</i> = 0.60",
        ], ["The green beetles are homozygous recessive (<i>gg</i>), so <i>q</i><sup>2</sup> = 80/500 = 0.16 and <i>q</i> = √0.16 = <b>0.40</b>. Because <i>p</i> + <i>q</i> = 1, <i>p</i> = 1 − 0.40 = <b>0.60</b>."], { label: "Part A" }),
        P("B", "Calculate the number of beetles in the population that are heterozygous (<i>Gg</i>). Show your work.", [
          "For a correct number of heterozygotes: 2<i>pq</i> = 2(0.60)(0.40) = 0.48, and 0.48 × 500 = 240 beetles",
        ], ["The frequency of heterozygotes is 2<i>pq</i> = 2(0.60)(0.40) = 0.48. The number of heterozygous beetles = 0.48 × 500 = <b>240</b>."], { label: "Part B", tip: "2<i>pq</i> is a <em>frequency</em>. Multiply by the population size (500) to get the number of heterozygous beetles." }),
        P("C", "A population is in Hardy–Weinberg equilibrium only if certain conditions are met. Identify one condition, and predict how the frequency of the <i>g</i> allele would change over several generations if birds preferentially ate green beetles, and justify your prediction.", [
          "For identifying a valid condition for Hardy–Weinberg equilibrium, such as random mating, a very large population, no natural selection, no mutation, or no gene flow (migration)",
          "For predicting that the frequency of the <i>g</i> allele would decrease, because the green beetles (<i>gg</i>) would be removed (selected against) at a higher rate and would pass fewer <i>g</i> alleles to the next generation",
        ], ["One condition is that there is <b>no natural selection</b> (all genotypes survive and reproduce equally); others are random mating, a very large population, no mutation, and no migration. If birds preferentially ate green beetles, this would be natural selection against the <i>gg</i> genotype. Fewer green beetles would survive to reproduce, so fewer <i>g</i> alleles would be passed on, and the frequency of <i>g</i> would <b>decrease</b> over generations (although the allele would remain in the population in heterozygous <i>Gg</i> beetles)."], { label: "Part C" }),
      ]),
  ],
});
