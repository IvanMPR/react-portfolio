import React from "react";

function ProjectsDot({ dotNum, currentImage, setCurrentImage }) {
  console.log(dotNum, currentImage);

  function handleClickOnDot() {
    setCurrentImage((prev) => ({ ...prev, currentImage: dotNum }));
  }

  return (
    <span
      className={`dot ${
        dotNum === currentImage.currentImage ? "dot-active" : ""
      }`}
      onClick={handleClickOnDot}
    ></span>
  );
}

export default ProjectsDot;
