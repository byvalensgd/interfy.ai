import Image from "next/image";
import Link from "next/link";
import { Code2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { integracoesDevLangs } from "@/config/integracoes-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

function ApiCodeSample() {
  return (
    <pre className="w-full overflow-x-auto font-mono text-[13px] leading-[1.6] whitespace-pre text-[#d9dee8]">
      <span className="font-bold text-[#4fc778]">POST</span> /api/v1/documents{"\n"}
      curl -X <span className="font-bold text-[#4fc778]">POST</span> https://api.interfy.ai/v1/documents \{"\n"}
      {"  "}
      <span className="text-[#ad82de]">-H</span> <span className="text-[#e5bf6b]">&quot;Authorization: Bearer {"{"}seu_token{"}"}&quot;</span> \{"\n"}
      {"  "}
      <span className="text-[#ad82de]">-H</span> <span className="text-[#e5bf6b]">&quot;Content-Type: application/json&quot;</span> \{"\n"}
      {"  "}
      <span className="text-[#ad82de]">-d</span> {"'{"}
      {"\n"}
      {"    "}
      <span className="text-[#8cc7f2]">&quot;title&quot;</span>: <span className="text-[#de9457]">&quot;Contrato.pdf&quot;</span>,{"\n"}
      {"    "}
      <span className="text-[#8cc7f2]">&quot;folderId&quot;</span>: <span className="text-[#de9457]">&quot;12345&quot;</span>,{"\n"}
      {"    "}
      <span className="text-[#8cc7f2]">&quot;tags&quot;</span>: [<span className="text-[#de9457]">&quot;contrato&quot;</span>, <span className="text-[#de9457]">&quot;cliente&quot;</span>],{"\n"}
      {"    "}
      <span className="text-[#8cc7f2]">&quot;fileUrls&quot;</span>: [<span className="text-[#de9457]">&quot;https://.../arquivo.pdf&quot;</span>]{"\n"}
      {"  }'"}
    </pre>
  );
}

export default async function IntegracoesDeveloperDocs() {
  const locale = await getLocale();
  const { integracoes } = await getDictionary();
  const { developerDocs } = integracoes;
  const { docsCard, codeCard, ctaCard } = developerDocs;

  return (
    <section aria-label={docsCard.heading} className="flex justify-center bg-branco px-5 py-10">
      <div className="grid w-full max-w-[1400px] grid-cols-1 gap-5 lg:grid-cols-3">
        <Reveal
          className="flex min-h-[310px] flex-col items-start gap-5 rounded-[20px] border border-contorno-base px-5 py-[30px]"
          style={{ backgroundImage: "linear-gradient(118deg, #ffffff 4.55%, #efefff 90.43%, #c8c8ff 126.82%)" }}
        >
          <div className="flex flex-col items-start gap-5">
            <h2 className="text-2xl leading-[1.2] font-bold text-texto">{docsCard.heading}</h2>
            <p className="text-sm leading-[1.2] font-medium text-texto">{docsCard.description}</p>
          </div>

          <ul aria-label={docsCard.langsAriaLabel} className="flex w-full items-start justify-center gap-2.5">
            {integracoesDevLangs.map((lang) => (
              <li key={lang.label} className="flex min-w-0 flex-1 flex-col items-center gap-[15px]">
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

        <Reveal className="flex min-h-[310px] flex-col items-start gap-5 rounded-[20px] bg-gradient-to-r from-[#001d6b] to-[#000928] px-5 py-[30px]">
          <h2 className="text-2xl leading-[1.2] font-bold text-branco">{codeCard.heading}</h2>
          <ApiCodeSample />
        </Reveal>

        <Reveal className="relative flex min-h-[310px] flex-col justify-between gap-[30px] overflow-hidden rounded-[20px] px-5 py-[30px]">
          <Image src="/agentes-integracoes/cta-bg.webp" alt="" aria-hidden="true" fill sizes="(min-width: 1024px) 33vw, 100vw" className="-z-10 object-cover" />
          <div className="flex flex-col gap-5 text-branco">
            <h2 className="text-2xl leading-[1.2] font-bold">{ctaCard.heading}</h2>
            <p className="text-lg leading-[1.2] font-semibold">{ctaCard.description}</p>
          </div>
          <div className="flex flex-col items-stretch gap-5">
            <Link
              href={withLocale("/comece-gratis", locale)}
              className="inline-flex min-h-10 items-center justify-center rounded-lg border-[1.5px] border-azul-base bg-branco px-[15px] py-2.5 text-base leading-[1.2] font-bold whitespace-nowrap text-azul-base transition-colors hover:bg-azul-bg-superior"
            >
              {ctaCard.primaryLabel}
            </Link>
            <Link
              href={withLocale("/contato", locale)}
              className="inline-flex min-h-10 items-center justify-center rounded-lg border-[1.5px] border-branco bg-black/40 px-[15px] py-2.5 text-base leading-[1.2] font-bold whitespace-nowrap text-branco transition-colors hover:bg-black/50"
            >
              {ctaCard.secondaryLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
