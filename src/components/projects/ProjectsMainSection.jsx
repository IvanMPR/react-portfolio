import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";

import ProjectsFrame from "./ProjectsFrame";
import SectionTitle from "../miscellaneous/SectionTitle";
import SectionContent from "../miscellaneous/SectionContent";
import ProjectsSubtitle from "./ProjectsSubtitle";

import { projectsObject } from "../../projects";
import { projectsAdvancedObject } from "../../projectsAdvanced";

function ProjectsMainSection() {
  return (
    <section className="projects-section container" id="projects">
      {/* <div className="background"></div> */}
      <SectionTitle
        title="Projects"
        icon={
          <FontAwesomeIcon icon={faUserCog} className="section__title--icon" />
        }
      />

      <SectionContent prefix="projects">
        <ProjectsSubtitle />

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
      </SectionContent>
    </section>
  );
}

export default ProjectsMainSection;
