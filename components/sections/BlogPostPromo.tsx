import Image from "next/image";
import { Play } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { footerSocialLinks } from "@/config/footer";

/** Video-webinar promo banner between the article body and the "all posts"
 * grid (Figma frame 582:13700) — both buttons point at Interfy's real
 * YouTube channel, since no single video URL was supplied. */
export default function BlogPostPromo({
  heading,
  description,
  image,
  primaryLabel,
  secondaryLabel,
}: {
  heading: string;
  description: string;
  image: string;
  primaryLabel: string;
  secondaryLabel: string;
}) {
  const youtubeHref = footerSocialLinks.find((s) => s.label === "YouTube")?.href ?? "https://www.youtube.com/@interfy_corp";

  return (
    <section className="flex justify-center bg-gradient-to-b from-[#fbfdff] to-[#dcedfc] px-5 py-10 sm:py-16">
      <Reveal
        immediate
        className="flex w-full max-w-[1400px] flex-col items-center gap-10 rounded-[30px] border-[1.5px] border-contorno-base bg-gradient-to-b from-branco to-azul-bg-superior p-6 sm:p-10 lg:flex-row lg:gap-10 lg:p-[50px]"
      >
        <div className="flex flex-1 flex-col items-start gap-5">
          <h2 className="text-2xl leading-[1.2] font-bold text-texto sm:text-[2rem]">{heading}</h2>
          <p className="text-lg leading-[1.4] text-texto">{description}</p>
          <div className="flex flex-wrap gap-5">
            <a
              href={youtubeHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[38px] items-center justify-center rounded-lg bg-[linear-gradient(111.8deg,#184aee_22.86%,#bf18f6_96.41%)] px-5 text-sm font-bold leading-[1.2] text-branco"
            >
              {primaryLabel}
            </a>
            <a
              href={youtubeHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[38px] items-center justify-center rounded-lg border border-azul-base bg-branco px-5 text-sm font-bold leading-[1.2] text-transparent [background-image:linear-gradient(111.8deg,#184aee_22.86%,#bf18f6_96.41%)] [background-clip:text] [-webkit-background-clip:text]"
            >
              {secondaryLabel}
            </a>
          </div>
        </div>

        <a
          href={youtubeHref}
          target="_blank"
          rel="noreferrer"
          aria-label={primaryLabel}
          className="group relative aspect-[718/367] w-full max-w-[718px] shrink-0 overflow-hidden rounded-[30px]"
        >
          <Image src={image} alt={heading} fill sizes="(min-width: 1024px) 718px, 100vw" className="object-cover" />
          <span className="absolute top-1/2 left-1/2 flex size-[70px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-branco/90 transition-transform group-hover:scale-105 sm:size-[90px]">
            <Play className="size-7 translate-x-0.5 fill-texto text-texto sm:size-9" aria-hidden="true" />
          </span>
        </a>
      </Reveal>
    </section>
  );
}
