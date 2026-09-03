import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { segments } from "@/config/segments";

export default function Segments() {
  return (
    <section
      aria-labelledby="segments-heading"
      className="flex justify-center px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="segments-heading"
          className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          Soluções para diferentes <span className="text-azul-base">segmentos</span>
        </h2>

        <Reveal className="w-full">
          <ul className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 lg:flex lg:flex-wrap">
            {segments.map((segment, index) => {
              const isViewAll = index === segments.length - 1;
              return (
                <li key={segment.label} className="flex flex-1 lg:min-w-[140px]">
                  <Link
                    href={segment.href}
                    className={`flex w-full flex-col items-center gap-4 rounded-[12px] border border-contorno-base px-4 py-5 ${
                      isViewAll
                        ? "transition-[transform,box-shadow] duration-200 hover:scale-105 hover:shadow-[0_10px_24px_-8px_rgba(0,0,0,0.2)]"
                        : ""
                    }`}
                  >
                    <Image src={segment.icon} alt="" aria-hidden="true" width={35} height={35} />
                    <span className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] leading-[1.2] font-bold text-texto">
                      {segment.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
