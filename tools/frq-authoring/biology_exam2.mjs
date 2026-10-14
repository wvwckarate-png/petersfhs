// AP Biology FRQ — Exam 2 (34 points, 90 minutes)
import { exam, P, Q, fig, table } from "./frqlib.mjs";
import { chart, gel, uTube, COL } from "./biofrqfigs.mjs";

// ---------- Q2: logistic growth ----------
const K = 500, N0 = 20, r = 0.5;
const days = [0, 2, 4, 6, 8, 10, 12, 14];
const N = days.map((t) => Math.round(K / (1 + ((K - N0) / N0) * Math.exp(-r * t))));
const rate46 = (N[3] - N[2]) / 2;                                        // per day
const rates = days.slice(1).map((t, i) => (N[i + 1] - N[i]) / 2);
const fastest = rates.indexOf(Math.max(...rates));                       // interval index
if (N.join() !== "20,51,118,228,347,430,472,489" || rate46 !== 55 || fastest !== 3) throw new Error("growth numbers " + N.join() + " " + rates.join());
const popModel = fig(chart({
  w: 520, h: 320, x: [0, 14, 2], y: [0, 600, 100], xLabel: "Time (days)", yLabel: "Population size (number of individuals)",
  series: [{ name: "population", pts: days.map((t, i) => [t, N[i]]), color: COL.a, markers: true }],
  annotations: [{ type: "hline", y: 500 }, { type: "text", x: 8, y: 520, s: "carrying capacity ≈ 500", size: 12 }],
}), "A line graph of population size versus time in days: the population rises slowly at first, increases steeply between days 4 and 8, then levels off near 500 individuals.",
{ caption: "Model graph: an S-shaped (logistic) curve that levels off near the carrying capacity of about 500." });
const popTable = table(["Time (days)", "Population size"], days.map((t, i) => [String(t), String(N[i])]), "Table 1. Size of a fruit fly population in a closed culture bottle.");

// ---------- Q1: signaling data ----------
const sigTable = table(["Treatment group", "Relative amount of mRNA of gene <i>X</i>"], [
  ["1. Normal cells, no hormone", "1.0"], ["2. Normal cells + hormone", "8.0"], ["3. Normal cells + hormone + kinase inhibitor", "1.2"],
  ["4. Cells lacking the receptor + hormone", "1.1"], ["5. Normal cells + hormone + phosphatase inhibitor", "12.5"],
], "Table 1. Effect of treatments on expression of gene X (mean of three trials).");

// ---------- Q5: osmosis U-tube ----------
const utube = fig(uTube({ left: { label: "0.2 M sucrose", level: 0.6, dots: 6 }, right: { label: "0.6 M sucrose", level: 0.6, dots: 18 } }),
  "A U-shaped tube divided at the bottom by a selectively permeable membrane. The left arm contains 0.2 molar sucrose with a few solute particles and the right arm contains 0.6 molar sucrose with more solute particles. The water levels in the two arms are the same at the start.",
  { caption: "Figure 1. The membrane is permeable to water but not to sucrose. The levels are equal at the start." });

// ---------- Q6: gel ----------
const gelFig = fig(gel({
  lanes: [
    { label: "Ladder", bands: [0.12, 0.32, 0.5, 0.72], sizes: ["500", "300", "200", "100"] },
    { label: "Mother", bands: [0.12, 0.32, 0.5] }, { label: "Father", bands: [0.12, 0.32, 0.5] },
    { label: "Child 1", bands: [0.12] }, { label: "Child 2", bands: [0.32, 0.5] }, { label: "Child 3", bands: [0.12, 0.32, 0.5] },
  ], mL: 62, W: 520,
}), "A gel with six lanes. The ladder lane has bands of 500, 300, 200 and 100 base pairs. The mother and father lanes each have bands at 500, 300 and 200. Child 1 has only the 500 band, Child 2 has only the 300 and 200 bands, and Child 3 has the 500, 300 and 200 bands.",
{ caption: "Figure 1. Gel electrophoresis of PCR products cut with a restriction enzyme (fragment sizes in base pairs).", maxWidth: 520 });

export default exam({
  id: "exam2",
  title: "Exam 2",
  description: "A full-length, six-question free-response exam: a cell-signaling experiment, population growth, membrane permeability, meiosis, osmosis in a U-tube, and gel electrophoresis.",
  minutes: 90,
  topics: ["Unit 4 — Cell communication (signal transduction)", "Unit 8 — Ecology (population growth)", "Unit 2 — Cell membranes (permeability)", "Unit 5 — Heredity (meiosis and genetic variation)", "Unit 2 — Cell structure and function (osmosis and water potential)", "Unit 6 — Gene expression and regulation (biotechnology: gel electrophoresis)"],
  questions: [
    Q("1", "Interpreting and Evaluating Experimental Results", 25,
      ["A hormone secreted by an endocrine gland binds to a receptor protein on the plasma membrane of target cells. Researchers hypothesized that binding of the hormone to the receptor activates a protein kinase, which phosphorylates other proteins and leads to increased transcription of gene <i>X</i>. To test the hypothesis, they treated cultured cells in several ways, and then measured the amount of mRNA of gene <i>X</i> relative to the amount in untreated cells. The results are shown in Table 1. A phosphatase is an enzyme that removes phosphate groups from proteins."],
      [sigTable],
      [
        P("A", "Describe the role of a receptor protein in the process of cell signaling.", [
          "For describing that a receptor protein binds a specific signaling molecule (ligand) and changes shape, which starts a signal transduction pathway inside the cell",
        ], ["A receptor protein has a binding site that is specific for a particular signaling molecule (the ligand, here the hormone). When the ligand binds, the receptor changes its conformation, which activates the receptor and starts a signal transduction pathway (often by activating a kinase) that leads to a cellular response such as a change in gene expression."], { label: "Part A" }),
        P("B", "Identify the control group in the experiment, and justify the choice.", [
          "For identifying group 1 (cells without the hormone) as the control that shows the baseline level of mRNA of gene <i>X</i>, which is needed to determine the effect of the hormone and other treatments",
        ], ["Group 1 (normal cells with no hormone) is the control. It shows the baseline amount of gene <i>X</i> mRNA when the signaling pathway is not stimulated, so the effects of the hormone and of the inhibitors can be determined by comparison with it."], { label: "Part B" }),
        P("C", "Describe the effect of the hormone on the relative amount of mRNA of gene <i>X</i> (group 2 compared with group 1), and describe the effect of adding the kinase inhibitor (group 3 compared with group 2).", [
          "For describing that the hormone increased the relative amount of mRNA from 1.0 to 8.0 (an eight-fold increase)",
          "For describing that the kinase inhibitor reduced the amount of mRNA to about the level of the control (from 8.0 to 1.2)",
        ], ["The hormone increased the relative amount of mRNA of gene <i>X</i> about eight-fold (from 1.0 to 8.0). When the kinase inhibitor was added with the hormone, the amount dropped back to about the control level (1.2), so the inhibitor prevented almost all of the hormone's effect."], { label: "Part C" }),
        P("D", "Cells that lack the receptor (group 4) showed no response to the hormone. Explain this result. Then predict how the amount of mRNA of gene <i>X</i> in group 5 compares with that in group 2 and justify your prediction.", [
          "For explaining that without the receptor the hormone cannot bind to the cells, so the signal transduction pathway is never activated",
          "For predicting that group 5 (with the phosphatase inhibitor) has more mRNA than group 2 and justifying that, because the phosphatase cannot remove phosphate groups, the kinase-activated proteins stay phosphorylated (active) longer, which prolongs or enhances the signal",
        ], ["Without the receptor, the hormone has nothing to bind to, so the pathway is never started and the mRNA stays at the control level (1.1). In group 5, the phosphatase inhibitor prevents the removal of phosphate groups. Proteins phosphorylated by the kinase therefore remain active longer, and the signal is not turned off, so more mRNA is made: the data show 12.5, higher than the 8.0 of group 2."], { label: "Part D", tip: "A phosphatase <em>removes</em> phosphate groups, so inhibiting it keeps proteins active longer. Many students write the opposite." }),
        P("E", "Support the claim that kinase activity is required for the hormone to increase the expression of gene <i>X</i>, and describe how a signal transduction pathway can produce a large response to a small number of hormone molecules.", [
          "For supporting the claim with the data: the hormone raised mRNA to 8.0 in group 2, but when the kinase was inhibited (group 3) the level stayed near the control (1.2)",
          "For describing amplification: each activated receptor can activate many kinase molecules, each of which can phosphorylate many target proteins (a cascade), so one hormone molecule can lead to a large cellular response",
        ], ["Support: with the hormone alone the mRNA increased to 8.0, but with the hormone plus the kinase inhibitor it was only 1.2, almost the same as with no hormone, so kinase activity is needed for the effect. Amplification: in a signal transduction cascade, one activated receptor can activate many molecules of the next protein (kinase), each of which activates many more, so a few hormone molecules can cause a very large number of target proteins to be modified and a large response."], { label: "Part E" }),
        P("F", "The hormone travels through the bloodstream from the gland to the target cells. Identify the type of cell signaling this represents.", [
          "For identifying endocrine signaling (long-distance signaling by hormones carried in the circulatory system)",
        ], ["This is <b>endocrine signaling</b>: hormones are released into the bloodstream (or other body fluids) and travel long distances to reach target cells that have the specific receptor."], { label: "Part F" }),
      ]),

    Q("2", "Interpreting and Evaluating Experimental Results with Graphing", 25,
      ["A biologist started a population of fruit flies in a closed culture bottle with a limited supply of food. The biologist counted the flies every two days. The data are shown in Table 1."],
      [popTable],
      [
        P("A", "On paper, construct an appropriately labeled graph that represents the data in Table 1.", [
          "For correctly labeling and scaling the axes: time (days) on the horizontal axis and population size on the vertical axis, with appropriate scales and units",
          "For correctly plotting all of the data points and connecting them with a smooth curve or line segments",
        ], ["Put time (days, 0–14) on the horizontal axis and population size (0–600) on the vertical axis, with even intervals and labels. Plot the eight points (0, 20), (2, 51), (4, 118), (6, 228), (8, 347), (10, 430), (12, 472), (14, 489) and join them: the result is an S-shaped curve."], { label: "Part A", paper: true, modelFigures: [popModel] }),
        P("B", "Based on the graph, estimate the carrying capacity of the culture bottle for the fruit flies.", [
          "For an estimate of about 500 flies (accept 490–520), the population size at which the curve levels off",
        ], ["The carrying capacity is the maximum population the environment can sustain. The curve levels off at about <b>500 flies</b> (an estimate from 490 to 520 is acceptable)."], { label: "Part B" }),
        P("C", "Calculate the average rate of population growth, in flies per day, between day 4 and day 6, and identify the two-day interval during which the population grew most rapidly.", [
          "For a correct rate between day 4 and day 6: (228 − 118)/(2 days) = 55 flies per day",
          "For identifying days 6–8 as the interval of fastest growth (about 59.5 flies per day)",
        ], [`Rate (days 4–6) = (228 − 118)/(6 − 4) = 110/2 = <b>55 flies/day</b>. Calculating the rate for every interval gives ${rates.map((x) => x.toFixed(1)).join(", ")} flies/day, so the population grew most rapidly between <b>days 6 and 8</b> (about 59.5 flies/day), when the population was near half of the carrying capacity.`], { label: "Part C", tip: "Compute the rate for each interval before naming the fastest one. The steepest part of the curve is in the middle, not at the start." }),
        P("D", "Explain why the rate of growth is slow at the beginning of the experiment and slows again at the end.", [
          "For explaining that early on there are few individuals reproducing (even though resources are plentiful), so the population grows slowly in absolute numbers, and growth speeds up as the population (and the number of reproducing flies) increases",
          "For explaining that as the population nears the carrying capacity, density-dependent limiting factors (food, space, waste products, disease) reduce birth rates and/or increase death rates, so the growth rate falls toward zero",
        ], ["At the start there are only 20 flies, so even though resources are plentiful and each fly reproduces at a high rate, the number of new flies per day is small. As the population increases, more flies are reproducing and the numbers increase faster. Near the end, the culture is crowded: food becomes scarce, space is limited, and waste accumulates (density-dependent factors), so the birth rate falls and the death rate rises until they are about equal, and the population levels off at the carrying capacity."], { label: "Part D" }),
        P("E", "Predict how the carrying capacity of the bottle would change if the amount of food were doubled, and justify your prediction.", [
          "For predicting that the carrying capacity would increase",
          "For justifying that food is a limiting resource: more food can support more flies before the resource becomes scarce, so the maximum sustainable population is higher",
        ], ["The carrying capacity would <b>increase</b> (the culture could sustain more flies than 500). Food is a limiting resource in the closed bottle, and carrying capacity is determined by the amount of limiting resources. With twice as much food, the population could grow larger before food becomes scarce enough to limit births and survival."], { label: "Part E" }),
      ]),

    Q("3", "Scientific Investigation", 10,
      ["Beet root cells contain a red pigment (betacyanin) inside their vacuoles. The pigment can leak out of the cells if the cell membranes are damaged. A student hypothesizes that high temperatures increase the permeability of the membranes of beet root cells. The student has several identical pieces of beet, test tubes with water, a water bath that can be set to different temperatures, and a spectrophotometer."],
      [],
      [
        P("A", "Identify the independent variable and the dependent variable in an experiment designed to test the student's hypothesis.", [
          "For identifying the independent variable as the temperature of the water bath and the dependent variable as the amount of pigment that leaks into the water (measured as absorbance)",
        ], ["The independent variable is the <b>temperature</b> to which the beet pieces are exposed; the dependent variable is the <b>amount of red pigment released into the water</b>, which can be measured as the absorbance of the water with the spectrophotometer."], { label: "Part A" }),
        P("B", "Describe how the student can use the spectrophotometer to obtain data.", [
          "For describing that the student removes the beet pieces and measures the absorbance of the water at the wavelength that the pigment absorbs best (about 530 nm), where a higher absorbance indicates more pigment (a blank of pure water is used to calibrate)",
        ], ["After the beet pieces have been in the water at each temperature for the same amount of time, the student removes the pieces, transfers the water into cuvettes, and measures the absorbance at a wavelength that the red pigment absorbs strongly (about 530 nm). The spectrophotometer is first zeroed with a cuvette of pure water. A higher absorbance means a higher concentration of pigment in the water."], { label: "Part B" }),
        P("C", "Predict the results of the experiment if the student's hypothesis is correct.", [
          "For predicting that the absorbance (amount of pigment in the water) will be higher at the higher temperatures",
        ], ["If the hypothesis is correct, the water around the beet pieces at the higher temperatures will have a higher absorbance (more betacyanin has leaked out) than the water around the beet pieces at lower temperatures."], { label: "Part C" }),
        P("D", "Justify the student's prediction in terms of the structure of the cell membrane.", [
          "For justifying that high temperature increases the motion of phospholipids and denatures membrane proteins, disrupting the structure of the phospholipid bilayer and making it more permeable so that the pigment can leak out of the cell",
        ], ["The membrane is a phospholipid bilayer with embedded proteins held together by weak interactions. High temperature increases the kinetic energy of the phospholipids (the membrane becomes more fluid) and can denature membrane proteins. The bilayer is disrupted, which creates leaks that allow the large pigment molecule to pass out of the vacuole and cell, so more pigment appears in the water."], { label: "Part D", tip: "Connect the answer to the phospholipid bilayer and the membrane proteins. “The cell bursts” is not the explanation." }),
      ]),

    Q("4", "Conceptual Analysis", 10,
      ["Sexual reproduction in animals depends on meiosis, which produces haploid gametes. Consider an animal with a diploid number of 2<i>n</i> = 6."],
      [],
      [
        P("A", "Describe crossing over, and identify the phase of meiosis in which it occurs.", [
          "For describing that homologous chromosomes exchange segments of DNA between non-sister chromatids, and identifying prophase I",
        ], ["During <b>prophase I</b>, homologous chromosomes pair up (synapsis), and non-sister chromatids exchange corresponding segments of DNA at chiasmata. The result is recombinant chromatids that carry a new combination of alleles."], { label: "Part A" }),
        P("B", "Explain how independent assortment contributes to genetic variation among gametes.", [
          "For explaining that at metaphase I each homologous pair lines up at the equator with a random orientation relative to the other pairs, so the maternal and paternal chromosomes are distributed independently into the gametes, producing many possible combinations (2<sup><i>n</i></sup>)",
        ], ["At metaphase I, the way in which each homologous pair of chromosomes lines up at the cell's equator is random and independent of how the other pairs line up. The maternal and paternal chromosomes are therefore sorted into the two daughter cells in many different combinations. For <i>n</i> = 3 there are 2<sup>3</sup> = 8 different possible combinations, which increases genetic variation among the gametes."], { label: "Part B" }),
        P("C", "In one meiotic division, one pair of homologous chromosomes fails to separate during meiosis I (nondisjunction). Predict the number of chromosomes in each of the four resulting gametes, and justify your prediction.", [
          "For predicting that two gametes will have 4 chromosomes and two gametes will have 2 chromosomes (instead of 3 each)",
          "For justifying that both members of one homologous pair moved to the same pole in meiosis I, so two of the gametes get an extra chromosome (<i>n</i> + 1) and two lack that chromosome (<i>n</i> − 1)",
        ], ["Two gametes will have <b>4 chromosomes</b> (<i>n</i> + 1) and two will have <b>2 chromosomes</b> (<i>n</i> − 1). In a normal meiosis I the two members of each homologous pair move to opposite poles. If one pair fails to separate, both homologs go to the same pole, so one daughter cell (and the two gametes it forms in meiosis II) receives 4 chromosomes, while the other receives 2."], { label: "Part C", tip: "Count carefully: the four gametes have 4, 4, 2, and 2 chromosomes — not 3, 3, 3, and 3, and not 6." }),
      ]),

    Q("5", "Analyze a Model or Visual Representation", 10,
      ["Figure 1 shows a U-shaped tube separated into two sides by a membrane that is permeable to water but not to sucrose. Equal volumes of sucrose solutions of two different concentrations are placed on the two sides. Assume that the temperature is constant."],
      [utube],
      [
        P("A", "Predict how the water levels on the two sides of the tube will change over time, and justify your prediction using the concept of water potential.", [
          "For predicting that the level on the right (0.6 M) side will rise and the level on the left will fall",
          "For justifying that the 0.6 M solution has a lower water potential (more solute), so water moves by osmosis from the side with the higher water potential (the 0.2 M side) to the side with the lower water potential",
        ], ["The water level on the <b>right</b> side will rise and the level on the left side will fall. The right side has the higher solute concentration, so its water potential is lower. Water moves by osmosis across the selectively permeable membrane from the higher water potential (the 0.2 M left side) to the lower water potential (the 0.6 M right side)."], { label: "Part A", tip: "Water moves toward the higher <em>solute</em> concentration (lower water potential), so the 0.6 M side rises." }),
        P("B", "Explain why the sucrose does not move across the membrane in this model.", [
          "For explaining that sucrose molecules are too large (and polar) to cross the membrane, which is permeable only to water (selectively permeable)",
        ], ["The membrane is selectively permeable: it allows water molecules to pass but not the larger, polar sucrose molecules, so the sucrose stays on its original side and only the water moves."], { label: "Part B" }),
        P("C", "Predict how the final water levels would differ if the membrane were also permeable to sucrose. Justify your prediction.", [
          "For predicting that the water levels would end up equal (no net change in level), and justifying that sucrose would diffuse from the higher concentration to the lower concentration until the concentrations on both sides are equal",
        ], ["The levels would end up <b>equal</b>. If sucrose could cross, it would diffuse down its concentration gradient from the right (0.6 M) to the left (0.2 M) until the concentrations on both sides were equal (about 0.4 M). With no difference in solute concentration, there would be no difference in water potential and no net movement of water."], { label: "Part C" }),
      ]),

    Q("6", "Analyze Data", 10,
      ["A genetic disorder is caused by a mutation in a gene that eliminates a restriction enzyme site. A segment of the gene is amplified by PCR and cut with the restriction enzyme. The normal allele has a restriction site that is cut once, producing fragments of 300 and 200 base pairs (bp), and the mutant allele does not have the site, so it is not cut and remains as a 500 bp fragment. DNA from a mother, a father, and their three children is analyzed by gel electrophoresis (Figure 1)."],
      [gelFig],
      [
        P("A", "Explain why the DNA fragments separate on the gel and why the smallest fragments are found farthest from the wells.", [
          "For explaining that DNA is negatively charged (phosphate groups), so it moves through the gel toward the positive electrode, and that smaller fragments move more easily through the pores of the gel matrix and travel farther in the same time",
        ], ["DNA has a negative charge because of its phosphate groups, so in an electric field it moves through the gel toward the positive electrode. The gel is a mesh of pores that slows the movement of large fragments more than small ones, so smaller fragments travel farther from the wells."], { label: "Part A" }),
        P("B", "Determine the genotype of Child 1 and of Child 2 with respect to the normal (<i>N</i>) and mutant (<i>m</i>) alleles, and justify your answers.", [
          "For identifying Child 1 as homozygous for the mutant allele (<i>mm</i>), because the only band is the uncut 500 bp fragment, and Child 2 as homozygous for the normal allele (<i>NN</i>), because there are only the 300 and 200 bp bands",
        ], ["Child 1 has only the 500 bp band, which is the uncut mutant allele on both chromosomes: <b><i>mm</i></b>. Child 2 has only the 300 bp and 200 bp bands from the cut normal allele on both chromosomes: <b><i>NN</i></b>."], { label: "Part B" }),
        P("C", "Both parents are healthy, but Child 1 has the disorder. Explain, using the gel data, how two healthy parents can have an affected child.", [
          "For explaining that both parents have all three bands (500, 300, and 200 bp), so each is heterozygous (<i>Nm</i>) and carries one copy of the mutant allele, which is recessive and masked by the normal allele; each can pass on the <i>m</i> allele",
        ], ["The mother and father each show all three fragments (500 bp from the mutant allele and 300 + 200 bp from the normal allele), so both are heterozygous carriers (<i>Nm</i>). The mutant allele is recessive: they are healthy because the normal allele provides a functional gene product. Each parent can pass on the mutant allele, and Child 1 received one from each parent (<i>mm</i>)."], { label: "Part C" }),
        P("D", "Calculate the probability that the next child of these parents will be homozygous for the mutant allele. Show your work.", [
          "For the correct probability of 1/4 (25%): (1/2)(1/2), since each heterozygous parent passes the mutant allele with probability 1/2",
        ], ["For <i>Nm</i> × <i>Nm</i>, the probability that a child receives <i>m</i> from the mother is 1/2 and from the father is 1/2, so P(<i>mm</i>) = (1/2)(1/2) = <b>1/4 (25%)</b>."], { label: "Part D", tip: "Each child is an independent event: the chance for the next child is 1/4 no matter what the earlier children's genotypes were." }),
      ]),
  ],
});
