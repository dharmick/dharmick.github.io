import { site } from "@/content/site";
import { Section } from "@/components/Section";

export function Engineering() {
  const { engineering } = site;

  return (
    <Section className="py-24 md:py-32">
      <p className="label">{engineering.label}</p>
      <h2 className="font-display mt-6 max-w-[22ch] text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em]">
        {engineering.heading}
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
        {engineering.body}
      </p>
    </Section>
  );
}
