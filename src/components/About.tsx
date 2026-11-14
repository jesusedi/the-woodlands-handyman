import { about } from "../content";

export function About() {
  return (
    <section id={about.id} className="scroll-mt-20 bg-cream py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-stretch gap-10 px-5 md:grid-cols-[minmax(0,1.5fr)_18rem] md:gap-16">
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
        <aside className="flex flex-col justify-end bg-pine px-8 py-10 text-cream">
          <p className="font-serif text-6xl leading-none font-medium text-balance">{about.satisfaction}</p>
          <p className="mt-4 text-sm tracking-[0.16em] text-sand uppercase">The Woodlands, TX</p>
        </aside>
      </div>
    </section>
  );
}
