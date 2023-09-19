function ProjectsMainSection() {
  return (
    <section class="projects-section container" id="projects">
      <div class="background"></div>
      <h2 class="section__title wrapper">
        Projects <i class="fas fa-user-cog section__title--icon"></i>
      </h2>
      <div class="projects-section__content wrapper">
        <div class="subtitle">
          <div class="subtitle-text">
            <p>Level: beginner to intermediate</p>
            {/* <h4>Level: beginner to intermediate</h4> */}
          </div>
          <div class="subtitle-icon__wrapper">
            <div class="subtitle-icon">
              <img
                src="../../public/svg/html5.svg"
                alt="HTML5 icon"
                title="HTML5 icon"
                class="tech-icons"
              />
            </div>
            <div class="subtitle-icon">
              <img
                src="../../public/svg/css3.svg"
                alt="CSS3 icon"
                title="CSS3 icon"
                class="tech-icons"
              />
            </div>
            <div class="subtitle-icon">
              <img
                src="../../public/svg/js.svg"
                alt="JavaScript icon"
                title="JavaScript icon"
                class="tech-icons"
              />
            </div>
            <div class="subtitle-icon">
              <img
                src="../../public/svg/react.svg"
                alt="React icon"
                title="React icon"
                class="tech-icons"
              />
            </div>
            <div class="subtitle-icon">
              <img
                src="../../public/svg/sass.svg"
                alt="SASS icon"
                title="SASS icon"
                class="tech-icons"
              />
            </div>
            <div class="subtitle-icon">
              <img
                src="../../public/svg/illustrator.svg"
                alt="Illustrator icon"
                title="Illustrator icon"
                class="tech-icons"
              />
            </div>
          </div>
        </div>
        <div class="frame">
          <div class="frame-arrow__left">
            <i class="fas fa-chevron-left fa-5x" title="Previous project"></i>
          </div>
          <div class="frame-arrow__right">
            <i class="fas fa-chevron-right fa-5x" title="Next project"></i>
          </div>

          <div class="project project-shootout">
            <div class="project-left">
              <div class="project-left__image-container wrapper">
                <img
                  class="project-left__image"
                  src="./images/shooting.jpg"
                  title="Click to zoom the image"
                />
              </div>
            </div>
            <div class="project-right">
              <h3 class="project-right__title">Shootout game</h3>
              <div class="project-right__container">
                <a
                  href="https://ivanmpr.github.io/Whack-a-Mole/"
                  target="_blank"
                  title="Link to live demo page"
                  class="project-right__container-link project-right__demo"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/IvanMPR/Whack-a-Mole"
                  target="_blank"
                  title="Link to source code page"
                  class="project-right__container-link project-right__code"
                >
                  Source code
                </a>
              </div>
              <p class="project-right__description">
                Click on the Start button, and after short music intro, targets
                will appear randomly on their spots. Earned points depends on
                your precision. 'Green' circle is 'Bullseye', and it brings 12
                points...
              </p>
            </div>
          </div>

          <div class="project project-quizz">
            <div class="project-left">
              <div class="project-left__image-container wrapper">
                <img
                  class="project-left__image"
                  src="./images/flags.jpg"
                  title="Click to zoom the image"
                />
              </div>
            </div>
            <div class="project-right">
              <h3 class="project-right__title">Guess the Flag Quiz</h3>
              <div class="project-right__container">
                <a
                  href="https://ivanmpr.github.io/Guess-the-Flag-FV/"
                  target="_blank"
                  title="Link to live demo page"
                  class="project-right__container-link project-right__demo"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/IvanMPR/Guess-the-Flag-FV"
                  target="_blank"
                  title="Link to source code page"
                  class="project-right__container-link project-right__code"
                >
                  Source code
                </a>
              </div>
              <p class="project-right__description">
                This is a fun quiz app where you can learn almost every flag
                that is used in the world today! You can play in three different
                languages...
              </p>
            </div>
          </div>

          <div class="project project-europe">
            <div class="project-left">
              <div class="project-left__image-container wrapper">
                <img
                  class="project-left__image"
                  src="./images/map.jpg"
                  title="Click to zoom the image"
                />
              </div>
            </div>
            <div class="project-right">
              <h3 class="project-right__title">European countries</h3>
              <div class="project-right__container">
                <a
                  href="https://ivanmpr.github.io/Europe-Map-Project/"
                  target="_blank"
                  title="Link to live demo page"
                  class="project-right__container-link project-right__demo"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/IvanMPR/Europe-Map-Project"
                  target="_blank"
                  title="Link to source code page"
                  class="project-right__container-link project-right__code"
                >
                  Source code
                </a>
              </div>
              <p class="project-right__description">
                Click on the random country in the map of Europe and you will
                get all basic data about that state in the container on the left
                side of the screen...
              </p>
            </div>
          </div>

          <div class="project project-weather">
            <div class="project-left">
              <div class="project-left__image-container wrapper">
                <img
                  class="project-left__image"
                  src="./images/weather.jpg"
                  title="Click to zoom the image"
                />
              </div>
            </div>
            <div class="project-right">
              <h3 class="project-right__title">Weather app</h3>
              <div class="project-right__container">
                <a
                  href="https://ivanmpr.github.io/Weather-app/"
                  target="_blank"
                  title="Link to live demo page"
                  class="project-right__container-link project-right__demo"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/IvanMPR/Weather-app"
                  target="_blank"
                  title="Link to source code page"
                  class="project-right__container-link project-right__code"
                >
                  Source code
                </a>
              </div>
              <p class="project-right__description">
                Weather app is responsive, and works behind the scene with two
                third party API-s...
              </p>
            </div>
          </div>

          <div class="project project-calculator">
            <div class="project-left">
              <div class="project-left__image-container wrapper">
                <img
                  class="project-left__image"
                  src="./images/calculator.jpg"
                  title="Click to zoom the image"
                />
              </div>
            </div>
            <div class="project-right">
              <h3 class="project-right__title">JS Calculator</h3>
              <div class="project-right__container">
                <a
                  href="https://ivanmpr.github.io/Calculator/"
                  target="_blank"
                  title="Link to live demo page"
                  class="project-right__container-link project-right__demo"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/IvanMPR/Calculator"
                  target="_blank"
                  title="Link to source code page"
                  class="project-right__container-link project-right__code"
                >
                  Source code
                </a>
              </div>
              <p class="project-right__description">
                One of the JavaScript classics, calculator with button sounds
              </p>
            </div>
          </div>
          <div class="project project-counter">
            <div class="project-left">
              <div class="project-left__image-container wrapper">
                <img
                  class="project-left__image"
                  src="./images/react-counter.jpg"
                  title="Click to zoom the image"
                />
              </div>
            </div>
            <div class="project-right">
              <h3 class="project-right__title">React counter</h3>
              <div class="project-right__container">
                <a
                  href="https://ivanmpr.github.io/react-counter/"
                  target="_blank"
                  title="Link to live demo page"
                  class="project-right__container-link project-right__demo"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/IvanMPR/react-counter/tree/master"
                  target="_blank"
                  title="Link to source code page"
                  class="project-right__container-link project-right__code"
                >
                  Source code
                </a>
              </div>
              <p class="project-right__description">
                Starting slowly with React...
              </p>
            </div>
          </div>
          <div class="project project-bfs">
            <div class="project-left">
              <div class="project-left__image-container wrapper">
                <img
                  class="project-left__image"
                  src="./images/bfs.jpg"
                  title="Click to zoom the image"
                />
              </div>
            </div>
            <div class="project-right">
              <h3 class="project-right__title">BFS Algorithm</h3>
              <div class="project-right__container">
                <a
                  href="https://ivanmpr.github.io/BFS/"
                  target="_blank"
                  title="Link to live demo page"
                  class="project-right__container-link project-right__demo"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/IvanMPR/BFS/"
                  target="_blank"
                  title="Link to source code page"
                  class="project-right__container-link project-right__code"
                >
                  Source code
                </a>
              </div>
              <p class="project-right__description">
                App for visualizing the Breadth First Search algorithm. Double
                click on the empty field to make wall - Double click on the wall
                to clear it - Drag/drop start/end field to desired location
              </p>
            </div>
          </div>

          <div class="project project-hangman">
            <div class="project-left">
              <div class="project-left__image-container wrapper">
                <img
                  class="project-left__image"
                  src="./images/hangman.jpg"
                  title="Click to zoom the image"
                />
              </div>
            </div>
            <div class="project-right">
              <h3 class="project-right__title">Hangman Game</h3>
              <div class="project-right__container">
                <a
                  href="https://ivanmpr.github.io/Hangman-game/"
                  target="_blank"
                  title="Link to live demo page"
                  class="project-right__container-link project-right__demo"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/IvanMPR/Hangman-game/"
                  target="_blank"
                  title="Link to source code page"
                  class="project-right__container-link project-right__code"
                >
                  Source code
                </a>
              </div>
              <p class="project-right__description">
                Hangman game project, guess the hidden country, before you run
                out of limbs...
              </p>
            </div>
          </div>
          <div class="project project-budget">
            <div class="project-left">
              <div class="project-left__image-container wrapper">
                <img
                  class="project-left__image"
                  src="./images/budget.jpg"
                  title="Click to zoom the image"
                />
              </div>
            </div>
            <div class="project-right">
              <h3 class="project-right__title">Budget Tracker MVC</h3>
              <div class="project-right__container">
                <a
                  href="https://ivanmpr.github.io/Budget-Tracker-MVC/"
                  target="_blank"
                  title="Link to live demo page"
                  class="project-right__container-link project-right__demo"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/IvanMPR/Budget-Tracker-MVC/"
                  target="_blank"
                  title="Link to source code page"
                  class="project-right__container-link project-right__code"
                >
                  Source code
                </a>
              </div>
              <p class="project-right__description">
                CRUD app, Budget tracker, created in MVC pattern. Total
                percentage of expenses is added, and editing entries is improved
                compared to older version I made...
              </p>
            </div>
          </div>
          <div class="dots-container"></div>
        </div>
        <div class="subtitle subtitle__advanced">
          <div class="subtitle-text">
            <p>Level: intermediate to advanced</p>
          </div>
          <div class="subtitle-icon__wrapper">
            <div class="subtitle-icon">
              <img
                src="./images/svg/js.svg"
                alt="JavaScript icon"
                title="JavaScript icon"
                class="tech-icons"
              />
            </div>
            <div class="subtitle-icon">
              <img
                src="./images/svg/nodejs.svg"
                alt="NodeJS icon"
                title="NodeJS icon"
                class="tech-icons"
              />
            </div>
            <div class="subtitle-icon">
              <img
                src="./images/svg/express.svg"
                alt="Node Express icon"
                title="Node Express icon"
                class="tech-icons"
              />
            </div>
            <div class="subtitle-icon">
              <img
                src="./images/svg/socket-io.svg"
                alt="Socket-io icon"
                title="Socket-io icon"
                class="tech-icons"
              />
            </div>
            <div class="subtitle-icon">
              <img
                src="./images/svg/parcel.svg"
                alt="Parcel js bundler tool icon"
                title="Parcel js bundler tool icon"
                class="tech-icons"
              />
            </div>
          </div>
        </div>
        <div class="frame__advanced">
          <div class="background"></div>

          <div class="frame-arrow__left--advanced">
            <i
              class="fas fa-chevron-left fa-5x left-advanced"
              title="Previous project"
            ></i>
          </div>
          <div class="frame-arrow__right--advanced">
            <i
              class="fas fa-chevron-right fa-5x right-advanced"
              title="Next project"
            ></i>
          </div>

          <div class="project__advanced project__advanced--lines">
            <div class="project-left__advanced">
              <div class="project-left__image-container--advanced wrapper">
                <img
                  class="project-left__image--advanced"
                  src="./images/lines.jpg"
                  title="Click to zoom the image"
                />
              </div>
            </div>
            <div class="project-right__advanced">
              <h3 class="project-right__title--advanced">Lines game</h3>
              <div class="project-right__container--advanced">
                <a
                  href="https://ivanmpr.github.io/Lines-FULL/"
                  target="_blank"
                  title="Link to live demo page"
                  class="project-right__container-link--advanced project-right__demo--advanced"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/IvanMPR/Lines-FULL"
                  target="_blank"
                  title="Link to source code page"
                  class="project-right__container-link--advanced project-right__code--advanced"
                >
                  Source code
                </a>
              </div>
              <p class="project-right__description--advanced">
                BFS algo. Make a line of 5 or more consecutive balls of the same
                color (in a row, column or diagonally), in order to clear them
                of the board and earn points...
              </p>
            </div>
          </div>

          <div class="project__advanced project__advanced--chatter">
            <div class="project-left__advanced">
              <div class="project-left__image-container--advanced wrapper">
                <img
                  class="project-left__image--advanced"
                  src="./images/chatter.jpg"
                  title="Click to zoom the image"
                />
              </div>
            </div>
            <div class="project-right__advanced">
              <h3 class="project-right__title--advanced">Chatter app</h3>
              <div class="project-right__container--advanced">
                <a
                  href="https://chatter-app-cb20.onrender.com"
                  target="_blank"
                  title="Link to live demo page"
                  class="project-right__container-link--advanced project-right__demo--advanced"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/IvanMPR/chatter-app"
                  target="_blank"
                  title="Link to source code page"
                  class="project-right__container-link--advanced project-right__code--advanced"
                >
                  Source code
                </a>
              </div>
              <p class="project-right__description--advanced">
                Real time chat application, first project created using NodeJS,
                Express and Socket.io. Deployed on Render.com
              </p>
            </div>
          </div>
          <div class="project__advanced project__advanced--tic-tac-toe">
            <div class="project-left__advanced">
              <div class="project-left__image-container--advanced wrapper">
                <img
                  class="project-left__image--advanced"
                  src="./images/tic-tac-toe.jpg"
                  title="Click to zoom the image"
                />
              </div>
            </div>
            <div class="project-right__advanced">
              <h3 class="project-right__title--advanced">Tic Tac Toe</h3>
              <div class="project-right__container--advanced">
                <a
                  href="https://tic-tac-toe-online-multiplayer-game.onrender.com"
                  target="_blank"
                  title="Link to live demo page"
                  class="project-right__container-link--advanced project-right__demo--advanced"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/IvanMPR/tic-tac-toe"
                  target="_blank"
                  title="Link to source code page"
                  class="project-right__container-link--advanced project-right__code--advanced"
                >
                  Source code
                </a>
              </div>
              <p class="project-right__description--advanced">
                Online multiplayer game of Tic Tac Toe, created using NodeJS,
                Express and Socket.io. Deployed on Render.com.
              </p>
            </div>
          </div>
          <div class="project__advanced project__advanced--memory">
            <div class="project-left__advanced">
              <div class="project-left__image-container--advanced wrapper">
                <img
                  class="project-left__image--advanced"
                  src="./images/memory-online.jpg"
                  title="Click to zoom the image"
                />
              </div>
            </div>
            <div class="project-right__advanced">
              <h3 class="project-right__title--advanced">Memory Multiplayer</h3>
              <div class="project-right__container--advanced">
                <a
                  href="https://multiplayer-memory-game.onrender.com"
                  target="_blank"
                  title="Link to live demo page"
                  class="project-right__container-link--advanced project-right__demo--advanced"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/IvanMPR/Memory-multiplayer"
                  target="_blank"
                  title="Link to source code page"
                  class="project-right__container-link--advanced project-right__code--advanced"
                >
                  Source code
                </a>
              </div>
              <p class="project-right__description--advanced">
                Online two player Memory Game, created using NodeJS, Express and
                Socket.io. Deployed on Render.com.
              </p>
            </div>
          </div>

          <div class="dots-container__advanced"></div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsMainSection;
