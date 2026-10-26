import { useCallback, useState } from "react";

const KEY = "petersfhs:jj:v2", OLD_KEY = "petersfhs:jj:v1";
export const STATUS = ["Not yet", "Learning", "Drilled", "Hits live", "Could teach it"];

function read() {
  try {
    const cur = JSON.parse(localStorage.getItem(KEY));
    if (cur) return cur;
    // v7.7 dropped the per-person selector: carry over whoever was selected before.
    const old = JSON.parse(localStorage.getItem(OLD_KEY));
    if (old?.progress) return { progress: old.progress[old.person] || Object.values(old.progress)[0] || {} };
  } catch { /* fall through to an empty record */ }
  return {};
}
function write(v) {
  try { localStorage.setItem(KEY, JSON.stringify(v)); } catch { /* private mode: progress simply won't persist */ }
}

// Progress on this device: { progress: { "closed-guard": 2 } }
export function useStore() {
  const [state, setState] = useState(() => ({ progress: read().progress || {} }));
  const commit = useCallback((next) => { write(next); setState(next); }, []);
  const getStatus = (id) => state.progress[id] || 0;
  const setStatus = (id, n) => commit({ progress: { ...state.progress, [id]: n } });
  const cycle = (id) => setStatus(id, (getStatus(id) + 1) % STATUS.length);
  return { ...state, getStatus, setStatus, cycle };
}
