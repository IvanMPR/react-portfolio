import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Nav from "./Nav";
import NavProgress from "./NavProgress";
import NavLeft from "./NavLeft";
import NavMenu from "./NavMenu";
import NavRight from "./NavRight";
import NavLinks from "./NavLinks";

function Header() {
  const [colorTheme, setColorTheme] = useState("default");
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
      <Nav>
        <NavLeft colorTheme={colorTheme} setColorTheme={setColorTheme} />
        <NavMenu />

        <NavRight>
          <NavLinks />
        </NavRight>

        <NavProgress />
      </Nav>
    </header>
  );
}

export default Header;
