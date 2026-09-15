import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StatsBar from "@/components/ui/StatsBar";
import AutoplayVideo from "@/components/ui/AutoplayVideo";
import {
  empresaAiFutureIcons,
  empresaAiFutureStatIcons,
  empresaFinalCtaIcon,
} from "@/config/empresa-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

export default async function EmpresaAiFuture() {
  const locale = await getLocale();
  const { empresa } = await getDictionary();
  const { aiFuture, finalCta } = empresa;
  const items = empresaAiFutureIcons.map((icon, i) => ({ icon, ...aiFuture.items[i] }));
  const stats = empresaAiFutureStatIcons.map((icon, i) => ({ icon, ...aiFuture.stats[i] }));

  return (
    <section aria-labelledby="empresa-aifuture-heading" className="flex justify-center px-5 py-10 sm:py-16">
      <Reveal className="flex w-full max-w-[1400px] flex-col gap-5">
        <div className="flex flex-col gap-[30px] rounded-2xl bg-gradient-to-b from-[#001240] to-[#001149] p-5 sm:p-[30px]">
          <div className="flex flex-col items-center gap-[30px] lg:flex-row">
            <div className="flex min-w-[280px] flex-1 flex-col gap-[30px]">
              <div className="flex flex-col items-start gap-5">
                <h2 id="empresa-aifuture-heading" className="text-2xl leading-[1.2] font-bold text-branco">
                  {aiFuture.heading}
                </h2>
                <p className="text-lg leading-[1.2] font-semibold text-branco">{aiFuture.description}</p>
              </div>

              <ul aria-label={aiFuture.ariaLabel} className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <li
                    key={item.title}
                    className="flex min-h-20 min-w-[220px] flex-1 flex-col items-start justify-center gap-2.5 rounded-2xl border border-[#012c8a] px-2.5 py-[15px]"
                  >
                    <div className="flex w-full items-center gap-[15px]">
                      <span
                        className="flex size-10 shrink-0 items-center justify-center rounded-full p-2"
                        style={{ backgroundImage: "linear-gradient(93deg, rgba(24,106,238,0.15) 0%, rgba(183,216,255,0.1) 100%)" }}
                      >
                        <Image src={item.icon} alt="" aria-hidden="true" width={20} height={20} />
                      </span>
                      <p className="min-w-0 flex-1 text-base leading-[1.2] font-bold text-branco">{item.title}</p>
                    </div>
                    {item.description && (
                      <p className="w-full text-sm leading-[1.2] font-medium text-branco">{item.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-square w-full max-w-[310px] flex-1 shrink-0 self-center overflow-hidden rounded-2xl">
              <AutoplayVideo src="/empresa/cerebro.mp4" className="size-full object-cover" />
            </div>
          </div>

          <StatsBar stats={stats} label={aiFuture.statsLabel} size="lg" />
        </div>

        <div className="flex flex-col items-center gap-5 rounded-2xl border border-contorno-base p-5 lg:flex-row lg:items-center">
          <Image src={empresaFinalCtaIcon} alt="" aria-hidden="true" width={50} height={50} className="shrink-0" />
          <div className="flex min-w-0 flex-1 flex-col items-center gap-2.5 text-center lg:items-start lg:text-left">
            <p className="text-2xl leading-[1.2] font-bold text-azul-base">{finalCta.heading}</p>
            <p className="text-lg leading-[1.2] font-semibold text-texto">{finalCta.subheading}</p>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:w-auto lg:shrink-0">
            <Button
              href={withLocale("/comece-gratis", locale)}
              variant="secondary"
              size="sm"
              className="grow whitespace-nowrap sm:grow-0"
              showArrow
            >
              {finalCta.primaryLabel}
            </Button>
            <Button
              href={withLocale("/demo", locale)}
              variant="primary"
              size="sm"
              className="grow whitespace-nowrap sm:grow-0"
              showArrow
            >
              {finalCta.secondaryLabel}
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
