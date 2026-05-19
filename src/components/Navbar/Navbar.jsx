import React, { useState, useEffect } from "react";
import { useActiveSection, scrollToId } from "../../hooks";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certificates", label: "Certificates" },
  ];
  const active = useActiveSection(links.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    padding: "1rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
    backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
    WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
    background: scrolled ? "rgba(8, 2, 22, 0.6)" : "transparent",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
  };

  const handleClick = (id) => (e) => {
    e.preventDefault();
    setMobileOpen(false);
    scrollToId(id);
  };

  return (
    <React.Fragment>
      <nav style={navStyle}>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "1.4rem",
            fontWeight: 600,
            background: "var(--accent-grad)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          &lt;Warut.Meg/&gt;
        </a>

        <div className="nav-center" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={handleClick(l.id)}
                style={{
                  position: "relative",
                  padding: "0.5rem 1rem",
                  color: isActive ? "var(--fg)" : "var(--muted)",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.92rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                {l.label}
                <span
                  style={{
                    position: "absolute",
                    left: "1rem",
                    right: "1rem",
                    bottom: "0.25rem",
                    height: 2,
                    borderRadius: 2,
                    background: "var(--accent-grad)",
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
                  }}
                />
              </a>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <a
            href="#contact"
            onClick={handleClick("contact")}
            className="liquid-glass nav-cta"
            style={{
              padding: "0.6rem 1.2rem",
              borderRadius: 999,
              color: "var(--fg)",
              fontFamily: "var(--font-display)",
              fontSize: "0.88rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "all 0.3s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: 99, background: "#4ade80", boxShadow: "0 0 8px #4ade80", animation: "pulse-dot 1.8s ease-in-out infinite" }} />
            Contact Me
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            style={{
              display: "none",
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: 10,
              color: "var(--fg)",
              padding: "0.5rem",
              cursor: "pointer",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 49,
            background: "rgba(8, 2, 22, 0.92)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
            animation: "fade-up 0.3s ease both",
          }}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={handleClick(l.id)}
              style={{
                color: "var(--fg)",
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .nav-center { display: none !important; }
          .mobile-toggle { display: inline-flex !important; }
          .nav-cta { display: none !important; }
        }
      `}</style>
    </React.Fragment>
  );
}
