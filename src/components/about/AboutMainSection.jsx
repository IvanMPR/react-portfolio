import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

import AboutGeneralParagraph from "./AboutGeneralParagraph";
import SectionTitle from "../miscellaneous/SectionTitle";
import AboutSkillRow from "./AboutSkillRow";
import AboutSkillIcon from "./AboutSkillIcon";
import AboutSkillBar from "./AboutSkillBar";
import AboutAdditionalInfo from "./AboutAdditionalInfo";
import AboutAdditionalInfoCodewars from "./AboutAdditionalInfoCodewars";
import AboutAdditionalInfoResume from "./AboutAdditionalInfoResume";
import AboutContentPair from "./AboutContentPair";
import AboutContentPairLeft from "./AboutContentPairLeft";
import AboutContentPairRight from "./AboutContentPairRight";
import AboutContentSubtitle from "./AboutContentSubtitle";
import AboutContentPairLeftPara from "./AboutContentPairLeftPara";
import AboutDownloadCVButton from "./AboutDownloadCVButton";
import Modal from "../miscellaneous/Modal";

import { generalParagraphs, skillsParagraphs } from "./AboutTextContent";
import AboutContentPairRightCertificates from "./AboutContentPairRightCertificates";
import SectionContent from "../miscellaneous/SectionContent";
import AboutPersonal from "./AboutPersonal";

function AboutMainSection() {
  const [isCollageZoomed, setIsCollageZoomed] = useState(false);

  function handleCollageImageZoom() {
    setIsCollageZoomed((prev) => !prev);
  }
  return isCollageZoomed ? (
    <Modal src="/images/mix.jpg" setIsZoomed={setIsCollageZoomed} />
  ) : (
    <section className="about-section container" id="about">
      <SectionTitle
        title="About me"
        icon={
          <FontAwesomeIcon icon={faUserTie} className="section__title--icon" />
        }
      />

      <AboutDownloadCVButton />
      <SectionContent prefix="about">
        <AboutContentPair>
          <AboutContentPairLeft>
            <AboutContentSubtitle text="General" />
            <div className="left-intro wrapper">
              {generalParagraphs.map((para) => (
                <AboutGeneralParagraph key={para.paragraph.slice(0, 5)}>
                  {para.paragraph}
                </AboutGeneralParagraph>
              ))}
            </div>
          </AboutContentPairLeft>
          <AboutContentPairRight>
            <div className="right-intro__img">
              <img src="/images/blob5fixed.png" alt="test" className="blob2" />
            </div>
          </AboutContentPairRight>
        </AboutContentPair>
        <AboutAdditionalInfo>
          <AboutAdditionalInfoCodewars />
        </AboutAdditionalInfo>
        <AboutContentPair additionalClass="about-section__content--middle">
          <AboutContentPairLeft>
            <AboutContentSubtitle text="Skills & certificates" />
            <AboutContentPairLeftPara />

            {skillsParagraphs.map(({ skill, level }) => (
              <div className="left-skills" key={skill}>
                <AboutSkillRow skill={skill}>
                  <AboutSkillIcon skill={skill} />
                  <AboutSkillBar skill={skill} level={level} />
                </AboutSkillRow>
              </div>
            ))}
          </AboutContentPairLeft>

          <AboutContentPairRight>
            <AboutContentPairRightCertificates />
          </AboutContentPairRight>
        </AboutContentPair>
        <AboutAdditionalInfo>
          <AboutAdditionalInfoResume />
        </AboutAdditionalInfo>
        <AboutContentPair>
          <AboutContentPairLeft>
            <AboutContentSubtitle text="Personal & bio" />
            <AboutPersonal />
          </AboutContentPairLeft>
          <AboutContentPairRight>
            <img
              className="collage"
              src="/images/mix.jpg"
              alt="Collage of personal images"
              onClick={handleCollageImageZoom}
            />
          </AboutContentPairRight>
        </AboutContentPair>
      </SectionContent>
    </section>
  );
}

export default AboutMainSection;
