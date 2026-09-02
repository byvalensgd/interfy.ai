import Image from "next/image";
import { ecosystemGridItems } from "@/config/ecosystem-grid";

export default function EcosystemGrid() {
  return (
    <section
      aria-labelledby="ecosystem-grid-heading"
      className="flex justify-center px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="ecosystem-grid-heading"
          className="text-center text-2xl leading-[1.2] font-bold text-texto"
        >
          <span className="bg-[linear-gradient(168.8deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
            Ecossistema completo
          </span>{" "}
          para sua operação
        </h2>

        <ul className="grid w-full grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 lg:flex lg:flex-wrap lg:items-start lg:justify-center">
          {ecosystemGridItems.map((item) => (
            <li
              key={item.product}
              className="flex flex-1 flex-col items-center gap-5 lg:min-w-[140px]"
            >
              <span className="flex size-[70px] shrink-0 items-center justify-center rounded-full border border-contorno-base bg-branco p-4">
                <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} />
              </span>
              <div className="flex flex-col items-center gap-5 text-center">
                <div className="flex w-full flex-col items-center gap-2.5 text-lg leading-[0] font-extrabold">
                  <p className="w-full leading-[1.2] text-texto">Interfy</p>
                  {item.colorClass === "gradient" ? (
                    <p className="w-full bg-[linear-gradient(123.44deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text leading-[1.2] text-transparent">
                      {item.product}
                    </p>
                  ) : (
                    <p className={`w-full leading-[1.2] ${item.colorClass}`}>{item.product}</p>
                  )}
                </div>
                <p className="text-base leading-[1.2] font-medium text-texto-medio">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
