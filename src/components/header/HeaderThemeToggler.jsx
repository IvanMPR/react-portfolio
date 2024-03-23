import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { useAppContext } from "../../contexts/AppContext";

function HeaderThemeToggler() {
  const { colorTheme, setColorTheme } = useAppContext();

  return (
    <div className='nav-left__toggler'>
      {colorTheme === "default" && (
        <FontAwesomeIcon
          icon={faMoon}
          title='Click for dark theme'
          onClick={() => setColorTheme("dark")}
        />
      )}

      {colorTheme === "dark" && (
        <FontAwesomeIcon
          icon={faSun}
          title='Click for light theme'
          onClick={() => setColorTheme("default")}
        />
      )}
    </div>
  );
}

export default HeaderThemeToggler;
