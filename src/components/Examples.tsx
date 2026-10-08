import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/content/site";

export function Examples() {
  const { examples } = site;

  return (
    <Section id={examples.id} labelledBy="examples-heading" tone="mist">
      <SectionHeading id="examples-heading">{examples.heading}</SectionHeading>
      <p className="note">{examples.disclaimer}</p>
      <ul className="mt-8 grid list-none gap-5 md:grid-cols-2">
        {examples.items.map((item) => (
          <li key={item.title} className="card">
            <h3 className="example-title">{item.title}</h3>
            <dl>
              <dt>Problem</dt>
              <dd>{item.problem}</dd>
              <dt>Workflow idea</dt>
              <dd>{item.idea}</dd>
              <dt>Aim</dt>
              <dd>{item.aim}</dd>
            </dl>
          </li>
        ))}
      </ul>
    </Section>
  );
}
