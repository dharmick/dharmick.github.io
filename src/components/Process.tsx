import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/content/site";

export function Process() {
  const { process } = site;

  return (
    <Section id={process.id} labelledBy="process-heading" tone="white">
      <SectionHeading id="process-heading">{process.heading}</SectionHeading>
      <ol className="mx-auto mt-10 grid max-w-[800px] list-none gap-5">
        {process.steps.map((step) => (
          <li key={step.n} className="card flex items-start gap-5">
            <span className="step-number" aria-hidden="true">
              {step.n}
            </span>
            <div>
              <h3 className="card-title">{step.title}</h3>
              <p className="card-body">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
