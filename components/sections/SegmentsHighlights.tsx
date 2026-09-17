import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { platformHighlights } from "@/config/segments-page";

export default async function SegmentsHighlights() {
  const { segments } = await getDictionary();
  const highlights = platformHighlights.map((item, i) => ({
    icon: item.icon,
    ...segments.highlights.items[i],
  }));

  return (
    <section aria-label={segments.highlights.ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <Reveal className="flex justify-center">
        {/* "Complete Box" (see lib/completeBox.ts): flex-basis per breakpoint
            in place of grid-cols-1/2/5 so a short last row (grow) stretches
            to fill instead of a CSS Grid leaving it blank (5 items in a
            2-col row lands on 2+2+1). */}
        <ul className="flex w-full max-w-[1400px] flex-wrap gap-6 rounded-[20px] bg-gradient-to-r from-[#001d6b] to-[#000928] px-5 py-[30px]">
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
