// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllPage from "./components/AllPage";
import FullStackPage from "./components/FullStackPage";
import DataSciencePage from "./components/DataSciencePage";
import CyberSecurityPage from "./components/CyberSecurityPage";
import CareerPage from "./components/CareerPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div>
        <Navigation />{" "}
        {/* You can create a navigation component for navigating between routes */}
        <Routes>
          <Route path="/" element={<AllPage />} />
          <Route path="/FullStackPage" element={<FullStackPage />} />
          <Route path="/DataSciencePage" element={<DataSciencePage />} />
          <Route path="/CyberSecurityPage" element={<CyberSecurityPage />} />
          <Route path="/CareerPage" element={<CareerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
