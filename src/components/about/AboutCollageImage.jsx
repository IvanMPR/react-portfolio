import { useProjectsContext } from "../../contexts/ProjectsContext";

function AboutCollageImage() {
  const { handleZoom } = useProjectsContext();
  return (
    <img
      className="collage"
      src="/images/mix.jpg"
      alt="Collage of personal images"
      onClick={handleZoom}
    />
  );
}

export default AboutCollageImage;
