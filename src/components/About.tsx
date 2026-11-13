import { about } from "../content";

export function About() {
  return (
    <section id={about.id} className="scroll-mt-20 bg-cream py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="font-serif text-4xl leading-tight font-medium text-pine text-balance md:text-5xl">
            {about.title}
          </h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-lg leading-relaxed text-bark">
              {paragraph}
            </p>
          ))}
        </div>
        <figure className="relative">
          <img
            src={about.image}
            alt={about.imageAlt}
            width={1100}
            height={1650}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover object-top"
          />
          <figcaption className="absolute right-4 bottom-4 bg-cream px-4 py-3 text-sm font-semibold text-pine shadow-sm">
            {about.satisfaction}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
