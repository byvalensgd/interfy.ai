"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getCompleteBoxBasis } from "@/lib/completeBox";

type Post = { category: string; title: string; excerpt: string; date: string; readTime: string };

const accentByIndex = ["bg-ecm", "bg-bpm", "bg-swc", "bg-dss", "bg-cic", "bg-lvs-voice"];

export default function BlogGrid({
  ariaLabel,
  heading,
  categoriesLabel,
  categories,
  allLabel,
  comingSoonLabel,
  posts,
}: {
  ariaLabel: string;
  heading: string;
  categoriesLabel: string;
  categories: string[];
  allLabel: string;
  comingSoonLabel: string;
  posts: Post[];
}) {
  const [active, setActive] = useState<string | null>(null);
  const visible = active ? posts.filter((p) => p.category === active) : posts;
  const basis = getCompleteBoxBasis(visible.length);

  return (
    <section id="todos-artigos" aria-label={ariaLabel} className="flex scroll-mt-[calc(var(--header-height)+20px)] justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-8">
        <h2 className="text-lg font-extrabold leading-[1.2] text-texto">{heading}</h2>
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

        {/* "Complete Box" (see lib/completeBox.ts): flex-basis in place of
            grid-cols so a short last row (grow) stretches to fill instead of
            a CSS Grid leaving it blank — visible.length changes with the
            category filter above, so the basis is recomputed every render. */}
        <ul className="flex w-full flex-wrap gap-6">
          {visible.map((post, i) => (
            <Reveal key={post.title} delayMs={(i % 4) * 80} className={`grow ${basis}`}>
              <li className="relative flex min-h-[220px] w-full flex-col items-start justify-end gap-2.5 overflow-hidden rounded-[20px] p-5">
                <Image
                  src="/images/blog/post-card-bg.webp"
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="-z-10 object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/0 to-black/50" />
                <span
                  className={`flex h-[19px] items-center rounded-full px-2.5 text-xs font-medium leading-[1.2] text-branco ${accentByIndex[i % accentByIndex.length]}`}
                >
                  {post.category}
                </span>
                <p className="line-clamp-2 text-base leading-[1.3] font-semibold text-branco">{post.title}</p>
              </li>
            </Reveal>
          ))}
        </ul>

        <p className="text-sm font-medium leading-[1.2] text-texto-medio">{comingSoonLabel}</p>
      </div>
    </section>
  );
}
