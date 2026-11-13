import { useEffect, useState } from "react";
import { business, nav } from "../content";
import { Mark } from "./Mark";
import { PhoneLink } from "./PhoneLink";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = solid
    ? "text-pine hover:text-cedar"
    : "text-cream hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        solid ? "border-b border-line bg-cream/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className={`flex items-center gap-2 font-semibold ${linkClass}`}>
          <Mark className="h-5 w-5" />
          <span>{business.name}</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={`text-sm font-medium ${linkClass}`}>
              {item.label}
            </a>
          ))}
          <PhoneLink className="inline-flex min-h-10 items-center bg-cedar px-4 text-sm font-semibold text-white hover:bg-cedar-deep">
            {business.phoneDisplay}
          </PhoneLink>
        </nav>
        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center md:hidden ${linkClass}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className={`block h-0.5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-line bg-cream px-5 py-3 md:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block border-b border-line py-3 text-lg text-pine"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <PhoneLink
            className="mt-3 flex min-h-12 items-center justify-center bg-cedar text-base font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Call {business.phoneDisplay}
          </PhoneLink>
        </nav>
      ) : null}
    </header>
  );
}
