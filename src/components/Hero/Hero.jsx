import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.section} id="top">
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            Available for new opportunities
          </span>

          <h1 className={styles.title}>
            Hi, I'm <span className={styles.name}>Warut</span>.
            <br />
            I build software people enjoy using.
          </h1>

          <p className={styles.lede}>
            Full Stack Developer with a robotics background. Over the past few years
            I've worked on insurance portals, IoT interfaces for factories, and
            AI-driven applications — and what I enjoy most is figuring out what the
            data is actually trying to say.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.btnPrimary}>
              Get in touch
            </a>
            <a href="#projects" className={styles.btnSecondary}>
              View projects
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <dl className={styles.stats}>
            <div>
              <dt>Years</dt>
              <dd>3+</dd>
            </div>
            <div>
              <dt>Projects shipped</dt>
              <dd>6+</dd>
            </div>
            <div>
              <dt>skill</dt>
              <dd>Web Development, AI-driven applications, IoT interfaces</dd>
            </div>
          </dl>
        </div>

        <div className={styles.portraitWrap}>
          <div className={styles.portraitFrame}>
            <img
              src={getImageUrl("hero/boom.jpeg")}
              alt="Portrait of Warut Meksawang"
              width="520"
              height="640"
              className={styles.portrait}
            />
          </div>
          <span className={styles.portraitTag} aria-hidden="true">
            <span className={styles.portraitDot} />
            Bangkok, TH
          </span>
        </div>
      </div>
    </section>
  );
};
