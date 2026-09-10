import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

type Channel = { icon: string; title: string; description: string; actionLabel: string; href: string };

const channelIcons = ["/icons/connect/chat.svg", "/icons/connect/mail.svg", "/icons/footer/fone.svg", "/icons/footer/book.svg"];

export default function SuporteChannels({
  ariaLabel,
  heading,
  items,
}: {
  ariaLabel: string;
  heading: string;
  items: Omit<Channel, "icon">[];
}) {
  const channels = channelIcons.map((icon, i) => ({ icon, ...items[i] }));

  return (
    <section aria-label={ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 className="text-center text-[clamp(1.5rem,0.8333vw+1.3333rem,2rem)] font-extrabold leading-[1.2] text-texto">
          {heading}
        </h2>
        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel, i) => (
            <Reveal key={channel.title} delayMs={i * 80}>
              <li className="flex h-full flex-col items-center gap-4 rounded-2xl border border-contorno-base bg-branco p-6 text-center">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-azul-bg-superior">
                  <Image src={channel.icon} alt="" aria-hidden="true" width={26} height={26} />
                </span>
                <div className="flex flex-1 flex-col gap-1.5">
                  <p className="text-base leading-[1.2] font-bold text-texto">{channel.title}</p>
                  <p className="text-sm leading-[1.4] font-medium text-texto-medio">{channel.description}</p>
                </div>
                <Link href={channel.href} className="text-sm font-bold leading-[1.2] text-azul-base hover:underline">
                  {channel.actionLabel}
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
