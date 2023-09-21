function ProjectsDot({ dotNum, currentImage, setCurrentImage }) {
  console.log(dotNum, currentImage);

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
