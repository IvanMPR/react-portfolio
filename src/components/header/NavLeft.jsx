import HeaderThemeToggler from "./HeaderThemeToggler";

function NavLeft({ colorTheme, setColorTheme }) {
  return (
    <div className="nav-left">
      <p className="nav-left__name">Ivan</p>
      <HeaderThemeToggler
        colorTheme={colorTheme}
        setColorTheme={setColorTheme}
      />
    </div>
  );
}

export default NavLeft;
