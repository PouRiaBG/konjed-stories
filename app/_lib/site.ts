function normalizeSiteUrl(url: string) {
  return url.replace(/\/$/, "");
}

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteUrl = normalizeSiteUrl(configuredSiteUrl);

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export const seoKeywords = [
  "cat",
  "British cat",
  "British Shorthair cat",
  "British Shorthair",
  "cream British Shorthair",
  "cream cat",
  "Tehran cat",
  "Iran cat",
  "cat photography",
  "cat photo story",
  "pet stories",
  "Konjed",
];

export const siteConfig = {
  name: "Konjed Stories",
  title: "Konjed Stories | British Shorthair Cat Photos",
  description:
    "Meet Konjed, a cream British Shorthair cat from Tehran, with cozy cat photos, quiet pet stories, and calm everyday British cat moments.",
  url: siteUrl,
  ogImage: "/images/Konjed-images/IMG_5647.webp",
  locale: "en_US",
  lastModified: "2026-05-07",
};
