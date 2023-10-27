import { useProjectsContext } from "../../contexts/ProjectsContext";

function Modal() {
  const { zoomedImageSrc, handleZoom } = useProjectsContext();

  return (
    <div className="modal__container" onClick={handleZoom}>
      <div className="modal__zoom--content add-width">
        <img
          src={zoomedImageSrc}
          alt=""
          className={`${
            zoomedImageSrc.endsWith("mix.jpg")
              ? "zoomed-img-collage"
              : "zoomed-img"
          }`}
        />
      </div>
    </div>
  );
}

export default Modal;
