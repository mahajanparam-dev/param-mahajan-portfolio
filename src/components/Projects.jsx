import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/mahajanparam-dev/repos?sort=updated")
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(repo => !repo.fork).slice(0, 6);
        setRepos(filtered);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="cards">
        {repos.map(repo => (
          <div key={repo.id} className="card">
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description provided."}</p>
            <span className="language">{repo.language}</span>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-btn">
              View Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
