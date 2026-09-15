import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { aiCreditosUsageItems } from "@/config/ai-creditos-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function AiCreditosUsage() {
  const { aiCreditos } = await getDictionary();
  const { usage } = aiCreditos;
  const items = aiCreditosUsageItems.map((item, i) => ({ ...item, ...usage.items[i] }));

  return (
    <section aria-labelledby="ai-creditos-usage-heading" className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <Reveal className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 id="ai-creditos-usage-heading" className="text-center text-2xl leading-[1.2] font-bold text-texto">
          {usage.headingPrefix}
          <span className="text-azul-base">{usage.headingHighlight}</span>
          {usage.headingSuffix}
        </h2>

        <div className="flex w-full flex-col gap-5">
          <ul aria-label={usage.ariaLabel} className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {items.map((item) => (
              <li
                key={item.title}
                className="flex min-h-[235px] flex-col items-center gap-5 rounded-[20px] border border-contorno-base px-[15px] py-5 text-center"
              >
                <span className="flex size-[70px] shrink-0 items-center justify-center rounded-full border border-contorno-base p-4">
                  <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} />
                </span>
                <div className="flex w-full flex-col gap-2.5">
                  <p
                    className={`w-full text-lg leading-[1.2] font-extrabold ${
                      item.colorClass === "gradient"
                        ? "bg-[linear-gradient(137.58deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-transparent"
                        : item.colorClass
                    }`}
                  >
                    {item.title}
                  </p>
                  <p className="w-full text-base leading-[1.2] font-medium text-texto-medio">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex w-full items-center gap-5 rounded-[20px] border border-contorno-base px-[15px] py-5">
            <Image src="/icons/ai-creditos/alerta-consumo.svg" alt="" aria-hidden="true" width={32} height={32} className="shrink-0" />
            <div className="flex min-w-0 flex-1 flex-col gap-2.5">
              <p className="w-full text-xl leading-[1.2] font-bold text-texto">{usage.notice.title}</p>
              <p className="w-full text-base leading-[1.2] font-medium text-texto-medio">{usage.notice.description}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
