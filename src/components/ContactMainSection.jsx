function ContactMainSection() {
  return (
    <section className="contact-section container" id="contact">
      <div className="background"></div>
      <h2 className="section__title wrapper">
        Say hello <i className="far fa-hand-paper section__title--icon"></i>
      </h2>
      <div className="contact-section__content wrapper">
        <div className="info wrapper-l">
          <div className="info-div info-phone">
            <i className="fa-solid fa-phone"></i>
            <div className="info-p">+381638349870</div>
          </div>
          <div className="info-div info-email">
            <i className="uil uil-envelope-alt"></i>
            <i className="fa-solid fa-envelope"></i>
            <div className="info-p">ivsanmas@gmail.com</div>
          </div>
          <div className="info-div info-location">
            <i className="uil uil-map-marker"></i>
            <i className="fa-solid fa-map-location-dot"></i>
            <div className="info-p">Belgrade, Serbia</div>
          </div>
        </div>

        <form
          action="https://formsubmit.co/ivsanmas@gmail.com"
          method="POST"
          className="form wrapper"
        >
          <input
            type="hidden"
            name="_next"
            value="http://localhost:1234/thank-you-page/thanks.html"
          />
          <div className="form__name wrapper form__mini-wrapper">
            <label className="form__label" htmlFor="name">
              Name
            </label>
            <input type="text" name="name" required className="form__input" />
          </div>
          <div className="form__email wrapper form__mini-wrapper">
            <label className="form__label" htmlFor="email">
              Email
            </label>
            <input type="email" name="email" required className="form__input" />
          </div>

          <div className="form__textarea wrapper form__mini-wrapper">
            <label className="form__label" htmlFor="textarea">
              Message
            </label>
            <textarea
              name="message"
              id="text-area-input"
              cols="30"
              rows="7"
              className="form__input"
              required
            ></textarea>
          </div>
          <div className="form__submit-btn">
            <button type="submit" className="btn__form">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactMainSection;
