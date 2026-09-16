import { Play, Clock, Users, HelpCircle, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import DemoForm from "@/components/sections/DemoForm";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

const expectIcons = [Play, Clock, Users, HelpCircle];

export default async function DemoHero() {
  const locale = await getLocale();
  const { demo } = await getDictionary();
  const { hero, form } = demo;

  return (
    <section
      aria-label={hero.ariaLabel}
      className="flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center bg-gradient-to-b from-bg-base to-[#e8f1f8] px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <div className="flex w-full max-w-[1400px] flex-1 items-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[520fr_840fr]">
          <Reveal immediate className="flex flex-col items-center gap-8 text-center lg:max-w-[520px] lg:items-start lg:text-left">
            <h1 className="text-[2rem] lg:text-[clamp(2.25rem,2.88462vw+0.40385rem,3rem)] font-extrabold leading-[1.2] text-texto">
              {hero.headingPrefix}{" "}
              <span className="inline-block bg-[linear-gradient(111.8deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                {hero.headingHighlight}
              </span>
            </h1>

            <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] leading-[1.2] font-medium text-texto">
              {hero.description}
            </p>

            <ul className="flex w-full flex-col gap-3">
              {hero.expectItems.map((item: { title: string }, i: number) => {
                const Icon = expectIcons[i];
                return (
                  <li key={item.title} className="flex items-center gap-3">
                    <Icon className="size-5 shrink-0 text-azul-base" aria-hidden="true" />
                    <p className="text-sm leading-[1.2] font-medium text-texto">{item.title}</p>
                  </li>
                );
              })}
            </ul>

            <div className="flex w-full flex-col gap-4 rounded-2xl border border-contorno-base bg-gradient-to-b from-branco to-bg-base p-5">
              <p className="text-base font-bold leading-[1.2] text-texto">{hero.previewHeading}</p>
              <ul className="flex flex-col gap-2.5">
                {hero.previewItems.map((item: string) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-azul-base" aria-hidden="true" />
                    <p className="text-sm leading-[1.2] font-medium text-texto">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal immediate delayMs={120} className="w-full">
            <DemoForm dict={form} locale={locale} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
