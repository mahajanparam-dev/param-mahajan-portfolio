import bgImage from "../components/bg.jpg";

const ParticlesBg = () => {
  return (
    <div
      className="background-image"
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>
  );
};

export default ParticlesBg;
