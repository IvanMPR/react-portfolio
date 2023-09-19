import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav-left">
          <p className="nav-left__name">Ivan</p>
          <div className="nav-left__toggler">
            <i className="fa-solid fa-moon" title="Dark mode"></i>
            <i className="fa-solid fa-sun" title="Light mode"></i>
          </div>
        </div>
        <div className="nav-menu">
          <input type="checkbox" className="nav-menu__checkbox" id="toggle" />
          <label className="nav-menu__label" for="toggle">
            <span className="nav-menu__label-bar">&nbsp;</span>
          </label>
        </div>
        <div className="nav-right">
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
              <NavLink
                to="/about"
                className="nav-right__link nav-right__link--about"
              >
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
        </div>
        <div className="nav-progress"></div>
      </nav>
    </header>
  );
}

export default Header;
