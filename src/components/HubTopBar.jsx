import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";

// Fonts and widths the subject pages get from the study-engine CSS (1200px, then 1320px on wide screens).
const HUB_BAR_CSS = `@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&family=Nunito:wght@700&family=IBM+Plex+Mono:wght@500&display=swap'); @media (min-width: 900px){ .hub-bar-inner{ max-width:1200px !important; } } @media (min-width: 1300px){ .hub-bar-inner{ max-width:1320px !important; } }`;

// Top bar shared by the hub landing pages; mirrors the subject-page bar (logo | title, back pill at right).
export default function HubTopBar({ title, tag = "Peters Family Homeschool", icon, titleColor, tagColor, border, pillBg, pillColor, backTo = "/", backLabel = "← Home" }) {
  return (
    <div style={{ background: "#FFFFFF", lineHeight: 1.7, borderBottom: `1px solid ${border}`, padding: "14px 24px", margin: "-40px -24px 32px" }}>
      <style>{HUB_BAR_CSS}</style>
      <div className="hub-bar-inner" style={{ maxWidth: 1040, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
          <BrandLogo height={42} divider />
          {icon && <div style={{ width: 36, height: 36, borderRadius: 11, background: pillBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</div>}
          <div>
            <h1 style={{ margin: 0, fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 17, color: titleColor }}>{title}</h1>
            <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, letterSpacing: "0.1em", color: tagColor, textTransform: "uppercase" }}>{tag}</div>
          </div>
        </div>
        <Link to={backTo} style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13.5, background: pillBg, color: pillColor, padding: "8px 16px", borderRadius: 100, textDecoration: "none", whiteSpace: "nowrap" }}>{backLabel}</Link>
      </div>
    </div>
  );
}
