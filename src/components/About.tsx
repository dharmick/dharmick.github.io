import { LinkedInLink } from "@/components/LinkedInLink";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/content/site";

export function About() {
  const { about } = site;

  return (
    <Section id={about.id} labelledBy="about-heading" tone="white">
      <div className="mx-auto max-w-[720px] text-center">
        <SectionHeading id="about-heading">{about.heading}</SectionHeading>
        <p className="section-intro">{about.body}</p>
        <p className="mt-6">
          <LinkedInLink className="text-link font-semibold" />
        </p>
      </div>
    </Section>
  );
}
