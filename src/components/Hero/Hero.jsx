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
            Fullstack developer with one year of hands-on experience across the full
            software lifecycle — from React frontends and FastAPI services to IoT
            and on-device ML. Focused on shipping interfaces that feel calm,
            responsive, and considered.
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
              <dd>1+</dd>
            </div>
            <div>
              <dt>Projects shipped</dt>
              <dd>6+</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>React · FastAPI · Flutter</dd>
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
