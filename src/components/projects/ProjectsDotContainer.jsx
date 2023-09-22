import ProjectsDot from "./ProjectsDot";

function ProjectsDotContainer({
  arrayOfProjects,
  currentImage,
  setCurrentImage,
}) {
  return (
    <div className="dots-container">
      {arrayOfProjects.map((_, i) => (
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
