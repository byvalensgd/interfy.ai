import type { Metadata } from "next";
import TestDriveHero from "@/components/sections/TestDriveHero";
import TestDriveSteps from "@/components/sections/TestDriveSteps";
import TestDriveCapabilities from "@/components/sections/TestDriveCapabilities";
import TestDriveJourney from "@/components/sections/TestDriveJourney";
import TestDriveSecurity from "@/components/sections/TestDriveSecurity";
import TestDriveCTA from "@/components/sections/TestDriveCTA";

export const metadata: Metadata = {
  title: "Test Drive Grátis",
  description:
    "Experimente a Interfy.AI na prática. Crie sua Workspace e teste todos os produtos da plataforma por 7 dias, sem cartão de crédito.",
};

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
