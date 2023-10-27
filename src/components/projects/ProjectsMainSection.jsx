import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";

import ProjectsFrame from "./ProjectsFrame";
import SectionTitle from "../miscellaneous/SectionTitle";
import SectionContent from "../miscellaneous/SectionContent";
import ProjectsSubtitle from "./ProjectsSubtitle";

import Modal from "../miscellaneous/Modal";
import Section from "../miscellaneous/Section";

import { useProjectsContext } from "../../contexts/ProjectsContext";

function ProjectsMainSection() {
  const { isZoomed } = useProjectsContext();

  return isZoomed ? (
    <Modal />
  ) : (
    <Section prefix="projects">
      <SectionTitle
        title="Projects"
        icon={
          <FontAwesomeIcon icon={faUserCog} className="section__title--icon" />
        }
      />
      <SectionContent prefix="projects">
        <ProjectsSubtitle />
        <ProjectsFrame />
      </SectionContent>
    </Section>
  );
}

export default ProjectsMainSection;
