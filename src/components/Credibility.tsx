import { site } from "@/content/site";
import { Section } from "@/components/Section";

export function Credibility() {
  const { credibility } = site;

  return (
    <Section className="pb-20 pt-4 md:pb-28">
      <p className="label">{credibility.label}</p>
      <ul className="mt-8 flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-x-16 md:gap-y-8">
        {credibility.companies.map((company) => (
          <li key={company.name} className="max-w-xs">
            <p className="text-lg">{company.name}</p>
            <p className="mt-1 text-sm text-muted">
              {company.role}
              <span aria-hidden="true"> · </span>
              {company.years}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
