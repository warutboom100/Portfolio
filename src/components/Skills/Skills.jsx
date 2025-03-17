import React from "react";

import styles from "./Skills.module.css";
import skills from "../../data/frontskills.json";
import skills1 from "../../data/backskills.json";
import skills2 from "../../data/otherskills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <div className={styles.skillsContainer}>
          <div className={`${styles.skillsRow} ${styles.scrollLeftAnimation}`}>
            {/* Double the skills to create a seamless loop */}
            {[...skills, ...skills].map((skill, id) => (
              <div key={`front-${id}`} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.skillsContainer}>
          <div className={`${styles.skillsRow} ${styles.scrollRightAnimation}`}>
            {[...skills1, ...skills1].map((skill, id) => (
              <div key={`back-${id}`} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.skillsContainer}>
          <div className={`${styles.skillsRow} ${styles.scrollLeftAnimation}`}>
            {[...skills2, ...skills2].map((skill, id) => (
              <div key={`back-${id}`} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};