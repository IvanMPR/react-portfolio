import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Gratitude from "./pages/Gratitude";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";

function App() {
  const [colorTheme, setColorTheme] = useState(
    () => localStorage.getItem("theme") || "default"
  );

  useEffect(() => {
    if (colorTheme === "default") {
      document.body.dataset.theme = "default";
      localStorage.setItem("theme", "default");
    } else {
      document.body.dataset.theme = "dark";
      localStorage.setItem("theme", "dark");
    }
  }, [colorTheme]);

  return (
    <BrowserRouter>
      <Header colorTheme={colorTheme} setColorTheme={setColorTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gratitude" element={<Gratitude />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
