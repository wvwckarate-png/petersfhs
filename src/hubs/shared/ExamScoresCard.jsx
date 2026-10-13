import React, { useEffect, useMemo, useState } from "react";
import { storage } from "../../lib/storage";
import { scoreExam, estimateAp } from "./ExamEngine";

/*
  Dashboard section listing the MCQ exams and FRQ exams for a hub, with each exam's status and score and a way to clear
  one exam's score (or in-progress work) on its own.

  Props
    hubKey  – storage prefix (same one the exam engines use)
    mcq     – { exams, format } or null          (the same data given to ExamEngine)
    frq     – { meta } or null                   (generated frqMeta: { [examId]: { title, sample, points, parts } })
    colors  – { accent, accentDeep, pale, pill }
    onOpen  – (kind: "mcq" | "frq") => void      switches to that exam tab
*/

const readStore = async (key) => {
  try {
    const r = await storage.get(key, false);
    if (r && r.value) { const p = JSON.parse(r.value); if (p && typeof p === "object") return p; }
  } catch { /* nothing saved */ }
  return {};
};

export default function ExamScoresCard({ hubKey, mcq, frq, colors, onOpen }) {
  const MCQ_KEY = `${hubKey}-exams-v1`, FRQ_KEY = `${hubKey}-frq-exams-v1`;
  const [stores, setStores] = useState({ mcq: {}, frq: {} });
  const [loaded, setLoaded] = useState(false);
  const [confirm, setConfirm] = useState(null); // "mcq:exam-1"
  const C = colors;
  const S = useMemo(() => styles(C), [C]);

  useEffect(() => {
    let live = true;
    (async () => {
      const [a, b] = await Promise.all([mcq ? readStore(MCQ_KEY) : {}, frq ? readStore(FRQ_KEY) : {}]);
      if (live) { setStores({ mcq: a, frq: b }); setLoaded(true); }
    })();
    return () => { live = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MCQ_KEY, FRQ_KEY]);

  async function clear(kind, examId) {
    // re-read first so we never overwrite newer data written elsewhere
    const key = kind === "mcq" ? MCQ_KEY : FRQ_KEY;
    const cur = await readStore(key);
    delete cur[examId];
    try { await storage.set(key, JSON.stringify(cur), false); } catch { /* ignore */ }
    setStores((s) => ({ ...s, [kind]: cur }));
    setConfirm(null);
  }

  const mcqRows = mcq
    ? mcq.exams.map((exam) => {
        const r = stores.mcq[exam.id];
        if (!r) return { id: exam.id, title: exam.title, sample: !!exam.sample, status: "none" };
        if (r.status === "completed") {
          const sc = scoreExam(exam, r.answers || {});
          const pct = Math.round((sc.correct / sc.total) * 100);
          return { id: exam.id, title: exam.title, sample: !!exam.sample, status: "done", main: `${sc.correct}/${sc.total}`, sub: `${pct}% correct · est. AP ${estimateAp(pct, mcq.format.bands)}`, pct };
        }
        const answered = Object.keys(r.answers || {}).length;
        return { id: exam.id, title: exam.title, sample: !!exam.sample, status: "progress", sub: `${answered}/${exam.questions.length} answered` };
      })
    : [];

  const frqRows = frq
    ? Object.entries(frq.meta).map(([id, m]) => {
        const r = stores.frq[id];
        if (!r) return { id, title: m.title, sample: m.sample, status: "none" };
        if (r.status === "completed") {
          let got = 0, anyChecks = false;
          Object.entries(m.parts).forEach(([k, pts]) => {
            const c = (r.checks || {})[k] || {};
            pts.forEach((p, i) => { if (c[i]) { got += p; anyChecks = true; } });
          });
          const pct = Math.round((got / m.points) * 100);
          return { id, title: m.title, sample: m.sample, status: "done", main: `${got}/${m.points}`, sub: anyChecks ? `${pct}% self-scored` : "not self-scored yet", pct };
        }
        const written = Object.keys(r.answers || {}).length;
        return { id, title: m.title, sample: m.sample, status: "progress", sub: `${written}/${Object.keys(m.parts).length} parts written` };
      })
    : [];

  if (!loaded) return null;

  const section = (kind, title, rows, noun) => (
    <div style={S.card}>
      <div style={S.head}>
        <div>
          <div style={S.title}>{title}</div>
          <div style={S.sub}>{noun}</div>
        </div>
        <button style={S.openBtn} onClick={() => onOpen(kind)}>Open</button>
      </div>
      <div style={S.rows}>
        {rows.map((row) => {
          const key = `${kind}:${row.id}`;
          return (
            <div key={row.id} style={S.row} className="exs-row">
              <div style={S.rowName}>
                {row.title}
                {row.sample && <span style={S.samplePill}>Sample</span>}
              </div>
              <div style={S.rowScore}>
                {row.status === "done" && (
                  <>
                    <b style={S.big}>{row.main}</b>
                    <span style={S.small}>{row.sub}</span>
                  </>
                )}
                {row.status === "progress" && <span style={S.progress}>In progress — {row.sub}</span>}
                {row.status === "none" && <span style={S.none}>Not started</span>}
              </div>
              <div style={S.rowAct}>
                {row.status !== "none" && confirm !== key && (
                  <button style={S.clearBtn} onClick={() => setConfirm(key)} aria-label={`Clear ${row.title}`}>
                    {row.status === "done" ? "Clear score" : "Clear progress"}
                  </button>
                )}
                {confirm === key && (
                  <span style={S.confirm}>
                    <span style={S.confirmText}>Clear {row.title}?</span>
                    <button style={S.yesBtn} onClick={() => clear(kind, row.id)}>Yes, clear</button>
                    <button style={S.noBtn} onClick={() => setConfirm(null)}>Cancel</button>
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div style={S.wrap}>
      <style>{`@media (max-width:520px){ .exs-row{ grid-template-columns: minmax(0,1fr) !important; gap:6px !important; } .exs-row > div:last-child{ justify-content:flex-start !important; } }`}</style>
      {mcq && section("mcq", "MCQ Exams", mcqRows, "Multiple-choice practice exams — scores and estimated AP score")}
      {frq && section("frq", "FRQ Exams", frqRows, "Free-response practice exams — self-scored points")}
    </div>
  );
}

function styles(C) {
  const btn = { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13, borderRadius: 100, padding: "7px 14px", cursor: "pointer", border: "none" };
  return {
    wrap: { display: "flex", flexDirection: "column", gap: 14, margin: "0 0 22px" },
    card: { background: "#fff", border: "1px solid #ECEAE3", borderRadius: 18, padding: "16px 18px", boxShadow: "0 2px 8px rgba(70,90,60,0.05)" },
    head: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, marginBottom: 8 },
    title: { fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 18 },
    sub: { fontSize: 13, color: "#767F73", marginTop: 2 },
    openBtn: { ...btn, background: C.pale, color: C.accentDeep },
    rows: { display: "flex", flexDirection: "column" },
    row: { display: "grid", gridTemplateColumns: "minmax(110px, 1.1fr) minmax(130px, 1.6fr) auto", gap: 10, alignItems: "center", padding: "10px 0", borderTop: "1px solid #F0EEE7" },
    rowName: { fontWeight: 800, fontSize: 14.5, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" },
    samplePill: { background: "#FBF0DD", color: "#9A6A1F", fontWeight: 700, fontSize: 10.5, padding: "2px 8px", borderRadius: 100 },
    rowScore: { display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap", minWidth: 0 },
    big: { fontFamily: "'Manrope',sans-serif", fontSize: 17, color: C.accentDeep },
    small: { fontSize: 12.5, color: "#5F675C" },
    progress: { fontSize: 13, color: "#9A6A1F", background: "#FBF0DD", borderRadius: 100, padding: "3px 10px" },
    none: { fontSize: 13, color: "#9AA096" },
    rowAct: { display: "flex", justifyContent: "flex-end" },
    clearBtn: { ...btn, background: "#F0EFE9", color: "#5A4E3F" },
    confirm: { display: "inline-flex", alignItems: "center", gap: 6, flexWrap: "wrap", justifyContent: "flex-end" },
    confirmText: { fontSize: 12.5, color: "#7A3A2E", fontWeight: 700 },
    yesBtn: { ...btn, background: "#B14D3A", color: "#fff", padding: "6px 12px" },
    noBtn: { ...btn, background: "#F0EFE9", color: "#5A4E3F", padding: "6px 12px" },
  };
}
