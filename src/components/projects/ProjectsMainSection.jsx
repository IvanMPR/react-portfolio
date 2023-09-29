import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";

import ProjectsFrame from "./ProjectsFrame";
import SectionTitle from "../miscellaneous/SectionTitle";
import SectionContent from "../miscellaneous/SectionContent";
import ProjectsSubtitle from "./ProjectsSubtitle";

import { projectsObject } from "../../projects";
import { begToIntIcons } from "./icons";

import Modal from "../miscellaneous/Modal";

function ProjectsMainSection() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImageSrc, setZoomedImageSrc] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

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
          isZoomed={isZoomed}
          setIsZoomed={setIsZoomed}
          zoomedImageSrc={zoomedImageSrc}
          setZoomedImageSrc={setZoomedImageSrc}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />
      </SectionContent>
    </section>
  );
}
export default ProjectsMainSection;
