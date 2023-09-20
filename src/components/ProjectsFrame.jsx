import { useState } from "react";
import Project from "./Project";
import ProjectsDotContainer from "./ProjectsDotContainer";

import { projectsObj } from "../../src/projects";

function ProjectsFrame() {
  const [currentImage, setCurrentImage] = useState({
    currentImage: 0,
    threshold: projectsObj.length - 1,
  });

  return (
    <div className="frame">
      <div className="frame-arrow__left">
        <i className="fas fa-chevron-left fa-5x" title="Previous project"></i>
      </div>
      <div className="frame-arrow__right">
        <i className="fas fa-chevron-right fa-5x" title="Next project"></i>
      </div>

      {projectsObj.map((project, i) => (
        <Project key={i} project={project} />
      ))}

      <ProjectsDotContainer
        projects={projectsObj}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
    </div>
  );
}

export default ProjectsFrame;
