import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import history from "../../data/history.json";
export const About = () => {
  

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>WORK EXPERIENCE</h2>
      <div className={styles.testimonialGrid}>
        {history.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <div className={styles.testimonialHead}>
              <div className={styles.testimonialHeader}>
                <img 
                  src={getImageUrl(testimonial.image)} 
                  alt={testimonial.name}
                  className={styles.testimonialImage} 
                />
                <div className={styles.testimonialMeta}>
                  <h3 className={styles.testimonialName}>{testimonial.name}</h3>
                  <p className={styles.testimonialPosition}>{testimonial.position}</p>
                </div>
              </div>
              <h3 className={styles.testimonialDate}>{testimonial.Date}</h3>
            </div>
            
            <div className={styles.testimonialText}>
              {testimonial.text.map((textItem, index) => (
                <p key={index} className={styles.testimonialLine}>{textItem}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};