import { areas } from "../content";

export function Areas() {
  return (
    <section id={areas.id} className="scroll-mt-20 bg-sand py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-14">
        <div>
          <h2 className="font-serif text-4xl leading-tight font-medium text-pine text-balance md:text-5xl">
            {areas.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-bark">{areas.lead}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {areas.villages.map((village) => (
              <li key={village} className="border border-line bg-cream px-3 py-2 text-sm text-ink">
                {village}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-base leading-relaxed text-ink">{areas.nearby}</p>
          <p className="mt-6 font-serif text-2xl text-pine">{areas.place}</p>
          <p className="text-sm text-bark">{areas.placeNote}</p>
        </div>
        <img
          src={areas.image}
          alt={areas.imageAlt}
          width={1600}
          height={1067}
          loading="lazy"
          className="aspect-[3/2] w-full object-cover"
        />
      </div>
    </section>
  );
}
