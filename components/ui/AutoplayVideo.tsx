"use client";

import { useRef, type CSSProperties } from "react";

const DEFAULT_REPLAY_DELAY_MS = 5000;

/** Decorative looping background video — same autoplay/muted/playsInline treatment used
 * across the site. By default it pauses `replayDelayMs` between loops instead of looping
 * back-to-back (no native `loop`, since that gives no hook to insert the pause); pass
 * `loopImmediately` to opt a specific video out of that pause and loop back-to-back instead. */
export default function AutoplayVideo({
  src,
  className,
  style,
  ariaLabel,
  loopImmediately = false,
  replayDelayMs = DEFAULT_REPLAY_DELAY_MS,
}: {
  src: string;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  loopImmediately?: boolean;
  replayDelayMs?: number;
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
    }, replayDelayMs);
  };

  return (
    <video
      src={src}
      autoPlay
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
