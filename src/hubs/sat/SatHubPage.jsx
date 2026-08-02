import React from "react";
import { Link } from "react-router-dom";

const subjects = [
  { id: "vocab", name: "SAT Vocabulary Flash Cards", color: "#3D3470", ready: true },
  { id: "vocab-questions", name: "SAT Vocabulary Question Bank", color: "#3D3470", ready: true },
];

function SubjectIcon({ id, color }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" };
  if (id === "vocab") {
    return (
      <svg {...common}>
        <path d="M6 3.5H16.5C17.3 3.5 18 4.2 18 5V19.5C18 20.3 17.3 21 16.5 21H6C5.4 21 5 20.6 5 20V5C5 4.2 5.4 3.5 6 3.5Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M5 17.5H18" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
        <text x="8.2" y="11.5" fontSize="5.5" fontWeight="700" fill={color} fontFamily="Arial, sans-serif">A</text>
        <path d="M9.5 13.3H12.5" stroke="#E8A33D" strokeWidth="1.3" strokeLinecap="round"/>
        <text x="13.3" y="15.3" fontSize="5.5" fontWeight="700" fill="#E8A33D" fontFamily="Arial, sans-serif">Z</text>
      </svg>
    );
  }
  if (id === "vocab-questions") {
    return (
      <svg {...common}>
        <path d="M3 9.5L12 4L21 9.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M3.5 9.5H20.5" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M4.5 9.5V18.5M8.5 9.5V18.5M12 9.5V18.5M15.5 9.5V18.5M19.5 9.5V18.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 19.5H21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="6.7" r="0.9" fill="#E8A33D"/>
      </svg>
    );
  }
  return null;
}

export default function SatHubPage() {
  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>SAT Hub</h1>
        <p style={styles.subtitle}>Choose a subject to start studying.</p>
      </div>
      <div style={styles.grid}>
        {subjects.map((s) => (
          <Link key={s.id} to={s.ready ? `/sat/${s.id}` : "#"} style={{ ...styles.card, opacity: s.ready ? 1 : 0.55, textDecoration: "none" }}>
            <div style={{ ...styles.cardIconBadge, background: `${s.color}22` }}>
              <SubjectIcon id={s.id} color={s.color} />
            </div>
            <div style={styles.cardName}>{s.name}</div>
          </Link>
        ))}
      </div>
      <Link to="/" style={styles.homeCard}>
        <span style={styles.homeCardIcon}>←</span>
        <span>
          <div style={styles.homeCardTitle}>Back to Homeschool Hub</div>
          <div style={styles.homeCardSub}>Return to the main site</div>
        </span>
      </Link>
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "#FAFAF7", fontFamily: "sans-serif", padding: "40px 24px", boxSizing: "border-box" },
  header: { textAlign: "center", margin: "24px 0 40px" },
  title: { fontSize: 32, fontWeight: 800, color: "#2A2350", margin: 0 },
  subtitle: { color: "#8A84A8", marginTop: 8 },
  grid: { display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", maxWidth: 760, margin: "0 auto" },
  card: { width: 220, background: "white", borderRadius: 18, padding: "20px 20px", boxShadow: "0 4px 14px rgba(61,52,112,0.08)", display: "flex", alignItems: "center", gap: 14 },
  cardIconBadge: { width: 44, height: 44, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  cardName: { fontSize: 17, fontWeight: 800, color: "#2A2350" },
  homeCard: { display: "flex", alignItems: "center", gap: 14, width: 320, margin: "50px auto 0", background: "white", borderRadius: 18, padding: "18px 22px", boxShadow: "0 4px 14px rgba(61,52,112,0.08)", textDecoration: "none" },
  homeCardIcon: { fontSize: 20, color: "#3D3470", flexShrink: 0 },
  homeCardTitle: { fontSize: 15, fontWeight: 800, color: "#2A2350" },
  homeCardSub: { fontSize: 12.5, color: "#8A84A8", marginTop: 2 },
};