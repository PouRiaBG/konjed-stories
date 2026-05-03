"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "./data";

export function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const activeImage = galleryImages[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <section id="gallery" className="bg-background px-5 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow mb-4">Gallery</p>
            <h2 className="text-4xl font-bold text-foreground text-balance md:text-5xl">
              Favorite Moments
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            A few quiet snapshots from desk naps, window watching, and Konjed
            looking entirely too comfortable.
          </p>
        </div>

        <div className="relative mb-6">
          <div className="photo-shell relative h-[430px] rounded-[1.25rem] shadow-2xl md:h-[660px]">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, 1120px"
              className="photo-polish object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-3 rounded-lg border border-card/70 bg-card/90 p-4 shadow-lg backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  {activeImage.caption}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {currentSlide + 1} of {galleryImages.length}
                </p>
              </div>
              <p className="text-sm font-semibold text-foreground">
                {activeImage.alt}
              </p>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-background/90 text-lg text-foreground shadow-lg transition-all hover:scale-110 hover:bg-background"
            aria-label="Previous slide"
          >
            &#8592;
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-background/90 text-lg text-foreground shadow-lg transition-all hover:scale-110 hover:bg-background"
            aria-label="Next slide"
          >
            &#8594;
          </button>

          <div className="absolute right-5 top-5 flex gap-2 rounded-full bg-background/70 p-2 backdrop-blur">
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

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`cursor-pointer overflow-hidden rounded-lg bg-transparent p-0 transition-all ${
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
                className="photo-polish block h-20 w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
