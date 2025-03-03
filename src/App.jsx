import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home.component";
import AboutMe from "./components/about_me.component";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/about_me" element={<AboutMe />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
