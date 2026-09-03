"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_MS = 3000;
const ARROWS_VISIBLE_MS = 3000;

export default function HeroSlideshow({
  images,
  alt,
  className = "",
}: {
  images: string[];
  alt: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [arrowsVisible, setArrowsVisible] = useState(false);
  const arrowsTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + images.length) % images.length);
    },
    [images.length]
  );

  const showArrows = useCallback(() => {
    setArrowsVisible(true);
    if (arrowsTimerRef.current) clearTimeout(arrowsTimerRef.current);
    arrowsTimerRef.current = setTimeout(() => setArrowsVisible(false), ARROWS_VISIBLE_MS);
  }, []);

  // Autoplay — paused whenever the pointer is over the slideshow.
  useEffect(() => {
    if (hovering) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [hovering, images.length]);

  useEffect(() => {
    return () => {
      if (arrowsTimerRef.current) clearTimeout(arrowsTimerRef.current);
    };
  }, []);

  const handleMouseLeave = () => {
    setHovering(false);
    setArrowsVisible(false);
    if (arrowsTimerRef.current) clearTimeout(arrowsTimerRef.current);
  };

  const handleContainerClick = () => {
    goTo(index + 1);
    showArrows();
  };

  return (
    <div
      className={`relative cursor-pointer select-none ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleContainerClick}
      role="group"
      aria-roledescription="carousel"
      aria-label={alt}
    >
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <filter id="hero-slideshow-levels" colorInterpolationFilters="sRGB">
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0 0.1 0.2 0.3 0.4 0.5 0.61 0.74 0.9 1 1" />
            <feFuncG type="table" tableValues="0 0.1 0.2 0.3 0.4 0.5 0.61 0.74 0.9 1 1" />
            <feFuncB type="table" tableValues="0 0.1 0.2 0.3 0.4 0.5 0.61 0.74 0.9 1 1" />
          </feComponentTransfer>
        </filter>
      </svg>

      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === index ? alt : ""}
          aria-hidden={i === index ? undefined : true}
          fill
          priority={i === 0}
          loading={i === 0 ? undefined : "eager"}
          sizes="(min-width: 1024px) 50vw, 100vw"
          style={{ filter: "url(#hero-slideshow-levels)" }}
          className={`object-contain transition-opacity duration-500 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <button
        type="button"
        aria-label="Slide anterior"
        onClick={(e) => {
          e.stopPropagation();
          goTo(index - 1);
          showArrows();
        }}
        className={`absolute left-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-branco transition-opacity duration-300 hover:opacity-70 ${
          arrowsVisible ? "opacity-40" : "pointer-events-none opacity-0"
        }`}
      >
        <ChevronLeft className="size-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Próximo slide"
        onClick={(e) => {
          e.stopPropagation();
          goTo(index + 1);
          showArrows();
        }}
        className={`absolute right-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-branco transition-opacity duration-300 hover:opacity-70 ${
          arrowsVisible ? "opacity-40" : "pointer-events-none opacity-0"
        }`}
      >
        <ChevronRight className="size-6" aria-hidden="true" />
      </button>
    </div>
  );
}
