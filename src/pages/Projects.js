import { useState, useEffect } from "react";
import "./Projects.css";

function Projects(props) {
  const [projects, setProjects] = useState([]);

  const getProjectsData = async () => {
    const response = await fetch("./projects.json");
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  return (
    <div className="projects-all">
      <div className="projects-title-container">
        <h1 className="projects">Projects</h1>
      </div>
      <div className="divider">
        <hr class="rounded" />
      </div>
      <div className="project-all-container">
        {projects.map((project) => {
          return (
            <div className="project-container">
              <img className="project-image" src={project.image} />
              <div className="project-info">
                <h1 className="project-name">{project.name}</h1>
                <p className="project-about">{project.about}</p>
                <div className="button-container">
                  <a href={project.git}>
                    <button className="button">Github</button>
                  </a>
                  <a href={project.live}>
                    <button className="button">Website</button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
