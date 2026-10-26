"""Download freely licensed Wikimedia Commons figures for the College Hub and record their credits.
Usage: python3 scripts/fetch_figs.py   (reads scripts/figs/*.py, each defining FIGS = {id: ("File name.jpg", "alt text", width?)})
Writes public/college-figs/<id>.<ext> and src/hubs/college/figures.js (the manifest). Only PD / CC0 / CC BY / CC BY-SA files are kept."""
import json, glob, importlib.util, os, re, time, urllib.parse, urllib.request
ROOT = "/Users/gregorypeters/Desktop/petersfhs/"
OUT = ROOT + "public/college-figs/"; MAN = ROOT + "src/hubs/college/figures.js"
WIDTH = 960  # a standard Commons thumbnail size (non-standard sizes are rate limited); shrunk locally with sips
UA = {"User-Agent": "petersfhs-study-site/1.0 (family study site)"}
OK = re.compile(r"^(public domain|pd|cc0|cc by(-sa)? [\d.]+|cc by(-sa)?)", re.I)
def api(titles, width=None):
    u = "https://commons.wikimedia.org/w/api.php?format=json&action=query&prop=imageinfo&iiprop=url|extmetadata|size&iiurlwidth=" + str(width or WIDTH) + "&titles=" + urllib.parse.quote("|".join(titles))
    for t in range(5):
        try: return json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=40))
        except Exception: time.sleep(5 * (t + 1))
    return {}
def get(url, path):
    for t in range(3):
        try:
            data = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=40).read()
            open(path, "wb").write(data); return True
        except Exception: time.sleep(4 * (t + 1))
    return False
man = {}
if os.path.exists(MAN):
    txt = open(MAN).read(); man = json.loads(txt[txt.index("{"):txt.rindex("}") + 1])
want = {}
for p in sorted(glob.glob(ROOT + "scripts/figs/[a-z]*.py")):
    spec = importlib.util.spec_from_file_location("f", p); m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
    want.update(m.FIGS)
todo = {k: v for k, v in want.items() if k not in man}
ids = list(todo)
def fname(v): return v[0] if isinstance(v, tuple) else v
for i in range(0, len(ids), 20):
    chunk = ids[i:i + 20]
    r = api(["File:" + (todo[k][0] if isinstance(todo[k], tuple) else todo[k]) for k in chunk]); pages = r.get("query", {}).get("pages", {})
    norm = {n["from"]: n["to"] for n in r.get("query", {}).get("normalized", [])}
    by_title = {p["title"]: p for p in pages.values()}
    # Commons serves only standard thumbnail sizes quickly (unscaled originals get HTTP 429), so request 960 or 500 per file.
    thumbs = {}
    groups = {}
    for k in chunk:
        fn0 = fname(todo[k]); t0 = "File:" + fn0; t0 = norm.get(t0, t0); p0 = by_title.get(t0) or by_title.get("File:" + fn0.replace("_", " "))
        if p0 and "imageinfo" in p0:
            wd = p0["imageinfo"][0]["width"]; groups.setdefault(960 if wd >= 960 else 500 if wd >= 500 else 330 if wd >= 330 else 250, []).append(p0["title"])
    for wsel, titles in groups.items():
        r2 = api(titles, wsel)
        for p2 in r2.get("query", {}).get("pages", {}).values():
            if "imageinfo" in p2:
                for kk in chunk:
                    f2 = fname(todo[kk]).replace("_", " ")
                    if "File:" + f2 == p2["title"]: thumbs[kk] = p2["imageinfo"][0].get("thumburl")
        time.sleep(1.5)
    for k in chunk:
        spec = todo[k] if isinstance(todo[k], tuple) else (todo[k],)
        fn = spec[0]; width = spec[2] if len(spec) > 2 else 640
        alt = spec[1] if len(spec) > 1 and spec[1] else re.sub(r"\s+", " ", re.sub(r"^\d+\s+|\.(jpg|png|svg)$|\b(labeled|new|cleaned|-0\d|N)\b", "", fn)).strip(" -")
        t = "File:" + fn; t = norm.get(t, t); p = by_title.get(t)
        if not p and "File:" + fn.replace("_", " ") in by_title: p = by_title["File:" + fn.replace("_", " ")]
        if not p or "imageinfo" not in p: print("MISSING", k, fn); continue
        info = p["imageinfo"][0]; md = info["extmetadata"]
        lic = md.get("LicenseShortName", {}).get("value", "")
        artist = re.sub(r"<[^>]+>", "", md.get("Artist", {}).get("value", "")).strip()
        if not lic and "OpenStax" in artist: lic = "CC BY 3.0"  # OpenStax Anatomy & Physiology is CC BY; some file pages omit the license field
        if not OK.match(lic): print("LICENSE?", k, lic); continue
        ext = os.path.splitext(fn)[1].lower().lstrip(".") or "jpg"; ext = "png" if ext in ("png", "tif", "tiff", "svg") else "jpg"
        url = thumbs.get(k) or info["url"]
        time.sleep(1.0)
        if not get(url, f"{OUT}{k}.{ext}"): print("DOWNLOAD FAILED", k); continue
        import subprocess
        if ext == "jpg": subprocess.run(["sips", "--resampleWidth", "720", "-s", "format", "jpeg", "-s", "formatOptions", "70", f"{OUT}{k}.{ext}", "--out", f"{OUT}{k}.{ext}"], capture_output=True)
        else: subprocess.run(["sips", "--resampleWidth", "720", f"{OUT}{k}.{ext}", "--out", f"{OUT}{k}.{ext}"], capture_output=True)
        man[k] = {"src": f"/college-figs/{k}.{ext}", "alt": alt, "license": lic, "author": artist[:70], "page": info["descriptionurl"]}
        print("ok", k, lic, "|", artist[:40], flush=True)
        open(MAN, "w").write("// Generated by scripts/fetch_figs.py. Do not edit by hand.\nexport const FIGS = " + json.dumps(man, indent=1, ensure_ascii=False) + ";\n")
    time.sleep(2)
open(MAN, "w").write("// Generated by scripts/fetch_figs.py. Do not edit by hand.\nexport const FIGS = " + json.dumps(man, indent=1, ensure_ascii=False) + ";\n")
print(len(man), "figures in manifest")
