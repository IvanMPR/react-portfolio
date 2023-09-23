import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";

import ProjectsFrame from "./ProjectsFrame";
import SectionTitle from "../miscellaneous/SectionTitle";
import SectionContent from "../miscellaneous/SectionContent";
import ProjectsSubtitle from "./ProjectsSubtitle";

import { projectsObject } from "../../projects";
import { projectsAdvancedObject } from "../../projectsAdvanced";

import { begToIntIcons, intToAdvIcons } from "./icons";

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
        <ProjectsSubtitle
          heading={"Level: beginner to intermediate"}
          iconSet={begToIntIcons}
        />
        <ProjectsFrame
          arrayOfProjects={projectsObject}
          isRowReversed={"false"}
        />

        <ProjectsSubtitle
          heading={"Level: intermediate to advanced"}
          iconSet={intToAdvIcons}
        />
        <ProjectsFrame
          arrayOfProjects={projectsAdvancedObject}
          isRowReversed={"true"}
        />
      </SectionContent>
    </section>
  );
}

export default ProjectsMainSection;
