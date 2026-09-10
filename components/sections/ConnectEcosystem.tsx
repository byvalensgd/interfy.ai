import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { connectEcosystemLinks } from "@/config/connect-page";

export default async function ConnectEcosystem() {
  const { connect } = await getDictionary();
  const { ecosystem } = connect;

  return (
    <section aria-labelledby="connect-ecosystem-heading" className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="connect-ecosystem-heading"
          className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          {ecosystem.heading} <span className="text-azul-base">{ecosystem.headingHighlight}</span>
        </h2>

        <Reveal className="w-full">
          <div className="flex w-full flex-wrap items-start gap-5">
            {connectEcosystemLinks.map((item, i) => (
              <div key={item.product} className="flex min-w-[140px] flex-1 flex-col items-center gap-5">
                <span className="flex size-[70px] shrink-0 items-center justify-center rounded-full border border-contorno-base bg-branco p-4">
                  <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} />
                </span>
                {item.gradient ? (
                  <p className="w-full bg-[linear-gradient(141deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-center text-lg leading-[1.2] font-extrabold text-transparent">
                    {item.product}
                  </p>
                ) : (
                  <p className={`w-full text-center text-lg leading-[1.2] font-extrabold ${item.colorClass}`}>
                    {item.product}
                  </p>
                )}
                <p className="w-full text-center text-base leading-[1.2] font-medium text-texto-medio">
                  {ecosystem.items[i].description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
