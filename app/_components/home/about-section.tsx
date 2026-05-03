import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-border" />
            <Image
              src="/images/konjed-about.jpg"
              alt="Konjed by the window"
              width={4032}
              height={3024}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              About Konjed
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">
              A Star from Tehran
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80 mb-5">
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
          </div>
        </div>
      </div>
    </section>
  );
}
