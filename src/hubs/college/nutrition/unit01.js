// Unit 1 — Energy, Calories, and Energy Balance
const T = (headers, rows) => ({ table: { headers, rows } });

export default {
  id: 1,
  name: "Energy, Calories, and Energy Balance",
  intro: "Nutrition is, at heart, an accounting problem with feelings attached. Energy comes in as food, goes out as heat and movement, and whatever is left over gets stored. Everything else in this course (carbohydrate loading, protein timing, weight management, relative energy deficiency) is a variation on that one ledger, so we begin with the currency and the books.",
  sections: [
    {
      id: "s11", num: "1.1", title: "Measuring Energy: Calories and Joules",
      blocks: [
        { p: "Energy in food is measured in <strong>kilocalories (kcal)</strong>, what the label simply calls 'Calories'. One kcal is the energy needed to raise 1 kilogram of water by 1 °C. The scientific unit is the <strong>kilojoule (kJ)</strong>: 1 kcal = 4.184 kJ." },
        T(["Nutrient", "Energy per gram", "Notes"], [
          ["Carbohydrate", "4 kcal (17 kJ)", "Fiber provides about 0–2 kcal/g in practice"],
          ["Protein", "4 kcal (17 kJ)", "Not a preferred fuel"],
          ["Fat", "9 kcal (37 kJ)", "Most energy-dense macronutrient"],
          ["Alcohol", "7 kcal (29 kJ)", "Not a nutrient; no performance benefit"],
        ]),
        { p: "These <strong>Atwater factors</strong> let you convert grams on a label to calories. A candy bar with 30 g carbohydrate, 5 g protein, and 12 g fat has about (30 × 4) + (5 × 4) + (12 × 9) = 120 + 20 + 108 = <strong>248 kcal</strong>. Fat's energy density explains why a tablespoon of oil (about 120 kcal) is a heavier contribution than a whole apple (about 95 kcal)." },
        { worked: { label: "Worked Example 1", q: "A serving of granola lists 40 g carbohydrate, 8 g protein, and 15 g fat. How many kcal? What percentage comes from fat?", a: "Carbohydrate: 40 × 4 = 160 kcal. Protein: 8 × 4 = 32 kcal. Fat: 15 × 9 = 135 kcal. Total = <strong>327 kcal</strong>. Fat percentage = 135 ÷ 327 = <strong>about 41%</strong>. Notice that fat is only 15 of the 63 total grams (24% by weight), but contributes 41% of the energy." } },
        { key: "The <strong>Acceptable Macronutrient Distribution Ranges (AMDR)</strong> for adults are 45–65% of energy from carbohydrate, 20–35% from fat, and 10–35% from protein. Athletes often sit toward the high end of carbohydrate and their protein needs are expressed per kilogram of body weight rather than as a percentage." },
        // visuals:begin s11
        { svg: "bars; title=Energy per gram; y=kcal per gram; data=Carbohydrate:4:#2E6BC6, Protein:4:#C0392B, Fat:9:#C99700, Alcohol:7:#7A3FB8", caption: "Energy per gram (Atwater factors): fat has more than twice the energy of carbohydrate or protein." },
        // visuals:end s11
        { recap: [
          "Convert between kcal and kJ and state the Atwater factors.",
          "Calculate the energy content and macronutrient percentages of a food.",
          "State the AMDR ranges.",
        ] },
      ],
    },
    {
      id: "s12", num: "1.2", title: "Components of Energy Expenditure",
      blocks: [
        { p: "Total daily energy expenditure (TDEE) has four parts. The largest by far is the energy you spend simply being alive." },
        T(["Component", "Share of TDEE (typical)", "Description"], [
          ["Basal/resting metabolic rate (BMR/RMR)", "About 60–70%", "Energy to keep organs working at rest: the brain, liver, heart, kidneys, and muscle"],
          ["Thermic effect of food (TEF)", "About 8–10%", "Energy to digest, absorb, and store food; highest for protein (20–30% of its calories), then carbohydrate (5–10%), then fat (0–3%)"],
          ["Exercise activity thermogenesis (EAT)", "About 5–10% in most people; far more in athletes", "Planned exercise"],
          ["Non-exercise activity thermogenesis (NEAT)", "About 15–30%", "Walking, fidgeting, standing, chores, posture; varies enormously between people"],
        ]),
        { p: "<strong>BMR</strong> is measured under strict conditions (fasted, rested, thermoneutral), while <strong>RMR</strong> is measured under looser conditions and runs slightly higher. It depends mostly on <strong>fat-free mass</strong>: lean tissue burns more energy than fat tissue even at rest, so it is higher in men, in people with more muscle, and in larger bodies, and it declines with age (partly because of lost muscle) and with extreme energy restriction (adaptive thermogenesis)." },
        { p: "Common equations estimate RMR. The <strong>Mifflin–St Jeor</strong> equation is widely used: for men, RMR = (10 × weight in kg) + (6.25 × height in cm) − (5 × age) + 5; for women, the same with −161 at the end. Multiply the result by an activity factor (about 1.2 for sedentary, up to 1.9 or more for very active people) to estimate TDEE." },
        { worked: { label: "Worked Example 2", q: "Estimate the RMR of a 20-year-old man who weighs 75 kg and is 180 cm tall.", a: "RMR = (10 × 75) + (6.25 × 180) − (5 × 20) + 5 = 750 + 1,125 − 100 + 5 = <strong>1,780 kcal/day</strong>. With a moderate activity factor of 1.55, TDEE is about 1,780 × 1.55 ≈ <strong>2,760 kcal/day</strong>." } },
        { trap: "NEAT is the swing factor. Two people with the same weight and the same workout can differ by several hundred kcal a day in total expenditure because one fidgets, paces, and stands and the other sits. Most 'slow metabolism' stories turn out to be differences in NEAT, intake, or both." },
        // visuals:begin s12
        { svg: "bars; title=Components of daily energy expenditure; y=Typical kcal; data=RMR:1800:#2E6BC6, TEF:250:#C99700, NEAT:400:#7A3FB8, Exercise:500:#C0392B; max=2000", caption: "TDEE = RMR + thermic effect of food + NEAT + exercise (an example for an active adult)." },
        // visuals:end s12
        { recap: [
          "List the four components of TDEE and their approximate shares.",
          "Explain what determines RMR.",
          "Estimate RMR and TDEE using the Mifflin–St Jeor equation and an activity factor.",
        ] },
      ],
    },
    {
      id: "s13", num: "1.3", title: "Energy Balance and Body Weight",
      blocks: [
        { p: "<strong>Energy balance</strong> is intake minus expenditure. In <strong>positive</strong> balance, the surplus is stored, mostly as fat but also as lean mass if training and protein support it. In <strong>negative</strong> balance, the body draws on stores. A rough rule is that about 7,700 kcal corresponds to 1 kg of body fat (about 3,500 kcal per pound), but real weight change is less tidy because the body adapts, and water and glycogen move up and down with it." },
        T(["Situation", "Typical result"], [
          ["Intake equals expenditure", "Weight stable"],
          ["Sustained surplus of about 500 kcal/day", "Gain of roughly 0.25–0.5 kg per week at first (lean and fat mass together)"],
          ["Sustained deficit of about 500 kcal/day", "Loss of roughly 0.25–0.5 kg per week at first, slowing over time"],
          ["Large deficit with intense training", "Loss of lean mass, performance, and hormonal health"],
        ]),
        { p: "The <strong>law of thermodynamics</strong> is not the problem. Energy balance explains why weight changes, but it does not explain <em>why</em> a person eats more or less. Appetite is regulated by hormones (<strong>leptin</strong> from fat cells, <strong>ghrelin</strong> from the stomach, insulin, and peptides from the gut), by the brain's reward systems, by sleep, stress, food environment, and habit. This is why diets fail through biology as often as through willpower." },
        { key: "<strong>Adaptive thermogenesis</strong> means the body lowers its energy expenditure by more than expected from the lost weight when intake is cut, and appetite hormones push in the other direction. It is a major reason weight loss slows and maintenance is hard." },
        // visuals:begin s13
        { svg: "plot; title=Energy balance and weight; x=Weeks; y=Weight change (kg); xlim=0:12; ylim=-6:6; xticks=0,4,8,12; yticks=-4,0,4; line=0,0 4,-1.8 8,-3.2 12,-4.1 | #2E7D32 | −500 kcal/day; line=0,0 4,1.8 8,3.6 12,5.4 | #C0392B | +500 kcal/day; hline=0 Weight stable | #888", caption: "A 500 kcal daily deficit or surplus changes weight by about 0.45 kg a week at first, and the rate slows as expenditure adapts." },
        // visuals:end s13
        { recap: [
          "Define positive and negative energy balance.",
          "Explain why the 7,700 kcal per kg rule is only approximate.",
          "Describe the roles of leptin, ghrelin, and adaptive thermogenesis.",
        ] },
      ],
    },
    {
      id: "s14", num: "1.4", title: "Measuring Energy Expenditure",
      blocks: [
        { p: "Researchers measure energy expenditure with several methods. Each balances cost and accuracy." },
        T(["Method", "How it works", "Used for"], [
          ["Direct calorimetry", "Measures heat given off by a person in an insulated chamber", "Gold standard; rare and expensive"],
          ["Indirect calorimetry", "Measures O₂ consumed and CO₂ produced; every liter of O₂ yields about 4.8–5.0 kcal", "Most laboratory and clinical measurements"],
          ["Doubly labeled water", "Measures CO₂ production over 1–2 weeks from the loss of isotopes in urine", "Total free-living energy expenditure"],
          ["Accelerometers and wearables", "Estimate movement and heart rate", "Field use; reasonable for activity patterns, less accurate for kcal"],
          ["Prediction equations", "Estimate RMR from weight, height, age, sex", "Practice and counseling"],
        ]),
        { p: "<strong>Indirect calorimetry</strong> also gives the <strong>respiratory exchange ratio (RER = VCO₂ ÷ VO₂)</strong>, which reveals the mix of fuels being oxidized. An RER of about <strong>0.70</strong> means almost pure fat oxidation, about <strong>1.00</strong> means pure carbohydrate, and values in between show a mixture. At rest the RER is about 0.80–0.85. During very intense exercise it can exceed 1.0 because CO₂ from bicarbonate buffering of lactic acid is also blown off." },
        { worked: { label: "Worked Example 3", q: "A person has VO₂ = 2.0 L/min and VCO₂ = 1.8 L/min during steady cycling. Find the RER and the approximate energy cost per minute.", a: "RER = 1.8 ÷ 2.0 = <strong>0.90</strong>, suggesting a mixture of mostly carbohydrate with some fat. With about 4.9 kcal per liter of O₂, energy cost ≈ 2.0 × 4.9 ≈ <strong>9.8 kcal/min</strong>." } },
        // visuals:begin s14
        { svg: "plot; title=RER and fuel use; x=Exercise intensity (% VO₂ max); y=RER; xlim=0:100; ylim=0.65:1.05; xticks=0,25,50,75,100; yticks=0.7,0.85,1.0; line=0,0.82 25,0.84 50,0.88 75,0.95 100,1.02 | #C0392B; hline=0.7 Fat only | #888; hline=1.0 Carbohydrate only | #888", caption: "The respiratory exchange ratio (VCO₂ ÷ VO₂) rises from about 0.7 for pure fat toward 1.0 for pure carbohydrate as exercise intensity rises." },
        // visuals:end s14
        { recap: [
          "Compare direct calorimetry, indirect calorimetry, and doubly labeled water.",
          "Explain RER and what values of 0.70 and 1.00 mean.",
          "Estimate energy cost from oxygen consumption.",
        ] },
      ],
    },
  ],
  practice: [
    ["How many kcal are in a food with 50 g carbohydrate, 10 g protein, and 5 g fat?", "(50 × 4) + (10 × 4) + (5 × 9) = 200 + 40 + 45 = <strong>285 kcal</strong>."],
    ["Which macronutrient has the highest thermic effect of food, and approximately how much?", "<strong>Protein</strong>, at about 20–30% of its energy content."],
    ["Why is RMR higher in people with more muscle mass?", "Fat-free mass is metabolically active tissue and burns more energy at rest than fat tissue."],
    ["What RER value indicates predominantly fat oxidation?", "About <strong>0.70</strong>."],
    ["Why does the 7,700 kcal per kg rule overestimate weight loss over long periods?", "The body adapts: metabolic rate falls, NEAT changes, and the composition of lost tissue varies, so the predicted loss slows over time."],
  ],
  cards: [
    ["Kilocalorie", "Energy to warm 1 kg of water by 1 °C; the food 'Calorie'", null, "1 kcal heats 1 kg (1 L) of water by 1 °C. A 250-kcal granola bar could warm 2.5 L of water from room temperature (20 °C) to boiling: 80 °C × 2.5 L = 200 kcal needed."],
    ["Kilojoule", "SI unit of energy; 1 kcal = 4.184 kJ", null, "1 kcal = 4.184 kJ: a 250-kcal granola bar = 250 × 4.184 = 1,046 kJ. (Labels in Europe and Australia list kJ.)"],
    ["Carbohydrate energy", "4 kcal/g", null, "{{svg:bars; title=Energy per gram; y=kcal per gram; data=Carbohydrate:4:#2E6BC6, Protein:4:#C0392B, Fat:9:#C99700, Alcohol:7:#7A3FB8}} 4 kcal/g: a banana with 27 g of carbohydrate supplies about 108 kcal from carbohydrate."],
    ["Protein energy", "4 kcal/g", null, "{{svg:bars; title=Energy per gram; y=kcal per gram; data=Carbohydrate:4:#2E6BC6, Protein:4:#C0392B, Fat:9:#C99700, Alcohol:7:#7A3FB8}} 4 kcal/g: a 25 g scoop of whey protein supplies about 100 kcal from protein."],
    ["Fat energy", "9 kcal/g", null, "{{svg:bars; title=Energy per gram; y=kcal per gram; data=Carbohydrate:4:#2E6BC6, Protein:4:#C0392B, Fat:9:#C99700, Alcohol:7:#7A3FB8}} 9 kcal/g: a tablespoon of olive oil (14 g of fat) has about 126 kcal."],
    ["Alcohol energy", "7 kcal/g", null, "{{svg:bars; title=Energy per gram; y=kcal per gram; data=Carbohydrate:4:#2E6BC6, Protein:4:#C0392B, Fat:9:#C99700, Alcohol:7:#7A3FB8}} 7 kcal/g: a 12 oz beer with 14 g of alcohol (plus some carbohydrate) is about 150 kcal."],
    ["Atwater factors", "Standard kcal per gram values", null, "Label example: 30 g carbohydrate, 10 g protein, 8 g fat = 30×4 + 10×4 + 8×9 = 120 + 40 + 72 = 232 kcal."],
    ["AMDR carbohydrate", "45–65% of energy", null, "{{svg:bars; title=AMDR (% of energy); y=% of energy; data=Carbohydrate (45–65):55:#2E6BC6, Fat (20–35):28:#C99700, Protein (10–35):17:#C0392B; max=70; unit=%}} A typical athlete's mix: 55% carbohydrate, 28% fat, 17% protein, all inside the ranges."],
    ["AMDR fat", "20–35% of energy", null, "On a 2,500 kcal diet, 20–35% from fat = 500–875 kcal = 56–97 g of fat per day."],
    ["AMDR protein", "10–35% of energy", null, "On a 2,500 kcal diet, 10–35% from protein = 250–875 kcal = 63–219 g per day."],
    ["TDEE", "Total daily energy expenditure", null, "TDEE = RMR + TEF + NEAT + EAT. Example: RMR 1,800 + TEF 250 + NEAT 400 + EAT 500 = 2,950 kcal/day."],
    ["RMR", "Resting metabolic rate; about 60–70% of TDEE", null, "A 25-year-old man (80 kg, 180 cm): RMR ≈ 1,805 kcal/day: about 60–70% of his TDEE (about 2,800)."],
    ["BMR", "Basal metabolic rate; strict measurement conditions", null, "BMR is measured right after waking, after an overnight fast, in a quiet, thermoneutral room: slightly lower than RMR (by about 5–10%)."],
    ["Thermic effect of food", "Energy cost of digestion; about 10% of intake", null, "Eating 2,500 kcal a day costs about 250 kcal just to digest and process it (10%): a mixed diet."],
    ["TEF of protein", "20–30% of its calories", null, "Eat 100 kcal of protein and the body uses 20–30 kcal to process it (net 70–80); for 100 kcal of fat, only 0–3 kcal (net 97–100)."],
    ["NEAT", "Non-exercise activity thermogenesis", null, "Walking to class, fidgeting, standing, and doing chores: NEAT can differ by 300–800 kcal/day between people of similar size."],
    ["EAT", "Exercise activity thermogenesis", null, "A 60-minute run at 10 km/h for a 70 kg person burns about 700 kcal (10 METs × 70 kg × 1 h)."],
    ["Fat-free mass", "Main determinant of RMR", null, "Two people weigh 80 kg: one has 70 kg of fat-free mass, the other 55. The first has a higher RMR (about 1,950 vs 1,650 kcal/day)."],
    ["Mifflin–St Jeor", "Common equation to estimate RMR", null, "Men: RMR = 10W + 6.25H − 5A + 5. For 80 kg, 180 cm, age 25: 800 + 1,125 − 125 + 5 = 1,805 kcal/day. Women: subtract 161 instead of adding 5."],
    ["Activity factor", "Multiplier to convert RMR to TDEE", null, "RMR 1,805 × 1.55 (moderately active) = 2,798 kcal TDEE. Factors: 1.2 sedentary, 1.375 light, 1.55 moderate, 1.725 very active, 1.9 extreme."],
    ["Energy balance", "Intake minus expenditure", null, "Intake 2,800 − expenditure 2,800 = 0: weight is stable. Intake 3,300 kcal − 2,800 = +500 kcal/day: gain of about 0.5 kg in 8 days."],
    ["7,700 kcal per kg", "Rough energy value of 1 kg of body fat", null, "A 500 kcal daily deficit = 3,500 kcal/week = 0.45 kg of fat per week (3,500 ÷ 7,700). In practice the loss slows because the expenditure falls."],
    ["Adaptive thermogenesis", "Greater-than-expected drop in expenditure with weight loss", null, "After a person loses 10% of body weight, the RMR may fall 100–200 kcal/day more than the loss of tissue would predict, which is why weight loss plateaus."],
    ["Leptin", "Fat cell hormone that signals energy stores", null, "Leptin from fat cells tells the hypothalamus about energy stores; in dieting, leptin falls and appetite rises."],
    ["Ghrelin", "Stomach hormone that stimulates hunger", null, "Ghrelin from the empty stomach rises before meals and falls after eating; it also rises with weight loss and with sleep loss."],
    ["Direct calorimetry", "Measures heat output", null, "The person sits in an insulated chamber and the heat given off is measured. Accurate, but expensive: only a few labs have one."],
    ["Indirect calorimetry", "Measures O₂ use and CO₂ production", null, "A mask (or hood) measures the O₂ you inhale and the CO₂ you exhale: VO₂ = 3.0 L/min, VCO₂ = 2.5 L/min → energy = 3.0 × 4.9 ≈ 14.7 kcal/min."],
    ["Doubly labeled water", "Measures free-living total energy expenditure", null, "You drink water with heavy isotopes of hydrogen (²H) and oxygen (¹⁸O); the difference in how fast each leaves the body gives CO₂ production over 1–2 weeks of normal life: the gold standard for free-living TDEE."],
    ["RER", "VCO₂ ÷ VO₂", null, "RER = VCO₂ ÷ VO₂. Example: 2.5 ÷ 3.0 = 0.83: a mix of fat and carbohydrate at moderate exercise."],
    ["RER 0.70", "Pure fat oxidation", null, "{{rxn:CCCCCCCCCCCCCCCC(=O)O >> O=C=O}} Palmitate: C₁₆H₃₂O₂ + 23 O₂ → 16 CO₂ + 16 H₂O: RER = 16 ÷ 23 = 0.70."],
    ["RER 1.00", "Pure carbohydrate oxidation", null, "{{rxn:OC[C@H]1OC(O)[C@H](O)[C@@H](O)[C@@H]1O >> O=C=O}} Glucose: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O: RER = 6 ÷ 6 = 1.00."],
    ["Energy cost of 1 L O₂", "About 4.8–5.0 kcal", null, "Fat gives 4.69 kcal per liter of O₂ and carbohydrate 5.05 kcal per liter; a mixed fuel is about 4.8–5.0. Burning at 3 L/min of O₂ = about 14.7 kcal/min."],
    ["Resting RER", "About 0.80–0.85", null, "{{svg:plot; title=RER and fuel use; x=Exercise intensity (% VO₂ max); y=RER; xlim=0:100; ylim=0.65:1.05; xticks=0,25,50,75,100; yticks=0.7,0.85,1.0; line=0,0.82 25,0.84 50,0.88 75,0.95 100,1.02 | #C0392B; hline=0.7 Fat only | #888; hline=1.0 Carbohydrate only | #888}} At rest the RER is about 0.80–0.85 (mostly fat), rising toward 1.0 as exercise intensity increases."],
    ["Energy density", "kcal per gram of food", null, "{{svg:bars; title=Energy density; y=kcal per gram; data=Cucumber/(raw):0.15:#2E7D32, Apple:0.5:#2E7D32, Oatmeal/(cooked):0.7:#C99700, Bread:2.7:#C99700, Peanut butter:5.9:#C0392B, Olive oil:8.8:#C0392B; max=10}} Foods with a lot of water or fiber have a low energy density, and fat-rich foods a high one."],
    ["Positive energy balance", "Intake exceeds expenditure", null, "Eating 3,300 kcal and expending 2,800: +500 kcal/day: weight gain (muscle if training and enough protein, otherwise mostly fat)."],
    ["Negative energy balance", "Expenditure exceeds intake", null, "Eating 2,300 and expending 2,800: −500 kcal/day: weight loss (about 0.45 kg per week)."],
    ["Sedentary activity factor", "About 1.2", null, "RMR 1,600 × 1.2 = 1,920 kcal/day for someone with a desk job and no exercise."],
    ["Wearable accuracy", "Good for activity patterns, weaker for energy estimates", null, "A watch may count steps and heart rate well, but its calorie estimate can be off by 20–90%, so use it to track trends rather than precise energy use."],
  ],
  questions: [
    ["Energy", "How many kcal are in 1 gram of fat?", ["9", "4", "7", "2"], "Fat provides about 9 kcal per gram, more than twice that of carbohydrate or protein, which each provide 4."],
    ["Energy", "A food has 20 g carbohydrate, 10 g protein, and 10 g fat. Its energy content is approximately:", ["210 kcal", "130 kcal", "310 kcal", "40 kcal"], "(20 × 4) + (10 × 4) + (10 × 9) = 80 + 40 + 90 = 210 kcal."],
    ["Energy", "One kilocalorie equals approximately:", ["4.184 kJ", "1 kJ", "0.239 kJ", "1,000 kJ"], "A kilojoule is the smaller SI unit, so one kcal equals 4.184 kJ."],
    ["Energy", "Which macronutrient provides 7 kcal per gram but has no performance benefit?", ["Alcohol", "Fat", "Protein", "Carbohydrate"], "Alcohol is energy-dense but is not a nutrient and impairs performance and recovery."],
    ["Expenditure", "The largest component of daily energy expenditure for most people is:", ["Resting metabolic rate", "Exercise", "Thermic effect of food", "NEAT"], "RMR accounts for about 60–70% of the total."],
    ["Expenditure", "Which macronutrient has the greatest thermic effect?", ["Protein", "Carbohydrate", "Fat", "Alcohol"], "Digesting and processing protein costs 20–30% of its energy."],
    ["Expenditure", "RMR is most strongly determined by:", ["Fat-free mass", "Hair color", "Total body fat only", "Daily steps"], "Lean tissue is metabolically active at rest."],
    ["Expenditure", "Why can two people with the same weight and workouts have different TDEE?", ["Differences in NEAT", "Differences in blood type", "Different gravity", "Differences in shoe size"], "Fidgeting, walking, and standing vary a lot between individuals."],
    ["Expenditure", "A man has an RMR of 1,800 kcal/day and an activity factor of 1.5. His TDEE is approximately:", ["2,700 kcal", "1,200 kcal", "3,300 kcal", "1,800 kcal"], "TDEE = RMR × activity factor = 1,800 × 1.5."],
    ["Balance", "In a sustained negative energy balance the body:", ["Draws on stored energy", "Stores much more body fat", "Raises RMR sharply at once", "Stops using any energy"], "Expenditure exceeds intake, so stores are mobilized."],
    ["Balance", "The hormone released by fat cells that signals energy stores is:", ["Leptin", "Ghrelin", "Insulin", "Glucagon"], "Leptin tells the brain about long-term energy reserves."],
    ["Balance", "The hormone that stimulates hunger from the stomach is:", ["Ghrelin", "Leptin", "Cholecystokinin", "Peptide YY"], "Ghrelin is secreted by the stomach and rises before meals, stimulating hunger. Leptin from fat cells signals long-term energy stores and suppresses appetite."],
    ["Balance", "Adaptive thermogenesis refers to:", ["A fall in expenditure beyond weight-loss prediction", "An increase in appetite after training", "A rise in RMR after muscle is built up", "Heat production after eating food"], "The body defends its weight by saving energy."],
    ["Measurement", "An RER of about 0.70 indicates the body is mainly oxidizing:", ["Fat", "Carbohydrate", "Protein", "Alcohol"], "Fat requires more oxygen per CO₂ produced, so the ratio is lower."],
    ["Measurement", "The gold standard for measuring total free-living energy expenditure is:", ["Doubly labeled water", "Direct calorimetry in a chamber", "A pedometer", "A food diary"], "It measures CO₂ production over days while people live normally."],
    ["Measurement", "RER is calculated as:", ["VCO₂ ÷ VO₂", "VO₂ ÷ VCO₂", "VO₂ × VCO₂", "VO₂ − VCO₂"], "It compares the CO₂ produced with the O₂ consumed."],
    ["Measurement", "The approximate energy released per liter of oxygen consumed is:", ["5 kcal", "1 kcal", "50 kcal", "0.5 kcal"], "That is why oxygen consumption can estimate energy expenditure."],
    ["Measurement", "The AMDR for carbohydrate is:", ["45–65% of energy", "10–35% of energy", "20–35% of energy", "70–90% of energy"], "Fat is 20–35% and protein is 10–35%."],
  ],
};
