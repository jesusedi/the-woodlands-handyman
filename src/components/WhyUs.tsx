import { why } from "../content";

export function WhyUs() {
  return (
    <section id={why.id} className="scroll-mt-20 bg-pine py-16 text-cream md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-3xl font-serif text-4xl leading-tight font-medium text-balance md:text-5xl">
          {why.title}
        </h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {why.points.map((point) => (
            <li key={point} className="flex gap-4 border border-white/15 bg-white/5 px-5 py-4">
              <span className="mt-1 text-cedar-bright" aria-hidden="true">
                ✓
              </span>
              <span className="text-base leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
