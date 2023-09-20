function AboutMainSection() {
  return (
    <section className="about-section container" id="about">
      <h2 className="section__title wrapper">
        About me<i className="fas fa-user-tie section__title--icon"></i>
      </h2>
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
              <p className="left-intro__para">
                Hello and welcome, I'm Ivan Miceta, self taught web developer,
                located in Belgrade, Serbia. In this section you can get
                familiar with my developer skills, resources I used while
                learning and detailed biography.
              </p>
              <p className="left-intro__para">
                In the spring of 2020, I decided to invest time end effort to
                start learning web development. That road was hard, sometimes
                painful, and just one simple thing kept me moving forward.
              </p>
              <p className="left-intro__para">I fell in love with coding.</p>
              <p className="left-intro__para">
                The joy and satisfaction felt when I solved 'FizzBuzz'
                challenge, when my first project appeared 'live' on Github, or
                when I solved first CodeWars 'kata', was overwhelming and
                contagious.
              </p>
              <p className="left-intro__para">
                It superseded, by far, all frustrations, disappointments, doubts
                and obstacles that are present and inevitable when trying to
                learn such a complex and vast topic such as a programming
                language.
              </p>
              <p className="left-intro__para">
                I sincerely hope that after reviewing this portfolio, you will
                find my time well spent and my current skills level adequate for
                your needs. Looking forward to hear from you...
              </p>
            </div>
          </div>
          <div className="about-section__content--right">
            <div className="right-intro__img">
              <img src="./images/blob5fixed.png" alt="test" className="blob2" />
            </div>
          </div>
        </div>
        <div className="about-section__content--pair about-section__content--middle">
          <div className="background"></div>
          <div className="about-section__content--left">
            <h3 className="about-subtitle wrapper-l">Skills & certificates</h3>
            <p className="left-skills__para">
              Rough overview of technologies I'm most comfortable with, along
              with few course certificates from which I initially started
              learning web development.
            </p>
            <div className="left-skills">
              <div className="left-skills__html skills">
                <span className="skill-icon">
                  <img
                    className="skill-icon-svg"
                    src="./images/svg/html5.svg"
                    title="html icon"
                    alt="html icon"
                  />
                </span>
                <div className="skill-bar">
                  <div className="skill-bar-inner inner-html"></div>
                </div>
              </div>
            </div>
            <div className="left-skills">
              <div className="left-skills__css skills">
                <span className="skill-icon">
                  <img
                    className="skill-icon-svg"
                    src="./images/svg/css3.svg"
                    title="css icon"
                    alt="css icon"
                  />
                </span>
                <div className="skill-bar">
                  <div className="skill-bar-inner inner-css"></div>
                </div>
              </div>
            </div>
            <div className="left-skills">
              <div className="left-skills__js skills">
                <span className="skill-icon">
                  <img
                    className="skill-icon-svg"
                    src="./images/svg/js.svg"
                    title="js icon"
                    alt="js icon"
                  />
                </span>
                <div className="skill-bar">
                  <div className="skill-bar-inner inner-js"></div>
                </div>
              </div>
            </div>
            <div className="left-skills">
              <div className="left-skills__sass skills">
                <span className="skill-icon">
                  <img
                    className="skill-icon-svg"
                    src="./images/svg/sass.svg"
                    title="sass icon"
                    alt="sass icon"
                  />
                </span>
                <div className="skill-bar">
                  <div className="skill-bar-inner inner-sass"></div>
                </div>
              </div>
            </div>
            <div class="left-skills">
              <div class="left-skills__react skills">
                <span class="skill-icon">
                  <img
                    class="skill-icon-svg"
                    src="./images/icons/react.png"
                    title="react icon"
                    alt="react icon"
                  />
                </span>
                <div class="skill-bar">
                  <div class="skill-bar-inner inner-react"></div>
                </div>
              </div>
            </div>
            <div class="left-skills">
              <div class="left-skills__nodejs skills">
                <span class="skill-icon">
                  <img
                    class="skill-icon-svg"
                    src="./images/svg/nodejs.svg"
                    title="nodejs icon"
                    alt="nodejs icon"
                  />
                </span>
                <div class="skill-bar">
                  <div class="skill-bar-inner inner-nodejs"></div>
                </div>
              </div>
            </div>
            <div class="left-skills">
              <div class="left-skills__socketio skills">
                <span class="skill-icon">
                  <img
                    class="skill-icon-svg"
                    src="./images/svg/socket-io.svg"
                    title="socket-io icon"
                    alt="socket-io icon"
                  />
                </span>
                <div class="skill-bar">
                  <div class="skill-bar-inner inner-socketio"></div>
                </div>
              </div>
            </div>
            <div class="left-skills">
              <div class="left-skills__express skills">
                <span class="skill-icon">
                  <img
                    class="skill-icon-svg"
                    src="./images/svg/express.svg"
                    title="express icon"
                    alt="express icon"
                  />
                </span>
                <div class="skill-bar">
                  <div class="skill-bar-inner inner-express"></div>
                </div>
              </div>
            </div>
            <div class="left-skills">
              <div class="left-skills__illustrator skills">
                <span class="skill-icon">
                  <img
                    class="skill-icon-svg"
                    src="./images/svg/illustrator.svg"
                    title="illustrator icon"
                    alt="illustrator icon"
                  />
                </span>
                <div class="skill-bar">
                  <div class="skill-bar-inner inner-illustrator"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="about-section__content--right">
            <div class="right-skills container">
              <div class="cert-title">
                <a
                  rel="noopener noreferrer"
                  href="https://www.udemy.com/course/modern-html-css-from-the-beginning/"
                  target="_blank"
                  title="Link to the Modern HTML & CSS course"
                  class="cert-title__link"
                >
                  HTML & CSS
                </a>
              </div>
              <div class="certificate">
                <a
                  rel="noopener noreferrer"
                  class="certificate__link"
                  href="http://ude.my/UC-78309db0-9ec5-4a53-9b4b-8ecadbd8baf2/"
                  target="_blank"
                >
                  <img
                    class="certificate__img"
                    src="https://udemy-certificate.s3.amazonaws.com/image/UC-78309db0-9ec5-4a53-9b4b-8ecadbd8baf2.jpg"
                    alt="HTML & CSS course"
                    title="Click to enlarge certificate"
                  />
                </a>
              </div>
            </div>
            <div class="right-skills container">
              <div class="cert-title">
                <a
                  rel="noopener noreferrer"
                  href="https://www.udemy.com/course/advanced-css-and-sass/"
                  target="_blank"
                  title="Link to the Advanced CSS and Sass course"
                  class="cert-title__link"
                >
                  Advanced SASS & CSS
                </a>
              </div>
              <div class="certificate">
                <a
                  rel="noopener noreferrer"
                  class="certificate__link"
                  href="http://ude.my/UC-78309db0-9ec5-4a53-9b4b-8ecadbd8baf2/"
                  target="_blank"
                >
                  <img
                    class="certificate__img"
                    src="https://udemy-certificate.s3.amazonaws.com/image/UC-78309db0-9ec5-4a53-9b4b-8ecadbd8baf2.jpg"
                    alt="Jonas Shmedtman course"
                    title="Click to enlarge certificate"
                  />
                </a>
              </div>
            </div>
            <div class="right-skills container">
              <div class="cert-title">
                <a
                  rel="noopener noreferrer"
                  href="https://www.udemy.com/course/the-complete-javascript-course/ "
                  target="_blank"
                  title="Link to the JavaScript course"
                  class="cert-title__link"
                >
                  JavaScript
                </a>
              </div>
              <div class="certificate">
                <a
                  class="certificate__link"
                  href="http://ude.my/UC-78309db0-9ec5-4a53-9b4b-8ecadbd8baf2/"
                  target="_blank"
                >
                  <img
                    class="certificate__img"
                    src="https://udemy-certificate.s3.amazonaws.com/image/UC-78309db0-9ec5-4a53-9b4b-8ecadbd8baf2.jpg"
                    alt="Jonas Smedtman course"
                    title="Click to enlarge certificate"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="about-section__content--pair">
          <div class="about-section__content--left">
            <h3 class="about-subtitle wrapper-l">Personal & bio</h3>
            <div class="about__personal">
              <ul class="about__personal--ul">
                <li class="about-li">
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
                <li class="about-li">
                  I was a
                  <a
                    rel="noopener noreferrer"
                    href="http://archive.fiba.com/pages/eng/fa/team/p/sid/2311/tid/390/tid2/307/_/1997_European_Championship_for_Cadets/index.html"
                    target="_blank"
                    title="Link to Fiba archive website"
                  >
                    member
                  </a>
                  of the U16 National team of Yugoslavia, winner of the European
                  Championship in 1997 in Belgium
                </li>
                <li class="about-li">
                  in 2010, after graduating in
                  <a
                    rel="noopener noreferrer"
                    href="https://www.spak.edu.rs/english/"
                    target="_blank"
                    title="Link to Sportsk Akademija"
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

                <li class="about-li">
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
                <li class="about-li">
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
                <li class="about-li">
                  my current position is Phase II Logger, with responsibilities
                  to recognize and organize above mentioned basketball
                  information, and not related to web development
                </li>

                <li class="about-li">
                  from 2007 married to Aleksandra, father of two children,
                  daughter Maša and son Miloš
                </li>
                <li class="about-li">
                  my hobbies are reading, cycling, skiing, snorkeling, swimming,
                  and of course basketball
                </li>
                <li class="about-li">
                  created this portfolio website with intention to present
                  myself in the new environment, and as an important piece of
                  puzzle in the process of the landing my first job in the new
                  industry...
                </li>
              </ul>
            </div>
          </div>
          <div class="about-section__content--right">
            <img
              class="collage"
              src="./images/mix.jpg"
              alt="Collage of personal images"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMainSection;
