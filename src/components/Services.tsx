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
          {services.map((service, index) => {
            const photosBefore = services.slice(0, index).filter((item) => item.image).length;
            const flip = photosBefore % 2 === 1;
            return (
              <article
                key={service.id}
                id={`service-${service.id}`}
                className="scroll-mt-24 border-t border-line py-10 md:py-14"
              >
                {service.image ? (
                  <div className="grid items-center gap-6 md:grid-cols-2 md:gap-14">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      width={1400}
                      height={1000}
                      loading="lazy"
                      className={`aspect-[4/3] w-full object-cover ${flip ? "md:order-2" : ""}`}
                    />
                    <ServiceCopy service={service} index={index} />
                  </div>
                ) : (
                  <div className="bg-pine px-6 py-10 text-cream md:px-10 md:py-12">
                    <ServiceCopy service={service} index={index} onDark />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCopy({
  service,
  index,
  onDark = false,
}: {
  service: (typeof services)[number];
  index: number;
  onDark?: boolean;
}) {
  return (
    <div>
      <p className="font-serif text-3xl text-cedar-bright">{String(index + 1).padStart(2, "0")}</p>
      <h3 className={`mt-2 font-serif text-3xl leading-tight font-medium ${onDark ? "text-cream" : "text-pine"}`}>
        {service.title}
      </h3>
      <ul className={`mt-6 gap-3 ${onDark ? "grid sm:grid-cols-2" : "space-y-2"}`}>
        {service.tasks.map((task) => (
          <li key={task} className={`flex gap-3 text-base ${onDark ? "text-sand" : "text-ink"}`}>
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cedar-bright" aria-hidden="true" />
            <span className="task-line block">{task}</span>
          </li>
        ))}
      </ul>
      <a
        href={`#faq-${service.id}`}
        className={`mt-6 inline-flex min-h-11 items-center font-semibold underline underline-offset-4 ${
          onDark ? "text-sand decoration-sand/40 hover:text-white" : "text-fern decoration-fern/40 hover:text-pine"
        }`}
      >
        Learn More
      </a>
    </div>
  );
}
