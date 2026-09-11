import Image from "next/image";
import Link from "next/link";
import { legalComplianceIcons } from "@/config/legal-compliance";

type ComplianceItem = { label: string; description: string; badge?: string };

export default function ComplianceBadges({
  heading,
  ctaLabel,
  ctaHref,
  items,
}: {
  heading: string;
  ctaLabel?: string;
  ctaHref?: string;
  items: ComplianceItem[];
}) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-contorno-base bg-bg-base p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg leading-[1.2] font-extrabold text-texto">{heading}</h3>
        {ctaHref && ctaLabel && (
          <Link href={ctaHref} className="text-sm leading-[1.2] font-bold text-azul-base hover:underline">
            {ctaLabel}
          </Link>
        )}
      </div>
      <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item, i) => (
          <li key={item.label} className="flex flex-col items-center gap-2 text-center">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-contorno-base bg-branco">
              <Image src={legalComplianceIcons[i]} alt="" aria-hidden="true" width={24} height={24} />
            </span>
            <p className="text-sm leading-[1.2] font-bold text-texto">{item.label}</p>
            {item.badge && (
              <span className="rounded-full bg-azul-bg-superior px-2 py-0.5 text-[11px] leading-[1.2] font-bold text-azul-base">
                {item.badge}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
