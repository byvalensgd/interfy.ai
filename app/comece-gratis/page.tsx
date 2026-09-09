import TestDriveHero from "@/components/sections/TestDriveHero";
import TestDriveSteps from "@/components/sections/TestDriveSteps";
import TestDriveCapabilities from "@/components/sections/TestDriveCapabilities";
import TestDriveJourney from "@/components/sections/TestDriveJourney";
import TestDriveSecurity from "@/components/sections/TestDriveSecurity";
import TestDriveCTA from "@/components/sections/TestDriveCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Test Drive Grátis",
  description:
    "Experimente a Interfy.AI na prática. Crie sua Workspace e teste todos os produtos da plataforma por 7 dias, sem cartão de crédito.",
  path: "/comece-gratis",
  keywords: ["teste grátis Interfy", "test drive plataforma AI-native", "workspace grátis", "trial gestão de documentos"],
});

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
