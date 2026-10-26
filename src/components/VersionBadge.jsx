import { VERSION, FOUNDED } from "../version";

export default function VersionBadge() {
  return (
    <div aria-hidden="true" style={{ position: "fixed", right: 10, bottom: 8, zIndex: 5, pointerEvents: "none", padding: "3px 9px", borderRadius: 999, background: "rgba(255,255,255,.88)", border: "1px solid rgba(60,60,60,.18)", color: "#3F443F", fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, letterSpacing: "0.05em" }}>
      v{VERSION} · Founded {FOUNDED}
    </div>
  );
}
