import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__upper">
        <div className="footer__social-icons wrapper">
          <a href="https://github.com/IvanMPR" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="3x" className="fab" />
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/ivan-miceta-b74a9821b/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" className="fab" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
