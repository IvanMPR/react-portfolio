function Project(props) {
  const {
    shortTitle,
    imageSrc,
    title = "Click to zoom the image",
    alt,
    fullTitle,
    demoHref,
    demoTitle = "Link to live demo page",
    codeHref,
    codeTitle = "Link to source code page",
    description,
    projectNum,
  } = props.project;

  return (
    <div
      className={`project project-${shortTitle}`}
      style={{ transform: `translateX(${100 * projectNum}%)` }}
    >
      <div className="project-left">
        <div className="project-left__image-container wrapper">
          <img
            className="project-left__image"
            src={imageSrc}
            title={title}
            alt={alt}
          />
        </div>
      </div>
      <div className="project-right">
        <h3 className="project-right__title">{fullTitle}</h3>
        <div className="project-right__container">
          <a
            rel="noreferrer"
            target="_blank"
            href={demoHref}
            title={demoTitle}
            className="project-right__container-link project-right__demo"
          >
            Demo
          </a>
          <a
            rel="noreferrer"
            href={codeHref}
            target="_blank"
            title={codeTitle}
            className="project-right__container-link project-right__code"
          >
            Source code
          </a>
        </div>
        <p className="project-right__description">{description}</p>
      </div>
    </div>
  );
}

export default Project;
