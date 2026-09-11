import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ComplianceBadges from "@/components/ui/ComplianceBadges";
import { localizeHref } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/config";

type LegalSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  relatedLink?: { label: string; href: string };
};

type Certifications = {
  heading: string;
  ctaLabel?: string;
  items: { label: string; description: string; badge?: string }[];
};

export type LegalContentData = {
  sidebarLabel: string;
  intro: string;
  sections: LegalSection[];
  certifications?: Certifications;
};

/** Sticky in-page TOC + numbered sections, pattern adapted from acquafy-site's
 * legal page layout (Section/Subsection/UL primitives, contact-style card on
 * the last section), reskinned with Interfy's tokens and brand gradient. */
export default function LegalContent({
  ariaLabel,
  content,
  certificationsCtaHref,
  locale,
}: {
  ariaLabel: string;
  content: LegalContentData;
  /** Localized href for the certifications block's "see details" link (e.g. /legal/seguranca). */
  certificationsCtaHref?: string;
  locale: Locale;
}) {
  const { sidebarLabel, intro, sections, certifications } = content;

  return (
    <section aria-label={ariaLabel} className="flex justify-center bg-branco px-5 py-16 sm:py-20">
      <div className="flex w-full max-w-[1200px] items-start gap-10 lg:gap-[60px]">
        <aside className="sticky top-[calc(var(--header-height)+20px)] hidden w-[260px] shrink-0 flex-col gap-1 self-start xl:flex">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-texto-medio">{sidebarLabel}</p>
          {sections.map((section, i) => (
            <a
              key={section.heading}
              href={`#section-${i}`}
              className="border-l-2 border-transparent py-1 pl-3 text-sm font-medium leading-[1.4] text-texto-medio transition-colors hover:border-azul-base hover:text-azul-base"
            >
              {section.heading}
            </a>
          ))}
        </aside>

        <article className="flex min-w-0 flex-1 flex-col gap-10">
          <Reveal immediate className="rounded-2xl border border-contorno-base bg-bg-base p-6 sm:p-8">
            <p className="text-sm leading-[1.6] font-medium text-texto-medio">{intro}</p>
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
            return (
              <Reveal key={section.heading} delayMs={Math.min(i * 30, 200)}>
                <div id={`section-${i}`} className="flex scroll-mt-[calc(var(--header-height)+20px)] flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <h2 className="text-xl leading-[1.2] font-extrabold text-texto sm:text-2xl">{section.heading}</h2>
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
                    {section.paragraphs?.map((p, pi) => (
                      <p key={pi} className="text-sm leading-[1.6] font-medium text-texto-medio">
                        {p}
                      </p>
                    ))}
                    {section.items && (
                      <ul className="flex flex-col gap-2 pl-1">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm leading-[1.6] font-medium text-texto-medio"
                          >
                            <span
                              className="mt-2 size-1.5 shrink-0 rounded-full bg-[linear-gradient(135deg,#184aee,#bf18f6)]"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.relatedLink && (
                      <Link
                        href={localizeHref(section.relatedLink.href, locale)}
                        className="inline-flex w-fit items-center gap-1.5 text-sm leading-[1.2] font-bold text-azul-base hover:underline"
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
  );
}
