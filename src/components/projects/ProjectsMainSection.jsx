import Project from "./Project";
import ProjectsFrame from "./ProjectsFrame";

function ProjectsMainSection() {
  return (
    <section className="projects-section container" id="projects">
      <div className="background"></div>
      <h2 className="section__title wrapper">
        Projects <i className="fas fa-user-cog section__title--icon"></i>
      </h2>
      <div className="projects-section__content wrapper">
        <div className="subtitle">
          <div className="subtitle-text">
            <p>Level: beginner to intermediate</p>
          </div>
          <div className="subtitle-icon__wrapper">
            <div className="subtitle-icon">
              <img
                src="/svg/html5.svg"
                alt="HTML5 icon"
                title="HTML5 icon"
                className="tech-icons"
              />
            </div>
            <div className="subtitle-icon">
              <img
                src="/svg/css3.svg"
                alt="CSS3 icon"
                title="CSS3 icon"
                className="tech-icons"
              />
            </div>
            <div className="subtitle-icon">
              <img
                src="/svg/js.svg"
                alt="JavaScript icon"
                title="JavaScript icon"
                className="tech-icons"
              />
            </div>
            <div className="subtitle-icon">
              <img
                src="/icons/react.png"
                alt="React icon"
                title="React icon"
                className="tech-icons"
              />
            </div>
            <div className="subtitle-icon">
              <img
                src="/svg/sass.svg"
                alt="SASS icon"
                title="SASS icon"
                className="tech-icons"
              />
            </div>
            <div className="subtitle-icon">
              <img
                src="/svg/illustrator.svg"
                alt="Illustrator icon"
                title="Illustrator icon"
                className="tech-icons"
              />
            </div>
          </div>
        </div>
        <ProjectsFrame />
      </div>
    </section>
  );
}

export default ProjectsMainSection;
