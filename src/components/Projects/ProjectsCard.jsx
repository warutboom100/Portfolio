import React from "react";
import styles from "./ProjectsCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project }) => {
  const { title, description, image, link } = project;

  return (
    <article className={styles.card}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        aria-label={`Open project: ${title}`}
      >
        <div className={styles.media}>
          <img
            src={getImageUrl(image)}
            alt={title}
            className={styles.image}
            loading="lazy"
          />
        </div>
        <div className={styles.body}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <span className={styles.cta}>
            View on GitHub
            <span className={styles.arrow} aria-hidden="true">→</span>
          </span>
        </div>
      </a>
    </article>
  );
};
