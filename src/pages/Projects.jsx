import Footer from "../components/Footer";

import ProjectsMainSection from "../components/projects/ProjectsMainSection";
import { ProjectsProvider } from "../contexts/ProjectsContext";

function Projects() {
  return (
    <>
      <ProjectsProvider>
        <ProjectsMainSection />
      </ProjectsProvider>
      <Footer />
    </>
  );
}

export default Projects;
