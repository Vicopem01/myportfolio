import Landing from "./pages/Landing/landing";
import Projects from "./pages/Projects/projects";
import { Routes, Route } from "react-router-dom";
import "./globals/utilities.css";
import "./globals/typography.css";
import { ThemeContext } from "./context/index";
import { useState, useEffect } from "react";
// import GtBank from "./pages/GtBank/gtBank";
// import Spaceet from "./pages/Spaceet/spaceet";
// import Godan from "./pages/Godan/godan";
// import Quantum from "./pages/Quantum/quantum";
// import Ricia from "./pages/Ricia/ricia";

const App = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "light") document.body.classList.add("light");
    else document.body.classList.remove("light");
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/projects/gtbank" element={<GtBank />} />
        <Route path="/projects/spaceet" element={<Spaceet />} />
        <Route path="/projects/godan" element={<Godan />} />
        <Route path="/projects/quantum" element={<Quantum />} />
        <Route path="/projects/ricia" element={<Ricia />} /> */}
      </Routes>
    </ThemeContext.Provider>
  );
};

export default App;
