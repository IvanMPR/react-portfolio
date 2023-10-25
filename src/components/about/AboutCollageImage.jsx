function AboutCollageImage({ handleCollageImageZoom }) {
  return (
    <img
      className="collage"
      src="/images/mix.jpg"
      alt="Collage of personal images"
      onClick={handleCollageImageZoom}
    />
  );
}

export default AboutCollageImage;
