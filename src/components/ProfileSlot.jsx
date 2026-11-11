import { useCallback, useRef } from "react";
import { getSlot, setSlot } from "../lib/profileSlot";

// Place this in a page header: the profile button (name, saved status, sign in) appears here instead of floating.
export default function ProfileSlot() {
  const own = useRef(null);
  const ref = useCallback((el) => {
    if (el) { own.current = el; setSlot(el); }
    else { if (getSlot() === own.current) setSlot(null); own.current = null; }
  }, []);
  return <span ref={ref} className="profile-slot" style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }} />;
}
