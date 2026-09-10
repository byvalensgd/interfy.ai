import Image from "next/image";
import { siteConfig } from "@/config/site";
import { LanguageSelectorFull } from "@/components/ui/LanguageSelector";
import FooterNavColumn from "@/components/ui/FooterNavColumn";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { footerColumns as footerColumnLinks, footerSocialBadges } from "@/config/footer";

export default async function Footer() {
  const locale = await getLocale();
  const { footer, header } = await getDictionary();
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center gap-10 bg-bg-base pt-[50px]">
      <div className="flex w-full justify-center px-5">
        <div className="flex w-full max-w-[1400px] flex-col gap-10 lg:grid lg:grid-cols-[340px_1fr] lg:items-start lg:gap-x-10">
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <div className="relative h-[50px] w-full max-w-[200px]">
              <Image src="/footer/logo-land.svg" alt={siteConfig.name} fill sizes="200px" className="object-contain object-left" />
            </div>
            <p className="text-base leading-[1.2] font-normal text-texto">{footer.description}</p>
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
              {footer.group.prefix} <span className="font-bold">{footer.group.brand}</span>
              {" · "}
              {footer.group.middle}{" "}
              <a
                href="https://www.interfycorp.com"
                target="_blank"
                rel="noreferrer"
                className="font-bold hover:underline"
              >
                {footer.group.linkLabel}
              </a>
            </p>
            <div className="mt-auto flex w-full items-center justify-center gap-2.5 lg:justify-start">
              <Image src="/footer/local.svg" alt="" aria-hidden="true" width={20} height={20} />
              <p className="text-sm leading-[1.2] font-medium text-texto">{footer.location}</p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-4">
            {footerColumnLinks.map((column, colIndex) => (
              <FooterNavColumn
                key={footer.columns[colIndex].title}
                column={column}
                dict={footer.columns[colIndex]}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center px-5">
        <div className="flex w-full max-w-[1400px] flex-wrap items-center justify-center gap-y-10 rounded-[12px] border border-contorno-base bg-branco p-5">
          <div className="flex w-full min-w-0 flex-1 flex-col gap-5">
            <p className="text-center text-[18px] leading-[1.2] font-extrabold text-texto lg:text-left">
              {footer.globalLine}
            </p>
            <div className="flex w-full flex-col items-center gap-5 text-center lg:flex-row lg:flex-wrap lg:items-center lg:text-left lg:gap-10">
              <p className="text-base leading-[1.2] font-normal text-texto lg:max-w-[300px] lg:flex-1">
                {footer.regionsIntro}
              </p>
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:flex-1 lg:justify-end lg:gap-x-10">
                {(footer.regions as string[]).map((region) => (
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
        <ul className="flex w-full max-w-[1400px] flex-wrap items-center justify-around gap-x-10 gap-y-5 rounded-[12px] border border-contorno-base bg-branco px-2.5 py-2.5">
          {(footer.trustItems as { title: string; description: string }[]).map((item, i) => {
            const icons = [
              "/footer/trust-security.svg",
              "/footer/trust-cloud.svg",
              "/footer/trust-lgpd.svg",
              "/footer/trust-uptime.svg",
            ];
            return (
              <li key={item.title} className="flex flex-col items-center gap-5 py-4 text-center sm:flex-row sm:text-left">
                <Image src={icons[i]} alt="" aria-hidden="true" width={40} height={40} className="shrink-0" />
                <div className="flex flex-col items-center gap-2.5 sm:items-start">
                  <p className="text-[18px] leading-[1.2] font-extrabold whitespace-nowrap text-texto">{item.title}</p>
                  <p className="text-base leading-[1.2] font-normal text-texto">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex w-full justify-center bg-branco px-5 py-5">
        <div className="flex w-full max-w-[1400px] flex-col items-center gap-3.5 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-x-[50px] lg:gap-y-3.5">
          <p className="flex-1 min-w-[200px] text-center text-base leading-[1.2] font-normal text-texto lg:text-left">
            <span className="font-bold">{footer.copyright.brand}</span>{" "}
            {footer.copyright.suffix.replace("{year}", String(year))}
          </p>

          <LanguageSelectorFull locale={locale} ariaLabel={header.languageSelectorAria} />

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
