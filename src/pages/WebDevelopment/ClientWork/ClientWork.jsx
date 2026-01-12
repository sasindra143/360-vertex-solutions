import { useState, useEffect } from "react";
import "./ClientWork.css";
import fallbackData from "./clientWorkData";

const STORAGE_KEY = "clientWorkProjects";

export default function ClientWork() {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const loadProjects = () => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    setProjects(saved?.length ? saved : fallbackData);
  };

  useEffect(() => {
    loadProjects();
    window.addEventListener("projectsUpdated", loadProjects);
    return () =>
      window.removeEventListener("projectsUpdated", loadProjects);
  }, []);

  const currentMedia = activeProject?.media?.[activeIndex];

  return (
    <section className="cw-section">
      <h2 className="cw-title">
        Client Work & <span>Real Results</span>
      </h2>

      <div className="cw-grid">
        {projects.map((project) => (
          <div className="cw-card" key={project.id}>
            <div
              className="cw-image"
              onClick={() => {
                setActiveProject(project);
                setActiveIndex(0);
              }}
            >
              <img
                src={project.media.find((m) => m.type === "image")?.src}
                alt={project.title}
              />
              <span className="cw-more">+{project.media.length}</span>
            </div>

            <div className="cw-content">
              <h3>{project.title}</h3>

              <ul>
                {project.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              <div className="cw-client-box">
                <img
                  src={project.client.image}
                  alt={project.client.name}
                  className="cw-client-img"
                />
                <div>
                  <p className="cw-client-name">{project.client.name}</p>
                  <p className="cw-client-review">
                    “{project.client.reviewText}”
                  </p>
                </div>
              </div>

              <div className="cw-footer">
                ⭐ {project.rating}
                <a href={project.website} target="_blank" rel="noreferrer">
                  Live Website
                </a>
                <a href={project.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeProject && currentMedia && (
        <div className="cw-modal">
          <button
            className="cw-close"
            onClick={() => setActiveProject(null)}
          >
            ×
          </button>

          {currentMedia.type === "image" ? (
            <img src={currentMedia.src} className="cw-modal-img" />
          ) : (
            <video
              src={currentMedia.src}
              controls
              autoPlay
              className="cw-modal-video"
            />
          )}

          <button
            className="cw-nav left"
            onClick={() =>
              setActiveIndex(
                (activeIndex - 1 + activeProject.media.length) %
                  activeProject.media.length
              )
            }
          >
            ‹
          </button>

          <button
            className="cw-nav right"
            onClick={() =>
              setActiveIndex(
                (activeIndex + 1) % activeProject.media.length
              )
            }
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
