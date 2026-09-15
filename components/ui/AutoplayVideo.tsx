"use client";

import { useRef } from "react";

const REPLAY_DELAY_MS = 5000;

/** Decorative looping background video — same autoplay/muted/playsInline treatment used
 * across the site, except it pauses REPLAY_DELAY_MS between loops instead of looping
 * back-to-back (no native `loop`, since that gives no hook to insert the pause). */
export default function AutoplayVideo({
  src,
  className,
  ariaLabel,
}: {
  src: string;
  className?: string;
  ariaLabel?: string;
}) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      video.currentTime = 0;
      // Playback can be legitimately interrupted (tab backgrounded, element
      // unmounted, power-saving throttling) — that's not an error to surface.
      video.play().catch(() => {});
    }, REPLAY_DELAY_MS);
  };

  return (
    <video
      src={src}
      autoPlay
      muted
      playsInline
      preload="metadata"
      aria-hidden={ariaLabel ? undefined : "true"}
      aria-label={ariaLabel}
      onEnded={handleEnded}
      className={className}
    />
  );
}
