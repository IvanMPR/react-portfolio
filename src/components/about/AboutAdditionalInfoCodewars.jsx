function AboutAdditionalInfoCodewars() {
  return (
    <div className="additional__info">
      <p className="additional__info--title">
        Worth to mention :<span className="additional__info--span">🤔</span>
      </p>
      <p className="additional__info--para">
        One of the most important places where I spent menu hours in the process
        of learning to code was CodeWars.
      </p>
      <p className="additional__info--para">
        Click on the banner to check my rank and profile there.
      </p>
      <div className="additional__info--link">
        <a
          href="https://www.codewars.com/users/IvanMPR"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="Codewars badge"
            title="Codewars badge"
            src="https://www.codewars.com/users/IvanMPR/badges/small"
          />
        </a>
      </div>
    </div>
  );
}

export default AboutAdditionalInfoCodewars;
