function ContactMainSection() {
  return (
    <section class="contact-section container" id="contact">
      <div class="background"></div>
      <h2 class="section__title wrapper">
        Say hello <i class="far fa-hand-paper section__title--icon"></i>
      </h2>
      <div class="contact-section__content wrapper-l">
        <div class="info wrapper">
          <div class="info-div info-phone">
            <i class="fa-solid fa-phone"></i>
            <i class="uil uil-phone"></i>
            <div class="info-p">+381638349870</div>
          </div>
          <div class="info-div info-email">
            <i class="uil uil-envelope-alt"></i>
            <i class="fa-solid fa-envelope"></i>
            <div class="info-p">ivsanmas@gmail.com</div>
          </div>
          <div class="info-div info-location">
            <i class="uil uil-map-marker"></i>
            <i class="fa-solid fa-map-location-dot"></i>
            <div class="info-p">Belgrade, Serbia</div>
          </div>
        </div>

        <form
          action="https://formsubmit.co/ivsanmas@gmail.com"
          method="POST"
          class="form wrapper"
        >
          <input
            type="hidden"
            name="_next"
            value="http://localhost:1234/thank-you-page/thanks.html"
          />
          <div class="form__name wrapper form__mini-wrapper">
            <label class="form__label" for="name">
              Name
            </label>
            <input type="text" name="name" required class="form__input" />
          </div>
          <div class="form__email wrapper form__mini-wrapper">
            <label class="form__label" for="email">
              Email
            </label>
            <input type="email" name="email" required class="form__input" />
          </div>

          <div class="form__textarea wrapper form__mini-wrapper">
            <label class="form__label" for="textarea">
              Message
            </label>
            <textarea
              name="message"
              id="text-area-input"
              cols="30"
              rows="7"
              class="form__input"
              required
            ></textarea>
          </div>
          <div class="form__submit-btn wrapper">
            <button type="submit" class="btn__form">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactMainSection;
