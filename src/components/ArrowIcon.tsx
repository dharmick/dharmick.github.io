import { Icon } from "@iconify/react";
import arrowRight from "@iconify-icons/solar/arrow-right-linear";

export function ArrowIcon({ className = "size-5" }: { className?: string }) {
  return <Icon icon={arrowRight} className={className} aria-hidden="true" />;
}
