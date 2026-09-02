import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { mainNav, siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
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
          className="hidden flex-1 items-center justify-center lg:flex"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2.5">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-base text-texto transition-colors hover:text-azul-base"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
          <button
            type="button"
            aria-label="Selecionar idioma: Português (Brasil)"
            className="flex shrink-0 items-center gap-1.5 rounded-md p-1.5 text-sm font-bold text-texto hover:bg-bg-base"
          >
            BR
            <Globe className="size-[18px]" aria-hidden="true" />
          </button>
          <Button href="/comece-gratis" variant="primary" size="sm" showArrow>
            Comece Grátis
          </Button>
          <Button href="/demo" variant="secondary" size="sm">
            Agende uma Demo
          </Button>
        </div>

        <MobileNav items={mainNav} />
      </div>
    </header>
  );
}
