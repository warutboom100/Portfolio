import React from "react";

import styles from "./Skills.module.css";
import frontSkills from "../../data/frontskills.json";
import backSkills from "../../data/backskills.json";
import otherSkills from "../../data/otherskills.json";
import { getImageUrl } from "../../utils";

const CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Building responsive, accessible interfaces.",
    items: frontSkills,
  },
  {
    id: "backend",
    label: "Backend",
    description: "APIs, data, auth and the glue in between.",
    items: backSkills,
  },
  {
    id: "tools",
    label: "Tools & Cloud",
    description: "Cloud, containers, hardware and ML tooling.",
    items: otherSkills,
  },
];

export const Skills = () => {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Toolbox</span>
          <h2 className={styles.title}>Things I build with</h2>
          <p className={styles.subtitle}>
            A pragmatic mix of frameworks, runtimes and platforms I reach for
            on most days.
          </p>
        </header>

        <div className={styles.grid}>
          {CATEGORIES.map((cat) => (
            <article key={cat.id} className={styles.card}>
              <div className={styles.cardHead}>
                <h3 className={styles.cardTitle}>{cat.label}</h3>
                <p className={styles.cardDesc}>{cat.description}</p>
              </div>

              <ul className={styles.skillList}>
                {cat.items.map((skill) => (
                  <li key={skill.title} className={styles.skill}>
                    <span className={styles.skillIcon}>
                      <img
                        src={getImageUrl(skill.imageSrc)}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                      />
                    </span>
                    <span>{skill.title}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
