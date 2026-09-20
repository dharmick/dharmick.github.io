import { mailto, site, telHref } from "@/content/site";
import { IconLink } from "@/components/IconLink";
import { LinkedInIcon, MailIcon, PhoneIcon } from "@/components/icons";

export function Hero() {
  const { hero } = site;

  return (
    <section className="bg-paper">
      <div className="mx-auto flex min-h-[calc(100svh-4.25rem)] max-w-[1320px] flex-col justify-end px-6 pb-16 pt-24 md:px-12 md:pb-24 md:pt-32 lg:px-16">
        <h1 className="font-display reveal max-w-[18ch] text-[clamp(2.5rem,8vw,6.25rem)] leading-[0.98] tracking-[-0.02em]">
          {hero.line1}
          <br />
          {hero.line2}
          <br />
          <em>{hero.line3}</em>
        </h1>
        <p className="reveal mt-10 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
          {hero.support}
        </p>
        <ul className="reveal mt-12 flex flex-wrap gap-x-8 gap-y-3 text-base">
          <li>
            <IconLink href={mailto} icon={<MailIcon className="size-5" />}>
              {site.email}
            </IconLink>
          </li>
          <li>
            <IconLink href={site.linkedin} icon={<LinkedInIcon />} external>
              LinkedIn
            </IconLink>
          </li>
          <li>
            <IconLink href={telHref} icon={<PhoneIcon className="size-5" />}>
              Call
            </IconLink>
          </li>
        </ul>
      </div>
    </section>
  );
}
