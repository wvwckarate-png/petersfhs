// AP Biology FRQ — Sample exam (1 long + 1 short question, 13 points)
import { exam, P, Q, table } from "./frqlib.mjs";

// agar cube data
const sides = [0.5, 1.0, 2.0];
const vol = sides.map((s) => s ** 3), sa = sides.map((s) => 6 * s * s), ratio = sides.map((s, i) => sa[i] / vol[i]);
const pct = [100, 71, 28];
if (ratio.join() !== "12,6,3") throw new Error("SA/V " + ratio.join());
const tbl = table(["Cube side length (cm)", "Volume (cm³)", "Surface area (cm²)", "Percent of cube volume that changed color after 10 minutes"], sides.map((s, i) => [s.toFixed(1), vol[i].toFixed(3).replace(/\.?0+$/, ""), String(sa[i]), String(pct[i])]), "Table 1");

export default exam({
  id: "sample",
  title: "Sample Exam",
  description: "A short two-question sample (13 points) so you can see how the FRQ exams work — one long experiment question on cell size and one short meiosis/mitosis question. Safe to try; reset it afterward and take the full exams fresh.",
  sample: true,
  minutes: 35,
  questions: [
    Q("1", "Interpreting and Evaluating Experimental Results", 25,
      ["Cells exchange materials with their environment across the plasma membrane. To model how cell size affects the exchange of materials, a student cut cubes of agar of three different sizes. The agar contained phenolphthalein and sodium hydroxide, so it was pink. The student placed the cubes in a dilute solution of hydrochloric acid, which makes the agar colorless as the acid diffuses in. After 10 minutes, the student removed the cubes, cut each one in half, and measured the fraction of the cube that had changed color. The results are shown in Table 1."],
      [tbl],
      [
        P("A", "Calculate the surface-area-to-volume ratio (in cm<sup>−1</sup>) of the cube with a side length of 1.0 cm. Show your work.", [
          "For a correct ratio of 6 cm<sup>−1</sup> (surface area 6 cm<sup>2</sup> ÷ volume 1 cm<sup>3</sup>)",
        ], ["A cube with side length 1.0 cm has a surface area of 6 × (1.0 cm)<sup>2</sup> = 6.0 cm<sup>2</sup> and a volume of (1.0 cm)<sup>3</sup> = 1.0 cm<sup>3</sup>. The ratio is 6.0 cm<sup>2</sup> / 1.0 cm<sup>3</sup> = <b>6 cm<sup>−1</sup></b>."], { label: "Part A" }),
        P("B", "Identify the dependent variable in the experiment.", [
          "For identifying the dependent variable as the percent (or fraction) of the cube that changed color (the extent to which the acid had diffused into the cube)",
        ], ["The dependent variable is the <b>percent of the cube's volume that changed color</b> after 10 minutes, which indicates how far the acid diffused into the cube. (The independent variable is the size of the cube.)"], { label: "Part B" }),
        P("C", "Describe the relationship between the size of the cube and (i) the percent of the cube that changed color and (ii) the surface-area-to-volume ratio.", [
          "For describing that as the cube size increases, the percent of the cube that changed color decreases (100% to 71% to 28%)",
          "For describing that as the cube size increases, the surface-area-to-volume ratio decreases (12 to 6 to 3 cm<sup>−1</sup>)",
        ], ["(i) The larger the cube, the smaller the percentage of its volume that changed color: 100% for the 0.5 cm cube, 71% for the 1.0 cm cube, and 28% for the 2.0 cm cube. (ii) The surface-area-to-volume ratio also decreases as the cube gets bigger: 12, 6, and 3 cm<sup>−1</sup>, respectively."], { label: "Part C" }),
        P("D", "Explain how the surface-area-to-volume ratio limits the size that a cell can reach.", [
          "For explaining that as a cell grows, its volume (which determines its need for nutrients and its production of wastes) increases faster than its surface area (the membrane across which materials must pass)",
          "For explaining that a low surface-area-to-volume ratio means that materials cannot be exchanged (and distributed through the cell by diffusion) fast enough to meet the needs of the cell",
        ], ["When a cell grows, its volume increases as the cube of its linear dimension while its surface area increases only as the square, so the surface-area-to-volume ratio falls. The cell's needs for nutrients and its production of wastes are proportional to its volume, but its exchange of materials with the environment is proportional to the surface area of the plasma membrane. Beyond a certain size the membrane cannot exchange materials fast enough, and diffusion inside a large cell is too slow, so the cell cannot be larger."], { label: "Part D" }),
        P("E", "Identify one structural adaptation of cells that increases their surface-area-to-volume ratio.", [
          "For identifying a valid adaptation, such as microvilli, folds in the membrane, a flattened or elongated shape, or the thin, branched shape of neurons or root hairs",
        ], ["Microvilli (as on the cells that line the small intestine) greatly increase the surface area of the plasma membrane without increasing the volume much. Other examples: root hair cells, the long thin branched shape of neurons, and flat cells such as red blood cells."], { label: "Part E" }),
        P("F", "Justify the use of the agar cubes as a model for cells, and identify one limitation of the model.", [
          "For justifying that the agar cubes allow the surface-area-to-volume ratio and the diffusion of a substance into a volume to be measured for different sizes, with a color change that shows how far the acid diffused",
          "For identifying a limitation, such as that agar has no membrane with transport proteins, no active transport, no metabolism or organelles, and is not alive, so it models only passive diffusion",
        ], ["The cubes are a good model for the effect of size because the color change makes the distance traveled by the diffusing acid visible, and cubes of different sizes have precisely calculable surface areas and volumes. A limitation is that real cells have a selectively permeable plasma membrane, transport proteins (including active transport), and metabolism that consumes or produces substances inside the cell, and they are not uniform blocks of agar, so the model illustrates diffusion only."], { label: "Part F" }),
      ]),
    Q("2", "Conceptual Analysis", 10,
      ["Mitosis and meiosis are two types of nuclear division in eukaryotic cells. A cell of an animal has a diploid number of 2<i>n</i> = 8."],
      [],
      [
        P("A", "Describe what happens to the sister chromatids during anaphase of mitosis.", [
          "For describing that the sister chromatids separate (the centromeres split) and are pulled to opposite poles of the cell by the spindle fibers (as separate chromosomes)",
        ], ["During anaphase of mitosis, the centromeres divide and the sister chromatids separate. Each chromatid is now considered a chromosome. The spindle fibers (microtubules attached to the kinetochores) shorten and pull the chromosomes to opposite poles of the cell, so each pole receives a complete set of chromosomes."], { label: "Part A" }),
        P("B", "State the number of chromosomes in each daughter cell that results from mitosis and in each gamete that results from meiosis in this animal.", [
          "For stating 8 chromosomes in each daughter cell after mitosis and 4 chromosomes in each gamete after meiosis",
        ], ["Mitosis produces two genetically identical daughter cells, each with the diploid number: <b>8 chromosomes</b>. Meiosis produces four haploid gametes, each with half the number: <b>4 chromosomes</b>."], { label: "Part B" }),
        P("C", "Explain how meiosis, but not mitosis, produces genetic variation among the cells that result.", [
          "For explaining that meiosis includes crossing over (recombination between homologous chromosomes in prophase I)",
          "For explaining that meiosis also includes independent assortment of homologous chromosomes in metaphase I (random orientation), whereas in mitosis the daughter cells are genetically identical to the parent cell",
        ], ["Meiosis produces variation in two ways. During prophase I, homologous chromosomes exchange segments of DNA by crossing over, producing new combinations of alleles on each chromosome. At metaphase I, each homologous pair lines up independently of the others, so the maternal and paternal chromosomes are distributed to the gametes in random combinations. Mitosis has neither process: the sister chromatids are copies of each other, and the two daughter cells are genetically identical to the original cell."], { label: "Part C" }),
      ]),
  ],
});
