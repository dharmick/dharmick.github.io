import Image from "next/image";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/content/site";

export function Why() {
  const { why } = site;

  return (
    <Section id={why.id} labelledBy="why-heading" tone="white">
      <SectionHeading id="why-heading">{why.heading}</SectionHeading>
      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[16rem_1fr] lg:gap-14">
        <Image
          src="/dharmik-joshi.jpg"
          alt="Dharmik Joshi"
          width={1024}
          height={1024}
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
