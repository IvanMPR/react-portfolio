import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useAppContext } from "./contexts/AppContext";
import { HeaderProvider } from "./contexts/HeaderContext.jsx";

import Home from "./pages/Home";
import Gratitude from "./pages/Gratitude";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/header/Header";

function App() {
  const { colorTheme, setColorTheme } = useAppContext();

  return (
    <BrowserRouter>
      <HeaderProvider>
        <Header colorTheme={colorTheme} setColorTheme={setColorTheme} />
      </HeaderProvider>
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
