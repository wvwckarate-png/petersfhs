import React from "react";
import { Link } from "react-router-dom";

const hubs = [
  {
    path: "/ap",
    name: "AP Hub",
    description: "Study guides, practice questions, and FRQs for AP subjects.",
    color: "#7C9B72",
    colorDeep: "#5E7A55",
    colorPale: "#EAF1E6",
  },
  {
    path: "/sat",
    name: "SAT Hub",
    description: "Vocabulary flashcards and practice for the SAT.",
    color: "#3D3470",
    colorDeep: "#2A2350",
    colorPale: "#EFEDFA",
  },
];

function HubIcon({ path, color }) {
  const common = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none" };
  if (path === "/ap") {
    return (
      <svg {...common}>
        <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke={color} strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M12 3V21" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity="0.5"/>
        <path d="M8 11L12 13.2L16 11" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    );
  }
  if (path === "/sat") {
    return (
      <svg {...common}>
        <path d="M3 9.5L12 4L21 9.5" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M3.5 9.5H20.5" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M4.5 9.5V18.5M8.5 9.5V18.5M12 9.5V18.5M15.5 9.5V18.5M19.5 9.5V18.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <path d="M3 19.5H21" stroke={color} strokeWidth="1.9" strokeLinecap="round"/>
      </svg>
    );
  }
  return null;
}

export default function HomePage() {
  return (
    <div style={styles.page}>
      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />

      <div style={styles.content}>
        <div style={styles.header}>
          <img src="/images/logo.png" alt="Peters Family Homeschool" style={styles.logo} />
          <p style={styles.subtitle}>Pick a hub to get started.</p>
          <p style={styles.tagline}>
            "Each thing you learn is one more thing you know."
            <span style={styles.taglineAuthor}> — Michael D. Peters, DVM</span>
          </p>
        </div>

        <div style={styles.grid}>
          {hubs.map((hub) => (
            <Link
              key={hub.path}
              to={hub.path}
              style={{
                ...styles.card,
                borderTop: `4px solid ${hub.color}`,
              }}
              className="home-card-hover"
            >
              <div style={styles.cardInner}>
                <div style={{ ...styles.cardName, color: hub.colorDeep }}>{hub.name}</div>
                <div style={styles.cardDescRow}>
                  <div style={{ ...styles.cardIconBadge, background: hub.colorPale }}>
                    <HubIcon path={hub.path} color={hub.colorDeep} />
                  </div>
                  <div style={styles.cardDesc}>{hub.description}</div>
                </div>
                <div style={{ ...styles.cardArrow, color: hub.color }}>Enter →</div>
              </div>
            </Link>
          ))}
        </div>

        <footer style={styles.footer}>v2.2.0</footer>
      </div>

      <style>{`
        .home-card-hover {
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .home-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0,0,0,0.09);
        }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #FAFAF7 0%, #F3F1E9 100%)",
    fontFamily: "'Nunito', 'Manrope', sans-serif",
    padding: "60px 24px",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
  },
  glowOne: {
    position: "absolute",
    top: -120,
    left: -100,
    width: 420,
    height: 420,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(124,155,114,0.16) 0%, rgba(124,155,114,0) 70%)",
    pointerEvents: "none",
  },
  glowTwo: {
    position: "absolute",
    bottom: -140,
    right: -120,
    width: 480,
    height: 480,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(61,52,112,0.13) 0%, rgba(61,52,112,0) 70%)",
    pointerEvents: "none",
  },
  content: {
    position: "relative",
    zIndex: 1,
    maxWidth: 780,
    margin: "0 auto",
  },
  header: { textAlign: "center", marginBottom: 48 },
  logo: {
    maxWidth: 420,
    width: "100%",
    height: "auto",
    marginBottom: 4,
  },
  subtitle: { color: "#767F73", marginTop: 10, fontSize: 16 },
  tagline: { color: "#9AA096", marginTop: 20, fontSize: 14, fontStyle: "italic", maxWidth: 640, marginLeft: "auto", marginRight: "auto" },
  taglineAuthor: { fontStyle: "normal", fontWeight: 700, color: "#767F73" },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 20,
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    borderRadius: 20,
    padding: "24px 24px",
    textDecoration: "none",
    boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
  },
  cardInner: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  cardName: { fontFamily: "'Manrope', sans-serif", fontSize: 21, fontWeight: 800, marginBottom: 14 },
  cardDescRow: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    textAlign: "left",
  },
  cardIconBadge: {
    width: 52,
    height: 52,
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  cardDesc: { fontSize: 14.5, color: "#767F73", lineHeight: 1.55, maxWidth: 220 },
  cardArrow: { fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 13.5, marginTop: 18 },

  footer: { textAlign: "center", marginTop: 60, fontSize: 11.5, color: "#C4C0C0", fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.05em" },
};