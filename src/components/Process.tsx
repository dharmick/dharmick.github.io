import { site } from "@/content/site";
import { Section } from "@/components/Section";

export function Process() {
  const { process } = site;

  return (
    <Section id="process" className="py-28 md:py-36 lg:py-44">
      <p className="label">{process.label}</p>
      <h2 className="font-display mt-6 max-w-[16ch] text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-[-0.02em]">
        {process.heading}
      </h2>
      <ol className="mt-20 space-y-16 md:space-y-24">
        {process.steps.map((step) => (
          <li
            key={step.number}
            className="grid items-baseline gap-4 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-12"
          >
            <p className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-ink/25">
              {step.number}
            </p>
            <div>
              <h3 className="font-display text-3xl md:text-4xl">{step.title}</h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
