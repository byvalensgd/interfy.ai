import Image from "next/image";
import { siteConfig } from "@/config/site";
import { footerTrustItems } from "@/config/trust";
import { LanguageSelectorFull } from "@/components/ui/LanguageSelector";
import FooterNavColumn from "@/components/ui/FooterNavColumn";
import {
  footerColumns,
  footerRegions,
  footerSocialBadges,
} from "@/config/footer";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-10 bg-bg-base pt-[50px]">
      <div className="flex w-full justify-center px-5">
        <div className="flex w-full max-w-[1400px] flex-col gap-10 lg:grid lg:grid-cols-[340px_1fr] lg:items-start lg:gap-x-5">
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <div className="relative h-[50px] w-full max-w-[200px]">
              <Image src="/footer/logo-land.svg" alt={siteConfig.name} fill sizes="200px" className="object-contain object-left" />
            </div>
            <p className="text-base leading-[1.2] font-normal text-texto">
              Plataforma empresarial AI-native que conecta documentos, processos, pessoas, dados
              e comunicação em um único ambiente inteligente.
            </p>
            <div className="flex w-full items-center justify-center lg:justify-start">
              <div className="h-[2px] w-[30px] shrink-0 bg-[#fb403a]" />
              <div className="h-[2px] w-[30px] shrink-0 bg-[#feb21c]" />
              <div className="h-[2px] w-[30px] shrink-0 bg-[#2fb767]" />
              <div className="h-[2px] w-[30px] shrink-0 bg-[#09a1ea]" />
              <div className="h-[2px] w-[30px] shrink-0 bg-[#0781ec]" />
              <div className="h-[2px] w-[30px] shrink-0 bg-[#9826e6]" />
              <div className="hidden h-[2px] flex-1 bg-texto-sem-destaque lg:block" />
            </div>
            <p className="text-base leading-[1.2] text-texto-doc-ok">
              Uma plataforma da <span className="font-bold">Interfy Corporation</span>
              {" · "}
              Conheça o grupo:{" "}
              <a
                href="https://www.interfycorp.com"
                target="_blank"
                rel="noreferrer"
                className="font-bold hover:underline"
              >
                www.interfycorp.com
              </a>
            </p>
            <div className="mt-auto flex w-full items-center justify-center gap-2.5 lg:justify-start">
              <Image src="/footer/local.svg" alt="" aria-hidden="true" width={20} height={20} />
              <p className="text-sm leading-[1.2] font-medium text-texto">Orlando, Flórida - USA</p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <FooterNavColumn key={column.title} column={column} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center px-5">
        <div className="flex w-full max-w-[1400px] flex-wrap items-center justify-center gap-y-10 rounded-[12px] border border-contorno-base bg-branco p-5">
          <div className="flex min-w-[350px] flex-1 flex-col gap-5">
            <p className="text-center text-[18px] leading-[1.2] font-extrabold text-texto lg:text-left">
              Uma plataforma global, presente em mais de 180 países
            </p>
            <div className="flex w-full flex-col items-center gap-5 text-center lg:flex-row lg:flex-wrap lg:items-center lg:text-left lg:gap-10">
              <p className="text-base leading-[1.2] font-normal text-texto lg:max-w-[300px] lg:flex-1">
                Com páginas comerciais específicas para:
              </p>
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:flex-1 lg:justify-end lg:gap-x-10">
                {footerRegions.map((region) => (
                  <li key={region} className="text-base leading-[1.2] font-normal whitespace-nowrap text-texto">
                    {region}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center px-5">
        <ul className="grid w-full max-w-[1400px] grid-cols-1 items-center justify-items-start gap-x-20 gap-y-5 rounded-[12px] border border-contorno-base bg-branco px-2.5 py-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {footerTrustItems.map((item) => (
            <li key={item.title} className="flex items-center gap-5 py-4">
              <Image src={item.icon} alt="" aria-hidden="true" width={40} height={40} className="shrink-0" />
              <div className="flex flex-col gap-2.5">
                <p className="text-[18px] leading-[1.2] font-extrabold text-texto">{item.title}</p>
                <p className="text-base leading-[1.2] font-normal text-texto">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex w-full justify-center bg-branco px-5 py-5">
        <div className="flex w-full max-w-[1400px] flex-col items-center gap-3.5 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-x-[50px] lg:gap-y-3.5">
          <p className="flex-1 min-w-[200px] text-center text-base leading-[1.2] font-normal text-texto lg:text-left">
            <span className="font-bold">Interfy Corporation</span> &copy; {new Date().getFullYear()}.
            Todos os direitos reservados.
          </p>

          <LanguageSelectorFull />

          <div className="flex flex-1 flex-wrap items-center justify-center gap-5 lg:justify-end">
            <ul className="flex flex-nowrap items-center justify-center gap-[18px]">
              {footerSocialBadges.map((social) => (
                <li key={social.label}>
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noreferrer">
                    <Image src={social.icon} alt="" aria-hidden="true" width={50} height={50} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
