import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
const ApHubPage = lazy(() => import("./hubs/ap/ApHubPage"));
const Physics2Page = lazy(() => import("./hubs/physics2/Physics2Page"));
const BiologyPage = lazy(() => import("./hubs/biology/BiologyPage"));
const ChemistryPage = lazy(() => import("./hubs/chemistry/ChemistryPage"));
const Physics1Page = lazy(() => import("./hubs/physics1/Physics1Page"));
const GovernmentPage = lazy(() => import("./hubs/government/GovernmentPage"));
const EnvSciencePage = lazy(() => import("./hubs/apes/EnvSciencePage"));
const UsHistoryPage = lazy(() => import("./hubs/apush/USHistoryPage"));
const EnglishLangPage = lazy(() => import("./hubs/englang/EnglishLangPage"));
const EngLitPage = lazy(() => import("./hubs/aplit/EngLitPage"));
const SatHubPage = lazy(() => import("./hubs/sat/SatHubPage"));
const VocabPage = lazy(() => import("./hubs/sat/vocab/VocabPage"));
const QuestionBankPage = lazy(() => import("./hubs/sat/vocab/QuestionBankPage"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ap" element={<ApHubPage />} />
        <Route path="/ap/physics2" element={<Physics2Page />} />
        <Route path="/ap/biology" element={<BiologyPage />} />
        <Route path="/ap/chemistry" element={<ChemistryPage />} />
        <Route path="/ap/physics1" element={<Physics1Page />} />
        <Route path="/ap/government" element={<GovernmentPage />} />
        <Route path="/ap/environmental" element={<EnvSciencePage />} />
        <Route path="/ap/ushistory" element={<UsHistoryPage />} />
        <Route path="/ap/englang" element={<EnglishLangPage />} />
        <Route path="/ap/englit" element={<EngLitPage />} />
        <Route path="/sat" element={<SatHubPage />} />
        <Route path="/sat/vocab" element={<VocabPage />} />
        <Route path="/sat/vocab-questions" element={<QuestionBankPage />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}