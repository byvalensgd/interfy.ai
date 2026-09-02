import Image from "next/image";
import Link from "next/link";
import { segments } from "@/config/segments";

export default function Segments() {
  return (
    <section
      aria-labelledby="segments-heading"
      className="flex justify-center px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 id="segments-heading" className="text-2xl leading-[1.2] font-bold text-texto">
          Soluções para diferentes <span className="text-azul-base">segmentos</span>
        </h2>

        <ul className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 lg:flex lg:flex-wrap">
          {segments.map((segment) => (
            <li key={segment.label} className="flex flex-1 lg:min-w-[140px]">
              <Link
                href={segment.href}
                className="flex w-full flex-col items-center gap-4 rounded-[20px] border border-contorno-base px-4 py-5 transition-colors hover:border-azul-base"
              >
                <Image src={segment.icon} alt="" aria-hidden="true" width={35} height={35} />
                <span className="text-lg leading-[1.2] font-extrabold text-texto">
                  {segment.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
