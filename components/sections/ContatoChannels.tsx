import Link from "next/link";
import { Mail, Phone, MapPin, Clock, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

type ContatoItem = { title: string; description: string; actionLabel?: string; href?: string };

const cardIcons: LucideIcon[] = [Mail, Phone, MapPin, Clock];

export default function ContatoChannels({
  ariaLabel,
  heading,
  items,
}: {
  ariaLabel: string;
  heading: string;
  items: ContatoItem[];
}) {
  return (
    <section aria-label={ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 className="text-center text-[clamp(1.5rem,0.8333vw+1.3333rem,2rem)] font-extrabold leading-[1.2] text-texto">
          {heading}
        </h2>
        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = cardIcons[i];
            return (
              <Reveal key={item.title} delayMs={i * 80}>
                <li className="flex h-full flex-col items-center gap-4 rounded-2xl border border-contorno-base bg-branco p-6 text-center">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-azul-bg-superior">
                    <Icon className="size-6 text-azul-base" aria-hidden="true" />
                  </span>
                  <div className="flex flex-1 flex-col gap-1.5">
                    <p className="text-base leading-[1.2] font-bold text-texto">{item.title}</p>
                    <p className="text-sm leading-[1.4] font-medium text-texto-medio">{item.description}</p>
                  </div>
                  {item.href && item.actionLabel && (
                    <Link href={item.href} className="text-sm font-bold leading-[1.2] text-azul-base hover:underline">
                      {item.actionLabel}
                    </Link>
                  )}
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
