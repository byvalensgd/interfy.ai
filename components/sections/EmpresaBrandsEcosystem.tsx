import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { empresaBrandLogos } from "@/config/empresa-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function EmpresaBrandsEcosystem() {
  const { empresa } = await getDictionary();
  const { brandsEcosystem } = empresa;
  const brands = empresaBrandLogos.map((logo, i) => ({ ...logo, ...brandsEcosystem.brands[i] }));

  return (
    <section aria-labelledby="empresa-brands-heading" className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <Reveal className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 id="empresa-brands-heading" className="text-2xl leading-[1.2] font-bold text-texto">
            <span className="text-azul-base">{brandsEcosystem.headingHighlight}</span>
            {brandsEcosystem.headingSuffix}
          </h2>
          <p className="max-w-[900px] text-xl leading-[1.2] font-medium text-texto">{brandsEcosystem.description}</p>
        </div>

        <ul aria-label={brandsEcosystem.ariaLabel} className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {brands.map((brand) => (
            <li
              key={brand.name}
              className="flex min-w-[220px] flex-col items-center gap-5 rounded-[20px] border border-contorno-base px-[15px] py-5 text-center"
            >
              <div className="flex h-9 w-full items-center justify-center">
                <Image src={brand.icon} alt={brand.name} width={brand.width} height={brand.height} className="max-h-9 w-auto" />
              </div>
              <span
                className="h-0.5 w-[60px] shrink-0 rounded-full"
                style={{ backgroundImage: "linear-gradient(151deg, #184aee 22.863%, #bf18f6 96.412%)" }}
                aria-hidden="true"
              />
              <p className="w-full text-sm leading-[1.2] font-medium text-texto">{brand.description}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
