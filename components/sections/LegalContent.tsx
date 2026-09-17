"use client";

import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";
import { Fragment, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";
import ComplianceBadges from "@/components/ui/ComplianceBadges";
import { localizeHref } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/config";

type LegalBlock = { p: string } | { ul: string[] };

type LegalSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  /** Ordered paragraph/list blocks — use when a section interleaves prose and
   * bullet lists (real legal source text usually does); takes priority over
   * the simpler paragraphs/items fields when present. */
  blocks?: LegalBlock[];
  relatedLink?: { label: string; href: string };
};

type Certifications = {
  heading: string;
  ctaLabel?: string;
  items: { label: string; description: string; badge?: string }[];
};

export type LegalContentData = {
  title: string;
  updatedLabel: string;
  sidebarLabel: string;
  intro: string;
  sections: LegalSection[];
  certifications?: Certifications;
};

export type LegalSearchDict = {
  ariaLabel: string;
  placeholder: string;
  clearLabel: string;
  resultsCountLabel: string;
  noResultsLabel: string;
};

type SearchChunk = { sectionIndex: number; sectionHeading: string; text: string };

/** Same offset as each chunk's scroll-mt (header height + 20px). */
const CHUNK_SCROLL_MT = "scroll-mt-[calc(var(--header-height)+20px)]";

/** Heading without its leading "N. " numbering, for a cleaner topic tag. */
function topicLabel(heading: string) {
  return heading.replace(/^\d+\.\s*/, "");
}

/** Every individually searchable text unit (heading, paragraph, list item)
 * across all sections, tagged with the section it belongs to — the basis for
 * the search result list (one card per matching unit, not per section). */
function buildSearchChunks(sections: LegalSection[]): SearchChunk[] {
  const chunks: SearchChunk[] = [];
  sections.forEach((section, sectionIndex) => {
    const push = (text: string) => chunks.push({ sectionIndex, sectionHeading: section.heading, text });
    push(section.heading);
    if (section.blocks) {
      for (const block of section.blocks) {
        if ("p" in block) push(block.p);
        else block.ul.forEach(push);
      }
    } else {
      section.paragraphs?.forEach(push);
      section.items?.forEach(push);
    }
  });
  return chunks;
}

/** A ~2-line excerpt of `text` centered on the first match, so a result card
 * shows the actual sentence the search term appears in instead of the whole
 * (often very long) paragraph. */
function buildSnippet(text: string, words: string[], radius = 70): string {
  const pattern = wordMatchPattern(words);
  const match = pattern?.exec(text);
  if (!match) {
    if (text.length <= radius * 2) return text;
    const cut = text.lastIndexOf(" ", radius * 2);
    return `${text.slice(0, cut > 0 ? cut : radius * 2)}…`;
  }
  let start = Math.max(0, match.index - radius);
  let end = Math.min(text.length, match.index + match[0].length + radius);
  // Snap both ends to word boundaries so a long word is never cut in half.
  if (start > 0) {
    const nextSpace = text.indexOf(" ", start);
    start = nextSpace === -1 ? start : nextSpace + 1;
  }
  if (end < text.length) {
    const prevSpace = text.lastIndexOf(" ", end);
    end = prevSpace === -1 || prevSpace <= start ? end : prevSpace;
  }
  const prefix = start > 0 ? "…" : "";
  const suffix = end < text.length ? "…" : "";
  return `${prefix}${text.slice(start, end)}${suffix}`;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Whole-word match pattern for the given search words — Unicode-aware so
 * accented Portuguese/Spanish letters still count as word characters, e.g.
 * searching "do" must not match inside "modificar" or "não". */
function wordMatchPattern(words: string[]): RegExp | null {
  if (words.length === 0) return null;
  const alternation = words.map(escapeRegExp).join("|");
  return new RegExp(`(?<![\\p{L}\\d])(${alternation})(?![\\p{L}\\d])`, "giu");
}

/** Wraps every whole-word occurrence of any search word in `text` with a
 * highlight — this is what makes the search find actual information inside
 * the document, not just jump between the sections the sidebar already links to. */
function highlightText(text: string, words: string[]): ReactNode {
  const pattern = wordMatchPattern(words);
  if (!pattern) return text;
  const parts = text.split(pattern);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    words.some((word) => part.toLowerCase() === word) ? (
      <mark key={i} className="rounded bg-azul-bg-superior text-azul-base">
        {part}
      </mark>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

/** Banner + sticky in-page TOC + numbered sections for the long-form legal
 * pages (Termos, Privacidade, LGPD) — banner pattern adapted from
 * acquafy-site's legal page banners (badge + split-color heading + last-updated
 * pill), body pattern adapted from its Section/Subsection/UL primitives,
 * reskinned with Interfy's tokens and brand gradient. The search block lives
 * in the banner and filters the sections below by heading/content match. */
export default function LegalContent({
  ariaLabel,
  subtitle,
  content,
  search,
  certificationsCtaHref,
  locale,
}: {
  ariaLabel: string;
  subtitle: string;
  content: LegalContentData;
  /** Search block copy — shared across the legal documents (Termos/Privacidade/LGPD). */
  search: LegalSearchDict;
  /** Localized href for the certifications block's "see details" link (e.g. /seguranca). */
  certificationsCtaHref?: string;
  locale: Locale;
}) {
  const { title, updatedLabel, sidebarLabel, intro, sections, certifications } = content;
  const [firstWord, ...rest] = title.split(" ");
  const restText = rest.join(" ");

  const [activeIndex, setActiveIndex] = useState(0);
  const [query, setQuery] = useState("");
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const normalizedQuery = query.trim().toLowerCase();
  const queryWords = normalizedQuery.split(/\s+/).filter(Boolean);
  // The search highlights matching text inside the sections instead of hiding
  // any of them — jumping between sections is what the TOC/topic tags are for.
  const searchChunks = useMemo(() => buildSearchChunks(sections), [sections]);
  const results = useMemo(() => {
    if (queryWords.length === 0) return [];
    return searchChunks
      .map((chunk, chunkIndex) => ({ ...chunk, chunkIndex }))
      .filter((chunk) => queryWords.some((word) => wordMatchPattern([word])!.test(chunk.text)));
  }, [searchChunks, queryWords]);
  // Global chunk index (matching buildSearchChunks' order) that each section's own
  // chunks start at, so a result card can point back at the exact paragraph in the
  // document it came from, not just the section as a whole.
  const sectionChunkOffsets = useMemo(() => {
    const offsets: number[] = [];
    let running = 0;
    sections.forEach((section, i) => {
      offsets[i] = running;
      running += 1 + (section.blocks ? section.blocks.reduce((n, b) => n + ("p" in b ? 1 : b.ul.length), 0) : (section.paragraphs?.length ?? 0) + (section.items?.length ?? 0));
    });
    return offsets;
  }, [sections]);

  function scrollToChunk(chunkIndex: number) {
    const el = document.querySelector<HTMLElement>(`[data-chunk-index="${chunkIndex}"]`);
    if (!el) return;
    el.scrollIntoView({ block: "start" });
    // Wait for the jump to settle before animating, so the color change is
    // clearly visible instead of firing while the page is still moving.
    window.setTimeout(() => {
      const originalColor = getComputedStyle(el).color;
      // Same 2s fade each time, repeating every 3s (2s fade + 1s held at rest),
      // until the reader hovers the text — that's the signal they found it.
      const animation = el.animate(
        [
          { color: "var(--color-azul-base)", offset: 0, easing: "ease-out" },
          { color: originalColor, offset: 2 / 3 },
          { color: originalColor, offset: 1 },
        ],
        { duration: 3000, iterations: Infinity }
      );
      el.addEventListener("mouseenter", () => animation.cancel(), { once: true });
    }, 1000);
  }

  useEffect(() => {
    // Same offset as each section's scroll-mt (header height + 20px), so a
    // section only counts as active once it has actually cleared the fixed header.
    const headerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 81;
    const topOffset = headerHeight + 20;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b));
        const index = sectionRefs.current.findIndex((el) => el === topMost.target);
        if (index !== -1) setActiveIndex(index);
      },
      { rootMargin: `-${topOffset}px 0px -70% 0px`, threshold: 0 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [sections.length]);

  return (
    <>
      <section
        aria-label={ariaLabel}
        className="relative z-10 flex justify-center bg-gradient-to-b from-bg-base to-[#e8f1f8] px-5 py-16 sm:py-20"
      >
        <div className="flex w-full max-w-[800px] flex-col items-center gap-16">
          <Reveal immediate className="flex flex-col items-center gap-5 text-center">
            <h1 className="text-[2rem] lg:text-[clamp(2.25rem,2.88462vw+0.40385rem,3rem)] font-extrabold leading-[1.2] text-texto">
              {firstWord}
              {restText && (
                <>
                  {" "}
                  <span className="inline-block bg-[linear-gradient(111.8deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                    {restText}
                  </span>
                </>
              )}
            </h1>

            <p className="max-w-2xl text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.5] text-texto-medio">
              {subtitle}
            </p>

            <span className="rounded-full bg-branco px-4 py-1.5 text-sm font-bold leading-[1.2] text-texto-medio">
              {updatedLabel}
            </span>
          </Reveal>

          <Reveal
            immediate
            delayMs={80}
            aria-label={search.ariaLabel}
            className="relative flex w-full flex-col rounded-2xl border border-contorno-base bg-branco p-5 text-left shadow-[0px_4px_20px_rgba(20,30,60,0.06)] sm:p-6"
          >
            <div className="relative w-full">
              <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-texto-medio" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={search.placeholder}
                aria-label={search.ariaLabel}
                className="h-[46px] w-full rounded-full border border-contorno-base bg-bg-base pr-11 pl-11 text-sm leading-[46px] text-texto placeholder:text-texto-medio selection:bg-azul-bg-superior selection:text-azul-base focus:border-azul-base focus:bg-branco focus:outline-none focus:ring-2 focus:ring-azul-base/20 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label={search.clearLabel}
                  className="absolute top-1/2 right-4 flex size-4 -translate-y-1/2 items-center justify-center text-texto-medio hover:text-azul-base"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              )}
            </div>

            {normalizedQuery && (
              <div className="absolute top-full left-0 z-20 mt-3 flex w-full flex-col gap-3 rounded-2xl border border-contorno-base bg-branco p-4 shadow-[0px_16px_40px_rgba(20,30,60,0.16)]">
                <p className="text-xs font-bold uppercase tracking-wider text-texto-medio">
                  {results.length} {search.resultsCountLabel}
                </p>
                {results.length === 0 ? (
                  <p className="text-sm font-medium text-texto-medio">{search.noResultsLabel}</p>
                ) : (
                  <ul className="flex max-h-[420px] flex-col gap-2 overflow-y-auto py-1 pr-1">
                    {results.map((result, i) => (
                      <li key={i}>
                        <button
                          type="button"
                          onClick={() => scrollToChunk(result.chunkIndex)}
                          className="flex w-full flex-col gap-[10px] rounded-xl border border-contorno-base bg-bg-base p-3 text-left transition-colors hover:border-azul-base"
                        >
                          <span className="text-xs font-bold text-azul-base">{topicLabel(result.sectionHeading)}</span>
                          <p className="min-h-[2.8em] text-sm leading-[1.4] font-medium text-texto-medio">
                            {highlightText(buildSnippet(result.text, queryWords), queryWords)}
                          </p>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <section className="flex justify-center bg-branco px-5 py-16 sm:py-20">
        <div className="flex w-full max-w-[1200px] items-start gap-20 lg:gap-[120px]">
          <aside className="sticky top-[calc(var(--header-height)+20px)] hidden w-[260px] shrink-0 flex-col gap-1 self-start xl:flex">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-texto-medio">{sidebarLabel}</p>
            {sections.map((section, i) => (
              <a
                key={section.heading}
                href={`#section-${i}`}
                className={`border-l-2 py-1 pl-3 text-base font-medium leading-[1.4] transition-colors hover:border-azul-base hover:text-azul-base ${
                  i === activeIndex ? "border-azul-base text-azul-base" : "border-transparent text-texto-medio"
                }`}
              >
                {section.heading}
              </a>
            ))}
          </aside>

          <article className="flex min-w-0 flex-1 flex-col gap-20">
            <Reveal immediate className="rounded-2xl border border-contorno-base bg-bg-base p-9 sm:p-12">
              <p className="text-base leading-[1.6] font-medium text-texto-medio">{intro}</p>
            </Reveal>

            {certifications && (
              <Reveal immediate delayMs={40}>
                <ComplianceBadges
                  heading={certifications.heading}
                  ctaLabel={certifications.ctaLabel}
                  ctaHref={certificationsCtaHref}
                  items={certifications.items}
                />
              </Reveal>
            )}

            {sections.map((section, i) => {
              const isLast = i === sections.length - 1;
              // Local counter for this section's body chunks (heading is chunk 0),
              // assigned in the exact same order buildSearchChunks walks them in.
              let bodyChunk = sectionChunkOffsets[i] + 1;
              const nextChunkIndex = () => bodyChunk++;
              return (
                <Reveal key={section.heading} immediate delayMs={Math.min(i * 30, 200)}>
                  <div
                    id={`section-${i}`}
                    ref={(el) => {
                      sectionRefs.current[i] = el;
                    }}
                    className="flex scroll-mt-[calc(var(--header-height)+20px)] flex-col gap-4"
                  >
                    <div className="flex flex-col gap-3">
                      <h2
                        data-chunk-index={sectionChunkOffsets[i]}
                        className={`text-xl leading-[1.2] font-extrabold text-texto sm:text-2xl ${CHUNK_SCROLL_MT}`}
                      >
                        {highlightText(section.heading, queryWords)}
                      </h2>
                      <span
                        className="h-[3px] w-12 shrink-0 rounded-full bg-[linear-gradient(90deg,#184aee,#bf18f6)]"
                        aria-hidden="true"
                      />
                    </div>
                    <div
                      className={
                        isLast
                          ? "flex flex-col gap-2 rounded-2xl border border-contorno-base bg-bg-base p-6"
                          : "flex flex-col gap-3"
                      }
                    >
                      {section.blocks
                        ? section.blocks.map((block, bi) =>
                            "p" in block ? (
                              <p
                                key={bi}
                                data-chunk-index={nextChunkIndex()}
                                className={`text-base leading-[1.6] font-medium text-texto-medio ${CHUNK_SCROLL_MT}`}
                              >
                                {highlightText(block.p, queryWords)}
                              </p>
                            ) : (
                              <ul key={bi} className="flex flex-col gap-2 rounded-xl border border-contorno-base bg-bg-base p-4 pl-1">
                                {block.ul.map((item) => (
                                  <li
                                    key={item}
                                    data-chunk-index={nextChunkIndex()}
                                    className={`flex items-start gap-2.5 pl-3 text-base leading-[1.6] font-medium text-texto-medio ${CHUNK_SCROLL_MT}`}
                                  >
                                    <span
                                      className="mt-2 size-1.5 shrink-0 rounded-full bg-[linear-gradient(135deg,#184aee,#bf18f6)]"
                                      aria-hidden="true"
                                    />
                                    {highlightText(item, queryWords)}
                                  </li>
                                ))}
                              </ul>
                            )
                          )
                        : (
                            <>
                              {section.paragraphs?.map((p, pi) => (
                                <p
                                  key={pi}
                                  data-chunk-index={nextChunkIndex()}
                                  className={`text-base leading-[1.6] font-medium text-texto-medio ${CHUNK_SCROLL_MT}`}
                                >
                                  {highlightText(p, queryWords)}
                                </p>
                              ))}
                              {section.items && (
                                <ul className="flex flex-col gap-2 pl-1">
                                  {section.items.map((item) => (
                                    <li
                                      key={item}
                                      data-chunk-index={nextChunkIndex()}
                                      className={`flex items-start gap-2.5 text-base leading-[1.6] font-medium text-texto-medio ${CHUNK_SCROLL_MT}`}
                                    >
                                      <span
                                        className="mt-2 size-1.5 shrink-0 rounded-full bg-[linear-gradient(135deg,#184aee,#bf18f6)]"
                                        aria-hidden="true"
                                      />
                                      {highlightText(item, queryWords)}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          )}
                      {section.relatedLink && (
                        <Link
                          href={localizeHref(section.relatedLink.href, locale)}
                          className="inline-flex w-fit items-center gap-1.5 text-base leading-[1.2] font-bold text-azul-base hover:underline"
                        >
                          {section.relatedLink.label}
                          <ArrowUpRight className="size-4" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </article>
        </div>
      </section>
    </>
  );
}
