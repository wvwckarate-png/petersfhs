import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ApHubPage from "./hubs/ap/ApHubPage";
import Physics2Page from "./hubs/physics2/Physics2Page";
import BiologyPage from "./hubs/biology/BiologyPage";
import ChemistryPage from "./hubs/chemistry/ChemistryPage";
import Physics1Page from "./hubs/physics1/Physics1Page";
import GovernmentPage from "./hubs/government/GovernmentPage";
import EnvSciencePage from "./hubs/apes/EnvSciencePage";
import UsHistoryPage from "./hubs/apush/USHistoryPage";
import EnglishLangPage from "./hubs/englang/EnglishLangPage";
import EngLitPage from "./hubs/aplit/EngLitPage";
import SatHubPage from "./hubs/sat/SatHubPage";
import VocabPage from "./hubs/sat/vocab/VocabPage";
import QuestionBankPage from "./hubs/sat/vocab/QuestionBankPage";

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}