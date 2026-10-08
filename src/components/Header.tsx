import { BookLink } from "@/components/BookLink";
import { MobileNav } from "@/components/MobileNav";
import { site } from "@/content/site";

function NavList({ cta }: { cta: boolean }) {
  return (
    <ul className={cta ? "flex items-center gap-8" : "flex flex-col gap-1"}>
      {site.nav.map((item) => (
        <li key={item.href}>
          <a href={item.href} className={cta ? "nav-link" : "nav-link block rounded-lg px-3 py-2.5"}>
            {item.label}
          </a>
        </li>
      ))}
      <li className={cta ? "" : "px-3 pt-2"}>
        <BookLink>{site.navCta}</BookLink>
      </li>
    </ul>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-sm">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-6 py-3.5">
        <a href="#main" className="wordmark">
          {site.name}
        </a>
        <nav aria-label="Primary" className="hidden lg:block">
          <NavList cta />
        </nav>
        <MobileNav>
          <summary className="menu-button">
            <span className="sr-only">Open menu</span>
            <svg className="menu-open" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path
                d="M2 4.5h14M2 9h14M2 13.5h14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <svg className="menu-close" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path
                d="M4 4l10 10M14 4L4 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </summary>
          <nav aria-label="Primary" className="menu-panel">
            <NavList cta={false} />
          </nav>
        </MobileNav>
      </div>
    </header>
  );
}
