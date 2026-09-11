import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { platformWorkspaceIcons } from "@/config/platform-page";

export default async function PlatformWorkspace() {
  const { platform } = await getDictionary();
  const { workspace } = platform;
  const items = platformWorkspaceIcons.map((icon, i) => ({ icon, ...workspace.items[i] }));

  return (
    <section
      aria-labelledby="platform-workspace-heading"
      className="flex justify-center px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="platform-workspace-heading"
          className="text-center text-2xl leading-[1.2] font-bold text-texto"
        >
          {workspace.headline} <span className="text-azul-base">{workspace.headlineHighlight}</span>
        </h2>

        <Reveal className="w-full">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <li
                key={item.icon}
                className="flex flex-col gap-5 rounded-[20px] border border-contorno-base px-5 py-[30px]"
              >
                <div className="flex items-center gap-[15px]">
                  <span
                    className="flex size-[60px] shrink-0 items-center justify-center rounded-full p-3"
                    style={{ backgroundImage: "linear-gradient(93deg, rgba(24,106,238,0.15) 0%, rgba(183,216,255,0.1) 100%)" }}
                  >
                    <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} />
                  </span>
                  <p className="min-w-0 flex-1 text-xl leading-[1.2] font-bold text-texto">{item.title}</p>
                </div>
                <p className="text-base leading-[1.2] font-medium text-texto">{item.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
