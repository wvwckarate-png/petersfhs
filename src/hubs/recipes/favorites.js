import { useCallback, useEffect, useState } from "react";
import { storage } from "../../lib/storage";
import { onSession } from "../../lib/cloud";

// Starred recipes, saved like all other progress: on this device for guests, and synced to the profile when signed in.
const KEY = "recipes:favs:v1";
const EVENT = "pf-recipe-favs";

export function readFavs() {
  try {
    const v = JSON.parse(storage.getSync(KEY));
    return Array.isArray(v) ? v.filter((x) => typeof x === "string") : [];
  } catch { return []; }
}

export function useFavorites() {
  const [favs, setFavs] = useState(readFavs);
  useEffect(() => {
    const refresh = () => setFavs(readFavs());
    window.addEventListener(EVENT, refresh);
    window.addEventListener("storage", refresh);
    const off = onSession(refresh); // a different student signs in: show their stars
    return () => { window.removeEventListener(EVENT, refresh); window.removeEventListener("storage", refresh); off(); };
  }, []);
  const toggle = useCallback((slug) => {
    const cur = readFavs();
    const next = cur.includes(slug) ? cur.filter((s) => s !== slug) : [slug, ...cur]; // newest star first
    storage.setSync(KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(EVENT));
  }, []);
  return { favs, isFav: (slug) => favs.includes(slug), toggle };
}
