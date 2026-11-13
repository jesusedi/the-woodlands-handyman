import { business, footer } from "../content";
import { Mark } from "./Mark";
import { PhoneLink } from "./PhoneLink";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-pine-deep pb-28 text-cream md:pb-10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="flex items-center gap-2 font-semibold">
            <Mark className="h-5 w-5" />
            {business.name}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-sand/80">{footer.blurb}</p>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide uppercase">{footer.servicesTitle}</p>
          <ul className="mt-3 space-y-2">
            {footer.services.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-sand/80 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide uppercase">{footer.linksTitle}</p>
          <ul className="mt-3 space-y-2">
            {footer.links.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-sand/80 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide uppercase">{footer.contactTitle}</p>
          <ul className="mt-3 space-y-2 text-sm text-sand/80">
            <li>
              <PhoneLink className="hover:text-white">{business.phoneDisplay}</PhoneLink>
            </li>
            <li>
              <a className="hover:text-white" href={`mailto:${business.email}`}>
                {business.email}
              </a>
            </li>
            <li>{business.addressLine}</li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-6 text-center text-sm text-sand/60">
        © {year} {footer.rightsName}. All rights reserved.
      </p>
    </footer>
  );
}
