import { site } from "@/content/site";

export function LinkedInLink({ className = "" }: { className?: string }) {
  return (
    <a
      href={site.linkedin}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {site.about.linkedinLabel}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
