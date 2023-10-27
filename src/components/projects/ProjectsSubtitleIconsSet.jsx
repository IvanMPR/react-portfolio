import { useProjectsContext } from "../../contexts/ProjectsContext";
import ProjectSubtitleIcon from "./ProjectSubtitleIcon";

function ProjectsSubtitleIconsSet() {
  const { iconsSet } = useProjectsContext();
  return (
    <div className="subtitle-icon__wrapper">
      {iconsSet.map((icon, i) => (
        <ProjectSubtitleIcon icon={icon} key={i} />
      ))}
    </div>
  );
}

export default ProjectsSubtitleIconsSet;
