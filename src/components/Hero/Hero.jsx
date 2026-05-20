import { useState, useEffect, useRef } from "react";
import { scrollToId } from "../../hooks";

export function Hero() {
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const [cursor, setCursor] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    let raf;
    const fadeDur = 0.5;

    const tick = () => {
      if (v.duration && !isNaN(v.duration)) {
        const t = v.currentTime;
        const d = v.duration;
        let op = 1;
        if (t < fadeDur) op = t / fadeDur;
        else if (t > d - fadeDur) op = Math.max(0, (d - t) / fadeDur);
        v.style.opacity = op.toFixed(3);
      }
      raf = requestAnimationFrame(tick);
    };

    const onEnded = () => {
      v.style.opacity = "0";
      setTimeout(() => {
        v.currentTime = 0;
        v.play().catch(() => { });
      }, 100);
    };

    v.muted = true;
    v.playsInline = true;
    v.play().catch(() => { });
    raf = requestAnimationFrame(tick);
    v.addEventListener("ended", onEnded);

    return () => {
      cancelAnimationFrame(raf);
      v.removeEventListener("ended", onEnded);
    };
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      setCursor({ x: e.clientX - r.left, y: e.clientY - r.top });
    };
    const onLeave = () => setCursor({ x: -1000, y: -1000 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const techs = ["Node.js", "Next.js", "React", "TypeScript", "MySQL", "Go", "Docker", "Redis"];
  const marqueeRow = [...techs, ...techs];

  const headlineWords = [
    { text: "Full-Stack", gradient: false },
    { text: "Developer.", gradient: true },
  ];

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: 100,
      }}
    >
      <video
        ref={videoRef}
        autoPlay={false}
        muted
        playsInline
        loop={false}
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0,
          transition: "opacity 0.05s linear",
          zIndex: 0,
        }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4"
          type="video/mp4"
        />
      </video>

      <div
        aria-hidden
        style={{
          position: "absolute",
          width: 984,
          height: 527,
          maxWidth: "100%",
          background: "#030712",
          filter: "blur(82px)",
          opacity: 0.9,
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          left: cursor.x - 300,
          top: cursor.y - 300,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(99,102,241,0.10) 35%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 2,
          mixBlendMode: "screen",
          transition: "left 0.15s ease-out, top 0.15s ease-out",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 3, textAlign: "center", paddingTop: "4rem", paddingBottom: "6rem" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.4rem 0.95rem",
            borderRadius: 999,
            border: "1px solid var(--border)",
            background: "rgba(255,255,255,0.02)",
            backdropFilter: "blur(12px)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            color: "var(--subtext)",
            marginBottom: "2rem",
            opacity: 0,
            animation: "fade-up 0.8s 0.1s cubic-bezier(0.16,1,0.3,1) forwards",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: 99, background: "#4ade80", boxShadow: "0 0 8px #4ade80", animation: "pulse-dot 1.8s ease-in-out infinite" }} />
          AVAILABLE FOR HIRE · BANGKOK
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(64px, 10vw, 140px)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.02,
            margin: 0,
            color: "var(--fg)",
            textWrap: "balance",
          }}
        >
          {headlineWords.map((w, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                marginRight: i < headlineWords.length - 1 ? "0.3em" : 0,
                opacity: 0,
                animation: `hero-word 1s ${0.2 + i * 0.15}s cubic-bezier(0.16,1,0.3,1) forwards`,
                background: w.gradient ? "var(--accent-grad)" : "transparent",
                WebkitBackgroundClip: w.gradient ? "text" : "border-box",
                backgroundClip: w.gradient ? "text" : "border-box",
                color: w.gradient ? "transparent" : "var(--fg)",
                willChange: "transform, opacity",
              }}
            >
              {w.text}
            </span>
          ))}
        </h1>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.15rem",
            color: "var(--subtext)",
            maxWidth: 520,
            margin: "1.75rem auto 0",
            lineHeight: 1.55,
            opacity: 0,
            animation: "fade-up 0.9s 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
          }}
        >
          Turning ideas into production-ready products.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            marginTop: "2.5rem",
            flexWrap: "wrap",
            opacity: 0,
            animation: "fade-up 0.9s 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
          }}
        >
          <a className="btn-primary" href="#projects" onClick={(e) => { e.preventDefault(); scrollToId("projects"); }}>
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </a>
          <a
            className="liquid-glass"
            href="/assets/cv/warut_meksawang_fullstack.pdf"
            download
            style={{
              padding: "0.85rem 1.75rem",
              borderRadius: 999,
              color: "var(--fg)",
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              textDecoration: "none",
              fontSize: "0.95rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" /></svg>
            Download CV
          </a>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 180,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          color: "var(--muted)",
          opacity: 0,
          animation: "fade-up 1s 1.4s cubic-bezier(0.16,1,0.3,1) forwards",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
        }}
      >

        <div style={{ animation: "bounce-down 2s ease-in-out infinite" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          paddingBottom: 40,
          zIndex: 3,
          opacity: 0,
          animation: "fade-up 1s 1.6s cubic-bezier(0.16,1,0.3,1) forwards",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <span style={{ opacity: 0.5, fontSize: "0.82rem", fontFamily: "var(--font-mono)", whiteSpace: "nowrap", letterSpacing: "0.08em" }}>
            {"// Tech I work with"}
          </span>
          <div style={{
            flex: 1,
            overflow: "hidden",
            position: "relative",
            maskImage: "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
          }}>
            <div style={{
              display: "flex",
              gap: "0.75rem",
              width: "max-content",
              animation: "marquee 20s linear infinite",
            }}>
              {marqueeRow.map((t, i) => (
                <span
                  key={i}
                  className="liquid-glass"
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: 999,
                    color: "var(--subtext)",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
