"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Real Figma exports of the CIC (Connect) app screen and its two "TELA CHEIA"
// states, crossfaded to simulate the conversation progressing — see the PR
// that added this for the Figma node ids each one came from.
const SCREENS = [
  "/connect/mockup/screens/screen-1.webp",
  "/connect/mockup/screens/screen-2.webp",
  "/connect/mockup/screens/screen-3.webp",
];

const SLIDE_MS = 3500;
const FADE_MS = 600;

export default function ConnectAppSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SCREENS.length), SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      {SCREENS.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="(min-width: 1024px) 55vw, 90vw"
          priority={i === 0}
          className="object-contain object-top transition-opacity ease-in-out"
          style={{ opacity: i === index ? 1 : 0, transitionDuration: `${FADE_MS}ms` }}
        />
      ))}
    </div>
  );
}
