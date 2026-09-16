import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { blogCategoryMeta } from "@/config/blog-page";

type Post = { title: string; excerpt: string; date: string; readTime: string };

type CategorySection = { name: string; posts: Post[] };

export default function BlogCategorySection({
  ariaLabel,
  ctaLabel,
  sections,
}: {
  ariaLabel: string;
  ctaLabel: string;
  sections: CategorySection[];
}) {
  return (
    <section aria-label={ariaLabel} className="flex justify-center px-5 py-10">
      <div className="flex w-full max-w-[1400px] flex-col gap-12">
        {sections.map((section, si) => {
          const meta = blogCategoryMeta[si];
          return (
            <Reveal key={section.name} delayMs={si * 40}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-azul-bg-superior">
                      <Image src={meta.icon} alt="" aria-hidden="true" width={22} height={22} />
                    </span>
                    <p className="text-lg font-extrabold leading-[1.2] text-texto">{section.name}</p>
                  </div>
                  <Link
                    href="#todos-artigos"
                    className="inline-flex items-center gap-1.5 text-sm font-bold leading-[1.2] text-azul-base hover:underline"
                  >
                    {ctaLabel}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>

                <ul className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  {section.posts.map((post) => (
                    <li key={post.title} className="flex h-full flex-col overflow-hidden rounded-2xl border border-contorno-base bg-branco">
                      <div className={`h-[100px] w-full ${meta.accent}`} />
                      <div className="flex flex-1 flex-col gap-2 p-5">
                        <p className="text-base leading-[1.3] font-bold text-texto">{post.title}</p>
                        <p className="flex-1 text-sm leading-[1.4] font-medium text-texto-medio">{post.excerpt}</p>
                        <p className="text-xs leading-[1.2] font-medium text-texto-medio">
                          {post.date} · {post.readTime}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
