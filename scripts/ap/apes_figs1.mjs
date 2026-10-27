import { C, svg, text, line, circle, rect, path, defs, arrow, BLUE, RED, GREEN, GOLD, PURPLE, TEAL, NOTE, axes, title, pill, note, fig, curve } from "./lib2.mjs";
export const FIGS = {};
const A = (x1, y1, x2, y2, c = "ah", w = 2.5) => arrow(x1, y1, x2, y2, { stroke: c === "ah" ? C.ink : ({ ahr: RED, ahb: BLUE, ahg: GREEN, aho: C.orange })[c], w, marker: c });
const L = (x, y, t, o = {}) => text(x, y, t, { size: 11.5, ...o });

// biome climate
{
  let s = defs + title("Biomes follow temperature and precipitation");
  const x0 = 90, y0 = 270, w = 560, h = 210;
  s += axes(x0, y0, w, h, "annual precipitation (low → high)", "avg temperature (cold → hot)");
  const blob = (x, y, bw, bh, fill, lab, o = {}) => rect(x0 + x, y0 - y - bh, bw, bh, { fill, stroke: "#777", rx: 14 }) + text(x0 + x + bw / 2, y0 - y - bh / 2 + 4, lab, { size: o.size || 12, weight: "bold" });
  s += blob(20, 150, 120, 44, "#f4e1a8", "desert") + blob(160, 140, 130, 52, "#e3d98f", "savanna") + blob(310, 150, 230, 50, "#9ed48a", "tropical rainforest") + blob(20, 80, 130, 50, "#dfe9a6", "temperate grassland") + blob(170, 70, 160, 60, "#8cc56a", "temperate seasonal forest") + blob(350, 70, 190, 60, "#6fb07a", "temperate rainforest", { size: 11.5 }) + blob(60, 24, 150, 42, "#b9d4c0", "boreal forest (taiga)") + blob(250, 24, 120, 42, "#c6dde6", "cold, wetter taiga", { size: 10.5 }) + blob(20, 0, 110, 22, "#e8f0f4", "tundra", { size: 11 });
  fig(FIGS, "biome-climate", 760, 316, s, "Terrestrial biomes arranged by average temperature and precipitation", "Temperature and precipitation together determine which terrestrial biome forms. Move up for hotter climates and right for wetter ones. Boundaries are approximate.");
}
// water cycle
{
  let s = defs + title("The hydrologic cycle");
  s += rect(20, 40, 720, 200, { fill: "#eaf5fb", stroke: "none", rx: 8 }) + `<path d="M 20 190 L 200 190 L 260 120 L 330 150 L 400 190 L 740 190 L 740 240 L 20 240 Z" fill="#cfe6f7"/>` + path("M 200 190 L 260 120 L 330 150 L 400 190 Z", { fill: "#b9a98a", stroke: "#6b5a3a", w: 2 }) + rect(400, 190, 340, 50, { fill: "#4a90c2", stroke: "none", rx: 0 }) + rect(20, 190, 180, 50, { fill: "#cdb98f", stroke: "none", rx: 0 });
  const cloud = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="52" ry="20" fill="#fff" stroke="#bbb"/><ellipse cx="${x - 22}" cy="${y - 10}" rx="26" ry="16" fill="#fff" stroke="#bbb"/><ellipse cx="${x + 18}" cy="${y - 12}" rx="28" ry="18" fill="#fff" stroke="#bbb"/>`;
  s += cloud(330, 80) + L(330, 84, "condensation", { weight: "bold" });
  s += A(560, 186, 480, 100, "ahb", 2.5) + L(560, 150, "evaporation", { weight: "bold", fill: BLUE, anchor: "start" });
  s += A(120, 186, 150, 110, "ahg", 2.5) + L(70, 130, "transpiration\n(plants)", { weight: "bold", fill: GREEN });
  s += A(300, 100, 300, 142, "ahb", 2.5) + L(224, 112, "precipitation", { weight: "bold", fill: BLUE, anchor: "end" });
  s += A(300, 134, 370, 184, "aho", 2) + L(372, 168, "runoff", { weight: "bold", anchor: "start" });
  s += A(110, 196, 110, 228, "ah", 2) + L(120, 220, "infiltration → groundwater", { anchor: "start" });
  s += L(560, 224, "ocean", { weight: "bold", fill: "#fff", size: 13 });
  fig(FIGS, "water-cycle", 760, 258, s, "Hydrologic cycle with evaporation, transpiration, condensation, precipitation, runoff and infiltration", "Solar energy drives evaporation and transpiration; vapor condenses into clouds and returns as precipitation, then runs off or soaks into groundwater. The cycle moves water; it does not create or destroy it.");
}
// carbon cycle
{
  let s = defs + title("The carbon cycle: fast biological loops and slow geologic storage");
  s += pill(280, 50, 200, 46, "#e6eef9", "Atmosphere (CO₂)") + pill(40, 150, 170, 46, "#dff0d8", "Producers (plants)") + pill(300, 150, 160, 46, "#f4e1a8", "Consumers") + pill(550, 150, 170, 46, "#e8d9c4", "Decomposers") + pill(40, 262, 200, 46, "#d9d9d9", "Fossil fuels / sediments") + pill(560, 50, 170, 46, "#cfe6f7", "Oceans (dissolved C)");
  s += A(210, 148, 300, 98, "ahg", 2.5).replace("", "") + A(250, 98, 140, 148, "ahg", 2.5) + L(150, 118, "photosynthesis", { weight: "bold", fill: GREEN, anchor: "end" });
  s += A(340, 148, 380, 98, "ahr", 2) + L(392, 126, "respiration", { weight: "bold", fill: RED, anchor: "start" }) + A(600, 148, 470, 96, "ahr", 2) + L(560, 108, "respiration", { weight: "bold", fill: RED });
  s += A(210, 175, 298, 175, "ah", 2) + A(460, 175, 548, 175, "ah", 2) + L(255, 168, "eaten", {}) + L(505, 168, "dies/waste", {});
  s += A(140, 198, 140, 260, "ah", 2).replace("", "") + L(40, 235, "buried over\nmillions of years", { anchor: "start", fill: C.muted }) + A(240, 262, 360, 98, "aho", 2.5) + L(316, 230, "combustion", { weight: "bold", fill: C.orange, anchor: "start" });
  s += A(482, 66, 558, 66, "ahb", 2) + A(558, 80, 482, 80, "ahb", 2) + L(520, 58, "gas exchange", { fill: BLUE, weight: "bold", size: 10.5 });
  fig(FIGS, "carbon-cycle", 760, 328, s, "Carbon cycle showing photosynthesis, respiration, combustion, decomposition, ocean exchange and fossil fuel storage", "Photosynthesis moves carbon from the atmosphere into living things; respiration and decomposition return it. Burning fossil fuels moves carbon stored for millions of years back into the atmosphere in a very short time.");
}
// nitrogen cycle
{
  let s = defs + title("The nitrogen cycle: bacteria do most of the work");
  s += pill(290, 46, 180, 44, "#e6eef9", "N₂ in atmosphere (78%)") + pill(40, 150, 170, 44, "#f4e1a8", "NH₃ / NH₄⁺ (ammonia)") + pill(300, 150, 160, 44, "#e1d8f4", "NO₂⁻ → NO₃⁻ (nitrate)") + pill(550, 150, 170, 44, "#dff0d8", "plants & animals\n(organic N)", { size: 12 });
  s += A(300, 92, 180, 146, "ahg", 2.5) + L(190, 114, "nitrogen fixation\n(bacteria, lightning)", { weight: "bold", fill: GREEN, anchor: "end" });
  s += A(212, 172, 298, 172, "ahb", 2.5) + L(255, 160, "nitrification", { weight: "bold", fill: BLUE });
  s += A(462, 172, 548, 172, "ah", 2.5) + L(505, 160, "assimilation", { weight: "bold" });
  s += A(630, 196, 130, 230, "ah", 2).replace("", "") + path("M 640 196 C 640 260, 160 260, 130 198", { stroke: C.ink, w: 2.2, marker: "ah" }) + L(380, 252, "ammonification (decomposers return N as NH₄⁺)", { weight: "bold" });
  s += A(400, 148, 400, 94, "ahr", 2.5).replace("", "") + L(420, 126, "denitrification\n(anaerobic bacteria)", { weight: "bold", fill: RED, anchor: "start" });
  fig(FIGS, "nitrogen-cycle", 760, 278, s, "Nitrogen cycle: fixation, nitrification, assimilation, ammonification and denitrification", "Atmospheric N₂ is unusable until bacteria fix it into ammonia. Nitrification makes nitrate for plants, ammonification returns nitrogen from dead matter, and denitrification sends it back to the air as N₂.");
}
// phosphorus cycle
{
  let s = defs + title("The phosphorus cycle: no atmospheric phase, very slow rock phase");
  s += pill(40, 60, 170, 46, "#d9d9d9", "Rocks (phosphate)") + pill(300, 60, 170, 46, "#e8d9c4", "Soil / water (PO₄³⁻)") + pill(560, 60, 160, 46, "#dff0d8", "Producers → consumers") + pill(300, 190, 170, 46, "#cfe6f7", "Ocean sediments") + pill(560, 190, 160, 46, "#f4e1a8", "Decomposers");
  s += A(212, 84, 298, 84, "ah", 2.5) + L(255, 74, "weathering", { weight: "bold" }) + A(472, 84, 558, 84, "ah", 2.5) + L(515, 74, "uptake", { weight: "bold" }) + A(640, 108, 640, 188, "ah", 2).replace("", "") + L(650, 150, "death", { anchor: "start" }) + A(558, 206, 440, 108, "ah", 2) + L(520, 168, "decay", { anchor: "start" });
  s += A(380, 108, 380, 188, "ahb", 2.5) + L(392, 150, "runoff → sediment", { weight: "bold", fill: BLUE, anchor: "start" });
  s += path("M 300 214 C 120 214, 100 160, 120 112", { stroke: C.ink, w: 2.2, marker: "ah", dash: "6 5" }) + L(110, 200, "uplift over millions\nof years", { fill: C.muted, anchor: "end" });
  s += rect(60, 262, 640, 40, NOTE) + text(380, 286, "Phosphorus is often the LIMITING nutrient in freshwater. Added P (fertilizer, detergent) → algal blooms.", { size: 12.5, weight: "bold" });
  fig(FIGS, "phosphorus-cycle", 760, 318, s, "Phosphorus cycle through rocks, soil, organisms and ocean sediments with no atmospheric stage", "Phosphorus moves from rock to soil to organisms and back, but its geologic return (uplift) takes millions of years. Because it lacks a gas phase, added phosphorus tends to stay in ecosystems.");
}
// energy pyramid
{
  let s = defs + title("Energy pyramid: about 10% of energy passes to the next trophic level");
  const tier = (i, w, fill, lab, pct) => `<polygon points="${380 - (w / 2 - 28)},${60 + i * 52} ${380 + (w / 2 - 28)},${60 + i * 52} ${380 + w / 2},${108 + i * 52} ${380 - w / 2},${108 + i * 52}" fill="${fill}" stroke="#555"/>` + text(380, 90 + i * 52, lab, { size: 12.5, weight: "bold" }) + text(380 + w / 2 + 14, 90 + i * 52, pct, { size: 12, weight: "bold", fill: RED, anchor: "start" });
  s += tier(0, 150, "#f4b0a0", "tertiary consumers", "0.1%") + tier(1, 270, "#f4d8a8", "secondary consumers", "1%") + tier(2, 390, "#c8e0a8", "primary consumers", "10%") + tier(3, 510, "#8cc56a", "producers", "100%");
  s += A(90, 260, 90, 80, "ah", 2) + L(84, 170, "less energy\nat each level", { anchor: "end", fill: C.muted });
  s += rect(40, 282, 680, 40, NOTE) + text(380, 306, "Where does the other ~90% go? Respiration (heat), uneaten parts, waste. That limits food chains to 4–5 levels.", { size: 12.5, weight: "bold" });
  fig(FIGS, "energy-pyramid", 760, 338, s, "Trophic energy pyramid showing 100 percent, 10 percent, 1 percent and 0.1 percent of energy at each level", "Only about 10% of the energy at one trophic level becomes biomass at the next. Energy pyramids are therefore always upright, and food chains rarely exceed four or five levels.");
}
// island biogeography
{
  let s = defs + title("Island biogeography: species number balances immigration and extinction");
  const g = (x0, ttl, imms, exts, note) => {
    let o = text(x0 + 130, 50, ttl, { size: 13, weight: "bold" }) + axes(x0, 220, 260, 140, "number of species on island", "rate");
    imms.forEach(([v, dash, lab]) => { let d = ""; for (let i = 0; i <= 40; i++) { const t = i / 40; d += (i ? " L " : "M ") + (x0 + t * 260) + " " + (220 - v * (1 - t) * 130); } o += path(d, { stroke: BLUE, w: 3.2, dash }) + text(x0 + 6 + (dash ? 40 : 0), 220 - v * 130 + (dash ? 22 : -8), lab, { size: 10.5, fill: BLUE, weight: "bold", anchor: "start" }); });
    exts.forEach(([v, dash, lab]) => { let d = ""; for (let i = 0; i <= 40; i++) { const t = i / 40; d += (i ? " L " : "M ") + (x0 + t * 260) + " " + (220 - v * t * 130); } o += path(d, { stroke: RED, w: 3.2, dash }) + text(x0 + 254, 220 - v * 130 - 6 + (dash ? 24 : 0), lab, { size: 10.5, fill: RED, weight: "bold", anchor: "end" }); });
    return o + text(x0 + 130, 266, note, { size: 11.5, fill: C.muted });
  };
  s += g(60, "Near vs. far from the mainland", [[0.95, "", "near: more immigration"], [0.5, "6 4", "far"]], [[0.6, "", "extinction"]], "far island: lower immigration curve → fewer species at equilibrium");
  s += g(420, "Large vs. small island", [[0.8, "", "immigration"]], [[0.45, "", "large: lower extinction"], [0.95, "6 4", "small"]], "small island: higher extinction curve → fewer species");
  s += rect(60, 290, 640, 36, NOTE) + text(380, 313, "Equilibrium richness is highest on LARGE islands CLOSE to the mainland.", { size: 12.5, weight: "bold" });
  fig(FIGS, "island-biogeography", 760, 340, s, "Immigration and extinction rate curves for near and far islands and large and small islands", "Immigration falls and extinction rises as an island fills. They cross at an equilibrium species number. Distance lowers the immigration curve and small size raises the extinction curve.");
}
// tolerance curve
{
  let s = defs + title("Range of tolerance: where a population thrives, struggles, or cannot live");
  const x0 = 90, y0 = 230, w = 560, h = 160;
  s += axes(x0, y0, w, h, "environmental factor (temperature, pH, salinity…)", "population / performance");
  s += `<path d="M ${x0 + 60} ${y0} ` + Array.from({ length: 61 }, (_, i) => { const t = i / 60; return `L ${x0 + 60 + t * 440} ${y0 - Math.exp(-Math.pow((t - 0.5) / 0.22, 2)) * 130}`; }).join(" ") + ` L ${x0 + 500} ${y0} Z" fill="#cfe6c4" stroke="${GREEN}" stroke-width="3"/>`;
  [[x0 + 60, "limit of\ntolerance"], [x0 + 500, "limit of\ntolerance"]].forEach(([x, t]) => s += line(x, y0, x, y0 - 70, { stroke: RED, w: 1.5, dash: "4 3" }) + text(x, y0 - 78, t, { size: 11, fill: RED }));
  s += text(x0 + 280, y0 - 70, "zone of optimum", { size: 12.5, weight: "bold", fill: GREEN }) + text(x0 + 150, y0 - 34, "zone of\nphysiological stress", { size: 11.5, fill: C.muted }) + text(x0 + 410, y0 - 34, "zone of\nphysiological stress", { size: 11.5, fill: C.muted }) + text(x0 + 30, y0 - 20, "zone of\nintolerance", { size: 11, fill: C.muted }) + text(x0 + 530, y0 - 20, "zone of\nintolerance", { size: 11, fill: C.muted });
  fig(FIGS, "tolerance-curve", 760, 290, s, "Bell-shaped tolerance curve with optimum, stress and intolerance zones", "Each species survives within a limited range of any environmental factor. Population is highest in the zone of optimum, declines in the stress zones, and is absent beyond the limits of tolerance.");
}
// succession
{
  let s = defs + title("Ecological succession: primary starts from bare rock, secondary from existing soil");
  const stages = ["bare rock", "lichens\n& moss", "grasses &\nwildflowers", "shrubs", "pine\nforest", "hardwood\n(climax)"]; const cols = ["#bbb", "#c9d9a0", "#b8d878", "#7fb860", "#4f9a50", "#2f7a3c"];
  stages.forEach((t, i) => { const x = 60 + i * 120; s += rect(x, 80, 100, 60 + i * 10, { fill: cols[i], stroke: "#555", rx: 4 }).replace(/y="80"/, `y="${150 - (60 + i * 10) + 60}"`); });
  stages.forEach((t, i) => s += L(110 + i * 120, 228, t, { weight: "bold" }));
  s += text(380, 62, "PRIMARY: no soil to start (volcanic rock, glacial retreat), takes hundreds to thousands of years", { size: 12, weight: "bold", fill: PURPLE });
  s += line(50, 256, 710, 256, { stroke: C.line, w: 1.5 });
  s += text(380, 280, "SECONDARY: soil remains after fire, flood, or farming, so it begins at grasses and is much faster", { size: 12, weight: "bold", fill: BLUE }) + A(330, 296, 650, 296, "ahb", 2.5) + L(240, 300, "starts here →", { fill: BLUE, weight: "bold" });
  s += L(380, 324, "Pioneer species (lichens, grasses) build soil; later species out-compete them for light.", { fill: C.muted });
  fig(FIGS, "succession", 760, 340, s, "Succession stages from bare rock to climax forest with primary and secondary starting points", "Primary succession builds soil from bare rock through pioneer species, while secondary succession restarts on existing soil and reaches forest much faster.");
}
// growth curves
{
  let s = defs + title("Exponential (J) vs. logistic (S) population growth");
  const x0 = 90, y0 = 240, w = 360, h = 170;
  s += axes(x0, y0, w, h, "time", "population size N");
  s += curve(x0, y0, w, h, (t) => Math.min(0.98, 0.03 * Math.exp(3.5 * t)), { stroke: BLUE }) + curve(x0, y0, w, h, (t) => 0.8 / (1 + 25 * Math.exp(-9 * t)), { stroke: RED }).replace("", "") ;
  s += line(x0, y0 - 0.8 * h, x0 + w, y0 - 0.8 * h, { stroke: "#999", w: 1.5, dash: "5 4" }) + text(x0 + w - 6, y0 - 0.8 * h - 6, "carrying capacity K", { size: 12, weight: "bold", anchor: "end" }), 0 && text(0, 0, "carrying capacity K", { size: 12, weight: "bold", anchor: "end" });
  s += text(x0 + 10, y0 - 150, "exponential: dN/dt = rN", { size: 12, weight: "bold", fill: BLUE, anchor: "start" }) + text(x0 + w - 6, y0 - 0.8 * h + 22, "logistic: levels off at K", { size: 12, weight: "bold", fill: RED, anchor: "end" });
  s += rect(500, 60, 240, 170, NOTE) + text(620, 84, "Logistic growth phases", { size: 13, weight: "bold" }) + text(620, 110, "1. slow start (few reproducers)\n2. fastest growth near K/2\n3. slows as resources run low\n4. fluctuates around K", { size: 12 }) + text(620, 192, "Density-dependent limits (food,\ndisease) set K.", { size: 11.5, fill: C.muted });
  fig(FIGS, "growth-curves", 760, 282, s, "Exponential J-shaped growth compared with logistic S-shaped growth leveling at carrying capacity", "Exponential growth has no limit and produces a J-curve. Real populations meet limiting factors, so growth slows and levels off around the carrying capacity (K) in an S-curve.");
}
// survivorship
{
  let s = defs + title("Survivorship curves: when in life does death mostly occur?");
  const x0 = 90, y0 = 240, w = 360, h = 170;
  s += axes(x0, y0, w, h, "percent of life span", "number surviving (log scale)") + curve(x0, y0, w, h, (t) => 1 - Math.pow(t, 5) * 0.95, { stroke: BLUE }) + curve(x0, y0, w, h, (t) => 1 - t * 0.9, { stroke: GREEN }) + curve(x0, y0, w, h, (t) => 0.95 * Math.exp(-6 * t) + 0.02, { stroke: RED });
  s += text(x0 + 295, y0 - 120, "Type I", { size: 12.5, weight: "bold", fill: BLUE }) + text(x0 + 220, y0 - 82, "Type II", { size: 12.5, weight: "bold", fill: GREEN }) + text(x0 + 80, y0 - 20, "Type III", { size: 12.5, weight: "bold", fill: RED });
  s += rect(490, 54, 250, 180, NOTE) + text(615, 78, "Which strategy?", { size: 13, weight: "bold" }) + text(615, 102, "Type I: most live to old age\n(K-selected, few offspring, e.g. humans)", { size: 11.5, fill: BLUE }) + text(615, 144, "Type II: constant death rate\n(e.g. many birds)", { size: 11.5, fill: GREEN }) + text(615, 184, "Type III: most die young\n(r-selected, many offspring, e.g. fish, insects)", { size: 11.5, fill: RED });
  fig(FIGS, "survivorship-curves", 760, 276, s, "Type I, Type II and Type III survivorship curves", "Survivorship curves show when mortality occurs. Type I (late loss) goes with K-selected species, Type III (early loss) with r-selected species, and Type II is a steady death rate.");
}
// age structure
{
  let s = defs + title("Age-structure diagrams predict future population growth");
  const pyr = (cx, ttl, widths, note) => { let g = text(cx, 52, ttl, { size: 13, weight: "bold" }); widths.forEach((wd, i) => { const y = 222 - i * 20; g += rect(cx - wd, y, wd, 18, { fill: "#a9c8f0", stroke: "#555", rx: 1 }) + rect(cx, y, wd, 18, { fill: "#f4b0a0", stroke: "#555", rx: 1 }); }); g += text(cx - 40, 258, "male", { size: 10.5, fill: C.muted }) + text(cx + 40, 258, "female", { size: 10.5, fill: C.muted }) + text(cx, 278, note, { size: 11.5, weight: "bold" }); return g; };
  s += pyr(130, "Expansive", [78, 68, 58, 48, 38, 28, 18, 8], "rapid growth");
  s += pyr(380, "Stable", [50, 52, 52, 50, 46, 38, 24, 12], "slow / zero growth");
  s += pyr(630, "Declining", [30, 38, 48, 56, 52, 40, 26, 12], "population shrinking");
  s += text(380, 306, "Look at the BASE: wide base = many future parents; narrow base = fewer births ahead.", { size: 12.5, weight: "bold" }).replace("", "");
  s += L(380, 232 + 0, "", {});
  fig(FIGS, "age-structure", 760, 324, s, "Age structure diagrams for expansive, stable and declining populations", "A wide base (many young people) predicts rapid growth, a straight-sided shape predicts stability, and a narrow base predicts decline. Compare the pre-reproductive group with the reproductive group.");
}
// demographic transition
{
  let s = defs + title("Demographic transition model: births and deaths change at different times");
  const x0 = 70, y0 = 230, w = 640, h = 150;
  s += axes(x0, y0, w, h, "", "rate (births or deaths per 1,000)");
  const sx = [0, .22, .5, .78, 1];
  ["Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5?"].forEach((t, i) => { s += text(x0 + (i + .5) * w / 5, y0 + 18, t, { size: 12, weight: "bold" }) + (i ? line(x0 + i * w / 5, 70, x0 + i * w / 5, y0, { stroke: "#ddd", w: 1, dash: "4 4" }) : ""); });
  const br = (t) => t < .2 ? .78 : t < .4 ? .78 - (t - .2) / .2 * .12 : t < .6 ? .66 - (t - .4) / .2 * .35 : t < .8 ? .31 - (t - .6) / .2 * .12 : .19 - (t - .8) / .2 * .04;
  const dr = (t) => t < .2 ? .72 : t < .4 ? .72 - (t - .2) / .2 * .5 : t < .6 ? .22 - (t - .4) / .2 * .06 : t < .8 ? .16 : .16 + (t - .8) / .2 * .02;
  s += curve(x0, y0, w, h, br, { stroke: BLUE }) + curve(x0, y0, w, h, dr, { stroke: RED });
  s += text(x0 + 22, y0 - 120, "birth rate", { size: 12, weight: "bold", fill: BLUE, anchor: "start" }) + text(x0 + .3 * w, y0 - 30, "death rate", { size: 12, weight: "bold", fill: RED });
  s += text(x0 + w / 5 * 1.5, 62, "gap = rapid growth (stage 2–3)", { size: 12, weight: "bold", fill: GREEN });
  s += L(380, 280, "Stage 1: both high · Stage 2: death rate drops first · Stage 3: birth rate falls · Stage 4: both low · Stage 5: births < deaths", { fill: C.muted, size: 11 });
  fig(FIGS, "demographic-transition", 760, 298, s, "Birth and death rate curves across five stages of the demographic transition", "Death rates fall first (sanitation, medicine), so population surges while birth rates remain high. As birth rates later decline, growth slows and eventually stalls or reverses.");
}
// plate boundaries
{
  let s = defs + title("Plate boundaries: how plates move relative to each other");
  const pl = (x, y, w, c) => rect(x, y, w, 24, { fill: c, stroke: "#555", rx: 2 });
  s += text(130, 50, "Convergent", { size: 13, weight: "bold", fill: RED });
  s += pl(30, 120, 110, "#c8a878") + `<polygon points="140,120 230,120 230,144 140,144" fill="#d9c7a8" stroke="#555"/>` + `<polygon points="140,144 230,190 230,214 140,150" fill="#b89868" stroke="#555"/>`.replace("", "") + A(40, 110, 100, 110, "ahr", 2.5) + A(230, 110, 175, 110, "ahr", 2.5) + L(130, 236, "subduction · trench · volcanoes\nearthquakes · mountains", { fill: C.muted });
  s += `<polygon points="190,118 205,92 220,118" fill="#c0392b"/>`;
  s += line(260, 44, 260, 260, { stroke: C.line, w: 1.5 });
  s += text(380, 50, "Divergent", { size: 13, weight: "bold", fill: BLUE }) + pl(280, 120, 80, "#c8a878") + pl(400, 120, 80, "#c8a878") + rect(360, 120, 40, 24, { fill: "#e8774a", stroke: "none", rx: 0 }) + A(350, 190, 290, 190, "ahb", 2.5) + A(410, 190, 470, 190, "ahb", 2.5) + L(380, 236, "new crust at mid-ocean ridges\nand rift valleys", { fill: C.muted });
  s += line(500, 44, 500, 260, { stroke: C.line, w: 1.5 });
  s += text(620, 50, "Transform", { size: 13, weight: "bold", fill: GREEN }) + pl(520, 100, 100, "#c8a878") + pl(630, 160, 100, "#c8a878") + A(540, 90, 600, 90, "ahg", 2.5) + A(710, 210, 650, 210, "ahg", 2.5) + L(620, 250, "slide past: earthquakes,\nlittle volcanism (e.g. San Andreas)", { fill: C.muted });
  fig(FIGS, "plate-boundaries", 760, 276, s, "Convergent, divergent and transform plate boundaries", "Convergent boundaries collide (subduction, mountains, volcanoes), divergent boundaries pull apart (new crust), and transform boundaries slide sideways (earthquakes).");
}
// atmosphere layers
{
  let s = defs + title("Layers of the atmosphere: temperature changes direction at each boundary");
  const layers = [["Troposphere", "0–12 km · weather · temp falls with height", "#cfe6f7"], ["Stratosphere", "12–50 km · OZONE LAYER · temp rises with height", "#e1d8f4"], ["Mesosphere", "50–85 km · temp falls · meteors burn up", "#d8ecd8"], ["Thermosphere", "85+ km · temp rises · auroras, ISS", "#f4e1d8"]];
  layers.forEach(([n, d, c], i) => { const y = 220 - i * 46; s += rect(60, y - 30, 330, 44, { fill: c, stroke: "#777", rx: 2 }) + text(225, y - 12, n, { size: 13, weight: "bold" }) + text(225, y + 5, d, { size: 10.5, fill: C.muted }); });
  const x0 = 440, y0 = 240;
  s += axes(x0, y0, 280, 200, "temperature →", "altitude") + path(`M ${x0 + 200} ${y0} L ${x0 + 90} ${y0 - 46} L ${x0 + 120} ${y0 - 92} L ${x0 + 50} ${y0 - 138} L ${x0 + 140} ${y0 - 190}`, { stroke: RED, w: 3.5 });
  s += text(x0 + 140, y0 - 120, "", {}) + L(x0 + 215, y0 - 94, "O₃ absorbs UV\n→ warming", { fill: PURPLE, anchor: "start", weight: "bold" });
  s += rect(60, 262, 330, 40, NOTE) + text(225, 286, "Weather and most air live in the troposphere.", { size: 12, weight: "bold" });
  fig(FIGS, "atmosphere-layers", 760, 316, s, "Atmospheric layers with a temperature versus altitude profile", "The troposphere holds weather and most of the air. The stratosphere warms with height because ozone absorbs ultraviolet radiation. Each layer boundary reverses the temperature trend.");
}
// wind cells
{
  let s = defs + title("Global circulation: three cells per hemisphere");
  const bands = [[0, "Equator · ITCZ\nrising air, heavy rain"], [30, "30° · descending dry air\n→ deserts"], [60, "60° · rising air\n→ wet, subpolar low"], [90, "Pole · cold dry\nsinking air"]];
  const X = (lat) => 70 + (lat / 90) * 600;
  s += `<rect x="70" y="60" width="600" height="180" rx="10" fill="#eef6fb" stroke="#ccd"/>`;
  [0, 30, 60, 90].forEach((lat) => s += line(X(lat), 60, X(lat), 240, { stroke: "#bbb", w: 1.2, dash: "4 4" }) + text(X(lat), 256, lat + "°" + (lat === 0 ? " (equator)" : lat === 90 ? " (pole)" : ""), { size: 11.5, weight: "bold" }));
  const cell = (xa, xb, lab, col) => path(`M ${X(xa)} 200 C ${X(xa)} 90, ${X(xb)} 90, ${X(xb)} 200`, { stroke: col, w: 3, marker: "ah" }) + text((X(xa) + X(xb)) / 2, 150, lab, { size: 12, weight: "bold", fill: col });
  s += cell(0, 30, "Hadley", RED) + cell(30, 60, "Ferrel", GREEN) + cell(60, 90, "Polar", BLUE);
  s += L(X(0) + 8, 226, "rises", { anchor: "start" }) + L(X(30), 226, "sinks", {}) + L(X(60), 226, "rises", {}) + L(X(90) - 8, 226, "sinks", { anchor: "end" });
  s += text(380, 40, "", {}) + rect(70, 266, 600, 54, NOTE) + text(370, 288, "Rising air → low pressure → rain.  Sinking air → high pressure → dry.", { size: 12.5, weight: "bold" }) + text(370, 308, "Trade winds blow toward the equator (E→W); westerlies at mid-latitudes. Coriolis deflects right in N. Hemisphere.", { size: 11 });
  fig(FIGS, "wind-cells", 760, 334, s, "Hadley, Ferrel and Polar circulation cells with rising and sinking air at 0, 30 and 60 degrees", "Air rises at the equator and at 60° (wet climates) and sinks at 30° and the poles (dry climates). The Coriolis effect bends the surface winds into trade winds and westerlies.");
}
// solar angle & seasons
{
  let s = defs + title("Sunlight angle controls heating, and axial tilt creates the seasons");
  s += text(190, 52, "Same beam, different area", { size: 13, weight: "bold" });
  [[110, 90], [150, 90], [190, 90]].forEach(([x]) => s += A(x, 70, x, 140, "aho", 2.5));
  s += line(90, 144, 230, 144, { w: 5, stroke: "#8a6d3b" }) + L(160, 164, "direct (equator): small area, intense", { fill: C.muted });
  [[300, 70], [320, 70], [340, 70]].forEach(([x]) => s += `<line x1="${x}" y1="70" x2="${x + 20}" y2="130" stroke="${C.orange}" stroke-width="2.5" marker-end="url(#aho)"/>`);
  s += line(270, 150, 390, 110, { w: 5, stroke: "#8a6d3b" }) + L(340, 170, "oblique (poles): spread out, weak", { fill: C.muted });
  s += line(430, 44, 430, 200, { stroke: C.line, w: 1.5 });
  s += text(590, 52, "Tilt (23.5°) → seasons", { size: 13, weight: "bold" }) + circle(520, 120, 12, { fill: "#f6e27a", stroke: "#b08d1a" }) + circle(620, 120, 28, { fill: "#a9c8f0", stroke: "#4a90c2" }) + line(606, 150, 636, 92, { w: 2, stroke: C.ink }) + L(620, 172, "N. Hemisphere tilted toward Sun\n→ summer (June)", { fill: C.muted }) + circle(690, 120, 0, {});
  s += rect(60, 200, 640, 50, NOTE) + text(380, 222, "Distance from the Sun is NOT the cause of seasons.", { size: 12.5, weight: "bold" }) + text(380, 241, "Tilt changes the sun angle and the length of the day; the equator stays warm all year.", { size: 11.5 });
  fig(FIGS, "solar-angle", 760, 266, s, "Sunlight spread over a small area at the equator and a large area at the poles, and Earth's axial tilt", "Direct sunlight concentrates energy; oblique sunlight spreads it out. Earth's tilt (not its distance from the Sun) changes the sun angle and day length through the year.");
}
// soil profile
{
  let s = defs + title("Soil horizons: layers from the surface down");
  const h = [["O", "organic litter", "#3b2a1a", 34, "#fff"], ["A", "topsoil: humus + minerals", "#5a3b24", 44, "#fff"], ["E", "leached layer (some soils)", "#c9b290", 30, "#222"], ["B", "subsoil: clay & minerals", "#a8744a", 44, "#fff"], ["C", "weathered parent material", "#bfa987", 44, "#222"], ["R", "solid bedrock", "#888", 40, "#fff"]];
  let y = 46; h.forEach(([k, d, c, hh, tc]) => { s += rect(60, y, 220, hh, { fill: c, stroke: "#333", rx: 0 }) + text(80, y + hh / 2 + 6, k, { size: 17, weight: "bold", fill: tc, anchor: "start" }) + text(300, y + hh / 2 + 5, d, { size: 12, anchor: "start" }); y += hh; });
  s += rect(520, 60, 220, 120, NOTE) + text(630, 84, "Why it matters", { size: 13, weight: "bold" }) + text(630, 110, "The A horizon is the most\nbiologically active layer and\nthe one lost first to erosion.", { size: 11.5 });
  fig(FIGS, "soil-profile", 760, 306, s, "Soil horizons O, A, E, B, C and R with descriptions", "Soil forms in layers called horizons. The thin A horizon (topsoil) holds the humus and nutrients crops need, which is why topsoil erosion is such a serious problem.");
}
// ENSO
{
  let s = defs + title("ENSO: Pacific trade winds and ocean temperature patterns");
  const panel = (y, ttl, wind, warmX, upw, note) => { let g = text(30, y - 22, ttl, { size: 13, weight: "bold", anchor: "start" }); g += rect(60, y, 640, 56, { fill: "#cfe6f7", stroke: "#4a90c2", rx: 0 }) + rect(560, y - 6, 140, 12, { fill: "#b9a98a", stroke: "#6b5a3a", rx: 0 }).replace("", "") + L(100, y + 50, "Asia / Australia", { anchor: "start", size: 10.5, fill: C.muted }) + L(690, y + 50, "S. America", { anchor: "end", size: 10.5, fill: C.muted }); g += `<ellipse cx="${warmX}" cy="${y + 14}" rx="130" ry="14" fill="#f6b27a" opacity=".85"/>`; g += A(wind[0], y - 8, wind[1], y - 8, "ahb", 3 * wind[2]) + L((wind[0] + wind[1]) / 2, y - 14, "trade winds", { fill: BLUE, weight: "bold" }); g += L(warmX, y + 18, "warm surface water", { weight: "bold" }); if (upw) g += A(650, y + 56, 650, y + 20, "ahb", 2.5) + L(600, y + 48, "upwelling", { fill: BLUE, weight: "bold" }); return g + L(380, y + 78, note, { fill: C.muted }); };
  s += panel(70, "Normal / La Niña (stronger)", [560, 200, 1], 220, true, "strong trade winds pile warm water in the west; cold nutrient-rich upwelling off S. America");
  s += panel(200, "El Niño", [330, 260, 0.5], 480, false, "weak trade winds; warm water moves east; upwelling weakens → fisheries decline, wetter S. America, drought in Australia/Indonesia");
  fig(FIGS, "enso", 760, 316, s, "Normal and El Niño conditions in the Pacific with trade winds, warm water and upwelling", "During normal and La Niña conditions strong trade winds push warm water west and drive upwelling in the east. In El Niño, trade winds weaken, warm water spreads east, and upwelling shuts down.");
}
// rain shadow
{
  let s = defs + title("Rain shadow effect: wet windward side, dry leeward side");
  s += `<path d="M 40 220 L 300 220 L 400 80 L 500 220 L 720 220 L 720 250 L 40 250 Z" fill="#b9a98a" stroke="#6b5a3a" stroke-width="3"/>`.replace("", "");
  s += `<path d="M 40 200 L 250 200 L 400 70 L 560 200 L 720 200 L 720 250 L 40 250 Z" fill="#b9a98a" stroke="#6b5a3a" stroke-width="3"/>`;
  s += A(60, 150, 220, 130, "ahb", 3) + L(100, 120, "moist air from ocean", { fill: BLUE, weight: "bold", anchor: "start" }) + `<ellipse cx="330" cy="70" rx="46" ry="22" fill="#fff" stroke="#bbb"/>` + L(330, 74, "clouds", {}) + A(250, 120, 270, 100, "ahb", 2).replace("", "") + L(200, 180, "rises & cools →\nrain / snow", { fill: BLUE, weight: "bold" }).replace("", "") + A(470, 90, 640, 140, "ahr", 3) + L(580, 120, "dry, warming air sinks", { fill: RED, weight: "bold", anchor: "start" });
  s += L(150, 224, "WINDWARD\nlush forest", { weight: "bold", fill: GREEN }) + L(640, 224, "LEEWARD\ndesert / grassland", { weight: "bold", fill: C.orange });
  fig(FIGS, "rain-shadow", 760, 272, s, "Air rising over a mountain dropping rain on the windward side and sinking dry on the leeward side", "Moist air cools as it rises over mountains and drops its water on the windward side. The descending air is dry and warms, producing a rain shadow desert on the leeward side.");
}
