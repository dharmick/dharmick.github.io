import { mailto, site, telHref } from "@/content/site";
import { Cta } from "@/components/Cta";
import { SplitText } from "@/components/SplitText";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="band-top scroll-mt-28 bg-footer text-center text-sheet">
      <div className="mx-auto max-w-4xl px-8 py-24 md:px-16 md:py-36">
        <h2 className="mx-auto max-w-full font-display text-[clamp(2.65rem,9vw,6.5rem)] font-extrabold leading-[0.8] tracking-[-0.01em]">
          <SplitText text={site.contact.heading} />
        </h2>
        <p className="mx-auto mt-5 max-w-[17rem] text-balance text-base leading-snug sm:max-w-md sm:text-lg">
          {site.contact.support}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Cta href={mailto} tone="hot">
            {site.email}
          </Cta>
          <a
            href={telHref}
            className="pill border-2 border-sheet bg-transparent px-5 py-3 text-sheet"
          >
            {site.phoneDisplay}
          </a>
          <a
            href={site.linkedin}
            className="pill border-2 border-sheet bg-transparent px-5 py-3 text-sheet"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-6 text-sm text-sheet/80">
          {site.replyNote}
          <span aria-hidden="true"> · </span>
          {site.location}
        </p>
      </div>
      <div className="px-8 pb-12 text-sm text-sheet/80">
        <p>
          {site.name}
          <span aria-hidden="true"> · </span>
          {year}
        </p>
      </div>
    </footer>
  );
}
