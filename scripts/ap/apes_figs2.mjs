import { C, svg, text, line, circle, rect, path, defs, arrow, BLUE, RED, GREEN, GOLD, PURPLE, TEAL, NOTE, axes, title, pill, note, fig, curve } from "./lib2.mjs";
export const FIGS = {};
const A = (x1, y1, x2, y2, c = "ah", w = 2.5) => arrow(x1, y1, x2, y2, { stroke: c === "ah" ? C.ink : ({ ahr: RED, ahb: BLUE, ahg: GREEN, aho: C.orange })[c], w, marker: c });
const L = (x, y, t, o = {}) => text(x, y, t, { size: 11.5, ...o });

// urban runoff hydrograph
{
  let s = defs + title("Impervious surfaces: faster, higher runoff peaks after a storm");
  const x0 = 80, y0 = 230, w = 400, h = 160;
  s += axes(x0, y0, w, h, "time after rainfall begins", "stream discharge") + curve(x0, y0, w, h, (t) => 0.18 * Math.exp(-Math.pow((t - 0.5) / 0.28, 2)) + 0.02, { stroke: GREEN }) + curve(x0, y0, w, h, (t) => 0.95 * Math.exp(-Math.pow((t - 0.28) / 0.13, 2)) + 0.02, { stroke: RED });
  s += text(x0 + 140, y0 - 140, "urban (pavement)", { size: 12.5, weight: "bold", fill: RED, anchor: "start" }) + text(x0 + 270, y0 - 56, "natural\n(permeable soil)", { size: 12, weight: "bold", fill: GREEN, anchor: "start" });
  s += line(x0 + 0.28 * w, y0, x0 + 0.28 * w, y0 - 150, { stroke: "#bbb", w: 1, dash: "4 4" }).replace("", "");
  s += rect(520, 60, 220, 170, NOTE) + text(630, 84, "Urbanization causes", { size: 13, weight: "bold" }) + text(630, 110, "↓ infiltration, ↓ groundwater\n  recharge\n↑ runoff volume and speed\n↑ flash floods, erosion\n↑ pollutants in stormwater\n  (oil, salt, fertilizer)", { size: 11.5 }) + text(630, 212, "Fix: permeable pavement, green roofs", { size: 11, fill: GREEN, weight: "bold" });
  fig(FIGS, "urban-runoff", 760, 262, s, "Stream discharge versus time for urban and natural watersheds", "Pavement and rooftops prevent infiltration, so stormwater reaches streams faster and in larger volumes. The hydrograph peak is higher and earlier than in a natural watershed.");
}
// nuclear plant
{
  let s = defs + title("Nuclear power plant: fission heat makes steam that spins a turbine");
  s += rect(30, 70, 150, 150, { fill: "#f6e0e0", stroke: "#a55", rx: 8 }) + text(105, 62, "Reactor", { size: 13, weight: "bold" }) + text(105, 110, "U-235 fission\nheats water", { size: 11.5 }) + rect(60, 150, 90, 50, { fill: "#d9d9d9", stroke: "#555", rx: 4 }) + text(105, 170, "fuel rods +\ncontrol rods", { size: 10.5 });
  s += A(182, 110, 238, 110, "ahr", 3) + A(238, 190, 182, 190, "ahb", 3) + L(210, 100, "hot", { fill: RED, weight: "bold" }) + L(210, 210, "cool", { fill: BLUE, weight: "bold" });
  s += rect(240, 70, 120, 150, { fill: "#e8e8f4", stroke: "#557", rx: 8 }) + text(300, 62, "Steam generator", { size: 12.5, weight: "bold" }) + text(300, 150, "heat → steam", { size: 11.5 });
  s += A(362, 110, 428, 110, "ahr", 3) + `<polygon points="430,90 500,100 500,120 430,130" fill="#bbb" stroke="#555"/>` + text(465, 80, "Turbine", { size: 12.5, weight: "bold" }) + A(502, 110, 548, 110, "ah", 2.5) + circle(580, 110, 30, { fill: "#f6e27a", stroke: "#b08d1a" }) + text(580, 114, "Generator", { size: 10.5, weight: "bold" }) + L(580, 156, "electricity ⚡", { weight: "bold" });
  s += A(470, 130, 470, 188, "ahb", 2.5) + rect(410, 190, 120, 34, { fill: "#cfe6f7", stroke: "#4a90c2", rx: 6 }) + text(470, 212, "Condenser", { size: 12, weight: "bold" }) + A(408, 206, 362, 206, "ahb", 2.5) + L(470, 244, "cooling water (river or tower) → thermal pollution", { fill: C.muted });
  s += rect(60, 262, 640, 40, NOTE) + text(380, 286, "Pros: no CO₂ in operation, high energy density.  Cons: long-lived radioactive waste, accident risk, thermal pollution.", { size: 11.5, weight: "bold" });
  fig(FIGS, "nuclear-plant", 760, 318, s, "Nuclear power plant flow from reactor to steam generator to turbine and condenser", "Fission in the reactor heats water; steam drives a turbine connected to a generator. A condenser cools the steam back to liquid, usually using river or cooling-tower water.");
}
// hydro dam
{
  let s = defs + title("Hydroelectric dam: gravitational potential energy → kinetic → electrical");
  s += `<path d="M 60 70 L 330 70 L 330 220 L 60 220 Z" fill="#cfe6f7" stroke="none"/>` + `<polygon points="330,60 380,60 410,220 330,220" fill="#9a9a9a" stroke="#555" stroke-width="3"/>` + rect(410, 190, 300, 30, { fill: "#cfe6f7", stroke: "none", rx: 0 }) + text(190, 130, "reservoir\n(stored water, high PE)", { size: 12.5, weight: "bold" });
  s += A(300, 160, 366, 196, "ahb", 3) + L(300, 186, "penstock", { fill: BLUE, weight: "bold", anchor: "end" }) + circle(390, 200, 18, { fill: "#f6e27a", stroke: "#b08d1a" }) + text(390, 204, "turbine", { size: 9, weight: "bold" }) + A(410, 206, 520, 206, "ahb", 2.5) + L(480, 186, "downstream", { fill: BLUE });
  s += rect(500, 70, 230, 70, NOTE) + text(615, 94, "Reliable, no fuel emissions", { size: 12, weight: "bold" }) + text(615, 116, "but blocks fish migration, traps\nsediment, floods habitat", { size: 11.5 });
  s += L(190, 246, "Height of water ('head') and flow rate set the power output.", { fill: C.muted });
  fig(FIGS, "hydro-dam", 760, 268, s, "Hydroelectric dam showing reservoir, penstock, turbine and downstream river", "Water stored behind a dam has gravitational potential energy. It falls through a penstock, spins a turbine, and leaves downstream. Benefits are steady power; costs are altered river ecosystems.");
}
// smog formation
{
  let s = defs + title("Photochemical smog: primary pollutants + sunlight → secondary pollutants");
  s += pill(40, 70, 150, 50, "#f4e1a8", "NOx\n(vehicles, power plants)", { size: 11.5 }) + pill(40, 150, 150, 50, "#e8d9c4", "VOCs\n(fuels, solvents)", { size: 11.5 }) + circle(300, 135, 34, { fill: "#f6e27a", stroke: "#b08d1a" }).replace("", "") + text(300, 140, "☀ sunlight", { size: 12, weight: "bold" });
  s += A(192, 95, 262, 125, "ah", 2.5) + A(192, 175, 262, 150, "ah", 2.5) + A(336, 135, 410, 135, "ahr", 3);
  s += pill(412, 100, 150, 70, "#f4c8c8", "Ground-level ozone O₃\n+ PAN + aerosols", { size: 12 }) + A(564, 135, 620, 135, "ahr", 2.5) + L(690, 128, "lung irritation,\nasthma, crop damage", { weight: "bold", fill: RED });
  s += rect(60, 222, 640, 62, NOTE) + text(380, 244, "Worst on hot, sunny, stagnant days in cities (traffic rush-hour NOx peaks, ozone peaks in afternoon).", { size: 12 }) + text(380, 268, "Ozone is GOOD in the stratosphere (blocks UV) but a harmful pollutant at ground level.", { size: 12, weight: "bold" });
  fig(FIGS, "smog-formation", 760, 300, s, "Nitrogen oxides and VOCs reacting in sunlight to form ground-level ozone", "Smog forms when NOx and VOCs react in sunlight to produce secondary pollutants, mainly ground-level ozone. Hot, sunny weather and heavy traffic produce the worst events.");
}
// thermal inversion
{
  let s = defs + title("Thermal inversion: a warm layer caps cooler air and traps pollution");
  const panel = (x0, ttl, inv) => {
    let g = text(x0 + 160, 50, ttl, { size: 13, weight: "bold", fill: inv ? RED : GREEN });
    g += rect(x0, 66, 320, 180, { fill: "#eef6fb", stroke: "#ccd" });
    g += rect(x0, 224, 320, 22, { fill: "#8a7a5a", stroke: "none", rx: 0 });
    g += text(x0 + 52, 96, inv ? "WARM air" : "cool air", { size: 11.5, weight: "bold", fill: inv ? RED : BLUE }) + line(x0, inv ? 128 : 100, x0 + 320, inv ? 128 : 100, { stroke: inv ? RED : "#aaa", w: 2.5, dash: inv ? "" : "4 3" });
    g += text(x0 + 56, inv ? 186 : 160, inv ? "COOL air (trapped)" : "warm air rises", { size: 11.5, weight: "bold", fill: inv ? BLUE : RED });
    for (let i = 0; i < 6; i++) { const cx = x0 + 60 + i * 40; if (inv) g += `<ellipse cx="${cx}" cy="${206 - (i % 2) * 12}" rx="16" ry="9" fill="#999" opacity=".6"/>`; else g += A(cx, 214, cx, 74 + (i % 2) * 14, "ah", 1.6) + `<ellipse cx="${cx}" cy="${222}" rx="12" ry="6" fill="#999" opacity=".6"/>`; }
    g += text(x0 + 160, 262, inv ? "no vertical mixing → pollution stays near ground" : "pollutants mix upward and disperse", { size: 11.5, fill: C.muted });
    return g;
  };
  s += panel(30, "Normal: temp falls with height", false) + panel(410, "Inversion: warm layer above cool", true);
  fig(FIGS, "thermal-inversion", 760, 284, s, "Normal atmosphere with rising air versus a thermal inversion trapping pollutants near the ground", "Normally warm surface air rises and carries pollution upward. In an inversion a warm layer sits over cooler air, stopping that mixing and trapping pollutants (common in valleys like Los Angeles).");
}
// acid rain
{
  let s = defs + title("Acid rain: SO₂ and NOₓ become sulfuric and nitric acid");
  s += pill(30, 60, 150, 46, "#e8d9c4", "Coal plants → SO₂", { size: 12 }) + pill(30, 130, 150, 46, "#f4e1a8", "Vehicles → NOₓ", { size: 12 });
  s += A(182, 83, 250, 110, "ah", 2.5) + A(182, 153, 250, 125, "ah", 2.5) + `<ellipse cx="320" cy="116" rx="70" ry="28" fill="#eee" stroke="#aaa"/>` + text(320, 112, "+ H₂O (+ O₂)", { size: 11.5, weight: "bold" }) + text(320, 128, "in the atmosphere", { size: 10 }) + A(392, 116, 448, 116, "ahr", 2.5) + pill(450, 90, 150, 52, "#f4c8c8", "H₂SO₄ and HNO₃\nacid deposition (pH < 5.6)", { size: 11 });
  s += A(525, 144, 525, 190, "ahr", 2.5);
  s += rect(40, 200, 330, 86, NOTE) + text(205, 222, "Effects", { size: 13, weight: "bold" }) + text(205, 246, "lakes acidify → fish and amphibians die\nAl³⁺ released from soil → harms roots & fish\nstatues and buildings (CaCO₃) dissolve", { size: 11 });
  s += rect(390, 200, 330, 86, { fill: "#eef6ea", stroke: "#bcd" }) + text(555, 222, "Reducing it", { size: 13, weight: "bold" }) + text(555, 246, "scrubbers on smokestacks · low-sulfur coal\ncatalytic converters (NOₓ) · renewable energy\nLakes with limestone buffer better", { size: 11 });
  fig(FIGS, "acid-rain", 760, 306, s, "Sulfur dioxide and nitrogen oxides forming acids in the atmosphere and their effects", "Primary pollutants SO₂ and NOₓ react with water in the atmosphere to form sulfuric and nitric acids that fall as acid deposition, acidifying lakes and soils and damaging buildings.");
}
// eutrophication
{
  let s = defs + title("Eutrophication: nutrient pollution → algal bloom → oxygen crash");
  const st = [["1", "Excess N and P\nenter water\n(fertilizer, sewage)", "#f4e1a8"], ["2", "Algal bloom\n(surface turns\ngreen)", "#c8e0a8"], ["3", "Algae die, sink,\nand are\ndecomposed", "#e8d9c4"], ["4", "Bacteria use up\ndissolved O₂\n(BOD rises)", "#f4c8c8"], ["5", "Hypoxia / dead\nzone: fish and\ninvertebrates die", "#cfe6f7"]];
  st.forEach(([n, t, c], i) => { const x = 20 + i * 146; s += rect(x, 70, 132, 100, { fill: c, stroke: "#777", rx: 10 }) + circle(x + 18, 86, 12, { fill: "#fff", stroke: "#777" }) + text(x + 18, 91, n, { size: 13, weight: "bold" }) + text(x + 70, 124, t, { size: 11 }); if (i < 4) s += A(x + 134, 120, x + 144, 120, "ah", 2); });
  s += rect(60, 200, 640, 62, NOTE) + text(380, 224, "Phosphorus (freshwater) and nitrogen (coastal/marine) are the limiting nutrients.", { size: 12, weight: "bold" }) + text(380, 246, "Fix: riparian buffers, less fertilizer, better wastewater treatment, restoring wetlands.", { size: 11.5 });
  fig(FIGS, "eutrophication-chain", 760, 284, s, "Five-step chain from nutrient runoff to algal bloom to oxygen depletion and fish kill", "Nutrient runoff fuels algal blooms. When the algae die, decomposers consume dissolved oxygen, creating hypoxic dead zones where aquatic animals cannot survive.");
}
// wastewater treatment
{
  let s = defs + title("Wastewater treatment: increasingly thorough stages");
  const stg = [["Primary", "screens & settling tanks\nremove large solids\n(sludge settles)", "#e8d9c4"], ["Secondary", "bacteria digest organic\nmatter (aeration)\n→ BOD drops sharply", "#dff0d8"], ["Tertiary", "removes N and P,\nfilters, disinfects\n(chlorine / UV)", "#cfe6f7"]];
  s += pill(20, 130, 80, 50, "#eee", "Raw\nsewage", { size: 11.5 });
  stg.forEach(([n, t, c], i) => { const x = 130 + i * 190; s += A(x - 28, 155, x - 4, 155, "ah", 2.5) + rect(x, 80, 160, 150, { fill: c, stroke: "#777", rx: 10 }) + text(x + 80, 106, n, { size: 14, weight: "bold" }) + text(x + 80, 140, t, { size: 11 }); });
  s += A(700, 155, 726, 155, "ahb", 2.5).replace("", "") + L(715, 245, "clean\nwater out", { fill: BLUE, weight: "bold" });
  s += rect(60, 262, 640, 36, NOTE) + text(380, 285, "Many plants stop after secondary treatment, so nutrients (N, P) can still reach waterways.", { size: 12, weight: "bold" });
  fig(FIGS, "wastewater-stages", 760, 314, s, "Flow diagram of primary, secondary and tertiary wastewater treatment", "Primary treatment removes solids physically, secondary treatment uses bacteria to break down organic matter, and tertiary treatment removes nutrients and pathogens.");
}
// dose-response
{
  let s = defs + title("Dose-response curve: how toxicity increases with dose");
  const x0 = 90, y0 = 230, w = 420, h = 160;
  s += axes(x0, y0, w, h, "dose (log scale)", "% of test population affected");
  s += curve(x0, y0, w, h, (t) => 1 / (1 + Math.exp(-9 * (t - 0.55)))).replace("", "") ;
  s += line(x0, y0 - h / 2, x0 + 0.55 * w, y0 - h / 2, { stroke: "#999", w: 1.5, dash: "4 4" }) + line(x0 + 0.55 * w, y0 - h / 2, x0 + 0.55 * w, y0, { stroke: RED, w: 2, dash: "4 4" }) + circle(x0 + 0.55 * w, y0 - h / 2, 6, { fill: RED }) + text(x0 + 0.55 * w, y0 + 16, "LD50", { size: 12, weight: "bold", fill: RED }) + text(x0 - 6, y0 - h / 2 + 4, "50%", { size: 11, anchor: "end" });
  s += line(x0 + 0.2 * w, y0, x0 + 0.2 * w, y0 - 20, { stroke: GREEN, w: 2 }) + text(x0 + 0.2 * w, y0 + 16, "threshold", { size: 11, fill: GREEN, weight: "bold" });
  s += rect(540, 56, 200, 170, NOTE) + text(640, 80, "Reading the curve", { size: 13, weight: "bold" }) + text(640, 108, "LD50: dose that kills 50% of\ntest animals\n\nLower LD50 = MORE toxic\n\nBelow the threshold, little or\nno effect", { size: 11.5 });
  fig(FIGS, "dose-response", 760, 262, s, "Sigmoid dose-response curve marking the threshold and LD50", "Toxicity rises with dose along an S-shaped curve. LD50 is the dose lethal to half the test population: the lower the LD50, the more toxic the substance.");
}
// biomagnification
{
  let s = defs + title("Bioaccumulation and biomagnification: toxins concentrate up the food chain");
  const lev = [["Water", "0.000002 ppm", "#cfe6f7", 70], ["Plankton", "0.04 ppm", "#c8e0a8", 130], ["Small fish", "0.5 ppm", "#f4d8a8", 190], ["Large fish", "2 ppm", "#f4c8a0", 250], ["Fish-eating bird", "25 ppm", "#f4a8a0", 310]];
  lev.forEach(([n, c, col, w], i) => { s += rect(60, 60 + i * 44, 60 + i * 80, 38, { fill: col, stroke: "#777", rx: 4 }) + text(80, 84 + i * 44, n, { size: 12.5, weight: "bold", anchor: "start" }) + text(70 + 60 + i * 80 + 8, 84 + i * 44, c, { size: 11.5, anchor: "start", fill: RED, weight: "bold" }); });
  s += rect(500, 60, 240, 150, NOTE) + text(620, 84, "Persistent, fat-soluble toxins", { size: 12, weight: "bold" }) + text(620, 108, "(DDT, PCBs, mercury) are stored\nin fat, not excreted, so they\nbuild up in each organism and\nconcentrate at higher trophic\nlevels.", { size: 11.5 });
  s += L(380, 296, "Example concentrations are illustrative: the pattern (higher up = more concentrated) is what matters.", { fill: C.muted });
  fig(FIGS, "biomagnification", 760, 316, s, "Toxin concentration rising at each trophic level from water to fish-eating birds", "Persistent toxins accumulate in an organism's tissues (bioaccumulation) and become more concentrated at each higher trophic level (biomagnification), so top predators carry the highest levels.");
}
// ozone and CFC
{
  let s = defs + title("CFCs destroy ozone catalytically: one chlorine atom, thousands of ozone molecules");
  s += pill(40, 70, 200, 46, "#f4e1a8", "UV splits CFC → free Cl", { size: 12 }) + A(242, 93, 318, 93, "ah", 2.5);
  s += pill(320, 70, 190, 46, "#f4c8c8", "Cl + O₃ → ClO + O₂", { size: 13 }) + A(415, 118, 415, 176, "ahr", 2.5) + pill(320, 178, 190, 46, "#f4c8c8", "ClO + O → Cl + O₂", { size: 13 });
  s += path("M 320 200 C 270 200, 270 100, 318 92", { stroke: RED, w: 2.5, marker: "ahr" }).replace("", "") + L(260, 150, "Cl is regenerated\n(a catalyst)", { fill: RED, weight: "bold", anchor: "end" });
  s += rect(550, 70, 190, 154, NOTE) + text(645, 94, "Consequences", { size: 13, weight: "bold" }) + text(645, 120, "thinner stratospheric O₃\n→ more UV-B at the surface:\nskin cancer, cataracts,\ncrop & plankton damage", { size: 11.5 });
  s += rect(60, 246, 640, 40, NOTE) + text(380, 270, "Montreal Protocol (1987) phased out CFCs: ozone is slowly recovering, a rare policy success.", { size: 12, weight: "bold" });
  fig(FIGS, "ozone-cfc", 760, 304, s, "Catalytic chlorine cycle destroying ozone and its consequences", "A single chlorine atom from a CFC can destroy many ozone molecules because it is regenerated in the cycle. Less ozone means more UV-B reaches Earth.");
}
// greenhouse effect
{
  let s = defs + title("The greenhouse effect: gases absorb and re-radiate infrared heat");
  s += circle(80, 80, 30, { fill: "#f6e27a", stroke: "#b08d1a" }) + text(80, 85, "Sun", { size: 12, weight: "bold" });
  s += rect(60, 232, 520, 30, { fill: "#6fa86a", stroke: "none", rx: 0 }) + text(320, 252, "Earth's surface", { size: 12, weight: "bold", fill: "#fff" });
  s += rect(60, 110, 520, 44, { fill: "#e8eef9", stroke: "#bbc", rx: 4, dash: "4 3" }) + text(320, 136, "greenhouse gases: CO₂, CH₄, N₂O, water vapor", { size: 12, weight: "bold", fill: PURPLE });
  s += A(120, 108, 230, 228, "aho", 3) + L(130, 180, "sunlight\n(visible)", { fill: C.orange, weight: "bold", anchor: "start" });
  s += A(300, 228, 300, 160, "ahr", 3) + L(250, 200, "IR heat", { fill: RED, weight: "bold" }) + A(400, 108, 440, 40, "ahr", 2).replace("", "") + A(300, 108, 300, 54, "ahr", 2) + L(330, 70, "some escapes to space", { anchor: "start", fill: C.muted }) + path("M 350 156 C 380 180, 420 200, 440 228", { stroke: RED, w: 2.5, marker: "ahr", dash: "5 4" }) + L(444, 196, "re-radiated\ndown: warms\nthe surface", { fill: RED, weight: "bold", anchor: "start" });
  s += rect(610, 64, 130, 190, NOTE) + text(675, 88, "Natural vs. enhanced", { size: 12, weight: "bold" }) + text(675, 114, "Natural effect keeps\nEarth ~33°C warmer:\nessential for life.\n\nMore GHGs from\nfossil fuels, farming\nand deforestation\ntrap more heat →\nwarming.", { size: 10.5 });
  fig(FIGS, "greenhouse-effect", 760, 280, s, "Sunlight reaching Earth and infrared heat absorbed and re-radiated by greenhouse gases", "Earth's surface re-emits absorbed sunlight as infrared. Greenhouse gases absorb some of it and radiate it back down. The natural effect is essential; added greenhouse gases strengthen it.");
}
// ocean acidification
{
  let s = defs + title("Ocean acidification: CO₂ + water lowers ocean pH and harms shell-builders");
  s += pill(30, 66, 120, 46, "#e6eef9", "CO₂ (air)", { size: 13 }) + A(152, 89, 196, 89, "ah", 2.5) + pill(198, 66, 150, 46, "#cfe6f7", "CO₂ + H₂O → H₂CO₃", { size: 12 }) + A(350, 89, 394, 89, "ah", 2.5) + pill(396, 66, 160, 46, "#f4c8c8", "H₂CO₃ → H⁺ + HCO₃⁻", { size: 12 }) + A(558, 89, 600, 89, "ahr", 2.5) + pill(602, 66, 120, 46, "#f4a8a0", "pH ↓\n(more acidic)", { size: 12 });
  s += pill(200, 150, 330, 46, "#e8d9c4", "H⁺ + CO₃²⁻ → HCO₃⁻   (carbonate ions get used up)", { size: 12 }) + A(465, 114, 465, 148, "ah", 2.5).replace("", "");
  s += rect(40, 220, 330, 76, NOTE) + text(205, 242, "Why it matters", { size: 13, weight: "bold" }) + text(205, 266, "less CO₃²⁻ available → corals, oysters,\nplankton struggle to build CaCO₃ shells", { size: 11.5 });
  s += rect(390, 220, 330, 76, { fill: "#eef6ea", stroke: "#bcd" }) + text(555, 242, "Distinct from ocean warming", { size: 13, weight: "bold" }) + text(555, 266, "Warming → coral bleaching, less dissolved O₂\nAcidification → shell/skeleton building", { size: 11.5 });
  fig(FIGS, "ocean-acidification", 760, 314, s, "Chemical steps of ocean acidification from CO2 to lower pH and reduced carbonate", "Ocean water absorbs CO₂, forming carbonic acid that releases H⁺. The lower pH removes carbonate ions that shell-building organisms need. This is separate from the heat-related effects of warming.");
}
