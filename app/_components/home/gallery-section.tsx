"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "./data";

export function GallerySection() {
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
    <section id="gallery" className="py-24 px-6 bg-muted/45">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Gallery
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Favorite Moments
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            A few quiet snapshots from desk naps, window watching, and Konjed
            looking entirely too comfortable.
          </p>
        </div>

        <div className="relative mb-8">
          <div className="rounded-[1.75rem] overflow-hidden shadow-2xl relative h-[420px] md:h-[620px] bg-foreground/5">
            <Image
              src={galleryImages[currentSlide].src}
              alt={galleryImages[currentSlide].alt}
              fill
              sizes="(max-width: 768px) 100vw, 960px"
              className="object-cover"
            />
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 border border-border rounded-full w-12 h-12 flex items-center justify-center text-lg text-foreground shadow-lg cursor-pointer hover:bg-background hover:scale-110 transition-all"
            aria-label="Previous slide"
          >
            &#8592;
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 border border-border rounded-full w-12 h-12 flex items-center justify-center text-lg text-foreground shadow-lg cursor-pointer hover:bg-background hover:scale-110 transition-all"
            aria-label="Next slide"
          >
            &#8594;
          </button>

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

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-xl overflow-hidden cursor-pointer p-0 bg-transparent transition-all ${
                currentSlide === index
                  ? "ring-2 ring-foreground opacity-100"
                  : "ring-2 ring-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={160}
                height={80}
                sizes="(max-width: 640px) 33vw, 160px"
                className="w-full h-20 object-cover block"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
