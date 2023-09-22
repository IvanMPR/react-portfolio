import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function HeaderThemeToggler({ colorTheme, setColorTheme }) {
  return (
    <div className="nav-left__toggler">
      {colorTheme === "default" && (
        <FontAwesomeIcon
          icon={faMoon}
          title="Click for dark mode"
          onClick={() => setColorTheme("dark")}
        />
      )}

      {colorTheme === "dark" && (
        <FontAwesomeIcon
          icon={faSun}
          title="Click for dark mode"
          onClick={() => setColorTheme("default")}
        />
      )}
    </div>
  );
}

export default HeaderThemeToggler;
