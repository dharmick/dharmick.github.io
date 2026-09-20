import { site } from "@/content/site";
import { Section } from "@/components/Section";

export function FitCheck() {
  const { fit } = site;

  return (
    <Section className="py-28 md:py-36 lg:py-44">
      <p className="label">{fit.label}</p>
      <h2 className="font-display mt-6 max-w-[16ch] text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-[-0.02em]">
        {fit.heading}
      </h2>
      <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-20">
        <FitColumn title={fit.yes.title} items={fit.yes.items} />
        <FitColumn title={fit.no.title} items={fit.no.items} />
      </div>
    </Section>
  );
}

function FitColumn({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div>
      <h3 className="text-sm tracking-[0.14em] uppercase">{title}</h3>
      <ul className="mt-6 space-y-4 border-t border-ink/15 pt-6">
        {items.map((item) => (
          <li key={item} className="max-w-md text-lg leading-snug">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
