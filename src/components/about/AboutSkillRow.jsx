function AboutSkillRow({ skill, children }) {
  return <div className={`left-skills__${skill} skills`}>{children}</div>;
}

export default AboutSkillRow;
