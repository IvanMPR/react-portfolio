import { useState } from "react";

import Project from "./Project";

import ProjectsDotContainer from "./ProjectsDotContainer";

import { projectsAdvancedObject } from "../../projectsAdvanced";

const threshold = projectsAdvancedObject.length - 1;

function ProjectsFrame({ isRowReversed, arrayOfProjects }) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentImage(currentImage - 1 >= 0 ? currentImage - 1 : threshold);
  };

  const handleRightArrowClick = () => {
    setCurrentImage(currentImage + 1 <= threshold ? currentImage + 1 : 0);
  };

  return (
    <div className="frame">
      <div className="frame-arrow__left" onClick={handleLeftArrowClick}>
        <i className="fas fa-chevron-left fa-5x" title="Previous project"></i>
      </div>
      <div className="frame-arrow__right" onClick={handleRightArrowClick}>
        <i className="fas fa-chevron-right fa-5x" title="Next project"></i>
      </div>

      {arrayOfProjects.map((project, i) => (
        <Project
          key={i}
          project={project}
          i={i}
          currentImage={currentImage}
          isRowReversed={isRowReversed}
        />
      ))}

      <ProjectsDotContainer
        arrayOfProjects={arrayOfProjects}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
    </div>
  );
}

export default ProjectsFrame;
