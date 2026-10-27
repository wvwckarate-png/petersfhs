import { FIGS as F1 } from "./apes_figs1.mjs";
import { FIGS as F2 } from "./apes_figs2.mjs";
import { figure } from "./lib.mjs";
const ALL = { ...F1, ...F2 };
const html = (id) => { const f = ALL[id]; if (!f) throw new Error("missing fig " + id); return f.html || figure(id, f.svg, f.caption); };
const at = (unit, id, anchor) => ({ hub: "apes", unit, id, anchor, html: html(id) });
export const INS = [
  at(1, "biome-climate", "Terrestrial biomes are determined primarily by two climate factors"),
  at(1, "water-cycle", "The water cycle describes how water moves continuously"),
  at(1, "carbon-cycle", "Carbon moves into living organisms primarily through photosynthesis"),
  at(1, "nitrogen-cycle", "Although the atmosphere is about 78% nitrogen gas"),
  at(1, "phosphorus-cycle", "The phosphorus cycle stands out from the other cycles"),
  at(1, "energy-pyramid", "The 10% rule is usually illustrated with an"),
  at(2, "island-biogeography", "The theory of island biogeography (developed by MacArthur and Wilson)"),
  at(2, "tolerance-curve", "Every species has a specific range of environmental conditions"),
  at(2, "succession", "Ecological succession describes the predictable, gradual process"),
  at(3, "growth-curves", "Population growth follows one of two basic mathematical patterns"),
  at(3, "survivorship-curves", "Species differ enormously in their basic reproductive strategy"),
  at(3, "age-structure", "An age structure diagram is a graphical tool"),
  at(3, "demographic-transition", "The demographic transition model describes a general pattern"),
  at(4, "plate-boundaries", "Earth's outer shell is broken into large rigid plates"),
  at(4, "atmosphere-layers", "Earth's atmosphere is organized into distinct layers"),
  at(4, "wind-cells", "Warm air rises at the equator (where solar heating is most intense)"),
  at(4, "solar-angle", "Sunlight striking the equator arrives nearly perpendicular"),
  at(4, "soil-profile", "Soil is a foundational resource for nearly all terrestrial life"),
  at(4, "enso", "ENSO is a recurring, large-scale climate pattern"),
  at(4, "rain-shadow", "Ocean circulation operates through two genuinely distinct mechanisms"),
  at(5, "urban-runoff", "Urbanization and suburban sprawl replace natural, permeable land cover"),
  at(6, "nuclear-plant", "Nuclear power generates electricity through nuclear fission"),
  at(6, "hydro-dam", "Hydroelectric dams harness the gravitational potential energy"),
  at(7, "smog-formation", "Photochemical smog forms when nitrogen oxides (NOx)"),
  at(7, "thermal-inversion", "A thermal inversion occurs when a layer of warmer air sits ABOVE"),
  at(7, "acid-rain", "Sulfur dioxide (SO2), released primarily from coal combustion"),
  at(8, "eutrophication-chain", "Excess nutrients (especially phosphorus and nitrogen"),
  at(8, "wastewater-stages", "Treating wastewater before it's released back into the environment"),
  at(8, "biomagnification", "Bioaccumulation vs. Biomagnification: Two Related but Distinct Concepts"),
  at(8, "dose-response", "LD50 (lethal dose, 50%) is the dose of a substance that kills"),
  at(9, "ozone-cfc", "Chlorofluorocarbons (CFCs) — historically used widely in refrigerants"),
  at(9, "greenhouse-effect", "Certain atmospheric gases — including CO2, methane, water vapor"),
  at(9, "ocean-acidification", "These are two genuinely distinct oceanic consequences of rising atmospheric CO2"),
];
