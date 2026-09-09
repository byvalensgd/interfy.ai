import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { connectProductivityItems } from "@/config/connect-page";

export default function ConnectProductivity() {
  return (
    <section aria-label="Assinatura digital e produtividade com o Interfy Connect" className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <Reveal className="flex w-full max-w-[1400px] flex-wrap items-stretch gap-5">
        <div className="flex min-w-[320px] flex-1 items-center gap-[30px] rounded-[20px] border border-contorno-base bg-bg-base px-5 py-[30px]">
          <video
            src="/connect/sign-promo-illustration.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="mix-blend-multiply hidden size-[185px] shrink-0 object-cover sm:block"
          />
          <div className="flex min-w-0 flex-1 flex-col gap-10">
            <p className="w-full text-2xl leading-[1.2] font-bold text-texto">
              <span className="text-cic">Assinatura digital grátis</span> para todos os usuários.
            </p>
            <p className="w-full text-base leading-[1.2] font-medium text-texto">
              Envie documentos para assinatura diretamente das conversas. Simples, rápido e 100%
              incluso em todos os planos da plataforma.
            </p>
          </div>
        </div>

        <div className="flex min-w-[320px] flex-1 flex-col gap-[30px] rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px]">
          <p className="w-full text-2xl leading-[1.2] font-bold text-texto">
            <span className="text-cic">Produtividade</span> que se vê no dia a dia
          </p>
          <ul className="grid w-full grid-cols-1 gap-[15px] sm:grid-cols-2">
            {connectProductivityItems.map((item) => (
              <li key={item.title} className="flex min-w-[260px] flex-1 flex-col items-start gap-[15px]">
                <div className="flex h-[30px] w-full items-center gap-[15px]">
                  <Image src={item.icon} alt="" aria-hidden="true" width={24} height={24} className="shrink-0" />
                  <p className="flex min-h-[24px] min-w-0 flex-1 flex-col justify-center text-lg leading-[1.2] font-extrabold text-texto">
                    {item.title}
                  </p>
                </div>
                <p className="w-full text-sm leading-[1.2] font-medium text-texto-medio">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
