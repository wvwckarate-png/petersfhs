V = {}
GLCP = "OC[C@H]1OC(O)[C@H](O)[C@@H](O)[C@@H]1O"
CHOL = "C[C@H](CCCC(C)C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C"
ENG = "bars; title=Energy per gram; y=kcal per gram; data=Carbohydrate:4:#2E6BC6, Protein:4:#C0392B, Fat:9:#C99700, Alcohol:7:#7A3FB8"
V[("nutrition", 1)] = {
 "s11": [S(ENG, "Energy per gram (Atwater factors): fat has more than twice the energy of carbohydrate or protein.")],
 "s12": [S("bars; title=Components of daily energy expenditure; y=Typical kcal; data=RMR:1800:#2E6BC6, TEF:250:#C99700, NEAT:400:#7A3FB8, Exercise:500:#C0392B; max=2000", "TDEE = RMR + thermic effect of food + NEAT + exercise (an example for an active adult).")],
 "s13": [S("plot; title=Energy balance and weight; x=Weeks; y=Weight change (kg); xlim=0:12; ylim=-6:6; xticks=0,4,8,12; yticks=-4,0,4; line=0,0 4,-1.8 8,-3.2 12,-4.1 | #2E7D32 | −500 kcal/day; line=0,0 4,1.8 8,3.6 12,5.4 | #C0392B | +500 kcal/day; hline=0 Weight stable | #888", "A 500 kcal daily deficit or surplus changes weight by about 0.45 kg a week at first, and the rate slows as expenditure adapts.")],
 "s14": [S("plot; title=RER and fuel use; x=Exercise intensity (% VO₂ max); y=RER; xlim=0:100; ylim=0.65:1.05; xticks=0,25,50,75,100; yticks=0.7,0.85,1.0; line=0,0.82 25,0.84 50,0.88 75,0.95 100,1.02 | #C0392B; hline=0.7 Fat only | #888; hline=1.0 Carbohydrate only | #888", "The respiratory exchange ratio (VCO₂ ÷ VO₂) rises from about 0.7 for pure fat toward 1.0 for pure carbohydrate as exercise intensity rises.")],
}
V[("nutrition", 2)] = {
 "s21": [Mols([[GLCP, "Glucose", "blood sugar"], ["C([C@H]([C@H]([C@@H](C(=O)CO)O)O)O)O", "Fructose", "fruit sugar"], ["OC[C@H]1OC(O)[C@H](O)[C@@H](O)[C@H]1O", "Galactose", "milk sugar part"]]),
         Mols([["C([C@@H]1[C@H]([C@@H]([C@H]([C@H](O1)O[C@]2([C@H]([C@@H]([C@H](O2)CO)O)O)CO)O)O)O)O", "Sucrose", "glucose + fructose"], ["C([C@@H]1[C@@H]([C@@H]([C@H]([C@@H](O1)O[C@@H]2[C@H](OC([C@@H]([C@H]2O)O)O)CO)O)O)O)O", "Lactose", "galactose + glucose"], ["C([C@@H]1[C@H]([C@@H]([C@H]([C@H](O1)O[C@@H]2[C@H](OC([C@@H]([C@H]2O)O)O)CO)O)O)O)O", "Maltose", "glucose + glucose"]]),
         F("polysaccharides", "Three important polysaccharides: starch, glycogen, and cellulose.")],
 "s22": [F("carb-digestion", "Carbohydrate digestion and absorption."), F("glucose-regulation", "Insulin and glucagon regulate blood glucose."),
         S("plot; title=Blood glucose after 50 g carbohydrate; x=Minutes after eating; y=Blood glucose (mg/dL); xlim=0:120; ylim=70:180; xticks=0,30,60,90,120; yticks=90,140; line=0,90 15,130 30,165 60,125 90,95 120,90 | #C0392B | High GI (white bread); line=0,90 30,110 60,125 90,115 120,95 | #2E7D32 | Low GI (lentils)", "Glycemic index: a high-GI food raises blood glucose quickly and sharply; a low-GI food produces a slower, lower rise.")],
 "s23": [S("bars; title=Glycogen stores; y=grams; data=Muscle:400:#C0392B, Liver:90:#2E6BC6, Blood glucose:5:#2E7D32; max=450", "Muscle glycogen (about 400 g) fuels only the muscle that stores it; liver glycogen (about 90 g) maintains blood glucose."),
         S("plot; title=Muscle glycogen during a marathon; x=Time (min); y=Glycogen (% of start); xlim=0:240; ylim=0:100; xticks=0,60,120,180,240; yticks=0,50,100; line=0,100 60,70 120,38 160,12 180,4 | #C0392B; band=150,200 The wall | #FDE8A0", "Glycogen depletion produces 'the wall' near the end of a long run.")],
 "s24": [S("bars; title=Carbohydrate needs (g/kg/day); y=g/kg/day; data=Light training:4:#2E6BC6, Moderate:6:#C99700, Heavy:8:#E67E22, Very heavy:10:#C0392B; max=12", "Daily carbohydrate recommendations rise with training load.")],
}
V[("nutrition", 3)] = {
 "s31": [Mols([["CCCCCCCCCCCCCCCC(=O)O", "Palmitic acid", "saturated (no double bonds)"], ["CCCCCCCC/C=C\\CCCCCCCC(=O)O", "Oleic acid", "monounsaturated (cis)"], ["CCCCC/C=C\\C/C=C\\CCCCCCCC(=O)O", "Linoleic acid", "omega-6"], ["CC/C=C\\C/C=C\\C/C=C\\CCCCCCCC(=O)O", "α-Linolenic acid", "omega-3"], ["CCCCCCCC/C=C/CCCCCCCC(=O)O", "Elaidic acid", "trans fat"]]),
         F("triglycerides", "A triglyceride: glycerol with three fatty acids."), F("other-lipids", "Phospholipids, cholesterol, and other lipids."), Mol(CHOL, "Cholesterol: a sterol with four fused rings.")],
 "s32": [F("lipid-absorption", "Fat digestion and absorption: bile salts, micelles, chylomicrons, and the lacteal."), F("chylomicron", "A chylomicron: triglycerides, cholesterol, and other lipids."), F("lipid-metabolism", "Lipoprotein metabolism: LDL delivers cholesterol; HDL returns it.")],
 "s33": [F("fatty-acid-breakdown", "Beta-oxidation of fatty acids."), S("plot; title=Fat oxidation vs. intensity; x=Exercise intensity (% VO₂ max); y=Fat oxidation (g/min); xlim=0:100; ylim=0:0.8; xticks=0,25,50,75,100; yticks=0,0.4; line=0,0.1 20,0.35 45,0.6 60,0.55 75,0.3 90,0.08 100,0.02 | #C0392B; vline=60 Fat max | #002855", "Fat oxidation peaks at moderate intensity and falls as intensity rises."),
         S("bars; title=Energy stores in a lean 70 kg adult (kcal); y=kcal; data=Fat:60000:#C99700, Muscle protein:25000:#C0392B, Muscle glycogen:1600:#2E6BC6, Liver glycogen:360:#7A3FB8; max=65000", "Even a lean person carries tens of thousands of kcal of fat but only about 2,000 kcal of carbohydrate.")],
 "s34": [Mols([["CC(=O)CC(=O)O", "Acetoacetate", "ketone body"], ["CC(O)CC(=O)O", "β-Hydroxybutyrate", "ketone body"]])],
}
V[("nutrition", 4)] = {
 "s41": [F("amino-acid", "Every amino acid has an amino group, a carboxyl group, and a side chain."), Mols([["CC(C)C[C@H](N)C(=O)O", "Leucine", "BCAA"], ["CC[C@H](C)[C@H](N)C(=O)O", "Isoleucine", "BCAA"], ["CC(C)[C@H](N)C(=O)O", "Valine", "BCAA"]]),
         S("bars; title=Protein quality (PDCAAS); y=Score; data=Whey/casein/egg/soy:1.0:#2E7D32, Beef:0.92:#2E7D32, Pea:0.82:#C99700, Lentils:0.52:#C99700, Wheat gluten:0.25:#C0392B; max=1.1", "Protein quality: PDCAAS compares digestibility and the limiting amino acid.")],
 "s42": [F("peptide-bond", "A peptide bond joins two amino acids."), F("protein-digestion", "Protein digestion: pepsin, trypsin, and brush-border peptidases."), F("urea-cycle", "The urea cycle converts ammonia to urea."), Mol("NC(N)=O", "Urea: the main nitrogen waste.")],
 "s43": [S("plot; title=MPS after a lifting session; x=Hours after training; y=MPS (× resting); xlim=0:48; ylim=0.8:3.5; xticks=0,12,24,36,48; yticks=1,2,3; line=0,1 3,2.3 8,2.9 16,2.4 24,1.8 36,1.3 48,1 | #C0392B; hline=1 Resting | #888", "Muscle protein synthesis rises after resistance exercise and stays elevated for 24–48 hours.")],
 "s44": [S("bars; title=Protein (g); y=g of protein; data=Chicken/100 g:30:#C0392B, Greek yogurt/200 g:19:#2E6BC6, Lentils/1 cup:18:#2E7D32, Whey/1 scoop:23:#7A3FB8, Egg/1 large:6:#C99700; max=34", "Protein content of common foods.")],
}
V[("nutrition", 5)] = {
 "s51": [S("bars; title=Dietary Reference Intakes; y=Relative level; data=EAR:50:#C99700, RDA:65:#2E6BC6, UL:100:#C0392B; max=110", "DRIs: the EAR meets the needs of half the group, the RDA covers nearly everyone, and the UL is the highest intake unlikely to cause harm.")],
 "s52": [Mols([["Cc1ncc(C[n+]2csc(CCO)c2C)c(N)n1", "Thiamin (B₁)", "carbohydrate metabolism"], ["CC1=CC2=C(C=C1C)N(C3=NC(=O)NC(=O)C3=N2)CC(C(C(CO)O)O)O", "Riboflavin (B₂)", "FAD"], ["NC(=O)c1cccnc1", "Niacin (B₃)", "NAD⁺"], ["CC(C)(CO)[C@@H](O)C(=O)NCCC(=O)O", "Pantothenic acid (B₅)", "coenzyme A"]]),
         Mols([["Cc1ncc(CO)c(CO)c1O", "Pyridoxine (B₆)", "amino acid metabolism"], ["O=C(O)CCCC[C@@H]1SC[C@@H]2NC(=O)N[C@H]12", "Biotin (B₇)", "carboxylation"], ["Nc1nc2ncc(CNc3ccc(cc3)C(=O)N[C@@H](CCC(=O)O)C(=O)O)nc2c(=O)[nH]1", "Folate (B₉)", "DNA synthesis"], ["OC[C@H](O)[C@H]1OC(=O)C(O)=C1O", "Vitamin C", "collagen, antioxidant"]]),
         F("hdn", "Anemia from B₁₂ or folate deficiency: large immature red cells (megaloblastic anemia).")],
 "s53": [Mols([["CC1=C(/C=C/C(/C)=C/C=C/C(/C)=C/CO)C(C)(C)CCC1", "Retinol (vitamin A)", "vision, epithelium"], ["C[C@H](CCCC(C)C)[C@H]1CC[C@@H]\\2[C@@]1(CCC/C2=C\\C=C/3\\C[C@H](CCC3=C)O)C", "Vitamin D₃", "calcium absorption"], ["Cc1c(C)c2c(c(C)c1O)CCC(C)(CCCC(C)CCCC(C)CCCC(C)C)O2", "Vitamin E", "membrane antioxidant"], ["CC1=C(CC=C(C)CCCC(C)CCCC(C)CCCC(C)C)C(=O)c2ccccc2C1=O", "Vitamin K₁", "clotting"]]),
         F("bone-vitd", "Vitamin D synthesis: UV-B in skin, then liver and kidney activation.")],
 "s54": [S("bars; title=Vitamin D (IU/day); y=IU per day; data=RDA (adults):600:#2E6BC6, RDA (over 70):800:#2E6BC6, UL:4000:#C0392B; max=4400", "Vitamin D intake: the RDA and the upper limit.")],
}
V[("nutrition", 6)] = {
 "s61": [F("bone-class", "Bone is the body's calcium reservoir (99% of calcium)."), S("plot; title=Bone mass across life; x=Age (years); y=Bone mass (relative); xlim=0:90; ylim=0:100; xticks=0,20,30,50,70,90; yticks=0; line=0,10 10,40 20,85 30,100 45,98 55,88 70,68 90,50 | #C0392B; vline=30 Peak ≈ 25–30 | #002855", "Peak bone mass is reached at about 25–30; what you build early determines your reserve."), F("osteoporosis-spine", "Osteoporosis: vertebrae can collapse.")],
 "s62": [S("bars; title=Sodium and potassium (mg/day); y=mg/day; data=Sodium limit:2300:#C0392B, Typical intake:3400:#E67E22, Potassium AI (men):3400:#2E7D32, Potassium AI (women):2600:#2E7D32; max=3800", "Sodium: typical intake is above the limit; potassium: typical intake is below the target.")],
 "s63": [F("hemoglobin", "Iron sits in heme at the center of each hemoglobin chain."), F("goiter", "Iodine deficiency causes a goiter."), F("rbc-shape", "Iron-deficiency anemia: small, pale red cells.")],
 "s64": [F("bone-vitd", "Vitamin D and calcium work together for bone mineralization."), F("fracture-repair", "Stress fractures and the stages of bone repair.")],
}
V[("nutrition", 7)] = {
 "s71": [F("water-distribution", "Body water distribution: intracellular and extracellular fluid."), F("thirst", "The thirst response."), F("adh", "ADH tells the kidneys to retain water.")],
 "s72": [S("plot; title=Dehydration and heart rate; x=Body weight lost (%); y=Heart rate increase (bpm); xlim=0:5; ylim=0:25; xticks=0,1,2,3,4,5; yticks=0,10,20; line=0,0 1,4 2,9 3,14 4,19 5,24 | #C0392B", "Each 1% of body weight lost raises the heart rate by about 3–5 bpm at the same workload."), F("urine-color", "Urine color is a quick hydration guide."), S("bars; title=Sweat rate (L/h); y=L per hour; data=Cool walk:0.3:#2E6BC6, Moderate run:1.0:#C99700, Hot marathon:2.0:#C0392B, Elite heat:3.0:#7A3FB8; max=3.4", "Sweat rates vary from 0.3 to 3 L per hour.")],
 "s73": [F("carb-digestion", "Sodium and glucose are absorbed together by SGLT1, and water follows."), S("bars; title=Carbohydrate in drinks (%); y=% carbohydrate; data=Water:0:#2E6BC6, Sports drink:6:#2E7D32, Fruit juice:11:#C99700, Soda:11:#C0392B; max=13; unit=%", "A 6–8% carbohydrate solution is absorbed quickly; stronger solutions slow gastric emptying.")],
 "s74": [F("thermoregulation", "The hypothalamus regulates body temperature."), F("skin-thermoreg", "Skin blood flow and sweating release heat.")],
}
V[("nutrition", 8)] = {
 "s81": [S("plot; title=Energy systems over time; x=Seconds of maximal effort; y=Contribution (%); xlim=0:180; ylim=0:100; xticks=0,10,30,60,120,180; line=0,100 5,95 10,55 20,25 40,8 180,2 | #C0392B | Phosphagen; line=0,0 10,35 30,60 60,45 100,28 180,18 | #2E6BC6 | Glycolysis; line=0,0 10,10 30,30 60,55 100,72 180,80 | #2E7D32 | Oxidative", "The three energy systems and how their contributions change over time."), F("muscle-metabolism", "Muscle metabolism: phosphocreatine, glycolysis, and oxidative phosphorylation."), F("cell-respiration", "Cellular respiration in the mitochondrion.")],
 "s82": [S("plot; title=Fuel use vs. intensity; x=Exercise intensity (% VO₂ max); y=Share of energy (%); xlim=0:100; ylim=0:100; xticks=0,25,50,65,75,100; yticks=0,50,100; line=0,45 25,55 50,60 65,70 85,88 100,97 | #2E6BC6 | Carbohydrate; line=0,55 25,45 50,40 65,30 85,12 100,3 | #C99700 | Fat; vline=65 Crossover ≈ 65% | #888", "The crossover concept: as intensity rises, carbohydrate supplies a larger and larger share of energy.")],
 "s83": [S("plot; title=Muscle glycogen during a marathon; x=Time (min); y=Glycogen (% of start); xlim=0:240; ylim=0:100; xticks=0,60,120,180,240; yticks=0,50,100; line=0,100 60,70 120,38 160,12 180,4 | #C0392B", "Glycogen depletion is a main cause of fatigue in prolonged exercise.")],
 "s84": [S("bars; title=Energy contribution by event; y=% aerobic; data=100 m:5:#C0392B, 400 m:45:#E67E22, 5 km:92:#2E7D32, Marathon:99:#2E7D32; max=105; unit=%", "Approximate aerobic share of energy by event: it rises with the duration.")],
}
V[("nutrition", 9)] = {
 "s91": [S("plot; title=Blood glucose before exercise; x=Minutes after exercise starts; y=Blood glucose (mg/dL); xlim=0:60; ylim=50:150; xticks=0,15,30,45,60; yticks=70,100; line=0,140 10,95 20,72 30,70 45,78 60,88 | #C0392B; hline=70 Low | #888", "Rebound hypoglycemia: a sugary snack just before exercise can cause a dip in blood glucose.")],
 "s92": [S("bars; title=Carbohydrate during exercise (g/h); y=g per hour; data=Under 45 min:0:#888, 1–2.5 h:45:#2E6BC6, Over 2.5 h:90:#C0392B; max=100", "Carbohydrate intake during exercise rises with the duration of the event.")],
 "s93": [S("bars; title=Refuel (g carbohydrate per hour, 70 kg); y=g per hour; data=First 4 h:80:#2E7D32; max=100", "Refuel at 1.0–1.2 g/kg/h for the first 4 hours after hard exercise."), F("carb-digestion", "Carbohydrate and sodium are absorbed together.")],
 "s94": [F("gastric-phases", "Gastric emptying and phases of digestion influence how soon after eating you can exercise."), F("segmentation", "Gut movement and blood flow to the gut during exercise.")],
}
V[("nutrition", 10)] = {
 "s101": [S("bars; title=BMI categories; y=BMI; data=Underweight (<18.5):18:#C99700, Normal (18.5–24.9):22:#2E7D32, Overweight (25–29.9):27:#E67E22, Obesity (≥30):33:#C0392B; max=38", "BMI categories: weight (kg) ÷ height² (m²)."), F("osteoporosis-spine", "DEXA measures bone density as well as fat and lean mass.")],
 "s102": [S("plot; title=Energy balance and weight; x=Weeks; y=Weight change (kg); xlim=0:12; ylim=-6:6; xticks=0,4,8,12; yticks=-4,0,4; line=0,0 4,-1.8 8,-3.2 12,-4.1 | #2E7D32 | −500 kcal/day; line=0,0 4,1.8 8,3.6 12,5.4 | #C0392B | +500 kcal/day; hline=0 Weight stable | #888", "A moderate daily deficit or surplus changes weight slowly and steadily.")],
 "s103": [S("bars; title=Energy availability (kcal/kg FFM/day); y=kcal/kg FFM/day; data=Optimal:45:#2E7D32, Threshold:30:#C99700, Example athlete:22:#C0392B; max=50", "Energy availability below about 30 kcal/kg FFM/day risks RED-S."), F("osteoporosis-spine", "Low energy availability leads to low bone density and stress fractures.")],
 "s104": [F("fracture-repair", "Repeated stress fractures and menstrual changes are warning signs of RED-S.")],
}
V[("nutrition", 11)] = {
 "s111": [Mol("CN(CC(=O)O)C(=N)N", "Creatine: the most researched sports supplement.")],
 "s112": [Mols([["CN(CC(=O)O)C(=N)N", "Creatine", "phosphocreatine"], ["Cn1cnc2c1c(=O)n(C)c(=O)n2C", "Caffeine", "blocks adenosine"], ["NCCC(=O)O", "β-Alanine", "carnosine"], ["OC(=O)[O-]", "Bicarbonate", "buffer"], ["[O-][N+](=O)[O-]", "Nitrate", "beetroot juice"]])],
 "s113": [Mols([["CC(C)(O)CC(=O)O", "HMB", "leucine metabolite"], ["NC(=O)CC[C@H](N)C(=O)O", "Glutamine", "no benefit in healthy athletes"], ["C[N+](C)(C)C[C@H](O)CC(=O)[O-]", "Carnitine", "does not raise fat burning"]])],
 "s114": [Mol("C[C@]12CC[C@H]3[C@H]([C@@H]1CC[C@@H]2O)CCC4=CC(=O)CC[C@]34C", "Testosterone: anabolic steroids are synthetic derivatives (banned in sport).")],
}
V[("nutrition", 12)] = {
 "s121": [F("myplate", "MyPlate: half the plate fruits and vegetables, plus grains, protein, and dairy.")],
 "s122": [S("bars; title=Self-reported vs measured energy intake; y=kcal; data=Measured:2600:#2E6BC6, Reported:2100:#C0392B; max=3000", "Illustration of underreporting: people often report 10–45% less than they actually eat.")],
 "s123": [F("bone-age", "Bone mass across life: calcium needs peak in adolescence."), F("tissue-repair", "Sarcopenia and tissue repair in older adults.")],
 "s124": [F("fetal-circulation", "Pregnancy raises needs for folate, iron, and energy."), F("si-histology", "Celiac disease damages the villi of the small intestine.")],
}
