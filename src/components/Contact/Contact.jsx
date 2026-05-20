import { useReveal } from "../../hooks";

const socials = [
  {
    name: "GitHub",
    label: "@Iboomnarak",
    href: "https://github.com/warutboom100",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    label: "warut.mek",
    href: "https://www.linkedin.com/in/warut-meksawang-1aa661230/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 18.34v-8.4H5.67v8.4h2.67zM7 8.78a1.55 1.55 0 100-3.1 1.55 1.55 0 000 3.1zm11.34 9.56v-4.6c0-2.48-1.33-3.63-3.1-3.63-1.43 0-2.07.78-2.43 1.34v-1.15h-2.67c.04.75 0 8.4 0 8.4h2.67v-4.7c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.73 1.34 1.79v4.53h2.74z" />
      </svg>
    ),
  },
  {
    name: "Email",
    label: "warutboom300@gmail.com",
    href: "mailto:warutboom300@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 6L2 7" />
      </svg>
    ),
  },
  {
    name: "Phone",
    label: "+66 0962701037",
    href: "tel:+66962701037",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
];

export function Contact() {
  const [ref, visible] = useReveal(0.2);

  return (
    <section id="contact" className="section" style={{ padding: "120px 0 60px" }}>
      <div className="container" ref={ref}>
        <div
          className={`reveal ${visible ? "is-visible" : ""}`}
          style={{ textAlign: "center", maxWidth: 880, margin: "0 auto" }}
        >
          <div className="section-label">{"// GET IN TOUCH"}</div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(48px, 8vw, 110px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              margin: "0 0 1.5rem",
              textWrap: "balance",
            }}
          >
            <div>Let&apos;s build something</div>
            <div className="gradient-text">together.</div>
          </h2>

          <p style={{ color: "var(--subtext)", fontSize: "1.15rem", maxWidth: 540, margin: "0 auto 2.5rem", lineHeight: 1.55 }}>
            Open to full-time roles, freelance projects, and collaborations. I respond
            within 24 hours.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            <a
              className="btn-primary"
              href="/assets/cv/Fullstack_warut_meksawang.pdf"
              download
              style={{ fontSize: "1rem", padding: "1rem 2rem" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
              </svg>
              Download Resume
            </a>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "0.6rem", flexWrap: "wrap" }}>
            {socials.map((s) => {
              const external = !s.href.startsWith("mailto:") && !s.href.startsWith("tel:") && s.href !== "#";
              return (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={`${s.name}: ${s.label}`}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="liquid-glass hover-lift"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.55rem",
                    padding: "0.7rem 1rem",
                    borderRadius: 999,
                    color: "var(--subtext)",
                    textDecoration: "none",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.88rem",
                    fontWeight: 500,
                    transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--subtext)")}
                >
                  <span style={{ display: "inline-flex", alignItems: "center" }}>{s.icon}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", letterSpacing: "0.01em" }}>{s.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div
          style={{
            marginTop: "6rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.82rem",
            color: "var(--muted)",
            fontFamily: "var(--font-mono)",
            opacity: 0.7,
          }}
        >
          <div>© 2026 Warut · Built with React</div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span>Bangkok, TH 🇹🇭</span>
            <span>v2.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}
