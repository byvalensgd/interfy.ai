import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerTrustItems } from "@/config/trust";
import { LanguageSelectorFull } from "@/components/ui/LanguageSelector";
import {
  footerColumns,
  footerRegions,
  footerSocialBadges,
  footerSocialLinks,
} from "@/config/footer";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-10 bg-bg-base pt-[50px]">
      <div className="flex w-full justify-center px-5">
        <div className="grid w-full max-w-[1400px] grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-[340px_repeat(4,1fr)]">
          <div className="flex flex-col items-start gap-5 sm:col-span-2 lg:col-span-1">
            <div className="relative h-[50px] w-full max-w-[200px]">
              <Image src="/footer/logo-land.svg" alt={siteConfig.name} fill sizes="200px" className="object-contain object-left" />
            </div>
            <p className="mt-auto text-base leading-[1.2] font-normal text-texto">
              Plataforma completa para gestão corporativa, automação de processos, documentos
              digitais e inteligência artificial.
            </p>
            <div className="flex w-full items-center gap-2.5">
              <Image src="/footer/local.svg" alt="" aria-hidden="true" width={20} height={20} />
              <p className="text-sm leading-[1.2] font-medium text-texto">Orlando, Flórida - USA</p>
            </div>
            <ul className="flex flex-nowrap items-center gap-[15px]">
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
              className="flex h-full min-h-[320px] flex-col items-start gap-10 border-l border-contorno-base pl-5"
            >
              <div className="flex flex-col items-start gap-2.5">
                <h2 className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] leading-[1.2] font-bold text-texto">{column.title}</h2>
                <div
                  className="h-[1.5px] w-[30px] rounded-full"
                  style={{ backgroundImage: column.accentGradient }}
                />
              </div>
              <ul className="flex w-full flex-1 flex-col items-start justify-between">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2.5 text-sm leading-[1.2] font-medium text-texto transition-colors hover:text-azul-base"
                    >
                      {link.icon && (
                        <Image src={link.icon} alt="" aria-hidden="true" width={20} height={20} className="shrink-0" />
                      )}
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
        <div className="flex w-full max-w-[1400px] flex-wrap items-center justify-center gap-y-10 rounded-[12px] border border-contorno-base bg-branco p-5">
          <div className="flex min-w-[350px] flex-1 flex-col gap-5">
            <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] leading-[1.2] font-bold text-texto">
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
        <ul className="flex w-full max-w-[1400px] flex-wrap items-center justify-center gap-x-20 gap-y-10 rounded-[12px] border border-contorno-base bg-branco px-2.5 py-2.5">
          {footerTrustItems.map((item) => (
            <li key={item.title} className="flex items-center gap-5 py-5">
              <Image src={item.icon} alt="" aria-hidden="true" width={40} height={40} className="shrink-0" />
              <div className="flex flex-col gap-2.5">
                <p className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] leading-[1.2] font-bold text-texto">{item.title}</p>
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

          <LanguageSelectorFull />

          <div className="flex min-w-[360px] flex-1 flex-wrap items-center justify-center gap-5">
            <p
              className="min-w-[94px] flex-1 bg-clip-text text-right text-base leading-[1.2] font-normal text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #001d6b, #000928)" }}
            >
              Siga a Interfy:
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
