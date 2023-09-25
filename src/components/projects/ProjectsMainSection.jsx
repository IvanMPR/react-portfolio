import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";

import ProjectsFrame from "./ProjectsFrame";
import SectionTitle from "../miscellaneous/SectionTitle";
import SectionContent from "../miscellaneous/SectionContent";
import ProjectsSubtitle from "./ProjectsSubtitle";

import { projectsObject } from "../../projects";
// import { projectsAdvancedObject } from "../../projectsAdvanced";

import { begToIntIcons, intToAdvIcons } from "./icons";
import Modal from "../miscellaneous/Modal";

function ProjectsMainSection() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImageSrc, setZoomedImageSrc] = useState("");

  return isZoomed ? (
    <Modal src={zoomedImageSrc} setIsZoomed={setIsZoomed} />
  ) : (
    <section className="projects-section container" id="projects">
      <SectionTitle
        title="Projects"
        icon={
          <FontAwesomeIcon icon={faUserCog} className="section__title--icon" />
        }
      />

      <SectionContent prefix="projects">
        <ProjectsSubtitle heading={""} iconSet={begToIntIcons} />

        <ProjectsFrame
          arrayOfProjects={projectsObject}
          isRowReversed={"false"}
          isZoomed={isZoomed}
          setIsZoomed={setIsZoomed}
          zoomedImageSrc={zoomedImageSrc}
          setZoomedImageSrc={setZoomedImageSrc}
        />
      </SectionContent>
    </section>
  );
}
export default ProjectsMainSection;
