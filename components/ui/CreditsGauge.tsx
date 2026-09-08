"use client";

import { useEffect, useRef, useState } from "react";

const RADIUS = 86;
const STROKE = 14;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const DURATION_MS = 3000;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function CreditsGauge({
  percent,
  label,
  value,
  sublabel,
}: {
  percent: number;
  label: string;
  value: number;
  sublabel: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame: number | undefined;
    let cancelled = false;

    const animate = () => {
      const start = performance.now();
      const tick = (now: number) => {
        if (cancelled) return;
        const t = Math.min((now - start) / DURATION_MS, 1);
        setProgress(easeOutCubic(t));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);

    return () => {
      cancelled = true;
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  const dash = (CIRCUMFERENCE * percent * progress) / 100;
  const displayValue = Math.round(value * progress).toLocaleString("pt-BR");

  return (
    <div ref={ref} className="relative flex aspect-square w-full max-w-[200px] shrink-0 items-center justify-center">
      <svg viewBox="0 0 200 200" className="size-full -rotate-90">
        <circle cx="100" cy="100" r={RADIUS} fill="none" className="stroke-contorno-base" strokeWidth={STROKE} />
        <circle
          cx="100"
          cy="100"
          r={RADIUS}
          fill="none"
          stroke="url(#agentes-credits-gauge-gradient)"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${CIRCUMFERENCE - dash}`}
        />
        <defs>
          <linearGradient id="agentes-credits-gauge-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2fb79c" />
            <stop offset="100%" stopColor="#015bf7" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center gap-2 text-center">
        <p className="text-base leading-[1.2] font-bold text-texto">{label}</p>
        <p className="text-[clamp(1.5rem,0.8333vw+1.3333rem,2rem)] leading-[1.2] font-bold text-texto">{displayValue}</p>
        <p className="text-base leading-[1.2] font-bold text-texto">{sublabel}</p>
      </div>
    </div>
  );
}
