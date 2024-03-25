import { useProjectsContext } from "../../contexts/ProjectsContext";
import ProjectsImage from "./ProjectsImage";

function Project(props) {
  const {
    isZoomed,
    setIsZoomed,
    zoomedImageSrc,
    setZoomedImageSrc,
    currentImage,
  } = useProjectsContext();

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
  } = props.project;

  const { i } = props;

  return (
    <div
      className={`project project-${shortTitle}`}
      style={{ transform: `translateX(${100 * (i - currentImage)}%)` }}
    >
      <div className='project-left'>
        <div className='project-left__image-container wrapper'>
          <ProjectsImage
            imageSrc={imageSrc}
            title={title}
            alt={alt}
            isZoomed={isZoomed}
            setIsZoomed={setIsZoomed}
            zoomedImageSrc={zoomedImageSrc}
            setZoomedImageSrc={setZoomedImageSrc}
          />
        </div>
      </div>
      <div className='project-right'>
        <h3
          className='project-right__title'
          style={{ fontStyle: fullTitle === "this" ? "italic" : "normal" }}
        >
          {fullTitle}
        </h3>
        <div className='project-right__container'>
          <a
            rel='noreferrer'
            target='_blank'
            href={demoHref}
            title={demoTitle}
            className='project-right__container-link project-right__demo'
          >
            Demo
          </a>
          <a
            rel='noreferrer'
            href={codeHref}
            target='_blank'
            title={codeTitle}
            className='project-right__container-link project-right__code'
          >
            Source code
          </a>
        </div>
        <p className='project-right__description'>{description}</p>
      </div>
    </div>
  );
}

export default Project;
