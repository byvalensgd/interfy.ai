import Image from "next/image";
import Link from "next/link";
import { blogTopSearchMeta } from "@/config/blog-page";

/** "Principais pesquisas" shortcut row — each card jumps straight to the
 * matching category section further down the page. */
export default function BlogTopSearches({ ariaLabel, labels }: { ariaLabel: string; labels: string[] }) {
  return (
    <section aria-label={ariaLabel} className="flex justify-center px-5 py-6">
      <ul className="grid w-full max-w-[1400px] grid-cols-1 gap-5 lg:grid-cols-3">
        {blogTopSearchMeta.map((item, i) => (
          <li key={item.anchorId}>
            <Link
              href={`#${item.anchorId}`}
              className="relative flex h-[100px] items-end overflow-hidden rounded-xl p-2.5"
            >
              <Image
                src={item.image}
                alt=""
                aria-hidden="true"
                fill
                sizes="(min-width: 1400px) 460px, 33vw"
                className="object-cover"
              />
              <span className="relative z-10 flex max-w-full items-center justify-center rounded-full bg-gradient-to-b from-branco to-bg-base px-5 py-1">
                <span
                  className="overflow-hidden text-ellipsis whitespace-nowrap bg-clip-text text-xs font-bold text-transparent"
                  style={{ backgroundImage: item.gradient }}
                >
                  {labels[i]}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
