import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills & Expertise</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
