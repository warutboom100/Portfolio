/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useReveal } from "../../hooks";

const projects = [
  {
    id: "insureflow",
    name: "InsureFlow",
    desc: "Multi-tenant insurance renewal & policy management platform serving hundreds of brokers across Thailand.",
    longDesc:
      "InsureFlow is a multi-tenant insurance renewal and policy management platform built for one of Thailand's growing brokerages. It handles the full renewal lifecycle — from policy intake to agent workflows — at scale, supporting 10,000+ active policies and hundreds of concurrent agents. The system replaces a tangle of legacy spreadsheets and email chains with a single auditable source of truth, with role-based access for managers, agents, and back-office staff.",
    highlights: [
      "10,000+ policies under management across multiple tenants with isolated data boundaries",
      "Automated renewal reminders, agent dashboards, and granular role-based access control",
      "Full audit logging on every policy mutation — required for regulatory compliance",
    ],
    stack: ["Next.js", "Node.js", "MySQL", "Express"],
    tag: "Work",
    status: "Production",
    year: "2024",
    hue: ["#6366f1", "#a855f7"],
  },
  {
    id: "eduadmin",
    name: "EduAdmin",
    desc: "E-learning & HR system for 500+ employees — course management, attendance, and expense workflows.",
    longDesc:
      "EduAdmin is an internal E-learning and HR management system serving 500+ employees across multiple departments. It combines training course management, attendance tracking, and expense workflows into one cohesive interface. Built with a strict design system and approval-chain primitives that adapt per department, the platform replaces three legacy tools while halving the time HR spends on routine approvals.",
    highlights: [
      "500+ employees onboarded across course management, attendance, and expense claims",
      "Configurable multi-step approval workflows with manager / HR / finance routing",
      "TanStack Query + optimistic mutations for an instant-feeling admin experience",
    ],
    stack: ["Next.js", "TypeScript", "Ant Design", "TanStack Query"],
    tag: "Work",
    status: "Live",
    year: "2024",
    hue: ["#a855f7", "#ec4899"],
  },
  {
    id: "smartfactory",
    name: "SmartFactory Dashboard",
    desc: "Real-time IoT monitoring for manufacturing — 200+ sensors/sec, live charts, threshold alerts.",
    longDesc:
      "SmartFactory Dashboard is a real-time IoT monitoring platform for manufacturing lines, ingesting 200+ sensor readings per second over OPC-UA and surfacing them as live charts with threshold-based alerting. Designed for a factory floor where downtime costs five figures an hour, the system gives plant managers an instant view of line health and pushes alerts within seconds of an anomaly.",
    highlights: [
      "200+ sensor readings/sec ingested via OPC-UA, fanned out over WebSocket",
      "Live charts with configurable thresholds and Slack/email alerting on breach",
      "Time-series storage in InfluxDB with retention tiers for hot and historical data",
    ],
    stack: ["React", "WebSocket", "Node.js", "InfluxDB"],
    tag: "Freelance",
    status: "Shipped",
    year: "2023",
    hue: ["#fcd34d", "#f59e0b"],
  },
  {
    id: "emailclassifier",
    name: "EmailClassifier AI",
    desc: "Thai-language NLP email triage — hybrid ML + rule-based with 95%+ accuracy on production traffic.",
    longDesc:
      "EmailClassifier AI is a Thai-language email triage system that combines lightweight ML with hand-tuned rules to sort thousands of customer emails per day. It plugs into existing IMAP mailboxes, queues messages through Redis, and labels them with categories ready for downstream automation — hitting 95%+ accuracy on real production traffic.",
    highlights: [
      "95%+ classification accuracy on production Thai-language email traffic",
      "Hybrid pipeline: ML model for intent + rule-based filters for known patterns",
      "IMAP ingestion + Redis queue lets a single worker handle thousands of msgs/day",
    ],
    stack: ["Python", "Redis", "IMAP"],
    tag: "Side Project",
    status: "Open Source",
    year: "2024",
    hue: ["#34d399", "#10b981"],
  },
  {
    id: "llmgateway",
    name: "LLM Gateway",
    desc: "Internal AI gateway with multi-model routing (Ollama/OpenAI/Anthropic), rate limiting, cost tracking.",
    longDesc:
      "LLM Gateway is an internal AI proxy that sits between application code and the underlying model providers — Ollama for self-hosted, plus OpenAI and Anthropic on the hosted side. It centralises rate limiting, cost tracking, and a lightweight prompt-testing UI so teams can experiment without juggling API keys or worrying about budget overruns.",
    highlights: [
      "Pluggable model routing across Ollama, OpenAI, and Anthropic with fallback chains",
      "Per-team rate limiting + token-level cost tracking surfaced in a dashboard",
      "Built-in prompt testing UI for side-by-side comparison across models",
    ],
    stack: ["Python", "Docker", "Go"],
    tag: "Side Project",
    status: "WIP",
    year: "2025",
    hue: ["#60a5fa", "#3b82f6"],
  },
];

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;
  const p = project;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(4, 1, 14, 0.7)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.25rem",
        animation: "modal-backdrop-in 0.3s ease both",
        overflowY: "auto",
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${p.id}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="liquid-glass"
        style={{
          width: "100%",
          maxWidth: 880,
          borderRadius: 24,
          background: "linear-gradient(180deg, rgba(20, 8, 40, 0.9), rgba(8, 2, 22, 0.95))",
          color: "var(--fg)",
          animation: "modal-panel-in 0.5s cubic-bezier(0.16,1,0.3,1) both",
          maxHeight: "calc(100vh - 4rem)",
          overflowY: "auto",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 18, right: 18,
            zIndex: 3,
            width: 38, height: 38,
            borderRadius: 12,
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M6 18L18 6" /></svg>
        </button>

        <div
          style={{
            position: "relative",
            height: 260,
            borderRadius: "24px 24px 0 0",
            background: `linear-gradient(135deg, ${p.hue[0]}33, ${p.hue[1]}22)`,
            overflow: "hidden",
            display: "grid",
            placeItems: "center",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div aria-hidden style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            opacity: 0.4,
          }} />
          <div aria-hidden style={{
            position: "absolute", inset: 0,
            background: `radial-gradient(ellipse at top, ${p.hue[0]}33, transparent 60%), radial-gradient(ellipse at bottom right, ${p.hue[1]}33, transparent 60%)`,
            pointerEvents: "none",
          }} />
          <div style={{ position: "relative", textAlign: "center" }}>
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              background: `linear-gradient(90deg, ${p.hue[0]}, ${p.hue[1]})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1.05,
            }}>{p.name}</div>
            <div style={{ marginTop: "0.5rem", color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.18em" }}>
              {p.tag.toUpperCase()} · {p.year}
            </div>
          </div>
        </div>

        <div style={{ padding: "2rem 2.25rem 2.25rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
            <h3 id={`modal-title-${p.id}`} style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: "1.75rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}>{p.name}</h3>
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "var(--muted)" }}>
              <span style={{ width: 7, height: 7, borderRadius: 99, background: p.hue[0], boxShadow: `0 0 6px ${p.hue[0]}` }} />
              {p.status}
            </span>
          </div>

          <p style={{ color: "var(--subtext)", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 1.75rem" }}>
            {p.longDesc}
          </p>

          <div style={{ marginBottom: "1.75rem" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.16em", color: "var(--muted)", marginBottom: "0.85rem" }}>
              KEY HIGHLIGHTS
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {p.highlights.map((h, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.85rem",
                    color: "var(--subtext)",
                    fontSize: "0.95rem",
                    lineHeight: 1.55,
                  }}
                >
                  <span style={{
                    flexShrink: 0,
                    marginTop: 8,
                    width: 6, height: 6, borderRadius: 99,
                    background: `linear-gradient(90deg, ${p.hue[0]}, ${p.hue[1]})`,
                    boxShadow: `0 0 6px ${p.hue[0]}88`,
                  }} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: "1.75rem", paddingTop: "1.25rem", borderTop: "1px solid var(--border)" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.16em", color: "var(--muted)", marginBottom: "0.7rem" }}>
              TECH STACK
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {p.stack.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: "0.78rem",
                    fontFamily: "var(--font-mono)",
                    padding: "0.35rem 0.7rem",
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
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="btn-primary"
              style={{ fontSize: "0.9rem" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M10 14L21 3M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5" /></svg>
              Live Demo
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="liquid-glass"
              style={{
                padding: "0.85rem 1.5rem",
                borderRadius: 999,
                color: "var(--fg)",
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                textDecoration: "none",
                fontSize: "0.9rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" /></svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
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

  const tags = ["All", "Work", "Freelance", "Side Project"];
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
            A small slice of recent work — production platforms, freelance builds, and
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
          <div
            className="reveal is-visible projects-coming"
            style={{
              borderRadius: 20,
              border: "1.5px dashed rgba(255,255,255,0.12)",
              background: "transparent",
              minHeight: 360,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.6rem",
              padding: "1.5rem",
              color: "var(--muted)",
              textAlign: "center",
              fontFamily: "var(--font-display)",
            }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              display: "grid", placeItems: "center",
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.02)",
              fontFamily: "var(--font-mono)",
              fontSize: "1.5rem",
              color: "var(--subtext)",
            }}>+</div>
            <div style={{ fontSize: "0.95rem", color: "var(--subtext)", fontWeight: 500 }}>More on the way</div>
            <div style={{ fontSize: "0.8rem", maxWidth: 220, lineHeight: 1.5 }}>
              Currently building — check back soon for new entries.
            </div>
          </div>
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
      `}</style>
    </section>
  );
}
