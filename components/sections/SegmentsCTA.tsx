import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";
import { finalFeatureStrip as finalFeatureIcons } from "@/config/segments-page";

export default async function SegmentsCTA() {
  const locale = await getLocale();
  const { segments } = await getDictionary();
  const features = finalFeatureIcons.map((item, i) => ({
    icon: item.icon,
    ...segments.cta.features[i],
  }));

  return (
    <section aria-label={segments.cta.ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col">
        <Reveal className="relative flex w-full flex-col items-center gap-8 rounded-2xl p-5 py-8 sm:gap-10 sm:px-[30px] sm:py-10">
          <Image
            src="/segments/cta-bg.webp"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="-z-10 rounded-2xl object-cover"
          />
          <div className="flex w-full flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col items-center gap-5 text-center text-branco lg:items-start lg:text-left">
              <p className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold">
                {segments.cta.title}
              </p>
              <p className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] leading-[1.2] font-medium lg:max-w-2xl">
                {segments.cta.description}
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center gap-5 lg:w-auto lg:shrink-0">
              <Button href={withLocale("/comece-gratis", locale)} variant="secondary" className="grow whitespace-nowrap lg:grow-0">
                {segments.cta.ctaPrimary}
              </Button>
              <Link
                href={withLocale("/demo", locale)}
                className="inline-flex min-h-[50px] grow shrink-0 items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-branco bg-black/20 px-5 py-2.5 text-base font-bold whitespace-nowrap text-branco transition-colors hover:bg-black/30 lg:grow-0"
              >
                {segments.cta.ctaSecondary}
                <Calendar className="size-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <ul className="grid w-full grid-cols-2 items-start gap-x-6 gap-y-8 rounded-[20px] border border-contorno-base bg-branco p-5 sm:grid-cols-3 lg:grid-cols-6">
            {features.map((item) => (
              <li key={item.title} className="flex flex-col items-center gap-3.5 text-center">
                <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} />
                <div className="flex w-full flex-col gap-1.5">
                  <p className="flex min-h-[2lh] w-full items-center justify-center text-center text-[18px] leading-[1.2] font-extrabold text-texto-doc-ok">
                    {item.title}
                  </p>
                  <p className="w-full text-sm leading-[1.2] font-medium text-texto">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
