"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface GalleryItem {
  src: string;
  caption: string;
}

export default function StoryCarousel({ items }: { items: readonly GalleryItem[] }) {
  // Two image slots that alternate; active slot fades in, inactive stays beneath
  const [slots, setSlots] = useState<[number, number]>([0, 0]);
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0);
  const [target, setTarget] = useState(0); // drives dots
  const touchStartX = useRef<number | null>(null);

  function goTo(newIndex: number) {
    if (newIndex === target) return;
    const nextSlot: 0 | 1 = activeSlot === 0 ? 1 : 0;
    setSlots((prev) => {
      const updated: [number, number] = [prev[0], prev[1]];
      updated[nextSlot] = newIndex;
      return updated;
    });
    setActiveSlot(nextSlot);
    setTarget(newIndex);
  }

  const next = useCallback(() => {
    setTarget((t) => {
      const newIndex = (t + 1) % items.length;
      const nextSlot: 0 | 1 = activeSlot === 0 ? 1 : 0;
      setSlots((prev) => {
        const updated: [number, number] = [prev[0], prev[1]];
        updated[nextSlot] = newIndex;
        return updated;
      });
      setActiveSlot(nextSlot);
      return newIndex;
    });
  }, [activeSlot, items.length]);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      goTo(delta < 0
        ? (target + 1) % items.length
        : (target - 1 + items.length) % items.length
      );
    }
    touchStartX.current = null;
  }

  return (
    <div className="carousel">
      <div
        className="carousel__slide"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {([0, 1] as const).map((slot) => (
          <img
            key={slot}
            src={items[slots[slot]].src}
            alt={items[slots[slot]].caption}
            className={`carousel__img ${slot === activeSlot ? "carousel__img--active" : ""}`}
          />
        ))}
        <span className="story__caption">{items[target].caption}</span>
      </div>

      <div className="carousel__dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot ${i === target ? "carousel__dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .carousel {
          width: 100%;
          max-width: 420px;
          margin: 2rem auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }
        .carousel__slide {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: 2px;
          outline: 1px solid rgba(185, 146, 78, 0.5);
          outline-offset: 6px;
          box-shadow:
            0 0 0 7px rgba(247, 241, 230, 0.9),
            0 0 0 8px rgba(185, 146, 78, 0.3),
            0 24px 60px rgba(67, 56, 42, 0.22);
        }
        .carousel__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.7s ease;
        }
        .carousel__img--active {
          opacity: 1;
        }
        .story__caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 1;
          padding: 2rem 1.25rem 1rem;
          background: linear-gradient(transparent, rgba(28, 21, 12, 0.65));
          color: #f6ecd7;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          font-style: italic;
          text-align: center;
        }
        .carousel__dots {
          display: flex;
          gap: 0.6rem;
          align-items: center;
        }
        .carousel__dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          border: none;
          background: rgba(185, 146, 78, 0.3);
          cursor: pointer;
          padding: 0;
          transition: background 0.3s, transform 0.3s;
        }
        .carousel__dot--active {
          background: #b9924e;
          transform: scale(1.5);
        }
      `}</style>
    </div>
  );
}
