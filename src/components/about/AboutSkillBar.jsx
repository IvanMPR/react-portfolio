function AboutSkillBar({ skill, level }) {
  return (
    <div className="skill-bar">
      <div
        className={`skill-bar-inner inner-${skill}`}
        style={{ width: level }}
      ></div>
    </div>
  );
}

export default AboutSkillBar;
