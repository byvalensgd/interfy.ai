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
          <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex w-full flex-col items-center gap-5 text-center text-branco lg:w-auto lg:flex-1 lg:items-start lg:text-left">
              <p className="w-full text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold">{cta.title}</p>
              <p className="w-full text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] leading-[1.2] font-medium">{cta.subtitle}</p>
            </div>

            <div className="flex w-full min-w-[280px] flex-col items-center gap-5 text-center lg:w-auto lg:min-w-[660px] lg:flex-1 lg:flex-row lg:text-left">
              {/* Scans to /get-app, which redirects to the App Store or Google Play based on device. */}
              <div className="hidden size-[100px] shrink-0 items-center justify-center rounded-[20px] bg-branco p-2.5 lg:flex">
                <Image src="/mobile/qr-code.svg" alt={cta.qrCodeAlt} width={80} height={80} />
              </div>
              <p className="min-w-[180px] flex-1 text-lg leading-[1.2] font-semibold text-branco">{cta.downloadPrompt}</p>
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
