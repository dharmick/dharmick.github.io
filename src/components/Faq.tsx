import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/content/site";

export function Faq() {
  const { faq } = site;

  return (
    <Section id={faq.id} labelledBy="faq-heading" tone="foam">
      <SectionHeading id="faq-heading">{faq.heading}</SectionHeading>
      <div className="mx-auto mt-10 grid max-w-[800px] gap-4">
        {faq.items.map((item) => (
          <article key={item.q} className="faq-item">
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
