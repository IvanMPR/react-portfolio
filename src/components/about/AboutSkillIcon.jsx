function AboutSkillIcon({ skill }) {
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
