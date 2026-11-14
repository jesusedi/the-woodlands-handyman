import { business } from "../content";
import { PhoneLink } from "./PhoneLink";

export function MobileCallBar() {
  return (
    <PhoneLink className="fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex min-h-12 items-center justify-center bg-cedar text-base font-semibold text-white shadow-lg md:hidden">
      Call {business.phoneDisplay}
    </PhoneLink>
  );
}
