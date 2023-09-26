import { Link } from "react-router-dom";

function TopMenuLink({
  onClick,
  path,
  className = "top-menu__a top-menu__links",
}) {
  return (
    <div className="top-menu__link-container">
      <Link
        to={path}
        className={className}
        title={`${path === "/" ? "home" : path} section link`}
        onClick={onClick}
      >
        {path === "/" ? "home" : path}
      </Link>
    </div>
  );
}

export default TopMenuLink;
