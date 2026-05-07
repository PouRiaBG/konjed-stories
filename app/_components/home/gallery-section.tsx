"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "./data";

const visibleSlideOffsets = [-1, 0, 1, 2, 3, 4];

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
    <section id="gallery" className="bg-background px-0 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 px-5 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="section-eyebrow mb-4">Gallery</p>
            <h2 className="text-4xl font-bold text-foreground text-balance md:text-5xl">
              Favorite Moments
            </h2>
          </div>
          <div className="flex items-center gap-3 md:self-start">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-2xl leading-none text-foreground shadow-sm transition hover:-translate-x-0.5 hover:border-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              aria-label="Previous slide"
            >
              <span aria-hidden="true">&lsaquo;</span>
            </button>

            <button
              onClick={nextSlide}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-2xl leading-none text-foreground shadow-sm transition hover:translate-x-0.5 hover:border-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              aria-label="Next slide"
            >
              <span aria-hidden="true">&rsaquo;</span>
            </button>
          </div>
        </div>

        <div className="overflow-hidden pl-5 sm:pl-6 lg:pl-0">
          <div className="flex h-[360px] gap-4 sm:h-[430px] md:h-[496px]">
            {visibleSlideOffsets.map((offset) => {
              const imageIndex =
                (currentSlide + offset + galleryImages.length) %
                galleryImages.length;
              const image = galleryImages[imageIndex];
              const isActive = offset === 0;

              return (
                <button
                  key={`${image.src}-${offset}`}
                  onClick={() => setCurrentSlide(imageIndex)}
                  className={`photo-shell group relative h-full flex-none cursor-pointer rounded-[1.25rem] p-0 text-left shadow-sm transition-[width,opacity,transform] duration-500 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground ${
                    isActive
                      ? "w-[72vw] max-w-[560px] opacity-100 sm:w-[560px]"
                      : "w-[32vw] opacity-70 hover:opacity-90 sm:w-[120px]"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                  aria-label={`Show ${image.caption}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      isActive
                        ? "(max-width: 640px) 72vw, 560px"
                        : "(max-width: 640px) 32vw, 120px"
                    }
                    className={`photo-polish object-cover transition duration-500 ${
                      isActive
                        ? "scale-100 brightness-95"
                        : "scale-105 grayscale-[30%] brightness-110"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 rounded-[inherit] transition duration-500 ${
                      isActive
                        ? "bg-[linear-gradient(180deg,rgba(0,0,0,0)_45%,rgba(0,0,0,0.72)_100%)]"
                        : "bg-background/70 group-hover:bg-background/55"
                    }`}
                  />
                  {isActive ? (
                    <span className="absolute inset-x-7 bottom-7 block text-white sm:inset-x-8 sm:bottom-8">
                      <span className="block text-3xl font-bold leading-tight text-balance sm:text-4xl">
                        {image.caption}
                      </span>
                      <span className="mt-4 block max-w-[30rem] text-sm leading-7 text-white/95 sm:text-base">
                        {image.alt}
                      </span>
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
