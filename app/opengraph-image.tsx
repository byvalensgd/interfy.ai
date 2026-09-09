import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteConfig.title;

export default async function OpengraphImage() {
  const logoSvg = await readFile(path.join(process.cwd(), "public/logo/interfy-logo.svg"), "utf-8");
  const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px 100px",
          background: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoDataUri} width={196} height={49} alt="" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 64 }}>
          <div style={{ display: "flex", fontSize: 60, fontWeight: 800, color: "#333333", lineHeight: 1.2 }}>
            Plataforma AI-native para
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontWeight: 800,
              lineHeight: 1.2,
              backgroundImage: "linear-gradient(123deg, #184aee 22%, #bf18f6 96%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Documentos e Processos
          </div>
        </div>

        <div style={{ display: "flex", marginTop: 40, fontSize: 28, fontWeight: 500, color: "#5a6272" }}>
          Documents · Process · Capture · Sign · Connect · Mobile · Agents · Voice
        </div>
      </div>
    ),
    { ...size }
  );
}
