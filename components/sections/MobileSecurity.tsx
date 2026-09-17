import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { mobileSecurityItems } from "@/config/mobile-page";
import { getCompleteBoxBasis } from "@/lib/completeBox";

export default async function MobileSecurity() {
  const { mobile } = await getDictionary();
  const { security } = mobile;
  // "Complete Box" (see lib/completeBox.ts): flex-basis in place of plain
  // flex-1 so a short last row (grow) stretches to fill instead of greedy
  // wrapping landing on an unbalanced split.
  const itemsBasis = getCompleteBoxBasis(mobileSecurityItems.length);

  return (
    <section aria-labelledby="mobile-security-heading" className="flex justify-center px-5 py-10 sm:py-16">
      <Reveal
        className="flex w-full max-w-[1400px] flex-col items-center gap-10 rounded-[20px] border border-contorno-base bg-[linear-gradient(146deg,#ffffff_4.55%,#eff7ff_90.43%,#c8e0ff_126.82%)] p-5 sm:p-[30px]"
      >
        <div className="flex w-full flex-col items-center gap-[15px] text-center sm:gap-[30px]">
          <h2 id="mobile-security-heading" className="w-full text-2xl leading-[1.2] font-bold text-texto">
            {security.heading} <span className="text-azul-base">{security.headingHighlight}</span>
          </h2>
          <p className="mx-auto w-full max-w-2xl text-base leading-[1.2] font-medium text-texto">
            {security.description}
          </p>
        </div>

        <ul className="flex w-full flex-wrap items-start justify-center gap-[15px]">
          {mobileSecurityItems.map((item, i) => (
            <li
              key={item.icon}
              className={`flex min-w-[200px] grow flex-col items-center gap-[15px] rounded-2xl border border-contorno-base bg-branco px-2.5 py-[15px] ${itemsBasis}`}
            >
              <Image src={item.icon} alt="" aria-hidden="true" width={36} height={36} />
              <p className="min-h-[30px] w-full text-center text-sm leading-[1.2] font-bold text-texto">
                {security.items[i].label}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
