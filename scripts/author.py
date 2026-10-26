"""Authoring helpers for adding structures, figures, questions and cards to College Hub unit files."""
import re,sys
ROOT="/Users/gregorypeters/Desktop/petersfhs/src/hubs/college/"
def _rd(c,u): return open(f"{ROOT}{c}/unit{u:02d}.js").read()
def _wr(c,u,s): open(f"{ROOT}{c}/unit{u:02d}.js","w").write(s)

def add_blocks(c,u,sid,blocks,where="before_recap",after=None):
    """Insert block lines into section `sid`. where: before_recap | after_p | after (line containing `after`)."""
    lines=_rd(c,u).split("\n")
    i=next(k for k,l in enumerate(lines) if f'id: "{sid}"' in l)
    if where=="before_recap":
        j=next(k for k in range(i,len(lines)) if lines[k].startswith("        { recap:"))
        pos=j
    elif where=="after_p":
        j=next(k for k in range(i,len(lines)) if lines[k].startswith("        { p:")); pos=j+1
    else:
        j=next(k for k in range(i,len(lines)) if after in lines[k]); 
        # advance to end of a multi-line block (table spans lines starting with 8 spaces + '{ table' until a line ending with '] } },')
        pos=j+1
        if lines[j].lstrip().startswith("{ table") and not lines[j].rstrip().endswith("} },"):
            k=j
            while not lines[k].rstrip().endswith("] } },"): k+=1
            pos=k+1
    lines[pos:pos]=["        "+b for b in blocks]
    _wr(c,u,"\n".join(lines))

def add_section(c,u,sid,num,title,blocks):
    s=_rd(c,u)
    body="\n".join("        "+b for b in blocks)
    sec=f'''    {{
      id: "{sid}", num: "{num}", title: "{title}",
      blocks: [
{body}
      ],
    }},
'''
    idx=s.index("  ],\n  practice:")
    s=s[:idx]+sec+s[idx:]
    _wr(c,u,s)

def add_questions(c,u,tuples):
    s=_rd(c,u)
    idx=s.rindex("\n  ],\n};")
    s=s[:idx]+"\n"+"\n".join("    "+t for t in tuples)+s[idx:]
    _wr(c,u,s)

def add_cards(c,u,cards):
    s=_rd(c,u)
    idx=s.index("\n  ],\n  questions:")
    s=s[:idx]+"\n"+"\n".join("    "+t for t in cards)+s[idx:]
    _wr(c,u,s)

def sub(c,u,old,new,count=1):
    s=_rd(c,u)
    assert old in s,(c,u,old[:50])
    _wr(c,u,s.replace(old,new,count))

# ---- JSON-based constructors: json.dumps escapes SMILES backslashes correctly and the output is valid JS ----
import json
def _j(x): return json.dumps(x, ensure_ascii=False)
def Q(topic, stem, ok, bad, expl): return _j([topic, stem, [ok, *bad], expl]) + ","
def C(term, meaning, note=None): return _j([term, meaning] + ([note] if note else [])) + ","
def _raw(t): return t[2:-2] if t.startswith("{{svg:") and t.endswith("}}") else t
def MOLS(items): return _j({"mols": [[_raw(i[0]), *i[1:]] for i in items]}) + ","       # items: [smiles | "svg:spec", name, note?]
def MOL(smi, caption=None): return _j({"mol": smi, **({"caption": caption} if caption else {})}) + ","
def RXN(spec, caption=None): return _j({"rxn": spec, **({"caption": caption} if caption else {})}) + ","
def P(html): return _j({"p": html}) + ","
def KEY(html): return _j({"key": html}) + ","
def TRAP(html): return _j({"trap": html}) + ","
def M(smi): return "{{mol:" + smi + "}}"
def R(spec): return "{{rxn:" + spec + "}}"

def repl_line(c,u,contains,new):
    """Replace the single line containing `contains` with `new` (already formatted with the 4-space indent added here)."""
    lines=_rd(c,u).split("\n")
    idx=[k for k,l in enumerate(lines) if contains in l]
    assert len(idx)==1,(c,u,contains[:40],len(idx))
    lines[idx[0]]="    "+new
    _wr(c,u,"\n".join(lines))
def SVG(spec, caption=None): return _j({"svg": spec, **({"caption": caption} if caption else {})}) + ","
def S(spec): return "{{svg:" + spec + "}}"
def NEW(rot, fr="CH₃,H,H", bk="CH₃,H,H"): return f"newman; front={fr}; back={bk}; rot={rot}"
