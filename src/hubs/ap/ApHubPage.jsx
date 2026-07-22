import React from "react";
import { Link } from "react-router-dom";

const subjects = [
  { id: "physics1", name: "AP Physics 1", color: "#7BA3B8", ready: true },
  { id: "physics2", name: "AP Physics 2", color: "#7C9B72", ready: true },
  { id: "biology", name: "AP Biology", color: "#9887B0", ready: true },
  { id: "chemistry", name: "AP Chemistry", color: "#D98B7B", ready: true },
  { id: "environmental", name: "AP Environmental Science", color: "#6B8F5E", ready: false },
  { id: "ushistory", name: "AP US History", color: "#A8434B", ready: false },
  { id: "government", name: "AP US Government", color: "#5B6FA8", ready: true },
];

function SubjectIcon({ id, color }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" };
  if (id === "physics1" || id === "physics2") {
    return (
      <svg {...common}>
        <path d="M3 21V3" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M3 21H21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M3.5 17C7 17 8 6 13 6C17 6 16.5 13 20.5 13" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      </svg>
    );
  }
  if (id === "biology") {
    return (
      <svg {...common}>
        <path d="M19 5C19 5 19.5 13 13.5 18C8.5 22 4 19.5 4 19.5C4 19.5 3 13.5 8 9C12.5 5 19 5 19 5Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 6L9.5 15.5" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    );
  }
  if (id === "chemistry") {
    return (
      <svg {...common}>
        <path d="M9 3H15" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M10 3.5V9.5L4.8 18.2C4.2 19.3 5 20.5 6.2 20.5H17.8C19 20.5 19.8 19.3 19.2 18.2L14 9.5V3.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 15.5C8.5 14.3 10 16.5 12 15.5C14 14.5 15.5 16.3 17 15.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    );
  }
  if (id === "environmental") {
    return (
      <svg {...common}>
        <path d="M12 3L17 11H14L18 17H6L10 11H7L12 3Z" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 17V21" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    );
  }
  if (id === "government") {
    return (
      <svg {...common}>
        <path d="M12 3L13.3 6.6L17 7.1L14.3 9.6L15 13.3L12 11.4L9 13.3L9.7 9.6L7 7.1L10.7 6.6L12 3Z" fill="#A8434B" stroke="#A8434B" strokeWidth="0.8" strokeLinejoin="round"/>
        <path d="M5.5 14L6.3 16L8.4 16.3L6.9 17.8L7.3 19.9L5.5 18.9L3.7 19.9L4.1 17.8L2.6 16.3L4.7 16L5.5 14Z" fill="#5B6FA8" stroke="#5B6FA8" strokeWidth="0.7" strokeLinejoin="round"/>
        <path d="M18.5 14L19.3 16L21.4 16.3L19.9 17.8L20.3 19.9L18.5 18.9L16.7 19.9L17.1 17.8L15.6 16.3L17.7 16L18.5 14Z" fill="#5B6FA8" stroke="#5B6FA8" strokeWidth="0.7" strokeLinejoin="round"/>
      </svg>
    );
  }
  if (id === "ushistory") {
    return (
      <svg {...common}>
        <path d="M6 3V21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 4H18L15.5 7.5L18 11H6" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M6 5.5H12.5M6 7.5H12.5M6 9.5H12.5" stroke={color} strokeWidth="1" strokeLinecap="round"/>
      </svg>
    );
  }
  return null;
}

export default function ApHubPage() {
  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>AP Hub</h1>
        <p style={styles.subtitle}>Choose a subject to start studying.</p>
      </div>
      <div style={styles.grid}>
        {subjects.map((s) => (
          <Link key={s.id} to={s.ready ? `/ap/${s.id}` : "#"} style={{ ...styles.card, opacity: s.ready ? 1 : 0.55, textDecoration: "none" }}>
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
  title: { fontSize: 32, fontWeight: 800, color: "#2E332E", margin: 0 },
  subtitle: { color: "#767F73", marginTop: 8 },
  grid: { display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", maxWidth: 760, margin: "0 auto" },
  card: { width: 220, background: "white", borderRadius: 18, padding: "20px 20px", boxShadow: "0 4px 14px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: 14 },
  cardIconBadge: { width: 44, height: 44, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  cardName: { fontSize: 17, fontWeight: 800, color: "#2E332E" },
  homeCard: { display: "flex", alignItems: "center", gap: 14, width: 320, margin: "50px auto 0", background: "white", borderRadius: 18, padding: "18px 22px", boxShadow: "0 4px 14px rgba(0,0,0,0.06)", textDecoration: "none" },
  homeCardIcon: { fontSize: 20, color: "#5E7A55", flexShrink: 0 },
  homeCardTitle: { fontSize: 15, fontWeight: 800, color: "#2E332E" },
  homeCardSub: { fontSize: 12.5, color: "#9AA096", marginTop: 2 },
};