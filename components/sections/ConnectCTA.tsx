import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StatsBar from "@/components/ui/StatsBar";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

const heroStatIcons = [
  "/icons/stats/clientes.svg",
  "/icons/stats/paises.svg",
  "/icons/stats/idiomas.svg",
  "/icons/stats/seguranca.svg",
  "/icons/stats/ai-native.svg",
  "/icons/stats/disponibilidade.svg",
  "/icons/stats/conformidade.svg",
];

export default async function ConnectCTA() {
  const locale = await getLocale();
  const { connect } = await getDictionary();
  const { cta } = connect;
  const heroStats = heroStatIcons.map((icon, i) => ({ icon, ...cta.stats[i] }));

  return (
    <section aria-label={cta.ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <Reveal className="relative flex w-full flex-col items-center gap-10 overflow-hidden rounded-2xl p-5 sm:p-[30px]">
          <Image
            src="/connect/cta-bg.webp"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <div className="flex w-full flex-wrap items-center justify-center gap-10">
            <div className="flex min-w-[320px] flex-1 flex-col items-center gap-5 text-center text-branco lg:items-start lg:text-left">
              <p className="text-[32px] leading-[1.2] font-bold">{cta.heading}</p>
              <p className="min-h-[14px] text-[20px] leading-[1.2] font-medium">{cta.subheading}</p>
            </div>
            <div className="flex w-full max-w-[320px] flex-col items-start gap-5">
              <Button href={withLocale("/comece-gratis", locale)} variant="secondary" className="w-full whitespace-nowrap">
                {cta.primaryButton}
              </Button>
              <Link
                href={withLocale("/demo", locale)}
                className="inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-branco bg-black/20 px-[30px] py-2.5 text-base font-bold whitespace-nowrap text-branco transition-colors hover:bg-black/30"
              >
                {cta.secondaryButton}
                <Calendar className="size-5" aria-hidden="true" />
              </Link>
            </div>
            <Image
              src="/connect/cta-illustration.webp"
              alt=""
              aria-hidden="true"
              width={169}
              height={120}
              className="hidden h-[120px] w-auto shrink-0 lg:block"
            />
          </div>

          <StatsBar stats={heroStats} label={cta.statsLabel} />
        </Reveal>
      </div>
    </section>
  );
}
