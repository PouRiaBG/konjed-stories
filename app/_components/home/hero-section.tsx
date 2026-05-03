import Image from "next/image";
import { quickFacts } from "./data";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-[94svh] flex items-center justify-center px-6 pt-28 pb-16 bg-background"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-[0.9fr_1fr] gap-10 lg:gap-16 items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Cream coat, big presence
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-5 leading-tight text-balance text-foreground">
            Meet Konjed
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-6 leading-relaxed text-balance">
            The most charming British Shorthair from Tehran, Iran.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            With stunning blue-green eyes and a luxurious cream coat, Konjed
            brings joy and elegance to every moment.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition hover:bg-foreground"
            >
              View Gallery
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-foreground"
            >
              Read His Story
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="border-l border-border pl-4 first:border-l-0 first:pl-0"
              >
                <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-muted" />
          <div className="photo-shell aspect-4/5 rounded-[1.75rem] shadow-2xl">
            <Image
              src="/images/konjed-hero.webp"
              alt="Konjed relaxing on desk"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="photo-polish object-cover object-[50%_58%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
