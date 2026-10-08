import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/content/site";

export function Why() {
  const { why } = site;

  return (
    <Section id={why.id} labelledBy="why-heading" tone="white">
      <SectionHeading id="why-heading">{why.heading}</SectionHeading>
      <ul className="mt-10 grid list-none gap-5 lg:grid-cols-3">
        {why.points.map((point) => (
          <li key={point.title} className="card">
            <h3 className="card-title">{point.title}</h3>
            <p className="card-body">{point.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
