import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SegmentsTrustIllustration from "@/components/ui/SegmentsTrustIllustration";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";
import { trustStats as trustStatIcons } from "@/config/segments-page";

export default async function SegmentsTrust() {
  const locale = await getLocale();
  const { segments } = await getDictionary();
  const stats = trustStatIcons.map((item, i) => ({
    icon: item.icon,
    ...segments.trust.stats[i],
  }));

  return (
    <section aria-label={segments.trust.ariaLabel} className="flex justify-center bg-bg-base px-5 py-10 sm:py-16">
      <div className="grid w-full max-w-[1400px] grid-cols-1 items-stretch gap-5 lg:grid-cols-[0.7fr_1fr]">
        <Reveal className="flex w-full flex-col items-center gap-5 rounded-[20px] border border-contorno-base bg-branco p-5 text-center sm:flex-row sm:items-center sm:text-left lg:p-[30px]">
          <div className="flex w-full flex-1 flex-col items-center gap-5 sm:items-start">
            <div className="flex flex-col items-center gap-1 sm:items-start">
              <p className="text-[20px] leading-[1.2] font-bold text-texto">
                {segments.trust.cardTitle}{" "}
                <span className="text-azul-base">{segments.trust.cardTitleHighlight}</span>
              </p>
            </div>
            <p className="text-base leading-[1.2] font-medium text-texto">
              {segments.trust.cardDescription}
            </p>
            <Link
              href={withLocale("/cases", locale)}
              className="inline-flex items-center gap-2.5 text-sm font-bold whitespace-nowrap text-[#0048c5] hover:underline"
            >
              {segments.trust.casesLink}
              <ArrowUpRight className="size-2.5" aria-hidden="true" />
            </Link>
          </div>
          <div className="relative aspect-[254/211] w-full max-w-[220px] shrink-0 sm:max-w-none sm:flex-1">
            <SegmentsTrustIllustration ariaLabel={segments.trust.illustrationAlt} />
          </div>
        </Reveal>

        <Reveal
          className="flex w-full flex-col gap-5 rounded-[20px] border border-contorno-base bg-branco p-5 lg:p-[30px]"
          delayMs={120}
        >
          <p className="text-[20px] leading-[1.2] font-bold text-texto">{segments.trust.statsTitle}</p>
          <ul className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3">
            {stats.map((stat) => (
              <li key={stat.label} className="flex flex-col items-center gap-3.5 text-center">
                <Image src={stat.icon} alt="" aria-hidden="true" width={30} height={30} />
                <p className="w-full text-2xl leading-[1.2] font-bold text-texto">{stat.value}</p>
                <p className="w-full text-sm leading-[1.2] font-medium text-texto-medio">{stat.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
