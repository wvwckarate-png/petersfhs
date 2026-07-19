import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ApHubPage from "./hubs/ap/ApHubPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ap" element={<ApHubPage />} />
      </Routes>
    </BrowserRouter>
  );
}