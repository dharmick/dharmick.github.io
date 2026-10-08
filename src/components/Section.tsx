import type { ReactNode } from "react";

const tones = {
  white: "bg-white text-ink",
  mist: "bg-mist text-ink",
  foam: "bg-foam text-ink",
  night: "band-night bg-night text-white",
} as const;

export function Section({
  id,
  labelledBy,
  tone = "white",
  children,
}: {
  id: string;
  labelledBy: string;
  tone?: keyof typeof tones;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-16 md:py-[5.25rem] ${tones[tone]}`}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  children,
  light = false,
  align = "center",
}: {
  id: string;
  children: ReactNode;
  light?: boolean;
  align?: "center" | "left";
}) {
  const classes = ["section-title", light ? "on-night" : "", align === "left" ? "is-left" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <h2 id={id} className={classes}>
      {children}
    </h2>
  );
}

export function SectionIntro({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return <p className={light ? "section-intro on-night" : "section-intro"}>{children}</p>;
}
