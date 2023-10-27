import Nav from "./Nav";
import NavProgress from "./NavProgress";
import NavLeft from "./NavLeft";
import NavMenu from "./NavMenu";
import NavRight from "./NavRight";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <header className="header">
      <Nav>
        <NavLeft />
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
