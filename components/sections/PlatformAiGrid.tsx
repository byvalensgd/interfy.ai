import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { platformAiGridIcons } from "@/config/platform-page";
import { getCompleteBoxBasis } from "@/lib/completeBox";

export default async function PlatformAiGrid() {
  const { platform } = await getDictionary();
  const { aiGrid } = platform;
  const items = platformAiGridIcons.map((icon, i) => ({ icon, ...aiGrid.items[i] }));
  const cardBasis = getCompleteBoxBasis(items.length);

  return (
    <section
      aria-labelledby="platform-ai-grid-heading"
      className="flex justify-center px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="platform-ai-grid-heading"
          className="text-center text-2xl leading-[1.2] font-bold text-texto"
        >
          {aiGrid.headline}{" "}
          <span className="inline-block bg-[linear-gradient(168.8deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
            {aiGrid.headlineHighlight}
          </span>
        </h2>

        {/* Below lg: "Blocos Mobile" — each item becomes its own bordered
            card via "Complete Box" (see lib/completeBox.ts): a targeted
            flex-basis per breakpoint keeps every row's item count within 1
            of every other row, and flex-grow fills any incomplete row so
            it never leaves a gap. At lg+: the original shared-container grid. */}
        <Reveal className="w-full">
          <ul className="flex w-full flex-wrap gap-4 lg:hidden">
            {items.map((item) => (
              <li
                key={item.icon}
                className={`flex min-h-[170px] min-w-[160px] grow flex-col items-center justify-center gap-2.5 rounded-[14px] border border-contorno-base bg-branco p-5 text-center ${cardBasis}`}
              >
                <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                <div className="flex w-full flex-col items-center gap-2">
                  <p className="flex min-h-[30px] w-full items-center justify-center text-base leading-[1.2] font-bold text-texto-doc-ok">
                    {item.title}
                  </p>
                  <p className="w-full text-sm leading-[1.2] font-medium text-texto">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="hidden w-full lg:block">
          <ul className="grid w-full grid-cols-4 gap-x-5 gap-y-[30px] rounded-[20px] border border-contorno-base p-[30px]">
            {items.map((item) => (
              <li key={item.icon} className="flex min-w-0 flex-col gap-5">
                <div className="flex items-center gap-5">
                  <Image src={item.icon} alt="" aria-hidden="true" width={36} height={36} className="shrink-0" />
                  <p className="min-w-0 flex-1 text-lg leading-[1.2] font-extrabold text-texto">{item.title}</p>
                </div>
                <p className="text-base leading-[1.2] font-medium text-texto-medio">{item.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
