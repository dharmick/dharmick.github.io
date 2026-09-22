import { site } from "@/content/site";

export function Ribbon() {
  const phrase = `${site.ribbon}  ·  `;
  const repeated = phrase.repeat(8);

  return (
    <div className="relative z-20 overflow-hidden py-10 md:py-14">
      <div data-marquee className="bg-lime py-4 -rotate-2">
      <p className="ribbon-static sr-only">{site.ribbon}</p>
      <div aria-hidden="true" className="marquee-track flex w-max">
        <p className="px-3 font-display text-[clamp(1.6rem,3vw,2.6rem)] font-extrabold tracking-[-0.01em]">
          {repeated}
        </p>
        <p className="px-3 font-display text-[clamp(1.6rem,3vw,2.6rem)] font-extrabold tracking-[-0.01em]">
          {repeated}
        </p>
      </div>
      </div>
    </div>
  );
}
