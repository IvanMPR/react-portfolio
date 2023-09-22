function ProjectsDot({ dotNum, currentImage, setCurrentImage }) {
  function handleClickOnDot() {
    setCurrentImage(dotNum);
  }

  return (
    <span
      className={`dot ${dotNum === currentImage ? "dot-active" : ""}`}
      onClick={handleClickOnDot}
    ></span>
  );
}

export default ProjectsDot;
