import TestDriveHero from "@/components/sections/TestDriveHero";
import TestDriveSteps from "@/components/sections/TestDriveSteps";
import TestDriveCapabilities from "@/components/sections/TestDriveCapabilities";
import TestDriveJourney from "@/components/sections/TestDriveJourney";
import TestDriveSecurity from "@/components/sections/TestDriveSecurity";
import TestDriveCTA from "@/components/sections/TestDriveCTA";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const { testDrive } = await getDictionary();

  return buildMetadata({
    locale,
    title: testDrive.meta.title,
    description: testDrive.meta.description,
    path: "/comece-gratis",
    keywords: testDrive.meta.keywords,
  });
}

export default function ComeceGratisPage() {
  return (
    <>
      <TestDriveHero />
      <TestDriveSteps />
      <TestDriveCapabilities />
      <TestDriveJourney />
      <TestDriveSecurity />
      <TestDriveCTA />
    </>
  );
}
