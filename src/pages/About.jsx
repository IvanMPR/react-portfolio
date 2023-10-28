import AboutMainSection from "../components/about/AboutMainSection";
import Footer from "../components/Footer";
// imported projects context on the about page - needed state from projects to zoom in/out on about page collage image
import { ProjectsProvider } from "../contexts/ProjectsContext";

function About() {
  return (
    <>
      <ProjectsProvider>
        <AboutMainSection />
      </ProjectsProvider>
      <Footer />
    </>
  );
}

export default About;
