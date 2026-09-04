import Image from "next/image";
import Link from "next/link";
import type { FooterColumn } from "@/config/footer";

export default function FooterNavColumn({ column }: { column: FooterColumn }) {
  return (
    <nav
      aria-label={column.title}
      className="flex flex-col items-start gap-5 lg:h-full lg:min-h-[320px] lg:gap-10 lg:border-l lg:border-contorno-base lg:pl-5"
    >
      <h2 className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] leading-[1.2] font-bold text-texto">
        {column.title}
      </h2>
      <ul className="flex w-full flex-1 flex-col items-start justify-between gap-2.5">
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
  );
}
