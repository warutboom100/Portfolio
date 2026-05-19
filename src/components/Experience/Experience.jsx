import { useState } from "react";
import { useReveal } from "../../hooks";

const entries = [
  {
    id: "fin",
    company: "Fin Insurance Broker Co., Ltd.",
    role: "Full-Stack Developer",
    period: "2023 — Present",
    type: "Full-time",
    summary: "Leading development of insurance renewal systems, HR platforms, and internal tooling for a national brokerage.",
    bullets: [
      "Architected and shipped InsureFlow — a renewal & policy management platform handling thousands of policies",
      "Built EduAdmin: e-learning and HR admin system with role-based access for 200+ internal users",
      "Owned end-to-end delivery: database design, API, frontend, deployment, and on-call support",
      "Migrated legacy SQL Server workloads to MariaDB; cut average query latency by ~40%",
    ],
    stack: ["Next.js", "Node.js", "Express", "MySQL/MariaDB", "Ant Design"],
  },
  {
    id: "freelance",
    company: "Freelance Developer",
    role: "Independent Contractor",
    period: "2022 — 2023",
    type: "Freelance",
    summary: "Shipped IoT dashboards, smart-factory platforms, and AI-powered apps for SMB and enterprise clients.",
    bullets: [
      "SmartFactory Dashboard — real-time monitoring of manufacturing lines via WebSocket telemetry",
      "Built ML + rule-based email classification system with Thai-language support",
      "Designed and integrated Redis-based job queues for high-throughput email ingestion",
    ],
    stack: ["React", "Python", "Node.js", "WebSocket", "Redis"],
  },
  {
    id: "kmutt",
    company: "KMUTT",
    role: "B.Eng. Robotics & Automation Engineering",
    period: "2019 — 2023",
    type: "Education",
    summary: "Graduated June 2023 from King Mongkut's University of Technology Thonburi.",
    bullets: [
      "Senior project: autonomous warehouse robot navigation using ROS and computer vision",
      "Specialized in control systems, embedded programming, and PLC automation",
      "Active in robotics club; built competitive line-following and sumo bots",
    ],
    stack: ["ROS", "Python", "C++", "MATLAB"],
  },
];

export function Experience() {
  const [active, setActive] = useState(entries[0].id);
  const [ref, visible] = useReveal(0.15);

  const activeEntry = entries.find((e) => e.id === active);

  return (
    <section id="experience" className="section">
      <div className="container" ref={ref}>
        <div className={`reveal ${visible ? "is-visible" : ""}`} style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">{"// JOURNEY"}</div>
          <h2 className="section-heading" style={{ margin: 0 }}>Experience &amp; Education</h2>
        </div>

        <div
          className="exp-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.5fr)",
            gap: "3rem",
          }}
        >
          <div style={{ position: "relative", paddingLeft: "2rem" }}>
            <div
              aria-hidden
              style={{
                position: "absolute",
                left: 11,
                top: 8,
                bottom: 8,
                width: 2,
                background: "linear-gradient(180deg, rgba(99,102,241,0.5), rgba(168,85,247,0.5), rgba(252,211,77,0.3))",
                borderRadius: 2,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {entries.map((e, i) => {
                const isActive = active === e.id;
                return (
                  <button
                    key={e.id}
                    onClick={() => setActive(e.id)}
                    onMouseEnter={() => setActive(e.id)}
                    style={{
                      textAlign: "left",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      position: "relative",
                      padding: 0,
                      color: "inherit",
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(20px)",
                      transition: `opacity 0.6s ${i * 0.1}s cubic-bezier(0.16,1,0.3,1), transform 0.6s ${i * 0.1}s cubic-bezier(0.16,1,0.3,1)`,
                    }}
                  >
                    <span
                      aria-hidden
                      className="liquid-glass"
                      style={{
                        position: "absolute",
                        left: -32 + 4,
                        top: 4,
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        display: "grid",
                        placeItems: "center",
                        background: isActive ? "var(--accent-grad)" : "rgba(255,255,255,0.03)",
                        boxShadow: isActive ? "0 0 18px rgba(168,85,247,0.6)" : "none",
                        transition: "all 0.4s ease",
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: 99, background: isActive ? "#1a0b2e" : "var(--muted)" }} />
                    </span>

                    <div
                      style={{
                        padding: "1rem 1.1rem",
                        borderRadius: 14,
                        background: isActive ? "rgba(168,85,247,0.06)" : "transparent",
                        border: `1px solid ${isActive ? "rgba(168,85,247,0.25)" : "transparent"}`,
                        transition: "all 0.4s ease",
                      }}
                    >
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.1em", color: "var(--muted)", marginBottom: "0.35rem" }}>
                        {e.period.toUpperCase()}
                      </div>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.05rem", color: isActive ? "var(--fg)" : "var(--subtext)", lineHeight: 1.3, marginBottom: "0.2rem" }}>
                        {e.company}
                      </div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", color: "var(--muted)" }}>
                        {e.role}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="liquid-glass"
            style={{
              borderRadius: 20,
              padding: "2rem 2.25rem",
              minHeight: 400,
              position: "relative",
            }}
          >
            <div key={activeEntry.id} style={{ animation: "fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.12em", color: "var(--muted)", marginBottom: "0.4rem" }}>
                    {activeEntry.type.toUpperCase()} · {activeEntry.period}
                  </div>
                  <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "1.7rem", fontWeight: 600, letterSpacing: "-0.02em" }}>
                    {activeEntry.role}
                  </h3>
                  <div style={{ marginTop: "0.35rem", color: "var(--subtext)", fontFamily: "var(--font-display)" }}>
                    @ {activeEntry.company}
                  </div>
                </div>
              </div>

              <p style={{ color: "var(--subtext)", fontSize: "1rem", lineHeight: 1.65, margin: "0 0 1.25rem" }}>
                {activeEntry.summary}
              </p>

              <ul style={{ margin: "0 0 1.5rem", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                {activeEntry.bullets.map((b, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "0.85rem",
                      color: "var(--subtext)",
                      fontSize: "0.92rem",
                      lineHeight: 1.55,
                    }}
                  >
                    <span style={{
                      flexShrink: 0,
                      marginTop: 8,
                      width: 6, height: 6, borderRadius: 99,
                      background: "var(--accent-grad)",
                    }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", paddingTop: "1rem", borderTop: "1px solid var(--border)" }}>
                {activeEntry.stack.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      padding: "0.3rem 0.65rem",
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
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .exp-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
