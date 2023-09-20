import ProjectsDot from "./ProjectsDot";

function ProjectsDotContainer({ projects, currentImage, setCurrentImage }) {
  // state for all projects

  return (
    <div className="dots-container">
      {projects.map((_, i) => (
        <ProjectsDot
          key={i}
          dotNum={i}
          setCurrentImage={setCurrentImage}
          currentImage={currentImage}
        />
      ))}
    </div>
  );
}

export default ProjectsDotContainer;

// const images = document.querySelectorAll(".project");
// //   const rightArrow = document.querySelector(".frame-arrow__right");
// //   const leftArrow = document.querySelector(".frame-arrow__left");
// //   const dotsContainer = document.querySelector(".dots-container");

// const data = {
//   currentImage: 0,
//   currentImageAdvanced: 0,
//   threshold: images.length - 1,
//   // thresholdAdvanced: imagesAdvanced.length - 1,
// };

// function goToImage(projectsArray, imageNum) {
//   projectsArray.forEach(
//     (img, i) => (img.style.transform = `translateX(${100 * (i - imageNum)}%`)
//   );
// }
// goToImage(images, 0);
// //  goToImage(imagesAdvanced, 0);

// //  create dots under projects container
// function createDots(projectsArray, dotType, dotsContainerName) {
//   projectsArray.forEach((_, i) => {
//     const html = `<span class="${dotType}" data-image="${i}"></span>`;
//     dotsContainerName.insertAdjacentHTML("beforeend", html);
//   });
// }
// createDots(images, "dot", dotsContainer);
// //  createDots(imagesAdvanced, 'dot__advanced', dotsContainerAdvanced);

// // Add active class to current dot
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
