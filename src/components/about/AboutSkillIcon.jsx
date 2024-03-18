function AboutSkillIcon({ skill }) {
  let src;

  if (skill !== "react") {
    src = `svg/${skill}.svg`;
  } else {
    src = "icons/react.png";
  }

  return (
    <span className='skill-icon'>
      <img
        className='skill-icon-svg'
        src={src}
        title={`${skill} icon`}
        alt={`${skill} icon`}
      />
    </span>
  );
}

export default AboutSkillIcon;
