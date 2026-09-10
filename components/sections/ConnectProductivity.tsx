import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { connectProductivityItems } from "@/config/connect-page";

export default async function ConnectProductivity() {
  const { connect } = await getDictionary();
  const { productivity } = connect;

  return (
    <section aria-label={productivity.ariaLabel} className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <Reveal className="flex w-full max-w-[1400px] flex-wrap items-stretch gap-5">
        <div className="flex min-w-[320px] flex-1 items-center gap-[30px] rounded-[20px] border border-contorno-base bg-bg-base px-5 py-[30px]">
          <video
            src="/connect/sign-promo-illustration.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="mix-blend-multiply hidden size-[185px] shrink-0 object-cover sm:block"
          />
          <div className="flex min-w-0 flex-1 flex-col gap-10">
            <p className="w-full text-2xl leading-[1.2] font-bold text-texto">
              <span className="text-cic">{productivity.signCard.titleHighlight}</span>{" "}
              {productivity.signCard.titleSuffix}
            </p>
            <p className="w-full text-base leading-[1.2] font-medium text-texto">
              {productivity.signCard.description}
            </p>
          </div>
        </div>

        <div className="flex min-w-[320px] flex-1 flex-col gap-[30px] rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px]">
          <p className="w-full text-2xl leading-[1.2] font-bold text-texto">
            <span className="text-cic">{productivity.headingHighlight}</span> {productivity.headingSuffix}
          </p>
          <ul className="grid w-full grid-cols-1 gap-[15px] sm:grid-cols-2">
            {connectProductivityItems.map((item, i) => (
              <li key={item.icon} className="flex min-w-[260px] flex-1 flex-col items-start gap-[15px]">
                <div className="flex h-[30px] w-full items-center gap-[15px]">
                  <Image src={item.icon} alt="" aria-hidden="true" width={24} height={24} className="shrink-0" />
                  <p className="flex min-h-[24px] min-w-0 flex-1 flex-col justify-center text-lg leading-[1.2] font-extrabold text-texto">
                    {productivity.items[i].title}
                  </p>
                </div>
                <p className="w-full text-sm leading-[1.2] font-medium text-texto-medio">
                  {productivity.items[i].description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
