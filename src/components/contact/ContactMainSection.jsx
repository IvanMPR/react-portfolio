import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPaper } from "@fortawesome/free-regular-svg-icons";

import SectionTitle from "../miscellaneous/SectionTitle";
import SectionContent from "../miscellaneous/SectionContent";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function ContactMainSection() {
  return (
    <section className="contact-section container" id="contact">
      <SectionTitle
        title="Contact"
        icon={
          <FontAwesomeIcon
            icon={faHandPaper}
            className="section__title--icon"
          />
        }
      />
      <SectionContent prefix="contact">
        <ContactInfo />
        <ContactForm />
      </SectionContent>
    </section>
  );
}

export default ContactMainSection;
