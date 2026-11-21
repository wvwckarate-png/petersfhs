import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HubTopBar from "../../components/HubTopBar";
import { useFavorites } from "./favorites";
import RECIPES from "./data/recipes.json";

const RUST = "#A03A22", RUST_DEEP = "#7A2A18", GOLD = "#C8962A", CREAM = "#FBF3E0";
const BY_SLUG = Object.fromEntries(RECIPES.map((r) => [r.slug, r]));
// A fixed order for the category chips (anything new goes at the end).
const CAT_ORDER = ["Breads and Biscuits", "Cornbread", "Breakfast", "Chicken", "Beef, Pork and Turkey", "Soups and Stews", "Pizza", "Sides", "Sauces", "Desserts"];
const rank = (c) => { const i = CAT_ORDER.indexOf(c); return i < 0 ? 99 : i; };
const CATS = [...new Set(RECIPES.map((r) => r.category))].sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));
const TINT = { "Breads and Biscuits": "#C98F4A", Cornbread: "#D3A93A", Breakfast: "#D9824A", Chicken: "#B8642F", "Beef, Pork and Turkey": "#8E3B2A", "Soups and Stews": "#A15A3C", Pizza: "#C0452B", Sides: "#6E8B4A", Sauces: "#9A2F22", Desserts: "#B0577A" };

const CSS = `
.rc-wrap{max-width:1120px;margin:0 auto;font-family:'Nunito',sans-serif;color:#2E332E}
.rc-intro{font-size:15.5px;color:#767F73;margin:0 0 18px}
.rc-search{width:100%;box-sizing:border-box;font:inherit;font-size:16px;padding:13px 16px;border:1px solid #DAD7CC;border-radius:14px;background:#fff;color:#2E332E}
.rc-search:focus{outline:2px solid ${GOLD};border-color:${GOLD}}
.rc-chips{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0 6px}
.rc-chip{font:inherit;font-weight:700;font-size:13.5px;padding:7px 14px;border-radius:100px;border:1px solid #DAD7CC;background:#fff;color:#5C645A;cursor:pointer}
.rc-chip:hover{border-color:${RUST}}
.rc-chip.on{background:${RUST};border-color:${RUST};color:#fff}
.rc-chip.sub{font-size:12.5px;padding:5px 12px;background:#F6EEE0}
.rc-chip.sub.on{background:${RUST_DEEP};border-color:${RUST_DEEP}}
.rc-head{display:flex;align-items:baseline;justify-content:space-between;margin:22px 0 12px}
.rc-head h2{font-family:'Manrope',sans-serif;font-weight:800;font-size:17px;margin:0;color:${RUST_DEEP}}
.rc-count{font-size:13px;color:#767F73}
.rc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:14px}
.rc-tile{position:relative;display:flex;flex-direction:column;background:#fff;border:1px solid #ECEAE3;border-radius:16px;overflow:hidden;text-decoration:none;color:inherit;transition:transform .15s ease,box-shadow .15s ease}
.rc-tile:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(60,40,30,.14)}
.rc-img{aspect-ratio:4/3;width:100%;object-fit:cover;display:block;background:${CREAM}}
.rc-ph{aspect-ratio:4/3;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;color:#fff;font-family:'Manrope',sans-serif;font-weight:800;text-align:center;padding:10px}
.rc-ph b{font-size:30px;letter-spacing:.02em}
.rc-ph span{font-size:11px;font-weight:700;opacity:.85;letter-spacing:.06em;text-transform:uppercase}
.rc-body{padding:11px 14px 14px}
.rc-title{font-family:'Manrope',sans-serif;font-weight:800;font-size:15px;line-height:1.25;margin:0 28px 3px 0}
.rc-meta{font-size:12.5px;color:#767F73;line-height:1.35}
.rc-star{position:absolute;top:8px;right:8px;width:34px;height:34px;border-radius:50%;border:none;background:rgba(255,255,255,.94);box-shadow:0 1px 6px rgba(0,0,0,.22);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;z-index:2}
.rc-star svg{width:19px;height:19px}
.rc-star:hover{transform:scale(1.08)}
.rc-empty{padding:40px 10px;text-align:center;color:#767F73}
.rc-fam{display:inline-block;margin-top:5px;font-size:11px;font-weight:800;color:${RUST};background:#F8EBDD;border-radius:100px;padding:2px 9px}
/* detail */
.rc-back{display:inline-block;margin-bottom:14px;font-weight:800;font-size:14px;color:${RUST};text-decoration:none}
.rc-detail{background:#fff;border:1px solid #ECEAE3;border-radius:20px;overflow:hidden}
.rc-hero{background:${RUST};color:#FBF3E0;padding:22px 26px 18px;position:relative;border-bottom:4px solid ${GOLD}}
.rc-hero h2{font-family:'Manrope',sans-serif;font-weight:800;font-size:26px;margin:0 52px 4px 0;line-height:1.15}
.rc-hero .rc-cat{font-size:13px;opacity:.85;font-style:italic}
.rc-hero .rc-star{top:18px;right:18px;width:42px;height:42px}
.rc-hero .rc-star svg{width:24px;height:24px}
.rc-cols{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.5fr);gap:28px;padding:22px 26px}
.rc-photo{width:100%;border-radius:14px;display:block;border:2px solid ${GOLD}}
.rc-cap{font-size:11.5px;color:#767F73;margin:5px 0 0}
.rc-facts{display:flex;flex-wrap:wrap;gap:8px 18px;margin:0 0 14px;font-size:14px}
.rc-facts b{color:${RUST_DEEP}}
.rc-sum{font-style:italic;color:#5C645A;margin:0 0 14px;font-size:15px}
.rc-h{font-family:'Manrope',sans-serif;font-weight:800;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:${RUST};margin:18px 0 8px}
.rc-g{font-weight:800;font-size:14px;color:${RUST_DEEP};margin:12px 0 4px}
.rc-ing{list-style:none;margin:0;padding:0}
.rc-ing li{padding:6px 0;border-bottom:1px solid #F1EEE6;font-size:15px}
.rc-steps{margin:0;padding:0 0 0 22px}
.rc-steps li{padding:5px 0;font-size:15.5px;line-height:1.5}
.rc-steps li::marker{font-weight:800;color:${RUST}}
.rc-notes{background:${CREAM};border-radius:12px;padding:10px 16px;font-size:14.5px}
.rc-notes li{margin:4px 0}
.rc-actions{display:flex;flex-wrap:wrap;gap:10px;padding:0 26px 24px}
.rc-btn{font:inherit;font-weight:800;font-size:14px;text-decoration:none;cursor:pointer;border:none;background:${RUST};color:#fff;border-radius:100px;padding:10px 20px}
.rc-btn.alt{background:#F8EBDD;color:${RUST}}
.rc-btn:hover{filter:brightness(1.06)}
.rc-orig{padding:0 26px 26px}
.rc-orig img{max-width:100%;border-radius:12px;border:1px solid #DAD7CC}
.rc-credit{padding:0 26px 22px;font-size:13px;color:#767F73}
.rc-credit a{color:${RUST}}
@media (max-width:760px){.rc-cols{grid-template-columns:1fr}.rc-hero h2{font-size:22px}}
@media print{.rc-search,.rc-chips,.rc-actions,.rc-back,.rc-star{display:none!important}}
`;

function Star({ on, onClick, label }) {
  return (
    <button type="button" className="rc-star" aria-pressed={on} aria-label={on ? `Remove ${label} from favorites` : `Add ${label} to favorites`} title={on ? "Remove from favorites" : "Add to favorites"}
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); onClick(); }}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.8l2.8 5.8 6.4.9-4.6 4.5 1.1 6.4L12 17.4l-5.7 3 1.1-6.4L2.8 9.5l6.4-.9L12 2.8z" fill={on ? GOLD : "none"} stroke={on ? "#9A6F10" : "#8A8F86"} strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

const initials = (t) => t.replace(/[^A-Za-z ]/g, "").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
const isFamily = (r) => /family/i.test(r.credit || "");
const when = (r) => r.total || [r.prep && `Prep ${r.prep}`, r.cook && `Cook ${r.cook}`].filter(Boolean).join(" · ");

function Tile({ r, fav }) {
  return (
    <Link to={`/recipes/${r.slug}`} className="rc-tile">
      {r.photo
        ? <img className="rc-img" src={r.photo} alt={r.title} loading="lazy" />
        : <div className="rc-ph" style={{ background: TINT[r.category] || RUST }}><b>{initials(r.title)}</b><span>{r.subcategory || r.category}</span></div>}
      <div className="rc-body">
        <h3 className="rc-title">{r.title}</h3>
        <div className="rc-meta">{r.subcategory || r.category}{when(r) ? ` · ${when(r)}` : ""}</div>
        {isFamily(r) && <span className="rc-fam">Family recipe</span>}
        <Star on={fav.isFav(r.slug)} onClick={() => fav.toggle(r.slug)} label={r.title} />
      </div>
    </Link>
  );
}

function Items({ items }) {
  return items.map((it, i) => typeof it === "string"
    ? <li key={i}>{it}</li>
    : <React.Fragment key={i}><li className="rc-g" style={{ listStyle: "none", borderBottom: "none" }}>{it.group}</li>{it.items.map((x, j) => <li key={j}>{x}</li>)}</React.Fragment>);
}

function Steps({ items }) {
  // Numbering restarts under each heading, the same as on the printed card.
  const blocks = []; let cur = { title: null, steps: [] };
  items.forEach((it) => {
    if (typeof it === "string") cur.steps.push(it);
    else { if (cur.steps.length || cur.title) blocks.push(cur); cur = { title: it.group, steps: [...(it.steps || it.items || [])] }; }
  });
  blocks.push(cur);
  return blocks.map((b, i) => (
    <div key={i}>{b.title && <div className="rc-g">{b.title}</div>}<ol className="rc-steps">{b.steps.map((s, j) => <li key={j}>{s}</li>)}</ol></div>
  ));
}

function Detail({ slug }) {
  const r = BY_SLUG[slug];
  const fav = useFavorites();
  const [showOrig, setShowOrig] = useState(false);
  if (!r) return <div className="rc-empty">That recipe was not found. <Link to="/recipes" style={{ color: RUST }}>Back to all recipes</Link></div>;
  const facts = [["Serves", r.serves], ["Prep", r.prep], ["Cook", r.cook], ["Total", r.total], ["Heat", r.heat]].filter(([, v]) => v);
  const related = (r.variations || []).map((s) => BY_SLUG[s]).filter(Boolean);
  return (
    <div className="rc-wrap">
      <Link to="/recipes" className="rc-back">← All recipes</Link>
      <article className="rc-detail">
        <div className="rc-hero">
          <h2>{r.title}</h2>
          <div className="rc-cat">{r.category}{r.subcategory ? ` / ${r.subcategory}` : ""}</div>
          <Star on={fav.isFav(r.slug)} onClick={() => fav.toggle(r.slug)} label={r.title} />
        </div>
        <div className="rc-cols">
          <div>
            {r.photo && <><img className="rc-photo" src={r.photo} alt={r.title} /><p className="rc-cap">Photo from the original recipe page.</p></>}
            {r.summary && <p className="rc-sum">{r.summary}</p>}
            {facts.length > 0 && <div className="rc-facts">{facts.map(([k, v]) => <span key={k}><b>{k}:</b> {v}</span>)}</div>}
            {r.equipment && <div className="rc-facts"><span><b>You need:</b> {r.equipment}</span></div>}
            <div className="rc-h">Ingredients</div>
            <ul className="rc-ing"><Items items={r.ingredients || []} /></ul>
          </div>
          <div>
            <div className="rc-h" style={{ marginTop: 0 }}>Directions</div>
            {(r.directions || []).length ? <Steps items={r.directions} /> : <p className="rc-sum">The directions for this one are still missing. Add them when you find them.</p>}
            {(r.notes || []).length > 0 && <><div className="rc-h">Notes</div><ul className="rc-notes">{r.notes.map((n, i) => <li key={i}>{n}</li>)}</ul></>}
            {related.length > 0 && <><div className="rc-h">Related</div><div className="rc-chips" style={{ margin: 0 }}>{related.map((x) => <Link key={x.slug} to={`/recipes/${x.slug}`} className="rc-chip" style={{ textDecoration: "none" }}>{x.title}</Link>)}</div></>}
          </div>
        </div>
        <div className="rc-actions">
          <a className="rc-btn" href={r.card_pdf} target="_blank" rel="noreferrer">Print 4x6 card</a>
          <button className="rc-btn alt" onClick={() => fav.toggle(r.slug)}>{fav.isFav(r.slug) ? "★ In your favorites" : "☆ Add to favorites"}</button>
          {r.original && <button className="rc-btn alt" onClick={() => setShowOrig((v) => !v)}>{showOrig ? "Hide the original card" : "See the original card"}</button>}
        </div>
        {r.original && showOrig && <div className="rc-orig"><img src={r.original} alt={`Original handwritten card for ${r.title}`} /></div>}
        <div className="rc-credit">{r.credit}{r.credit_url && <> · <a href={r.credit_url} target="_blank" rel="noreferrer">View the original recipe</a></>}</div>
      </article>
    </div>
  );
}

function Browse() {
  const fav = useFavorites();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [sub, setSub] = useState("all");
  const subs = useMemo(() => cat === "all" || cat === "fav" ? [] : [...new Set(RECIPES.filter((r) => r.category === cat).map((r) => r.subcategory).filter(Boolean))].sort(), [cat]);
  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    return RECIPES.filter((r) => {
      if (cat === "fav" && !fav.isFav(r.slug)) return false;
      if (cat !== "all" && cat !== "fav" && r.category !== cat) return false;
      if (sub !== "all" && r.subcategory !== sub) return false;
      if (!t) return true;
      const hay = [r.title, r.category, r.subcategory, r.summary, r.credit, JSON.stringify(r.ingredients)].join(" ").toLowerCase();
      return t.split(/\s+/).every((w) => hay.includes(w));
    }).sort((a, b) => a.title.localeCompare(b.title));
  }, [q, cat, sub, fav.favs]); // eslint-disable-line
  const favList = fav.favs.map((s) => BY_SLUG[s]).filter(Boolean);
  const browsing = !q.trim() && cat === "all" && sub === "all";
  const pick = (c) => { setCat(c); setSub("all"); };
  return (
    <div className="rc-wrap">
      <p className="rc-intro">Family favorites and recipes we like, each with a printable 4x6 card. Tap the star on any recipe to keep it in your favorites.</p>
      <input className="rc-search" type="search" placeholder="Search by name or ingredient (try: pecan, buttermilk, chicken)" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search recipes" />
      <div className="rc-chips" role="group" aria-label="Recipe categories">
        <button className={cat === "all" ? "rc-chip on" : "rc-chip"} onClick={() => pick("all")}>All ({RECIPES.length})</button>
        <button className={cat === "fav" ? "rc-chip on" : "rc-chip"} onClick={() => pick("fav")}>★ My favorites ({favList.length})</button>
        {CATS.map((c) => <button key={c} className={cat === c ? "rc-chip on" : "rc-chip"} onClick={() => pick(c)}>{c} ({RECIPES.filter((r) => r.category === c).length})</button>)}
      </div>
      {subs.length > 1 && <div className="rc-chips" style={{ marginTop: 0 }}>
        <button className={sub === "all" ? "rc-chip sub on" : "rc-chip sub"} onClick={() => setSub("all")}>All {cat}</button>
        {subs.map((s) => <button key={s} className={sub === s ? "rc-chip sub on" : "rc-chip sub"} onClick={() => setSub(s)}>{s}</button>)}
      </div>}
      {browsing && favList.length > 0 && <>
        <div className="rc-head"><h2>★ Your favorites</h2><span className="rc-count">{favList.length}</span></div>
        <div className="rc-grid">{favList.map((r) => <Tile key={r.slug} r={r} fav={fav} />)}</div>
      </>}
      <div className="rc-head"><h2>{cat === "fav" ? "★ My favorites" : cat === "all" ? "All recipes" : cat}</h2><span className="rc-count">{list.length} {list.length === 1 ? "recipe" : "recipes"}</span></div>
      {list.length === 0
        ? <div className="rc-empty">{cat === "fav" && !q ? "No favorites yet. Tap the star on a recipe and it will show up here." : "No recipes match that. Try fewer words."}</div>
        : <div className="rc-grid">{list.map((r) => <Tile key={r.slug} r={r} fav={fav} />)}</div>}
    </div>
  );
}

export default function RecipesPage() {
  const { slug } = useParams();
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAF7", fontFamily: "'Nunito', sans-serif", padding: "40px 24px 90px", boxSizing: "border-box" }}>
      <style>{CSS}</style>
      <HubTopBar title="Recipes" titleColor={RUST_DEEP} tagColor="#B07A68" border="#EBDDD0" pillBg="#F8EBDD" pillColor={RUST} />
      {slug ? <Detail slug={slug} /> : <Browse />}
    </div>
  );
}
