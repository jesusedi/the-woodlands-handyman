import { services, servicesIntro } from "../content";

export function Services() {
  return (
    <section id={servicesIntro.id} className="scroll-mt-20 bg-sand py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-3xl font-serif text-4xl leading-tight font-medium text-pine text-balance md:text-5xl">
          {servicesIntro.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-bark">{servicesIntro.lead}</p>
        <div className="mt-8">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={`service-${service.id}`}
              className="scroll-mt-24 grid items-center gap-6 border-t border-line py-10 md:grid-cols-2 md:gap-14 md:py-14"
            >
              <img
                src={service.image}
                alt={service.imageAlt}
                width={1400}
                height={1000}
                loading="lazy"
                className={`aspect-[4/3] w-full object-cover ${index % 2 === 1 ? "md:order-2" : ""}`}
              />
              <div>
                <p className="font-serif text-3xl text-cedar-bright">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-serif text-3xl leading-tight font-medium text-pine">
                  {service.title}
                </h3>
                <ul className="mt-5 space-y-2">
                  {service.tasks.map((task) => (
                    <li key={task} className="flex gap-3 text-base text-ink">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fern" aria-hidden="true" />
                      <span className="task-line block">{task}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`#faq-${service.id}`}
                  className="mt-6 inline-flex min-h-11 items-center font-semibold text-fern underline decoration-fern/40 underline-offset-4 hover:text-pine"
                >
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
