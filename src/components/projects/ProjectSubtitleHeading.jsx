import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function ProjectSubtitleHeading({ heading }) {
  return (
    <div className="subtitle-text">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="subtitle-text__icon"
        size="xl"
      />
      <p className="subtitle-text__heading">{heading}</p>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="subtitle-text__icon"
        size="xl"
      />
    </div>
  );
}

export default ProjectSubtitleHeading;
