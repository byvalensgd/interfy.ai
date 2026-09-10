import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";
import { scaleFeatures, scaleTrustBadges, type TrustBadge } from "@/config/trust";

type FeatureStripItem = TrustBadge & { label: string };

function FeatureStrip({
  items,
  label,
  dense = false,
}: {
  items: FeatureStripItem[];
  label: string;
  dense?: boolean;
}) {
  return (
    <ul
      aria-label={label}
      className={`flex w-full flex-wrap items-stretch rounded-[12px] border border-contorno-base bg-branco ${
        dense ? "gap-5 p-5" : "gap-x-10 gap-y-6 px-5 py-[30px]"
      }`}
    >
      {items.map((item) => (
        <li key={item.label} className="flex min-w-[140px] flex-1 flex-row items-center gap-2.5">
          <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
          <span className="min-w-0 flex-1 text-sm leading-[1.2] font-bold text-texto">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ScaleSecurity() {
  const locale = await getLocale();
  const { home } = await getDictionary();
  const { scaleSecurity } = home;

  const features = scaleFeatures.map((feature, i) => ({ ...feature, ...scaleSecurity.features[i] }));
  const trustBadges = scaleTrustBadges.map((badge, i) => ({ ...badge, ...scaleSecurity.trustBadges[i] }));

  return (
    <section
      aria-labelledby="scale-security-heading"
      className="flex justify-center px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="scale-security-heading"
          className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          {scaleSecurity.headline} <span className="text-azul-base">{scaleSecurity.headlineHighlight}</span>
        </h2>

        <div className="flex w-full flex-col gap-6">
          <Reveal>
            <FeatureStrip items={features} label={scaleSecurity.featuresAriaLabel} />
          </Reveal>

          <Reveal
            className="relative flex w-full flex-col items-start gap-5 rounded-2xl p-5 sm:p-10"
            delayMs={120}
          >
            <Image
              src="/scale/cta-bg.webp"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="-z-10 rounded-2xl object-cover"
            />
            <div className="flex w-full flex-wrap items-center justify-between gap-6">
              <div className="flex min-w-0 flex-1 flex-col items-center gap-5 text-center text-branco lg:items-start lg:text-left">
                <p className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold">{scaleSecurity.cta.title}</p>
                <p className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] leading-[1.2] font-medium lg:max-w-2xl">
                  {scaleSecurity.cta.description}
                </p>
              </div>
              <div className="flex w-full flex-wrap items-center gap-5 lg:w-auto lg:shrink-0">
                <Button href={withLocale("/comece-gratis", locale)} variant="secondary" className="grow whitespace-nowrap lg:grow-0">
                  {scaleSecurity.cta.ctaPrimary}
                </Button>
                <Link
                  href={withLocale("/demo", locale)}
                  className="inline-flex min-h-[50px] grow shrink-0 items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-branco bg-black/20 px-5 py-2.5 text-base font-bold whitespace-nowrap text-branco transition-colors hover:bg-black/30 lg:grow-0"
                >
                  {scaleSecurity.cta.ctaSecondary}
                  <Calendar className="size-5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <FeatureStrip items={trustBadges} label={scaleSecurity.trustAriaLabel} dense />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
