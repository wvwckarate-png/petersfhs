import React from "react";
import { Link } from "react-router-dom";

const subjects = [
  { id: "physics2", name: "AP Physics 2", color: "#7C9B72", ready: true },
  { id: "physics1", name: "AP Physics 1", color: "#7BA3B8", ready: false },
  { id: "biology", name: "AP Biology", color: "#9887B0", ready: false },
  { id: "chemistry", name: "AP Chemistry", color: "#D98B7B", ready: false },
];

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
            <div style={{ ...styles.cardAccent, background: s.color }} />
            <div style={styles.cardName}>{s.name}</div>
            <div style={styles.cardStatus}>{s.ready ? "Ready" : "Coming soon"}</div>
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
  grid: { display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" },
  card: { width: 220, background: "white", borderRadius: 18, padding: "24px 20px", boxShadow: "0 4px 14px rgba(0,0,0,0.06)" },
  cardAccent: { width: 36, height: 6, borderRadius: 3, marginBottom: 14 },
  cardName: { fontSize: 17, fontWeight: 800, color: "#2E332E", marginBottom: 6 },
  cardStatus: { fontSize: 12.5, color: "#9AA096", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em" },
  homeCard: { display: "flex", alignItems: "center", gap: 14, width: 320, margin: "50px auto 0", background: "white", borderRadius: 18, padding: "18px 22px", boxShadow: "0 4px 14px rgba(0,0,0,0.06)", textDecoration: "none" },
  homeCardIcon: { fontSize: 20, color: "#5E7A55", flexShrink: 0 },
  homeCardTitle: { fontSize: 15, fontWeight: 800, color: "#2E332E" },
  homeCardSub: { fontSize: 12.5, color: "#9AA096", marginTop: 2 },
};