import type { ReactNode } from "react";
import { business } from "../content";

type Props = {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

export function PhoneLink({ className, children, onClick }: Props) {
  return (
    <a href={`tel:${business.phoneTel}`} className={className} onClick={onClick}>
      {children ?? business.phoneDisplay}
    </a>
  );
}
