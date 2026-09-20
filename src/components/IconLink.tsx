type IconLinkProps = {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function IconLink({
  href,
  icon,
  children,
  className = "",
  external = false,
}: IconLinkProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2.5 ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="inline-flex shrink-0 overflow-visible opacity-70 transition-opacity duration-200 group-hover:opacity-100">
        {icon}
      </span>
      <span className="underline decoration-transparent underline-offset-[0.35em] transition-[text-decoration-color] duration-200 group-hover:decoration-current">
        {children}
      </span>
    </a>
  );
}
