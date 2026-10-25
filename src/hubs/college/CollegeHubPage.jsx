import React from "react";
import { Link } from "react-router-dom";
import { COURSES, FOUNDATION_COURSES, NAVY, NAVY_PALE, GOLD, GOLD_DEEP } from "./courses";
import { COURSE_PAGES } from "./courseContent";
import CourseIcon from "./CourseIcon";

export default function CollegeHubPage() {
  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>College Hub</h1>
        <div style={styles.titleBar} />
        <p style={styles.subtitle}>Get a head start on your college courses, at your own pace.</p>
      </div>

      {[
        ["Courses", (c) => !c.section],
        ["More Exercise Physiology courses", (c) => c.section === "exph"],
        ["Science and supporting courses", (c) => c.section === "support"],
      ].map(([title, test]) => (
        <React.Fragment key={title}>
          <h2 style={styles.sectionTitle}>{title}</h2>
          <div style={styles.grid}>
            {COURSES.filter(test).map((c) => {
              const hasContent = Boolean(COURSE_PAGES[c.id]);
              return (
                <Link key={c.id} to={`/college/${c.id}`} style={styles.card} className="college-card">
                  <div style={styles.iconBadge}><CourseIcon id={c.id} size={28} /></div>
                  <div style={styles.cardText}>
                    <div style={styles.cardName}>{c.name}</div>
                    <div style={styles.cardCode}>{c.code}</div>
                    {!hasContent && <div style={styles.soon}>Coming soon</div>}
                  </div>
                </Link>
              );
            })}
          </div>
        </React.Fragment>
      ))}

      <h2 style={styles.sectionTitle}>Foundation courses</h2>
      <p style={styles.sectionNote}>These are covered in the AP Hub. Tap one to open it there.</p>
      <div style={styles.grid}>
        {FOUNDATION_COURSES.map((c) => (
          <Link key={c.id} to={c.apPath} style={{ ...styles.card, ...styles.apCard }} className="college-card">
            <div style={{ ...styles.iconBadge, background: "#FFF6D9" }}><CourseIcon id={c.id} size={28} /></div>
            <div style={styles.cardText}>
              <div style={styles.cardName}>{c.name}</div>
              <div style={styles.cardCode}>{c.code}</div>
              <div style={styles.apTag}>Opens {c.apName} →</div>
            </div>
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

      <style>{`
        .college-card { transition: transform 0.18s ease, box-shadow 0.18s ease; }
        .college-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(0,40,85,0.14); }
      `}</style>
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "#FAFAF7", fontFamily: "'Nunito', 'Manrope', sans-serif", padding: "40px 24px", boxSizing: "border-box" },
  header: { textAlign: "center", margin: "24px 0 36px" },
  title: { fontSize: 32, fontWeight: 800, color: NAVY, margin: 0 },
  titleBar: { width: 64, height: 4, borderRadius: 2, background: GOLD, margin: "12px auto 0" },
  subtitle: { color: "#767F73", marginTop: 14 },
  sectionTitle: { maxWidth: 780, margin: "0 auto 14px", fontSize: 14, fontWeight: 800, color: NAVY, letterSpacing: "0.08em", textTransform: "uppercase" },
  sectionNote: { maxWidth: 780, margin: "-6px auto 14px", fontSize: 13.5, color: "#767F73" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, maxWidth: 780, margin: "0 auto 36px" },
  card: { background: "white", borderRadius: 18, padding: "18px 20px", boxShadow: "0 4px 14px rgba(0,40,85,0.08)", display: "flex", alignItems: "center", gap: 14, textDecoration: "none", borderTop: `4px solid ${NAVY}` },
  apCard: { borderTop: `4px solid ${GOLD}` },
  iconBadge: { width: 50, height: 50, borderRadius: 14, background: NAVY_PALE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  cardText: { minWidth: 0 },
  cardName: { overflowWrap: "anywhere", fontSize: 16.5, fontWeight: 800, color: NAVY, lineHeight: 1.25 },
  cardCode: { fontSize: 12.5, fontWeight: 700, color: GOLD_DEEP, marginTop: 3, letterSpacing: "0.03em" },
  soon: { fontSize: 11.5, color: "#9AA096", marginTop: 5, fontWeight: 600 },
  apTag: { fontSize: 12, color: "#767F73", marginTop: 5, fontWeight: 600 },
  homeCard: { display: "flex", alignItems: "center", gap: 14, width: 320, maxWidth: "100%", margin: "30px auto 0", background: "white", borderRadius: 18, padding: "18px 22px", boxShadow: "0 4px 14px rgba(0,0,0,0.06)", textDecoration: "none" },
  homeCardIcon: { fontSize: 20, color: NAVY, flexShrink: 0 },
  homeCardTitle: { fontSize: 15, fontWeight: 800, color: "#2E332E" },
  homeCardSub: { fontSize: 12.5, color: "#9AA096", marginTop: 2 },
};
