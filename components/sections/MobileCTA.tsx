import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import StatsBar from "@/components/ui/StatsBar";
import { platformStatIcons } from "@/config/platform";
import { mobileAppStoreUrl, mobileGooglePlayUrl } from "@/config/mobile-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function MobileCTA() {
  const { mobile, common } = await getDictionary();
  const { cta } = mobile;
  const platformStats = platformStatIcons.map((s, i) => ({ icon: s.icon, ...common.platformStats[i] }));

  return (
    <section aria-label={cta.sectionAria} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col gap-6">
        <Reveal className="relative flex w-full flex-col items-center gap-10 rounded-2xl p-5 sm:p-10">
          <Image
            src="/mobile/cta-bg.webp"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="-z-10 rounded-2xl object-cover"
          />
          <div className="flex w-full flex-wrap items-center justify-between gap-10">
            <div className="flex min-w-[280px] flex-1 items-center gap-5">
              <div className="flex min-w-0 flex-1 flex-col gap-5 text-branco">
                <p className="w-full text-2xl leading-[1.2] font-bold">{cta.title}</p>
                <p className="w-full text-lg leading-[1.2] font-semibold">{cta.subtitle}</p>
              </div>
            </div>

            <div className="flex min-w-[280px] flex-1 flex-col items-center gap-5 text-center lg:flex-row lg:text-left">
              {/* Scans to /get-app, which redirects to the App Store or Google Play based on device. */}
              <div className="hidden size-[100px] shrink-0 items-center justify-center rounded-[20px] bg-branco p-2.5 lg:flex">
                <Image src="/mobile/qr-code.svg" alt={cta.qrCodeAlt} width={80} height={80} />
              </div>
              <p className="min-w-0 flex-1 text-lg leading-[1.2] font-semibold text-branco">{cta.downloadPrompt}</p>
              <div className="flex shrink-0 items-center gap-[15px]">
                <a href={mobileGooglePlayUrl} target="_blank" rel="noreferrer">
                  <Image
                    src="/mobile/badge-googleplay.svg"
                    alt={cta.googlePlayAlt}
                    width={170}
                    height={62}
                    className="h-[60px] w-auto"
                  />
                </a>
                <a href={mobileAppStoreUrl} target="_blank" rel="noreferrer">
                  <Image
                    src="/mobile/badge-appstore.svg"
                    alt={cta.appStoreAlt}
                    width={154}
                    height={62}
                    className="h-[60px] w-auto"
                  />
                </a>
              </div>
            </div>
          </div>

          <StatsBar stats={platformStats} label={cta.statsLabel} size="lg" />
        </Reveal>
      </div>
    </section>
  );
}
