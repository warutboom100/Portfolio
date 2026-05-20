import { useState } from "react";
import { useReveal } from "../../hooks";

const entries = [
  {
  id: "fin",
  company: "Fin Insurance Broker Co., Ltd.",
  role: "Full-Stack Developer",
  period: "Apr 2025 - Apr 2026",
  type: "Full-time",
  summary: "Sole developer responsible for designing and shipping internal systems across HR, operations, and AI tooling for a national insurance brokerage.",
  bullets: [
  "Built an HRIS/ERP covering personal data, KPI evaluations, attendance, leave/OT, and recruitment for 200+ employees — replacing manual paperwork end-to-end",
  "Developed an insurance renewal platform with automated email/SMS reminders, agent call tracking, and KPI dashboards for premium collection",
  "Built an email classifier combining ML and rule-based logic to flag problematic insurance cases 80%+ accuracy, enabling agents to prioritise issues before manual review",
  "Digitised expense reimbursement and advance payments with Lark-based approval workflows, eliminating paper processes for the accounting team",
  "Built a back-office system for the logistics team covering product setup, order management, packing configuration, and real-time inventory and delivery tracking",
  "Developed an asset management module for tracking and managing organisational assets across departments — recording assignment, status, and movement history",
  "Shipped an e-learning platform for internal staff training and licensing exam preparation for Non-Life and Life insurance certifications",
],

  stack: ["Next.js", "Node.js", "Express", "PostgreSQL", "Lark API", "Python"],
},

  {
  id: "freelance",
  company: "Freelance Developer",
  role: "Independent Contractor",
  period: "Jan 2024 - Feb 2025",
  type: "Freelance",
  summary: "Delivered IoT dashboards, AI-powered apps, and full-stack systems for healthcare, manufacturing, and enterprise clients.",
  bullets: [
    "Built a hospital porter tracking system (mobile + web) with real-time indoor positioning — improving staff dispatch and operational workflow for hospital coordinators",
    "Designed and shipped 'Smart Factory' — a web-based learning platform with intuitive UI and structured training resources for factory worker onboarding",
    "Developed a food sterilization monitoring system integrating PLC-based temperature and pressure controls with a live online dashboard for remote oversight",
    "Built an IoT dashboard to collect and visualize robot and machine sensor data during production — laying groundwork for predictive maintenance analysis",
    "Designed the frontend for an AI conversational app using Chainlit as the interface layer, enabling real-time information retrieval through natural-language queries",
  ],
  stack: ["React", "Flutter", "FastAPI", "Python", "MQTT", "Chainlit"],
},
{
    id: "techman",
    company: "Techman Electronics (Thailand) Co., Ltd.",
    role: "Robotic/PLC Engineer",
    period: "Aug - Dec 2023",
    type: "Full-time",
    summary: "First industry role — programmed industrial robots and PLC systems on an active manufacturing line.",
    bullets: [
      "Designed software solutions for industrial robots and PLC control systems, streamlining automation in manufacturing environments.",
      "Implemented IoT technologies to reduce machine downtime and optimize operational efficiency through data analytics.",
    ],
    stack: ["PLC", "C++", "IoT", "Electrical Wiring", "Automation"],
  },

  {
  id: "kmutt",
  company: "KMUTT",
  role: "B.Eng. Robotics & Automation Engineering",
  period: "2019 — 2023",
  type: "Education",
  summary: "Graduated June 2023 from King Mongkut's University of Technology Thonburi (KMUTT).",
  bullets: [
    "Intern — Hospital Automation Research Center, FIBO (Jun–Nov 2022): contributed to mobile robot software development and researched IoT-based indoor localization systems for accurate real-time positioning",
    "Senior project: Indoor localization with mobile application",
    "Specialised in control systems, embedded programming, and PLC automation",
  ],
  stack: ["ROS", "Python", "C++", "MATLAB", "IoT"],
}

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
