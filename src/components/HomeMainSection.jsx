function HomeMainSection() {
  return (
    <>
      <main className="home container">
        <div className="home__main-h1">
          <h1>
            <span className="home__main-h1--small wrapper">
              Hello, my name is Ivan Miceta
            </span>
            <span className="home__main-h1--big wrapper">
              I'm self taught web developer
            </span>
          </h1>
          <div className="home__main-btn wrapper-l">
            <a href="#contact" className="btn btn__contact">
              Contact me
            </a>
          </div>
        </div>
        <div className="home__main-image">
          <img
            src="../../public/blob5test.jpg"
            alt="test"
            className="main__blob"
          />
        </div>
      </main>
    </>
  );
}

export default HomeMainSection;
