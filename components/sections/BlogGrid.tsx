"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

type Post = { category: string; title: string; excerpt: string; date: string; readTime: string };

const accentByIndex = ["bg-ecm", "bg-bpm", "bg-swc", "bg-dss", "bg-cic", "bg-lvs-voice"];

export default function BlogGrid({
  ariaLabel,
  categoriesLabel,
  categories,
  allLabel,
  comingSoonLabel,
  posts,
}: {
  ariaLabel: string;
  categoriesLabel: string;
  categories: string[];
  allLabel: string;
  comingSoonLabel: string;
  posts: Post[];
}) {
  const [active, setActive] = useState<string | null>(null);
  const visible = active ? posts.filter((p) => p.category === active) : posts;

  return (
    <section aria-label={ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-8">
        <ul aria-label={categoriesLabel} className="flex w-full flex-wrap items-center justify-center gap-2.5">
          <li>
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-pressed={active === null}
              className={`rounded-full border px-4 py-2 text-sm font-bold leading-[1.2] transition-colors ${
                active === null ? "border-azul-base bg-azul-base text-branco" : "border-contorno-base bg-branco text-texto hover:border-azul-base"
              }`}
            >
              {allLabel}
            </button>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <button
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={`rounded-full border px-4 py-2 text-sm font-bold leading-[1.2] transition-colors ${
                  active === category ? "border-azul-base bg-azul-base text-branco" : "border-contorno-base bg-branco text-texto hover:border-azul-base"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post, i) => (
            <Reveal key={post.title} delayMs={(i % 3) * 80}>
              <li className="flex h-full flex-col overflow-hidden rounded-2xl border border-contorno-base bg-branco">
                <div className={`relative flex h-[140px] w-full items-end p-4 ${accentByIndex[i % accentByIndex.length]}`}>
                  <span className="rounded-full bg-branco/90 px-3 py-1 text-xs font-bold leading-[1.2] text-texto">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 p-5">
                  <p className="text-base leading-[1.3] font-bold text-texto">{post.title}</p>
                  <p className="flex-1 text-sm leading-[1.4] font-medium text-texto-medio">{post.excerpt}</p>
                  <p className="text-xs leading-[1.2] font-medium text-texto-medio">
                    {post.date} · {post.readTime}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>

        <p className="text-sm font-medium leading-[1.2] text-texto-medio">{comingSoonLabel}</p>
      </div>
    </section>
  );
}
