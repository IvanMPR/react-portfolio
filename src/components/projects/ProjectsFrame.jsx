import Project from "./Project";
import ProjectsDotContainer from "./ProjectsDotContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function ProjectsFrame({
  isRowReversed,
  arrayOfProjects,
  isZoomed,
  setIsZoomed,
  zoomedImageSrc,
  setZoomedImageSrc,
  currentImage,
  setCurrentImage,
}) {
  const threshold = arrayOfProjects.length - 1;

  const handleLeftArrowClick = () => {
    setCurrentImage(currentImage - 1 >= 0 ? currentImage - 1 : threshold);
  };

  const handleRightArrowClick = () => {
    setCurrentImage(currentImage + 1 <= threshold ? currentImage + 1 : 0);
  };

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
          isRowReversed={isRowReversed}
          isZoomed={isZoomed}
          setIsZoomed={setIsZoomed}
          zoomedImageSrc={zoomedImageSrc}
          setZoomedImageSrc={setZoomedImageSrc}
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
