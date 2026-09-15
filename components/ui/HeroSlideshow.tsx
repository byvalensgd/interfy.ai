"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_MS = 3000;
const ARROWS_VISIBLE_MS = 3000;
// Hand off to slide 2 this far before the intro video's natural end, so the
// swap lands before the last beat of the clip rather than right on top of it.
const INTRO_HANDOFF_LEAD_S = 0.5;

export type SlideshowIntroVideo = {
  src: string;
  /** Delay, in ms, after mount before the video plays over the first slide. */
  delayMs: number;
};

export default function HeroSlideshow({
  images,
  alt,
  prevLabel,
  nextLabel,
  className = "",
  introVideo,
}: {
  images: string[];
  alt: string;
  prevLabel: string;
  nextLabel: string;
  className?: string;
  /** Plays once over the first slide, after `delayMs` — e.g. an animated
   * transition into the product screenshots — then hands off to slide 2 and
   * autoplay proceeds as usual. Omit for the plain image slideshow. */
  introVideo?: SlideshowIntroVideo;
}) {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [arrowsVisible, setArrowsVisible] = useState(false);
  const [introPlaying, setIntroPlaying] = useState(false);
  const [introDone, setIntroDone] = useState(!introVideo);
  // True for the one paint right after the intro video ends, so the video-to-slide-2
  // handoff is an instant cut instead of the usual 500ms crossfade.
  const [instantSwap, setInstantSwap] = useState(false);
  const arrowsTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const introHandedOffRef = useRef(false);

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

  // Intro video — waits `delayMs` over slide 1, plays once, then hands off to slide 2.
  // No `autoPlay` attribute: that would start the video decoding at mount time,
  // so by the time it's revealed after the delay it'd already be partway through.
  // Playback is kicked off here instead, exactly when the video becomes visible.
  useEffect(() => {
    if (!introVideo) return;
    const id = setTimeout(() => {
      setIntroPlaying(true);
      const video = introVideoRef.current;
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    }, introVideo.delayMs);
    return () => clearTimeout(id);
  }, [introVideo]);

  const handleIntroEnded = () => {
    if (introHandedOffRef.current) return;
    introHandedOffRef.current = true;
    setInstantSwap(true);
    setIntroPlaying(false);
    setIntroDone(true);
    goTo(1);
  };

  // Fires a bit ahead of `onEnded` — hand off as soon as we're within
  // INTRO_HANDOFF_LEAD_S of the clip's end, instead of waiting for it to fully finish.
  const handleIntroTimeUpdate = () => {
    const video = introVideoRef.current;
    if (!video || !video.duration) return;
    if (video.duration - video.currentTime <= INTRO_HANDOFF_LEAD_S) {
      handleIntroEnded();
    }
  };

  // Re-enable the crossfade right after the instant swap has painted, so the
  // *next* slide change (the first regular autoplay tick) fades normally again.
  useEffect(() => {
    if (!instantSwap) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setInstantSwap(false)));
    return () => cancelAnimationFrame(id);
  }, [instantSwap]);

  // Autoplay — paused during the intro video (and its wait) and whenever the pointer is over the slideshow.
  useEffect(() => {
    if (hovering || !introDone) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [hovering, introDone, images.length]);

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
    if (introPlaying) return;
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
          className={`object-contain ${instantSwap ? "" : "transition-opacity duration-500"} ${
            i === index && !introPlaying ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {introVideo && (
        <video
          ref={introVideoRef}
          src={introVideo.src}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onTimeUpdate={handleIntroTimeUpdate}
          onEnded={handleIntroEnded}
          className={`absolute inset-0 size-full object-contain ${instantSwap ? "" : "transition-opacity duration-500"} ${
            introPlaying ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />
      )}

      <button
        type="button"
        aria-label={prevLabel}
        onClick={(e) => {
          e.stopPropagation();
          if (introPlaying) return;
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
        aria-label={nextLabel}
        onClick={(e) => {
          e.stopPropagation();
          if (introPlaying) return;
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
