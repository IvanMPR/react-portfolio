import Project from "./Project";
import ProjectsFrame from "./ProjectsFrame";

function ProjectsMainSection() {
  return (
    <section className="projects-section container" id="projects">
      <div className="background"></div>
      <h2 className="section__title wrapper">
        Projects <i className="fas fa-user-cog section__title--icon"></i>
      </h2>
      <div className="projects-section__content wrapper">
        <div className="subtitle">
          <div className="subtitle-text">
            <p>Level: beginner to intermediate</p>
          </div>
          <div className="subtitle-icon__wrapper">
            <div className="subtitle-icon">
              <img
                src="/svg/html5.svg"
                alt="HTML5 icon"
                title="HTML5 icon"
                className="tech-icons"
              />
            </div>
            <div className="subtitle-icon">
              <img
                src="/svg/css3.svg"
                alt="CSS3 icon"
                title="CSS3 icon"
                className="tech-icons"
              />
            </div>
            <div className="subtitle-icon">
              <img
                src="/svg/js.svg"
                alt="JavaScript icon"
                title="JavaScript icon"
                className="tech-icons"
              />
            </div>
            <div className="subtitle-icon">
              <img
                src="/icons/react.png"
                alt="React icon"
                title="React icon"
                className="tech-icons"
              />
            </div>
            <div className="subtitle-icon">
              <img
                src="/svg/sass.svg"
                alt="SASS icon"
                title="SASS icon"
                className="tech-icons"
              />
            </div>
            <div className="subtitle-icon">
              <img
                src="/svg/illustrator.svg"
                alt="Illustrator icon"
                title="Illustrator icon"
                className="tech-icons"
              />
            </div>
          </div>
        </div>
        <ProjectsFrame />

        <div className="subtitle subtitle__advanced">
          <div className="subtitle-text">
            <p>Level: intermediate to advanced</p>
          </div>
          <div className="subtitle-icon__wrapper">
            <div className="subtitle-icon">
              <img
                src="./images/svg/js.svg"
                alt="JavaScript icon"
                title="JavaScript icon"
                className="tech-icons"
              />
            </div>
            <div className="subtitle-icon">
              <img
                src="./images/svg/nodejs.svg"
                alt="NodeJS icon"
                title="NodeJS icon"
                className="tech-icons"
              />
            </div>
            <div className="subtitle-icon">
              <img
                src="./images/svg/express.svg"
                alt="Node Express icon"
                title="Node Express icon"
                className="tech-icons"
              />
            </div>
            <div className="subtitle-icon">
              <img
                src="./images/svg/socket-io.svg"
                alt="Socket-io icon"
                title="Socket-io icon"
                className="tech-icons"
              />
            </div>
            <div className="subtitle-icon">
              <img
                src="./images/svg/parcel.svg"
                alt="Parcel js bundler tool icon"
                title="Parcel js bundler tool icon"
                className="tech-icons"
              />
            </div>
          </div>
        </div>
        <div className="frame__advanced">
          <div className="background"></div>

          <div className="frame-arrow__left--advanced">
            <i
              className="fas fa-chevron-left fa-5x left-advanced"
              title="Previous project"
            ></i>
          </div>
          <div className="frame-arrow__right--advanced">
            <i
              className="fas fa-chevron-right fa-5x right-advanced"
              title="Next project"
            ></i>
          </div>

          <div className="project__advanced project__advanced--lines">
            <div className="project-left__advanced">
              <div className="project-left__image-container--advanced wrapper">
                <img
                  rel="noreferrer"
                  className="project-left__image--advanced"
                  src="./images/lines.jpg"
                  title="Click to zoom the image"
                  alt="Lines game"
                />
              </div>
            </div>
            <div className="project-right__advanced">
              <h3 className="project-right__title--advanced">Lines game</h3>
              <div className="project-right__container--advanced">
                <a
                  rel="noreferrer"
                  href="https://ivanmpr.github.io/Lines-FULL/"
                  target="_blank"
                  title="Link to live demo page"
                  className="project-right__container-link--advanced project-right__demo--advanced"
                >
                  Demo
                </a>
                <a
                  rel="noreferrer"
                  href="https://github.com/IvanMPR/Lines-FULL"
                  target="_blank"
                  title="Link to source code page"
                  className="project-right__container-link--advanced project-right__code--advanced"
                >
                  Source code
                </a>
              </div>
              <p className="project-right__description--advanced">
                BFS algo. Make a line of 5 or more consecutive balls of the same
                color (in a row, column or diagonally), in order to clear them
                of the board and earn points...
              </p>
            </div>
          </div>

          <div className="project__advanced project__advanced--chatter">
            <div className="project-left__advanced">
              <div className="project-left__image-container--advanced wrapper">
                <img
                  rel="noreferrer"
                  className="project-left__image--advanced"
                  src="./images/chatter.jpg"
                  title="Click to zoom the image"
                  alt="Chatter app"
                />
              </div>
            </div>
            <div className="project-right__advanced">
              <h3 className="project-right__title--advanced">Chatter app</h3>
              <div className="project-right__container--advanced">
                <a
                  rel="noreferrer"
                  href="https://chatter-app-cb20.onrender.com"
                  target="_blank"
                  title="Link to live demo page"
                  className="project-right__container-link--advanced project-right__demo--advanced"
                >
                  Demo
                </a>
                <a
                  rel="noreferrer"
                  href="https://github.com/IvanMPR/chatter-app"
                  target="_blank"
                  title="Link to source code page"
                  className="project-right__container-link--advanced project-right__code--advanced"
                >
                  Source code
                </a>
              </div>
              <p className="project-right__description--advanced">
                Real time chat application, first project created using NodeJS,
                Express and Socket.io. Deployed on Render.com
              </p>
            </div>
          </div>
          <div className="project__advanced project__advanced--tic-tac-toe">
            <div className="project-left__advanced">
              <div className="project-left__image-container--advanced wrapper">
                <img
                  rel="noreferrer"
                  className="project-left__image--advanced"
                  src="./images/tic-tac-toe.jpg"
                  title="Click to zoom the image"
                  alt="Tic Tac Toe game"
                />
              </div>
            </div>
            <div className="project-right__advanced">
              <h3 className="project-right__title--advanced">Tic Tac Toe</h3>
              <div className="project-right__container--advanced">
                <a
                  rel="noreferrer"
                  href="https://tic-tac-toe-online-multiplayer-game.onrender.com"
                  target="_blank"
                  title="Link to live demo page"
                  className="project-right__container-link--advanced project-right__demo--advanced"
                >
                  Demo
                </a>
                <a
                  rel="noreferrer"
                  href="https://github.com/IvanMPR/tic-tac-toe"
                  target="_blank"
                  title="Link to source code page"
                  className="project-right__container-link--advanced project-right__code--advanced"
                >
                  Source code
                </a>
              </div>
              <p className="project-right__description--advanced">
                Online multiplayer game of Tic Tac Toe, created using NodeJS,
                Express and Socket.io. Deployed on Render.com.
              </p>
            </div>
          </div>
          <div className="project__advanced project__advanced--memory">
            <div className="project-left__advanced">
              <div className="project-left__image-container--advanced wrapper">
                <img
                  className="project-left__image--advanced"
                  src="./images/memory-online.jpg"
                  title="Click to zoom the image"
                  alt="Memory Multiplayer game"
                />
              </div>
            </div>
            <div className="project-right__advanced">
              <h3 className="project-right__title--advanced">
                Memory Multiplayer
              </h3>
              <div className="project-right__container--advanced">
                <a
                  rel="noreferrer"
                  href="https://multiplayer-memory-game.onrender.com"
                  target="_blank"
                  title="Link to live demo page"
                  className="project-right__container-link--advanced project-right__demo--advanced"
                >
                  Demo
                </a>
                <a
                  rel="noreferrer"
                  href="https://github.com/IvanMPR/Memory-multiplayer"
                  target="_blank"
                  title="Link to source code page"
                  className="project-right__container-link--advanced project-right__code--advanced"
                >
                  Source code
                </a>
              </div>
              <p className="project-right__description--advanced">
                Online two player Memory Game, created using NodeJS, Express and
                Socket.io. Deployed on Render.com.
              </p>
            </div>
          </div>

          <div className="dots-container__advanced"></div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsMainSection;
