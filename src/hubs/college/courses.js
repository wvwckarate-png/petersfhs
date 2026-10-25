// College Hub course list. WVU Exercise Physiology (Health Professions) plan of study.
//
// kind "new": a College Hub course that gets its own page under /college/<id>.
//   Content is added later in ./courseContent.js; until then the page shows "coming soon".
// kind "ap":  a foundation course that already exists in the AP Hub; the card opens it directly.

export const NAVY = "#002855";
export const NAVY_DEEP = "#001A3A";
export const NAVY_PALE = "#E6EBF3";
export const GOLD = "#EAAA00";
export const GOLD_DEEP = "#8A6500";
export const GOLD_PALE = "#FFF6D9";

export const COURSES = [
  { id: "elementary-physiology", kind: "new", name: "Elementary Physiology", code: "PSIO 241", description: "How the major organ systems of the human body work together." },
  { id: "kinesiology", kind: "new", name: "Kinesiology", code: "EXPH 364", description: "The mechanics of human movement: joints, muscles, and motion." },
  { id: "anatomy", kind: "new", name: "Anatomy for Exercise Physiology", code: "EXPH 440", description: "Bones, muscles, and structures that matter for exercise science." },
  { id: "medical-terminology", kind: "new", name: "Medical Terminology", code: "EXPH 240", description: "The prefixes, roots, and suffixes behind medical language." },
  { id: "exercise-nutrition", kind: "new", name: "Exercise Nutrition", code: "EXPH 367", description: "Fuel, energy, and nutrition for performance and health." },
  { id: "organic-chemistry-1", kind: "new", name: "Organic Chemistry 1", code: "CHEM 233", description: "Structure, bonding, and reactions of carbon compounds." },
  { id: "organic-chemistry-2", kind: "new", name: "Organic Chemistry 2", code: "CHEM 234", description: "Further reactions, synthesis, and spectroscopy." },
  // Remaining courses on the plan of study. Placeholders until content is built ("Coming soon").
  { id: "advanced-physiology-1", section: "exph", kind: "new", name: "Advanced Physiology of Exercise 1", code: "EXPH 386", description: "Advanced study of the body's response to exercise." },
  { id: "advanced-physiology-2", section: "exph", kind: "new", name: "Advanced Physiology of Exercise 2", code: "EXPH 387", description: "Continuation of advanced exercise physiology." },
  { id: "pathophysiology", section: "exph", kind: "new", name: "Pathophysiology", code: "EXPH 460", description: "How disease disrupts normal physiology." },
  { id: "biochemistry", section: "support", kind: "new", name: "Introduction to Human Biochemistry", code: "BMM 339", description: "The chemistry of the molecules and pathways of the body." },
  { id: "cell-molecular-biology", section: "support", kind: "new", name: "Cellular and Molecular Biology", code: "BIOL 219", description: "Cell structure, genes, and molecular processes." },
  { id: "genetics", section: "support", kind: "new", name: "Principles of Genetics", code: "GEN 371", description: "Inheritance, genes, and variation." },
  { id: "statistics", section: "support", kind: "new", name: "Elementary Statistical Inference", code: "STAT 211", description: "Statistics for interpreting data and research." },
];

export const FOUNDATION_COURSES = [
  { id: "biology", kind: "ap", name: "Biology", code: "BIOL 115 / 117", apPath: "/ap/biology", apName: "AP Biology" },
  { id: "chemistry", kind: "ap", name: "General Chemistry", code: "CHEM 115 / 116", apPath: "/ap/chemistry", apName: "AP Chemistry" },
  { id: "physics1", kind: "ap", name: "Physics 1", code: "PHYS 101", apPath: "/ap/physics1", apName: "AP Physics 1" },
  { id: "physics2", kind: "ap", name: "Physics 2", code: "PHYS 102", apPath: "/ap/physics2", apName: "AP Physics 2" },
];

export const findCourse = (id) => COURSES.find((c) => c.id === id);
