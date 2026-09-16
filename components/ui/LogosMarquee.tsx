import Image from "next/image";
import type { LogosStripItem } from "@/config/integracoes-page";

function LogoItem({ item }: { item: LogosStripItem }) {
  return (
    <li className="flex shrink-0 items-center gap-2.5">
      <Image
        src={item.icon}
        alt={item.decorativeIcon || item.afterText ? "" : item.label}
        aria-hidden={item.decorativeIcon || Boolean(item.afterText)}
        width={item.iconWidth}
        height={item.iconHeight}
        draggable={false}
        className="shrink-0"
      />
      {item.afterText && (
        <span
          className={`text-xl leading-[1.2] font-bold whitespace-nowrap ${
            item.afterTextTone === "muted" ? "text-texto-medio" : "text-texto"
          }`}
        >
          {item.afterText}
        </span>
      )}
    </li>
  );
}

/** An always-running logo strip: the CSS keyframe in globals.css drives the loop on the
 *  compositor, independent of the main thread — unlike a requestAnimationFrame-driven
 *  scrollLeft, it never depends on the tab/pane being in a "visible" Page Visibility
 *  state, which browsers use to gate rAF (and which this preview pane sits in more often
 *  than a normal foregrounded tab). Below lg the outer wrapper is also a native
 *  overflow-x-auto container, so a swipe pans the (still-animating) track independently —
 *  the animation and the drag are two separate, non-conflicting transforms (CSS transform
 *  vs scrollLeft), so releasing a swipe just resumes the ambient motion with no handoff
 *  logic needed. Desktop stays overflow-hidden with no drag affordance. The item list
 *  renders twice back to back and the animation moves exactly one copy's width (-50%), so
 *  the loop is seamless regardless of the strip's actual pixel width. */
export default function LogosMarquee({ items, ariaLabel }: { items: LogosStripItem[]; ariaLabel: string }) {
  return (
    <div className="logos-marquee-mask w-full overflow-x-hidden overscroll-x-contain [scrollbar-width:none] max-lg:cursor-grab max-lg:overflow-x-auto max-lg:active:cursor-grabbing [&::-webkit-scrollbar]:hidden">
      <div className="logos-marquee-track flex w-max items-center gap-14">
        <ul aria-label={ariaLabel} className="flex shrink-0 items-center gap-14">
          {items.map((item) => (
            <LogoItem key={item.label} item={item} />
          ))}
        </ul>
        <ul aria-hidden="true" className="flex shrink-0 items-center gap-14">
          {items.map((item) => (
            <LogoItem key={`${item.label}-dup`} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
