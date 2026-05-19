import { useReveal } from "../../hooks";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Iboomnarak",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 18.34v-8.4H5.67v8.4h2.67zM7 8.78a1.55 1.55 0 100-3.1 1.55 1.55 0 000 3.1zm11.34 9.56v-4.6c0-2.48-1.33-3.63-3.1-3.63-1.43 0-2.07.78-2.43 1.34v-1.15h-2.67c.04.75 0 8.4 0 8.4h2.67v-4.7c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.73 1.34 1.79v4.53h2.74z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:warutboom300@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 6L2 7" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-7-6.137 7H1.4l8.025-9.17L1 2h7.02l4.85 6.4L18.244 2zm-1.196 18h1.85L7.02 4H5.06l11.988 16z" />
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
            <a className="btn-primary" href="mailto:warutboom300@gmail.com" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
              Send me a message
            </a>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="liquid-glass hover-lift"
                style={{
                  width: 52, height: 52,
                  borderRadius: 14,
                  display: "grid", placeItems: "center",
                  color: "var(--subtext)",
                  textDecoration: "none",
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--subtext)")}
              >
                {s.icon}
              </a>
            ))}
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
