function Modal({ src, setIsZoomed }) {
  function handleZoom() {
    setIsZoomed((prev) => !prev);
  }
  return (
    <div className="modal-container" onClick={handleZoom}>
      <div className="modal__zoom--content add-width">
        <img src={src} alt="" className="zoomed-img" />
      </div>
    </div>
  );
}

export default Modal;
