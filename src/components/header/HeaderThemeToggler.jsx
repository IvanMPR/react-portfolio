function HeaderThemeToggler({ colorTheme, setColorTheme }) {
  return (
    <div className="nav-left__toggler">
      {colorTheme === "default" && (
        <i
          className="fa-solid fa-moon"
          title="Dark mode"
          onClick={() => setColorTheme("dark")}
        ></i>
      )}

      {colorTheme === "dark" && (
        <i
          className="fa-solid fa-sun"
          title="Light mode"
          onClick={() => setColorTheme("default")}
        ></i>
      )}
    </div>
  );
}

export default HeaderThemeToggler;
