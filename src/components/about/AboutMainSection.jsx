import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

import AboutGeneralParagraph from "./AboutGeneralParagraph";
import SectionTitle from "../miscellaneous/SectionTitle";
import { generalParagraphs, skillsParagraphs } from "./AboutTextContent";
import AboutSkillRow from "./AboutSkillRow";
import AboutSkillIcon from "./AboutSkillIcon";
import AboutSkillBar from "./AboutSkillBar";
import AboutAdditionalInfo from "./AboutAdditionalInfo";
import AboutAdditionalInfoCodewars from "./AboutAdditionalInfoCodewars";
import AboutAdditionalInfoResume from "./AboutAdditionalInfoResume";

function AboutMainSection() {
  return (
    <section className="about-section container" id="about">
      <SectionTitle
        title="About me"
        icon={
          <FontAwesomeIcon icon={faUserTie} className="section__title--icon" />
        }
      />

      <div className="container wrapper btn-wrapper">
        <a href="#" className="btn btn__cv">
          Download CV
        </a>
      </div>
      <div className="about-section__content wrapper">
        <div className="about-section__content--pair">
          <div className="about-section__content--left">
            <h3 className="about-subtitle wrapper-l">General</h3>
            <div className="left-intro wrapper">
              {generalParagraphs.map((para) => (
                <AboutGeneralParagraph key={para.paragraph.slice(0, 5)}>
                  {para.paragraph}
                </AboutGeneralParagraph>
              ))}
            </div>
          </div>
          <div className="about-section__content--right">
            <div className="right-intro__img">
              <img src="/blob5fixed.png" alt="test" className="blob2" />
            </div>
          </div>
        </div>
        <AboutAdditionalInfo>
          <AboutAdditionalInfoCodewars />
        </AboutAdditionalInfo>
        <div className="about-section__content--pair about-section__content--middle">
          <div className="about-section__content--left">
            <h3 className="about-subtitle wrapper-l">Skills & certificates</h3>
            <p className="left-skills__para">
              Rough overview of technologies I'm most comfortable with, along
              with few course certificates from which I initially started
              learning web development.
            </p>

            {skillsParagraphs.map(({ skill, level }) => (
              <div className="left-skills" key={skill}>
                <AboutSkillRow skill={skill}>
                  <AboutSkillIcon skill={skill} />
                  <AboutSkillBar skill={skill} level={level} />
                </AboutSkillRow>
              </div>
            ))}
          </div>

          <div className="about-section__content--right">
            <div className="right-skills container">
              <div className="cert-title">
                <a
                  rel="noopener noreferrer"
                  href="https://www.udemy.com/course/modern-html-css-from-the-beginning/"
                  target="_blank"
                  title="Link to the Modern HTML & CSS course"
                  className="cert-title__link"
                >
                  HTML & CSS
                </a>
              </div>
              <div className="certificate">
                <a
                  rel="noopener noreferrer"
                  className="certificate__link"
                  href="http://ude.my/UC-78309db0-9ec5-4a53-9b4b-8ecadbd8baf2/"
                  target="_blank"
                >
                  <img
                    className="certificate__img"
                    src="https://udemy-certificate.s3.amazonaws.com/image/UC-78309db0-9ec5-4a53-9b4b-8ecadbd8baf2.jpg"
                    alt="HTML & CSS course"
                    title="Click to enlarge certificate"
                  />
                </a>
              </div>
            </div>
            <div className="right-skills container">
              <div className="cert-title">
                <a
                  rel="noopener noreferrer"
                  href="https://www.udemy.com/course/advanced-css-and-sass/"
                  target="_blank"
                  title="Link to the Advanced CSS and Sass course"
                  className="cert-title__link"
                >
                  Advanced SASS & CSS
                </a>
              </div>
              <div className="certificate">
                <a
                  rel="noopener noreferrer"
                  className="certificate__link"
                  href="http://ude.my/UC-78309db0-9ec5-4a53-9b4b-8ecadbd8baf2/"
                  target="_blank"
                >
                  <img
                    className="certificate__img"
                    src="https://udemy-certificate.s3.amazonaws.com/image/UC-78309db0-9ec5-4a53-9b4b-8ecadbd8baf2.jpg"
                    alt="Jonas Shmedtman course"
                    title="Click to enlarge certificate"
                  />
                </a>
              </div>
            </div>
            <div className="right-skills container">
              <div className="cert-title">
                <a
                  rel="noopener noreferrer"
                  href="https://www.udemy.com/course/the-complete-javascript-course/ "
                  target="_blank"
                  title="Link to the JavaScript course"
                  className="cert-title__link"
                >
                  JavaScript
                </a>
              </div>
              <div className="certificate">
                <a
                  rel="noreferrer"
                  className="certificate__link"
                  href="http://ude.my/UC-78309db0-9ec5-4a53-9b4b-8ecadbd8baf2/"
                  target="_blank"
                >
                  <img
                    className="certificate__img"
                    src="https://udemy-certificate.s3.amazonaws.com/image/UC-78309db0-9ec5-4a53-9b4b-8ecadbd8baf2.jpg"
                    alt="Jonas Schmedtman course"
                    title="Click to enlarge certificate"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <AboutAdditionalInfo>
          <AboutAdditionalInfoResume />
        </AboutAdditionalInfo>
        <div className="about-section__content--pair">
          <div className="about-section__content--left">
            <h3 className="about-subtitle wrapper-l">Personal & bio</h3>
            <div className="about__personal">
              <ul className="about__personal--ul">
                <li className="about-li">
                  from 1996 to 2014 I was a professional basketball
                  <a
                    rel="noopener noreferrer"
                    href="https://basketball.eurobasket.com/player/Ivan-Miceta/Romania/BC-CSU-Sibiu/28677"
                    title="Link to EuroBasket profile page"
                    target="_blank"
                  >
                    player
                  </a>
                  in many teams and countries
                </li>
                <li className="about-li">
                  I was a
                  <a
                    rel="noopener noreferrer"
                    href="https://archive.fiba.com/pages/eng/fa/team/p/sid/2311/tid/390/_/1997_European_Championship_for_Cadets/index.html"
                    target="_blank"
                    title="Link to Fiba archive website"
                  >
                    member
                  </a>
                  of the U16 National team of Yugoslavia, winner of the European
                  Championship in 1997 in Belgium
                </li>
                <li className="about-li">
                  in 2010, after graduating in
                  <a
                    rel="noopener noreferrer"
                    href="https://www.spak.edu.rs/english/"
                    target="_blank"
                    title="Link to Sportska Akademija"
                  >
                    Sportska Akademija
                  </a>
                  I acquired the professional title of basketball
                  <a
                    rel="noopener noreferrer"
                    href="https://www.fiba.basketball/wabc/find-a-member"
                    title="Link to FIBA coach license, type Ivan Miceta in search bar"
                    target="_blank"
                  >
                    coach
                  </a>
                  , with associated FIBA license
                </li>

                <li className="about-li">
                  somewhere along the way, I learned to
                  <a
                    rel="noopener noreferrer"
                    href="https://www.shutterstock.com/g/Ivsanmas"
                    target="_blank"
                    title="Link to my Illustrator Portfolio"
                  >
                    work in Adobe Illustrator
                  </a>
                  , as a hobby. I find it very useful now in web development,
                  almost all of the projects I created contains my graphic
                  resources
                </li>
                <li className="about-li">
                  from 2015 I work at
                  <a
                    rel="noopener noreferrer"
                    href="https://synergysports.com/"
                    target="_blank"
                    title="Link to Synergy Sports"
                  >
                    Synergy Sports
                  </a>
                  , an American based company that provides high quality,
                  advanced basketball statistic, game and players analyses
                </li>
                <li className="about-li">
                  my current position is Phase II Logger, with responsibilities
                  to recognize and organize above mentioned basketball
                  information, and not related to web development
                </li>

                <li className="about-li">
                  from 2007 married to Aleksandra, father of two children,
                  daughter Maša and son Miloš
                </li>
                <li className="about-li">
                  my hobbies are reading, cycling, skiing, snorkeling, swimming,
                  and of course basketball
                </li>
                <li className="about-li">
                  created this portfolio website with intention to present
                  myself in the new environment, and as an important piece of
                  puzzle in the process of(establishing myself) the landing my
                  first job in the new industry...
                </li>
              </ul>
            </div>
          </div>
          <div className="about-section__content--right">
            <img
              className="collage"
              src="/mix.jpg"
              alt="Collage of personal images"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMainSection;
