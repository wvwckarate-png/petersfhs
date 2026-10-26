import { useCallback, useState } from "react";

const KEY = "petersfhs:jj:v1";
export const PEOPLE = ["Matthew", "Michael", "Brynne", "Mom", "Dad"];
export const STATUS = ["Not yet", "Learning", "Drilled", "Hits live", "Could teach it"];

function read() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
}
function write(v) {
  try { localStorage.setItem(KEY, JSON.stringify(v)); } catch { /* private mode: progress simply won't persist */ }
}

// Progress per person: { person, progress: { Matthew: { "closed-guard": 2 } } }
export function useStore() {
  const [state, setState] = useState(() => {
    const s = read();
    return { person: PEOPLE.includes(s.person) ? s.person : PEOPLE[0], progress: s.progress || {}, quiz: s.quiz || {} };
  });
  const commit = useCallback((next) => { write(next); setState(next); }, []);
  const setPerson = (person) => commit({ ...state, person });
  const getStatus = (id, person = state.person) => state.progress[person]?.[id] || 0;
  const setStatus = (id, n) => commit({ ...state, progress: { ...state.progress, [state.person]: { ...(state.progress[state.person] || {}), [id]: n } } });
  const bestKey = (topic, n) => `${state.person}|${topic}|${n}`;
  const getBest = (topic, n) => (state.quiz[bestKey(topic, n)] ? `${state.quiz[bestKey(topic, n)]}/${n}` : "");
  const recordQuiz = (topic, n, score, total) => {
    const key = bestKey(topic, n);
    if (total === n && score > (state.quiz[key] || 0)) commit({ ...state, quiz: { ...state.quiz, [key]: score } });
  };
  const cycle = (id) => setStatus(id, (getStatus(id) + 1) % STATUS.length);
  return { ...state, setPerson, getStatus, cycle, setStatus, getBest, recordQuiz };
}
