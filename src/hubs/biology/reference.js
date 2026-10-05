// Reference sheets shown during MCQ exams. A study aid that mirrors the equations and statistical
// tables the real exam provides — the official sheet is available on exam day.

const row = (a, b) => `<tr><td>${a}</td><td>${b}</td></tr>`;
const table = (rows, head = ["Concept", "Equation"]) =>
  `<table><thead><tr><th>${head[0]}</th><th>${head[1]}</th></tr></thead><tbody>${rows.map((r) => row(r[0], r[1])).join("")}</tbody></table>`;

const REFERENCE = [
  {
    title: "Statistics & chi-square",
    html:
      "<h4>Statistics</h4>" +
      table([
        ["Mean", "x̄ = Σx<sub>i</sub> / n"],
        ["Standard deviation", "s = √[ Σ(x<sub>i</sub> − x̄)² / (n − 1) ]"],
        ["Standard error of the mean", "SE<sub>x̄</sub> = s / √n"],
        ["95% confidence interval", "x̄ ± 2 × SE<sub>x̄</sub> (approximate)"],
        ["Chi-square", "χ² = Σ (o − e)² / e"],
        ["Degrees of freedom", "df = (number of categories) − 1"],
      ]) +
      "<h4>Critical values of χ²</h4>" +
      `<table><thead><tr><th>p</th><th>df = 1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr></thead><tbody>
        <tr><td>0.05</td><td>3.84</td><td>5.99</td><td>7.81</td><td>9.49</td><td>11.07</td><td>12.59</td><td>14.07</td><td>15.51</td></tr>
        <tr><td>0.01</td><td>6.64</td><td>9.21</td><td>11.34</td><td>13.28</td><td>15.09</td><td>16.81</td><td>18.48</td><td>20.09</td></tr>
      </tbody></table><p style="font-size:12px;color:#767F73">If the calculated χ² is less than the critical value at p = 0.05, fail to reject the null hypothesis.</p>`,
  },
  {
    title: "Genetics & evolution",
    html:
      "<h4>Hardy–Weinberg</h4>" +
      table([
        ["Allele frequencies", "p + q = 1"],
        ["Genotype frequencies", "p² + 2pq + q² = 1"],
        ["Dominant allele p, recessive allele q", "q² = frequency of the homozygous recessive phenotype"],
      ]) +
      "<h4>Probability and mapping</h4>" +
      table([
        ["Independent events (AND)", "P(A and B) = P(A) × P(B)"],
        ["Mutually exclusive events (OR)", "P(A or B) = P(A) + P(B)"],
        ["Recombination frequency", "(recombinant offspring / total offspring) × 100 = map units"],
        ["Number of gamete combinations", "2<sup>n</sup>, where n = haploid number (no crossing over)"],
      ], ["Concept", "Rule"]),
  },
  {
    title: "Cells & energy",
    html:
      "<h4>Cell size and transport</h4>" +
      table([
        ["Surface area of a cube / sphere", "6s² / 4πr²"],
        ["Volume of a cube / sphere", "s³ / (4/3)πr³"],
        ["Surface area-to-volume", "SA/V (decreases as the cell grows)"],
        ["Water potential", "Ψ = Ψ<sub>p</sub> + Ψ<sub>s</sub>"],
        ["Solute potential", "Ψ<sub>s</sub> = −iCRT  (i = ionization constant, C = molar concentration, R = 0.0831 L·bar/(mol·K), T = temperature in K)"],
        ["Rate", "rate = Δ quantity / Δ time"],
        ["Dilution", "C<sub>1</sub>V<sub>1</sub> = C<sub>2</sub>V<sub>2</sub>"],
        ["pH", "pH = −log[H<sup>+</sup>]; each pH unit is a 10-fold change in [H<sup>+</sup>]"],
        ["Q<sub>10</sub>", "Q<sub>10</sub> = (R<sub>2</sub>/R<sub>1</sub>)<sup>10/(T<sub>2</sub> − T<sub>1</sub>)</sup>"],
      ]),
  },
  {
    title: "Ecology",
    html:
      "<h4>Populations and communities</h4>" +
      table([
        ["Rate of population change", "dN/dt = B − D"],
        ["Exponential growth", "dN/dt = r<sub>max</sub>N"],
        ["Logistic growth", "dN/dt = r<sub>max</sub>N (K − N)/K"],
        ["Doubling time (rule of 70)", "t ≈ 70 / (percent growth rate)"],
        ["Simpson's diversity index", "D = 1 − Σ (n/N)²"],
        ["Net primary productivity", "NPP = GPP − R"],
        ["Mark–recapture estimate", "N = (M × C) / R  (M marked, C captured, R recaptured marked)"],
        ["Energy transfer (rule of 10)", "about 10% of the energy passes to the next trophic level"],
      ]),
  },
];

export default REFERENCE;
