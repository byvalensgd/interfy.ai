import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { ecmHighlightBlocks } from "@/config/ecm-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function EcmHighlights() {
  const { documents } = await getDictionary();
  const [mobileConfig, securityConfig] = ecmHighlightBlocks;
  const [mobileText, securityText] = documents.highlights.blocks;
  const mobileBlock = { ...mobileConfig, ...mobileText };
  const securityBlock = { ...securityConfig, ...securityText };

  return (
    <section aria-label={documents.highlights.sectionAria} className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <div className="grid w-full max-w-[1400px] items-stretch gap-5 grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))]">
        <Reveal className="@container flex w-full flex-col justify-center overflow-hidden rounded-[20px] bg-gradient-to-r from-[#001d6b] to-[#000928] p-5 sm:p-[30px]">
          <div className="flex w-full flex-col items-center gap-6 text-center @min-[500px]:flex-row @min-[500px]:items-center @min-[500px]:justify-between @min-[500px]:text-left">
            <div className="flex w-full flex-col items-center gap-6 @min-[500px]:flex-1 @min-[500px]:items-start">
              <div className="flex flex-col items-center gap-5 @min-[500px]:items-start">
                <p className="text-[24px] leading-[1.2] font-bold text-branco">{mobileBlock.title}</p>
                <p className="text-sm leading-[1.2] font-medium text-branco">{mobileBlock.description}</p>
              </div>
              <ul className="flex flex-col items-center gap-[15px] @min-[500px]:items-start">
                {mobileBlock.checklist.map((item: string) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <Image src="/icons/ecm/checkin-white.svg" alt="" aria-hidden="true" width={16} height={16} className="shrink-0" />
                    <span className="text-sm leading-[1.2] font-medium text-branco">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[230px] w-[140px] shrink-0">
              <Image src={mobileBlock.image.src} alt={mobileBlock.imageAlt} fill sizes="140px" className="object-contain object-bottom" />
            </div>
          </div>
        </Reveal>

        <Reveal
          className="@container flex w-full flex-col justify-center overflow-hidden rounded-[20px] border border-contorno-base p-5 sm:p-[30px]"
          delayMs={120}
          style={{ backgroundImage: "linear-gradient(125.44deg, #ffffff 4.5532%, #efefff 90.434%, #c8c8ff 126.82%)" }}
        >
          <div className="flex w-full flex-col items-center gap-6 text-center @min-[500px]:flex-row @min-[500px]:items-center @min-[500px]:justify-between @min-[500px]:text-left">
            <div className="flex w-full flex-col items-center gap-6 @min-[500px]:flex-1 @min-[500px]:items-start">
              <div className="flex flex-col items-center gap-5 @min-[500px]:items-start">
                <p className="text-[24px] leading-[1.2] font-bold text-texto">{securityBlock.title}</p>
                <p className="text-sm leading-[1.2] font-medium text-texto">{securityBlock.description}</p>
              </div>
              <ul className="flex flex-col items-center gap-[15px] @min-[500px]:items-start">
                {securityBlock.checklist.map((item: string) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <Image src="/icons/ecm/checkin-blue.svg" alt="" aria-hidden="true" width={16} height={16} className="shrink-0" />
                    <span className="text-sm leading-[1.2] font-medium text-texto">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative size-[255px] shrink-0 overflow-hidden @max-[380px]:size-[180px]">
              <video
                src={securityBlock.image.src}
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
                className="-m-px size-[calc(100%+2px)] max-w-none object-cover mix-blend-multiply"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
