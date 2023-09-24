function ProjectsImage({
  imageSrc,
  title,
  alt,
  setIsZoomed,
  setZoomedImageSrc,
}) {
  function handleZoom(e) {
    setIsZoomed((prev) => !prev);
    setZoomedImageSrc(e.target.src);
  }

  return (
    <img
      className="project-left__image"
      src={imageSrc}
      title={title}
      alt={alt}
      onClick={handleZoom}
    />
  );
}

export default ProjectsImage;
