import { hero, services } from "../content";
import { PhoneLink } from "./PhoneLink";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] bg-pine-deep text-cream">
      <img
        src={hero.image}
        alt={hero.imageAlt}
        width={1600}
        height={1066}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pine-deep via-pine-deep/80 to-pine-deep/35 md:bg-gradient-to-r md:from-pine-deep md:via-pine-deep/80 md:to-pine-deep/15" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-28 pt-24 md:justify-center md:pb-16">
        <p className="text-sm font-medium tracking-[0.16em] text-sand uppercase">
          The Woodlands, TX 77380
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-[2.35rem] leading-[1.05] font-medium text-balance sm:text-5xl lg:text-6xl">
          {hero.title}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-sand">{hero.lead}</p>
        <p className="mt-3 max-w-xl text-base text-cream/80">{hero.serving}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center bg-cedar px-6 text-base font-semibold text-white hover:bg-cedar-deep"
          >
            {hero.estimate}
          </a>
          <PhoneLink className="inline-flex min-h-12 items-center justify-center border border-cream/40 px-6 text-base font-semibold text-cream hover:bg-white/10">
            {hero.call}
          </PhoneLink>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-px bg-white/20 sm:grid-cols-4">
          {services.map((service) => (
            <li key={service.id} className="bg-pine/70">
              <a
                href={`#service-${service.id}`}
                className="block px-3 py-3 text-sm leading-snug text-cream hover:bg-white/10"
              >
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
