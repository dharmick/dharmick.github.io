import { site } from "@/content/site";
import { Section } from "@/components/Section";

export function Solutions() {
  const { solutions } = site;

  return (
    <Section
      id="solutions"
      tone="sage"
      className="py-28 md:py-36 lg:py-44"
    >
      <p className="label">{solutions.label}</p>
      <h2 className="font-display mt-6 max-w-[18ch] text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-[-0.02em]">
        {solutions.heading}
      </h2>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/80">
        {solutions.intro}
      </p>
      <ol className="mt-20 divide-y divide-ink/15 border-y border-ink/15">
        {solutions.items.map((item) => (
          <li
            key={item.number}
            className="grid gap-6 py-14 md:grid-cols-[5rem_1fr] md:gap-12 lg:grid-cols-[5rem_minmax(0,0.9fr)_minmax(0,1fr)]"
          >
            <p className="font-display text-3xl text-muted md:pt-1">
              {item.number}
            </p>
            <div>
              <h3 className="font-display text-3xl leading-tight md:text-4xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm text-muted">{item.who}</p>
            </div>
            <div className="max-w-xl space-y-4 text-base leading-relaxed md:col-start-2 lg:col-start-3">
              <p>{item.pain}</p>
              <p>{item.build}</p>
              <p>
                <span className="label">Done means</span>
                <span className="mt-2 block">{item.done}</span>
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
