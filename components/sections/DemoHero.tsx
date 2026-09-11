import Reveal from "@/components/ui/Reveal";
import DemoForm from "@/components/sections/DemoForm";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

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
            <span className="rounded-full border border-azul-base/20 bg-azul-bg-superior px-4 py-1.5 text-sm font-bold leading-[1.2] text-azul-base">
              {hero.eyebrow}
            </span>

            <h1 className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-texto">
              {hero.headingPrefix}{" "}
              <span className="inline-block bg-[linear-gradient(111.8deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                {hero.headingHighlight}
              </span>
            </h1>

            <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] leading-[1.2] font-medium text-texto">
              {hero.description}
            </p>

            <ul className="flex w-full flex-col gap-4">
              <p className="text-sm font-bold uppercase leading-[1.2] tracking-wider text-texto-medio">
                {hero.expectHeading}
              </p>
              {hero.expectItems.map((item: { title: string; description: string }) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-azul-base" aria-hidden="true" />
                  <p className="text-sm leading-[1.4] font-medium text-texto">
                    <span className="font-bold text-texto-doc-ok">{item.title}</span> — {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal immediate delayMs={120} className="w-full">
            <DemoForm dict={form} locale={locale} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
