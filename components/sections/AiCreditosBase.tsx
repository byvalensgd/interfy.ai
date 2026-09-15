import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StatsBar from "@/components/ui/StatsBar";
import PricingFaq from "@/components/sections/PricingFaq";
import { platformStatIcons } from "@/config/platform";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

export default async function AiCreditosBase() {
  const locale = await getLocale();
  const { aiCreditos, common } = await getDictionary();
  const { base } = aiCreditos;
  const platformStats = platformStatIcons.map((s, i) => ({ icon: s.icon, ...common.platformStats[i] }));

  return (
    <section aria-labelledby="ai-creditos-base-heading" className="flex justify-center px-5 pb-10 sm:pb-16">
      <h2 id="ai-creditos-base-heading" className="sr-only">
        {base.srHeading}
      </h2>

      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <Reveal className="grid w-full grid-cols-1 gap-2.5 lg:grid-cols-[1fr_303px]">
          <PricingFaq faq={base.faq} heading={base.faqHeading} ariaExpand={base.faqAriaExpand} />

          <div className="flex flex-col gap-5 rounded-[14px] bg-bg-base p-5">
            <h3 className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] font-bold leading-[1.2] text-texto">
              {base.specialistTitle}
            </h3>
            <p className="flex-1 text-base leading-[1.2] font-medium text-texto">{base.specialistDesc}</p>
            <Button href={withLocale("/demo", locale)} variant="secondary" size="sm">
              {base.specialistCta}
              <Image src="/icons/pricing/headset.svg" alt="" aria-hidden="true" width={20} height={20} />
            </Button>
          </div>
        </Reveal>

        <Reveal
          delayMs={120}
          className="flex w-full flex-col items-start gap-5 rounded-2xl bg-[#0d215f] p-5 text-branco sm:flex-row sm:items-center"
        >
          <Image src="/icons/pricing/rocket.svg" alt="" aria-hidden="true" width={50} height={50} className="shrink-0" />
          <div className="flex w-full flex-1 flex-col items-center gap-2.5 text-center sm:items-start sm:text-left">
            <p className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] font-bold leading-[1.2]">{base.ctaTitle}</p>
            <p className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] font-medium leading-[1.2]">{base.ctaDesc}</p>
          </div>
          <Button href={withLocale("/comece-gratis", locale)} variant="secondary" showArrow>
            {base.ctaButton}
          </Button>
        </Reveal>

        <Reveal delayMs={240}>
          <StatsBar stats={platformStats} label={base.statsLabel} size="lg" />
        </Reveal>
      </div>
    </section>
  );
}
