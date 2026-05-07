import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "./_lib/site";

const sitemapImages = [
  "/images/konjed-hero.webp",
  "/images/konjed-about.webp",
  "/images/IMG_7836.webp",
  "/images/IMG_6767.webp",
  "/images/IMG_6761.webp",
  "/images/IMG_8863.webp",
  "/images/IMG_7944.webp",
  "/images/IMG_6782.webp",
  "/images/Konjed-images/IMG_5647.webp",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: siteConfig.lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: sitemapImages.map((image) => absoluteUrl(image)),
    },
  ];
}
