import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { swcLegalValidity } from "@/config/swc-page";

export default function SwcLegalValidity() {
  return (
    <section aria-labelledby="swc-legal-heading" className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <Reveal
        className="flex w-full max-w-[1400px] flex-col gap-10 rounded-[32px] border border-contorno-base p-5 sm:p-10"
        style={{ backgroundImage: "linear-gradient(85.98deg, #eaf8f9 7.6363%, #f4f9fd 67.019%)" }}
      >
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:text-left">
          <span className="flex size-20 shrink-0 items-center justify-center rounded-full border border-contorno-base bg-branco p-5">
            <Image src={swcLegalValidity.icon} alt="" aria-hidden="true" width={40} height={40} />
          </span>
          <div className="flex flex-1 flex-col items-center gap-[15px] sm:items-start">
            <div className="flex flex-wrap items-end justify-center gap-5 sm:justify-start">
              <h2 id="swc-legal-heading" className="text-2xl leading-[1.2] font-bold text-texto">
                {swcLegalValidity.title}
              </h2>
              <span className="text-xl leading-[1.2] font-bold text-ecm">{swcLegalValidity.badge}</span>
            </div>
            <p className="w-full text-base leading-[1.2] font-medium text-texto-medio">
              {swcLegalValidity.description}
            </p>
          </div>
        </div>

        <ul className="grid w-full grid-cols-1 gap-x-[25px] gap-y-[25px] sm:grid-cols-2 lg:grid-cols-4">
          {swcLegalValidity.checklist.map((item) => (
            <li key={item.icon} className="flex items-center gap-5">
              <Image src={item.icon} alt="" aria-hidden="true" width={36} height={36} className="shrink-0" />
              {item.textParts ? (
                <p className="min-w-0 flex-1 text-lg leading-[1.2] font-bold text-texto">
                  {item.textParts[0]}
                  <span className="text-ecm">{item.textParts[1]}</span>
                </p>
              ) : (
                <p className="min-w-0 flex-1 text-lg leading-[1.2] font-bold text-texto">{item.text}</p>
              )}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
