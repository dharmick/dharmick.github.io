import { ArrowIcon } from "@/components/ArrowIcon";

const tones = {
  hot: "bg-hot",
  gold: "bg-gold",
  clay: "bg-clay",
  mist: "bg-mist",
  sheet: "bg-sheet",
} as const;

export function Cta({
  href,
  children,
  tone = "hot",
  compact = false,
}: {
  href: string;
  children: string;
  tone?: keyof typeof tones;
  compact?: boolean;
}) {
  const size = compact ? "px-3 py-2 text-sm" : "max-w-full px-5 py-3";

  return (
    <a href={href} className={`pill text-ink ${size} ${tones[tone]}`}>
      {children}
      <ArrowIcon />
    </a>
  );
}
