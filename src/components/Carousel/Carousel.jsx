/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";

function CarouselButton({ dir, disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir < 0 ? "Previous" : "Next"}
      style={{
        width: 34, height: 34,
        borderRadius: 999,
        background: disabled ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)",
        border: "1px solid var(--border)",
        color: disabled ? "var(--muted)" : "var(--fg)",
        cursor: disabled ? "not-allowed" : "pointer",
        display: "grid",
        placeItems: "center",
        opacity: disabled ? 0.4 : 1,
        transition: "all 0.25s ease",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {dir < 0 ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 6l6 6-6 6" />}
      </svg>
    </button>
  );
}

export function MobileCarousel({
  children,
  desktopClassName = "",
  desktopStyle = {},
  breakpoint = 768,
  cardSelector = "[data-carousel-card]",
}) {
  const scrollerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );
  const [activeIdx, setActiveIdx] = useState(0);
  const [count, setCount] = useState(React.Children.count(children));

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  useEffect(() => {
    if (!isMobile) return;
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      const cards = el.querySelectorAll(cardSelector);
      setCount(cards.length);
      if (!cards.length) return;
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0, bestDist = Infinity;
      cards.forEach((c, i) => {
        const mid = c.offsetLeft + c.offsetWidth / 2;
        const d = Math.abs(mid - center);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      setActiveIdx(best);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    return () => el.removeEventListener("scroll", update);
  }, [isMobile, children, cardSelector]);

  const scrollToIdx = (i) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll(cardSelector);
    const c = cards[i];
    if (c) {
      el.scrollTo({
        left: c.offsetLeft - (el.clientWidth - c.offsetWidth) / 2,
        behavior: "smooth",
      });
    }
  };

  const nudge = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll(cardSelector);
    if (!cards.length) return;
    const next = Math.min(Math.max(activeIdx + dir, 0), cards.length - 1);
    scrollToIdx(next);
  };

  if (!isMobile) {
    return (
      <div className={desktopClassName} style={desktopStyle}>
        {children}
      </div>
    );
  }

  return (
    <div style={{ position: "relative", margin: "0 -1.25rem" }}>
      <div
        ref={scrollerRef}
        className="mc-scroller"
        style={{
          display: "flex",
          gap: "1rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          padding: "0.5rem 1.25rem 1rem",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            "data-carousel-card": true,
            style: {
              ...(child.props.style || {}),
              flex: "0 0 86%",
              maxWidth: "86%",
              scrollSnapAlign: "center",
              minHeight: child.props.style?.minHeight || 360,
            },
          })
        )}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.85rem",
          marginTop: "1rem",
          padding: "0 1.25rem",
        }}
      >
        <CarouselButton dir={-1} disabled={activeIdx === 0} onClick={() => nudge(-1)} />

        <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
          {Array.from({ length: count }).map((_, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={i}
                onClick={() => scrollToIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: isActive ? 22 : 7,
                  height: 7,
                  borderRadius: 99,
                  border: "none",
                  background: isActive ? "var(--accent-grad)" : "rgba(255,255,255,0.15)",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                }}
              />
            );
          })}
        </div>

        <CarouselButton dir={1} disabled={activeIdx === count - 1} onClick={() => nudge(1)} />
      </div>

      <style>{`
        .mc-scroller::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
