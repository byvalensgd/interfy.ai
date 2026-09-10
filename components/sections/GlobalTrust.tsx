import Image from "next/image";
import ImageSlideshow from "@/components/ui/ImageSlideshow";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { securityBadges } from "@/config/trust";

const whiteLabelSlides = [
  "/global/white-label-1.webp",
  "/global/white-label-2.webp",
  "/global/white-label-3.webp",
  "/global/white-label-4.webp",
];

export default async function GlobalTrust() {
  const { home } = await getDictionary();
  const { globalTrust } = home;
  const badges = securityBadges.map((badge, i) => ({ ...badge, ...globalTrust.security.badges[i] }));

  return (
    <section
      aria-labelledby="global-trust-heading"
      className="flex justify-center bg-bg-base px-5 py-10 sm:py-16"
    >
      <h2 id="global-trust-heading" className="sr-only">
        {globalTrust.srHeading}
      </h2>

      <div className="grid w-full max-w-[1400px] grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <Reveal className="flex w-full flex-col gap-[30px] rounded-[12px] bg-branco p-5">
          <div className="flex flex-col items-center gap-[15px] text-center xl:items-start xl:text-left">
            <p className="inline-block bg-[linear-gradient(162.5deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-xs leading-[1.2] font-bold text-transparent">
              {globalTrust.whiteLabel.eyebrow}
            </p>
            <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] leading-[1.2] font-bold text-texto">
              {globalTrust.whiteLabel.title}{" "}
              <span className="inline-block bg-[linear-gradient(151deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                {globalTrust.whiteLabel.titleHighlight}
              </span>
            </p>
            <p className="text-base leading-[1.2] font-medium text-texto">
              {globalTrust.whiteLabel.description}
            </p>
          </div>
          <ImageSlideshow
            images={whiteLabelSlides}
            alt={globalTrust.whiteLabel.imageAlt}
            className="aspect-[1756/989] w-full"
          />
        </Reveal>

        <Reveal className="flex w-full flex-col gap-[30px] rounded-[12px] bg-branco p-5" delayMs={120}>
          <div className="flex flex-col items-center gap-[15px] text-center xl:items-start xl:text-left">
            <p className="text-xs leading-[1.2] font-bold text-azul-base">{globalTrust.global.eyebrow}</p>
            <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] leading-[1.2] font-bold text-texto">
              {globalTrust.global.title} <span className="text-azul-base">{globalTrust.global.titleHighlight}</span>
            </p>
            <p className="text-base leading-[1.2] font-medium text-texto">
              {globalTrust.global.description}
            </p>
          </div>
          <div className="relative aspect-[1756/989] w-full">
            <Image
              src="/global/world-map.webp"
              alt={globalTrust.global.imageAlt}
              fill
              sizes="(min-width: 1280px) 33vw, 100vw"
              className="object-contain"
            />
          </div>
        </Reveal>

        <Reveal
          className="flex w-full flex-col gap-[30px] rounded-[12px] bg-branco p-5 sm:col-span-2 xl:col-span-1"
          delayMs={240}
        >
          <div className="flex flex-col items-center gap-[15px] text-center xl:items-start xl:text-left">
            <p className="text-xs leading-[1.2] font-bold text-azul-base">
              {globalTrust.security.eyebrow}
            </p>
            <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] leading-[1.2] font-bold text-texto">
              {globalTrust.security.title}
            </p>
          </div>
          <ul className="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-3 xl:aspect-[1756/989]">
            {badges.map((badge) => (
              <li
                key={badge.label}
                className="flex min-w-0 flex-col items-center justify-center gap-5 rounded-xl border border-contorno-base px-[15px] py-5 text-center"
              >
                <Image src={badge.icon} alt="" aria-hidden="true" width={40} height={40} />
                <span className="w-full text-sm leading-[1.2] font-bold text-texto">{badge.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
