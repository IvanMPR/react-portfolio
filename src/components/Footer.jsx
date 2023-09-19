function Footer() {
  return (
    <footer class="footer container footer__home">
      <div class="footer__upper">
        <div class="footer__social-icons wrapper">
          <a href="https://github.com/IvanMPR" target="_blank">
            <i
              class="fab fa-github fa-3x"
              title="Link to my GitHub profile"
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ivan-miceta-b74a9821b/"
            target="_blank"
          >
            <i
              class="fab fa-linkedin fa-3x"
              title="Link to my LinkedIn profile"
            ></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCVcSOSEFwBWzihRkBjzkdig/videos"
            target="_blank"
          >
            <i
              class="fab fa-youtube fa-3x"
              title="Link to my YouTube channel"
            ></i>
          </a>
        </div>

        <div class="footer__codewars wrapper">
          <a href="https://www.codewars.com/users/IvanMPR" target="_blank">
            {/* <img
              src="https://www.codewars.com/users/IvanMPR/badges/micro"
              title="Codewars rank and link to my profile"
              alt="Codewars badge"
            /> */}
            <img
              width="60%"
              src="../../public/cwars-primary.png"
              alt="Codewars badge"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
