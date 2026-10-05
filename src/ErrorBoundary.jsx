import React from "react";

// Catches render errors so a bug in one page shows a friendly message
// instead of a blank white screen.
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error, info) {
    console.error("Page crashed", error, info);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div style={styles.wrap}>
        <h1 style={styles.title}>Something went wrong</h1>
        <p style={styles.text}>This page hit an unexpected problem. Your saved progress is safe.</p>
        <a href="/" style={styles.btn}>Back to Homeschool Hub</a>
      </div>
    );
  }
}

const styles = {
  wrap: { margin: "auto", textAlign: "center", padding: 32, fontFamily: "sans-serif", color: "#2E332E" },
  title: { fontSize: 26, fontWeight: 800 },
  text: { color: "#767F73", margin: "10px 0 20px" },
  btn: { display: "inline-block", background: "#5E7A55", color: "white", textDecoration: "none", padding: "10px 20px", borderRadius: 100, fontWeight: 700 },
};
