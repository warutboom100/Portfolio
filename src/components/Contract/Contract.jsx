import React from "react";
import styles from "./Contract.module.css";
import { getImageUrl } from "../../utils";

const CONTACT = [
  {
    id: "email",
    label: "Email",
    value: "warutboom300@gmail.com",
    href: "mailto:warutboom300@gmail.com",
    icon: "contact/emailIcon.png",
  },
  {
    id: "phone",
    label: "Phone",
    value: "096-2701037",
    href: "tel:+66962701037",
    icon: "contact/telephone.png",
  },
  {
    id: "github",
    label: "GitHub",
    value: "@warutboom100",
    href: "https://github.com/warutboom100",
    icon: "contact/githubIcon.png",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    // value: "in/waut-mek",
    value: "in/warut-meksawang",
    href: "https://www.linkedin.com/in/warut-meksawang-1aa661230/",
    icon: "contact/linkedinIcon.png",
  },
];

export const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.lead}>
          <span className={styles.eyebrow}>Get in touch</span>
          <h2 className={styles.title}>
            Let's build something
            <br />
            <span className={styles.accent}>worth shipping.</span>
          </h2>
          <p className={styles.subtitle}>
            Open to fullstack and software engineer roles. The fastest way to reach me is
            email — I usually reply within a day.
          </p>
          <a href="mailto:warutboom300@gmail.com" className={styles.cta}>
            warutboom300@gmail.com
          </a>
        </div>

        <ul className={styles.links}>
          {CONTACT.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={styles.link}
              >
                <span className={styles.linkIcon}>
                  <img src={getImageUrl(item.icon)} alt="" aria-hidden="true" />
                </span>
                <span className={styles.linkBody}>
                  <span className={styles.linkLabel}>{item.label}</span>
                  <span className={styles.linkValue}>{item.value}</span>
                </span>
                <span className={styles.linkArrow} aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.bottom}>
        <span>© {year} Warut Meksawang. All rights reserved.</span>
        <span>Built with React + Vite.</span>
      </div>
    </footer>
  );
};

export default Contact;
