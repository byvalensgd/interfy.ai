import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ParceriaFaqList from "@/components/ui/ParceriaFaqList";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";
import { CTA_DISABLED } from "@/config/feature-flags";

export default async function ParceriaTestDriveFaq() {
  const locale = await getLocale();
  const { parceria } = await getDictionary();
  const { testDrive, faq } = parceria;

  return (
    <section aria-label={`${testDrive.headingPrefix}${testDrive.headingHighlight}`} className="flex justify-center bg-branco px-5 py-5">
      <div className="flex w-full max-w-[1400px] flex-wrap items-stretch gap-5">
        <Reveal className="w-full lg:w-[600px] lg:flex-none">
          <div
            className="flex h-full items-center gap-5 overflow-hidden rounded-[20px] border border-contorno-base px-5 py-[30px]"
            style={{ backgroundImage: "linear-gradient(129deg, #ffffff 4.55%, #efefff 90.43%, #c8c8ff 126.82%)" }}
          >
            <div className="flex flex-1 flex-col items-start gap-5">
              <div className="flex flex-col items-start gap-5 text-texto">
                <h2 className="text-2xl leading-[1.2] font-bold">
                  {testDrive.headingPrefix}
                  <span className="text-azul-base">{testDrive.headingHighlight}</span>
                </h2>
                <p className="text-sm leading-[1.2] font-medium">
                  {testDrive.descriptionLine1}
                  <br />
                  {testDrive.descriptionLine2}
                </p>
              </div>
              <Button href={withLocale("/test-drive", locale)} variant="secondary" showArrow disabled={CTA_DISABLED}>
                {testDrive.cta}
              </Button>
            </div>
            <div className="relative hidden aspect-[2625/1769] flex-1 sm:block">
              <Image
                src="/parceria/test-drive-mockup.webp"
                alt=""
                aria-hidden="true"
                fill
                sizes="(min-width: 1024px) 345px, 50vw"
                className="object-contain object-right"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={120} className="min-w-[280px] flex-1">
          <div className="h-full rounded-[14px] border border-contorno-base bg-bg-base p-5">
            <ParceriaFaqList faq={faq.items} heading={faq.heading} ariaExpand={faq.ariaExpand} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
