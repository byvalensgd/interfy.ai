"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { NavItem } from "@/config/site";
import Button from "@/components/ui/Button";

export default function MobileNav({ items }: { items: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-menu"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        className="inline-flex items-center justify-center rounded-md p-2 text-texto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul-base"
      >
        {isOpen ? (
          <X className="size-6" aria-hidden="true" />
        ) : (
          <Menu className="size-6" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <nav
          id="mobile-nav-menu"
          aria-label="Menu principal (mobile)"
          className="absolute inset-x-0 top-full border-t border-contorno-base bg-branco px-4 py-4 shadow-lg"
        >
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base text-texto hover:bg-bg-base"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2.5 border-t border-contorno-base pt-4">
            <Button
              href="/comece-gratis"
              variant="primary"
              showArrow
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              Comece Grátis
            </Button>
            <Button
              href="/demo"
              variant="secondary"
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              Agende uma Demo
            </Button>
          </div>
        </nav>
      )}
    </div>
  );
}
