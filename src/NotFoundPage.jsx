import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div style={styles.wrap}>
      <h1 style={styles.title}>Page not found</h1>
      <p style={styles.text}>That page doesn't exist.</p>
      <Link to="/" style={styles.btn}>Back to Homeschool Hub</Link>
    </div>
  );
}

const styles = {
  wrap: { margin: "auto", textAlign: "center", padding: 32, fontFamily: "sans-serif", color: "#2E332E" },
  title: { fontSize: 26, fontWeight: 800 },
  text: { color: "#767F73", margin: "10px 0 20px" },
  btn: { display: "inline-block", background: "#5E7A55", color: "white", textDecoration: "none", padding: "10px 20px", borderRadius: 100, fontWeight: 700 },
};
