import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <ul className="nav-right__ul">
      <li className="nav-right__link-container">
        <NavLink to="/" className="nav-right__link nav-right__link--home">
          <span className="nav-right__link-ordinal">01</span>home
        </NavLink>
      </li>
      <li className="nav-right__link-container">
        <NavLink
          to="/projects"
          className="nav-right__link nav-right__link--projects"
        >
          <span className="nav-right__link-ordinal">02</span>projects
        </NavLink>
      </li>
      <li className="nav-right__link-container">
        <NavLink to="/about" className="nav-right__link nav-right__link--about">
          <span className="nav-right__link-ordinal">03</span>about
        </NavLink>
      </li>
      <li className="nav-right__link-container">
        <NavLink
          to="/contact"
          className="nav-right__link nav-right__link--contact"
        >
          <span className="nav-right__link-ordinal">04</span>contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
