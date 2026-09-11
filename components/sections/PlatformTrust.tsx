import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { platformTrustCardIcons } from "@/config/platform-page";

const cardBackground = "linear-gradient(119deg, #ffffff 4.55%, #eff7ff 90.43%, #c8e0ff 126.82%)";
const iconBadgeBackground = "linear-gradient(93deg, rgba(24,106,238,0.15) 0%, rgba(183,216,255,0.1) 100%)";

export default async function PlatformTrust() {
  const { platform } = await getDictionary();
  const { trust } = platform;
  const cards = platformTrustCardIcons.map((icon, i) => ({ icon, ...trust.cards[i] }));

  return (
    <section aria-label={trust.sectionAria} className="flex justify-center px-5 py-10 sm:py-16">
      <ul className="grid w-full max-w-[1400px] grid-cols-1 gap-5 lg:grid-cols-3">
        {cards.map((card, i) => (
          <Reveal
            key={card.title}
            className="flex min-h-[265px] flex-col gap-[30px] rounded-[20px] border border-contorno-base px-5 py-[30px]"
            style={{ backgroundImage: cardBackground }}
            delayMs={i * 120}
          >
            <div className="flex items-center gap-5">
              <span
                className="flex size-[60px] shrink-0 items-center justify-center rounded-full p-3"
                style={{ backgroundImage: iconBadgeBackground }}
              >
                <Image src={card.icon} alt="" aria-hidden="true" width={30} height={30} />
              </span>
              <p className="min-w-0 flex-1 text-xl leading-[1.2] font-bold text-texto">{card.title}</p>
            </div>
            <ul className="flex flex-col gap-[15px]">
              {card.checklist.map((item: string) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Image
                    src="/icons/features/check-blue.svg"
                    alt=""
                    aria-hidden="true"
                    width={16}
                    height={16}
                    className="shrink-0"
                  />
                  <div className="flex min-h-[16px] min-w-0 flex-1 flex-col justify-center">
                    <p className="text-sm leading-[1.2] font-medium text-texto">{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
