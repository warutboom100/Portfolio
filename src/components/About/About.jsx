import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import history from "../../data/history.json";

export const About = () => {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.inner}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Experience</span>
          <h2 className={styles.title}>Where I've worked</h2>
          <p className={styles.subtitle}>
            A short timeline of the teams and projects I've shipped with.
          </p>
        </header>

        <ol className={styles.timeline}>
          {history.map((entry) => (
            <li key={entry.id} className={styles.entry}>
              <span className={styles.markerCol} aria-hidden="true">
                <span className={styles.marker} />
                <span className={styles.line} />
              </span>

              <article className={styles.card}>
                <div className={styles.cardHead}>
                  <div className={styles.who}>
                    <span className={styles.logo}>
                      {entry.image && (
                        <img
                          src={getImageUrl(entry.image)}
                          alt=""
                          aria-hidden="true"
                        />
                      )}
                    </span>
                    <div>
                      <h3 className={styles.role}>{entry.position}</h3>
                      <p className={styles.company}>{entry.name}</p>
                    </div>
                  </div>
                  <span className={styles.date}>{entry.Date}</span>
                </div>

                <ul className={styles.bullets}>
                  {entry.text.map((line, idx) => (
                    <li key={idx}>{line.replace(/^-\s*/, "")}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
