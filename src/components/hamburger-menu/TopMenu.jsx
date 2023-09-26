import TopMenuLink from "./TopMenuLink";

const paths = ["/", "projects", "about", "contact"];

function TopMenu({ setChecked, path }) {
  return (
    <div className="top-menu">
      {paths.map((route) => (
        <TopMenuLink
          key={route}
          path={route}
          title={path}
          onClick={() => setChecked(false)}
        />
      ))}
    </div>
  );
}

export default TopMenu;
