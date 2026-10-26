// Questions and cards built from the position data, so they grow with the library.
// Wrong answers are chosen so they are clearly wrong for the position asked about (never a move that also works there),
// and they are picked to be about as long as the right answer, so length gives nothing away.
import { POSITIONS } from "./index";

const rand = (n) => Math.floor(Math.random() * n);
const shuffle = (a) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = rand(i + 1); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const closest = (pool, target, n) => [...pool].sort((x, y) => Math.abs(x.length - target.length) - Math.abs(y.length - target.length) + (Math.random() - 0.5) * 8).slice(0, n);
const sample = (arr) => arr[rand(arr.length)];
const words = (s) => s.toLowerCase().replace(/[^a-z ]/g, " ").split(" ").filter((w) => w.length > 3 && !["from", "with", "your", "their", "(gi)", "back"].includes(w));

export function generatedQuestions(perKind = 28) {
  const out = [];
  // 1. Which position has these three keys?
  shuffle(POSITIONS).slice(0, perKind).forEach((p) => {
    const wrong = shuffle(POSITIONS.filter((o) => o.id !== p.id && (o.role === p.role || o.family === p.family))).slice(0, 3).map((o) => o.name);
    out.push(["Position keys", `Which position has these three keys: ${p.keys.join(", ")}?`, [p.name, ...wrong], `${p.name}: ${p.one}`]);
  });
  // 2. Which move can you use from this position? Wrong answers come from the opposite side of the position and share no key word with the real moves.
  shuffle(POSITIONS.filter((p) => p.role !== "sub")).slice(0, perKind).forEach((p) => {
    const mine = p.moves.map((m) => m[0]), mineWords = new Set(mine.flatMap(words));
    const right = sample(mine);
    const pool = [...new Set(POSITIONS.filter((o) => o.role !== "sub" && o.role !== p.role && o.family !== p.family).flatMap((o) => o.moves.map((m) => m[0])))].filter((m) => !words(m).some((w) => mineWords.has(w)));
    if (pool.length < 3) return;
    const mv = p.moves.find((m) => m[0] === right);
    out.push(["Moves from positions", `Which of these is a move you can use from ${p.name}?`, [right, ...closest(pool, right, 3)], `${right}. ${mv[1]}`]);
  });
  // 3. Habit or mistake? The wrong answers always come from the same position, so they are clearly wrong for it.
  shuffle(POSITIONS).slice(0, perKind).forEach((p, i) => {
    const dos = [...p.goals, ...p.controls], donts = p.mistakes;
    if (i % 2) { const right = sample(donts); out.push(["Mistakes", `Which of these is a common mistake in ${p.name}?`, [right, ...closest(dos, right, 3)], `Avoid it: ${right}`]); }
    else { const right = sample(dos); out.push(["Good habits", `Which of these is something you should do in ${p.name}?`, [right, ...closest(donts, right, 3)], `${p.name}: ${right}`]); }
  });
  return out;
}

// Flashcards from the library: one card per position (name to what it is) and one per position's three keys.
export function positionCards() {
  const names = POSITIONS.map((p) => [p.name, p.one]);
  const keys = POSITIONS.map((p) => [`Three keys of ${p.name}`, p.keys.join(" · ")]);
  return { names, keys };
}
