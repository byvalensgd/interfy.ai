import Image from "next/image";
import Link from "next/link";
import { mainNav, siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import { LanguageSelectorCompact } from "@/components/ui/LanguageSelector";
import MobileNav from "@/components/layout/MobileNav";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex w-full justify-center border-b border-contorno-base bg-branco px-5">
      <div className="flex h-20 w-full max-w-[1400px] items-center justify-between gap-10 py-5">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={siteConfig.name}>
          <Image
            src="/logo/interfy-logo.svg"
            alt={siteConfig.name}
            width={160}
            height={40}
            priority
            className="h-8 w-auto lg:h-10"
          />
        </Link>

        <nav
          aria-label="Menu principal"
          className="hidden min-w-0 flex-1 items-center justify-center lg:flex"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 xl:gap-x-10">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="whitespace-nowrap text-base text-texto transition-colors hover:text-azul-base"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex xl:gap-5">
          <LanguageSelectorCompact />
          <Button href="/comece-gratis" variant="primary" size="sm" showArrow className="!px-3 xl:!px-5">
            Comece Grátis
          </Button>
          <Button href="/demo" variant="secondary" size="sm" className="!px-3 xl:!px-5">
            Agende uma Demo
          </Button>
        </div>

        <MobileNav items={mainNav} />
      </div>
    </header>
  );
}
