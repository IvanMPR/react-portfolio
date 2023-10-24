function AboutContentPair({ children, additionalClass = "" }) {
  return (
    <div className={`about-section__content--pair ${additionalClass}`}>
      {children}
    </div>
  );
}

export default AboutContentPair;
