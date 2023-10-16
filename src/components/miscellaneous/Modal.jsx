function Modal({ src, setIsZoomed }) {
  function handleZoom() {
    setIsZoomed((prev) => !prev);
  }
  return (
    <div className="modal__container" onClick={handleZoom}>
      <div className="modal__zoom--content add-width">
        <img
          src={src}
          alt=""
          className={`${
            src.endsWith("mix.jpg") ? "zoomed-img-collage" : "zoomed-img"
          }`}
        />
      </div>
    </div>
  );
}

export default Modal;
