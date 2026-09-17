import Image from "next/image";
import Link from "next/link";
import { Code2 } from "lucide-react";
import ApiCodeSample from "@/components/ui/ApiCodeSample";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { getCompleteBoxBasis } from "@/lib/completeBox";
import { integracoesDevLangs } from "@/config/integracoes-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";
import CtaLink from "@/components/ui/CtaLink";

export default async function IntegracoesDeveloperDocs() {
  const locale = await getLocale();
  const { integracoes } = await getDictionary();
  const { developerDocs } = integracoes;
  const { docsCard, codeCard, ctaCard } = developerDocs;

  return (
    <section aria-label={docsCard.heading} className="flex justify-center bg-branco px-5 py-10">
      <div className="grid w-full max-w-[1400px] grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr_minmax(0,350px)]">
        <Reveal
          className="flex flex-col items-start gap-5 rounded-[20px] border border-contorno-base px-5 py-[30px] lg:min-h-[310px]"
          style={{ backgroundImage: "linear-gradient(118deg, #ffffff 4.55%, #efefff 90.43%, #c8c8ff 126.82%)" }}
        >
          <div className="flex flex-col items-start gap-5">
            <h2 className="text-2xl leading-[1.2] font-bold text-texto">{docsCard.heading}</h2>
            <p className="text-sm leading-[1.2] font-medium text-texto">{docsCard.description}</p>
          </div>

          {/* "Complete Box" (see lib/completeBox.ts): flex-basis targeting a specific column
              count per tier, instead of a bare flex-1 greedily wrapping "as many as fit" —
              keeps rows balanced and lets a short last row stretch to fill instead of leaving
              a gap. */}
          <ul aria-label={docsCard.langsAriaLabel} className="flex w-full flex-wrap items-start justify-center gap-2.5">
            {integracoesDevLangs.map((lang) => (
              <li
                key={lang.label}
                className={`flex grow min-w-[80px] ${getCompleteBoxBasis(integracoesDevLangs.length)} flex-col items-center gap-[15px]`}
              >
                <Image src={lang.icon} alt="" aria-hidden="true" width={40} height={40} className="shrink-0" />
                <p className="w-full text-center text-xs leading-[1.2] font-bold text-texto">{lang.label}</p>
              </li>
            ))}
          </ul>

          <Button href={withLocale("/suporte", locale)} variant="secondary" className="whitespace-nowrap">
            {docsCard.ctaLabel}
            <Code2 className="size-[18px]" aria-hidden="true" />
          </Button>
        </Reveal>

        <Reveal className="flex flex-col items-start gap-5 rounded-[20px] bg-gradient-to-r from-[#001d6b] to-[#000928] px-5 py-[30px] lg:min-h-[310px]">
          <h2 className="text-2xl leading-[1.2] font-bold text-branco">{codeCard.heading}</h2>
          <ApiCodeSample />
        </Reveal>

        <Reveal className="relative flex flex-col justify-between gap-[30px] overflow-hidden rounded-[20px] px-5 py-[30px] lg:min-h-[310px]">
          <Image src="/agentes-integracoes/cta-bg.webp" alt="" aria-hidden="true" fill sizes="(min-width: 1024px) 33vw, 100vw" className="-z-10 object-cover" />
          <div className="flex flex-col gap-5 text-branco">
            <h2 className="text-2xl leading-[1.2] font-bold">{ctaCard.heading}</h2>
            <p className="text-lg leading-[1.2] font-semibold">{ctaCard.description}</p>
          </div>
          <div className="@container flex flex-col items-stretch gap-5">
            <CtaLink
              href={withLocale("/test-drive", locale)}
              className="inline-flex min-h-10 items-center justify-center rounded-lg border-[1.5px] border-azul-base bg-branco px-[15px] py-2.5 !text-[clamp(0.625rem,3.333cqw+0.1667rem,1rem)] leading-[1.2] font-bold !whitespace-normal text-azul-base transition-colors hover:bg-azul-bg-superior"
            >
              {ctaCard.primaryLabel}
            </CtaLink>
            <Link
              href={withLocale("/contato", locale)}
              className="inline-flex min-h-10 items-center justify-center rounded-lg border-[1.5px] border-branco bg-black/40 px-[15px] py-2.5 !text-[clamp(0.625rem,3.333cqw+0.1667rem,1rem)] leading-[1.2] font-bold !whitespace-normal text-branco transition-colors hover:bg-black/50"
            >
              {ctaCard.secondaryLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
