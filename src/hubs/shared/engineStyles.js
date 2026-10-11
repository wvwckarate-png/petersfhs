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

    .dash-grid{ display:grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap:14px; }
    @media (max-width: 520px){ .dash-grid{ grid-template-columns: minmax(0, 1fr); } .dash-stats{ grid-template-columns: minmax(0, 1fr) !important; } .dash-stats > div{ padding:18px 22px !important; } }
    .dash-stats > div{ aspect-ratio:auto !important; min-height:110px; }
    @media (min-width: 700px){ .dash-grid{ grid-template-columns: repeat(3, minmax(0, 1fr)); } }
    @media (min-width: 1100px){ .dash-grid{ grid-template-columns: repeat(4, minmax(0, 1fr)); } }

    @media (min-width: 900px){
      .mobile-only-switcher{ display:none !important; }
      .app-body{ display:grid; grid-template-columns: 260px 1fr; gap:26px; max-width:1200px !important; }
      .app-body[data-no-sidebar="true"]{ display:block !important; }
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
    [id]{scroll-margin-top:16px;}
    h1,h2,h3,.display{font-family:'Manrope', sans-serif; font-weight:800;}
    .topbar{background:var(--card); border-bottom:1px solid var(--border); padding:22px 24px;}
    .topbar-inner{max-width:740px; margin:0 auto; display:flex; align-items:center; gap:12px;}
    .logo-mark{width:38px; height:38px; border-radius:12px; background:var(--sage-pale); display:flex; align-items:center; justify-content:center;}
    .logo-text{font-family:'Manrope',sans-serif; font-weight:800; font-size:21px; color:var(--ink);}
    .logo-tag{font-family:'IBM Plex Mono',monospace; font-size:10.5px; letter-spacing:0.14em; color:var(--ink-soft); text-transform:uppercase; margin-left:4px;}
    .hero{padding:34px 20px 26px; max-width:740px; margin:0 auto;}
    .eyebrow{font-family:'IBM Plex Mono',monospace; font-size:11.5px; letter-spacing:0.16em; text-transform:uppercase; color:var(--ink-soft); margin-bottom:10px;}
    .hero h1{font-size:34px; margin:0 0 8px; color:var(--ink); line-height:1.15;}
    .hero .sub{font-size:16px; color:var(--ink-soft); max-width:520px; margin:0 0 18px; font-family:'Nunito',sans-serif; font-weight:400;}
    .hero-pills{display:flex; gap:8px; flex-wrap:wrap;}
    .pill{font-family:'Nunito',sans-serif; font-weight:700; font-size:12.5px; background:var(--sage-pill); color:var(--sage-deep); padding:7px 15px; border-radius:100px;}
    .toc{background:var(--card); border-radius:22px; box-shadow:var(--shadow); padding:20px 24px; margin:0 auto 34px; max-width:700px;}
    .toc-label{font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:0.14em; color:var(--ink-soft); text-transform:uppercase; margin-bottom:12px;}
    .toc ol{margin:0; padding:0; list-style:none; display:grid; grid-template-columns:1fr 1fr; gap:8px 20px;}
    .toc a{color:var(--ink); text-decoration:none; font-weight:600; font-size:14.5px; display:flex; align-items:flex-start; line-height:1.4; gap:8px; font-family:'Nunito',sans-serif;}
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
    .key-idea{background:var(--sage-pale); border-left:6px solid var(--sage); border-radius:8px 18px 18px 8px; padding:18px 22px 18px 20px; margin:20px 0;}
    .tag-label{display:inline-flex; align-items:center; gap:6px; font-family:'Nunito',sans-serif; font-weight:700; font-size:11.5px; letter-spacing:0.06em; text-transform:uppercase; padding:5px 13px; border-radius:100px; margin-bottom:10px;}
    .tag-label.idea{background:var(--sage); color:white;}
    .tag-label.idea::before{content:""; width:15px; height:15px; background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z'/%3E%3C/svg%3E") center/contain no-repeat; flex-shrink:0;}
    .tag-label.trap{background:#2B2B2B; color:#FFC72C; font-size:12.5px; font-weight:800; letter-spacing:0.09em; padding:6px 15px 6px 11px; box-shadow:none;}
    .tag-label.trap::before{content:""; width:17px; height:17px; background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FFC72C' stroke-width='2.3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3.4 2.6 19.8h18.8z'/%3E%3Cpath d='M12 9.6v4.6'/%3E%3Cpath d='M12 17.3v.2'/%3E%3C/svg%3E") center/contain no-repeat; flex-shrink:0;}
    .tag-label.example{background:var(--sky); color:white;}
    .tag-label.recap{background:var(--amber); color:white;}
    .tag-label.skill{background:var(--violet); color:white;}
    .key-idea p{margin:0; font-size:16.5px;}
    .eq{background:var(--card); border:1.5px solid var(--sage-pill); border-radius:16px; padding:16px 22px; margin:18px 0; text-align:center;}
    .eq .main{font-family:'IBM Plex Mono',monospace; font-size:17px; font-weight:600; color:var(--sage-deep);}
    .eq .sub{font-family:'IBM Plex Mono',monospace; font-size:12.5px; color:var(--ink-soft); margin-top:6px;}
        /* "Watch out for this": caution-sign look (black + yellow tape, warning triangle) so it can't be mistaken for the hub-coloured Key Idea box or the dark red "hey look" box. */
    .trap:not(.tag-label){position:relative; overflow:hidden; background:#FFF7D6; border:3px solid #2B2B2B; border-radius:16px; padding:32px 24px 18px 22px; margin:26px 0; box-shadow:0 8px 20px rgba(43,43,43,0.18);}
    .trap:not(.tag-label)::before{content:""; position:absolute; top:0; left:0; right:0; height:12px; background:repeating-linear-gradient(-45deg,#2B2B2B 0 11px,#FFC72C 11px 22px);}
    .trap:not(.tag-label)::after{content:""; position:absolute; right:10px; bottom:6px; width:92px; height:92px; background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232B2B2B' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3.4 2.6 19.8h18.8z'/%3E%3Cpath d='M12 9.6v4.6'/%3E%3Cpath d='M12 17.3v.2'/%3E%3C/svg%3E") center/contain no-repeat; opacity:0.16; pointer-events:none;}
    .trap:not(.tag-label) p{margin:0; font-size:16.5px; font-weight:600; color:#2B2B2B; position:relative; z-index:1;}
    .trap:not(.tag-label) strong{color:#8A4B00 !important;}
    .trap:not(.tag-label) .tag-label{margin-bottom:12px; position:relative; z-index:1;}
    /* "Hey, look!" boxes: a lit-up indigo card with a glowing gold lightbulb badge, light rays and a gold frame — the "pay attention, this is the big insight" box. */
    .heylook:not(.tag-label){position:relative; overflow:hidden; background:linear-gradient(135deg,#232766,#4A3C9C); background-image:repeating-conic-gradient(from 195deg at 100% 0%, rgba(255,255,255,0.09) 0 7deg, transparent 7deg 15deg), linear-gradient(135deg,#232766,#4A3C9C); border:3px solid #FFD25A; border-radius:20px; padding:26px 26px 24px 108px; margin:30px 0; min-height:104px; box-shadow:0 12px 28px rgba(35,39,102,0.35), 0 0 0 5px rgba(255,210,90,0.22);}
    .heylook:not(.tag-label)::before{content:""; position:absolute; left:22px; top:24px; width:66px; height:66px; background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3CradialGradient id='g' cx='50%25' cy='38%25' r='65%25'%3E%3Cstop offset='0' stop-color='%23FFF3B0'/%3E%3Cstop offset='1' stop-color='%23FFB703'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='32' cy='32' r='30' fill='url(%23g)' stroke='%23FFF8D6' stroke-width='2.5'/%3E%3Cg transform='translate(14 14) scale(1.5)' fill='none' stroke='%23262A66' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.7l.1.9h5l.1-.9c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3z'/%3E%3C/g%3E%3C/svg%3E") center/contain no-repeat; filter:drop-shadow(0 0 12px rgba(255,210,90,0.85));}
    .heylook .heylook-label{font-family:'Manrope',sans-serif; font-weight:800; font-size:16px; line-height:1.3; letter-spacing:0.05em; color:#FFD25A; margin-bottom:10px; display:block; text-transform:uppercase;}
    .heylook .heylook-label::before{content:"Hey, look!"; display:inline-block; font-family:'Nunito',sans-serif; font-size:11px; font-weight:800; letter-spacing:0.1em; background:#FFD25A; color:#232766; border-radius:100px; padding:3px 11px; margin:0 0 8px; text-transform:uppercase;}
    .heylook .heylook-label::before{display:table;}
    .heylook .heylook-label svg{display:none;}
    .heylook p{margin:0; font-size:17px; line-height:1.6; color:#fff; font-weight:500; position:relative;}
    .heylook strong{color:#FFD25A !important;}
    .tag-label.heylook{background:#FFD25A; color:#232766; padding:5px 13px; margin:0 0 10px; box-shadow:none; font-weight:800;}
    @media (max-width:520px){ .heylook:not(.tag-label){padding:96px 20px 20px; min-height:0;} .heylook:not(.tag-label)::before{left:20px; top:20px;} }
    .skillbox{background:var(--violet-pale); border-radius:18px; padding:20px 24px; margin:24px 0;}
    .skillbox p{margin:0 0 10px;}
    .worked{background:var(--sky-pale); border-radius:18px; padding:20px 24px; margin:24px 0;}
    .worked p{margin:0 0 12px;}
    details.solution summary{cursor:pointer; font-family:'Nunito',sans-serif; font-size:0; font-weight:700; color:var(--sky); letter-spacing:0.02em; padding:9px 16px; list-style:none; background:white; border-radius:100px; display:inline-block; margin-top:4px;}
    details.solution summary::-webkit-details-marker{display:none;}
    details.solution summary::before{content:"▸ REVEAL SOLUTION"; font-size:13px;}
    details.solution[open] summary::before{content:"▾ HIDE SOLUTION"; font-size:13px;}
    details.solution .sol-content{background:white; border-radius:14px; padding:16px 20px; margin-top:10px; font-size:15.5px;}
    .recap:not(.tag-label){background:var(--amber-pale); border-radius:18px; padding:22px 24px; margin:36px 0;}
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
    @media (max-width: 899px){
      .hero{padding-left:0; padding-right:0;}
      .wrap{padding-left:0; padding-right:0;}
    }
    @media (max-width: 600px){ .toc ol{grid-template-columns:1fr;} }
    .quote{font-family:'Nunito',sans-serif; font-style:italic; text-align:center; color:var(--ink-soft); font-size:15.5px; margin:26px auto 0; max-width:520px;}
  `;
}