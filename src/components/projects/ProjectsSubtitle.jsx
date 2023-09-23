import ProjectSubtitleHeading from "./ProjectSubtitleHeading";
import ProjectsSubtitleIconsSet from "./ProjectsSubtitleIconsSet";

function ProjectsSubtitle({ heading, iconSet }) {
  return (
    <div className="subtitle">
      <ProjectSubtitleHeading heading={heading} />
      <ProjectsSubtitleIconsSet iconSet={iconSet} />
    </div>
  );
}

export default ProjectsSubtitle;
