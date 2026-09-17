import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { universidadeResourceIcons } from "@/config/universidade-page";

type ResourceItem = { title: string; description: string };

export default function UniversidadeRecursos({
  ariaLabel,
  heading,
  headingHighlight,
  description,
  items,
}: {
  ariaLabel: string;
  heading: string;
  headingHighlight: string;
  description: string;
  items: ResourceItem[];
}) {
  return (
    <section aria-label={ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <Reveal className="flex w-full max-w-[1300px] flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="text-[clamp(1.5rem,0.8333vw+1.3333rem,2rem)] font-extrabold leading-[1.2] text-texto">
            {heading}{" "}
            <span className="inline-block bg-[linear-gradient(111.8deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
              {headingHighlight}
            </span>
          </h2>
          <p className="max-w-2xl text-lg leading-[1.5] font-medium text-texto-medio">{description}</p>
        </div>

        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const { icon, gradient } = universidadeResourceIcons[i];
            const IconComponent = (Icons[icon as keyof typeof Icons] ?? Icons.Star) as LucideIcon;
            return (
              <li
                key={item.title}
                className="flex flex-col gap-5 rounded-2xl border border-contorno-base bg-branco p-6 sm:p-8"
              >
                <span
                  className="flex size-[60px] shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundImage: gradient }}
                >
                  <IconComponent className="size-[30px] text-branco" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <div className="flex flex-col gap-5">
                  <p className="text-xl leading-[1.2] font-bold text-texto">{item.title}</p>
                  <p className="text-base leading-[1.4] font-medium text-texto-medio">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
