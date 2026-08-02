import React from "react";
import { Link } from "react-router-dom";

const hubs = [
  { path: "/ap", name: "AP Hub", description: "Study guides, practice questions, and FRQs for AP subjects." },
  { path: "/sat", name: "SAT Hub", description: "Vocabulary flashcards and practice for the SAT." },
];

export default function HomePage() {
  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>Peters Family Homeschool</h1>
        <p style={styles.subtitle}>Pick a hub to get started.</p>
        <p style={styles.tagline}>
          "Each thing you learn is one more thing you know."
          <span style={styles.taglineAuthor}> — Michael D. Peters, DVM</span>
        </p>
      </div>
      <div style={styles.grid}>
        {hubs.map((hub) => (
          <Link key={hub.path} to={hub.path} style={styles.card}>
            <div style={styles.cardName}>{hub.name}</div>
            <div style={styles.cardDesc}>{hub.description}</div>
          </Link>
        ))}
      </div>
      <footer style={styles.footer}>v2.0.0</footer>
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "#FAFAF7", fontFamily: "sans-serif", padding: "60px 24px", boxSizing: "border-box" },
  header: { textAlign: "center", marginBottom: 40 },
  title: { fontSize: 32, fontWeight: 800, color: "#2E332E", margin: 0 },
  subtitle: { color: "#767F73", marginTop: 8 },
  tagline: { color: "#9AA096", marginTop: 18, fontSize: 14, fontStyle: "italic", maxWidth: 640, marginLeft: "auto", marginRight: "auto" },
  taglineAuthor: { fontStyle: "normal", fontWeight: 600, color: "#767F73" },
  footer: { textAlign: "center", marginTop: 60, fontSize: 11.5, color: "#C4C0C0", fontFamily: "monospace", letterSpacing: "0.05em" },
  grid: { display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" },
  card: { display: "block", width: 260, background: "white", borderRadius: 18, padding: 24, textDecoration: "none", boxShadow: "0 4px 14px rgba(0,0,0,0.06)" },
  cardName: { fontSize: 20, fontWeight: 800, color: "#2E332E", marginBottom: 8 },
  cardDesc: { fontSize: 14, color: "#767F73", lineHeight: 1.5 },
};