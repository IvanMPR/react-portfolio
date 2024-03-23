function ContactForm() {
  return (
    <form
      action='https://formsubmit.co/contact@ivanmiceta.dev'
      method='POST'
      className='form wrapper'
    >
      <input
        type='hidden'
        name='_next'
        value='https://ivanmiceta.dev/gratitude'
      />
      <div className='form__name wrapper form__mini-wrapper'>
        <label className='form__label' htmlFor='name'>
          Name
        </label>
        <input type='text' name='name' required className='form__input' />
      </div>
      <div className='form__email wrapper form__mini-wrapper'>
        <label className='form__label' htmlFor='email'>
          Email
        </label>
        <input type='email' name='email' required className='form__input' />
      </div>

      <div className='form__textarea wrapper form__mini-wrapper'>
        <label className='form__label' htmlFor='textarea'>
          Message
        </label>
        <textarea
          name='message'
          id='text-area-input'
          cols='30'
          rows='6'
          className='form__input'
          required
        ></textarea>
      </div>
      <div className='form__submit-btn'>
        <button type='submit' className='btn__form'>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
