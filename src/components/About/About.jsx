import { useReveal } from "../../hooks";

export function About() {
  const [leftRef, leftVisible] = useReveal();
  const [rightRef, rightVisible] = useReveal();

  const codeLines = [
    [{ t: "const ", c: "#c084fc" }, { t: "developer", c: "#fcd34d" }, { t: " = {", c: "#e2e8f0" }],
    [{ t: "  name: ", c: "#a5b4fc" }, { t: "'Boom'", c: "#86efac" }, { t: ",", c: "#e2e8f0" }],
    [{ t: "  role: ", c: "#a5b4fc" }, { t: "'Software Developer'", c: "#86efac" }, { t: ",", c: "#e2e8f0" }],
    [{ t: "  location: ", c: "#a5b4fc" }, { t: "'Bangkok, TH'", c: "#86efac" }, { t: ",", c: "#e2e8f0" }],
    [{ t: "  skill: [", c: "#a5b4fc" }, { t: "'WEBSITE', 'API', 'AI/LLM'", c: "#86efac" }, { t: "],", c: "#e2e8f0" }],
    [{ t: "  building: ", c: "#a5b4fc" }, { t: "async ", c: "#c084fc" }, { t: "() => ", c: "#e2e8f0" }, { t: "🚀", c: "" }],
    [{ t: "};", c: "#e2e8f0" }],
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 1fr)",
            gap: "4rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          <div ref={leftRef} className={`reveal ${leftVisible ? "is-visible" : ""}`}>
            <div className="section-label">{"// ABOUT ME"}</div>
            <h2 className="section-heading" style={{ marginBottom: "1.75rem" }}>
              I ship systems that matter.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem", color: "var(--subtext)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 580 }}>
              <p style={{ margin: 0 }}>
                I&apos;m Software Developer with a Robotics & Automation Engineering background. I build end to end from early user conversations through architecture, deployment, and measurement — with a focus on clean systems that developers enjoy working in.
              </p>
              <p style={{ margin: 0 }}>
                Lately I&apos;ve been deep in AI tooling: LLM gateways, RAG pipelines, and AI Framework for Developer Productivity.
              </p>
              <p style={{ margin: 0 }}>
                I learn fast, adapt readily, and do my best work alongside people who care about their craft.
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "1.75rem" }}>
              <span className="pill">📍 Bangkok 🇹🇭</span>
              <span className="pill">
                <span style={{ width: 7, height: 7, borderRadius: 99, background: "#4ade80", boxShadow: "0 0 8px #4ade80" }} />
                Open to Work
              </span>
              <span className="pill">⚡ Full-Stack</span>
              <span className="pill">🤖 AI / LLM Tooling</span>
            </div>
          </div>

          <div
            ref={rightRef}
            className={`reveal ${rightVisible ? "is-visible" : ""}`}
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "2.25rem", minWidth: 0, width: "100%" }}
          >
            <div style={{ position: "relative", display: "grid", placeItems: "center" }}>
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  width: 320,
                  height: 320,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(168,85,247,0.28), rgba(99,102,241,0.15) 40%, transparent 70%)",
                  filter: "blur(40px)",
                  pointerEvents: "none",
                  animation: "float-y 6s ease-in-out infinite",
                }}
              />

              <div
                style={{
                  position: "relative",
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  animation: "float-y 5s ease-in-out infinite",
                  willChange: "transform",
                }}
              >
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    padding: 3,
                    background: "conic-gradient(from 0deg, #6366f1, #a855f7, #fcd34d, #6366f1)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    animation: "spin-slow 8s linear infinite",
                    filter: "drop-shadow(0 0 12px rgba(168,85,247,0.45))",
                  }}
                />

                <div
                  style={{
                    width: 204,
                    height: 204,
                    borderRadius: "50%",
                    overflow: "hidden",
                    position: "relative",
                    background: "linear-gradient(135deg, #1a0b2e, #0a0414)",
                    boxShadow: "inset 0 0 0 4px rgba(8,2,22,1), 0 20px 60px rgba(99,102,241,0.25)",
                  }}
                >
                  <img
                    src="/assets/hero/profile.png"
                    alt="Warut — Software Developer"
                    width="220"
                    height="220"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(160deg, rgba(255,255,255,0.18) 0%, transparent 35%, transparent 65%, rgba(168,85,247,0.18) 100%)",
                      mixBlendMode: "overlay",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                <div
                  className="liquid-glass"
                  style={{
                    position: "absolute",
                    top: -4,
                    right: -22,
                    padding: "0.4rem 0.75rem",
                    borderRadius: 999,
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.08em",
                    color: "var(--subtext)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    animation: "float-y 4s ease-in-out infinite",
                    animationDelay: "0.8s",
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: 99, background: "#4ade80", boxShadow: "0 0 6px #4ade80", animation: "pulse-dot 1.8s ease-in-out infinite" }} />
                  ONLINE
                </div>
              </div>
            </div>

            <div style={{ position: "relative", width: "100%" }}>
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: -40,
                  background: "radial-gradient(circle at center, rgba(168,85,247,0.18), transparent 70%)",
                  filter: "blur(40px)",
                  pointerEvents: "none",
                }}
              />
              <div
                className="liquid-glass"
                style={{
                  position: "relative",
                  borderRadius: 16,
                  padding: "1rem 1.25rem 1.25rem",
                  animation: "float-y 6s ease-in-out infinite",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.92rem",
                  lineHeight: 1.8,
                  willChange: "transform",
                  width: "100%",
                  maxWidth: "100%",
                  minWidth: 0,
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", gap: 6, paddingBottom: "0.75rem", borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: "1rem", alignItems: "center" }}>
                  <span style={{ width: 11, height: 11, borderRadius: 99, background: "#ff5f57" }} />
                  <span style={{ width: 11, height: 11, borderRadius: 99, background: "#febc2e" }} />
                  <span style={{ width: 11, height: 11, borderRadius: 99, background: "#28c840" }} />
                  <span style={{ marginLeft: "auto", fontSize: "0.72rem", color: "var(--muted)", fontFamily: "var(--font-mono)" }}>about.ts</span>
                </div>
                <div style={{ overflowX: "auto", maxWidth: "100%" }}>
                  {codeLines.map((line, i) => (
                    <div key={i} style={{ whiteSpace: "pre" }}>
                      <span style={{ display: "inline-block", width: 24, color: "var(--muted)", opacity: 0.4, userSelect: "none" }}>{i + 1}</span>
                      {line.map((part, j) => (
                        <span key={j} style={{ color: part.c || "inherit" }}>{part.t}</span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
