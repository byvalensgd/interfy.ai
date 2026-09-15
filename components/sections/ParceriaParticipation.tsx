import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { parceriaParticipationCards } from "@/config/parceria-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

const badgeBackground = "linear-gradient(93deg, rgba(24,106,238,0.15) 0%, rgba(183,216,255,0.1) 100%)";

export default async function ParceriaParticipation() {
  const locale = await getLocale();
  const { parceria } = await getDictionary();
  const { participation } = parceria;
  const cards = parceriaParticipationCards.map((icons, i) => ({ ...icons, ...participation.cards[i] }));
  const href = withLocale("/contato", locale);

  return (
    <section
      id="participar"
      aria-labelledby="parceria-participation-heading"
      className="flex scroll-mt-[var(--header-height)] justify-center bg-branco px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 id="parceria-participation-heading" className="text-center text-2xl leading-[1.2] font-bold text-texto">
          {participation.heading}
        </h2>

        <ul className="grid w-full grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal key={card.title} delayMs={i * 120}>
              <li className="flex h-full min-h-[265px] flex-col items-start gap-5 rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px]">
                <div className="flex flex-1 flex-col items-start gap-[30px]">
                  <div className="flex w-full items-center gap-5">
                    <span
                      className="flex size-[60px] shrink-0 items-center justify-center rounded-full border-[0.5px] border-contorno-base p-3"
                      style={{ backgroundImage: badgeBackground }}
                    >
                      <Image src={card.badgeIcon} alt="" aria-hidden="true" width={30} height={30} />
                    </span>
                    <div className="flex min-w-0 flex-1 flex-col items-start gap-2.5">
                      {i === 0 ? (
                        <p className="w-full text-xl leading-[1.2] font-bold text-azul-base">{card.title}</p>
                      ) : (
                        <p className="w-full bg-[linear-gradient(158deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-xl leading-[1.2] font-bold text-transparent">
                          {card.title}
                        </p>
                      )}
                      <p className="w-full text-base leading-[1.2] font-medium text-texto">{card.subtitle}</p>
                    </div>
                  </div>

                  <ul aria-label={card.checklistAriaLabel} className="flex w-full flex-col items-start gap-[15px]">
                    {card.checklist.map((item: { label: string }) => (
                      <li key={item.label} className="flex w-full items-start gap-2.5">
                        <Image src={card.checkIcon} alt="" aria-hidden="true" width={16} height={16} className="shrink-0" />
                        <div className="flex min-h-4 min-w-0 flex-1 flex-col justify-center">
                          <p className="text-sm leading-[1.2] font-medium text-texto">{item.label}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {i === 0 ? (
                  <Button href={href} variant="primary" className="w-full">
                    {card.cta}
                  </Button>
                ) : (
                  <Link
                    href={href}
                    className="inline-flex min-h-[50px] w-full shrink-0 items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-azul-base px-5 py-2.5 leading-[1.2] font-bold whitespace-nowrap transition-colors hover:bg-azul-bg-superior"
                  >
                    <span className="bg-[linear-gradient(106deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-base text-transparent">
                      {card.cta}
                    </span>
                    <ArrowUpRight className="size-6 -mx-[7px] text-[#bf18f6]" aria-hidden="true" />
                  </Link>
                )}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
