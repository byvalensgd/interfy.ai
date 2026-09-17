import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { getCompleteBoxBasis } from "@/lib/completeBox";

type FeaturedArticle = {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  ctaLabel: string;
};

type RecentPost = { title: string; date: string; author: string };

export default function BlogFeatured({
  ariaLabel,
  heading,
  article,
  articleHref,
  recentHeading,
  recent,
}: {
  ariaLabel: string;
  heading: string;
  article: FeaturedArticle;
  articleHref: string;
  recentHeading: string;
  recent: RecentPost[];
}) {
  const recentBasis = getCompleteBoxBasis(recent.length);

  return (
    <section aria-label={ariaLabel} className="flex justify-center px-5 pt-10 sm:pt-16">
      <div className="flex w-full max-w-[1400px] flex-col gap-6">
        <h2 className="text-lg font-extrabold leading-[1.2] text-texto">{heading}</h2>
        <div className="flex flex-col gap-10 min-[1180px]:flex-row min-[1180px]:items-stretch">
          <Reveal immediate className="flex-1">
            <Link
              href={articleHref}
              className="flex h-full flex-col overflow-hidden rounded-[30px] border border-contorno-base bg-branco transition-shadow hover:shadow-[0_10px_24px_-8px_rgba(0,0,0,0.2)] md:flex-row md:items-stretch"
            >
              <div className="relative aspect-[605/471] w-full shrink-0 md:aspect-auto md:w-[42%]">
                <Image src={article.image} alt="" fill sizes="(min-width: 1180px) 450px, (min-width: 768px) 42vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-5 p-6 sm:p-10">
                <div className="flex flex-col gap-5">
                  <p className="text-xl leading-[1.2] font-bold text-texto sm:text-[1.625rem]">{article.title}</p>
                  <p className="text-base leading-[25px] text-texto">{article.excerpt}</p>
                  <p className="text-base leading-[25px] text-texto">
                    {article.date} -{" "}
                    <span className="font-bold text-azul-base">{article.author}</span>
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2.5">
                  {article.tags.map((tag) => (
                    <li
                      key={tag}
                      className="flex h-[19px] items-center rounded-full bg-azul-base px-2.5 text-xs font-bold leading-[1.2] text-branco"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex w-fit items-center gap-2.5 text-base font-bold leading-[1.2] text-texto">
                  {article.ctaLabel}
                  <ArrowRight className="size-5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </Reveal>

          <Reveal immediate delayMs={80} className="flex w-full flex-col gap-[30px] py-5 min-[1180px]:w-[280px] min-[1180px]:shrink-0">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold leading-[1.2] text-azul-base">{recentHeading}</p>
              <span className="hidden h-px w-10 bg-contorno-base sm:block" aria-hidden="true" />
            </div>
            {/* Below 1180px: "Blocos Mobile" — each recent post becomes its
                own bordered card, balanced via "Complete Box" (see
                lib/completeBox.ts), laid out in a wrapping row instead of a
                vertical list. At 1180px+: the plain vertical list below. */}
            <ul className="flex w-full flex-wrap gap-4 min-[1180px]:hidden">
              {recent.map((post) => (
                <li
                  key={post.title}
                  className={`flex grow flex-col gap-2.5 rounded-[14px] border border-contorno-base bg-branco p-5 ${recentBasis}`}
                >
                  <p className="text-sm leading-[1.2] font-bold text-texto">{post.title}</p>
                  <p className="text-xs leading-[1.2] text-texto">
                    {post.date} - <span className="font-bold text-texto">{post.author}</span>
                  </p>
                </li>
              ))}
            </ul>
            <ul className="hidden flex-col gap-5 min-[1180px]:flex">
              {recent.map((post) => (
                <li key={post.title} className="flex flex-col gap-2.5">
                  <p className="text-sm leading-[1.2] font-bold text-texto">{post.title}</p>
                  <p className="text-xs leading-[1.2] text-texto">
                    {post.date} - <span className="font-bold text-texto">{post.author}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
