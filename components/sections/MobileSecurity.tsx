import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { mobileSecurityItems } from "@/config/mobile-page";

export default async function MobileSecurity() {
  const { mobile } = await getDictionary();
  const { security } = mobile;

  return (
    <section aria-labelledby="mobile-security-heading" className="flex justify-center px-5 py-10 sm:py-16">
      <Reveal
        className="flex w-full max-w-[1400px] flex-wrap items-center gap-10 rounded-[20px] border border-contorno-base bg-[linear-gradient(146deg,#ffffff_4.55%,#eff7ff_90.43%,#c8e0ff_126.82%)] p-5 sm:p-[30px]"
      >
        <div className="flex min-w-[280px] flex-1 flex-col items-center gap-5 text-center lg:flex-row lg:items-center lg:text-left">
          <Image
            src="/mobile/security-illustration.webp"
            alt=""
            aria-hidden="true"
            width={270}
            height={268}
            className="aspect-square w-full max-w-[140px] shrink-0 object-contain mix-blend-multiply sm:max-w-[180px] lg:max-w-[270px]"
          />
          <div className="flex min-w-0 flex-1 flex-col items-center gap-[15px] sm:gap-[30px] lg:items-start">
            <h2 id="mobile-security-heading" className="w-full text-2xl leading-[1.2] font-bold text-texto">
              {security.heading} <span className="text-azul-base">{security.headingHighlight}</span>
            </h2>
            <p className="w-full text-base leading-[1.2] font-medium text-texto">{security.description}</p>
          </div>
        </div>

        <ul className="flex min-w-[280px] flex-1 flex-wrap items-start justify-center gap-[15px]">
          {mobileSecurityItems.map((item, i) => (
            <li
              key={item.icon}
              className="flex min-w-[200px] flex-1 flex-col items-center gap-[15px] rounded-2xl border border-contorno-base bg-branco px-2.5 py-[15px]"
            >
              <Image src={item.icon} alt="" aria-hidden="true" width={36} height={36} />
              <p className="min-h-[30px] w-full text-center text-base leading-[1.2] font-bold text-texto">
                {security.items[i].label}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
