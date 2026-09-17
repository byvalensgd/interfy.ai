import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { footerSocialBadges } from "@/config/footer";

type ArticleSection = { heading: string; paragraphs: string[]; items?: string[] };

type Article = {
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  title: string;
  image: string;
  intro: string[];
  sections: ArticleSection[];
  backLabel: string;
};

type RecentPost = { title: string; date: string; author: string };

/** Article body + sticky "Recentes"/newsletter sidebar for an open blog post
 * (Figma frame 582:13699) — the tag chips reuse the project's brand
 * gradient (not Figma's near-identical raw rgb() stops), and "Recentes"
 * reuses BlogFeatured's existing recent-post data/format instead of
 * introducing repeated stock photos the design has no real source for. */
export default function BlogPostArticle({
  article,
  backHref,
  recentHeading,
  recent,
  newsletter,
}: {
  article: Article;
  backHref: string;
  recentHeading: string;
  recent: RecentPost[];
  newsletter: { heading: string; placeholder: string; consentLabel: string };
}) {
  return (
    <section className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1300px] flex-col items-start gap-10 lg:flex-row lg:gap-10">
        <article className="flex min-w-0 flex-1 flex-col gap-10">
          <Reveal immediate className="flex flex-col gap-5">
            <p className="text-xs font-medium text-texto-medio">
              {article.date} <span aria-hidden="true">-</span>{" "}
              <span className="bg-[linear-gradient(111.8deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                {article.author}
              </span>
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {article.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-[linear-gradient(111.8deg,#184aee_22.86%,#bf18f6_96.41%)] px-2.5 py-0.5 text-xs font-bold leading-[1.4] text-branco"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <h1 className="text-[1.75rem] leading-[1.2] font-bold text-texto sm:text-[2.5rem]">{article.title}</h1>
            <div className="relative aspect-[880/400] w-full overflow-hidden rounded-2xl">
              <Image src={article.image} alt={article.title} fill sizes="(min-width: 1024px) 880px, 100vw" className="object-cover" priority />
            </div>
          </Reveal>

          <Reveal immediate delayMs={40} className="flex flex-col gap-8">
            <div className="flex flex-col gap-2.5 pl-5 text-justify text-lg leading-[1.4] text-texto">
              {article.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {article.sections.map((section) => (
              <div key={section.heading} className="flex flex-col gap-5">
                <h2 className="text-xl leading-[1.2] font-bold text-texto sm:text-[1.625rem]">{section.heading}</h2>
                <div className="flex flex-col gap-2.5 pl-5 text-justify text-lg leading-[1.4] text-texto">
                  {section.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                {section.items && (
                  <ul className="ml-5 flex list-disc flex-col gap-2.5 rounded-2xl border border-contorno-base bg-[linear-gradient(-65.6deg,#fbfffd_1%,#fafffe_97.5%)] p-5 pl-10 text-justify text-lg leading-[1.4] text-texto">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </Reveal>

          <Link
            href={backHref}
            className="inline-flex w-fit items-center gap-2.5 text-base font-bold leading-[1.2] text-azul-base hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {article.backLabel}
          </Link>
        </article>

        <aside className="flex w-full shrink-0 flex-col gap-5 lg:sticky lg:top-[calc(var(--header-height)+20px)] lg:w-[380px] lg:self-start">
          <Reveal immediate delayMs={80} className="flex flex-col gap-[30px] rounded-2xl border border-contorno-base p-5">
            <div className="flex flex-col gap-0.5">
              <p className="bg-[linear-gradient(111.8deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-sm font-bold text-transparent">
                {recentHeading}
              </p>
              <span className="h-0.5 w-[76px] rounded-full bg-[linear-gradient(111.8deg,#184aee_22.86%,#bf18f6_96.41%)]" aria-hidden="true" />
            </div>
            <ul className="flex flex-col gap-4">
              {recent.slice(0, 4).map((post, i) => (
                <li key={post.title} className="flex items-start gap-3 border-t border-contorno-base pt-4 first:border-t-0 first:pt-0">
                  <span className="text-xs font-bold leading-[1.4] text-texto-medio">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex flex-col gap-1">
                    <p className="text-base leading-[1.3] font-semibold text-texto">{post.title}</p>
                    <p className="text-xs leading-[1.2] font-medium text-texto-medio">
                      {post.date} — {post.author}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal immediate delayMs={120} className="flex flex-col gap-5 rounded-2xl border border-contorno-base bg-branco p-5">
            <p className="text-xl leading-[1.5] text-texto">{newsletter.heading}</p>
            <input
              type="email"
              placeholder={newsletter.placeholder}
              aria-label={newsletter.placeholder}
              className="h-10 w-full rounded-lg border border-contorno-base px-2.5 text-sm text-texto placeholder:text-texto-sem-destaque focus:border-azul-base focus:outline-none focus:ring-2 focus:ring-azul-base/20"
            />
            <label className="flex items-center gap-2.5 text-xs font-bold text-texto">
              <input type="checkbox" className="size-[25px] shrink-0 rounded-lg border border-contorno-base accent-azul-base" />
              {newsletter.consentLabel}
            </label>
            <ul className="flex items-center gap-[30px]">
              {footerSocialBadges.map((social) => (
                <li key={social.label}>
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noreferrer">
                    <Image src={social.icon} alt="" aria-hidden="true" width={34} height={34} />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}
