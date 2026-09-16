import Link, { type LinkProps } from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { CTA_DISABLED } from "@/config/feature-flags";

// Drop-in replacement for `next/link`'s Link, used only by the site's "Test
// Drive" and "Agende uma Demo" CTAs — the ones gated by CTA_DISABLED. Every
// other className/prop passes through unchanged, so this never affects
// layout; only CTA_DISABLED decides whether it renders a real link or a
// grayed-out, unclickable span.
type CtaLinkProps = LinkProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof LinkProps> & {
    // Set on links styled as a bordered/transparent block with no fill of
    // their own (as opposed to a solid-color pill) — grayscale alone leaves
    // those looking blank when disabled, so they also get a flat gray fill.
    outline?: boolean;
  };

export default function CtaLink({ href, className = "", children, style, outline = false, ...props }: CtaLinkProps) {
  if (CTA_DISABLED) {
    return (
      <span
        aria-disabled="true"
        className={`${className} grayscale cursor-not-allowed ${outline ? "bg-texto-sem-destaque" : ""}`}
        style={style}
      >
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={className} style={style} {...props}>
      {children}
    </Link>
  );
}
