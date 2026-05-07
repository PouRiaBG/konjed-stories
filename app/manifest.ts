import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "./_lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Konjed",
    description: siteConfig.description,
    start_url: absoluteUrl("/"),
    scope: absoluteUrl("/"),
    display: "standalone",
    background_color: "#f8f3eb",
    theme_color: "#355746",
    categories: ["pets", "photography", "lifestyle"],
    lang: "en",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
