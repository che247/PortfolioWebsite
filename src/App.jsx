import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./components/home.component";
import AboutMe from "./components/about_me.component";
import Projects from "./components/projects.component";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about_me" element={<AboutMe />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");

    // sanity check here to make sure that we remove all current page classes on links
    links.forEach((link) => link.classList.remove("current_page"));

    // Let's look for the current link
    const active_link = Array.from(links).find(
      (link) => link.getAttribute("href") === location.pathname,
    );

    if (active_link) {
      active_link.classList.add("current_page");
    }
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="header__content">
        <div>
          <Link to="/" className="logo">
            Che.
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/about_me" className="nav-link">
            About Me
          </Link>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "5rem",
        color: "var(--auxilary_color)",
        bottom: "0",
        position: "relative"
      }}
    >
      <p>Che's Website. All rights reserved.</p>
      {/*<p>Built using React and Vite.</p>*/}
    </div>
  );
};

const ComingSoon = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "30vh",
        justifyContent: "center",
        alignItems: "center",
        color: "var(--auxilary_color)",
      }}
    >
      <div>Projects Coming Soon!</div>
    </div>
  );
};
