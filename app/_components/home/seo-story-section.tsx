import { faqs } from "./data";

export function SeoStorySection() {
  return (
    <section id="faq" className="bg-background px-5 py-24 sm:px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="section-eyebrow mb-5">Cat story</p>
          <h2 className="max-w-2xl text-4xl font-bold text-foreground text-balance md:text-5xl">
            A cream British Shorthair cat with a Tehran rhythm.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Konjed Stories follows a British Shorthair cat through soft
            routines: window watching, rug loafing, desk supervising, and the
            quiet charm that makes this plush British cat breed so loved.
          </p>
          <p className="mt-6 border-l-2 border-accent pl-5 text-lg leading-relaxed text-foreground/80">
            The site is built around real cat photography and readable story
            details, so searches for cat, British cat, cream British
            Shorthair, and British Shorthair cat all point to content that is
            actually on the page.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <article
              key={item.question}
              className="rounded-lg border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold leading-snug text-foreground">
                {item.question}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
