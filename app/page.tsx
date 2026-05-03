import { AboutSection } from "./_components/home/about-section";
import { Footer } from "./_components/home/footer";
import { GallerySection } from "./_components/home/gallery-section";
import { Header } from "./_components/home/header";
import { HeroSection } from "./_components/home/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
