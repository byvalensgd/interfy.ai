import Reveal from "@/components/ui/Reveal";

type FeaturedArticle = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
};

type RecentPost = { title: string; date: string; author: string };

export default function BlogFeatured({
  ariaLabel,
  heading,
  article,
  recentHeading,
  recent,
}: {
  ariaLabel: string;
  heading: string;
  article: FeaturedArticle;
  recentHeading: string;
  recent: RecentPost[];
}) {
  return (
    <section aria-label={ariaLabel} className="flex justify-center px-5 pt-10 sm:pt-16">
      <div className="flex w-full max-w-[1400px] flex-col gap-6">
        <h2 className="text-lg font-extrabold leading-[1.2] text-texto">{heading}</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <Reveal immediate>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-contorno-base bg-branco">
              <div className="relative h-[220px] w-full bg-[linear-gradient(135deg,#184aee_0%,#bf18f6_100%)] sm:h-[280px]" />
              <div className="flex flex-1 flex-col gap-3 p-6 sm:p-8">
                <span className="w-fit rounded-full bg-azul-bg-superior px-3 py-1 text-xs font-bold leading-[1.2] text-azul-base">
                  {article.category}
                </span>
                <p className="text-xl leading-[1.3] font-extrabold text-texto sm:text-2xl">{article.title}</p>
                <p className="flex-1 text-sm leading-[1.5] font-medium text-texto-medio">{article.excerpt}</p>
                <p className="text-xs leading-[1.2] font-medium text-texto-medio">
                  {article.date} · {article.author} · {article.readTime}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal immediate delayMs={80}>
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-contorno-base bg-bg-base p-5">
              <p className="text-sm font-bold uppercase leading-[1.2] tracking-wider text-texto-medio">
                {recentHeading}
              </p>
              <ul className="flex flex-col gap-4">
                {recent.map((post, i) => (
                  <li key={post.title} className="flex items-start gap-3 border-t border-contorno-base pt-4 first:border-t-0 first:pt-0">
                    <span className="text-xs font-bold leading-[1.4] text-texto-medio">{String(i + 1).padStart(2, "0")}</span>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm leading-[1.3] font-bold text-texto">{post.title}</p>
                      <p className="text-xs leading-[1.2] font-medium text-texto-medio">
                        {post.date} — {post.author}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
