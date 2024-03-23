import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HeaderProvider } from "./contexts/HeaderContext.jsx";

import Spinner from "./components/miscellaneous/Spinner.jsx";
import Header from "./components/header/Header";

const Home = lazy(() => import("./pages/Home"));
const Gratitude = lazy(() => import("./pages/Gratitude"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Projects = lazy(() => import("./pages/Projects"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
// const Header = lazy(() => import("./components/header/Header"));

// import Home from "./pages/Home";
// import Gratitude from "./pages/Gratitude";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Projects from "./pages/Projects";
// import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
          <Route path='gratitude' element={<Gratitude />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
