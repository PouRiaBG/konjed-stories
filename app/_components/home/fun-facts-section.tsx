import { funFacts } from "./data";

export function FunFactsSection() {
  return (
    <section id="shop" className="bg-card px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-foreground text-balance">
          Fun Facts About Konjed
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {funFacts.map((item) => (
            <div
              key={item.title}
              className={`flex min-h-[190px] cursor-default flex-col items-center justify-center rounded-lg bg-background/70 p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:bg-background hover:shadow-lg sm:min-h-[220px] sm:p-8 ${
                item.featured
                  ? "border-2 border-border"
                  : "border border-transparent"
              }`}
            >
              <span
                aria-hidden="true"
                className="mb-8 block text-5xl leading-none sm:text-6xl"
              >
                {item.icon}
              </span>
              <h3 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
                {item.title}
              </h3>
              <p className="text-lg leading-snug text-muted-foreground sm:text-xl">
                {item.fact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
