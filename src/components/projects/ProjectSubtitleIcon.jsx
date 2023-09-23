function ProjectSubtitleIcon({ icon }) {
  return (
    <div className="subtitle-icon">
      <img
        src={icon.src}
        alt={icon.alt}
        title={icon.title}
        className={icon.className}
      />
    </div>
  );
}

export default ProjectSubtitleIcon;
