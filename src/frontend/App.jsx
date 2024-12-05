import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Component Imports
import Home from "./components/home.component.jsx";
import AboutMe from "./components/about_me.component.jsx";
import Projects from "./components/projects.component.jsx";
import Work from "./components/work.component.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about_me" element={<AboutMe />} />
        </Routes>
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Routes>
          <Route path="/work" element={<Work />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
