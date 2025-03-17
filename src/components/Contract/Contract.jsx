import React from "react";
import styles from "./Contract.module.css"; // Fixed typo in import name (was Contract.module.css)
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const contactInfo = [
    {
      icon: "contact/emailIcon.png",
      alt: "Email icon",
      text: "warutboom300@gmail.com",
      link: "mailto:warutboom300@gmail.com", // Added mailto link
      id: "email"
    },
    {
      icon: "contact/telephone.png",
      alt: "Phone icon", // Fixed alt text (was LinkedIn icon)
      text: "096-2701037", // You can replace this with your actual phone number
      link: "tel:+66XXXXXXXX", // Added tel link, replace with actual number
      id: "phone"
    },
    {
      icon: "contact/githubIcon.png",
      alt: "GitHub icon",
      text: "github.com/warutboom100",
      link: "https://github.com/warutboom100",
      id: "github"
    },
    {
      icon: "contact/linkedinIcon.png", // Added LinkedIn icon (you'll need this image)
      alt: "LinkedIn icon",
      text: "linkedin.com/in/Warut Meksawang", // Replace with your actual LinkedIn profile
      link: "https://www.linkedin.com/in/warut-meksawang-1aa661230/", // Replace with your actual LinkedIn profile
      id: "linkedin"
    }
  ];

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          {contactInfo.map((contact) => (
            <li key={contact.id} className={styles.link}>
              <img src={getImageUrl(contact.icon)} alt={contact.alt} />
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                {contact.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Contact;