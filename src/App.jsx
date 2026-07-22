import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ApHubPage from "./hubs/ap/ApHubPage";
import Physics2Page from "./hubs/physics2/Physics2Page";
import BiologyPage from "./hubs/biology/BiologyPage";
import ChemistryPage from "./hubs/chemistry/ChemistryPage";
import Physics1Page from "./hubs/physics1/Physics1Page";

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
      </Routes>
    </BrowserRouter>
  );
}