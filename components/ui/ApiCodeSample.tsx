"use client";

import { useEffect, useRef, useState } from "react";

/** Integrações "Chamada de API" code sample — plays a 4s top-to-bottom "being built" reveal
 *  (code-build-reveal, globals.css) once scrolled into view, same IntersectionObserver
 *  trigger Reveal.tsx uses, so the animation is never already finished by the time a reader
 *  scrolls down to it. The extra X-Request-Id header line only renders below lg: on mobile
 *  the card no longer has a fixed min-height (it hugs its own content), so a few more lines
 *  give it a closer, more natural height match against its desktop-only siblings. */
export default function ApiCodeSample() {
  const ref = useRef<HTMLPreElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <pre
      ref={ref}
      className="w-full min-w-0 font-mono text-[13px] leading-[1.6] whitespace-pre-wrap text-[#d9dee8]"
      style={{ animation: inView ? "code-build-reveal 4s ease-out both" : "none" }}
    >
      <span className="font-bold text-[#4fc778]">POST</span> /api/v1/documents{"\n"}
      curl -X <span className="font-bold text-[#4fc778]">POST</span> https://api.interfy.ai/v1/documents \{"\n"}
      {"  "}
      <span className="text-[#ad82de]">-H</span> <span className="text-[#e5bf6b]">&quot;Authorization: Bearer {"{"}seu_token{"}"}&quot;</span> \{"\n"}
      {"  "}
      <span className="text-[#ad82de]">-H</span> <span className="text-[#e5bf6b]">&quot;Content-Type: application/json&quot;</span> \{"\n"}
      <span className="lg:hidden">
        {"  "}
        <span className="text-[#ad82de]">-H</span>{" "}
        <span className="text-[#e5bf6b]">&quot;X-Request-Id: 8f14e45f-ceea-467e-9de1-56a86c9e2fdc&quot;</span> \{"\n"}
      </span>
      {"  "}
      <span className="text-[#ad82de]">-d</span> {"'{"}
      {"\n"}
      {"    "}
      <span className="text-[#8cc7f2]">&quot;title&quot;</span>: <span className="text-[#de9457]">&quot;Contrato.pdf&quot;</span>,{"\n"}
      {"    "}
      <span className="text-[#8cc7f2]">&quot;folderId&quot;</span>: <span className="text-[#de9457]">&quot;12345&quot;</span>,{"\n"}
      {"    "}
      <span className="text-[#8cc7f2]">&quot;tags&quot;</span>: [<span className="text-[#de9457]">&quot;contrato&quot;</span>, <span className="text-[#de9457]">&quot;cliente&quot;</span>],{"\n"}
      {"    "}
      <span className="text-[#8cc7f2]">&quot;fileUrls&quot;</span>: [<span className="text-[#de9457]">&quot;https://.../arquivo.pdf&quot;</span>]{"\n"}
      {"  }'"}
    </pre>
  );
}
