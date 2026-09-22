import { mailto, site } from "@/content/site";
import { Cta } from "@/components/Cta";
import { SplitText } from "@/components/SplitText";

export function Hero() {
  const { hero } = site;

  return (
    <section data-hero className="relative px-8 pb-32 pt-40 md:px-16 md:pb-44 md:pt-52">
      <div aria-hidden="true" className="band absolute inset-0 overflow-hidden bg-gold">
        <svg
          viewBox="0 0 1440 980"
          preserveAspectRatio="none"
          className="absolute left-1/2 top-1/2 h-[140%] w-[118%] -translate-x-1/2 -translate-y-1/2 text-foam"
        >
          <path
            fill="currentColor"
            d="M120 210C250 60 470 90 610 210C750 330 690 70 930 130C1140 180 1260 40 1380 190C1520 360 1340 470 1400 650C1460 840 1220 940 1000 880C790 820 860 640 680 670C490 700 430 920 250 850C40 770-20 540 70 380C130 270 20 300 120 210Z"
          />
          <path
            fill="var(--tangerine)"
            d="M980 540C1130 470 1310 560 1280 720C1250 880 1060 930 940 830C820 730 820 610 980 540Z"
          />
        </svg>
      </div>
      <p className="absolute bottom-8 left-4 z-10 w-[6.6rem] -rotate-[8deg] font-script text-[1.45rem] leading-[0.95] text-note-violet xl:bottom-auto xl:left-auto xl:right-6 xl:top-36 xl:w-[7.25rem] xl:rotate-[8deg] xl:text-[1.7rem]">
        <span data-hero-aside className="block">
          {hero.script}
        </span>
      </p>
      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
        <h1 className="w-full font-display text-[clamp(2.7rem,6vw,7rem)] font-extrabold leading-[0.82] tracking-[-0.01em] text-balance">
          <SplitText text={hero.lines.join(" ")} lines={hero.lines} />
        </h1>
        <p className="mt-6 w-full max-w-lg text-lg leading-snug text-balance md:text-xl">{hero.support}</p>
        <div className="mt-8">
          <Cta href={mailto}>{site.cta}</Cta>
        </div>
      </div>
    </section>
  );
}
