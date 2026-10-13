// AP Biology FRQ — Exam 4 (34 points, 90 minutes)
import { exam, P, Q, fig, table } from "./frqlib.mjs";
import { chart, cladogram, COL } from "./biofrqfigs.mjs";

// ---------- Q1: respirometry ----------
const times = [0, 5, 10, 15, 20];
const germ = [0, 0.12, 0.25, 0.36, 0.49], dry = [0, 0.01, 0.02, 0.02, 0.03], beads = [0, 0, 0, 0.01, 0.0];
const rGerm = germ[4] / 20, rDry = dry[4] / 20;
if (Math.abs(rGerm - 0.0245) > 1e-9 || Math.abs(rDry - 0.0015) > 1e-9) throw new Error("respirometry");
const respTable = table(["Time (min)", "Germinating peas", "Dry peas", "Glass beads"], times.map((t, i) => [String(t), germ[i].toFixed(2), dry[i].toFixed(2), beads[i].toFixed(2)]), "Table 1. Cumulative volume of O<sub>2</sub> consumed (mL) at 22 °C.");

// ---------- Q2: antibiotic resistance ----------
const gens = [0, 5, 10, 15, 20, 25];
const pctRes = [0.1, 0.8, 6, 35, 80, 96];
const pctChange = ((35 - 6) / 6) * 100;                    // 483%
if (Math.abs(pctChange - 483.3) > 0.1) throw new Error("percent change");
const resModel = fig(chart({
  w: 520, h: 320, x: [0, 25, 5], y: [0, 100, 20], xLabel: "Generation", yLabel: "Resistant bacteria (% of population)",
  series: [{ name: "resistant", pts: gens.map((g, i) => [g, pctRes[i]]), color: COL.a, markers: true }],
}), "A line graph of the percentage of resistant bacteria versus generation. The line is nearly flat near zero for the first 10 generations, then rises steeply between generations 10 and 20 and levels off near 96 percent by generation 25.",
{ caption: "Model graph: generation (independent variable) on the horizontal axis and percent resistant (dependent variable) on the vertical axis; an S-shaped rise." });
const resTable = table(["Generation", "Resistant bacteria (% of population)"], gens.map((g, i) => [String(g), String(pctRes[i])]), "Table 1. Bacteria grown in the presence of an antibiotic.");

// ---------- Q5: cladogram ----------
const clad = fig(cladogram({ tree: ["Lamprey", ["Shark", ["Frog", ["Lizard", "Mouse"]]]], W: 460, H: 260 }),
  "A cladogram. Lamprey branches off first, then shark, then frog. Lizard and mouse are the two closest relatives and share the most recent common ancestor.",
  { caption: "Figure 1. A cladogram of five vertebrates." });
const traitTable = table(["Organism", "Jaws", "Four limbs", "Amniotic egg", "Hair"], [["Lamprey", "No", "No", "No", "No"], ["Shark", "Yes", "No", "No", "No"], ["Frog", "Yes", "Yes", "No", "No"], ["Lizard", "Yes", "Yes", "Yes", "No"], ["Mouse", "Yes", "Yes", "Yes", "Yes"]], "Table 1");

// ---------- Q6: mark-recapture ----------
const marked = 80, caught = 100, recaptured = 16, Nest = (marked * caught) / recaptured;   // 500
if (Nest !== 500) throw new Error("mark recapture");

export default exam({
  id: "exam4",
  title: "Exam 4",
  description: "A full-length, six-question free-response exam: respiration in germinating seeds, antibiotic resistance, yeast fermentation, DNA structure, a cladogram, and a mark–recapture estimate.",
  minutes: 90,
  questions: [
    Q("1", "Interpreting and Evaluating Experimental Results", 25,
      ["A student used a respirometer to compare the rate of oxygen consumption by germinating pea seeds, dry (non-germinating) pea seeds, and glass beads of the same volume. Each sample was placed in a sealed vial that also contained a small amount of potassium hydroxide (KOH), which absorbs carbon dioxide. The vials were placed in a water bath at 22 °C, and the volume of gas that had been consumed in each vial was measured every five minutes. The results are shown in Table 1."],
      [respTable],
      [
        P("A", "Explain why KOH was included in each vial.", [
          "For explaining that KOH absorbs the CO<sub>2</sub> produced by respiration, so the change in gas volume in the vial is due only to the consumption of O<sub>2</sub>",
        ], ["Respiration consumes O<sub>2</sub> but also produces CO<sub>2</sub>, which would replace some of the lost volume and hide the O<sub>2</sub> consumption. KOH absorbs the CO<sub>2</sub> (forming potassium carbonate), so the decrease in the volume of gas is due only to the O<sub>2</sub> that was consumed."], { label: "Part A" }),
        P("B", "Justify the inclusion of the vial that contained glass beads.", [
          "For justifying that the beads, which do not respire, show any change in gas volume caused by physical factors such as temperature or pressure changes, so this change can be used as a control to correct the other results",
        ], ["Glass beads are not alive, so they do not consume O<sub>2</sub>. Any change in gas volume in that vial is due to physical changes in the apparatus (small changes in the temperature of the water bath or in atmospheric pressure). It is a control: the biological results can be corrected for this background change, and it shows that the decrease in the other vials is caused by the seeds."], { label: "Part B" }),
        P("C", "Calculate the average rate of O<sub>2</sub> consumption, in mL per minute, over the 20 minutes for the germinating peas and for the dry peas. Show your work.", [
          "For a correct rate for the germinating peas: 0.49 mL/20 min = 0.0245 mL/min (about 0.025)",
          "For a correct rate for the dry peas: 0.03 mL/20 min = 0.0015 mL/min",
        ], [`Rate = volume of O<sub>2</sub> consumed / time. Germinating peas: 0.49 mL/20 min = <b>0.0245 mL/min</b>. Dry peas: 0.03 mL/20 min = <b>0.0015 mL/min</b>. The germinating peas consumed O<sub>2</sub> about ${(rGerm / rDry).toFixed(0)} times as fast as the dry peas.`], { label: "Part C" }),
        P("D", "Explain the difference between the rates of O<sub>2</sub> consumption of the germinating peas and the dry peas.", [
          "For explaining that germinating seeds are metabolically active and carrying out cellular respiration at a high rate to supply ATP for growth (and to break down stored starch and other nutrients)",
          "For explaining that dry seeds are dormant, with very low metabolic activity, so they use very little O<sub>2</sub>",
        ], ["Germination is a period of rapid growth and cell division that needs a large supply of ATP. The germinating peas break down stored food (starch and lipids) and carry out aerobic cellular respiration at a high rate, so they consume O<sub>2</sub> quickly. Dry peas are dormant: they have little water, their enzymes are barely active, and their metabolic rate is very low, so they consume very little O<sub>2</sub>."], { label: "Part D" }),
        P("E", "The experiment with the germinating peas is repeated at 10 °C instead of 22 °C. Predict how the rate of O<sub>2</sub> consumption would compare with that at 22 °C, and justify your prediction.", [
          "For predicting that the rate would be lower at 10 °C",
          "For justifying that the enzymes of cellular respiration are less active at lower temperatures (molecules have less kinetic energy and fewer successful collisions), so the rate of the metabolic reactions, and of O<sub>2</sub> consumption, decreases",
        ], ["The rate of O<sub>2</sub> consumption would be <b>lower</b>. Cellular respiration is a series of enzyme-catalyzed reactions. At a lower temperature the molecules have less kinetic energy, so enzymes and substrates collide less often and with less energy, and the reactions are slower. Less ATP is produced per minute, and less O<sub>2</sub> is used by the electron transport chain."], { label: "Part E" }),
        P("F", "Identify the location in the cell where O<sub>2</sub> is used in aerobic cellular respiration, and the role that it plays there.", [
          "For identifying the mitochondrion (the inner mitochondrial membrane, the electron transport chain) and indicating that O<sub>2</sub> is the final electron acceptor (combining with electrons and H<sup>+</sup> to form water)",
        ], ["O<sub>2</sub> is used at the end of the electron transport chain, which is in the inner membrane of the <b>mitochondria</b>. It is the final electron acceptor: it accepts electrons and combines with H<sup>+</sup> to form water, which allows the chain to keep running and the proton gradient to drive ATP synthesis."], { label: "Part F" }),
      ]),

    Q("2", "Interpreting and Evaluating Experimental Results with Graphing", 25,
      ["A population of bacteria was grown in a medium containing an antibiotic. At the start, a very small percentage of the bacteria carried a gene for resistance to the antibiotic. Every five generations, a sample of the bacteria was tested to determine the percentage of resistant cells. The data are shown in Table 1."],
      [resTable],
      [
        P("A", "On paper, construct an appropriately labeled graph that represents the data in Table 1.", [
          "For correctly labeling and scaling the axes: generation on the horizontal axis and the percentage of resistant bacteria on the vertical axis, with appropriate scales and units",
          "For correctly plotting all six points and connecting them with a line or smooth curve",
        ], ["Plot the generation (0–25) on the horizontal axis and the percent of resistant bacteria (0–100) on the vertical axis, with even intervals. The six points are (0, 0.1), (5, 0.8), (10, 6), (15, 35), (20, 80), (25, 96), joined by a smooth line to give an S-shaped curve."], { label: "Part A", paper: true, modelFigures: [resModel] }),
        P("B", "Describe the trend in the percentage of resistant bacteria over time.", [
          "For describing that the percentage of resistant bacteria increased over the 25 generations, slowly at first and then rapidly between generations 10 and 20, and then more slowly as it approached 100%",
        ], ["The percentage of resistant bacteria increased from 0.1% in generation 0 to 96% in generation 25. The increase was slow at first (0.1% to 6% in the first 10 generations), fastest between generations 10 and 20 (6% to 80%), and slower again when most of the population was resistant."], { label: "Part B" }),
        P("C", "Explain how the data illustrate evolution by natural selection.", [
          "For explaining that the population had variation in resistance (a few bacteria already carried the resistance gene, from random mutation), and that the antibiotic is a selective pressure that killed the susceptible bacteria",
          "For explaining that the resistant bacteria survived and reproduced more and passed the resistance gene to their offspring, so the frequency of the resistance allele increased in the population over generations",
        ], ["There was heritable variation in the population: a few bacteria had a mutation that conferred resistance. The antibiotic acted as a selective pressure: susceptible cells died, while resistant cells survived and reproduced (differential reproductive success). Because the resistance gene is inherited by their offspring, each generation contained a higher proportion of resistant cells, so the allele frequency changed over time. This is natural selection."], { label: "Part C" }),
        P("D", "Calculate the percent change in the percentage of resistant bacteria between generation 10 and generation 15. Show your work.", [
          "For a correct calculation: [(35 − 6)/6] × 100 = 483% (an increase of about 480%)",
        ], [`Percent change = [(final − initial)/initial] × 100 = [(35 − 6)/6] × 100 = <b>${pctChange.toFixed(0)}%</b>. The share of resistant cells increased by almost six times between generation 10 and generation 15.`], { label: "Part D" }),
        P("E", "Assume that the gene for resistance has a metabolic cost, which makes resistant bacteria grow more slowly than susceptible bacteria in the absence of the antibiotic. Predict what would happen to the percentage of resistant bacteria if the antibiotic were removed after generation 25, and justify your prediction.", [
          "For predicting that the percentage of resistant bacteria would decrease over time",
          "For justifying that without the antibiotic there is no longer selection for resistance, and the cost of the gene means that the susceptible bacteria have higher reproductive success, so they would increase in frequency",
        ], ["The percentage of resistant bacteria would <b>decrease</b> over generations. Without the antibiotic, resistance no longer gives an advantage, but it still has the metabolic cost. Susceptible cells grow faster and reproduce more, so natural selection would now favor them, and the proportion of resistant cells would fall (though not necessarily to zero)."], { label: "Part E" }),
        P("F", "Bacteria can transfer resistance genes to other bacteria that are not their descendants. Describe one mechanism by which this can occur.", [
          "For describing a valid mechanism of horizontal gene transfer, such as conjugation (transfer of a plasmid through a pilus between two cells), transformation (uptake of DNA from the environment), or transduction (transfer by a virus)",
        ], ["In <b>conjugation</b>, one bacterium transfers a copy of a plasmid that carries the resistance gene to another bacterium through a connection called a pilus. (Transformation, in which a cell takes up DNA from its surroundings, and transduction, in which a virus carries DNA from one bacterium to another, are other acceptable mechanisms.) This is horizontal gene transfer, and it can spread resistance quickly, even between different species."], { label: "Part F" }),
      ]),

    Q("3", "Scientific Investigation", 10,
      ["Yeast are single-celled eukaryotes that can obtain energy from some sugars by fermentation in the absence of oxygen, producing ethanol and CO<sub>2</sub>. A student hypothesizes that yeast produce CO<sub>2</sub> faster when they are provided with glucose than when they are provided with lactose. The student has dry yeast, glucose, lactose, water, balloons, and flasks."],
      [],
      [
        P("A", "Identify the independent variable and the dependent variable in an experiment that tests the student's hypothesis.", [
          "For identifying the independent variable as the type of sugar (glucose or lactose) and the dependent variable as the rate of CO<sub>2</sub> production (for example, the volume of gas collected in a given time or the circumference of a balloon)",
        ], ["The independent variable is the <b>type of sugar</b> (glucose or lactose). The dependent variable is the <b>rate of CO<sub>2</sub> production</b>, measured as the volume of gas collected in a balloon (or in an inverted tube of water) over a fixed time."], { label: "Part A" }),
        P("B", "Describe a control for the experiment.", [
          "For describing a valid control, such as a flask with yeast and water but no sugar (to show the baseline CO<sub>2</sub> production), with the same amount of yeast, volume, and temperature in all of the flasks",
        ], ["A flask with the same amount of yeast and water but <b>no added sugar</b> is a negative control: it shows how much gas the yeast produce without a food source. All flasks should also have the same volume of liquid, the same mass of yeast and sugar (at the same concentration), and the same temperature."], { label: "Part B" }),
        P("C", "Predict the results of the experiment if the student's hypothesis is correct.", [
          "For predicting that the flask with glucose will produce more CO<sub>2</sub> (a larger volume of gas in a given time) than the flask with lactose",
        ], ["If the hypothesis is correct, the flask containing glucose will produce CO<sub>2</sub> faster (a larger volume of gas in the same time) than the flask containing lactose, which would produce about as little as the no-sugar control."], { label: "Part C" }),
        P("D", "Justify the prediction using the metabolic pathways of yeast.", [
          "For justifying that glucose can directly enter glycolysis and be fermented, producing ATP and CO<sub>2</sub>, whereas yeast lack the enzyme lactase to break lactose (a disaccharide) into glucose and galactose, so they cannot easily use lactose",
        ], ["Glucose is the starting molecule for glycolysis, so yeast can break it down and ferment the pyruvate to ethanol and CO<sub>2</sub>. Lactose is a disaccharide of glucose and galactose, and most yeast do not make lactase, the enzyme needed to hydrolyze it. Without that enzyme they cannot get glucose from lactose, so little fermentation and little CO<sub>2</sub> occurs."], { label: "Part D" }),
      ]),

    Q("4", "Conceptual Analysis", 10,
      ["The structure of DNA and the properties of water both depend on hydrogen bonding."],
      [],
      [
        P("A", "Describe how hydrogen bonding contributes to the structure of a DNA double helix.", [
          "For describing that hydrogen bonds form between complementary nitrogenous bases on the two strands (A with T, G with C), holding the two strands together",
        ], ["The two antiparallel strands of DNA are held together by hydrogen bonds between complementary base pairs: adenine pairs with thymine (two hydrogen bonds) and guanine pairs with cytosine (three hydrogen bonds). These weak bonds are collectively strong enough to hold the helix together but can be broken when the strands need to be separated for replication or transcription."], { label: "Part A" }),
        P("B", "Explain why water molecules form hydrogen bonds with each other.", [
          "For explaining that water is polar: the oxygen is partially negative and the hydrogens are partially positive, so the hydrogen of one water molecule is attracted to the oxygen of another",
        ], ["In a water molecule, the oxygen atom is more electronegative than the hydrogen atoms and pulls the shared electrons toward it, so oxygen has a partial negative charge and each hydrogen has a partial positive charge (a polar molecule). The partially positive hydrogen of one water molecule is attracted to the partially negative oxygen of a neighboring molecule, forming a hydrogen bond."], { label: "Part B" }),
        P("C", "Two samples of double-stranded DNA of the same length are heated slowly. Sample 1 is 30% guanine and cytosine (GC), and sample 2 is 60% GC. Predict which sample requires a higher temperature to separate the two strands, and justify your prediction.", [
          "For predicting that sample 2 (60% GC) requires the higher temperature",
          "For justifying that G–C base pairs have three hydrogen bonds, whereas A–T base pairs have two, so a DNA molecule with more GC pairs has more hydrogen bonds and requires more energy to separate the strands",
        ], ["Sample 2, with <b>60% GC</b>, would need the higher temperature. Each G–C pair is held together by three hydrogen bonds, and each A–T pair by only two. The DNA with a higher percentage of GC pairs has more hydrogen bonds per unit length, so more thermal energy is needed to break them and to separate (denature) the two strands."], { label: "Part C" }),
      ]),

    Q("5", "Analyze a Model or Visual Representation", 10,
      ["Figure 1 is a cladogram that shows the evolutionary relationships among five vertebrates, and Table 1 shows whether each organism has certain traits."],
      [clad, traitTable],
      [
        P("A", "Identify the two organisms in Figure 1 that are most closely related to each other.", [
          "For identifying the lizard and the mouse, which share the most recent common ancestor",
        ], ["The lizard and the mouse are the most closely related pair: they are each other's closest relatives on the cladogram because they are on branches that originate from the same, most recent common ancestor."], { label: "Part A" }),
        P("B", "Identify the trait in Table 1 that distinguishes the clade that includes the lizard and the mouse from the other organisms on the cladogram.", [
          "For identifying the amniotic egg (the trait that is present in the lizard and the mouse, but not in the lamprey, shark, or frog)",
        ], ["The <b>amniotic egg</b>. It is present in both the lizard and the mouse and absent in the lamprey, the shark, and the frog, so it is a shared derived trait that first appeared in their most recent common ancestor."], { label: "Part B" }),
        P("C", "A student claims that the frog is more closely related to the lizard than to the shark. Do you agree or disagree with the claim? Justify your answer using the cladogram and the data in Table 1.", [
          "For agreeing with the claim (the frog is more closely related to the lizard)",
          "For justifying that the frog and the lizard share a more recent common ancestor (which had four limbs) that the shark does not share, as shown by the position of the branches and by the shared trait of four limbs",
        ], ["I <b>agree</b>. On the cladogram, the frog and the lizard branch from a more recent common ancestor than the common ancestor that they share with the shark. They also share a derived trait, four limbs (Table 1), that the shark does not have, which indicates that this trait evolved in the ancestor of the frog, the lizard, and the mouse after the shark's lineage branched off."], { label: "Part C" }),
      ]),

    Q("6", "Analyze Data", 10,
      ["A biologist estimated the size of a population of ground beetles in a field using the mark–recapture method. The biologist captured 80 beetles, marked each one with a small dot of nontoxic paint, and released them. A week later the biologist captured 100 beetles, of which 16 were marked."],
      [],
      [
        P("A", "Calculate the estimated size of the beetle population. Show your work.", [
          "For a correct calculation using the proportion marked/total in the second sample = marked in the population/total population: 80/<i>N</i> = 16/100, so <i>N</i> = 500",
        ], [`The proportion of marked beetles in the second sample (16/100) should be the same as the proportion of marked beetles in the whole population (80/<i>N</i>). So 80/<i>N</i> = 16/100, which gives <i>N</i> = (80 × 100)/16 = <b>${Nest} beetles</b>.`], { label: "Part A" }),
        P("B", "Identify one assumption that must be true for the estimate in part A to be accurate.", [
          "For identifying a valid assumption, such as: marked beetles mix randomly with the unmarked beetles; marking does not affect survival or the chance of being recaptured; there is no (or little) immigration, emigration, birth, or death between the samples; or marks are not lost",
        ], ["One assumption is that the marked beetles mixed randomly and completely with the rest of the population (and were as likely to be captured as unmarked beetles). Others: marking did not harm the beetles or make them easier to see, marks did not wear off, and the population did not change significantly (births, deaths, immigration, emigration) during the week."], { label: "Part B" }),
        P("C", "Predict how the estimate would be affected if the paint made the marked beetles more likely to be eaten by predators during the week, and justify your prediction.", [
          "For predicting that the estimate would be too high",
          "For justifying that fewer marked beetles would survive to be recaptured, so the proportion of marked beetles in the second sample would be lower than in the population, making the population appear larger",
        ], ["The estimate would be <b>too high</b>. If marked beetles are eaten more often, fewer of them are left to be recaptured, so the fraction of marked beetles in the second sample is smaller than it should be. In the calculation <i>N</i> = (marked × second sample)/(recaptured), a smaller number of recaptured beetles in the denominator gives a larger value of <i>N</i>."], { label: "Part C" }),
      ]),
  ],
});
