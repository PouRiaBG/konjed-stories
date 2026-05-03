import { signatureMoments } from "./data";

export function SignatureSection() {
  return (
    <section className="bg-accent px-5 py-20 text-accent-foreground sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent-soft">
              Signature moments
            </p>
            <h2 className="max-w-2xl text-4xl font-bold leading-tight text-balance md:text-5xl">
              Small rituals, photographed with a quiet eye.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-accent-foreground/75">
            The best parts of Konjed&apos;s day are simple: a soft place, a
            little sunlight, and a room that moves at his speed.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {signatureMoments.map((moment, index) => (
            <article
              key={moment.title}
              className="rounded-lg border border-accent-foreground/15 bg-accent-foreground/7 p-6"
            >
              <p className="mb-8 text-sm font-semibold text-accent-soft">
                0{index + 1}
              </p>
              <h3 className="mb-3 text-xl font-bold">{moment.title}</h3>
              <p className="text-sm leading-relaxed text-accent-foreground/75">
                {moment.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
