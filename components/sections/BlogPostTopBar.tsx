"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, X } from "lucide-react";
import type { BlogSearchDict } from "@/components/sections/BlogSearchBar";

type SearchPost = { category: string; title: string; excerpt: string };

/** Slim header for an open blog post: back-to-listing link + the same
 * site-wide post search used on /blog, styled as the outlined pill from the
 * Figma "opened post" frame instead of the listing page's filled search. */
export default function BlogPostTopBar({
  backHref,
  backLabel,
  search,
  posts,
}: {
  backHref: string;
  backLabel: string;
  search: BlogSearchDict;
  posts: SearchPost[];
}) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const queryWords = normalizedQuery.split(/\s+/).filter(Boolean);

  const results = useMemo(() => {
    if (queryWords.length === 0) return [];
    return posts.filter((post) => {
      const haystack = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase();
      return queryWords.every((word) => haystack.includes(word));
    });
  }, [posts, queryWords]);

  return (
    <section className="relative z-30 flex justify-center bg-branco px-5 pt-8">
      <div className="flex w-full max-w-[1300px] items-center justify-between gap-4 border-b border-contorno-base pb-5">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2.5 text-base font-bold leading-[1.2] text-azul-base hover:underline"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {backLabel}
        </Link>

        <div className="relative w-full max-w-[260px]">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={search.placeholder}
            aria-label={search.ariaLabel}
            className="h-[42px] w-full rounded-full border border-texto-sem-destaque bg-branco pr-11 pl-5 text-sm font-bold text-texto placeholder:text-texto-sem-destaque focus:border-azul-base focus:outline-none focus:ring-2 focus:ring-azul-base/20 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label={search.clearLabel}
              className="absolute top-1/2 right-4 flex size-4 -translate-y-1/2 items-center justify-center text-texto-medio hover:text-azul-base"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          ) : (
            <Search
              className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-texto-sem-destaque"
              aria-hidden="true"
            />
          )}

          {normalizedQuery && (
            <div className="absolute top-full right-0 z-20 mt-3 flex w-[340px] flex-col gap-3 rounded-2xl border border-contorno-base bg-branco p-4 shadow-[0px_16px_40px_rgba(20,30,60,0.16)]">
              <p className="text-xs font-bold tracking-wider text-texto-medio uppercase">
                {results.length} {search.resultsCountLabel}
              </p>
              {results.length === 0 ? (
                <p className="text-sm font-medium text-texto-medio">{search.noResultsLabel}</p>
              ) : (
                <ul className="flex max-h-[360px] flex-col gap-2 overflow-y-auto py-1 pr-1">
                  {results.map((post) => (
                    <li key={post.title}>
                      <a
                        href="#todos-artigos"
                        className="flex w-full flex-col gap-1 rounded-xl border border-contorno-base bg-bg-base p-3 text-left transition-colors hover:border-azul-base"
                      >
                        <span className="text-xs font-bold text-azul-base">{post.category}</span>
                        <p className="min-h-[2.8em] text-sm leading-[1.4] font-medium text-texto-medio">
                          {post.excerpt}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
