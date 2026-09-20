import { mailto, site, telHref } from "@/content/site";
import { IconLink } from "@/components/IconLink";
import { Section } from "@/components/Section";
import { LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";

export function Contact() {
  const { contact } = site;

  return (
    <Section id="contact" tone="sage" className="py-28 md:py-36 lg:py-44">
      <p className="label">{contact.label}</p>
      <h2 className="font-display mt-6 max-w-[18ch] text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.1] tracking-[-0.02em]">
        {contact.heading}
      </h2>
      <p className="mt-16 flex items-center gap-[0.28em] font-display text-[clamp(1.6rem,5vw,4.25rem)] leading-[1.1] tracking-[-0.02em]">
        <MailIcon className="size-[0.95em] shrink-0" />
        <a
          href={mailto}
          className="underline decoration-transparent underline-offset-[0.12em] transition-[text-decoration-color] duration-200 hover:decoration-current"
        >
          {site.email}
        </a>
      </p>
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-lg">
        <li>
          <IconLink href={site.linkedin} icon={<LinkedInIcon />} external>
            LinkedIn
          </IconLink>
        </li>
        <li>
          <IconLink href={telHref} icon={<PhoneIcon className="size-5" />}>
            {site.phoneDisplay}
          </IconLink>
        </li>
      </ul>
      <p className="mt-10 flex max-w-md items-start gap-2.5 text-sm text-muted">
        <PinIcon className="mt-0.5 size-3.5 shrink-0" />
        <span>
          {site.location}. {site.replyNote}
        </span>
      </p>
    </Section>
  );
}
