import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { whyInterfyFeatures } from "@/config/features";

export default async function WhyInterfy() {
  const { home } = await getDictionary();
  const { whyInterfy } = home;
  const features = whyInterfyFeatures.map((feature, i) => ({ ...feature, ...whyInterfy.items[i] }));

  return (
    <section
      aria-labelledby="why-interfy-heading"
      className="flex justify-center px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="why-interfy-heading"
          className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] font-bold leading-[1.2] text-texto"
        >
          {whyInterfy.headline}{" "}
          <span className="inline-block bg-[linear-gradient(168.8deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
            {whyInterfy.headlineHighlight}
          </span>
        </h2>

        <Reveal className="w-full">
          {/* Below lg: each item becomes its own bordered card ("Blocos Mobile"),
              the site's standing icon+text mobile treatment (see StatsBar.tsx). */}
          <ul
            aria-label={`${whyInterfy.headline} ${whyInterfy.headlineHighlight}`}
            className="flex w-full flex-wrap gap-4 lg:hidden"
          >
            {features.map((feature) => (
              <li
                key={feature.title}
                className="flex min-w-[140px] flex-1 flex-col items-center gap-2.5 rounded-[14px] border border-contorno-base bg-branco p-5 text-center"
              >
                <Image src={feature.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                <div className="flex w-full flex-col items-center gap-2">
                  <p className="flex min-h-[30px] w-full items-center justify-center text-base leading-[1.2] font-bold text-texto-doc-ok">
                    {feature.title}
                  </p>
                  <p className="w-full text-sm leading-[1.2] font-medium text-texto">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <ul
            aria-label={`${whyInterfy.headline} ${whyInterfy.headlineHighlight}`}
            className="hidden w-full grid-cols-4 gap-x-0 gap-y-10 rounded-[12px] border border-contorno-base py-5 lg:grid"
          >
            {features.map((feature, index) => (
              <li
                key={feature.title}
                className={`flex flex-col gap-5 border-contorno-base px-5 ${index % 4 !== 3 ? "lg:border-r" : ""}`}
              >
                <div className="flex items-center gap-[15px]">
                  <Image
                    src={feature.icon}
                    alt=""
                    aria-hidden="true"
                    width={35}
                    height={35}
                    className="shrink-0"
                  />
                  <p className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] font-bold leading-[1.2] text-texto">
                    {feature.title}
                  </p>
                </div>
                <p className="text-base font-medium leading-[1.2] text-texto-medio">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
