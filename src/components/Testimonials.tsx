import { testimonials, testimonialsIntro } from "../content";

export function Testimonials() {
  return (
    <section id={testimonialsIntro.id} className="scroll-mt-20 bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-serif text-4xl leading-tight font-medium text-pine md:text-5xl">
          {testimonialsIntro.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-bark">{testimonialsIntro.lead}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="flex h-full flex-col border border-line bg-white p-6">
              <div className="flex gap-1 text-gold" aria-label={`${item.rating} out of 5`}>
                {Array.from({ length: item.rating }, (_, index) => (
                  <span key={index} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-serif text-xl leading-snug text-pine">
                “{item.text}”
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold text-ink">{item.name}</span>
                <span className="text-bark">, {item.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
