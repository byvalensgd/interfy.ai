import Image from "next/image";
import { whyInterfyFeatures } from "@/config/features";

export default function WhyInterfy() {
  return (
    <section
      aria-labelledby="why-interfy-heading"
      className="flex justify-center px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="why-interfy-heading"
          className="text-center text-2xl font-bold leading-[1.2] text-texto"
        >
          Porque escolher a{" "}
          <span className="bg-[linear-gradient(168.8deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
            Interfy AI?
          </span>
        </h2>

        <ul className="grid w-full grid-cols-1 gap-x-0 gap-y-8 rounded-[20px] border border-contorno-base py-5 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {whyInterfyFeatures.map((feature, index) => (
            <li
              key={feature.title}
              className={`flex flex-col gap-5 border-contorno-base px-5 ${
                index % 2 === 0 ? "sm:border-r" : ""
              } ${index % 4 !== 3 ? "lg:border-r" : ""}`}
            >
              <div className="flex items-center gap-5">
                <Image
                  src={feature.icon}
                  alt=""
                  aria-hidden="true"
                  width={40}
                  height={40}
                  className="shrink-0"
                />
                <p className="text-lg font-extrabold leading-[1.2] text-texto">
                  {feature.title}
                </p>
              </div>
              <p className="text-base font-medium leading-[1.2] text-texto-medio">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
