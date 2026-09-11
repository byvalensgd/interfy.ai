import Image from "next/image";
import { Fragment } from "react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { integracoesLogosStripIcons } from "@/config/integracoes-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function IntegracoesLogosStrip() {
  const { integracoes } = await getDictionary();
  const { logosStrip } = integracoes;

  return (
    <section aria-labelledby="integracoes-logos-heading" className="flex justify-center bg-branco px-5 py-10">
      <Reveal className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 id="integracoes-logos-heading" className="text-center text-2xl leading-[1.2] font-bold text-texto">
          {logosStrip.heading}
        </h2>

        <div className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:flex-nowrap lg:justify-between lg:gap-x-5">
          {integracoesLogosStripIcons.map((item, i) => (
            <Fragment key={item.label}>
              <div className="flex shrink-0 items-center gap-2.5">
                <Image
                  src={item.icon}
                  alt={item.decorativeIcon ? "" : item.label}
                  aria-hidden={item.decorativeIcon}
                  width={item.iconWidth}
                  height={item.iconHeight}
                  className="shrink-0"
                />
                {item.afterText && (
                  <span
                    className={`text-xl leading-[1.2] font-bold whitespace-nowrap ${
                      item.afterTextTone === "muted" ? "text-texto-medio" : "text-texto"
                    }`}
                  >
                    {item.afterText}
                  </span>
                )}
              </div>
              {i < integracoesLogosStripIcons.length - 1 && (
                <span className="hidden h-11 w-px shrink-0 bg-contorno-base lg:block" aria-hidden="true" />
              )}
            </Fragment>
          ))}
          <Button href="#sistemas" variant="secondary" className="shrink-0 whitespace-nowrap">
            {logosStrip.ctaLabel}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
