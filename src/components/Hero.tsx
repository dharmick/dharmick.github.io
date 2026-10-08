import { BookLink } from "@/components/BookLink";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="bg-white px-6 pb-16 pt-16 md:pb-24 md:pt-24 lg:pb-28 lg:pt-28" aria-labelledby="hero-heading">
      <div className="mx-auto flex w-full max-w-[720px] flex-col items-center text-center">
        <h1 id="hero-heading" className="hero-title">
          {site.hero.heading}
        </h1>
        <p className="hero-support">{site.hero.support}</p>
        <div className="mt-8">
          <BookLink>{site.bookLabel}</BookLink>
        </div>
        <p className="mt-4 text-sm text-muted">{site.hero.note}</p>
      </div>
    </section>
  );
}
