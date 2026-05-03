import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="bg-card px-5 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-clay/60" />
            <div className="photo-shell aspect-[4/5] rounded-[1.25rem] shadow-xl">
              <Image
                src="/images/konjed-about.webp"
                alt="Konjed by the window"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="photo-polish object-cover object-[50%_52%]"
              />
            </div>
          </div>
          <div>
            <p className="section-eyebrow mb-5">About Konjed</p>
            <h2 className="mb-6 text-4xl font-bold text-foreground text-balance md:text-5xl">
              A Star from Tehran
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-foreground/80">
              Konjed is a beautiful British Shorthair cat living in Tehran,
              Iran. With his distinctive cream-colored fur and mesmerizing
              blue-green eyes, he&apos;s captured the hearts of everyone who
              meets him.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Whether he&apos;s lounging by the window watching the city skyline
              or playfully stretching on his favorite rug, Konjed brings warmth
              and charm to every moment.
            </p>
            <div className="mt-8 border-l-2 border-accent pl-5">
              <p className="text-2xl font-semibold leading-snug text-foreground text-balance">
                Calm, curious, and always exactly where the light is best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
