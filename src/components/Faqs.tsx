import { useEffect, useState } from "react";
import { faqCategories, faqsIntro } from "../content";

export function Faqs() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const mark = () => {
      const id = window.location.hash.replace("#", "");
      if (!id.startsWith("faq-")) return;
      const el = document.getElementById(id);
      if (!el) return;
      el.dataset.hot = "true";
      window.setTimeout(() => {
        delete el.dataset.hot;
      }, 2000);
    };
    window.addEventListener("hashchange", mark);
    mark();
    return () => window.removeEventListener("hashchange", mark);
  }, []);

  return (
    <section id={faqsIntro.id} className="scroll-mt-20 bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-serif text-4xl leading-tight font-medium text-pine text-balance md:text-5xl">
          {faqsIntro.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-bark">{faqsIntro.lead}</p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {faqCategories.map((category) => (
            <section
              key={category.id}
              id={`faq-${category.id}`}
              className="scroll-mt-24 border border-line bg-white p-5 md:p-6"
            >
              <h3 className="font-serif text-2xl font-medium text-pine">{category.title}</h3>
              <div className="mt-2 divide-y divide-line">
                {category.faqs.map((faq, index) => {
                  const key = `${category.id}:${faq.question}`;
                  const panelId = `panel-${category.id}-${index}`;
                  const isOpen = Boolean(open[key]);
                  return (
                    <div key={key}>
                      <h4 className="text-base font-medium">
                        <button
                          type="button"
                          className="flex w-full items-start justify-between gap-4 py-4 text-left text-ink"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setOpen((state) => ({ ...state, [key]: !state[key] }))}
                        >
                          <span>{faq.question}</span>
                          <span className="text-xl leading-none text-cedar" aria-hidden="true">
                            {isOpen ? "–" : "+"}
                          </span>
                        </button>
                      </h4>
                      <div id={panelId} role="region" hidden={!isOpen} className="pb-4 pr-6 text-base leading-relaxed text-bark">
                        {faq.answer}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
