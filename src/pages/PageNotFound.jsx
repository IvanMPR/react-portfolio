import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";

function PageNotFound() {
  return (
    <div className="not-found">
      <p className="not-found__text">
        Page Not Found! Use navigation links to go back to existing content !
      </p>
      <div className="wrapper">
        <FontAwesomeIcon icon={faBan} size="4x" color="var(--color-primary)" />
      </div>
    </div>
  );
}

export default PageNotFound;
