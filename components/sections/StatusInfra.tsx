import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import ComplianceBadges from "@/components/ui/ComplianceBadges";

type InfraItem = { icon: string; label: string };

type Certifications = {
  heading: string;
  ctaLabel?: string;
  items: { label: string; description: string; badge?: string }[];
};

export default function StatusInfra({
  ariaLabel,
  heading,
  subheading,
  items,
  certifications,
  certificationsCtaHref,
}: {
  ariaLabel: string;
  heading: string;
  subheading: string;
  items: InfraItem[];
  certifications?: Certifications;
  certificationsCtaHref?: string;
}) {
  return (
    <section aria-label={ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-[clamp(1.5rem,0.8333vw+1.3333rem,2rem)] font-extrabold leading-[1.2] text-texto">
            {heading}
          </h2>
          <p className="max-w-xl text-base leading-[1.4] font-medium text-texto-medio">{subheading}</p>
        </div>

        <Reveal className="w-full">
          <ul className="grid w-full grid-cols-1 gap-x-6 gap-y-5 rounded-2xl border border-contorno-base bg-branco p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
            {items.map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <Image src={item.icon} alt="" aria-hidden="true" width={22} height={22} className="shrink-0" />
                <span className="text-sm leading-[1.3] font-medium text-texto">{item.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {certifications && (
          <Reveal delayMs={80} className="w-full">
            <ComplianceBadges
              heading={certifications.heading}
              ctaLabel={certifications.ctaLabel}
              ctaHref={certificationsCtaHref}
              items={certifications.items}
            />
          </Reveal>
        )}
      </div>
    </section>
  );
}
