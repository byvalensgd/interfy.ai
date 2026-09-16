"use client";

import { useEffect, useRef, type CSSProperties } from "react";

const DEFAULT_REPLAY_DELAY_MS = 5000;

/** Decorative looping background video — same muted/playsInline treatment used across
 * the site. Playback only starts once the video scrolls into view (not on page load),
 * via the same IntersectionObserver approach as Reveal.tsx. By default it pauses
 * `replayDelayMs` between loops instead of looping back-to-back (no native `loop`,
 * since that gives no hook to insert the pause); pass `loopImmediately` to opt a
 * specific video out of that pause and loop back-to-back instead. */
export default function AutoplayVideo({
  src,
  className,
  style,
  ariaLabel,
  loopImmediately = false,
  replayDelayMs = DEFAULT_REPLAY_DELAY_MS,
  playbackRate = 1,
}: {
  src: string;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  loopImmediately?: boolean;
  replayDelayMs?: number;
  /** Native HTMLVideoElement.playbackRate — 1 is normal speed, 0.5 is half speed. */
  playbackRate?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = playbackRate;
  }, [playbackRate]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          observer.unobserve(video);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const handleEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      video.currentTime = 0;
      // Playback can be legitimately interrupted (tab backgrounded, element
      // unmounted, power-saving throttling) — that's not an error to surface.
      video.play().catch(() => {});
    }, replayDelayMs);
  };

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop={loopImmediately}
      playsInline
      preload="metadata"
      aria-hidden={ariaLabel ? undefined : "true"}
      aria-label={ariaLabel}
      onEnded={loopImmediately ? undefined : handleEnded}
      className={className}
      style={style}
    />
  );
}
