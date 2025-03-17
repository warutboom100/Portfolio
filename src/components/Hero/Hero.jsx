import React from 'react'
import styles from './Hero.module.css';
import resumePDF from "../../../assets/Warut_Resume_Software_Developer.pdf";

import { getImageUrl } from "../../utils";
export const Hero = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span style={{color:"#1f2937"}}>
            Hi! I'm
          </span>
          <span className={styles.gradient}>
            {" Warut.M"}
          </span>
        </h1>
        <div class={styles.leading}>
          <p className={styles.description}>
            I'm a developer with 1 year of hands-on experience in full lifecycle software development, passionate about creating seamless user experiences. 
          </p>
          <span className={styles.lamplight}>
            
          </span>
        </div>
        
        <a href={resumePDF} download="Warut_Resume_Software_Developer.pdf" className={styles.contactBtn}>
          Download Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/boom.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
    </section>
  );
}
