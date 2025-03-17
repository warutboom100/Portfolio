import React, { useState } from 'react';
import styles from "./Certificates.module.css";
import { getImageUrl } from "../../utils";
const Certificates = () => {
  const [activeCertificate, setActiveCertificate] = useState(0);
  
  const certificates = [
    {
      id: 1,
      title: "Artificial Intelligence A-Z 2025: Agentic AI, Gen AI, and RL",
      organization: "Udemy",
      date: "March 2025",
      credentialId: "UC-bedab21c-5fb5-418b-9956-3be3b3f6c14d",
      image: "projects/udemy.jpg", // Replace with your certificate image path
      skills: ["DQN", "LLM", "A3C", "PPO-SAC","CNN"]
    },
    {
      id: 2,
      title: "2rd World Conference on Information Systems for Business Management",
      organization: "ISBM-Bangkok 2023",
      date: "September 2023",
      credentialId: "---",
      image: "projects/ISBM2023.jpeg", // Replace with your certificate image path
      skills: ["IoT", "Web Application", "Mobile Application"]
    }
  ];

  return (
    <section className={styles.container} id="certificates">
      <h2 className={styles.title}>CERTIFICATES</h2>
      
      <div className={styles.certificatesWrapper}>
        <div className={styles.certificateDisplay}>
          <div className={styles.certificateCard}>
            <div className={styles.certificateImageContainer}>
              <img 
                src={getImageUrl(certificates[activeCertificate].image)} 
                alt={certificates[activeCertificate].title} 
                className={styles.certificateImage}
              />
              <div className={styles.certificateOverlay}>
                <span className={styles.viewCertificate}>Click to Enlarge</span>
              </div>
            </div>
            <div className={styles.certificateInfo}>
              <h3 className={styles.certificateTitle}>{certificates[activeCertificate].title}</h3>
              <p className={styles.certificateOrg}>{certificates[activeCertificate].organization}</p>
              <p className={styles.certificateDate}>{certificates[activeCertificate].date}</p>
              <p className={styles.certificateId}>Credential ID: {certificates[activeCertificate].credentialId}</p>
              
              <div className={styles.skillsContainer}>
                {certificates[activeCertificate].skills.map((skill, index) => (
                  <span key={index} className={styles.skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.certificateThumbnails}>
          {certificates.map((cert, index) => (
            <div 
              key={cert.id} 
              className={`${styles.thumbnail} ${activeCertificate === index ? styles.activeThumbnail : ''}`}
              onClick={() => setActiveCertificate(index)}
            >
              <img src={getImageUrl(cert.image)} alt={cert.title} />
              <span>{cert.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;