import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { platformHighlights } from "@/config/segments-page";

export default function BpmHighlights() {
  return (
    <section aria-label="Diferenciais da plataforma" className="flex justify-center px-5 py-10 sm:py-16">
      <Reveal className="flex justify-center">
        <ul className="grid w-full max-w-[1400px] grid-cols-1 gap-6 rounded-[20px] bg-gradient-to-r from-[#001d6b] to-[#000928] px-5 py-[30px] sm:grid-cols-2 lg:grid-cols-5">
          {platformHighlights.map((item) => (
            <li key={item.title} className="flex min-w-0 items-center gap-5">
              <Image src={item.icon} alt="" aria-hidden="true" width={40} height={40} className="shrink-0" />
              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <p className="w-full text-[18px] leading-[1.2] font-extrabold text-branco">{item.title}</p>
                <p className="w-full text-base leading-[1.2] font-medium text-branco">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
