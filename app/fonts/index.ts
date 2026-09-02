import localFont from "next/font/local";

export const articulat = localFont({
  variable: "--font-articulat",
  display: "swap",
  src: [
    { path: "./ArticulatCF-Regular.otf", weight: "400", style: "normal" },
    { path: "./ArticulatCF-Medium.otf", weight: "500", style: "normal" },
    { path: "./ArticulatCF-DemiBold.otf", weight: "600", style: "normal" },
    { path: "./ArticulatCF-Bold.otf", weight: "700", style: "normal" },
    { path: "./ArticulatCF-ExtraBold.otf", weight: "800", style: "normal" },
  ],
});
