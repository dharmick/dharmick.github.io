import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-[1320px] px-6 py-10 text-right text-sm text-muted md:px-12 lg:px-16">
        <p>
          {site.name}
          <span aria-hidden="true"> · </span>
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
