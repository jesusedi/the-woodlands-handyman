import { closing, business } from "../content";
import { PhoneLink } from "./PhoneLink";

export function Closing() {
  return (
    <section className="bg-pine py-16 text-cream md:py-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="font-serif text-4xl leading-tight font-medium text-balance md:text-5xl">{closing.title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-sand">{closing.lead}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center bg-cedar px-6 text-base font-semibold text-white hover:bg-cedar-deep"
          >
            {closing.estimate}
          </a>
          <PhoneLink className="inline-flex min-h-12 items-center justify-center border border-cream/30 px-6 text-base font-semibold text-cream hover:bg-white/10">
            {business.phoneDisplay}
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}
