import { STANDING } from "./standing";
import { GUARD } from "./guard";
import { PASSING } from "./passing";
import { CONTROL } from "./control";
import { MOUNT } from "./mount";
import { BACK } from "./back";
import { LEGS } from "./legs";
import { SUBS } from "./submissions";

// A position's shape:
//   id, name, family, role ("top" | "bottom" | "neutral"), keys [3], one, goals[], controls[],
//   moves [[name, how]], defense[], mistakes[], gi[], nogi[], solo[], partner[],
//   spar { start, topGoal, bottomGoal, cues[3] }  (cues are the partner's behavior at levels 2, 3 and 4)
//   Submissions use role "sub": goals = what you are trying to do, controls = setup and grips, moves = the finish step by step,
//   defense = how it is defended, topGoal / bottomGoal = attacker / defender.
export const POSITIONS = [...STANDING, ...GUARD, ...PASSING, ...CONTROL, ...MOUNT, ...BACK, ...LEGS, ...SUBS];

export const FAMILIES = [
  { id: "standing", name: "Standing & Takedowns", blurb: "Win the hand-fight, get the takedown, or defend it." },
  { id: "guard", name: "Guard (Bottom)", blurb: "Your legs between you and them: control, sweep, submit." },
  { id: "passing", name: "Passing (Top)", blurb: "Get past the legs and settle the pin." },
  { id: "control", name: "Pins & Control", blurb: "Side control, knee on belly, north-south, scarf hold." },
  { id: "mount", name: "Mount", blurb: "From the top: control and attack. From the bottom: escape." },
  { id: "back", name: "Back & Turtle", blurb: "The most dominant position, and how to escape it." },
  { id: "legs", name: "Leg Attacks", blurb: "The straight ankle lock, the one leg attack used at home." },
  { id: "subs", name: "Submissions", blurb: "Chokes and joint locks: set them up, finish them slowly, and know how they are defended." },
];

// The positional hierarchy pyramid, from the base up.
export const TIERS = [
  { id: "t1", name: "Standing & Takedowns", note: "Neutral", ids: ["standing", "arm-drag", "single-leg", "double-leg", "hip-throw", "sprawl", "guard-pull"] },
  { id: "t2", name: "Guard (Bottom)", note: "Control", ids: ["closed-guard", "butterfly-guard", "open-guard", "shin-to-shin", "spider-guard", "half-guard", "dlr"] },
  { id: "t3", name: "Passing (Top)", note: "Pass", ids: ["inside-closed-guard", "knee-slice", "over-under", "toreando", "leg-drag", "body-lock-pass", "half-guard-top"] },
  { id: "t4", name: "Pins", note: "Pin", ids: ["side-control-top", "knee-on-belly", "north-south", "scarf-hold", "turtle-top"] },
  { id: "t5", name: "Mount & Back", note: "Finish", ids: ["mount-top", "high-mount", "back-top"] },
];
export const FINISHES = ["rear-naked-choke", "triangle-choke", "armbar-guard", "kimura", "americana", "guillotine", "cross-collar-choke", "arm-triangle", "omoplata", "ankle-lock"];
export const ESCAPES = ["side-control-bottom", "mount-bottom", "back-escape", "turtle-bottom"];

export const byId = Object.fromEntries(POSITIONS.map((p) => [p.id, p]));
export { SYSTEMS } from "./systems";
export { FOUR_QUESTIONS, PRINCIPLES, RULES } from "./principles";
export { CURRICULUM } from "./curriculum";
export { SOLO_DRILLS, WARMUPS, RESISTANCE_LADDER } from "./drills";
export { GLOSSARY } from "./glossary";
export { HISTORY, TIMELINE, PEOPLE, SITE_PHOTO } from "./history";
