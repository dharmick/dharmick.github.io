import { Section, SectionHeading, SectionIntro } from "@/components/Section";
import { site } from "@/content/site";

export function Jobs() {
  const { work } = site;

  return (
    <Section id={work.id} labelledBy="work-heading" tone="white">
      <SectionHeading id="work-heading">{work.heading}</SectionHeading>
      <SectionIntro>{work.intro}</SectionIntro>
      <div className="mt-12 space-y-12">
        {work.groups.map((group) => (
          <div key={group.title}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h3 className="group-title">{group.title}</h3>
              {"badge" in group ? <span className="group-badge">{group.badge}</span> : null}
            </div>
            <ul className="mt-5 grid list-none gap-5 md:grid-cols-2">
              {group.items.map((item) => (
                <li key={item.n} className="card">
                  <p className="step-index">{item.n}</p>
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-body">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
