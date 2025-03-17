import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/project.json";
import { ProjectCard } from "./ProjectsCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>MY PROJECTS</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};