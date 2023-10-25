import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPaper } from "@fortawesome/free-regular-svg-icons";

import Section from "../miscellaneous/Section";
import SectionTitle from "../miscellaneous/SectionTitle";
import SectionContent from "../miscellaneous/SectionContent";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function ContactMainSection() {
  return (
    <Section prefix="contact">
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
    </Section>
  );
}

export default ContactMainSection;
