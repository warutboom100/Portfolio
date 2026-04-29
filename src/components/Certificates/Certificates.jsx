import React from "react";
import styles from "./Certificates.module.css";
import { getImageUrl } from "../../utils";

const CERTIFICATES = [
  {
    id: 1,
    title: "Artificial Intelligence A-Z 2025: Agentic AI, Gen AI, and RL",
    organization: "Udemy",
    date: "March 2025",
    credentialId: "UC-bedab21c-5fb5-418b-9956-3be3b3f6c14d",
    image: "projects/udemy.jpg",
    skills: ["DQN", "LLM", "A3C", "PPO-SAC", "CNN"],
  },
  {
    id: 2,
    title: "2nd World Conference on Information Systems for Business Management",
    organization: "ISBM-Bangkok 2023",
    date: "September 2023",
    credentialId: "—",
    image: "projects/ISBM2023.jpeg",
    skills: ["IoT", "Web Application", "Mobile Application"],
  },
];

const Certificates = () => {
  return (
    <section className={styles.section} id="certificates">
      <div className={styles.inner}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Credentials</span>
          <h2 className={styles.title}>Certificates & publications</h2>
          <p className={styles.subtitle}>
            Coursework and conference papers I'm particularly proud of.
          </p>
        </header>

        <div className={styles.grid}>
          {CERTIFICATES.map((cert) => (
            <article key={cert.id} className={styles.card}>
              <div className={styles.media}>
                <img
                  src={getImageUrl(cert.image)}
                  alt={cert.title}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.body}>
                <p className={styles.org}>
                  <span>{cert.organization}</span>
                  <span className={styles.dot} aria-hidden="true">·</span>
                  <span>{cert.date}</span>
                </p>
                <h3 className={styles.cardTitle}>{cert.title}</h3>
                <ul className={styles.skills}>
                  {cert.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                <p className={styles.credId}>ID: {cert.credentialId}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
