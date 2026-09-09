import DssHero from "@/components/sections/DssHero";
import DssLifecycle from "@/components/sections/DssLifecycle";
import DssHowItWorks from "@/components/sections/DssHowItWorks";
import DssFeatures from "@/components/sections/DssFeatures";
import DssCTA from "@/components/sections/DssCTA";
import { buildMetadata, buildSoftwareAppJsonLd } from "@/lib/seo";

const description =
  "Interfy Sign é a assinatura digital grátis para todos os usuários da plataforma. Assine e acompanhe documentos com velocidade, segurança e integração total com sua operação.";

export const metadata = buildMetadata({
  title: "Sign",
  description,
  path: "/platform/sign",
  keywords: ["assinatura digital", "assinatura eletrônica", "validade jurídica", "Interfy Sign"],
});

const jsonLd = buildSoftwareAppJsonLd({ name: "Sign", description, path: "/platform/sign" });

export default function DssPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DssHero />
      <DssLifecycle />
      <DssHowItWorks />
      <DssFeatures />
      <DssCTA />
    </>
  );
}
