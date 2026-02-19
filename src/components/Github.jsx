import { useEffect, useState } from "react";

const Github = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/mahajanparam-dev/repos")
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(repo => !repo.fork);
        setRepos(filtered.slice(0, 6));
      });
  }, []);

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {repos.map(repo => (
          <div key={repo.id} className="glass-card">
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description provided."}</p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Github;
