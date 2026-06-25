"use client";
import { useEffect, useState } from "react";

export default function ScrollCue() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const fadeStart = total * 0.88;
      setOpacity(
        scrolled < fadeStart
          ? 1
          : Math.max(0, 1 - (scrolled - fadeStart) / (total * 0.12))
      );
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sc" style={{ opacity, transition: "opacity 0.6s ease" }} aria-hidden="true">
      <div className="sc__mouse">
        <div className="sc__dot" />
      </div>
      <span className="sc__label">scroll</span>

      <style jsx>{`
        .sc {
          position: fixed;
          bottom: 2.25rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 60;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: rgba(255, 248, 220, 0.92);
          filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.60));
          pointer-events: none;
        }

        .sc__mouse {
          width: 26px;
          height: 42px;
          border: 2px solid currentColor;
          border-radius: 13px;
          position: relative;
        }

        .sc__dot {
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #d4a535;
          box-shadow: 0 0 6px 2px rgba(212, 165, 53, 0.7);
          animation: sc-dot 2s ease-in-out infinite;
        }

        .sc__label {
          font-family: var(--font-display);
          font-size: 9px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          opacity: 0.8;
        }

        @keyframes sc-dot {
          0%        { top: 6px;  opacity: 1;   }
          70%       { top: 22px; opacity: 0.4; }
          71%, 100% { top: 6px;  opacity: 0;   }
        }

        @media (max-width: 480px) {
          .sc { bottom: 1.5rem; }
        }
      `}</style>
    </div>
  );
}
