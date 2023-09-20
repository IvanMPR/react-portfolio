function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__upper">
        <div className="footer__social-icons wrapper">
          <a href="https://github.com/IvanMPR" target="_blank" rel="noreferrer">
            <i
              className="fab fa-github fa-3x"
              title="Link to my GitHub profile"
            ></i>
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/ivan-miceta-b74a9821b/"
            target="_blank"
          >
            <i
              className="fab fa-linkedin fa-3x"
              title="Link to my LinkedIn profile"
            ></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
