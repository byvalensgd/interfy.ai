"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";

type SearchPost = { category: string; title: string; excerpt: string };

export type BlogSearchDict = {
  ariaLabel: string;
  placeholder: string;
  clearLabel: string;
  resultsCountLabel: string;
  noResultsLabel: string;
};

/** Compact "Blog Interfy" title + search bar, matching the Figma header row.
 * The search covers every post across the featured/category/grid sections —
 * results link to #todos-artigos, the one real, always-present post grid,
 * since individual article pages don't exist yet. */
export default function BlogSearchBar({
  title,
  search,
  posts,
}: {
  title: string;
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
    <section
      aria-label={title}
      className="relative z-10 flex justify-center border-b border-contorno-base bg-branco px-5 py-5"
    >
      <div className="flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl leading-[1.2] font-extrabold text-texto sm:text-[2rem]">{title}</h1>

        <div className="relative w-full max-w-[300px]">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={search.placeholder}
            aria-label={search.ariaLabel}
            className="h-[38px] w-full rounded-full border border-texto-sem-destaque bg-branco pr-10 pl-4 text-sm font-bold text-texto placeholder:text-texto-medio focus:border-azul-base focus:outline-none focus:ring-2 focus:ring-azul-base/20 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none"
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
              className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-texto-medio"
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
