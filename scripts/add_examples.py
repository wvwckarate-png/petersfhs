"""Attach worked examples to College Hub flashcards.
Usage: python3 scripts/add_examples.py  (reads scripts/examples/*.py, each defining EX = {(course, unit): {term: example}})
A card becomes [term, meaning, note|null, example]. Re-running replaces an existing example."""
import re, json, glob, importlib.util, sys
ROOT = "/Users/gregorypeters/Desktop/petersfhs/src/hubs/college/"
STR = r'"(?:[^"\\]|\\.)*"'
LINE = re.compile(rf'^(    \[)({STR}), ({STR})(?:, ({STR}|null))?(?:, ({STR}))?\],$')
def load(p):
    spec = importlib.util.spec_from_file_location("ex", p); m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m); return m.EX
total = 0; missing = []
for p in sorted(glob.glob("/Users/gregorypeters/Desktop/petersfhs/scripts/examples/[a-z]*.py")):
    for (course, unit), terms in load(p).items():
        f = f"{ROOT}{course}/unit{unit:02d}.js"
        lines = open(f).read().split("\n")
        a = next(i for i, l in enumerate(lines) if "cards: [" in l)
        b = next(i for i in range(a, len(lines)) if lines[i].startswith("  ],"))
        for term, ex in terms.items():
            hit = [i for i in range(a + 1, b) if (m := LINE.match(lines[i])) and json.loads(m.group(2)) == term]
            if not hit: missing.append((course, unit, term)); continue
            i = hit[0]; m = LINE.match(lines[i])
            note = m.group(4) if m.group(4) else "null"
            lines[i] = f'    [{m.group(2)}, {m.group(3)}, {note}, {json.dumps(ex, ensure_ascii=False)}],'
            total += 1
        open(f, "w").write("\n".join(lines))
print("examples attached:", total)
for x in missing: print("NOT FOUND:", x)
