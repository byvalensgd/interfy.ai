import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { platformMenuItems } from "@/config/products-menu";
import { legalMenuItems, recursosMenuItems } from "@/config/recursos-menu";
import Button from "@/components/ui/Button";
import { LanguageSelectorCompact } from "@/components/ui/LanguageSelector";
import { CTA_DISABLED } from "@/config/feature-flags";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";
import MobileNav, { type MobileNavEntry } from "@/components/layout/MobileNav";
import ProductsMenu from "@/components/layout/ProductsMenu";
import RecursosMenu from "@/components/layout/RecursosMenu";

export default async function Header() {
  const locale = await getLocale();
  const { header, common } = await getDictionary();

  const mobileEntries: MobileNavEntry[] = [
    {
      type: "group",
      group: {
        trigger: header.productsMenu.trigger,
        sections: [
          {
            items: platformMenuItems.map((item, i) => ({
              href: item.href,
              label: header.productsMenu.items[i].title,
              icon: item.icon,
            })),
          },
        ],
      },
    },
    {
      type: "group",
      group: {
        trigger: header.recursosMenu.trigger,
        sections: [
          {
            title: header.recursosMenu.recursosEyebrow,
            items: recursosMenuItems.map((item, i) => ({
              href: item.href,
              label: header.recursosMenu.recursosItems[i].label,
              icon: item.icon,
            })),
          },
          {
            title: header.recursosMenu.legalEyebrow,
            items: legalMenuItems.map((item, i) => ({
              href: item.href,
              label: header.recursosMenu.legalItems[i].label,
              icon: item.icon,
            })),
          },
        ],
      },
    },
    { type: "link", link: { href: "/segmentos", label: header.nav.segmentos } },
    { type: "link", link: { href: "/planos", label: header.nav.plans } },
    { type: "link", link: { href: "/contato", label: header.nav.contact } },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex w-full justify-center border-b border-contorno-base bg-branco px-5">
      <div className="flex h-20 w-full max-w-[1400px] items-center justify-between gap-10 py-5">
        <Link href={withLocale("/", locale)} className="flex shrink-0 items-center gap-2.5" aria-label={siteConfig.name}>
          <Image
            src="/logo/interfy-logo.svg"
            alt={siteConfig.name}
            width={160}
            height={40}
            priority
            className="h-8 w-auto lg:h-10"
          />
        </Link>

        <nav aria-label={header.mainNavAria} className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
          <ul className="flex flex-nowrap items-center justify-center gap-x-5 xl:gap-x-10">
            <li>
              <ProductsMenu items={header.productsMenu} locale={locale} />
            </li>
            <li>
              <RecursosMenu items={header.recursosMenu} locale={locale} />
            </li>
            <li>
              <Link
                href={withLocale("/segmentos", locale)}
                className="flex min-h-[18px] items-center whitespace-nowrap text-[clamp(0.875rem,0.4808vw+0.5673rem,1rem)] leading-[1.5rem] text-texto transition-colors hover:text-azul-base"
              >
                {header.nav.segmentos}
              </Link>
            </li>
            <li>
              <Link
                href={withLocale("/planos", locale)}
                className="flex min-h-[18px] items-center whitespace-nowrap text-[clamp(0.875rem,0.4808vw+0.5673rem,1rem)] leading-[1.5rem] text-texto transition-colors hover:text-azul-base"
              >
                {header.nav.plans}
              </Link>
            </li>
            <li>
              <Link
                href={withLocale("/contato", locale)}
                className="flex min-h-[18px] items-center whitespace-nowrap text-[clamp(0.875rem,0.4808vw+0.5673rem,1rem)] leading-[1.5rem] text-texto transition-colors hover:text-azul-base"
              >
                {header.nav.contact}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <LanguageSelectorCompact locale={locale} ariaLabel={header.languageSelectorAria} />
          <div className="hidden items-center gap-2.5 lg:flex">
            <Button
              href={withLocale("/test-drive", locale)}
              variant="primary"
              size="sm"
              className="!px-3 xl:!px-5"
              disabled={CTA_DISABLED}
            >
              {header.ctaPrimary}
            </Button>
            <Button
              href={withLocale("/demo", locale)}
              variant="secondary"
              size="sm"
              className="!px-3 xl:!px-5"
              disabled={CTA_DISABLED}
            >
              {common.ctaSecondary}
            </Button>
          </div>

          <MobileNav
            entries={mobileEntries}
            locale={locale}
            ariaLabel={header.mobileNavAria}
            openLabel={header.openMenu}
            closeLabel={header.closeMenu}
            ctaPrimary={header.ctaPrimary}
            ctaSecondary={common.ctaSecondary}
          />
        </div>
      </div>
    </header>
  );
}
