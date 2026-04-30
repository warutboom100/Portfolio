import React from "react";

import styles from "./Projects.module.css";
import projects from "../../data/project.json";
import { ProjectCard } from "./ProjectsCard";

export const Projects = () => {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Selected Work</span>
          <h2 className={styles.title}>Personal Projects</h2>
          <p className={styles.subtitle}>
            A handful of side projects and product work — each one taught me
            something new.
          </p>
        </header>

        <div className={styles.grid}>
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
