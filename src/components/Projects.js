import React from "react";
import "../presentations/Projects.css"; // Import the CSS file

function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with a focus on security and performance.",
      technologies: "React, Redux Toolkit, Java, Spring Boot,MySql",
      link: "https://github.com/Harish24-2021/E-commerce-app",
    },
 
  ];

  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies">
              <strong>Technologies:</strong> {project.technologies}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
