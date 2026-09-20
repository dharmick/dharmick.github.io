import Image from "next/image";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import portrait from "@/assets/portrait.jpg";

export function About() {
  const { about } = site;

  return (
    <Section id="about" className="py-28 md:py-36 lg:py-44">
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        <div className="min-w-0 max-w-xl md:shrink-0">
          <p className="label">{about.label}</p>
          <h2 className="font-display mt-6 max-w-[16ch] text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-[-0.02em]">
            {about.heading}
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <figure className="flex justify-center md:flex-1">
          <div className="relative size-44 overflow-hidden rounded-full md:size-60 lg:size-72">
            <Image
              src={portrait}
              alt={site.name}
              className="size-full scale-[1.08] object-cover object-[center_20%]"
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 15rem, 11rem"
            />
          </div>
        </figure>
      </div>
    </Section>
  );
}
