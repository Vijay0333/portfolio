import React from "react";
import PortfolioHeader from "./components/PortfolioHeader";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", fontFamily: "sans-serif", background: "#f9f9f9", minHeight: "100vh", padding: "2rem" }}>
      <PortfolioHeader />
      <ProjectsSection />
    </div>
  );
}

export default App;