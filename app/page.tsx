"use client";

import { useState } from "react";

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7836-yidCqJyOvhIEhgdzd9yRbhJcinxi26.jpg",
    alt: "Konjed relaxing on desk",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6767-yeXt8UqTYKoaNHA8D9ReXl5VeVuN0s.jpg",
    alt: "Konjed under chair",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6761-juQvAS4O0omhoSXgwXdBqYuQMLJfrr.jpg",
    alt: "Konjed stretching",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8863-VUVTgss9pB82fdHDXsM3dsvBtcESGa.jpg",
    alt: "Konjed on couch",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7944-g8KQFkQGLps7VuAi1jzNZE41giokqc.jpg",
    alt: "Konjed portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6782-98fmhwhaCsBawEsblTAapjdx0zveez.jpg",
    alt: "Konjed at window",
  },
];

const funFacts = [
  { title: "Breed", fact: "British Shorthair" },
  { title: "Location", fact: "Baku, Azerbaijan" },
  { title: "Eye Color", fact: "Blue-Green" },
  { title: "Coat", fact: "Cream & Fluffy" },
  { title: "Personality", fact: "Charming & Relaxed" },
  { title: "Favorite Spot", fact: "By the Window" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      {/* Fixed Navigation Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm shadow-sm z-50 px-6 py-4">
        <nav className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-foreground">Konjed</div>
          <ul className="hidden md:flex gap-8 list-none">
            {["Home", "About", "Gallery", "Shop", "Blog", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground text-sm font-medium hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>
      </header>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-24 bg-[#e8e4dd4d]"
      >
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-balance text-foreground">
              Meet Konjed
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed text-balance">
              The most charming British Shorthair from Tehran Iran
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              With stunning blue-green eyes and a luxurious cream coat, Konjed
              brings joy and elegance to every moment.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/images/konjed-hero.jpg"
              alt="Konjed relaxing on desk"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </section>
      <section id="about" className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground text-balance">
            About Konjed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/konjed-about.jpg"
                alt="Konjed by the window"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                A Star from Tehran
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                Konjed is a beautiful British Shorthair cat living in Tehran,
                Iran. With his distinctive cream-colored fur and mesmerizing
                blue-green eyes, he&apos;s captured the hearts of everyone who
                meets him.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Whether he&apos;s lounging by the window watching the city
                skyline or playfully stretching on his favorite rug, Konjed
                brings warmth and charm to every moment.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Section with Slideshow */}
      <section id="gallery" className="py-24 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground text-balance">
            Photo Gallery
          </h2>

          {/* Main Slideshow */}
          <div className="relative mb-8">
            <div className="rounded-3xl overflow-hidden shadow-xl relative h-[500px] md:h-[600px]">
              <img
                src={galleryImages[currentSlide].src}
                alt={galleryImages[currentSlide].alt}
                className="w-full h-full object-cover block"
              />
            </div>

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 border-none rounded-full w-12 h-12 flex items-center justify-center text-lg text-foreground shadow-lg cursor-pointer hover:bg-background hover:scale-110 transition-all"
              aria-label="Previous slide"
            >
              &#8592;
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 border-none rounded-full w-12 h-12 flex items-center justify-center text-lg text-foreground shadow-lg cursor-pointer hover:bg-background hover:scale-110 transition-all"
              aria-label="Next slide"
            >
              &#8594;
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full border-none cursor-pointer transition-all ${
                    currentSlide === index
                      ? "w-10 bg-foreground"
                      : "w-3 bg-background/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`rounded-lg overflow-hidden cursor-pointer p-0 bg-transparent transition-all ${
                  currentSlide === index
                    ? "ring-2 ring-foreground opacity-100"
                    : "ring-2 ring-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-20 object-cover block"
                />
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Fun Facts Section */}
      {/* <section id="shop" className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground text-balance">
            Fun Facts About Konjed
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {funFacts.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl text-center bg-muted/50 hover:bg-muted hover:-translate-y-1 hover:shadow-lg transition-all cursor-default"
              >
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-base text-muted-foreground">{item.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Blog Section */}
      {/* <section id="blog" className="py-24 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground text-balance">
            Blog
          </h2>
          <p className="text-lg text-muted-foreground">
            {"Coming soon - Follow Konjed's daily adventures and stories"}
          </p>
        </div>
      </section> */}
      {/* Contact Section */}
      {/* <section id="contact" className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground text-balance">
            Contact
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {"Want to say hello to Konjed? We'd love to hear from you!"}
          </p>
          <a
            href="mailto:hello@konjed.com"
            className="inline-block px-8 py-3 bg-foreground text-background rounded-lg text-base font-medium hover:opacity-90 transition-opacity"
          >
            Send Email
          </a>
        </div>
      </section> */}
      <footer className="py-8 px-6 bg-foreground text-background text-center">
        <p className="text-sm">&copy; 2025 Konjed. Made with love in Tehran.</p>
      </footer>
    </main>
  );
}
