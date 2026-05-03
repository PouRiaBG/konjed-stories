export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "Konjed Stories",
  title: "Konjed Stories | British Shorthair Cat from Tehran",
  description:
    "Meet Konjed, a charming cream British Shorthair cat from Tehran with blue-green eyes, cozy photo stories, and quiet everyday adventures.",
  url: siteUrl,
  ogImage: "/images/konjed-hero.webp",
  locale: "en_US",
};
