import type { MetadataRoute } from "next";
import { siteConfig } from "./_lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteConfig.url}/images/konjed-hero.webp`,
        `${siteConfig.url}/images/konjed-about.webp`,
        `${siteConfig.url}/images/IMG_7836.webp`,
        `${siteConfig.url}/images/IMG_6767.webp`,
        `${siteConfig.url}/images/IMG_6761.webp`,
        `${siteConfig.url}/images/IMG_8863.webp`,
        `${siteConfig.url}/images/IMG_7944.webp`,
        `${siteConfig.url}/images/IMG_6782.webp`,
      ],
    },
  ];
}
