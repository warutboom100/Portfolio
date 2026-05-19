/* eslint-disable react/prop-types */
import { useState } from "react";
import { useReveal } from "../../hooks";
import frontSkillsData from "../../data/frontskills.json";
import backSkillsData from "../../data/backskills.json";
import toolsData from "../../data/tools.json";
import otherSkillsData from "../../data/otherskills.json";

const tones = {
  indigo: { fg: "#a5b4fc", bg: "rgba(99,102,241,0.10)",  border: "rgba(99,102,241,0.32)",  glow: "rgba(99,102,241,0.45)"  },
  purple: { fg: "#f0abfc", bg: "rgba(168,85,247,0.10)",  border: "rgba(168,85,247,0.32)",  glow: "rgba(168,85,247,0.45)"  },
  amber:  { fg: "#fde68a", bg: "rgba(252,211,77,0.08)",  border: "rgba(252,211,77,0.30)",  glow: "rgba(252,211,77,0.40)"  },
  green:  { fg: "#86efac", bg: "rgba(74,222,128,0.08)",  border: "rgba(74,222,128,0.28)",  glow: "rgba(74,222,128,0.38)"  },
};

const toItems = (data) => data.map((s) => ({ name: s.title, size: "md" }));

const categories = [
  {
    key: "frontend",
    title: "Frontend",
    label: "01",
    tone: tones.indigo,
    icon: "▲",
    desc: "Web interfaces built for speed, clarity, and user experience.",
    items: toItems(frontSkillsData),
  },
  {
    key: "backend",
    title: "Backend",
    label: "02",
    tone: tones.purple,
    icon: "◆",
    desc: "APIs and data layers engineered for reliability and scale.",
    items: toItems(backSkillsData),
  },
  {
    key: "tools",
    title: "Tools & Cloud",
    label: "03",
    tone: tones.green,
    icon: "✦",
    desc: "Deployment, testing, and dev tools that keep shipping smooth.",
    items: toItems(toolsData),
  },
  {
    key: "ai",
    title: "AI / LLM",
    label: "04",
    tone: tones.amber,
    icon: "✺",
    desc: "LLM orchestration and RAG pipelines for production AI systems.",
    items: toItems(otherSkillsData),
  },
];

function SkillPill({ skill, tone, index, animate }) {
  const [hover, setHover] = useState(false);

  const sizing = {
    lg: { fs: "1rem",    py: "0.5rem",  px: "1rem",    weight: 600 },
    md: { fs: "0.88rem", py: "0.4rem",  px: "0.85rem", weight: 500 },
    sm: { fs: "0.78rem", py: "0.35rem", px: "0.7rem",  weight: 500 },
  }[skill.size];

  const driftAnim = ["drift-a", "drift-b", "drift-c", "drift-d"][index % 4];
  const driftDur = 5 + (index % 5) * 0.7;
  const driftDelay = (index % 7) * 0.3;
  const entryDelay = 0.18 + 0.04 * index;

  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        padding: `${sizing.py} ${sizing.px}`,
        borderRadius: 999,
        fontFamily: "var(--font-display)",
        fontSize: sizing.fs,
        fontWeight: sizing.weight,
        letterSpacing: "-0.005em",
        color: hover ? "#fff" : tone.fg,
        background: hover ? tone.bg.replace(/0\.\d+/, "0.20") : tone.bg,
        border: `1px solid ${hover ? tone.border.replace(/0\.\d+/, "0.6") : tone.border}`,
        boxShadow: hover
          ? `0 6px 20px ${tone.glow}, inset 0 1px 1px rgba(255,255,255,0.15)`
          : "inset 0 1px 1px rgba(255,255,255,0.06)",
        cursor: "default",
        opacity: animate ? 1 : 0,
        transform: animate
          ? (hover ? "translateY(-3px) scale(1.05)" : "translateY(0) scale(1)")
          : "translateY(16px) scale(0.92)",
        transition: `opacity 0.5s ${entryDelay}s cubic-bezier(0.16,1,0.3,1), transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background 0.25s ease, color 0.25s ease, box-shadow 0.3s ease, border-color 0.25s ease`,
        animation: animate ? `${driftAnim} ${driftDur}s ease-in-out ${driftDelay}s infinite` : "none",
        willChange: "transform",
      }}
    >
      <span
        aria-hidden
        style={{
          width: 5, height: 5, borderRadius: 99,
          background: tone.fg,
          boxShadow: hover ? `0 0 8px ${tone.glow}` : "none",
          transition: "box-shadow 0.25s ease",
          flexShrink: 0,
        }}
      />
      {skill.name}
    </span>
  );
}

function CategoryCard({ cat, index }) {
  const [ref, visible] = useReveal(0.15);

  return (
    <div
      ref={ref}
      className="liquid-glass hover-lift"
      style={{
        position: "relative",
        borderRadius: 20,
        padding: "1.75rem 1.6rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ${0.05 * index}s cubic-bezier(0.16,1,0.3,1), transform 0.7s ${0.05 * index}s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease`,
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -80,
          right: -60,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${cat.tone.glow.replace(/0\.\d+/, "0.22")}, transparent 70%)`,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
          <div
            style={{
              width: 42, height: 42,
              borderRadius: 12,
              display: "grid", placeItems: "center",
              background: cat.tone.bg,
              border: `1px solid ${cat.tone.border}`,
              color: cat.tone.fg,
              fontFamily: "var(--font-mono)",
              fontSize: "1.2rem",
            }}
          >
            {cat.icon}
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.16em", color: "var(--muted)", marginBottom: "0.2rem" }}>
              {cat.label}
            </div>
            <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.2rem", letterSpacing: "-0.01em" }}>
              {cat.title}
            </h3>
          </div>
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            padding: "0.3rem 0.6rem",
            borderRadius: 999,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid var(--border)",
            color: "var(--muted)",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {cat.items.length} skills
        </span>
      </div>

      <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.5, position: "relative" }}>
        {cat.desc}
      </p>

      <div
        style={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.55rem",
          paddingTop: "0.25rem",
          borderTop: "1px solid var(--border)",
          marginTop: "auto",
        }}
      >
        {cat.items.map((it, i) => (
          <SkillPill
            key={it.name}
            skill={it}
            tone={cat.tone}
            index={i}
            animate={visible}
          />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const [headRef, headVisible] = useReveal(0.2);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div
          ref={headRef}
          className={`reveal ${headVisible ? "is-visible" : ""}`}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "3.5rem" }}
        >
          <div>
            <div className="section-label">{"// SKILLS"}</div>
            <h2 className="section-heading" style={{ margin: 0 }}>Technical Arsenal</h2>
          </div>
          <p style={{ maxWidth: 360, color: "var(--muted)", margin: 0, fontSize: "0.95rem", lineHeight: 1.6 }}>
            A working toolkit refined over four years of shipping production systems
            across web, IoT, and AI.
          </p>
        </div>

        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "1.25rem",
          }}
        >
          {categories.map((cat, i) => (
            <CategoryCard key={cat.key} cat={cat} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes drift-a { 0%,100% { transform: translate(0, 0); } 50% { transform: translate(2px, -3px); } }
        @keyframes drift-b { 0%,100% { transform: translate(0, 0); } 50% { transform: translate(-3px, 2px); } }
        @keyframes drift-c { 0%,100% { transform: translate(0, 0); } 50% { transform: translate(1px, 3px); } }
        @keyframes drift-d { 0%,100% { transform: translate(0, 0); } 50% { transform: translate(-2px, -2px); } }
      `}</style>
    </section>
  );
}
