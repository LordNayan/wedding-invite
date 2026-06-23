"use client";

import { useState } from "react";

interface GalleryItem {
  src: string;
  caption: string;
}

export default function StoryCarousel({ items }: { items: readonly GalleryItem[] }) {
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }

  function next() {
    setIndex((i) => (i + 1) % items.length);
  }

  const item = items[index];

  return (
    <div className="carousel">
      <button className="carousel__btn carousel__btn--prev" onClick={prev} aria-label="Previous">
        ‹
      </button>

      <div className="carousel__slide">
        <img key={index} src={item.src} alt={item.caption} />
        <span className="story__caption">{item.caption}</span>
      </div>

      <button className="carousel__btn carousel__btn--next" onClick={next} aria-label="Next">
        ›
      </button>

      <div className="carousel__dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot ${i === index ? "carousel__dot--active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .carousel {
          position: relative;
          width: 100%;
          max-width: 520px;
          margin: 2rem auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .carousel__slide {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: 4px;
        }
        .carousel__slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .story__caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0.75rem 1rem;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.55));
          color: #f6ecd7;
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-align: center;
        }
        .carousel__btn {
          position: absolute;
          top: 45%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.35);
          color: #f6ecd7;
          border: none;
          font-size: 2.2rem;
          line-height: 1;
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 50%;
          cursor: pointer;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .carousel__btn:hover {
          background: rgba(0, 0, 0, 0.6);
        }
        .carousel__btn--prev {
          left: 0.5rem;
        }
        .carousel__btn--next {
          right: 0.5rem;
        }
        .carousel__dots {
          display: flex;
          gap: 0.5rem;
        }
        .carousel__dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          border: none;
          background: rgba(230, 210, 170, 0.35);
          cursor: pointer;
          padding: 0;
          transition: background 0.2s;
        }
        .carousel__dot--active {
          background: #e9cf9a;
        }
      `}</style>
    </div>
  );
}
