"use client";

import { useState } from "react";
import Image from "next/image";

type FaqItem = { question: string; answer: string };

/** Single-column FAQ accordion for the parceria page's Test Drive + FAQ split card
 *  (same open/close interaction as FaqAccordion, narrower layout to fit the side panel). */
export default function ParceriaFaqList({
  faq,
  heading,
  ariaExpand,
}: {
  faq: FaqItem[];
  heading: string;
  ariaExpand: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex w-full flex-col gap-5">
      <h2 className="text-lg leading-[1.2] font-extrabold text-texto">{heading}</h2>
      <ul className="flex w-full flex-col gap-[5px]">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <li key={item.question} className="rounded-xl border border-contorno-base bg-branco">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-label={ariaExpand}
                className="flex min-h-10 w-full items-center gap-2.5 p-2.5 text-left"
              >
                <span className="flex-1 text-sm leading-[1.2] font-bold text-texto">{item.question}</span>
                <Image
                  src="/icons/pricing/chevron-down.svg"
                  alt=""
                  aria-hidden="true"
                  width={10}
                  height={10}
                  className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && <p className="px-2.5 pb-2.5 text-sm leading-[1.4] font-medium text-texto-medio">{item.answer}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
