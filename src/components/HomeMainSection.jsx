function HomeMainSection() {
  return (
    <>
      <main class="home container">
        <div class="home__main-h1">
          <h1>
            <span class="home__main-h1--small wrapper">
              Hello, my name is Ivan Miceta
            </span>
            <span class="home__main-h1--big wrapper">
              I'm self taught web developer
            </span>
          </h1>
          <div class="home__main-btn wrapper-l">
            <a href="#contact" class="btn btn__contact">
              Contact me
            </a>
          </div>
        </div>
        <div class="home__main-image">
          <img src="../../public/blob5test.jpg" alt="test" class="main__blob" />
        </div>
      </main>
    </>
  );
}

export default HomeMainSection;
