import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ApHubPage from "./hubs/ap/ApHubPage";
import Physics2Page from "./hubs/physics2/Physics2Page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ap" element={<ApHubPage />} />
        <Route path="/ap/physics2" element={<Physics2Page />} />
      </Routes>
    </BrowserRouter>
  );
}