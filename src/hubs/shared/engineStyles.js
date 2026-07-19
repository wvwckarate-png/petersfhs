export function getEngineCSS(colors = {}) {
  const c = {
    bg: "#FAFAF7", card: "#FFFFFF", ink: "#2E332E", inkSoft: "#767F73",
    sage: "#7C9B72", sageDeep: "#5E7A55", sagePale: "#EAF1E6", sagePill: "#DCEAD5",
    amber: "#E3A857", amberPale: "#FBF0DD", rose: "#D98B7B", rosePale: "#FBEAE5",
    sky: "#7BA3B8", skyPale: "#E9F2F5", violet: "#9887B0", violetPale: "#EDE8F2",
    border: "#ECEAE3",
    ...colors,
  };

  return `
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Nunito:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@500;600&display=swap');
    :root{
      --bg:${c.bg}; --card:${c.card}; --ink:${c.ink}; --ink-soft:${c.inkSoft};
      --sage:${c.sage}; --sage-deep:${c.sageDeep}; --sage-pale:${c.sagePale}; --sage-pill:${c.sagePill};
      --amber:${c.amber}; --amber-pale:${c.amberPale}; --rose:${c.rose}; --rose-pale:${c.rosePale};
      --sky:${c.sky}; --sky-pale:${c.skyPale}; --violet:${c.violet}; --violet-pale:${c.violetPale};
      --border:${c.border};
      --shadow: 0 10px 30px rgba(70,90,60,0.08);
    }
    *{box-sizing:border-box;}
    body{margin:0;}
    button{font-family:inherit;}

    .app-sidebar-backdrop{ display:none !important; }
    .app-sidebar-backdrop.open{ display:flex !important; }
    .desktop-only-label{ display:none !important; }

    .dash-grid{ display:grid; grid-template-columns: repeat(2, 1fr); gap:14px; }
    @media (min-width: 700px){ .dash-grid{ grid-template-columns: repeat(3, 1fr); } }
    @media (min-width: 1100px){ .dash-grid{ grid-template-columns: repeat(4, 1fr); } }

    @media (min-width: 900px){
      .mobile-only-switcher{ display:none !important; }
      .app-body{ display:grid; grid-template-columns: 260px 1fr; gap:26px; max-width:1200px !important; }
      .app-container{ max-width:1200px !important; }
      .app-sidebar-backdrop{
        display:block !important; position:static !important; background:transparent !important;
        inset:auto !important; z-index:auto !important; flex-shrink:0;
      }
      .app-sidebar{
        width:260px !important; max-width:none !important;
        height:auto !important; box-shadow:none !important; border-radius:18px !important;
        background:var(--card) !important; border:1px solid var(--border); padding:16px 14px !important;
        position:sticky !important; top:18px !important;
      }
      .mobile-only-flex{ display:none !important; }
      .desktop-only-label{ display:block !important; margin-bottom:10px; }
      main{ flex:1; min-width:0; }

      .app-sidebar button:hover{ background:var(--sage-pale); border-color:var(--sage-pill) !important; cursor:pointer; }
      .qbank-hover:hover{ box-shadow:0 4px 16px rgba(70,90,60,0.10) !important; transform:translateY(-1px); transition:all 0.15s ease; }
      .mode-pill-hover:hover{ background:#E6E4DC; }
      .mode-pill-hover.active-pill:hover{ filter:brightness(0.94); }
      .choice-hover:hover{ border-color:var(--sage-pill) !important; background:var(--sage-pale) !important; }
      .frq-card-hover:hover{ box-shadow:0 4px 16px rgba(70,90,60,0.10) !important; }
      .btn-hover:hover{ filter:brightness(0.95); cursor:pointer; }
      details.solution summary:hover{ background:var(--sky-pale) !important; }
      .answer-key summary:hover{ opacity:0.8; }
    }

    @media (min-width: 1300px){
      .app-body{ max-width:1320px !important; grid-template-columns: 280px 1fr; }
      .app-container{ max-width:1320px !important; }
      .app-sidebar{ width:280px !important; }
    }

    body{background:var(--bg); color:var(--ink); font-family:'Nunito', sans-serif; font-size:16.5px; line-height:1.7;}
    .wrap{max-width:740px; margin:0 auto; padding:0 20px 90px;}
    h1,h2,h3,.display{font-family:'Manrope', sans-serif; font-weight:800;}
    .topbar{background:var(--card); border-bottom:1px solid var(--border); padding:22px 24px;}
    .topbar-inner{max-width:740px; margin:0 auto; display:flex; align-items:center; gap:12px;}
    .logo-mark{width:38px; height:38px; border-radius:12px; background:var(--sage-pale); display:flex; align-items:center; justify-content:center;}
    .logo-text{font-family:'Manrope',sans-serif; font-weight:800; font-size:21px; color:var(--ink);}
    .logo-tag{font-family:'IBM Plex Mono',monospace; font-size:10.5px; letter-spacing:0.14em; color:var(--ink-soft); text-transform:uppercase; margin-left:4px;}
    .hero{padding:34px 24px 26px; max-width:740px; margin:0 auto;}
    .eyebrow{font-family:'IBM Plex Mono',monospace; font-size:11.5px; letter-spacing:0.16em; text-transform:uppercase; color:var(--ink-soft); margin-bottom:10px;}
    .hero h1{font-size:34px; margin:0 0 8px; color:var(--ink); line-height:1.15;}
    .hero .sub{font-size:16px; color:var(--ink-soft); max-width:520px; margin:0 0 18px; font-family:'Nunito',sans-serif; font-weight:400;}
    .hero-pills{display:flex; gap:8px; flex-wrap:wrap;}
    .pill{font-family:'Nunito',sans-serif; font-weight:700; font-size:12.5px; background:var(--sage-pill); color:var(--sage-deep); padding:7px 15px; border-radius:100px;}
    .toc{background:var(--card); border-radius:22px; box-shadow:var(--shadow); padding:20px 24px; margin:0 auto 34px; max-width:740px;}
    .toc-label{font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:0.14em; color:var(--ink-soft); text-transform:uppercase; margin-bottom:12px;}
    .toc ol{margin:0; padding:0; list-style:none; display:grid; grid-template-columns:1fr 1fr; gap:8px 20px;}
    .toc a{color:var(--ink); text-decoration:none; font-weight:600; font-size:14.5px; display:flex; align-items:center; gap:8px; font-family:'Nunito',sans-serif;}
    .toc a::before{content:"›"; color:var(--sage); font-weight:700; font-size:16px;}
    .toc a:hover{color:var(--sage-deep);}
    h2{font-size:24px; color:var(--ink); margin:44px 0 6px; display:flex; align-items:center; gap:10px;}
    h2 .num{background:var(--sage); color:white; width:34px; height:34px; border-radius:11px; display:flex; align-items:center; justify-content:center; font-size:13px; flex-shrink:0; font-family:'IBM Plex Mono',monospace; font-weight:600;}
    h3{font-size:18px; color:var(--sage-deep); margin:24px 0 8px; font-weight:700;}
    p{margin:0 0 15px;}
    strong{color:var(--sage-deep) !important; font-weight:700 !important;}
    sub{font-size:0.72em; vertical-align:sub; line-height:0;}
    sup{font-size:0.72em; vertical-align:super; line-height:0;}
    ul{margin:0 0 16px; padding-left:22px;}
    ol.steps{margin:0 0 16px; padding-left:24px;}
    li{margin-bottom:6px;}
    li::marker{color:var(--sage);}
    .key-idea{background:var(--sage-pale); border-radius:18px; padding:18px 22px; margin:20px 0;}
    .tag-label{display:inline-flex; align-items:center; gap:6px; font-family:'Nunito',sans-serif; font-weight:700; font-size:11.5px; letter-spacing:0.06em; text-transform:uppercase; padding:5px 13px; border-radius:100px; margin-bottom:10px;}
    .tag-label.idea{background:var(--sage); color:white;}
    .tag-label.trap{background:var(--rose); color:white;}
    .tag-label.example{background:var(--sky); color:white;}
    .tag-label.recap{background:var(--amber); color:white;}
    .tag-label.skill{background:var(--violet); color:white;}
    .key-idea p{margin:0; font-size:16.5px;}
    .eq{background:var(--card); border:1.5px solid var(--sage-pill); border-radius:16px; padding:16px 22px; margin:18px 0; text-align:center;}
    .eq .main{font-family:'IBM Plex Mono',monospace; font-size:17px; font-weight:600; color:var(--sage-deep);}
    .eq .sub{font-family:'IBM Plex Mono',monospace; font-size:12.5px; color:var(--ink-soft); margin-top:6px;}
    .trap{background:var(--rose-pale); border-radius:18px; padding:18px 22px; margin:20px 0;}
    .trap p{margin:0; font-size:16px;}
    .heylook{background:linear-gradient(135deg,#8A3324,#B14D3A); border-radius:18px; padding:20px 24px; margin:26px 0; box-shadow:0 8px 20px rgba(138,51,36,0.25);}
    .heylook .heylook-label{font-family:'Manrope',sans-serif; font-weight:800; font-size:14px; letter-spacing:0.06em; color:#FBE8C6; margin-bottom:8px; display:flex; align-items:center; gap:8px; text-transform:uppercase;}
    .heylook .heylook-label svg{flex-shrink:0;}
    .heylook p{margin:0; font-size:16.5px; line-height:1.6; color:white; font-weight:500;}
    .heylook strong{color:#FBE8C6;}
    .skillbox{background:var(--violet-pale); border-radius:18px; padding:20px 24px; margin:24px 0;}
    .skillbox p{margin:0 0 10px;}
    .worked{background:var(--sky-pale); border-radius:18px; padding:20px 24px; margin:24px 0;}
    .worked p{margin:0 0 12px;}
    details.solution summary{cursor:pointer; font-family:'Nunito',sans-serif; font-size:13px; font-weight:700; color:var(--sky); letter-spacing:0.02em; padding:9px 16px; list-style:none; background:white; border-radius:100px; display:inline-block; margin-top:4px;}
    details.solution summary::-webkit-details-marker{display:none;}
    details.solution summary::before{content:"▸ REVEAL SOLUTION";}
    details.solution[open] summary::before{content:"▾ HIDE SOLUTION";}
    details.solution .sol-content{background:white; border-radius:14px; padding:16px 20px; margin-top:10px; font-size:15.5px;}
    .recap{background:var(--amber-pale); border-radius:18px; padding:22px 24px; margin:36px 0;}
    .recap ul{margin:0; padding-left:20px;}
    .recap li::marker{color:var(--amber);}
    .recap li{font-size:15.5px;}
    .practice-item{background:var(--card); border-radius:16px; padding:14px 18px; margin-bottom:10px; display:flex; gap:14px; align-items:flex-start; box-shadow:0 2px 8px rgba(70,90,60,0.05);}
    .qnum-badge{width:26px; height:26px; border-radius:9px; background:var(--sage-pill); color:var(--sage-deep); font-family:'IBM Plex Mono',monospace; font-weight:700; font-size:12.5px; flex-shrink:0; display:flex; align-items:center; justify-content:center; margin-top:2px;}
    .answer-key details{background:var(--sage-pale); border-radius:16px; padding:14px 18px; margin-bottom:8px;}
    .answer-key summary{cursor:pointer; font-family:'Nunito',sans-serif; font-weight:700; font-size:14.5px; color:var(--sage-deep); list-style:none;}
    .answer-key summary::-webkit-details-marker{display:none;}
    .answer-key summary::before{content:"Q"; background:var(--sage); color:white; border-radius:6px; padding:2px 8px; margin-right:8px; font-size:12px;}
    .answer-key .a-content{margin-top:10px; font-size:15.5px; padding-top:10px; border-top:1px solid rgba(124,155,114,0.25);}
    .highlight{background:linear-gradient(transparent 62%, #FBE8C6 62%); font-weight:700; color:var(--ink);}
    .formula-table{width:100%; border-collapse:separate; border-spacing:0; margin:20px 0; font-size:14px; border-radius:16px; overflow:hidden; box-shadow:var(--shadow);}
    .formula-table th{background:var(--sage); color:white; text-align:left; padding:10px 14px; font-family:'Nunito',sans-serif; font-weight:700; font-size:12px; letter-spacing:0.03em;}
    .formula-table td{padding:10px 14px; background:white; border-bottom:1px solid var(--border);}
    .formula-table tr:last-child td{border-bottom:none;}
    .formula-table td:last-child{font-family:'IBM Plex Mono',monospace; font-weight:600; color:var(--sage-deep);}
    .divider{text-align:center; margin:40px 0; color:var(--sage-pill); font-size:20px; letter-spacing:14px;}
    .footer-nav{text-align:center; margin-top:50px; padding:26px; background:var(--sage-pale); border-radius:20px; font-size:15px; color:var(--ink-soft);}
    .footer-nav strong{color:var(--sage-deep);}
    .quote{font-family:'Nunito',sans-serif; font-style:italic; text-align:center; color:var(--ink-soft); font-size:15.5px; margin:26px auto 0; max-width:520px;}
  `;
}