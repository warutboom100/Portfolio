/* eslint-disable react/prop-types */
import { useState } from "react";
import { useReveal } from "../../hooks";

const certs = [
  { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", year: "2024", glyph: "AWS", hue: "#ff9900" },
  { name: "Professional Scrum Master I (PSM I)", issuer: "Scrum.org", year: "2024", glyph: "PSM", hue: "#6366f1" },
  { name: "Docker Certified Associate", issuer: "Docker Inc.", year: "2023", glyph: "🐳", hue: "#2496ed" },
  { name: "Meta Front-End Developer", issuer: "Meta / Coursera", year: "2023", glyph: "M", hue: "#0866ff" },
  { name: "Google Data Analytics", issuer: "Google / Coursera", year: "2023", glyph: "G", hue: "#fcd34d" },
  { name: "Node.js Application Developer", issuer: "OpenJS Foundation", year: "2023", glyph: "⬢", hue: "#84cc16" },
];

function CertCard({ c, index }) {
  const [ref, visible] = useReveal(0.15);
  const [hover, setHover] = useState(false);

  return (
    <div
      ref={ref}
      className="liquid-glass"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        borderRadius: 18,
        padding: "1.5rem 1.5rem 1.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        opacity: visible ? 1 : 0,
        transform: visible
          ? (hover ? "translateY(-6px) rotate(-1.2deg)" : "translateY(0) rotate(0)")
          : "translateY(32px) rotate(0)",
        transition: `opacity 0.7s ${0.05 * index}s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease`,
        boxShadow: hover
          ? `inset 0 1px 1px rgba(255,255,255,0.15), 0 18px 50px rgba(168,85,247,0.18), 0 0 0 1px ${c.hue}55`
          : "inset 0 1px 1px rgba(255,255,255,0.1), 0 4px 24px rgba(0,0,0,0.4)",
        cursor: "pointer",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -1, left: -1, right: -1, height: 80,
          borderRadius: "18px 18px 0 0",
          background: `radial-gradient(ellipse at top, ${c.hue}22, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", position: "relative", zIndex: 1 }}>
        <div
          style={{
            width: 44, height: 44,
            borderRadius: 12,
            display: "grid", placeItems: "center",
            background: `linear-gradient(135deg, ${c.hue}33, ${c.hue}11)`,
            border: `1px solid ${c.hue}44`,
            fontFamily: "var(--font-mono)",
            fontSize: c.glyph.length > 2 ? "0.78rem" : "1.15rem",
            fontWeight: 600,
            color: c.hue,
            flexShrink: 0,
          }}
        >
          {c.glyph}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem", lineHeight: 1.3, color: "var(--fg)" }}>
            {c.name}
          </div>
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "0.85rem", borderTop: "1px solid var(--border)", marginTop: "0.25rem" }}>
          <div>
            <div style={{ fontSize: "0.82rem", color: "var(--subtext)", fontFamily: "var(--font-display)" }}>{c.issuer}</div>
            <div style={{ fontSize: "0.72rem", color: "var(--muted)", fontFamily: "var(--font-mono)", marginTop: "0.15rem" }}>{c.year}</div>
          </div>
          <span
            style={{
              fontSize: "0.78rem",
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              color: hover ? c.hue : "var(--muted)",
              transition: "all 0.3s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
              transform: hover ? "translateX(3px)" : "translateX(0)",
            }}
          >
            View Credential →
          </span>
        </div>
      </div>
    </div>
  );
}

export function Certificates() {
  const [headRef, headVisible] = useReveal();

  return (
    <section id="certificates" className="section">
      <div className="container">
        <div
          ref={headRef}
          className={`reveal ${headVisible ? "is-visible" : ""}`}
          style={{ marginBottom: "3.5rem" }}
        >
          <div className="section-label">{"// CREDENTIALS"}</div>
          <h2 className="section-heading" style={{ margin: 0 }}>Credentials &amp; Certificates</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {certs.map((c, i) => <CertCard key={c.name} c={c} index={i} />)}
        </div>
      </div>
    </section>
  );
}
