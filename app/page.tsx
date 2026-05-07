import { AboutSection } from "./_components/home/about-section";
import { Footer } from "./_components/home/footer";
import { FunFactsSection } from "./_components/home/fun-facts-section";
import { GallerySection } from "./_components/home/gallery-section";
import { Header } from "./_components/home/header";
import { HeroSection } from "./_components/home/hero-section";
import { SeoStorySection } from "./_components/home/seo-story-section";
import { SignatureSection } from "./_components/home/signature-section";
import { faqs, galleryImages } from "./_components/home/data";
import { absoluteUrl, seoKeywords, siteConfig } from "./_lib/site";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: absoluteUrl("/"),
    description: siteConfig.description,
    inLanguage: "en",
    keywords: seoKeywords.join(", "),
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": absoluteUrl("/#profile"),
    url: absoluteUrl("/"),
    name: siteConfig.title,
    headline: "Konjed, a cream British Shorthair cat from Tehran",
    description: siteConfig.description,
    inLanguage: "en",
    isPartOf: { "@id": absoluteUrl("/#website") },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.ogImage),
      caption: "Konjed the cream British Shorthair cat",
    },
    about: {
      "@type": "Thing",
      name: "Konjed",
      description:
        "A cream British Shorthair cat in Tehran, Iran, featured through cozy photography and calm pet stories.",
      additionalType: "https://en.wikipedia.org/wiki/British_Shorthair",
      sameAs: ["https://en.wikipedia.org/wiki/British_Shorthair"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": absoluteUrl("/#gallery"),
    name: "Konjed British Shorthair Cat Photo Gallery",
    description:
      "Cozy cat photography of Konjed, a cream British Shorthair cat from Tehran.",
    url: absoluteUrl("/#gallery"),
    inLanguage: "en",
    associatedMedia: galleryImages.slice(0, 12).map((image) => ({
      "@type": "ImageObject",
      url: absoluteUrl(image.src),
      name: image.caption,
      caption: image.alt,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl("/#faq"),
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <HeroSection />
      <AboutSection />
      <SignatureSection />
      <GallerySection />
      <SeoStorySection />
      <FunFactsSection />
      <Footer />
    </main>
  );
}
