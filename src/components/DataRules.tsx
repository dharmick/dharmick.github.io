import { Section, SectionHeading, SectionIntro } from "@/components/Section";
import { site } from "@/content/site";

export function DataRules() {
  const { data } = site;

  return (
    <Section id={data.id} labelledBy="data-heading" tone="foam">
      <SectionHeading id="data-heading">{data.heading}</SectionHeading>
      <SectionIntro>{data.intro}</SectionIntro>
      <ul className="mx-auto mt-10 grid max-w-[900px] list-none gap-5 md:grid-cols-2">
        {data.rules.map((rule) => (
          <li key={rule.title} className="card">
            <h3 className="card-title">{rule.title}</h3>
            <p className="card-body">{rule.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
