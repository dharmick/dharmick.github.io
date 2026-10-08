import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/content/site";

export function Why() {
  const { why } = site;

  return (
    <Section id={why.id} labelledBy="why-heading" tone="white">
      <SectionHeading id="why-heading">{why.heading}</SectionHeading>
      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[16rem_1fr] lg:gap-14">
        {/* Plain img so the static export serves /dharmik-joshi.jpg directly. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/dharmik-joshi.jpg"
          alt="Dharmik Joshi"
          width={256}
          height={256}
          loading="eager"
          decoding="sync"
          className="mx-auto h-56 w-56 rounded-full object-cover sm:h-64 sm:w-64"
        />
        <ul className="grid list-none gap-5">
          {why.points.map((point) => (
            <li key={point.title} className="card">
              <h3 className="card-title">{point.title}</h3>
              <p className="card-body">{point.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
