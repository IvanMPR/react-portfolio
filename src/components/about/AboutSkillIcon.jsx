function AboutSkillIcon({ skill }) {
  let src;

  if (skill !== "react") {
    src = `/svg/${skill}.svg`;
  } else {
    src = "/img/react.png";
  }

  return (
    <span className="skill-icon">
      <img
        className="skill-icon-svg"
        src={`/svg/${skill}.svg`}
        title={`${skill} icon`}
        alt={`${skill} icon`}
      />
    </span>
  );
}

export default AboutSkillIcon;
