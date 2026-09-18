"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

type Post = { category: string; title: string; excerpt: string; date: string; readTime: string };

const accentByIndex = ["bg-ecm", "bg-bpm", "bg-swc", "bg-dss", "bg-cic", "bg-lvs-voice"];

// Fixed 3-column x 4-row page (see below) instead of "Complete Box" balancing —
// this block paginates rather than reflowing every post into one stretched grid.
const PAGE_SIZE = 12;
const cardBasis = "basis-[calc(50%-0.75rem)] md:basis-[calc(33.3333%-1rem)]";

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
  const [page, setPage] = useState(1);
  const visible = active ? posts.filter((p) => p.category === active) : posts;
  const totalPages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const pageItems = visible.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleCategoryChange(category: string | null) {
    setActive(category);
    setPage(1);
  }

  return (
    <section id="todos-artigos" aria-label={ariaLabel} className="flex scroll-mt-[calc(var(--header-height)+20px)] justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-8">
        <h2 className="text-lg font-extrabold leading-[1.2] text-texto">{heading}</h2>
        <ul aria-label={categoriesLabel} className="flex w-full flex-wrap items-center justify-center gap-2.5">
          <li>
            <button
              type="button"
              onClick={() => handleCategoryChange(null)}
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
                onClick={() => handleCategoryChange(category)}
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

        <ul className="flex w-full flex-wrap gap-6">
          {pageItems.map((post, i) => (
            <Reveal key={post.title} delayMs={(i % 3) * 80} className={`grow ${cardBasis}`}>
              <li className="relative flex min-h-[220px] w-full flex-col items-start justify-end gap-2.5 overflow-hidden rounded-[20px] p-5">
                <Image
                  src="/images/blog/post-card-bg.webp"
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
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

        {totalPages > 1 && (
          <ul className="flex items-center gap-2.5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <li key={n}>
                <button
                  type="button"
                  onClick={() => setPage(n)}
                  aria-current={page === n}
                  className={`flex size-9 items-center justify-center rounded-full border text-sm font-bold leading-[1.2] transition-colors ${
                    page === n ? "border-azul-base bg-azul-base text-branco" : "border-contorno-base bg-branco text-texto hover:border-azul-base"
                  }`}
                >
                  {n}
                </button>
              </li>
            ))}
          </ul>
        )}

        <p className="text-sm font-medium leading-[1.2] text-texto-medio">{comingSoonLabel}</p>
      </div>
    </section>
  );
}
