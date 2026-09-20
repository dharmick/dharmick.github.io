import { mailto, site } from "@/content/site";
import { MailIcon } from "@/components/icons";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-3 focus:z-30 focus:bg-paper focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-x-4 gap-y-3 px-6 py-4 md:px-12 lg:px-16"
      >
        <a href="#main" className="text-sm tracking-wide">
          {site.name}
        </a>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={mailto}
            className="inline-flex items-center gap-2 bg-forest px-3.5 py-2 text-xs tracking-wide text-paper transition-colors hover:bg-ink"
          >
            <MailIcon className="size-4" />
            {site.email}
          </a>
        </div>
      </nav>
    </header>
  );
}
