import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { siteConfig } from "@/config/site";
import { footerTrustItems } from "@/config/trust";
import {
  footerColumns,
  footerLanguages,
  footerRegions,
  footerSocialBadges,
  footerSocialLinks,
} from "@/config/footer";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-10 bg-bg-base pt-[50px]">
      <div className="flex w-full justify-center px-5">
        <div className="grid w-full max-w-[1400px] grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-[280px_repeat(4,1fr)]">
          <div className="flex flex-col items-start gap-5 sm:col-span-2 lg:col-span-1">
            <div className="relative h-[50px] w-full max-w-[200px]">
              <Image src="/footer/logo-land.svg" alt={siteConfig.name} fill sizes="200px" className="object-contain object-left" />
            </div>
            <p className="text-base leading-[1.2] font-normal text-texto">
              Plataforma completa para gestão corporativa, automação de processos, documentos
              digitais e inteligência artificial.
            </p>
            <div className="flex w-full flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <Image src="/footer/local.svg" alt="" aria-hidden="true" width={20} height={20} />
                <p className="text-sm leading-[1.2] font-medium text-texto">Orlando, Flórida - USA</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Image src="/footer/planet-web.svg" alt="" aria-hidden="true" width={18} height={18} />
                <p className="text-sm leading-[1.2] font-medium text-texto">
                  Atendendo mais de 50 países
                </p>
              </div>
            </div>
            <ul className="flex flex-wrap items-center gap-[15px]">
              {footerSocialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex size-[50px] items-center justify-center rounded-full border border-contorno-base bg-branco transition-colors hover:border-azul-base"
                  >
                    <Image src={social.icon} alt="" aria-hidden="true" width={22} height={22} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((column) => (
            <nav
              key={column.title}
              aria-label={column.title}
              className="flex flex-col items-start gap-10 border-l border-contorno-base pl-5"
            >
              <div className="flex flex-col items-start gap-2.5">
                <h2 className="text-xl leading-[1.2] font-bold text-texto">{column.title}</h2>
                <div
                  className="h-[1.5px] w-[30px] rounded-full"
                  style={{ backgroundImage: column.accentGradient }}
                />
              </div>
              <ul className="flex w-full flex-col gap-[15px]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm leading-[1.2] font-medium text-texto transition-colors hover:text-azul-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-center px-5">
        <div className="flex w-full max-w-[1400px] flex-wrap items-center justify-center gap-y-10 rounded-[20px] border border-contorno-base bg-branco p-5">
          <div className="flex min-w-[350px] flex-1 flex-col gap-2.5">
            <p className="text-xl leading-[1.2] font-bold text-texto">
              Uma plataforma global, presente em mais de 180 países
            </p>
            <div className="flex flex-wrap items-center gap-10">
              <p className="max-w-[300px] flex-1 text-base leading-[1.2] font-normal text-texto">
                Com páginas comerciais específicas para:
              </p>
              <ul className="grid flex-1 grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:items-center sm:justify-end sm:gap-10">
                {footerRegions.map((region) => (
                  <li key={region} className="text-base leading-[1.2] font-normal whitespace-nowrap text-texto sm:text-right">
                    {region}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center px-5">
        <ul className="flex w-full max-w-[1400px] flex-wrap items-stretch justify-center rounded-[20px] border border-contorno-base bg-branco">
          {footerTrustItems.map((item, i) => (
            <li
              key={item.title}
              className={`flex min-w-[280px] flex-1 items-center gap-5 p-5 ${
                i < footerTrustItems.length - 1 ? "border-contorno-base sm:border-r" : ""
              }`}
            >
              <Image src={item.icon} alt="" aria-hidden="true" width={40} height={40} className="shrink-0" />
              <div className="flex flex-col gap-2.5">
                <p className="text-lg leading-[1.2] font-extrabold text-texto">{item.title}</p>
                <p className="text-base leading-[1.2] font-normal text-texto">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex w-full justify-center bg-branco px-5 py-5">
        <div className="flex w-full max-w-[1400px] flex-wrap items-center justify-center gap-x-[50px] gap-y-3.5">
          <p className="flex-1 min-w-[200px] text-base leading-[1.2] font-normal text-texto">
            {siteConfig.name} &copy; {new Date().getFullYear()}. Todos os direitos reservados.
          </p>

          <div className="flex min-w-[320px] items-center gap-2.5 rounded-md p-1.5">
            <Globe className="size-[18px] shrink-0 text-texto" aria-hidden="true" />
            <div className="flex flex-wrap items-center gap-5">
              {footerLanguages.map((language, i) => (
                <button
                  key={language}
                  type="button"
                  aria-current={i === 0 ? "true" : undefined}
                  className={`min-w-[90px] text-base leading-[1.2] whitespace-nowrap ${
                    i === 0 ? "font-bold text-azul-base" : "font-normal text-texto"
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>
          </div>

          <div className="flex min-w-[360px] flex-1 flex-wrap items-center justify-center gap-5">
            <p className="min-w-[94px] flex-1 text-base leading-[1.2] font-normal text-texto">
              Siga a Interfy
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-[18px]">
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
