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
import Section from "../miscellaneous/Section";
import SectionContent from "../miscellaneous/SectionContent";
import AboutPersonal from "./AboutPersonal";
import AboutCollageImage from "./AboutCollageImage";
import AboutBlobImage from "./AboutBlobImage";
import { useProjectsContext } from "../../contexts/ProjectsContext";

function AboutMainSection() {
  const { isZoomed } = useProjectsContext();

  return isZoomed ? (
    <Modal />
  ) : (
    <Section prefix='about'>
      <SectionTitle
        title='About me'
        icon={
          <FontAwesomeIcon icon={faUserTie} className='section__title--icon' />
        }
      />

      <AboutDownloadCVButton />
      <SectionContent prefix='about'>
        <AboutContentPair>
          <AboutContentPairLeft>
            <AboutContentSubtitle text='General' />
            <div className='left-intro wrapper'>
              {generalParagraphs.map(para => (
                <AboutGeneralParagraph key={para.paragraph.slice(0, 5)}>
                  {para.paragraph}
                </AboutGeneralParagraph>
              ))}
            </div>
          </AboutContentPairLeft>
          <AboutContentPairRight>
            <AboutBlobImage />
          </AboutContentPairRight>
        </AboutContentPair>
        <AboutAdditionalInfo>
          <AboutAdditionalInfoResume />
        </AboutAdditionalInfo>
        <AboutContentPair additionalClass='about-section__content--middle'>
          <AboutContentPairLeft>
            <AboutContentSubtitle text='Skills & certificates' />
            <AboutContentPairLeftPara />

            {skillsParagraphs.map(({ skill, level }) => (
              <div className='left-skills' key={skill}>
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
          <AboutAdditionalInfoCodewars />
        </AboutAdditionalInfo>
        <AboutContentPair>
          <AboutContentPairLeft>
            <AboutContentSubtitle text='Personal & bio' />
            <AboutPersonal />
          </AboutContentPairLeft>
          <AboutContentPairRight>
            <AboutCollageImage />
          </AboutContentPairRight>
        </AboutContentPair>
      </SectionContent>
    </Section>
  );
}

export default AboutMainSection;
