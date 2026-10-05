import sys,json,re
# usage: fixlen.py pool.mjs fixes.json    (fixes: [[stem_prefix,[choices...]], ...])
pool,fixes=sys.argv[1],sys.argv[2]
s=open(pool).read()
for stem,new in json.load(open(fixes)):
    i=s.find(stem)
    assert i>=0,'stem not found: '+stem
    # find the opening [ of the choices array after the stem
    j=s.index('[',i+len(stem))
    # match brackets, respecting double-quoted strings
    depth=0;k=j;instr=False
    while True:
        ch=s[k]
        if instr:
            if ch=='\\': k+=1
            elif ch=='"': instr=False
        else:
            if ch=='"': instr=True
            elif ch=='[': depth+=1
            elif ch==']':
                depth-=1
                if depth==0: break
        k+=1
    s=s[:j]+json.dumps(new,ensure_ascii=False)+s[k+1:]
open(pool,'w').write(s)
print('fixed',len(json.load(open(fixes))))
