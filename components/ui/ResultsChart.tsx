"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const CHART_VALUES = [20, 45, 68, 58, 72, 85];

const Y_STEPS = [0, 20, 40, 60, 80, 100, 120];
const MAX_VALUE = 120;

// The chart's height never changes — only its width tracks the container.
// 181px matches the chart's original fixed-width (308px) render.
const HEIGHT = 181;
const MARGIN = { top: 10, right: 8, bottom: 22, left: 30 };
const PLOT_HEIGHT = HEIGHT - MARGIN.top - MARGIN.bottom;
const BASELINE_Y = MARGIN.top + PLOT_HEIGHT;

const LINE_COLOR = "#015BF7"; // Azul base claro (Figma)
const ANIMATION_DURATION_MS = 3000;
const DEFAULT_WIDTH = 308;

function buildGeometry(width: number, months: string[]) {
  const plotWidth = width - MARGIN.left - MARGIN.right;

  const points = CHART_VALUES.map((value, index) => ({
    x: MARGIN.left + (index / (CHART_VALUES.length - 1)) * plotWidth,
    y: MARGIN.top + PLOT_HEIGHT - (value / MAX_VALUE) * PLOT_HEIGHT,
    label: months[index],
  }));

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const areaPath = `${linePath} L${points[points.length - 1].x},${BASELINE_Y} L${points[0].x},${BASELINE_Y} Z`;
  const lineLength = points
    .slice(1)
    .reduce((total, p, i) => total + Math.hypot(p.x - points[i].x, p.y - points[i].y), 0);

  return { plotWidth, points, linePath, areaPath, lineLength };
}

export default function ResultsChart({
  title,
  ariaLabel,
  months,
}: {
  title: string;
  ariaLabel: string;
  months: string[];
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    // Read the current size synchronously — some environments delay or skip
    // ResizeObserver's initial callback, so don't rely on it alone.
    setWidth(el.getBoundingClientRect().width);

    const observer = new ResizeObserver(([entry]) => {
      const measured = entry.contentRect.width;
      if (measured > 0) setWidth(measured);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { points, linePath, areaPath, lineLength } = useMemo(
    () => buildGeometry(width, months),
    [width, months]
  );

  return (
    <div className="flex w-full flex-col gap-4 rounded-xl border border-contorno-base bg-branco p-4">
      <div className="flex w-full items-center justify-between gap-2.5">
        <p className="text-sm leading-[1.2] font-bold text-texto">{title}</p>
        <span className="inline-flex shrink-0 items-center rounded-full border border-[#34C77B]/40 bg-[#EAFBF1] px-2.5 py-1 text-xs leading-[1.2] font-bold text-[#1FA971]">
          +32%
        </span>
      </div>

      <div ref={wrapperRef} className="w-full">
        <svg
          ref={svgRef}
          width={width}
          height={HEIGHT}
          viewBox={`0 0 ${width} ${HEIGHT}`}
          className="w-full"
          style={{ height: HEIGHT }}
          role="img"
          aria-label={ariaLabel}
        >
          <defs>
            <linearGradient id="results-chart-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={LINE_COLOR} stopOpacity="0.16" />
              <stop offset="100%" stopColor={LINE_COLOR} stopOpacity="0" />
            </linearGradient>
            <clipPath id="results-chart-clip">
              <rect
                x={MARGIN.left}
                y={MARGIN.top}
                height={PLOT_HEIGHT}
                width={visible ? width - MARGIN.left - MARGIN.right : 0}
                style={{ transition: `width ${ANIMATION_DURATION_MS}ms ease-out` }}
              />
            </clipPath>
          </defs>

          {Y_STEPS.map((step) => {
            const y = MARGIN.top + PLOT_HEIGHT - (step / MAX_VALUE) * PLOT_HEIGHT;
            return (
              <g key={step}>
                <line x1={MARGIN.left} x2={width - MARGIN.right} y1={y} y2={y} stroke="#E6E6E6" strokeWidth={1} />
                <text x={MARGIN.left - 6} y={y + 3} textAnchor="end" fontSize={9} fill="#5a6272">
                  {step}
                </text>
              </g>
            );
          })}

          <g clipPath="url(#results-chart-clip)">
            <path d={areaPath} fill="url(#results-chart-fill)" />
          </g>

          <path
            d={linePath}
            fill="none"
            stroke={LINE_COLOR}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={lineLength}
            strokeDashoffset={visible ? 0 : lineLength}
            style={{ transition: `stroke-dashoffset ${ANIMATION_DURATION_MS}ms ease-out` }}
          />

          {points.map((p, index) => (
            <circle
              key={p.label}
              cx={p.x}
              cy={p.y}
              r={visible ? 3.5 : 0}
              fill={LINE_COLOR}
              style={{
                transition: "r 400ms ease-out",
                transitionDelay: `${(index / (points.length - 1)) * (ANIMATION_DURATION_MS - 400)}ms`,
              }}
            />
          ))}

          {points.map((p) => (
            <text key={p.label} x={p.x} y={HEIGHT - 6} textAnchor="middle" fontSize={9} fill="#5a6272">
              {p.label}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}
