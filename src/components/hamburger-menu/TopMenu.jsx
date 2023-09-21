import { Link } from "react-router-dom";

function TopMenu() {
  return (
    <div class="top-menu">
      <div class="top-menu__link-container">
        <Link
          to="/"
          className="top-menu__a top-menu__links"
          title="Home section link"
        >
          home
        </Link>
      </div>
      <div class="top-menu__link-container">
        <Link
          to="/projects"
          className="top-menu__a top-menu__links"
          title="Projects section link"
        >
          projects
        </Link>
      </div>
      <div class="top-menu__link-container">
        <Link
          to="/about"
          className="top-menu__a top-menu__links"
          title="About section link"
        >
          about
        </Link>
      </div>
      <div class="top-menu__link-container">
        <Link
          to="/contact"
          className="top-menu__a top-menu__links"
          title="Contact section link"
        >
          contact
        </Link>
      </div>
    </div>
  );
}

export default TopMenu;
