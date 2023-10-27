import { useProjectsContext } from "../../contexts/ProjectsContext";
import ProjectsDot from "./ProjectsDot";

function ProjectsDotContainer() {
  const { currentImage, setCurrentImage, arrayOfProjects } =
    useProjectsContext();
  return (
    <div className="dots-container">
      {arrayOfProjects.map((_, i) => (
        <ProjectsDot
          key={i}
          dotNum={i}
          setCurrentImage={setCurrentImage}
          currentImage={currentImage}
        />
      ))}
    </div>
  );
}

export default ProjectsDotContainer;
