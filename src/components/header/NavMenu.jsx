import { useHeaderContext } from "../../contexts/HeaderContext";
import TopMenu from "../hamburger-menu/TopMenu";

function NavMenu() {
  const { checked, setChecked } = useHeaderContext();
  return (
    <>
      <div className="nav-menu">
        <input
          type="checkbox"
          className="nav-menu__checkbox"
          id="toggle"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label className="nav-menu__label" htmlFor="toggle">
          <span className="nav-menu__label-bar">&nbsp;</span>
        </label>
      </div>
      {checked && <TopMenu setChecked={setChecked} />}
    </>
  );
}

export default NavMenu;
