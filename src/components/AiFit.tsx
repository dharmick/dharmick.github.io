import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/content/site";

export function AiFit() {
  const { ai } = site;

  return (
    <Section id={ai.id} labelledBy="ai-heading" tone="night">
      <div className="mx-auto max-w-[760px]">
        <SectionHeading id="ai-heading" light align="left">
          {ai.heading}
        </SectionHeading>
        {ai.paragraphs.map((paragraph) => (
          <p key={paragraph} className="section-intro is-left on-night">
            {paragraph}
          </p>
        ))}
        <ul className="ai-points">
          {ai.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
