import React from "react";

function AboutDownloadCVButton() {
  return (
    <div className='container wrapper btn-wrapper'>
      <a href='/CV.pdf' download className='btn btn__cv'>
        Download CV
      </a>
    </div>
  );
}

export default AboutDownloadCVButton;
