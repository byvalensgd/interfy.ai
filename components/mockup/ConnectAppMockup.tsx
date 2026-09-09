import Image from "next/image";
import type { ReactNode } from "react";

// Layered tablet mockup built from 4 exported layers (Screen / Smartobject /
// Specular / Body). All 4 share one center: Body is the frame image and the
// other 3 fill the exact rounded-rect hole cut into it, measured by scanning
// Body's alpha channel outward from its own center (see analyze-mockup script
// in the PR that added this) rather than guessed — left 3.332% / right 3.159%
// / top 4.020% / bottom 4.190% of Body's own box.
const BODY_ASPECT = "2311 / 1766";
const SCREEN_INSET = { left: 3.332, right: 3.159, top: 4.02, bottom: 4.19 };

export default function ConnectAppMockup({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full" style={{ aspectRatio: BODY_ASPECT }}>
      <div
        className="absolute overflow-hidden bg-[#050505]"
        style={{
          left: `${SCREEN_INSET.left}%`,
          right: `${SCREEN_INSET.right}%`,
          top: `${SCREEN_INSET.top}%`,
          bottom: `${SCREEN_INSET.bottom}%`,
        }}
      >
        <Image src="/connect/mockup/screen.webp" alt="" fill aria-hidden="true" className="object-cover" />
        <div className="absolute inset-0">{children}</div>
        {/* CSS has no native "Divide" blend mode (the Figma spec) — "screen" at
            low opacity is the closest built-in approximation for this glass
            reflection sheen. */}
        <Image
          src="/connect/mockup/specular.webp"
          alt=""
          fill
          aria-hidden="true"
          className="pointer-events-none object-cover opacity-20 mix-blend-screen"
        />
      </div>
      <Image
        src="/connect/mockup/body.webp"
        alt=""
        fill
        aria-hidden="true"
        priority
        sizes="(min-width: 1024px) 55vw, 90vw"
        className="pointer-events-none object-cover"
      />
    </div>
  );
}
