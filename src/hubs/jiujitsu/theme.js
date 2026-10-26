export const C = {
  bg: "#0E1114", panel: "#171B21", panel2: "#1E242C", line: "#2A313A",
  text: "#ECE6D8", muted: "#9AA3AE", red: "#D8472E", redDeep: "#A9341F",
  white: "#F4F1EA", blue: "#2E6BC6", blueLight: "#7FB0F0", purple: "#7A3FB8", purpleLight: "#B58CE8",
  brown: "#7B4A2A", brownLight: "#C28E64", black: "#050607",
};
// The belt colors, in order: used for tiers, resistance levels, and progress.
export const BELT_BG = [C.white, C.blue, C.purple, C.brown, C.black];
export const BELT_FG = ["#15181C", "#fff", "#fff", "#fff", "#fff"];
export const BELT_TEXT = [C.white, C.blueLight, C.purpleLight, C.brownLight, C.white];

export const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Nunito:wght@400;600;700;800&display=swap');
.jj{ background:${C.bg}; color:${C.text}; min-height:100vh; font-family:'Nunito',sans-serif; font-size:16px; line-height:1.55; }
.jj *{ box-sizing:border-box; }
.jj h1,.jj h2,.jj h3,.jj .display{ font-weight:800; font-family:'Manrope',sans-serif; letter-spacing:0; margin:0; }
.jj a{ color:inherit; text-decoration:none; }
.jj button{ font-family:inherit; cursor:pointer; color:inherit; }
.jj-belt{ height:5px; background:linear-gradient(90deg,${C.white} 0 16.66%,${C.blue} 0 33.33%,${C.purple} 0 50%,${C.brown} 0 66.66%,#000 0 83.33%,${C.red} 0 100%); }
.jj-top{ position:sticky; top:0; z-index:20; background:rgba(14,17,20,.94); backdrop-filter:blur(8px); border-bottom:1px solid ${C.line}; }
.jj-top-in{ max-width:1100px; margin:0 auto; padding:10px 18px; display:flex; align-items:center; gap:14px; flex-wrap:wrap; }
.jj-brand{ display:flex; align-items:center; gap:10px; font-family:'Manrope',sans-serif; font-weight:800; font-size:20px; letter-spacing:.08em; text-transform:uppercase; }
.jj-nav{ display:flex; gap:4px; overflow-x:auto; flex:1; scrollbar-width:none; }
.jj-nav::-webkit-scrollbar{ display:none; }
.jj-nav a{ padding:7px 9px; border-radius:8px; font-weight:700; font-size:13.5px; color:${C.muted}; white-space:nowrap; }
.jj-nav a:hover{ background:${C.panel2}; color:${C.text}; }
.jj-nav a.on{ background:${C.red}; color:#fff; }
.jj-who{ background:${C.panel2}; border:1px solid ${C.line}; color:${C.text}; border-radius:8px; padding:6px 10px; font-weight:700; }
.jj-wrap{ max-width:1100px; margin:0 auto; padding:22px 18px 60px; }
.jj-card{ background:${C.panel}; border:1px solid ${C.line}; border-radius:16px; padding:18px 20px; }
.jj-h2{ font-size:26px; margin-bottom:12px; }
.jj h1::after,.jj-h2::after{ content:""; display:block; width:84px; height:6px; margin-top:7px; background:linear-gradient(90deg,#F4F1EA 0 18%,#2E6BC6 0 38%,#7A3FB8 0 58%,#7B4A2A 0 78%,#D8472E 0 100%); clip-path:polygon(0 30%,10% 0,55% 18%,100% 38%,100% 62%,60% 82%,12% 100%,0 70%); opacity:.9; }
.jj-center h1::after{ margin-left:auto; margin-right:auto; }
.jj-hero{ position:relative; overflow:hidden; background:linear-gradient(135deg,${C.panel} 0%,#1b1613 100%); padding:28px 26px; }
.jj-hero-enso{ position:absolute; right:-40px; top:50%; width:340px; height:340px; transform:translateY(-50%); opacity:.9; pointer-events:none; }
@media (max-width:720px){ .jj-hero-enso{ width:240px; height:240px; right:-70px; opacity:.45; } }
.jj-eyebrow{ font-family:'Manrope',sans-serif; text-transform:uppercase; letter-spacing:.14em; color:${C.red}; font-weight:700; font-size:13px; }
.jj-muted{ color:${C.muted}; }
.jj-grid{ display:grid; gap:14px; }
.jj-chip{ display:inline-flex; align-items:center; gap:7px; padding:7px 12px; border-radius:999px; border:1px solid ${C.line}; background:${C.panel2}; font-weight:700; font-size:14px; }
.jj-chip:hover{ border-color:${C.red}; }
.jj-btn{ background:${C.red}; color:#fff; border:0; border-radius:10px; padding:10px 16px; font-weight:800; font-size:15px; }
.jj-btn:hover{ background:${C.redDeep}; }
.jj-btn.ghost{ background:transparent; border:1px solid ${C.line}; color:${C.text}; }
.jj-btn.ghost:hover{ border-color:${C.red}; background:${C.panel2}; }
.jj-list{ margin:6px 0 0; padding-left:20px; }
.jj-list li{ margin:5px 0; }
.jj-tag{ display:inline-block; font-size:11.5px; font-weight:800; letter-spacing:.08em; text-transform:uppercase; padding:2px 8px; border-radius:6px; background:${C.panel2}; color:${C.muted}; }
.jj-tag.top{ background:rgba(216,71,46,.16); color:#ff8f7a; }
.jj-tag.bottom{ background:rgba(76,134,216,.18); color:#8db8f0; }
.jj-tag.neutral{ background:rgba(244,241,234,.14); color:${C.white}; }
.jj-tier{ display:flex; align-items:stretch; width:100%; padding:0; background:transparent; border:0; text-align:left; }
.jj-tier svg{ display:block; }
.jj-tier-label{ flex:1; display:flex; flex-direction:column; justify-content:center; padding:0 0 0 16px; }
.jj-poshead{ display:grid; grid-template-columns:1fr 360px; gap:18px; align-items:center; }
.jj-split{ display:grid; grid-template-columns:1fr 1fr; gap:14px; }
@media (max-width:720px){ .jj-poshead{ grid-template-columns:1fr; } .jj-split{ grid-template-columns:1fr; } .jj-top-in{ gap:8px 12px; } .jj-brand{ flex:1; } .jj-nav{ order:3; flex-basis:100%; } }
.jj-sec summary{ cursor:pointer; list-style:none; font-family:'Manrope',sans-serif; font-size:19px; font-weight:700; padding:2px 0; }
.jj-sec summary::-webkit-details-marker{ display:none; }
.jj-sec summary::after{ content:"+"; float:right; color:${C.red}; }
.jj-sec[open] summary::after{ content:"–"; }
.jj-opt{ display:block; width:100%; text-align:left; padding:12px 14px; margin:8px 0; border-radius:10px; border:1px solid ${C.line}; background:${C.panel2}; font-size:15.5px; }
.jj-opt:hover{ border-color:${C.red}; }
.jj-opt.right{ border-color:${C.blueLight}; background:rgba(46,107,198,.2); }
.jj-opt.wrong{ border-color:${C.red}; background:rgba(216,71,46,.14); }
.jj input[type=range]{ accent-color:${C.red}; }
.jj select, .jj input[type=number]{ background:${C.panel2}; border:1px solid ${C.line}; color:${C.text}; border-radius:8px; padding:8px 10px; font-family:inherit; font-size:15px; }
`;
