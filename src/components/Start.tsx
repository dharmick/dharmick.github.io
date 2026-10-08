import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/content/site";

export function Start() {
  const { start } = site;

  return (
    <Section id={start.id} labelledBy="start-heading" tone="mist">
      <div className="mx-auto max-w-[720px] text-center">
        <SectionHeading id="start-heading">{start.heading}</SectionHeading>
        {start.paragraphs.map((paragraph) => (
          <p key={paragraph} className="section-intro">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
