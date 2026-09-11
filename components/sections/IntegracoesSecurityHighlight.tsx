import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { integracoesSecurityIcons } from "@/config/integracoes-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

const cardBackground = "linear-gradient(130deg, #ffffff 4.55%, #eff7ff 90.43%, #c8e0ff 126.82%)";

export default async function IntegracoesSecurityHighlight() {
  const { integracoes } = await getDictionary();
  const { securityHighlight } = integracoes;
  const items = integracoesSecurityIcons.map((icon, i) => ({ icon, ...securityHighlight.items[i] }));

  return (
    <section aria-labelledby="integracoes-security-heading" className="flex justify-center bg-branco px-5 py-10">
      <Reveal
        className="flex w-full max-w-[1400px] flex-wrap items-center justify-center gap-10 rounded-[20px] border border-contorno-base p-5 sm:p-10"
        style={{ backgroundImage: cardBackground }}
      >
        <div className="flex min-w-[280px] max-w-[540px] flex-1 items-center gap-5">
          <div className="relative h-[150px] w-[151px] shrink-0">
            <Image
              src="/icons/integracoes/security/shield-illustration.webp"
              alt=""
              aria-hidden="true"
              fill
              sizes="151px"
              className="object-contain"
            />
          </div>
          <div className="flex min-w-[280px] flex-1 flex-col gap-[30px]">
            <h2 id="integracoes-security-heading" className="text-2xl leading-[1.2] font-bold text-texto">
              {securityHighlight.headingPrefix}
              <span className="bg-[linear-gradient(112deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-transparent">
                {securityHighlight.headingHighlight}
              </span>
            </h2>
            <p className="text-base leading-[1.2] font-medium text-texto">{securityHighlight.description}</p>
          </div>
        </div>

        <ul
          aria-label={securityHighlight.itemsAriaLabel}
          className="grid min-w-[280px] flex-1 grid-cols-2 gap-[15px] sm:grid-cols-3 lg:grid-cols-5"
        >
          {items.map((item) => (
            <li key={item.label} className="flex flex-col items-center gap-[15px] text-center">
              <Image src={item.icon} alt="" aria-hidden="true" width={36} height={36} className="shrink-0" />
              <p className="w-full text-sm leading-[1.2] font-bold text-texto">{item.label}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
