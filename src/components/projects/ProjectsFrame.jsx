import Project from "./Project";
import ProjectsDotContainer from "./ProjectsDotContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { useProjectsContext } from "../../contexts/ProjectsContext";

function ProjectsFrame() {
  const {
    arrayOfProjects,
    isZoomed,
    setIsZoomed,
    zoomedImageSrc,
    setZoomedImageSrc,
    currentImage,
    handleLeftArrowClick,
    handleRightArrowClick,
  } = useProjectsContext();

  return (
    <div className="frame">
      <div className="frame-arrow__left" onClick={handleLeftArrowClick}>
        <FontAwesomeIcon icon={faChevronLeft} className="fa-solid" size="5x" />
      </div>
      <div className="frame-arrow__right" onClick={handleRightArrowClick}>
        <FontAwesomeIcon icon={faChevronRight} className="fa-solid" size="5x" />
      </div>

      {arrayOfProjects.map((project, i) => (
        <Project
          key={i}
          project={project}
          i={i}
          currentImage={currentImage}
          isZoomed={isZoomed}
          setIsZoomed={setIsZoomed}
          zoomedImageSrc={zoomedImageSrc}
          setZoomedImageSrc={setZoomedImageSrc}
        />
      ))}

      <ProjectsDotContainer />
    </div>
  );
}

export default ProjectsFrame;
