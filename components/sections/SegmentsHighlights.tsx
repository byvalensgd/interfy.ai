import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { platformHighlights } from "@/config/segments-page";
import { getCompleteBoxBasis } from "@/lib/completeBox";

export default async function SegmentsHighlights() {
  const { segments } = await getDictionary();
  const highlights = platformHighlights.map((item, i) => ({
    icon: item.icon,
    ...segments.highlights.items[i],
  }));
  const highlightsBasis = getCompleteBoxBasis(highlights.length);

  return (
    <section aria-label={segments.highlights.ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <Reveal className="flex w-full justify-center">
        {/* Below lg: each item becomes its own bordered card ("Blocos Mobile"),
            the site's standing icon+text mobile treatment (see StatsBar.tsx).
            "Complete Box" (see lib/completeBox.ts) keeps every row balanced
            within 1 item of the next and stretches a short last row instead
            of leaving a gap. */}
        <ul aria-label={segments.highlights.ariaLabel} className="flex w-full max-w-[1400px] flex-wrap gap-4 lg:hidden">
          {highlights.map((item) => (
            <li
              key={item.title}
              className={`flex min-w-[140px] grow flex-col items-center gap-2.5 rounded-[14px] border border-contorno-base bg-branco p-5 text-center ${highlightsBasis}`}
            >
              <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
              <div className="flex w-full flex-col items-center gap-2">
                <p className="flex min-h-[30px] w-full items-center justify-center text-base leading-[1.2] font-bold text-texto-doc-ok">
                  {item.title}
                </p>
                <p className="w-full text-sm leading-[1.2] font-medium text-texto">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* "Complete Box" (see lib/completeBox.ts): flex-basis per breakpoint
            in place of grid-cols-1/2/5 so a short last row (grow) stretches
            to fill instead of a CSS Grid leaving it blank (5 items in a
            2-col row lands on 2+2+1). */}
        <ul
          aria-label={segments.highlights.ariaLabel}
          className="hidden w-full max-w-[1400px] flex-wrap gap-6 rounded-[20px] bg-gradient-to-r from-[#001d6b] to-[#000928] px-5 py-[30px] lg:flex"
        >
          {highlights.map((item) => (
            <li
              key={item.title}
              className="flex min-w-0 grow basis-full items-center gap-5 sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(20%-1.2rem)]"
            >
              <Image src={item.icon} alt="" aria-hidden="true" width={40} height={40} className="shrink-0" />
              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <p className="w-full text-[18px] leading-[1.2] font-extrabold text-branco">{item.title}</p>
                <p className="w-full text-base leading-[1.2] font-medium text-branco">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
