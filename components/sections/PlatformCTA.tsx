import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { platformCtaFeatureIcons } from "@/config/platform-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

export default async function PlatformCTA() {
  const locale = await getLocale();
  const { platform } = await getDictionary();
  const { cta } = platform;
  const features = platformCtaFeatureIcons.map((icon, i) => ({ icon, ...cta.features[i] }));

  return (
    <section aria-label={cta.sectionAria} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 className="text-center text-2xl leading-[1.2] font-bold text-texto">
          {cta.headline} <span className="text-azul-base">{cta.headlineHighlight}</span>
        </h2>

        <Reveal className="relative flex w-full flex-col gap-[30px] rounded-2xl p-5 sm:p-[30px]">
          <Image
            src="/platform/cta-bg.webp"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="-z-10 rounded-2xl object-cover"
          />

          <div className="flex w-full flex-wrap items-center justify-between gap-6">
            <div className="flex min-w-0 flex-1 flex-col items-center gap-5 text-center text-branco lg:items-start lg:text-left">
              <p className="text-2xl leading-[1.2] font-bold">{cta.title}</p>
              <p className="text-lg leading-[1.2] font-semibold lg:max-w-2xl">{cta.description}</p>
            </div>
            <div className="flex w-full flex-wrap items-center gap-5 lg:w-auto lg:shrink-0">
              <Button href={withLocale("/comece-gratis", locale)} variant="secondary" className="grow whitespace-nowrap lg:grow-0">
                {cta.primaryButton}
              </Button>
              <Link
                href={withLocale("/demo", locale)}
                className="inline-flex min-h-[50px] grow shrink-0 items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-branco bg-black/20 px-5 py-2.5 text-base leading-[1.2] font-bold whitespace-nowrap text-branco transition-colors hover:bg-black/30 lg:grow-0"
              >
                {cta.secondaryButton}
                <Calendar className="size-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <ul
            aria-label={cta.statsLabel}
            className="grid w-full grid-cols-1 gap-x-10 gap-y-8 rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          >
            {features.map((feature) => (
              <li key={feature.icon} className="flex min-w-[180px] flex-col items-start gap-5 text-left">
                <div className="flex items-center gap-2.5">
                  <Image src={feature.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                  <p className="text-lg leading-[1.2] font-extrabold text-texto-doc-ok">{feature.label}</p>
                </div>
                <p className="text-sm leading-[1.2] font-medium text-texto">{feature.sublabel}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
