import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Nav from "./Nav";
import NavProgress from "./NavProgress";
import NavLeft from "./NavLeft";
import NavMenu from "./NavMenu";
import NavRight from "./NavRight";
import NavLinks from "./NavLinks";

function Header({ colorTheme, setColorTheme }) {
  const [checked, setChecked] = useState(false);

  const location = useLocation();

  useEffect(() => {
    document.title = `Ivan's Portfolio | ${
      !location.pathname.slice(1)
        ? "Home"
        : location.pathname.slice(1, 2).toUpperCase() +
          location.pathname.slice(2)
    }`;
  }, [location]);

  return (
    <header className="header">
      <Nav checked={checked} setChecked={setChecked}>
        <NavLeft colorTheme={colorTheme} setColorTheme={setColorTheme} />
        <NavMenu checked={checked} setChecked={setChecked} />

        <NavRight>
          <NavLinks />
        </NavRight>

        <NavProgress />
      </Nav>
    </header>
  );
}

export default Header;
