import { BookLink } from "@/components/BookLink";
import { LinkedInLink } from "@/components/LinkedInLink";
import { emailHref, site, telHref } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  const { contact } = site;

  return (
    <footer>
      <section id={contact.id} aria-labelledby="contact-heading" className="band-night bg-night py-16 text-white md:py-[5.25rem]">
        <div className="mx-auto w-full max-w-[720px] px-6 text-center">
          <h2 id="contact-heading" className="section-title on-night">
            {contact.heading}
          </h2>
          <p className="section-intro on-night">{contact.support}</p>
          <div className="mt-8">
            <BookLink>{site.bookLabel}</BookLink>
          </div>
          <address className="mt-6 space-y-2 text-base not-italic text-white/80">
            <p>
              {contact.emailLead}{" "}
              <a href={emailHref} className="text-link on-night">
                {site.email}
              </a>
            </p>
            <p>
              {contact.phoneLead}{" "}
              <a href={telHref} className="text-link on-night">
                {site.phone}
              </a>
            </p>
            <p>
              {site.location}. {contact.reply}
            </p>
          </address>
          <p className="mt-4">
            <LinkedInLink className="text-link on-night font-semibold" />
          </p>
        </div>
      </section>
      <div className="border-t border-line bg-white px-6 py-6 text-center text-sm text-muted">
        <p>
          {site.name}
          <span aria-hidden="true"> · </span>
          {year}
        </p>
      </div>
    </footer>
  );
}
