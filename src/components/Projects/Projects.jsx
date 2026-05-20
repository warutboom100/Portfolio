/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useReveal } from "../../hooks";
import projectsData from "../../data/projects.json";

const projects = projectsData;

const iconBtnStyle = {
  width: 32,
  height: 32,
  borderRadius: 10,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid var(--border)",
  color: "var(--fg)",
  cursor: "pointer",
  display: "grid",
  placeItems: "center",
  transition: "all 0.2s ease",
};

function ProjectModal({ project, onClose }) {
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const images = project?.images || [];

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (lightboxIdx !== null) setLightboxIdx(null);
        else onClose();
      } else if (lightboxIdx !== null && images.length > 1) {
        if (e.key === "ArrowRight") setLightboxIdx((i) => (i + 1) % images.length);
        if (e.key === "ArrowLeft") setLightboxIdx((i) => (i - 1 + images.length) % images.length);
      }
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose, lightboxIdx, images.length]);

  useEffect(() => {
    if (!project) setLightboxIdx(null);
  }, [project]);

  if (!project) return null;
  const p = project;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 64,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        background: "rgba(4, 1, 14, 0.7)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "1.25rem 1.25rem 2rem",
        animation: "modal-backdrop-in 0.3s ease both",
        overflowY: "auto",
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${p.id}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="liquid-glass project-modal-panel"
        style={{
          width: "100%",
          maxWidth: 680,
          borderRadius: 20,
          background: "linear-gradient(180deg, rgba(20, 8, 40, 0.9), rgba(8, 2, 22, 0.95))",
          color: "var(--fg)",
          animation: "modal-panel-in 0.5s cubic-bezier(0.16,1,0.3,1) both",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 14, right: 14, zIndex: 3, display: "flex", gap: "0.4rem" }}>
          {p.links?.github && (
            <a
              href={p.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              title="View source on GitHub"
              style={{
                height: 34,
                padding: "0 0.7rem 0 0.55rem",
                borderRadius: 10,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border)",
                color: "var(--fg)",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                textDecoration: "none",
                fontFamily: "var(--font-display)",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.01em",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.10)";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.borderColor = "rgba(168,85,247,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" /></svg>
              <span>View Demo</span>
            </a>
          )}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: 34, height: 34,
              borderRadius: 10,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--border)",
              color: "var(--fg)",
              cursor: "pointer",
              display: "grid",
              placeItems: "center",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.10)";
              e.currentTarget.style.transform = "rotate(90deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              e.currentTarget.style.transform = "rotate(0)";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M6 18L18 6" /></svg>
          </button>
        </div>

        <div
          style={{
            position: "relative",
            padding: "1.5rem 1.75rem 1rem",
            borderRadius: "20px 20px 0 0",
            background: `linear-gradient(135deg, ${p.hue[0]}1a, ${p.hue[1]}10)`,
            borderBottom: "1px solid var(--border)",
            overflow: "hidden",
          }}
        >
          <div aria-hidden style={{
            position: "absolute", inset: 0,
            background: `radial-gradient(ellipse at top right, ${p.hue[0]}26, transparent 60%)`,
            pointerEvents: "none",
          }} />
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "0.35rem", paddingRight: "8.5rem" }}>
            <div style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.18em" }}>
              {p.tag.toUpperCase()} · {p.year}
            </div>
            <h3 id={`modal-title-${p.id}`} style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3.2vw, 2rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              background: `linear-gradient(90deg, ${p.hue[0]}, ${p.hue[1]})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1.1,
            }}>{p.name}</h3>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.74rem", fontFamily: "var(--font-mono)", color: "var(--muted)", marginTop: "0.2rem" }}>
              <span style={{ width: 6, height: 6, borderRadius: 99, background: p.hue[0], boxShadow: `0 0 6px ${p.hue[0]}` }} />
              {p.status}
            </span>
          </div>
        </div>

        {p.images && p.images.length > 0 && (
          <div
            style={{
              padding: "1.25rem 0 1rem",
              borderBottom: "1px solid var(--border)",
              position: "relative",
            }}
          >
            <div
              className="modal-gallery"
              style={{
                display: "flex",
                gap: "1rem",
                overflowX: "auto",
                overflowY: "hidden",
                scrollSnapType: "x mandatory",
                padding: "0.25rem 1.75rem 0.75rem",
                WebkitOverflowScrolling: "touch",
                scrollPaddingLeft: "1.75rem",
                maskImage: "linear-gradient(90deg, transparent 0, #000 4%, #000 96%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(90deg, transparent 0, #000 4%, #000 96%, transparent 100%)",
              }}
            >
              {p.images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setLightboxIdx(i)}
                  className="gallery-tile"
                  aria-label={`Open ${p.name} screenshot ${i + 1}`}
                  style={{
                    flex: "0 0 auto",
                    scrollSnapAlign: "start",
                    width: "min(85%, 420px)",
                    aspectRatio: "16 / 10",
                    borderRadius: 14,
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                    background: "rgba(8,2,22,0.6)",
                    display: "block",
                    position: "relative",
                    padding: 0,
                    cursor: "zoom-in",
                    color: "inherit",
                    boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
                    transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease, border-color 0.35s ease",
                  }}
                >
                  <img
                    src={`/assets/${img}`}
                    alt={`${p.name} screenshot ${i + 1}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      display: "block",
                    }}
                  />
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, transparent 60%, rgba(8,2,22,0.55) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: 10,
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
                    {String(i + 1).padStart(2, "0")} / {String(p.images.length).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div style={{ padding: "1.25rem 1.75rem 1.5rem" }}>
          {p.purpose && (
            <div style={{ marginBottom: "0.9rem", padding: "0.75rem 0.95rem", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.64rem", letterSpacing: "0.16em", color: "var(--muted)", marginBottom: "0.3rem" }}>WHY WE BUILT IT</div>
              <p style={{ margin: 0, color: "var(--subtext)", fontSize: "0.88rem", lineHeight: 1.55 }}>{p.purpose}</p>
            </div>
          )}

          {p.outcome && (
            <div style={{
              marginBottom: "1rem",
              padding: "0.75rem 0.95rem",
              borderRadius: 10,
              background: `linear-gradient(135deg, ${p.hue[0]}12, ${p.hue[1]}08)`,
              border: `1px solid ${p.hue[0]}44`,
            }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.64rem", letterSpacing: "0.16em", color: "var(--muted)", marginBottom: "0.3rem" }}>OUTCOME</div>
              <p style={{ margin: 0, color: "var(--fg)", fontSize: "0.88rem", lineHeight: 1.55, fontWeight: 500 }}>{p.outcome}</p>
            </div>
          )}

          <p style={{ color: "var(--subtext)", fontSize: "0.92rem", lineHeight: 1.65, margin: "0 0 1.25rem" }}>
            {p.longDesc}
          </p>

          <div style={{ marginBottom: "1.25rem" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.66rem", letterSpacing: "0.16em", color: "var(--muted)", marginBottom: "0.6rem" }}>
              KEY HIGHLIGHTS
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {p.highlights.map((h, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.7rem",
                    color: "var(--subtext)",
                    fontSize: "0.88rem",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{
                    flexShrink: 0,
                    marginTop: 7,
                    width: 5, height: 5, borderRadius: 99,
                    background: `linear-gradient(90deg, ${p.hue[0]}, ${p.hue[1]})`,
                    boxShadow: `0 0 6px ${p.hue[0]}88`,
                  }} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: "1.25rem", paddingTop: "1rem", borderTop: "1px solid var(--border)" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.66rem", letterSpacing: "0.16em", color: "var(--muted)", marginBottom: "0.55rem" }}>
              TECH STACK
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
              {p.stack.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: "0.72rem",
                    fontFamily: "var(--font-mono)",
                    padding: "0.3rem 0.6rem",
                    borderRadius: 6,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border)",
                    color: "var(--subtext)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", paddingTop: "0.25rem" }}>
            {p.links?.demo && (
              <a
                href={p.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: "0.9rem" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M10 14L21 3M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5" /></svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {lightboxIdx !== null && images[lightboxIdx] && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setLightboxIdx(null); }}
          role="dialog"
          aria-modal="true"
          aria-label={`${p.name} screenshot ${lightboxIdx + 1} of ${images.length}`}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 120,
            background: "rgba(0, 0, 0, 0.94)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            animation: "modal-backdrop-in 0.2s ease both",
          }}
        >
          <img
            src={`/assets/${images[lightboxIdx]}`}
            alt={`${p.name} screenshot ${lightboxIdx + 1}`}
            onError={() => setLightboxIdx(null)}
            draggable={false}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              display: "block",
              animation: "modal-panel-in 0.3s cubic-bezier(0.16,1,0.3,1) both",
              userSelect: "none",
              WebkitUserSelect: "none",
              WebkitTouchCallout: "none",
              pointerEvents: "none",
            }}
          />

          <button
            type="button"
            onClick={() => setLightboxIdx(null)}
            aria-label="Close preview"
            style={{
              position: "absolute",
              top: 18, right: 18,
              width: 40, height: 40,
              borderRadius: 12,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "#fff",
              cursor: "pointer",
              display: "grid",
              placeItems: "center",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.18)"; e.currentTarget.style.transform = "rotate(90deg)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "rotate(0)"; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M6 18L18 6" /></svg>
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => setLightboxIdx((i) => (i - 1 + images.length) % images.length)}
                aria-label="Previous screenshot"
                style={{
                  position: "absolute",
                  left: 18,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 44, height: 44,
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#fff",
                  cursor: "pointer",
                  display: "grid",
                  placeItems: "center",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button
                type="button"
                onClick={() => setLightboxIdx((i) => (i + 1) % images.length)}
                aria-label="Next screenshot"
                style={{
                  position: "absolute",
                  right: 18,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 44, height: 44,
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#fff",
                  cursor: "pointer",
                  display: "grid",
                  placeItems: "center",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 6l6 6-6 6" /></svg>
              </button>

              <div
                style={{
                  position: "absolute",
                  bottom: 22,
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  letterSpacing: "0.14em",
                  color: "rgba(255,255,255,0.75)",
                  padding: "0.35rem 0.75rem",
                  borderRadius: 999,
                  background: "rgba(0,0,0,0.55)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  pointerEvents: "none",
                }}
              >
                {String(lightboxIdx + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ p, index, onOpen }) {
  const [ref, visible] = useReveal(0.12);
  const [hover, setHover] = useState(false);

  return (
    <button
      ref={ref}
      onClick={onOpen}
      className="liquid-glass"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        borderRadius: 20,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        background: "rgba(255,255,255,0.01)",
        color: "var(--fg)",
        cursor: "pointer",
        minHeight: 380,
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible
          ? (hover ? "translateY(-6px)" : "translateY(0)")
          : "translateY(32px)",
        transition: `opacity 0.6s ${0.05 * index}s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease`,
        boxShadow: hover
          ? `inset 0 1px 1px rgba(255,255,255,0.15), 0 18px 50px ${p.hue[0]}33, 0 0 0 1px ${p.hue[1]}55`
          : "inset 0 1px 1px rgba(255,255,255,0.1), 0 4px 24px rgba(0,0,0,0.4)",
      }}
    >
      <div
        style={{
          position: "relative",
          height: 140,
          background: `linear-gradient(135deg, ${p.hue[0]}33, ${p.hue[1]}22)`,
          borderBottom: "1px solid var(--border)",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {p.images && p.images.length > 0 ? (
          <img
            src={`/assets/${p.images[0]}`}
            alt={`${p.name} preview`}
            loading="lazy"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: hover ? 0.85 : 0.7,
              transition: "opacity 0.4s ease",
            }}
          />
        ) : (
          <>
            <div aria-hidden style={{
              position: "absolute", inset: 0,
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)",
              backgroundSize: "18px 18px",
              opacity: hover ? 0.55 : 0.4,
              transition: "opacity 0.4s ease",
            }} />
            <div aria-hidden style={{
              position: "absolute", inset: 0,
              background: `radial-gradient(ellipse at ${hover ? "70% 30%" : "50% 50%"}, ${p.hue[0]}55, transparent 60%)`,
              transition: "background 0.5s ease",
            }} />
            <div style={{
              position: "absolute",
              left: "1.25rem",
              bottom: "0.75rem",
              fontFamily: "var(--font-display)",
              fontSize: "5rem",
              fontWeight: 700,
              lineHeight: 0.85,
              letterSpacing: "-0.06em",
              background: `linear-gradient(135deg, ${p.hue[0]}, ${p.hue[1]})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              opacity: 0.85,
              pointerEvents: "none",
            }}>
              {p.name.charAt(0)}
            </div>
          </>
        )}

        <div style={{ position: "absolute", top: "1rem", right: "1rem", display: "flex", gap: "0.4rem", alignItems: "center" }}>
          <span style={{
            fontSize: "0.68rem",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.12em",
            padding: "0.3rem 0.6rem",
            borderRadius: 99,
            background: "rgba(8,2,22,0.55)",
            border: "1px solid rgba(255,255,255,0.10)",
            color: "var(--subtext)",
            backdropFilter: "blur(6px)",
          }}>{p.tag.toUpperCase()}</span>
        </div>

        <div style={{
          position: "absolute",
          right: "1rem", bottom: "0.85rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--muted)",
          letterSpacing: "0.1em",
        }}>{p.year}</div>
      </div>

      <div style={{ padding: "1.25rem 1.4rem 1.4rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontSize: "1.25rem",
          fontWeight: 600,
          letterSpacing: "-0.02em",
        }}>{p.name}</h3>

        <p style={{
          margin: "0.55rem 0 1rem",
          color: "var(--subtext)",
          fontSize: "0.88rem",
          lineHeight: 1.55,
          flex: 1,
        }}>{p.desc}</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1rem" }}>
          {p.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              style={{
                fontSize: "0.7rem",
                fontFamily: "var(--font-mono)",
                padding: "0.22rem 0.5rem",
                borderRadius: 6,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--border)",
                color: "var(--subtext)",
              }}
            >
              {s}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "0.85rem", borderTop: "1px solid var(--border)" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.74rem", fontFamily: "var(--font-mono)", color: "var(--muted)" }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: p.hue[0], boxShadow: `0 0 6px ${p.hue[0]}` }} />
            {p.status}
          </span>
          <span
            style={{
              fontSize: "0.78rem",
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              color: hover ? "#fff" : "var(--muted)",
              transform: hover ? "translateX(4px)" : "translateX(0)",
              transition: "all 0.3s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            View Details →
          </span>
        </div>
      </div>
    </button>
  );
}

export function Projects() {
  const [headRef, headVisible] = useReveal();
  const [openId, setOpenId] = useState(null);
  const [filter, setFilter] = useState("All");

  const tags = ["All", "Full-time", "Freelance", "Personal"];
  const visible = filter === "All" ? projects : projects.filter((p) => p.tag === filter);
  const openProject = projects.find((p) => p.id === openId);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div
          ref={headRef}
          className={`reveal ${headVisible ? "is-visible" : ""}`}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}
        >
          <div>
            <div className="section-label">{"// PROJECTS"}</div>
            <h2 className="section-heading" style={{ margin: 0, display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Selected Work
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  padding: "0.35rem 0.85rem",
                  borderRadius: 999,
                  background: "rgba(168,85,247,0.12)",
                  border: "1px solid rgba(168,85,247,0.25)",
                  color: "#d8b4fe",
                  letterSpacing: "0.05em",
                  position: "relative",
                  top: -8,
                }}
              >
                {String(projects.length).padStart(2, "0")}
              </span>
            </h2>
          </div>
          <p style={{ maxWidth: 360, color: "var(--muted)", margin: 0, fontSize: "0.95rem", lineHeight: 1.6 }}>
            A small slice of recent work production platforms, freelance builds, and
            personal experiments. Click any card to dive in.
          </p>
        </div>

        <div
          className={`reveal ${headVisible ? "is-visible" : ""}`}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "2.5rem",
            transitionDelay: "0.15s",
          }}
        >
          {tags.map((t) => {
            const count = t === "All" ? projects.length : projects.filter((p) => p.tag === t).length;
            const isActive = filter === t;
            return (
              <button
                key={t}
                onClick={() => setFilter(t)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.5rem 1rem",
                  borderRadius: 999,
                  cursor: "pointer",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: isActive ? "#1a0b2e" : "var(--subtext)",
                  background: isActive ? "var(--accent-grad)" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${isActive ? "transparent" : "var(--border)"}`,
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  boxShadow: isActive ? "0 6px 20px rgba(168,85,247,0.25)" : "inset 0 1px 1px rgba(255,255,255,0.06)",
                }}
              >
                {t}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    padding: "0.1rem 0.4rem",
                    borderRadius: 6,
                    background: isActive ? "rgba(26,11,46,0.18)" : "rgba(255,255,255,0.04)",
                    color: isActive ? "#1a0b2e" : "var(--muted)",
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="projects-grid">
          {visible.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} onOpen={() => setOpenId(p.id)} />
          ))}
        </div>
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenId(null)} />

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.25rem;
        }
        @media (max-width: 980px) {
          .projects-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
        @keyframes modal-backdrop-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modal-panel-in {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        .modal-gallery::-webkit-scrollbar { height: 6px; }
        .modal-gallery::-webkit-scrollbar-track { background: transparent; }
        .modal-gallery::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.10); border-radius: 6px; }
        .modal-gallery::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.22); }
      `}</style>
    </section>
  );
}
