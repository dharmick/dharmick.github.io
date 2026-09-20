type IconProps = {
  className?: string;
};

const iconClass = (className: string) => `overflow-visible ${className}`;

export function MailIcon({ className = "size-4" }: IconProps) {
  return (
    <svg
      className={iconClass(className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.75" y="4.75" width="18.5" height="14.5" rx="2" />
      <path d="m3.5 7 8.5 6.25L20.5 7" />
    </svg>
  );
}

export function PhoneIcon({ className = "size-4" }: IconProps) {
  return (
    <svg
      className={iconClass(className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8.3 3.75h2.4c.48 0 .88.36.96.83l.42 2.5a1 1 0 0 1-.28.9l-1.35 1.35a12.2 12.2 0 0 0 5.39 5.39l1.35-1.35a1 1 0 0 1 .9-.28l2.5.42c.47.08.83.48.83.96v2.4c0 .6-.5 1.08-1.1 1.02-4.55-.5-10.52-4.4-12.92-10.72-.3-.8.16-1.67.9-1.82Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "size-4" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.28v1.56h.05c.46-.86 1.57-1.77 3.23-1.77 3.45 0 4.09 2.27 4.09 5.23v6.43zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.23 0z" />
    </svg>
  );
}

export function PinIcon({ className = "size-4" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s6.5-5.1 6.5-10.2a6.5 6.5 0 1 0-13 0C5.5 15.9 12 21 12 21Z" />
      <circle cx="12" cy="10.8" r="2.1" />
    </svg>
  );
}
