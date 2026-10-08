import type { ReactNode } from "react";
import { bookHref } from "@/content/site";

export function BookLink({ children }: { children: ReactNode }) {
  return (
    <a href={bookHref} className="btn">
      {children}
    </a>
  );
}
