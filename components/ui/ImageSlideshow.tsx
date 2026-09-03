"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImageSlideshow({
  images,
  alt,
  intervalMs = 3000,
  className = "",
}: {
  images: string[];
  alt: string;
  intervalMs?: number;
  className?: string;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div className={`relative ${className}`}>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === active ? alt : ""}
          aria-hidden={i === active ? undefined : true}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          priority={i === 0}
          className={`rounded-[12px] object-cover transition-opacity duration-700 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
