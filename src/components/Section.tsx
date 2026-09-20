import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  tone?: "paper" | "sage";
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  tone = "paper",
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${tone === "sage" ? "bg-sage" : "bg-paper"} ${id ? "scroll-mt-24" : ""} ${className}`}
    >
      <div className="mx-auto max-w-[1320px] px-6 md:px-12 lg:px-16">
        {children}
      </div>
    </section>
  );
}
