const Hero = () => {
  return (
    <section id="hero" className="section hero">
      <h1>Param Mahajan</h1>

      <h2>
        Engineering the Invisible  
        <br />
        From Circuits to Secure Intelligent Systems
      </h2>

      <a href={`${import.meta.env.BASE_URL}resume.pdf`} download className="resume-top-btn">
        Download Resume
      </a>
    </section>
  );
};

export default Hero;
