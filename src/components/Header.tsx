import { mailto, site } from "@/content/site";
import { Cta } from "@/components/Cta";

const tones = {
  gold: "bg-gold",
  lime: "bg-lime",
  clay: "bg-clay",
  mist: "bg-mist",
} as const;

export function Header() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-40 px-3">
      <a
        href="#main"
        className="pointer-events-auto sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-0 focus:z-50 focus:rounded-full focus:bg-sheet focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="pointer-events-auto mx-auto w-full max-w-3xl">
        <ul className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`pill px-3 py-2 text-sm text-ink sm:px-3.5 ${tones[item.tone]}`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <Cta href={mailto} compact>
              {site.cta}
            </Cta>
          </li>
        </ul>
      </nav>
    </header>
  );
}
