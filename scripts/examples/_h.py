def m(s): return "{{mol:" + s + "}}"
def rx(s): return "{{rxn:" + s + "}}"
def sv(s): return "{{svg:" + s + "}}"
def newman(rot, fr="H,H,H", bk="H,H,H"): return sv(f"newman; front={fr}; back={bk}; rot={rot}")
