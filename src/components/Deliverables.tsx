import { site } from "@/content/site";
import { Section } from "@/components/Section";

export function Deliverables() {
  const { deliverables } = site;

  return (
    <Section className="py-28 md:py-36">
      <p className="label">{deliverables.label}</p>
      <h2 className="font-display mt-6 max-w-[14ch] text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-[-0.02em]">
        {deliverables.heading}
      </h2>
      <ul className="mt-16 max-w-2xl divide-y divide-ink/15 border-y border-ink/15">
        {deliverables.items.map((item) => (
          <li key={item} className="py-5 text-lg md:text-xl">
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
