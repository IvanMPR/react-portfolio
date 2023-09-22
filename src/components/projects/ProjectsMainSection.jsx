import ProjectsFrame from "./ProjectsFrame";

import { projectsObject } from "../../projects";
import { projectsAdvancedObject } from "../../projectsAdvanced";

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
        <ProjectsFrame arrayOfProjects={projectsObject} isRowReversed={false} />
        <div className="subtitle subtitle__advanced">
          <div className="subtitle-text">
            <p>Level: intermediate to advanced</p>
          </div>
          <div className="subtitle-icon__wrapper">
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
                src="/svg/nodejs.svg"
                alt="NodeJS icon"
                title="NodeJS icon"
                className="tech-icons"
              />
            </div>
            <div className="subtitle-icon">
              <img
                src="/svg/express.svg"
                alt="Node Express icon"
                title="Node Express icon"
                className="tech-icons"
              />
            </div>
            <div className="subtitle-icon">
              <img
                src="/svg/socket-io.svg"
                alt="Socket-io icon"
                title="Socket-io icon"
                className="tech-icons"
              />
            </div>
            <div className="subtitle-icon">
              <img
                src="/svg/parcel.svg"
                alt="Parcel js bundler tool icon"
                title="Parcel js bundler tool icon"
                className="tech-icons"
              />
            </div>
          </div>
        </div>
        <ProjectsFrame
          arrayOfProjects={projectsAdvancedObject}
          isRowReversed={true}
        />
      </div>
    </section>
  );
}

export default ProjectsMainSection;
