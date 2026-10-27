import { C, svg, text, line, circle, rect, path, defs, arrow, BLUE, RED, GREEN, GOLD, PURPLE, TEAL, NOTE, axes, title, pill, note, fig, curve } from "./lib2.mjs";
export const FIGS = {};
const A = (x1, y1, x2, y2, c = "ah", w = 2.5) => arrow(x1, y1, x2, y2, { stroke: c === "ah" ? C.ink : ({ ahr: RED, ahb: BLUE, ahg: GREEN, aho: C.orange })[c], w, marker: c });
const L = (x, y, t, o = {}) => text(x, y, t, { size: 11.5, ...o });
// evenly spaced alternating timeline
const timeline = (id, ttl, ev, caption, foot, accent = PURPLE) => {
  const n = ev.length, x0 = 60, x1 = 700, step = (x1 - x0) / (n - 1);
  let s = defs + title(ttl) + line(x0 - 20, 150, x1 + 20, 150, { w: 4, stroke: "#777" });
  ev.forEach(([date, name, desc], i) => { const x = x0 + i * step, up = i % 2 === 0; s += circle(x, 150, 8, { fill: accent, stroke: "#222" }) + line(x, up ? 142 : 158, x, up ? 112 : 188, { stroke: "#aaa", w: 1.5 }) + text(x, up ? 64 : 212, date, { size: 13, weight: "bold", fill: accent }) + text(x, up ? 82 : 230, name, { size: 11.5, weight: "bold" }) + text(x, up ? 98 : 246, desc, { size: 10, fill: C.muted }); });
  if (foot) s += rect(60, 282, 640, 34, NOTE) + text(380, 304, foot, { size: 11.5, weight: "bold" });
  fig(FIGS, id, 760, foot ? 332 : 280, s, ttl, caption);
};
// Columbian exchange
{
  let s = defs + title("The Columbian Exchange: a two-way transfer across the Atlantic");
  s += rect(30, 60, 220, 170, { fill: "#e1f0dc", stroke: "#6a9", rx: 12 }) + text(140, 84, "THE AMERICAS", { size: 14, weight: "bold" }) + text(140, 110, "maize (corn) · potatoes\ntomatoes · beans · squash\ncacao (chocolate) · tobacco\nturkeys · (quinine)", { size: 11.5 });
  s += rect(510, 60, 220, 170, { fill: "#dfeaf7", stroke: "#68b", rx: 12 }) + text(620, 84, "EUROPE / AFRICA / ASIA", { size: 13, weight: "bold" }) + text(620, 110, "wheat · sugar · coffee\nhorses · cattle · pigs\niron tools · guns\nINFECTIOUS DISEASE\n(smallpox, measles)", { size: 11.5 });
  s += A(512, 110, 252, 110, "ahr", 3.5) + L(380, 100, "to the Americas", { weight: "bold", fill: RED }) + A(252, 170, 508, 170, "ahg", 3.5) + L(380, 190, "to the Old World", { weight: "bold", fill: GREEN });
  s += rect(60, 246, 640, 40, NOTE) + text(380, 270, "Results: Native populations fell by up to 90% from disease; new crops boosted Old World populations; plantation slavery expanded.", { size: 11.5, weight: "bold" });
  fig(FIGS, "columbian-exchange", 760, 304, s, "Two boxes showing crops, animals and diseases moving between the Americas and the Old World", "The Columbian Exchange moved plants, animals, and diseases in both directions. Disease devastated Native American populations, while American crops reshaped diets and economies worldwide.");
}
// casta / colonial social hierarchy
{
  let s = defs + title("Spanish colonial society: social rank based on birth and race");
  const lv = [["Peninsulares", "born in Spain: top offices in church and government", 150, "#f4e1a8"], ["Creoles", "Spanish descent born in the Americas: wealth, but limited office", 270, "#f4d8c0"], ["Mestizos & Mulattos", "mixed European/Native or European/African ancestry", 390, "#dfeaf7"], ["Indigenous peoples & enslaved Africans", "forced labor: encomienda, mining, plantations", 510, "#d9d9d9"]];
  lv.forEach(([n, d, w, c], i) => { const y = 54 + i * 54; s += `<polygon points="${380 - w / 2 + 14},${y} ${380 + w / 2 - 14},${y} ${380 + w / 2},${y + 48} ${380 - w / 2},${y + 48}" fill="${c}" stroke="#555"/>` + text(380, y + 20, n, { size: 12.5, weight: "bold" }) + text(380, y + 37, d, { size: 9.5, fill: C.muted }); });
  s += rect(60, 276, 640, 34, NOTE) + text(380, 298, "Birthplace and ancestry shaped legal status, occupation, and access to power.", { size: 11.5, weight: "bold" });
  fig(FIGS, "casta-hierarchy", 760, 326, s, "Pyramid of Spanish colonial social classes from peninsulares to indigenous peoples and enslaved Africans", "Spanish colonial society was a hierarchy based on birthplace and ancestry. Peninsulares held the highest status and Indigenous and enslaved people the lowest.");
}
// colonial regions
{
  let s = defs + title("Three English colonial regions compared");
  const col = (x, name, col2, rows) => rect(x, 52, 232, 200, { fill: col2, stroke: "#777", rx: 10 }) + text(x + 116, 76, name, { size: 14, weight: "bold" }) + rows.map(([k, v], i) => text(x + 12, 104 + i * 34, k, { size: 10.5, weight: "bold", anchor: "start", fill: C.muted }) + text(x + 12, 118 + i * 34, v, { size: 11, anchor: "start" })).join("");
  s += col(20, "NEW ENGLAND", "#dfeaf7", [["Motive", "religious (Puritans)"], ["Economy", "small farms, fishing, shipbuilding, trade"], ["Labor", "family farms, some servants"], ["Society", "towns, church-centered, literate"]]);
  s += col(264, "MIDDLE COLONIES", "#e2f0dc", [["Motive", "profit + religious tolerance"], ["Economy", "grain farming, trade (the 'breadbasket')"], ["Labor", "mixed: families, servants, some slaves"], ["Society", "diverse peoples & faiths; cities"]]);
  s += col(508, "SOUTHERN COLONIES", "#f7e3d3", [["Motive", "profit (cash crops)"], ["Economy", "tobacco, rice, indigo plantations"], ["Labor", "indentured servants → enslaved Africans"], ["Society", "dispersed, planter elite, Anglican"]]);
  fig(FIGS, "colonial-regions", 760, 270, s, "Comparison of New England, Middle and Southern colonies by motive, economy, labor and society", "Founding motives and geography produced three distinct colonial regions, from family farms and towns in New England to plantation slavery in the South.");
}
// triangular trade
{
  let s = defs + title("Atlantic trade: goods and people moved in a triangle");
  const nd = (x, y, name, sub, fill) => rect(x - 90, y - 30, 180, 60, { fill, stroke: "#555", rx: 12 }) + text(x, y - 4, name, { size: 13, weight: "bold" }) + text(x, y + 14, sub, { size: 10.5, fill: C.muted });
  s += nd(130, 70, "New England / Europe", "rum, manufactured goods", "#dfeaf7") + nd(630, 70, "West Africa", "enslaved people", "#f4e1a8") + nd(380, 238, "West Indies / S. colonies", "sugar, molasses, tobacco, rice", "#e2f0dc");
  s += A(222, 66, 538, 66, "ahb", 3) + L(380, 56, "rum & manufactured goods", { fill: BLUE, weight: "bold" }) + A(590, 102, 440, 206, "ahr", 3) + L(560, 172, "enslaved Africans\n(the Middle Passage)", { fill: RED, weight: "bold", anchor: "start" }) + A(320, 206, 170, 104, "ahg", 3) + L(200, 172, "sugar → molasses\n(raw materials)", { fill: GREEN, weight: "bold", anchor: "end" });
  s += L(380, 284, "Mercantilism: colonies supplied raw materials and bought British manufactures; the Navigation Acts controlled this trade.", { fill: C.muted, size: 10.5 });
  fig(FIGS, "triangular-trade", 760, 300, s, "Triangular trade routes among New England and Europe, West Africa and the West Indies", "Under mercantilism, raw materials flowed to Britain and manufactured goods back to the colonies. The Atlantic trade network tied together enslaved labor, plantation crops, and finished goods.");
}
// revolution cycle
{
  let s = defs + title("Road to revolution: British policy → colonial resistance → harsher response");
  const st = [["1763–65", "Proclamation Line,\nSugar & Stamp Acts", "#dfeaf7"], ["Colonial response", "'no taxation without\nrepresentation', boycotts,\nStamp Act Congress", "#e2f0dc"], ["1767–70", "Townshend Acts;\nBoston Massacre (1770)", "#dfeaf7"], ["1773–74", "Tea Act → Boston Tea Party;\nIntolerable (Coercive) Acts", "#f4c8c8"], ["1774–75", "First Continental Congress;\nLexington & Concord", "#f4e1a8"]];
  st.forEach(([d, t, c], i) => { const x = 20 + i * 148; s += rect(x, 70, 136, 120, { fill: c, stroke: "#666", rx: 10 }) + text(x + 68, 94, d, { size: 12.5, weight: "bold" }) + text(x + 68, 122, t, { size: 10.5 }); if (i < 4) s += A(x + 138, 130, x + 146, 130, "ah", 2); });
  s += rect(60, 216, 640, 50, NOTE) + text(380, 238, "Cause → effect: after the costly French and Indian War, Britain tried to tax and tighten control;", { size: 11.5, weight: "bold" }) + text(380, 256, "colonists, used to salutary neglect, saw this as a violation of their rights as English subjects.", { size: 11.5 });
  fig(FIGS, "revolution-sequence", 760, 284, s, "Sequence of British policies and colonial responses from 1763 to 1775", "Each British attempt to raise revenue and assert control met colonial resistance, which provoked harsher measures. After the French and Indian War, the end of salutary neglect set off this cycle.");
}
// constitutional compromises
{
  let s = defs + title("Constitutional Convention: the Great Compromise on representation");
  s += pill(40, 60, 240, 70, "#dfeaf7", "VIRGINIA PLAN\n(large states)\nrepresentation by population", { size: 12 }) + pill(40, 160, 240, 70, "#f7e3d3", "NEW JERSEY PLAN\n(small states)\nequal vote per state", { size: 12 });
  s += A(282, 95, 380, 140, "ah", 3) + A(282, 195, 380, 160, "ah", 3);
  s += rect(384, 90, 160, 90, { fill: "#f4e1a8", stroke: "#555", rx: 12 }) + text(464, 116, "GREAT\nCOMPROMISE", { size: 13, weight: "bold" }) + text(464, 164, "(Connecticut Compromise)", { size: 10, fill: C.muted });
  s += A(546, 135, 586, 135, "ah", 3) + rect(588, 70, 150, 50, { fill: "#a9c8f0", stroke: "#555", rx: 8 }) + text(663, 100, "House: by population", { size: 11.5, weight: "bold" }) + rect(588, 150, 150, 50, { fill: "#f4b0a0", stroke: "#555", rx: 8 }) + text(663, 180, "Senate: 2 per state", { size: 11.5, weight: "bold" });
  s += rect(40, 252, 700, 44, NOTE) + text(390, 272, "Other deals: Three-Fifths Compromise (enslaved people count 3/5 for representation and taxes);", { size: 11 }) + text(390, 288, "Congress may not ban the slave trade before 1808; Commerce Compromise. Federalists vs. Anti-Federalists debated ratification.", { size: 11 });
  fig(FIGS, "great-compromise", 760, 314, s, "Virginia Plan and New Jersey Plan combining into the Great Compromise creating House and Senate", "The Great Compromise resolved the dispute between large and small states by creating a House based on population and a Senate with equal state representation.");
}
// market revolution
{
  timeline("market-revolution", "Transportation and technology that created a national market", [["1793", "Cotton gin", "boosts cotton & slavery"], ["1807", "Steamboat", "upriver trade (Fulton)"], ["1825", "Erie Canal", "NY–Great Lakes"], ["1830s", "Railroads", "faster, farther"], ["1844", "Telegraph", "instant news"]], "New transportation and communication technologies lowered costs and tied regions together, creating a national market economy and spurring factories, cities, and the spread of cotton and slavery.", "Effects: factory system, urban growth, regional specialization (North industry, West food, South cotton).", BLUE);
}
// westward expansion
{
  timeline("expansion-timeline", "Territorial expansion of the United States, 1803–1853", [["1803", "Louisiana Purchase", "from France"], ["1819", "Florida", "Adams–Onís Treaty"], ["1845", "Texas", "annexed"], ["1846", "Oregon Country", "treaty with Britain"], ["1848", "Mexican Cession", "after Mexican–American War"], ["1853", "Gadsden Purchase", "southern AZ/NM"]], "Manifest Destiny, the belief in a providential right to expand across the continent, drove territorial growth and reopened the question of slavery's spread.", "Each new territory raised the question: free or slave? That fueled sectional conflict.", GREEN);
}
// compromise of 1850
{
  let s = defs + title("The Compromise of 1850: a package of five bills");
  s += text(190, 54, "Gains for the NORTH", { size: 13, weight: "bold", fill: BLUE }) + text(570, 54, "Gains for the SOUTH", { size: 13, weight: "bold", fill: RED });
  s += rect(30, 66, 320, 112, { fill: "#dfeaf7", stroke: "#68b", rx: 10 }) + text(190, 96, "• California admitted as a FREE state\n• Slave trade (not slavery) banned in\n   Washington, D.C.\n• Texas gives up land claims in New Mexico\n   (federal debt relief)", { size: 11 }).replace(/x="190"/g, 'x="46"').replace(/text-anchor="middle"/, 'text-anchor="start"');
  s += rect(410, 66, 320, 112, { fill: "#f7e3d3", stroke: "#b86", rx: 10 }) + text(426, 96, "• Stronger Fugitive Slave Act (federal\n   enforcement; no jury trial for the accused)\n• Utah & New Mexico organized with\n   POPULAR SOVEREIGNTY (settlers vote)", { size: 11, anchor: "start" });
  s += rect(60, 206, 640, 64, NOTE) + text(380, 230, "Henry Clay and Stephen Douglas helped pass it, delaying disunion.", { size: 12, weight: "bold" }) + text(380, 252, "But the Fugitive Slave Act angered the North and popular sovereignty set up later fights in Kansas.", { size: 11.5 });
  fig(FIGS, "compromise-1850", 760, 286, s, "Five parts of the Compromise of 1850 divided by which section gained", "The Compromise of 1850 gave each side something, but the Fugitive Slave Act and popular sovereignty created new conflicts that helped lead to the Civil War.");
}
// sectional crisis chain
{
  timeline("sectional-crisis", "From compromise to war: the 1850s crisis", [["1850", "Compromise of 1850", "Fugitive Slave Act"], ["1854", "Kansas–Nebraska Act", "repeals Missouri Compromise; Republican Party forms"], ["1856", "'Bleeding Kansas'", "violence over slavery"], ["1857", "Dred Scott decision", "no federal restriction in territories"], ["1859", "John Brown's raid", "Harpers Ferry"], ["1860", "Lincoln elected", "South begins to secede"]], "Each event deepened sectional distrust: the Whig Party collapsed, the Republican Party rose, and the Supreme Court and the use of violence made compromise harder.", "Key idea: the expansion of slavery into the territories was the core dispute.", RED);
}
// civil war strategy
{
  let s = defs + title("Union strategy: the Anaconda Plan");
  s += `<path d="M 110 70 C 280 50, 520 60, 650 90 L 660 210 C 560 250, 280 250, 110 220 Z" fill="#eef0d9" stroke="#999" stroke-width="2"/>` + text(390, 124, "CONFEDERACY", { size: 18, weight: "bold", fill: "#aaa" });
  s += L(70, 150, "West", { fill: C.muted }) + L(700, 150, "East\n(Atlantic)", { fill: C.muted }) + L(390, 262, "Gulf of Mexico", { fill: C.muted });
  s += path("M 96 62 C 280 42, 540 52, 672 88 L 684 212 C 560 262, 280 262, 96 232", { stroke: BLUE, w: 6, dash: "10 6" }) + L(390, 290, "1. NAVAL BLOCKADE of Atlantic and Gulf ports (cut off trade and supplies)", { weight: "bold", fill: BLUE });
  s += path("M 232 62 C 214 112, 250 168, 226 246", { stroke: "#4a90c2", w: 9 }) + L(262, 168, "2. Control the MISSISSIPPI\n(split the Confederacy in two)", { weight: "bold", fill: "#2f6f9a", anchor: "start" });
  s += A(440, 100, 580, 100, "ahr", 3) + L(510, 88, "3. Capture Richmond (capital)", { weight: "bold", fill: RED });
  s += rect(60, 304, 640, 36, NOTE) + text(380, 327, "North: more factories, railroads, people. South: defensive war, 'King Cotton' diplomacy, better early generals.", { size: 11 });
  fig(FIGS, "anaconda-plan", 760, 356, s, "Schematic of the Union Anaconda Plan with blockade of ports, control of the Mississippi and capture of Richmond", "The Union planned to squeeze the Confederacy by blockading its ports, controlling the Mississippi River, and capturing its capital. Industrial and population advantages favored the North.");
}
// progressive amendments
{
  let s = defs + title("Four Progressive Era amendments, 1913–1920");
  const am = [["16th", "1913", "federal income tax", "#dfeaf7"], ["17th", "1913", "direct election of senators", "#e2f0dc"], ["18th", "1919", "Prohibition of alcohol", "#f4e1a8"], ["19th", "1920", "women's suffrage", "#f4c8c8"]];
  am.forEach(([n, y, d, c], i) => { const x = 25 + i * 182; s += rect(x, 60, 170, 130, { fill: c, stroke: "#666", rx: 12 }) + text(x + 85, 98, n, { size: 24, weight: "bold" }) + text(x + 85, 120, y, { size: 13, weight: "bold", fill: RED }) + text(x + 85, 150, d, { size: 12 }); });
  s += rect(60, 214, 640, 50, NOTE) + text(380, 236, "Progressive goals: curb corruption and big business, make government more democratic,", { size: 11.5, weight: "bold" }) + text(380, 254, "protect consumers and workers. Reforms also included the initiative, referendum, and recall.", { size: 11.5 });
  fig(FIGS, "progressive-amendments", 760, 280, s, "Four constitutional amendments from the Progressive Era with dates and subjects", "Progressives changed the Constitution to make government more democratic and to address social problems: income tax, direct election of senators, Prohibition, and women's suffrage.");
}
// depression chain
{
  let s = defs + title("Why the Great Depression was so severe: a chain reaction");
  const st = [["Weaknesses in the 1920s", "uneven wealth · overproduction · heavy use of credit · stock speculation", "#f4e1a8"], ["1929 stock market crash", "investors panic; fortunes wiped out", "#f4c8c8"], ["Bank failures", "no deposit insurance: savings lost; credit dries up", "#f4c8c8"], ["Spending & production fall", "businesses cut jobs; unemployment about 25% by 1933", "#e8d9c4"], ["Policy and world factors", "Hawley-Smoot Tariff; Dust Bowl; global trade collapse", "#dfeaf7"]];
  st.forEach(([t, d, c], i) => { const y = 50 + i * 54; s += rect(100, y, 560, 44, { fill: c, stroke: "#666", rx: 10 }) + text(380, y + 19, t, { size: 12.5, weight: "bold" }) + text(380, y + 36, d, { size: 10.5, fill: C.muted }); if (i < 4) s += A(380, y + 44, 380, y + 54, "ah", 2); });
  fig(FIGS, "depression-chain", 760, 322, s, "Chain of causes and effects leading to the Great Depression", "Structural weaknesses in the 1920s economy, the 1929 crash, and bank failures fed on each other, deepening the downturn. Hoover's limited response and the global trade collapse added to the severity.");
}
// New Deal 3 Rs
{
  let s = defs + title("The New Deal's '3 R's': Relief, Recovery, Reform");
  const col = (x, name, c, items) => rect(x, 52, 224, 200, { fill: c, stroke: "#666", rx: 12 }) + text(x + 112, 80, name, { size: 16, weight: "bold" }) + text(x + 112, 110, items, { size: 11 });
  s += col(20, "RELIEF", "#f4e1a8", "for the unemployed and poor:\n\nCCC (Civilian Conservation Corps)\nFERA direct aid\nWPA (public-works jobs)");
  s += col(268, "RECOVERY", "#dfeaf7", "to revive the economy:\n\nNIRA / NRA (industry codes)\nAAA (farm subsidies)\nTVA (Tennessee Valley)");
  s += col(516, "REFORM", "#e2f0dc", "to prevent future crises:\n\nSEC (regulates stock market)\nFDIC (insures bank deposits)\nSocial Security Act (1935)\nWagner Act (union rights)");
  fig(FIGS, "new-deal-3rs", 760, 270, s, "Three columns organizing New Deal programs into relief, recovery and reform", "New Deal programs are often sorted into relief, recovery, and reform. Many of the reforms, such as Social Security and the FDIC, became permanent features of American government.");
}
// containment timeline
{
  timeline("containment-timeline", "Containment in action, 1947–1955", [["1947", "Truman Doctrine", "aid to Greece & Turkey"], ["1948", "Marshall Plan", "rebuild Western Europe"], ["1948–49", "Berlin Airlift", "response to blockade"], ["1949", "NATO formed", "collective defense"], ["1950–53", "Korean War", "contain communism in Asia"], ["1955", "Warsaw Pact", "Soviet counter-alliance"]], "Containment aimed to stop the spread of communism without direct war with the USSR. It shaped U.S. alliances, aid, and military commitments around the world.", "Cold War = superpower rivalry, arms race, proxy wars, and ideological competition.", RED);
}
// great society
{
  let s = defs + title("The Great Society: Johnson's domestic agenda (1964–1966)");
  const col = (x, name, c, items) => rect(x, 56, 170, 186, { fill: c, stroke: "#666", rx: 12 }) + text(x + 85, 82, name, { size: 13, weight: "bold" }) + text(x + 85, 110, items, { size: 10.5 });
  s += col(20, "Civil rights", "#f4c8c8", "Civil Rights Act (1964)\n(bans discrimination)\n\nVoting Rights Act (1965)") + col(206, "Health", "#e2f0dc", "Medicare (65+)\nMedicaid (low income)\n(both 1965)") + col(392, "Education", "#dfeaf7", "Elementary & Secondary\nEducation Act (1965)\nHead Start\nHigher Education Act") + col(578, "War on Poverty", "#f4e1a8", "Office of Economic\nOpportunity\nFood stamps\nJob Corps");
  s += rect(60, 256, 640, 34, NOTE) + text(380, 278, "Most extensive expansion of federal social programs since the New Deal; expanded the role of the federal government.", { size: 11.5, weight: "bold" });
  fig(FIGS, "great-society", 760, 306, s, "Four categories of Great Society programs: civil rights, health, education and war on poverty", "Johnson's Great Society expanded federal programs in civil rights, health care, education, and anti-poverty efforts, building on the New Deal but also increasing debates about government's role.");
}
// end of cold war
{
  timeline("cold-war-end", "The end of the Cold War, 1985–1991", [["1985", "Gorbachev", "glasnost & perestroika"], ["1987", "INF Treaty", "Reagan–Gorbachev"], ["1989", "Berlin Wall falls", "Eastern Europe's revolutions"], ["1990", "German reunification", "Oct. 3, 1990"], ["1991", "USSR dissolves", "Dec. 1991"]], "Gorbachev's reforms, economic weakness, nationalist movements, and U.S. pressure combined to end the Cold War. The Soviet Union dissolved in December 1991.", "Reforms meant to save communism helped end it: openness and restructuring loosened central control.", TEAL);
}
