import { createContext, useContext, useState } from "react";
import { projectsObject as arrayOfProjects } from "../projects";
import { begToIntIcons as iconsSet } from "../components/projects/icons";

const ProjectsContext = createContext();

function ProjectsProvider({ children }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImageSrc, setZoomedImageSrc] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

  const threshold = arrayOfProjects.length - 1;

  const handleLeftArrowClick = () => {
    setCurrentImage(currentImage - 1 >= 0 ? currentImage - 1 : threshold);
  };

  const handleRightArrowClick = () => {
    setCurrentImage(currentImage + 1 <= threshold ? currentImage + 1 : 0);
  };

  function handleZoom(e) {
    setIsZoomed((prev) => !prev);
    setZoomedImageSrc(e.target.src);
  }

  const heading = "";

  return (
    <ProjectsContext.Provider
      value={{
        isZoomed,
        setIsZoomed,
        zoomedImageSrc,
        setZoomedImageSrc,
        currentImage,
        setCurrentImage,
        handleZoom,
        arrayOfProjects,
        threshold,
        handleLeftArrowClick,
        handleRightArrowClick,
        iconsSet,
        heading,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

function useProjectsContext() {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error(
      "useProjectsContext must be used within a ProjectsProvider"
    );
  }
  return context;
}

export { ProjectsProvider, useProjectsContext };
