import ProjectSubtitleIcon from "./ProjectSubtitleIcon";

function ProjectsSubtitleIconsSet({ iconSet }) {
  return (
    <div className="subtitle-icon__wrapper">
      {iconSet.map((icon, i) => (
        <ProjectSubtitleIcon icon={icon} key={i} />
      ))}
    </div>
  );
}

export default ProjectsSubtitleIconsSet;
