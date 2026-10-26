"""Insert figure / chart / structure blocks into College Hub study-guide sections (before the section's recap).
Reads scripts/visuals/*.py, each defining V = {(course, unit): {section_id: [block, ...]}} where a block is the JS text of one block line.
Idempotent: previously inserted blocks (between '// visuals:' markers) are replaced."""
import glob, importlib.util, json, re
ROOT = "/Users/gregorypeters/Desktop/petersfhs/src/hubs/college/"
def F(i, cap): return '{ figId: %s, caption: %s },' % (json.dumps(i), json.dumps(cap, ensure_ascii=False))
def S(spec, cap): return '{ svg: %s, caption: %s },' % (json.dumps(spec, ensure_ascii=False), json.dumps(cap, ensure_ascii=False))
def Mol(smi, cap): return '{ mol: %s, caption: %s },' % (json.dumps(smi), json.dumps(cap, ensure_ascii=False))
def Mols(items): return '{ mols: %s },' % json.dumps(items, ensure_ascii=False)
def Rxn(spec, cap): return '{ rxn: %s, caption: %s },' % (json.dumps(spec, ensure_ascii=False), json.dumps(cap, ensure_ascii=False))
def Wp(spec, cap): return '{ p: %s },' % json.dumps('{{wp:%s}} %s' % (spec, cap), ensure_ascii=False)
total = 0
for p in sorted(glob.glob("/Users/gregorypeters/Desktop/petersfhs/scripts/visuals/[a-z]*.py")):
    spec = importlib.util.spec_from_file_location("v", p); m = importlib.util.module_from_spec(spec)
    m.F, m.S, m.Mol, m.Mols, m.Rxn, m.Wp = F, S, Mol, Mols, Rxn, Wp
    spec.loader.exec_module(m)
    for (course, unit), secs in m.V.items():
        f = f"{ROOT}{course}/unit{unit:02d}.js"; lines = open(f).read().split("\n")
        for sid, blocks in secs.items():
            # drop earlier insertion for this section
            while True:
                a = next((i for i, l in enumerate(lines) if l.strip() == f"// visuals:begin {sid}"), None)
                if a is None: break
                b = next(i for i in range(a, len(lines)) if lines[i].strip() == f"// visuals:end {sid}")
                del lines[a:b + 1]
            i = next(k for k, l in enumerate(lines) if f'id: "{sid}"' in l)
            j = next(k for k in range(i, len(lines)) if lines[k].startswith("        { recap:"))
            ins = [f"        // visuals:begin {sid}"] + ["        " + b for b in blocks] + [f"        // visuals:end {sid}"]
            lines[j:j] = ins; total += len(blocks)
        open(f, "w").write("\n".join(lines))
print("visual blocks inserted:", total)
