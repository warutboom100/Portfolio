import React from "react";
import styles from "./ProjectsCard.module.css";
import { getImageUrl } from "../../utils";
export const ProjectCard = ({ project }) => {
  const { title, description, image, link } = project;
  
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={getImageUrl(image)} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <a href={link} target="_blank" className={styles.learnMoreButton}>
        View More <span className={styles.arrow}>→</span>
      </a>
    </div>
  );
};