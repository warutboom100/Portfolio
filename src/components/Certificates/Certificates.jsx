/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useReveal } from "../../hooks";
import certsData from "../../data/certificates.json";

const certs = certsData;

function CertLightbox({ cert, onClose }) {
  useEffect(() => {
    if (!cert) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${cert.name} certificate preview`}
      style={{
        position: "fixed",
        top: 64,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        background: "rgba(4, 1, 14, 0.78)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.25rem",
        animation: "cert-fade-in 0.25s ease both",
        overflow: "auto",
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: "absolute",
          top: 14, right: 14,
          width: 38, height: 38,
          borderRadius: 10,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid var(--border)",
          color: "var(--fg)",
          cursor: "pointer",
          display: "grid",
          placeItems: "center",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.14)";
          e.currentTarget.style.transform = "rotate(90deg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.06)";
          e.currentTarget.style.transform = "rotate(0)";
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M6 18L18 6" /></svg>
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 1100,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          animation: "cert-pop-in 0.4s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        <img
          src={`/assets/${cert.image}`}
          alt={cert.name}
          style={{
            maxWidth: "100%",
            maxHeight: "calc(100vh - 220px)",
            borderRadius: 12,
            border: "1px solid var(--border)",
            boxShadow: `0 20px 60px ${cert.hue}33, 0 0 0 1px rgba(255,255,255,0.04)`,
            display: "block",
          }}
        />
        <div style={{ textAlign: "center", color: "var(--subtext)" }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--fg)", fontSize: "1.05rem" }}>
            {cert.name}
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--muted)", marginTop: "0.3rem", letterSpacing: "0.06em" }}>
            {[cert.issuer, cert.year].filter(Boolean).join(" · ")}
          </div>
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                marginTop: "0.75rem",
                padding: "0.5rem 0.95rem",
                borderRadius: 999,
                border: "1px solid var(--border)",
                background: "rgba(255,255,255,0.04)",
                color: "var(--fg)",
                textDecoration: "none",
                fontFamily: "var(--font-display)",
                fontSize: "0.82rem",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M10 14L21 3M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5" /></svg>
              Verify Credential
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function CertCard({ c, index, onOpen }) {
  const [ref, visible] = useReveal(0.15);
  const [hover, setHover] = useState(false);

  const hasImage = !!c.image;

  return (
    <button
      ref={ref}
      type="button"
      onClick={hasImage ? onOpen : undefined}
      className="liquid-glass"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        borderRadius: 18,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        background: "rgba(255,255,255,0.01)",
        color: "var(--fg)",
        border: "none",
        cursor: hasImage ? "pointer" : "default",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible
          ? (hover ? "translateY(-6px)" : "translateY(0)")
          : "translateY(32px)",
        transition: `opacity 0.7s ${0.05 * index}s cubic-bezier(0.16,1,0.3,1), transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease`,
        boxShadow: hover
          ? `inset 0 1px 1px rgba(255,255,255,0.15), 0 18px 50px ${c.hue}33, 0 0 0 1px ${c.hue}55`
          : "inset 0 1px 1px rgba(255,255,255,0.1), 0 4px 24px rgba(0,0,0,0.4)",
      }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: "4 / 3",
          background: hasImage
            ? "rgba(8,2,22,0.6)"
            : `linear-gradient(135deg, ${c.hue}22, ${c.hue}08)`,
          borderBottom: "1px solid var(--border)",
          overflow: "hidden",
        }}
      >
        {hasImage ? (
          <>
            <img
              src={`/assets/${c.image}`}
              alt={c.name}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                opacity: hover ? 1 : 0.92,
                transform: hover ? "scale(1.03)" : "scale(1)",
                transition: "opacity 0.4s ease, transform 0.5s ease",
                display: "block",
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, transparent 55%, rgba(8,2,22,0.55) 100%)",
                pointerEvents: "none",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: 12,
                bottom: 10,
                fontFamily: "var(--font-mono)",
                fontSize: "0.66rem",
                letterSpacing: "0.14em",
                color: "var(--subtext)",
                padding: "0.25rem 0.55rem",
                borderRadius: 999,
                background: "rgba(8,2,22,0.55)",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(6px)",
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ verticalAlign: "-1px", marginRight: 4 }}><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
              Click to view
            </span>
          </>
        ) : (
          <>
            <div aria-hidden style={{
              position: "absolute", inset: 0,
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)",
              backgroundSize: "20px 20px",
              opacity: 0.35,
            }} />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "grid",
                placeItems: "center",
              }}
            >
              <div
                style={{
                  width: 64, height: 64,
                  borderRadius: 16,
                  display: "grid", placeItems: "center",
                  background: `linear-gradient(135deg, ${c.hue}33, ${c.hue}11)`,
                  border: `1px solid ${c.hue}55`,
                  fontFamily: "var(--font-mono)",
                  fontSize: c.glyph && c.glyph.length > 2 ? "0.95rem" : "1.4rem",
                  fontWeight: 600,
                  color: c.hue,
                }}
              >
                {c.glyph || c.name.charAt(0)}
              </div>
            </div>
          </>
        )}
      </div>

      <div style={{ padding: "1.1rem 1.25rem 1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem", lineHeight: 1.3, color: "var(--fg)" }}>
          {c.name}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "0.85rem", paddingTop: "0.85rem", borderTop: "1px solid var(--border)", gap: "0.75rem" }}>
          <div style={{ minWidth: 0 }}>
            {c.issuer && (
              <div style={{ fontSize: "0.82rem", color: "var(--subtext)", fontFamily: "var(--font-display)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {c.issuer}
              </div>
            )}
            {c.year && (
              <div style={{ fontSize: "0.72rem", color: "var(--muted)", fontFamily: "var(--font-mono)", marginTop: "0.15rem" }}>{c.year}</div>
            )}
          </div>
          {hasImage && (
            <span
              style={{
                fontSize: "0.76rem",
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                color: hover ? c.hue : "var(--muted)",
                transition: "all 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.25rem",
                transform: hover ? "translateX(3px)" : "translateX(0)",
                flexShrink: 0,
              }}
            >
              View →
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

export function Certificates() {
  const [headRef, headVisible] = useReveal();
  const [openId, setOpenId] = useState(null);

  const openCert = certs.find((c) => c.id === openId);

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
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {certs.map((c, i) => (
            <CertCard
              key={c.id || c.name}
              c={c}
              index={i}
              onOpen={() => setOpenId(c.id)}
            />
          ))}
        </div>
      </div>

      <CertLightbox cert={openCert} onClose={() => setOpenId(null)} />

      <style>{`
        @keyframes cert-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes cert-pop-in {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}
