const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>Technical Expertise</h2>

      <div className="skills-grid">

        <div className="glass-card">
          <h3>Hardware & Embedded</h3>
          <p>
            Embedded Systems • Digital Electronics • Microcontrollers • PCB Design
          </p>
        </div>

        <div className="glass-card">
          <h3>VLSI & Architecture</h3>
          <p>
            Verilog HDL • RTL Design • Digital Logic • System Architecture
          </p>
        </div>

        <div className="glass-card">
          <h3>Software & Systems</h3>
          <p>
            C / C++ • Python • React • Linux Fundamentals • APIs
          </p>
        </div>

        <div className="glass-card">
          <h3>Security & DevOps</h3>
          <p>
            Secure SDLC • Kubernetes Basics • Open-Source Ecosystems
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
