import React, { Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import NotFoundPage from "../../NotFoundPage";
import { findCourse, NAVY, GOLD, GOLD_DEEP } from "./courses";
import { COURSE_PAGES } from "./courseContent";

export default function CollegeCoursePage() {
  const { courseId } = useParams();
  const course = findCourse(courseId);
  if (!course) return <NotFoundPage />;

  const ContentPage = COURSE_PAGES[course.id];
  if (ContentPage) {
    return (
      <Suspense fallback={<div style={{ padding: 24, fontFamily: "sans-serif", color: "#767F73" }}>Loading…</div>}>
        <ContentPage course={course} />
      </Suspense>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>{course.name} <span style={styles.code}>— {course.code}</span></h1>
        <div style={styles.titleBar} />
      </div>
      <div style={styles.box}>
        <div style={styles.boxTitle}>Coming soon</div>
        <p style={styles.boxText}>
          Study guides and practice questions for {course.name} are being prepared. Check back soon.
        </p>
      </div>
      <Link to="/college" style={styles.back}>← Back to College Hub</Link>
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "#FAFAF7", fontFamily: "'Nunito', 'Manrope', sans-serif", padding: "40px 24px", boxSizing: "border-box" },
  header: { textAlign: "center", margin: "24px 0 32px" },
  title: { fontSize: 30, fontWeight: 800, color: NAVY, margin: 0 },
  code: { color: GOLD_DEEP, fontWeight: 700, whiteSpace: "nowrap" },
  titleBar: { width: 64, height: 4, borderRadius: 2, background: GOLD, margin: "12px auto 0" },
  box: { maxWidth: 520, margin: "0 auto", background: "white", borderRadius: 18, padding: "28px 28px", boxShadow: "0 4px 14px rgba(0,40,85,0.08)", borderTop: `4px solid ${GOLD}`, textAlign: "center" },
  boxTitle: { fontSize: 18, fontWeight: 800, color: NAVY },
  boxText: { color: "#767F73", lineHeight: 1.6, margin: "10px 0 0" },
  back: { display: "block", width: "fit-content", margin: "32px auto 0", color: NAVY, fontWeight: 800, textDecoration: "none" },
};
