import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function ContactInfo() {
  return (
    <div className="info wrapper-l">
      <div className="info-div info-phone">
        <FontAwesomeIcon icon={faPhone} className="fa-solid" />
        <div className="info-p">+381638349870</div>
      </div>
      <div className="info-div info-email">
        <FontAwesomeIcon icon={faEnvelope} className="fa-solid" />
        <div className="info-p">ivsanmas@gmail.com</div>
      </div>
      <div className="info-div info-location">
        <FontAwesomeIcon icon={faMapLocationDot} className="fa-solid" />
        <div className="info-p">Belgrade, Serbia</div>
      </div>
    </div>
  );
}

export default ContactInfo;
