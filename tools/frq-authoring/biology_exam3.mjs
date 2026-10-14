// AP Biology FRQ — Exam 3 (34 points, 90 minutes)
import { exam, P, Q, fig, table } from "./frqlib.mjs";
import { chart, energyPyramid, COL } from "./biofrqfigs.mjs";

// ---------- Q2: photosynthesis ----------
const light = [0, 50, 100, 200, 400, 800];
const net = [-2, 3, 8, 16, 21, 22];
const compensation = 0 + (2 / 5) * 50;           // 20
const gross200 = net[3] + 2;                      // 18
if (Math.abs(compensation - 20) > 1e-9 || gross200 !== 18) throw new Error("photosynthesis");
const lightModel = fig(chart({
  w: 520, h: 320, x: [0, 800, 100], y: [-5, 25, 5], xLabel: "Light intensity (μmol photons m⁻² s⁻¹)", yLabel: "Net O₂ production (μL/min)",
  series: [{ name: "net O2", pts: light.map((x, i) => [x, net[i]]), color: COL.a, markers: true }],
  annotations: [{ type: "hline", y: 0 }],
}), "A graph of net oxygen production versus light intensity. The curve starts below zero at zero light, crosses zero near 20, rises steeply up to about 200 and then levels off near 22 microliters per minute above 400.",
{ caption: "Model graph: net O₂ production rises with light intensity, crosses 0 near 20 μmol m⁻² s⁻¹ (the light compensation point), and levels off at high light." });
const lightTable = table(["Light intensity (μmol photons m⁻² s⁻¹)", "Net O<sub>2</sub> production (μL/min)"], light.map((x, i) => [String(x), (net[i] > 0 ? "+" : net[i] < 0 ? "−" : "") + Math.abs(net[i])]), "Table 1. Net rate of O<sub>2</sub> production by aquatic plant leaf disks at 25 °C and a constant CO<sub>2</sub> concentration.");

// ---------- Q1: lac operon ----------
const lacTable = table(["Group", "Cells", "Conditions", "Relative β-galactosidase activity"], [
  ["1", "Wild type", "No lactose, no glucose", "1"], ["2", "Wild type", "Lactose, no glucose", "100"], ["3", "Wild type", "Lactose and glucose", "8"],
  ["4", "Repressor-gene mutant", "No lactose, no glucose", "95"], ["5", "Promoter mutant (RNA polymerase cannot bind)", "Lactose, no glucose", "0.5"],
], "Table 1");

// ---------- Q6: chi-square ----------
const obs = [315, 108, 101, 32], total = obs.reduce((a, b) => a + b, 0);
const ratios = [9, 3, 3, 1];
const exp = ratios.map((r) => (r / 16) * total);
const chi = obs.reduce((s, o, i) => s + (o - exp[i]) ** 2 / exp[i], 0);
if (Math.abs(chi - 0.470) > 0.005 || total !== 556) throw new Error("chi-square " + chi);
const chiTable = table(["Phenotype", "Observed number of F<sub>2</sub> plants"], [["Round, yellow", "315"], ["Round, green", "108"], ["Wrinkled, yellow", "101"], ["Wrinkled, green", "32"], ["Total", "556"]], "Table 1");

// ---------- Q5: energy pyramid ----------
const pyr = fig(energyPyramid({ levels: [{ name: "Producers", value: "10,000 kcal/m²/yr" }, { name: "Primary consumers", value: "1,000 kcal/m²/yr" }, { name: "Secondary consumers", value: "100 kcal/m²/yr" }, { name: "Tertiary consumers", value: "10 kcal/m²/yr" }] }),
  "An energy pyramid with four levels from bottom to top: producers 10,000 kilocalories per square meter per year, primary consumers 1,000, secondary consumers 100, and tertiary consumers 10.",
  { caption: "Figure 1. Energy available at each trophic level of a grassland ecosystem." });

export default exam({
  id: "exam3",
  title: "Exam 3",
  description: "A full-length, six-question free-response exam: regulation of the lac operon, photosynthesis and light, natural selection in finches, the cell cycle, an energy pyramid, and a chi-square analysis.",
  minutes: 90,
  topics: ["Unit 6 — Gene expression and regulation (the <i>lac</i> operon)", "Unit 3 — Cellular energetics (photosynthesis and light)", "Unit 7 — Natural selection", "Unit 4 — The cell cycle and cancer", "Unit 8 — Ecology (energy flow)", "Unit 5 — Heredity (chi-square analysis)"],
  questions: [
    Q("1", "Interpreting and Evaluating Experimental Results", 25,
      ["In the bacterium <i>E. coli</i>, the genes for the enzymes that use the sugar lactose are organized in the <i>lac</i> operon, which is controlled by a repressor protein that binds to the operator. One of the enzymes, β-galactosidase, breaks down lactose. When lactose is present, a derivative of lactose binds to the repressor. In addition, when glucose is present, the cell produces little of the molecule cAMP, which is needed for a regulatory protein to help RNA polymerase bind to the promoter. Researchers measured the activity of β-galactosidase in wild-type cells and in two types of mutant cells under different conditions (Table 1)."],
      [lacTable],
      [
        P("A", "Describe the role of the repressor protein in the regulation of the <i>lac</i> operon.", [
          "For describing that the repressor binds to the operator and blocks RNA polymerase from transcribing the genes of the operon (so the enzymes are not made when lactose is absent)",
        ], ["The repressor is a regulatory protein that, when active, binds to the operator, a DNA sequence near the promoter. Bound repressor physically blocks RNA polymerase, so the genes for the lactose-using enzymes are not transcribed."], { label: "Part A" }),
        P("B", "Explain the difference in β-galactosidase activity in wild-type cells between group 1 and group 2.", [
          "For explaining that in group 1 (no lactose) the repressor is bound to the operator, preventing transcription, so activity is low",
          "For explaining that in group 2 lactose (its derivative) binds to the repressor and changes its shape so it can no longer bind to the operator, allowing RNA polymerase to transcribe the genes, so the enzyme is made and activity is high",
        ], ["Without lactose (group 1) the repressor is active and bound to the operator, so RNA polymerase is blocked and very little enzyme is made (activity 1). With lactose (group 2), a lactose derivative binds to the repressor and changes its shape; the repressor then releases the operator, transcription occurs, and the cells make a large amount of β-galactosidase (activity 100)."], { label: "Part B" }),
        P("C", "Explain why cells with a mutation in the repressor gene (group 4) have high β-galactosidase activity even though there is no lactose.", [
          "For explaining that the mutant repressor is nonfunctional and cannot bind to the operator",
          "For explaining that RNA polymerase is therefore never blocked, so the operon is transcribed all the time, whether or not lactose is present (constitutive expression)",
        ], ["The mutated repressor gene produces a repressor that cannot bind to the operator (or that is not produced at all). Since nothing blocks the operator, RNA polymerase can transcribe the operon whether or not lactose is present, so the enzyme is made continuously (95 compared with 1 in group 1)."], { label: "Part C" }),
        P("D", "Explain why β-galactosidase activity in wild-type cells is much lower when glucose is present along with lactose (group 3) than when lactose is present without glucose (group 2).", [
          "For explaining that when glucose is present, cAMP levels are low",
          "For explaining that without cAMP the activator protein (CAP) cannot bind to the promoter to help RNA polymerase, so transcription of the operon is reduced even though the repressor is not bound, and the cells use glucose first",
        ], ["Glucose is the cell's preferred energy source. When it is present, the level of cAMP is low, so the cAMP-dependent activator protein (CAP) does not bind near the promoter and RNA polymerase binds poorly. Even though lactose has removed the repressor from the operator, transcription remains low (8 compared with 100), because the cell does not need to spend energy making enzymes to use lactose when glucose is available."], { label: "Part D", tip: "Glucose <em>lowers</em> the level of cAMP (it does not raise it), so the activator protein cannot help RNA polymerase bind to the promoter even though the repressor has been released." }),
        P("E", "Cells in group 5 have a mutation in the promoter of the operon. Explain why these cells have very low β-galactosidase activity even in the presence of lactose.", [
          "For explaining that RNA polymerase cannot bind to the mutated promoter, so transcription cannot start even when the repressor is not bound",
        ], ["The promoter is the DNA sequence where RNA polymerase binds to begin transcription. If RNA polymerase cannot bind to the mutant promoter, the genes of the operon cannot be transcribed no matter what the repressor is doing, so the cells make almost no β-galactosidase (0.5) even with lactose."], { label: "Part E" }),
        P("F", "Describe one advantage to the bacteria of regulating the <i>lac</i> operon in this way.", [
          "For describing that regulating the operon saves energy and materials because the cell does not make the enzymes for using lactose unless lactose is available (and glucose is not)",
        ], ["Making proteins requires a lot of ATP and amino acids. By transcribing the <i>lac</i> genes only when lactose is present (and the preferred sugar, glucose, is not), the bacteria avoid wasting resources on enzymes that they do not need, which gives them an advantage over cells that cannot regulate gene expression."], { label: "Part F" }),
      ]),

    Q("2", "Interpreting and Evaluating Experimental Results with Graphing", 25,
      ["A student measured the net rate of oxygen production by leaf disks from an aquatic plant at different light intensities. The disks were kept at 25 °C in a solution with a constant concentration of dissolved CO<sub>2</sub>. The results are shown in Table 1. A negative value means that the leaf disks consumed more O<sub>2</sub> than they produced."],
      [lightTable],
      [
        P("A", "On paper, construct an appropriately labeled graph that represents the data in Table 1.", [
          "For correctly labeling and scaling the axes: light intensity on the horizontal axis (independent variable) and net O<sub>2</sub> production on the vertical axis, with scales that include negative values, and units",
          "For correctly plotting all six points and connecting them with a smooth curve or line segments",
        ], ["Plot light intensity (0–800 μmol photons m<sup>−2</sup> s<sup>−1</sup>) on the horizontal axis and net O<sub>2</sub> production (−5 to +25 μL/min) on the vertical axis. Plot (0, −2), (50, +3), (100, +8), (200, +16), (400, +21), (800, +22) and connect them with a curve that rises steeply and then levels off."], { label: "Part A", paper: true, modelFigures: [lightModel] }),
        P("B", "Estimate the light intensity at which the rate of photosynthesis equals the rate of cellular respiration in the leaf disks (the light compensation point).", [
          "For an estimate of about 20 μmol photons m<sup>−2</sup> s<sup>−1</sup> (accept 15–30), at which the net O<sub>2</sub> production is zero",
        ], ["The compensation point is where net O<sub>2</sub> production is zero, so photosynthesis produces exactly as much O<sub>2</sub> as respiration consumes. The data go from −2 at 0 to +3 at 50, so the line crosses zero at about 2/5 of the way: roughly <b>20 μmol photons m<sup>−2</sup> s<sup>−1</sup></b> (an estimate from 15 to 30 is acceptable)."], { label: "Part B" }),
        P("C", "Describe the relationship between light intensity and net O<sub>2</sub> production, and explain why the rate levels off at high light intensities.", [
          "For describing that net O<sub>2</sub> production increases as light intensity increases, rapidly at low intensities and then more slowly, reaching a plateau (at about 400–800)",
          "For explaining that at high light intensity another factor becomes limiting (the concentration of CO<sub>2</sub>, the amount or rate of the enzymes of the Calvin cycle such as rubisco, or the number of reaction centers), so more light cannot increase the rate",
        ], ["Net O<sub>2</sub> production rises quickly as light increases from 0 to 200, increases slowly from 200 to 400, and is almost unchanged from 400 to 800 (21 vs. 22). At low light, the light-dependent reactions limit the rate, so more light means more ATP and NADPH and more O<sub>2</sub>. At high light, the light reactions are saturated and the rate is limited by something else, such as the CO<sub>2</sub> concentration (held constant here) or the capacity of the Calvin-cycle enzymes, so additional light does not increase the rate."], { label: "Part C" }),
        P("D", "Calculate the rate of gross photosynthesis (total O<sub>2</sub> produced) at a light intensity of 200 μmol photons m<sup>−2</sup> s<sup>−1</sup>. Show your work.", [
          "For a correct value of 18 μL/min: net O<sub>2</sub> production (16) plus the rate of O<sub>2</sub> consumption by respiration (2, from the value measured in the dark)",
        ], ["In the dark, the disks consume 2 μL O<sub>2</sub>/min in respiration (net = −2). Respiration continues in the light, so gross photosynthesis = net production + respiration = 16 + 2 = <b>18 μL/min</b>."], { label: "Part D", tip: "Gross photosynthesis = net O<sub>2</sub> production + the O<sub>2</sub> used in respiration. Using the net value alone underestimates it." }),
        P("E", "Predict how the rate of net O<sub>2</sub> production at 800 μmol photons m<sup>−2</sup> s<sup>−1</sup> would change if the concentration of dissolved CO<sub>2</sub> were doubled, and justify your prediction.", [
          "For predicting that the net O<sub>2</sub> production would increase",
          "For justifying that CO<sub>2</sub> is a substrate for carbon fixation in the Calvin cycle (catalyzed by rubisco), so at saturating light, more CO<sub>2</sub> allows a higher rate of the Calvin cycle and of photosynthesis",
        ], ["The net O<sub>2</sub> production would <b>increase</b>. At 800 μmol photons m<sup>−2</sup> s<sup>−1</sup> the light-dependent reactions are saturated, and CO<sub>2</sub> (the substrate for carbon fixation by rubisco in the Calvin cycle) is one of the factors that limits the rate. With more CO<sub>2</sub>, carbon fixation can proceed faster, so ATP and NADPH are used more rapidly and more O<sub>2</sub> is released from the light reactions."], { label: "Part E" }),
        P("F", "Explain why the leaf disks have a negative net rate of O<sub>2</sub> production when the light intensity is zero.", [
          "For explaining that in the dark there is no photosynthesis, but the cells still carry out cellular respiration in the mitochondria, which consumes O<sub>2</sub>, so the net O<sub>2</sub> production is negative",
        ], ["With no light there are no light-dependent reactions, so photosynthesis does not produce O<sub>2</sub>. The leaf cells continue to respire: aerobic cellular respiration in the mitochondria uses O<sub>2</sub> as the final electron acceptor of the electron transport chain, so O<sub>2</sub> is consumed and the net rate is negative (−2 μL/min)."], { label: "Part F" }),
      ]),

    Q("3", "Scientific Investigation", 10,
      ["On a small island, the average beak depth of a population of ground finches is 9.0 mm. The finches eat seeds. During a severe drought, small soft seeds become scarce, and the remaining seeds are mostly large and hard. A student hypothesizes that natural selection during the drought will increase the average beak depth of the finch population."],
      [],
      [
        P("A", "Predict how the average beak depth of the surviving finches will compare with that of the population before the drought, if the student's hypothesis is correct.", [
          "For predicting that the average beak depth of the survivors (and of the next generation) will be greater than before the drought",
        ], ["If the hypothesis is correct, the surviving finches will have a greater average beak depth than the population had before the drought."], { label: "Part A" }),
        P("B", "Justify the prediction in terms of natural selection.", [
          "For justifying that finches with deeper beaks can crack the large, hard seeds that are the available food, so they survive and reproduce more than finches with shallower beaks (differential survival and reproduction)",
        ], ["There is variation in beak depth among the finches. During the drought, birds with deeper, stronger beaks can crack the large, hard seeds and obtain enough food, so more of them survive and reproduce, while many birds with shallower beaks starve. The environment (food available) therefore selects for deeper beaks."], { label: "Part B" }),
        P("C", "Describe the data that the student should collect to test the hypothesis.", [
          "For describing a valid data set, such as measuring the beak depth of a large sample of finches before the drought and of the survivors after the drought (or comparing survivors and non-survivors), and comparing the means",
        ], ["The student should capture and measure the beak depth of a large random sample of finches before the drought, and measure the beak depth of the survivors after the drought (or of the finches that died compared with those that lived). The average beak depth of the survivors would be compared with the average before the drought, using the same measuring method."], { label: "Part C" }),
        P("D", "Explain what additional evidence is needed to show that the change in average beak depth will continue in the offspring of the survivors.", [
          "For explaining that beak depth must be heritable (genetically determined), which can be shown by measuring parents and offspring: the offspring of deep-beaked parents should also have deeper beaks than the offspring of shallow-beaked parents",
        ], ["Natural selection can change a population over generations only if the trait is heritable. The student could measure the beak depths of parents and their offspring: if offspring tend to resemble their parents (deep-beaked parents have deep-beaked offspring), the variation has a genetic basis, and the next generation will have a greater average beak depth as a result of the selection."], { label: "Part D", tip: "Selection can change the next generation only if the trait is <em>heritable</em>. Show that offspring resemble their parents." }),
      ]),

    Q("4", "Conceptual Analysis", 10,
      ["The cell cycle in eukaryotic cells is regulated by proteins, including cyclins and cyclin-dependent kinases (CDKs), and tumor suppressor proteins such as p53."],
      [],
      [
        P("A", "Describe the function of a checkpoint in the cell cycle.", [
          "For describing that a checkpoint is a point at which the cell assesses conditions (such as DNA damage, DNA replication completion, or chromosome attachment) and either allows the cell cycle to continue or stops it",
        ], ["A checkpoint is a control point at which the cell cycle can be stopped until conditions are right. For example, at the G<sub>1</sub> checkpoint the cell checks for DNA damage and adequate nutrients and size; at the G<sub>2</sub> checkpoint, whether DNA replication is complete; and at the spindle checkpoint (in mitosis), whether all chromosomes are attached to spindle fibers before anaphase begins. Cyclins and CDKs help drive the cell from one phase to the next."], { label: "Part A" }),
        P("B", "The p53 protein stops the cell cycle in response to DNA damage and can trigger apoptosis if the damage cannot be repaired. Explain how a mutation that makes p53 nonfunctional can increase the likelihood that a cell becomes cancerous.", [
          "For explaining that without functional p53, cells with damaged DNA are not stopped at the checkpoint or eliminated, so they continue to divide and pass on mutations, which can accumulate and lead to uncontrolled cell division",
        ], ["Normally p53 detects DNA damage, halts the cell cycle so that the damage can be repaired, and triggers apoptosis if the damage is severe. If p53 is nonfunctional, cells with damaged DNA are not stopped or destroyed. They keep dividing and pass the damaged DNA to daughter cells, so mutations (including those that affect cell division) accumulate, which increases the chance that a cell will divide out of control and form a tumor."], { label: "Part B" }),
        P("C", "A mutation in the gene for a cyclin causes the cyclin protein to be produced at a high level and to remain active all the time. Predict the effect of this mutation on cell division, and justify your prediction.", [
          "For predicting that the cells divide more rapidly or continuously (uncontrolled division)",
          "For justifying that active cyclin-CDK complexes drive the cell past checkpoints into the next phase of the cell cycle, so a constantly active cyclin would continually signal the cell to divide (this is an oncogene-type mutation)",
        ], ["The cells would divide <b>more often or without control</b>. Cyclins bind to CDKs to form active complexes that phosphorylate target proteins and push the cell through the checkpoints. A cyclin that is always present and active would keep stimulating the cell to progress through the cell cycle even when the signals to stop are present, so the cells would divide uncontrollably, which can lead to a tumor."], { label: "Part C", tip: "A cyclin that is always active <em>speeds up</em> or removes the brakes on the cell cycle. It does not slow division." }),
      ]),

    Q("5", "Analyze a Model or Visual Representation", 10,
      ["Figure 1 represents the flow of energy through the trophic levels of a grassland ecosystem."],
      [pyr],
      [
        P("A", "Calculate the percentage of the energy at the producer level that is transferred to the primary consumers. Show your work.", [
          "For a correct calculation: (1,000/10,000) × 100 = 10%",
        ], ["Percent transferred = (energy at primary consumers / energy at producers) × 100 = (1,000 kcal/m<sup>2</sup>/yr)/(10,000 kcal/m<sup>2</sup>/yr) × 100 = <b>10%</b>."], { label: "Part A" }),
        P("B", "Explain why the amount of energy available decreases at each higher trophic level.", [
          "For explaining that organisms use much of the energy they obtain for cellular respiration and metabolism, which is lost as heat; some energy is also not eaten or digested (and is lost in waste), so only a small part is stored in biomass that is available to the next level",
        ], ["Only a small portion of the energy at each level is stored in new biomass that the next trophic level can eat. Much of the energy is used by the organisms in cellular respiration (and lost as heat, as required by the second law of thermodynamics), and some is not consumed or is excreted as waste. This loss at each transfer is the reason the pyramid gets narrower toward the top."], { label: "Part B", tip: "Energy is not “used up”: most of it leaves each level as heat from cellular respiration." }),
        P("C", "Predict how a 50% decrease in the energy available at the producer level would affect the tertiary consumers, and justify your prediction.", [
          "For predicting that the energy available to, and the biomass or population of, the tertiary consumers would decrease",
          "For justifying that every higher trophic level depends on the energy captured by the producers, so about half as much energy would be passed up through each transfer",
        ], ["The tertiary consumers would <b>decrease</b>. All of the energy for the higher trophic levels comes from the producers. If the producers capture only half as much energy, then (at the same 10% transfer efficiency) each higher level would have about half as much energy, and the top level would only be able to support about half the biomass, so the population of tertiary consumers would decline."], { label: "Part C" }),
      ]),

    Q("6", "Analyze Data", 10,
      ["In a genetics experiment, a student crossed pea plants that were heterozygous for two traits (seed shape, round <i>R</i> or wrinkled <i>r</i>, and seed color, yellow <i>Y</i> or green <i>y</i>), <i>RrYy</i> × <i>RrYy</i>. The student counted the phenotypes of 556 offspring, as shown in Table 1. The student predicted a 9:3:3:1 phenotypic ratio and used a chi-square test to analyze the results."],
      [chiTable],
      [
        P("A", "State the null hypothesis for the chi-square test.", [
          "For stating that there is no statistically significant difference between the observed and expected numbers of offspring (the genes assort independently and the offspring ratio is 9:3:3:1); any differences are due to chance",
        ], ["The null hypothesis is that there is <b>no significant difference</b> between the observed phenotype counts and the counts expected for independent assortment (a 9:3:3:1 ratio); any deviation is due to chance alone."], { label: "Part A" }),
        P("B", "Calculate the chi-square value for the data. Show your work.", [
          "For a correct chi-square value of about 0.47, calculated as the sum of (observed − expected)<sup>2</sup>/expected for the four phenotypes, using the expected numbers 312.75, 104.25, 104.25, and 34.75",
        ], [`The expected numbers (9:3:3:1 of 556) are 312.75, 104.25, 104.25, and 34.75. χ<sup>2</sup> = Σ (<i>o</i> − <i>e</i>)<sup>2</sup>/<i>e</i> = (315 − 312.75)<sup>2</sup>/312.75 + (108 − 104.25)<sup>2</sup>/104.25 + (101 − 104.25)<sup>2</sup>/104.25 + (32 − 34.75)<sup>2</sup>/34.75 = 0.016 + 0.135 + 0.101 + 0.218 = <b>${chi.toFixed(2)}</b>.`], { label: "Part B" }),
        P("C", "Determine the degrees of freedom for this test, and use the critical value table (<i>p</i> = 0.05, df = 3: 7.81) to determine whether the null hypothesis should be rejected.", [
          "For a correct degrees of freedom of 3 (the number of phenotype classes, 4, minus 1) and for comparing 0.47 with the critical value of 7.81, concluding that the null hypothesis is not rejected (the chi-square value is less than the critical value)",
        ], ["There are four phenotype categories, so df = 4 − 1 = <b>3</b>. The critical value at <i>p</i> = 0.05 with 3 degrees of freedom is 7.81. The calculated χ<sup>2</sup> = 0.47 is much less than 7.81, so we <b>fail to reject</b> the null hypothesis."], { label: "Part C", tip: "Failing to reject the null hypothesis does not <em>prove</em> the ratio. It means the data are consistent with it." }),
        P("D", "State what your conclusion in part C means for the experimental results.", [
          "For concluding that the observed offspring are consistent with the expected 9:3:3:1 ratio (the two genes assort independently), and that the small differences between observed and expected numbers are due to chance",
        ], ["The observed numbers are <b>consistent with the 9:3:3:1 ratio</b> expected from independent assortment of the two genes; the differences between the observed and expected counts are small enough to be explained by chance (random variation), so the data do not provide evidence against the hypothesis."], { label: "Part D" }),
      ]),
  ],
});
