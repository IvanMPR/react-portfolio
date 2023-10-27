import { useProjectsContext } from "../../contexts/ProjectsContext";

function ProjectSubtitleHeading() {
  const { heading } = useProjectsContext();
  return (
    <div className="subtitle-text">
      <p className="subtitle-text__heading">{heading}</p>
    </div>
  );
}

export default ProjectSubtitleHeading;
