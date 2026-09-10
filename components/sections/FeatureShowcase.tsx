import Image from "next/image";
import ChatDemo from "@/components/sections/ChatDemo";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";

const cardBackground =
  "linear-gradient(130deg, #ffffff 35.4%, #efefff 81.5%, #c8c8ff 108.4%)";
const gradientText =
  "linear-gradient(157deg, #184aee 22.9%, #bf18f6 96.4%)";

export default async function FeatureShowcase() {
  const { home } = await getDictionary();
  const { featureShowcase } = home;
  const { capture, agents } = featureShowcase;

  return (
    <section
      aria-label={featureShowcase.ariaLabel}
      className="flex justify-center px-5 py-10 sm:py-16"
    >
      <div className="grid w-full max-w-[1400px] grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Interfy Capture */}
        <Reveal
          className="flex flex-col gap-5 rounded-[12px] border border-contorno-base p-5 sm:p-[30px]"
          style={{ backgroundImage: cardBackground }}
        >
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <p
              className="inline-block bg-clip-text text-xs font-bold uppercase tracking-wide text-transparent"
              style={{ backgroundImage: gradientText }}
            >
              {capture.eyebrow}
            </p>
            <h3 className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] font-bold leading-[1.2] text-texto">
              <span
                className="inline-block bg-clip-text text-transparent"
                style={{ backgroundImage: gradientText }}
              >
                Interfy Capture
              </span>{" "}
              {capture.headingSuffix}
            </h3>
            <p className="text-base font-medium leading-[1.2] text-texto">
              {capture.description}
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 sm:flex-row">
            <ul className="flex w-full flex-1 flex-col gap-4">
              {capture.checklist.map((item: string) => (
                <li key={item} className="flex items-center gap-2.5">
                  <Image
                    src="/icons/features/check-blue.svg"
                    alt=""
                    aria-hidden="true"
                    width={16}
                    height={16}
                    className="shrink-0"
                  />
                  <span className="text-sm font-medium leading-[1.2] text-texto">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="relative h-[180px] w-full shrink-0 sm:h-[230px] sm:flex-1">
              <Image
                src="/features/capture-preview.webp"
                alt={capture.imageAlt}
                fill
                sizes="(min-width: 1024px) 300px, 80vw"
                className="object-contain object-right"
              />
            </div>
          </div>
        </Reveal>

        {/* Agentes / Voice */}
        <Reveal
          className="flex flex-col gap-5 rounded-[12px] border border-contorno-base p-5 sm:p-[30px]"
          style={{ backgroundImage: cardBackground }}
          delayMs={120}
        >
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <p
              className="inline-block bg-clip-text text-xs font-bold uppercase tracking-wide text-transparent"
              style={{ backgroundImage: gradientText }}
            >
              {agents.eyebrow}
            </p>
            <h3 className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] font-bold leading-[1.2] text-texto">
              <span
                className="inline-block bg-clip-text text-transparent"
                style={{ backgroundImage: gradientText }}
              >
                {agents.headingPrefix}
              </span>{" "}
              {agents.headingSuffix}
            </h3>
            <p className="text-base font-medium leading-[1.2] text-texto">
              {agents.description}
            </p>
          </div>

          <div className="flex items-center gap-5">
            <ChatDemo dict={agents.chatDemo} />

            <div className="relative hidden size-[180px] shrink-0 sm:block">
              <video
                src="/features/robot.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label={agents.videoAriaLabel}
                className="size-full object-contain mix-blend-multiply"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
