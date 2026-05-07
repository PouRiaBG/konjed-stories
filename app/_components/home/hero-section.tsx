import Image from "next/image";
import { quickFacts } from "./data";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[96svh] items-center justify-center overflow-hidden px-5 pb-16 pt-28 sm:px-6"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#f8f3eb_0%,#f8f3eb_48%,#dce8dd_48%,#dce8dd_100%)]" />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="section-eyebrow mb-5">Cream coat, big presence</p>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-balance text-foreground md:text-7xl">
            Konjed the British Shorthair Cat
          </h1>
          <p className="mb-6 text-xl leading-relaxed text-foreground/80 text-balance md:text-2xl">
            A cream British cat from Tehran, Iran, with blue-green eyes and a
            very serious loafing practice.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Follow cozy cat photos, small pet stories, and quiet British
            Shorthair moments at home.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-foreground"
            >
              View Gallery
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/85 px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-foreground"
            >
              Read His Story
            </a>
          </div>
          <dl className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-lg border border-border bg-card/60 p-4 shadow-sm sm:border-l sm:bg-transparent sm:shadow-none"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
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
          <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-card/70 bg-card/40" />
          <div className="photo-shell aspect-[4/5] rounded-[1.75rem] shadow-2xl md:aspect-[5/6]">
            <Image
              src="/images/Konjed-images/IMG_5647.webp"
              alt="Konjed the cream British Shorthair cat loafing on a patterned rug"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="photo-polish object-cover object-[50%_52%]"
            />
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-card/70 bg-card/90 p-4 shadow-lg backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Current specialty
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">
              Loafing on the rug with excellent calm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
