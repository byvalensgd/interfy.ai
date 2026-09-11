import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { integracoesFeaturesGridIcons } from "@/config/integracoes-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function IntegracoesFeaturesGrid() {
  const { integracoes } = await getDictionary();
  const { featuresGrid } = integracoes;
  const items = integracoesFeaturesGridIcons.map((icon, i) => ({ icon, ...featuresGrid.items[i] }));

  return (
    <section aria-labelledby="integracoes-features-heading" className="flex justify-center bg-branco px-5 py-10">
      <Reveal className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 id="integracoes-features-heading" className="text-center text-2xl leading-[1.2] font-bold text-texto">
          {featuresGrid.headingPrefix}
          <span className="bg-[linear-gradient(112deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-transparent">
            {featuresGrid.headingHighlight}
          </span>
        </h2>

        <ul aria-label={featuresGrid.ariaLabel} className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col items-center gap-5 rounded-[20px] border border-contorno-base bg-branco px-[15px] py-5 text-center"
            >
              <Image src={item.icon} alt="" aria-hidden="true" width={40} height={40} className="shrink-0" />
              <div className="flex w-full flex-col gap-2.5 px-2.5">
                <p className="flex min-h-[35px] w-full items-center justify-center text-lg leading-[1.2] font-extrabold text-texto">
                  {item.title}
                </p>
                <p className="w-full text-sm leading-[1.2] font-medium text-texto-medio">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
