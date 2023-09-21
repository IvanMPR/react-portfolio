import { useState } from "react";
import TopMenu from "../hamburger-menu/topmenu";
function NavMenu() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className="nav-menu">
        <input
          type="checkbox"
          className="nav-menu__checkbox"
          id="toggle"
          value={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label className="nav-menu__label" htmlFor="toggle">
          <span className="nav-menu__label-bar">&nbsp;</span>
        </label>
      </div>
      {checked && <TopMenu />}
    </>
  );
}

export default NavMenu;
