import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";
import { platformEcosystemItems as platformEcosystemIcons } from "@/config/segments-page";

export default async function SegmentsPlatform() {
  const locale = await getLocale();
  const { segments } = await getDictionary();
  const ecosystemItems = platformEcosystemIcons.map((entry, i) => ({
    ...entry,
    ...segments.platform.items[i],
  }));

  return (
    <section aria-labelledby="segments-platform-heading" className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="segments-platform-heading"
          className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          <span className="inline-block bg-[linear-gradient(168.8deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
            {segments.platform.titleHighlight}
          </span>{" "}
          {segments.platform.titleSuffix}
        </h2>

        <Reveal className="w-full">
          <ul className="grid w-full grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 lg:grid-cols-8">
            {ecosystemItems.map((item) => (
              <li key={item.product} className="flex flex-col items-center gap-5">
                <span className="flex size-[70px] shrink-0 items-center justify-center rounded-full border border-contorno-base bg-branco p-4">
                  <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} />
                </span>
                <div className="flex flex-col items-center gap-5 text-center">
                  <div className="flex w-full flex-col items-center gap-2.5 text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] leading-[0] font-bold">
                    <p className="w-full leading-[1.2] text-texto">{segments.platform.brandName}</p>
                    {item.colorClass === "gradient" ? (
                      <p className="inline-block w-full bg-[linear-gradient(123.44deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text leading-[1.2] text-transparent">
                        {item.product}
                      </p>
                    ) : (
                      <p className={`w-full leading-[1.2] ${item.colorClass}`}>{item.product}</p>
                    )}
                  </div>
                  <p className="text-base leading-[1.2] font-medium text-texto-medio">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Link
          href={withLocale("/platform", locale)}
          className="inline-flex min-h-[50px] shrink-0 items-center justify-center gap-2.5 rounded-lg bg-[linear-gradient(104.3deg,#184aee_22.86%,#bf18f6_96.41%)] px-[30px] py-2.5 text-base font-extrabold whitespace-nowrap text-branco transition-opacity hover:opacity-90"
        >
          {segments.platform.ctaLabel}
          <ArrowUpRight className="size-2.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
