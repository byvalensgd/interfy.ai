import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  showArrow?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

const variantClasses = {
  primary:
    "bg-azul-base text-branco hover:bg-azul-base/90 border border-azul-base",
  secondary:
    "bg-branco text-azul-base hover:bg-azul-bg-superior border-[1.5px] border-azul-base",
} as const;

const sizeClasses = {
  sm: "h-[35px] px-5 text-sm",
  md: "h-[50px] px-5 text-base",
} as const;

export default function Button({
  href,
  variant = "primary",
  size = "md",
  showArrow = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-lg font-bold leading-[1.2] transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
      {showArrow && <ArrowUpRight className="size-6 -mx-[7px]" aria-hidden="true" />}
    </Link>
  );
}
