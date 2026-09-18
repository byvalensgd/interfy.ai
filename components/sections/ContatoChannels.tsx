import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

type ContatoItem = { title: string; description: string; actionLabel?: string; href?: string };

// 5 channels adapted from the Figma "Outros canais" reference (chat, WhatsApp,
// phone, schedule a meeting, email) onto Interfy's own real contact points.
const channelIcons = [
  "/icons/connect/chat.svg",
  "/icons/connect/whatsapp.svg",
  "/icons/footer/fone.svg",
  "/icons/test-drive/calendar.svg",
  "/icons/connect/mail.svg",
];

export default function ContatoChannels({
  ariaLabel,
  heading,
  subheading,
  items,
}: {
  ariaLabel: string;
  heading: string;
  subheading: string;
  items: ContatoItem[];
}) {
  return (
    <section aria-label={ariaLabel} className="flex justify-center bg-bg-base px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <h2 className="text-[clamp(1.5rem,0.8333vw+1.3333rem,2rem)] leading-[1.2] font-extrabold text-texto">
            {heading}
          </h2>
          <p className="text-base leading-[1.2] font-medium text-texto-medio">{subheading}</p>
        </div>
        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item, i) => {
            const isExternal = item.href?.startsWith("http");
            return (
              <Reveal key={item.title} delayMs={i * 80}>
                <li className="flex h-full flex-col items-center gap-4 rounded-2xl border border-contorno-base bg-branco p-6 text-center">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-azul-bg-superior">
                    <Image src={channelIcons[i]} alt="" aria-hidden="true" width={26} height={26} />
                  </span>
                  <div className="flex flex-1 flex-col gap-2.5">
                    <p className="text-base leading-[1.2] font-bold text-texto">{item.title}</p>
                    <p className="text-sm leading-[1.4] font-medium text-texto-medio">{item.description}</p>
                  </div>
                  {item.href && item.actionLabel && (
                    <Link
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="text-sm font-bold leading-[1.2] text-azul-base hover:underline"
                    >
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
