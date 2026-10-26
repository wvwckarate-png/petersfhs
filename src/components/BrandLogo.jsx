import React from "react";
import { Link } from "react-router-dom";

// The Peters Family Home School logo, linking back to the main page. Use `invert` on dark pages (the logo is black artwork)
// and `divider` to set it off from a page title in a header row.
export default function BrandLogo({ height = 44, invert = false, divider = false, style }) {
  return (
    <Link to="/" aria-label="Peters Family Home School: back to the main page" title="Back to the main page" style={{ display: "inline-flex", alignItems: "center", gap: 14, flexShrink: 0, textDecoration: "none", ...style }}>
      <img src="/images/logo.png" alt="Peters Family Home School" style={{ height, width: "auto", display: "block", filter: invert ? "invert(1)" : "none" }} />
      {divider && <span aria-hidden="true" style={{ width: 1, height: Math.round(height * 0.7), background: invert ? "rgba(255,255,255,.18)" : "#E3E0D6" }} />}
    </Link>
  );
}
