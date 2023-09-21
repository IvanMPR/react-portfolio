import { useEffect, useRef, useState } from "react";
import Project from "./Project";
import ProjectsDotContainer from "./ProjectsDotContainer";

import { projectsObject } from "../../projects";

function ProjectsFrame() {
  const [projectsObj, setProjectsObj] = useState(projectsObject);
  const [currentImage, setCurrentImage] = useState(0);
  // const [projects, setProjects] = useState([]);
  // const threshold = projectsObj.length - 1;
  // const frameRef = useRef(null);

  return (
    <div className="frame">
      <div className="frame-arrow__left">
        <i className="fas fa-chevron-left fa-5x" title="Previous project"></i>
      </div>
      <div className="frame-arrow__right">
        <i className="fas fa-chevron-right fa-5x" title="Next project"></i>
      </div>

      {projectsObj.map((project, i) => (
        <Project key={i} project={project} />
      ))}

      <ProjectsDotContainer
        projectsObj={projectsObj}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        setProjectsObj={setProjectsObj}
      />
    </div>
  );
}

export default ProjectsFrame;

// projects gallery slider manipulation
// ------------------------------------------------------------------- //
// const images = document.querySelectorAll(".project");
// const rightArrow = document.querySelector(".frame-arrow__right");
// const leftArrow = document.querySelector(".frame-arrow__left");
// const dotsContainer = document.querySelector(".dots-container");

// const imagesAdvanced = document.querySelectorAll(".project__advanced");
// const rightArrowAdvanced = document.querySelector(
//   ".frame-arrow__right--advanced"
// );
// const leftArrowAdvanced = document.querySelector(
//   ".frame-arrow__left--advanced"
// );
// const dotsContainerAdvanced = document.querySelector(
//   ".dots-container__advanced"
// );

// const data = {
//   currentImage: 0,
//   currentImageAdvanced: 0,
//   threshold: images.length - 1,
//   thresholdAdvanced: imagesAdvanced.length - 1,
// };

// function goToImage(projectsArray, imageNum) {
//   projectsArray.forEach(
//     (img, i) => (img.style.transform = `translateX(${100 * (i - imageNum)}%`)
//   );
// }
// goToImage(images, 0);
// goToImage(imagesAdvanced, 0);

//  create dots under projects container
// function createDots(projectsArray, dotType, dotsContainerName) {
//   projectsArray.forEach((_, i) => {
//     const html = `<span class="${dotType}" data-image="${i}"></span>`;
//     dotsContainerName.insertAdjacentHTML("beforeend", html);
//   });
// }
// createDots(images, "dot", dotsContainer);
// createDots(imagesAdvanced, "dot__advanced", dotsContainerAdvanced);

// Add active class to current dot
// function activateDot(currSlide, dotType) {
//   document
//     .querySelectorAll(`.${dotType}`)
//     .forEach((dot) => dot.classList.remove("dot-active"));
//   document
//     .querySelector(`.${dotType}[data-image="${currSlide}"]`)
//     .classList.add("dot-active");
// }
// activateDot(0, "dot");
// activateDot(0, "dot__advanced");

// function moveRight(e) {
//   if (!e.target.classList.contains("right-advanced")) {
//     data.currentImage === data.threshold
//       ? (data.currentImage = 0)
//       : data.currentImage++;
//     activateDot(data.currentImage, "dot");
//     goToImage(images, data.currentImage);
//   } else {
//     data.currentImageAdvanced === data.thresholdAdvanced
//       ? (data.currentImageAdvanced = 0)
//       : data.currentImageAdvanced++;
//     activateDot(data.currentImageAdvanced, "dot__advanced");
//     goToImage(imagesAdvanced, data.currentImageAdvanced);
//   }
// }

// function moveLeft(e) {
//   if (!e.target.classList.contains("left-advanced")) {
//     data.currentImage === 0
//       ? (data.currentImage = data.threshold)
//       : data.currentImage--;
//     activateDot(data.currentImage, "dot");
//     goToImage(images, data.currentImage);
//   } else {
//     data.currentImageAdvanced === 0
//       ? (data.currentImageAdvanced = data.thresholdAdvanced)
//       : data.currentImageAdvanced--;
//     activateDot(data.currentImageAdvanced, "dot__advanced");
//     goToImage(imagesAdvanced, data.currentImageAdvanced);
//   }
// }

// browse trough projects
// rightArrow.addEventListener("click", moveRight);
// rightArrowAdvanced.addEventListener("click", moveRight);
// leftArrow.addEventListener("click", moveLeft);
// leftArrowAdvanced.addEventListener("click", moveLeft);
// // go to specific project by clicking on the dot REFACTOR
// dotsContainer.addEventListener("click", function (e) {
//   if (!e.target.classList.contains("dot")) return;
//   const imgNumber = e.target.dataset.image;
//   data.currentImage = Number(imgNumber);
//   activateDot(imgNumber, "dot");
//   goToImage(images, imgNumber);
// });
